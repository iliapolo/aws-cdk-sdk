# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### FraudDetectorClient <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient"></a>

#### Initializer <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

new frauddetector.FraudDetectorClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `batchCreateVariable` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.batchCreateVariable"></a>

```typescript
public batchCreateVariable(input: FraudDetectorBatchCreateVariableRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorBatchCreateVariableRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorBatchCreateVariableRequest)

---

##### `batchGetVariable` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.batchGetVariable"></a>

```typescript
public batchGetVariable(input: FraudDetectorBatchGetVariableRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorBatchGetVariableRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorBatchGetVariableRequest)

---

##### `createDetectorVersion` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.createDetectorVersion"></a>

```typescript
public createDetectorVersion(input: FraudDetectorCreateDetectorVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorCreateDetectorVersionRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorCreateDetectorVersionRequest)

---

##### `createModel` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.createModel"></a>

```typescript
public createModel(input: FraudDetectorCreateModelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorCreateModelRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorCreateModelRequest)

---

##### `createModelVersion` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.createModelVersion"></a>

```typescript
public createModelVersion(input: FraudDetectorCreateModelVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorCreateModelVersionRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorCreateModelVersionRequest)

---

##### `createRule` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.createRule"></a>

```typescript
public createRule(input: FraudDetectorCreateRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorCreateRuleRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorCreateRuleRequest)

---

##### `createVariable` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.createVariable"></a>

```typescript
public createVariable(input: FraudDetectorCreateVariableRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorCreateVariableRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorCreateVariableRequest)

---

##### `deleteDetector` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.deleteDetector"></a>

```typescript
public deleteDetector(input: FraudDetectorDeleteDetectorRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorDeleteDetectorRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorDeleteDetectorRequest)

---

##### `deleteDetectorVersion` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.deleteDetectorVersion"></a>

```typescript
public deleteDetectorVersion(input: FraudDetectorDeleteDetectorVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorDeleteDetectorVersionRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorDeleteDetectorVersionRequest)

---

##### `deleteEntityType` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.deleteEntityType"></a>

```typescript
public deleteEntityType(input: FraudDetectorDeleteEntityTypeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorDeleteEntityTypeRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorDeleteEntityTypeRequest)

---

##### `deleteEvent` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.deleteEvent"></a>

```typescript
public deleteEvent(input: FraudDetectorDeleteEventRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorDeleteEventRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorDeleteEventRequest)

---

##### `deleteEventType` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.deleteEventType"></a>

```typescript
public deleteEventType(input: FraudDetectorDeleteEventTypeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorDeleteEventTypeRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorDeleteEventTypeRequest)

---

##### `deleteExternalModel` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.deleteExternalModel"></a>

```typescript
public deleteExternalModel(input: FraudDetectorDeleteExternalModelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorDeleteExternalModelRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorDeleteExternalModelRequest)

---

##### `deleteLabel` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.deleteLabel"></a>

```typescript
public deleteLabel(input: FraudDetectorDeleteLabelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorDeleteLabelRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorDeleteLabelRequest)

---

##### `deleteModel` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.deleteModel"></a>

```typescript
public deleteModel(input: FraudDetectorDeleteModelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorDeleteModelRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorDeleteModelRequest)

---

##### `deleteModelVersion` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.deleteModelVersion"></a>

```typescript
public deleteModelVersion(input: FraudDetectorDeleteModelVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorDeleteModelVersionRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorDeleteModelVersionRequest)

---

##### `deleteOutcome` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.deleteOutcome"></a>

```typescript
public deleteOutcome(input: FraudDetectorDeleteOutcomeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorDeleteOutcomeRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorDeleteOutcomeRequest)

---

##### `deleteRule` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.deleteRule"></a>

```typescript
public deleteRule(input: FraudDetectorDeleteRuleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorDeleteRuleRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorDeleteRuleRequest)

---

##### `deleteVariable` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.deleteVariable"></a>

```typescript
public deleteVariable(input: FraudDetectorDeleteVariableRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorDeleteVariableRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorDeleteVariableRequest)

---

##### `describeDetector` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.describeDetector"></a>

```typescript
public describeDetector(input: FraudDetectorDescribeDetectorRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorDescribeDetectorRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorDescribeDetectorRequest)

---

##### `describeModelVersions` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.describeModelVersions"></a>

```typescript
public describeModelVersions(input: FraudDetectorDescribeModelVersionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorDescribeModelVersionsRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorDescribeModelVersionsRequest)

---

##### `fetchDetectors` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.fetchDetectors"></a>

```typescript
public fetchDetectors(input: FraudDetectorGetDetectorsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorGetDetectorsRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorGetDetectorsRequest)

---

##### `fetchDetectorVersion` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.fetchDetectorVersion"></a>

```typescript
public fetchDetectorVersion(input: FraudDetectorGetDetectorVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorGetDetectorVersionRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorGetDetectorVersionRequest)

---

##### `fetchEntityTypes` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.fetchEntityTypes"></a>

```typescript
public fetchEntityTypes(input: FraudDetectorGetEntityTypesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorGetEntityTypesRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorGetEntityTypesRequest)

---

##### `fetchEventPrediction` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.fetchEventPrediction"></a>

```typescript
public fetchEventPrediction(input: FraudDetectorGetEventPredictionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorGetEventPredictionRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorGetEventPredictionRequest)

---

##### `fetchEventTypes` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.fetchEventTypes"></a>

```typescript
public fetchEventTypes(input: FraudDetectorGetEventTypesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorGetEventTypesRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorGetEventTypesRequest)

---

##### `fetchExternalModels` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.fetchExternalModels"></a>

```typescript
public fetchExternalModels(input: FraudDetectorGetExternalModelsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorGetExternalModelsRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorGetExternalModelsRequest)

---

##### `fetchKmsEncryptionKey` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.fetchKmsEncryptionKey"></a>

```typescript
public fetchKmsEncryptionKey()
```

##### `fetchLabels` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.fetchLabels"></a>

```typescript
public fetchLabels(input: FraudDetectorGetLabelsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorGetLabelsRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorGetLabelsRequest)

---

##### `fetchModels` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.fetchModels"></a>

```typescript
public fetchModels(input: FraudDetectorGetModelsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorGetModelsRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorGetModelsRequest)

---

##### `fetchModelVersion` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.fetchModelVersion"></a>

```typescript
public fetchModelVersion(input: FraudDetectorGetModelVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorGetModelVersionRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorGetModelVersionRequest)

---

##### `fetchOutcomes` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.fetchOutcomes"></a>

```typescript
public fetchOutcomes(input: FraudDetectorGetOutcomesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorGetOutcomesRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorGetOutcomesRequest)

---

##### `fetchRules` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.fetchRules"></a>

```typescript
public fetchRules(input: FraudDetectorGetRulesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorGetRulesRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorGetRulesRequest)

---

##### `fetchVariables` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.fetchVariables"></a>

```typescript
public fetchVariables(input: FraudDetectorGetVariablesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorGetVariablesRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorGetVariablesRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: FraudDetectorListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorListTagsForResourceRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorListTagsForResourceRequest)

---

##### `putDetector` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.putDetector"></a>

```typescript
public putDetector(input: FraudDetectorPutDetectorRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorPutDetectorRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorPutDetectorRequest)

---

##### `putEntityType` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.putEntityType"></a>

```typescript
public putEntityType(input: FraudDetectorPutEntityTypeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorPutEntityTypeRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorPutEntityTypeRequest)

---

##### `putEventType` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.putEventType"></a>

```typescript
public putEventType(input: FraudDetectorPutEventTypeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorPutEventTypeRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorPutEventTypeRequest)

---

##### `putExternalModel` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.putExternalModel"></a>

```typescript
public putExternalModel(input: FraudDetectorPutExternalModelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorPutExternalModelRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorPutExternalModelRequest)

---

##### `putKmsEncryptionKey` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.putKmsEncryptionKey"></a>

```typescript
public putKmsEncryptionKey(input: FraudDetectorPutKmsEncryptionKeyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorPutKmsEncryptionKeyRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorPutKmsEncryptionKeyRequest)

---

##### `putLabel` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.putLabel"></a>

