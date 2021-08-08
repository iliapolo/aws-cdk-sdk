# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### MediaStoreDataClient <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataClient"></a>

#### Initializer <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataClient.Initializer"></a>

```typescript
import { mediastoredata } from 'aws-cdk-sdk'

new mediastoredata.MediaStoreDataClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `deleteObject` <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataClient.deleteObject"></a>

```typescript
public deleteObject(input: MediaStoreDataDeleteObjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediastoredata.MediaStoreDataDeleteObjectRequest`](#aws-cdk-sdk.mediastoredata.MediaStoreDataDeleteObjectRequest)

---

##### `describeObject` <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataClient.describeObject"></a>

```typescript
public describeObject(input: MediaStoreDataDescribeObjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediastoredata.MediaStoreDataDescribeObjectRequest`](#aws-cdk-sdk.mediastoredata.MediaStoreDataDescribeObjectRequest)

---

##### `fetchObject` <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataClient.fetchObject"></a>

```typescript
public fetchObject(input: MediaStoreDataGetObjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediastoredata.MediaStoreDataGetObjectRequest`](#aws-cdk-sdk.mediastoredata.MediaStoreDataGetObjectRequest)

---

##### `listItems` <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataClient.listItems"></a>

```typescript
public listItems(input: MediaStoreDataListItemsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediastoredata.MediaStoreDataListItemsRequest`](#aws-cdk-sdk.mediastoredata.MediaStoreDataListItemsRequest)

---

##### `putObject` <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataClient.putObject"></a>

```typescript
public putObject(input: MediaStoreDataPutObjectRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mediastoredata.MediaStoreDataPutObjectRequest`](#aws-cdk-sdk.mediastoredata.MediaStoreDataPutObjectRequest)

---




## Structs <a name="Structs"></a>

### MediaStoreDataDeleteObjectRequest <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataDeleteObjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastoredata } from 'aws-cdk-sdk'

const mediaStoreDataDeleteObjectRequest: mediastoredata.MediaStoreDataDeleteObjectRequest = { ... }
```

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataDeleteObjectRequest.property.path"></a>

- *Type:* `string`

---

### MediaStoreDataDeleteObjectResponse <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataDeleteObjectResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastoredata } from 'aws-cdk-sdk'

const mediaStoreDataDeleteObjectResponse: mediastoredata.MediaStoreDataDeleteObjectResponse = { ... }
```

### MediaStoreDataDescribeObjectRequest <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataDescribeObjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastoredata } from 'aws-cdk-sdk'

const mediaStoreDataDescribeObjectRequest: mediastoredata.MediaStoreDataDescribeObjectRequest = { ... }
```

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataDescribeObjectRequest.property.path"></a>

- *Type:* `string`

---

### MediaStoreDataDescribeObjectResponse <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataDescribeObjectResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastoredata } from 'aws-cdk-sdk'

const mediaStoreDataDescribeObjectResponse: mediastoredata.MediaStoreDataDescribeObjectResponse = { ... }
```

##### `cacheControl`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataDescribeObjectResponse.property.cacheControl"></a>

- *Type:* `string`

---

##### `contentLength`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataDescribeObjectResponse.property.contentLength"></a>

- *Type:* `number`

---

##### `contentType`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataDescribeObjectResponse.property.contentType"></a>

- *Type:* `string`

---

##### `eTag`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataDescribeObjectResponse.property.eTag"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataDescribeObjectResponse.property.lastModified"></a>

- *Type:* `string`

---

### MediaStoreDataGetObjectRequest <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataGetObjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastoredata } from 'aws-cdk-sdk'

const mediaStoreDataGetObjectRequest: mediastoredata.MediaStoreDataGetObjectRequest = { ... }
```

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataGetObjectRequest.property.path"></a>

- *Type:* `string`

---

##### `range`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataGetObjectRequest.property.range"></a>

- *Type:* `string`

---

### MediaStoreDataGetObjectResponse <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataGetObjectResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastoredata } from 'aws-cdk-sdk'

const mediaStoreDataGetObjectResponse: mediastoredata.MediaStoreDataGetObjectResponse = { ... }
```

##### `statusCode`<sup>Required</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataGetObjectResponse.property.statusCode"></a>

- *Type:* `number`

---

##### `body`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataGetObjectResponse.property.body"></a>

- *Type:* `any`

---

##### `cacheControl`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataGetObjectResponse.property.cacheControl"></a>

- *Type:* `string`

---

##### `contentLength`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataGetObjectResponse.property.contentLength"></a>

- *Type:* `number`

---

##### `contentRange`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataGetObjectResponse.property.contentRange"></a>

- *Type:* `string`

---

##### `contentType`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataGetObjectResponse.property.contentType"></a>

- *Type:* `string`

---

##### `eTag`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataGetObjectResponse.property.eTag"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataGetObjectResponse.property.lastModified"></a>

- *Type:* `string`

---

### MediaStoreDataItem <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastoredata } from 'aws-cdk-sdk'

const mediaStoreDataItem: mediastoredata.MediaStoreDataItem = { ... }
```

##### `contentLength`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataItem.property.contentLength"></a>

- *Type:* `number`

---

##### `contentType`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataItem.property.contentType"></a>

- *Type:* `string`

---

##### `eTag`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataItem.property.eTag"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataItem.property.lastModified"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataItem.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataItem.property.type"></a>

- *Type:* `string`

---

### MediaStoreDataListItemsRequest <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataListItemsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastoredata } from 'aws-cdk-sdk'

const mediaStoreDataListItemsRequest: mediastoredata.MediaStoreDataListItemsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataListItemsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataListItemsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataListItemsRequest.property.path"></a>

- *Type:* `string`

---

### MediaStoreDataListItemsResponse <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataListItemsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastoredata } from 'aws-cdk-sdk'

const mediaStoreDataListItemsResponse: mediastoredata.MediaStoreDataListItemsResponse = { ... }
```

##### `items`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataListItemsResponse.property.items"></a>

- *Type:* [`aws-cdk-sdk.mediastoredata.MediaStoreDataItem`](#aws-cdk-sdk.mediastoredata.MediaStoreDataItem)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataListItemsResponse.property.nextToken"></a>

- *Type:* `string`

---

### MediaStoreDataPutObjectRequest <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataPutObjectRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastoredata } from 'aws-cdk-sdk'

const mediaStoreDataPutObjectRequest: mediastoredata.MediaStoreDataPutObjectRequest = { ... }
```

##### `body`<sup>Required</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataPutObjectRequest.property.body"></a>

- *Type:* `any`

---

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataPutObjectRequest.property.path"></a>

- *Type:* `string`

---

##### `cacheControl`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataPutObjectRequest.property.cacheControl"></a>

- *Type:* `string`

---

##### `contentType`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataPutObjectRequest.property.contentType"></a>

- *Type:* `string`

---

##### `storageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataPutObjectRequest.property.storageClass"></a>

- *Type:* `string`

---

##### `uploadAvailability`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataPutObjectRequest.property.uploadAvailability"></a>

- *Type:* `string`

---

### MediaStoreDataPutObjectResponse <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataPutObjectResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mediastoredata } from 'aws-cdk-sdk'

const mediaStoreDataPutObjectResponse: mediastoredata.MediaStoreDataPutObjectResponse = { ... }
```

##### `contentSha256`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataPutObjectResponse.property.contentSha256"></a>

- *Type:* `string`

---

##### `eTag`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataPutObjectResponse.property.eTag"></a>

- *Type:* `string`

---

##### `storageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataPutObjectResponse.property.storageClass"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### MediaStoreDataResponsesDescribeObject <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataResponsesDescribeObject"></a>

#### Initializer <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataResponsesDescribeObject.Initializer"></a>

```typescript
import { mediastoredata } from 'aws-cdk-sdk'

new mediastoredata.MediaStoreDataResponsesDescribeObject(__scope: Construct, __resources: string[], __input: MediaStoreDataDescribeObjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataResponsesDescribeObject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataResponsesDescribeObject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataResponsesDescribeObject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediastoredata.MediaStoreDataDescribeObjectRequest`](#aws-cdk-sdk.mediastoredata.MediaStoreDataDescribeObjectRequest)

---



#### Properties <a name="Properties"></a>

##### `cacheControl`<sup>Required</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataResponsesDescribeObject.property.cacheControl"></a>

- *Type:* `string`

---

##### `contentLength`<sup>Required</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataResponsesDescribeObject.property.contentLength"></a>

- *Type:* `number`

---

##### `contentType`<sup>Required</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataResponsesDescribeObject.property.contentType"></a>

- *Type:* `string`

---

##### `eTag`<sup>Required</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataResponsesDescribeObject.property.eTag"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Required</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataResponsesDescribeObject.property.lastModified"></a>

- *Type:* `string`

---


### MediaStoreDataResponsesFetchObject <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataResponsesFetchObject"></a>

#### Initializer <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataResponsesFetchObject.Initializer"></a>

```typescript
import { mediastoredata } from 'aws-cdk-sdk'

new mediastoredata.MediaStoreDataResponsesFetchObject(__scope: Construct, __resources: string[], __input: MediaStoreDataGetObjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataResponsesFetchObject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataResponsesFetchObject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataResponsesFetchObject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediastoredata.MediaStoreDataGetObjectRequest`](#aws-cdk-sdk.mediastoredata.MediaStoreDataGetObjectRequest)

---



#### Properties <a name="Properties"></a>

##### `body`<sup>Required</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataResponsesFetchObject.property.body"></a>

- *Type:* `any`

---

##### `cacheControl`<sup>Required</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataResponsesFetchObject.property.cacheControl"></a>

- *Type:* `string`

---

##### `contentLength`<sup>Required</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataResponsesFetchObject.property.contentLength"></a>

- *Type:* `number`

---

##### `contentRange`<sup>Required</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataResponsesFetchObject.property.contentRange"></a>

- *Type:* `string`

---

##### `contentType`<sup>Required</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataResponsesFetchObject.property.contentType"></a>

- *Type:* `string`

---

##### `eTag`<sup>Required</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataResponsesFetchObject.property.eTag"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Required</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataResponsesFetchObject.property.lastModified"></a>

- *Type:* `string`

---

##### `statusCode`<sup>Required</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataResponsesFetchObject.property.statusCode"></a>

- *Type:* `number`

---


### MediaStoreDataResponsesListItems <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataResponsesListItems"></a>

#### Initializer <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataResponsesListItems.Initializer"></a>

```typescript
import { mediastoredata } from 'aws-cdk-sdk'

new mediastoredata.MediaStoreDataResponsesListItems(__scope: Construct, __resources: string[], __input: MediaStoreDataListItemsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataResponsesListItems.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataResponsesListItems.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataResponsesListItems.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediastoredata.MediaStoreDataListItemsRequest`](#aws-cdk-sdk.mediastoredata.MediaStoreDataListItemsRequest)

---



#### Properties <a name="Properties"></a>

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataResponsesListItems.property.items"></a>

- *Type:* [`aws-cdk-sdk.mediastoredata.MediaStoreDataItem`](#aws-cdk-sdk.mediastoredata.MediaStoreDataItem)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataResponsesListItems.property.nextToken"></a>

- *Type:* `string`

---


### MediaStoreDataResponsesPutObject <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataResponsesPutObject"></a>

#### Initializer <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataResponsesPutObject.Initializer"></a>

```typescript
import { mediastoredata } from 'aws-cdk-sdk'

new mediastoredata.MediaStoreDataResponsesPutObject(__scope: Construct, __resources: string[], __input: MediaStoreDataPutObjectRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataResponsesPutObject.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataResponsesPutObject.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataResponsesPutObject.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.mediastoredata.MediaStoreDataPutObjectRequest`](#aws-cdk-sdk.mediastoredata.MediaStoreDataPutObjectRequest)

---



#### Properties <a name="Properties"></a>

##### `contentSha256`<sup>Required</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataResponsesPutObject.property.contentSha256"></a>

- *Type:* `string`

---

##### `eTag`<sup>Required</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataResponsesPutObject.property.eTag"></a>

- *Type:* `string`

---

##### `storageClass`<sup>Required</sup> <a name="aws-cdk-sdk.mediastoredata.MediaStoreDataResponsesPutObject.property.storageClass"></a>

- *Type:* `string`

---



