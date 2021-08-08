# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### HealthClient <a name="aws-cdk-sdk.health.HealthClient"></a>

#### Initializer <a name="aws-cdk-sdk.health.HealthClient.Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

new health.HealthClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `describeAffectedAccountsForOrganization` <a name="aws-cdk-sdk.health.HealthClient.describeAffectedAccountsForOrganization"></a>

```typescript
public describeAffectedAccountsForOrganization(input: HealthDescribeAffectedAccountsForOrganizationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.health.HealthDescribeAffectedAccountsForOrganizationRequest`](#aws-cdk-sdk.health.HealthDescribeAffectedAccountsForOrganizationRequest)

---

##### `describeAffectedEntities` <a name="aws-cdk-sdk.health.HealthClient.describeAffectedEntities"></a>

```typescript
public describeAffectedEntities(input: HealthDescribeAffectedEntitiesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.health.HealthDescribeAffectedEntitiesRequest`](#aws-cdk-sdk.health.HealthDescribeAffectedEntitiesRequest)

---

##### `describeAffectedEntitiesForOrganization` <a name="aws-cdk-sdk.health.HealthClient.describeAffectedEntitiesForOrganization"></a>

```typescript
public describeAffectedEntitiesForOrganization(input: HealthDescribeAffectedEntitiesForOrganizationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.health.HealthDescribeAffectedEntitiesForOrganizationRequest`](#aws-cdk-sdk.health.HealthDescribeAffectedEntitiesForOrganizationRequest)

---

##### `describeEntityAggregates` <a name="aws-cdk-sdk.health.HealthClient.describeEntityAggregates"></a>

```typescript
public describeEntityAggregates(input: HealthDescribeEntityAggregatesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.health.HealthDescribeEntityAggregatesRequest`](#aws-cdk-sdk.health.HealthDescribeEntityAggregatesRequest)

---

##### `describeEventAggregates` <a name="aws-cdk-sdk.health.HealthClient.describeEventAggregates"></a>

```typescript
public describeEventAggregates(input: HealthDescribeEventAggregatesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.health.HealthDescribeEventAggregatesRequest`](#aws-cdk-sdk.health.HealthDescribeEventAggregatesRequest)

---

##### `describeEventDetails` <a name="aws-cdk-sdk.health.HealthClient.describeEventDetails"></a>

```typescript
public describeEventDetails(input: HealthDescribeEventDetailsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.health.HealthDescribeEventDetailsRequest`](#aws-cdk-sdk.health.HealthDescribeEventDetailsRequest)

---

##### `describeEventDetailsForOrganization` <a name="aws-cdk-sdk.health.HealthClient.describeEventDetailsForOrganization"></a>

```typescript
public describeEventDetailsForOrganization(input: HealthDescribeEventDetailsForOrganizationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.health.HealthDescribeEventDetailsForOrganizationRequest`](#aws-cdk-sdk.health.HealthDescribeEventDetailsForOrganizationRequest)

---

##### `describeEvents` <a name="aws-cdk-sdk.health.HealthClient.describeEvents"></a>

```typescript
public describeEvents(input: HealthDescribeEventsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.health.HealthDescribeEventsRequest`](#aws-cdk-sdk.health.HealthDescribeEventsRequest)

---

##### `describeEventsForOrganization` <a name="aws-cdk-sdk.health.HealthClient.describeEventsForOrganization"></a>

```typescript
public describeEventsForOrganization(input: HealthDescribeEventsForOrganizationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.health.HealthDescribeEventsForOrganizationRequest`](#aws-cdk-sdk.health.HealthDescribeEventsForOrganizationRequest)

---

##### `describeEventTypes` <a name="aws-cdk-sdk.health.HealthClient.describeEventTypes"></a>

```typescript
public describeEventTypes(input: HealthDescribeEventTypesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.health.HealthDescribeEventTypesRequest`](#aws-cdk-sdk.health.HealthDescribeEventTypesRequest)

---

##### `describeHealthServiceStatusForOrganization` <a name="aws-cdk-sdk.health.HealthClient.describeHealthServiceStatusForOrganization"></a>

```typescript
public describeHealthServiceStatusForOrganization()
```

##### `disableHealthServiceAccessForOrganization` <a name="aws-cdk-sdk.health.HealthClient.disableHealthServiceAccessForOrganization"></a>

```typescript
public disableHealthServiceAccessForOrganization()
```

##### `enableHealthServiceAccessForOrganization` <a name="aws-cdk-sdk.health.HealthClient.enableHealthServiceAccessForOrganization"></a>

```typescript
public enableHealthServiceAccessForOrganization()
```




## Structs <a name="Structs"></a>

### HealthAffectedEntity <a name="aws-cdk-sdk.health.HealthAffectedEntity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

const healthAffectedEntity: health.HealthAffectedEntity = { ... }
```

##### `awsAccountId`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthAffectedEntity.property.awsAccountId"></a>

- *Type:* `string`

---

##### `entityArn`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthAffectedEntity.property.entityArn"></a>

- *Type:* `string`

---

##### `entityUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthAffectedEntity.property.entityUrl"></a>

- *Type:* `string`

---

##### `entityValue`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthAffectedEntity.property.entityValue"></a>

- *Type:* `string`

---

##### `eventArn`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthAffectedEntity.property.eventArn"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthAffectedEntity.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `statusCode`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthAffectedEntity.property.statusCode"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthAffectedEntity.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### HealthDateTimeRange <a name="aws-cdk-sdk.health.HealthDateTimeRange"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

const healthDateTimeRange: health.HealthDateTimeRange = { ... }
```

##### `from`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDateTimeRange.property.from"></a>

- *Type:* `string`

---

##### `to`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDateTimeRange.property.to"></a>

- *Type:* `string`

---

### HealthDescribeAffectedAccountsForOrganizationRequest <a name="aws-cdk-sdk.health.HealthDescribeAffectedAccountsForOrganizationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

const healthDescribeAffectedAccountsForOrganizationRequest: health.HealthDescribeAffectedAccountsForOrganizationRequest = { ... }
```

##### `eventArn`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthDescribeAffectedAccountsForOrganizationRequest.property.eventArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeAffectedAccountsForOrganizationRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeAffectedAccountsForOrganizationRequest.property.nextToken"></a>

- *Type:* `string`

---

### HealthDescribeAffectedAccountsForOrganizationResponse <a name="aws-cdk-sdk.health.HealthDescribeAffectedAccountsForOrganizationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

const healthDescribeAffectedAccountsForOrganizationResponse: health.HealthDescribeAffectedAccountsForOrganizationResponse = { ... }
```

##### `affectedAccounts`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeAffectedAccountsForOrganizationResponse.property.affectedAccounts"></a>

- *Type:* `string`[]

---

##### `eventScopeCode`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeAffectedAccountsForOrganizationResponse.property.eventScopeCode"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeAffectedAccountsForOrganizationResponse.property.nextToken"></a>

- *Type:* `string`

---

### HealthDescribeAffectedEntitiesForOrganizationRequest <a name="aws-cdk-sdk.health.HealthDescribeAffectedEntitiesForOrganizationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

const healthDescribeAffectedEntitiesForOrganizationRequest: health.HealthDescribeAffectedEntitiesForOrganizationRequest = { ... }
```

##### `organizationEntityFilters`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthDescribeAffectedEntitiesForOrganizationRequest.property.organizationEntityFilters"></a>

- *Type:* [`aws-cdk-sdk.health.HealthEventAccountFilter`](#aws-cdk-sdk.health.HealthEventAccountFilter)[]

---

##### `locale`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeAffectedEntitiesForOrganizationRequest.property.locale"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeAffectedEntitiesForOrganizationRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeAffectedEntitiesForOrganizationRequest.property.nextToken"></a>

- *Type:* `string`

---

### HealthDescribeAffectedEntitiesForOrganizationResponse <a name="aws-cdk-sdk.health.HealthDescribeAffectedEntitiesForOrganizationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

const healthDescribeAffectedEntitiesForOrganizationResponse: health.HealthDescribeAffectedEntitiesForOrganizationResponse = { ... }
```

##### `entities`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeAffectedEntitiesForOrganizationResponse.property.entities"></a>

- *Type:* [`aws-cdk-sdk.health.HealthAffectedEntity`](#aws-cdk-sdk.health.HealthAffectedEntity)[]

---

##### `failedSet`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeAffectedEntitiesForOrganizationResponse.property.failedSet"></a>

- *Type:* [`aws-cdk-sdk.health.HealthOrganizationAffectedEntitiesErrorItem`](#aws-cdk-sdk.health.HealthOrganizationAffectedEntitiesErrorItem)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeAffectedEntitiesForOrganizationResponse.property.nextToken"></a>

- *Type:* `string`

---

### HealthDescribeAffectedEntitiesRequest <a name="aws-cdk-sdk.health.HealthDescribeAffectedEntitiesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

const healthDescribeAffectedEntitiesRequest: health.HealthDescribeAffectedEntitiesRequest = { ... }
```

##### `filter`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthDescribeAffectedEntitiesRequest.property.filter"></a>

- *Type:* [`aws-cdk-sdk.health.HealthEntityFilter`](#aws-cdk-sdk.health.HealthEntityFilter)

---

##### `locale`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeAffectedEntitiesRequest.property.locale"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeAffectedEntitiesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeAffectedEntitiesRequest.property.nextToken"></a>

- *Type:* `string`

---

### HealthDescribeAffectedEntitiesResponse <a name="aws-cdk-sdk.health.HealthDescribeAffectedEntitiesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

const healthDescribeAffectedEntitiesResponse: health.HealthDescribeAffectedEntitiesResponse = { ... }
```

##### `entities`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeAffectedEntitiesResponse.property.entities"></a>

- *Type:* [`aws-cdk-sdk.health.HealthAffectedEntity`](#aws-cdk-sdk.health.HealthAffectedEntity)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeAffectedEntitiesResponse.property.nextToken"></a>

- *Type:* `string`

---

### HealthDescribeEntityAggregatesRequest <a name="aws-cdk-sdk.health.HealthDescribeEntityAggregatesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

const healthDescribeEntityAggregatesRequest: health.HealthDescribeEntityAggregatesRequest = { ... }
```

##### `eventArns`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeEntityAggregatesRequest.property.eventArns"></a>

- *Type:* `string`[]

---

### HealthDescribeEntityAggregatesResponse <a name="aws-cdk-sdk.health.HealthDescribeEntityAggregatesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

const healthDescribeEntityAggregatesResponse: health.HealthDescribeEntityAggregatesResponse = { ... }
```

##### `entityAggregates`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeEntityAggregatesResponse.property.entityAggregates"></a>

- *Type:* [`aws-cdk-sdk.health.HealthEntityAggregate`](#aws-cdk-sdk.health.HealthEntityAggregate)[]

---

### HealthDescribeEventAggregatesRequest <a name="aws-cdk-sdk.health.HealthDescribeEventAggregatesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

const healthDescribeEventAggregatesRequest: health.HealthDescribeEventAggregatesRequest = { ... }
```

##### `aggregateField`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthDescribeEventAggregatesRequest.property.aggregateField"></a>

- *Type:* `string`

---

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeEventAggregatesRequest.property.filter"></a>

- *Type:* [`aws-cdk-sdk.health.HealthEventFilter`](#aws-cdk-sdk.health.HealthEventFilter)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeEventAggregatesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeEventAggregatesRequest.property.nextToken"></a>

- *Type:* `string`

---

### HealthDescribeEventAggregatesResponse <a name="aws-cdk-sdk.health.HealthDescribeEventAggregatesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

const healthDescribeEventAggregatesResponse: health.HealthDescribeEventAggregatesResponse = { ... }
```

##### `eventAggregates`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeEventAggregatesResponse.property.eventAggregates"></a>

- *Type:* [`aws-cdk-sdk.health.HealthEventAggregate`](#aws-cdk-sdk.health.HealthEventAggregate)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeEventAggregatesResponse.property.nextToken"></a>

- *Type:* `string`

---

### HealthDescribeEventDetailsForOrganizationRequest <a name="aws-cdk-sdk.health.HealthDescribeEventDetailsForOrganizationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

const healthDescribeEventDetailsForOrganizationRequest: health.HealthDescribeEventDetailsForOrganizationRequest = { ... }
```

##### `organizationEventDetailFilters`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthDescribeEventDetailsForOrganizationRequest.property.organizationEventDetailFilters"></a>

- *Type:* [`aws-cdk-sdk.health.HealthEventAccountFilter`](#aws-cdk-sdk.health.HealthEventAccountFilter)[]

---

##### `locale`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeEventDetailsForOrganizationRequest.property.locale"></a>

- *Type:* `string`

---

### HealthDescribeEventDetailsForOrganizationResponse <a name="aws-cdk-sdk.health.HealthDescribeEventDetailsForOrganizationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

const healthDescribeEventDetailsForOrganizationResponse: health.HealthDescribeEventDetailsForOrganizationResponse = { ... }
```

##### `failedSet`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeEventDetailsForOrganizationResponse.property.failedSet"></a>

- *Type:* [`aws-cdk-sdk.health.HealthOrganizationEventDetailsErrorItem`](#aws-cdk-sdk.health.HealthOrganizationEventDetailsErrorItem)[]

---

##### `successfulSet`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeEventDetailsForOrganizationResponse.property.successfulSet"></a>

- *Type:* [`aws-cdk-sdk.health.HealthOrganizationEventDetails`](#aws-cdk-sdk.health.HealthOrganizationEventDetails)[]

---

### HealthDescribeEventDetailsRequest <a name="aws-cdk-sdk.health.HealthDescribeEventDetailsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

const healthDescribeEventDetailsRequest: health.HealthDescribeEventDetailsRequest = { ... }
```

##### `eventArns`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthDescribeEventDetailsRequest.property.eventArns"></a>

- *Type:* `string`[]

---

##### `locale`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeEventDetailsRequest.property.locale"></a>

- *Type:* `string`

---

### HealthDescribeEventDetailsResponse <a name="aws-cdk-sdk.health.HealthDescribeEventDetailsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

const healthDescribeEventDetailsResponse: health.HealthDescribeEventDetailsResponse = { ... }
```

##### `failedSet`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeEventDetailsResponse.property.failedSet"></a>

- *Type:* [`aws-cdk-sdk.health.HealthEventDetailsErrorItem`](#aws-cdk-sdk.health.HealthEventDetailsErrorItem)[]

---

##### `successfulSet`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeEventDetailsResponse.property.successfulSet"></a>

- *Type:* [`aws-cdk-sdk.health.HealthEventDetails`](#aws-cdk-sdk.health.HealthEventDetails)[]

---

### HealthDescribeEventsForOrganizationRequest <a name="aws-cdk-sdk.health.HealthDescribeEventsForOrganizationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

const healthDescribeEventsForOrganizationRequest: health.HealthDescribeEventsForOrganizationRequest = { ... }
```

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeEventsForOrganizationRequest.property.filter"></a>

- *Type:* [`aws-cdk-sdk.health.HealthOrganizationEventFilter`](#aws-cdk-sdk.health.HealthOrganizationEventFilter)

---

##### `locale`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeEventsForOrganizationRequest.property.locale"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeEventsForOrganizationRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeEventsForOrganizationRequest.property.nextToken"></a>

- *Type:* `string`

---

### HealthDescribeEventsForOrganizationResponse <a name="aws-cdk-sdk.health.HealthDescribeEventsForOrganizationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

const healthDescribeEventsForOrganizationResponse: health.HealthDescribeEventsForOrganizationResponse = { ... }
```

##### `events`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeEventsForOrganizationResponse.property.events"></a>

- *Type:* [`aws-cdk-sdk.health.HealthOrganizationEvent`](#aws-cdk-sdk.health.HealthOrganizationEvent)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeEventsForOrganizationResponse.property.nextToken"></a>

- *Type:* `string`

---

### HealthDescribeEventsRequest <a name="aws-cdk-sdk.health.HealthDescribeEventsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

const healthDescribeEventsRequest: health.HealthDescribeEventsRequest = { ... }
```

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeEventsRequest.property.filter"></a>

- *Type:* [`aws-cdk-sdk.health.HealthEventFilter`](#aws-cdk-sdk.health.HealthEventFilter)

---

##### `locale`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeEventsRequest.property.locale"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeEventsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeEventsRequest.property.nextToken"></a>

- *Type:* `string`

---

### HealthDescribeEventsResponse <a name="aws-cdk-sdk.health.HealthDescribeEventsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

const healthDescribeEventsResponse: health.HealthDescribeEventsResponse = { ... }
```

##### `events`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeEventsResponse.property.events"></a>

- *Type:* [`aws-cdk-sdk.health.HealthEvent`](#aws-cdk-sdk.health.HealthEvent)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeEventsResponse.property.nextToken"></a>

- *Type:* `string`

---

### HealthDescribeEventTypesRequest <a name="aws-cdk-sdk.health.HealthDescribeEventTypesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

const healthDescribeEventTypesRequest: health.HealthDescribeEventTypesRequest = { ... }
```

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeEventTypesRequest.property.filter"></a>

- *Type:* [`aws-cdk-sdk.health.HealthEventTypeFilter`](#aws-cdk-sdk.health.HealthEventTypeFilter)

---

##### `locale`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeEventTypesRequest.property.locale"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeEventTypesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeEventTypesRequest.property.nextToken"></a>

- *Type:* `string`

---

### HealthDescribeEventTypesResponse <a name="aws-cdk-sdk.health.HealthDescribeEventTypesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

const healthDescribeEventTypesResponse: health.HealthDescribeEventTypesResponse = { ... }
```

##### `eventTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeEventTypesResponse.property.eventTypes"></a>

- *Type:* [`aws-cdk-sdk.health.HealthEventType`](#aws-cdk-sdk.health.HealthEventType)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeEventTypesResponse.property.nextToken"></a>

- *Type:* `string`

---

### HealthDescribeHealthServiceStatusForOrganizationResponse <a name="aws-cdk-sdk.health.HealthDescribeHealthServiceStatusForOrganizationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

const healthDescribeHealthServiceStatusForOrganizationResponse: health.HealthDescribeHealthServiceStatusForOrganizationResponse = { ... }
```

##### `healthServiceAccessStatusForOrganization`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthDescribeHealthServiceStatusForOrganizationResponse.property.healthServiceAccessStatusForOrganization"></a>

- *Type:* `string`

---

### HealthEntityAggregate <a name="aws-cdk-sdk.health.HealthEntityAggregate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

const healthEntityAggregate: health.HealthEntityAggregate = { ... }
```

##### `count`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEntityAggregate.property.count"></a>

- *Type:* `number`

---

##### `eventArn`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEntityAggregate.property.eventArn"></a>

- *Type:* `string`

---

### HealthEntityFilter <a name="aws-cdk-sdk.health.HealthEntityFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

const healthEntityFilter: health.HealthEntityFilter = { ... }
```

##### `eventArns`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthEntityFilter.property.eventArns"></a>

- *Type:* `string`[]

---

##### `entityArns`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEntityFilter.property.entityArns"></a>

- *Type:* `string`[]

---

##### `entityValues`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEntityFilter.property.entityValues"></a>

- *Type:* `string`[]

---

##### `lastUpdatedTimes`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEntityFilter.property.lastUpdatedTimes"></a>

- *Type:* [`aws-cdk-sdk.health.HealthDateTimeRange`](#aws-cdk-sdk.health.HealthDateTimeRange)[]

---

##### `statusCodes`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEntityFilter.property.statusCodes"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEntityFilter.property.tags"></a>

- *Type:* {[ key: string ]: `string`}[]

---

### HealthEvent <a name="aws-cdk-sdk.health.HealthEvent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

const healthEvent: health.HealthEvent = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEvent.property.arn"></a>

- *Type:* `string`

---

##### `availabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEvent.property.availabilityZone"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEvent.property.endTime"></a>

- *Type:* `string`

---

##### `eventScopeCode`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEvent.property.eventScopeCode"></a>

- *Type:* `string`

---

##### `eventTypeCategory`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEvent.property.eventTypeCategory"></a>

- *Type:* `string`

---

##### `eventTypeCode`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEvent.property.eventTypeCode"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEvent.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEvent.property.region"></a>

- *Type:* `string`

---

##### `service`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEvent.property.service"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEvent.property.startTime"></a>

- *Type:* `string`

---

##### `statusCode`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEvent.property.statusCode"></a>

- *Type:* `string`

---

### HealthEventAccountFilter <a name="aws-cdk-sdk.health.HealthEventAccountFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

const healthEventAccountFilter: health.HealthEventAccountFilter = { ... }
```

##### `eventArn`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthEventAccountFilter.property.eventArn"></a>

- *Type:* `string`

---

##### `awsAccountId`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEventAccountFilter.property.awsAccountId"></a>

- *Type:* `string`

---

### HealthEventAggregate <a name="aws-cdk-sdk.health.HealthEventAggregate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

const healthEventAggregate: health.HealthEventAggregate = { ... }
```

##### `aggregateValue`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEventAggregate.property.aggregateValue"></a>

- *Type:* `string`

---

##### `count`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEventAggregate.property.count"></a>

- *Type:* `number`

---

### HealthEventDescription <a name="aws-cdk-sdk.health.HealthEventDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

const healthEventDescription: health.HealthEventDescription = { ... }
```

##### `latestDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEventDescription.property.latestDescription"></a>

- *Type:* `string`

---

### HealthEventDetails <a name="aws-cdk-sdk.health.HealthEventDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

const healthEventDetails: health.HealthEventDetails = { ... }
```

##### `event`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEventDetails.property.event"></a>

- *Type:* [`aws-cdk-sdk.health.HealthEvent`](#aws-cdk-sdk.health.HealthEvent)

---

##### `eventDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEventDetails.property.eventDescription"></a>

- *Type:* [`aws-cdk-sdk.health.HealthEventDescription`](#aws-cdk-sdk.health.HealthEventDescription)

---

##### `eventMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEventDetails.property.eventMetadata"></a>

- *Type:* {[ key: string ]: `string`}

---

### HealthEventDetailsErrorItem <a name="aws-cdk-sdk.health.HealthEventDetailsErrorItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

const healthEventDetailsErrorItem: health.HealthEventDetailsErrorItem = { ... }
```

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEventDetailsErrorItem.property.errorMessage"></a>

- *Type:* `string`

---

##### `errorName`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEventDetailsErrorItem.property.errorName"></a>

- *Type:* `string`

---

##### `eventArn`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEventDetailsErrorItem.property.eventArn"></a>

- *Type:* `string`

---

### HealthEventFilter <a name="aws-cdk-sdk.health.HealthEventFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

const healthEventFilter: health.HealthEventFilter = { ... }
```

##### `availabilityZones`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEventFilter.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `endTimes`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEventFilter.property.endTimes"></a>

- *Type:* [`aws-cdk-sdk.health.HealthDateTimeRange`](#aws-cdk-sdk.health.HealthDateTimeRange)[]

---

##### `entityArns`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEventFilter.property.entityArns"></a>

- *Type:* `string`[]

---

##### `entityValues`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEventFilter.property.entityValues"></a>

- *Type:* `string`[]

---

##### `eventArns`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEventFilter.property.eventArns"></a>

- *Type:* `string`[]

---

##### `eventStatusCodes`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEventFilter.property.eventStatusCodes"></a>

- *Type:* `string`[]

---

##### `eventTypeCategories`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEventFilter.property.eventTypeCategories"></a>

- *Type:* `string`[]

---

##### `eventTypeCodes`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEventFilter.property.eventTypeCodes"></a>

- *Type:* `string`[]

---

##### `lastUpdatedTimes`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEventFilter.property.lastUpdatedTimes"></a>

- *Type:* [`aws-cdk-sdk.health.HealthDateTimeRange`](#aws-cdk-sdk.health.HealthDateTimeRange)[]

---

##### `regions`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEventFilter.property.regions"></a>

- *Type:* `string`[]

---

##### `services`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEventFilter.property.services"></a>

- *Type:* `string`[]

---

##### `startTimes`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEventFilter.property.startTimes"></a>

- *Type:* [`aws-cdk-sdk.health.HealthDateTimeRange`](#aws-cdk-sdk.health.HealthDateTimeRange)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEventFilter.property.tags"></a>

- *Type:* {[ key: string ]: `string`}[]

---

### HealthEventType <a name="aws-cdk-sdk.health.HealthEventType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

const healthEventType: health.HealthEventType = { ... }
```

##### `category`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEventType.property.category"></a>

- *Type:* `string`

---

##### `code`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEventType.property.code"></a>

- *Type:* `string`

---

##### `service`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEventType.property.service"></a>

- *Type:* `string`

---

### HealthEventTypeFilter <a name="aws-cdk-sdk.health.HealthEventTypeFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

const healthEventTypeFilter: health.HealthEventTypeFilter = { ... }
```

##### `eventTypeCategories`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEventTypeFilter.property.eventTypeCategories"></a>

- *Type:* `string`[]

---

##### `eventTypeCodes`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEventTypeFilter.property.eventTypeCodes"></a>

- *Type:* `string`[]

---

##### `services`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthEventTypeFilter.property.services"></a>

- *Type:* `string`[]

---

### HealthOrganizationAffectedEntitiesErrorItem <a name="aws-cdk-sdk.health.HealthOrganizationAffectedEntitiesErrorItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

const healthOrganizationAffectedEntitiesErrorItem: health.HealthOrganizationAffectedEntitiesErrorItem = { ... }
```

##### `awsAccountId`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthOrganizationAffectedEntitiesErrorItem.property.awsAccountId"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthOrganizationAffectedEntitiesErrorItem.property.errorMessage"></a>

- *Type:* `string`

---

##### `errorName`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthOrganizationAffectedEntitiesErrorItem.property.errorName"></a>

- *Type:* `string`

---

##### `eventArn`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthOrganizationAffectedEntitiesErrorItem.property.eventArn"></a>

- *Type:* `string`

---

### HealthOrganizationEvent <a name="aws-cdk-sdk.health.HealthOrganizationEvent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

const healthOrganizationEvent: health.HealthOrganizationEvent = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthOrganizationEvent.property.arn"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthOrganizationEvent.property.endTime"></a>

- *Type:* `string`

---

##### `eventScopeCode`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthOrganizationEvent.property.eventScopeCode"></a>

- *Type:* `string`

---

##### `eventTypeCategory`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthOrganizationEvent.property.eventTypeCategory"></a>

- *Type:* `string`

---

##### `eventTypeCode`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthOrganizationEvent.property.eventTypeCode"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthOrganizationEvent.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthOrganizationEvent.property.region"></a>

- *Type:* `string`

---

##### `service`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthOrganizationEvent.property.service"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthOrganizationEvent.property.startTime"></a>

- *Type:* `string`

---

##### `statusCode`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthOrganizationEvent.property.statusCode"></a>

- *Type:* `string`

---

### HealthOrganizationEventDetails <a name="aws-cdk-sdk.health.HealthOrganizationEventDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

const healthOrganizationEventDetails: health.HealthOrganizationEventDetails = { ... }
```

##### `awsAccountId`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthOrganizationEventDetails.property.awsAccountId"></a>

- *Type:* `string`

---

##### `event`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthOrganizationEventDetails.property.event"></a>

- *Type:* [`aws-cdk-sdk.health.HealthEvent`](#aws-cdk-sdk.health.HealthEvent)

---

##### `eventDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthOrganizationEventDetails.property.eventDescription"></a>

- *Type:* [`aws-cdk-sdk.health.HealthEventDescription`](#aws-cdk-sdk.health.HealthEventDescription)

---

##### `eventMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthOrganizationEventDetails.property.eventMetadata"></a>

- *Type:* {[ key: string ]: `string`}

---

### HealthOrganizationEventDetailsErrorItem <a name="aws-cdk-sdk.health.HealthOrganizationEventDetailsErrorItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

const healthOrganizationEventDetailsErrorItem: health.HealthOrganizationEventDetailsErrorItem = { ... }
```

##### `awsAccountId`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthOrganizationEventDetailsErrorItem.property.awsAccountId"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthOrganizationEventDetailsErrorItem.property.errorMessage"></a>

- *Type:* `string`

---

##### `errorName`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthOrganizationEventDetailsErrorItem.property.errorName"></a>

- *Type:* `string`

---

##### `eventArn`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthOrganizationEventDetailsErrorItem.property.eventArn"></a>

- *Type:* `string`

---

### HealthOrganizationEventFilter <a name="aws-cdk-sdk.health.HealthOrganizationEventFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

const healthOrganizationEventFilter: health.HealthOrganizationEventFilter = { ... }
```

##### `awsAccountIds`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthOrganizationEventFilter.property.awsAccountIds"></a>

- *Type:* `string`[]

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthOrganizationEventFilter.property.endTime"></a>

- *Type:* [`aws-cdk-sdk.health.HealthDateTimeRange`](#aws-cdk-sdk.health.HealthDateTimeRange)

---

##### `entityArns`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthOrganizationEventFilter.property.entityArns"></a>

- *Type:* `string`[]

---

##### `entityValues`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthOrganizationEventFilter.property.entityValues"></a>

- *Type:* `string`[]

---

##### `eventStatusCodes`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthOrganizationEventFilter.property.eventStatusCodes"></a>

- *Type:* `string`[]

---

##### `eventTypeCategories`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthOrganizationEventFilter.property.eventTypeCategories"></a>

- *Type:* `string`[]

---

##### `eventTypeCodes`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthOrganizationEventFilter.property.eventTypeCodes"></a>

- *Type:* `string`[]

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthOrganizationEventFilter.property.lastUpdatedTime"></a>

- *Type:* [`aws-cdk-sdk.health.HealthDateTimeRange`](#aws-cdk-sdk.health.HealthDateTimeRange)

---

##### `regions`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthOrganizationEventFilter.property.regions"></a>

- *Type:* `string`[]

---

##### `services`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthOrganizationEventFilter.property.services"></a>

- *Type:* `string`[]

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.health.HealthOrganizationEventFilter.property.startTime"></a>

- *Type:* [`aws-cdk-sdk.health.HealthDateTimeRange`](#aws-cdk-sdk.health.HealthDateTimeRange)

---

## Classes <a name="Classes"></a>

### HealthResponsesDescribeAffectedAccountsForOrganization <a name="aws-cdk-sdk.health.HealthResponsesDescribeAffectedAccountsForOrganization"></a>

#### Initializer <a name="aws-cdk-sdk.health.HealthResponsesDescribeAffectedAccountsForOrganization.Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

new health.HealthResponsesDescribeAffectedAccountsForOrganization(__scope: Construct, __resources: string[], __input: HealthDescribeAffectedAccountsForOrganizationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeAffectedAccountsForOrganization.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeAffectedAccountsForOrganization.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeAffectedAccountsForOrganization.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.health.HealthDescribeAffectedAccountsForOrganizationRequest`](#aws-cdk-sdk.health.HealthDescribeAffectedAccountsForOrganizationRequest)

---



#### Properties <a name="Properties"></a>

##### `affectedAccounts`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeAffectedAccountsForOrganization.property.affectedAccounts"></a>

- *Type:* `string`[]

---

##### `eventScopeCode`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeAffectedAccountsForOrganization.property.eventScopeCode"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeAffectedAccountsForOrganization.property.nextToken"></a>

- *Type:* `string`

---


### HealthResponsesDescribeAffectedEntities <a name="aws-cdk-sdk.health.HealthResponsesDescribeAffectedEntities"></a>

#### Initializer <a name="aws-cdk-sdk.health.HealthResponsesDescribeAffectedEntities.Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

new health.HealthResponsesDescribeAffectedEntities(__scope: Construct, __resources: string[], __input: HealthDescribeAffectedEntitiesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeAffectedEntities.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeAffectedEntities.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeAffectedEntities.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.health.HealthDescribeAffectedEntitiesRequest`](#aws-cdk-sdk.health.HealthDescribeAffectedEntitiesRequest)

---



#### Properties <a name="Properties"></a>

##### `entities`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeAffectedEntities.property.entities"></a>

- *Type:* [`aws-cdk-sdk.health.HealthAffectedEntity`](#aws-cdk-sdk.health.HealthAffectedEntity)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeAffectedEntities.property.nextToken"></a>

- *Type:* `string`

---


### HealthResponsesDescribeAffectedEntitiesForOrganization <a name="aws-cdk-sdk.health.HealthResponsesDescribeAffectedEntitiesForOrganization"></a>

#### Initializer <a name="aws-cdk-sdk.health.HealthResponsesDescribeAffectedEntitiesForOrganization.Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

new health.HealthResponsesDescribeAffectedEntitiesForOrganization(__scope: Construct, __resources: string[], __input: HealthDescribeAffectedEntitiesForOrganizationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeAffectedEntitiesForOrganization.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeAffectedEntitiesForOrganization.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeAffectedEntitiesForOrganization.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.health.HealthDescribeAffectedEntitiesForOrganizationRequest`](#aws-cdk-sdk.health.HealthDescribeAffectedEntitiesForOrganizationRequest)

---



#### Properties <a name="Properties"></a>

##### `entities`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeAffectedEntitiesForOrganization.property.entities"></a>

- *Type:* [`aws-cdk-sdk.health.HealthAffectedEntity`](#aws-cdk-sdk.health.HealthAffectedEntity)[]

---

##### `failedSet`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeAffectedEntitiesForOrganization.property.failedSet"></a>

- *Type:* [`aws-cdk-sdk.health.HealthOrganizationAffectedEntitiesErrorItem`](#aws-cdk-sdk.health.HealthOrganizationAffectedEntitiesErrorItem)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeAffectedEntitiesForOrganization.property.nextToken"></a>

- *Type:* `string`

---


### HealthResponsesDescribeEntityAggregates <a name="aws-cdk-sdk.health.HealthResponsesDescribeEntityAggregates"></a>

#### Initializer <a name="aws-cdk-sdk.health.HealthResponsesDescribeEntityAggregates.Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

new health.HealthResponsesDescribeEntityAggregates(__scope: Construct, __resources: string[], __input: HealthDescribeEntityAggregatesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeEntityAggregates.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeEntityAggregates.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeEntityAggregates.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.health.HealthDescribeEntityAggregatesRequest`](#aws-cdk-sdk.health.HealthDescribeEntityAggregatesRequest)

---



#### Properties <a name="Properties"></a>

##### `entityAggregates`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeEntityAggregates.property.entityAggregates"></a>

- *Type:* [`aws-cdk-sdk.health.HealthEntityAggregate`](#aws-cdk-sdk.health.HealthEntityAggregate)[]

---


### HealthResponsesDescribeEventAggregates <a name="aws-cdk-sdk.health.HealthResponsesDescribeEventAggregates"></a>

#### Initializer <a name="aws-cdk-sdk.health.HealthResponsesDescribeEventAggregates.Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

new health.HealthResponsesDescribeEventAggregates(__scope: Construct, __resources: string[], __input: HealthDescribeEventAggregatesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeEventAggregates.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeEventAggregates.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeEventAggregates.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.health.HealthDescribeEventAggregatesRequest`](#aws-cdk-sdk.health.HealthDescribeEventAggregatesRequest)

---



#### Properties <a name="Properties"></a>

##### `eventAggregates`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeEventAggregates.property.eventAggregates"></a>

- *Type:* [`aws-cdk-sdk.health.HealthEventAggregate`](#aws-cdk-sdk.health.HealthEventAggregate)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeEventAggregates.property.nextToken"></a>

- *Type:* `string`

---


### HealthResponsesDescribeEventDetails <a name="aws-cdk-sdk.health.HealthResponsesDescribeEventDetails"></a>

#### Initializer <a name="aws-cdk-sdk.health.HealthResponsesDescribeEventDetails.Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

new health.HealthResponsesDescribeEventDetails(__scope: Construct, __resources: string[], __input: HealthDescribeEventDetailsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeEventDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeEventDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeEventDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.health.HealthDescribeEventDetailsRequest`](#aws-cdk-sdk.health.HealthDescribeEventDetailsRequest)

---



#### Properties <a name="Properties"></a>

##### `failedSet`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeEventDetails.property.failedSet"></a>

- *Type:* [`aws-cdk-sdk.health.HealthEventDetailsErrorItem`](#aws-cdk-sdk.health.HealthEventDetailsErrorItem)[]

---

##### `successfulSet`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeEventDetails.property.successfulSet"></a>

- *Type:* [`aws-cdk-sdk.health.HealthEventDetails`](#aws-cdk-sdk.health.HealthEventDetails)[]

---


### HealthResponsesDescribeEventDetailsForOrganization <a name="aws-cdk-sdk.health.HealthResponsesDescribeEventDetailsForOrganization"></a>

#### Initializer <a name="aws-cdk-sdk.health.HealthResponsesDescribeEventDetailsForOrganization.Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

new health.HealthResponsesDescribeEventDetailsForOrganization(__scope: Construct, __resources: string[], __input: HealthDescribeEventDetailsForOrganizationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeEventDetailsForOrganization.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeEventDetailsForOrganization.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeEventDetailsForOrganization.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.health.HealthDescribeEventDetailsForOrganizationRequest`](#aws-cdk-sdk.health.HealthDescribeEventDetailsForOrganizationRequest)

---



#### Properties <a name="Properties"></a>

##### `failedSet`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeEventDetailsForOrganization.property.failedSet"></a>

- *Type:* [`aws-cdk-sdk.health.HealthOrganizationEventDetailsErrorItem`](#aws-cdk-sdk.health.HealthOrganizationEventDetailsErrorItem)[]

---

##### `successfulSet`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeEventDetailsForOrganization.property.successfulSet"></a>

- *Type:* [`aws-cdk-sdk.health.HealthOrganizationEventDetails`](#aws-cdk-sdk.health.HealthOrganizationEventDetails)[]

---


### HealthResponsesDescribeEvents <a name="aws-cdk-sdk.health.HealthResponsesDescribeEvents"></a>

#### Initializer <a name="aws-cdk-sdk.health.HealthResponsesDescribeEvents.Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

new health.HealthResponsesDescribeEvents(__scope: Construct, __resources: string[], __input: HealthDescribeEventsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeEvents.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeEvents.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeEvents.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.health.HealthDescribeEventsRequest`](#aws-cdk-sdk.health.HealthDescribeEventsRequest)

---



#### Properties <a name="Properties"></a>

##### `events`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeEvents.property.events"></a>

- *Type:* [`aws-cdk-sdk.health.HealthEvent`](#aws-cdk-sdk.health.HealthEvent)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeEvents.property.nextToken"></a>

- *Type:* `string`

---


### HealthResponsesDescribeEventsForOrganization <a name="aws-cdk-sdk.health.HealthResponsesDescribeEventsForOrganization"></a>

#### Initializer <a name="aws-cdk-sdk.health.HealthResponsesDescribeEventsForOrganization.Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

new health.HealthResponsesDescribeEventsForOrganization(__scope: Construct, __resources: string[], __input: HealthDescribeEventsForOrganizationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeEventsForOrganization.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeEventsForOrganization.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeEventsForOrganization.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.health.HealthDescribeEventsForOrganizationRequest`](#aws-cdk-sdk.health.HealthDescribeEventsForOrganizationRequest)

---



#### Properties <a name="Properties"></a>

##### `events`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeEventsForOrganization.property.events"></a>

- *Type:* [`aws-cdk-sdk.health.HealthOrganizationEvent`](#aws-cdk-sdk.health.HealthOrganizationEvent)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeEventsForOrganization.property.nextToken"></a>

- *Type:* `string`

---


### HealthResponsesDescribeEventTypes <a name="aws-cdk-sdk.health.HealthResponsesDescribeEventTypes"></a>

#### Initializer <a name="aws-cdk-sdk.health.HealthResponsesDescribeEventTypes.Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

new health.HealthResponsesDescribeEventTypes(__scope: Construct, __resources: string[], __input: HealthDescribeEventTypesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeEventTypes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeEventTypes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeEventTypes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.health.HealthDescribeEventTypesRequest`](#aws-cdk-sdk.health.HealthDescribeEventTypesRequest)

---



#### Properties <a name="Properties"></a>

##### `eventTypes`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeEventTypes.property.eventTypes"></a>

- *Type:* [`aws-cdk-sdk.health.HealthEventType`](#aws-cdk-sdk.health.HealthEventType)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeEventTypes.property.nextToken"></a>

- *Type:* `string`

---


### HealthResponsesDescribeHealthServiceStatusForOrganization <a name="aws-cdk-sdk.health.HealthResponsesDescribeHealthServiceStatusForOrganization"></a>

#### Initializer <a name="aws-cdk-sdk.health.HealthResponsesDescribeHealthServiceStatusForOrganization.Initializer"></a>

```typescript
import { health } from 'aws-cdk-sdk'

new health.HealthResponsesDescribeHealthServiceStatusForOrganization(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeHealthServiceStatusForOrganization.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeHealthServiceStatusForOrganization.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `healthServiceAccessStatusForOrganization`<sup>Required</sup> <a name="aws-cdk-sdk.health.HealthResponsesDescribeHealthServiceStatusForOrganization.property.healthServiceAccessStatusForOrganization"></a>

- *Type:* `string`

---