```typescript
public putLabel(input: FraudDetectorPutLabelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorPutLabelRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorPutLabelRequest)

---

##### `putOutcome` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.putOutcome"></a>

```typescript
public putOutcome(input: FraudDetectorPutOutcomeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorPutOutcomeRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorPutOutcomeRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.tagResource"></a>

```typescript
public tagResource(input: FraudDetectorTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorTagResourceRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.untagResource"></a>

```typescript
public untagResource(input: FraudDetectorUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorUntagResourceRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorUntagResourceRequest)

---

##### `updateDetectorVersion` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.updateDetectorVersion"></a>

```typescript
public updateDetectorVersion(input: FraudDetectorUpdateDetectorVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorUpdateDetectorVersionRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorUpdateDetectorVersionRequest)

---

##### `updateDetectorVersionMetadata` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.updateDetectorVersionMetadata"></a>

```typescript
public updateDetectorVersionMetadata(input: FraudDetectorUpdateDetectorVersionMetadataRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorUpdateDetectorVersionMetadataRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorUpdateDetectorVersionMetadataRequest)

---

##### `updateDetectorVersionStatus` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.updateDetectorVersionStatus"></a>

```typescript
public updateDetectorVersionStatus(input: FraudDetectorUpdateDetectorVersionStatusRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorUpdateDetectorVersionStatusRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorUpdateDetectorVersionStatusRequest)

---

##### `updateModel` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.updateModel"></a>

```typescript
public updateModel(input: FraudDetectorUpdateModelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorUpdateModelRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorUpdateModelRequest)

---

##### `updateModelVersion` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.updateModelVersion"></a>

```typescript
public updateModelVersion(input: FraudDetectorUpdateModelVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorUpdateModelVersionRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorUpdateModelVersionRequest)

---

##### `updateModelVersionStatus` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.updateModelVersionStatus"></a>

```typescript
public updateModelVersionStatus(input: FraudDetectorUpdateModelVersionStatusRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorUpdateModelVersionStatusRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorUpdateModelVersionStatusRequest)

---

##### `updateRuleMetadata` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.updateRuleMetadata"></a>

```typescript
public updateRuleMetadata(input: FraudDetectorUpdateRuleMetadataRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorUpdateRuleMetadataRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorUpdateRuleMetadataRequest)

---

##### `updateRuleVersion` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.updateRuleVersion"></a>

```typescript
public updateRuleVersion(input: FraudDetectorUpdateRuleVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorUpdateRuleVersionRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorUpdateRuleVersionRequest)

---

##### `updateVariable` <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.updateVariable"></a>

```typescript
public updateVariable(input: FraudDetectorUpdateVariableRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorUpdateVariableRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorUpdateVariableRequest)

---




## Structs <a name="Structs"></a>

### FraudDetectorBatchCreateVariableError <a name="aws-cdk-sdk.frauddetector.FraudDetectorBatchCreateVariableError"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorBatchCreateVariableError: frauddetector.FraudDetectorBatchCreateVariableError = { ... }
```

##### `code`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorBatchCreateVariableError.property.code"></a>

- *Type:* `number`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorBatchCreateVariableError.property.message"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorBatchCreateVariableError.property.name"></a>

- *Type:* `string`

---

### FraudDetectorBatchCreateVariableRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorBatchCreateVariableRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorBatchCreateVariableRequest: frauddetector.FraudDetectorBatchCreateVariableRequest = { ... }
```

##### `variableEntries`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorBatchCreateVariableRequest.property.variableEntries"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorVariableEntry`](#aws-cdk-sdk.frauddetector.FraudDetectorVariableEntry)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorBatchCreateVariableRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorTag`](#aws-cdk-sdk.frauddetector.FraudDetectorTag)[]

---

### FraudDetectorBatchCreateVariableResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorBatchCreateVariableResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorBatchCreateVariableResult: frauddetector.FraudDetectorBatchCreateVariableResult = { ... }
```

##### `errors`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorBatchCreateVariableResult.property.errors"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorBatchCreateVariableError`](#aws-cdk-sdk.frauddetector.FraudDetectorBatchCreateVariableError)[]

---

### FraudDetectorBatchGetVariableError <a name="aws-cdk-sdk.frauddetector.FraudDetectorBatchGetVariableError"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorBatchGetVariableError: frauddetector.FraudDetectorBatchGetVariableError = { ... }
```

##### `code`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorBatchGetVariableError.property.code"></a>

- *Type:* `number`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorBatchGetVariableError.property.message"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorBatchGetVariableError.property.name"></a>

- *Type:* `string`

---

### FraudDetectorBatchGetVariableRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorBatchGetVariableRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorBatchGetVariableRequest: frauddetector.FraudDetectorBatchGetVariableRequest = { ... }
```

##### `names`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorBatchGetVariableRequest.property.names"></a>

- *Type:* `string`[]

---

### FraudDetectorBatchGetVariableResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorBatchGetVariableResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorBatchGetVariableResult: frauddetector.FraudDetectorBatchGetVariableResult = { ... }
```

##### `errors`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorBatchGetVariableResult.property.errors"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorBatchGetVariableError`](#aws-cdk-sdk.frauddetector.FraudDetectorBatchGetVariableError)[]

---

##### `variables`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorBatchGetVariableResult.property.variables"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorVariable`](#aws-cdk-sdk.frauddetector.FraudDetectorVariable)[]

---

### FraudDetectorCreateDetectorVersionRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateDetectorVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorCreateDetectorVersionRequest: frauddetector.FraudDetectorCreateDetectorVersionRequest = { ... }
```

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateDetectorVersionRequest.property.detectorId"></a>

- *Type:* `string`

---

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateDetectorVersionRequest.property.rules"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorRule`](#aws-cdk-sdk.frauddetector.FraudDetectorRule)[]

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateDetectorVersionRequest.property.description"></a>

- *Type:* `string`

---

##### `externalModelEndpoints`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateDetectorVersionRequest.property.externalModelEndpoints"></a>

- *Type:* `string`[]

---

##### `modelVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateDetectorVersionRequest.property.modelVersions"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorModelVersion`](#aws-cdk-sdk.frauddetector.FraudDetectorModelVersion)[]

---

##### `ruleExecutionMode`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateDetectorVersionRequest.property.ruleExecutionMode"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateDetectorVersionRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorTag`](#aws-cdk-sdk.frauddetector.FraudDetectorTag)[]

---

### FraudDetectorCreateDetectorVersionResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateDetectorVersionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorCreateDetectorVersionResult: frauddetector.FraudDetectorCreateDetectorVersionResult = { ... }
```

##### `detectorId`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateDetectorVersionResult.property.detectorId"></a>

- *Type:* `string`

---

##### `detectorVersionId`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateDetectorVersionResult.property.detectorVersionId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateDetectorVersionResult.property.status"></a>

- *Type:* `string`

---

### FraudDetectorCreateModelRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateModelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorCreateModelRequest: frauddetector.FraudDetectorCreateModelRequest = { ... }
```

##### `eventTypeName`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateModelRequest.property.eventTypeName"></a>

- *Type:* `string`

---

##### `modelId`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateModelRequest.property.modelId"></a>

- *Type:* `string`

---

##### `modelType`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateModelRequest.property.modelType"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateModelRequest.property.description"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateModelRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorTag`](#aws-cdk-sdk.frauddetector.FraudDetectorTag)[]

---

### FraudDetectorCreateModelResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateModelResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorCreateModelResult: frauddetector.FraudDetectorCreateModelResult = { ... }
```

### FraudDetectorCreateModelVersionRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateModelVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorCreateModelVersionRequest: frauddetector.FraudDetectorCreateModelVersionRequest = { ... }
```

##### `modelId`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateModelVersionRequest.property.modelId"></a>

- *Type:* `string`

---

##### `modelType`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateModelVersionRequest.property.modelType"></a>

- *Type:* `string`

---

##### `trainingDataSchema`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateModelVersionRequest.property.trainingDataSchema"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorTrainingDataSchema`](#aws-cdk-sdk.frauddetector.FraudDetectorTrainingDataSchema)

---

##### `trainingDataSource`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateModelVersionRequest.property.trainingDataSource"></a>

- *Type:* `string`

---

##### `externalEventsDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateModelVersionRequest.property.externalEventsDetail"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorExternalEventsDetail`](#aws-cdk-sdk.frauddetector.FraudDetectorExternalEventsDetail)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateModelVersionRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorTag`](#aws-cdk-sdk.frauddetector.FraudDetectorTag)[]

---

### FraudDetectorCreateModelVersionResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateModelVersionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorCreateModelVersionResult: frauddetector.FraudDetectorCreateModelVersionResult = { ... }
```

##### `modelId`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateModelVersionResult.property.modelId"></a>

- *Type:* `string`

---

##### `modelType`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateModelVersionResult.property.modelType"></a>

- *Type:* `string`

---

##### `modelVersionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateModelVersionResult.property.modelVersionNumber"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateModelVersionResult.property.status"></a>

- *Type:* `string`

---

### FraudDetectorCreateRuleRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorCreateRuleRequest: frauddetector.FraudDetectorCreateRuleRequest = { ... }
```

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateRuleRequest.property.detectorId"></a>

- *Type:* `string`

---

##### `expression`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateRuleRequest.property.expression"></a>

- *Type:* `string`

---

##### `language`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateRuleRequest.property.language"></a>

- *Type:* `string`

---

##### `outcomes`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateRuleRequest.property.outcomes"></a>

- *Type:* `string`[]

---

##### `ruleId`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateRuleRequest.property.ruleId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateRuleRequest.property.description"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateRuleRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorTag`](#aws-cdk-sdk.frauddetector.FraudDetectorTag)[]

---

### FraudDetectorCreateRuleResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateRuleResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorCreateRuleResult: frauddetector.FraudDetectorCreateRuleResult = { ... }
```

##### `rule`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateRuleResult.property.rule"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorRule`](#aws-cdk-sdk.frauddetector.FraudDetectorRule)

---

### FraudDetectorCreateVariableRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateVariableRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorCreateVariableRequest: frauddetector.FraudDetectorCreateVariableRequest = { ... }
```

##### `dataSource`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateVariableRequest.property.dataSource"></a>

- *Type:* `string`

---

##### `dataType`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateVariableRequest.property.dataType"></a>

- *Type:* `string`

---

##### `defaultValue`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateVariableRequest.property.defaultValue"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateVariableRequest.property.name"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateVariableRequest.property.description"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateVariableRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorTag`](#aws-cdk-sdk.frauddetector.FraudDetectorTag)[]

---

##### `variableType`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateVariableRequest.property.variableType"></a>

- *Type:* `string`

---

### FraudDetectorCreateVariableResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorCreateVariableResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorCreateVariableResult: frauddetector.FraudDetectorCreateVariableResult = { ... }
```

### FraudDetectorDataValidationMetrics <a name="aws-cdk-sdk.frauddetector.FraudDetectorDataValidationMetrics"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorDataValidationMetrics: frauddetector.FraudDetectorDataValidationMetrics = { ... }
```

##### `fieldLevelMessages`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorDataValidationMetrics.property.fieldLevelMessages"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorFieldValidationMessage`](#aws-cdk-sdk.frauddetector.FraudDetectorFieldValidationMessage)[]

---

##### `fileLevelMessages`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorDataValidationMetrics.property.fileLevelMessages"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorFileValidationMessage`](#aws-cdk-sdk.frauddetector.FraudDetectorFileValidationMessage)[]

---

### FraudDetectorDeleteDetectorRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorDeleteDetectorRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorDeleteDetectorRequest: frauddetector.FraudDetectorDeleteDetectorRequest = { ... }
```

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorDeleteDetectorRequest.property.detectorId"></a>

- *Type:* `string`

---

### FraudDetectorDeleteDetectorResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorDeleteDetectorResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorDeleteDetectorResult: frauddetector.FraudDetectorDeleteDetectorResult = { ... }
```

### FraudDetectorDeleteDetectorVersionRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorDeleteDetectorVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorDeleteDetectorVersionRequest: frauddetector.FraudDetectorDeleteDetectorVersionRequest = { ... }
```

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorDeleteDetectorVersionRequest.property.detectorId"></a>

- *Type:* `string`

---

##### `detectorVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorDeleteDetectorVersionRequest.property.detectorVersionId"></a>

- *Type:* `string`

---

### FraudDetectorDeleteDetectorVersionResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorDeleteDetectorVersionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorDeleteDetectorVersionResult: frauddetector.FraudDetectorDeleteDetectorVersionResult = { ... }
```

### FraudDetectorDeleteEntityTypeRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorDeleteEntityTypeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorDeleteEntityTypeRequest: frauddetector.FraudDetectorDeleteEntityTypeRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorDeleteEntityTypeRequest.property.name"></a>

- *Type:* `string`

---

### FraudDetectorDeleteEntityTypeResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorDeleteEntityTypeResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorDeleteEntityTypeResult: frauddetector.FraudDetectorDeleteEntityTypeResult = { ... }
```

### FraudDetectorDeleteEventRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorDeleteEventRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorDeleteEventRequest: frauddetector.FraudDetectorDeleteEventRequest = { ... }
```

##### `eventId`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorDeleteEventRequest.property.eventId"></a>

- *Type:* `string`

---

##### `eventTypeName`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorDeleteEventRequest.property.eventTypeName"></a>

- *Type:* `string`

---

### FraudDetectorDeleteEventResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorDeleteEventResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorDeleteEventResult: frauddetector.FraudDetectorDeleteEventResult = { ... }
```

### FraudDetectorDeleteEventTypeRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorDeleteEventTypeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorDeleteEventTypeRequest: frauddetector.FraudDetectorDeleteEventTypeRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorDeleteEventTypeRequest.property.name"></a>

- *Type:* `string`

---

### FraudDetectorDeleteEventTypeResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorDeleteEventTypeResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorDeleteEventTypeResult: frauddetector.FraudDetectorDeleteEventTypeResult = { ... }
```

### FraudDetectorDeleteExternalModelRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorDeleteExternalModelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorDeleteExternalModelRequest: frauddetector.FraudDetectorDeleteExternalModelRequest = { ... }
```

##### `modelEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorDeleteExternalModelRequest.property.modelEndpoint"></a>

- *Type:* `string`

---

### FraudDetectorDeleteExternalModelResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorDeleteExternalModelResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorDeleteExternalModelResult: frauddetector.FraudDetectorDeleteExternalModelResult = { ... }
```

### FraudDetectorDeleteLabelRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorDeleteLabelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorDeleteLabelRequest: frauddetector.FraudDetectorDeleteLabelRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorDeleteLabelRequest.property.name"></a>

- *Type:* `string`

---

### FraudDetectorDeleteLabelResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorDeleteLabelResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorDeleteLabelResult: frauddetector.FraudDetectorDeleteLabelResult = { ... }
```

### FraudDetectorDeleteModelRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorDeleteModelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorDeleteModelRequest: frauddetector.FraudDetectorDeleteModelRequest = { ... }
```

##### `modelId`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorDeleteModelRequest.property.modelId"></a>

- *Type:* `string`

---

##### `modelType`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorDeleteModelRequest.property.modelType"></a>

- *Type:* `string`

---

### FraudDetectorDeleteModelResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorDeleteModelResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorDeleteModelResult: frauddetector.FraudDetectorDeleteModelResult = { ... }
```

### FraudDetectorDeleteModelVersionRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorDeleteModelVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorDeleteModelVersionRequest: frauddetector.FraudDetectorDeleteModelVersionRequest = { ... }
```

##### `modelId`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorDeleteModelVersionRequest.property.modelId"></a>

- *Type:* `string`

---

##### `modelType`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorDeleteModelVersionRequest.property.modelType"></a>

- *Type:* `string`

---

##### `modelVersionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorDeleteModelVersionRequest.property.modelVersionNumber"></a>

- *Type:* `string`

---

### FraudDetectorDeleteModelVersionResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorDeleteModelVersionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorDeleteModelVersionResult: frauddetector.FraudDetectorDeleteModelVersionResult = { ... }
```

### FraudDetectorDeleteOutcomeRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorDeleteOutcomeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorDeleteOutcomeRequest: frauddetector.FraudDetectorDeleteOutcomeRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorDeleteOutcomeRequest.property.name"></a>

- *Type:* `string`

---

### FraudDetectorDeleteOutcomeResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorDeleteOutcomeResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorDeleteOutcomeResult: frauddetector.FraudDetectorDeleteOutcomeResult = { ... }
```

### FraudDetectorDeleteRuleRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorDeleteRuleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorDeleteRuleRequest: frauddetector.FraudDetectorDeleteRuleRequest = { ... }
```

##### `rule`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorDeleteRuleRequest.property.rule"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorRule`](#aws-cdk-sdk.frauddetector.FraudDetectorRule)

---

### FraudDetectorDeleteRuleResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorDeleteRuleResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorDeleteRuleResult: frauddetector.FraudDetectorDeleteRuleResult = { ... }
```

### FraudDetectorDeleteVariableRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorDeleteVariableRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorDeleteVariableRequest: frauddetector.FraudDetectorDeleteVariableRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorDeleteVariableRequest.property.name"></a>

- *Type:* `string`

---

### FraudDetectorDeleteVariableResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorDeleteVariableResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorDeleteVariableResult: frauddetector.FraudDetectorDeleteVariableResult = { ... }
```

### FraudDetectorDescribeDetectorRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorDescribeDetectorRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorDescribeDetectorRequest: frauddetector.FraudDetectorDescribeDetectorRequest = { ... }
```

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorDescribeDetectorRequest.property.detectorId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorDescribeDetectorRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorDescribeDetectorRequest.property.nextToken"></a>

- *Type:* `string`

---

### FraudDetectorDescribeDetectorResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorDescribeDetectorResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorDescribeDetectorResult: frauddetector.FraudDetectorDescribeDetectorResult = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorDescribeDetectorResult.property.arn"></a>

- *Type:* `string`

---

##### `detectorId`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorDescribeDetectorResult.property.detectorId"></a>

- *Type:* `string`

---

##### `detectorVersionSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorDescribeDetectorResult.property.detectorVersionSummaries"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorDetectorVersionSummary`](#aws-cdk-sdk.frauddetector.FraudDetectorDetectorVersionSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorDescribeDetectorResult.property.nextToken"></a>

- *Type:* `string`

---

### FraudDetectorDescribeModelVersionsRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorDescribeModelVersionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorDescribeModelVersionsRequest: frauddetector.FraudDetectorDescribeModelVersionsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorDescribeModelVersionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `modelId`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorDescribeModelVersionsRequest.property.modelId"></a>

- *Type:* `string`

---

##### `modelType`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorDescribeModelVersionsRequest.property.modelType"></a>

- *Type:* `string`

---

##### `modelVersionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorDescribeModelVersionsRequest.property.modelVersionNumber"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorDescribeModelVersionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### FraudDetectorDescribeModelVersionsResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorDescribeModelVersionsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorDescribeModelVersionsResult: frauddetector.FraudDetectorDescribeModelVersionsResult = { ... }
```

##### `modelVersionDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorDescribeModelVersionsResult.property.modelVersionDetails"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorModelVersionDetail`](#aws-cdk-sdk.frauddetector.FraudDetectorModelVersionDetail)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorDescribeModelVersionsResult.property.nextToken"></a>

- *Type:* `string`

---

### FraudDetectorDetector <a name="aws-cdk-sdk.frauddetector.FraudDetectorDetector"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorDetector: frauddetector.FraudDetectorDetector = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorDetector.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorDetector.property.createdTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorDetector.property.description"></a>

- *Type:* `string`

---

##### `detectorId`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorDetector.property.detectorId"></a>

- *Type:* `string`

---

##### `eventTypeName`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorDetector.property.eventTypeName"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorDetector.property.lastUpdatedTime"></a>

- *Type:* `string`

---

### FraudDetectorDetectorVersionSummary <a name="aws-cdk-sdk.frauddetector.FraudDetectorDetectorVersionSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorDetectorVersionSummary: frauddetector.FraudDetectorDetectorVersionSummary = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorDetectorVersionSummary.property.description"></a>

- *Type:* `string`

---

##### `detectorVersionId`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorDetectorVersionSummary.property.detectorVersionId"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorDetectorVersionSummary.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorDetectorVersionSummary.property.status"></a>

- *Type:* `string`

---

### FraudDetectorEntity <a name="aws-cdk-sdk.frauddetector.FraudDetectorEntity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorEntity: frauddetector.FraudDetectorEntity = { ... }
```

##### `entityId`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorEntity.property.entityId"></a>

- *Type:* `string`

---

##### `entityType`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorEntity.property.entityType"></a>

- *Type:* `string`

---

### FraudDetectorEntityType <a name="aws-cdk-sdk.frauddetector.FraudDetectorEntityType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorEntityType: frauddetector.FraudDetectorEntityType = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorEntityType.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorEntityType.property.createdTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorEntityType.property.description"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorEntityType.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorEntityType.property.name"></a>

- *Type:* `string`

---

### FraudDetectorEventType <a name="aws-cdk-sdk.frauddetector.FraudDetectorEventType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorEventType: frauddetector.FraudDetectorEventType = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorEventType.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorEventType.property.createdTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorEventType.property.description"></a>

- *Type:* `string`

---

##### `entityTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorEventType.property.entityTypes"></a>

- *Type:* `string`[]

---

##### `eventVariables`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorEventType.property.eventVariables"></a>

- *Type:* `string`[]

---

##### `labels`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorEventType.property.labels"></a>

- *Type:* `string`[]

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorEventType.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorEventType.property.name"></a>

- *Type:* `string`

---

### FraudDetectorExternalEventsDetail <a name="aws-cdk-sdk.frauddetector.FraudDetectorExternalEventsDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorExternalEventsDetail: frauddetector.FraudDetectorExternalEventsDetail = { ... }
```

##### `dataAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorExternalEventsDetail.property.dataAccessRoleArn"></a>

- *Type:* `string`

---

##### `dataLocation`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorExternalEventsDetail.property.dataLocation"></a>

- *Type:* `string`

---

### FraudDetectorExternalModel <a name="aws-cdk-sdk.frauddetector.FraudDetectorExternalModel"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorExternalModel: frauddetector.FraudDetectorExternalModel = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorExternalModel.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorExternalModel.property.createdTime"></a>

- *Type:* `string`

---

##### `inputConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorExternalModel.property.inputConfiguration"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorModelInputConfiguration`](#aws-cdk-sdk.frauddetector.FraudDetectorModelInputConfiguration)

---

##### `invokeModelEndpointRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorExternalModel.property.invokeModelEndpointRoleArn"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorExternalModel.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `modelEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorExternalModel.property.modelEndpoint"></a>

- *Type:* `string`

---

##### `modelEndpointStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorExternalModel.property.modelEndpointStatus"></a>

- *Type:* `string`

---

##### `modelSource`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorExternalModel.property.modelSource"></a>

- *Type:* `string`

---

##### `outputConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorExternalModel.property.outputConfiguration"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorModelOutputConfiguration`](#aws-cdk-sdk.frauddetector.FraudDetectorModelOutputConfiguration)

---

### FraudDetectorFieldValidationMessage <a name="aws-cdk-sdk.frauddetector.FraudDetectorFieldValidationMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorFieldValidationMessage: frauddetector.FraudDetectorFieldValidationMessage = { ... }
```

##### `content`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorFieldValidationMessage.property.content"></a>

- *Type:* `string`

---

##### `fieldName`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorFieldValidationMessage.property.fieldName"></a>

- *Type:* `string`

---

##### `identifier`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorFieldValidationMessage.property.identifier"></a>

- *Type:* `string`

---

##### `title`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorFieldValidationMessage.property.title"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorFieldValidationMessage.property.type"></a>

- *Type:* `string`

---

### FraudDetectorFileValidationMessage <a name="aws-cdk-sdk.frauddetector.FraudDetectorFileValidationMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorFileValidationMessage: frauddetector.FraudDetectorFileValidationMessage = { ... }
```

##### `content`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorFileValidationMessage.property.content"></a>

- *Type:* `string`

---

##### `title`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorFileValidationMessage.property.title"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorFileValidationMessage.property.type"></a>

- *Type:* `string`

---

### FraudDetectorGetDetectorsRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetDetectorsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorGetDetectorsRequest: frauddetector.FraudDetectorGetDetectorsRequest = { ... }
```

##### `detectorId`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetDetectorsRequest.property.detectorId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetDetectorsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetDetectorsRequest.property.nextToken"></a>

- *Type:* `string`

---

### FraudDetectorGetDetectorsResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetDetectorsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorGetDetectorsResult: frauddetector.FraudDetectorGetDetectorsResult = { ... }
```

##### `detectors`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetDetectorsResult.property.detectors"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorDetector`](#aws-cdk-sdk.frauddetector.FraudDetectorDetector)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetDetectorsResult.property.nextToken"></a>

- *Type:* `string`

---

### FraudDetectorGetDetectorVersionRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetDetectorVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorGetDetectorVersionRequest: frauddetector.FraudDetectorGetDetectorVersionRequest = { ... }
```

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetDetectorVersionRequest.property.detectorId"></a>

- *Type:* `string`

---

##### `detectorVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetDetectorVersionRequest.property.detectorVersionId"></a>

- *Type:* `string`

---

### FraudDetectorGetDetectorVersionResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetDetectorVersionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorGetDetectorVersionResult: frauddetector.FraudDetectorGetDetectorVersionResult = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetDetectorVersionResult.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetDetectorVersionResult.property.createdTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetDetectorVersionResult.property.description"></a>

- *Type:* `string`

---

##### `detectorId`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetDetectorVersionResult.property.detectorId"></a>

- *Type:* `string`

---

##### `detectorVersionId`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetDetectorVersionResult.property.detectorVersionId"></a>

- *Type:* `string`

---

##### `externalModelEndpoints`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetDetectorVersionResult.property.externalModelEndpoints"></a>

- *Type:* `string`[]

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetDetectorVersionResult.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `modelVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetDetectorVersionResult.property.modelVersions"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorModelVersion`](#aws-cdk-sdk.frauddetector.FraudDetectorModelVersion)[]

---

##### `ruleExecutionMode`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetDetectorVersionResult.property.ruleExecutionMode"></a>

- *Type:* `string`

---

##### `rules`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetDetectorVersionResult.property.rules"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorRule`](#aws-cdk-sdk.frauddetector.FraudDetectorRule)[]

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetDetectorVersionResult.property.status"></a>

- *Type:* `string`

---

### FraudDetectorGetEntityTypesRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetEntityTypesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorGetEntityTypesRequest: frauddetector.FraudDetectorGetEntityTypesRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetEntityTypesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetEntityTypesRequest.property.name"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetEntityTypesRequest.property.nextToken"></a>

- *Type:* `string`

---

### FraudDetectorGetEntityTypesResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetEntityTypesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorGetEntityTypesResult: frauddetector.FraudDetectorGetEntityTypesResult = { ... }
```

##### `entityTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetEntityTypesResult.property.entityTypes"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorEntityType`](#aws-cdk-sdk.frauddetector.FraudDetectorEntityType)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetEntityTypesResult.property.nextToken"></a>

- *Type:* `string`

---

### FraudDetectorGetEventPredictionRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetEventPredictionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorGetEventPredictionRequest: frauddetector.FraudDetectorGetEventPredictionRequest = { ... }
```

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetEventPredictionRequest.property.detectorId"></a>

- *Type:* `string`

---

##### `entities`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetEventPredictionRequest.property.entities"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorEntity`](#aws-cdk-sdk.frauddetector.FraudDetectorEntity)[]

---

##### `eventId`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetEventPredictionRequest.property.eventId"></a>

- *Type:* `string`

---

##### `eventTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetEventPredictionRequest.property.eventTimestamp"></a>

- *Type:* `string`

---

##### `eventTypeName`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetEventPredictionRequest.property.eventTypeName"></a>

- *Type:* `string`

---

##### `eventVariables`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetEventPredictionRequest.property.eventVariables"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `detectorVersionId`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetEventPredictionRequest.property.detectorVersionId"></a>

- *Type:* `string`

---

##### `externalModelEndpointDataBlobs`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetEventPredictionRequest.property.externalModelEndpointDataBlobs"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.frauddetector.FraudDetectorModelEndpointDataBlob`](#aws-cdk-sdk.frauddetector.FraudDetectorModelEndpointDataBlob)}

---

### FraudDetectorGetEventPredictionResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetEventPredictionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorGetEventPredictionResult: frauddetector.FraudDetectorGetEventPredictionResult = { ... }
```

##### `modelScores`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetEventPredictionResult.property.modelScores"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorModelScores`](#aws-cdk-sdk.frauddetector.FraudDetectorModelScores)[]

---

##### `ruleResults`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetEventPredictionResult.property.ruleResults"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorRuleResult`](#aws-cdk-sdk.frauddetector.FraudDetectorRuleResult)[]

---

### FraudDetectorGetEventTypesRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetEventTypesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorGetEventTypesRequest: frauddetector.FraudDetectorGetEventTypesRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetEventTypesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetEventTypesRequest.property.name"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetEventTypesRequest.property.nextToken"></a>

- *Type:* `string`

---

### FraudDetectorGetEventTypesResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetEventTypesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorGetEventTypesResult: frauddetector.FraudDetectorGetEventTypesResult = { ... }
```

##### `eventTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetEventTypesResult.property.eventTypes"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorEventType`](#aws-cdk-sdk.frauddetector.FraudDetectorEventType)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetEventTypesResult.property.nextToken"></a>

- *Type:* `string`

---

### FraudDetectorGetExternalModelsRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetExternalModelsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorGetExternalModelsRequest: frauddetector.FraudDetectorGetExternalModelsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetExternalModelsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `modelEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetExternalModelsRequest.property.modelEndpoint"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetExternalModelsRequest.property.nextToken"></a>

- *Type:* `string`

---

### FraudDetectorGetExternalModelsResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetExternalModelsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorGetExternalModelsResult: frauddetector.FraudDetectorGetExternalModelsResult = { ... }
```

##### `externalModels`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetExternalModelsResult.property.externalModels"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorExternalModel`](#aws-cdk-sdk.frauddetector.FraudDetectorExternalModel)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetExternalModelsResult.property.nextToken"></a>

- *Type:* `string`

---

### FraudDetectorGetKmsEncryptionKeyResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetKmsEncryptionKeyResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorGetKmsEncryptionKeyResult: frauddetector.FraudDetectorGetKmsEncryptionKeyResult = { ... }
```

##### `kmsKey`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetKmsEncryptionKeyResult.property.kmsKey"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorKmsKey`](#aws-cdk-sdk.frauddetector.FraudDetectorKmsKey)

---

### FraudDetectorGetLabelsRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetLabelsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorGetLabelsRequest: frauddetector.FraudDetectorGetLabelsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetLabelsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetLabelsRequest.property.name"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetLabelsRequest.property.nextToken"></a>

- *Type:* `string`

---

### FraudDetectorGetLabelsResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetLabelsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorGetLabelsResult: frauddetector.FraudDetectorGetLabelsResult = { ... }
```

##### `labels`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetLabelsResult.property.labels"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorLabel`](#aws-cdk-sdk.frauddetector.FraudDetectorLabel)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetLabelsResult.property.nextToken"></a>

- *Type:* `string`

---

### FraudDetectorGetModelsRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetModelsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorGetModelsRequest: frauddetector.FraudDetectorGetModelsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetModelsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `modelId`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetModelsRequest.property.modelId"></a>

- *Type:* `string`

---

##### `modelType`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetModelsRequest.property.modelType"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetModelsRequest.property.nextToken"></a>

- *Type:* `string`

---

### FraudDetectorGetModelsResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetModelsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorGetModelsResult: frauddetector.FraudDetectorGetModelsResult = { ... }
```

##### `models`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetModelsResult.property.models"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorModel`](#aws-cdk-sdk.frauddetector.FraudDetectorModel)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetModelsResult.property.nextToken"></a>

- *Type:* `string`

---

### FraudDetectorGetModelVersionRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetModelVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorGetModelVersionRequest: frauddetector.FraudDetectorGetModelVersionRequest = { ... }
```

##### `modelId`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetModelVersionRequest.property.modelId"></a>

- *Type:* `string`

---

##### `modelType`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetModelVersionRequest.property.modelType"></a>

- *Type:* `string`

---

##### `modelVersionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetModelVersionRequest.property.modelVersionNumber"></a>

- *Type:* `string`

---

### FraudDetectorGetModelVersionResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetModelVersionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorGetModelVersionResult: frauddetector.FraudDetectorGetModelVersionResult = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetModelVersionResult.property.arn"></a>

- *Type:* `string`

---

##### `externalEventsDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetModelVersionResult.property.externalEventsDetail"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorExternalEventsDetail`](#aws-cdk-sdk.frauddetector.FraudDetectorExternalEventsDetail)

---

##### `modelId`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetModelVersionResult.property.modelId"></a>

- *Type:* `string`

---

##### `modelType`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetModelVersionResult.property.modelType"></a>

- *Type:* `string`

---

##### `modelVersionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetModelVersionResult.property.modelVersionNumber"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetModelVersionResult.property.status"></a>

- *Type:* `string`

---

##### `trainingDataSchema`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetModelVersionResult.property.trainingDataSchema"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorTrainingDataSchema`](#aws-cdk-sdk.frauddetector.FraudDetectorTrainingDataSchema)

---

##### `trainingDataSource`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetModelVersionResult.property.trainingDataSource"></a>

- *Type:* `string`

---

### FraudDetectorGetOutcomesRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetOutcomesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorGetOutcomesRequest: frauddetector.FraudDetectorGetOutcomesRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetOutcomesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetOutcomesRequest.property.name"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetOutcomesRequest.property.nextToken"></a>

- *Type:* `string`

---

### FraudDetectorGetOutcomesResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetOutcomesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorGetOutcomesResult: frauddetector.FraudDetectorGetOutcomesResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetOutcomesResult.property.nextToken"></a>

- *Type:* `string`

---

##### `outcomes`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetOutcomesResult.property.outcomes"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorOutcome`](#aws-cdk-sdk.frauddetector.FraudDetectorOutcome)[]

---

### FraudDetectorGetRulesRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetRulesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorGetRulesRequest: frauddetector.FraudDetectorGetRulesRequest = { ... }
```

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetRulesRequest.property.detectorId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetRulesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetRulesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `ruleId`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetRulesRequest.property.ruleId"></a>

- *Type:* `string`

---

##### `ruleVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetRulesRequest.property.ruleVersion"></a>

- *Type:* `string`

---

### FraudDetectorGetRulesResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetRulesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorGetRulesResult: frauddetector.FraudDetectorGetRulesResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetRulesResult.property.nextToken"></a>

- *Type:* `string`

---

##### `ruleDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetRulesResult.property.ruleDetails"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorRuleDetail`](#aws-cdk-sdk.frauddetector.FraudDetectorRuleDetail)[]

---

### FraudDetectorGetVariablesRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetVariablesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorGetVariablesRequest: frauddetector.FraudDetectorGetVariablesRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetVariablesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetVariablesRequest.property.name"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetVariablesRequest.property.nextToken"></a>

- *Type:* `string`

---

### FraudDetectorGetVariablesResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetVariablesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorGetVariablesResult: frauddetector.FraudDetectorGetVariablesResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetVariablesResult.property.nextToken"></a>

- *Type:* `string`

---

##### `variables`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorGetVariablesResult.property.variables"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorVariable`](#aws-cdk-sdk.frauddetector.FraudDetectorVariable)[]

---

### FraudDetectorKmsKey <a name="aws-cdk-sdk.frauddetector.FraudDetectorKmsKey"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorKmsKey: frauddetector.FraudDetectorKmsKey = { ... }
```

##### `kmsEncryptionKeyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorKmsKey.property.kmsEncryptionKeyArn"></a>

- *Type:* `string`

---

### FraudDetectorLabel <a name="aws-cdk-sdk.frauddetector.FraudDetectorLabel"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorLabel: frauddetector.FraudDetectorLabel = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorLabel.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorLabel.property.createdTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorLabel.property.description"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorLabel.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorLabel.property.name"></a>

- *Type:* `string`

---

### FraudDetectorLabelSchema <a name="aws-cdk-sdk.frauddetector.FraudDetectorLabelSchema"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorLabelSchema: frauddetector.FraudDetectorLabelSchema = { ... }
```

##### `labelMapper`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorLabelSchema.property.labelMapper"></a>

- *Type:* {[ key: string ]: `string`[]}

---

### FraudDetectorListTagsForResourceRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorListTagsForResourceRequest: frauddetector.FraudDetectorListTagsForResourceRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorListTagsForResourceRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorListTagsForResourceRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `resourceARN`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorListTagsForResourceRequest.property.resourceARN"></a>

- *Type:* `string`

---

### FraudDetectorListTagsForResourceResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorListTagsForResourceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorListTagsForResourceResult: frauddetector.FraudDetectorListTagsForResourceResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorListTagsForResourceResult.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorListTagsForResourceResult.property.tags"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorTag`](#aws-cdk-sdk.frauddetector.FraudDetectorTag)[]

---

### FraudDetectorMetricDataPoint <a name="aws-cdk-sdk.frauddetector.FraudDetectorMetricDataPoint"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorMetricDataPoint: frauddetector.FraudDetectorMetricDataPoint = { ... }
```

##### `fpr`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorMetricDataPoint.property.fpr"></a>

- *Type:* `number`

---

##### `precision`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorMetricDataPoint.property.precision"></a>

- *Type:* `number`

---

##### `threshold`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorMetricDataPoint.property.threshold"></a>

- *Type:* `number`

---

##### `tpr`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorMetricDataPoint.property.tpr"></a>

- *Type:* `number`

---

### FraudDetectorModel <a name="aws-cdk-sdk.frauddetector.FraudDetectorModel"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorModel: frauddetector.FraudDetectorModel = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorModel.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorModel.property.createdTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorModel.property.description"></a>

- *Type:* `string`

---

##### `eventTypeName`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorModel.property.eventTypeName"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorModel.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `modelId`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorModel.property.modelId"></a>

- *Type:* `string`

---

##### `modelType`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorModel.property.modelType"></a>

- *Type:* `string`

---

### FraudDetectorModelEndpointDataBlob <a name="aws-cdk-sdk.frauddetector.FraudDetectorModelEndpointDataBlob"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorModelEndpointDataBlob: frauddetector.FraudDetectorModelEndpointDataBlob = { ... }
```

##### `byteBuffer`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorModelEndpointDataBlob.property.byteBuffer"></a>

- *Type:* `any`

---

##### `contentType`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorModelEndpointDataBlob.property.contentType"></a>

- *Type:* `string`

---

### FraudDetectorModelInputConfiguration <a name="aws-cdk-sdk.frauddetector.FraudDetectorModelInputConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorModelInputConfiguration: frauddetector.FraudDetectorModelInputConfiguration = { ... }
```

##### `useEventVariables`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorModelInputConfiguration.property.useEventVariables"></a>

- *Type:* `boolean`

---

##### `csvInputTemplate`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorModelInputConfiguration.property.csvInputTemplate"></a>

- *Type:* `string`

---

##### `eventTypeName`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorModelInputConfiguration.property.eventTypeName"></a>

- *Type:* `string`

---

##### `format`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorModelInputConfiguration.property.format"></a>

- *Type:* `string`

---

##### `jsonInputTemplate`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorModelInputConfiguration.property.jsonInputTemplate"></a>

- *Type:* `string`

---

### FraudDetectorModelOutputConfiguration <a name="aws-cdk-sdk.frauddetector.FraudDetectorModelOutputConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorModelOutputConfiguration: frauddetector.FraudDetectorModelOutputConfiguration = { ... }
```

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorModelOutputConfiguration.property.format"></a>

- *Type:* `string`

---

##### `csvIndexToVariableMap`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorModelOutputConfiguration.property.csvIndexToVariableMap"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `jsonKeyToVariableMap`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorModelOutputConfiguration.property.jsonKeyToVariableMap"></a>

- *Type:* {[ key: string ]: `string`}

---

### FraudDetectorModelScores <a name="aws-cdk-sdk.frauddetector.FraudDetectorModelScores"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorModelScores: frauddetector.FraudDetectorModelScores = { ... }
```

##### `modelVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorModelScores.property.modelVersion"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorModelVersion`](#aws-cdk-sdk.frauddetector.FraudDetectorModelVersion)

---

##### `scores`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorModelScores.property.scores"></a>

- *Type:* {[ key: string ]: `number`}

---

### FraudDetectorModelVersion <a name="aws-cdk-sdk.frauddetector.FraudDetectorModelVersion"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorModelVersion: frauddetector.FraudDetectorModelVersion = { ... }
```

##### `modelId`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorModelVersion.property.modelId"></a>

- *Type:* `string`

---

##### `modelType`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorModelVersion.property.modelType"></a>

- *Type:* `string`

---

##### `modelVersionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorModelVersion.property.modelVersionNumber"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorModelVersion.property.arn"></a>

- *Type:* `string`

---

### FraudDetectorModelVersionDetail <a name="aws-cdk-sdk.frauddetector.FraudDetectorModelVersionDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorModelVersionDetail: frauddetector.FraudDetectorModelVersionDetail = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorModelVersionDetail.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorModelVersionDetail.property.createdTime"></a>

- *Type:* `string`

---

##### `externalEventsDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorModelVersionDetail.property.externalEventsDetail"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorExternalEventsDetail`](#aws-cdk-sdk.frauddetector.FraudDetectorExternalEventsDetail)

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorModelVersionDetail.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `modelId`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorModelVersionDetail.property.modelId"></a>

- *Type:* `string`

---

##### `modelType`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorModelVersionDetail.property.modelType"></a>

- *Type:* `string`

---

##### `modelVersionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorModelVersionDetail.property.modelVersionNumber"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorModelVersionDetail.property.status"></a>

- *Type:* `string`

---

##### `trainingDataSchema`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorModelVersionDetail.property.trainingDataSchema"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorTrainingDataSchema`](#aws-cdk-sdk.frauddetector.FraudDetectorTrainingDataSchema)

---

##### `trainingDataSource`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorModelVersionDetail.property.trainingDataSource"></a>

- *Type:* `string`

---

##### `trainingResult`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorModelVersionDetail.property.trainingResult"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorTrainingResult`](#aws-cdk-sdk.frauddetector.FraudDetectorTrainingResult)

---

### FraudDetectorOutcome <a name="aws-cdk-sdk.frauddetector.FraudDetectorOutcome"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorOutcome: frauddetector.FraudDetectorOutcome = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorOutcome.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorOutcome.property.createdTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorOutcome.property.description"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorOutcome.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorOutcome.property.name"></a>

- *Type:* `string`

---

### FraudDetectorPutDetectorRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorPutDetectorRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorPutDetectorRequest: frauddetector.FraudDetectorPutDetectorRequest = { ... }
```

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorPutDetectorRequest.property.detectorId"></a>

- *Type:* `string`

---

##### `eventTypeName`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorPutDetectorRequest.property.eventTypeName"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorPutDetectorRequest.property.description"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorPutDetectorRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorTag`](#aws-cdk-sdk.frauddetector.FraudDetectorTag)[]

---

### FraudDetectorPutDetectorResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorPutDetectorResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorPutDetectorResult: frauddetector.FraudDetectorPutDetectorResult = { ... }
```

### FraudDetectorPutEntityTypeRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorPutEntityTypeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorPutEntityTypeRequest: frauddetector.FraudDetectorPutEntityTypeRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorPutEntityTypeRequest.property.name"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorPutEntityTypeRequest.property.description"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorPutEntityTypeRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorTag`](#aws-cdk-sdk.frauddetector.FraudDetectorTag)[]

---

### FraudDetectorPutEntityTypeResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorPutEntityTypeResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorPutEntityTypeResult: frauddetector.FraudDetectorPutEntityTypeResult = { ... }
```

### FraudDetectorPutEventTypeRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorPutEventTypeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorPutEventTypeRequest: frauddetector.FraudDetectorPutEventTypeRequest = { ... }
```

##### `entityTypes`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorPutEventTypeRequest.property.entityTypes"></a>

- *Type:* `string`[]

---

##### `eventVariables`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorPutEventTypeRequest.property.eventVariables"></a>

- *Type:* `string`[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorPutEventTypeRequest.property.name"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorPutEventTypeRequest.property.description"></a>

- *Type:* `string`

---

##### `labels`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorPutEventTypeRequest.property.labels"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorPutEventTypeRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorTag`](#aws-cdk-sdk.frauddetector.FraudDetectorTag)[]

---

### FraudDetectorPutEventTypeResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorPutEventTypeResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorPutEventTypeResult: frauddetector.FraudDetectorPutEventTypeResult = { ... }
```

### FraudDetectorPutExternalModelRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorPutExternalModelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorPutExternalModelRequest: frauddetector.FraudDetectorPutExternalModelRequest = { ... }
```

##### `inputConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorPutExternalModelRequest.property.inputConfiguration"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorModelInputConfiguration`](#aws-cdk-sdk.frauddetector.FraudDetectorModelInputConfiguration)

---

##### `invokeModelEndpointRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorPutExternalModelRequest.property.invokeModelEndpointRoleArn"></a>

- *Type:* `string`

---

##### `modelEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorPutExternalModelRequest.property.modelEndpoint"></a>

- *Type:* `string`

---

##### `modelEndpointStatus`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorPutExternalModelRequest.property.modelEndpointStatus"></a>

- *Type:* `string`

---

##### `modelSource`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorPutExternalModelRequest.property.modelSource"></a>

- *Type:* `string`

---

##### `outputConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorPutExternalModelRequest.property.outputConfiguration"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorModelOutputConfiguration`](#aws-cdk-sdk.frauddetector.FraudDetectorModelOutputConfiguration)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorPutExternalModelRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorTag`](#aws-cdk-sdk.frauddetector.FraudDetectorTag)[]

---

### FraudDetectorPutExternalModelResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorPutExternalModelResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorPutExternalModelResult: frauddetector.FraudDetectorPutExternalModelResult = { ... }
```

### FraudDetectorPutKmsEncryptionKeyRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorPutKmsEncryptionKeyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorPutKmsEncryptionKeyRequest: frauddetector.FraudDetectorPutKmsEncryptionKeyRequest = { ... }
```

##### `kmsEncryptionKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorPutKmsEncryptionKeyRequest.property.kmsEncryptionKeyArn"></a>

- *Type:* `string`

---

### FraudDetectorPutKmsEncryptionKeyResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorPutKmsEncryptionKeyResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorPutKmsEncryptionKeyResult: frauddetector.FraudDetectorPutKmsEncryptionKeyResult = { ... }
```

### FraudDetectorPutLabelRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorPutLabelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorPutLabelRequest: frauddetector.FraudDetectorPutLabelRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorPutLabelRequest.property.name"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorPutLabelRequest.property.description"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorPutLabelRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorTag`](#aws-cdk-sdk.frauddetector.FraudDetectorTag)[]

---

### FraudDetectorPutLabelResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorPutLabelResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorPutLabelResult: frauddetector.FraudDetectorPutLabelResult = { ... }
```

### FraudDetectorPutOutcomeRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorPutOutcomeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorPutOutcomeRequest: frauddetector.FraudDetectorPutOutcomeRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorPutOutcomeRequest.property.name"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorPutOutcomeRequest.property.description"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorPutOutcomeRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorTag`](#aws-cdk-sdk.frauddetector.FraudDetectorTag)[]

---

### FraudDetectorPutOutcomeResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorPutOutcomeResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorPutOutcomeResult: frauddetector.FraudDetectorPutOutcomeResult = { ... }
```

### FraudDetectorRule <a name="aws-cdk-sdk.frauddetector.FraudDetectorRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorRule: frauddetector.FraudDetectorRule = { ... }
```

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorRule.property.detectorId"></a>

- *Type:* `string`

---

##### `ruleId`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorRule.property.ruleId"></a>

- *Type:* `string`

---

##### `ruleVersion`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorRule.property.ruleVersion"></a>

- *Type:* `string`

---

### FraudDetectorRuleDetail <a name="aws-cdk-sdk.frauddetector.FraudDetectorRuleDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorRuleDetail: frauddetector.FraudDetectorRuleDetail = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorRuleDetail.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorRuleDetail.property.createdTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorRuleDetail.property.description"></a>

- *Type:* `string`

---

##### `detectorId`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorRuleDetail.property.detectorId"></a>

- *Type:* `string`

---

##### `expression`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorRuleDetail.property.expression"></a>

- *Type:* `string`

---

##### `language`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorRuleDetail.property.language"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorRuleDetail.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `outcomes`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorRuleDetail.property.outcomes"></a>

- *Type:* `string`[]

---

##### `ruleId`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorRuleDetail.property.ruleId"></a>

- *Type:* `string`

---

##### `ruleVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorRuleDetail.property.ruleVersion"></a>

- *Type:* `string`

---

### FraudDetectorRuleResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorRuleResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorRuleResult: frauddetector.FraudDetectorRuleResult = { ... }
```

##### `outcomes`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorRuleResult.property.outcomes"></a>

- *Type:* `string`[]

---

##### `ruleId`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorRuleResult.property.ruleId"></a>

- *Type:* `string`

---

### FraudDetectorTag <a name="aws-cdk-sdk.frauddetector.FraudDetectorTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorTag: frauddetector.FraudDetectorTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorTag.property.value"></a>

- *Type:* `string`

---

### FraudDetectorTagResourceRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorTagResourceRequest: frauddetector.FraudDetectorTagResourceRequest = { ... }
```

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorTagResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorTag`](#aws-cdk-sdk.frauddetector.FraudDetectorTag)[]

---

##### `resourceARN`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorTagResourceRequest.property.resourceARN"></a>

- *Type:* `string`

---

### FraudDetectorTagResourceResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorTagResourceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorTagResourceResult: frauddetector.FraudDetectorTagResourceResult = { ... }
```

### FraudDetectorTrainingDataSchema <a name="aws-cdk-sdk.frauddetector.FraudDetectorTrainingDataSchema"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorTrainingDataSchema: frauddetector.FraudDetectorTrainingDataSchema = { ... }
```

##### `labelSchema`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorTrainingDataSchema.property.labelSchema"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorLabelSchema`](#aws-cdk-sdk.frauddetector.FraudDetectorLabelSchema)

---

##### `modelVariables`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorTrainingDataSchema.property.modelVariables"></a>

- *Type:* `string`[]

---

### FraudDetectorTrainingMetrics <a name="aws-cdk-sdk.frauddetector.FraudDetectorTrainingMetrics"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorTrainingMetrics: frauddetector.FraudDetectorTrainingMetrics = { ... }
```

##### `auc`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorTrainingMetrics.property.auc"></a>

- *Type:* `number`

---

##### `metricDataPoints`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorTrainingMetrics.property.metricDataPoints"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorMetricDataPoint`](#aws-cdk-sdk.frauddetector.FraudDetectorMetricDataPoint)[]

---

### FraudDetectorTrainingResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorTrainingResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorTrainingResult: frauddetector.FraudDetectorTrainingResult = { ... }
```

##### `dataValidationMetrics`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorTrainingResult.property.dataValidationMetrics"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorDataValidationMetrics`](#aws-cdk-sdk.frauddetector.FraudDetectorDataValidationMetrics)

---

##### `trainingMetrics`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorTrainingResult.property.trainingMetrics"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorTrainingMetrics`](#aws-cdk-sdk.frauddetector.FraudDetectorTrainingMetrics)

---

### FraudDetectorUntagResourceRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorUntagResourceRequest: frauddetector.FraudDetectorUntagResourceRequest = { ... }
```

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

##### `resourceARN`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorUntagResourceRequest.property.resourceARN"></a>

- *Type:* `string`

---

### FraudDetectorUntagResourceResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorUntagResourceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorUntagResourceResult: frauddetector.FraudDetectorUntagResourceResult = { ... }
```

### FraudDetectorUpdateDetectorVersionMetadataRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateDetectorVersionMetadataRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorUpdateDetectorVersionMetadataRequest: frauddetector.FraudDetectorUpdateDetectorVersionMetadataRequest = { ... }
```

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateDetectorVersionMetadataRequest.property.description"></a>

- *Type:* `string`

---

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateDetectorVersionMetadataRequest.property.detectorId"></a>

- *Type:* `string`

---

##### `detectorVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateDetectorVersionMetadataRequest.property.detectorVersionId"></a>

- *Type:* `string`

---

### FraudDetectorUpdateDetectorVersionMetadataResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateDetectorVersionMetadataResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorUpdateDetectorVersionMetadataResult: frauddetector.FraudDetectorUpdateDetectorVersionMetadataResult = { ... }
```

### FraudDetectorUpdateDetectorVersionRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateDetectorVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorUpdateDetectorVersionRequest: frauddetector.FraudDetectorUpdateDetectorVersionRequest = { ... }
```

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateDetectorVersionRequest.property.detectorId"></a>

- *Type:* `string`

---

##### `detectorVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateDetectorVersionRequest.property.detectorVersionId"></a>

- *Type:* `string`

---

##### `externalModelEndpoints`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateDetectorVersionRequest.property.externalModelEndpoints"></a>

- *Type:* `string`[]

---

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateDetectorVersionRequest.property.rules"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorRule`](#aws-cdk-sdk.frauddetector.FraudDetectorRule)[]

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateDetectorVersionRequest.property.description"></a>

- *Type:* `string`

---

##### `modelVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateDetectorVersionRequest.property.modelVersions"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorModelVersion`](#aws-cdk-sdk.frauddetector.FraudDetectorModelVersion)[]

---

##### `ruleExecutionMode`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateDetectorVersionRequest.property.ruleExecutionMode"></a>

- *Type:* `string`

---

### FraudDetectorUpdateDetectorVersionResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateDetectorVersionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorUpdateDetectorVersionResult: frauddetector.FraudDetectorUpdateDetectorVersionResult = { ... }
```

### FraudDetectorUpdateDetectorVersionStatusRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateDetectorVersionStatusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorUpdateDetectorVersionStatusRequest: frauddetector.FraudDetectorUpdateDetectorVersionStatusRequest = { ... }
```

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateDetectorVersionStatusRequest.property.detectorId"></a>

- *Type:* `string`

---

##### `detectorVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateDetectorVersionStatusRequest.property.detectorVersionId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateDetectorVersionStatusRequest.property.status"></a>

- *Type:* `string`

---

### FraudDetectorUpdateDetectorVersionStatusResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateDetectorVersionStatusResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorUpdateDetectorVersionStatusResult: frauddetector.FraudDetectorUpdateDetectorVersionStatusResult = { ... }
```

### FraudDetectorUpdateModelRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateModelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorUpdateModelRequest: frauddetector.FraudDetectorUpdateModelRequest = { ... }
```

##### `modelId`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateModelRequest.property.modelId"></a>

- *Type:* `string`

---

##### `modelType`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateModelRequest.property.modelType"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateModelRequest.property.description"></a>

- *Type:* `string`

---

### FraudDetectorUpdateModelResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateModelResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorUpdateModelResult: frauddetector.FraudDetectorUpdateModelResult = { ... }
```

### FraudDetectorUpdateModelVersionRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateModelVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorUpdateModelVersionRequest: frauddetector.FraudDetectorUpdateModelVersionRequest = { ... }
```

##### `majorVersionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateModelVersionRequest.property.majorVersionNumber"></a>

- *Type:* `string`

---

##### `modelId`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateModelVersionRequest.property.modelId"></a>

- *Type:* `string`

---

##### `modelType`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateModelVersionRequest.property.modelType"></a>

- *Type:* `string`

---

##### `externalEventsDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateModelVersionRequest.property.externalEventsDetail"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorExternalEventsDetail`](#aws-cdk-sdk.frauddetector.FraudDetectorExternalEventsDetail)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateModelVersionRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorTag`](#aws-cdk-sdk.frauddetector.FraudDetectorTag)[]

---

### FraudDetectorUpdateModelVersionResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateModelVersionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorUpdateModelVersionResult: frauddetector.FraudDetectorUpdateModelVersionResult = { ... }
```

##### `modelId`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateModelVersionResult.property.modelId"></a>

- *Type:* `string`

---

##### `modelType`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateModelVersionResult.property.modelType"></a>

- *Type:* `string`

---

##### `modelVersionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateModelVersionResult.property.modelVersionNumber"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateModelVersionResult.property.status"></a>

- *Type:* `string`

---

### FraudDetectorUpdateModelVersionStatusRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateModelVersionStatusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorUpdateModelVersionStatusRequest: frauddetector.FraudDetectorUpdateModelVersionStatusRequest = { ... }
```

##### `modelId`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateModelVersionStatusRequest.property.modelId"></a>

- *Type:* `string`

---

##### `modelType`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateModelVersionStatusRequest.property.modelType"></a>

- *Type:* `string`

---

##### `modelVersionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateModelVersionStatusRequest.property.modelVersionNumber"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateModelVersionStatusRequest.property.status"></a>

- *Type:* `string`

---

### FraudDetectorUpdateModelVersionStatusResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateModelVersionStatusResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorUpdateModelVersionStatusResult: frauddetector.FraudDetectorUpdateModelVersionStatusResult = { ... }
```

### FraudDetectorUpdateRuleMetadataRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateRuleMetadataRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorUpdateRuleMetadataRequest: frauddetector.FraudDetectorUpdateRuleMetadataRequest = { ... }
```

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateRuleMetadataRequest.property.description"></a>

- *Type:* `string`

---

##### `rule`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateRuleMetadataRequest.property.rule"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorRule`](#aws-cdk-sdk.frauddetector.FraudDetectorRule)

---

### FraudDetectorUpdateRuleMetadataResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateRuleMetadataResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorUpdateRuleMetadataResult: frauddetector.FraudDetectorUpdateRuleMetadataResult = { ... }
```

### FraudDetectorUpdateRuleVersionRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateRuleVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorUpdateRuleVersionRequest: frauddetector.FraudDetectorUpdateRuleVersionRequest = { ... }
```

##### `expression`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateRuleVersionRequest.property.expression"></a>

- *Type:* `string`

---

##### `language`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateRuleVersionRequest.property.language"></a>

- *Type:* `string`

---

##### `outcomes`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateRuleVersionRequest.property.outcomes"></a>

- *Type:* `string`[]

---

##### `rule`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateRuleVersionRequest.property.rule"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorRule`](#aws-cdk-sdk.frauddetector.FraudDetectorRule)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateRuleVersionRequest.property.description"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateRuleVersionRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorTag`](#aws-cdk-sdk.frauddetector.FraudDetectorTag)[]

---

### FraudDetectorUpdateRuleVersionResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateRuleVersionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorUpdateRuleVersionResult: frauddetector.FraudDetectorUpdateRuleVersionResult = { ... }
```

##### `rule`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateRuleVersionResult.property.rule"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorRule`](#aws-cdk-sdk.frauddetector.FraudDetectorRule)

---

### FraudDetectorUpdateVariableRequest <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateVariableRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorUpdateVariableRequest: frauddetector.FraudDetectorUpdateVariableRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateVariableRequest.property.name"></a>

- *Type:* `string`

---

##### `defaultValue`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateVariableRequest.property.defaultValue"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateVariableRequest.property.description"></a>

- *Type:* `string`

---

##### `variableType`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateVariableRequest.property.variableType"></a>

- *Type:* `string`

---

### FraudDetectorUpdateVariableResult <a name="aws-cdk-sdk.frauddetector.FraudDetectorUpdateVariableResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorUpdateVariableResult: frauddetector.FraudDetectorUpdateVariableResult = { ... }
```

### FraudDetectorVariable <a name="aws-cdk-sdk.frauddetector.FraudDetectorVariable"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorVariable: frauddetector.FraudDetectorVariable = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorVariable.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorVariable.property.createdTime"></a>

- *Type:* `string`

---

##### `dataSource`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorVariable.property.dataSource"></a>

- *Type:* `string`

---

##### `dataType`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorVariable.property.dataType"></a>

- *Type:* `string`

---

##### `defaultValue`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorVariable.property.defaultValue"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorVariable.property.description"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorVariable.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorVariable.property.name"></a>

- *Type:* `string`

---

##### `variableType`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorVariable.property.variableType"></a>

- *Type:* `string`

---

### FraudDetectorVariableEntry <a name="aws-cdk-sdk.frauddetector.FraudDetectorVariableEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

const fraudDetectorVariableEntry: frauddetector.FraudDetectorVariableEntry = { ... }
```

##### `dataSource`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorVariableEntry.property.dataSource"></a>

- *Type:* `string`

---

##### `dataType`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorVariableEntry.property.dataType"></a>

- *Type:* `string`

---

##### `defaultValue`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorVariableEntry.property.defaultValue"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorVariableEntry.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorVariableEntry.property.name"></a>

- *Type:* `string`

---

##### `variableType`<sup>Optional</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorVariableEntry.property.variableType"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### FraudDetectorResponsesBatchCreateVariable <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesBatchCreateVariable"></a>

#### Initializer <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesBatchCreateVariable.Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

new frauddetector.FraudDetectorResponsesBatchCreateVariable(__scope: Construct, __resources: string[], __input: FraudDetectorBatchCreateVariableRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesBatchCreateVariable.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesBatchCreateVariable.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesBatchCreateVariable.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorBatchCreateVariableRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorBatchCreateVariableRequest)

---



#### Properties <a name="Properties"></a>

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesBatchCreateVariable.property.errors"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorBatchCreateVariableError`](#aws-cdk-sdk.frauddetector.FraudDetectorBatchCreateVariableError)[]

---


### FraudDetectorResponsesBatchGetVariable <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesBatchGetVariable"></a>

#### Initializer <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesBatchGetVariable.Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

new frauddetector.FraudDetectorResponsesBatchGetVariable(__scope: Construct, __resources: string[], __input: FraudDetectorBatchGetVariableRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesBatchGetVariable.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesBatchGetVariable.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesBatchGetVariable.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorBatchGetVariableRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorBatchGetVariableRequest)

---



#### Properties <a name="Properties"></a>

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesBatchGetVariable.property.errors"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorBatchGetVariableError`](#aws-cdk-sdk.frauddetector.FraudDetectorBatchGetVariableError)[]

---

##### `variables`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesBatchGetVariable.property.variables"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorVariable`](#aws-cdk-sdk.frauddetector.FraudDetectorVariable)[]

---


### FraudDetectorResponsesCreateDetectorVersion <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesCreateDetectorVersion"></a>

#### Initializer <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesCreateDetectorVersion.Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

new frauddetector.FraudDetectorResponsesCreateDetectorVersion(__scope: Construct, __resources: string[], __input: FraudDetectorCreateDetectorVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesCreateDetectorVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesCreateDetectorVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesCreateDetectorVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorCreateDetectorVersionRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorCreateDetectorVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesCreateDetectorVersion.property.detectorId"></a>

- *Type:* `string`

---

##### `detectorVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesCreateDetectorVersion.property.detectorVersionId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesCreateDetectorVersion.property.status"></a>

- *Type:* `string`

---


### FraudDetectorResponsesCreateModelVersion <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesCreateModelVersion"></a>

#### Initializer <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesCreateModelVersion.Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

new frauddetector.FraudDetectorResponsesCreateModelVersion(__scope: Construct, __resources: string[], __input: FraudDetectorCreateModelVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesCreateModelVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesCreateModelVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesCreateModelVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorCreateModelVersionRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorCreateModelVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `modelId`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesCreateModelVersion.property.modelId"></a>

- *Type:* `string`

---

##### `modelType`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesCreateModelVersion.property.modelType"></a>

- *Type:* `string`

---

##### `modelVersionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesCreateModelVersion.property.modelVersionNumber"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesCreateModelVersion.property.status"></a>

- *Type:* `string`

---


### FraudDetectorResponsesCreateRule <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesCreateRule"></a>

#### Initializer <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesCreateRule.Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

new frauddetector.FraudDetectorResponsesCreateRule(__scope: Construct, __resources: string[], __input: FraudDetectorCreateRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesCreateRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesCreateRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesCreateRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorCreateRuleRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorCreateRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `rule`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesCreateRule.property.rule"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorResponsesCreateRuleRule`](#aws-cdk-sdk.frauddetector.FraudDetectorResponsesCreateRuleRule)

---


### FraudDetectorResponsesCreateRuleRule <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesCreateRuleRule"></a>

#### Initializer <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesCreateRuleRule.Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

new frauddetector.FraudDetectorResponsesCreateRuleRule(__scope: Construct, __resources: string[], __input: FraudDetectorCreateRuleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesCreateRuleRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesCreateRuleRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesCreateRuleRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorCreateRuleRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorCreateRuleRequest)

---



#### Properties <a name="Properties"></a>

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesCreateRuleRule.property.detectorId"></a>

- *Type:* `string`

---

##### `ruleId`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesCreateRuleRule.property.ruleId"></a>

- *Type:* `string`

---

##### `ruleVersion`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesCreateRuleRule.property.ruleVersion"></a>

- *Type:* `string`

---


### FraudDetectorResponsesDescribeDetector <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesDescribeDetector"></a>

#### Initializer <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesDescribeDetector.Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

new frauddetector.FraudDetectorResponsesDescribeDetector(__scope: Construct, __resources: string[], __input: FraudDetectorDescribeDetectorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesDescribeDetector.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesDescribeDetector.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesDescribeDetector.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorDescribeDetectorRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorDescribeDetectorRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesDescribeDetector.property.arn"></a>

- *Type:* `string`

---

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesDescribeDetector.property.detectorId"></a>

- *Type:* `string`

---

##### `detectorVersionSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesDescribeDetector.property.detectorVersionSummaries"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorDetectorVersionSummary`](#aws-cdk-sdk.frauddetector.FraudDetectorDetectorVersionSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesDescribeDetector.property.nextToken"></a>

- *Type:* `string`

---


### FraudDetectorResponsesDescribeModelVersions <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesDescribeModelVersions"></a>

#### Initializer <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesDescribeModelVersions.Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

new frauddetector.FraudDetectorResponsesDescribeModelVersions(__scope: Construct, __resources: string[], __input: FraudDetectorDescribeModelVersionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesDescribeModelVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesDescribeModelVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesDescribeModelVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorDescribeModelVersionsRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorDescribeModelVersionsRequest)

---



#### Properties <a name="Properties"></a>

##### `modelVersionDetails`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesDescribeModelVersions.property.modelVersionDetails"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorModelVersionDetail`](#aws-cdk-sdk.frauddetector.FraudDetectorModelVersionDetail)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesDescribeModelVersions.property.nextToken"></a>

- *Type:* `string`

---


### FraudDetectorResponsesFetchDetectors <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchDetectors"></a>

#### Initializer <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchDetectors.Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

new frauddetector.FraudDetectorResponsesFetchDetectors(__scope: Construct, __resources: string[], __input: FraudDetectorGetDetectorsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchDetectors.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchDetectors.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchDetectors.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorGetDetectorsRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorGetDetectorsRequest)

---



#### Properties <a name="Properties"></a>

##### `detectors`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchDetectors.property.detectors"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorDetector`](#aws-cdk-sdk.frauddetector.FraudDetectorDetector)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchDetectors.property.nextToken"></a>

- *Type:* `string`

---


### FraudDetectorResponsesFetchDetectorVersion <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchDetectorVersion"></a>

#### Initializer <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchDetectorVersion.Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

new frauddetector.FraudDetectorResponsesFetchDetectorVersion(__scope: Construct, __resources: string[], __input: FraudDetectorGetDetectorVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchDetectorVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchDetectorVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchDetectorVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorGetDetectorVersionRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorGetDetectorVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchDetectorVersion.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchDetectorVersion.property.createdTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchDetectorVersion.property.description"></a>

- *Type:* `string`

---

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchDetectorVersion.property.detectorId"></a>

- *Type:* `string`

---

##### `detectorVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchDetectorVersion.property.detectorVersionId"></a>

- *Type:* `string`

---

##### `externalModelEndpoints`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchDetectorVersion.property.externalModelEndpoints"></a>

- *Type:* `string`[]

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchDetectorVersion.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `modelVersions`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchDetectorVersion.property.modelVersions"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorModelVersion`](#aws-cdk-sdk.frauddetector.FraudDetectorModelVersion)[]

---

##### `ruleExecutionMode`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchDetectorVersion.property.ruleExecutionMode"></a>

- *Type:* `string`

---

##### `rules`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchDetectorVersion.property.rules"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorRule`](#aws-cdk-sdk.frauddetector.FraudDetectorRule)[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchDetectorVersion.property.status"></a>

- *Type:* `string`

---


### FraudDetectorResponsesFetchEntityTypes <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchEntityTypes"></a>

#### Initializer <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchEntityTypes.Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

new frauddetector.FraudDetectorResponsesFetchEntityTypes(__scope: Construct, __resources: string[], __input: FraudDetectorGetEntityTypesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchEntityTypes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchEntityTypes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchEntityTypes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorGetEntityTypesRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorGetEntityTypesRequest)

---



#### Properties <a name="Properties"></a>

##### `entityTypes`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchEntityTypes.property.entityTypes"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorEntityType`](#aws-cdk-sdk.frauddetector.FraudDetectorEntityType)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchEntityTypes.property.nextToken"></a>

- *Type:* `string`

---


### FraudDetectorResponsesFetchEventPrediction <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchEventPrediction"></a>

#### Initializer <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchEventPrediction.Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

new frauddetector.FraudDetectorResponsesFetchEventPrediction(__scope: Construct, __resources: string[], __input: FraudDetectorGetEventPredictionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchEventPrediction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchEventPrediction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchEventPrediction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorGetEventPredictionRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorGetEventPredictionRequest)

---



#### Properties <a name="Properties"></a>

##### `modelScores`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchEventPrediction.property.modelScores"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorModelScores`](#aws-cdk-sdk.frauddetector.FraudDetectorModelScores)[]

---

##### `ruleResults`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchEventPrediction.property.ruleResults"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorRuleResult`](#aws-cdk-sdk.frauddetector.FraudDetectorRuleResult)[]

---


### FraudDetectorResponsesFetchEventTypes <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchEventTypes"></a>

#### Initializer <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchEventTypes.Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

new frauddetector.FraudDetectorResponsesFetchEventTypes(__scope: Construct, __resources: string[], __input: FraudDetectorGetEventTypesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchEventTypes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchEventTypes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchEventTypes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorGetEventTypesRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorGetEventTypesRequest)

---



#### Properties <a name="Properties"></a>

##### `eventTypes`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchEventTypes.property.eventTypes"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorEventType`](#aws-cdk-sdk.frauddetector.FraudDetectorEventType)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchEventTypes.property.nextToken"></a>

- *Type:* `string`

---


### FraudDetectorResponsesFetchExternalModels <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchExternalModels"></a>

#### Initializer <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchExternalModels.Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

new frauddetector.FraudDetectorResponsesFetchExternalModels(__scope: Construct, __resources: string[], __input: FraudDetectorGetExternalModelsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchExternalModels.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchExternalModels.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchExternalModels.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorGetExternalModelsRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorGetExternalModelsRequest)

---



#### Properties <a name="Properties"></a>

##### `externalModels`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchExternalModels.property.externalModels"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorExternalModel`](#aws-cdk-sdk.frauddetector.FraudDetectorExternalModel)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchExternalModels.property.nextToken"></a>

- *Type:* `string`

---


### FraudDetectorResponsesFetchKmsEncryptionKey <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchKmsEncryptionKey"></a>

#### Initializer <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchKmsEncryptionKey.Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

new frauddetector.FraudDetectorResponsesFetchKmsEncryptionKey(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchKmsEncryptionKey.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchKmsEncryptionKey.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `kmsKey`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchKmsEncryptionKey.property.kmsKey"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchKmsEncryptionKeyKmsKey`](#aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchKmsEncryptionKeyKmsKey)

---


### FraudDetectorResponsesFetchKmsEncryptionKeyKmsKey <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchKmsEncryptionKeyKmsKey"></a>

#### Initializer <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchKmsEncryptionKeyKmsKey.Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

new frauddetector.FraudDetectorResponsesFetchKmsEncryptionKeyKmsKey(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchKmsEncryptionKeyKmsKey.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchKmsEncryptionKeyKmsKey.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `kmsEncryptionKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchKmsEncryptionKeyKmsKey.property.kmsEncryptionKeyArn"></a>

- *Type:* `string`

---


### FraudDetectorResponsesFetchLabels <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchLabels"></a>

#### Initializer <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchLabels.Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

new frauddetector.FraudDetectorResponsesFetchLabels(__scope: Construct, __resources: string[], __input: FraudDetectorGetLabelsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchLabels.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchLabels.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchLabels.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorGetLabelsRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorGetLabelsRequest)

---



#### Properties <a name="Properties"></a>

##### `labels`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchLabels.property.labels"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorLabel`](#aws-cdk-sdk.frauddetector.FraudDetectorLabel)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchLabels.property.nextToken"></a>

- *Type:* `string`

---


### FraudDetectorResponsesFetchModels <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchModels"></a>

#### Initializer <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchModels.Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

new frauddetector.FraudDetectorResponsesFetchModels(__scope: Construct, __resources: string[], __input: FraudDetectorGetModelsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchModels.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchModels.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchModels.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorGetModelsRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorGetModelsRequest)

---



#### Properties <a name="Properties"></a>

##### `models`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchModels.property.models"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorModel`](#aws-cdk-sdk.frauddetector.FraudDetectorModel)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchModels.property.nextToken"></a>

- *Type:* `string`

---


### FraudDetectorResponsesFetchModelVersion <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchModelVersion"></a>

#### Initializer <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchModelVersion.Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

new frauddetector.FraudDetectorResponsesFetchModelVersion(__scope: Construct, __resources: string[], __input: FraudDetectorGetModelVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchModelVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchModelVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchModelVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorGetModelVersionRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorGetModelVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchModelVersion.property.arn"></a>

- *Type:* `string`

---

##### `externalEventsDetail`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchModelVersion.property.externalEventsDetail"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchModelVersionExternalEventsDetail`](#aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchModelVersionExternalEventsDetail)

---

##### `modelId`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchModelVersion.property.modelId"></a>

- *Type:* `string`

---

##### `modelType`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchModelVersion.property.modelType"></a>

- *Type:* `string`

---

##### `modelVersionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchModelVersion.property.modelVersionNumber"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchModelVersion.property.status"></a>

- *Type:* `string`

---

##### `trainingDataSchema`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchModelVersion.property.trainingDataSchema"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchModelVersionTrainingDataSchema`](#aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchModelVersionTrainingDataSchema)

---

##### `trainingDataSource`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchModelVersion.property.trainingDataSource"></a>

- *Type:* `string`

---


### FraudDetectorResponsesFetchModelVersionExternalEventsDetail <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchModelVersionExternalEventsDetail"></a>

#### Initializer <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchModelVersionExternalEventsDetail.Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

new frauddetector.FraudDetectorResponsesFetchModelVersionExternalEventsDetail(__scope: Construct, __resources: string[], __input: FraudDetectorGetModelVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchModelVersionExternalEventsDetail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchModelVersionExternalEventsDetail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchModelVersionExternalEventsDetail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorGetModelVersionRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorGetModelVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `dataAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchModelVersionExternalEventsDetail.property.dataAccessRoleArn"></a>

- *Type:* `string`

---

##### `dataLocation`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchModelVersionExternalEventsDetail.property.dataLocation"></a>

- *Type:* `string`

---


### FraudDetectorResponsesFetchModelVersionTrainingDataSchema <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchModelVersionTrainingDataSchema"></a>

#### Initializer <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchModelVersionTrainingDataSchema.Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

new frauddetector.FraudDetectorResponsesFetchModelVersionTrainingDataSchema(__scope: Construct, __resources: string[], __input: FraudDetectorGetModelVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchModelVersionTrainingDataSchema.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchModelVersionTrainingDataSchema.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchModelVersionTrainingDataSchema.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorGetModelVersionRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorGetModelVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `labelSchema`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchModelVersionTrainingDataSchema.property.labelSchema"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchModelVersionTrainingDataSchemaLabelSchema`](#aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchModelVersionTrainingDataSchemaLabelSchema)

---

##### `modelVariables`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchModelVersionTrainingDataSchema.property.modelVariables"></a>

- *Type:* `string`[]

---


### FraudDetectorResponsesFetchModelVersionTrainingDataSchemaLabelSchema <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchModelVersionTrainingDataSchemaLabelSchema"></a>

#### Initializer <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchModelVersionTrainingDataSchemaLabelSchema.Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

new frauddetector.FraudDetectorResponsesFetchModelVersionTrainingDataSchemaLabelSchema(__scope: Construct, __resources: string[], __input: FraudDetectorGetModelVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchModelVersionTrainingDataSchemaLabelSchema.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchModelVersionTrainingDataSchemaLabelSchema.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchModelVersionTrainingDataSchemaLabelSchema.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorGetModelVersionRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorGetModelVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `labelMapper`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchModelVersionTrainingDataSchemaLabelSchema.property.labelMapper"></a>

- *Type:* {[ key: string ]: `string`[]}

---


### FraudDetectorResponsesFetchOutcomes <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchOutcomes"></a>

#### Initializer <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchOutcomes.Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

new frauddetector.FraudDetectorResponsesFetchOutcomes(__scope: Construct, __resources: string[], __input: FraudDetectorGetOutcomesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchOutcomes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchOutcomes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchOutcomes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorGetOutcomesRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorGetOutcomesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchOutcomes.property.nextToken"></a>

- *Type:* `string`

---

##### `outcomes`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchOutcomes.property.outcomes"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorOutcome`](#aws-cdk-sdk.frauddetector.FraudDetectorOutcome)[]

---


### FraudDetectorResponsesFetchRules <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchRules"></a>

#### Initializer <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchRules.Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

new frauddetector.FraudDetectorResponsesFetchRules(__scope: Construct, __resources: string[], __input: FraudDetectorGetRulesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchRules.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchRules.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchRules.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorGetRulesRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorGetRulesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchRules.property.nextToken"></a>

- *Type:* `string`

---

##### `ruleDetails`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchRules.property.ruleDetails"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorRuleDetail`](#aws-cdk-sdk.frauddetector.FraudDetectorRuleDetail)[]

---


### FraudDetectorResponsesFetchVariables <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchVariables"></a>

#### Initializer <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchVariables.Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

new frauddetector.FraudDetectorResponsesFetchVariables(__scope: Construct, __resources: string[], __input: FraudDetectorGetVariablesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchVariables.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchVariables.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchVariables.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorGetVariablesRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorGetVariablesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchVariables.property.nextToken"></a>

- *Type:* `string`

---

##### `variables`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesFetchVariables.property.variables"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorVariable`](#aws-cdk-sdk.frauddetector.FraudDetectorVariable)[]

---


### FraudDetectorResponsesListTagsForResource <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesListTagsForResource.Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

new frauddetector.FraudDetectorResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: FraudDetectorListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorListTagsForResourceRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesListTagsForResource.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesListTagsForResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorTag`](#aws-cdk-sdk.frauddetector.FraudDetectorTag)[]

---


### FraudDetectorResponsesUpdateModelVersion <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesUpdateModelVersion"></a>

#### Initializer <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesUpdateModelVersion.Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

new frauddetector.FraudDetectorResponsesUpdateModelVersion(__scope: Construct, __resources: string[], __input: FraudDetectorUpdateModelVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesUpdateModelVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesUpdateModelVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesUpdateModelVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorUpdateModelVersionRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorUpdateModelVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `modelId`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesUpdateModelVersion.property.modelId"></a>

- *Type:* `string`

---

##### `modelType`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesUpdateModelVersion.property.modelType"></a>

- *Type:* `string`

---

##### `modelVersionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesUpdateModelVersion.property.modelVersionNumber"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesUpdateModelVersion.property.status"></a>

- *Type:* `string`

---


### FraudDetectorResponsesUpdateRuleVersion <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesUpdateRuleVersion"></a>

#### Initializer <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesUpdateRuleVersion.Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

new frauddetector.FraudDetectorResponsesUpdateRuleVersion(__scope: Construct, __resources: string[], __input: FraudDetectorUpdateRuleVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesUpdateRuleVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesUpdateRuleVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesUpdateRuleVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorUpdateRuleVersionRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorUpdateRuleVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `rule`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesUpdateRuleVersion.property.rule"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorResponsesUpdateRuleVersionRule`](#aws-cdk-sdk.frauddetector.FraudDetectorResponsesUpdateRuleVersionRule)

---


### FraudDetectorResponsesUpdateRuleVersionRule <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesUpdateRuleVersionRule"></a>

#### Initializer <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesUpdateRuleVersionRule.Initializer"></a>

```typescript
import { frauddetector } from 'aws-cdk-sdk'

new frauddetector.FraudDetectorResponsesUpdateRuleVersionRule(__scope: Construct, __resources: string[], __input: FraudDetectorUpdateRuleVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesUpdateRuleVersionRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesUpdateRuleVersionRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesUpdateRuleVersionRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.frauddetector.FraudDetectorUpdateRuleVersionRequest`](#aws-cdk-sdk.frauddetector.FraudDetectorUpdateRuleVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `detectorId`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesUpdateRuleVersionRule.property.detectorId"></a>

- *Type:* `string`

---

##### `ruleId`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesUpdateRuleVersionRule.property.ruleId"></a>

- *Type:* `string`

---

##### `ruleVersion`<sup>Required</sup> <a name="aws-cdk-sdk.frauddetector.FraudDetectorResponsesUpdateRuleVersionRule.property.ruleVersion"></a>

- *Type:* `string`

---



