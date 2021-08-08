# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### RekognitionClient <a name="aws-cdk-sdk.rekognition.RekognitionClient"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionClient.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `compareFaces` <a name="aws-cdk-sdk.rekognition.RekognitionClient.compareFaces"></a>

```typescript
public compareFaces(input: RekognitionCompareFacesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionCompareFacesRequest`](#aws-cdk-sdk.rekognition.RekognitionCompareFacesRequest)

---

##### `createCollection` <a name="aws-cdk-sdk.rekognition.RekognitionClient.createCollection"></a>

```typescript
public createCollection(input: RekognitionCreateCollectionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionCreateCollectionRequest`](#aws-cdk-sdk.rekognition.RekognitionCreateCollectionRequest)

---

##### `createProject` <a name="aws-cdk-sdk.rekognition.RekognitionClient.createProject"></a>

```typescript
public createProject(input: RekognitionCreateProjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionCreateProjectRequest`](#aws-cdk-sdk.rekognition.RekognitionCreateProjectRequest)

---

##### `createProjectVersion` <a name="aws-cdk-sdk.rekognition.RekognitionClient.createProjectVersion"></a>

```typescript
public createProjectVersion(input: RekognitionCreateProjectVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionCreateProjectVersionRequest`](#aws-cdk-sdk.rekognition.RekognitionCreateProjectVersionRequest)

---

##### `createStreamProcessor` <a name="aws-cdk-sdk.rekognition.RekognitionClient.createStreamProcessor"></a>

```typescript
public createStreamProcessor(input: RekognitionCreateStreamProcessorRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionCreateStreamProcessorRequest`](#aws-cdk-sdk.rekognition.RekognitionCreateStreamProcessorRequest)

---

##### `deleteCollection` <a name="aws-cdk-sdk.rekognition.RekognitionClient.deleteCollection"></a>

```typescript
public deleteCollection(input: RekognitionDeleteCollectionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionDeleteCollectionRequest`](#aws-cdk-sdk.rekognition.RekognitionDeleteCollectionRequest)

---

##### `deleteFaces` <a name="aws-cdk-sdk.rekognition.RekognitionClient.deleteFaces"></a>

```typescript
public deleteFaces(input: RekognitionDeleteFacesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionDeleteFacesRequest`](#aws-cdk-sdk.rekognition.RekognitionDeleteFacesRequest)

---

##### `deleteProject` <a name="aws-cdk-sdk.rekognition.RekognitionClient.deleteProject"></a>

```typescript
public deleteProject(input: RekognitionDeleteProjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionDeleteProjectRequest`](#aws-cdk-sdk.rekognition.RekognitionDeleteProjectRequest)

---

##### `deleteProjectVersion` <a name="aws-cdk-sdk.rekognition.RekognitionClient.deleteProjectVersion"></a>

```typescript
public deleteProjectVersion(input: RekognitionDeleteProjectVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionDeleteProjectVersionRequest`](#aws-cdk-sdk.rekognition.RekognitionDeleteProjectVersionRequest)

---

##### `deleteStreamProcessor` <a name="aws-cdk-sdk.rekognition.RekognitionClient.deleteStreamProcessor"></a>

```typescript
public deleteStreamProcessor(input: RekognitionDeleteStreamProcessorRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionDeleteStreamProcessorRequest`](#aws-cdk-sdk.rekognition.RekognitionDeleteStreamProcessorRequest)

---

##### `describeCollection` <a name="aws-cdk-sdk.rekognition.RekognitionClient.describeCollection"></a>

```typescript
public describeCollection(input: RekognitionDescribeCollectionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionDescribeCollectionRequest`](#aws-cdk-sdk.rekognition.RekognitionDescribeCollectionRequest)

---

##### `describeProjects` <a name="aws-cdk-sdk.rekognition.RekognitionClient.describeProjects"></a>

```typescript
public describeProjects(input: RekognitionDescribeProjectsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionDescribeProjectsRequest`](#aws-cdk-sdk.rekognition.RekognitionDescribeProjectsRequest)

---

##### `describeProjectVersions` <a name="aws-cdk-sdk.rekognition.RekognitionClient.describeProjectVersions"></a>

```typescript
public describeProjectVersions(input: RekognitionDescribeProjectVersionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionDescribeProjectVersionsRequest`](#aws-cdk-sdk.rekognition.RekognitionDescribeProjectVersionsRequest)

---

##### `describeStreamProcessor` <a name="aws-cdk-sdk.rekognition.RekognitionClient.describeStreamProcessor"></a>

```typescript
public describeStreamProcessor(input: RekognitionDescribeStreamProcessorRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionDescribeStreamProcessorRequest`](#aws-cdk-sdk.rekognition.RekognitionDescribeStreamProcessorRequest)

---

##### `detectCustomLabels` <a name="aws-cdk-sdk.rekognition.RekognitionClient.detectCustomLabels"></a>

```typescript
public detectCustomLabels(input: RekognitionDetectCustomLabelsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionDetectCustomLabelsRequest`](#aws-cdk-sdk.rekognition.RekognitionDetectCustomLabelsRequest)

---

##### `detectFaces` <a name="aws-cdk-sdk.rekognition.RekognitionClient.detectFaces"></a>

```typescript
public detectFaces(input: RekognitionDetectFacesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionDetectFacesRequest`](#aws-cdk-sdk.rekognition.RekognitionDetectFacesRequest)

---

##### `detectLabels` <a name="aws-cdk-sdk.rekognition.RekognitionClient.detectLabels"></a>

```typescript
public detectLabels(input: RekognitionDetectLabelsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionDetectLabelsRequest`](#aws-cdk-sdk.rekognition.RekognitionDetectLabelsRequest)

---

##### `detectModerationLabels` <a name="aws-cdk-sdk.rekognition.RekognitionClient.detectModerationLabels"></a>

```typescript
public detectModerationLabels(input: RekognitionDetectModerationLabelsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionDetectModerationLabelsRequest`](#aws-cdk-sdk.rekognition.RekognitionDetectModerationLabelsRequest)

---

##### `detectProtectiveEquipment` <a name="aws-cdk-sdk.rekognition.RekognitionClient.detectProtectiveEquipment"></a>

```typescript
public detectProtectiveEquipment(input: RekognitionDetectProtectiveEquipmentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionDetectProtectiveEquipmentRequest`](#aws-cdk-sdk.rekognition.RekognitionDetectProtectiveEquipmentRequest)

---

##### `detectText` <a name="aws-cdk-sdk.rekognition.RekognitionClient.detectText"></a>

```typescript
public detectText(input: RekognitionDetectTextRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionDetectTextRequest`](#aws-cdk-sdk.rekognition.RekognitionDetectTextRequest)

---

##### `fetchCelebrityInfo` <a name="aws-cdk-sdk.rekognition.RekognitionClient.fetchCelebrityInfo"></a>

```typescript
public fetchCelebrityInfo(input: RekognitionGetCelebrityInfoRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionGetCelebrityInfoRequest`](#aws-cdk-sdk.rekognition.RekognitionGetCelebrityInfoRequest)

---

##### `fetchCelebrityRecognition` <a name="aws-cdk-sdk.rekognition.RekognitionClient.fetchCelebrityRecognition"></a>

```typescript
public fetchCelebrityRecognition(input: RekognitionGetCelebrityRecognitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionGetCelebrityRecognitionRequest`](#aws-cdk-sdk.rekognition.RekognitionGetCelebrityRecognitionRequest)

---

##### `fetchContentModeration` <a name="aws-cdk-sdk.rekognition.RekognitionClient.fetchContentModeration"></a>

```typescript
public fetchContentModeration(input: RekognitionGetContentModerationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionGetContentModerationRequest`](#aws-cdk-sdk.rekognition.RekognitionGetContentModerationRequest)

---

##### `fetchFaceDetection` <a name="aws-cdk-sdk.rekognition.RekognitionClient.fetchFaceDetection"></a>

```typescript
public fetchFaceDetection(input: RekognitionGetFaceDetectionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionGetFaceDetectionRequest`](#aws-cdk-sdk.rekognition.RekognitionGetFaceDetectionRequest)

---

##### `fetchFaceSearch` <a name="aws-cdk-sdk.rekognition.RekognitionClient.fetchFaceSearch"></a>

```typescript
public fetchFaceSearch(input: RekognitionGetFaceSearchRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionGetFaceSearchRequest`](#aws-cdk-sdk.rekognition.RekognitionGetFaceSearchRequest)

---

##### `fetchLabelDetection` <a name="aws-cdk-sdk.rekognition.RekognitionClient.fetchLabelDetection"></a>

```typescript
public fetchLabelDetection(input: RekognitionGetLabelDetectionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionGetLabelDetectionRequest`](#aws-cdk-sdk.rekognition.RekognitionGetLabelDetectionRequest)

---

##### `fetchPersonTracking` <a name="aws-cdk-sdk.rekognition.RekognitionClient.fetchPersonTracking"></a>

```typescript
public fetchPersonTracking(input: RekognitionGetPersonTrackingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionGetPersonTrackingRequest`](#aws-cdk-sdk.rekognition.RekognitionGetPersonTrackingRequest)

---

##### `fetchSegmentDetection` <a name="aws-cdk-sdk.rekognition.RekognitionClient.fetchSegmentDetection"></a>

```typescript
public fetchSegmentDetection(input: RekognitionGetSegmentDetectionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionGetSegmentDetectionRequest`](#aws-cdk-sdk.rekognition.RekognitionGetSegmentDetectionRequest)

---

##### `fetchTextDetection` <a name="aws-cdk-sdk.rekognition.RekognitionClient.fetchTextDetection"></a>

```typescript
public fetchTextDetection(input: RekognitionGetTextDetectionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionGetTextDetectionRequest`](#aws-cdk-sdk.rekognition.RekognitionGetTextDetectionRequest)

---

##### `indexFaces` <a name="aws-cdk-sdk.rekognition.RekognitionClient.indexFaces"></a>

```typescript
public indexFaces(input: RekognitionIndexFacesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionIndexFacesRequest`](#aws-cdk-sdk.rekognition.RekognitionIndexFacesRequest)

---

##### `listCollections` <a name="aws-cdk-sdk.rekognition.RekognitionClient.listCollections"></a>

```typescript
public listCollections(input: RekognitionListCollectionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionListCollectionsRequest`](#aws-cdk-sdk.rekognition.RekognitionListCollectionsRequest)

---

##### `listFaces` <a name="aws-cdk-sdk.rekognition.RekognitionClient.listFaces"></a>

```typescript
public listFaces(input: RekognitionListFacesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionListFacesRequest`](#aws-cdk-sdk.rekognition.RekognitionListFacesRequest)

---

##### `listStreamProcessors` <a name="aws-cdk-sdk.rekognition.RekognitionClient.listStreamProcessors"></a>

```typescript
public listStreamProcessors(input: RekognitionListStreamProcessorsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionListStreamProcessorsRequest`](#aws-cdk-sdk.rekognition.RekognitionListStreamProcessorsRequest)

---

##### `recognizeCelebrities` <a name="aws-cdk-sdk.rekognition.RekognitionClient.recognizeCelebrities"></a>

```typescript
public recognizeCelebrities(input: RekognitionRecognizeCelebritiesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionRecognizeCelebritiesRequest`](#aws-cdk-sdk.rekognition.RekognitionRecognizeCelebritiesRequest)

---

##### `searchFaces` <a name="aws-cdk-sdk.rekognition.RekognitionClient.searchFaces"></a>

```typescript
public searchFaces(input: RekognitionSearchFacesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionSearchFacesRequest`](#aws-cdk-sdk.rekognition.RekognitionSearchFacesRequest)

---

##### `searchFacesByImage` <a name="aws-cdk-sdk.rekognition.RekognitionClient.searchFacesByImage"></a>

```typescript
public searchFacesByImage(input: RekognitionSearchFacesByImageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionSearchFacesByImageRequest`](#aws-cdk-sdk.rekognition.RekognitionSearchFacesByImageRequest)

---

##### `startCelebrityRecognition` <a name="aws-cdk-sdk.rekognition.RekognitionClient.startCelebrityRecognition"></a>

```typescript
public startCelebrityRecognition(input: RekognitionStartCelebrityRecognitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionStartCelebrityRecognitionRequest`](#aws-cdk-sdk.rekognition.RekognitionStartCelebrityRecognitionRequest)

---

##### `startContentModeration` <a name="aws-cdk-sdk.rekognition.RekognitionClient.startContentModeration"></a>

```typescript
public startContentModeration(input: RekognitionStartContentModerationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionStartContentModerationRequest`](#aws-cdk-sdk.rekognition.RekognitionStartContentModerationRequest)

---

##### `startFaceDetection` <a name="aws-cdk-sdk.rekognition.RekognitionClient.startFaceDetection"></a>

```typescript
public startFaceDetection(input: RekognitionStartFaceDetectionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionStartFaceDetectionRequest`](#aws-cdk-sdk.rekognition.RekognitionStartFaceDetectionRequest)

---

##### `startFaceSearch` <a name="aws-cdk-sdk.rekognition.RekognitionClient.startFaceSearch"></a>

```typescript
public startFaceSearch(input: RekognitionStartFaceSearchRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionStartFaceSearchRequest`](#aws-cdk-sdk.rekognition.RekognitionStartFaceSearchRequest)

---

##### `startLabelDetection` <a name="aws-cdk-sdk.rekognition.RekognitionClient.startLabelDetection"></a>

```typescript
public startLabelDetection(input: RekognitionStartLabelDetectionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionStartLabelDetectionRequest`](#aws-cdk-sdk.rekognition.RekognitionStartLabelDetectionRequest)

---

##### `startPersonTracking` <a name="aws-cdk-sdk.rekognition.RekognitionClient.startPersonTracking"></a>

```typescript
public startPersonTracking(input: RekognitionStartPersonTrackingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionStartPersonTrackingRequest`](#aws-cdk-sdk.rekognition.RekognitionStartPersonTrackingRequest)

---

##### `startProjectVersion` <a name="aws-cdk-sdk.rekognition.RekognitionClient.startProjectVersion"></a>

```typescript
public startProjectVersion(input: RekognitionStartProjectVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionStartProjectVersionRequest`](#aws-cdk-sdk.rekognition.RekognitionStartProjectVersionRequest)

---

##### `startSegmentDetection` <a name="aws-cdk-sdk.rekognition.RekognitionClient.startSegmentDetection"></a>

```typescript
public startSegmentDetection(input: RekognitionStartSegmentDetectionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionStartSegmentDetectionRequest`](#aws-cdk-sdk.rekognition.RekognitionStartSegmentDetectionRequest)

---

##### `startStreamProcessor` <a name="aws-cdk-sdk.rekognition.RekognitionClient.startStreamProcessor"></a>

```typescript
public startStreamProcessor(input: RekognitionStartStreamProcessorRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionStartStreamProcessorRequest`](#aws-cdk-sdk.rekognition.RekognitionStartStreamProcessorRequest)

---

##### `startTextDetection` <a name="aws-cdk-sdk.rekognition.RekognitionClient.startTextDetection"></a>

```typescript
public startTextDetection(input: RekognitionStartTextDetectionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionStartTextDetectionRequest`](#aws-cdk-sdk.rekognition.RekognitionStartTextDetectionRequest)

---

##### `stopProjectVersion` <a name="aws-cdk-sdk.rekognition.RekognitionClient.stopProjectVersion"></a>

```typescript
public stopProjectVersion(input: RekognitionStopProjectVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionStopProjectVersionRequest`](#aws-cdk-sdk.rekognition.RekognitionStopProjectVersionRequest)

---

##### `stopStreamProcessor` <a name="aws-cdk-sdk.rekognition.RekognitionClient.stopStreamProcessor"></a>

```typescript
public stopStreamProcessor(input: RekognitionStopStreamProcessorRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionStopStreamProcessorRequest`](#aws-cdk-sdk.rekognition.RekognitionStopStreamProcessorRequest)

---




## Structs <a name="Structs"></a>

### RekognitionAgeRange <a name="aws-cdk-sdk.rekognition.RekognitionAgeRange"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionAgeRange: rekognition.RekognitionAgeRange = { ... }
```

##### `high`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionAgeRange.property.high"></a>

- *Type:* `number`

---

##### `low`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionAgeRange.property.low"></a>

- *Type:* `number`

---

### RekognitionAsset <a name="aws-cdk-sdk.rekognition.RekognitionAsset"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionAsset: rekognition.RekognitionAsset = { ... }
```

##### `groundTruthManifest`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionAsset.property.groundTruthManifest"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionGroundTruthManifest`](#aws-cdk-sdk.rekognition.RekognitionGroundTruthManifest)

---

### RekognitionAudioMetadata <a name="aws-cdk-sdk.rekognition.RekognitionAudioMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionAudioMetadata: rekognition.RekognitionAudioMetadata = { ... }
```

##### `codec`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionAudioMetadata.property.codec"></a>

- *Type:* `string`

---

##### `durationMillis`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionAudioMetadata.property.durationMillis"></a>

- *Type:* `number`

---

##### `numberOfChannels`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionAudioMetadata.property.numberOfChannels"></a>

- *Type:* `number`

---

##### `sampleRate`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionAudioMetadata.property.sampleRate"></a>

- *Type:* `number`

---

### RekognitionBeard <a name="aws-cdk-sdk.rekognition.RekognitionBeard"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionBeard: rekognition.RekognitionBeard = { ... }
```

##### `confidence`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionBeard.property.confidence"></a>

- *Type:* `number`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionBeard.property.value"></a>

- *Type:* `boolean`

---

### RekognitionBoundingBox <a name="aws-cdk-sdk.rekognition.RekognitionBoundingBox"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionBoundingBox: rekognition.RekognitionBoundingBox = { ... }
```

##### `height`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionBoundingBox.property.height"></a>

- *Type:* `number`

---

##### `left`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionBoundingBox.property.left"></a>

- *Type:* `number`

---

##### `top`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionBoundingBox.property.top"></a>

- *Type:* `number`

---

##### `width`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionBoundingBox.property.width"></a>

- *Type:* `number`

---

### RekognitionCelebrity <a name="aws-cdk-sdk.rekognition.RekognitionCelebrity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionCelebrity: rekognition.RekognitionCelebrity = { ... }
```

##### `face`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCelebrity.property.face"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionComparedFace`](#aws-cdk-sdk.rekognition.RekognitionComparedFace)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCelebrity.property.id"></a>

- *Type:* `string`

---

##### `matchConfidence`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCelebrity.property.matchConfidence"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCelebrity.property.name"></a>

- *Type:* `string`

---

##### `urls`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCelebrity.property.urls"></a>

- *Type:* `string`[]

---

### RekognitionCelebrityDetail <a name="aws-cdk-sdk.rekognition.RekognitionCelebrityDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionCelebrityDetail: rekognition.RekognitionCelebrityDetail = { ... }
```

##### `boundingBox`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCelebrityDetail.property.boundingBox"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionBoundingBox`](#aws-cdk-sdk.rekognition.RekognitionBoundingBox)

---

##### `confidence`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCelebrityDetail.property.confidence"></a>

- *Type:* `number`

---

##### `face`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCelebrityDetail.property.face"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionFaceDetail`](#aws-cdk-sdk.rekognition.RekognitionFaceDetail)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCelebrityDetail.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCelebrityDetail.property.name"></a>

- *Type:* `string`

---

##### `urls`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCelebrityDetail.property.urls"></a>

- *Type:* `string`[]

---

### RekognitionCelebrityRecognition <a name="aws-cdk-sdk.rekognition.RekognitionCelebrityRecognition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionCelebrityRecognition: rekognition.RekognitionCelebrityRecognition = { ... }
```

##### `celebrity`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCelebrityRecognition.property.celebrity"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionCelebrityDetail`](#aws-cdk-sdk.rekognition.RekognitionCelebrityDetail)

---

##### `timestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCelebrityRecognition.property.timestamp"></a>

- *Type:* `number`

---

### RekognitionComparedFace <a name="aws-cdk-sdk.rekognition.RekognitionComparedFace"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionComparedFace: rekognition.RekognitionComparedFace = { ... }
```

##### `boundingBox`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionComparedFace.property.boundingBox"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionBoundingBox`](#aws-cdk-sdk.rekognition.RekognitionBoundingBox)

---

##### `confidence`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionComparedFace.property.confidence"></a>

- *Type:* `number`

---

##### `landmarks`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionComparedFace.property.landmarks"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionLandmark`](#aws-cdk-sdk.rekognition.RekognitionLandmark)[]

---

##### `pose`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionComparedFace.property.pose"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionPose`](#aws-cdk-sdk.rekognition.RekognitionPose)

---

##### `quality`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionComparedFace.property.quality"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionImageQuality`](#aws-cdk-sdk.rekognition.RekognitionImageQuality)

---

### RekognitionComparedSourceImageFace <a name="aws-cdk-sdk.rekognition.RekognitionComparedSourceImageFace"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionComparedSourceImageFace: rekognition.RekognitionComparedSourceImageFace = { ... }
```

##### `boundingBox`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionComparedSourceImageFace.property.boundingBox"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionBoundingBox`](#aws-cdk-sdk.rekognition.RekognitionBoundingBox)

---

##### `confidence`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionComparedSourceImageFace.property.confidence"></a>

- *Type:* `number`

---

### RekognitionCompareFacesMatch <a name="aws-cdk-sdk.rekognition.RekognitionCompareFacesMatch"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionCompareFacesMatch: rekognition.RekognitionCompareFacesMatch = { ... }
```

##### `face`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCompareFacesMatch.property.face"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionComparedFace`](#aws-cdk-sdk.rekognition.RekognitionComparedFace)

---

##### `similarity`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCompareFacesMatch.property.similarity"></a>

- *Type:* `number`

---

### RekognitionCompareFacesRequest <a name="aws-cdk-sdk.rekognition.RekognitionCompareFacesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionCompareFacesRequest: rekognition.RekognitionCompareFacesRequest = { ... }
```

##### `sourceImage`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCompareFacesRequest.property.sourceImage"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionImage`](#aws-cdk-sdk.rekognition.RekognitionImage)

---

##### `targetImage`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCompareFacesRequest.property.targetImage"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionImage`](#aws-cdk-sdk.rekognition.RekognitionImage)

---

##### `qualityFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCompareFacesRequest.property.qualityFilter"></a>

- *Type:* `string`

---

##### `similarityThreshold`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCompareFacesRequest.property.similarityThreshold"></a>

- *Type:* `number`

---

### RekognitionCompareFacesResponse <a name="aws-cdk-sdk.rekognition.RekognitionCompareFacesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionCompareFacesResponse: rekognition.RekognitionCompareFacesResponse = { ... }
```

##### `faceMatches`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCompareFacesResponse.property.faceMatches"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionCompareFacesMatch`](#aws-cdk-sdk.rekognition.RekognitionCompareFacesMatch)[]

---

##### `sourceImageFace`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCompareFacesResponse.property.sourceImageFace"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionComparedSourceImageFace`](#aws-cdk-sdk.rekognition.RekognitionComparedSourceImageFace)

---

##### `sourceImageOrientationCorrection`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCompareFacesResponse.property.sourceImageOrientationCorrection"></a>

- *Type:* `string`

---

##### `targetImageOrientationCorrection`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCompareFacesResponse.property.targetImageOrientationCorrection"></a>

- *Type:* `string`

---

##### `unmatchedFaces`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCompareFacesResponse.property.unmatchedFaces"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionComparedFace`](#aws-cdk-sdk.rekognition.RekognitionComparedFace)[]

---

### RekognitionContentModerationDetection <a name="aws-cdk-sdk.rekognition.RekognitionContentModerationDetection"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionContentModerationDetection: rekognition.RekognitionContentModerationDetection = { ... }
```

##### `moderationLabel`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionContentModerationDetection.property.moderationLabel"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionModerationLabel`](#aws-cdk-sdk.rekognition.RekognitionModerationLabel)

---

##### `timestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionContentModerationDetection.property.timestamp"></a>

- *Type:* `number`

---

### RekognitionCoversBodyPart <a name="aws-cdk-sdk.rekognition.RekognitionCoversBodyPart"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionCoversBodyPart: rekognition.RekognitionCoversBodyPart = { ... }
```

##### `confidence`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCoversBodyPart.property.confidence"></a>

- *Type:* `number`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCoversBodyPart.property.value"></a>

- *Type:* `boolean`

---

### RekognitionCreateCollectionRequest <a name="aws-cdk-sdk.rekognition.RekognitionCreateCollectionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionCreateCollectionRequest: rekognition.RekognitionCreateCollectionRequest = { ... }
```

##### `collectionId`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCreateCollectionRequest.property.collectionId"></a>

- *Type:* `string`

---

### RekognitionCreateCollectionResponse <a name="aws-cdk-sdk.rekognition.RekognitionCreateCollectionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionCreateCollectionResponse: rekognition.RekognitionCreateCollectionResponse = { ... }
```

##### `collectionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCreateCollectionResponse.property.collectionArn"></a>

- *Type:* `string`

---

##### `faceModelVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCreateCollectionResponse.property.faceModelVersion"></a>

- *Type:* `string`

---

##### `statusCode`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCreateCollectionResponse.property.statusCode"></a>

- *Type:* `number`

---

### RekognitionCreateProjectRequest <a name="aws-cdk-sdk.rekognition.RekognitionCreateProjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionCreateProjectRequest: rekognition.RekognitionCreateProjectRequest = { ... }
```

##### `projectName`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCreateProjectRequest.property.projectName"></a>

- *Type:* `string`

---

### RekognitionCreateProjectResponse <a name="aws-cdk-sdk.rekognition.RekognitionCreateProjectResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionCreateProjectResponse: rekognition.RekognitionCreateProjectResponse = { ... }
```

##### `projectArn`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCreateProjectResponse.property.projectArn"></a>

- *Type:* `string`

---

### RekognitionCreateProjectVersionRequest <a name="aws-cdk-sdk.rekognition.RekognitionCreateProjectVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionCreateProjectVersionRequest: rekognition.RekognitionCreateProjectVersionRequest = { ... }
```

##### `outputConfig`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCreateProjectVersionRequest.property.outputConfig"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionOutputConfig`](#aws-cdk-sdk.rekognition.RekognitionOutputConfig)

---

##### `projectArn`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCreateProjectVersionRequest.property.projectArn"></a>

- *Type:* `string`

---

##### `testingData`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCreateProjectVersionRequest.property.testingData"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionTestingData`](#aws-cdk-sdk.rekognition.RekognitionTestingData)

---

##### `trainingData`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCreateProjectVersionRequest.property.trainingData"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionTrainingData`](#aws-cdk-sdk.rekognition.RekognitionTrainingData)

---

##### `versionName`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCreateProjectVersionRequest.property.versionName"></a>

- *Type:* `string`

---

### RekognitionCreateProjectVersionResponse <a name="aws-cdk-sdk.rekognition.RekognitionCreateProjectVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionCreateProjectVersionResponse: rekognition.RekognitionCreateProjectVersionResponse = { ... }
```

##### `projectVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCreateProjectVersionResponse.property.projectVersionArn"></a>

- *Type:* `string`

---

### RekognitionCreateStreamProcessorRequest <a name="aws-cdk-sdk.rekognition.RekognitionCreateStreamProcessorRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionCreateStreamProcessorRequest: rekognition.RekognitionCreateStreamProcessorRequest = { ... }
```

##### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCreateStreamProcessorRequest.property.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionStreamProcessorInput`](#aws-cdk-sdk.rekognition.RekognitionStreamProcessorInput)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCreateStreamProcessorRequest.property.name"></a>

- *Type:* `string`

---

##### `output`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCreateStreamProcessorRequest.property.output"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionStreamProcessorOutput`](#aws-cdk-sdk.rekognition.RekognitionStreamProcessorOutput)

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCreateStreamProcessorRequest.property.roleArn"></a>

- *Type:* `string`

---

##### `settings`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCreateStreamProcessorRequest.property.settings"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionStreamProcessorSettings`](#aws-cdk-sdk.rekognition.RekognitionStreamProcessorSettings)

---

### RekognitionCreateStreamProcessorResponse <a name="aws-cdk-sdk.rekognition.RekognitionCreateStreamProcessorResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionCreateStreamProcessorResponse: rekognition.RekognitionCreateStreamProcessorResponse = { ... }
```

##### `streamProcessorArn`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCreateStreamProcessorResponse.property.streamProcessorArn"></a>

- *Type:* `string`

---

### RekognitionCustomLabel <a name="aws-cdk-sdk.rekognition.RekognitionCustomLabel"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionCustomLabel: rekognition.RekognitionCustomLabel = { ... }
```

##### `confidence`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCustomLabel.property.confidence"></a>

- *Type:* `number`

---

##### `geometry`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCustomLabel.property.geometry"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionGeometry`](#aws-cdk-sdk.rekognition.RekognitionGeometry)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionCustomLabel.property.name"></a>

- *Type:* `string`

---

### RekognitionDeleteCollectionRequest <a name="aws-cdk-sdk.rekognition.RekognitionDeleteCollectionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionDeleteCollectionRequest: rekognition.RekognitionDeleteCollectionRequest = { ... }
```

##### `collectionId`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDeleteCollectionRequest.property.collectionId"></a>

- *Type:* `string`

---

### RekognitionDeleteCollectionResponse <a name="aws-cdk-sdk.rekognition.RekognitionDeleteCollectionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionDeleteCollectionResponse: rekognition.RekognitionDeleteCollectionResponse = { ... }
```

##### `statusCode`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDeleteCollectionResponse.property.statusCode"></a>

- *Type:* `number`

---

### RekognitionDeleteFacesRequest <a name="aws-cdk-sdk.rekognition.RekognitionDeleteFacesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionDeleteFacesRequest: rekognition.RekognitionDeleteFacesRequest = { ... }
```

##### `collectionId`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDeleteFacesRequest.property.collectionId"></a>

- *Type:* `string`

---

##### `faceIds`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDeleteFacesRequest.property.faceIds"></a>

- *Type:* `string`[]

---

### RekognitionDeleteFacesResponse <a name="aws-cdk-sdk.rekognition.RekognitionDeleteFacesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionDeleteFacesResponse: rekognition.RekognitionDeleteFacesResponse = { ... }
```

##### `deletedFaces`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDeleteFacesResponse.property.deletedFaces"></a>

- *Type:* `string`[]

---

### RekognitionDeleteProjectRequest <a name="aws-cdk-sdk.rekognition.RekognitionDeleteProjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionDeleteProjectRequest: rekognition.RekognitionDeleteProjectRequest = { ... }
```

##### `projectArn`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDeleteProjectRequest.property.projectArn"></a>

- *Type:* `string`

---

### RekognitionDeleteProjectResponse <a name="aws-cdk-sdk.rekognition.RekognitionDeleteProjectResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionDeleteProjectResponse: rekognition.RekognitionDeleteProjectResponse = { ... }
```

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDeleteProjectResponse.property.status"></a>

- *Type:* `string`

---

### RekognitionDeleteProjectVersionRequest <a name="aws-cdk-sdk.rekognition.RekognitionDeleteProjectVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionDeleteProjectVersionRequest: rekognition.RekognitionDeleteProjectVersionRequest = { ... }
```

##### `projectVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDeleteProjectVersionRequest.property.projectVersionArn"></a>

- *Type:* `string`

---

### RekognitionDeleteProjectVersionResponse <a name="aws-cdk-sdk.rekognition.RekognitionDeleteProjectVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionDeleteProjectVersionResponse: rekognition.RekognitionDeleteProjectVersionResponse = { ... }
```

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDeleteProjectVersionResponse.property.status"></a>

- *Type:* `string`

---

### RekognitionDeleteStreamProcessorRequest <a name="aws-cdk-sdk.rekognition.RekognitionDeleteStreamProcessorRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionDeleteStreamProcessorRequest: rekognition.RekognitionDeleteStreamProcessorRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDeleteStreamProcessorRequest.property.name"></a>

- *Type:* `string`

---

### RekognitionDeleteStreamProcessorResponse <a name="aws-cdk-sdk.rekognition.RekognitionDeleteStreamProcessorResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionDeleteStreamProcessorResponse: rekognition.RekognitionDeleteStreamProcessorResponse = { ... }
```

### RekognitionDescribeCollectionRequest <a name="aws-cdk-sdk.rekognition.RekognitionDescribeCollectionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionDescribeCollectionRequest: rekognition.RekognitionDescribeCollectionRequest = { ... }
```

##### `collectionId`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDescribeCollectionRequest.property.collectionId"></a>

- *Type:* `string`

---

### RekognitionDescribeCollectionResponse <a name="aws-cdk-sdk.rekognition.RekognitionDescribeCollectionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionDescribeCollectionResponse: rekognition.RekognitionDescribeCollectionResponse = { ... }
```

##### `collectionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDescribeCollectionResponse.property.collectionArn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDescribeCollectionResponse.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `faceCount`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDescribeCollectionResponse.property.faceCount"></a>

- *Type:* `number`

---

##### `faceModelVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDescribeCollectionResponse.property.faceModelVersion"></a>

- *Type:* `string`

---

### RekognitionDescribeProjectsRequest <a name="aws-cdk-sdk.rekognition.RekognitionDescribeProjectsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionDescribeProjectsRequest: rekognition.RekognitionDescribeProjectsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDescribeProjectsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDescribeProjectsRequest.property.nextToken"></a>

- *Type:* `string`

---

### RekognitionDescribeProjectsResponse <a name="aws-cdk-sdk.rekognition.RekognitionDescribeProjectsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionDescribeProjectsResponse: rekognition.RekognitionDescribeProjectsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDescribeProjectsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `projectDescriptions`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDescribeProjectsResponse.property.projectDescriptions"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionProjectDescription`](#aws-cdk-sdk.rekognition.RekognitionProjectDescription)[]

---

### RekognitionDescribeProjectVersionsRequest <a name="aws-cdk-sdk.rekognition.RekognitionDescribeProjectVersionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionDescribeProjectVersionsRequest: rekognition.RekognitionDescribeProjectVersionsRequest = { ... }
```

##### `projectArn`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDescribeProjectVersionsRequest.property.projectArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDescribeProjectVersionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDescribeProjectVersionsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `versionNames`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDescribeProjectVersionsRequest.property.versionNames"></a>

- *Type:* `string`[]

---

### RekognitionDescribeProjectVersionsResponse <a name="aws-cdk-sdk.rekognition.RekognitionDescribeProjectVersionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionDescribeProjectVersionsResponse: rekognition.RekognitionDescribeProjectVersionsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDescribeProjectVersionsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `projectVersionDescriptions`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDescribeProjectVersionsResponse.property.projectVersionDescriptions"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionProjectVersionDescription`](#aws-cdk-sdk.rekognition.RekognitionProjectVersionDescription)[]

---

### RekognitionDescribeStreamProcessorRequest <a name="aws-cdk-sdk.rekognition.RekognitionDescribeStreamProcessorRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionDescribeStreamProcessorRequest: rekognition.RekognitionDescribeStreamProcessorRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDescribeStreamProcessorRequest.property.name"></a>

- *Type:* `string`

---

### RekognitionDescribeStreamProcessorResponse <a name="aws-cdk-sdk.rekognition.RekognitionDescribeStreamProcessorResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionDescribeStreamProcessorResponse: rekognition.RekognitionDescribeStreamProcessorResponse = { ... }
```

##### `creationTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDescribeStreamProcessorResponse.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `input`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDescribeStreamProcessorResponse.property.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionStreamProcessorInput`](#aws-cdk-sdk.rekognition.RekognitionStreamProcessorInput)

---

##### `lastUpdateTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDescribeStreamProcessorResponse.property.lastUpdateTimestamp"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDescribeStreamProcessorResponse.property.name"></a>

- *Type:* `string`

---

##### `output`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDescribeStreamProcessorResponse.property.output"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionStreamProcessorOutput`](#aws-cdk-sdk.rekognition.RekognitionStreamProcessorOutput)

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDescribeStreamProcessorResponse.property.roleArn"></a>

- *Type:* `string`

---

##### `settings`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDescribeStreamProcessorResponse.property.settings"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionStreamProcessorSettings`](#aws-cdk-sdk.rekognition.RekognitionStreamProcessorSettings)

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDescribeStreamProcessorResponse.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDescribeStreamProcessorResponse.property.statusMessage"></a>

- *Type:* `string`

---

##### `streamProcessorArn`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDescribeStreamProcessorResponse.property.streamProcessorArn"></a>

- *Type:* `string`

---

### RekognitionDetectCustomLabelsRequest <a name="aws-cdk-sdk.rekognition.RekognitionDetectCustomLabelsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionDetectCustomLabelsRequest: rekognition.RekognitionDetectCustomLabelsRequest = { ... }
```

##### `image`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDetectCustomLabelsRequest.property.image"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionImage`](#aws-cdk-sdk.rekognition.RekognitionImage)

---

##### `projectVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDetectCustomLabelsRequest.property.projectVersionArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDetectCustomLabelsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `minConfidence`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDetectCustomLabelsRequest.property.minConfidence"></a>

- *Type:* `number`

---

### RekognitionDetectCustomLabelsResponse <a name="aws-cdk-sdk.rekognition.RekognitionDetectCustomLabelsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionDetectCustomLabelsResponse: rekognition.RekognitionDetectCustomLabelsResponse = { ... }
```

##### `customLabels`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDetectCustomLabelsResponse.property.customLabels"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionCustomLabel`](#aws-cdk-sdk.rekognition.RekognitionCustomLabel)[]

---

### RekognitionDetectFacesRequest <a name="aws-cdk-sdk.rekognition.RekognitionDetectFacesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionDetectFacesRequest: rekognition.RekognitionDetectFacesRequest = { ... }
```

##### `image`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDetectFacesRequest.property.image"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionImage`](#aws-cdk-sdk.rekognition.RekognitionImage)

---

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDetectFacesRequest.property.attributes"></a>

- *Type:* `string`[]

---

### RekognitionDetectFacesResponse <a name="aws-cdk-sdk.rekognition.RekognitionDetectFacesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionDetectFacesResponse: rekognition.RekognitionDetectFacesResponse = { ... }
```

##### `faceDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDetectFacesResponse.property.faceDetails"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionFaceDetail`](#aws-cdk-sdk.rekognition.RekognitionFaceDetail)[]

---

##### `orientationCorrection`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDetectFacesResponse.property.orientationCorrection"></a>

- *Type:* `string`

---

### RekognitionDetectionFilter <a name="aws-cdk-sdk.rekognition.RekognitionDetectionFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionDetectionFilter: rekognition.RekognitionDetectionFilter = { ... }
```

##### `minBoundingBoxHeight`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDetectionFilter.property.minBoundingBoxHeight"></a>

- *Type:* `number`

---

##### `minBoundingBoxWidth`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDetectionFilter.property.minBoundingBoxWidth"></a>

- *Type:* `number`

---

##### `minConfidence`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDetectionFilter.property.minConfidence"></a>

- *Type:* `number`

---

### RekognitionDetectLabelsRequest <a name="aws-cdk-sdk.rekognition.RekognitionDetectLabelsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionDetectLabelsRequest: rekognition.RekognitionDetectLabelsRequest = { ... }
```

##### `image`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDetectLabelsRequest.property.image"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionImage`](#aws-cdk-sdk.rekognition.RekognitionImage)

---

##### `maxLabels`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDetectLabelsRequest.property.maxLabels"></a>

- *Type:* `number`

---

##### `minConfidence`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDetectLabelsRequest.property.minConfidence"></a>

- *Type:* `number`

---

### RekognitionDetectLabelsResponse <a name="aws-cdk-sdk.rekognition.RekognitionDetectLabelsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionDetectLabelsResponse: rekognition.RekognitionDetectLabelsResponse = { ... }
```

##### `labelModelVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDetectLabelsResponse.property.labelModelVersion"></a>

- *Type:* `string`

---

##### `labels`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDetectLabelsResponse.property.labels"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionLabel`](#aws-cdk-sdk.rekognition.RekognitionLabel)[]

---

##### `orientationCorrection`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDetectLabelsResponse.property.orientationCorrection"></a>

- *Type:* `string`

---

### RekognitionDetectModerationLabelsRequest <a name="aws-cdk-sdk.rekognition.RekognitionDetectModerationLabelsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionDetectModerationLabelsRequest: rekognition.RekognitionDetectModerationLabelsRequest = { ... }
```

##### `image`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDetectModerationLabelsRequest.property.image"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionImage`](#aws-cdk-sdk.rekognition.RekognitionImage)

---

##### `humanLoopConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDetectModerationLabelsRequest.property.humanLoopConfig"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionHumanLoopConfig`](#aws-cdk-sdk.rekognition.RekognitionHumanLoopConfig)

---

##### `minConfidence`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDetectModerationLabelsRequest.property.minConfidence"></a>

- *Type:* `number`

---

### RekognitionDetectModerationLabelsResponse <a name="aws-cdk-sdk.rekognition.RekognitionDetectModerationLabelsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionDetectModerationLabelsResponse: rekognition.RekognitionDetectModerationLabelsResponse = { ... }
```

##### `humanLoopActivationOutput`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDetectModerationLabelsResponse.property.humanLoopActivationOutput"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionHumanLoopActivationOutput`](#aws-cdk-sdk.rekognition.RekognitionHumanLoopActivationOutput)

---

##### `moderationLabels`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDetectModerationLabelsResponse.property.moderationLabels"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionModerationLabel`](#aws-cdk-sdk.rekognition.RekognitionModerationLabel)[]

---

##### `moderationModelVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDetectModerationLabelsResponse.property.moderationModelVersion"></a>

- *Type:* `string`

---

### RekognitionDetectProtectiveEquipmentRequest <a name="aws-cdk-sdk.rekognition.RekognitionDetectProtectiveEquipmentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionDetectProtectiveEquipmentRequest: rekognition.RekognitionDetectProtectiveEquipmentRequest = { ... }
```

##### `image`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDetectProtectiveEquipmentRequest.property.image"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionImage`](#aws-cdk-sdk.rekognition.RekognitionImage)

---

##### `summarizationAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDetectProtectiveEquipmentRequest.property.summarizationAttributes"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionProtectiveEquipmentSummarizationAttributes`](#aws-cdk-sdk.rekognition.RekognitionProtectiveEquipmentSummarizationAttributes)

---

### RekognitionDetectProtectiveEquipmentResponse <a name="aws-cdk-sdk.rekognition.RekognitionDetectProtectiveEquipmentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionDetectProtectiveEquipmentResponse: rekognition.RekognitionDetectProtectiveEquipmentResponse = { ... }
```

##### `persons`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDetectProtectiveEquipmentResponse.property.persons"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionProtectiveEquipmentPerson`](#aws-cdk-sdk.rekognition.RekognitionProtectiveEquipmentPerson)[]

---

##### `protectiveEquipmentModelVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDetectProtectiveEquipmentResponse.property.protectiveEquipmentModelVersion"></a>

- *Type:* `string`

---

##### `summary`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDetectProtectiveEquipmentResponse.property.summary"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionProtectiveEquipmentSummary`](#aws-cdk-sdk.rekognition.RekognitionProtectiveEquipmentSummary)

---

### RekognitionDetectTextFilters <a name="aws-cdk-sdk.rekognition.RekognitionDetectTextFilters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionDetectTextFilters: rekognition.RekognitionDetectTextFilters = { ... }
```

##### `regionsOfInterest`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDetectTextFilters.property.regionsOfInterest"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionRegionOfInterest`](#aws-cdk-sdk.rekognition.RekognitionRegionOfInterest)[]

---

##### `wordFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDetectTextFilters.property.wordFilter"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionDetectionFilter`](#aws-cdk-sdk.rekognition.RekognitionDetectionFilter)

---

### RekognitionDetectTextRequest <a name="aws-cdk-sdk.rekognition.RekognitionDetectTextRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionDetectTextRequest: rekognition.RekognitionDetectTextRequest = { ... }
```

##### `image`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDetectTextRequest.property.image"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionImage`](#aws-cdk-sdk.rekognition.RekognitionImage)

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDetectTextRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionDetectTextFilters`](#aws-cdk-sdk.rekognition.RekognitionDetectTextFilters)

---

### RekognitionDetectTextResponse <a name="aws-cdk-sdk.rekognition.RekognitionDetectTextResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionDetectTextResponse: rekognition.RekognitionDetectTextResponse = { ... }
```

##### `textDetections`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDetectTextResponse.property.textDetections"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionTextDetection`](#aws-cdk-sdk.rekognition.RekognitionTextDetection)[]

---

##### `textModelVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionDetectTextResponse.property.textModelVersion"></a>

- *Type:* `string`

---

### RekognitionEmotion <a name="aws-cdk-sdk.rekognition.RekognitionEmotion"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionEmotion: rekognition.RekognitionEmotion = { ... }
```

##### `confidence`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionEmotion.property.confidence"></a>

- *Type:* `number`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionEmotion.property.type"></a>

- *Type:* `string`

---

### RekognitionEquipmentDetection <a name="aws-cdk-sdk.rekognition.RekognitionEquipmentDetection"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionEquipmentDetection: rekognition.RekognitionEquipmentDetection = { ... }
```

##### `boundingBox`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionEquipmentDetection.property.boundingBox"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionBoundingBox`](#aws-cdk-sdk.rekognition.RekognitionBoundingBox)

---

##### `confidence`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionEquipmentDetection.property.confidence"></a>

- *Type:* `number`

---

##### `coversBodyPart`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionEquipmentDetection.property.coversBodyPart"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionCoversBodyPart`](#aws-cdk-sdk.rekognition.RekognitionCoversBodyPart)

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionEquipmentDetection.property.type"></a>

- *Type:* `string`

---

### RekognitionEvaluationResult <a name="aws-cdk-sdk.rekognition.RekognitionEvaluationResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionEvaluationResult: rekognition.RekognitionEvaluationResult = { ... }
```

##### `f1Score`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionEvaluationResult.property.f1Score"></a>

- *Type:* `number`

---

##### `summary`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionEvaluationResult.property.summary"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionSummary`](#aws-cdk-sdk.rekognition.RekognitionSummary)

---

### RekognitionEyeglasses <a name="aws-cdk-sdk.rekognition.RekognitionEyeglasses"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionEyeglasses: rekognition.RekognitionEyeglasses = { ... }
```

##### `confidence`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionEyeglasses.property.confidence"></a>

- *Type:* `number`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionEyeglasses.property.value"></a>

- *Type:* `boolean`

---

### RekognitionEyeOpen <a name="aws-cdk-sdk.rekognition.RekognitionEyeOpen"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionEyeOpen: rekognition.RekognitionEyeOpen = { ... }
```

##### `confidence`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionEyeOpen.property.confidence"></a>

- *Type:* `number`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionEyeOpen.property.value"></a>

- *Type:* `boolean`

---

### RekognitionFace <a name="aws-cdk-sdk.rekognition.RekognitionFace"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionFace: rekognition.RekognitionFace = { ... }
```

##### `boundingBox`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionFace.property.boundingBox"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionBoundingBox`](#aws-cdk-sdk.rekognition.RekognitionBoundingBox)

---

##### `confidence`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionFace.property.confidence"></a>

- *Type:* `number`

---

##### `externalImageId`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionFace.property.externalImageId"></a>

- *Type:* `string`

---

##### `faceId`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionFace.property.faceId"></a>

- *Type:* `string`

---

##### `imageId`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionFace.property.imageId"></a>

- *Type:* `string`

---

### RekognitionFaceDetail <a name="aws-cdk-sdk.rekognition.RekognitionFaceDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionFaceDetail: rekognition.RekognitionFaceDetail = { ... }
```

##### `ageRange`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionFaceDetail.property.ageRange"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionAgeRange`](#aws-cdk-sdk.rekognition.RekognitionAgeRange)

---

##### `beard`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionFaceDetail.property.beard"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionBeard`](#aws-cdk-sdk.rekognition.RekognitionBeard)

---

##### `boundingBox`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionFaceDetail.property.boundingBox"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionBoundingBox`](#aws-cdk-sdk.rekognition.RekognitionBoundingBox)

---

##### `confidence`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionFaceDetail.property.confidence"></a>

- *Type:* `number`

---

##### `emotions`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionFaceDetail.property.emotions"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionEmotion`](#aws-cdk-sdk.rekognition.RekognitionEmotion)[]

---

##### `eyeglasses`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionFaceDetail.property.eyeglasses"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionEyeglasses`](#aws-cdk-sdk.rekognition.RekognitionEyeglasses)

---

##### `eyesOpen`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionFaceDetail.property.eyesOpen"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionEyeOpen`](#aws-cdk-sdk.rekognition.RekognitionEyeOpen)

---

##### `gender`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionFaceDetail.property.gender"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionGender`](#aws-cdk-sdk.rekognition.RekognitionGender)

---

##### `landmarks`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionFaceDetail.property.landmarks"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionLandmark`](#aws-cdk-sdk.rekognition.RekognitionLandmark)[]

---

##### `mouthOpen`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionFaceDetail.property.mouthOpen"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionMouthOpen`](#aws-cdk-sdk.rekognition.RekognitionMouthOpen)

---

##### `mustache`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionFaceDetail.property.mustache"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionMustache`](#aws-cdk-sdk.rekognition.RekognitionMustache)

---

##### `pose`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionFaceDetail.property.pose"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionPose`](#aws-cdk-sdk.rekognition.RekognitionPose)

---

##### `quality`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionFaceDetail.property.quality"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionImageQuality`](#aws-cdk-sdk.rekognition.RekognitionImageQuality)

---

##### `smile`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionFaceDetail.property.smile"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionSmile`](#aws-cdk-sdk.rekognition.RekognitionSmile)

---

##### `sunglasses`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionFaceDetail.property.sunglasses"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionSunglasses`](#aws-cdk-sdk.rekognition.RekognitionSunglasses)

---

### RekognitionFaceDetection <a name="aws-cdk-sdk.rekognition.RekognitionFaceDetection"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionFaceDetection: rekognition.RekognitionFaceDetection = { ... }
```

##### `face`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionFaceDetection.property.face"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionFaceDetail`](#aws-cdk-sdk.rekognition.RekognitionFaceDetail)

---

##### `timestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionFaceDetection.property.timestamp"></a>

- *Type:* `number`

---

### RekognitionFaceMatch <a name="aws-cdk-sdk.rekognition.RekognitionFaceMatch"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionFaceMatch: rekognition.RekognitionFaceMatch = { ... }
```

##### `face`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionFaceMatch.property.face"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionFace`](#aws-cdk-sdk.rekognition.RekognitionFace)

---

##### `similarity`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionFaceMatch.property.similarity"></a>

- *Type:* `number`

---

### RekognitionFaceRecord <a name="aws-cdk-sdk.rekognition.RekognitionFaceRecord"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionFaceRecord: rekognition.RekognitionFaceRecord = { ... }
```

##### `face`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionFaceRecord.property.face"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionFace`](#aws-cdk-sdk.rekognition.RekognitionFace)

---

##### `faceDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionFaceRecord.property.faceDetail"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionFaceDetail`](#aws-cdk-sdk.rekognition.RekognitionFaceDetail)

---

### RekognitionFaceSearchSettings <a name="aws-cdk-sdk.rekognition.RekognitionFaceSearchSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionFaceSearchSettings: rekognition.RekognitionFaceSearchSettings = { ... }
```

##### `collectionId`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionFaceSearchSettings.property.collectionId"></a>

- *Type:* `string`

---

##### `faceMatchThreshold`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionFaceSearchSettings.property.faceMatchThreshold"></a>

- *Type:* `number`

---

### RekognitionGender <a name="aws-cdk-sdk.rekognition.RekognitionGender"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionGender: rekognition.RekognitionGender = { ... }
```

##### `confidence`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGender.property.confidence"></a>

- *Type:* `number`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGender.property.value"></a>

- *Type:* `string`

---

### RekognitionGeometry <a name="aws-cdk-sdk.rekognition.RekognitionGeometry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionGeometry: rekognition.RekognitionGeometry = { ... }
```

##### `boundingBox`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGeometry.property.boundingBox"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionBoundingBox`](#aws-cdk-sdk.rekognition.RekognitionBoundingBox)

---

##### `polygon`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGeometry.property.polygon"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionPoint`](#aws-cdk-sdk.rekognition.RekognitionPoint)[]

---

### RekognitionGetCelebrityInfoRequest <a name="aws-cdk-sdk.rekognition.RekognitionGetCelebrityInfoRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionGetCelebrityInfoRequest: rekognition.RekognitionGetCelebrityInfoRequest = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetCelebrityInfoRequest.property.id"></a>

- *Type:* `string`

---

### RekognitionGetCelebrityInfoResponse <a name="aws-cdk-sdk.rekognition.RekognitionGetCelebrityInfoResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionGetCelebrityInfoResponse: rekognition.RekognitionGetCelebrityInfoResponse = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetCelebrityInfoResponse.property.name"></a>

- *Type:* `string`

---

##### `urls`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetCelebrityInfoResponse.property.urls"></a>

- *Type:* `string`[]

---

### RekognitionGetCelebrityRecognitionRequest <a name="aws-cdk-sdk.rekognition.RekognitionGetCelebrityRecognitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionGetCelebrityRecognitionRequest: rekognition.RekognitionGetCelebrityRecognitionRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetCelebrityRecognitionRequest.property.jobId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetCelebrityRecognitionRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetCelebrityRecognitionRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `sortBy`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetCelebrityRecognitionRequest.property.sortBy"></a>

- *Type:* `string`

---

### RekognitionGetCelebrityRecognitionResponse <a name="aws-cdk-sdk.rekognition.RekognitionGetCelebrityRecognitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionGetCelebrityRecognitionResponse: rekognition.RekognitionGetCelebrityRecognitionResponse = { ... }
```

##### `celebrities`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetCelebrityRecognitionResponse.property.celebrities"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionCelebrityRecognition`](#aws-cdk-sdk.rekognition.RekognitionCelebrityRecognition)[]

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetCelebrityRecognitionResponse.property.jobStatus"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetCelebrityRecognitionResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetCelebrityRecognitionResponse.property.statusMessage"></a>

- *Type:* `string`

---

##### `videoMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetCelebrityRecognitionResponse.property.videoMetadata"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionVideoMetadata`](#aws-cdk-sdk.rekognition.RekognitionVideoMetadata)

---

### RekognitionGetContentModerationRequest <a name="aws-cdk-sdk.rekognition.RekognitionGetContentModerationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionGetContentModerationRequest: rekognition.RekognitionGetContentModerationRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetContentModerationRequest.property.jobId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetContentModerationRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetContentModerationRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `sortBy`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetContentModerationRequest.property.sortBy"></a>

- *Type:* `string`

---

### RekognitionGetContentModerationResponse <a name="aws-cdk-sdk.rekognition.RekognitionGetContentModerationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionGetContentModerationResponse: rekognition.RekognitionGetContentModerationResponse = { ... }
```

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetContentModerationResponse.property.jobStatus"></a>

- *Type:* `string`

---

##### `moderationLabels`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetContentModerationResponse.property.moderationLabels"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionContentModerationDetection`](#aws-cdk-sdk.rekognition.RekognitionContentModerationDetection)[]

---

##### `moderationModelVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetContentModerationResponse.property.moderationModelVersion"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetContentModerationResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetContentModerationResponse.property.statusMessage"></a>

- *Type:* `string`

---

##### `videoMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetContentModerationResponse.property.videoMetadata"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionVideoMetadata`](#aws-cdk-sdk.rekognition.RekognitionVideoMetadata)

---

### RekognitionGetFaceDetectionRequest <a name="aws-cdk-sdk.rekognition.RekognitionGetFaceDetectionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionGetFaceDetectionRequest: rekognition.RekognitionGetFaceDetectionRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetFaceDetectionRequest.property.jobId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetFaceDetectionRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetFaceDetectionRequest.property.nextToken"></a>

- *Type:* `string`

---

### RekognitionGetFaceDetectionResponse <a name="aws-cdk-sdk.rekognition.RekognitionGetFaceDetectionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionGetFaceDetectionResponse: rekognition.RekognitionGetFaceDetectionResponse = { ... }
```

##### `faces`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetFaceDetectionResponse.property.faces"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionFaceDetection`](#aws-cdk-sdk.rekognition.RekognitionFaceDetection)[]

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetFaceDetectionResponse.property.jobStatus"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetFaceDetectionResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetFaceDetectionResponse.property.statusMessage"></a>

- *Type:* `string`

---

##### `videoMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetFaceDetectionResponse.property.videoMetadata"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionVideoMetadata`](#aws-cdk-sdk.rekognition.RekognitionVideoMetadata)

---

### RekognitionGetFaceSearchRequest <a name="aws-cdk-sdk.rekognition.RekognitionGetFaceSearchRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionGetFaceSearchRequest: rekognition.RekognitionGetFaceSearchRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetFaceSearchRequest.property.jobId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetFaceSearchRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetFaceSearchRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `sortBy`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetFaceSearchRequest.property.sortBy"></a>

- *Type:* `string`

---

### RekognitionGetFaceSearchResponse <a name="aws-cdk-sdk.rekognition.RekognitionGetFaceSearchResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionGetFaceSearchResponse: rekognition.RekognitionGetFaceSearchResponse = { ... }
```

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetFaceSearchResponse.property.jobStatus"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetFaceSearchResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `persons`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetFaceSearchResponse.property.persons"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionPersonMatch`](#aws-cdk-sdk.rekognition.RekognitionPersonMatch)[]

---

##### `statusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetFaceSearchResponse.property.statusMessage"></a>

- *Type:* `string`

---

##### `videoMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetFaceSearchResponse.property.videoMetadata"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionVideoMetadata`](#aws-cdk-sdk.rekognition.RekognitionVideoMetadata)

---

### RekognitionGetLabelDetectionRequest <a name="aws-cdk-sdk.rekognition.RekognitionGetLabelDetectionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionGetLabelDetectionRequest: rekognition.RekognitionGetLabelDetectionRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetLabelDetectionRequest.property.jobId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetLabelDetectionRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetLabelDetectionRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `sortBy`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetLabelDetectionRequest.property.sortBy"></a>

- *Type:* `string`

---

### RekognitionGetLabelDetectionResponse <a name="aws-cdk-sdk.rekognition.RekognitionGetLabelDetectionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionGetLabelDetectionResponse: rekognition.RekognitionGetLabelDetectionResponse = { ... }
```

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetLabelDetectionResponse.property.jobStatus"></a>

- *Type:* `string`

---

##### `labelModelVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetLabelDetectionResponse.property.labelModelVersion"></a>

- *Type:* `string`

---

##### `labels`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetLabelDetectionResponse.property.labels"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionLabelDetection`](#aws-cdk-sdk.rekognition.RekognitionLabelDetection)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetLabelDetectionResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetLabelDetectionResponse.property.statusMessage"></a>

- *Type:* `string`

---

##### `videoMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetLabelDetectionResponse.property.videoMetadata"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionVideoMetadata`](#aws-cdk-sdk.rekognition.RekognitionVideoMetadata)

---

### RekognitionGetPersonTrackingRequest <a name="aws-cdk-sdk.rekognition.RekognitionGetPersonTrackingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionGetPersonTrackingRequest: rekognition.RekognitionGetPersonTrackingRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetPersonTrackingRequest.property.jobId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetPersonTrackingRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetPersonTrackingRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `sortBy`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetPersonTrackingRequest.property.sortBy"></a>

- *Type:* `string`

---

### RekognitionGetPersonTrackingResponse <a name="aws-cdk-sdk.rekognition.RekognitionGetPersonTrackingResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionGetPersonTrackingResponse: rekognition.RekognitionGetPersonTrackingResponse = { ... }
```

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetPersonTrackingResponse.property.jobStatus"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetPersonTrackingResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `persons`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetPersonTrackingResponse.property.persons"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionPersonDetection`](#aws-cdk-sdk.rekognition.RekognitionPersonDetection)[]

---

##### `statusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetPersonTrackingResponse.property.statusMessage"></a>

- *Type:* `string`

---

##### `videoMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetPersonTrackingResponse.property.videoMetadata"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionVideoMetadata`](#aws-cdk-sdk.rekognition.RekognitionVideoMetadata)

---

### RekognitionGetSegmentDetectionRequest <a name="aws-cdk-sdk.rekognition.RekognitionGetSegmentDetectionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionGetSegmentDetectionRequest: rekognition.RekognitionGetSegmentDetectionRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetSegmentDetectionRequest.property.jobId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetSegmentDetectionRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetSegmentDetectionRequest.property.nextToken"></a>

- *Type:* `string`

---

### RekognitionGetSegmentDetectionResponse <a name="aws-cdk-sdk.rekognition.RekognitionGetSegmentDetectionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionGetSegmentDetectionResponse: rekognition.RekognitionGetSegmentDetectionResponse = { ... }
```

##### `audioMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetSegmentDetectionResponse.property.audioMetadata"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionAudioMetadata`](#aws-cdk-sdk.rekognition.RekognitionAudioMetadata)[]

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetSegmentDetectionResponse.property.jobStatus"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetSegmentDetectionResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `segments`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetSegmentDetectionResponse.property.segments"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionSegmentDetection`](#aws-cdk-sdk.rekognition.RekognitionSegmentDetection)[]

---

##### `selectedSegmentTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetSegmentDetectionResponse.property.selectedSegmentTypes"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionSegmentTypeInfo`](#aws-cdk-sdk.rekognition.RekognitionSegmentTypeInfo)[]

---

##### `statusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetSegmentDetectionResponse.property.statusMessage"></a>

- *Type:* `string`

---

##### `videoMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetSegmentDetectionResponse.property.videoMetadata"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionVideoMetadata`](#aws-cdk-sdk.rekognition.RekognitionVideoMetadata)[]

---

### RekognitionGetTextDetectionRequest <a name="aws-cdk-sdk.rekognition.RekognitionGetTextDetectionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionGetTextDetectionRequest: rekognition.RekognitionGetTextDetectionRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetTextDetectionRequest.property.jobId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetTextDetectionRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetTextDetectionRequest.property.nextToken"></a>

- *Type:* `string`

---

### RekognitionGetTextDetectionResponse <a name="aws-cdk-sdk.rekognition.RekognitionGetTextDetectionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionGetTextDetectionResponse: rekognition.RekognitionGetTextDetectionResponse = { ... }
```

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetTextDetectionResponse.property.jobStatus"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetTextDetectionResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetTextDetectionResponse.property.statusMessage"></a>

- *Type:* `string`

---

##### `textDetections`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetTextDetectionResponse.property.textDetections"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionTextDetectionResult`](#aws-cdk-sdk.rekognition.RekognitionTextDetectionResult)[]

---

##### `textModelVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetTextDetectionResponse.property.textModelVersion"></a>

- *Type:* `string`

---

##### `videoMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGetTextDetectionResponse.property.videoMetadata"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionVideoMetadata`](#aws-cdk-sdk.rekognition.RekognitionVideoMetadata)

---

### RekognitionGroundTruthManifest <a name="aws-cdk-sdk.rekognition.RekognitionGroundTruthManifest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionGroundTruthManifest: rekognition.RekognitionGroundTruthManifest = { ... }
```

##### `s3Object`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionGroundTruthManifest.property.s3Object"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionS3Object`](#aws-cdk-sdk.rekognition.RekognitionS3Object)

---

### RekognitionHumanLoopActivationOutput <a name="aws-cdk-sdk.rekognition.RekognitionHumanLoopActivationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionHumanLoopActivationOutput: rekognition.RekognitionHumanLoopActivationOutput = { ... }
```

##### `humanLoopActivationConditionsEvaluationResults`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionHumanLoopActivationOutput.property.humanLoopActivationConditionsEvaluationResults"></a>

- *Type:* `string`

---

##### `humanLoopActivationReasons`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionHumanLoopActivationOutput.property.humanLoopActivationReasons"></a>

- *Type:* `string`[]

---

##### `humanLoopArn`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionHumanLoopActivationOutput.property.humanLoopArn"></a>

- *Type:* `string`

---

### RekognitionHumanLoopConfig <a name="aws-cdk-sdk.rekognition.RekognitionHumanLoopConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionHumanLoopConfig: rekognition.RekognitionHumanLoopConfig = { ... }
```

##### `flowDefinitionArn`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionHumanLoopConfig.property.flowDefinitionArn"></a>

- *Type:* `string`

---

##### `humanLoopName`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionHumanLoopConfig.property.humanLoopName"></a>

- *Type:* `string`

---

##### `dataAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionHumanLoopConfig.property.dataAttributes"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionHumanLoopDataAttributes`](#aws-cdk-sdk.rekognition.RekognitionHumanLoopDataAttributes)

---

### RekognitionHumanLoopDataAttributes <a name="aws-cdk-sdk.rekognition.RekognitionHumanLoopDataAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionHumanLoopDataAttributes: rekognition.RekognitionHumanLoopDataAttributes = { ... }
```

##### `contentClassifiers`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionHumanLoopDataAttributes.property.contentClassifiers"></a>

- *Type:* `string`[]

---

### RekognitionImage <a name="aws-cdk-sdk.rekognition.RekognitionImage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionImage: rekognition.RekognitionImage = { ... }
```

##### `bytes`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionImage.property.bytes"></a>

- *Type:* `any`

---

##### `s3Object`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionImage.property.s3Object"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionS3Object`](#aws-cdk-sdk.rekognition.RekognitionS3Object)

---

### RekognitionImageQuality <a name="aws-cdk-sdk.rekognition.RekognitionImageQuality"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionImageQuality: rekognition.RekognitionImageQuality = { ... }
```

##### `brightness`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionImageQuality.property.brightness"></a>

- *Type:* `number`

---

##### `sharpness`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionImageQuality.property.sharpness"></a>

- *Type:* `number`

---

### RekognitionIndexFacesRequest <a name="aws-cdk-sdk.rekognition.RekognitionIndexFacesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionIndexFacesRequest: rekognition.RekognitionIndexFacesRequest = { ... }
```

##### `collectionId`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionIndexFacesRequest.property.collectionId"></a>

- *Type:* `string`

---

##### `image`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionIndexFacesRequest.property.image"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionImage`](#aws-cdk-sdk.rekognition.RekognitionImage)

---

##### `detectionAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionIndexFacesRequest.property.detectionAttributes"></a>

- *Type:* `string`[]

---

##### `externalImageId`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionIndexFacesRequest.property.externalImageId"></a>

- *Type:* `string`

---

##### `maxFaces`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionIndexFacesRequest.property.maxFaces"></a>

- *Type:* `number`

---

##### `qualityFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionIndexFacesRequest.property.qualityFilter"></a>

- *Type:* `string`

---

### RekognitionIndexFacesResponse <a name="aws-cdk-sdk.rekognition.RekognitionIndexFacesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionIndexFacesResponse: rekognition.RekognitionIndexFacesResponse = { ... }
```

##### `faceModelVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionIndexFacesResponse.property.faceModelVersion"></a>

- *Type:* `string`

---

##### `faceRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionIndexFacesResponse.property.faceRecords"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionFaceRecord`](#aws-cdk-sdk.rekognition.RekognitionFaceRecord)[]

---

##### `orientationCorrection`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionIndexFacesResponse.property.orientationCorrection"></a>

- *Type:* `string`

---

##### `unindexedFaces`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionIndexFacesResponse.property.unindexedFaces"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionUnindexedFace`](#aws-cdk-sdk.rekognition.RekognitionUnindexedFace)[]

---

### RekognitionInstance <a name="aws-cdk-sdk.rekognition.RekognitionInstance"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionInstance: rekognition.RekognitionInstance = { ... }
```

##### `boundingBox`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionInstance.property.boundingBox"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionBoundingBox`](#aws-cdk-sdk.rekognition.RekognitionBoundingBox)

---

##### `confidence`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionInstance.property.confidence"></a>

- *Type:* `number`

---

### RekognitionKinesisDataStream <a name="aws-cdk-sdk.rekognition.RekognitionKinesisDataStream"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionKinesisDataStream: rekognition.RekognitionKinesisDataStream = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionKinesisDataStream.property.arn"></a>

- *Type:* `string`

---

### RekognitionKinesisVideoStream <a name="aws-cdk-sdk.rekognition.RekognitionKinesisVideoStream"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionKinesisVideoStream: rekognition.RekognitionKinesisVideoStream = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionKinesisVideoStream.property.arn"></a>

- *Type:* `string`

---

### RekognitionLabel <a name="aws-cdk-sdk.rekognition.RekognitionLabel"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionLabel: rekognition.RekognitionLabel = { ... }
```

##### `confidence`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionLabel.property.confidence"></a>

- *Type:* `number`

---

##### `instances`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionLabel.property.instances"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionInstance`](#aws-cdk-sdk.rekognition.RekognitionInstance)[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionLabel.property.name"></a>

- *Type:* `string`

---

##### `parents`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionLabel.property.parents"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionParent`](#aws-cdk-sdk.rekognition.RekognitionParent)[]

---

### RekognitionLabelDetection <a name="aws-cdk-sdk.rekognition.RekognitionLabelDetection"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionLabelDetection: rekognition.RekognitionLabelDetection = { ... }
```

##### `label`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionLabelDetection.property.label"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionLabel`](#aws-cdk-sdk.rekognition.RekognitionLabel)

---

##### `timestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionLabelDetection.property.timestamp"></a>

- *Type:* `number`

---

### RekognitionLandmark <a name="aws-cdk-sdk.rekognition.RekognitionLandmark"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionLandmark: rekognition.RekognitionLandmark = { ... }
```

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionLandmark.property.type"></a>

- *Type:* `string`

---

##### `x`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionLandmark.property.x"></a>

- *Type:* `number`

---

##### `y`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionLandmark.property.y"></a>

- *Type:* `number`

---

### RekognitionListCollectionsRequest <a name="aws-cdk-sdk.rekognition.RekognitionListCollectionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionListCollectionsRequest: rekognition.RekognitionListCollectionsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionListCollectionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionListCollectionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### RekognitionListCollectionsResponse <a name="aws-cdk-sdk.rekognition.RekognitionListCollectionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionListCollectionsResponse: rekognition.RekognitionListCollectionsResponse = { ... }
```

##### `collectionIds`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionListCollectionsResponse.property.collectionIds"></a>

- *Type:* `string`[]

---

##### `faceModelVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionListCollectionsResponse.property.faceModelVersions"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionListCollectionsResponse.property.nextToken"></a>

- *Type:* `string`

---

### RekognitionListFacesRequest <a name="aws-cdk-sdk.rekognition.RekognitionListFacesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionListFacesRequest: rekognition.RekognitionListFacesRequest = { ... }
```

##### `collectionId`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionListFacesRequest.property.collectionId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionListFacesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionListFacesRequest.property.nextToken"></a>

- *Type:* `string`

---

### RekognitionListFacesResponse <a name="aws-cdk-sdk.rekognition.RekognitionListFacesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionListFacesResponse: rekognition.RekognitionListFacesResponse = { ... }
```

##### `faceModelVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionListFacesResponse.property.faceModelVersion"></a>

- *Type:* `string`

---

##### `faces`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionListFacesResponse.property.faces"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionFace`](#aws-cdk-sdk.rekognition.RekognitionFace)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionListFacesResponse.property.nextToken"></a>

- *Type:* `string`

---

### RekognitionListStreamProcessorsRequest <a name="aws-cdk-sdk.rekognition.RekognitionListStreamProcessorsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionListStreamProcessorsRequest: rekognition.RekognitionListStreamProcessorsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionListStreamProcessorsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionListStreamProcessorsRequest.property.nextToken"></a>

- *Type:* `string`

---

### RekognitionListStreamProcessorsResponse <a name="aws-cdk-sdk.rekognition.RekognitionListStreamProcessorsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionListStreamProcessorsResponse: rekognition.RekognitionListStreamProcessorsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionListStreamProcessorsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `streamProcessors`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionListStreamProcessorsResponse.property.streamProcessors"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionStreamProcessor`](#aws-cdk-sdk.rekognition.RekognitionStreamProcessor)[]

---

### RekognitionModerationLabel <a name="aws-cdk-sdk.rekognition.RekognitionModerationLabel"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionModerationLabel: rekognition.RekognitionModerationLabel = { ... }
```

##### `confidence`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionModerationLabel.property.confidence"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionModerationLabel.property.name"></a>

- *Type:* `string`

---

##### `parentName`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionModerationLabel.property.parentName"></a>

- *Type:* `string`

---

### RekognitionMouthOpen <a name="aws-cdk-sdk.rekognition.RekognitionMouthOpen"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionMouthOpen: rekognition.RekognitionMouthOpen = { ... }
```

##### `confidence`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionMouthOpen.property.confidence"></a>

- *Type:* `number`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionMouthOpen.property.value"></a>

- *Type:* `boolean`

---

### RekognitionMustache <a name="aws-cdk-sdk.rekognition.RekognitionMustache"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionMustache: rekognition.RekognitionMustache = { ... }
```

##### `confidence`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionMustache.property.confidence"></a>

- *Type:* `number`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionMustache.property.value"></a>

- *Type:* `boolean`

---

### RekognitionNotificationChannel <a name="aws-cdk-sdk.rekognition.RekognitionNotificationChannel"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionNotificationChannel: rekognition.RekognitionNotificationChannel = { ... }
```

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionNotificationChannel.property.roleArn"></a>

- *Type:* `string`

---

##### `snsTopicArn`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionNotificationChannel.property.snsTopicArn"></a>

- *Type:* `string`

---

### RekognitionOutputConfig <a name="aws-cdk-sdk.rekognition.RekognitionOutputConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionOutputConfig: rekognition.RekognitionOutputConfig = { ... }
```

##### `s3Bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionOutputConfig.property.s3Bucket"></a>

- *Type:* `string`

---

##### `s3KeyPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionOutputConfig.property.s3KeyPrefix"></a>

- *Type:* `string`

---

### RekognitionParent <a name="aws-cdk-sdk.rekognition.RekognitionParent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionParent: rekognition.RekognitionParent = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionParent.property.name"></a>

- *Type:* `string`

---

### RekognitionPersonDetail <a name="aws-cdk-sdk.rekognition.RekognitionPersonDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionPersonDetail: rekognition.RekognitionPersonDetail = { ... }
```

##### `boundingBox`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionPersonDetail.property.boundingBox"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionBoundingBox`](#aws-cdk-sdk.rekognition.RekognitionBoundingBox)

---

##### `face`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionPersonDetail.property.face"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionFaceDetail`](#aws-cdk-sdk.rekognition.RekognitionFaceDetail)

---

##### `index`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionPersonDetail.property.index"></a>

- *Type:* `number`

---

### RekognitionPersonDetection <a name="aws-cdk-sdk.rekognition.RekognitionPersonDetection"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionPersonDetection: rekognition.RekognitionPersonDetection = { ... }
```

##### `person`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionPersonDetection.property.person"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionPersonDetail`](#aws-cdk-sdk.rekognition.RekognitionPersonDetail)

---

##### `timestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionPersonDetection.property.timestamp"></a>

- *Type:* `number`

---

### RekognitionPersonMatch <a name="aws-cdk-sdk.rekognition.RekognitionPersonMatch"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionPersonMatch: rekognition.RekognitionPersonMatch = { ... }
```

##### `faceMatches`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionPersonMatch.property.faceMatches"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionFaceMatch`](#aws-cdk-sdk.rekognition.RekognitionFaceMatch)[]

---

##### `person`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionPersonMatch.property.person"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionPersonDetail`](#aws-cdk-sdk.rekognition.RekognitionPersonDetail)

---

##### `timestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionPersonMatch.property.timestamp"></a>

- *Type:* `number`

---

### RekognitionPoint <a name="aws-cdk-sdk.rekognition.RekognitionPoint"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionPoint: rekognition.RekognitionPoint = { ... }
```

##### `x`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionPoint.property.x"></a>

- *Type:* `number`

---

##### `y`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionPoint.property.y"></a>

- *Type:* `number`

---

### RekognitionPose <a name="aws-cdk-sdk.rekognition.RekognitionPose"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionPose: rekognition.RekognitionPose = { ... }
```

##### `pitch`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionPose.property.pitch"></a>

- *Type:* `number`

---

##### `roll`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionPose.property.roll"></a>

- *Type:* `number`

---

##### `yaw`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionPose.property.yaw"></a>

- *Type:* `number`

---

### RekognitionProjectDescription <a name="aws-cdk-sdk.rekognition.RekognitionProjectDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionProjectDescription: rekognition.RekognitionProjectDescription = { ... }
```

##### `creationTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionProjectDescription.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `projectArn`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionProjectDescription.property.projectArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionProjectDescription.property.status"></a>

- *Type:* `string`

---

### RekognitionProjectVersionDescription <a name="aws-cdk-sdk.rekognition.RekognitionProjectVersionDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionProjectVersionDescription: rekognition.RekognitionProjectVersionDescription = { ... }
```

##### `billableTrainingTimeInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionProjectVersionDescription.property.billableTrainingTimeInSeconds"></a>

- *Type:* `number`

---

##### `creationTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionProjectVersionDescription.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `evaluationResult`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionProjectVersionDescription.property.evaluationResult"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionEvaluationResult`](#aws-cdk-sdk.rekognition.RekognitionEvaluationResult)

---

##### `manifestSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionProjectVersionDescription.property.manifestSummary"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionGroundTruthManifest`](#aws-cdk-sdk.rekognition.RekognitionGroundTruthManifest)

---

##### `minInferenceUnits`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionProjectVersionDescription.property.minInferenceUnits"></a>

- *Type:* `number`

---

##### `outputConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionProjectVersionDescription.property.outputConfig"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionOutputConfig`](#aws-cdk-sdk.rekognition.RekognitionOutputConfig)

---

##### `projectVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionProjectVersionDescription.property.projectVersionArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionProjectVersionDescription.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionProjectVersionDescription.property.statusMessage"></a>

- *Type:* `string`

---

##### `testingDataResult`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionProjectVersionDescription.property.testingDataResult"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionTestingDataResult`](#aws-cdk-sdk.rekognition.RekognitionTestingDataResult)

---

##### `trainingDataResult`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionProjectVersionDescription.property.trainingDataResult"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionTrainingDataResult`](#aws-cdk-sdk.rekognition.RekognitionTrainingDataResult)

---

##### `trainingEndTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionProjectVersionDescription.property.trainingEndTimestamp"></a>

- *Type:* `string`

---

### RekognitionProtectiveEquipmentBodyPart <a name="aws-cdk-sdk.rekognition.RekognitionProtectiveEquipmentBodyPart"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionProtectiveEquipmentBodyPart: rekognition.RekognitionProtectiveEquipmentBodyPart = { ... }
```

##### `confidence`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionProtectiveEquipmentBodyPart.property.confidence"></a>

- *Type:* `number`

---

##### `equipmentDetections`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionProtectiveEquipmentBodyPart.property.equipmentDetections"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionEquipmentDetection`](#aws-cdk-sdk.rekognition.RekognitionEquipmentDetection)[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionProtectiveEquipmentBodyPart.property.name"></a>

- *Type:* `string`

---

### RekognitionProtectiveEquipmentPerson <a name="aws-cdk-sdk.rekognition.RekognitionProtectiveEquipmentPerson"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionProtectiveEquipmentPerson: rekognition.RekognitionProtectiveEquipmentPerson = { ... }
```

##### `bodyParts`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionProtectiveEquipmentPerson.property.bodyParts"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionProtectiveEquipmentBodyPart`](#aws-cdk-sdk.rekognition.RekognitionProtectiveEquipmentBodyPart)[]

---

##### `boundingBox`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionProtectiveEquipmentPerson.property.boundingBox"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionBoundingBox`](#aws-cdk-sdk.rekognition.RekognitionBoundingBox)

---

##### `confidence`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionProtectiveEquipmentPerson.property.confidence"></a>

- *Type:* `number`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionProtectiveEquipmentPerson.property.id"></a>

- *Type:* `number`

---

### RekognitionProtectiveEquipmentSummarizationAttributes <a name="aws-cdk-sdk.rekognition.RekognitionProtectiveEquipmentSummarizationAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionProtectiveEquipmentSummarizationAttributes: rekognition.RekognitionProtectiveEquipmentSummarizationAttributes = { ... }
```

##### `minConfidence`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionProtectiveEquipmentSummarizationAttributes.property.minConfidence"></a>

- *Type:* `number`

---

##### `requiredEquipmentTypes`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionProtectiveEquipmentSummarizationAttributes.property.requiredEquipmentTypes"></a>

- *Type:* `string`[]

---

### RekognitionProtectiveEquipmentSummary <a name="aws-cdk-sdk.rekognition.RekognitionProtectiveEquipmentSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionProtectiveEquipmentSummary: rekognition.RekognitionProtectiveEquipmentSummary = { ... }
```

##### `personsIndeterminate`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionProtectiveEquipmentSummary.property.personsIndeterminate"></a>

- *Type:* `number`[]

---

##### `personsWithoutRequiredEquipment`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionProtectiveEquipmentSummary.property.personsWithoutRequiredEquipment"></a>

- *Type:* `number`[]

---

##### `personsWithRequiredEquipment`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionProtectiveEquipmentSummary.property.personsWithRequiredEquipment"></a>

- *Type:* `number`[]

---

### RekognitionRecognizeCelebritiesRequest <a name="aws-cdk-sdk.rekognition.RekognitionRecognizeCelebritiesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionRecognizeCelebritiesRequest: rekognition.RekognitionRecognizeCelebritiesRequest = { ... }
```

##### `image`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionRecognizeCelebritiesRequest.property.image"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionImage`](#aws-cdk-sdk.rekognition.RekognitionImage)

---

### RekognitionRecognizeCelebritiesResponse <a name="aws-cdk-sdk.rekognition.RekognitionRecognizeCelebritiesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionRecognizeCelebritiesResponse: rekognition.RekognitionRecognizeCelebritiesResponse = { ... }
```

##### `celebrityFaces`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionRecognizeCelebritiesResponse.property.celebrityFaces"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionCelebrity`](#aws-cdk-sdk.rekognition.RekognitionCelebrity)[]

---

##### `orientationCorrection`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionRecognizeCelebritiesResponse.property.orientationCorrection"></a>

- *Type:* `string`

---

##### `unrecognizedFaces`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionRecognizeCelebritiesResponse.property.unrecognizedFaces"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionComparedFace`](#aws-cdk-sdk.rekognition.RekognitionComparedFace)[]

---

### RekognitionRegionOfInterest <a name="aws-cdk-sdk.rekognition.RekognitionRegionOfInterest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionRegionOfInterest: rekognition.RekognitionRegionOfInterest = { ... }
```

##### `boundingBox`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionRegionOfInterest.property.boundingBox"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionBoundingBox`](#aws-cdk-sdk.rekognition.RekognitionBoundingBox)

---

### RekognitionS3Object <a name="aws-cdk-sdk.rekognition.RekognitionS3Object"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionS3Object: rekognition.RekognitionS3Object = { ... }
```

##### `bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionS3Object.property.bucket"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionS3Object.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionS3Object.property.version"></a>

- *Type:* `string`

---

### RekognitionSearchFacesByImageRequest <a name="aws-cdk-sdk.rekognition.RekognitionSearchFacesByImageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionSearchFacesByImageRequest: rekognition.RekognitionSearchFacesByImageRequest = { ... }
```

##### `collectionId`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionSearchFacesByImageRequest.property.collectionId"></a>

- *Type:* `string`

---

##### `image`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionSearchFacesByImageRequest.property.image"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionImage`](#aws-cdk-sdk.rekognition.RekognitionImage)

---

##### `faceMatchThreshold`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionSearchFacesByImageRequest.property.faceMatchThreshold"></a>

- *Type:* `number`

---

##### `maxFaces`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionSearchFacesByImageRequest.property.maxFaces"></a>

- *Type:* `number`

---

##### `qualityFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionSearchFacesByImageRequest.property.qualityFilter"></a>

- *Type:* `string`

---

### RekognitionSearchFacesByImageResponse <a name="aws-cdk-sdk.rekognition.RekognitionSearchFacesByImageResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionSearchFacesByImageResponse: rekognition.RekognitionSearchFacesByImageResponse = { ... }
```

##### `faceMatches`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionSearchFacesByImageResponse.property.faceMatches"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionFaceMatch`](#aws-cdk-sdk.rekognition.RekognitionFaceMatch)[]

---

##### `faceModelVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionSearchFacesByImageResponse.property.faceModelVersion"></a>

- *Type:* `string`

---

##### `searchedFaceBoundingBox`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionSearchFacesByImageResponse.property.searchedFaceBoundingBox"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionBoundingBox`](#aws-cdk-sdk.rekognition.RekognitionBoundingBox)

---

##### `searchedFaceConfidence`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionSearchFacesByImageResponse.property.searchedFaceConfidence"></a>

- *Type:* `number`

---

### RekognitionSearchFacesRequest <a name="aws-cdk-sdk.rekognition.RekognitionSearchFacesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionSearchFacesRequest: rekognition.RekognitionSearchFacesRequest = { ... }
```

##### `collectionId`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionSearchFacesRequest.property.collectionId"></a>

- *Type:* `string`

---

##### `faceId`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionSearchFacesRequest.property.faceId"></a>

- *Type:* `string`

---

##### `faceMatchThreshold`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionSearchFacesRequest.property.faceMatchThreshold"></a>

- *Type:* `number`

---

##### `maxFaces`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionSearchFacesRequest.property.maxFaces"></a>

- *Type:* `number`

---

### RekognitionSearchFacesResponse <a name="aws-cdk-sdk.rekognition.RekognitionSearchFacesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionSearchFacesResponse: rekognition.RekognitionSearchFacesResponse = { ... }
```

##### `faceMatches`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionSearchFacesResponse.property.faceMatches"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionFaceMatch`](#aws-cdk-sdk.rekognition.RekognitionFaceMatch)[]

---

##### `faceModelVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionSearchFacesResponse.property.faceModelVersion"></a>

- *Type:* `string`

---

##### `searchedFaceId`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionSearchFacesResponse.property.searchedFaceId"></a>

- *Type:* `string`

---

### RekognitionSegmentDetection <a name="aws-cdk-sdk.rekognition.RekognitionSegmentDetection"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionSegmentDetection: rekognition.RekognitionSegmentDetection = { ... }
```

##### `durationMillis`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionSegmentDetection.property.durationMillis"></a>

- *Type:* `number`

---

##### `durationSmpte`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionSegmentDetection.property.durationSmpte"></a>

- *Type:* `string`

---

##### `endTimecodeSmpte`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionSegmentDetection.property.endTimecodeSmpte"></a>

- *Type:* `string`

---

##### `endTimestampMillis`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionSegmentDetection.property.endTimestampMillis"></a>

- *Type:* `number`

---

##### `shotSegment`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionSegmentDetection.property.shotSegment"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionShotSegment`](#aws-cdk-sdk.rekognition.RekognitionShotSegment)

---

##### `startTimecodeSmpte`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionSegmentDetection.property.startTimecodeSmpte"></a>

- *Type:* `string`

---

##### `startTimestampMillis`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionSegmentDetection.property.startTimestampMillis"></a>

- *Type:* `number`

---

##### `technicalCueSegment`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionSegmentDetection.property.technicalCueSegment"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionTechnicalCueSegment`](#aws-cdk-sdk.rekognition.RekognitionTechnicalCueSegment)

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionSegmentDetection.property.type"></a>

- *Type:* `string`

---

### RekognitionSegmentTypeInfo <a name="aws-cdk-sdk.rekognition.RekognitionSegmentTypeInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionSegmentTypeInfo: rekognition.RekognitionSegmentTypeInfo = { ... }
```

##### `modelVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionSegmentTypeInfo.property.modelVersion"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionSegmentTypeInfo.property.type"></a>

- *Type:* `string`

---

### RekognitionShotSegment <a name="aws-cdk-sdk.rekognition.RekognitionShotSegment"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionShotSegment: rekognition.RekognitionShotSegment = { ... }
```

##### `confidence`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionShotSegment.property.confidence"></a>

- *Type:* `number`

---

##### `index`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionShotSegment.property.index"></a>

- *Type:* `number`

---

### RekognitionSmile <a name="aws-cdk-sdk.rekognition.RekognitionSmile"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionSmile: rekognition.RekognitionSmile = { ... }
```

##### `confidence`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionSmile.property.confidence"></a>

- *Type:* `number`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionSmile.property.value"></a>

- *Type:* `boolean`

---

### RekognitionStartCelebrityRecognitionRequest <a name="aws-cdk-sdk.rekognition.RekognitionStartCelebrityRecognitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionStartCelebrityRecognitionRequest: rekognition.RekognitionStartCelebrityRecognitionRequest = { ... }
```

##### `video`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartCelebrityRecognitionRequest.property.video"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionVideo`](#aws-cdk-sdk.rekognition.RekognitionVideo)

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartCelebrityRecognitionRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `jobTag`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartCelebrityRecognitionRequest.property.jobTag"></a>

- *Type:* `string`

---

##### `notificationChannel`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartCelebrityRecognitionRequest.property.notificationChannel"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionNotificationChannel`](#aws-cdk-sdk.rekognition.RekognitionNotificationChannel)

---

### RekognitionStartCelebrityRecognitionResponse <a name="aws-cdk-sdk.rekognition.RekognitionStartCelebrityRecognitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionStartCelebrityRecognitionResponse: rekognition.RekognitionStartCelebrityRecognitionResponse = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartCelebrityRecognitionResponse.property.jobId"></a>

- *Type:* `string`

---

### RekognitionStartContentModerationRequest <a name="aws-cdk-sdk.rekognition.RekognitionStartContentModerationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionStartContentModerationRequest: rekognition.RekognitionStartContentModerationRequest = { ... }
```

##### `video`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartContentModerationRequest.property.video"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionVideo`](#aws-cdk-sdk.rekognition.RekognitionVideo)

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartContentModerationRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `jobTag`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartContentModerationRequest.property.jobTag"></a>

- *Type:* `string`

---

##### `minConfidence`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartContentModerationRequest.property.minConfidence"></a>

- *Type:* `number`

---

##### `notificationChannel`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartContentModerationRequest.property.notificationChannel"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionNotificationChannel`](#aws-cdk-sdk.rekognition.RekognitionNotificationChannel)

---

### RekognitionStartContentModerationResponse <a name="aws-cdk-sdk.rekognition.RekognitionStartContentModerationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionStartContentModerationResponse: rekognition.RekognitionStartContentModerationResponse = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartContentModerationResponse.property.jobId"></a>

- *Type:* `string`

---

### RekognitionStartFaceDetectionRequest <a name="aws-cdk-sdk.rekognition.RekognitionStartFaceDetectionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionStartFaceDetectionRequest: rekognition.RekognitionStartFaceDetectionRequest = { ... }
```

##### `video`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartFaceDetectionRequest.property.video"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionVideo`](#aws-cdk-sdk.rekognition.RekognitionVideo)

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartFaceDetectionRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `faceAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartFaceDetectionRequest.property.faceAttributes"></a>

- *Type:* `string`

---

##### `jobTag`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartFaceDetectionRequest.property.jobTag"></a>

- *Type:* `string`

---

##### `notificationChannel`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartFaceDetectionRequest.property.notificationChannel"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionNotificationChannel`](#aws-cdk-sdk.rekognition.RekognitionNotificationChannel)

---

### RekognitionStartFaceDetectionResponse <a name="aws-cdk-sdk.rekognition.RekognitionStartFaceDetectionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionStartFaceDetectionResponse: rekognition.RekognitionStartFaceDetectionResponse = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartFaceDetectionResponse.property.jobId"></a>

- *Type:* `string`

---

### RekognitionStartFaceSearchRequest <a name="aws-cdk-sdk.rekognition.RekognitionStartFaceSearchRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionStartFaceSearchRequest: rekognition.RekognitionStartFaceSearchRequest = { ... }
```

##### `collectionId`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartFaceSearchRequest.property.collectionId"></a>

- *Type:* `string`

---

##### `video`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartFaceSearchRequest.property.video"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionVideo`](#aws-cdk-sdk.rekognition.RekognitionVideo)

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartFaceSearchRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `faceMatchThreshold`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartFaceSearchRequest.property.faceMatchThreshold"></a>

- *Type:* `number`

---

##### `jobTag`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartFaceSearchRequest.property.jobTag"></a>

- *Type:* `string`

---

##### `notificationChannel`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartFaceSearchRequest.property.notificationChannel"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionNotificationChannel`](#aws-cdk-sdk.rekognition.RekognitionNotificationChannel)

---

### RekognitionStartFaceSearchResponse <a name="aws-cdk-sdk.rekognition.RekognitionStartFaceSearchResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionStartFaceSearchResponse: rekognition.RekognitionStartFaceSearchResponse = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartFaceSearchResponse.property.jobId"></a>

- *Type:* `string`

---

### RekognitionStartLabelDetectionRequest <a name="aws-cdk-sdk.rekognition.RekognitionStartLabelDetectionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionStartLabelDetectionRequest: rekognition.RekognitionStartLabelDetectionRequest = { ... }
```

##### `video`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartLabelDetectionRequest.property.video"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionVideo`](#aws-cdk-sdk.rekognition.RekognitionVideo)

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartLabelDetectionRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `jobTag`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartLabelDetectionRequest.property.jobTag"></a>

- *Type:* `string`

---

##### `minConfidence`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartLabelDetectionRequest.property.minConfidence"></a>

- *Type:* `number`

---

##### `notificationChannel`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartLabelDetectionRequest.property.notificationChannel"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionNotificationChannel`](#aws-cdk-sdk.rekognition.RekognitionNotificationChannel)

---

### RekognitionStartLabelDetectionResponse <a name="aws-cdk-sdk.rekognition.RekognitionStartLabelDetectionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionStartLabelDetectionResponse: rekognition.RekognitionStartLabelDetectionResponse = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartLabelDetectionResponse.property.jobId"></a>

- *Type:* `string`

---

### RekognitionStartPersonTrackingRequest <a name="aws-cdk-sdk.rekognition.RekognitionStartPersonTrackingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionStartPersonTrackingRequest: rekognition.RekognitionStartPersonTrackingRequest = { ... }
```

##### `video`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartPersonTrackingRequest.property.video"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionVideo`](#aws-cdk-sdk.rekognition.RekognitionVideo)

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartPersonTrackingRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `jobTag`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartPersonTrackingRequest.property.jobTag"></a>

- *Type:* `string`

---

##### `notificationChannel`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartPersonTrackingRequest.property.notificationChannel"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionNotificationChannel`](#aws-cdk-sdk.rekognition.RekognitionNotificationChannel)

---

### RekognitionStartPersonTrackingResponse <a name="aws-cdk-sdk.rekognition.RekognitionStartPersonTrackingResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionStartPersonTrackingResponse: rekognition.RekognitionStartPersonTrackingResponse = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartPersonTrackingResponse.property.jobId"></a>

- *Type:* `string`

---

### RekognitionStartProjectVersionRequest <a name="aws-cdk-sdk.rekognition.RekognitionStartProjectVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionStartProjectVersionRequest: rekognition.RekognitionStartProjectVersionRequest = { ... }
```

##### `minInferenceUnits`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartProjectVersionRequest.property.minInferenceUnits"></a>

- *Type:* `number`

---

##### `projectVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartProjectVersionRequest.property.projectVersionArn"></a>

- *Type:* `string`

---

### RekognitionStartProjectVersionResponse <a name="aws-cdk-sdk.rekognition.RekognitionStartProjectVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionStartProjectVersionResponse: rekognition.RekognitionStartProjectVersionResponse = { ... }
```

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartProjectVersionResponse.property.status"></a>

- *Type:* `string`

---

### RekognitionStartSegmentDetectionFilters <a name="aws-cdk-sdk.rekognition.RekognitionStartSegmentDetectionFilters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionStartSegmentDetectionFilters: rekognition.RekognitionStartSegmentDetectionFilters = { ... }
```

##### `shotFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartSegmentDetectionFilters.property.shotFilter"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionStartShotDetectionFilter`](#aws-cdk-sdk.rekognition.RekognitionStartShotDetectionFilter)

---

##### `technicalCueFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartSegmentDetectionFilters.property.technicalCueFilter"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionStartTechnicalCueDetectionFilter`](#aws-cdk-sdk.rekognition.RekognitionStartTechnicalCueDetectionFilter)

---

### RekognitionStartSegmentDetectionRequest <a name="aws-cdk-sdk.rekognition.RekognitionStartSegmentDetectionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionStartSegmentDetectionRequest: rekognition.RekognitionStartSegmentDetectionRequest = { ... }
```

##### `segmentTypes`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartSegmentDetectionRequest.property.segmentTypes"></a>

- *Type:* `string`[]

---

##### `video`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartSegmentDetectionRequest.property.video"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionVideo`](#aws-cdk-sdk.rekognition.RekognitionVideo)

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartSegmentDetectionRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartSegmentDetectionRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionStartSegmentDetectionFilters`](#aws-cdk-sdk.rekognition.RekognitionStartSegmentDetectionFilters)

---

##### `jobTag`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartSegmentDetectionRequest.property.jobTag"></a>

- *Type:* `string`

---

##### `notificationChannel`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartSegmentDetectionRequest.property.notificationChannel"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionNotificationChannel`](#aws-cdk-sdk.rekognition.RekognitionNotificationChannel)

---

### RekognitionStartSegmentDetectionResponse <a name="aws-cdk-sdk.rekognition.RekognitionStartSegmentDetectionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionStartSegmentDetectionResponse: rekognition.RekognitionStartSegmentDetectionResponse = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartSegmentDetectionResponse.property.jobId"></a>

- *Type:* `string`

---

### RekognitionStartShotDetectionFilter <a name="aws-cdk-sdk.rekognition.RekognitionStartShotDetectionFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionStartShotDetectionFilter: rekognition.RekognitionStartShotDetectionFilter = { ... }
```

##### `minSegmentConfidence`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartShotDetectionFilter.property.minSegmentConfidence"></a>

- *Type:* `number`

---

### RekognitionStartStreamProcessorRequest <a name="aws-cdk-sdk.rekognition.RekognitionStartStreamProcessorRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionStartStreamProcessorRequest: rekognition.RekognitionStartStreamProcessorRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartStreamProcessorRequest.property.name"></a>

- *Type:* `string`

---

### RekognitionStartStreamProcessorResponse <a name="aws-cdk-sdk.rekognition.RekognitionStartStreamProcessorResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionStartStreamProcessorResponse: rekognition.RekognitionStartStreamProcessorResponse = { ... }
```

### RekognitionStartTechnicalCueDetectionFilter <a name="aws-cdk-sdk.rekognition.RekognitionStartTechnicalCueDetectionFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionStartTechnicalCueDetectionFilter: rekognition.RekognitionStartTechnicalCueDetectionFilter = { ... }
```

##### `minSegmentConfidence`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartTechnicalCueDetectionFilter.property.minSegmentConfidence"></a>

- *Type:* `number`

---

### RekognitionStartTextDetectionFilters <a name="aws-cdk-sdk.rekognition.RekognitionStartTextDetectionFilters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionStartTextDetectionFilters: rekognition.RekognitionStartTextDetectionFilters = { ... }
```

##### `regionsOfInterest`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartTextDetectionFilters.property.regionsOfInterest"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionRegionOfInterest`](#aws-cdk-sdk.rekognition.RekognitionRegionOfInterest)[]

---

##### `wordFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartTextDetectionFilters.property.wordFilter"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionDetectionFilter`](#aws-cdk-sdk.rekognition.RekognitionDetectionFilter)

---

### RekognitionStartTextDetectionRequest <a name="aws-cdk-sdk.rekognition.RekognitionStartTextDetectionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionStartTextDetectionRequest: rekognition.RekognitionStartTextDetectionRequest = { ... }
```

##### `video`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartTextDetectionRequest.property.video"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionVideo`](#aws-cdk-sdk.rekognition.RekognitionVideo)

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartTextDetectionRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartTextDetectionRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionStartTextDetectionFilters`](#aws-cdk-sdk.rekognition.RekognitionStartTextDetectionFilters)

---

##### `jobTag`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartTextDetectionRequest.property.jobTag"></a>

- *Type:* `string`

---

##### `notificationChannel`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartTextDetectionRequest.property.notificationChannel"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionNotificationChannel`](#aws-cdk-sdk.rekognition.RekognitionNotificationChannel)

---

### RekognitionStartTextDetectionResponse <a name="aws-cdk-sdk.rekognition.RekognitionStartTextDetectionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionStartTextDetectionResponse: rekognition.RekognitionStartTextDetectionResponse = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStartTextDetectionResponse.property.jobId"></a>

- *Type:* `string`

---

### RekognitionStopProjectVersionRequest <a name="aws-cdk-sdk.rekognition.RekognitionStopProjectVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionStopProjectVersionRequest: rekognition.RekognitionStopProjectVersionRequest = { ... }
```

##### `projectVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStopProjectVersionRequest.property.projectVersionArn"></a>

- *Type:* `string`

---

### RekognitionStopProjectVersionResponse <a name="aws-cdk-sdk.rekognition.RekognitionStopProjectVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionStopProjectVersionResponse: rekognition.RekognitionStopProjectVersionResponse = { ... }
```

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStopProjectVersionResponse.property.status"></a>

- *Type:* `string`

---

### RekognitionStopStreamProcessorRequest <a name="aws-cdk-sdk.rekognition.RekognitionStopStreamProcessorRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionStopStreamProcessorRequest: rekognition.RekognitionStopStreamProcessorRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStopStreamProcessorRequest.property.name"></a>

- *Type:* `string`

---

### RekognitionStopStreamProcessorResponse <a name="aws-cdk-sdk.rekognition.RekognitionStopStreamProcessorResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionStopStreamProcessorResponse: rekognition.RekognitionStopStreamProcessorResponse = { ... }
```

### RekognitionStreamProcessor <a name="aws-cdk-sdk.rekognition.RekognitionStreamProcessor"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionStreamProcessor: rekognition.RekognitionStreamProcessor = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStreamProcessor.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStreamProcessor.property.status"></a>

- *Type:* `string`

---

### RekognitionStreamProcessorInput <a name="aws-cdk-sdk.rekognition.RekognitionStreamProcessorInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionStreamProcessorInput: rekognition.RekognitionStreamProcessorInput = { ... }
```

##### `kinesisVideoStream`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStreamProcessorInput.property.kinesisVideoStream"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionKinesisVideoStream`](#aws-cdk-sdk.rekognition.RekognitionKinesisVideoStream)

---

### RekognitionStreamProcessorOutput <a name="aws-cdk-sdk.rekognition.RekognitionStreamProcessorOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionStreamProcessorOutput: rekognition.RekognitionStreamProcessorOutput = { ... }
```

##### `kinesisDataStream`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStreamProcessorOutput.property.kinesisDataStream"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionKinesisDataStream`](#aws-cdk-sdk.rekognition.RekognitionKinesisDataStream)

---

### RekognitionStreamProcessorSettings <a name="aws-cdk-sdk.rekognition.RekognitionStreamProcessorSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionStreamProcessorSettings: rekognition.RekognitionStreamProcessorSettings = { ... }
```

##### `faceSearch`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionStreamProcessorSettings.property.faceSearch"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionFaceSearchSettings`](#aws-cdk-sdk.rekognition.RekognitionFaceSearchSettings)

---

### RekognitionSummary <a name="aws-cdk-sdk.rekognition.RekognitionSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionSummary: rekognition.RekognitionSummary = { ... }
```

##### `s3Object`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionSummary.property.s3Object"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionS3Object`](#aws-cdk-sdk.rekognition.RekognitionS3Object)

---

### RekognitionSunglasses <a name="aws-cdk-sdk.rekognition.RekognitionSunglasses"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionSunglasses: rekognition.RekognitionSunglasses = { ... }
```

##### `confidence`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionSunglasses.property.confidence"></a>

- *Type:* `number`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionSunglasses.property.value"></a>

- *Type:* `boolean`

---

### RekognitionTechnicalCueSegment <a name="aws-cdk-sdk.rekognition.RekognitionTechnicalCueSegment"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionTechnicalCueSegment: rekognition.RekognitionTechnicalCueSegment = { ... }
```

##### `confidence`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionTechnicalCueSegment.property.confidence"></a>

- *Type:* `number`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionTechnicalCueSegment.property.type"></a>

- *Type:* `string`

---

### RekognitionTestingData <a name="aws-cdk-sdk.rekognition.RekognitionTestingData"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionTestingData: rekognition.RekognitionTestingData = { ... }
```

##### `assets`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionTestingData.property.assets"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionAsset`](#aws-cdk-sdk.rekognition.RekognitionAsset)[]

---

##### `autoCreate`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionTestingData.property.autoCreate"></a>

- *Type:* `boolean`

---

### RekognitionTestingDataResult <a name="aws-cdk-sdk.rekognition.RekognitionTestingDataResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionTestingDataResult: rekognition.RekognitionTestingDataResult = { ... }
```

##### `input`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionTestingDataResult.property.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionTestingData`](#aws-cdk-sdk.rekognition.RekognitionTestingData)

---

##### `output`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionTestingDataResult.property.output"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionTestingData`](#aws-cdk-sdk.rekognition.RekognitionTestingData)

---

##### `validation`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionTestingDataResult.property.validation"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionValidationData`](#aws-cdk-sdk.rekognition.RekognitionValidationData)

---

### RekognitionTextDetection <a name="aws-cdk-sdk.rekognition.RekognitionTextDetection"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionTextDetection: rekognition.RekognitionTextDetection = { ... }
```

##### `confidence`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionTextDetection.property.confidence"></a>

- *Type:* `number`

---

##### `detectedText`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionTextDetection.property.detectedText"></a>

- *Type:* `string`

---

##### `geometry`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionTextDetection.property.geometry"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionGeometry`](#aws-cdk-sdk.rekognition.RekognitionGeometry)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionTextDetection.property.id"></a>

- *Type:* `number`

---

##### `parentId`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionTextDetection.property.parentId"></a>

- *Type:* `number`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionTextDetection.property.type"></a>

- *Type:* `string`

---

### RekognitionTextDetectionResult <a name="aws-cdk-sdk.rekognition.RekognitionTextDetectionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionTextDetectionResult: rekognition.RekognitionTextDetectionResult = { ... }
```

##### `textDetection`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionTextDetectionResult.property.textDetection"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionTextDetection`](#aws-cdk-sdk.rekognition.RekognitionTextDetection)

---

##### `timestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionTextDetectionResult.property.timestamp"></a>

- *Type:* `number`

---

### RekognitionTrainingData <a name="aws-cdk-sdk.rekognition.RekognitionTrainingData"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionTrainingData: rekognition.RekognitionTrainingData = { ... }
```

##### `assets`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionTrainingData.property.assets"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionAsset`](#aws-cdk-sdk.rekognition.RekognitionAsset)[]

---

### RekognitionTrainingDataResult <a name="aws-cdk-sdk.rekognition.RekognitionTrainingDataResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionTrainingDataResult: rekognition.RekognitionTrainingDataResult = { ... }
```

##### `input`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionTrainingDataResult.property.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionTrainingData`](#aws-cdk-sdk.rekognition.RekognitionTrainingData)

---

##### `output`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionTrainingDataResult.property.output"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionTrainingData`](#aws-cdk-sdk.rekognition.RekognitionTrainingData)

---

##### `validation`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionTrainingDataResult.property.validation"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionValidationData`](#aws-cdk-sdk.rekognition.RekognitionValidationData)

---

### RekognitionUnindexedFace <a name="aws-cdk-sdk.rekognition.RekognitionUnindexedFace"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionUnindexedFace: rekognition.RekognitionUnindexedFace = { ... }
```

##### `faceDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionUnindexedFace.property.faceDetail"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionFaceDetail`](#aws-cdk-sdk.rekognition.RekognitionFaceDetail)

---

##### `reasons`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionUnindexedFace.property.reasons"></a>

- *Type:* `string`[]

---

### RekognitionValidationData <a name="aws-cdk-sdk.rekognition.RekognitionValidationData"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionValidationData: rekognition.RekognitionValidationData = { ... }
```

##### `assets`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionValidationData.property.assets"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionAsset`](#aws-cdk-sdk.rekognition.RekognitionAsset)[]

---

### RekognitionVideo <a name="aws-cdk-sdk.rekognition.RekognitionVideo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionVideo: rekognition.RekognitionVideo = { ... }
```

##### `s3Object`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionVideo.property.s3Object"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionS3Object`](#aws-cdk-sdk.rekognition.RekognitionS3Object)

---

### RekognitionVideoMetadata <a name="aws-cdk-sdk.rekognition.RekognitionVideoMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

const rekognitionVideoMetadata: rekognition.RekognitionVideoMetadata = { ... }
```

##### `codec`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionVideoMetadata.property.codec"></a>

- *Type:* `string`

---

##### `durationMillis`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionVideoMetadata.property.durationMillis"></a>

- *Type:* `number`

---

##### `format`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionVideoMetadata.property.format"></a>

- *Type:* `string`

---

##### `frameHeight`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionVideoMetadata.property.frameHeight"></a>

- *Type:* `number`

---

##### `frameRate`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionVideoMetadata.property.frameRate"></a>

- *Type:* `number`

---

##### `frameWidth`<sup>Optional</sup> <a name="aws-cdk-sdk.rekognition.RekognitionVideoMetadata.property.frameWidth"></a>

- *Type:* `number`

---

## Classes <a name="Classes"></a>

### RekognitionResponsesCompareFaces <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCompareFaces"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCompareFaces.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesCompareFaces(__scope: Construct, __resources: string[], __input: RekognitionCompareFacesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCompareFaces.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCompareFaces.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCompareFaces.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionCompareFacesRequest`](#aws-cdk-sdk.rekognition.RekognitionCompareFacesRequest)

---



#### Properties <a name="Properties"></a>

##### `faceMatches`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCompareFaces.property.faceMatches"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionCompareFacesMatch`](#aws-cdk-sdk.rekognition.RekognitionCompareFacesMatch)[]

---

##### `sourceImageFace`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCompareFaces.property.sourceImageFace"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionResponsesCompareFacesSourceImageFace`](#aws-cdk-sdk.rekognition.RekognitionResponsesCompareFacesSourceImageFace)

---

##### `sourceImageOrientationCorrection`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCompareFaces.property.sourceImageOrientationCorrection"></a>

- *Type:* `string`

---

##### `targetImageOrientationCorrection`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCompareFaces.property.targetImageOrientationCorrection"></a>

- *Type:* `string`

---

##### `unmatchedFaces`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCompareFaces.property.unmatchedFaces"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionComparedFace`](#aws-cdk-sdk.rekognition.RekognitionComparedFace)[]

---


### RekognitionResponsesCompareFacesSourceImageFace <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCompareFacesSourceImageFace"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCompareFacesSourceImageFace.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesCompareFacesSourceImageFace(__scope: Construct, __resources: string[], __input: RekognitionCompareFacesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCompareFacesSourceImageFace.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCompareFacesSourceImageFace.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCompareFacesSourceImageFace.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionCompareFacesRequest`](#aws-cdk-sdk.rekognition.RekognitionCompareFacesRequest)

---



#### Properties <a name="Properties"></a>

##### `boundingBox`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCompareFacesSourceImageFace.property.boundingBox"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionResponsesCompareFacesSourceImageFaceBoundingBox`](#aws-cdk-sdk.rekognition.RekognitionResponsesCompareFacesSourceImageFaceBoundingBox)

---

##### `confidence`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCompareFacesSourceImageFace.property.confidence"></a>

- *Type:* `number`

---


### RekognitionResponsesCompareFacesSourceImageFaceBoundingBox <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCompareFacesSourceImageFaceBoundingBox"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCompareFacesSourceImageFaceBoundingBox.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesCompareFacesSourceImageFaceBoundingBox(__scope: Construct, __resources: string[], __input: RekognitionCompareFacesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCompareFacesSourceImageFaceBoundingBox.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCompareFacesSourceImageFaceBoundingBox.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCompareFacesSourceImageFaceBoundingBox.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionCompareFacesRequest`](#aws-cdk-sdk.rekognition.RekognitionCompareFacesRequest)

---



#### Properties <a name="Properties"></a>

##### `height`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCompareFacesSourceImageFaceBoundingBox.property.height"></a>

- *Type:* `number`

---

##### `left`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCompareFacesSourceImageFaceBoundingBox.property.left"></a>

- *Type:* `number`

---

##### `top`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCompareFacesSourceImageFaceBoundingBox.property.top"></a>

- *Type:* `number`

---

##### `width`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCompareFacesSourceImageFaceBoundingBox.property.width"></a>

- *Type:* `number`

---


### RekognitionResponsesCreateCollection <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCreateCollection"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCreateCollection.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesCreateCollection(__scope: Construct, __resources: string[], __input: RekognitionCreateCollectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCreateCollection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCreateCollection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCreateCollection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionCreateCollectionRequest`](#aws-cdk-sdk.rekognition.RekognitionCreateCollectionRequest)

---



#### Properties <a name="Properties"></a>

##### `collectionArn`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCreateCollection.property.collectionArn"></a>

- *Type:* `string`

---

##### `faceModelVersion`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCreateCollection.property.faceModelVersion"></a>

- *Type:* `string`

---

##### `statusCode`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCreateCollection.property.statusCode"></a>

- *Type:* `number`

---


### RekognitionResponsesCreateProject <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCreateProject"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCreateProject.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesCreateProject(__scope: Construct, __resources: string[], __input: RekognitionCreateProjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCreateProject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCreateProject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCreateProject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionCreateProjectRequest`](#aws-cdk-sdk.rekognition.RekognitionCreateProjectRequest)

---



#### Properties <a name="Properties"></a>

##### `projectArn`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCreateProject.property.projectArn"></a>

- *Type:* `string`

---


### RekognitionResponsesCreateProjectVersion <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCreateProjectVersion"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCreateProjectVersion.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesCreateProjectVersion(__scope: Construct, __resources: string[], __input: RekognitionCreateProjectVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCreateProjectVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCreateProjectVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCreateProjectVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionCreateProjectVersionRequest`](#aws-cdk-sdk.rekognition.RekognitionCreateProjectVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `projectVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCreateProjectVersion.property.projectVersionArn"></a>

- *Type:* `string`

---


### RekognitionResponsesCreateStreamProcessor <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCreateStreamProcessor"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCreateStreamProcessor.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesCreateStreamProcessor(__scope: Construct, __resources: string[], __input: RekognitionCreateStreamProcessorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCreateStreamProcessor.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCreateStreamProcessor.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCreateStreamProcessor.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionCreateStreamProcessorRequest`](#aws-cdk-sdk.rekognition.RekognitionCreateStreamProcessorRequest)

---



#### Properties <a name="Properties"></a>

##### `streamProcessorArn`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesCreateStreamProcessor.property.streamProcessorArn"></a>

- *Type:* `string`

---


### RekognitionResponsesDeleteCollection <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDeleteCollection"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDeleteCollection.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesDeleteCollection(__scope: Construct, __resources: string[], __input: RekognitionDeleteCollectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDeleteCollection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDeleteCollection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDeleteCollection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionDeleteCollectionRequest`](#aws-cdk-sdk.rekognition.RekognitionDeleteCollectionRequest)

---



#### Properties <a name="Properties"></a>

##### `statusCode`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDeleteCollection.property.statusCode"></a>

- *Type:* `number`

---


### RekognitionResponsesDeleteFaces <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDeleteFaces"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDeleteFaces.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesDeleteFaces(__scope: Construct, __resources: string[], __input: RekognitionDeleteFacesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDeleteFaces.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDeleteFaces.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDeleteFaces.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionDeleteFacesRequest`](#aws-cdk-sdk.rekognition.RekognitionDeleteFacesRequest)

---



#### Properties <a name="Properties"></a>

##### `deletedFaces`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDeleteFaces.property.deletedFaces"></a>

- *Type:* `string`[]

---


### RekognitionResponsesDeleteProject <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDeleteProject"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDeleteProject.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesDeleteProject(__scope: Construct, __resources: string[], __input: RekognitionDeleteProjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDeleteProject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDeleteProject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDeleteProject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionDeleteProjectRequest`](#aws-cdk-sdk.rekognition.RekognitionDeleteProjectRequest)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDeleteProject.property.status"></a>

- *Type:* `string`

---


### RekognitionResponsesDeleteProjectVersion <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDeleteProjectVersion"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDeleteProjectVersion.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesDeleteProjectVersion(__scope: Construct, __resources: string[], __input: RekognitionDeleteProjectVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDeleteProjectVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDeleteProjectVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDeleteProjectVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionDeleteProjectVersionRequest`](#aws-cdk-sdk.rekognition.RekognitionDeleteProjectVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDeleteProjectVersion.property.status"></a>

- *Type:* `string`

---


### RekognitionResponsesDescribeCollection <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeCollection"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeCollection.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesDescribeCollection(__scope: Construct, __resources: string[], __input: RekognitionDescribeCollectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeCollection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeCollection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeCollection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionDescribeCollectionRequest`](#aws-cdk-sdk.rekognition.RekognitionDescribeCollectionRequest)

---



#### Properties <a name="Properties"></a>

##### `collectionArn`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeCollection.property.collectionArn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeCollection.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `faceCount`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeCollection.property.faceCount"></a>

- *Type:* `number`

---

##### `faceModelVersion`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeCollection.property.faceModelVersion"></a>

- *Type:* `string`

---


### RekognitionResponsesDescribeProjects <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeProjects"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeProjects.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesDescribeProjects(__scope: Construct, __resources: string[], __input: RekognitionDescribeProjectsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeProjects.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeProjects.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeProjects.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionDescribeProjectsRequest`](#aws-cdk-sdk.rekognition.RekognitionDescribeProjectsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeProjects.property.nextToken"></a>

- *Type:* `string`

---

##### `projectDescriptions`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeProjects.property.projectDescriptions"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionProjectDescription`](#aws-cdk-sdk.rekognition.RekognitionProjectDescription)[]

---


### RekognitionResponsesDescribeProjectVersions <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeProjectVersions"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeProjectVersions.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesDescribeProjectVersions(__scope: Construct, __resources: string[], __input: RekognitionDescribeProjectVersionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeProjectVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeProjectVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeProjectVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionDescribeProjectVersionsRequest`](#aws-cdk-sdk.rekognition.RekognitionDescribeProjectVersionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeProjectVersions.property.nextToken"></a>

- *Type:* `string`

---

##### `projectVersionDescriptions`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeProjectVersions.property.projectVersionDescriptions"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionProjectVersionDescription`](#aws-cdk-sdk.rekognition.RekognitionProjectVersionDescription)[]

---


### RekognitionResponsesDescribeStreamProcessor <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessor"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessor.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesDescribeStreamProcessor(__scope: Construct, __resources: string[], __input: RekognitionDescribeStreamProcessorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessor.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessor.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessor.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionDescribeStreamProcessorRequest`](#aws-cdk-sdk.rekognition.RekognitionDescribeStreamProcessorRequest)

---



#### Properties <a name="Properties"></a>

##### `creationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessor.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessor.property.input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorInput`](#aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorInput)

---

##### `lastUpdateTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessor.property.lastUpdateTimestamp"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessor.property.name"></a>

- *Type:* `string`

---

##### `output`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessor.property.output"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorOutput`](#aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorOutput)

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessor.property.roleArn"></a>

- *Type:* `string`

---

##### `settings`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessor.property.settings"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorSettings`](#aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorSettings)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessor.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessor.property.statusMessage"></a>

- *Type:* `string`

---

##### `streamProcessorArn`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessor.property.streamProcessorArn"></a>

- *Type:* `string`

---


### RekognitionResponsesDescribeStreamProcessorInput <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorInput"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorInput.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesDescribeStreamProcessorInput(__scope: Construct, __resources: string[], __input: RekognitionDescribeStreamProcessorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorInput.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorInput.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorInput.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionDescribeStreamProcessorRequest`](#aws-cdk-sdk.rekognition.RekognitionDescribeStreamProcessorRequest)

---



#### Properties <a name="Properties"></a>

##### `kinesisVideoStream`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorInput.property.kinesisVideoStream"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorInputKinesisVideoStream`](#aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorInputKinesisVideoStream)

---


### RekognitionResponsesDescribeStreamProcessorInputKinesisVideoStream <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorInputKinesisVideoStream"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorInputKinesisVideoStream.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesDescribeStreamProcessorInputKinesisVideoStream(__scope: Construct, __resources: string[], __input: RekognitionDescribeStreamProcessorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorInputKinesisVideoStream.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorInputKinesisVideoStream.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorInputKinesisVideoStream.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionDescribeStreamProcessorRequest`](#aws-cdk-sdk.rekognition.RekognitionDescribeStreamProcessorRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorInputKinesisVideoStream.property.arn"></a>

- *Type:* `string`

---


### RekognitionResponsesDescribeStreamProcessorOutput <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorOutput"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorOutput.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesDescribeStreamProcessorOutput(__scope: Construct, __resources: string[], __input: RekognitionDescribeStreamProcessorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorOutput.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorOutput.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorOutput.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionDescribeStreamProcessorRequest`](#aws-cdk-sdk.rekognition.RekognitionDescribeStreamProcessorRequest)

---



#### Properties <a name="Properties"></a>

##### `kinesisDataStream`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorOutput.property.kinesisDataStream"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorOutputKinesisDataStream`](#aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorOutputKinesisDataStream)

---


### RekognitionResponsesDescribeStreamProcessorOutputKinesisDataStream <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorOutputKinesisDataStream"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorOutputKinesisDataStream.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesDescribeStreamProcessorOutputKinesisDataStream(__scope: Construct, __resources: string[], __input: RekognitionDescribeStreamProcessorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorOutputKinesisDataStream.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorOutputKinesisDataStream.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorOutputKinesisDataStream.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionDescribeStreamProcessorRequest`](#aws-cdk-sdk.rekognition.RekognitionDescribeStreamProcessorRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorOutputKinesisDataStream.property.arn"></a>

- *Type:* `string`

---


### RekognitionResponsesDescribeStreamProcessorSettings <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorSettings"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorSettings.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesDescribeStreamProcessorSettings(__scope: Construct, __resources: string[], __input: RekognitionDescribeStreamProcessorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionDescribeStreamProcessorRequest`](#aws-cdk-sdk.rekognition.RekognitionDescribeStreamProcessorRequest)

---



#### Properties <a name="Properties"></a>

##### `faceSearch`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorSettings.property.faceSearch"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorSettingsFaceSearch`](#aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorSettingsFaceSearch)

---


### RekognitionResponsesDescribeStreamProcessorSettingsFaceSearch <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorSettingsFaceSearch"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorSettingsFaceSearch.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesDescribeStreamProcessorSettingsFaceSearch(__scope: Construct, __resources: string[], __input: RekognitionDescribeStreamProcessorRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorSettingsFaceSearch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorSettingsFaceSearch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorSettingsFaceSearch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionDescribeStreamProcessorRequest`](#aws-cdk-sdk.rekognition.RekognitionDescribeStreamProcessorRequest)

---



#### Properties <a name="Properties"></a>

##### `collectionId`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorSettingsFaceSearch.property.collectionId"></a>

- *Type:* `string`

---

##### `faceMatchThreshold`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDescribeStreamProcessorSettingsFaceSearch.property.faceMatchThreshold"></a>

- *Type:* `number`

---


### RekognitionResponsesDetectCustomLabels <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectCustomLabels"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectCustomLabels.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesDetectCustomLabels(__scope: Construct, __resources: string[], __input: RekognitionDetectCustomLabelsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectCustomLabels.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectCustomLabels.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectCustomLabels.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionDetectCustomLabelsRequest`](#aws-cdk-sdk.rekognition.RekognitionDetectCustomLabelsRequest)

---



#### Properties <a name="Properties"></a>

##### `customLabels`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectCustomLabels.property.customLabels"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionCustomLabel`](#aws-cdk-sdk.rekognition.RekognitionCustomLabel)[]

---


### RekognitionResponsesDetectFaces <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectFaces"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectFaces.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesDetectFaces(__scope: Construct, __resources: string[], __input: RekognitionDetectFacesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectFaces.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectFaces.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectFaces.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionDetectFacesRequest`](#aws-cdk-sdk.rekognition.RekognitionDetectFacesRequest)

---



#### Properties <a name="Properties"></a>

##### `faceDetails`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectFaces.property.faceDetails"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionFaceDetail`](#aws-cdk-sdk.rekognition.RekognitionFaceDetail)[]

---

##### `orientationCorrection`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectFaces.property.orientationCorrection"></a>

- *Type:* `string`

---


### RekognitionResponsesDetectLabels <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectLabels"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectLabels.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesDetectLabels(__scope: Construct, __resources: string[], __input: RekognitionDetectLabelsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectLabels.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectLabels.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectLabels.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionDetectLabelsRequest`](#aws-cdk-sdk.rekognition.RekognitionDetectLabelsRequest)

---



#### Properties <a name="Properties"></a>

##### `labelModelVersion`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectLabels.property.labelModelVersion"></a>

- *Type:* `string`

---

##### `labels`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectLabels.property.labels"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionLabel`](#aws-cdk-sdk.rekognition.RekognitionLabel)[]

---

##### `orientationCorrection`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectLabels.property.orientationCorrection"></a>

- *Type:* `string`

---


### RekognitionResponsesDetectModerationLabels <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectModerationLabels"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectModerationLabels.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesDetectModerationLabels(__scope: Construct, __resources: string[], __input: RekognitionDetectModerationLabelsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectModerationLabels.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectModerationLabels.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectModerationLabels.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionDetectModerationLabelsRequest`](#aws-cdk-sdk.rekognition.RekognitionDetectModerationLabelsRequest)

---



#### Properties <a name="Properties"></a>

##### `humanLoopActivationOutput`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectModerationLabels.property.humanLoopActivationOutput"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionResponsesDetectModerationLabelsHumanLoopActivationOutput`](#aws-cdk-sdk.rekognition.RekognitionResponsesDetectModerationLabelsHumanLoopActivationOutput)

---

##### `moderationLabels`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectModerationLabels.property.moderationLabels"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionModerationLabel`](#aws-cdk-sdk.rekognition.RekognitionModerationLabel)[]

---

##### `moderationModelVersion`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectModerationLabels.property.moderationModelVersion"></a>

- *Type:* `string`

---


### RekognitionResponsesDetectModerationLabelsHumanLoopActivationOutput <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectModerationLabelsHumanLoopActivationOutput"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectModerationLabelsHumanLoopActivationOutput.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesDetectModerationLabelsHumanLoopActivationOutput(__scope: Construct, __resources: string[], __input: RekognitionDetectModerationLabelsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectModerationLabelsHumanLoopActivationOutput.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectModerationLabelsHumanLoopActivationOutput.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectModerationLabelsHumanLoopActivationOutput.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionDetectModerationLabelsRequest`](#aws-cdk-sdk.rekognition.RekognitionDetectModerationLabelsRequest)

---



#### Properties <a name="Properties"></a>

##### `humanLoopActivationConditionsEvaluationResults`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectModerationLabelsHumanLoopActivationOutput.property.humanLoopActivationConditionsEvaluationResults"></a>

- *Type:* `string`

---

##### `humanLoopActivationReasons`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectModerationLabelsHumanLoopActivationOutput.property.humanLoopActivationReasons"></a>

- *Type:* `string`[]

---

##### `humanLoopArn`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectModerationLabelsHumanLoopActivationOutput.property.humanLoopArn"></a>

- *Type:* `string`

---


### RekognitionResponsesDetectProtectiveEquipment <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectProtectiveEquipment"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectProtectiveEquipment.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesDetectProtectiveEquipment(__scope: Construct, __resources: string[], __input: RekognitionDetectProtectiveEquipmentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectProtectiveEquipment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectProtectiveEquipment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectProtectiveEquipment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionDetectProtectiveEquipmentRequest`](#aws-cdk-sdk.rekognition.RekognitionDetectProtectiveEquipmentRequest)

---



#### Properties <a name="Properties"></a>

##### `persons`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectProtectiveEquipment.property.persons"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionProtectiveEquipmentPerson`](#aws-cdk-sdk.rekognition.RekognitionProtectiveEquipmentPerson)[]

---

##### `protectiveEquipmentModelVersion`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectProtectiveEquipment.property.protectiveEquipmentModelVersion"></a>

- *Type:* `string`

---

##### `summary`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectProtectiveEquipment.property.summary"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionResponsesDetectProtectiveEquipmentSummary`](#aws-cdk-sdk.rekognition.RekognitionResponsesDetectProtectiveEquipmentSummary)

---


### RekognitionResponsesDetectProtectiveEquipmentSummary <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectProtectiveEquipmentSummary"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectProtectiveEquipmentSummary.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesDetectProtectiveEquipmentSummary(__scope: Construct, __resources: string[], __input: RekognitionDetectProtectiveEquipmentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectProtectiveEquipmentSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectProtectiveEquipmentSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectProtectiveEquipmentSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionDetectProtectiveEquipmentRequest`](#aws-cdk-sdk.rekognition.RekognitionDetectProtectiveEquipmentRequest)

---



#### Properties <a name="Properties"></a>

##### `personsIndeterminate`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectProtectiveEquipmentSummary.property.personsIndeterminate"></a>

- *Type:* `number`[]

---

##### `personsWithoutRequiredEquipment`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectProtectiveEquipmentSummary.property.personsWithoutRequiredEquipment"></a>

- *Type:* `number`[]

---

##### `personsWithRequiredEquipment`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectProtectiveEquipmentSummary.property.personsWithRequiredEquipment"></a>

- *Type:* `number`[]

---


### RekognitionResponsesDetectText <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectText"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectText.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesDetectText(__scope: Construct, __resources: string[], __input: RekognitionDetectTextRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectText.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectText.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectText.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionDetectTextRequest`](#aws-cdk-sdk.rekognition.RekognitionDetectTextRequest)

---



#### Properties <a name="Properties"></a>

##### `textDetections`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectText.property.textDetections"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionTextDetection`](#aws-cdk-sdk.rekognition.RekognitionTextDetection)[]

---

##### `textModelVersion`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesDetectText.property.textModelVersion"></a>

- *Type:* `string`

---


### RekognitionResponsesFetchCelebrityInfo <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchCelebrityInfo"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchCelebrityInfo.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesFetchCelebrityInfo(__scope: Construct, __resources: string[], __input: RekognitionGetCelebrityInfoRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchCelebrityInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchCelebrityInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchCelebrityInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionGetCelebrityInfoRequest`](#aws-cdk-sdk.rekognition.RekognitionGetCelebrityInfoRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchCelebrityInfo.property.name"></a>

- *Type:* `string`

---

##### `urls`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchCelebrityInfo.property.urls"></a>

- *Type:* `string`[]

---


### RekognitionResponsesFetchCelebrityRecognition <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchCelebrityRecognition"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchCelebrityRecognition.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesFetchCelebrityRecognition(__scope: Construct, __resources: string[], __input: RekognitionGetCelebrityRecognitionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchCelebrityRecognition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchCelebrityRecognition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchCelebrityRecognition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionGetCelebrityRecognitionRequest`](#aws-cdk-sdk.rekognition.RekognitionGetCelebrityRecognitionRequest)

---



#### Properties <a name="Properties"></a>

##### `celebrities`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchCelebrityRecognition.property.celebrities"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionCelebrityRecognition`](#aws-cdk-sdk.rekognition.RekognitionCelebrityRecognition)[]

---

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchCelebrityRecognition.property.jobStatus"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchCelebrityRecognition.property.nextToken"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchCelebrityRecognition.property.statusMessage"></a>

- *Type:* `string`

---

##### `videoMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchCelebrityRecognition.property.videoMetadata"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionResponsesFetchCelebrityRecognitionVideoMetadata`](#aws-cdk-sdk.rekognition.RekognitionResponsesFetchCelebrityRecognitionVideoMetadata)

---


### RekognitionResponsesFetchCelebrityRecognitionVideoMetadata <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchCelebrityRecognitionVideoMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchCelebrityRecognitionVideoMetadata.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesFetchCelebrityRecognitionVideoMetadata(__scope: Construct, __resources: string[], __input: RekognitionGetCelebrityRecognitionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchCelebrityRecognitionVideoMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchCelebrityRecognitionVideoMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchCelebrityRecognitionVideoMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionGetCelebrityRecognitionRequest`](#aws-cdk-sdk.rekognition.RekognitionGetCelebrityRecognitionRequest)

---



#### Properties <a name="Properties"></a>

##### `codec`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchCelebrityRecognitionVideoMetadata.property.codec"></a>

- *Type:* `string`

---

##### `durationMillis`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchCelebrityRecognitionVideoMetadata.property.durationMillis"></a>

- *Type:* `number`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchCelebrityRecognitionVideoMetadata.property.format"></a>

- *Type:* `string`

---

##### `frameHeight`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchCelebrityRecognitionVideoMetadata.property.frameHeight"></a>

- *Type:* `number`

---

##### `frameRate`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchCelebrityRecognitionVideoMetadata.property.frameRate"></a>

- *Type:* `number`

---

##### `frameWidth`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchCelebrityRecognitionVideoMetadata.property.frameWidth"></a>

- *Type:* `number`

---


### RekognitionResponsesFetchContentModeration <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchContentModeration"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchContentModeration.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesFetchContentModeration(__scope: Construct, __resources: string[], __input: RekognitionGetContentModerationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchContentModeration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchContentModeration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchContentModeration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionGetContentModerationRequest`](#aws-cdk-sdk.rekognition.RekognitionGetContentModerationRequest)

---



#### Properties <a name="Properties"></a>

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchContentModeration.property.jobStatus"></a>

- *Type:* `string`

---

##### `moderationLabels`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchContentModeration.property.moderationLabels"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionContentModerationDetection`](#aws-cdk-sdk.rekognition.RekognitionContentModerationDetection)[]

---

##### `moderationModelVersion`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchContentModeration.property.moderationModelVersion"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchContentModeration.property.nextToken"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchContentModeration.property.statusMessage"></a>

- *Type:* `string`

---

##### `videoMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchContentModeration.property.videoMetadata"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionResponsesFetchContentModerationVideoMetadata`](#aws-cdk-sdk.rekognition.RekognitionResponsesFetchContentModerationVideoMetadata)

---


### RekognitionResponsesFetchContentModerationVideoMetadata <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchContentModerationVideoMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchContentModerationVideoMetadata.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesFetchContentModerationVideoMetadata(__scope: Construct, __resources: string[], __input: RekognitionGetContentModerationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchContentModerationVideoMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchContentModerationVideoMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchContentModerationVideoMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionGetContentModerationRequest`](#aws-cdk-sdk.rekognition.RekognitionGetContentModerationRequest)

---



#### Properties <a name="Properties"></a>

##### `codec`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchContentModerationVideoMetadata.property.codec"></a>

- *Type:* `string`

---

##### `durationMillis`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchContentModerationVideoMetadata.property.durationMillis"></a>

- *Type:* `number`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchContentModerationVideoMetadata.property.format"></a>

- *Type:* `string`

---

##### `frameHeight`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchContentModerationVideoMetadata.property.frameHeight"></a>

- *Type:* `number`

---

##### `frameRate`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchContentModerationVideoMetadata.property.frameRate"></a>

- *Type:* `number`

---

##### `frameWidth`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchContentModerationVideoMetadata.property.frameWidth"></a>

- *Type:* `number`

---


### RekognitionResponsesFetchFaceDetection <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchFaceDetection"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchFaceDetection.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesFetchFaceDetection(__scope: Construct, __resources: string[], __input: RekognitionGetFaceDetectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchFaceDetection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchFaceDetection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchFaceDetection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionGetFaceDetectionRequest`](#aws-cdk-sdk.rekognition.RekognitionGetFaceDetectionRequest)

---



#### Properties <a name="Properties"></a>

##### `faces`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchFaceDetection.property.faces"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionFaceDetection`](#aws-cdk-sdk.rekognition.RekognitionFaceDetection)[]

---

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchFaceDetection.property.jobStatus"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchFaceDetection.property.nextToken"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchFaceDetection.property.statusMessage"></a>

- *Type:* `string`

---

##### `videoMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchFaceDetection.property.videoMetadata"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionResponsesFetchFaceDetectionVideoMetadata`](#aws-cdk-sdk.rekognition.RekognitionResponsesFetchFaceDetectionVideoMetadata)

---


### RekognitionResponsesFetchFaceDetectionVideoMetadata <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchFaceDetectionVideoMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchFaceDetectionVideoMetadata.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesFetchFaceDetectionVideoMetadata(__scope: Construct, __resources: string[], __input: RekognitionGetFaceDetectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchFaceDetectionVideoMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchFaceDetectionVideoMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchFaceDetectionVideoMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionGetFaceDetectionRequest`](#aws-cdk-sdk.rekognition.RekognitionGetFaceDetectionRequest)

---



#### Properties <a name="Properties"></a>

##### `codec`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchFaceDetectionVideoMetadata.property.codec"></a>

- *Type:* `string`

---

##### `durationMillis`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchFaceDetectionVideoMetadata.property.durationMillis"></a>

- *Type:* `number`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchFaceDetectionVideoMetadata.property.format"></a>

- *Type:* `string`

---

##### `frameHeight`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchFaceDetectionVideoMetadata.property.frameHeight"></a>

- *Type:* `number`

---

##### `frameRate`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchFaceDetectionVideoMetadata.property.frameRate"></a>

- *Type:* `number`

---

##### `frameWidth`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchFaceDetectionVideoMetadata.property.frameWidth"></a>

- *Type:* `number`

---


### RekognitionResponsesFetchFaceSearch <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchFaceSearch"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchFaceSearch.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesFetchFaceSearch(__scope: Construct, __resources: string[], __input: RekognitionGetFaceSearchRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchFaceSearch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchFaceSearch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchFaceSearch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionGetFaceSearchRequest`](#aws-cdk-sdk.rekognition.RekognitionGetFaceSearchRequest)

---



#### Properties <a name="Properties"></a>

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchFaceSearch.property.jobStatus"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchFaceSearch.property.nextToken"></a>

- *Type:* `string`

---

##### `persons`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchFaceSearch.property.persons"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionPersonMatch`](#aws-cdk-sdk.rekognition.RekognitionPersonMatch)[]

---

##### `statusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchFaceSearch.property.statusMessage"></a>

- *Type:* `string`

---

##### `videoMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchFaceSearch.property.videoMetadata"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionResponsesFetchFaceSearchVideoMetadata`](#aws-cdk-sdk.rekognition.RekognitionResponsesFetchFaceSearchVideoMetadata)

---


### RekognitionResponsesFetchFaceSearchVideoMetadata <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchFaceSearchVideoMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchFaceSearchVideoMetadata.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesFetchFaceSearchVideoMetadata(__scope: Construct, __resources: string[], __input: RekognitionGetFaceSearchRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchFaceSearchVideoMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchFaceSearchVideoMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchFaceSearchVideoMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionGetFaceSearchRequest`](#aws-cdk-sdk.rekognition.RekognitionGetFaceSearchRequest)

---



#### Properties <a name="Properties"></a>

##### `codec`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchFaceSearchVideoMetadata.property.codec"></a>

- *Type:* `string`

---

##### `durationMillis`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchFaceSearchVideoMetadata.property.durationMillis"></a>

- *Type:* `number`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchFaceSearchVideoMetadata.property.format"></a>

- *Type:* `string`

---

##### `frameHeight`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchFaceSearchVideoMetadata.property.frameHeight"></a>

- *Type:* `number`

---

##### `frameRate`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchFaceSearchVideoMetadata.property.frameRate"></a>

- *Type:* `number`

---

##### `frameWidth`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchFaceSearchVideoMetadata.property.frameWidth"></a>

- *Type:* `number`

---


### RekognitionResponsesFetchLabelDetection <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchLabelDetection"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchLabelDetection.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesFetchLabelDetection(__scope: Construct, __resources: string[], __input: RekognitionGetLabelDetectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchLabelDetection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchLabelDetection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchLabelDetection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionGetLabelDetectionRequest`](#aws-cdk-sdk.rekognition.RekognitionGetLabelDetectionRequest)

---



#### Properties <a name="Properties"></a>

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchLabelDetection.property.jobStatus"></a>

- *Type:* `string`

---

##### `labelModelVersion`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchLabelDetection.property.labelModelVersion"></a>

- *Type:* `string`

---

##### `labels`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchLabelDetection.property.labels"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionLabelDetection`](#aws-cdk-sdk.rekognition.RekognitionLabelDetection)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchLabelDetection.property.nextToken"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchLabelDetection.property.statusMessage"></a>

- *Type:* `string`

---

##### `videoMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchLabelDetection.property.videoMetadata"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionResponsesFetchLabelDetectionVideoMetadata`](#aws-cdk-sdk.rekognition.RekognitionResponsesFetchLabelDetectionVideoMetadata)

---


### RekognitionResponsesFetchLabelDetectionVideoMetadata <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchLabelDetectionVideoMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchLabelDetectionVideoMetadata.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesFetchLabelDetectionVideoMetadata(__scope: Construct, __resources: string[], __input: RekognitionGetLabelDetectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchLabelDetectionVideoMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchLabelDetectionVideoMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchLabelDetectionVideoMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionGetLabelDetectionRequest`](#aws-cdk-sdk.rekognition.RekognitionGetLabelDetectionRequest)

---



#### Properties <a name="Properties"></a>

##### `codec`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchLabelDetectionVideoMetadata.property.codec"></a>

- *Type:* `string`

---

##### `durationMillis`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchLabelDetectionVideoMetadata.property.durationMillis"></a>

- *Type:* `number`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchLabelDetectionVideoMetadata.property.format"></a>

- *Type:* `string`

---

##### `frameHeight`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchLabelDetectionVideoMetadata.property.frameHeight"></a>

- *Type:* `number`

---

##### `frameRate`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchLabelDetectionVideoMetadata.property.frameRate"></a>

- *Type:* `number`

---

##### `frameWidth`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchLabelDetectionVideoMetadata.property.frameWidth"></a>

- *Type:* `number`

---


### RekognitionResponsesFetchPersonTracking <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchPersonTracking"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchPersonTracking.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesFetchPersonTracking(__scope: Construct, __resources: string[], __input: RekognitionGetPersonTrackingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchPersonTracking.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchPersonTracking.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchPersonTracking.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionGetPersonTrackingRequest`](#aws-cdk-sdk.rekognition.RekognitionGetPersonTrackingRequest)

---



#### Properties <a name="Properties"></a>

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchPersonTracking.property.jobStatus"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchPersonTracking.property.nextToken"></a>

- *Type:* `string`

---

##### `persons`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchPersonTracking.property.persons"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionPersonDetection`](#aws-cdk-sdk.rekognition.RekognitionPersonDetection)[]

---

##### `statusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchPersonTracking.property.statusMessage"></a>

- *Type:* `string`

---

##### `videoMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchPersonTracking.property.videoMetadata"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionResponsesFetchPersonTrackingVideoMetadata`](#aws-cdk-sdk.rekognition.RekognitionResponsesFetchPersonTrackingVideoMetadata)

---


### RekognitionResponsesFetchPersonTrackingVideoMetadata <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchPersonTrackingVideoMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchPersonTrackingVideoMetadata.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesFetchPersonTrackingVideoMetadata(__scope: Construct, __resources: string[], __input: RekognitionGetPersonTrackingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchPersonTrackingVideoMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchPersonTrackingVideoMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchPersonTrackingVideoMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionGetPersonTrackingRequest`](#aws-cdk-sdk.rekognition.RekognitionGetPersonTrackingRequest)

---



#### Properties <a name="Properties"></a>

##### `codec`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchPersonTrackingVideoMetadata.property.codec"></a>

- *Type:* `string`

---

##### `durationMillis`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchPersonTrackingVideoMetadata.property.durationMillis"></a>

- *Type:* `number`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchPersonTrackingVideoMetadata.property.format"></a>

- *Type:* `string`

---

##### `frameHeight`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchPersonTrackingVideoMetadata.property.frameHeight"></a>

- *Type:* `number`

---

##### `frameRate`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchPersonTrackingVideoMetadata.property.frameRate"></a>

- *Type:* `number`

---

##### `frameWidth`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchPersonTrackingVideoMetadata.property.frameWidth"></a>

- *Type:* `number`

---


### RekognitionResponsesFetchSegmentDetection <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchSegmentDetection"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchSegmentDetection.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesFetchSegmentDetection(__scope: Construct, __resources: string[], __input: RekognitionGetSegmentDetectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchSegmentDetection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchSegmentDetection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchSegmentDetection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionGetSegmentDetectionRequest`](#aws-cdk-sdk.rekognition.RekognitionGetSegmentDetectionRequest)

---



#### Properties <a name="Properties"></a>

##### `audioMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchSegmentDetection.property.audioMetadata"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionAudioMetadata`](#aws-cdk-sdk.rekognition.RekognitionAudioMetadata)[]

---

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchSegmentDetection.property.jobStatus"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchSegmentDetection.property.nextToken"></a>

- *Type:* `string`

---

##### `segments`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchSegmentDetection.property.segments"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionSegmentDetection`](#aws-cdk-sdk.rekognition.RekognitionSegmentDetection)[]

---

##### `selectedSegmentTypes`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchSegmentDetection.property.selectedSegmentTypes"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionSegmentTypeInfo`](#aws-cdk-sdk.rekognition.RekognitionSegmentTypeInfo)[]

---

##### `statusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchSegmentDetection.property.statusMessage"></a>

- *Type:* `string`

---

##### `videoMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchSegmentDetection.property.videoMetadata"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionVideoMetadata`](#aws-cdk-sdk.rekognition.RekognitionVideoMetadata)[]

---


### RekognitionResponsesFetchTextDetection <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchTextDetection"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchTextDetection.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesFetchTextDetection(__scope: Construct, __resources: string[], __input: RekognitionGetTextDetectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchTextDetection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchTextDetection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchTextDetection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionGetTextDetectionRequest`](#aws-cdk-sdk.rekognition.RekognitionGetTextDetectionRequest)

---



#### Properties <a name="Properties"></a>

##### `jobStatus`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchTextDetection.property.jobStatus"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchTextDetection.property.nextToken"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchTextDetection.property.statusMessage"></a>

- *Type:* `string`

---

##### `textDetections`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchTextDetection.property.textDetections"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionTextDetectionResult`](#aws-cdk-sdk.rekognition.RekognitionTextDetectionResult)[]

---

##### `textModelVersion`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchTextDetection.property.textModelVersion"></a>

- *Type:* `string`

---

##### `videoMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchTextDetection.property.videoMetadata"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionResponsesFetchTextDetectionVideoMetadata`](#aws-cdk-sdk.rekognition.RekognitionResponsesFetchTextDetectionVideoMetadata)

---


### RekognitionResponsesFetchTextDetectionVideoMetadata <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchTextDetectionVideoMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchTextDetectionVideoMetadata.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesFetchTextDetectionVideoMetadata(__scope: Construct, __resources: string[], __input: RekognitionGetTextDetectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchTextDetectionVideoMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchTextDetectionVideoMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchTextDetectionVideoMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionGetTextDetectionRequest`](#aws-cdk-sdk.rekognition.RekognitionGetTextDetectionRequest)

---



#### Properties <a name="Properties"></a>

##### `codec`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchTextDetectionVideoMetadata.property.codec"></a>

- *Type:* `string`

---

##### `durationMillis`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchTextDetectionVideoMetadata.property.durationMillis"></a>

- *Type:* `number`

---

##### `format`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchTextDetectionVideoMetadata.property.format"></a>

- *Type:* `string`

---

##### `frameHeight`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchTextDetectionVideoMetadata.property.frameHeight"></a>

- *Type:* `number`

---

##### `frameRate`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchTextDetectionVideoMetadata.property.frameRate"></a>

- *Type:* `number`

---

##### `frameWidth`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesFetchTextDetectionVideoMetadata.property.frameWidth"></a>

- *Type:* `number`

---


### RekognitionResponsesIndexFaces <a name="aws-cdk-sdk.rekognition.RekognitionResponsesIndexFaces"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesIndexFaces.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesIndexFaces(__scope: Construct, __resources: string[], __input: RekognitionIndexFacesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesIndexFaces.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesIndexFaces.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesIndexFaces.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionIndexFacesRequest`](#aws-cdk-sdk.rekognition.RekognitionIndexFacesRequest)

---



#### Properties <a name="Properties"></a>

##### `faceModelVersion`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesIndexFaces.property.faceModelVersion"></a>

- *Type:* `string`

---

##### `faceRecords`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesIndexFaces.property.faceRecords"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionFaceRecord`](#aws-cdk-sdk.rekognition.RekognitionFaceRecord)[]

---

##### `orientationCorrection`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesIndexFaces.property.orientationCorrection"></a>

- *Type:* `string`

---

##### `unindexedFaces`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesIndexFaces.property.unindexedFaces"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionUnindexedFace`](#aws-cdk-sdk.rekognition.RekognitionUnindexedFace)[]

---


### RekognitionResponsesListCollections <a name="aws-cdk-sdk.rekognition.RekognitionResponsesListCollections"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesListCollections.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesListCollections(__scope: Construct, __resources: string[], __input: RekognitionListCollectionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesListCollections.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesListCollections.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesListCollections.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionListCollectionsRequest`](#aws-cdk-sdk.rekognition.RekognitionListCollectionsRequest)

---



#### Properties <a name="Properties"></a>

##### `collectionIds`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesListCollections.property.collectionIds"></a>

- *Type:* `string`[]

---

##### `faceModelVersions`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesListCollections.property.faceModelVersions"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesListCollections.property.nextToken"></a>

- *Type:* `string`

---


### RekognitionResponsesListFaces <a name="aws-cdk-sdk.rekognition.RekognitionResponsesListFaces"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesListFaces.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesListFaces(__scope: Construct, __resources: string[], __input: RekognitionListFacesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesListFaces.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesListFaces.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesListFaces.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionListFacesRequest`](#aws-cdk-sdk.rekognition.RekognitionListFacesRequest)

---



#### Properties <a name="Properties"></a>

##### `faceModelVersion`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesListFaces.property.faceModelVersion"></a>

- *Type:* `string`

---

##### `faces`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesListFaces.property.faces"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionFace`](#aws-cdk-sdk.rekognition.RekognitionFace)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesListFaces.property.nextToken"></a>

- *Type:* `string`

---


### RekognitionResponsesListStreamProcessors <a name="aws-cdk-sdk.rekognition.RekognitionResponsesListStreamProcessors"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesListStreamProcessors.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesListStreamProcessors(__scope: Construct, __resources: string[], __input: RekognitionListStreamProcessorsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesListStreamProcessors.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesListStreamProcessors.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesListStreamProcessors.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionListStreamProcessorsRequest`](#aws-cdk-sdk.rekognition.RekognitionListStreamProcessorsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesListStreamProcessors.property.nextToken"></a>

- *Type:* `string`

---

##### `streamProcessors`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesListStreamProcessors.property.streamProcessors"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionStreamProcessor`](#aws-cdk-sdk.rekognition.RekognitionStreamProcessor)[]

---


### RekognitionResponsesRecognizeCelebrities <a name="aws-cdk-sdk.rekognition.RekognitionResponsesRecognizeCelebrities"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesRecognizeCelebrities.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesRecognizeCelebrities(__scope: Construct, __resources: string[], __input: RekognitionRecognizeCelebritiesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesRecognizeCelebrities.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesRecognizeCelebrities.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesRecognizeCelebrities.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionRecognizeCelebritiesRequest`](#aws-cdk-sdk.rekognition.RekognitionRecognizeCelebritiesRequest)

---



#### Properties <a name="Properties"></a>

##### `celebrityFaces`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesRecognizeCelebrities.property.celebrityFaces"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionCelebrity`](#aws-cdk-sdk.rekognition.RekognitionCelebrity)[]

---

##### `orientationCorrection`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesRecognizeCelebrities.property.orientationCorrection"></a>

- *Type:* `string`

---

##### `unrecognizedFaces`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesRecognizeCelebrities.property.unrecognizedFaces"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionComparedFace`](#aws-cdk-sdk.rekognition.RekognitionComparedFace)[]

---


### RekognitionResponsesSearchFaces <a name="aws-cdk-sdk.rekognition.RekognitionResponsesSearchFaces"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesSearchFaces.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesSearchFaces(__scope: Construct, __resources: string[], __input: RekognitionSearchFacesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesSearchFaces.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesSearchFaces.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesSearchFaces.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionSearchFacesRequest`](#aws-cdk-sdk.rekognition.RekognitionSearchFacesRequest)

---



#### Properties <a name="Properties"></a>

##### `faceMatches`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesSearchFaces.property.faceMatches"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionFaceMatch`](#aws-cdk-sdk.rekognition.RekognitionFaceMatch)[]

---

##### `faceModelVersion`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesSearchFaces.property.faceModelVersion"></a>

- *Type:* `string`

---

##### `searchedFaceId`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesSearchFaces.property.searchedFaceId"></a>

- *Type:* `string`

---


### RekognitionResponsesSearchFacesByImage <a name="aws-cdk-sdk.rekognition.RekognitionResponsesSearchFacesByImage"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesSearchFacesByImage.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesSearchFacesByImage(__scope: Construct, __resources: string[], __input: RekognitionSearchFacesByImageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesSearchFacesByImage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesSearchFacesByImage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesSearchFacesByImage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionSearchFacesByImageRequest`](#aws-cdk-sdk.rekognition.RekognitionSearchFacesByImageRequest)

---



#### Properties <a name="Properties"></a>

##### `faceMatches`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesSearchFacesByImage.property.faceMatches"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionFaceMatch`](#aws-cdk-sdk.rekognition.RekognitionFaceMatch)[]

---

##### `faceModelVersion`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesSearchFacesByImage.property.faceModelVersion"></a>

- *Type:* `string`

---

##### `searchedFaceBoundingBox`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesSearchFacesByImage.property.searchedFaceBoundingBox"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionResponsesSearchFacesByImageSearchedFaceBoundingBox`](#aws-cdk-sdk.rekognition.RekognitionResponsesSearchFacesByImageSearchedFaceBoundingBox)

---

##### `searchedFaceConfidence`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesSearchFacesByImage.property.searchedFaceConfidence"></a>

- *Type:* `number`

---


### RekognitionResponsesSearchFacesByImageSearchedFaceBoundingBox <a name="aws-cdk-sdk.rekognition.RekognitionResponsesSearchFacesByImageSearchedFaceBoundingBox"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesSearchFacesByImageSearchedFaceBoundingBox.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesSearchFacesByImageSearchedFaceBoundingBox(__scope: Construct, __resources: string[], __input: RekognitionSearchFacesByImageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesSearchFacesByImageSearchedFaceBoundingBox.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesSearchFacesByImageSearchedFaceBoundingBox.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesSearchFacesByImageSearchedFaceBoundingBox.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionSearchFacesByImageRequest`](#aws-cdk-sdk.rekognition.RekognitionSearchFacesByImageRequest)

---



#### Properties <a name="Properties"></a>

##### `height`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesSearchFacesByImageSearchedFaceBoundingBox.property.height"></a>

- *Type:* `number`

---

##### `left`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesSearchFacesByImageSearchedFaceBoundingBox.property.left"></a>

- *Type:* `number`

---

##### `top`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesSearchFacesByImageSearchedFaceBoundingBox.property.top"></a>

- *Type:* `number`

---

##### `width`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesSearchFacesByImageSearchedFaceBoundingBox.property.width"></a>

- *Type:* `number`

---


### RekognitionResponsesStartCelebrityRecognition <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartCelebrityRecognition"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartCelebrityRecognition.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesStartCelebrityRecognition(__scope: Construct, __resources: string[], __input: RekognitionStartCelebrityRecognitionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartCelebrityRecognition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartCelebrityRecognition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartCelebrityRecognition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionStartCelebrityRecognitionRequest`](#aws-cdk-sdk.rekognition.RekognitionStartCelebrityRecognitionRequest)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartCelebrityRecognition.property.jobId"></a>

- *Type:* `string`

---


### RekognitionResponsesStartContentModeration <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartContentModeration"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartContentModeration.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesStartContentModeration(__scope: Construct, __resources: string[], __input: RekognitionStartContentModerationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartContentModeration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartContentModeration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartContentModeration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionStartContentModerationRequest`](#aws-cdk-sdk.rekognition.RekognitionStartContentModerationRequest)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartContentModeration.property.jobId"></a>

- *Type:* `string`

---


### RekognitionResponsesStartFaceDetection <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartFaceDetection"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartFaceDetection.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesStartFaceDetection(__scope: Construct, __resources: string[], __input: RekognitionStartFaceDetectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartFaceDetection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartFaceDetection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartFaceDetection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionStartFaceDetectionRequest`](#aws-cdk-sdk.rekognition.RekognitionStartFaceDetectionRequest)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartFaceDetection.property.jobId"></a>

- *Type:* `string`

---


### RekognitionResponsesStartFaceSearch <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartFaceSearch"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartFaceSearch.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesStartFaceSearch(__scope: Construct, __resources: string[], __input: RekognitionStartFaceSearchRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartFaceSearch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartFaceSearch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartFaceSearch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionStartFaceSearchRequest`](#aws-cdk-sdk.rekognition.RekognitionStartFaceSearchRequest)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartFaceSearch.property.jobId"></a>

- *Type:* `string`

---


### RekognitionResponsesStartLabelDetection <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartLabelDetection"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartLabelDetection.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesStartLabelDetection(__scope: Construct, __resources: string[], __input: RekognitionStartLabelDetectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartLabelDetection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartLabelDetection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartLabelDetection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionStartLabelDetectionRequest`](#aws-cdk-sdk.rekognition.RekognitionStartLabelDetectionRequest)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartLabelDetection.property.jobId"></a>

- *Type:* `string`

---


### RekognitionResponsesStartPersonTracking <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartPersonTracking"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartPersonTracking.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesStartPersonTracking(__scope: Construct, __resources: string[], __input: RekognitionStartPersonTrackingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartPersonTracking.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartPersonTracking.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartPersonTracking.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionStartPersonTrackingRequest`](#aws-cdk-sdk.rekognition.RekognitionStartPersonTrackingRequest)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartPersonTracking.property.jobId"></a>

- *Type:* `string`

---


### RekognitionResponsesStartProjectVersion <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartProjectVersion"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartProjectVersion.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesStartProjectVersion(__scope: Construct, __resources: string[], __input: RekognitionStartProjectVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartProjectVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartProjectVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartProjectVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionStartProjectVersionRequest`](#aws-cdk-sdk.rekognition.RekognitionStartProjectVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartProjectVersion.property.status"></a>

- *Type:* `string`

---


### RekognitionResponsesStartSegmentDetection <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartSegmentDetection"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartSegmentDetection.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesStartSegmentDetection(__scope: Construct, __resources: string[], __input: RekognitionStartSegmentDetectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartSegmentDetection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartSegmentDetection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartSegmentDetection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionStartSegmentDetectionRequest`](#aws-cdk-sdk.rekognition.RekognitionStartSegmentDetectionRequest)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartSegmentDetection.property.jobId"></a>

- *Type:* `string`

---


### RekognitionResponsesStartTextDetection <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartTextDetection"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartTextDetection.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesStartTextDetection(__scope: Construct, __resources: string[], __input: RekognitionStartTextDetectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartTextDetection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartTextDetection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartTextDetection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionStartTextDetectionRequest`](#aws-cdk-sdk.rekognition.RekognitionStartTextDetectionRequest)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStartTextDetection.property.jobId"></a>

- *Type:* `string`

---


### RekognitionResponsesStopProjectVersion <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStopProjectVersion"></a>

#### Initializer <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStopProjectVersion.Initializer"></a>

```typescript
import { rekognition } from 'aws-cdk-sdk'

new rekognition.RekognitionResponsesStopProjectVersion(__scope: Construct, __resources: string[], __input: RekognitionStopProjectVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStopProjectVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStopProjectVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStopProjectVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.rekognition.RekognitionStopProjectVersionRequest`](#aws-cdk-sdk.rekognition.RekognitionStopProjectVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.rekognition.RekognitionResponsesStopProjectVersion.property.status"></a>

- *Type:* `string`

---



