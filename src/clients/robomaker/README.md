# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### RoboMakerClient <a name="aws-cdk-sdk.robomaker.RoboMakerClient"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerClient.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `batchDeleteWorlds` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.batchDeleteWorlds"></a>

```typescript
public batchDeleteWorlds(input: RoboMakerBatchDeleteWorldsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerBatchDeleteWorldsRequest`](#aws-cdk-sdk.robomaker.RoboMakerBatchDeleteWorldsRequest)

---

##### `batchDescribeSimulationJob` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.batchDescribeSimulationJob"></a>

```typescript
public batchDescribeSimulationJob(input: RoboMakerBatchDescribeSimulationJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerBatchDescribeSimulationJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerBatchDescribeSimulationJobRequest)

---

##### `cancelDeploymentJob` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.cancelDeploymentJob"></a>

```typescript
public cancelDeploymentJob(input: RoboMakerCancelDeploymentJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerCancelDeploymentJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerCancelDeploymentJobRequest)

---

##### `cancelSimulationJob` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.cancelSimulationJob"></a>

```typescript
public cancelSimulationJob(input: RoboMakerCancelSimulationJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerCancelSimulationJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerCancelSimulationJobRequest)

---

##### `cancelSimulationJobBatch` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.cancelSimulationJobBatch"></a>

```typescript
public cancelSimulationJobBatch(input: RoboMakerCancelSimulationJobBatchRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerCancelSimulationJobBatchRequest`](#aws-cdk-sdk.robomaker.RoboMakerCancelSimulationJobBatchRequest)

---

##### `cancelWorldExportJob` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.cancelWorldExportJob"></a>

```typescript
public cancelWorldExportJob(input: RoboMakerCancelWorldExportJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerCancelWorldExportJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerCancelWorldExportJobRequest)

---

##### `cancelWorldGenerationJob` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.cancelWorldGenerationJob"></a>

```typescript
public cancelWorldGenerationJob(input: RoboMakerCancelWorldGenerationJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerCancelWorldGenerationJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerCancelWorldGenerationJobRequest)

---

##### `createDeploymentJob` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.createDeploymentJob"></a>

```typescript
public createDeploymentJob(input: RoboMakerCreateDeploymentJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerCreateDeploymentJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerCreateDeploymentJobRequest)

---

##### `createFleet` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.createFleet"></a>

```typescript
public createFleet(input: RoboMakerCreateFleetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerCreateFleetRequest`](#aws-cdk-sdk.robomaker.RoboMakerCreateFleetRequest)

---

##### `createRobot` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.createRobot"></a>

```typescript
public createRobot(input: RoboMakerCreateRobotRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerCreateRobotRequest`](#aws-cdk-sdk.robomaker.RoboMakerCreateRobotRequest)

---

##### `createRobotApplication` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.createRobotApplication"></a>

```typescript
public createRobotApplication(input: RoboMakerCreateRobotApplicationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerCreateRobotApplicationRequest`](#aws-cdk-sdk.robomaker.RoboMakerCreateRobotApplicationRequest)

---

##### `createRobotApplicationVersion` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.createRobotApplicationVersion"></a>

```typescript
public createRobotApplicationVersion(input: RoboMakerCreateRobotApplicationVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerCreateRobotApplicationVersionRequest`](#aws-cdk-sdk.robomaker.RoboMakerCreateRobotApplicationVersionRequest)

---

##### `createSimulationApplication` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.createSimulationApplication"></a>

```typescript
public createSimulationApplication(input: RoboMakerCreateSimulationApplicationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationRequest`](#aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationRequest)

---

##### `createSimulationApplicationVersion` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.createSimulationApplicationVersion"></a>

```typescript
public createSimulationApplicationVersion(input: RoboMakerCreateSimulationApplicationVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationVersionRequest`](#aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationVersionRequest)

---

##### `createSimulationJob` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.createSimulationJob"></a>

```typescript
public createSimulationJob(input: RoboMakerCreateSimulationJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerCreateSimulationJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerCreateSimulationJobRequest)

---

##### `createWorldExportJob` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.createWorldExportJob"></a>

```typescript
public createWorldExportJob(input: RoboMakerCreateWorldExportJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerCreateWorldExportJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerCreateWorldExportJobRequest)

---

##### `createWorldGenerationJob` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.createWorldGenerationJob"></a>

```typescript
public createWorldGenerationJob(input: RoboMakerCreateWorldGenerationJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerCreateWorldGenerationJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerCreateWorldGenerationJobRequest)

---

##### `createWorldTemplate` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.createWorldTemplate"></a>

```typescript
public createWorldTemplate(input: RoboMakerCreateWorldTemplateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerCreateWorldTemplateRequest`](#aws-cdk-sdk.robomaker.RoboMakerCreateWorldTemplateRequest)

---

##### `deleteFleet` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.deleteFleet"></a>

```typescript
public deleteFleet(input: RoboMakerDeleteFleetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDeleteFleetRequest`](#aws-cdk-sdk.robomaker.RoboMakerDeleteFleetRequest)

---

##### `deleteRobot` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.deleteRobot"></a>

```typescript
public deleteRobot(input: RoboMakerDeleteRobotRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDeleteRobotRequest`](#aws-cdk-sdk.robomaker.RoboMakerDeleteRobotRequest)

---

##### `deleteRobotApplication` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.deleteRobotApplication"></a>

```typescript
public deleteRobotApplication(input: RoboMakerDeleteRobotApplicationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDeleteRobotApplicationRequest`](#aws-cdk-sdk.robomaker.RoboMakerDeleteRobotApplicationRequest)

---

##### `deleteSimulationApplication` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.deleteSimulationApplication"></a>

```typescript
public deleteSimulationApplication(input: RoboMakerDeleteSimulationApplicationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDeleteSimulationApplicationRequest`](#aws-cdk-sdk.robomaker.RoboMakerDeleteSimulationApplicationRequest)

---

##### `deleteWorldTemplate` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.deleteWorldTemplate"></a>

```typescript
public deleteWorldTemplate(input: RoboMakerDeleteWorldTemplateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDeleteWorldTemplateRequest`](#aws-cdk-sdk.robomaker.RoboMakerDeleteWorldTemplateRequest)

---

##### `deregisterRobot` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.deregisterRobot"></a>

```typescript
public deregisterRobot(input: RoboMakerDeregisterRobotRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDeregisterRobotRequest`](#aws-cdk-sdk.robomaker.RoboMakerDeregisterRobotRequest)

---

##### `describeDeploymentJob` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.describeDeploymentJob"></a>

```typescript
public describeDeploymentJob(input: RoboMakerDescribeDeploymentJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDescribeDeploymentJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerDescribeDeploymentJobRequest)

---

##### `describeFleet` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.describeFleet"></a>

```typescript
public describeFleet(input: RoboMakerDescribeFleetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDescribeFleetRequest`](#aws-cdk-sdk.robomaker.RoboMakerDescribeFleetRequest)

---

##### `describeRobot` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.describeRobot"></a>

```typescript
public describeRobot(input: RoboMakerDescribeRobotRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDescribeRobotRequest`](#aws-cdk-sdk.robomaker.RoboMakerDescribeRobotRequest)

---

##### `describeRobotApplication` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.describeRobotApplication"></a>

```typescript
public describeRobotApplication(input: RoboMakerDescribeRobotApplicationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDescribeRobotApplicationRequest`](#aws-cdk-sdk.robomaker.RoboMakerDescribeRobotApplicationRequest)

---

##### `describeSimulationApplication` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.describeSimulationApplication"></a>

```typescript
public describeSimulationApplication(input: RoboMakerDescribeSimulationApplicationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationApplicationRequest`](#aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationApplicationRequest)

---

##### `describeSimulationJob` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.describeSimulationJob"></a>

```typescript
public describeSimulationJob(input: RoboMakerDescribeSimulationJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobRequest)

---

##### `describeSimulationJobBatch` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.describeSimulationJobBatch"></a>

```typescript
public describeSimulationJobBatch(input: RoboMakerDescribeSimulationJobBatchRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobBatchRequest`](#aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobBatchRequest)

---

##### `describeWorld` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.describeWorld"></a>

```typescript
public describeWorld(input: RoboMakerDescribeWorldRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDescribeWorldRequest`](#aws-cdk-sdk.robomaker.RoboMakerDescribeWorldRequest)

---

##### `describeWorldExportJob` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.describeWorldExportJob"></a>

```typescript
public describeWorldExportJob(input: RoboMakerDescribeWorldExportJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDescribeWorldExportJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerDescribeWorldExportJobRequest)

---

##### `describeWorldGenerationJob` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.describeWorldGenerationJob"></a>

```typescript
public describeWorldGenerationJob(input: RoboMakerDescribeWorldGenerationJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDescribeWorldGenerationJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerDescribeWorldGenerationJobRequest)

---

##### `describeWorldTemplate` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.describeWorldTemplate"></a>

```typescript
public describeWorldTemplate(input: RoboMakerDescribeWorldTemplateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDescribeWorldTemplateRequest`](#aws-cdk-sdk.robomaker.RoboMakerDescribeWorldTemplateRequest)

---

##### `fetchWorldTemplateBody` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.fetchWorldTemplateBody"></a>

```typescript
public fetchWorldTemplateBody(input: RoboMakerGetWorldTemplateBodyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerGetWorldTemplateBodyRequest`](#aws-cdk-sdk.robomaker.RoboMakerGetWorldTemplateBodyRequest)

---

##### `listDeploymentJobs` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.listDeploymentJobs"></a>

```typescript
public listDeploymentJobs(input: RoboMakerListDeploymentJobsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerListDeploymentJobsRequest`](#aws-cdk-sdk.robomaker.RoboMakerListDeploymentJobsRequest)

---

##### `listFleets` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.listFleets"></a>

```typescript
public listFleets(input: RoboMakerListFleetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerListFleetsRequest`](#aws-cdk-sdk.robomaker.RoboMakerListFleetsRequest)

---

##### `listRobotApplications` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.listRobotApplications"></a>

```typescript
public listRobotApplications(input: RoboMakerListRobotApplicationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerListRobotApplicationsRequest`](#aws-cdk-sdk.robomaker.RoboMakerListRobotApplicationsRequest)

---

##### `listRobots` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.listRobots"></a>

```typescript
public listRobots(input: RoboMakerListRobotsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerListRobotsRequest`](#aws-cdk-sdk.robomaker.RoboMakerListRobotsRequest)

---

##### `listSimulationApplications` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.listSimulationApplications"></a>

```typescript
public listSimulationApplications(input: RoboMakerListSimulationApplicationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerListSimulationApplicationsRequest`](#aws-cdk-sdk.robomaker.RoboMakerListSimulationApplicationsRequest)

---

##### `listSimulationJobBatches` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.listSimulationJobBatches"></a>

```typescript
public listSimulationJobBatches(input: RoboMakerListSimulationJobBatchesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerListSimulationJobBatchesRequest`](#aws-cdk-sdk.robomaker.RoboMakerListSimulationJobBatchesRequest)

---

##### `listSimulationJobs` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.listSimulationJobs"></a>

```typescript
public listSimulationJobs(input: RoboMakerListSimulationJobsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerListSimulationJobsRequest`](#aws-cdk-sdk.robomaker.RoboMakerListSimulationJobsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: RoboMakerListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerListTagsForResourceRequest`](#aws-cdk-sdk.robomaker.RoboMakerListTagsForResourceRequest)

---

##### `listWorldExportJobs` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.listWorldExportJobs"></a>

```typescript
public listWorldExportJobs(input: RoboMakerListWorldExportJobsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerListWorldExportJobsRequest`](#aws-cdk-sdk.robomaker.RoboMakerListWorldExportJobsRequest)

---

##### `listWorldGenerationJobs` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.listWorldGenerationJobs"></a>

```typescript
public listWorldGenerationJobs(input: RoboMakerListWorldGenerationJobsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerListWorldGenerationJobsRequest`](#aws-cdk-sdk.robomaker.RoboMakerListWorldGenerationJobsRequest)

---

##### `listWorlds` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.listWorlds"></a>

```typescript
public listWorlds(input: RoboMakerListWorldsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerListWorldsRequest`](#aws-cdk-sdk.robomaker.RoboMakerListWorldsRequest)

---

##### `listWorldTemplates` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.listWorldTemplates"></a>

```typescript
public listWorldTemplates(input: RoboMakerListWorldTemplatesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerListWorldTemplatesRequest`](#aws-cdk-sdk.robomaker.RoboMakerListWorldTemplatesRequest)

---

##### `registerRobot` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.registerRobot"></a>

```typescript
public registerRobot(input: RoboMakerRegisterRobotRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerRegisterRobotRequest`](#aws-cdk-sdk.robomaker.RoboMakerRegisterRobotRequest)

---

##### `restartSimulationJob` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.restartSimulationJob"></a>

```typescript
public restartSimulationJob(input: RoboMakerRestartSimulationJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerRestartSimulationJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerRestartSimulationJobRequest)

---

##### `startSimulationJobBatch` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.startSimulationJobBatch"></a>

```typescript
public startSimulationJobBatch(input: RoboMakerStartSimulationJobBatchRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerStartSimulationJobBatchRequest`](#aws-cdk-sdk.robomaker.RoboMakerStartSimulationJobBatchRequest)

---

##### `syncDeploymentJob` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.syncDeploymentJob"></a>

```typescript
public syncDeploymentJob(input: RoboMakerSyncDeploymentJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSyncDeploymentJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerSyncDeploymentJobRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.tagResource"></a>

```typescript
public tagResource(input: RoboMakerTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerTagResourceRequest`](#aws-cdk-sdk.robomaker.RoboMakerTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.untagResource"></a>

```typescript
public untagResource(input: RoboMakerUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerUntagResourceRequest`](#aws-cdk-sdk.robomaker.RoboMakerUntagResourceRequest)

---

##### `updateRobotApplication` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.updateRobotApplication"></a>

```typescript
public updateRobotApplication(input: RoboMakerUpdateRobotApplicationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerUpdateRobotApplicationRequest`](#aws-cdk-sdk.robomaker.RoboMakerUpdateRobotApplicationRequest)

---

##### `updateSimulationApplication` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.updateSimulationApplication"></a>

```typescript
public updateSimulationApplication(input: RoboMakerUpdateSimulationApplicationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerUpdateSimulationApplicationRequest`](#aws-cdk-sdk.robomaker.RoboMakerUpdateSimulationApplicationRequest)

---

##### `updateWorldTemplate` <a name="aws-cdk-sdk.robomaker.RoboMakerClient.updateWorldTemplate"></a>

```typescript
public updateWorldTemplate(input: RoboMakerUpdateWorldTemplateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerUpdateWorldTemplateRequest`](#aws-cdk-sdk.robomaker.RoboMakerUpdateWorldTemplateRequest)

---




## Structs <a name="Structs"></a>

### RoboMakerBatchDeleteWorldsRequest <a name="aws-cdk-sdk.robomaker.RoboMakerBatchDeleteWorldsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerBatchDeleteWorldsRequest: robomaker.RoboMakerBatchDeleteWorldsRequest = { ... }
```

##### `worlds`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerBatchDeleteWorldsRequest.property.worlds"></a>

- *Type:* `string`[]

---

### RoboMakerBatchDeleteWorldsResponse <a name="aws-cdk-sdk.robomaker.RoboMakerBatchDeleteWorldsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerBatchDeleteWorldsResponse: robomaker.RoboMakerBatchDeleteWorldsResponse = { ... }
```

##### `unprocessedWorlds`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerBatchDeleteWorldsResponse.property.unprocessedWorlds"></a>

- *Type:* `string`[]

---

### RoboMakerBatchDescribeSimulationJobRequest <a name="aws-cdk-sdk.robomaker.RoboMakerBatchDescribeSimulationJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerBatchDescribeSimulationJobRequest: robomaker.RoboMakerBatchDescribeSimulationJobRequest = { ... }
```

##### `jobs`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerBatchDescribeSimulationJobRequest.property.jobs"></a>

- *Type:* `string`[]

---

### RoboMakerBatchDescribeSimulationJobResponse <a name="aws-cdk-sdk.robomaker.RoboMakerBatchDescribeSimulationJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerBatchDescribeSimulationJobResponse: robomaker.RoboMakerBatchDescribeSimulationJobResponse = { ... }
```

##### `jobs`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerBatchDescribeSimulationJobResponse.property.jobs"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSimulationJob`](#aws-cdk-sdk.robomaker.RoboMakerSimulationJob)[]

---

##### `unprocessedJobs`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerBatchDescribeSimulationJobResponse.property.unprocessedJobs"></a>

- *Type:* `string`[]

---

### RoboMakerBatchPolicy <a name="aws-cdk-sdk.robomaker.RoboMakerBatchPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerBatchPolicy: robomaker.RoboMakerBatchPolicy = { ... }
```

##### `maxConcurrency`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerBatchPolicy.property.maxConcurrency"></a>

- *Type:* `number`

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerBatchPolicy.property.timeoutInSeconds"></a>

- *Type:* `number`

---

### RoboMakerCancelDeploymentJobRequest <a name="aws-cdk-sdk.robomaker.RoboMakerCancelDeploymentJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerCancelDeploymentJobRequest: robomaker.RoboMakerCancelDeploymentJobRequest = { ... }
```

##### `job`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCancelDeploymentJobRequest.property.job"></a>

- *Type:* `string`

---

### RoboMakerCancelDeploymentJobResponse <a name="aws-cdk-sdk.robomaker.RoboMakerCancelDeploymentJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerCancelDeploymentJobResponse: robomaker.RoboMakerCancelDeploymentJobResponse = { ... }
```

### RoboMakerCancelSimulationJobBatchRequest <a name="aws-cdk-sdk.robomaker.RoboMakerCancelSimulationJobBatchRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerCancelSimulationJobBatchRequest: robomaker.RoboMakerCancelSimulationJobBatchRequest = { ... }
```

##### `batch`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCancelSimulationJobBatchRequest.property.batch"></a>

- *Type:* `string`

---

### RoboMakerCancelSimulationJobBatchResponse <a name="aws-cdk-sdk.robomaker.RoboMakerCancelSimulationJobBatchResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerCancelSimulationJobBatchResponse: robomaker.RoboMakerCancelSimulationJobBatchResponse = { ... }
```

### RoboMakerCancelSimulationJobRequest <a name="aws-cdk-sdk.robomaker.RoboMakerCancelSimulationJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerCancelSimulationJobRequest: robomaker.RoboMakerCancelSimulationJobRequest = { ... }
```

##### `job`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCancelSimulationJobRequest.property.job"></a>

- *Type:* `string`

---

### RoboMakerCancelSimulationJobResponse <a name="aws-cdk-sdk.robomaker.RoboMakerCancelSimulationJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerCancelSimulationJobResponse: robomaker.RoboMakerCancelSimulationJobResponse = { ... }
```

### RoboMakerCancelWorldExportJobRequest <a name="aws-cdk-sdk.robomaker.RoboMakerCancelWorldExportJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerCancelWorldExportJobRequest: robomaker.RoboMakerCancelWorldExportJobRequest = { ... }
```

##### `job`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCancelWorldExportJobRequest.property.job"></a>

- *Type:* `string`

---

### RoboMakerCancelWorldExportJobResponse <a name="aws-cdk-sdk.robomaker.RoboMakerCancelWorldExportJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerCancelWorldExportJobResponse: robomaker.RoboMakerCancelWorldExportJobResponse = { ... }
```

### RoboMakerCancelWorldGenerationJobRequest <a name="aws-cdk-sdk.robomaker.RoboMakerCancelWorldGenerationJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerCancelWorldGenerationJobRequest: robomaker.RoboMakerCancelWorldGenerationJobRequest = { ... }
```

##### `job`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCancelWorldGenerationJobRequest.property.job"></a>

- *Type:* `string`

---

### RoboMakerCancelWorldGenerationJobResponse <a name="aws-cdk-sdk.robomaker.RoboMakerCancelWorldGenerationJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerCancelWorldGenerationJobResponse: robomaker.RoboMakerCancelWorldGenerationJobResponse = { ... }
```

### RoboMakerCompute <a name="aws-cdk-sdk.robomaker.RoboMakerCompute"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerCompute: robomaker.RoboMakerCompute = { ... }
```

##### `simulationUnitLimit`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCompute.property.simulationUnitLimit"></a>

- *Type:* `number`

---

### RoboMakerComputeResponse <a name="aws-cdk-sdk.robomaker.RoboMakerComputeResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerComputeResponse: robomaker.RoboMakerComputeResponse = { ... }
```

##### `simulationUnitLimit`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerComputeResponse.property.simulationUnitLimit"></a>

- *Type:* `number`

---

### RoboMakerCreateDeploymentJobRequest <a name="aws-cdk-sdk.robomaker.RoboMakerCreateDeploymentJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerCreateDeploymentJobRequest: robomaker.RoboMakerCreateDeploymentJobRequest = { ... }
```

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateDeploymentJobRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `deploymentApplicationConfigs`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateDeploymentJobRequest.property.deploymentApplicationConfigs"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDeploymentApplicationConfig`](#aws-cdk-sdk.robomaker.RoboMakerDeploymentApplicationConfig)[]

---

##### `fleet`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateDeploymentJobRequest.property.fleet"></a>

- *Type:* `string`

---

##### `deploymentConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateDeploymentJobRequest.property.deploymentConfig"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDeploymentConfig`](#aws-cdk-sdk.robomaker.RoboMakerDeploymentConfig)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateDeploymentJobRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### RoboMakerCreateDeploymentJobResponse <a name="aws-cdk-sdk.robomaker.RoboMakerCreateDeploymentJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerCreateDeploymentJobResponse: robomaker.RoboMakerCreateDeploymentJobResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateDeploymentJobResponse.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateDeploymentJobResponse.property.createdAt"></a>

- *Type:* `string`

---

##### `deploymentApplicationConfigs`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateDeploymentJobResponse.property.deploymentApplicationConfigs"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDeploymentApplicationConfig`](#aws-cdk-sdk.robomaker.RoboMakerDeploymentApplicationConfig)[]

---

##### `deploymentConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateDeploymentJobResponse.property.deploymentConfig"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDeploymentConfig`](#aws-cdk-sdk.robomaker.RoboMakerDeploymentConfig)

---

##### `failureCode`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateDeploymentJobResponse.property.failureCode"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateDeploymentJobResponse.property.failureReason"></a>

- *Type:* `string`

---

##### `fleet`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateDeploymentJobResponse.property.fleet"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateDeploymentJobResponse.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateDeploymentJobResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### RoboMakerCreateFleetRequest <a name="aws-cdk-sdk.robomaker.RoboMakerCreateFleetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerCreateFleetRequest: robomaker.RoboMakerCreateFleetRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateFleetRequest.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateFleetRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### RoboMakerCreateFleetResponse <a name="aws-cdk-sdk.robomaker.RoboMakerCreateFleetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerCreateFleetResponse: robomaker.RoboMakerCreateFleetResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateFleetResponse.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateFleetResponse.property.createdAt"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateFleetResponse.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateFleetResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### RoboMakerCreateRobotApplicationRequest <a name="aws-cdk-sdk.robomaker.RoboMakerCreateRobotApplicationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerCreateRobotApplicationRequest: robomaker.RoboMakerCreateRobotApplicationRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateRobotApplicationRequest.property.name"></a>

- *Type:* `string`

---

##### `robotSoftwareSuite`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateRobotApplicationRequest.property.robotSoftwareSuite"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerRobotSoftwareSuite`](#aws-cdk-sdk.robomaker.RoboMakerRobotSoftwareSuite)

---

##### `sources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateRobotApplicationRequest.property.sources"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSourceConfig`](#aws-cdk-sdk.robomaker.RoboMakerSourceConfig)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateRobotApplicationRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### RoboMakerCreateRobotApplicationResponse <a name="aws-cdk-sdk.robomaker.RoboMakerCreateRobotApplicationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerCreateRobotApplicationResponse: robomaker.RoboMakerCreateRobotApplicationResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateRobotApplicationResponse.property.arn"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateRobotApplicationResponse.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateRobotApplicationResponse.property.name"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateRobotApplicationResponse.property.revisionId"></a>

- *Type:* `string`

---

##### `robotSoftwareSuite`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateRobotApplicationResponse.property.robotSoftwareSuite"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerRobotSoftwareSuite`](#aws-cdk-sdk.robomaker.RoboMakerRobotSoftwareSuite)

---

##### `sources`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateRobotApplicationResponse.property.sources"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSource`](#aws-cdk-sdk.robomaker.RoboMakerSource)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateRobotApplicationResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateRobotApplicationResponse.property.version"></a>

- *Type:* `string`

---

### RoboMakerCreateRobotApplicationVersionRequest <a name="aws-cdk-sdk.robomaker.RoboMakerCreateRobotApplicationVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerCreateRobotApplicationVersionRequest: robomaker.RoboMakerCreateRobotApplicationVersionRequest = { ... }
```

##### `application`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateRobotApplicationVersionRequest.property.application"></a>

- *Type:* `string`

---

##### `currentRevisionId`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateRobotApplicationVersionRequest.property.currentRevisionId"></a>

- *Type:* `string`

---

### RoboMakerCreateRobotApplicationVersionResponse <a name="aws-cdk-sdk.robomaker.RoboMakerCreateRobotApplicationVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerCreateRobotApplicationVersionResponse: robomaker.RoboMakerCreateRobotApplicationVersionResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateRobotApplicationVersionResponse.property.arn"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateRobotApplicationVersionResponse.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateRobotApplicationVersionResponse.property.name"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateRobotApplicationVersionResponse.property.revisionId"></a>

- *Type:* `string`

---

##### `robotSoftwareSuite`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateRobotApplicationVersionResponse.property.robotSoftwareSuite"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerRobotSoftwareSuite`](#aws-cdk-sdk.robomaker.RoboMakerRobotSoftwareSuite)

---

##### `sources`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateRobotApplicationVersionResponse.property.sources"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSource`](#aws-cdk-sdk.robomaker.RoboMakerSource)[]

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateRobotApplicationVersionResponse.property.version"></a>

- *Type:* `string`

---

### RoboMakerCreateRobotRequest <a name="aws-cdk-sdk.robomaker.RoboMakerCreateRobotRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerCreateRobotRequest: robomaker.RoboMakerCreateRobotRequest = { ... }
```

##### `architecture`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateRobotRequest.property.architecture"></a>

- *Type:* `string`

---

##### `greengrassGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateRobotRequest.property.greengrassGroupId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateRobotRequest.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateRobotRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### RoboMakerCreateRobotResponse <a name="aws-cdk-sdk.robomaker.RoboMakerCreateRobotResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerCreateRobotResponse: robomaker.RoboMakerCreateRobotResponse = { ... }
```

##### `architecture`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateRobotResponse.property.architecture"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateRobotResponse.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateRobotResponse.property.createdAt"></a>

- *Type:* `string`

---

##### `greengrassGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateRobotResponse.property.greengrassGroupId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateRobotResponse.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateRobotResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### RoboMakerCreateSimulationApplicationRequest <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerCreateSimulationApplicationRequest: robomaker.RoboMakerCreateSimulationApplicationRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationRequest.property.name"></a>

- *Type:* `string`

---

##### `robotSoftwareSuite`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationRequest.property.robotSoftwareSuite"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerRobotSoftwareSuite`](#aws-cdk-sdk.robomaker.RoboMakerRobotSoftwareSuite)

---

##### `simulationSoftwareSuite`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationRequest.property.simulationSoftwareSuite"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSimulationSoftwareSuite`](#aws-cdk-sdk.robomaker.RoboMakerSimulationSoftwareSuite)

---

##### `sources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationRequest.property.sources"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSourceConfig`](#aws-cdk-sdk.robomaker.RoboMakerSourceConfig)[]

---

##### `renderingEngine`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationRequest.property.renderingEngine"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerRenderingEngine`](#aws-cdk-sdk.robomaker.RoboMakerRenderingEngine)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### RoboMakerCreateSimulationApplicationResponse <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerCreateSimulationApplicationResponse: robomaker.RoboMakerCreateSimulationApplicationResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationResponse.property.arn"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationResponse.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationResponse.property.name"></a>

- *Type:* `string`

---

##### `renderingEngine`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationResponse.property.renderingEngine"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerRenderingEngine`](#aws-cdk-sdk.robomaker.RoboMakerRenderingEngine)

---

##### `revisionId`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationResponse.property.revisionId"></a>

- *Type:* `string`

---

##### `robotSoftwareSuite`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationResponse.property.robotSoftwareSuite"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerRobotSoftwareSuite`](#aws-cdk-sdk.robomaker.RoboMakerRobotSoftwareSuite)

---

##### `simulationSoftwareSuite`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationResponse.property.simulationSoftwareSuite"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSimulationSoftwareSuite`](#aws-cdk-sdk.robomaker.RoboMakerSimulationSoftwareSuite)

---

##### `sources`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationResponse.property.sources"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSource`](#aws-cdk-sdk.robomaker.RoboMakerSource)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationResponse.property.version"></a>

- *Type:* `string`

---

### RoboMakerCreateSimulationApplicationVersionRequest <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerCreateSimulationApplicationVersionRequest: robomaker.RoboMakerCreateSimulationApplicationVersionRequest = { ... }
```

##### `application`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationVersionRequest.property.application"></a>

- *Type:* `string`

---

##### `currentRevisionId`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationVersionRequest.property.currentRevisionId"></a>

- *Type:* `string`

---

### RoboMakerCreateSimulationApplicationVersionResponse <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerCreateSimulationApplicationVersionResponse: robomaker.RoboMakerCreateSimulationApplicationVersionResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationVersionResponse.property.arn"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationVersionResponse.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationVersionResponse.property.name"></a>

- *Type:* `string`

---

##### `renderingEngine`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationVersionResponse.property.renderingEngine"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerRenderingEngine`](#aws-cdk-sdk.robomaker.RoboMakerRenderingEngine)

---

##### `revisionId`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationVersionResponse.property.revisionId"></a>

- *Type:* `string`

---

##### `robotSoftwareSuite`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationVersionResponse.property.robotSoftwareSuite"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerRobotSoftwareSuite`](#aws-cdk-sdk.robomaker.RoboMakerRobotSoftwareSuite)

---

##### `simulationSoftwareSuite`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationVersionResponse.property.simulationSoftwareSuite"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSimulationSoftwareSuite`](#aws-cdk-sdk.robomaker.RoboMakerSimulationSoftwareSuite)

---

##### `sources`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationVersionResponse.property.sources"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSource`](#aws-cdk-sdk.robomaker.RoboMakerSource)[]

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationVersionResponse.property.version"></a>

- *Type:* `string`

---

### RoboMakerCreateSimulationJobRequest <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerCreateSimulationJobRequest: robomaker.RoboMakerCreateSimulationJobRequest = { ... }
```

##### `iamRole`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationJobRequest.property.iamRole"></a>

- *Type:* `string`

---

##### `maxJobDurationInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationJobRequest.property.maxJobDurationInSeconds"></a>

- *Type:* `number`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationJobRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `compute`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationJobRequest.property.compute"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerCompute`](#aws-cdk-sdk.robomaker.RoboMakerCompute)

---

##### `dataSources`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationJobRequest.property.dataSources"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDataSourceConfig`](#aws-cdk-sdk.robomaker.RoboMakerDataSourceConfig)[]

---

##### `failureBehavior`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationJobRequest.property.failureBehavior"></a>

- *Type:* `string`

---

##### `loggingConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationJobRequest.property.loggingConfig"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerLoggingConfig`](#aws-cdk-sdk.robomaker.RoboMakerLoggingConfig)

---

##### `outputLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationJobRequest.property.outputLocation"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerOutputLocation`](#aws-cdk-sdk.robomaker.RoboMakerOutputLocation)

---

##### `robotApplications`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationJobRequest.property.robotApplications"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerRobotApplicationConfig`](#aws-cdk-sdk.robomaker.RoboMakerRobotApplicationConfig)[]

---

##### `simulationApplications`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationJobRequest.property.simulationApplications"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSimulationApplicationConfig`](#aws-cdk-sdk.robomaker.RoboMakerSimulationApplicationConfig)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationJobRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `vpcConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationJobRequest.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerVpcConfig`](#aws-cdk-sdk.robomaker.RoboMakerVpcConfig)

---

### RoboMakerCreateSimulationJobResponse <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerCreateSimulationJobResponse: robomaker.RoboMakerCreateSimulationJobResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationJobResponse.property.arn"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationJobResponse.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `compute`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationJobResponse.property.compute"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerComputeResponse`](#aws-cdk-sdk.robomaker.RoboMakerComputeResponse)

---

##### `dataSources`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationJobResponse.property.dataSources"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDataSource`](#aws-cdk-sdk.robomaker.RoboMakerDataSource)[]

---

##### `failureBehavior`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationJobResponse.property.failureBehavior"></a>

- *Type:* `string`

---

##### `failureCode`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationJobResponse.property.failureCode"></a>

- *Type:* `string`

---

##### `iamRole`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationJobResponse.property.iamRole"></a>

- *Type:* `string`

---

##### `lastStartedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationJobResponse.property.lastStartedAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationJobResponse.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `loggingConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationJobResponse.property.loggingConfig"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerLoggingConfig`](#aws-cdk-sdk.robomaker.RoboMakerLoggingConfig)

---

##### `maxJobDurationInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationJobResponse.property.maxJobDurationInSeconds"></a>

- *Type:* `number`

---

##### `outputLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationJobResponse.property.outputLocation"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerOutputLocation`](#aws-cdk-sdk.robomaker.RoboMakerOutputLocation)

---

##### `robotApplications`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationJobResponse.property.robotApplications"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerRobotApplicationConfig`](#aws-cdk-sdk.robomaker.RoboMakerRobotApplicationConfig)[]

---

##### `simulationApplications`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationJobResponse.property.simulationApplications"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSimulationApplicationConfig`](#aws-cdk-sdk.robomaker.RoboMakerSimulationApplicationConfig)[]

---

##### `simulationTimeMillis`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationJobResponse.property.simulationTimeMillis"></a>

- *Type:* `number`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationJobResponse.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationJobResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `vpcConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateSimulationJobResponse.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerVpcConfigResponse`](#aws-cdk-sdk.robomaker.RoboMakerVpcConfigResponse)

---

### RoboMakerCreateWorldExportJobRequest <a name="aws-cdk-sdk.robomaker.RoboMakerCreateWorldExportJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerCreateWorldExportJobRequest: robomaker.RoboMakerCreateWorldExportJobRequest = { ... }
```

##### `iamRole`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateWorldExportJobRequest.property.iamRole"></a>

- *Type:* `string`

---

##### `outputLocation`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateWorldExportJobRequest.property.outputLocation"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerOutputLocation`](#aws-cdk-sdk.robomaker.RoboMakerOutputLocation)

---

##### `worlds`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateWorldExportJobRequest.property.worlds"></a>

- *Type:* `string`[]

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateWorldExportJobRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateWorldExportJobRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### RoboMakerCreateWorldExportJobResponse <a name="aws-cdk-sdk.robomaker.RoboMakerCreateWorldExportJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerCreateWorldExportJobResponse: robomaker.RoboMakerCreateWorldExportJobResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateWorldExportJobResponse.property.arn"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateWorldExportJobResponse.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateWorldExportJobResponse.property.createdAt"></a>

- *Type:* `string`

---

##### `failureCode`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateWorldExportJobResponse.property.failureCode"></a>

- *Type:* `string`

---

##### `iamRole`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateWorldExportJobResponse.property.iamRole"></a>

- *Type:* `string`

---

##### `outputLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateWorldExportJobResponse.property.outputLocation"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerOutputLocation`](#aws-cdk-sdk.robomaker.RoboMakerOutputLocation)

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateWorldExportJobResponse.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateWorldExportJobResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### RoboMakerCreateWorldGenerationJobRequest <a name="aws-cdk-sdk.robomaker.RoboMakerCreateWorldGenerationJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerCreateWorldGenerationJobRequest: robomaker.RoboMakerCreateWorldGenerationJobRequest = { ... }
```

##### `template`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateWorldGenerationJobRequest.property.template"></a>

- *Type:* `string`

---

##### `worldCount`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateWorldGenerationJobRequest.property.worldCount"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerWorldCount`](#aws-cdk-sdk.robomaker.RoboMakerWorldCount)

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateWorldGenerationJobRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateWorldGenerationJobRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `worldTags`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateWorldGenerationJobRequest.property.worldTags"></a>

- *Type:* {[ key: string ]: `string`}

---

### RoboMakerCreateWorldGenerationJobResponse <a name="aws-cdk-sdk.robomaker.RoboMakerCreateWorldGenerationJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerCreateWorldGenerationJobResponse: robomaker.RoboMakerCreateWorldGenerationJobResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateWorldGenerationJobResponse.property.arn"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateWorldGenerationJobResponse.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateWorldGenerationJobResponse.property.createdAt"></a>

- *Type:* `string`

---

##### `failureCode`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateWorldGenerationJobResponse.property.failureCode"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateWorldGenerationJobResponse.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateWorldGenerationJobResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `template`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateWorldGenerationJobResponse.property.template"></a>

- *Type:* `string`

---

##### `worldCount`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateWorldGenerationJobResponse.property.worldCount"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerWorldCount`](#aws-cdk-sdk.robomaker.RoboMakerWorldCount)

---

##### `worldTags`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateWorldGenerationJobResponse.property.worldTags"></a>

- *Type:* {[ key: string ]: `string`}

---

### RoboMakerCreateWorldTemplateRequest <a name="aws-cdk-sdk.robomaker.RoboMakerCreateWorldTemplateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerCreateWorldTemplateRequest: robomaker.RoboMakerCreateWorldTemplateRequest = { ... }
```

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateWorldTemplateRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateWorldTemplateRequest.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateWorldTemplateRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `templateBody`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateWorldTemplateRequest.property.templateBody"></a>

- *Type:* `string`

---

##### `templateLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateWorldTemplateRequest.property.templateLocation"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerTemplateLocation`](#aws-cdk-sdk.robomaker.RoboMakerTemplateLocation)

---

### RoboMakerCreateWorldTemplateResponse <a name="aws-cdk-sdk.robomaker.RoboMakerCreateWorldTemplateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerCreateWorldTemplateResponse: robomaker.RoboMakerCreateWorldTemplateResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateWorldTemplateResponse.property.arn"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateWorldTemplateResponse.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateWorldTemplateResponse.property.createdAt"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateWorldTemplateResponse.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerCreateWorldTemplateResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### RoboMakerDataSource <a name="aws-cdk-sdk.robomaker.RoboMakerDataSource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerDataSource: robomaker.RoboMakerDataSource = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDataSource.property.name"></a>

- *Type:* `string`

---

##### `s3Bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDataSource.property.s3Bucket"></a>

- *Type:* `string`

---

##### `s3Keys`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDataSource.property.s3Keys"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerS3KeyOutput`](#aws-cdk-sdk.robomaker.RoboMakerS3KeyOutput)[]

---

### RoboMakerDataSourceConfig <a name="aws-cdk-sdk.robomaker.RoboMakerDataSourceConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerDataSourceConfig: robomaker.RoboMakerDataSourceConfig = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDataSourceConfig.property.name"></a>

- *Type:* `string`

---

##### `s3Bucket`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDataSourceConfig.property.s3Bucket"></a>

- *Type:* `string`

---

##### `s3Keys`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDataSourceConfig.property.s3Keys"></a>

- *Type:* `string`[]

---

### RoboMakerDeleteFleetRequest <a name="aws-cdk-sdk.robomaker.RoboMakerDeleteFleetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerDeleteFleetRequest: robomaker.RoboMakerDeleteFleetRequest = { ... }
```

##### `fleet`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDeleteFleetRequest.property.fleet"></a>

- *Type:* `string`

---

### RoboMakerDeleteFleetResponse <a name="aws-cdk-sdk.robomaker.RoboMakerDeleteFleetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerDeleteFleetResponse: robomaker.RoboMakerDeleteFleetResponse = { ... }
```

### RoboMakerDeleteRobotApplicationRequest <a name="aws-cdk-sdk.robomaker.RoboMakerDeleteRobotApplicationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerDeleteRobotApplicationRequest: robomaker.RoboMakerDeleteRobotApplicationRequest = { ... }
```

##### `application`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDeleteRobotApplicationRequest.property.application"></a>

- *Type:* `string`

---

##### `applicationVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDeleteRobotApplicationRequest.property.applicationVersion"></a>

- *Type:* `string`

---

### RoboMakerDeleteRobotApplicationResponse <a name="aws-cdk-sdk.robomaker.RoboMakerDeleteRobotApplicationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerDeleteRobotApplicationResponse: robomaker.RoboMakerDeleteRobotApplicationResponse = { ... }
```

### RoboMakerDeleteRobotRequest <a name="aws-cdk-sdk.robomaker.RoboMakerDeleteRobotRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerDeleteRobotRequest: robomaker.RoboMakerDeleteRobotRequest = { ... }
```

##### `robot`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDeleteRobotRequest.property.robot"></a>

- *Type:* `string`

---

### RoboMakerDeleteRobotResponse <a name="aws-cdk-sdk.robomaker.RoboMakerDeleteRobotResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerDeleteRobotResponse: robomaker.RoboMakerDeleteRobotResponse = { ... }
```

### RoboMakerDeleteSimulationApplicationRequest <a name="aws-cdk-sdk.robomaker.RoboMakerDeleteSimulationApplicationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerDeleteSimulationApplicationRequest: robomaker.RoboMakerDeleteSimulationApplicationRequest = { ... }
```

##### `application`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDeleteSimulationApplicationRequest.property.application"></a>

- *Type:* `string`

---

##### `applicationVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDeleteSimulationApplicationRequest.property.applicationVersion"></a>

- *Type:* `string`

---

### RoboMakerDeleteSimulationApplicationResponse <a name="aws-cdk-sdk.robomaker.RoboMakerDeleteSimulationApplicationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerDeleteSimulationApplicationResponse: robomaker.RoboMakerDeleteSimulationApplicationResponse = { ... }
```

### RoboMakerDeleteWorldTemplateRequest <a name="aws-cdk-sdk.robomaker.RoboMakerDeleteWorldTemplateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerDeleteWorldTemplateRequest: robomaker.RoboMakerDeleteWorldTemplateRequest = { ... }
```

##### `template`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDeleteWorldTemplateRequest.property.template"></a>

- *Type:* `string`

---

### RoboMakerDeleteWorldTemplateResponse <a name="aws-cdk-sdk.robomaker.RoboMakerDeleteWorldTemplateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerDeleteWorldTemplateResponse: robomaker.RoboMakerDeleteWorldTemplateResponse = { ... }
```

### RoboMakerDeploymentApplicationConfig <a name="aws-cdk-sdk.robomaker.RoboMakerDeploymentApplicationConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerDeploymentApplicationConfig: robomaker.RoboMakerDeploymentApplicationConfig = { ... }
```

##### `application`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDeploymentApplicationConfig.property.application"></a>

- *Type:* `string`

---

##### `applicationVersion`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDeploymentApplicationConfig.property.applicationVersion"></a>

- *Type:* `string`

---

##### `launchConfig`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDeploymentApplicationConfig.property.launchConfig"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDeploymentLaunchConfig`](#aws-cdk-sdk.robomaker.RoboMakerDeploymentLaunchConfig)

---

### RoboMakerDeploymentConfig <a name="aws-cdk-sdk.robomaker.RoboMakerDeploymentConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerDeploymentConfig: robomaker.RoboMakerDeploymentConfig = { ... }
```

##### `concurrentDeploymentPercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDeploymentConfig.property.concurrentDeploymentPercentage"></a>

- *Type:* `number`

---

##### `downloadConditionFile`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDeploymentConfig.property.downloadConditionFile"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerS3Object`](#aws-cdk-sdk.robomaker.RoboMakerS3Object)

---

##### `failureThresholdPercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDeploymentConfig.property.failureThresholdPercentage"></a>

- *Type:* `number`

---

##### `robotDeploymentTimeoutInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDeploymentConfig.property.robotDeploymentTimeoutInSeconds"></a>

- *Type:* `number`

---

### RoboMakerDeploymentJob <a name="aws-cdk-sdk.robomaker.RoboMakerDeploymentJob"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerDeploymentJob: robomaker.RoboMakerDeploymentJob = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDeploymentJob.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDeploymentJob.property.createdAt"></a>

- *Type:* `string`

---

##### `deploymentApplicationConfigs`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDeploymentJob.property.deploymentApplicationConfigs"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDeploymentApplicationConfig`](#aws-cdk-sdk.robomaker.RoboMakerDeploymentApplicationConfig)[]

---

##### `deploymentConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDeploymentJob.property.deploymentConfig"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDeploymentConfig`](#aws-cdk-sdk.robomaker.RoboMakerDeploymentConfig)

---

##### `failureCode`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDeploymentJob.property.failureCode"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDeploymentJob.property.failureReason"></a>

- *Type:* `string`

---

##### `fleet`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDeploymentJob.property.fleet"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDeploymentJob.property.status"></a>

- *Type:* `string`

---

### RoboMakerDeploymentLaunchConfig <a name="aws-cdk-sdk.robomaker.RoboMakerDeploymentLaunchConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerDeploymentLaunchConfig: robomaker.RoboMakerDeploymentLaunchConfig = { ... }
```

##### `launchFile`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDeploymentLaunchConfig.property.launchFile"></a>

- *Type:* `string`

---

##### `packageName`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDeploymentLaunchConfig.property.packageName"></a>

- *Type:* `string`

---

##### `environmentVariables`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDeploymentLaunchConfig.property.environmentVariables"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `postLaunchFile`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDeploymentLaunchConfig.property.postLaunchFile"></a>

- *Type:* `string`

---

##### `preLaunchFile`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDeploymentLaunchConfig.property.preLaunchFile"></a>

- *Type:* `string`

---

### RoboMakerDeregisterRobotRequest <a name="aws-cdk-sdk.robomaker.RoboMakerDeregisterRobotRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerDeregisterRobotRequest: robomaker.RoboMakerDeregisterRobotRequest = { ... }
```

##### `fleet`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDeregisterRobotRequest.property.fleet"></a>

- *Type:* `string`

---

##### `robot`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDeregisterRobotRequest.property.robot"></a>

- *Type:* `string`

---

### RoboMakerDeregisterRobotResponse <a name="aws-cdk-sdk.robomaker.RoboMakerDeregisterRobotResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerDeregisterRobotResponse: robomaker.RoboMakerDeregisterRobotResponse = { ... }
```

##### `fleet`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDeregisterRobotResponse.property.fleet"></a>

- *Type:* `string`

---

##### `robot`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDeregisterRobotResponse.property.robot"></a>

- *Type:* `string`

---

### RoboMakerDescribeDeploymentJobRequest <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeDeploymentJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerDescribeDeploymentJobRequest: robomaker.RoboMakerDescribeDeploymentJobRequest = { ... }
```

##### `job`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeDeploymentJobRequest.property.job"></a>

- *Type:* `string`

---

### RoboMakerDescribeDeploymentJobResponse <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeDeploymentJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerDescribeDeploymentJobResponse: robomaker.RoboMakerDescribeDeploymentJobResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeDeploymentJobResponse.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeDeploymentJobResponse.property.createdAt"></a>

- *Type:* `string`

---

##### `deploymentApplicationConfigs`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeDeploymentJobResponse.property.deploymentApplicationConfigs"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDeploymentApplicationConfig`](#aws-cdk-sdk.robomaker.RoboMakerDeploymentApplicationConfig)[]

---

##### `deploymentConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeDeploymentJobResponse.property.deploymentConfig"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDeploymentConfig`](#aws-cdk-sdk.robomaker.RoboMakerDeploymentConfig)

---

##### `failureCode`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeDeploymentJobResponse.property.failureCode"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeDeploymentJobResponse.property.failureReason"></a>

- *Type:* `string`

---

##### `fleet`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeDeploymentJobResponse.property.fleet"></a>

- *Type:* `string`

---

##### `robotDeploymentSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeDeploymentJobResponse.property.robotDeploymentSummary"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerRobotDeployment`](#aws-cdk-sdk.robomaker.RoboMakerRobotDeployment)[]

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeDeploymentJobResponse.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeDeploymentJobResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### RoboMakerDescribeFleetRequest <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeFleetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerDescribeFleetRequest: robomaker.RoboMakerDescribeFleetRequest = { ... }
```

##### `fleet`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeFleetRequest.property.fleet"></a>

- *Type:* `string`

---

### RoboMakerDescribeFleetResponse <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeFleetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerDescribeFleetResponse: robomaker.RoboMakerDescribeFleetResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeFleetResponse.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeFleetResponse.property.createdAt"></a>

- *Type:* `string`

---

##### `lastDeploymentJob`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeFleetResponse.property.lastDeploymentJob"></a>

- *Type:* `string`

---

##### `lastDeploymentStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeFleetResponse.property.lastDeploymentStatus"></a>

- *Type:* `string`

---

##### `lastDeploymentTime`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeFleetResponse.property.lastDeploymentTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeFleetResponse.property.name"></a>

- *Type:* `string`

---

##### `robots`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeFleetResponse.property.robots"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerRobot`](#aws-cdk-sdk.robomaker.RoboMakerRobot)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeFleetResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### RoboMakerDescribeRobotApplicationRequest <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeRobotApplicationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerDescribeRobotApplicationRequest: robomaker.RoboMakerDescribeRobotApplicationRequest = { ... }
```

##### `application`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeRobotApplicationRequest.property.application"></a>

- *Type:* `string`

---

##### `applicationVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeRobotApplicationRequest.property.applicationVersion"></a>

- *Type:* `string`

---

### RoboMakerDescribeRobotApplicationResponse <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeRobotApplicationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerDescribeRobotApplicationResponse: robomaker.RoboMakerDescribeRobotApplicationResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeRobotApplicationResponse.property.arn"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeRobotApplicationResponse.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeRobotApplicationResponse.property.name"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeRobotApplicationResponse.property.revisionId"></a>

- *Type:* `string`

---

##### `robotSoftwareSuite`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeRobotApplicationResponse.property.robotSoftwareSuite"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerRobotSoftwareSuite`](#aws-cdk-sdk.robomaker.RoboMakerRobotSoftwareSuite)

---

##### `sources`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeRobotApplicationResponse.property.sources"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSource`](#aws-cdk-sdk.robomaker.RoboMakerSource)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeRobotApplicationResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeRobotApplicationResponse.property.version"></a>

- *Type:* `string`

---

### RoboMakerDescribeRobotRequest <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeRobotRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerDescribeRobotRequest: robomaker.RoboMakerDescribeRobotRequest = { ... }
```

##### `robot`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeRobotRequest.property.robot"></a>

- *Type:* `string`

---

### RoboMakerDescribeRobotResponse <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeRobotResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerDescribeRobotResponse: robomaker.RoboMakerDescribeRobotResponse = { ... }
```

##### `architecture`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeRobotResponse.property.architecture"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeRobotResponse.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeRobotResponse.property.createdAt"></a>

- *Type:* `string`

---

##### `fleetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeRobotResponse.property.fleetArn"></a>

- *Type:* `string`

---

##### `greengrassGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeRobotResponse.property.greengrassGroupId"></a>

- *Type:* `string`

---

##### `lastDeploymentJob`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeRobotResponse.property.lastDeploymentJob"></a>

- *Type:* `string`

---

##### `lastDeploymentTime`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeRobotResponse.property.lastDeploymentTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeRobotResponse.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeRobotResponse.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeRobotResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### RoboMakerDescribeSimulationApplicationRequest <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationApplicationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerDescribeSimulationApplicationRequest: robomaker.RoboMakerDescribeSimulationApplicationRequest = { ... }
```

##### `application`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationApplicationRequest.property.application"></a>

- *Type:* `string`

---

##### `applicationVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationApplicationRequest.property.applicationVersion"></a>

- *Type:* `string`

---

### RoboMakerDescribeSimulationApplicationResponse <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationApplicationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerDescribeSimulationApplicationResponse: robomaker.RoboMakerDescribeSimulationApplicationResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationApplicationResponse.property.arn"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationApplicationResponse.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationApplicationResponse.property.name"></a>

- *Type:* `string`

---

##### `renderingEngine`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationApplicationResponse.property.renderingEngine"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerRenderingEngine`](#aws-cdk-sdk.robomaker.RoboMakerRenderingEngine)

---

##### `revisionId`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationApplicationResponse.property.revisionId"></a>

- *Type:* `string`

---

##### `robotSoftwareSuite`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationApplicationResponse.property.robotSoftwareSuite"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerRobotSoftwareSuite`](#aws-cdk-sdk.robomaker.RoboMakerRobotSoftwareSuite)

---

##### `simulationSoftwareSuite`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationApplicationResponse.property.simulationSoftwareSuite"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSimulationSoftwareSuite`](#aws-cdk-sdk.robomaker.RoboMakerSimulationSoftwareSuite)

---

##### `sources`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationApplicationResponse.property.sources"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSource`](#aws-cdk-sdk.robomaker.RoboMakerSource)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationApplicationResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationApplicationResponse.property.version"></a>

- *Type:* `string`

---

### RoboMakerDescribeSimulationJobBatchRequest <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobBatchRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerDescribeSimulationJobBatchRequest: robomaker.RoboMakerDescribeSimulationJobBatchRequest = { ... }
```

##### `batch`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobBatchRequest.property.batch"></a>

- *Type:* `string`

---

### RoboMakerDescribeSimulationJobBatchResponse <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobBatchResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerDescribeSimulationJobBatchResponse: robomaker.RoboMakerDescribeSimulationJobBatchResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobBatchResponse.property.arn"></a>

- *Type:* `string`

---

##### `batchPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobBatchResponse.property.batchPolicy"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerBatchPolicy`](#aws-cdk-sdk.robomaker.RoboMakerBatchPolicy)

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobBatchResponse.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobBatchResponse.property.createdAt"></a>

- *Type:* `string`

---

##### `createdRequests`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobBatchResponse.property.createdRequests"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSimulationJobSummary`](#aws-cdk-sdk.robomaker.RoboMakerSimulationJobSummary)[]

---

##### `failedRequests`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobBatchResponse.property.failedRequests"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerFailedCreateSimulationJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerFailedCreateSimulationJobRequest)[]

---

##### `failureCode`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobBatchResponse.property.failureCode"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobBatchResponse.property.failureReason"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobBatchResponse.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `pendingRequests`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobBatchResponse.property.pendingRequests"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSimulationJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerSimulationJobRequest)[]

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobBatchResponse.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobBatchResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### RoboMakerDescribeSimulationJobRequest <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerDescribeSimulationJobRequest: robomaker.RoboMakerDescribeSimulationJobRequest = { ... }
```

##### `job`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobRequest.property.job"></a>

- *Type:* `string`

---

### RoboMakerDescribeSimulationJobResponse <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerDescribeSimulationJobResponse: robomaker.RoboMakerDescribeSimulationJobResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobResponse.property.arn"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobResponse.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `compute`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobResponse.property.compute"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerComputeResponse`](#aws-cdk-sdk.robomaker.RoboMakerComputeResponse)

---

##### `dataSources`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobResponse.property.dataSources"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDataSource`](#aws-cdk-sdk.robomaker.RoboMakerDataSource)[]

---

##### `failureBehavior`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobResponse.property.failureBehavior"></a>

- *Type:* `string`

---

##### `failureCode`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobResponse.property.failureCode"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobResponse.property.failureReason"></a>

- *Type:* `string`

---

##### `iamRole`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobResponse.property.iamRole"></a>

- *Type:* `string`

---

##### `lastStartedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobResponse.property.lastStartedAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobResponse.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `loggingConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobResponse.property.loggingConfig"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerLoggingConfig`](#aws-cdk-sdk.robomaker.RoboMakerLoggingConfig)

---

##### `maxJobDurationInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobResponse.property.maxJobDurationInSeconds"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobResponse.property.name"></a>

- *Type:* `string`

---

##### `networkInterface`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobResponse.property.networkInterface"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerNetworkInterface`](#aws-cdk-sdk.robomaker.RoboMakerNetworkInterface)

---

##### `outputLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobResponse.property.outputLocation"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerOutputLocation`](#aws-cdk-sdk.robomaker.RoboMakerOutputLocation)

---

##### `robotApplications`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobResponse.property.robotApplications"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerRobotApplicationConfig`](#aws-cdk-sdk.robomaker.RoboMakerRobotApplicationConfig)[]

---

##### `simulationApplications`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobResponse.property.simulationApplications"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSimulationApplicationConfig`](#aws-cdk-sdk.robomaker.RoboMakerSimulationApplicationConfig)[]

---

##### `simulationTimeMillis`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobResponse.property.simulationTimeMillis"></a>

- *Type:* `number`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobResponse.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `vpcConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobResponse.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerVpcConfigResponse`](#aws-cdk-sdk.robomaker.RoboMakerVpcConfigResponse)

---

### RoboMakerDescribeWorldExportJobRequest <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeWorldExportJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerDescribeWorldExportJobRequest: robomaker.RoboMakerDescribeWorldExportJobRequest = { ... }
```

##### `job`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeWorldExportJobRequest.property.job"></a>

- *Type:* `string`

---

### RoboMakerDescribeWorldExportJobResponse <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeWorldExportJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerDescribeWorldExportJobResponse: robomaker.RoboMakerDescribeWorldExportJobResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeWorldExportJobResponse.property.arn"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeWorldExportJobResponse.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeWorldExportJobResponse.property.createdAt"></a>

- *Type:* `string`

---

##### `failureCode`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeWorldExportJobResponse.property.failureCode"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeWorldExportJobResponse.property.failureReason"></a>

- *Type:* `string`

---

##### `iamRole`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeWorldExportJobResponse.property.iamRole"></a>

- *Type:* `string`

---

##### `outputLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeWorldExportJobResponse.property.outputLocation"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerOutputLocation`](#aws-cdk-sdk.robomaker.RoboMakerOutputLocation)

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeWorldExportJobResponse.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeWorldExportJobResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `worlds`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeWorldExportJobResponse.property.worlds"></a>

- *Type:* `string`[]

---

### RoboMakerDescribeWorldGenerationJobRequest <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeWorldGenerationJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerDescribeWorldGenerationJobRequest: robomaker.RoboMakerDescribeWorldGenerationJobRequest = { ... }
```

##### `job`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeWorldGenerationJobRequest.property.job"></a>

- *Type:* `string`

---

### RoboMakerDescribeWorldGenerationJobResponse <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeWorldGenerationJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerDescribeWorldGenerationJobResponse: robomaker.RoboMakerDescribeWorldGenerationJobResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeWorldGenerationJobResponse.property.arn"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeWorldGenerationJobResponse.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeWorldGenerationJobResponse.property.createdAt"></a>

- *Type:* `string`

---

##### `failureCode`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeWorldGenerationJobResponse.property.failureCode"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeWorldGenerationJobResponse.property.failureReason"></a>

- *Type:* `string`

---

##### `finishedWorldsSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeWorldGenerationJobResponse.property.finishedWorldsSummary"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerFinishedWorldsSummary`](#aws-cdk-sdk.robomaker.RoboMakerFinishedWorldsSummary)

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeWorldGenerationJobResponse.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeWorldGenerationJobResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `template`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeWorldGenerationJobResponse.property.template"></a>

- *Type:* `string`

---

##### `worldCount`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeWorldGenerationJobResponse.property.worldCount"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerWorldCount`](#aws-cdk-sdk.robomaker.RoboMakerWorldCount)

---

##### `worldTags`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeWorldGenerationJobResponse.property.worldTags"></a>

- *Type:* {[ key: string ]: `string`}

---

### RoboMakerDescribeWorldRequest <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeWorldRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerDescribeWorldRequest: robomaker.RoboMakerDescribeWorldRequest = { ... }
```

##### `world`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeWorldRequest.property.world"></a>

- *Type:* `string`

---

### RoboMakerDescribeWorldResponse <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeWorldResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerDescribeWorldResponse: robomaker.RoboMakerDescribeWorldResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeWorldResponse.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeWorldResponse.property.createdAt"></a>

- *Type:* `string`

---

##### `generationJob`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeWorldResponse.property.generationJob"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeWorldResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `template`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeWorldResponse.property.template"></a>

- *Type:* `string`

---

### RoboMakerDescribeWorldTemplateRequest <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeWorldTemplateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerDescribeWorldTemplateRequest: robomaker.RoboMakerDescribeWorldTemplateRequest = { ... }
```

##### `template`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeWorldTemplateRequest.property.template"></a>

- *Type:* `string`

---

### RoboMakerDescribeWorldTemplateResponse <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeWorldTemplateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerDescribeWorldTemplateResponse: robomaker.RoboMakerDescribeWorldTemplateResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeWorldTemplateResponse.property.arn"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeWorldTemplateResponse.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeWorldTemplateResponse.property.createdAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeWorldTemplateResponse.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeWorldTemplateResponse.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerDescribeWorldTemplateResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### RoboMakerFailedCreateSimulationJobRequest <a name="aws-cdk-sdk.robomaker.RoboMakerFailedCreateSimulationJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerFailedCreateSimulationJobRequest: robomaker.RoboMakerFailedCreateSimulationJobRequest = { ... }
```

##### `failedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerFailedCreateSimulationJobRequest.property.failedAt"></a>

- *Type:* `string`

---

##### `failureCode`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerFailedCreateSimulationJobRequest.property.failureCode"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerFailedCreateSimulationJobRequest.property.failureReason"></a>

- *Type:* `string`

---

##### `request`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerFailedCreateSimulationJobRequest.property.request"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSimulationJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerSimulationJobRequest)

---

### RoboMakerFailureSummary <a name="aws-cdk-sdk.robomaker.RoboMakerFailureSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerFailureSummary: robomaker.RoboMakerFailureSummary = { ... }
```

##### `failures`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerFailureSummary.property.failures"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerWorldFailure`](#aws-cdk-sdk.robomaker.RoboMakerWorldFailure)[]

---

##### `totalFailureCount`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerFailureSummary.property.totalFailureCount"></a>

- *Type:* `number`

---

### RoboMakerFilter <a name="aws-cdk-sdk.robomaker.RoboMakerFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerFilter: robomaker.RoboMakerFilter = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerFilter.property.name"></a>

- *Type:* `string`

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerFilter.property.values"></a>

- *Type:* `string`[]

---

### RoboMakerFinishedWorldsSummary <a name="aws-cdk-sdk.robomaker.RoboMakerFinishedWorldsSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerFinishedWorldsSummary: robomaker.RoboMakerFinishedWorldsSummary = { ... }
```

##### `failureSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerFinishedWorldsSummary.property.failureSummary"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerFailureSummary`](#aws-cdk-sdk.robomaker.RoboMakerFailureSummary)

---

##### `finishedCount`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerFinishedWorldsSummary.property.finishedCount"></a>

- *Type:* `number`

---

##### `succeededWorlds`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerFinishedWorldsSummary.property.succeededWorlds"></a>

- *Type:* `string`[]

---

### RoboMakerFleet <a name="aws-cdk-sdk.robomaker.RoboMakerFleet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerFleet: robomaker.RoboMakerFleet = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerFleet.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerFleet.property.createdAt"></a>

- *Type:* `string`

---

##### `lastDeploymentJob`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerFleet.property.lastDeploymentJob"></a>

- *Type:* `string`

---

##### `lastDeploymentStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerFleet.property.lastDeploymentStatus"></a>

- *Type:* `string`

---

##### `lastDeploymentTime`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerFleet.property.lastDeploymentTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerFleet.property.name"></a>

- *Type:* `string`

---

### RoboMakerGetWorldTemplateBodyRequest <a name="aws-cdk-sdk.robomaker.RoboMakerGetWorldTemplateBodyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerGetWorldTemplateBodyRequest: robomaker.RoboMakerGetWorldTemplateBodyRequest = { ... }
```

##### `generationJob`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerGetWorldTemplateBodyRequest.property.generationJob"></a>

- *Type:* `string`

---

##### `template`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerGetWorldTemplateBodyRequest.property.template"></a>

- *Type:* `string`

---

### RoboMakerGetWorldTemplateBodyResponse <a name="aws-cdk-sdk.robomaker.RoboMakerGetWorldTemplateBodyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerGetWorldTemplateBodyResponse: robomaker.RoboMakerGetWorldTemplateBodyResponse = { ... }
```

##### `templateBody`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerGetWorldTemplateBodyResponse.property.templateBody"></a>

- *Type:* `string`

---

### RoboMakerLaunchConfig <a name="aws-cdk-sdk.robomaker.RoboMakerLaunchConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerLaunchConfig: robomaker.RoboMakerLaunchConfig = { ... }
```

##### `launchFile`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerLaunchConfig.property.launchFile"></a>

- *Type:* `string`

---

##### `packageName`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerLaunchConfig.property.packageName"></a>

- *Type:* `string`

---

##### `environmentVariables`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerLaunchConfig.property.environmentVariables"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `portForwardingConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerLaunchConfig.property.portForwardingConfig"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerPortForwardingConfig`](#aws-cdk-sdk.robomaker.RoboMakerPortForwardingConfig)

---

##### `streamUI`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerLaunchConfig.property.streamUI"></a>

- *Type:* `boolean`

---

### RoboMakerListDeploymentJobsRequest <a name="aws-cdk-sdk.robomaker.RoboMakerListDeploymentJobsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerListDeploymentJobsRequest: robomaker.RoboMakerListDeploymentJobsRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListDeploymentJobsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerFilter`](#aws-cdk-sdk.robomaker.RoboMakerFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListDeploymentJobsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListDeploymentJobsRequest.property.nextToken"></a>

- *Type:* `string`

---

### RoboMakerListDeploymentJobsResponse <a name="aws-cdk-sdk.robomaker.RoboMakerListDeploymentJobsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerListDeploymentJobsResponse: robomaker.RoboMakerListDeploymentJobsResponse = { ... }
```

##### `deploymentJobs`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListDeploymentJobsResponse.property.deploymentJobs"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDeploymentJob`](#aws-cdk-sdk.robomaker.RoboMakerDeploymentJob)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListDeploymentJobsResponse.property.nextToken"></a>

- *Type:* `string`

---

### RoboMakerListFleetsRequest <a name="aws-cdk-sdk.robomaker.RoboMakerListFleetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerListFleetsRequest: robomaker.RoboMakerListFleetsRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListFleetsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerFilter`](#aws-cdk-sdk.robomaker.RoboMakerFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListFleetsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListFleetsRequest.property.nextToken"></a>

- *Type:* `string`

---

### RoboMakerListFleetsResponse <a name="aws-cdk-sdk.robomaker.RoboMakerListFleetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerListFleetsResponse: robomaker.RoboMakerListFleetsResponse = { ... }
```

##### `fleetDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListFleetsResponse.property.fleetDetails"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerFleet`](#aws-cdk-sdk.robomaker.RoboMakerFleet)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListFleetsResponse.property.nextToken"></a>

- *Type:* `string`

---

### RoboMakerListRobotApplicationsRequest <a name="aws-cdk-sdk.robomaker.RoboMakerListRobotApplicationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerListRobotApplicationsRequest: robomaker.RoboMakerListRobotApplicationsRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListRobotApplicationsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerFilter`](#aws-cdk-sdk.robomaker.RoboMakerFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListRobotApplicationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListRobotApplicationsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `versionQualifier`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListRobotApplicationsRequest.property.versionQualifier"></a>

- *Type:* `string`

---

### RoboMakerListRobotApplicationsResponse <a name="aws-cdk-sdk.robomaker.RoboMakerListRobotApplicationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerListRobotApplicationsResponse: robomaker.RoboMakerListRobotApplicationsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListRobotApplicationsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `robotApplicationSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListRobotApplicationsResponse.property.robotApplicationSummaries"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerRobotApplicationSummary`](#aws-cdk-sdk.robomaker.RoboMakerRobotApplicationSummary)[]

---

### RoboMakerListRobotsRequest <a name="aws-cdk-sdk.robomaker.RoboMakerListRobotsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerListRobotsRequest: robomaker.RoboMakerListRobotsRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListRobotsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerFilter`](#aws-cdk-sdk.robomaker.RoboMakerFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListRobotsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListRobotsRequest.property.nextToken"></a>

- *Type:* `string`

---

### RoboMakerListRobotsResponse <a name="aws-cdk-sdk.robomaker.RoboMakerListRobotsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerListRobotsResponse: robomaker.RoboMakerListRobotsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListRobotsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `robots`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListRobotsResponse.property.robots"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerRobot`](#aws-cdk-sdk.robomaker.RoboMakerRobot)[]

---

### RoboMakerListSimulationApplicationsRequest <a name="aws-cdk-sdk.robomaker.RoboMakerListSimulationApplicationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerListSimulationApplicationsRequest: robomaker.RoboMakerListSimulationApplicationsRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListSimulationApplicationsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerFilter`](#aws-cdk-sdk.robomaker.RoboMakerFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListSimulationApplicationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListSimulationApplicationsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `versionQualifier`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListSimulationApplicationsRequest.property.versionQualifier"></a>

- *Type:* `string`

---

### RoboMakerListSimulationApplicationsResponse <a name="aws-cdk-sdk.robomaker.RoboMakerListSimulationApplicationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerListSimulationApplicationsResponse: robomaker.RoboMakerListSimulationApplicationsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListSimulationApplicationsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `simulationApplicationSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListSimulationApplicationsResponse.property.simulationApplicationSummaries"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSimulationApplicationSummary`](#aws-cdk-sdk.robomaker.RoboMakerSimulationApplicationSummary)[]

---

### RoboMakerListSimulationJobBatchesRequest <a name="aws-cdk-sdk.robomaker.RoboMakerListSimulationJobBatchesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerListSimulationJobBatchesRequest: robomaker.RoboMakerListSimulationJobBatchesRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListSimulationJobBatchesRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerFilter`](#aws-cdk-sdk.robomaker.RoboMakerFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListSimulationJobBatchesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListSimulationJobBatchesRequest.property.nextToken"></a>

- *Type:* `string`

---

### RoboMakerListSimulationJobBatchesResponse <a name="aws-cdk-sdk.robomaker.RoboMakerListSimulationJobBatchesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerListSimulationJobBatchesResponse: robomaker.RoboMakerListSimulationJobBatchesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListSimulationJobBatchesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `simulationJobBatchSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListSimulationJobBatchesResponse.property.simulationJobBatchSummaries"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSimulationJobBatchSummary`](#aws-cdk-sdk.robomaker.RoboMakerSimulationJobBatchSummary)[]

---

### RoboMakerListSimulationJobsRequest <a name="aws-cdk-sdk.robomaker.RoboMakerListSimulationJobsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerListSimulationJobsRequest: robomaker.RoboMakerListSimulationJobsRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListSimulationJobsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerFilter`](#aws-cdk-sdk.robomaker.RoboMakerFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListSimulationJobsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListSimulationJobsRequest.property.nextToken"></a>

- *Type:* `string`

---

### RoboMakerListSimulationJobsResponse <a name="aws-cdk-sdk.robomaker.RoboMakerListSimulationJobsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerListSimulationJobsResponse: robomaker.RoboMakerListSimulationJobsResponse = { ... }
```

##### `simulationJobSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListSimulationJobsResponse.property.simulationJobSummaries"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSimulationJobSummary`](#aws-cdk-sdk.robomaker.RoboMakerSimulationJobSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListSimulationJobsResponse.property.nextToken"></a>

- *Type:* `string`

---

### RoboMakerListTagsForResourceRequest <a name="aws-cdk-sdk.robomaker.RoboMakerListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerListTagsForResourceRequest: robomaker.RoboMakerListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### RoboMakerListTagsForResourceResponse <a name="aws-cdk-sdk.robomaker.RoboMakerListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerListTagsForResourceResponse: robomaker.RoboMakerListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListTagsForResourceResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### RoboMakerListWorldExportJobsRequest <a name="aws-cdk-sdk.robomaker.RoboMakerListWorldExportJobsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerListWorldExportJobsRequest: robomaker.RoboMakerListWorldExportJobsRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListWorldExportJobsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerFilter`](#aws-cdk-sdk.robomaker.RoboMakerFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListWorldExportJobsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListWorldExportJobsRequest.property.nextToken"></a>

- *Type:* `string`

---

### RoboMakerListWorldExportJobsResponse <a name="aws-cdk-sdk.robomaker.RoboMakerListWorldExportJobsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerListWorldExportJobsResponse: robomaker.RoboMakerListWorldExportJobsResponse = { ... }
```

##### `worldExportJobSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListWorldExportJobsResponse.property.worldExportJobSummaries"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerWorldExportJobSummary`](#aws-cdk-sdk.robomaker.RoboMakerWorldExportJobSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListWorldExportJobsResponse.property.nextToken"></a>

- *Type:* `string`

---

### RoboMakerListWorldGenerationJobsRequest <a name="aws-cdk-sdk.robomaker.RoboMakerListWorldGenerationJobsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerListWorldGenerationJobsRequest: robomaker.RoboMakerListWorldGenerationJobsRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListWorldGenerationJobsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerFilter`](#aws-cdk-sdk.robomaker.RoboMakerFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListWorldGenerationJobsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListWorldGenerationJobsRequest.property.nextToken"></a>

- *Type:* `string`

---

### RoboMakerListWorldGenerationJobsResponse <a name="aws-cdk-sdk.robomaker.RoboMakerListWorldGenerationJobsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerListWorldGenerationJobsResponse: robomaker.RoboMakerListWorldGenerationJobsResponse = { ... }
```

##### `worldGenerationJobSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListWorldGenerationJobsResponse.property.worldGenerationJobSummaries"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerWorldGenerationJobSummary`](#aws-cdk-sdk.robomaker.RoboMakerWorldGenerationJobSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListWorldGenerationJobsResponse.property.nextToken"></a>

- *Type:* `string`

---

### RoboMakerListWorldsRequest <a name="aws-cdk-sdk.robomaker.RoboMakerListWorldsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerListWorldsRequest: robomaker.RoboMakerListWorldsRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListWorldsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerFilter`](#aws-cdk-sdk.robomaker.RoboMakerFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListWorldsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListWorldsRequest.property.nextToken"></a>

- *Type:* `string`

---

### RoboMakerListWorldsResponse <a name="aws-cdk-sdk.robomaker.RoboMakerListWorldsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerListWorldsResponse: robomaker.RoboMakerListWorldsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListWorldsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `worldSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListWorldsResponse.property.worldSummaries"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerWorldSummary`](#aws-cdk-sdk.robomaker.RoboMakerWorldSummary)[]

---

### RoboMakerListWorldTemplatesRequest <a name="aws-cdk-sdk.robomaker.RoboMakerListWorldTemplatesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerListWorldTemplatesRequest: robomaker.RoboMakerListWorldTemplatesRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListWorldTemplatesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListWorldTemplatesRequest.property.nextToken"></a>

- *Type:* `string`

---

### RoboMakerListWorldTemplatesResponse <a name="aws-cdk-sdk.robomaker.RoboMakerListWorldTemplatesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerListWorldTemplatesResponse: robomaker.RoboMakerListWorldTemplatesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListWorldTemplatesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `templateSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerListWorldTemplatesResponse.property.templateSummaries"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerTemplateSummary`](#aws-cdk-sdk.robomaker.RoboMakerTemplateSummary)[]

---

### RoboMakerLoggingConfig <a name="aws-cdk-sdk.robomaker.RoboMakerLoggingConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerLoggingConfig: robomaker.RoboMakerLoggingConfig = { ... }
```

##### `recordAllRosTopics`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerLoggingConfig.property.recordAllRosTopics"></a>

- *Type:* `boolean`

---

### RoboMakerNetworkInterface <a name="aws-cdk-sdk.robomaker.RoboMakerNetworkInterface"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerNetworkInterface: robomaker.RoboMakerNetworkInterface = { ... }
```

##### `networkInterfaceId`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerNetworkInterface.property.networkInterfaceId"></a>

- *Type:* `string`

---

##### `privateIpAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerNetworkInterface.property.privateIpAddress"></a>

- *Type:* `string`

---

##### `publicIpAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerNetworkInterface.property.publicIpAddress"></a>

- *Type:* `string`

---

### RoboMakerOutputLocation <a name="aws-cdk-sdk.robomaker.RoboMakerOutputLocation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerOutputLocation: robomaker.RoboMakerOutputLocation = { ... }
```

##### `s3Bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerOutputLocation.property.s3Bucket"></a>

- *Type:* `string`

---

##### `s3Prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerOutputLocation.property.s3Prefix"></a>

- *Type:* `string`

---

### RoboMakerPortForwardingConfig <a name="aws-cdk-sdk.robomaker.RoboMakerPortForwardingConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerPortForwardingConfig: robomaker.RoboMakerPortForwardingConfig = { ... }
```

##### `portMappings`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerPortForwardingConfig.property.portMappings"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerPortMapping`](#aws-cdk-sdk.robomaker.RoboMakerPortMapping)[]

---

### RoboMakerPortMapping <a name="aws-cdk-sdk.robomaker.RoboMakerPortMapping"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerPortMapping: robomaker.RoboMakerPortMapping = { ... }
```

##### `applicationPort`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerPortMapping.property.applicationPort"></a>

- *Type:* `number`

---

##### `jobPort`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerPortMapping.property.jobPort"></a>

- *Type:* `number`

---

##### `enableOnPublicIp`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerPortMapping.property.enableOnPublicIp"></a>

- *Type:* `boolean`

---

### RoboMakerProgressDetail <a name="aws-cdk-sdk.robomaker.RoboMakerProgressDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerProgressDetail: robomaker.RoboMakerProgressDetail = { ... }
```

##### `currentProgress`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerProgressDetail.property.currentProgress"></a>

- *Type:* `string`

---

##### `estimatedTimeRemainingSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerProgressDetail.property.estimatedTimeRemainingSeconds"></a>

- *Type:* `number`

---

##### `percentDone`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerProgressDetail.property.percentDone"></a>

- *Type:* `number`

---

##### `targetResource`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerProgressDetail.property.targetResource"></a>

- *Type:* `string`

---

### RoboMakerRegisterRobotRequest <a name="aws-cdk-sdk.robomaker.RoboMakerRegisterRobotRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerRegisterRobotRequest: robomaker.RoboMakerRegisterRobotRequest = { ... }
```

##### `fleet`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerRegisterRobotRequest.property.fleet"></a>

- *Type:* `string`

---

##### `robot`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerRegisterRobotRequest.property.robot"></a>

- *Type:* `string`

---

### RoboMakerRegisterRobotResponse <a name="aws-cdk-sdk.robomaker.RoboMakerRegisterRobotResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerRegisterRobotResponse: robomaker.RoboMakerRegisterRobotResponse = { ... }
```

##### `fleet`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerRegisterRobotResponse.property.fleet"></a>

- *Type:* `string`

---

##### `robot`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerRegisterRobotResponse.property.robot"></a>

- *Type:* `string`

---

### RoboMakerRenderingEngine <a name="aws-cdk-sdk.robomaker.RoboMakerRenderingEngine"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerRenderingEngine: robomaker.RoboMakerRenderingEngine = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerRenderingEngine.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerRenderingEngine.property.version"></a>

- *Type:* `string`

---

### RoboMakerRestartSimulationJobRequest <a name="aws-cdk-sdk.robomaker.RoboMakerRestartSimulationJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerRestartSimulationJobRequest: robomaker.RoboMakerRestartSimulationJobRequest = { ... }
```

##### `job`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerRestartSimulationJobRequest.property.job"></a>

- *Type:* `string`

---

### RoboMakerRestartSimulationJobResponse <a name="aws-cdk-sdk.robomaker.RoboMakerRestartSimulationJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerRestartSimulationJobResponse: robomaker.RoboMakerRestartSimulationJobResponse = { ... }
```

### RoboMakerRobot <a name="aws-cdk-sdk.robomaker.RoboMakerRobot"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerRobot: robomaker.RoboMakerRobot = { ... }
```

##### `architecture`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerRobot.property.architecture"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerRobot.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerRobot.property.createdAt"></a>

- *Type:* `string`

---

##### `fleetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerRobot.property.fleetArn"></a>

- *Type:* `string`

---

##### `greenGrassGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerRobot.property.greenGrassGroupId"></a>

- *Type:* `string`

---

##### `lastDeploymentJob`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerRobot.property.lastDeploymentJob"></a>

- *Type:* `string`

---

##### `lastDeploymentTime`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerRobot.property.lastDeploymentTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerRobot.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerRobot.property.status"></a>

- *Type:* `string`

---

### RoboMakerRobotApplicationConfig <a name="aws-cdk-sdk.robomaker.RoboMakerRobotApplicationConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerRobotApplicationConfig: robomaker.RoboMakerRobotApplicationConfig = { ... }
```

##### `application`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerRobotApplicationConfig.property.application"></a>

- *Type:* `string`

---

##### `launchConfig`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerRobotApplicationConfig.property.launchConfig"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerLaunchConfig`](#aws-cdk-sdk.robomaker.RoboMakerLaunchConfig)

---

##### `applicationVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerRobotApplicationConfig.property.applicationVersion"></a>

- *Type:* `string`

---

### RoboMakerRobotApplicationSummary <a name="aws-cdk-sdk.robomaker.RoboMakerRobotApplicationSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerRobotApplicationSummary: robomaker.RoboMakerRobotApplicationSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerRobotApplicationSummary.property.arn"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerRobotApplicationSummary.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerRobotApplicationSummary.property.name"></a>

- *Type:* `string`

---

##### `robotSoftwareSuite`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerRobotApplicationSummary.property.robotSoftwareSuite"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerRobotSoftwareSuite`](#aws-cdk-sdk.robomaker.RoboMakerRobotSoftwareSuite)

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerRobotApplicationSummary.property.version"></a>

- *Type:* `string`

---

### RoboMakerRobotDeployment <a name="aws-cdk-sdk.robomaker.RoboMakerRobotDeployment"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerRobotDeployment: robomaker.RoboMakerRobotDeployment = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerRobotDeployment.property.arn"></a>

- *Type:* `string`

---

##### `deploymentFinishTime`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerRobotDeployment.property.deploymentFinishTime"></a>

- *Type:* `string`

---

##### `deploymentStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerRobotDeployment.property.deploymentStartTime"></a>

- *Type:* `string`

---

##### `failureCode`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerRobotDeployment.property.failureCode"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerRobotDeployment.property.failureReason"></a>

- *Type:* `string`

---

##### `progressDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerRobotDeployment.property.progressDetail"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerProgressDetail`](#aws-cdk-sdk.robomaker.RoboMakerProgressDetail)

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerRobotDeployment.property.status"></a>

- *Type:* `string`

---

### RoboMakerRobotSoftwareSuite <a name="aws-cdk-sdk.robomaker.RoboMakerRobotSoftwareSuite"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerRobotSoftwareSuite: robomaker.RoboMakerRobotSoftwareSuite = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerRobotSoftwareSuite.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerRobotSoftwareSuite.property.version"></a>

- *Type:* `string`

---

### RoboMakerS3KeyOutput <a name="aws-cdk-sdk.robomaker.RoboMakerS3KeyOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerS3KeyOutput: robomaker.RoboMakerS3KeyOutput = { ... }
```

##### `etag`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerS3KeyOutput.property.etag"></a>

- *Type:* `string`

---

##### `s3Key`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerS3KeyOutput.property.s3Key"></a>

- *Type:* `string`

---

### RoboMakerS3Object <a name="aws-cdk-sdk.robomaker.RoboMakerS3Object"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerS3Object: robomaker.RoboMakerS3Object = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerS3Object.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerS3Object.property.key"></a>

- *Type:* `string`

---

##### `etag`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerS3Object.property.etag"></a>

- *Type:* `string`

---

### RoboMakerSimulationApplicationConfig <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationApplicationConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerSimulationApplicationConfig: robomaker.RoboMakerSimulationApplicationConfig = { ... }
```

##### `application`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationApplicationConfig.property.application"></a>

- *Type:* `string`

---

##### `launchConfig`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationApplicationConfig.property.launchConfig"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerLaunchConfig`](#aws-cdk-sdk.robomaker.RoboMakerLaunchConfig)

---

##### `applicationVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationApplicationConfig.property.applicationVersion"></a>

- *Type:* `string`

---

##### `worldConfigs`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationApplicationConfig.property.worldConfigs"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerWorldConfig`](#aws-cdk-sdk.robomaker.RoboMakerWorldConfig)[]

---

### RoboMakerSimulationApplicationSummary <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationApplicationSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerSimulationApplicationSummary: robomaker.RoboMakerSimulationApplicationSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationApplicationSummary.property.arn"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationApplicationSummary.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationApplicationSummary.property.name"></a>

- *Type:* `string`

---

##### `robotSoftwareSuite`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationApplicationSummary.property.robotSoftwareSuite"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerRobotSoftwareSuite`](#aws-cdk-sdk.robomaker.RoboMakerRobotSoftwareSuite)

---

##### `simulationSoftwareSuite`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationApplicationSummary.property.simulationSoftwareSuite"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSimulationSoftwareSuite`](#aws-cdk-sdk.robomaker.RoboMakerSimulationSoftwareSuite)

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationApplicationSummary.property.version"></a>

- *Type:* `string`

---

### RoboMakerSimulationJob <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJob"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerSimulationJob: robomaker.RoboMakerSimulationJob = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJob.property.arn"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJob.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `compute`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJob.property.compute"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerComputeResponse`](#aws-cdk-sdk.robomaker.RoboMakerComputeResponse)

---

##### `dataSources`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJob.property.dataSources"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDataSource`](#aws-cdk-sdk.robomaker.RoboMakerDataSource)[]

---

##### `failureBehavior`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJob.property.failureBehavior"></a>

- *Type:* `string`

---

##### `failureCode`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJob.property.failureCode"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJob.property.failureReason"></a>

- *Type:* `string`

---

##### `iamRole`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJob.property.iamRole"></a>

- *Type:* `string`

---

##### `lastStartedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJob.property.lastStartedAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJob.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `loggingConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJob.property.loggingConfig"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerLoggingConfig`](#aws-cdk-sdk.robomaker.RoboMakerLoggingConfig)

---

##### `maxJobDurationInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJob.property.maxJobDurationInSeconds"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJob.property.name"></a>

- *Type:* `string`

---

##### `networkInterface`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJob.property.networkInterface"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerNetworkInterface`](#aws-cdk-sdk.robomaker.RoboMakerNetworkInterface)

---

##### `outputLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJob.property.outputLocation"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerOutputLocation`](#aws-cdk-sdk.robomaker.RoboMakerOutputLocation)

---

##### `robotApplications`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJob.property.robotApplications"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerRobotApplicationConfig`](#aws-cdk-sdk.robomaker.RoboMakerRobotApplicationConfig)[]

---

##### `simulationApplications`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJob.property.simulationApplications"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSimulationApplicationConfig`](#aws-cdk-sdk.robomaker.RoboMakerSimulationApplicationConfig)[]

---

##### `simulationTimeMillis`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJob.property.simulationTimeMillis"></a>

- *Type:* `number`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJob.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJob.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `vpcConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJob.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerVpcConfigResponse`](#aws-cdk-sdk.robomaker.RoboMakerVpcConfigResponse)

---

### RoboMakerSimulationJobBatchSummary <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJobBatchSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerSimulationJobBatchSummary: robomaker.RoboMakerSimulationJobBatchSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJobBatchSummary.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJobBatchSummary.property.createdAt"></a>

- *Type:* `string`

---

##### `createdRequestCount`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJobBatchSummary.property.createdRequestCount"></a>

- *Type:* `number`

---

##### `failedRequestCount`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJobBatchSummary.property.failedRequestCount"></a>

- *Type:* `number`

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJobBatchSummary.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `pendingRequestCount`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJobBatchSummary.property.pendingRequestCount"></a>

- *Type:* `number`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJobBatchSummary.property.status"></a>

- *Type:* `string`

---

### RoboMakerSimulationJobRequest <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerSimulationJobRequest: robomaker.RoboMakerSimulationJobRequest = { ... }
```

##### `maxJobDurationInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJobRequest.property.maxJobDurationInSeconds"></a>

- *Type:* `number`

---

##### `compute`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJobRequest.property.compute"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerCompute`](#aws-cdk-sdk.robomaker.RoboMakerCompute)

---

##### `dataSources`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJobRequest.property.dataSources"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDataSourceConfig`](#aws-cdk-sdk.robomaker.RoboMakerDataSourceConfig)[]

---

##### `failureBehavior`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJobRequest.property.failureBehavior"></a>

- *Type:* `string`

---

##### `iamRole`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJobRequest.property.iamRole"></a>

- *Type:* `string`

---

##### `loggingConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJobRequest.property.loggingConfig"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerLoggingConfig`](#aws-cdk-sdk.robomaker.RoboMakerLoggingConfig)

---

##### `outputLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJobRequest.property.outputLocation"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerOutputLocation`](#aws-cdk-sdk.robomaker.RoboMakerOutputLocation)

---

##### `robotApplications`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJobRequest.property.robotApplications"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerRobotApplicationConfig`](#aws-cdk-sdk.robomaker.RoboMakerRobotApplicationConfig)[]

---

##### `simulationApplications`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJobRequest.property.simulationApplications"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSimulationApplicationConfig`](#aws-cdk-sdk.robomaker.RoboMakerSimulationApplicationConfig)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJobRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `useDefaultApplications`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJobRequest.property.useDefaultApplications"></a>

- *Type:* `boolean`

---

##### `vpcConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJobRequest.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerVpcConfig`](#aws-cdk-sdk.robomaker.RoboMakerVpcConfig)

---

### RoboMakerSimulationJobSummary <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJobSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerSimulationJobSummary: robomaker.RoboMakerSimulationJobSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJobSummary.property.arn"></a>

- *Type:* `string`

---

##### `dataSourceNames`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJobSummary.property.dataSourceNames"></a>

- *Type:* `string`[]

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJobSummary.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJobSummary.property.name"></a>

- *Type:* `string`

---

##### `robotApplicationNames`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJobSummary.property.robotApplicationNames"></a>

- *Type:* `string`[]

---

##### `simulationApplicationNames`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJobSummary.property.simulationApplicationNames"></a>

- *Type:* `string`[]

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationJobSummary.property.status"></a>

- *Type:* `string`

---

### RoboMakerSimulationSoftwareSuite <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationSoftwareSuite"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerSimulationSoftwareSuite: robomaker.RoboMakerSimulationSoftwareSuite = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationSoftwareSuite.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSimulationSoftwareSuite.property.version"></a>

- *Type:* `string`

---

### RoboMakerSource <a name="aws-cdk-sdk.robomaker.RoboMakerSource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerSource: robomaker.RoboMakerSource = { ... }
```

##### `architecture`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSource.property.architecture"></a>

- *Type:* `string`

---

##### `etag`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSource.property.etag"></a>

- *Type:* `string`

---

##### `s3Bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSource.property.s3Bucket"></a>

- *Type:* `string`

---

##### `s3Key`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSource.property.s3Key"></a>

- *Type:* `string`

---

### RoboMakerSourceConfig <a name="aws-cdk-sdk.robomaker.RoboMakerSourceConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerSourceConfig: robomaker.RoboMakerSourceConfig = { ... }
```

##### `architecture`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSourceConfig.property.architecture"></a>

- *Type:* `string`

---

##### `s3Bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSourceConfig.property.s3Bucket"></a>

- *Type:* `string`

---

##### `s3Key`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSourceConfig.property.s3Key"></a>

- *Type:* `string`

---

### RoboMakerStartSimulationJobBatchRequest <a name="aws-cdk-sdk.robomaker.RoboMakerStartSimulationJobBatchRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerStartSimulationJobBatchRequest: robomaker.RoboMakerStartSimulationJobBatchRequest = { ... }
```

##### `createSimulationJobRequests`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerStartSimulationJobBatchRequest.property.createSimulationJobRequests"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSimulationJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerSimulationJobRequest)[]

---

##### `batchPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerStartSimulationJobBatchRequest.property.batchPolicy"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerBatchPolicy`](#aws-cdk-sdk.robomaker.RoboMakerBatchPolicy)

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerStartSimulationJobBatchRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerStartSimulationJobBatchRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### RoboMakerStartSimulationJobBatchResponse <a name="aws-cdk-sdk.robomaker.RoboMakerStartSimulationJobBatchResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerStartSimulationJobBatchResponse: robomaker.RoboMakerStartSimulationJobBatchResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerStartSimulationJobBatchResponse.property.arn"></a>

- *Type:* `string`

---

##### `batchPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerStartSimulationJobBatchResponse.property.batchPolicy"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerBatchPolicy`](#aws-cdk-sdk.robomaker.RoboMakerBatchPolicy)

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerStartSimulationJobBatchResponse.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerStartSimulationJobBatchResponse.property.createdAt"></a>

- *Type:* `string`

---

##### `createdRequests`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerStartSimulationJobBatchResponse.property.createdRequests"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSimulationJobSummary`](#aws-cdk-sdk.robomaker.RoboMakerSimulationJobSummary)[]

---

##### `failedRequests`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerStartSimulationJobBatchResponse.property.failedRequests"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerFailedCreateSimulationJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerFailedCreateSimulationJobRequest)[]

---

##### `failureCode`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerStartSimulationJobBatchResponse.property.failureCode"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerStartSimulationJobBatchResponse.property.failureReason"></a>

- *Type:* `string`

---

##### `pendingRequests`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerStartSimulationJobBatchResponse.property.pendingRequests"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSimulationJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerSimulationJobRequest)[]

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerStartSimulationJobBatchResponse.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerStartSimulationJobBatchResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### RoboMakerSyncDeploymentJobRequest <a name="aws-cdk-sdk.robomaker.RoboMakerSyncDeploymentJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerSyncDeploymentJobRequest: robomaker.RoboMakerSyncDeploymentJobRequest = { ... }
```

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSyncDeploymentJobRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `fleet`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSyncDeploymentJobRequest.property.fleet"></a>

- *Type:* `string`

---

### RoboMakerSyncDeploymentJobResponse <a name="aws-cdk-sdk.robomaker.RoboMakerSyncDeploymentJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerSyncDeploymentJobResponse: robomaker.RoboMakerSyncDeploymentJobResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSyncDeploymentJobResponse.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSyncDeploymentJobResponse.property.createdAt"></a>

- *Type:* `string`

---

##### `deploymentApplicationConfigs`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSyncDeploymentJobResponse.property.deploymentApplicationConfigs"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDeploymentApplicationConfig`](#aws-cdk-sdk.robomaker.RoboMakerDeploymentApplicationConfig)[]

---

##### `deploymentConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSyncDeploymentJobResponse.property.deploymentConfig"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDeploymentConfig`](#aws-cdk-sdk.robomaker.RoboMakerDeploymentConfig)

---

##### `failureCode`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSyncDeploymentJobResponse.property.failureCode"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSyncDeploymentJobResponse.property.failureReason"></a>

- *Type:* `string`

---

##### `fleet`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSyncDeploymentJobResponse.property.fleet"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerSyncDeploymentJobResponse.property.status"></a>

- *Type:* `string`

---

### RoboMakerTagResourceRequest <a name="aws-cdk-sdk.robomaker.RoboMakerTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerTagResourceRequest: robomaker.RoboMakerTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerTagResourceRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### RoboMakerTagResourceResponse <a name="aws-cdk-sdk.robomaker.RoboMakerTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerTagResourceResponse: robomaker.RoboMakerTagResourceResponse = { ... }
```

### RoboMakerTemplateLocation <a name="aws-cdk-sdk.robomaker.RoboMakerTemplateLocation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerTemplateLocation: robomaker.RoboMakerTemplateLocation = { ... }
```

##### `s3Bucket`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerTemplateLocation.property.s3Bucket"></a>

- *Type:* `string`

---

##### `s3Key`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerTemplateLocation.property.s3Key"></a>

- *Type:* `string`

---

### RoboMakerTemplateSummary <a name="aws-cdk-sdk.robomaker.RoboMakerTemplateSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerTemplateSummary: robomaker.RoboMakerTemplateSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerTemplateSummary.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerTemplateSummary.property.createdAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerTemplateSummary.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerTemplateSummary.property.name"></a>

- *Type:* `string`

---

### RoboMakerUntagResourceRequest <a name="aws-cdk-sdk.robomaker.RoboMakerUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerUntagResourceRequest: robomaker.RoboMakerUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### RoboMakerUntagResourceResponse <a name="aws-cdk-sdk.robomaker.RoboMakerUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerUntagResourceResponse: robomaker.RoboMakerUntagResourceResponse = { ... }
```

### RoboMakerUpdateRobotApplicationRequest <a name="aws-cdk-sdk.robomaker.RoboMakerUpdateRobotApplicationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerUpdateRobotApplicationRequest: robomaker.RoboMakerUpdateRobotApplicationRequest = { ... }
```

##### `application`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerUpdateRobotApplicationRequest.property.application"></a>

- *Type:* `string`

---

##### `robotSoftwareSuite`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerUpdateRobotApplicationRequest.property.robotSoftwareSuite"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerRobotSoftwareSuite`](#aws-cdk-sdk.robomaker.RoboMakerRobotSoftwareSuite)

---

##### `sources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerUpdateRobotApplicationRequest.property.sources"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSourceConfig`](#aws-cdk-sdk.robomaker.RoboMakerSourceConfig)[]

---

##### `currentRevisionId`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerUpdateRobotApplicationRequest.property.currentRevisionId"></a>

- *Type:* `string`

---

### RoboMakerUpdateRobotApplicationResponse <a name="aws-cdk-sdk.robomaker.RoboMakerUpdateRobotApplicationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerUpdateRobotApplicationResponse: robomaker.RoboMakerUpdateRobotApplicationResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerUpdateRobotApplicationResponse.property.arn"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerUpdateRobotApplicationResponse.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerUpdateRobotApplicationResponse.property.name"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerUpdateRobotApplicationResponse.property.revisionId"></a>

- *Type:* `string`

---

##### `robotSoftwareSuite`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerUpdateRobotApplicationResponse.property.robotSoftwareSuite"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerRobotSoftwareSuite`](#aws-cdk-sdk.robomaker.RoboMakerRobotSoftwareSuite)

---

##### `sources`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerUpdateRobotApplicationResponse.property.sources"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSource`](#aws-cdk-sdk.robomaker.RoboMakerSource)[]

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerUpdateRobotApplicationResponse.property.version"></a>

- *Type:* `string`

---

### RoboMakerUpdateSimulationApplicationRequest <a name="aws-cdk-sdk.robomaker.RoboMakerUpdateSimulationApplicationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerUpdateSimulationApplicationRequest: robomaker.RoboMakerUpdateSimulationApplicationRequest = { ... }
```

##### `application`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerUpdateSimulationApplicationRequest.property.application"></a>

- *Type:* `string`

---

##### `robotSoftwareSuite`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerUpdateSimulationApplicationRequest.property.robotSoftwareSuite"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerRobotSoftwareSuite`](#aws-cdk-sdk.robomaker.RoboMakerRobotSoftwareSuite)

---

##### `simulationSoftwareSuite`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerUpdateSimulationApplicationRequest.property.simulationSoftwareSuite"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSimulationSoftwareSuite`](#aws-cdk-sdk.robomaker.RoboMakerSimulationSoftwareSuite)

---

##### `sources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerUpdateSimulationApplicationRequest.property.sources"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSourceConfig`](#aws-cdk-sdk.robomaker.RoboMakerSourceConfig)[]

---

##### `currentRevisionId`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerUpdateSimulationApplicationRequest.property.currentRevisionId"></a>

- *Type:* `string`

---

##### `renderingEngine`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerUpdateSimulationApplicationRequest.property.renderingEngine"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerRenderingEngine`](#aws-cdk-sdk.robomaker.RoboMakerRenderingEngine)

---

### RoboMakerUpdateSimulationApplicationResponse <a name="aws-cdk-sdk.robomaker.RoboMakerUpdateSimulationApplicationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerUpdateSimulationApplicationResponse: robomaker.RoboMakerUpdateSimulationApplicationResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerUpdateSimulationApplicationResponse.property.arn"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerUpdateSimulationApplicationResponse.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerUpdateSimulationApplicationResponse.property.name"></a>

- *Type:* `string`

---

##### `renderingEngine`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerUpdateSimulationApplicationResponse.property.renderingEngine"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerRenderingEngine`](#aws-cdk-sdk.robomaker.RoboMakerRenderingEngine)

---

##### `revisionId`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerUpdateSimulationApplicationResponse.property.revisionId"></a>

- *Type:* `string`

---

##### `robotSoftwareSuite`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerUpdateSimulationApplicationResponse.property.robotSoftwareSuite"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerRobotSoftwareSuite`](#aws-cdk-sdk.robomaker.RoboMakerRobotSoftwareSuite)

---

##### `simulationSoftwareSuite`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerUpdateSimulationApplicationResponse.property.simulationSoftwareSuite"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSimulationSoftwareSuite`](#aws-cdk-sdk.robomaker.RoboMakerSimulationSoftwareSuite)

---

##### `sources`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerUpdateSimulationApplicationResponse.property.sources"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSource`](#aws-cdk-sdk.robomaker.RoboMakerSource)[]

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerUpdateSimulationApplicationResponse.property.version"></a>

- *Type:* `string`

---

### RoboMakerUpdateWorldTemplateRequest <a name="aws-cdk-sdk.robomaker.RoboMakerUpdateWorldTemplateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerUpdateWorldTemplateRequest: robomaker.RoboMakerUpdateWorldTemplateRequest = { ... }
```

##### `template`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerUpdateWorldTemplateRequest.property.template"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerUpdateWorldTemplateRequest.property.name"></a>

- *Type:* `string`

---

##### `templateBody`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerUpdateWorldTemplateRequest.property.templateBody"></a>

- *Type:* `string`

---

##### `templateLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerUpdateWorldTemplateRequest.property.templateLocation"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerTemplateLocation`](#aws-cdk-sdk.robomaker.RoboMakerTemplateLocation)

---

### RoboMakerUpdateWorldTemplateResponse <a name="aws-cdk-sdk.robomaker.RoboMakerUpdateWorldTemplateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerUpdateWorldTemplateResponse: robomaker.RoboMakerUpdateWorldTemplateResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerUpdateWorldTemplateResponse.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerUpdateWorldTemplateResponse.property.createdAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerUpdateWorldTemplateResponse.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerUpdateWorldTemplateResponse.property.name"></a>

- *Type:* `string`

---

### RoboMakerVpcConfig <a name="aws-cdk-sdk.robomaker.RoboMakerVpcConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerVpcConfig: robomaker.RoboMakerVpcConfig = { ... }
```

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerVpcConfig.property.subnets"></a>

- *Type:* `string`[]

---

##### `assignPublicIp`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerVpcConfig.property.assignPublicIp"></a>

- *Type:* `boolean`

---

##### `securityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerVpcConfig.property.securityGroups"></a>

- *Type:* `string`[]

---

### RoboMakerVpcConfigResponse <a name="aws-cdk-sdk.robomaker.RoboMakerVpcConfigResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerVpcConfigResponse: robomaker.RoboMakerVpcConfigResponse = { ... }
```

##### `assignPublicIp`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerVpcConfigResponse.property.assignPublicIp"></a>

- *Type:* `boolean`

---

##### `securityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerVpcConfigResponse.property.securityGroups"></a>

- *Type:* `string`[]

---

##### `subnets`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerVpcConfigResponse.property.subnets"></a>

- *Type:* `string`[]

---

##### `vpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerVpcConfigResponse.property.vpcId"></a>

- *Type:* `string`

---

### RoboMakerWorldConfig <a name="aws-cdk-sdk.robomaker.RoboMakerWorldConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerWorldConfig: robomaker.RoboMakerWorldConfig = { ... }
```

##### `world`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerWorldConfig.property.world"></a>

- *Type:* `string`

---

### RoboMakerWorldCount <a name="aws-cdk-sdk.robomaker.RoboMakerWorldCount"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerWorldCount: robomaker.RoboMakerWorldCount = { ... }
```

##### `floorplanCount`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerWorldCount.property.floorplanCount"></a>

- *Type:* `number`

---

##### `interiorCountPerFloorplan`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerWorldCount.property.interiorCountPerFloorplan"></a>

- *Type:* `number`

---

### RoboMakerWorldExportJobSummary <a name="aws-cdk-sdk.robomaker.RoboMakerWorldExportJobSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerWorldExportJobSummary: robomaker.RoboMakerWorldExportJobSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerWorldExportJobSummary.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerWorldExportJobSummary.property.createdAt"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerWorldExportJobSummary.property.status"></a>

- *Type:* `string`

---

##### `worlds`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerWorldExportJobSummary.property.worlds"></a>

- *Type:* `string`[]

---

### RoboMakerWorldFailure <a name="aws-cdk-sdk.robomaker.RoboMakerWorldFailure"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerWorldFailure: robomaker.RoboMakerWorldFailure = { ... }
```

##### `failureCode`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerWorldFailure.property.failureCode"></a>

- *Type:* `string`

---

##### `failureCount`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerWorldFailure.property.failureCount"></a>

- *Type:* `number`

---

##### `sampleFailureReason`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerWorldFailure.property.sampleFailureReason"></a>

- *Type:* `string`

---

### RoboMakerWorldGenerationJobSummary <a name="aws-cdk-sdk.robomaker.RoboMakerWorldGenerationJobSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerWorldGenerationJobSummary: robomaker.RoboMakerWorldGenerationJobSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerWorldGenerationJobSummary.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerWorldGenerationJobSummary.property.createdAt"></a>

- *Type:* `string`

---

##### `failedWorldCount`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerWorldGenerationJobSummary.property.failedWorldCount"></a>

- *Type:* `number`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerWorldGenerationJobSummary.property.status"></a>

- *Type:* `string`

---

##### `succeededWorldCount`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerWorldGenerationJobSummary.property.succeededWorldCount"></a>

- *Type:* `number`

---

##### `template`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerWorldGenerationJobSummary.property.template"></a>

- *Type:* `string`

---

##### `worldCount`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerWorldGenerationJobSummary.property.worldCount"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerWorldCount`](#aws-cdk-sdk.robomaker.RoboMakerWorldCount)

---

### RoboMakerWorldSummary <a name="aws-cdk-sdk.robomaker.RoboMakerWorldSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

const roboMakerWorldSummary: robomaker.RoboMakerWorldSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerWorldSummary.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerWorldSummary.property.createdAt"></a>

- *Type:* `string`

---

##### `generationJob`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerWorldSummary.property.generationJob"></a>

- *Type:* `string`

---

##### `template`<sup>Optional</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerWorldSummary.property.template"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### RoboMakerResponsesBatchDeleteWorlds <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesBatchDeleteWorlds"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesBatchDeleteWorlds.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesBatchDeleteWorlds(__scope: Construct, __resources: string[], __input: RoboMakerBatchDeleteWorldsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesBatchDeleteWorlds.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesBatchDeleteWorlds.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesBatchDeleteWorlds.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerBatchDeleteWorldsRequest`](#aws-cdk-sdk.robomaker.RoboMakerBatchDeleteWorldsRequest)

---



#### Properties <a name="Properties"></a>

##### `unprocessedWorlds`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesBatchDeleteWorlds.property.unprocessedWorlds"></a>

- *Type:* `string`[]

---


### RoboMakerResponsesBatchDescribeSimulationJob <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesBatchDescribeSimulationJob"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesBatchDescribeSimulationJob.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesBatchDescribeSimulationJob(__scope: Construct, __resources: string[], __input: RoboMakerBatchDescribeSimulationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesBatchDescribeSimulationJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesBatchDescribeSimulationJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesBatchDescribeSimulationJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerBatchDescribeSimulationJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerBatchDescribeSimulationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `jobs`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesBatchDescribeSimulationJob.property.jobs"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSimulationJob`](#aws-cdk-sdk.robomaker.RoboMakerSimulationJob)[]

---

##### `unprocessedJobs`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesBatchDescribeSimulationJob.property.unprocessedJobs"></a>

- *Type:* `string`[]

---


### RoboMakerResponsesCreateDeploymentJob <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateDeploymentJob"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateDeploymentJob.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesCreateDeploymentJob(__scope: Construct, __resources: string[], __input: RoboMakerCreateDeploymentJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateDeploymentJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateDeploymentJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateDeploymentJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerCreateDeploymentJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerCreateDeploymentJobRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateDeploymentJob.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateDeploymentJob.property.createdAt"></a>

- *Type:* `string`

---

##### `deploymentApplicationConfigs`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateDeploymentJob.property.deploymentApplicationConfigs"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDeploymentApplicationConfig`](#aws-cdk-sdk.robomaker.RoboMakerDeploymentApplicationConfig)[]

---

##### `deploymentConfig`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateDeploymentJob.property.deploymentConfig"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerResponsesCreateDeploymentJobDeploymentConfig`](#aws-cdk-sdk.robomaker.RoboMakerResponsesCreateDeploymentJobDeploymentConfig)

---

##### `failureCode`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateDeploymentJob.property.failureCode"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateDeploymentJob.property.failureReason"></a>

- *Type:* `string`

---

##### `fleet`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateDeploymentJob.property.fleet"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateDeploymentJob.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateDeploymentJob.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### RoboMakerResponsesCreateDeploymentJobDeploymentConfig <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateDeploymentJobDeploymentConfig"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateDeploymentJobDeploymentConfig.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesCreateDeploymentJobDeploymentConfig(__scope: Construct, __resources: string[], __input: RoboMakerCreateDeploymentJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateDeploymentJobDeploymentConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateDeploymentJobDeploymentConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateDeploymentJobDeploymentConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerCreateDeploymentJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerCreateDeploymentJobRequest)

---



#### Properties <a name="Properties"></a>

##### `concurrentDeploymentPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateDeploymentJobDeploymentConfig.property.concurrentDeploymentPercentage"></a>

- *Type:* `number`

---

##### `downloadConditionFile`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateDeploymentJobDeploymentConfig.property.downloadConditionFile"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerResponsesCreateDeploymentJobDeploymentConfigDownloadConditionFile`](#aws-cdk-sdk.robomaker.RoboMakerResponsesCreateDeploymentJobDeploymentConfigDownloadConditionFile)

---

##### `failureThresholdPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateDeploymentJobDeploymentConfig.property.failureThresholdPercentage"></a>

- *Type:* `number`

---

##### `robotDeploymentTimeoutInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateDeploymentJobDeploymentConfig.property.robotDeploymentTimeoutInSeconds"></a>

- *Type:* `number`

---


### RoboMakerResponsesCreateDeploymentJobDeploymentConfigDownloadConditionFile <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateDeploymentJobDeploymentConfigDownloadConditionFile"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateDeploymentJobDeploymentConfigDownloadConditionFile.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesCreateDeploymentJobDeploymentConfigDownloadConditionFile(__scope: Construct, __resources: string[], __input: RoboMakerCreateDeploymentJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateDeploymentJobDeploymentConfigDownloadConditionFile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateDeploymentJobDeploymentConfigDownloadConditionFile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateDeploymentJobDeploymentConfigDownloadConditionFile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerCreateDeploymentJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerCreateDeploymentJobRequest)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateDeploymentJobDeploymentConfigDownloadConditionFile.property.bucket"></a>

- *Type:* `string`

---

##### `etag`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateDeploymentJobDeploymentConfigDownloadConditionFile.property.etag"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateDeploymentJobDeploymentConfigDownloadConditionFile.property.key"></a>

- *Type:* `string`

---


### RoboMakerResponsesCreateFleet <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateFleet"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateFleet.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesCreateFleet(__scope: Construct, __resources: string[], __input: RoboMakerCreateFleetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateFleet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateFleet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateFleet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerCreateFleetRequest`](#aws-cdk-sdk.robomaker.RoboMakerCreateFleetRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateFleet.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateFleet.property.createdAt"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateFleet.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateFleet.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### RoboMakerResponsesCreateRobot <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobot"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobot.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesCreateRobot(__scope: Construct, __resources: string[], __input: RoboMakerCreateRobotRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerCreateRobotRequest`](#aws-cdk-sdk.robomaker.RoboMakerCreateRobotRequest)

---



#### Properties <a name="Properties"></a>

##### `architecture`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobot.property.architecture"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobot.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobot.property.createdAt"></a>

- *Type:* `string`

---

##### `greengrassGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobot.property.greengrassGroupId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobot.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobot.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### RoboMakerResponsesCreateRobotApplication <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobotApplication"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobotApplication.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesCreateRobotApplication(__scope: Construct, __resources: string[], __input: RoboMakerCreateRobotApplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobotApplication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobotApplication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobotApplication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerCreateRobotApplicationRequest`](#aws-cdk-sdk.robomaker.RoboMakerCreateRobotApplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobotApplication.property.arn"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobotApplication.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobotApplication.property.name"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobotApplication.property.revisionId"></a>

- *Type:* `string`

---

##### `robotSoftwareSuite`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobotApplication.property.robotSoftwareSuite"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobotApplicationRobotSoftwareSuite`](#aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobotApplicationRobotSoftwareSuite)

---

##### `sources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobotApplication.property.sources"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSource`](#aws-cdk-sdk.robomaker.RoboMakerSource)[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobotApplication.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobotApplication.property.version"></a>

- *Type:* `string`

---


### RoboMakerResponsesCreateRobotApplicationRobotSoftwareSuite <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobotApplicationRobotSoftwareSuite"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobotApplicationRobotSoftwareSuite.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesCreateRobotApplicationRobotSoftwareSuite(__scope: Construct, __resources: string[], __input: RoboMakerCreateRobotApplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobotApplicationRobotSoftwareSuite.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobotApplicationRobotSoftwareSuite.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobotApplicationRobotSoftwareSuite.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerCreateRobotApplicationRequest`](#aws-cdk-sdk.robomaker.RoboMakerCreateRobotApplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobotApplicationRobotSoftwareSuite.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobotApplicationRobotSoftwareSuite.property.version"></a>

- *Type:* `string`

---


### RoboMakerResponsesCreateRobotApplicationVersion <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobotApplicationVersion"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobotApplicationVersion.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesCreateRobotApplicationVersion(__scope: Construct, __resources: string[], __input: RoboMakerCreateRobotApplicationVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobotApplicationVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobotApplicationVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobotApplicationVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerCreateRobotApplicationVersionRequest`](#aws-cdk-sdk.robomaker.RoboMakerCreateRobotApplicationVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobotApplicationVersion.property.arn"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobotApplicationVersion.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobotApplicationVersion.property.name"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobotApplicationVersion.property.revisionId"></a>

- *Type:* `string`

---

##### `robotSoftwareSuite`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobotApplicationVersion.property.robotSoftwareSuite"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobotApplicationVersionRobotSoftwareSuite`](#aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobotApplicationVersionRobotSoftwareSuite)

---

##### `sources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobotApplicationVersion.property.sources"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSource`](#aws-cdk-sdk.robomaker.RoboMakerSource)[]

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobotApplicationVersion.property.version"></a>

- *Type:* `string`

---


### RoboMakerResponsesCreateRobotApplicationVersionRobotSoftwareSuite <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobotApplicationVersionRobotSoftwareSuite"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobotApplicationVersionRobotSoftwareSuite.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesCreateRobotApplicationVersionRobotSoftwareSuite(__scope: Construct, __resources: string[], __input: RoboMakerCreateRobotApplicationVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobotApplicationVersionRobotSoftwareSuite.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobotApplicationVersionRobotSoftwareSuite.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobotApplicationVersionRobotSoftwareSuite.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerCreateRobotApplicationVersionRequest`](#aws-cdk-sdk.robomaker.RoboMakerCreateRobotApplicationVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobotApplicationVersionRobotSoftwareSuite.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateRobotApplicationVersionRobotSoftwareSuite.property.version"></a>

- *Type:* `string`

---


### RoboMakerResponsesCreateSimulationApplication <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplication"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplication.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesCreateSimulationApplication(__scope: Construct, __resources: string[], __input: RoboMakerCreateSimulationApplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationRequest`](#aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplication.property.arn"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplication.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplication.property.name"></a>

- *Type:* `string`

---

##### `renderingEngine`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplication.property.renderingEngine"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationRenderingEngine`](#aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationRenderingEngine)

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplication.property.revisionId"></a>

- *Type:* `string`

---

##### `robotSoftwareSuite`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplication.property.robotSoftwareSuite"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationRobotSoftwareSuite`](#aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationRobotSoftwareSuite)

---

##### `simulationSoftwareSuite`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplication.property.simulationSoftwareSuite"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationSimulationSoftwareSuite`](#aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationSimulationSoftwareSuite)

---

##### `sources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplication.property.sources"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSource`](#aws-cdk-sdk.robomaker.RoboMakerSource)[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplication.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplication.property.version"></a>

- *Type:* `string`

---


### RoboMakerResponsesCreateSimulationApplicationRenderingEngine <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationRenderingEngine"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationRenderingEngine.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesCreateSimulationApplicationRenderingEngine(__scope: Construct, __resources: string[], __input: RoboMakerCreateSimulationApplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationRenderingEngine.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationRenderingEngine.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationRenderingEngine.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationRequest`](#aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationRenderingEngine.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationRenderingEngine.property.version"></a>

- *Type:* `string`

---


### RoboMakerResponsesCreateSimulationApplicationRobotSoftwareSuite <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationRobotSoftwareSuite"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationRobotSoftwareSuite.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesCreateSimulationApplicationRobotSoftwareSuite(__scope: Construct, __resources: string[], __input: RoboMakerCreateSimulationApplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationRobotSoftwareSuite.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationRobotSoftwareSuite.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationRobotSoftwareSuite.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationRequest`](#aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationRobotSoftwareSuite.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationRobotSoftwareSuite.property.version"></a>

- *Type:* `string`

---


### RoboMakerResponsesCreateSimulationApplicationSimulationSoftwareSuite <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationSimulationSoftwareSuite"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationSimulationSoftwareSuite.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesCreateSimulationApplicationSimulationSoftwareSuite(__scope: Construct, __resources: string[], __input: RoboMakerCreateSimulationApplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationSimulationSoftwareSuite.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationSimulationSoftwareSuite.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationSimulationSoftwareSuite.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationRequest`](#aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationSimulationSoftwareSuite.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationSimulationSoftwareSuite.property.version"></a>

- *Type:* `string`

---


### RoboMakerResponsesCreateSimulationApplicationVersion <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationVersion"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationVersion.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesCreateSimulationApplicationVersion(__scope: Construct, __resources: string[], __input: RoboMakerCreateSimulationApplicationVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationVersionRequest`](#aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationVersion.property.arn"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationVersion.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationVersion.property.name"></a>

- *Type:* `string`

---

##### `renderingEngine`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationVersion.property.renderingEngine"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationVersionRenderingEngine`](#aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationVersionRenderingEngine)

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationVersion.property.revisionId"></a>

- *Type:* `string`

---

##### `robotSoftwareSuite`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationVersion.property.robotSoftwareSuite"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationVersionRobotSoftwareSuite`](#aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationVersionRobotSoftwareSuite)

---

##### `simulationSoftwareSuite`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationVersion.property.simulationSoftwareSuite"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationVersionSimulationSoftwareSuite`](#aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationVersionSimulationSoftwareSuite)

---

##### `sources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationVersion.property.sources"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSource`](#aws-cdk-sdk.robomaker.RoboMakerSource)[]

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationVersion.property.version"></a>

- *Type:* `string`

---


### RoboMakerResponsesCreateSimulationApplicationVersionRenderingEngine <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationVersionRenderingEngine"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationVersionRenderingEngine.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesCreateSimulationApplicationVersionRenderingEngine(__scope: Construct, __resources: string[], __input: RoboMakerCreateSimulationApplicationVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationVersionRenderingEngine.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationVersionRenderingEngine.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationVersionRenderingEngine.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationVersionRequest`](#aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationVersionRenderingEngine.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationVersionRenderingEngine.property.version"></a>

- *Type:* `string`

---


### RoboMakerResponsesCreateSimulationApplicationVersionRobotSoftwareSuite <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationVersionRobotSoftwareSuite"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationVersionRobotSoftwareSuite.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesCreateSimulationApplicationVersionRobotSoftwareSuite(__scope: Construct, __resources: string[], __input: RoboMakerCreateSimulationApplicationVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationVersionRobotSoftwareSuite.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationVersionRobotSoftwareSuite.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationVersionRobotSoftwareSuite.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationVersionRequest`](#aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationVersionRobotSoftwareSuite.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationVersionRobotSoftwareSuite.property.version"></a>

- *Type:* `string`

---


### RoboMakerResponsesCreateSimulationApplicationVersionSimulationSoftwareSuite <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationVersionSimulationSoftwareSuite"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationVersionSimulationSoftwareSuite.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesCreateSimulationApplicationVersionSimulationSoftwareSuite(__scope: Construct, __resources: string[], __input: RoboMakerCreateSimulationApplicationVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationVersionSimulationSoftwareSuite.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationVersionSimulationSoftwareSuite.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationVersionSimulationSoftwareSuite.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationVersionRequest`](#aws-cdk-sdk.robomaker.RoboMakerCreateSimulationApplicationVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationVersionSimulationSoftwareSuite.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationApplicationVersionSimulationSoftwareSuite.property.version"></a>

- *Type:* `string`

---


### RoboMakerResponsesCreateSimulationJob <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJob"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJob.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesCreateSimulationJob(__scope: Construct, __resources: string[], __input: RoboMakerCreateSimulationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerCreateSimulationJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerCreateSimulationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJob.property.arn"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJob.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `compute`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJob.property.compute"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJobCompute`](#aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJobCompute)

---

##### `dataSources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJob.property.dataSources"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDataSource`](#aws-cdk-sdk.robomaker.RoboMakerDataSource)[]

---

##### `failureBehavior`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJob.property.failureBehavior"></a>

- *Type:* `string`

---

##### `failureCode`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJob.property.failureCode"></a>

- *Type:* `string`

---

##### `iamRole`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJob.property.iamRole"></a>

- *Type:* `string`

---

##### `lastStartedAt`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJob.property.lastStartedAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJob.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `loggingConfig`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJob.property.loggingConfig"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJobLoggingConfig`](#aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJobLoggingConfig)

---

##### `maxJobDurationInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJob.property.maxJobDurationInSeconds"></a>

- *Type:* `number`

---

##### `outputLocation`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJob.property.outputLocation"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJobOutputLocation`](#aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJobOutputLocation)

---

##### `robotApplications`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJob.property.robotApplications"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerRobotApplicationConfig`](#aws-cdk-sdk.robomaker.RoboMakerRobotApplicationConfig)[]

---

##### `simulationApplications`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJob.property.simulationApplications"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSimulationApplicationConfig`](#aws-cdk-sdk.robomaker.RoboMakerSimulationApplicationConfig)[]

---

##### `simulationTimeMillis`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJob.property.simulationTimeMillis"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJob.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJob.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `vpcConfig`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJob.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJobVpcConfig`](#aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJobVpcConfig)

---


### RoboMakerResponsesCreateSimulationJobCompute <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJobCompute"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJobCompute.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesCreateSimulationJobCompute(__scope: Construct, __resources: string[], __input: RoboMakerCreateSimulationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJobCompute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJobCompute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJobCompute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerCreateSimulationJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerCreateSimulationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `simulationUnitLimit`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJobCompute.property.simulationUnitLimit"></a>

- *Type:* `number`

---


### RoboMakerResponsesCreateSimulationJobLoggingConfig <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJobLoggingConfig"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJobLoggingConfig.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesCreateSimulationJobLoggingConfig(__scope: Construct, __resources: string[], __input: RoboMakerCreateSimulationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJobLoggingConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJobLoggingConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJobLoggingConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerCreateSimulationJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerCreateSimulationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `recordAllRosTopics`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJobLoggingConfig.property.recordAllRosTopics"></a>

- *Type:* `boolean`

---


### RoboMakerResponsesCreateSimulationJobOutputLocation <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJobOutputLocation"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJobOutputLocation.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesCreateSimulationJobOutputLocation(__scope: Construct, __resources: string[], __input: RoboMakerCreateSimulationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJobOutputLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJobOutputLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJobOutputLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerCreateSimulationJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerCreateSimulationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `s3Bucket`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJobOutputLocation.property.s3Bucket"></a>

- *Type:* `string`

---

##### `s3Prefix`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJobOutputLocation.property.s3Prefix"></a>

- *Type:* `string`

---


### RoboMakerResponsesCreateSimulationJobVpcConfig <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJobVpcConfig"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJobVpcConfig.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesCreateSimulationJobVpcConfig(__scope: Construct, __resources: string[], __input: RoboMakerCreateSimulationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJobVpcConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJobVpcConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJobVpcConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerCreateSimulationJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerCreateSimulationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `assignPublicIp`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJobVpcConfig.property.assignPublicIp"></a>

- *Type:* `boolean`

---

##### `securityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJobVpcConfig.property.securityGroups"></a>

- *Type:* `string`[]

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJobVpcConfig.property.subnets"></a>

- *Type:* `string`[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateSimulationJobVpcConfig.property.vpcId"></a>

- *Type:* `string`

---


### RoboMakerResponsesCreateWorldExportJob <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldExportJob"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldExportJob.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesCreateWorldExportJob(__scope: Construct, __resources: string[], __input: RoboMakerCreateWorldExportJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldExportJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldExportJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldExportJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerCreateWorldExportJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerCreateWorldExportJobRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldExportJob.property.arn"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldExportJob.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldExportJob.property.createdAt"></a>

- *Type:* `string`

---

##### `failureCode`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldExportJob.property.failureCode"></a>

- *Type:* `string`

---

##### `iamRole`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldExportJob.property.iamRole"></a>

- *Type:* `string`

---

##### `outputLocation`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldExportJob.property.outputLocation"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldExportJobOutputLocation`](#aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldExportJobOutputLocation)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldExportJob.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldExportJob.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### RoboMakerResponsesCreateWorldExportJobOutputLocation <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldExportJobOutputLocation"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldExportJobOutputLocation.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesCreateWorldExportJobOutputLocation(__scope: Construct, __resources: string[], __input: RoboMakerCreateWorldExportJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldExportJobOutputLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldExportJobOutputLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldExportJobOutputLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerCreateWorldExportJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerCreateWorldExportJobRequest)

---



#### Properties <a name="Properties"></a>

##### `s3Bucket`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldExportJobOutputLocation.property.s3Bucket"></a>

- *Type:* `string`

---

##### `s3Prefix`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldExportJobOutputLocation.property.s3Prefix"></a>

- *Type:* `string`

---


### RoboMakerResponsesCreateWorldGenerationJob <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldGenerationJob"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldGenerationJob.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesCreateWorldGenerationJob(__scope: Construct, __resources: string[], __input: RoboMakerCreateWorldGenerationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldGenerationJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldGenerationJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldGenerationJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerCreateWorldGenerationJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerCreateWorldGenerationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldGenerationJob.property.arn"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldGenerationJob.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldGenerationJob.property.createdAt"></a>

- *Type:* `string`

---

##### `failureCode`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldGenerationJob.property.failureCode"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldGenerationJob.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldGenerationJob.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `template`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldGenerationJob.property.template"></a>

- *Type:* `string`

---

##### `worldCount`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldGenerationJob.property.worldCount"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldGenerationJobWorldCount`](#aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldGenerationJobWorldCount)

---

##### `worldTags`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldGenerationJob.property.worldTags"></a>

- *Type:* {[ key: string ]: `string`}

---


### RoboMakerResponsesCreateWorldGenerationJobWorldCount <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldGenerationJobWorldCount"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldGenerationJobWorldCount.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesCreateWorldGenerationJobWorldCount(__scope: Construct, __resources: string[], __input: RoboMakerCreateWorldGenerationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldGenerationJobWorldCount.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldGenerationJobWorldCount.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldGenerationJobWorldCount.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerCreateWorldGenerationJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerCreateWorldGenerationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `floorplanCount`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldGenerationJobWorldCount.property.floorplanCount"></a>

- *Type:* `number`

---

##### `interiorCountPerFloorplan`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldGenerationJobWorldCount.property.interiorCountPerFloorplan"></a>

- *Type:* `number`

---


### RoboMakerResponsesCreateWorldTemplate <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldTemplate.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesCreateWorldTemplate(__scope: Construct, __resources: string[], __input: RoboMakerCreateWorldTemplateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerCreateWorldTemplateRequest`](#aws-cdk-sdk.robomaker.RoboMakerCreateWorldTemplateRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldTemplate.property.arn"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldTemplate.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldTemplate.property.createdAt"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldTemplate.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesCreateWorldTemplate.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### RoboMakerResponsesDeregisterRobot <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDeregisterRobot"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDeregisterRobot.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesDeregisterRobot(__scope: Construct, __resources: string[], __input: RoboMakerDeregisterRobotRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDeregisterRobot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDeregisterRobot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDeregisterRobot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDeregisterRobotRequest`](#aws-cdk-sdk.robomaker.RoboMakerDeregisterRobotRequest)

---



#### Properties <a name="Properties"></a>

##### `fleet`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDeregisterRobot.property.fleet"></a>

- *Type:* `string`

---

##### `robot`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDeregisterRobot.property.robot"></a>

- *Type:* `string`

---


### RoboMakerResponsesDescribeDeploymentJob <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeDeploymentJob"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeDeploymentJob.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesDescribeDeploymentJob(__scope: Construct, __resources: string[], __input: RoboMakerDescribeDeploymentJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeDeploymentJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeDeploymentJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeDeploymentJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDescribeDeploymentJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerDescribeDeploymentJobRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeDeploymentJob.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeDeploymentJob.property.createdAt"></a>

- *Type:* `string`

---

##### `deploymentApplicationConfigs`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeDeploymentJob.property.deploymentApplicationConfigs"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDeploymentApplicationConfig`](#aws-cdk-sdk.robomaker.RoboMakerDeploymentApplicationConfig)[]

---

##### `deploymentConfig`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeDeploymentJob.property.deploymentConfig"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeDeploymentJobDeploymentConfig`](#aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeDeploymentJobDeploymentConfig)

---

##### `failureCode`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeDeploymentJob.property.failureCode"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeDeploymentJob.property.failureReason"></a>

- *Type:* `string`

---

##### `fleet`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeDeploymentJob.property.fleet"></a>

- *Type:* `string`

---

##### `robotDeploymentSummary`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeDeploymentJob.property.robotDeploymentSummary"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerRobotDeployment`](#aws-cdk-sdk.robomaker.RoboMakerRobotDeployment)[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeDeploymentJob.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeDeploymentJob.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### RoboMakerResponsesDescribeDeploymentJobDeploymentConfig <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeDeploymentJobDeploymentConfig"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeDeploymentJobDeploymentConfig.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesDescribeDeploymentJobDeploymentConfig(__scope: Construct, __resources: string[], __input: RoboMakerDescribeDeploymentJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeDeploymentJobDeploymentConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeDeploymentJobDeploymentConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeDeploymentJobDeploymentConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDescribeDeploymentJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerDescribeDeploymentJobRequest)

---



#### Properties <a name="Properties"></a>

##### `concurrentDeploymentPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeDeploymentJobDeploymentConfig.property.concurrentDeploymentPercentage"></a>

- *Type:* `number`

---

##### `downloadConditionFile`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeDeploymentJobDeploymentConfig.property.downloadConditionFile"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeDeploymentJobDeploymentConfigDownloadConditionFile`](#aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeDeploymentJobDeploymentConfigDownloadConditionFile)

---

##### `failureThresholdPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeDeploymentJobDeploymentConfig.property.failureThresholdPercentage"></a>

- *Type:* `number`

---

##### `robotDeploymentTimeoutInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeDeploymentJobDeploymentConfig.property.robotDeploymentTimeoutInSeconds"></a>

- *Type:* `number`

---


### RoboMakerResponsesDescribeDeploymentJobDeploymentConfigDownloadConditionFile <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeDeploymentJobDeploymentConfigDownloadConditionFile"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeDeploymentJobDeploymentConfigDownloadConditionFile.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesDescribeDeploymentJobDeploymentConfigDownloadConditionFile(__scope: Construct, __resources: string[], __input: RoboMakerDescribeDeploymentJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeDeploymentJobDeploymentConfigDownloadConditionFile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeDeploymentJobDeploymentConfigDownloadConditionFile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeDeploymentJobDeploymentConfigDownloadConditionFile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDescribeDeploymentJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerDescribeDeploymentJobRequest)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeDeploymentJobDeploymentConfigDownloadConditionFile.property.bucket"></a>

- *Type:* `string`

---

##### `etag`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeDeploymentJobDeploymentConfigDownloadConditionFile.property.etag"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeDeploymentJobDeploymentConfigDownloadConditionFile.property.key"></a>

- *Type:* `string`

---


### RoboMakerResponsesDescribeFleet <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeFleet"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeFleet.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesDescribeFleet(__scope: Construct, __resources: string[], __input: RoboMakerDescribeFleetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeFleet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeFleet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeFleet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDescribeFleetRequest`](#aws-cdk-sdk.robomaker.RoboMakerDescribeFleetRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeFleet.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeFleet.property.createdAt"></a>

- *Type:* `string`

---

##### `lastDeploymentJob`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeFleet.property.lastDeploymentJob"></a>

- *Type:* `string`

---

##### `lastDeploymentStatus`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeFleet.property.lastDeploymentStatus"></a>

- *Type:* `string`

---

##### `lastDeploymentTime`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeFleet.property.lastDeploymentTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeFleet.property.name"></a>

- *Type:* `string`

---

##### `robots`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeFleet.property.robots"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerRobot`](#aws-cdk-sdk.robomaker.RoboMakerRobot)[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeFleet.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### RoboMakerResponsesDescribeRobot <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeRobot"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeRobot.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesDescribeRobot(__scope: Construct, __resources: string[], __input: RoboMakerDescribeRobotRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeRobot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeRobot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeRobot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDescribeRobotRequest`](#aws-cdk-sdk.robomaker.RoboMakerDescribeRobotRequest)

---



#### Properties <a name="Properties"></a>

##### `architecture`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeRobot.property.architecture"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeRobot.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeRobot.property.createdAt"></a>

- *Type:* `string`

---

##### `fleetArn`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeRobot.property.fleetArn"></a>

- *Type:* `string`

---

##### `greengrassGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeRobot.property.greengrassGroupId"></a>

- *Type:* `string`

---

##### `lastDeploymentJob`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeRobot.property.lastDeploymentJob"></a>

- *Type:* `string`

---

##### `lastDeploymentTime`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeRobot.property.lastDeploymentTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeRobot.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeRobot.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeRobot.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### RoboMakerResponsesDescribeRobotApplication <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeRobotApplication"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeRobotApplication.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesDescribeRobotApplication(__scope: Construct, __resources: string[], __input: RoboMakerDescribeRobotApplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeRobotApplication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeRobotApplication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeRobotApplication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDescribeRobotApplicationRequest`](#aws-cdk-sdk.robomaker.RoboMakerDescribeRobotApplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeRobotApplication.property.arn"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeRobotApplication.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeRobotApplication.property.name"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeRobotApplication.property.revisionId"></a>

- *Type:* `string`

---

##### `robotSoftwareSuite`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeRobotApplication.property.robotSoftwareSuite"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeRobotApplicationRobotSoftwareSuite`](#aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeRobotApplicationRobotSoftwareSuite)

---

##### `sources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeRobotApplication.property.sources"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSource`](#aws-cdk-sdk.robomaker.RoboMakerSource)[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeRobotApplication.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeRobotApplication.property.version"></a>

- *Type:* `string`

---


### RoboMakerResponsesDescribeRobotApplicationRobotSoftwareSuite <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeRobotApplicationRobotSoftwareSuite"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeRobotApplicationRobotSoftwareSuite.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesDescribeRobotApplicationRobotSoftwareSuite(__scope: Construct, __resources: string[], __input: RoboMakerDescribeRobotApplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeRobotApplicationRobotSoftwareSuite.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeRobotApplicationRobotSoftwareSuite.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeRobotApplicationRobotSoftwareSuite.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDescribeRobotApplicationRequest`](#aws-cdk-sdk.robomaker.RoboMakerDescribeRobotApplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeRobotApplicationRobotSoftwareSuite.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeRobotApplicationRobotSoftwareSuite.property.version"></a>

- *Type:* `string`

---


### RoboMakerResponsesDescribeSimulationApplication <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationApplication"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationApplication.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesDescribeSimulationApplication(__scope: Construct, __resources: string[], __input: RoboMakerDescribeSimulationApplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationApplication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationApplication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationApplication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationApplicationRequest`](#aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationApplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationApplication.property.arn"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationApplication.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationApplication.property.name"></a>

- *Type:* `string`

---

##### `renderingEngine`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationApplication.property.renderingEngine"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationApplicationRenderingEngine`](#aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationApplicationRenderingEngine)

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationApplication.property.revisionId"></a>

- *Type:* `string`

---

##### `robotSoftwareSuite`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationApplication.property.robotSoftwareSuite"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationApplicationRobotSoftwareSuite`](#aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationApplicationRobotSoftwareSuite)

---

##### `simulationSoftwareSuite`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationApplication.property.simulationSoftwareSuite"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationApplicationSimulationSoftwareSuite`](#aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationApplicationSimulationSoftwareSuite)

---

##### `sources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationApplication.property.sources"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSource`](#aws-cdk-sdk.robomaker.RoboMakerSource)[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationApplication.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationApplication.property.version"></a>

- *Type:* `string`

---


### RoboMakerResponsesDescribeSimulationApplicationRenderingEngine <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationApplicationRenderingEngine"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationApplicationRenderingEngine.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesDescribeSimulationApplicationRenderingEngine(__scope: Construct, __resources: string[], __input: RoboMakerDescribeSimulationApplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationApplicationRenderingEngine.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationApplicationRenderingEngine.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationApplicationRenderingEngine.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationApplicationRequest`](#aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationApplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationApplicationRenderingEngine.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationApplicationRenderingEngine.property.version"></a>

- *Type:* `string`

---


### RoboMakerResponsesDescribeSimulationApplicationRobotSoftwareSuite <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationApplicationRobotSoftwareSuite"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationApplicationRobotSoftwareSuite.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesDescribeSimulationApplicationRobotSoftwareSuite(__scope: Construct, __resources: string[], __input: RoboMakerDescribeSimulationApplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationApplicationRobotSoftwareSuite.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationApplicationRobotSoftwareSuite.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationApplicationRobotSoftwareSuite.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationApplicationRequest`](#aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationApplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationApplicationRobotSoftwareSuite.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationApplicationRobotSoftwareSuite.property.version"></a>

- *Type:* `string`

---


### RoboMakerResponsesDescribeSimulationApplicationSimulationSoftwareSuite <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationApplicationSimulationSoftwareSuite"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationApplicationSimulationSoftwareSuite.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesDescribeSimulationApplicationSimulationSoftwareSuite(__scope: Construct, __resources: string[], __input: RoboMakerDescribeSimulationApplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationApplicationSimulationSoftwareSuite.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationApplicationSimulationSoftwareSuite.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationApplicationSimulationSoftwareSuite.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationApplicationRequest`](#aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationApplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationApplicationSimulationSoftwareSuite.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationApplicationSimulationSoftwareSuite.property.version"></a>

- *Type:* `string`

---


### RoboMakerResponsesDescribeSimulationJob <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJob"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJob.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesDescribeSimulationJob(__scope: Construct, __resources: string[], __input: RoboMakerDescribeSimulationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJob.property.arn"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJob.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `compute`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJob.property.compute"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobCompute`](#aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobCompute)

---

##### `dataSources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJob.property.dataSources"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDataSource`](#aws-cdk-sdk.robomaker.RoboMakerDataSource)[]

---

##### `failureBehavior`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJob.property.failureBehavior"></a>

- *Type:* `string`

---

##### `failureCode`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJob.property.failureCode"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJob.property.failureReason"></a>

- *Type:* `string`

---

##### `iamRole`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJob.property.iamRole"></a>

- *Type:* `string`

---

##### `lastStartedAt`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJob.property.lastStartedAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJob.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `loggingConfig`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJob.property.loggingConfig"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobLoggingConfig`](#aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobLoggingConfig)

---

##### `maxJobDurationInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJob.property.maxJobDurationInSeconds"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJob.property.name"></a>

- *Type:* `string`

---

##### `networkInterface`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJob.property.networkInterface"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobNetworkInterface`](#aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobNetworkInterface)

---

##### `outputLocation`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJob.property.outputLocation"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobOutputLocation`](#aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobOutputLocation)

---

##### `robotApplications`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJob.property.robotApplications"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerRobotApplicationConfig`](#aws-cdk-sdk.robomaker.RoboMakerRobotApplicationConfig)[]

---

##### `simulationApplications`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJob.property.simulationApplications"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSimulationApplicationConfig`](#aws-cdk-sdk.robomaker.RoboMakerSimulationApplicationConfig)[]

---

##### `simulationTimeMillis`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJob.property.simulationTimeMillis"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJob.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJob.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `vpcConfig`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJob.property.vpcConfig"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobVpcConfig`](#aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobVpcConfig)

---


### RoboMakerResponsesDescribeSimulationJobBatch <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobBatch"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobBatch.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesDescribeSimulationJobBatch(__scope: Construct, __resources: string[], __input: RoboMakerDescribeSimulationJobBatchRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobBatch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobBatch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobBatch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobBatchRequest`](#aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobBatchRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobBatch.property.arn"></a>

- *Type:* `string`

---

##### `batchPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobBatch.property.batchPolicy"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobBatchBatchPolicy`](#aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobBatchBatchPolicy)

---

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobBatch.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobBatch.property.createdAt"></a>

- *Type:* `string`

---

##### `createdRequests`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobBatch.property.createdRequests"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSimulationJobSummary`](#aws-cdk-sdk.robomaker.RoboMakerSimulationJobSummary)[]

---

##### `failedRequests`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobBatch.property.failedRequests"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerFailedCreateSimulationJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerFailedCreateSimulationJobRequest)[]

---

##### `failureCode`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobBatch.property.failureCode"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobBatch.property.failureReason"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobBatch.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `pendingRequests`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobBatch.property.pendingRequests"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSimulationJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerSimulationJobRequest)[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobBatch.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobBatch.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### RoboMakerResponsesDescribeSimulationJobBatchBatchPolicy <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobBatchBatchPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobBatchBatchPolicy.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesDescribeSimulationJobBatchBatchPolicy(__scope: Construct, __resources: string[], __input: RoboMakerDescribeSimulationJobBatchRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobBatchBatchPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobBatchBatchPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobBatchBatchPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobBatchRequest`](#aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobBatchRequest)

---



#### Properties <a name="Properties"></a>

##### `maxConcurrency`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobBatchBatchPolicy.property.maxConcurrency"></a>

- *Type:* `number`

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobBatchBatchPolicy.property.timeoutInSeconds"></a>

- *Type:* `number`

---


### RoboMakerResponsesDescribeSimulationJobCompute <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobCompute"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobCompute.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesDescribeSimulationJobCompute(__scope: Construct, __resources: string[], __input: RoboMakerDescribeSimulationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobCompute.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobCompute.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobCompute.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `simulationUnitLimit`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobCompute.property.simulationUnitLimit"></a>

- *Type:* `number`

---


### RoboMakerResponsesDescribeSimulationJobLoggingConfig <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobLoggingConfig"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobLoggingConfig.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesDescribeSimulationJobLoggingConfig(__scope: Construct, __resources: string[], __input: RoboMakerDescribeSimulationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobLoggingConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobLoggingConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobLoggingConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `recordAllRosTopics`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobLoggingConfig.property.recordAllRosTopics"></a>

- *Type:* `boolean`

---


### RoboMakerResponsesDescribeSimulationJobNetworkInterface <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobNetworkInterface"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobNetworkInterface.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesDescribeSimulationJobNetworkInterface(__scope: Construct, __resources: string[], __input: RoboMakerDescribeSimulationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobNetworkInterface.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobNetworkInterface.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobNetworkInterface.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `networkInterfaceId`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobNetworkInterface.property.networkInterfaceId"></a>

- *Type:* `string`

---

##### `privateIpAddress`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobNetworkInterface.property.privateIpAddress"></a>

- *Type:* `string`

---

##### `publicIpAddress`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobNetworkInterface.property.publicIpAddress"></a>

- *Type:* `string`

---


### RoboMakerResponsesDescribeSimulationJobOutputLocation <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobOutputLocation"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobOutputLocation.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesDescribeSimulationJobOutputLocation(__scope: Construct, __resources: string[], __input: RoboMakerDescribeSimulationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobOutputLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobOutputLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobOutputLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `s3Bucket`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobOutputLocation.property.s3Bucket"></a>

- *Type:* `string`

---

##### `s3Prefix`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobOutputLocation.property.s3Prefix"></a>

- *Type:* `string`

---


### RoboMakerResponsesDescribeSimulationJobVpcConfig <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobVpcConfig"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobVpcConfig.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesDescribeSimulationJobVpcConfig(__scope: Construct, __resources: string[], __input: RoboMakerDescribeSimulationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobVpcConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobVpcConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobVpcConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerDescribeSimulationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `assignPublicIp`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobVpcConfig.property.assignPublicIp"></a>

- *Type:* `boolean`

---

##### `securityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobVpcConfig.property.securityGroups"></a>

- *Type:* `string`[]

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobVpcConfig.property.subnets"></a>

- *Type:* `string`[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeSimulationJobVpcConfig.property.vpcId"></a>

- *Type:* `string`

---


### RoboMakerResponsesDescribeWorld <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorld"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorld.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesDescribeWorld(__scope: Construct, __resources: string[], __input: RoboMakerDescribeWorldRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorld.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorld.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorld.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDescribeWorldRequest`](#aws-cdk-sdk.robomaker.RoboMakerDescribeWorldRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorld.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorld.property.createdAt"></a>

- *Type:* `string`

---

##### `generationJob`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorld.property.generationJob"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorld.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `template`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorld.property.template"></a>

- *Type:* `string`

---


### RoboMakerResponsesDescribeWorldExportJob <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldExportJob"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldExportJob.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesDescribeWorldExportJob(__scope: Construct, __resources: string[], __input: RoboMakerDescribeWorldExportJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldExportJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldExportJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldExportJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDescribeWorldExportJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerDescribeWorldExportJobRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldExportJob.property.arn"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldExportJob.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldExportJob.property.createdAt"></a>

- *Type:* `string`

---

##### `failureCode`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldExportJob.property.failureCode"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldExportJob.property.failureReason"></a>

- *Type:* `string`

---

##### `iamRole`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldExportJob.property.iamRole"></a>

- *Type:* `string`

---

##### `outputLocation`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldExportJob.property.outputLocation"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldExportJobOutputLocation`](#aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldExportJobOutputLocation)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldExportJob.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldExportJob.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `worlds`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldExportJob.property.worlds"></a>

- *Type:* `string`[]

---


### RoboMakerResponsesDescribeWorldExportJobOutputLocation <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldExportJobOutputLocation"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldExportJobOutputLocation.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesDescribeWorldExportJobOutputLocation(__scope: Construct, __resources: string[], __input: RoboMakerDescribeWorldExportJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldExportJobOutputLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldExportJobOutputLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldExportJobOutputLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDescribeWorldExportJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerDescribeWorldExportJobRequest)

---



#### Properties <a name="Properties"></a>

##### `s3Bucket`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldExportJobOutputLocation.property.s3Bucket"></a>

- *Type:* `string`

---

##### `s3Prefix`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldExportJobOutputLocation.property.s3Prefix"></a>

- *Type:* `string`

---


### RoboMakerResponsesDescribeWorldGenerationJob <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldGenerationJob"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldGenerationJob.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesDescribeWorldGenerationJob(__scope: Construct, __resources: string[], __input: RoboMakerDescribeWorldGenerationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldGenerationJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldGenerationJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldGenerationJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDescribeWorldGenerationJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerDescribeWorldGenerationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldGenerationJob.property.arn"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldGenerationJob.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldGenerationJob.property.createdAt"></a>

- *Type:* `string`

---

##### `failureCode`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldGenerationJob.property.failureCode"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldGenerationJob.property.failureReason"></a>

- *Type:* `string`

---

##### `finishedWorldsSummary`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldGenerationJob.property.finishedWorldsSummary"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldGenerationJobFinishedWorldsSummary`](#aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldGenerationJobFinishedWorldsSummary)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldGenerationJob.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldGenerationJob.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `template`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldGenerationJob.property.template"></a>

- *Type:* `string`

---

##### `worldCount`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldGenerationJob.property.worldCount"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldGenerationJobWorldCount`](#aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldGenerationJobWorldCount)

---

##### `worldTags`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldGenerationJob.property.worldTags"></a>

- *Type:* {[ key: string ]: `string`}

---


### RoboMakerResponsesDescribeWorldGenerationJobFinishedWorldsSummary <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldGenerationJobFinishedWorldsSummary"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldGenerationJobFinishedWorldsSummary.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesDescribeWorldGenerationJobFinishedWorldsSummary(__scope: Construct, __resources: string[], __input: RoboMakerDescribeWorldGenerationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldGenerationJobFinishedWorldsSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldGenerationJobFinishedWorldsSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldGenerationJobFinishedWorldsSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDescribeWorldGenerationJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerDescribeWorldGenerationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `failureSummary`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldGenerationJobFinishedWorldsSummary.property.failureSummary"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldGenerationJobFinishedWorldsSummaryFailureSummary`](#aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldGenerationJobFinishedWorldsSummaryFailureSummary)

---

##### `finishedCount`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldGenerationJobFinishedWorldsSummary.property.finishedCount"></a>

- *Type:* `number`

---

##### `succeededWorlds`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldGenerationJobFinishedWorldsSummary.property.succeededWorlds"></a>

- *Type:* `string`[]

---


### RoboMakerResponsesDescribeWorldGenerationJobFinishedWorldsSummaryFailureSummary <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldGenerationJobFinishedWorldsSummaryFailureSummary"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldGenerationJobFinishedWorldsSummaryFailureSummary.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesDescribeWorldGenerationJobFinishedWorldsSummaryFailureSummary(__scope: Construct, __resources: string[], __input: RoboMakerDescribeWorldGenerationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldGenerationJobFinishedWorldsSummaryFailureSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldGenerationJobFinishedWorldsSummaryFailureSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldGenerationJobFinishedWorldsSummaryFailureSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDescribeWorldGenerationJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerDescribeWorldGenerationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `failures`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldGenerationJobFinishedWorldsSummaryFailureSummary.property.failures"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerWorldFailure`](#aws-cdk-sdk.robomaker.RoboMakerWorldFailure)[]

---

##### `totalFailureCount`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldGenerationJobFinishedWorldsSummaryFailureSummary.property.totalFailureCount"></a>

- *Type:* `number`

---


### RoboMakerResponsesDescribeWorldGenerationJobWorldCount <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldGenerationJobWorldCount"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldGenerationJobWorldCount.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesDescribeWorldGenerationJobWorldCount(__scope: Construct, __resources: string[], __input: RoboMakerDescribeWorldGenerationJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldGenerationJobWorldCount.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldGenerationJobWorldCount.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldGenerationJobWorldCount.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDescribeWorldGenerationJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerDescribeWorldGenerationJobRequest)

---



#### Properties <a name="Properties"></a>

##### `floorplanCount`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldGenerationJobWorldCount.property.floorplanCount"></a>

- *Type:* `number`

---

##### `interiorCountPerFloorplan`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldGenerationJobWorldCount.property.interiorCountPerFloorplan"></a>

- *Type:* `number`

---


### RoboMakerResponsesDescribeWorldTemplate <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldTemplate.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesDescribeWorldTemplate(__scope: Construct, __resources: string[], __input: RoboMakerDescribeWorldTemplateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDescribeWorldTemplateRequest`](#aws-cdk-sdk.robomaker.RoboMakerDescribeWorldTemplateRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldTemplate.property.arn"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldTemplate.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldTemplate.property.createdAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldTemplate.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldTemplate.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesDescribeWorldTemplate.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### RoboMakerResponsesFetchWorldTemplateBody <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesFetchWorldTemplateBody"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesFetchWorldTemplateBody.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesFetchWorldTemplateBody(__scope: Construct, __resources: string[], __input: RoboMakerGetWorldTemplateBodyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesFetchWorldTemplateBody.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesFetchWorldTemplateBody.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesFetchWorldTemplateBody.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerGetWorldTemplateBodyRequest`](#aws-cdk-sdk.robomaker.RoboMakerGetWorldTemplateBodyRequest)

---



#### Properties <a name="Properties"></a>

##### `templateBody`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesFetchWorldTemplateBody.property.templateBody"></a>

- *Type:* `string`

---


### RoboMakerResponsesListDeploymentJobs <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListDeploymentJobs"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListDeploymentJobs.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesListDeploymentJobs(__scope: Construct, __resources: string[], __input: RoboMakerListDeploymentJobsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListDeploymentJobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListDeploymentJobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListDeploymentJobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerListDeploymentJobsRequest`](#aws-cdk-sdk.robomaker.RoboMakerListDeploymentJobsRequest)

---



#### Properties <a name="Properties"></a>

##### `deploymentJobs`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListDeploymentJobs.property.deploymentJobs"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDeploymentJob`](#aws-cdk-sdk.robomaker.RoboMakerDeploymentJob)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListDeploymentJobs.property.nextToken"></a>

- *Type:* `string`

---


### RoboMakerResponsesListFleets <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListFleets"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListFleets.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesListFleets(__scope: Construct, __resources: string[], __input: RoboMakerListFleetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListFleets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListFleets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListFleets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerListFleetsRequest`](#aws-cdk-sdk.robomaker.RoboMakerListFleetsRequest)

---



#### Properties <a name="Properties"></a>

##### `fleetDetails`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListFleets.property.fleetDetails"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerFleet`](#aws-cdk-sdk.robomaker.RoboMakerFleet)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListFleets.property.nextToken"></a>

- *Type:* `string`

---


### RoboMakerResponsesListRobotApplications <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListRobotApplications"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListRobotApplications.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesListRobotApplications(__scope: Construct, __resources: string[], __input: RoboMakerListRobotApplicationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListRobotApplications.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListRobotApplications.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListRobotApplications.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerListRobotApplicationsRequest`](#aws-cdk-sdk.robomaker.RoboMakerListRobotApplicationsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListRobotApplications.property.nextToken"></a>

- *Type:* `string`

---

##### `robotApplicationSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListRobotApplications.property.robotApplicationSummaries"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerRobotApplicationSummary`](#aws-cdk-sdk.robomaker.RoboMakerRobotApplicationSummary)[]

---


### RoboMakerResponsesListRobots <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListRobots"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListRobots.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesListRobots(__scope: Construct, __resources: string[], __input: RoboMakerListRobotsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListRobots.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListRobots.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListRobots.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerListRobotsRequest`](#aws-cdk-sdk.robomaker.RoboMakerListRobotsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListRobots.property.nextToken"></a>

- *Type:* `string`

---

##### `robots`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListRobots.property.robots"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerRobot`](#aws-cdk-sdk.robomaker.RoboMakerRobot)[]

---


### RoboMakerResponsesListSimulationApplications <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListSimulationApplications"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListSimulationApplications.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesListSimulationApplications(__scope: Construct, __resources: string[], __input: RoboMakerListSimulationApplicationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListSimulationApplications.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListSimulationApplications.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListSimulationApplications.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerListSimulationApplicationsRequest`](#aws-cdk-sdk.robomaker.RoboMakerListSimulationApplicationsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListSimulationApplications.property.nextToken"></a>

- *Type:* `string`

---

##### `simulationApplicationSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListSimulationApplications.property.simulationApplicationSummaries"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSimulationApplicationSummary`](#aws-cdk-sdk.robomaker.RoboMakerSimulationApplicationSummary)[]

---


### RoboMakerResponsesListSimulationJobBatches <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListSimulationJobBatches"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListSimulationJobBatches.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesListSimulationJobBatches(__scope: Construct, __resources: string[], __input: RoboMakerListSimulationJobBatchesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListSimulationJobBatches.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListSimulationJobBatches.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListSimulationJobBatches.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerListSimulationJobBatchesRequest`](#aws-cdk-sdk.robomaker.RoboMakerListSimulationJobBatchesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListSimulationJobBatches.property.nextToken"></a>

- *Type:* `string`

---

##### `simulationJobBatchSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListSimulationJobBatches.property.simulationJobBatchSummaries"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSimulationJobBatchSummary`](#aws-cdk-sdk.robomaker.RoboMakerSimulationJobBatchSummary)[]

---


### RoboMakerResponsesListSimulationJobs <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListSimulationJobs"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListSimulationJobs.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesListSimulationJobs(__scope: Construct, __resources: string[], __input: RoboMakerListSimulationJobsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListSimulationJobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListSimulationJobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListSimulationJobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerListSimulationJobsRequest`](#aws-cdk-sdk.robomaker.RoboMakerListSimulationJobsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListSimulationJobs.property.nextToken"></a>

- *Type:* `string`

---

##### `simulationJobSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListSimulationJobs.property.simulationJobSummaries"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSimulationJobSummary`](#aws-cdk-sdk.robomaker.RoboMakerSimulationJobSummary)[]

---


### RoboMakerResponsesListTagsForResource <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListTagsForResource.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: RoboMakerListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerListTagsForResourceRequest`](#aws-cdk-sdk.robomaker.RoboMakerListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListTagsForResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### RoboMakerResponsesListWorldExportJobs <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListWorldExportJobs"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListWorldExportJobs.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesListWorldExportJobs(__scope: Construct, __resources: string[], __input: RoboMakerListWorldExportJobsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListWorldExportJobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListWorldExportJobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListWorldExportJobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerListWorldExportJobsRequest`](#aws-cdk-sdk.robomaker.RoboMakerListWorldExportJobsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListWorldExportJobs.property.nextToken"></a>

- *Type:* `string`

---

##### `worldExportJobSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListWorldExportJobs.property.worldExportJobSummaries"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerWorldExportJobSummary`](#aws-cdk-sdk.robomaker.RoboMakerWorldExportJobSummary)[]

---


### RoboMakerResponsesListWorldGenerationJobs <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListWorldGenerationJobs"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListWorldGenerationJobs.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesListWorldGenerationJobs(__scope: Construct, __resources: string[], __input: RoboMakerListWorldGenerationJobsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListWorldGenerationJobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListWorldGenerationJobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListWorldGenerationJobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerListWorldGenerationJobsRequest`](#aws-cdk-sdk.robomaker.RoboMakerListWorldGenerationJobsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListWorldGenerationJobs.property.nextToken"></a>

- *Type:* `string`

---

##### `worldGenerationJobSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListWorldGenerationJobs.property.worldGenerationJobSummaries"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerWorldGenerationJobSummary`](#aws-cdk-sdk.robomaker.RoboMakerWorldGenerationJobSummary)[]

---


### RoboMakerResponsesListWorlds <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListWorlds"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListWorlds.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesListWorlds(__scope: Construct, __resources: string[], __input: RoboMakerListWorldsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListWorlds.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListWorlds.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListWorlds.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerListWorldsRequest`](#aws-cdk-sdk.robomaker.RoboMakerListWorldsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListWorlds.property.nextToken"></a>

- *Type:* `string`

---

##### `worldSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListWorlds.property.worldSummaries"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerWorldSummary`](#aws-cdk-sdk.robomaker.RoboMakerWorldSummary)[]

---


### RoboMakerResponsesListWorldTemplates <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListWorldTemplates"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListWorldTemplates.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesListWorldTemplates(__scope: Construct, __resources: string[], __input: RoboMakerListWorldTemplatesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListWorldTemplates.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListWorldTemplates.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListWorldTemplates.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerListWorldTemplatesRequest`](#aws-cdk-sdk.robomaker.RoboMakerListWorldTemplatesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListWorldTemplates.property.nextToken"></a>

- *Type:* `string`

---

##### `templateSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesListWorldTemplates.property.templateSummaries"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerTemplateSummary`](#aws-cdk-sdk.robomaker.RoboMakerTemplateSummary)[]

---


### RoboMakerResponsesRegisterRobot <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesRegisterRobot"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesRegisterRobot.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesRegisterRobot(__scope: Construct, __resources: string[], __input: RoboMakerRegisterRobotRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesRegisterRobot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesRegisterRobot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesRegisterRobot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerRegisterRobotRequest`](#aws-cdk-sdk.robomaker.RoboMakerRegisterRobotRequest)

---



#### Properties <a name="Properties"></a>

##### `fleet`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesRegisterRobot.property.fleet"></a>

- *Type:* `string`

---

##### `robot`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesRegisterRobot.property.robot"></a>

- *Type:* `string`

---


### RoboMakerResponsesStartSimulationJobBatch <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesStartSimulationJobBatch"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesStartSimulationJobBatch.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesStartSimulationJobBatch(__scope: Construct, __resources: string[], __input: RoboMakerStartSimulationJobBatchRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesStartSimulationJobBatch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesStartSimulationJobBatch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesStartSimulationJobBatch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerStartSimulationJobBatchRequest`](#aws-cdk-sdk.robomaker.RoboMakerStartSimulationJobBatchRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesStartSimulationJobBatch.property.arn"></a>

- *Type:* `string`

---

##### `batchPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesStartSimulationJobBatch.property.batchPolicy"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerResponsesStartSimulationJobBatchBatchPolicy`](#aws-cdk-sdk.robomaker.RoboMakerResponsesStartSimulationJobBatchBatchPolicy)

---

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesStartSimulationJobBatch.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesStartSimulationJobBatch.property.createdAt"></a>

- *Type:* `string`

---

##### `createdRequests`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesStartSimulationJobBatch.property.createdRequests"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSimulationJobSummary`](#aws-cdk-sdk.robomaker.RoboMakerSimulationJobSummary)[]

---

##### `failedRequests`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesStartSimulationJobBatch.property.failedRequests"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerFailedCreateSimulationJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerFailedCreateSimulationJobRequest)[]

---

##### `failureCode`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesStartSimulationJobBatch.property.failureCode"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesStartSimulationJobBatch.property.failureReason"></a>

- *Type:* `string`

---

##### `pendingRequests`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesStartSimulationJobBatch.property.pendingRequests"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSimulationJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerSimulationJobRequest)[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesStartSimulationJobBatch.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesStartSimulationJobBatch.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### RoboMakerResponsesStartSimulationJobBatchBatchPolicy <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesStartSimulationJobBatchBatchPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesStartSimulationJobBatchBatchPolicy.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesStartSimulationJobBatchBatchPolicy(__scope: Construct, __resources: string[], __input: RoboMakerStartSimulationJobBatchRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesStartSimulationJobBatchBatchPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesStartSimulationJobBatchBatchPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesStartSimulationJobBatchBatchPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerStartSimulationJobBatchRequest`](#aws-cdk-sdk.robomaker.RoboMakerStartSimulationJobBatchRequest)

---



#### Properties <a name="Properties"></a>

##### `maxConcurrency`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesStartSimulationJobBatchBatchPolicy.property.maxConcurrency"></a>

- *Type:* `number`

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesStartSimulationJobBatchBatchPolicy.property.timeoutInSeconds"></a>

- *Type:* `number`

---


### RoboMakerResponsesSyncDeploymentJob <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesSyncDeploymentJob"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesSyncDeploymentJob.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesSyncDeploymentJob(__scope: Construct, __resources: string[], __input: RoboMakerSyncDeploymentJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesSyncDeploymentJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesSyncDeploymentJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesSyncDeploymentJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSyncDeploymentJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerSyncDeploymentJobRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesSyncDeploymentJob.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesSyncDeploymentJob.property.createdAt"></a>

- *Type:* `string`

---

##### `deploymentApplicationConfigs`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesSyncDeploymentJob.property.deploymentApplicationConfigs"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerDeploymentApplicationConfig`](#aws-cdk-sdk.robomaker.RoboMakerDeploymentApplicationConfig)[]

---

##### `deploymentConfig`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesSyncDeploymentJob.property.deploymentConfig"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerResponsesSyncDeploymentJobDeploymentConfig`](#aws-cdk-sdk.robomaker.RoboMakerResponsesSyncDeploymentJobDeploymentConfig)

---

##### `failureCode`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesSyncDeploymentJob.property.failureCode"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesSyncDeploymentJob.property.failureReason"></a>

- *Type:* `string`

---

##### `fleet`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesSyncDeploymentJob.property.fleet"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesSyncDeploymentJob.property.status"></a>

- *Type:* `string`

---


### RoboMakerResponsesSyncDeploymentJobDeploymentConfig <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesSyncDeploymentJobDeploymentConfig"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesSyncDeploymentJobDeploymentConfig.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesSyncDeploymentJobDeploymentConfig(__scope: Construct, __resources: string[], __input: RoboMakerSyncDeploymentJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesSyncDeploymentJobDeploymentConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesSyncDeploymentJobDeploymentConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesSyncDeploymentJobDeploymentConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSyncDeploymentJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerSyncDeploymentJobRequest)

---



#### Properties <a name="Properties"></a>

##### `concurrentDeploymentPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesSyncDeploymentJobDeploymentConfig.property.concurrentDeploymentPercentage"></a>

- *Type:* `number`

---

##### `downloadConditionFile`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesSyncDeploymentJobDeploymentConfig.property.downloadConditionFile"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerResponsesSyncDeploymentJobDeploymentConfigDownloadConditionFile`](#aws-cdk-sdk.robomaker.RoboMakerResponsesSyncDeploymentJobDeploymentConfigDownloadConditionFile)

---

##### `failureThresholdPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesSyncDeploymentJobDeploymentConfig.property.failureThresholdPercentage"></a>

- *Type:* `number`

---

##### `robotDeploymentTimeoutInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesSyncDeploymentJobDeploymentConfig.property.robotDeploymentTimeoutInSeconds"></a>

- *Type:* `number`

---


### RoboMakerResponsesSyncDeploymentJobDeploymentConfigDownloadConditionFile <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesSyncDeploymentJobDeploymentConfigDownloadConditionFile"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesSyncDeploymentJobDeploymentConfigDownloadConditionFile.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesSyncDeploymentJobDeploymentConfigDownloadConditionFile(__scope: Construct, __resources: string[], __input: RoboMakerSyncDeploymentJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesSyncDeploymentJobDeploymentConfigDownloadConditionFile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesSyncDeploymentJobDeploymentConfigDownloadConditionFile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesSyncDeploymentJobDeploymentConfigDownloadConditionFile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSyncDeploymentJobRequest`](#aws-cdk-sdk.robomaker.RoboMakerSyncDeploymentJobRequest)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesSyncDeploymentJobDeploymentConfigDownloadConditionFile.property.bucket"></a>

- *Type:* `string`

---

##### `etag`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesSyncDeploymentJobDeploymentConfigDownloadConditionFile.property.etag"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesSyncDeploymentJobDeploymentConfigDownloadConditionFile.property.key"></a>

- *Type:* `string`

---


### RoboMakerResponsesUpdateRobotApplication <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateRobotApplication"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateRobotApplication.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesUpdateRobotApplication(__scope: Construct, __resources: string[], __input: RoboMakerUpdateRobotApplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateRobotApplication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateRobotApplication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateRobotApplication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerUpdateRobotApplicationRequest`](#aws-cdk-sdk.robomaker.RoboMakerUpdateRobotApplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateRobotApplication.property.arn"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateRobotApplication.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateRobotApplication.property.name"></a>

- *Type:* `string`

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateRobotApplication.property.revisionId"></a>

- *Type:* `string`

---

##### `robotSoftwareSuite`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateRobotApplication.property.robotSoftwareSuite"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateRobotApplicationRobotSoftwareSuite`](#aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateRobotApplicationRobotSoftwareSuite)

---

##### `sources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateRobotApplication.property.sources"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSource`](#aws-cdk-sdk.robomaker.RoboMakerSource)[]

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateRobotApplication.property.version"></a>

- *Type:* `string`

---


### RoboMakerResponsesUpdateRobotApplicationRobotSoftwareSuite <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateRobotApplicationRobotSoftwareSuite"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateRobotApplicationRobotSoftwareSuite.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesUpdateRobotApplicationRobotSoftwareSuite(__scope: Construct, __resources: string[], __input: RoboMakerUpdateRobotApplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateRobotApplicationRobotSoftwareSuite.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateRobotApplicationRobotSoftwareSuite.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateRobotApplicationRobotSoftwareSuite.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerUpdateRobotApplicationRequest`](#aws-cdk-sdk.robomaker.RoboMakerUpdateRobotApplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateRobotApplicationRobotSoftwareSuite.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateRobotApplicationRobotSoftwareSuite.property.version"></a>

- *Type:* `string`

---


### RoboMakerResponsesUpdateSimulationApplication <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateSimulationApplication"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateSimulationApplication.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesUpdateSimulationApplication(__scope: Construct, __resources: string[], __input: RoboMakerUpdateSimulationApplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateSimulationApplication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateSimulationApplication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateSimulationApplication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerUpdateSimulationApplicationRequest`](#aws-cdk-sdk.robomaker.RoboMakerUpdateSimulationApplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateSimulationApplication.property.arn"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateSimulationApplication.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateSimulationApplication.property.name"></a>

- *Type:* `string`

---

##### `renderingEngine`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateSimulationApplication.property.renderingEngine"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateSimulationApplicationRenderingEngine`](#aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateSimulationApplicationRenderingEngine)

---

##### `revisionId`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateSimulationApplication.property.revisionId"></a>

- *Type:* `string`

---

##### `robotSoftwareSuite`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateSimulationApplication.property.robotSoftwareSuite"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateSimulationApplicationRobotSoftwareSuite`](#aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateSimulationApplicationRobotSoftwareSuite)

---

##### `simulationSoftwareSuite`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateSimulationApplication.property.simulationSoftwareSuite"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateSimulationApplicationSimulationSoftwareSuite`](#aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateSimulationApplicationSimulationSoftwareSuite)

---

##### `sources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateSimulationApplication.property.sources"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerSource`](#aws-cdk-sdk.robomaker.RoboMakerSource)[]

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateSimulationApplication.property.version"></a>

- *Type:* `string`

---


### RoboMakerResponsesUpdateSimulationApplicationRenderingEngine <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateSimulationApplicationRenderingEngine"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateSimulationApplicationRenderingEngine.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesUpdateSimulationApplicationRenderingEngine(__scope: Construct, __resources: string[], __input: RoboMakerUpdateSimulationApplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateSimulationApplicationRenderingEngine.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateSimulationApplicationRenderingEngine.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateSimulationApplicationRenderingEngine.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerUpdateSimulationApplicationRequest`](#aws-cdk-sdk.robomaker.RoboMakerUpdateSimulationApplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateSimulationApplicationRenderingEngine.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateSimulationApplicationRenderingEngine.property.version"></a>

- *Type:* `string`

---


### RoboMakerResponsesUpdateSimulationApplicationRobotSoftwareSuite <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateSimulationApplicationRobotSoftwareSuite"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateSimulationApplicationRobotSoftwareSuite.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesUpdateSimulationApplicationRobotSoftwareSuite(__scope: Construct, __resources: string[], __input: RoboMakerUpdateSimulationApplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateSimulationApplicationRobotSoftwareSuite.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateSimulationApplicationRobotSoftwareSuite.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateSimulationApplicationRobotSoftwareSuite.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerUpdateSimulationApplicationRequest`](#aws-cdk-sdk.robomaker.RoboMakerUpdateSimulationApplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateSimulationApplicationRobotSoftwareSuite.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateSimulationApplicationRobotSoftwareSuite.property.version"></a>

- *Type:* `string`

---


### RoboMakerResponsesUpdateSimulationApplicationSimulationSoftwareSuite <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateSimulationApplicationSimulationSoftwareSuite"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateSimulationApplicationSimulationSoftwareSuite.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesUpdateSimulationApplicationSimulationSoftwareSuite(__scope: Construct, __resources: string[], __input: RoboMakerUpdateSimulationApplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateSimulationApplicationSimulationSoftwareSuite.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateSimulationApplicationSimulationSoftwareSuite.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateSimulationApplicationSimulationSoftwareSuite.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerUpdateSimulationApplicationRequest`](#aws-cdk-sdk.robomaker.RoboMakerUpdateSimulationApplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateSimulationApplicationSimulationSoftwareSuite.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateSimulationApplicationSimulationSoftwareSuite.property.version"></a>

- *Type:* `string`

---


### RoboMakerResponsesUpdateWorldTemplate <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateWorldTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateWorldTemplate.Initializer"></a>

```typescript
import { robomaker } from 'aws-cdk-sdk'

new robomaker.RoboMakerResponsesUpdateWorldTemplate(__scope: Construct, __resources: string[], __input: RoboMakerUpdateWorldTemplateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateWorldTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateWorldTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateWorldTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.robomaker.RoboMakerUpdateWorldTemplateRequest`](#aws-cdk-sdk.robomaker.RoboMakerUpdateWorldTemplateRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateWorldTemplate.property.arn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateWorldTemplate.property.createdAt"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateWorldTemplate.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.robomaker.RoboMakerResponsesUpdateWorldTemplate.property.name"></a>

- *Type:* `string`

---



