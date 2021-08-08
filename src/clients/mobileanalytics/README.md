# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### MobileAnalyticsClient <a name="aws-cdk-sdk.mobileanalytics.MobileAnalyticsClient"></a>

#### Initializer <a name="aws-cdk-sdk.mobileanalytics.MobileAnalyticsClient.Initializer"></a>

```typescript
import { mobileanalytics } from 'aws-cdk-sdk'

new mobileanalytics.MobileAnalyticsClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.mobileanalytics.MobileAnalyticsClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.mobileanalytics.MobileAnalyticsClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.mobileanalytics.MobileAnalyticsClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `putEvents` <a name="aws-cdk-sdk.mobileanalytics.MobileAnalyticsClient.putEvents"></a>

```typescript
public putEvents(input: MobileAnalyticsPutEventsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.mobileanalytics.MobileAnalyticsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.mobileanalytics.MobileAnalyticsPutEventsInput`](#aws-cdk-sdk.mobileanalytics.MobileAnalyticsPutEventsInput)

---




## Structs <a name="Structs"></a>

### MobileAnalyticsEvent <a name="aws-cdk-sdk.mobileanalytics.MobileAnalyticsEvent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mobileanalytics } from 'aws-cdk-sdk'

const mobileAnalyticsEvent: mobileanalytics.MobileAnalyticsEvent = { ... }
```

##### `eventType`<sup>Required</sup> <a name="aws-cdk-sdk.mobileanalytics.MobileAnalyticsEvent.property.eventType"></a>

- *Type:* `string`

---

##### `timestamp`<sup>Required</sup> <a name="aws-cdk-sdk.mobileanalytics.MobileAnalyticsEvent.property.timestamp"></a>

- *Type:* `string`

---

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.mobileanalytics.MobileAnalyticsEvent.property.attributes"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `metrics`<sup>Optional</sup> <a name="aws-cdk-sdk.mobileanalytics.MobileAnalyticsEvent.property.metrics"></a>

- *Type:* {[ key: string ]: `number`}

---

##### `session`<sup>Optional</sup> <a name="aws-cdk-sdk.mobileanalytics.MobileAnalyticsEvent.property.session"></a>

- *Type:* [`aws-cdk-sdk.mobileanalytics.MobileAnalyticsSession`](#aws-cdk-sdk.mobileanalytics.MobileAnalyticsSession)

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.mobileanalytics.MobileAnalyticsEvent.property.version"></a>

- *Type:* `string`

---

### MobileAnalyticsPutEventsInput <a name="aws-cdk-sdk.mobileanalytics.MobileAnalyticsPutEventsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mobileanalytics } from 'aws-cdk-sdk'

const mobileAnalyticsPutEventsInput: mobileanalytics.MobileAnalyticsPutEventsInput = { ... }
```

##### `clientContext`<sup>Required</sup> <a name="aws-cdk-sdk.mobileanalytics.MobileAnalyticsPutEventsInput.property.clientContext"></a>

- *Type:* `string`

---

##### `events`<sup>Required</sup> <a name="aws-cdk-sdk.mobileanalytics.MobileAnalyticsPutEventsInput.property.events"></a>

- *Type:* [`aws-cdk-sdk.mobileanalytics.MobileAnalyticsEvent`](#aws-cdk-sdk.mobileanalytics.MobileAnalyticsEvent)[]

---

##### `clientContextEncoding`<sup>Optional</sup> <a name="aws-cdk-sdk.mobileanalytics.MobileAnalyticsPutEventsInput.property.clientContextEncoding"></a>

- *Type:* `string`

---

### MobileAnalyticsSession <a name="aws-cdk-sdk.mobileanalytics.MobileAnalyticsSession"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { mobileanalytics } from 'aws-cdk-sdk'

const mobileAnalyticsSession: mobileanalytics.MobileAnalyticsSession = { ... }
```

##### `duration`<sup>Optional</sup> <a name="aws-cdk-sdk.mobileanalytics.MobileAnalyticsSession.property.duration"></a>

- *Type:* `number`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.mobileanalytics.MobileAnalyticsSession.property.id"></a>

- *Type:* `string`

---

##### `startTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.mobileanalytics.MobileAnalyticsSession.property.startTimestamp"></a>

- *Type:* `string`

---

##### `stopTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.mobileanalytics.MobileAnalyticsSession.property.stopTimestamp"></a>

- *Type:* `string`

---



