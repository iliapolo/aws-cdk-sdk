# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### ServiceCatalogClient <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `acceptPortfolioShare` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.acceptPortfolioShare"></a>

```typescript
public acceptPortfolioShare(input: ServiceCatalogAcceptPortfolioShareInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogAcceptPortfolioShareInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogAcceptPortfolioShareInput)

---

##### `associateBudgetWithResource` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.associateBudgetWithResource"></a>

```typescript
public associateBudgetWithResource(input: ServiceCatalogAssociateBudgetWithResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogAssociateBudgetWithResourceInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogAssociateBudgetWithResourceInput)

---

##### `associatePrincipalWithPortfolio` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.associatePrincipalWithPortfolio"></a>

```typescript
public associatePrincipalWithPortfolio(input: ServiceCatalogAssociatePrincipalWithPortfolioInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogAssociatePrincipalWithPortfolioInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogAssociatePrincipalWithPortfolioInput)

---

##### `associateProductWithPortfolio` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.associateProductWithPortfolio"></a>

```typescript
public associateProductWithPortfolio(input: ServiceCatalogAssociateProductWithPortfolioInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogAssociateProductWithPortfolioInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogAssociateProductWithPortfolioInput)

---

##### `associateServiceActionWithProvisioningArtifact` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.associateServiceActionWithProvisioningArtifact"></a>

```typescript
public associateServiceActionWithProvisioningArtifact(input: ServiceCatalogAssociateServiceActionWithProvisioningArtifactInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogAssociateServiceActionWithProvisioningArtifactInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogAssociateServiceActionWithProvisioningArtifactInput)

---

##### `associateTagOptionWithResource` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.associateTagOptionWithResource"></a>

```typescript
public associateTagOptionWithResource(input: ServiceCatalogAssociateTagOptionWithResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogAssociateTagOptionWithResourceInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogAssociateTagOptionWithResourceInput)

---

##### `batchAssociateServiceActionWithProvisioningArtifact` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.batchAssociateServiceActionWithProvisioningArtifact"></a>

```typescript
public batchAssociateServiceActionWithProvisioningArtifact(input: ServiceCatalogBatchAssociateServiceActionWithProvisioningArtifactInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogBatchAssociateServiceActionWithProvisioningArtifactInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogBatchAssociateServiceActionWithProvisioningArtifactInput)

---

##### `batchDisassociateServiceActionFromProvisioningArtifact` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.batchDisassociateServiceActionFromProvisioningArtifact"></a>

```typescript
public batchDisassociateServiceActionFromProvisioningArtifact(input: ServiceCatalogBatchDisassociateServiceActionFromProvisioningArtifactInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogBatchDisassociateServiceActionFromProvisioningArtifactInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogBatchDisassociateServiceActionFromProvisioningArtifactInput)

---

##### `copyProduct` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.copyProduct"></a>

```typescript
public copyProduct(input: ServiceCatalogCopyProductInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogCopyProductInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogCopyProductInput)

---

##### `createConstraint` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.createConstraint"></a>

```typescript
public createConstraint(input: ServiceCatalogCreateConstraintInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogCreateConstraintInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogCreateConstraintInput)

---

##### `createPortfolio` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.createPortfolio"></a>

```typescript
public createPortfolio(input: ServiceCatalogCreatePortfolioInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogCreatePortfolioInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogCreatePortfolioInput)

---

##### `createPortfolioShare` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.createPortfolioShare"></a>

```typescript
public createPortfolioShare(input: ServiceCatalogCreatePortfolioShareInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogCreatePortfolioShareInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogCreatePortfolioShareInput)

---

##### `createProduct` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.createProduct"></a>

```typescript
public createProduct(input: ServiceCatalogCreateProductInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProductInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProductInput)

---

##### `createProvisionedProductPlan` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.createProvisionedProductPlan"></a>

```typescript
public createProvisionedProductPlan(input: ServiceCatalogCreateProvisionedProductPlanInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProvisionedProductPlanInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProvisionedProductPlanInput)

---

##### `createProvisioningArtifact` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.createProvisioningArtifact"></a>

```typescript
public createProvisioningArtifact(input: ServiceCatalogCreateProvisioningArtifactInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProvisioningArtifactInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProvisioningArtifactInput)

---

##### `createServiceAction` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.createServiceAction"></a>

```typescript
public createServiceAction(input: ServiceCatalogCreateServiceActionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogCreateServiceActionInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogCreateServiceActionInput)

---

##### `createTagOption` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.createTagOption"></a>

```typescript
public createTagOption(input: ServiceCatalogCreateTagOptionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogCreateTagOptionInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogCreateTagOptionInput)

---

##### `deleteConstraint` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.deleteConstraint"></a>

```typescript
public deleteConstraint(input: ServiceCatalogDeleteConstraintInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDeleteConstraintInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDeleteConstraintInput)

---

##### `deletePortfolio` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.deletePortfolio"></a>

```typescript
public deletePortfolio(input: ServiceCatalogDeletePortfolioInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDeletePortfolioInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDeletePortfolioInput)

---

##### `deletePortfolioShare` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.deletePortfolioShare"></a>

```typescript
public deletePortfolioShare(input: ServiceCatalogDeletePortfolioShareInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDeletePortfolioShareInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDeletePortfolioShareInput)

---

##### `deleteProduct` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.deleteProduct"></a>

```typescript
public deleteProduct(input: ServiceCatalogDeleteProductInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDeleteProductInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDeleteProductInput)

---

##### `deleteProvisionedProductPlan` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.deleteProvisionedProductPlan"></a>

```typescript
public deleteProvisionedProductPlan(input: ServiceCatalogDeleteProvisionedProductPlanInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDeleteProvisionedProductPlanInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDeleteProvisionedProductPlanInput)

---

##### `deleteProvisioningArtifact` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.deleteProvisioningArtifact"></a>

```typescript
public deleteProvisioningArtifact(input: ServiceCatalogDeleteProvisioningArtifactInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDeleteProvisioningArtifactInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDeleteProvisioningArtifactInput)

---

##### `deleteServiceAction` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.deleteServiceAction"></a>

```typescript
public deleteServiceAction(input: ServiceCatalogDeleteServiceActionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDeleteServiceActionInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDeleteServiceActionInput)

---

##### `deleteTagOption` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.deleteTagOption"></a>

```typescript
public deleteTagOption(input: ServiceCatalogDeleteTagOptionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDeleteTagOptionInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDeleteTagOptionInput)

---

##### `describeConstraint` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.describeConstraint"></a>

```typescript
public describeConstraint(input: ServiceCatalogDescribeConstraintInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeConstraintInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeConstraintInput)

---

##### `describeCopyProductStatus` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.describeCopyProductStatus"></a>

```typescript
public describeCopyProductStatus(input: ServiceCatalogDescribeCopyProductStatusInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeCopyProductStatusInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeCopyProductStatusInput)

---

##### `describePortfolio` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.describePortfolio"></a>

```typescript
public describePortfolio(input: ServiceCatalogDescribePortfolioInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDescribePortfolioInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDescribePortfolioInput)

---

##### `describePortfolioShareStatus` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.describePortfolioShareStatus"></a>

```typescript
public describePortfolioShareStatus(input: ServiceCatalogDescribePortfolioShareStatusInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDescribePortfolioShareStatusInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDescribePortfolioShareStatusInput)

---

##### `describeProduct` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.describeProduct"></a>

```typescript
public describeProduct(input: ServiceCatalogDescribeProductInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProductInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProductInput)

---

##### `describeProductAsAdmin` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.describeProductAsAdmin"></a>

```typescript
public describeProductAsAdmin(input: ServiceCatalogDescribeProductAsAdminInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProductAsAdminInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProductAsAdminInput)

---

##### `describeProductView` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.describeProductView"></a>

```typescript
public describeProductView(input: ServiceCatalogDescribeProductViewInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProductViewInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProductViewInput)

---

##### `describeProvisionedProduct` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.describeProvisionedProduct"></a>

```typescript
public describeProvisionedProduct(input: ServiceCatalogDescribeProvisionedProductInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisionedProductInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisionedProductInput)

---

##### `describeProvisionedProductPlan` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.describeProvisionedProductPlan"></a>

```typescript
public describeProvisionedProductPlan(input: ServiceCatalogDescribeProvisionedProductPlanInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisionedProductPlanInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisionedProductPlanInput)

---

##### `describeProvisioningArtifact` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.describeProvisioningArtifact"></a>

```typescript
public describeProvisioningArtifact(input: ServiceCatalogDescribeProvisioningArtifactInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisioningArtifactInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisioningArtifactInput)

---

##### `describeProvisioningParameters` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.describeProvisioningParameters"></a>

```typescript
public describeProvisioningParameters(input: ServiceCatalogDescribeProvisioningParametersInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisioningParametersInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisioningParametersInput)

---

##### `describeRecord` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.describeRecord"></a>

```typescript
public describeRecord(input: ServiceCatalogDescribeRecordInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeRecordInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeRecordInput)

---

##### `describeServiceAction` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.describeServiceAction"></a>

```typescript
public describeServiceAction(input: ServiceCatalogDescribeServiceActionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeServiceActionInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeServiceActionInput)

---

##### `describeServiceActionExecutionParameters` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.describeServiceActionExecutionParameters"></a>

```typescript
public describeServiceActionExecutionParameters(input: ServiceCatalogDescribeServiceActionExecutionParametersInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeServiceActionExecutionParametersInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeServiceActionExecutionParametersInput)

---

##### `describeTagOption` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.describeTagOption"></a>

```typescript
public describeTagOption(input: ServiceCatalogDescribeTagOptionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeTagOptionInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeTagOptionInput)

---

##### `disableAwsOrganizationsAccess` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.disableAwsOrganizationsAccess"></a>

```typescript
public disableAwsOrganizationsAccess()
```

##### `disassociateBudgetFromResource` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.disassociateBudgetFromResource"></a>

```typescript
public disassociateBudgetFromResource(input: ServiceCatalogDisassociateBudgetFromResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDisassociateBudgetFromResourceInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDisassociateBudgetFromResourceInput)

---

##### `disassociatePrincipalFromPortfolio` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.disassociatePrincipalFromPortfolio"></a>

```typescript
public disassociatePrincipalFromPortfolio(input: ServiceCatalogDisassociatePrincipalFromPortfolioInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDisassociatePrincipalFromPortfolioInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDisassociatePrincipalFromPortfolioInput)

---

##### `disassociateProductFromPortfolio` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.disassociateProductFromPortfolio"></a>

```typescript
public disassociateProductFromPortfolio(input: ServiceCatalogDisassociateProductFromPortfolioInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDisassociateProductFromPortfolioInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDisassociateProductFromPortfolioInput)

---

##### `disassociateServiceActionFromProvisioningArtifact` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.disassociateServiceActionFromProvisioningArtifact"></a>

```typescript
public disassociateServiceActionFromProvisioningArtifact(input: ServiceCatalogDisassociateServiceActionFromProvisioningArtifactInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDisassociateServiceActionFromProvisioningArtifactInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDisassociateServiceActionFromProvisioningArtifactInput)

---

##### `disassociateTagOptionFromResource` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.disassociateTagOptionFromResource"></a>

```typescript
public disassociateTagOptionFromResource(input: ServiceCatalogDisassociateTagOptionFromResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDisassociateTagOptionFromResourceInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDisassociateTagOptionFromResourceInput)

---

##### `enableAwsOrganizationsAccess` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.enableAwsOrganizationsAccess"></a>

```typescript
public enableAwsOrganizationsAccess()
```

##### `executeProvisionedProductPlan` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.executeProvisionedProductPlan"></a>

```typescript
public executeProvisionedProductPlan(input: ServiceCatalogExecuteProvisionedProductPlanInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogExecuteProvisionedProductPlanInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogExecuteProvisionedProductPlanInput)

---

##### `executeProvisionedProductServiceAction` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.executeProvisionedProductServiceAction"></a>

```typescript
public executeProvisionedProductServiceAction(input: ServiceCatalogExecuteProvisionedProductServiceActionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogExecuteProvisionedProductServiceActionInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogExecuteProvisionedProductServiceActionInput)

---

##### `fetchAwsOrganizationsAccessStatus` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.fetchAwsOrganizationsAccessStatus"></a>

```typescript
public fetchAwsOrganizationsAccessStatus()
```

##### `fetchProvisionedProductOutputs` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.fetchProvisionedProductOutputs"></a>

```typescript
public fetchProvisionedProductOutputs(input: ServiceCatalogGetProvisionedProductOutputsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogGetProvisionedProductOutputsInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogGetProvisionedProductOutputsInput)

---

##### `importAsProvisionedProduct` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.importAsProvisionedProduct"></a>

```typescript
public importAsProvisionedProduct(input: ServiceCatalogImportAsProvisionedProductInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogImportAsProvisionedProductInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogImportAsProvisionedProductInput)

---

##### `listAcceptedPortfolioShares` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.listAcceptedPortfolioShares"></a>

```typescript
public listAcceptedPortfolioShares(input: ServiceCatalogListAcceptedPortfolioSharesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogListAcceptedPortfolioSharesInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogListAcceptedPortfolioSharesInput)

---

##### `listBudgetsForResource` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.listBudgetsForResource"></a>

```typescript
public listBudgetsForResource(input: ServiceCatalogListBudgetsForResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogListBudgetsForResourceInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogListBudgetsForResourceInput)

---

##### `listConstraintsForPortfolio` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.listConstraintsForPortfolio"></a>

```typescript
public listConstraintsForPortfolio(input: ServiceCatalogListConstraintsForPortfolioInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogListConstraintsForPortfolioInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogListConstraintsForPortfolioInput)

---

##### `listLaunchPaths` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.listLaunchPaths"></a>

```typescript
public listLaunchPaths(input: ServiceCatalogListLaunchPathsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogListLaunchPathsInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogListLaunchPathsInput)

---

##### `listOrganizationPortfolioAccess` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.listOrganizationPortfolioAccess"></a>

```typescript
public listOrganizationPortfolioAccess(input: ServiceCatalogListOrganizationPortfolioAccessInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogListOrganizationPortfolioAccessInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogListOrganizationPortfolioAccessInput)

---

##### `listPortfolioAccess` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.listPortfolioAccess"></a>

```typescript
public listPortfolioAccess(input: ServiceCatalogListPortfolioAccessInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogListPortfolioAccessInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogListPortfolioAccessInput)

---

##### `listPortfolios` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.listPortfolios"></a>

```typescript
public listPortfolios(input: ServiceCatalogListPortfoliosInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogListPortfoliosInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogListPortfoliosInput)

---

##### `listPortfoliosForProduct` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.listPortfoliosForProduct"></a>

```typescript
public listPortfoliosForProduct(input: ServiceCatalogListPortfoliosForProductInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogListPortfoliosForProductInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogListPortfoliosForProductInput)

---

##### `listPrincipalsForPortfolio` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.listPrincipalsForPortfolio"></a>

```typescript
public listPrincipalsForPortfolio(input: ServiceCatalogListPrincipalsForPortfolioInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogListPrincipalsForPortfolioInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogListPrincipalsForPortfolioInput)

---

##### `listProvisionedProductPlans` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.listProvisionedProductPlans"></a>

```typescript
public listProvisionedProductPlans(input: ServiceCatalogListProvisionedProductPlansInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogListProvisionedProductPlansInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogListProvisionedProductPlansInput)

---

##### `listProvisioningArtifacts` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.listProvisioningArtifacts"></a>

```typescript
public listProvisioningArtifacts(input: ServiceCatalogListProvisioningArtifactsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogListProvisioningArtifactsInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogListProvisioningArtifactsInput)

---

##### `listProvisioningArtifactsForServiceAction` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.listProvisioningArtifactsForServiceAction"></a>

```typescript
public listProvisioningArtifactsForServiceAction(input: ServiceCatalogListProvisioningArtifactsForServiceActionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogListProvisioningArtifactsForServiceActionInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogListProvisioningArtifactsForServiceActionInput)

---

##### `listRecordHistory` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.listRecordHistory"></a>

```typescript
public listRecordHistory(input: ServiceCatalogListRecordHistoryInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogListRecordHistoryInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogListRecordHistoryInput)

---

##### `listResourcesForTagOption` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.listResourcesForTagOption"></a>

```typescript
public listResourcesForTagOption(input: ServiceCatalogListResourcesForTagOptionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogListResourcesForTagOptionInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogListResourcesForTagOptionInput)

---

##### `listServiceActions` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.listServiceActions"></a>

```typescript
public listServiceActions(input: ServiceCatalogListServiceActionsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogListServiceActionsInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogListServiceActionsInput)

---

##### `listServiceActionsForProvisioningArtifact` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.listServiceActionsForProvisioningArtifact"></a>

```typescript
public listServiceActionsForProvisioningArtifact(input: ServiceCatalogListServiceActionsForProvisioningArtifactInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogListServiceActionsForProvisioningArtifactInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogListServiceActionsForProvisioningArtifactInput)

---

##### `listStackInstancesForProvisionedProduct` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.listStackInstancesForProvisionedProduct"></a>

```typescript
public listStackInstancesForProvisionedProduct(input: ServiceCatalogListStackInstancesForProvisionedProductInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogListStackInstancesForProvisionedProductInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogListStackInstancesForProvisionedProductInput)

---

##### `listTagOptions` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.listTagOptions"></a>

```typescript
public listTagOptions(input: ServiceCatalogListTagOptionsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogListTagOptionsInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogListTagOptionsInput)

---

##### `provisionProduct` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.provisionProduct"></a>

```typescript
public provisionProduct(input: ServiceCatalogProvisionProductInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionProductInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionProductInput)

---

##### `rejectPortfolioShare` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.rejectPortfolioShare"></a>

```typescript
public rejectPortfolioShare(input: ServiceCatalogRejectPortfolioShareInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogRejectPortfolioShareInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogRejectPortfolioShareInput)

---

##### `scanProvisionedProducts` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.scanProvisionedProducts"></a>

```typescript
public scanProvisionedProducts(input: ServiceCatalogScanProvisionedProductsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogScanProvisionedProductsInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogScanProvisionedProductsInput)

---

##### `searchProducts` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.searchProducts"></a>

```typescript
public searchProducts(input: ServiceCatalogSearchProductsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProductsInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProductsInput)

---

##### `searchProductsAsAdmin` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.searchProductsAsAdmin"></a>

```typescript
public searchProductsAsAdmin(input: ServiceCatalogSearchProductsAsAdminInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProductsAsAdminInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProductsAsAdminInput)

---

##### `searchProvisionedProducts` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.searchProvisionedProducts"></a>

```typescript
public searchProvisionedProducts(input: ServiceCatalogSearchProvisionedProductsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProvisionedProductsInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProvisionedProductsInput)

---

##### `terminateProvisionedProduct` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.terminateProvisionedProduct"></a>

```typescript
public terminateProvisionedProduct(input: ServiceCatalogTerminateProvisionedProductInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogTerminateProvisionedProductInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogTerminateProvisionedProductInput)

---

##### `updateConstraint` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.updateConstraint"></a>

```typescript
public updateConstraint(input: ServiceCatalogUpdateConstraintInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateConstraintInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateConstraintInput)

---

##### `updatePortfolio` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.updatePortfolio"></a>

```typescript
public updatePortfolio(input: ServiceCatalogUpdatePortfolioInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogUpdatePortfolioInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogUpdatePortfolioInput)

---

##### `updateProduct` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.updateProduct"></a>

```typescript
public updateProduct(input: ServiceCatalogUpdateProductInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProductInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProductInput)

---

##### `updateProvisionedProduct` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.updateProvisionedProduct"></a>

```typescript
public updateProvisionedProduct(input: ServiceCatalogUpdateProvisionedProductInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisionedProductInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisionedProductInput)

---

##### `updateProvisionedProductProperties` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.updateProvisionedProductProperties"></a>

```typescript
public updateProvisionedProductProperties(input: ServiceCatalogUpdateProvisionedProductPropertiesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisionedProductPropertiesInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisionedProductPropertiesInput)

---

##### `updateProvisioningArtifact` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.updateProvisioningArtifact"></a>

```typescript
public updateProvisioningArtifact(input: ServiceCatalogUpdateProvisioningArtifactInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisioningArtifactInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisioningArtifactInput)

---

##### `updateServiceAction` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.updateServiceAction"></a>

```typescript
public updateServiceAction(input: ServiceCatalogUpdateServiceActionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateServiceActionInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateServiceActionInput)

---

##### `updateTagOption` <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.updateTagOption"></a>

```typescript
public updateTagOption(input: ServiceCatalogUpdateTagOptionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateTagOptionInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateTagOptionInput)

---




## Structs <a name="Structs"></a>

### ServiceCatalogAcceptPortfolioShareInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogAcceptPortfolioShareInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogAcceptPortfolioShareInput: servicecatalog.ServiceCatalogAcceptPortfolioShareInput = { ... }
```

##### `portfolioId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogAcceptPortfolioShareInput.property.portfolioId"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogAcceptPortfolioShareInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `portfolioShareType`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogAcceptPortfolioShareInput.property.portfolioShareType"></a>

- *Type:* `string`

---

### ServiceCatalogAcceptPortfolioShareOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogAcceptPortfolioShareOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogAcceptPortfolioShareOutput: servicecatalog.ServiceCatalogAcceptPortfolioShareOutput = { ... }
```

### ServiceCatalogAccessLevelFilter <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogAccessLevelFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogAccessLevelFilter: servicecatalog.ServiceCatalogAccessLevelFilter = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogAccessLevelFilter.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogAccessLevelFilter.property.value"></a>

- *Type:* `string`

---

### ServiceCatalogAssociateBudgetWithResourceInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogAssociateBudgetWithResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogAssociateBudgetWithResourceInput: servicecatalog.ServiceCatalogAssociateBudgetWithResourceInput = { ... }
```

##### `budgetName`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogAssociateBudgetWithResourceInput.property.budgetName"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogAssociateBudgetWithResourceInput.property.resourceId"></a>

- *Type:* `string`

---

### ServiceCatalogAssociateBudgetWithResourceOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogAssociateBudgetWithResourceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogAssociateBudgetWithResourceOutput: servicecatalog.ServiceCatalogAssociateBudgetWithResourceOutput = { ... }
```

### ServiceCatalogAssociatePrincipalWithPortfolioInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogAssociatePrincipalWithPortfolioInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogAssociatePrincipalWithPortfolioInput: servicecatalog.ServiceCatalogAssociatePrincipalWithPortfolioInput = { ... }
```

##### `portfolioId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogAssociatePrincipalWithPortfolioInput.property.portfolioId"></a>

- *Type:* `string`

---

##### `principalArn`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogAssociatePrincipalWithPortfolioInput.property.principalArn"></a>

- *Type:* `string`

---

##### `principalType`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogAssociatePrincipalWithPortfolioInput.property.principalType"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogAssociatePrincipalWithPortfolioInput.property.acceptLanguage"></a>

- *Type:* `string`

---

### ServiceCatalogAssociatePrincipalWithPortfolioOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogAssociatePrincipalWithPortfolioOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogAssociatePrincipalWithPortfolioOutput: servicecatalog.ServiceCatalogAssociatePrincipalWithPortfolioOutput = { ... }
```

### ServiceCatalogAssociateProductWithPortfolioInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogAssociateProductWithPortfolioInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogAssociateProductWithPortfolioInput: servicecatalog.ServiceCatalogAssociateProductWithPortfolioInput = { ... }
```

##### `portfolioId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogAssociateProductWithPortfolioInput.property.portfolioId"></a>

- *Type:* `string`

---

##### `productId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogAssociateProductWithPortfolioInput.property.productId"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogAssociateProductWithPortfolioInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `sourcePortfolioId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogAssociateProductWithPortfolioInput.property.sourcePortfolioId"></a>

- *Type:* `string`

---

### ServiceCatalogAssociateProductWithPortfolioOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogAssociateProductWithPortfolioOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogAssociateProductWithPortfolioOutput: servicecatalog.ServiceCatalogAssociateProductWithPortfolioOutput = { ... }
```

### ServiceCatalogAssociateServiceActionWithProvisioningArtifactInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogAssociateServiceActionWithProvisioningArtifactInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogAssociateServiceActionWithProvisioningArtifactInput: servicecatalog.ServiceCatalogAssociateServiceActionWithProvisioningArtifactInput = { ... }
```

##### `productId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogAssociateServiceActionWithProvisioningArtifactInput.property.productId"></a>

- *Type:* `string`

---

##### `provisioningArtifactId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogAssociateServiceActionWithProvisioningArtifactInput.property.provisioningArtifactId"></a>

- *Type:* `string`

---

##### `serviceActionId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogAssociateServiceActionWithProvisioningArtifactInput.property.serviceActionId"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogAssociateServiceActionWithProvisioningArtifactInput.property.acceptLanguage"></a>

- *Type:* `string`

---

### ServiceCatalogAssociateServiceActionWithProvisioningArtifactOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogAssociateServiceActionWithProvisioningArtifactOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogAssociateServiceActionWithProvisioningArtifactOutput: servicecatalog.ServiceCatalogAssociateServiceActionWithProvisioningArtifactOutput = { ... }
```

### ServiceCatalogAssociateTagOptionWithResourceInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogAssociateTagOptionWithResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogAssociateTagOptionWithResourceInput: servicecatalog.ServiceCatalogAssociateTagOptionWithResourceInput = { ... }
```

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogAssociateTagOptionWithResourceInput.property.resourceId"></a>

- *Type:* `string`

---

##### `tagOptionId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogAssociateTagOptionWithResourceInput.property.tagOptionId"></a>

- *Type:* `string`

---

### ServiceCatalogAssociateTagOptionWithResourceOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogAssociateTagOptionWithResourceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogAssociateTagOptionWithResourceOutput: servicecatalog.ServiceCatalogAssociateTagOptionWithResourceOutput = { ... }
```

### ServiceCatalogBatchAssociateServiceActionWithProvisioningArtifactInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogBatchAssociateServiceActionWithProvisioningArtifactInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogBatchAssociateServiceActionWithProvisioningArtifactInput: servicecatalog.ServiceCatalogBatchAssociateServiceActionWithProvisioningArtifactInput = { ... }
```

##### `serviceActionAssociations`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogBatchAssociateServiceActionWithProvisioningArtifactInput.property.serviceActionAssociations"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogServiceActionAssociation`](#aws-cdk-sdk.servicecatalog.ServiceCatalogServiceActionAssociation)[]

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogBatchAssociateServiceActionWithProvisioningArtifactInput.property.acceptLanguage"></a>

- *Type:* `string`

---

### ServiceCatalogBatchAssociateServiceActionWithProvisioningArtifactOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogBatchAssociateServiceActionWithProvisioningArtifactOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogBatchAssociateServiceActionWithProvisioningArtifactOutput: servicecatalog.ServiceCatalogBatchAssociateServiceActionWithProvisioningArtifactOutput = { ... }
```

##### `failedServiceActionAssociations`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogBatchAssociateServiceActionWithProvisioningArtifactOutput.property.failedServiceActionAssociations"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogFailedServiceActionAssociation`](#aws-cdk-sdk.servicecatalog.ServiceCatalogFailedServiceActionAssociation)[]

---

### ServiceCatalogBatchDisassociateServiceActionFromProvisioningArtifactInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogBatchDisassociateServiceActionFromProvisioningArtifactInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogBatchDisassociateServiceActionFromProvisioningArtifactInput: servicecatalog.ServiceCatalogBatchDisassociateServiceActionFromProvisioningArtifactInput = { ... }
```

##### `serviceActionAssociations`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogBatchDisassociateServiceActionFromProvisioningArtifactInput.property.serviceActionAssociations"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogServiceActionAssociation`](#aws-cdk-sdk.servicecatalog.ServiceCatalogServiceActionAssociation)[]

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogBatchDisassociateServiceActionFromProvisioningArtifactInput.property.acceptLanguage"></a>

- *Type:* `string`

---

### ServiceCatalogBatchDisassociateServiceActionFromProvisioningArtifactOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogBatchDisassociateServiceActionFromProvisioningArtifactOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogBatchDisassociateServiceActionFromProvisioningArtifactOutput: servicecatalog.ServiceCatalogBatchDisassociateServiceActionFromProvisioningArtifactOutput = { ... }
```

##### `failedServiceActionAssociations`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogBatchDisassociateServiceActionFromProvisioningArtifactOutput.property.failedServiceActionAssociations"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogFailedServiceActionAssociation`](#aws-cdk-sdk.servicecatalog.ServiceCatalogFailedServiceActionAssociation)[]

---

### ServiceCatalogBudgetDetail <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogBudgetDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogBudgetDetail: servicecatalog.ServiceCatalogBudgetDetail = { ... }
```

##### `budgetName`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogBudgetDetail.property.budgetName"></a>

- *Type:* `string`

---

### ServiceCatalogCloudWatchDashboard <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCloudWatchDashboard"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogCloudWatchDashboard: servicecatalog.ServiceCatalogCloudWatchDashboard = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCloudWatchDashboard.property.name"></a>

- *Type:* `string`

---

### ServiceCatalogConstraintDetail <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogConstraintDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogConstraintDetail: servicecatalog.ServiceCatalogConstraintDetail = { ... }
```

##### `constraintId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogConstraintDetail.property.constraintId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogConstraintDetail.property.description"></a>

- *Type:* `string`

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogConstraintDetail.property.owner"></a>

- *Type:* `string`

---

##### `portfolioId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogConstraintDetail.property.portfolioId"></a>

- *Type:* `string`

---

##### `productId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogConstraintDetail.property.productId"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogConstraintDetail.property.type"></a>

- *Type:* `string`

---

### ServiceCatalogConstraintSummary <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogConstraintSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogConstraintSummary: servicecatalog.ServiceCatalogConstraintSummary = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogConstraintSummary.property.description"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogConstraintSummary.property.type"></a>

- *Type:* `string`

---

### ServiceCatalogCopyProductInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCopyProductInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogCopyProductInput: servicecatalog.ServiceCatalogCopyProductInput = { ... }
```

##### `idempotencyToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCopyProductInput.property.idempotencyToken"></a>

- *Type:* `string`

---

##### `sourceProductArn`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCopyProductInput.property.sourceProductArn"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCopyProductInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `copyOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCopyProductInput.property.copyOptions"></a>

- *Type:* `string`[]

---

##### `sourceProvisioningArtifactIdentifiers`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCopyProductInput.property.sourceProvisioningArtifactIdentifiers"></a>

- *Type:* {[ key: string ]: `string`}[]

---

##### `targetProductId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCopyProductInput.property.targetProductId"></a>

- *Type:* `string`

---

##### `targetProductName`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCopyProductInput.property.targetProductName"></a>

- *Type:* `string`

---

### ServiceCatalogCopyProductOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCopyProductOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogCopyProductOutput: servicecatalog.ServiceCatalogCopyProductOutput = { ... }
```

##### `copyProductToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCopyProductOutput.property.copyProductToken"></a>

- *Type:* `string`

---

### ServiceCatalogCreateConstraintInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateConstraintInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogCreateConstraintInput: servicecatalog.ServiceCatalogCreateConstraintInput = { ... }
```

##### `idempotencyToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateConstraintInput.property.idempotencyToken"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateConstraintInput.property.parameters"></a>

- *Type:* `string`

---

##### `portfolioId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateConstraintInput.property.portfolioId"></a>

- *Type:* `string`

---

##### `productId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateConstraintInput.property.productId"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateConstraintInput.property.type"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateConstraintInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateConstraintInput.property.description"></a>

- *Type:* `string`

---

### ServiceCatalogCreateConstraintOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateConstraintOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogCreateConstraintOutput: servicecatalog.ServiceCatalogCreateConstraintOutput = { ... }
```

##### `constraintDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateConstraintOutput.property.constraintDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogConstraintDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogConstraintDetail)

---

##### `constraintParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateConstraintOutput.property.constraintParameters"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateConstraintOutput.property.status"></a>

- *Type:* `string`

---

### ServiceCatalogCreatePortfolioInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreatePortfolioInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogCreatePortfolioInput: servicecatalog.ServiceCatalogCreatePortfolioInput = { ... }
```

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreatePortfolioInput.property.displayName"></a>

- *Type:* `string`

---

##### `idempotencyToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreatePortfolioInput.property.idempotencyToken"></a>

- *Type:* `string`

---

##### `providerName`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreatePortfolioInput.property.providerName"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreatePortfolioInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreatePortfolioInput.property.description"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreatePortfolioInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogTag`](#aws-cdk-sdk.servicecatalog.ServiceCatalogTag)[]

---

### ServiceCatalogCreatePortfolioOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreatePortfolioOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogCreatePortfolioOutput: servicecatalog.ServiceCatalogCreatePortfolioOutput = { ... }
```

##### `portfolioDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreatePortfolioOutput.property.portfolioDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogPortfolioDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogPortfolioDetail)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreatePortfolioOutput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogTag`](#aws-cdk-sdk.servicecatalog.ServiceCatalogTag)[]

---

### ServiceCatalogCreatePortfolioShareInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreatePortfolioShareInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogCreatePortfolioShareInput: servicecatalog.ServiceCatalogCreatePortfolioShareInput = { ... }
```

##### `portfolioId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreatePortfolioShareInput.property.portfolioId"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreatePortfolioShareInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreatePortfolioShareInput.property.accountId"></a>

- *Type:* `string`

---

##### `organizationNode`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreatePortfolioShareInput.property.organizationNode"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogOrganizationNode`](#aws-cdk-sdk.servicecatalog.ServiceCatalogOrganizationNode)

---

### ServiceCatalogCreatePortfolioShareOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreatePortfolioShareOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogCreatePortfolioShareOutput: servicecatalog.ServiceCatalogCreatePortfolioShareOutput = { ... }
```

##### `portfolioShareToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreatePortfolioShareOutput.property.portfolioShareToken"></a>

- *Type:* `string`

---

### ServiceCatalogCreateProductInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProductInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogCreateProductInput: servicecatalog.ServiceCatalogCreateProductInput = { ... }
```

##### `idempotencyToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProductInput.property.idempotencyToken"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProductInput.property.name"></a>

- *Type:* `string`

---

##### `owner`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProductInput.property.owner"></a>

- *Type:* `string`

---

##### `productType`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProductInput.property.productType"></a>

- *Type:* `string`

---

##### `provisioningArtifactParameters`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProductInput.property.provisioningArtifactParameters"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactProperties`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactProperties)

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProductInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProductInput.property.description"></a>

- *Type:* `string`

---

##### `distributor`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProductInput.property.distributor"></a>

- *Type:* `string`

---

##### `supportDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProductInput.property.supportDescription"></a>

- *Type:* `string`

---

##### `supportEmail`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProductInput.property.supportEmail"></a>

- *Type:* `string`

---

##### `supportUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProductInput.property.supportUrl"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProductInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogTag`](#aws-cdk-sdk.servicecatalog.ServiceCatalogTag)[]

---

### ServiceCatalogCreateProductOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProductOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogCreateProductOutput: servicecatalog.ServiceCatalogCreateProductOutput = { ... }
```

##### `productViewDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProductOutput.property.productViewDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogProductViewDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProductViewDetail)

---

##### `provisioningArtifactDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProductOutput.property.provisioningArtifactDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactDetail)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProductOutput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogTag`](#aws-cdk-sdk.servicecatalog.ServiceCatalogTag)[]

---

### ServiceCatalogCreateProvisionedProductPlanInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProvisionedProductPlanInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogCreateProvisionedProductPlanInput: servicecatalog.ServiceCatalogCreateProvisionedProductPlanInput = { ... }
```

##### `idempotencyToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProvisionedProductPlanInput.property.idempotencyToken"></a>

- *Type:* `string`

---

##### `planName`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProvisionedProductPlanInput.property.planName"></a>

- *Type:* `string`

---

##### `planType`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProvisionedProductPlanInput.property.planType"></a>

- *Type:* `string`

---

##### `productId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProvisionedProductPlanInput.property.productId"></a>

- *Type:* `string`

---

##### `provisionedProductName`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProvisionedProductPlanInput.property.provisionedProductName"></a>

- *Type:* `string`

---

##### `provisioningArtifactId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProvisionedProductPlanInput.property.provisioningArtifactId"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProvisionedProductPlanInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `notificationArns`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProvisionedProductPlanInput.property.notificationArns"></a>

- *Type:* `string`[]

---

##### `pathId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProvisionedProductPlanInput.property.pathId"></a>

- *Type:* `string`

---

##### `provisioningParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProvisionedProductPlanInput.property.provisioningParameters"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisioningParameter`](#aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisioningParameter)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProvisionedProductPlanInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogTag`](#aws-cdk-sdk.servicecatalog.ServiceCatalogTag)[]

---

### ServiceCatalogCreateProvisionedProductPlanOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProvisionedProductPlanOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogCreateProvisionedProductPlanOutput: servicecatalog.ServiceCatalogCreateProvisionedProductPlanOutput = { ... }
```

##### `planId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProvisionedProductPlanOutput.property.planId"></a>

- *Type:* `string`

---

##### `planName`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProvisionedProductPlanOutput.property.planName"></a>

- *Type:* `string`

---

##### `provisionedProductName`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProvisionedProductPlanOutput.property.provisionedProductName"></a>

- *Type:* `string`

---

##### `provisioningArtifactId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProvisionedProductPlanOutput.property.provisioningArtifactId"></a>

- *Type:* `string`

---

##### `provisionProductId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProvisionedProductPlanOutput.property.provisionProductId"></a>

- *Type:* `string`

---

### ServiceCatalogCreateProvisioningArtifactInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProvisioningArtifactInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogCreateProvisioningArtifactInput: servicecatalog.ServiceCatalogCreateProvisioningArtifactInput = { ... }
```

##### `idempotencyToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProvisioningArtifactInput.property.idempotencyToken"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProvisioningArtifactInput.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactProperties`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactProperties)

---

##### `productId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProvisioningArtifactInput.property.productId"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProvisioningArtifactInput.property.acceptLanguage"></a>

- *Type:* `string`

---

### ServiceCatalogCreateProvisioningArtifactOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProvisioningArtifactOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogCreateProvisioningArtifactOutput: servicecatalog.ServiceCatalogCreateProvisioningArtifactOutput = { ... }
```

##### `info`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProvisioningArtifactOutput.property.info"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `provisioningArtifactDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProvisioningArtifactOutput.property.provisioningArtifactDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactDetail)

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProvisioningArtifactOutput.property.status"></a>

- *Type:* `string`

---

### ServiceCatalogCreateServiceActionInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateServiceActionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogCreateServiceActionInput: servicecatalog.ServiceCatalogCreateServiceActionInput = { ... }
```

##### `definition`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateServiceActionInput.property.definition"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `definitionType`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateServiceActionInput.property.definitionType"></a>

- *Type:* `string`

---

##### `idempotencyToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateServiceActionInput.property.idempotencyToken"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateServiceActionInput.property.name"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateServiceActionInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateServiceActionInput.property.description"></a>

- *Type:* `string`

---

### ServiceCatalogCreateServiceActionOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateServiceActionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogCreateServiceActionOutput: servicecatalog.ServiceCatalogCreateServiceActionOutput = { ... }
```

##### `serviceActionDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateServiceActionOutput.property.serviceActionDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogServiceActionDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogServiceActionDetail)

---

### ServiceCatalogCreateTagOptionInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateTagOptionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogCreateTagOptionInput: servicecatalog.ServiceCatalogCreateTagOptionInput = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateTagOptionInput.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateTagOptionInput.property.value"></a>

- *Type:* `string`

---

### ServiceCatalogCreateTagOptionOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateTagOptionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogCreateTagOptionOutput: servicecatalog.ServiceCatalogCreateTagOptionOutput = { ... }
```

##### `tagOptionDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogCreateTagOptionOutput.property.tagOptionDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogTagOptionDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogTagOptionDetail)

---

### ServiceCatalogDeleteConstraintInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDeleteConstraintInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDeleteConstraintInput: servicecatalog.ServiceCatalogDeleteConstraintInput = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDeleteConstraintInput.property.id"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDeleteConstraintInput.property.acceptLanguage"></a>

- *Type:* `string`

---

### ServiceCatalogDeleteConstraintOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDeleteConstraintOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDeleteConstraintOutput: servicecatalog.ServiceCatalogDeleteConstraintOutput = { ... }
```

### ServiceCatalogDeletePortfolioInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDeletePortfolioInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDeletePortfolioInput: servicecatalog.ServiceCatalogDeletePortfolioInput = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDeletePortfolioInput.property.id"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDeletePortfolioInput.property.acceptLanguage"></a>

- *Type:* `string`

---

### ServiceCatalogDeletePortfolioOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDeletePortfolioOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDeletePortfolioOutput: servicecatalog.ServiceCatalogDeletePortfolioOutput = { ... }
```

### ServiceCatalogDeletePortfolioShareInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDeletePortfolioShareInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDeletePortfolioShareInput: servicecatalog.ServiceCatalogDeletePortfolioShareInput = { ... }
```

##### `portfolioId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDeletePortfolioShareInput.property.portfolioId"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDeletePortfolioShareInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDeletePortfolioShareInput.property.accountId"></a>

- *Type:* `string`

---

##### `organizationNode`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDeletePortfolioShareInput.property.organizationNode"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogOrganizationNode`](#aws-cdk-sdk.servicecatalog.ServiceCatalogOrganizationNode)

---

### ServiceCatalogDeletePortfolioShareOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDeletePortfolioShareOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDeletePortfolioShareOutput: servicecatalog.ServiceCatalogDeletePortfolioShareOutput = { ... }
```

##### `portfolioShareToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDeletePortfolioShareOutput.property.portfolioShareToken"></a>

- *Type:* `string`

---

### ServiceCatalogDeleteProductInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDeleteProductInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDeleteProductInput: servicecatalog.ServiceCatalogDeleteProductInput = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDeleteProductInput.property.id"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDeleteProductInput.property.acceptLanguage"></a>

- *Type:* `string`

---

### ServiceCatalogDeleteProductOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDeleteProductOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDeleteProductOutput: servicecatalog.ServiceCatalogDeleteProductOutput = { ... }
```

### ServiceCatalogDeleteProvisionedProductPlanInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDeleteProvisionedProductPlanInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDeleteProvisionedProductPlanInput: servicecatalog.ServiceCatalogDeleteProvisionedProductPlanInput = { ... }
```

##### `planId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDeleteProvisionedProductPlanInput.property.planId"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDeleteProvisionedProductPlanInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `ignoreErrors`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDeleteProvisionedProductPlanInput.property.ignoreErrors"></a>

- *Type:* `boolean`

---

### ServiceCatalogDeleteProvisionedProductPlanOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDeleteProvisionedProductPlanOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDeleteProvisionedProductPlanOutput: servicecatalog.ServiceCatalogDeleteProvisionedProductPlanOutput = { ... }
```

### ServiceCatalogDeleteProvisioningArtifactInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDeleteProvisioningArtifactInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDeleteProvisioningArtifactInput: servicecatalog.ServiceCatalogDeleteProvisioningArtifactInput = { ... }
```

##### `productId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDeleteProvisioningArtifactInput.property.productId"></a>

- *Type:* `string`

---

##### `provisioningArtifactId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDeleteProvisioningArtifactInput.property.provisioningArtifactId"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDeleteProvisioningArtifactInput.property.acceptLanguage"></a>

- *Type:* `string`

---

### ServiceCatalogDeleteProvisioningArtifactOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDeleteProvisioningArtifactOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDeleteProvisioningArtifactOutput: servicecatalog.ServiceCatalogDeleteProvisioningArtifactOutput = { ... }
```

### ServiceCatalogDeleteServiceActionInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDeleteServiceActionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDeleteServiceActionInput: servicecatalog.ServiceCatalogDeleteServiceActionInput = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDeleteServiceActionInput.property.id"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDeleteServiceActionInput.property.acceptLanguage"></a>

- *Type:* `string`

---

### ServiceCatalogDeleteServiceActionOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDeleteServiceActionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDeleteServiceActionOutput: servicecatalog.ServiceCatalogDeleteServiceActionOutput = { ... }
```

### ServiceCatalogDeleteTagOptionInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDeleteTagOptionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDeleteTagOptionInput: servicecatalog.ServiceCatalogDeleteTagOptionInput = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDeleteTagOptionInput.property.id"></a>

- *Type:* `string`

---

### ServiceCatalogDeleteTagOptionOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDeleteTagOptionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDeleteTagOptionOutput: servicecatalog.ServiceCatalogDeleteTagOptionOutput = { ... }
```

### ServiceCatalogDescribeConstraintInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeConstraintInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDescribeConstraintInput: servicecatalog.ServiceCatalogDescribeConstraintInput = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeConstraintInput.property.id"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeConstraintInput.property.acceptLanguage"></a>

- *Type:* `string`

---

### ServiceCatalogDescribeConstraintOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeConstraintOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDescribeConstraintOutput: servicecatalog.ServiceCatalogDescribeConstraintOutput = { ... }
```

##### `constraintDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeConstraintOutput.property.constraintDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogConstraintDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogConstraintDetail)

---

##### `constraintParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeConstraintOutput.property.constraintParameters"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeConstraintOutput.property.status"></a>

- *Type:* `string`

---

### ServiceCatalogDescribeCopyProductStatusInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeCopyProductStatusInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDescribeCopyProductStatusInput: servicecatalog.ServiceCatalogDescribeCopyProductStatusInput = { ... }
```

##### `copyProductToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeCopyProductStatusInput.property.copyProductToken"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeCopyProductStatusInput.property.acceptLanguage"></a>

- *Type:* `string`

---

### ServiceCatalogDescribeCopyProductStatusOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeCopyProductStatusOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDescribeCopyProductStatusOutput: servicecatalog.ServiceCatalogDescribeCopyProductStatusOutput = { ... }
```

##### `copyProductStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeCopyProductStatusOutput.property.copyProductStatus"></a>

- *Type:* `string`

---

##### `statusDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeCopyProductStatusOutput.property.statusDetail"></a>

- *Type:* `string`

---

##### `targetProductId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeCopyProductStatusOutput.property.targetProductId"></a>

- *Type:* `string`

---

### ServiceCatalogDescribePortfolioInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribePortfolioInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDescribePortfolioInput: servicecatalog.ServiceCatalogDescribePortfolioInput = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribePortfolioInput.property.id"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribePortfolioInput.property.acceptLanguage"></a>

- *Type:* `string`

---

### ServiceCatalogDescribePortfolioOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribePortfolioOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDescribePortfolioOutput: servicecatalog.ServiceCatalogDescribePortfolioOutput = { ... }
```

##### `budgets`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribePortfolioOutput.property.budgets"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogBudgetDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogBudgetDetail)[]

---

##### `portfolioDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribePortfolioOutput.property.portfolioDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogPortfolioDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogPortfolioDetail)

---

##### `tagOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribePortfolioOutput.property.tagOptions"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogTagOptionDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogTagOptionDetail)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribePortfolioOutput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogTag`](#aws-cdk-sdk.servicecatalog.ServiceCatalogTag)[]

---

### ServiceCatalogDescribePortfolioShareStatusInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribePortfolioShareStatusInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDescribePortfolioShareStatusInput: servicecatalog.ServiceCatalogDescribePortfolioShareStatusInput = { ... }
```

##### `portfolioShareToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribePortfolioShareStatusInput.property.portfolioShareToken"></a>

- *Type:* `string`

---

### ServiceCatalogDescribePortfolioShareStatusOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribePortfolioShareStatusOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDescribePortfolioShareStatusOutput: servicecatalog.ServiceCatalogDescribePortfolioShareStatusOutput = { ... }
```

##### `organizationNodeValue`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribePortfolioShareStatusOutput.property.organizationNodeValue"></a>

- *Type:* `string`

---

##### `portfolioId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribePortfolioShareStatusOutput.property.portfolioId"></a>

- *Type:* `string`

---

##### `portfolioShareToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribePortfolioShareStatusOutput.property.portfolioShareToken"></a>

- *Type:* `string`

---

##### `shareDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribePortfolioShareStatusOutput.property.shareDetails"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogShareDetails`](#aws-cdk-sdk.servicecatalog.ServiceCatalogShareDetails)

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribePortfolioShareStatusOutput.property.status"></a>

- *Type:* `string`

---

### ServiceCatalogDescribeProductAsAdminInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProductAsAdminInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDescribeProductAsAdminInput: servicecatalog.ServiceCatalogDescribeProductAsAdminInput = { ... }
```

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProductAsAdminInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProductAsAdminInput.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProductAsAdminInput.property.name"></a>

- *Type:* `string`

---

### ServiceCatalogDescribeProductAsAdminOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProductAsAdminOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDescribeProductAsAdminOutput: servicecatalog.ServiceCatalogDescribeProductAsAdminOutput = { ... }
```

##### `budgets`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProductAsAdminOutput.property.budgets"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogBudgetDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogBudgetDetail)[]

---

##### `productViewDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProductAsAdminOutput.property.productViewDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogProductViewDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProductViewDetail)

---

##### `provisioningArtifactSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProductAsAdminOutput.property.provisioningArtifactSummaries"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactSummary`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactSummary)[]

---

##### `tagOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProductAsAdminOutput.property.tagOptions"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogTagOptionDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogTagOptionDetail)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProductAsAdminOutput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogTag`](#aws-cdk-sdk.servicecatalog.ServiceCatalogTag)[]

---

### ServiceCatalogDescribeProductInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProductInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDescribeProductInput: servicecatalog.ServiceCatalogDescribeProductInput = { ... }
```

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProductInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProductInput.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProductInput.property.name"></a>

- *Type:* `string`

---

### ServiceCatalogDescribeProductOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProductOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDescribeProductOutput: servicecatalog.ServiceCatalogDescribeProductOutput = { ... }
```

##### `budgets`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProductOutput.property.budgets"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogBudgetDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogBudgetDetail)[]

---

##### `launchPaths`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProductOutput.property.launchPaths"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogLaunchPath`](#aws-cdk-sdk.servicecatalog.ServiceCatalogLaunchPath)[]

---

##### `productViewSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProductOutput.property.productViewSummary"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogProductViewSummary`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProductViewSummary)

---

##### `provisioningArtifacts`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProductOutput.property.provisioningArtifacts"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifact`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifact)[]

---

### ServiceCatalogDescribeProductViewInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProductViewInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDescribeProductViewInput: servicecatalog.ServiceCatalogDescribeProductViewInput = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProductViewInput.property.id"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProductViewInput.property.acceptLanguage"></a>

- *Type:* `string`

---

### ServiceCatalogDescribeProductViewOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProductViewOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDescribeProductViewOutput: servicecatalog.ServiceCatalogDescribeProductViewOutput = { ... }
```

##### `productViewSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProductViewOutput.property.productViewSummary"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogProductViewSummary`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProductViewSummary)

---

##### `provisioningArtifacts`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProductViewOutput.property.provisioningArtifacts"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifact`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifact)[]

---

### ServiceCatalogDescribeProvisionedProductInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisionedProductInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDescribeProvisionedProductInput: servicecatalog.ServiceCatalogDescribeProvisionedProductInput = { ... }
```

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisionedProductInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisionedProductInput.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisionedProductInput.property.name"></a>

- *Type:* `string`

---

### ServiceCatalogDescribeProvisionedProductOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisionedProductOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDescribeProvisionedProductOutput: servicecatalog.ServiceCatalogDescribeProvisionedProductOutput = { ... }
```

##### `cloudWatchDashboards`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisionedProductOutput.property.cloudWatchDashboards"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogCloudWatchDashboard`](#aws-cdk-sdk.servicecatalog.ServiceCatalogCloudWatchDashboard)[]

---

##### `provisionedProductDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisionedProductOutput.property.provisionedProductDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductDetail)

---

### ServiceCatalogDescribeProvisionedProductPlanInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisionedProductPlanInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDescribeProvisionedProductPlanInput: servicecatalog.ServiceCatalogDescribeProvisionedProductPlanInput = { ... }
```

##### `planId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisionedProductPlanInput.property.planId"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisionedProductPlanInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisionedProductPlanInput.property.pageSize"></a>

- *Type:* `number`

---

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisionedProductPlanInput.property.pageToken"></a>

- *Type:* `string`

---

### ServiceCatalogDescribeProvisionedProductPlanOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisionedProductPlanOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDescribeProvisionedProductPlanOutput: servicecatalog.ServiceCatalogDescribeProvisionedProductPlanOutput = { ... }
```

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisionedProductPlanOutput.property.nextPageToken"></a>

- *Type:* `string`

---

##### `provisionedProductPlanDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisionedProductPlanOutput.property.provisionedProductPlanDetails"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductPlanDetails`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductPlanDetails)

---

##### `resourceChanges`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisionedProductPlanOutput.property.resourceChanges"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogResourceChange`](#aws-cdk-sdk.servicecatalog.ServiceCatalogResourceChange)[]

---

### ServiceCatalogDescribeProvisioningArtifactInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisioningArtifactInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDescribeProvisioningArtifactInput: servicecatalog.ServiceCatalogDescribeProvisioningArtifactInput = { ... }
```

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisioningArtifactInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `productId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisioningArtifactInput.property.productId"></a>

- *Type:* `string`

---

##### `productName`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisioningArtifactInput.property.productName"></a>

- *Type:* `string`

---

##### `provisioningArtifactId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisioningArtifactInput.property.provisioningArtifactId"></a>

- *Type:* `string`

---

##### `provisioningArtifactName`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisioningArtifactInput.property.provisioningArtifactName"></a>

- *Type:* `string`

---

##### `verbose`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisioningArtifactInput.property.verbose"></a>

- *Type:* `boolean`

---

### ServiceCatalogDescribeProvisioningArtifactOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisioningArtifactOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDescribeProvisioningArtifactOutput: servicecatalog.ServiceCatalogDescribeProvisioningArtifactOutput = { ... }
```

##### `info`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisioningArtifactOutput.property.info"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `provisioningArtifactDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisioningArtifactOutput.property.provisioningArtifactDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactDetail)

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisioningArtifactOutput.property.status"></a>

- *Type:* `string`

---

### ServiceCatalogDescribeProvisioningParametersInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisioningParametersInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDescribeProvisioningParametersInput: servicecatalog.ServiceCatalogDescribeProvisioningParametersInput = { ... }
```

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisioningParametersInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `pathId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisioningParametersInput.property.pathId"></a>

- *Type:* `string`

---

##### `pathName`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisioningParametersInput.property.pathName"></a>

- *Type:* `string`

---

##### `productId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisioningParametersInput.property.productId"></a>

- *Type:* `string`

---

##### `productName`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisioningParametersInput.property.productName"></a>

- *Type:* `string`

---

##### `provisioningArtifactId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisioningParametersInput.property.provisioningArtifactId"></a>

- *Type:* `string`

---

##### `provisioningArtifactName`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisioningParametersInput.property.provisioningArtifactName"></a>

- *Type:* `string`

---

### ServiceCatalogDescribeProvisioningParametersOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisioningParametersOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDescribeProvisioningParametersOutput: servicecatalog.ServiceCatalogDescribeProvisioningParametersOutput = { ... }
```

##### `constraintSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisioningParametersOutput.property.constraintSummaries"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogConstraintSummary`](#aws-cdk-sdk.servicecatalog.ServiceCatalogConstraintSummary)[]

---

##### `provisioningArtifactOutputs`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisioningParametersOutput.property.provisioningArtifactOutputs"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactOutput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactOutput)[]

---

##### `provisioningArtifactParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisioningParametersOutput.property.provisioningArtifactParameters"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactParameter`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactParameter)[]

---

##### `provisioningArtifactPreferences`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisioningParametersOutput.property.provisioningArtifactPreferences"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactPreferences`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactPreferences)

---

##### `tagOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisioningParametersOutput.property.tagOptions"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogTagOptionSummary`](#aws-cdk-sdk.servicecatalog.ServiceCatalogTagOptionSummary)[]

---

##### `usageInstructions`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisioningParametersOutput.property.usageInstructions"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogUsageInstruction`](#aws-cdk-sdk.servicecatalog.ServiceCatalogUsageInstruction)[]

---

### ServiceCatalogDescribeRecordInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeRecordInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDescribeRecordInput: servicecatalog.ServiceCatalogDescribeRecordInput = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeRecordInput.property.id"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeRecordInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeRecordInput.property.pageSize"></a>

- *Type:* `number`

---

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeRecordInput.property.pageToken"></a>

- *Type:* `string`

---

### ServiceCatalogDescribeRecordOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeRecordOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDescribeRecordOutput: servicecatalog.ServiceCatalogDescribeRecordOutput = { ... }
```

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeRecordOutput.property.nextPageToken"></a>

- *Type:* `string`

---

##### `recordDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeRecordOutput.property.recordDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogRecordDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogRecordDetail)

---

##### `recordOutputs`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeRecordOutput.property.recordOutputs"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogRecordOutput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogRecordOutput)[]

---

### ServiceCatalogDescribeServiceActionExecutionParametersInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeServiceActionExecutionParametersInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDescribeServiceActionExecutionParametersInput: servicecatalog.ServiceCatalogDescribeServiceActionExecutionParametersInput = { ... }
```

##### `provisionedProductId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeServiceActionExecutionParametersInput.property.provisionedProductId"></a>

- *Type:* `string`

---

##### `serviceActionId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeServiceActionExecutionParametersInput.property.serviceActionId"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeServiceActionExecutionParametersInput.property.acceptLanguage"></a>

- *Type:* `string`

---

### ServiceCatalogDescribeServiceActionExecutionParametersOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeServiceActionExecutionParametersOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDescribeServiceActionExecutionParametersOutput: servicecatalog.ServiceCatalogDescribeServiceActionExecutionParametersOutput = { ... }
```

##### `serviceActionParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeServiceActionExecutionParametersOutput.property.serviceActionParameters"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogExecutionParameter`](#aws-cdk-sdk.servicecatalog.ServiceCatalogExecutionParameter)[]

---

### ServiceCatalogDescribeServiceActionInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeServiceActionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDescribeServiceActionInput: servicecatalog.ServiceCatalogDescribeServiceActionInput = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeServiceActionInput.property.id"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeServiceActionInput.property.acceptLanguage"></a>

- *Type:* `string`

---

### ServiceCatalogDescribeServiceActionOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeServiceActionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDescribeServiceActionOutput: servicecatalog.ServiceCatalogDescribeServiceActionOutput = { ... }
```

##### `serviceActionDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeServiceActionOutput.property.serviceActionDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogServiceActionDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogServiceActionDetail)

---

### ServiceCatalogDescribeTagOptionInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeTagOptionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDescribeTagOptionInput: servicecatalog.ServiceCatalogDescribeTagOptionInput = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeTagOptionInput.property.id"></a>

- *Type:* `string`

---

### ServiceCatalogDescribeTagOptionOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeTagOptionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDescribeTagOptionOutput: servicecatalog.ServiceCatalogDescribeTagOptionOutput = { ... }
```

##### `tagOptionDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeTagOptionOutput.property.tagOptionDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogTagOptionDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogTagOptionDetail)

---

### ServiceCatalogDisableAwsOrganizationsAccessInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDisableAwsOrganizationsAccessInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDisableAwsOrganizationsAccessInput: servicecatalog.ServiceCatalogDisableAwsOrganizationsAccessInput = { ... }
```

### ServiceCatalogDisableAwsOrganizationsAccessOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDisableAwsOrganizationsAccessOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDisableAwsOrganizationsAccessOutput: servicecatalog.ServiceCatalogDisableAwsOrganizationsAccessOutput = { ... }
```

### ServiceCatalogDisassociateBudgetFromResourceInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDisassociateBudgetFromResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDisassociateBudgetFromResourceInput: servicecatalog.ServiceCatalogDisassociateBudgetFromResourceInput = { ... }
```

##### `budgetName`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDisassociateBudgetFromResourceInput.property.budgetName"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDisassociateBudgetFromResourceInput.property.resourceId"></a>

- *Type:* `string`

---

### ServiceCatalogDisassociateBudgetFromResourceOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDisassociateBudgetFromResourceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDisassociateBudgetFromResourceOutput: servicecatalog.ServiceCatalogDisassociateBudgetFromResourceOutput = { ... }
```

### ServiceCatalogDisassociatePrincipalFromPortfolioInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDisassociatePrincipalFromPortfolioInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDisassociatePrincipalFromPortfolioInput: servicecatalog.ServiceCatalogDisassociatePrincipalFromPortfolioInput = { ... }
```

##### `portfolioId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDisassociatePrincipalFromPortfolioInput.property.portfolioId"></a>

- *Type:* `string`

---

##### `principalArn`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDisassociatePrincipalFromPortfolioInput.property.principalArn"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDisassociatePrincipalFromPortfolioInput.property.acceptLanguage"></a>

- *Type:* `string`

---

### ServiceCatalogDisassociatePrincipalFromPortfolioOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDisassociatePrincipalFromPortfolioOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDisassociatePrincipalFromPortfolioOutput: servicecatalog.ServiceCatalogDisassociatePrincipalFromPortfolioOutput = { ... }
```

### ServiceCatalogDisassociateProductFromPortfolioInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDisassociateProductFromPortfolioInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDisassociateProductFromPortfolioInput: servicecatalog.ServiceCatalogDisassociateProductFromPortfolioInput = { ... }
```

##### `portfolioId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDisassociateProductFromPortfolioInput.property.portfolioId"></a>

- *Type:* `string`

---

##### `productId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDisassociateProductFromPortfolioInput.property.productId"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDisassociateProductFromPortfolioInput.property.acceptLanguage"></a>

- *Type:* `string`

---

### ServiceCatalogDisassociateProductFromPortfolioOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDisassociateProductFromPortfolioOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDisassociateProductFromPortfolioOutput: servicecatalog.ServiceCatalogDisassociateProductFromPortfolioOutput = { ... }
```

### ServiceCatalogDisassociateServiceActionFromProvisioningArtifactInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDisassociateServiceActionFromProvisioningArtifactInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDisassociateServiceActionFromProvisioningArtifactInput: servicecatalog.ServiceCatalogDisassociateServiceActionFromProvisioningArtifactInput = { ... }
```

##### `productId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDisassociateServiceActionFromProvisioningArtifactInput.property.productId"></a>

- *Type:* `string`

---

##### `provisioningArtifactId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDisassociateServiceActionFromProvisioningArtifactInput.property.provisioningArtifactId"></a>

- *Type:* `string`

---

##### `serviceActionId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDisassociateServiceActionFromProvisioningArtifactInput.property.serviceActionId"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDisassociateServiceActionFromProvisioningArtifactInput.property.acceptLanguage"></a>

- *Type:* `string`

---

### ServiceCatalogDisassociateServiceActionFromProvisioningArtifactOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDisassociateServiceActionFromProvisioningArtifactOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDisassociateServiceActionFromProvisioningArtifactOutput: servicecatalog.ServiceCatalogDisassociateServiceActionFromProvisioningArtifactOutput = { ... }
```

### ServiceCatalogDisassociateTagOptionFromResourceInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDisassociateTagOptionFromResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDisassociateTagOptionFromResourceInput: servicecatalog.ServiceCatalogDisassociateTagOptionFromResourceInput = { ... }
```

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDisassociateTagOptionFromResourceInput.property.resourceId"></a>

- *Type:* `string`

---

##### `tagOptionId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDisassociateTagOptionFromResourceInput.property.tagOptionId"></a>

- *Type:* `string`

---

### ServiceCatalogDisassociateTagOptionFromResourceOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogDisassociateTagOptionFromResourceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogDisassociateTagOptionFromResourceOutput: servicecatalog.ServiceCatalogDisassociateTagOptionFromResourceOutput = { ... }
```

### ServiceCatalogEnableAwsOrganizationsAccessInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogEnableAwsOrganizationsAccessInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogEnableAwsOrganizationsAccessInput: servicecatalog.ServiceCatalogEnableAwsOrganizationsAccessInput = { ... }
```

### ServiceCatalogEnableAwsOrganizationsAccessOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogEnableAwsOrganizationsAccessOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogEnableAwsOrganizationsAccessOutput: servicecatalog.ServiceCatalogEnableAwsOrganizationsAccessOutput = { ... }
```

### ServiceCatalogExecuteProvisionedProductPlanInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogExecuteProvisionedProductPlanInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogExecuteProvisionedProductPlanInput: servicecatalog.ServiceCatalogExecuteProvisionedProductPlanInput = { ... }
```

##### `idempotencyToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogExecuteProvisionedProductPlanInput.property.idempotencyToken"></a>

- *Type:* `string`

---

##### `planId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogExecuteProvisionedProductPlanInput.property.planId"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogExecuteProvisionedProductPlanInput.property.acceptLanguage"></a>

- *Type:* `string`

---

### ServiceCatalogExecuteProvisionedProductPlanOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogExecuteProvisionedProductPlanOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogExecuteProvisionedProductPlanOutput: servicecatalog.ServiceCatalogExecuteProvisionedProductPlanOutput = { ... }
```

##### `recordDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogExecuteProvisionedProductPlanOutput.property.recordDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogRecordDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogRecordDetail)

---

### ServiceCatalogExecuteProvisionedProductServiceActionInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogExecuteProvisionedProductServiceActionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogExecuteProvisionedProductServiceActionInput: servicecatalog.ServiceCatalogExecuteProvisionedProductServiceActionInput = { ... }
```

##### `executeToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogExecuteProvisionedProductServiceActionInput.property.executeToken"></a>

- *Type:* `string`

---

##### `provisionedProductId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogExecuteProvisionedProductServiceActionInput.property.provisionedProductId"></a>

- *Type:* `string`

---

##### `serviceActionId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogExecuteProvisionedProductServiceActionInput.property.serviceActionId"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogExecuteProvisionedProductServiceActionInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogExecuteProvisionedProductServiceActionInput.property.parameters"></a>

- *Type:* {[ key: string ]: `string`[]}

---

### ServiceCatalogExecuteProvisionedProductServiceActionOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogExecuteProvisionedProductServiceActionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogExecuteProvisionedProductServiceActionOutput: servicecatalog.ServiceCatalogExecuteProvisionedProductServiceActionOutput = { ... }
```

##### `recordDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogExecuteProvisionedProductServiceActionOutput.property.recordDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogRecordDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogRecordDetail)

---

### ServiceCatalogExecutionParameter <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogExecutionParameter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogExecutionParameter: servicecatalog.ServiceCatalogExecutionParameter = { ... }
```

##### `defaultValues`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogExecutionParameter.property.defaultValues"></a>

- *Type:* `string`[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogExecutionParameter.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogExecutionParameter.property.type"></a>

- *Type:* `string`

---

### ServiceCatalogFailedServiceActionAssociation <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogFailedServiceActionAssociation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogFailedServiceActionAssociation: servicecatalog.ServiceCatalogFailedServiceActionAssociation = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogFailedServiceActionAssociation.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogFailedServiceActionAssociation.property.errorMessage"></a>

- *Type:* `string`

---

##### `productId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogFailedServiceActionAssociation.property.productId"></a>

- *Type:* `string`

---

##### `provisioningArtifactId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogFailedServiceActionAssociation.property.provisioningArtifactId"></a>

- *Type:* `string`

---

##### `serviceActionId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogFailedServiceActionAssociation.property.serviceActionId"></a>

- *Type:* `string`

---

### ServiceCatalogGetAwsOrganizationsAccessStatusInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogGetAwsOrganizationsAccessStatusInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogGetAwsOrganizationsAccessStatusInput: servicecatalog.ServiceCatalogGetAwsOrganizationsAccessStatusInput = { ... }
```

### ServiceCatalogGetAwsOrganizationsAccessStatusOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogGetAwsOrganizationsAccessStatusOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogGetAwsOrganizationsAccessStatusOutput: servicecatalog.ServiceCatalogGetAwsOrganizationsAccessStatusOutput = { ... }
```

##### `accessStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogGetAwsOrganizationsAccessStatusOutput.property.accessStatus"></a>

- *Type:* `string`

---

### ServiceCatalogGetProvisionedProductOutputsInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogGetProvisionedProductOutputsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogGetProvisionedProductOutputsInput: servicecatalog.ServiceCatalogGetProvisionedProductOutputsInput = { ... }
```

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogGetProvisionedProductOutputsInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `outputKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogGetProvisionedProductOutputsInput.property.outputKeys"></a>

- *Type:* `string`[]

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogGetProvisionedProductOutputsInput.property.pageSize"></a>

- *Type:* `number`

---

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogGetProvisionedProductOutputsInput.property.pageToken"></a>

- *Type:* `string`

---

##### `provisionedProductId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogGetProvisionedProductOutputsInput.property.provisionedProductId"></a>

- *Type:* `string`

---

##### `provisionedProductName`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogGetProvisionedProductOutputsInput.property.provisionedProductName"></a>

- *Type:* `string`

---

### ServiceCatalogGetProvisionedProductOutputsOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogGetProvisionedProductOutputsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogGetProvisionedProductOutputsOutput: servicecatalog.ServiceCatalogGetProvisionedProductOutputsOutput = { ... }
```

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogGetProvisionedProductOutputsOutput.property.nextPageToken"></a>

- *Type:* `string`

---

##### `outputs`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogGetProvisionedProductOutputsOutput.property.outputs"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogRecordOutput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogRecordOutput)[]

---

### ServiceCatalogImportAsProvisionedProductInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogImportAsProvisionedProductInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogImportAsProvisionedProductInput: servicecatalog.ServiceCatalogImportAsProvisionedProductInput = { ... }
```

##### `idempotencyToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogImportAsProvisionedProductInput.property.idempotencyToken"></a>

- *Type:* `string`

---

##### `physicalId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogImportAsProvisionedProductInput.property.physicalId"></a>

- *Type:* `string`

---

##### `productId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogImportAsProvisionedProductInput.property.productId"></a>

- *Type:* `string`

---

##### `provisionedProductName`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogImportAsProvisionedProductInput.property.provisionedProductName"></a>

- *Type:* `string`

---

##### `provisioningArtifactId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogImportAsProvisionedProductInput.property.provisioningArtifactId"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogImportAsProvisionedProductInput.property.acceptLanguage"></a>

- *Type:* `string`

---

### ServiceCatalogImportAsProvisionedProductOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogImportAsProvisionedProductOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogImportAsProvisionedProductOutput: servicecatalog.ServiceCatalogImportAsProvisionedProductOutput = { ... }
```

##### `recordDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogImportAsProvisionedProductOutput.property.recordDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogRecordDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogRecordDetail)

---

### ServiceCatalogLaunchPath <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogLaunchPath"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogLaunchPath: servicecatalog.ServiceCatalogLaunchPath = { ... }
```

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogLaunchPath.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogLaunchPath.property.name"></a>

- *Type:* `string`

---

### ServiceCatalogLaunchPathSummary <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogLaunchPathSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogLaunchPathSummary: servicecatalog.ServiceCatalogLaunchPathSummary = { ... }
```

##### `constraintSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogLaunchPathSummary.property.constraintSummaries"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogConstraintSummary`](#aws-cdk-sdk.servicecatalog.ServiceCatalogConstraintSummary)[]

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogLaunchPathSummary.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogLaunchPathSummary.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogLaunchPathSummary.property.tags"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogTag`](#aws-cdk-sdk.servicecatalog.ServiceCatalogTag)[]

---

### ServiceCatalogListAcceptedPortfolioSharesInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListAcceptedPortfolioSharesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogListAcceptedPortfolioSharesInput: servicecatalog.ServiceCatalogListAcceptedPortfolioSharesInput = { ... }
```

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListAcceptedPortfolioSharesInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListAcceptedPortfolioSharesInput.property.pageSize"></a>

- *Type:* `number`

---

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListAcceptedPortfolioSharesInput.property.pageToken"></a>

- *Type:* `string`

---

##### `portfolioShareType`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListAcceptedPortfolioSharesInput.property.portfolioShareType"></a>

- *Type:* `string`

---

### ServiceCatalogListAcceptedPortfolioSharesOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListAcceptedPortfolioSharesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogListAcceptedPortfolioSharesOutput: servicecatalog.ServiceCatalogListAcceptedPortfolioSharesOutput = { ... }
```

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListAcceptedPortfolioSharesOutput.property.nextPageToken"></a>

- *Type:* `string`

---

##### `portfolioDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListAcceptedPortfolioSharesOutput.property.portfolioDetails"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogPortfolioDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogPortfolioDetail)[]

---

### ServiceCatalogListBudgetsForResourceInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListBudgetsForResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogListBudgetsForResourceInput: servicecatalog.ServiceCatalogListBudgetsForResourceInput = { ... }
```

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListBudgetsForResourceInput.property.resourceId"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListBudgetsForResourceInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListBudgetsForResourceInput.property.pageSize"></a>

- *Type:* `number`

---

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListBudgetsForResourceInput.property.pageToken"></a>

- *Type:* `string`

---

### ServiceCatalogListBudgetsForResourceOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListBudgetsForResourceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogListBudgetsForResourceOutput: servicecatalog.ServiceCatalogListBudgetsForResourceOutput = { ... }
```

##### `budgets`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListBudgetsForResourceOutput.property.budgets"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogBudgetDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogBudgetDetail)[]

---

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListBudgetsForResourceOutput.property.nextPageToken"></a>

- *Type:* `string`

---

### ServiceCatalogListConstraintsForPortfolioInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListConstraintsForPortfolioInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogListConstraintsForPortfolioInput: servicecatalog.ServiceCatalogListConstraintsForPortfolioInput = { ... }
```

##### `portfolioId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListConstraintsForPortfolioInput.property.portfolioId"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListConstraintsForPortfolioInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListConstraintsForPortfolioInput.property.pageSize"></a>

- *Type:* `number`

---

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListConstraintsForPortfolioInput.property.pageToken"></a>

- *Type:* `string`

---

##### `productId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListConstraintsForPortfolioInput.property.productId"></a>

- *Type:* `string`

---

### ServiceCatalogListConstraintsForPortfolioOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListConstraintsForPortfolioOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogListConstraintsForPortfolioOutput: servicecatalog.ServiceCatalogListConstraintsForPortfolioOutput = { ... }
```

##### `constraintDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListConstraintsForPortfolioOutput.property.constraintDetails"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogConstraintDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogConstraintDetail)[]

---

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListConstraintsForPortfolioOutput.property.nextPageToken"></a>

- *Type:* `string`

---

### ServiceCatalogListLaunchPathsInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListLaunchPathsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogListLaunchPathsInput: servicecatalog.ServiceCatalogListLaunchPathsInput = { ... }
```

##### `productId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListLaunchPathsInput.property.productId"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListLaunchPathsInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListLaunchPathsInput.property.pageSize"></a>

- *Type:* `number`

---

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListLaunchPathsInput.property.pageToken"></a>

- *Type:* `string`

---

### ServiceCatalogListLaunchPathsOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListLaunchPathsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogListLaunchPathsOutput: servicecatalog.ServiceCatalogListLaunchPathsOutput = { ... }
```

##### `launchPathSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListLaunchPathsOutput.property.launchPathSummaries"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogLaunchPathSummary`](#aws-cdk-sdk.servicecatalog.ServiceCatalogLaunchPathSummary)[]

---

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListLaunchPathsOutput.property.nextPageToken"></a>

- *Type:* `string`

---

### ServiceCatalogListOrganizationPortfolioAccessInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListOrganizationPortfolioAccessInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogListOrganizationPortfolioAccessInput: servicecatalog.ServiceCatalogListOrganizationPortfolioAccessInput = { ... }
```

##### `organizationNodeType`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListOrganizationPortfolioAccessInput.property.organizationNodeType"></a>

- *Type:* `string`

---

##### `portfolioId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListOrganizationPortfolioAccessInput.property.portfolioId"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListOrganizationPortfolioAccessInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListOrganizationPortfolioAccessInput.property.pageSize"></a>

- *Type:* `number`

---

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListOrganizationPortfolioAccessInput.property.pageToken"></a>

- *Type:* `string`

---

### ServiceCatalogListOrganizationPortfolioAccessOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListOrganizationPortfolioAccessOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogListOrganizationPortfolioAccessOutput: servicecatalog.ServiceCatalogListOrganizationPortfolioAccessOutput = { ... }
```

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListOrganizationPortfolioAccessOutput.property.nextPageToken"></a>

- *Type:* `string`

---

##### `organizationNodes`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListOrganizationPortfolioAccessOutput.property.organizationNodes"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogOrganizationNode`](#aws-cdk-sdk.servicecatalog.ServiceCatalogOrganizationNode)[]

---

### ServiceCatalogListPortfolioAccessInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListPortfolioAccessInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogListPortfolioAccessInput: servicecatalog.ServiceCatalogListPortfolioAccessInput = { ... }
```

##### `portfolioId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListPortfolioAccessInput.property.portfolioId"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListPortfolioAccessInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `organizationParentId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListPortfolioAccessInput.property.organizationParentId"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListPortfolioAccessInput.property.pageSize"></a>

- *Type:* `number`

---

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListPortfolioAccessInput.property.pageToken"></a>

- *Type:* `string`

---

### ServiceCatalogListPortfolioAccessOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListPortfolioAccessOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogListPortfolioAccessOutput: servicecatalog.ServiceCatalogListPortfolioAccessOutput = { ... }
```

##### `accountIds`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListPortfolioAccessOutput.property.accountIds"></a>

- *Type:* `string`[]

---

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListPortfolioAccessOutput.property.nextPageToken"></a>

- *Type:* `string`

---

### ServiceCatalogListPortfoliosForProductInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListPortfoliosForProductInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogListPortfoliosForProductInput: servicecatalog.ServiceCatalogListPortfoliosForProductInput = { ... }
```

##### `productId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListPortfoliosForProductInput.property.productId"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListPortfoliosForProductInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListPortfoliosForProductInput.property.pageSize"></a>

- *Type:* `number`

---

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListPortfoliosForProductInput.property.pageToken"></a>

- *Type:* `string`

---

### ServiceCatalogListPortfoliosForProductOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListPortfoliosForProductOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogListPortfoliosForProductOutput: servicecatalog.ServiceCatalogListPortfoliosForProductOutput = { ... }
```

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListPortfoliosForProductOutput.property.nextPageToken"></a>

- *Type:* `string`

---

##### `portfolioDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListPortfoliosForProductOutput.property.portfolioDetails"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogPortfolioDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogPortfolioDetail)[]

---

### ServiceCatalogListPortfoliosInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListPortfoliosInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogListPortfoliosInput: servicecatalog.ServiceCatalogListPortfoliosInput = { ... }
```

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListPortfoliosInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListPortfoliosInput.property.pageSize"></a>

- *Type:* `number`

---

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListPortfoliosInput.property.pageToken"></a>

- *Type:* `string`

---

### ServiceCatalogListPortfoliosOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListPortfoliosOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogListPortfoliosOutput: servicecatalog.ServiceCatalogListPortfoliosOutput = { ... }
```

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListPortfoliosOutput.property.nextPageToken"></a>

- *Type:* `string`

---

##### `portfolioDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListPortfoliosOutput.property.portfolioDetails"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogPortfolioDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogPortfolioDetail)[]

---

### ServiceCatalogListPrincipalsForPortfolioInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListPrincipalsForPortfolioInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogListPrincipalsForPortfolioInput: servicecatalog.ServiceCatalogListPrincipalsForPortfolioInput = { ... }
```

##### `portfolioId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListPrincipalsForPortfolioInput.property.portfolioId"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListPrincipalsForPortfolioInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListPrincipalsForPortfolioInput.property.pageSize"></a>

- *Type:* `number`

---

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListPrincipalsForPortfolioInput.property.pageToken"></a>

- *Type:* `string`

---

### ServiceCatalogListPrincipalsForPortfolioOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListPrincipalsForPortfolioOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogListPrincipalsForPortfolioOutput: servicecatalog.ServiceCatalogListPrincipalsForPortfolioOutput = { ... }
```

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListPrincipalsForPortfolioOutput.property.nextPageToken"></a>

- *Type:* `string`

---

##### `principals`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListPrincipalsForPortfolioOutput.property.principals"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogPrincipal`](#aws-cdk-sdk.servicecatalog.ServiceCatalogPrincipal)[]

---

### ServiceCatalogListProvisionedProductPlansInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListProvisionedProductPlansInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogListProvisionedProductPlansInput: servicecatalog.ServiceCatalogListProvisionedProductPlansInput = { ... }
```

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListProvisionedProductPlansInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `accessLevelFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListProvisionedProductPlansInput.property.accessLevelFilter"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogAccessLevelFilter`](#aws-cdk-sdk.servicecatalog.ServiceCatalogAccessLevelFilter)

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListProvisionedProductPlansInput.property.pageSize"></a>

- *Type:* `number`

---

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListProvisionedProductPlansInput.property.pageToken"></a>

- *Type:* `string`

---

##### `provisionProductId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListProvisionedProductPlansInput.property.provisionProductId"></a>

- *Type:* `string`

---

### ServiceCatalogListProvisionedProductPlansOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListProvisionedProductPlansOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogListProvisionedProductPlansOutput: servicecatalog.ServiceCatalogListProvisionedProductPlansOutput = { ... }
```

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListProvisionedProductPlansOutput.property.nextPageToken"></a>

- *Type:* `string`

---

##### `provisionedProductPlans`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListProvisionedProductPlansOutput.property.provisionedProductPlans"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductPlanSummary`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductPlanSummary)[]

---

### ServiceCatalogListProvisioningArtifactsForServiceActionInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListProvisioningArtifactsForServiceActionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogListProvisioningArtifactsForServiceActionInput: servicecatalog.ServiceCatalogListProvisioningArtifactsForServiceActionInput = { ... }
```

##### `serviceActionId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListProvisioningArtifactsForServiceActionInput.property.serviceActionId"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListProvisioningArtifactsForServiceActionInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListProvisioningArtifactsForServiceActionInput.property.pageSize"></a>

- *Type:* `number`

---

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListProvisioningArtifactsForServiceActionInput.property.pageToken"></a>

- *Type:* `string`

---

### ServiceCatalogListProvisioningArtifactsForServiceActionOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListProvisioningArtifactsForServiceActionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogListProvisioningArtifactsForServiceActionOutput: servicecatalog.ServiceCatalogListProvisioningArtifactsForServiceActionOutput = { ... }
```

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListProvisioningArtifactsForServiceActionOutput.property.nextPageToken"></a>

- *Type:* `string`

---

##### `provisioningArtifactViews`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListProvisioningArtifactsForServiceActionOutput.property.provisioningArtifactViews"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactView`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactView)[]

---

### ServiceCatalogListProvisioningArtifactsInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListProvisioningArtifactsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogListProvisioningArtifactsInput: servicecatalog.ServiceCatalogListProvisioningArtifactsInput = { ... }
```

##### `productId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListProvisioningArtifactsInput.property.productId"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListProvisioningArtifactsInput.property.acceptLanguage"></a>

- *Type:* `string`

---

### ServiceCatalogListProvisioningArtifactsOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListProvisioningArtifactsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogListProvisioningArtifactsOutput: servicecatalog.ServiceCatalogListProvisioningArtifactsOutput = { ... }
```

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListProvisioningArtifactsOutput.property.nextPageToken"></a>

- *Type:* `string`

---

##### `provisioningArtifactDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListProvisioningArtifactsOutput.property.provisioningArtifactDetails"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactDetail)[]

---

### ServiceCatalogListRecordHistoryInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListRecordHistoryInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogListRecordHistoryInput: servicecatalog.ServiceCatalogListRecordHistoryInput = { ... }
```

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListRecordHistoryInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `accessLevelFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListRecordHistoryInput.property.accessLevelFilter"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogAccessLevelFilter`](#aws-cdk-sdk.servicecatalog.ServiceCatalogAccessLevelFilter)

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListRecordHistoryInput.property.pageSize"></a>

- *Type:* `number`

---

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListRecordHistoryInput.property.pageToken"></a>

- *Type:* `string`

---

##### `searchFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListRecordHistoryInput.property.searchFilter"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogListRecordHistorySearchFilter`](#aws-cdk-sdk.servicecatalog.ServiceCatalogListRecordHistorySearchFilter)

---

### ServiceCatalogListRecordHistoryOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListRecordHistoryOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogListRecordHistoryOutput: servicecatalog.ServiceCatalogListRecordHistoryOutput = { ... }
```

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListRecordHistoryOutput.property.nextPageToken"></a>

- *Type:* `string`

---

##### `recordDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListRecordHistoryOutput.property.recordDetails"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogRecordDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogRecordDetail)[]

---

### ServiceCatalogListRecordHistorySearchFilter <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListRecordHistorySearchFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogListRecordHistorySearchFilter: servicecatalog.ServiceCatalogListRecordHistorySearchFilter = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListRecordHistorySearchFilter.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListRecordHistorySearchFilter.property.value"></a>

- *Type:* `string`

---

### ServiceCatalogListResourcesForTagOptionInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListResourcesForTagOptionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogListResourcesForTagOptionInput: servicecatalog.ServiceCatalogListResourcesForTagOptionInput = { ... }
```

##### `tagOptionId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListResourcesForTagOptionInput.property.tagOptionId"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListResourcesForTagOptionInput.property.pageSize"></a>

- *Type:* `number`

---

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListResourcesForTagOptionInput.property.pageToken"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListResourcesForTagOptionInput.property.resourceType"></a>

- *Type:* `string`

---

### ServiceCatalogListResourcesForTagOptionOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListResourcesForTagOptionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogListResourcesForTagOptionOutput: servicecatalog.ServiceCatalogListResourcesForTagOptionOutput = { ... }
```

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListResourcesForTagOptionOutput.property.pageToken"></a>

- *Type:* `string`

---

##### `resourceDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListResourcesForTagOptionOutput.property.resourceDetails"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogResourceDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogResourceDetail)[]

---

### ServiceCatalogListServiceActionsForProvisioningArtifactInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListServiceActionsForProvisioningArtifactInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogListServiceActionsForProvisioningArtifactInput: servicecatalog.ServiceCatalogListServiceActionsForProvisioningArtifactInput = { ... }
```

##### `productId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListServiceActionsForProvisioningArtifactInput.property.productId"></a>

- *Type:* `string`

---

##### `provisioningArtifactId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListServiceActionsForProvisioningArtifactInput.property.provisioningArtifactId"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListServiceActionsForProvisioningArtifactInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListServiceActionsForProvisioningArtifactInput.property.pageSize"></a>

- *Type:* `number`

---

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListServiceActionsForProvisioningArtifactInput.property.pageToken"></a>

- *Type:* `string`

---

### ServiceCatalogListServiceActionsForProvisioningArtifactOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListServiceActionsForProvisioningArtifactOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogListServiceActionsForProvisioningArtifactOutput: servicecatalog.ServiceCatalogListServiceActionsForProvisioningArtifactOutput = { ... }
```

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListServiceActionsForProvisioningArtifactOutput.property.nextPageToken"></a>

- *Type:* `string`

---

##### `serviceActionSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListServiceActionsForProvisioningArtifactOutput.property.serviceActionSummaries"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogServiceActionSummary`](#aws-cdk-sdk.servicecatalog.ServiceCatalogServiceActionSummary)[]

---

### ServiceCatalogListServiceActionsInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListServiceActionsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogListServiceActionsInput: servicecatalog.ServiceCatalogListServiceActionsInput = { ... }
```

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListServiceActionsInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListServiceActionsInput.property.pageSize"></a>

- *Type:* `number`

---

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListServiceActionsInput.property.pageToken"></a>

- *Type:* `string`

---

### ServiceCatalogListServiceActionsOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListServiceActionsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogListServiceActionsOutput: servicecatalog.ServiceCatalogListServiceActionsOutput = { ... }
```

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListServiceActionsOutput.property.nextPageToken"></a>

- *Type:* `string`

---

##### `serviceActionSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListServiceActionsOutput.property.serviceActionSummaries"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogServiceActionSummary`](#aws-cdk-sdk.servicecatalog.ServiceCatalogServiceActionSummary)[]

---

### ServiceCatalogListStackInstancesForProvisionedProductInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListStackInstancesForProvisionedProductInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogListStackInstancesForProvisionedProductInput: servicecatalog.ServiceCatalogListStackInstancesForProvisionedProductInput = { ... }
```

##### `provisionedProductId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListStackInstancesForProvisionedProductInput.property.provisionedProductId"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListStackInstancesForProvisionedProductInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListStackInstancesForProvisionedProductInput.property.pageSize"></a>

- *Type:* `number`

---

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListStackInstancesForProvisionedProductInput.property.pageToken"></a>

- *Type:* `string`

---

### ServiceCatalogListStackInstancesForProvisionedProductOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListStackInstancesForProvisionedProductOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogListStackInstancesForProvisionedProductOutput: servicecatalog.ServiceCatalogListStackInstancesForProvisionedProductOutput = { ... }
```

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListStackInstancesForProvisionedProductOutput.property.nextPageToken"></a>

- *Type:* `string`

---

##### `stackInstances`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListStackInstancesForProvisionedProductOutput.property.stackInstances"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogStackInstance`](#aws-cdk-sdk.servicecatalog.ServiceCatalogStackInstance)[]

---

### ServiceCatalogListTagOptionsFilters <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListTagOptionsFilters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogListTagOptionsFilters: servicecatalog.ServiceCatalogListTagOptionsFilters = { ... }
```

##### `active`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListTagOptionsFilters.property.active"></a>

- *Type:* `boolean`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListTagOptionsFilters.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListTagOptionsFilters.property.value"></a>

- *Type:* `string`

---

### ServiceCatalogListTagOptionsInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListTagOptionsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogListTagOptionsInput: servicecatalog.ServiceCatalogListTagOptionsInput = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListTagOptionsInput.property.filters"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogListTagOptionsFilters`](#aws-cdk-sdk.servicecatalog.ServiceCatalogListTagOptionsFilters)

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListTagOptionsInput.property.pageSize"></a>

- *Type:* `number`

---

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListTagOptionsInput.property.pageToken"></a>

- *Type:* `string`

---

### ServiceCatalogListTagOptionsOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListTagOptionsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogListTagOptionsOutput: servicecatalog.ServiceCatalogListTagOptionsOutput = { ... }
```

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListTagOptionsOutput.property.pageToken"></a>

- *Type:* `string`

---

##### `tagOptionDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogListTagOptionsOutput.property.tagOptionDetails"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogTagOptionDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogTagOptionDetail)[]

---

### ServiceCatalogOrganizationNode <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogOrganizationNode"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogOrganizationNode: servicecatalog.ServiceCatalogOrganizationNode = { ... }
```

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogOrganizationNode.property.type"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogOrganizationNode.property.value"></a>

- *Type:* `string`

---

### ServiceCatalogParameterConstraints <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogParameterConstraints"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogParameterConstraints: servicecatalog.ServiceCatalogParameterConstraints = { ... }
```

##### `allowedValues`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogParameterConstraints.property.allowedValues"></a>

- *Type:* `string`[]

---

### ServiceCatalogPortfolioDetail <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogPortfolioDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogPortfolioDetail: servicecatalog.ServiceCatalogPortfolioDetail = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogPortfolioDetail.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogPortfolioDetail.property.createdTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogPortfolioDetail.property.description"></a>

- *Type:* `string`

---

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogPortfolioDetail.property.displayName"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogPortfolioDetail.property.id"></a>

- *Type:* `string`

---

##### `providerName`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogPortfolioDetail.property.providerName"></a>

- *Type:* `string`

---

### ServiceCatalogPrincipal <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogPrincipal"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogPrincipal: servicecatalog.ServiceCatalogPrincipal = { ... }
```

##### `principalArn`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogPrincipal.property.principalArn"></a>

- *Type:* `string`

---

##### `principalType`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogPrincipal.property.principalType"></a>

- *Type:* `string`

---

### ServiceCatalogProductViewAggregationValue <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProductViewAggregationValue"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogProductViewAggregationValue: servicecatalog.ServiceCatalogProductViewAggregationValue = { ... }
```

##### `approximateCount`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProductViewAggregationValue.property.approximateCount"></a>

- *Type:* `number`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProductViewAggregationValue.property.value"></a>

- *Type:* `string`

---

### ServiceCatalogProductViewDetail <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProductViewDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogProductViewDetail: servicecatalog.ServiceCatalogProductViewDetail = { ... }
```

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProductViewDetail.property.createdTime"></a>

- *Type:* `string`

---

##### `productArn`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProductViewDetail.property.productArn"></a>

- *Type:* `string`

---

##### `productViewSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProductViewDetail.property.productViewSummary"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogProductViewSummary`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProductViewSummary)

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProductViewDetail.property.status"></a>

- *Type:* `string`

---

### ServiceCatalogProductViewSummary <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProductViewSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogProductViewSummary: servicecatalog.ServiceCatalogProductViewSummary = { ... }
```

##### `distributor`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProductViewSummary.property.distributor"></a>

- *Type:* `string`

---

##### `hasDefaultPath`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProductViewSummary.property.hasDefaultPath"></a>

- *Type:* `boolean`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProductViewSummary.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProductViewSummary.property.name"></a>

- *Type:* `string`

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProductViewSummary.property.owner"></a>

- *Type:* `string`

---

##### `productId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProductViewSummary.property.productId"></a>

- *Type:* `string`

---

##### `shortDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProductViewSummary.property.shortDescription"></a>

- *Type:* `string`

---

##### `supportDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProductViewSummary.property.supportDescription"></a>

- *Type:* `string`

---

##### `supportEmail`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProductViewSummary.property.supportEmail"></a>

- *Type:* `string`

---

##### `supportUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProductViewSummary.property.supportUrl"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProductViewSummary.property.type"></a>

- *Type:* `string`

---

### ServiceCatalogProvisionedProductAttribute <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductAttribute"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogProvisionedProductAttribute: servicecatalog.ServiceCatalogProvisionedProductAttribute = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductAttribute.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductAttribute.property.createdTime"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductAttribute.property.id"></a>

- *Type:* `string`

---

##### `idempotencyToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductAttribute.property.idempotencyToken"></a>

- *Type:* `string`

---

##### `lastProvisioningRecordId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductAttribute.property.lastProvisioningRecordId"></a>

- *Type:* `string`

---

##### `lastRecordId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductAttribute.property.lastRecordId"></a>

- *Type:* `string`

---

##### `lastSuccessfulProvisioningRecordId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductAttribute.property.lastSuccessfulProvisioningRecordId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductAttribute.property.name"></a>

- *Type:* `string`

---

##### `physicalId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductAttribute.property.physicalId"></a>

- *Type:* `string`

---

##### `productId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductAttribute.property.productId"></a>

- *Type:* `string`

---

##### `productName`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductAttribute.property.productName"></a>

- *Type:* `string`

---

##### `provisioningArtifactId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductAttribute.property.provisioningArtifactId"></a>

- *Type:* `string`

---

##### `provisioningArtifactName`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductAttribute.property.provisioningArtifactName"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductAttribute.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductAttribute.property.statusMessage"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductAttribute.property.tags"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogTag`](#aws-cdk-sdk.servicecatalog.ServiceCatalogTag)[]

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductAttribute.property.type"></a>

- *Type:* `string`

---

##### `userArn`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductAttribute.property.userArn"></a>

- *Type:* `string`

---

##### `userArnSession`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductAttribute.property.userArnSession"></a>

- *Type:* `string`

---

### ServiceCatalogProvisionedProductDetail <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogProvisionedProductDetail: servicecatalog.ServiceCatalogProvisionedProductDetail = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductDetail.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductDetail.property.createdTime"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductDetail.property.id"></a>

- *Type:* `string`

---

##### `idempotencyToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductDetail.property.idempotencyToken"></a>

- *Type:* `string`

---

##### `lastProvisioningRecordId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductDetail.property.lastProvisioningRecordId"></a>

- *Type:* `string`

---

##### `lastRecordId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductDetail.property.lastRecordId"></a>

- *Type:* `string`

---

##### `lastSuccessfulProvisioningRecordId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductDetail.property.lastSuccessfulProvisioningRecordId"></a>

- *Type:* `string`

---

##### `launchRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductDetail.property.launchRoleArn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductDetail.property.name"></a>

- *Type:* `string`

---

##### `productId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductDetail.property.productId"></a>

- *Type:* `string`

---

##### `provisioningArtifactId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductDetail.property.provisioningArtifactId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductDetail.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductDetail.property.statusMessage"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductDetail.property.type"></a>

- *Type:* `string`

---

### ServiceCatalogProvisionedProductPlanDetails <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductPlanDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogProvisionedProductPlanDetails: servicecatalog.ServiceCatalogProvisionedProductPlanDetails = { ... }
```

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductPlanDetails.property.createdTime"></a>

- *Type:* `string`

---

##### `notificationArns`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductPlanDetails.property.notificationArns"></a>

- *Type:* `string`[]

---

##### `pathId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductPlanDetails.property.pathId"></a>

- *Type:* `string`

---

##### `planId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductPlanDetails.property.planId"></a>

- *Type:* `string`

---

##### `planName`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductPlanDetails.property.planName"></a>

- *Type:* `string`

---

##### `planType`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductPlanDetails.property.planType"></a>

- *Type:* `string`

---

##### `productId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductPlanDetails.property.productId"></a>

- *Type:* `string`

---

##### `provisioningArtifactId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductPlanDetails.property.provisioningArtifactId"></a>

- *Type:* `string`

---

##### `provisioningParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductPlanDetails.property.provisioningParameters"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisioningParameter`](#aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisioningParameter)[]

---

##### `provisionProductId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductPlanDetails.property.provisionProductId"></a>

- *Type:* `string`

---

##### `provisionProductName`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductPlanDetails.property.provisionProductName"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductPlanDetails.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductPlanDetails.property.statusMessage"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductPlanDetails.property.tags"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogTag`](#aws-cdk-sdk.servicecatalog.ServiceCatalogTag)[]

---

##### `updatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductPlanDetails.property.updatedTime"></a>

- *Type:* `string`

---

### ServiceCatalogProvisionedProductPlanSummary <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductPlanSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogProvisionedProductPlanSummary: servicecatalog.ServiceCatalogProvisionedProductPlanSummary = { ... }
```

##### `planId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductPlanSummary.property.planId"></a>

- *Type:* `string`

---

##### `planName`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductPlanSummary.property.planName"></a>

- *Type:* `string`

---

##### `planType`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductPlanSummary.property.planType"></a>

- *Type:* `string`

---

##### `provisioningArtifactId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductPlanSummary.property.provisioningArtifactId"></a>

- *Type:* `string`

---

##### `provisionProductId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductPlanSummary.property.provisionProductId"></a>

- *Type:* `string`

---

##### `provisionProductName`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductPlanSummary.property.provisionProductName"></a>

- *Type:* `string`

---

### ServiceCatalogProvisioningArtifact <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifact"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogProvisioningArtifact: servicecatalog.ServiceCatalogProvisioningArtifact = { ... }
```

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifact.property.createdTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifact.property.description"></a>

- *Type:* `string`

---

##### `guidance`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifact.property.guidance"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifact.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifact.property.name"></a>

- *Type:* `string`

---

### ServiceCatalogProvisioningArtifactDetail <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogProvisioningArtifactDetail: servicecatalog.ServiceCatalogProvisioningArtifactDetail = { ... }
```

##### `active`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactDetail.property.active"></a>

- *Type:* `boolean`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactDetail.property.createdTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactDetail.property.description"></a>

- *Type:* `string`

---

##### `guidance`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactDetail.property.guidance"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactDetail.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactDetail.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactDetail.property.type"></a>

- *Type:* `string`

---

### ServiceCatalogProvisioningArtifactOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogProvisioningArtifactOutput: servicecatalog.ServiceCatalogProvisioningArtifactOutput = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactOutput.property.description"></a>

- *Type:* `string`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactOutput.property.key"></a>

- *Type:* `string`

---

### ServiceCatalogProvisioningArtifactParameter <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactParameter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogProvisioningArtifactParameter: servicecatalog.ServiceCatalogProvisioningArtifactParameter = { ... }
```

##### `defaultValue`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactParameter.property.defaultValue"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactParameter.property.description"></a>

- *Type:* `string`

---

##### `isNoEcho`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactParameter.property.isNoEcho"></a>

- *Type:* `boolean`

---

##### `parameterConstraints`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactParameter.property.parameterConstraints"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogParameterConstraints`](#aws-cdk-sdk.servicecatalog.ServiceCatalogParameterConstraints)

---

##### `parameterKey`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactParameter.property.parameterKey"></a>

- *Type:* `string`

---

##### `parameterType`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactParameter.property.parameterType"></a>

- *Type:* `string`

---

### ServiceCatalogProvisioningArtifactPreferences <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactPreferences"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogProvisioningArtifactPreferences: servicecatalog.ServiceCatalogProvisioningArtifactPreferences = { ... }
```

##### `stackSetAccounts`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactPreferences.property.stackSetAccounts"></a>

- *Type:* `string`[]

---

##### `stackSetRegions`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactPreferences.property.stackSetRegions"></a>

- *Type:* `string`[]

---

### ServiceCatalogProvisioningArtifactProperties <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogProvisioningArtifactProperties: servicecatalog.ServiceCatalogProvisioningArtifactProperties = { ... }
```

##### `info`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactProperties.property.info"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactProperties.property.description"></a>

- *Type:* `string`

---

##### `disableTemplateValidation`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactProperties.property.disableTemplateValidation"></a>

- *Type:* `boolean`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactProperties.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactProperties.property.type"></a>

- *Type:* `string`

---

### ServiceCatalogProvisioningArtifactSummary <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogProvisioningArtifactSummary: servicecatalog.ServiceCatalogProvisioningArtifactSummary = { ... }
```

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactSummary.property.createdTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactSummary.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactSummary.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactSummary.property.name"></a>

- *Type:* `string`

---

##### `provisioningArtifactMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactSummary.property.provisioningArtifactMetadata"></a>

- *Type:* {[ key: string ]: `string`}

---

### ServiceCatalogProvisioningArtifactView <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactView"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogProvisioningArtifactView: servicecatalog.ServiceCatalogProvisioningArtifactView = { ... }
```

##### `productViewSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactView.property.productViewSummary"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogProductViewSummary`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProductViewSummary)

---

##### `provisioningArtifact`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactView.property.provisioningArtifact"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifact`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifact)

---

### ServiceCatalogProvisioningParameter <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningParameter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogProvisioningParameter: servicecatalog.ServiceCatalogProvisioningParameter = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningParameter.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningParameter.property.value"></a>

- *Type:* `string`

---

### ServiceCatalogProvisioningPreferences <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningPreferences"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogProvisioningPreferences: servicecatalog.ServiceCatalogProvisioningPreferences = { ... }
```

##### `stackSetAccounts`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningPreferences.property.stackSetAccounts"></a>

- *Type:* `string`[]

---

##### `stackSetFailureToleranceCount`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningPreferences.property.stackSetFailureToleranceCount"></a>

- *Type:* `number`

---

##### `stackSetFailureTolerancePercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningPreferences.property.stackSetFailureTolerancePercentage"></a>

- *Type:* `number`

---

##### `stackSetMaxConcurrencyCount`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningPreferences.property.stackSetMaxConcurrencyCount"></a>

- *Type:* `number`

---

##### `stackSetMaxConcurrencyPercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningPreferences.property.stackSetMaxConcurrencyPercentage"></a>

- *Type:* `number`

---

##### `stackSetRegions`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningPreferences.property.stackSetRegions"></a>

- *Type:* `string`[]

---

### ServiceCatalogProvisionProductInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionProductInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogProvisionProductInput: servicecatalog.ServiceCatalogProvisionProductInput = { ... }
```

##### `provisionedProductName`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionProductInput.property.provisionedProductName"></a>

- *Type:* `string`

---

##### `provisionToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionProductInput.property.provisionToken"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionProductInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `notificationArns`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionProductInput.property.notificationArns"></a>

- *Type:* `string`[]

---

##### `pathId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionProductInput.property.pathId"></a>

- *Type:* `string`

---

##### `pathName`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionProductInput.property.pathName"></a>

- *Type:* `string`

---

##### `productId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionProductInput.property.productId"></a>

- *Type:* `string`

---

##### `productName`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionProductInput.property.productName"></a>

- *Type:* `string`

---

##### `provisioningArtifactId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionProductInput.property.provisioningArtifactId"></a>

- *Type:* `string`

---

##### `provisioningArtifactName`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionProductInput.property.provisioningArtifactName"></a>

- *Type:* `string`

---

##### `provisioningParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionProductInput.property.provisioningParameters"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningParameter`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningParameter)[]

---

##### `provisioningPreferences`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionProductInput.property.provisioningPreferences"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningPreferences`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningPreferences)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionProductInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogTag`](#aws-cdk-sdk.servicecatalog.ServiceCatalogTag)[]

---

### ServiceCatalogProvisionProductOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionProductOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogProvisionProductOutput: servicecatalog.ServiceCatalogProvisionProductOutput = { ... }
```

##### `recordDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionProductOutput.property.recordDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogRecordDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogRecordDetail)

---

### ServiceCatalogRecordDetail <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogRecordDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogRecordDetail: servicecatalog.ServiceCatalogRecordDetail = { ... }
```

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogRecordDetail.property.createdTime"></a>

- *Type:* `string`

---

##### `launchRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogRecordDetail.property.launchRoleArn"></a>

- *Type:* `string`

---

##### `pathId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogRecordDetail.property.pathId"></a>

- *Type:* `string`

---

##### `productId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogRecordDetail.property.productId"></a>

- *Type:* `string`

---

##### `provisionedProductId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogRecordDetail.property.provisionedProductId"></a>

- *Type:* `string`

---

##### `provisionedProductName`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogRecordDetail.property.provisionedProductName"></a>

- *Type:* `string`

---

##### `provisionedProductType`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogRecordDetail.property.provisionedProductType"></a>

- *Type:* `string`

---

##### `provisioningArtifactId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogRecordDetail.property.provisioningArtifactId"></a>

- *Type:* `string`

---

##### `recordErrors`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogRecordDetail.property.recordErrors"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogRecordError`](#aws-cdk-sdk.servicecatalog.ServiceCatalogRecordError)[]

---

##### `recordId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogRecordDetail.property.recordId"></a>

- *Type:* `string`

---

##### `recordTags`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogRecordDetail.property.recordTags"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogRecordTag`](#aws-cdk-sdk.servicecatalog.ServiceCatalogRecordTag)[]

---

##### `recordType`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogRecordDetail.property.recordType"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogRecordDetail.property.status"></a>

- *Type:* `string`

---

##### `updatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogRecordDetail.property.updatedTime"></a>

- *Type:* `string`

---

### ServiceCatalogRecordError <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogRecordError"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogRecordError: servicecatalog.ServiceCatalogRecordError = { ... }
```

##### `code`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogRecordError.property.code"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogRecordError.property.description"></a>

- *Type:* `string`

---

### ServiceCatalogRecordOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogRecordOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogRecordOutput: servicecatalog.ServiceCatalogRecordOutput = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogRecordOutput.property.description"></a>

- *Type:* `string`

---

##### `outputKey`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogRecordOutput.property.outputKey"></a>

- *Type:* `string`

---

##### `outputValue`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogRecordOutput.property.outputValue"></a>

- *Type:* `string`

---

### ServiceCatalogRecordTag <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogRecordTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogRecordTag: servicecatalog.ServiceCatalogRecordTag = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogRecordTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogRecordTag.property.value"></a>

- *Type:* `string`

---

### ServiceCatalogRejectPortfolioShareInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogRejectPortfolioShareInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogRejectPortfolioShareInput: servicecatalog.ServiceCatalogRejectPortfolioShareInput = { ... }
```

##### `portfolioId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogRejectPortfolioShareInput.property.portfolioId"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogRejectPortfolioShareInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `portfolioShareType`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogRejectPortfolioShareInput.property.portfolioShareType"></a>

- *Type:* `string`

---

### ServiceCatalogRejectPortfolioShareOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogRejectPortfolioShareOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogRejectPortfolioShareOutput: servicecatalog.ServiceCatalogRejectPortfolioShareOutput = { ... }
```

### ServiceCatalogResourceChange <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResourceChange"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogResourceChange: servicecatalog.ServiceCatalogResourceChange = { ... }
```

##### `action`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResourceChange.property.action"></a>

- *Type:* `string`

---

##### `details`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResourceChange.property.details"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogResourceChangeDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogResourceChangeDetail)[]

---

##### `logicalResourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResourceChange.property.logicalResourceId"></a>

- *Type:* `string`

---

##### `physicalResourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResourceChange.property.physicalResourceId"></a>

- *Type:* `string`

---

##### `replacement`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResourceChange.property.replacement"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResourceChange.property.resourceType"></a>

- *Type:* `string`

---

##### `scope`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResourceChange.property.scope"></a>

- *Type:* `string`[]

---

### ServiceCatalogResourceChangeDetail <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResourceChangeDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogResourceChangeDetail: servicecatalog.ServiceCatalogResourceChangeDetail = { ... }
```

##### `causingEntity`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResourceChangeDetail.property.causingEntity"></a>

- *Type:* `string`

---

##### `evaluation`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResourceChangeDetail.property.evaluation"></a>

- *Type:* `string`

---

##### `target`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResourceChangeDetail.property.target"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogResourceTargetDefinition`](#aws-cdk-sdk.servicecatalog.ServiceCatalogResourceTargetDefinition)

---

### ServiceCatalogResourceDetail <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResourceDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogResourceDetail: servicecatalog.ServiceCatalogResourceDetail = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResourceDetail.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResourceDetail.property.createdTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResourceDetail.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResourceDetail.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResourceDetail.property.name"></a>

- *Type:* `string`

---

### ServiceCatalogResourceTargetDefinition <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResourceTargetDefinition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogResourceTargetDefinition: servicecatalog.ServiceCatalogResourceTargetDefinition = { ... }
```

##### `attribute`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResourceTargetDefinition.property.attribute"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResourceTargetDefinition.property.name"></a>

- *Type:* `string`

---

##### `requiresRecreation`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResourceTargetDefinition.property.requiresRecreation"></a>

- *Type:* `string`

---

### ServiceCatalogScanProvisionedProductsInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogScanProvisionedProductsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogScanProvisionedProductsInput: servicecatalog.ServiceCatalogScanProvisionedProductsInput = { ... }
```

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogScanProvisionedProductsInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `accessLevelFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogScanProvisionedProductsInput.property.accessLevelFilter"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogAccessLevelFilter`](#aws-cdk-sdk.servicecatalog.ServiceCatalogAccessLevelFilter)

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogScanProvisionedProductsInput.property.pageSize"></a>

- *Type:* `number`

---

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogScanProvisionedProductsInput.property.pageToken"></a>

- *Type:* `string`

---

### ServiceCatalogScanProvisionedProductsOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogScanProvisionedProductsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogScanProvisionedProductsOutput: servicecatalog.ServiceCatalogScanProvisionedProductsOutput = { ... }
```

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogScanProvisionedProductsOutput.property.nextPageToken"></a>

- *Type:* `string`

---

##### `provisionedProducts`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogScanProvisionedProductsOutput.property.provisionedProducts"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductDetail)[]

---

### ServiceCatalogSearchProductsAsAdminInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProductsAsAdminInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogSearchProductsAsAdminInput: servicecatalog.ServiceCatalogSearchProductsAsAdminInput = { ... }
```

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProductsAsAdminInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProductsAsAdminInput.property.filters"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProductsAsAdminInput.property.pageSize"></a>

- *Type:* `number`

---

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProductsAsAdminInput.property.pageToken"></a>

- *Type:* `string`

---

##### `portfolioId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProductsAsAdminInput.property.portfolioId"></a>

- *Type:* `string`

---

##### `productSource`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProductsAsAdminInput.property.productSource"></a>

- *Type:* `string`

---

##### `sortBy`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProductsAsAdminInput.property.sortBy"></a>

- *Type:* `string`

---

##### `sortOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProductsAsAdminInput.property.sortOrder"></a>

- *Type:* `string`

---

### ServiceCatalogSearchProductsAsAdminOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProductsAsAdminOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogSearchProductsAsAdminOutput: servicecatalog.ServiceCatalogSearchProductsAsAdminOutput = { ... }
```

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProductsAsAdminOutput.property.nextPageToken"></a>

- *Type:* `string`

---

##### `productViewDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProductsAsAdminOutput.property.productViewDetails"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogProductViewDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProductViewDetail)[]

---

### ServiceCatalogSearchProductsInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProductsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogSearchProductsInput: servicecatalog.ServiceCatalogSearchProductsInput = { ... }
```

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProductsInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProductsInput.property.filters"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProductsInput.property.pageSize"></a>

- *Type:* `number`

---

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProductsInput.property.pageToken"></a>

- *Type:* `string`

---

##### `sortBy`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProductsInput.property.sortBy"></a>

- *Type:* `string`

---

##### `sortOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProductsInput.property.sortOrder"></a>

- *Type:* `string`

---

### ServiceCatalogSearchProductsOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProductsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogSearchProductsOutput: servicecatalog.ServiceCatalogSearchProductsOutput = { ... }
```

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProductsOutput.property.nextPageToken"></a>

- *Type:* `string`

---

##### `productViewAggregations`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProductsOutput.property.productViewAggregations"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.servicecatalog.ServiceCatalogProductViewAggregationValue`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProductViewAggregationValue)[]}

---

##### `productViewSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProductsOutput.property.productViewSummaries"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogProductViewSummary`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProductViewSummary)[]

---

### ServiceCatalogSearchProvisionedProductsInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProvisionedProductsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogSearchProvisionedProductsInput: servicecatalog.ServiceCatalogSearchProvisionedProductsInput = { ... }
```

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProvisionedProductsInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `accessLevelFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProvisionedProductsInput.property.accessLevelFilter"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogAccessLevelFilter`](#aws-cdk-sdk.servicecatalog.ServiceCatalogAccessLevelFilter)

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProvisionedProductsInput.property.filters"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `pageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProvisionedProductsInput.property.pageSize"></a>

- *Type:* `number`

---

##### `pageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProvisionedProductsInput.property.pageToken"></a>

- *Type:* `string`

---

##### `sortBy`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProvisionedProductsInput.property.sortBy"></a>

- *Type:* `string`

---

##### `sortOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProvisionedProductsInput.property.sortOrder"></a>

- *Type:* `string`

---

### ServiceCatalogSearchProvisionedProductsOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProvisionedProductsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogSearchProvisionedProductsOutput: servicecatalog.ServiceCatalogSearchProvisionedProductsOutput = { ... }
```

##### `nextPageToken`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProvisionedProductsOutput.property.nextPageToken"></a>

- *Type:* `string`

---

##### `provisionedProducts`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProvisionedProductsOutput.property.provisionedProducts"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductAttribute`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductAttribute)[]

---

##### `totalResultsCount`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProvisionedProductsOutput.property.totalResultsCount"></a>

- *Type:* `number`

---

### ServiceCatalogServiceActionAssociation <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogServiceActionAssociation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogServiceActionAssociation: servicecatalog.ServiceCatalogServiceActionAssociation = { ... }
```

##### `productId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogServiceActionAssociation.property.productId"></a>

- *Type:* `string`

---

##### `provisioningArtifactId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogServiceActionAssociation.property.provisioningArtifactId"></a>

- *Type:* `string`

---

##### `serviceActionId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogServiceActionAssociation.property.serviceActionId"></a>

- *Type:* `string`

---

### ServiceCatalogServiceActionDetail <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogServiceActionDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogServiceActionDetail: servicecatalog.ServiceCatalogServiceActionDetail = { ... }
```

##### `definition`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogServiceActionDetail.property.definition"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `serviceActionSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogServiceActionDetail.property.serviceActionSummary"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogServiceActionSummary`](#aws-cdk-sdk.servicecatalog.ServiceCatalogServiceActionSummary)

---

### ServiceCatalogServiceActionSummary <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogServiceActionSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogServiceActionSummary: servicecatalog.ServiceCatalogServiceActionSummary = { ... }
```

##### `definitionType`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogServiceActionSummary.property.definitionType"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogServiceActionSummary.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogServiceActionSummary.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogServiceActionSummary.property.name"></a>

- *Type:* `string`

---

### ServiceCatalogShareDetails <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogShareDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogShareDetails: servicecatalog.ServiceCatalogShareDetails = { ... }
```

##### `shareErrors`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogShareDetails.property.shareErrors"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogShareError`](#aws-cdk-sdk.servicecatalog.ServiceCatalogShareError)[]

---

##### `successfulShares`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogShareDetails.property.successfulShares"></a>

- *Type:* `string`[]

---

### ServiceCatalogShareError <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogShareError"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogShareError: servicecatalog.ServiceCatalogShareError = { ... }
```

##### `accounts`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogShareError.property.accounts"></a>

- *Type:* `string`[]

---

##### `error`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogShareError.property.error"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogShareError.property.message"></a>

- *Type:* `string`

---

### ServiceCatalogStackInstance <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogStackInstance"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogStackInstance: servicecatalog.ServiceCatalogStackInstance = { ... }
```

##### `account`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogStackInstance.property.account"></a>

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogStackInstance.property.region"></a>

- *Type:* `string`

---

##### `stackInstanceStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogStackInstance.property.stackInstanceStatus"></a>

- *Type:* `string`

---

### ServiceCatalogTag <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogTag: servicecatalog.ServiceCatalogTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogTag.property.value"></a>

- *Type:* `string`

---

### ServiceCatalogTagOptionDetail <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogTagOptionDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogTagOptionDetail: servicecatalog.ServiceCatalogTagOptionDetail = { ... }
```

##### `active`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogTagOptionDetail.property.active"></a>

- *Type:* `boolean`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogTagOptionDetail.property.id"></a>

- *Type:* `string`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogTagOptionDetail.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogTagOptionDetail.property.value"></a>

- *Type:* `string`

---

### ServiceCatalogTagOptionSummary <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogTagOptionSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogTagOptionSummary: servicecatalog.ServiceCatalogTagOptionSummary = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogTagOptionSummary.property.key"></a>

- *Type:* `string`

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogTagOptionSummary.property.values"></a>

- *Type:* `string`[]

---

### ServiceCatalogTerminateProvisionedProductInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogTerminateProvisionedProductInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogTerminateProvisionedProductInput: servicecatalog.ServiceCatalogTerminateProvisionedProductInput = { ... }
```

##### `terminateToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogTerminateProvisionedProductInput.property.terminateToken"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogTerminateProvisionedProductInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `ignoreErrors`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogTerminateProvisionedProductInput.property.ignoreErrors"></a>

- *Type:* `boolean`

---

##### `provisionedProductId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogTerminateProvisionedProductInput.property.provisionedProductId"></a>

- *Type:* `string`

---

##### `provisionedProductName`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogTerminateProvisionedProductInput.property.provisionedProductName"></a>

- *Type:* `string`

---

##### `retainPhysicalResources`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogTerminateProvisionedProductInput.property.retainPhysicalResources"></a>

- *Type:* `boolean`

---

### ServiceCatalogTerminateProvisionedProductOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogTerminateProvisionedProductOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogTerminateProvisionedProductOutput: servicecatalog.ServiceCatalogTerminateProvisionedProductOutput = { ... }
```

##### `recordDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogTerminateProvisionedProductOutput.property.recordDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogRecordDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogRecordDetail)

---

### ServiceCatalogUpdateConstraintInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateConstraintInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogUpdateConstraintInput: servicecatalog.ServiceCatalogUpdateConstraintInput = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateConstraintInput.property.id"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateConstraintInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateConstraintInput.property.description"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateConstraintInput.property.parameters"></a>

- *Type:* `string`

---

### ServiceCatalogUpdateConstraintOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateConstraintOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogUpdateConstraintOutput: servicecatalog.ServiceCatalogUpdateConstraintOutput = { ... }
```

##### `constraintDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateConstraintOutput.property.constraintDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogConstraintDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogConstraintDetail)

---

##### `constraintParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateConstraintOutput.property.constraintParameters"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateConstraintOutput.property.status"></a>

- *Type:* `string`

---

### ServiceCatalogUpdatePortfolioInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdatePortfolioInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogUpdatePortfolioInput: servicecatalog.ServiceCatalogUpdatePortfolioInput = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdatePortfolioInput.property.id"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdatePortfolioInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `addTags`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdatePortfolioInput.property.addTags"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogTag`](#aws-cdk-sdk.servicecatalog.ServiceCatalogTag)[]

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdatePortfolioInput.property.description"></a>

- *Type:* `string`

---

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdatePortfolioInput.property.displayName"></a>

- *Type:* `string`

---

##### `providerName`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdatePortfolioInput.property.providerName"></a>

- *Type:* `string`

---

##### `removeTags`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdatePortfolioInput.property.removeTags"></a>

- *Type:* `string`[]

---

### ServiceCatalogUpdatePortfolioOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdatePortfolioOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogUpdatePortfolioOutput: servicecatalog.ServiceCatalogUpdatePortfolioOutput = { ... }
```

##### `portfolioDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdatePortfolioOutput.property.portfolioDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogPortfolioDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogPortfolioDetail)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdatePortfolioOutput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogTag`](#aws-cdk-sdk.servicecatalog.ServiceCatalogTag)[]

---

### ServiceCatalogUpdateProductInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProductInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogUpdateProductInput: servicecatalog.ServiceCatalogUpdateProductInput = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProductInput.property.id"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProductInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `addTags`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProductInput.property.addTags"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogTag`](#aws-cdk-sdk.servicecatalog.ServiceCatalogTag)[]

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProductInput.property.description"></a>

- *Type:* `string`

---

##### `distributor`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProductInput.property.distributor"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProductInput.property.name"></a>

- *Type:* `string`

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProductInput.property.owner"></a>

- *Type:* `string`

---

##### `removeTags`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProductInput.property.removeTags"></a>

- *Type:* `string`[]

---

##### `supportDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProductInput.property.supportDescription"></a>

- *Type:* `string`

---

##### `supportEmail`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProductInput.property.supportEmail"></a>

- *Type:* `string`

---

##### `supportUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProductInput.property.supportUrl"></a>

- *Type:* `string`

---

### ServiceCatalogUpdateProductOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProductOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogUpdateProductOutput: servicecatalog.ServiceCatalogUpdateProductOutput = { ... }
```

##### `productViewDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProductOutput.property.productViewDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogProductViewDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProductViewDetail)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProductOutput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogTag`](#aws-cdk-sdk.servicecatalog.ServiceCatalogTag)[]

---

### ServiceCatalogUpdateProvisionedProductInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisionedProductInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogUpdateProvisionedProductInput: servicecatalog.ServiceCatalogUpdateProvisionedProductInput = { ... }
```

##### `updateToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisionedProductInput.property.updateToken"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisionedProductInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `pathId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisionedProductInput.property.pathId"></a>

- *Type:* `string`

---

##### `pathName`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisionedProductInput.property.pathName"></a>

- *Type:* `string`

---

##### `productId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisionedProductInput.property.productId"></a>

- *Type:* `string`

---

##### `productName`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisionedProductInput.property.productName"></a>

- *Type:* `string`

---

##### `provisionedProductId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisionedProductInput.property.provisionedProductId"></a>

- *Type:* `string`

---

##### `provisionedProductName`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisionedProductInput.property.provisionedProductName"></a>

- *Type:* `string`

---

##### `provisioningArtifactId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisionedProductInput.property.provisioningArtifactId"></a>

- *Type:* `string`

---

##### `provisioningArtifactName`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisionedProductInput.property.provisioningArtifactName"></a>

- *Type:* `string`

---

##### `provisioningParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisionedProductInput.property.provisioningParameters"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisioningParameter`](#aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisioningParameter)[]

---

##### `provisioningPreferences`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisionedProductInput.property.provisioningPreferences"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisioningPreferences`](#aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisioningPreferences)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisionedProductInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogTag`](#aws-cdk-sdk.servicecatalog.ServiceCatalogTag)[]

---

### ServiceCatalogUpdateProvisionedProductOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisionedProductOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogUpdateProvisionedProductOutput: servicecatalog.ServiceCatalogUpdateProvisionedProductOutput = { ... }
```

##### `recordDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisionedProductOutput.property.recordDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogRecordDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogRecordDetail)

---

### ServiceCatalogUpdateProvisionedProductPropertiesInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisionedProductPropertiesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogUpdateProvisionedProductPropertiesInput: servicecatalog.ServiceCatalogUpdateProvisionedProductPropertiesInput = { ... }
```

##### `idempotencyToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisionedProductPropertiesInput.property.idempotencyToken"></a>

- *Type:* `string`

---

##### `provisionedProductId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisionedProductPropertiesInput.property.provisionedProductId"></a>

- *Type:* `string`

---

##### `provisionedProductProperties`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisionedProductPropertiesInput.property.provisionedProductProperties"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisionedProductPropertiesInput.property.acceptLanguage"></a>

- *Type:* `string`

---

### ServiceCatalogUpdateProvisionedProductPropertiesOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisionedProductPropertiesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogUpdateProvisionedProductPropertiesOutput: servicecatalog.ServiceCatalogUpdateProvisionedProductPropertiesOutput = { ... }
```

##### `provisionedProductId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisionedProductPropertiesOutput.property.provisionedProductId"></a>

- *Type:* `string`

---

##### `provisionedProductProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisionedProductPropertiesOutput.property.provisionedProductProperties"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `recordId`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisionedProductPropertiesOutput.property.recordId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisionedProductPropertiesOutput.property.status"></a>

- *Type:* `string`

---

### ServiceCatalogUpdateProvisioningArtifactInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisioningArtifactInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogUpdateProvisioningArtifactInput: servicecatalog.ServiceCatalogUpdateProvisioningArtifactInput = { ... }
```

##### `productId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisioningArtifactInput.property.productId"></a>

- *Type:* `string`

---

##### `provisioningArtifactId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisioningArtifactInput.property.provisioningArtifactId"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisioningArtifactInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `active`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisioningArtifactInput.property.active"></a>

- *Type:* `boolean`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisioningArtifactInput.property.description"></a>

- *Type:* `string`

---

##### `guidance`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisioningArtifactInput.property.guidance"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisioningArtifactInput.property.name"></a>

- *Type:* `string`

---

### ServiceCatalogUpdateProvisioningArtifactOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisioningArtifactOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogUpdateProvisioningArtifactOutput: servicecatalog.ServiceCatalogUpdateProvisioningArtifactOutput = { ... }
```

##### `info`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisioningArtifactOutput.property.info"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `provisioningArtifactDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisioningArtifactOutput.property.provisioningArtifactDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactDetail)

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisioningArtifactOutput.property.status"></a>

- *Type:* `string`

---

### ServiceCatalogUpdateProvisioningParameter <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisioningParameter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogUpdateProvisioningParameter: servicecatalog.ServiceCatalogUpdateProvisioningParameter = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisioningParameter.property.key"></a>

- *Type:* `string`

---

##### `usePreviousValue`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisioningParameter.property.usePreviousValue"></a>

- *Type:* `boolean`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisioningParameter.property.value"></a>

- *Type:* `string`

---

### ServiceCatalogUpdateProvisioningPreferences <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisioningPreferences"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogUpdateProvisioningPreferences: servicecatalog.ServiceCatalogUpdateProvisioningPreferences = { ... }
```

##### `stackSetAccounts`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisioningPreferences.property.stackSetAccounts"></a>

- *Type:* `string`[]

---

##### `stackSetFailureToleranceCount`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisioningPreferences.property.stackSetFailureToleranceCount"></a>

- *Type:* `number`

---

##### `stackSetFailureTolerancePercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisioningPreferences.property.stackSetFailureTolerancePercentage"></a>

- *Type:* `number`

---

##### `stackSetMaxConcurrencyCount`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisioningPreferences.property.stackSetMaxConcurrencyCount"></a>

- *Type:* `number`

---

##### `stackSetMaxConcurrencyPercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisioningPreferences.property.stackSetMaxConcurrencyPercentage"></a>

- *Type:* `number`

---

##### `stackSetOperationType`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisioningPreferences.property.stackSetOperationType"></a>

- *Type:* `string`

---

##### `stackSetRegions`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisioningPreferences.property.stackSetRegions"></a>

- *Type:* `string`[]

---

### ServiceCatalogUpdateServiceActionInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateServiceActionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogUpdateServiceActionInput: servicecatalog.ServiceCatalogUpdateServiceActionInput = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateServiceActionInput.property.id"></a>

- *Type:* `string`

---

##### `acceptLanguage`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateServiceActionInput.property.acceptLanguage"></a>

- *Type:* `string`

---

##### `definition`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateServiceActionInput.property.definition"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateServiceActionInput.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateServiceActionInput.property.name"></a>

- *Type:* `string`

---

### ServiceCatalogUpdateServiceActionOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateServiceActionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogUpdateServiceActionOutput: servicecatalog.ServiceCatalogUpdateServiceActionOutput = { ... }
```

##### `serviceActionDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateServiceActionOutput.property.serviceActionDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogServiceActionDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogServiceActionDetail)

---

### ServiceCatalogUpdateTagOptionInput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateTagOptionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogUpdateTagOptionInput: servicecatalog.ServiceCatalogUpdateTagOptionInput = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateTagOptionInput.property.id"></a>

- *Type:* `string`

---

##### `active`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateTagOptionInput.property.active"></a>

- *Type:* `boolean`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateTagOptionInput.property.value"></a>

- *Type:* `string`

---

### ServiceCatalogUpdateTagOptionOutput <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateTagOptionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogUpdateTagOptionOutput: servicecatalog.ServiceCatalogUpdateTagOptionOutput = { ... }
```

##### `tagOptionDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateTagOptionOutput.property.tagOptionDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogTagOptionDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogTagOptionDetail)

---

### ServiceCatalogUsageInstruction <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUsageInstruction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

const serviceCatalogUsageInstruction: servicecatalog.ServiceCatalogUsageInstruction = { ... }
```

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUsageInstruction.property.type"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogUsageInstruction.property.value"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### ServiceCatalogResponsesBatchAssociateServiceActionWithProvisioningArtifact <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesBatchAssociateServiceActionWithProvisioningArtifact"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesBatchAssociateServiceActionWithProvisioningArtifact.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesBatchAssociateServiceActionWithProvisioningArtifact(__scope: Construct, __resources: string[], __input: ServiceCatalogBatchAssociateServiceActionWithProvisioningArtifactInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesBatchAssociateServiceActionWithProvisioningArtifact.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesBatchAssociateServiceActionWithProvisioningArtifact.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesBatchAssociateServiceActionWithProvisioningArtifact.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogBatchAssociateServiceActionWithProvisioningArtifactInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogBatchAssociateServiceActionWithProvisioningArtifactInput)

---



#### Properties <a name="Properties"></a>

##### `failedServiceActionAssociations`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesBatchAssociateServiceActionWithProvisioningArtifact.property.failedServiceActionAssociations"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogFailedServiceActionAssociation`](#aws-cdk-sdk.servicecatalog.ServiceCatalogFailedServiceActionAssociation)[]

---


### ServiceCatalogResponsesBatchDisassociateServiceActionFromProvisioningArtifact <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesBatchDisassociateServiceActionFromProvisioningArtifact"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesBatchDisassociateServiceActionFromProvisioningArtifact.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesBatchDisassociateServiceActionFromProvisioningArtifact(__scope: Construct, __resources: string[], __input: ServiceCatalogBatchDisassociateServiceActionFromProvisioningArtifactInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesBatchDisassociateServiceActionFromProvisioningArtifact.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesBatchDisassociateServiceActionFromProvisioningArtifact.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesBatchDisassociateServiceActionFromProvisioningArtifact.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogBatchDisassociateServiceActionFromProvisioningArtifactInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogBatchDisassociateServiceActionFromProvisioningArtifactInput)

---



#### Properties <a name="Properties"></a>

##### `failedServiceActionAssociations`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesBatchDisassociateServiceActionFromProvisioningArtifact.property.failedServiceActionAssociations"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogFailedServiceActionAssociation`](#aws-cdk-sdk.servicecatalog.ServiceCatalogFailedServiceActionAssociation)[]

---


### ServiceCatalogResponsesCopyProduct <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCopyProduct"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCopyProduct.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesCopyProduct(__scope: Construct, __resources: string[], __input: ServiceCatalogCopyProductInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCopyProduct.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCopyProduct.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCopyProduct.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogCopyProductInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogCopyProductInput)

---



#### Properties <a name="Properties"></a>

##### `copyProductToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCopyProduct.property.copyProductToken"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesCreateConstraint <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateConstraint"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateConstraint.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesCreateConstraint(__scope: Construct, __resources: string[], __input: ServiceCatalogCreateConstraintInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateConstraint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateConstraint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateConstraint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogCreateConstraintInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogCreateConstraintInput)

---



#### Properties <a name="Properties"></a>

##### `constraintDetail`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateConstraint.property.constraintDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateConstraintConstraintDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateConstraintConstraintDetail)

---

##### `constraintParameters`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateConstraint.property.constraintParameters"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateConstraint.property.status"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesCreateConstraintConstraintDetail <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateConstraintConstraintDetail"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateConstraintConstraintDetail.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesCreateConstraintConstraintDetail(__scope: Construct, __resources: string[], __input: ServiceCatalogCreateConstraintInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateConstraintConstraintDetail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateConstraintConstraintDetail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateConstraintConstraintDetail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogCreateConstraintInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogCreateConstraintInput)

---



#### Properties <a name="Properties"></a>

##### `constraintId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateConstraintConstraintDetail.property.constraintId"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateConstraintConstraintDetail.property.description"></a>

- *Type:* `string`

---

##### `owner`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateConstraintConstraintDetail.property.owner"></a>

- *Type:* `string`

---

##### `portfolioId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateConstraintConstraintDetail.property.portfolioId"></a>

- *Type:* `string`

---

##### `productId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateConstraintConstraintDetail.property.productId"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateConstraintConstraintDetail.property.type"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesCreatePortfolio <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreatePortfolio"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreatePortfolio.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesCreatePortfolio(__scope: Construct, __resources: string[], __input: ServiceCatalogCreatePortfolioInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreatePortfolio.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreatePortfolio.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreatePortfolio.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogCreatePortfolioInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogCreatePortfolioInput)

---



#### Properties <a name="Properties"></a>

##### `portfolioDetail`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreatePortfolio.property.portfolioDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreatePortfolioPortfolioDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreatePortfolioPortfolioDetail)

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreatePortfolio.property.tags"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogTag`](#aws-cdk-sdk.servicecatalog.ServiceCatalogTag)[]

---


### ServiceCatalogResponsesCreatePortfolioPortfolioDetail <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreatePortfolioPortfolioDetail"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreatePortfolioPortfolioDetail.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesCreatePortfolioPortfolioDetail(__scope: Construct, __resources: string[], __input: ServiceCatalogCreatePortfolioInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreatePortfolioPortfolioDetail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreatePortfolioPortfolioDetail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreatePortfolioPortfolioDetail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogCreatePortfolioInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogCreatePortfolioInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreatePortfolioPortfolioDetail.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreatePortfolioPortfolioDetail.property.createdTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreatePortfolioPortfolioDetail.property.description"></a>

- *Type:* `string`

---

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreatePortfolioPortfolioDetail.property.displayName"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreatePortfolioPortfolioDetail.property.id"></a>

- *Type:* `string`

---

##### `providerName`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreatePortfolioPortfolioDetail.property.providerName"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesCreatePortfolioShare <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreatePortfolioShare"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreatePortfolioShare.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesCreatePortfolioShare(__scope: Construct, __resources: string[], __input: ServiceCatalogCreatePortfolioShareInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreatePortfolioShare.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreatePortfolioShare.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreatePortfolioShare.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogCreatePortfolioShareInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogCreatePortfolioShareInput)

---



#### Properties <a name="Properties"></a>

##### `portfolioShareToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreatePortfolioShare.property.portfolioShareToken"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesCreateProduct <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProduct"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProduct.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesCreateProduct(__scope: Construct, __resources: string[], __input: ServiceCatalogCreateProductInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProduct.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProduct.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProduct.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProductInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProductInput)

---



#### Properties <a name="Properties"></a>

##### `productViewDetail`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProduct.property.productViewDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProductProductViewDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProductProductViewDetail)

---

##### `provisioningArtifactDetail`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProduct.property.provisioningArtifactDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProductProvisioningArtifactDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProductProvisioningArtifactDetail)

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProduct.property.tags"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogTag`](#aws-cdk-sdk.servicecatalog.ServiceCatalogTag)[]

---


### ServiceCatalogResponsesCreateProductProductViewDetail <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProductProductViewDetail"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProductProductViewDetail.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesCreateProductProductViewDetail(__scope: Construct, __resources: string[], __input: ServiceCatalogCreateProductInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProductProductViewDetail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProductProductViewDetail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProductProductViewDetail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProductInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProductInput)

---



#### Properties <a name="Properties"></a>

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProductProductViewDetail.property.createdTime"></a>

- *Type:* `string`

---

##### `productArn`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProductProductViewDetail.property.productArn"></a>

- *Type:* `string`

---

##### `productViewSummary`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProductProductViewDetail.property.productViewSummary"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProductProductViewDetailProductViewSummary`](#aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProductProductViewDetailProductViewSummary)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProductProductViewDetail.property.status"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesCreateProductProductViewDetailProductViewSummary <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProductProductViewDetailProductViewSummary"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProductProductViewDetailProductViewSummary.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesCreateProductProductViewDetailProductViewSummary(__scope: Construct, __resources: string[], __input: ServiceCatalogCreateProductInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProductProductViewDetailProductViewSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProductProductViewDetailProductViewSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProductProductViewDetailProductViewSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProductInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProductInput)

---



#### Properties <a name="Properties"></a>

##### `distributor`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProductProductViewDetailProductViewSummary.property.distributor"></a>

- *Type:* `string`

---

##### `hasDefaultPath`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProductProductViewDetailProductViewSummary.property.hasDefaultPath"></a>

- *Type:* `boolean`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProductProductViewDetailProductViewSummary.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProductProductViewDetailProductViewSummary.property.name"></a>

- *Type:* `string`

---

##### `owner`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProductProductViewDetailProductViewSummary.property.owner"></a>

- *Type:* `string`

---

##### `productId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProductProductViewDetailProductViewSummary.property.productId"></a>

- *Type:* `string`

---

##### `shortDescription`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProductProductViewDetailProductViewSummary.property.shortDescription"></a>

- *Type:* `string`

---

##### `supportDescription`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProductProductViewDetailProductViewSummary.property.supportDescription"></a>

- *Type:* `string`

---

##### `supportEmail`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProductProductViewDetailProductViewSummary.property.supportEmail"></a>

- *Type:* `string`

---

##### `supportUrl`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProductProductViewDetailProductViewSummary.property.supportUrl"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProductProductViewDetailProductViewSummary.property.type"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesCreateProductProvisioningArtifactDetail <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProductProvisioningArtifactDetail"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProductProvisioningArtifactDetail.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesCreateProductProvisioningArtifactDetail(__scope: Construct, __resources: string[], __input: ServiceCatalogCreateProductInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProductProvisioningArtifactDetail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProductProvisioningArtifactDetail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProductProvisioningArtifactDetail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProductInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProductInput)

---



#### Properties <a name="Properties"></a>

##### `active`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProductProvisioningArtifactDetail.property.active"></a>

- *Type:* `boolean`

---

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProductProvisioningArtifactDetail.property.createdTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProductProvisioningArtifactDetail.property.description"></a>

- *Type:* `string`

---

##### `guidance`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProductProvisioningArtifactDetail.property.guidance"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProductProvisioningArtifactDetail.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProductProvisioningArtifactDetail.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProductProvisioningArtifactDetail.property.type"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesCreateProvisionedProductPlan <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProvisionedProductPlan"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProvisionedProductPlan.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesCreateProvisionedProductPlan(__scope: Construct, __resources: string[], __input: ServiceCatalogCreateProvisionedProductPlanInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProvisionedProductPlan.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProvisionedProductPlan.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProvisionedProductPlan.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProvisionedProductPlanInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProvisionedProductPlanInput)

---



#### Properties <a name="Properties"></a>

##### `planId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProvisionedProductPlan.property.planId"></a>

- *Type:* `string`

---

##### `planName`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProvisionedProductPlan.property.planName"></a>

- *Type:* `string`

---

##### `provisionedProductName`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProvisionedProductPlan.property.provisionedProductName"></a>

- *Type:* `string`

---

##### `provisioningArtifactId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProvisionedProductPlan.property.provisioningArtifactId"></a>

- *Type:* `string`

---

##### `provisionProductId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProvisionedProductPlan.property.provisionProductId"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesCreateProvisioningArtifact <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProvisioningArtifact"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProvisioningArtifact.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesCreateProvisioningArtifact(__scope: Construct, __resources: string[], __input: ServiceCatalogCreateProvisioningArtifactInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProvisioningArtifact.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProvisioningArtifact.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProvisioningArtifact.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProvisioningArtifactInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProvisioningArtifactInput)

---



#### Properties <a name="Properties"></a>

##### `info`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProvisioningArtifact.property.info"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `provisioningArtifactDetail`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProvisioningArtifact.property.provisioningArtifactDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProvisioningArtifactProvisioningArtifactDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProvisioningArtifactProvisioningArtifactDetail)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProvisioningArtifact.property.status"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesCreateProvisioningArtifactProvisioningArtifactDetail <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProvisioningArtifactProvisioningArtifactDetail"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProvisioningArtifactProvisioningArtifactDetail.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesCreateProvisioningArtifactProvisioningArtifactDetail(__scope: Construct, __resources: string[], __input: ServiceCatalogCreateProvisioningArtifactInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProvisioningArtifactProvisioningArtifactDetail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProvisioningArtifactProvisioningArtifactDetail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProvisioningArtifactProvisioningArtifactDetail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProvisioningArtifactInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogCreateProvisioningArtifactInput)

---



#### Properties <a name="Properties"></a>

##### `active`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProvisioningArtifactProvisioningArtifactDetail.property.active"></a>

- *Type:* `boolean`

---

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProvisioningArtifactProvisioningArtifactDetail.property.createdTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProvisioningArtifactProvisioningArtifactDetail.property.description"></a>

- *Type:* `string`

---

##### `guidance`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProvisioningArtifactProvisioningArtifactDetail.property.guidance"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProvisioningArtifactProvisioningArtifactDetail.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProvisioningArtifactProvisioningArtifactDetail.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateProvisioningArtifactProvisioningArtifactDetail.property.type"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesCreateServiceAction <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateServiceAction"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateServiceAction.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesCreateServiceAction(__scope: Construct, __resources: string[], __input: ServiceCatalogCreateServiceActionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateServiceAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateServiceAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateServiceAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogCreateServiceActionInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogCreateServiceActionInput)

---



#### Properties <a name="Properties"></a>

##### `serviceActionDetail`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateServiceAction.property.serviceActionDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateServiceActionServiceActionDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateServiceActionServiceActionDetail)

---


### ServiceCatalogResponsesCreateServiceActionServiceActionDetail <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateServiceActionServiceActionDetail"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateServiceActionServiceActionDetail.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesCreateServiceActionServiceActionDetail(__scope: Construct, __resources: string[], __input: ServiceCatalogCreateServiceActionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateServiceActionServiceActionDetail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateServiceActionServiceActionDetail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateServiceActionServiceActionDetail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogCreateServiceActionInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogCreateServiceActionInput)

---



#### Properties <a name="Properties"></a>

##### `definition`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateServiceActionServiceActionDetail.property.definition"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `serviceActionSummary`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateServiceActionServiceActionDetail.property.serviceActionSummary"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateServiceActionServiceActionDetailServiceActionSummary`](#aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateServiceActionServiceActionDetailServiceActionSummary)

---


### ServiceCatalogResponsesCreateServiceActionServiceActionDetailServiceActionSummary <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateServiceActionServiceActionDetailServiceActionSummary"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateServiceActionServiceActionDetailServiceActionSummary.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesCreateServiceActionServiceActionDetailServiceActionSummary(__scope: Construct, __resources: string[], __input: ServiceCatalogCreateServiceActionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateServiceActionServiceActionDetailServiceActionSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateServiceActionServiceActionDetailServiceActionSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateServiceActionServiceActionDetailServiceActionSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogCreateServiceActionInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogCreateServiceActionInput)

---



#### Properties <a name="Properties"></a>

##### `definitionType`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateServiceActionServiceActionDetailServiceActionSummary.property.definitionType"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateServiceActionServiceActionDetailServiceActionSummary.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateServiceActionServiceActionDetailServiceActionSummary.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateServiceActionServiceActionDetailServiceActionSummary.property.name"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesCreateTagOption <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateTagOption"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateTagOption.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesCreateTagOption(__scope: Construct, __resources: string[], __input: ServiceCatalogCreateTagOptionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateTagOption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateTagOption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateTagOption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogCreateTagOptionInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogCreateTagOptionInput)

---



#### Properties <a name="Properties"></a>

##### `tagOptionDetail`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateTagOption.property.tagOptionDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateTagOptionTagOptionDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateTagOptionTagOptionDetail)

---


### ServiceCatalogResponsesCreateTagOptionTagOptionDetail <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateTagOptionTagOptionDetail"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateTagOptionTagOptionDetail.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesCreateTagOptionTagOptionDetail(__scope: Construct, __resources: string[], __input: ServiceCatalogCreateTagOptionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateTagOptionTagOptionDetail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateTagOptionTagOptionDetail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateTagOptionTagOptionDetail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogCreateTagOptionInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogCreateTagOptionInput)

---



#### Properties <a name="Properties"></a>

##### `active`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateTagOptionTagOptionDetail.property.active"></a>

- *Type:* `boolean`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateTagOptionTagOptionDetail.property.id"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateTagOptionTagOptionDetail.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesCreateTagOptionTagOptionDetail.property.value"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesDeletePortfolioShare <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDeletePortfolioShare"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDeletePortfolioShare.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesDeletePortfolioShare(__scope: Construct, __resources: string[], __input: ServiceCatalogDeletePortfolioShareInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDeletePortfolioShare.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDeletePortfolioShare.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDeletePortfolioShare.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDeletePortfolioShareInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDeletePortfolioShareInput)

---



#### Properties <a name="Properties"></a>

##### `portfolioShareToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDeletePortfolioShare.property.portfolioShareToken"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesDescribeConstraint <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeConstraint"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeConstraint.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesDescribeConstraint(__scope: Construct, __resources: string[], __input: ServiceCatalogDescribeConstraintInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeConstraint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeConstraint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeConstraint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeConstraintInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeConstraintInput)

---



#### Properties <a name="Properties"></a>

##### `constraintDetail`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeConstraint.property.constraintDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeConstraintConstraintDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeConstraintConstraintDetail)

---

##### `constraintParameters`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeConstraint.property.constraintParameters"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeConstraint.property.status"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesDescribeConstraintConstraintDetail <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeConstraintConstraintDetail"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeConstraintConstraintDetail.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesDescribeConstraintConstraintDetail(__scope: Construct, __resources: string[], __input: ServiceCatalogDescribeConstraintInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeConstraintConstraintDetail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeConstraintConstraintDetail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeConstraintConstraintDetail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeConstraintInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeConstraintInput)

---



#### Properties <a name="Properties"></a>

##### `constraintId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeConstraintConstraintDetail.property.constraintId"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeConstraintConstraintDetail.property.description"></a>

- *Type:* `string`

---

##### `owner`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeConstraintConstraintDetail.property.owner"></a>

- *Type:* `string`

---

##### `portfolioId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeConstraintConstraintDetail.property.portfolioId"></a>

- *Type:* `string`

---

##### `productId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeConstraintConstraintDetail.property.productId"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeConstraintConstraintDetail.property.type"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesDescribeCopyProductStatus <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeCopyProductStatus"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeCopyProductStatus.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesDescribeCopyProductStatus(__scope: Construct, __resources: string[], __input: ServiceCatalogDescribeCopyProductStatusInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeCopyProductStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeCopyProductStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeCopyProductStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeCopyProductStatusInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeCopyProductStatusInput)

---



#### Properties <a name="Properties"></a>

##### `copyProductStatus`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeCopyProductStatus.property.copyProductStatus"></a>

- *Type:* `string`

---

##### `statusDetail`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeCopyProductStatus.property.statusDetail"></a>

- *Type:* `string`

---

##### `targetProductId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeCopyProductStatus.property.targetProductId"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesDescribePortfolio <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribePortfolio"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribePortfolio.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesDescribePortfolio(__scope: Construct, __resources: string[], __input: ServiceCatalogDescribePortfolioInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribePortfolio.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribePortfolio.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribePortfolio.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDescribePortfolioInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDescribePortfolioInput)

---



#### Properties <a name="Properties"></a>

##### `budgets`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribePortfolio.property.budgets"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogBudgetDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogBudgetDetail)[]

---

##### `portfolioDetail`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribePortfolio.property.portfolioDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribePortfolioPortfolioDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribePortfolioPortfolioDetail)

---

##### `tagOptions`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribePortfolio.property.tagOptions"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogTagOptionDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogTagOptionDetail)[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribePortfolio.property.tags"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogTag`](#aws-cdk-sdk.servicecatalog.ServiceCatalogTag)[]

---


### ServiceCatalogResponsesDescribePortfolioPortfolioDetail <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribePortfolioPortfolioDetail"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribePortfolioPortfolioDetail.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesDescribePortfolioPortfolioDetail(__scope: Construct, __resources: string[], __input: ServiceCatalogDescribePortfolioInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribePortfolioPortfolioDetail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribePortfolioPortfolioDetail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribePortfolioPortfolioDetail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDescribePortfolioInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDescribePortfolioInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribePortfolioPortfolioDetail.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribePortfolioPortfolioDetail.property.createdTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribePortfolioPortfolioDetail.property.description"></a>

- *Type:* `string`

---

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribePortfolioPortfolioDetail.property.displayName"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribePortfolioPortfolioDetail.property.id"></a>

- *Type:* `string`

---

##### `providerName`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribePortfolioPortfolioDetail.property.providerName"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesDescribePortfolioShareStatus <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribePortfolioShareStatus"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribePortfolioShareStatus.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesDescribePortfolioShareStatus(__scope: Construct, __resources: string[], __input: ServiceCatalogDescribePortfolioShareStatusInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribePortfolioShareStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribePortfolioShareStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribePortfolioShareStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDescribePortfolioShareStatusInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDescribePortfolioShareStatusInput)

---



#### Properties <a name="Properties"></a>

##### `organizationNodeValue`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribePortfolioShareStatus.property.organizationNodeValue"></a>

- *Type:* `string`

---

##### `portfolioId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribePortfolioShareStatus.property.portfolioId"></a>

- *Type:* `string`

---

##### `portfolioShareToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribePortfolioShareStatus.property.portfolioShareToken"></a>

- *Type:* `string`

---

##### `shareDetails`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribePortfolioShareStatus.property.shareDetails"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribePortfolioShareStatusShareDetails`](#aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribePortfolioShareStatusShareDetails)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribePortfolioShareStatus.property.status"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesDescribePortfolioShareStatusShareDetails <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribePortfolioShareStatusShareDetails"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribePortfolioShareStatusShareDetails.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesDescribePortfolioShareStatusShareDetails(__scope: Construct, __resources: string[], __input: ServiceCatalogDescribePortfolioShareStatusInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribePortfolioShareStatusShareDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribePortfolioShareStatusShareDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribePortfolioShareStatusShareDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDescribePortfolioShareStatusInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDescribePortfolioShareStatusInput)

---



#### Properties <a name="Properties"></a>

##### `shareErrors`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribePortfolioShareStatusShareDetails.property.shareErrors"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogShareError`](#aws-cdk-sdk.servicecatalog.ServiceCatalogShareError)[]

---

##### `successfulShares`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribePortfolioShareStatusShareDetails.property.successfulShares"></a>

- *Type:* `string`[]

---


### ServiceCatalogResponsesDescribeProduct <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProduct"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProduct.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesDescribeProduct(__scope: Construct, __resources: string[], __input: ServiceCatalogDescribeProductInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProduct.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProduct.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProduct.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProductInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProductInput)

---



#### Properties <a name="Properties"></a>

##### `budgets`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProduct.property.budgets"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogBudgetDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogBudgetDetail)[]

---

##### `launchPaths`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProduct.property.launchPaths"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogLaunchPath`](#aws-cdk-sdk.servicecatalog.ServiceCatalogLaunchPath)[]

---

##### `productViewSummary`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProduct.property.productViewSummary"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductProductViewSummary`](#aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductProductViewSummary)

---

##### `provisioningArtifacts`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProduct.property.provisioningArtifacts"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifact`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifact)[]

---


### ServiceCatalogResponsesDescribeProductAsAdmin <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductAsAdmin"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductAsAdmin.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesDescribeProductAsAdmin(__scope: Construct, __resources: string[], __input: ServiceCatalogDescribeProductAsAdminInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductAsAdmin.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductAsAdmin.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductAsAdmin.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProductAsAdminInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProductAsAdminInput)

---



#### Properties <a name="Properties"></a>

##### `budgets`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductAsAdmin.property.budgets"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogBudgetDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogBudgetDetail)[]

---

##### `productViewDetail`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductAsAdmin.property.productViewDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductAsAdminProductViewDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductAsAdminProductViewDetail)

---

##### `provisioningArtifactSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductAsAdmin.property.provisioningArtifactSummaries"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactSummary`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactSummary)[]

---

##### `tagOptions`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductAsAdmin.property.tagOptions"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogTagOptionDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogTagOptionDetail)[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductAsAdmin.property.tags"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogTag`](#aws-cdk-sdk.servicecatalog.ServiceCatalogTag)[]

---


### ServiceCatalogResponsesDescribeProductAsAdminProductViewDetail <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductAsAdminProductViewDetail"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductAsAdminProductViewDetail.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesDescribeProductAsAdminProductViewDetail(__scope: Construct, __resources: string[], __input: ServiceCatalogDescribeProductAsAdminInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductAsAdminProductViewDetail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductAsAdminProductViewDetail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductAsAdminProductViewDetail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProductAsAdminInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProductAsAdminInput)

---



#### Properties <a name="Properties"></a>

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductAsAdminProductViewDetail.property.createdTime"></a>

- *Type:* `string`

---

##### `productArn`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductAsAdminProductViewDetail.property.productArn"></a>

- *Type:* `string`

---

##### `productViewSummary`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductAsAdminProductViewDetail.property.productViewSummary"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductAsAdminProductViewDetailProductViewSummary`](#aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductAsAdminProductViewDetailProductViewSummary)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductAsAdminProductViewDetail.property.status"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesDescribeProductAsAdminProductViewDetailProductViewSummary <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductAsAdminProductViewDetailProductViewSummary"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductAsAdminProductViewDetailProductViewSummary.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesDescribeProductAsAdminProductViewDetailProductViewSummary(__scope: Construct, __resources: string[], __input: ServiceCatalogDescribeProductAsAdminInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductAsAdminProductViewDetailProductViewSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductAsAdminProductViewDetailProductViewSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductAsAdminProductViewDetailProductViewSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProductAsAdminInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProductAsAdminInput)

---



#### Properties <a name="Properties"></a>

##### `distributor`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductAsAdminProductViewDetailProductViewSummary.property.distributor"></a>

- *Type:* `string`

---

##### `hasDefaultPath`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductAsAdminProductViewDetailProductViewSummary.property.hasDefaultPath"></a>

- *Type:* `boolean`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductAsAdminProductViewDetailProductViewSummary.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductAsAdminProductViewDetailProductViewSummary.property.name"></a>

- *Type:* `string`

---

##### `owner`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductAsAdminProductViewDetailProductViewSummary.property.owner"></a>

- *Type:* `string`

---

##### `productId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductAsAdminProductViewDetailProductViewSummary.property.productId"></a>

- *Type:* `string`

---

##### `shortDescription`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductAsAdminProductViewDetailProductViewSummary.property.shortDescription"></a>

- *Type:* `string`

---

##### `supportDescription`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductAsAdminProductViewDetailProductViewSummary.property.supportDescription"></a>

- *Type:* `string`

---

##### `supportEmail`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductAsAdminProductViewDetailProductViewSummary.property.supportEmail"></a>

- *Type:* `string`

---

##### `supportUrl`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductAsAdminProductViewDetailProductViewSummary.property.supportUrl"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductAsAdminProductViewDetailProductViewSummary.property.type"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesDescribeProductProductViewSummary <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductProductViewSummary"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductProductViewSummary.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesDescribeProductProductViewSummary(__scope: Construct, __resources: string[], __input: ServiceCatalogDescribeProductInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductProductViewSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductProductViewSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductProductViewSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProductInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProductInput)

---



#### Properties <a name="Properties"></a>

##### `distributor`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductProductViewSummary.property.distributor"></a>

- *Type:* `string`

---

##### `hasDefaultPath`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductProductViewSummary.property.hasDefaultPath"></a>

- *Type:* `boolean`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductProductViewSummary.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductProductViewSummary.property.name"></a>

- *Type:* `string`

---

##### `owner`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductProductViewSummary.property.owner"></a>

- *Type:* `string`

---

##### `productId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductProductViewSummary.property.productId"></a>

- *Type:* `string`

---

##### `shortDescription`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductProductViewSummary.property.shortDescription"></a>

- *Type:* `string`

---

##### `supportDescription`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductProductViewSummary.property.supportDescription"></a>

- *Type:* `string`

---

##### `supportEmail`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductProductViewSummary.property.supportEmail"></a>

- *Type:* `string`

---

##### `supportUrl`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductProductViewSummary.property.supportUrl"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductProductViewSummary.property.type"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesDescribeProductView <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductView"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductView.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesDescribeProductView(__scope: Construct, __resources: string[], __input: ServiceCatalogDescribeProductViewInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductView.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductView.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductView.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProductViewInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProductViewInput)

---



#### Properties <a name="Properties"></a>

##### `productViewSummary`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductView.property.productViewSummary"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductViewProductViewSummary`](#aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductViewProductViewSummary)

---

##### `provisioningArtifacts`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductView.property.provisioningArtifacts"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifact`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifact)[]

---


### ServiceCatalogResponsesDescribeProductViewProductViewSummary <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductViewProductViewSummary"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductViewProductViewSummary.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesDescribeProductViewProductViewSummary(__scope: Construct, __resources: string[], __input: ServiceCatalogDescribeProductViewInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductViewProductViewSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductViewProductViewSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductViewProductViewSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProductViewInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProductViewInput)

---



#### Properties <a name="Properties"></a>

##### `distributor`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductViewProductViewSummary.property.distributor"></a>

- *Type:* `string`

---

##### `hasDefaultPath`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductViewProductViewSummary.property.hasDefaultPath"></a>

- *Type:* `boolean`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductViewProductViewSummary.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductViewProductViewSummary.property.name"></a>

- *Type:* `string`

---

##### `owner`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductViewProductViewSummary.property.owner"></a>

- *Type:* `string`

---

##### `productId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductViewProductViewSummary.property.productId"></a>

- *Type:* `string`

---

##### `shortDescription`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductViewProductViewSummary.property.shortDescription"></a>

- *Type:* `string`

---

##### `supportDescription`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductViewProductViewSummary.property.supportDescription"></a>

- *Type:* `string`

---

##### `supportEmail`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductViewProductViewSummary.property.supportEmail"></a>

- *Type:* `string`

---

##### `supportUrl`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductViewProductViewSummary.property.supportUrl"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProductViewProductViewSummary.property.type"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesDescribeProvisionedProduct <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProduct"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProduct.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesDescribeProvisionedProduct(__scope: Construct, __resources: string[], __input: ServiceCatalogDescribeProvisionedProductInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProduct.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProduct.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProduct.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisionedProductInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisionedProductInput)

---



#### Properties <a name="Properties"></a>

##### `cloudWatchDashboards`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProduct.property.cloudWatchDashboards"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogCloudWatchDashboard`](#aws-cdk-sdk.servicecatalog.ServiceCatalogCloudWatchDashboard)[]

---

##### `provisionedProductDetail`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProduct.property.provisionedProductDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductProvisionedProductDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductProvisionedProductDetail)

---


### ServiceCatalogResponsesDescribeProvisionedProductPlan <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductPlan"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductPlan.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductPlan(__scope: Construct, __resources: string[], __input: ServiceCatalogDescribeProvisionedProductPlanInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductPlan.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductPlan.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductPlan.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisionedProductPlanInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisionedProductPlanInput)

---



#### Properties <a name="Properties"></a>

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductPlan.property.nextPageToken"></a>

- *Type:* `string`

---

##### `provisionedProductPlanDetails`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductPlan.property.provisionedProductPlanDetails"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductPlanProvisionedProductPlanDetails`](#aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductPlanProvisionedProductPlanDetails)

---

##### `resourceChanges`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductPlan.property.resourceChanges"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogResourceChange`](#aws-cdk-sdk.servicecatalog.ServiceCatalogResourceChange)[]

---


### ServiceCatalogResponsesDescribeProvisionedProductPlanProvisionedProductPlanDetails <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductPlanProvisionedProductPlanDetails"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductPlanProvisionedProductPlanDetails.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductPlanProvisionedProductPlanDetails(__scope: Construct, __resources: string[], __input: ServiceCatalogDescribeProvisionedProductPlanInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductPlanProvisionedProductPlanDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductPlanProvisionedProductPlanDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductPlanProvisionedProductPlanDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisionedProductPlanInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisionedProductPlanInput)

---



#### Properties <a name="Properties"></a>

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductPlanProvisionedProductPlanDetails.property.createdTime"></a>

- *Type:* `string`

---

##### `notificationArns`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductPlanProvisionedProductPlanDetails.property.notificationArns"></a>

- *Type:* `string`[]

---

##### `pathId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductPlanProvisionedProductPlanDetails.property.pathId"></a>

- *Type:* `string`

---

##### `planId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductPlanProvisionedProductPlanDetails.property.planId"></a>

- *Type:* `string`

---

##### `planName`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductPlanProvisionedProductPlanDetails.property.planName"></a>

- *Type:* `string`

---

##### `planType`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductPlanProvisionedProductPlanDetails.property.planType"></a>

- *Type:* `string`

---

##### `productId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductPlanProvisionedProductPlanDetails.property.productId"></a>

- *Type:* `string`

---

##### `provisioningArtifactId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductPlanProvisionedProductPlanDetails.property.provisioningArtifactId"></a>

- *Type:* `string`

---

##### `provisioningParameters`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductPlanProvisionedProductPlanDetails.property.provisioningParameters"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisioningParameter`](#aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisioningParameter)[]

---

##### `provisionProductId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductPlanProvisionedProductPlanDetails.property.provisionProductId"></a>

- *Type:* `string`

---

##### `provisionProductName`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductPlanProvisionedProductPlanDetails.property.provisionProductName"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductPlanProvisionedProductPlanDetails.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductPlanProvisionedProductPlanDetails.property.statusMessage"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductPlanProvisionedProductPlanDetails.property.tags"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogTag`](#aws-cdk-sdk.servicecatalog.ServiceCatalogTag)[]

---

##### `updatedTime`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductPlanProvisionedProductPlanDetails.property.updatedTime"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesDescribeProvisionedProductProvisionedProductDetail <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductProvisionedProductDetail"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductProvisionedProductDetail.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductProvisionedProductDetail(__scope: Construct, __resources: string[], __input: ServiceCatalogDescribeProvisionedProductInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductProvisionedProductDetail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductProvisionedProductDetail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductProvisionedProductDetail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisionedProductInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisionedProductInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductProvisionedProductDetail.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductProvisionedProductDetail.property.createdTime"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductProvisionedProductDetail.property.id"></a>

- *Type:* `string`

---

##### `idempotencyToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductProvisionedProductDetail.property.idempotencyToken"></a>

- *Type:* `string`

---

##### `lastProvisioningRecordId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductProvisionedProductDetail.property.lastProvisioningRecordId"></a>

- *Type:* `string`

---

##### `lastRecordId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductProvisionedProductDetail.property.lastRecordId"></a>

- *Type:* `string`

---

##### `lastSuccessfulProvisioningRecordId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductProvisionedProductDetail.property.lastSuccessfulProvisioningRecordId"></a>

- *Type:* `string`

---

##### `launchRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductProvisionedProductDetail.property.launchRoleArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductProvisionedProductDetail.property.name"></a>

- *Type:* `string`

---

##### `productId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductProvisionedProductDetail.property.productId"></a>

- *Type:* `string`

---

##### `provisioningArtifactId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductProvisionedProductDetail.property.provisioningArtifactId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductProvisionedProductDetail.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductProvisionedProductDetail.property.statusMessage"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisionedProductProvisionedProductDetail.property.type"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesDescribeProvisioningArtifact <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisioningArtifact"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisioningArtifact.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesDescribeProvisioningArtifact(__scope: Construct, __resources: string[], __input: ServiceCatalogDescribeProvisioningArtifactInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisioningArtifact.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisioningArtifact.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisioningArtifact.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisioningArtifactInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisioningArtifactInput)

---



#### Properties <a name="Properties"></a>

##### `info`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisioningArtifact.property.info"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `provisioningArtifactDetail`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisioningArtifact.property.provisioningArtifactDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisioningArtifactProvisioningArtifactDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisioningArtifactProvisioningArtifactDetail)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisioningArtifact.property.status"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesDescribeProvisioningArtifactProvisioningArtifactDetail <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisioningArtifactProvisioningArtifactDetail"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisioningArtifactProvisioningArtifactDetail.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesDescribeProvisioningArtifactProvisioningArtifactDetail(__scope: Construct, __resources: string[], __input: ServiceCatalogDescribeProvisioningArtifactInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisioningArtifactProvisioningArtifactDetail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisioningArtifactProvisioningArtifactDetail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisioningArtifactProvisioningArtifactDetail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisioningArtifactInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisioningArtifactInput)

---



#### Properties <a name="Properties"></a>

##### `active`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisioningArtifactProvisioningArtifactDetail.property.active"></a>

- *Type:* `boolean`

---

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisioningArtifactProvisioningArtifactDetail.property.createdTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisioningArtifactProvisioningArtifactDetail.property.description"></a>

- *Type:* `string`

---

##### `guidance`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisioningArtifactProvisioningArtifactDetail.property.guidance"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisioningArtifactProvisioningArtifactDetail.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisioningArtifactProvisioningArtifactDetail.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisioningArtifactProvisioningArtifactDetail.property.type"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesDescribeProvisioningParameters <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisioningParameters"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisioningParameters.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesDescribeProvisioningParameters(__scope: Construct, __resources: string[], __input: ServiceCatalogDescribeProvisioningParametersInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisioningParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisioningParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisioningParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisioningParametersInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisioningParametersInput)

---



#### Properties <a name="Properties"></a>

##### `constraintSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisioningParameters.property.constraintSummaries"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogConstraintSummary`](#aws-cdk-sdk.servicecatalog.ServiceCatalogConstraintSummary)[]

---

##### `provisioningArtifactOutputs`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisioningParameters.property.provisioningArtifactOutputs"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactOutput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactOutput)[]

---

##### `provisioningArtifactParameters`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisioningParameters.property.provisioningArtifactParameters"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactParameter`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactParameter)[]

---

##### `provisioningArtifactPreferences`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisioningParameters.property.provisioningArtifactPreferences"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisioningParametersProvisioningArtifactPreferences`](#aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisioningParametersProvisioningArtifactPreferences)

---

##### `tagOptions`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisioningParameters.property.tagOptions"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogTagOptionSummary`](#aws-cdk-sdk.servicecatalog.ServiceCatalogTagOptionSummary)[]

---

##### `usageInstructions`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisioningParameters.property.usageInstructions"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogUsageInstruction`](#aws-cdk-sdk.servicecatalog.ServiceCatalogUsageInstruction)[]

---


### ServiceCatalogResponsesDescribeProvisioningParametersProvisioningArtifactPreferences <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisioningParametersProvisioningArtifactPreferences"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisioningParametersProvisioningArtifactPreferences.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesDescribeProvisioningParametersProvisioningArtifactPreferences(__scope: Construct, __resources: string[], __input: ServiceCatalogDescribeProvisioningParametersInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisioningParametersProvisioningArtifactPreferences.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisioningParametersProvisioningArtifactPreferences.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisioningParametersProvisioningArtifactPreferences.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisioningParametersInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeProvisioningParametersInput)

---



#### Properties <a name="Properties"></a>

##### `stackSetAccounts`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisioningParametersProvisioningArtifactPreferences.property.stackSetAccounts"></a>

- *Type:* `string`[]

---

##### `stackSetRegions`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeProvisioningParametersProvisioningArtifactPreferences.property.stackSetRegions"></a>

- *Type:* `string`[]

---


### ServiceCatalogResponsesDescribeRecord <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeRecord"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeRecord.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesDescribeRecord(__scope: Construct, __resources: string[], __input: ServiceCatalogDescribeRecordInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeRecord.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeRecord.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeRecord.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeRecordInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeRecordInput)

---



#### Properties <a name="Properties"></a>

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeRecord.property.nextPageToken"></a>

- *Type:* `string`

---

##### `recordDetail`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeRecord.property.recordDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeRecordRecordDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeRecordRecordDetail)

---

##### `recordOutputs`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeRecord.property.recordOutputs"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogRecordOutput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogRecordOutput)[]

---


### ServiceCatalogResponsesDescribeRecordRecordDetail <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeRecordRecordDetail"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeRecordRecordDetail.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesDescribeRecordRecordDetail(__scope: Construct, __resources: string[], __input: ServiceCatalogDescribeRecordInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeRecordRecordDetail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeRecordRecordDetail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeRecordRecordDetail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeRecordInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeRecordInput)

---



#### Properties <a name="Properties"></a>

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeRecordRecordDetail.property.createdTime"></a>

- *Type:* `string`

---

##### `launchRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeRecordRecordDetail.property.launchRoleArn"></a>

- *Type:* `string`

---

##### `pathId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeRecordRecordDetail.property.pathId"></a>

- *Type:* `string`

---

##### `productId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeRecordRecordDetail.property.productId"></a>

- *Type:* `string`

---

##### `provisionedProductId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeRecordRecordDetail.property.provisionedProductId"></a>

- *Type:* `string`

---

##### `provisionedProductName`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeRecordRecordDetail.property.provisionedProductName"></a>

- *Type:* `string`

---

##### `provisionedProductType`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeRecordRecordDetail.property.provisionedProductType"></a>

- *Type:* `string`

---

##### `provisioningArtifactId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeRecordRecordDetail.property.provisioningArtifactId"></a>

- *Type:* `string`

---

##### `recordErrors`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeRecordRecordDetail.property.recordErrors"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogRecordError`](#aws-cdk-sdk.servicecatalog.ServiceCatalogRecordError)[]

---

##### `recordId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeRecordRecordDetail.property.recordId"></a>

- *Type:* `string`

---

##### `recordTags`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeRecordRecordDetail.property.recordTags"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogRecordTag`](#aws-cdk-sdk.servicecatalog.ServiceCatalogRecordTag)[]

---

##### `recordType`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeRecordRecordDetail.property.recordType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeRecordRecordDetail.property.status"></a>

- *Type:* `string`

---

##### `updatedTime`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeRecordRecordDetail.property.updatedTime"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesDescribeServiceAction <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeServiceAction"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeServiceAction.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesDescribeServiceAction(__scope: Construct, __resources: string[], __input: ServiceCatalogDescribeServiceActionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeServiceAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeServiceAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeServiceAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeServiceActionInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeServiceActionInput)

---



#### Properties <a name="Properties"></a>

##### `serviceActionDetail`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeServiceAction.property.serviceActionDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeServiceActionServiceActionDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeServiceActionServiceActionDetail)

---


### ServiceCatalogResponsesDescribeServiceActionExecutionParameters <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeServiceActionExecutionParameters"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeServiceActionExecutionParameters.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesDescribeServiceActionExecutionParameters(__scope: Construct, __resources: string[], __input: ServiceCatalogDescribeServiceActionExecutionParametersInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeServiceActionExecutionParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeServiceActionExecutionParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeServiceActionExecutionParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeServiceActionExecutionParametersInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeServiceActionExecutionParametersInput)

---



#### Properties <a name="Properties"></a>

##### `serviceActionParameters`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeServiceActionExecutionParameters.property.serviceActionParameters"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogExecutionParameter`](#aws-cdk-sdk.servicecatalog.ServiceCatalogExecutionParameter)[]

---


### ServiceCatalogResponsesDescribeServiceActionServiceActionDetail <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeServiceActionServiceActionDetail"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeServiceActionServiceActionDetail.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesDescribeServiceActionServiceActionDetail(__scope: Construct, __resources: string[], __input: ServiceCatalogDescribeServiceActionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeServiceActionServiceActionDetail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeServiceActionServiceActionDetail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeServiceActionServiceActionDetail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeServiceActionInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeServiceActionInput)

---



#### Properties <a name="Properties"></a>

##### `definition`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeServiceActionServiceActionDetail.property.definition"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `serviceActionSummary`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeServiceActionServiceActionDetail.property.serviceActionSummary"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeServiceActionServiceActionDetailServiceActionSummary`](#aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeServiceActionServiceActionDetailServiceActionSummary)

---


### ServiceCatalogResponsesDescribeServiceActionServiceActionDetailServiceActionSummary <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeServiceActionServiceActionDetailServiceActionSummary"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeServiceActionServiceActionDetailServiceActionSummary.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesDescribeServiceActionServiceActionDetailServiceActionSummary(__scope: Construct, __resources: string[], __input: ServiceCatalogDescribeServiceActionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeServiceActionServiceActionDetailServiceActionSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeServiceActionServiceActionDetailServiceActionSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeServiceActionServiceActionDetailServiceActionSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeServiceActionInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeServiceActionInput)

---



#### Properties <a name="Properties"></a>

##### `definitionType`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeServiceActionServiceActionDetailServiceActionSummary.property.definitionType"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeServiceActionServiceActionDetailServiceActionSummary.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeServiceActionServiceActionDetailServiceActionSummary.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeServiceActionServiceActionDetailServiceActionSummary.property.name"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesDescribeTagOption <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeTagOption"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeTagOption.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesDescribeTagOption(__scope: Construct, __resources: string[], __input: ServiceCatalogDescribeTagOptionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeTagOption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeTagOption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeTagOption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeTagOptionInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeTagOptionInput)

---



#### Properties <a name="Properties"></a>

##### `tagOptionDetail`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeTagOption.property.tagOptionDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeTagOptionTagOptionDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeTagOptionTagOptionDetail)

---


### ServiceCatalogResponsesDescribeTagOptionTagOptionDetail <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeTagOptionTagOptionDetail"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeTagOptionTagOptionDetail.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesDescribeTagOptionTagOptionDetail(__scope: Construct, __resources: string[], __input: ServiceCatalogDescribeTagOptionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeTagOptionTagOptionDetail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeTagOptionTagOptionDetail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeTagOptionTagOptionDetail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeTagOptionInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogDescribeTagOptionInput)

---



#### Properties <a name="Properties"></a>

##### `active`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeTagOptionTagOptionDetail.property.active"></a>

- *Type:* `boolean`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeTagOptionTagOptionDetail.property.id"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeTagOptionTagOptionDetail.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesDescribeTagOptionTagOptionDetail.property.value"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesExecuteProvisionedProductPlan <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductPlan"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductPlan.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductPlan(__scope: Construct, __resources: string[], __input: ServiceCatalogExecuteProvisionedProductPlanInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductPlan.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductPlan.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductPlan.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogExecuteProvisionedProductPlanInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogExecuteProvisionedProductPlanInput)

---



#### Properties <a name="Properties"></a>

##### `recordDetail`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductPlan.property.recordDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductPlanRecordDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductPlanRecordDetail)

---


### ServiceCatalogResponsesExecuteProvisionedProductPlanRecordDetail <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductPlanRecordDetail"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductPlanRecordDetail.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductPlanRecordDetail(__scope: Construct, __resources: string[], __input: ServiceCatalogExecuteProvisionedProductPlanInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductPlanRecordDetail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductPlanRecordDetail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductPlanRecordDetail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogExecuteProvisionedProductPlanInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogExecuteProvisionedProductPlanInput)

---



#### Properties <a name="Properties"></a>

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductPlanRecordDetail.property.createdTime"></a>

- *Type:* `string`

---

##### `launchRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductPlanRecordDetail.property.launchRoleArn"></a>

- *Type:* `string`

---

##### `pathId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductPlanRecordDetail.property.pathId"></a>

- *Type:* `string`

---

##### `productId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductPlanRecordDetail.property.productId"></a>

- *Type:* `string`

---

##### `provisionedProductId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductPlanRecordDetail.property.provisionedProductId"></a>

- *Type:* `string`

---

##### `provisionedProductName`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductPlanRecordDetail.property.provisionedProductName"></a>

- *Type:* `string`

---

##### `provisionedProductType`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductPlanRecordDetail.property.provisionedProductType"></a>

- *Type:* `string`

---

##### `provisioningArtifactId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductPlanRecordDetail.property.provisioningArtifactId"></a>

- *Type:* `string`

---

##### `recordErrors`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductPlanRecordDetail.property.recordErrors"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogRecordError`](#aws-cdk-sdk.servicecatalog.ServiceCatalogRecordError)[]

---

##### `recordId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductPlanRecordDetail.property.recordId"></a>

- *Type:* `string`

---

##### `recordTags`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductPlanRecordDetail.property.recordTags"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogRecordTag`](#aws-cdk-sdk.servicecatalog.ServiceCatalogRecordTag)[]

---

##### `recordType`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductPlanRecordDetail.property.recordType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductPlanRecordDetail.property.status"></a>

- *Type:* `string`

---

##### `updatedTime`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductPlanRecordDetail.property.updatedTime"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesExecuteProvisionedProductServiceAction <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductServiceAction"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductServiceAction.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductServiceAction(__scope: Construct, __resources: string[], __input: ServiceCatalogExecuteProvisionedProductServiceActionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductServiceAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductServiceAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductServiceAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogExecuteProvisionedProductServiceActionInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogExecuteProvisionedProductServiceActionInput)

---



#### Properties <a name="Properties"></a>

##### `recordDetail`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductServiceAction.property.recordDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductServiceActionRecordDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductServiceActionRecordDetail)

---


### ServiceCatalogResponsesExecuteProvisionedProductServiceActionRecordDetail <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductServiceActionRecordDetail"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductServiceActionRecordDetail.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductServiceActionRecordDetail(__scope: Construct, __resources: string[], __input: ServiceCatalogExecuteProvisionedProductServiceActionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductServiceActionRecordDetail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductServiceActionRecordDetail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductServiceActionRecordDetail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogExecuteProvisionedProductServiceActionInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogExecuteProvisionedProductServiceActionInput)

---



#### Properties <a name="Properties"></a>

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductServiceActionRecordDetail.property.createdTime"></a>

- *Type:* `string`

---

##### `launchRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductServiceActionRecordDetail.property.launchRoleArn"></a>

- *Type:* `string`

---

##### `pathId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductServiceActionRecordDetail.property.pathId"></a>

- *Type:* `string`

---

##### `productId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductServiceActionRecordDetail.property.productId"></a>

- *Type:* `string`

---

##### `provisionedProductId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductServiceActionRecordDetail.property.provisionedProductId"></a>

- *Type:* `string`

---

##### `provisionedProductName`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductServiceActionRecordDetail.property.provisionedProductName"></a>

- *Type:* `string`

---

##### `provisionedProductType`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductServiceActionRecordDetail.property.provisionedProductType"></a>

- *Type:* `string`

---

##### `provisioningArtifactId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductServiceActionRecordDetail.property.provisioningArtifactId"></a>

- *Type:* `string`

---

##### `recordErrors`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductServiceActionRecordDetail.property.recordErrors"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogRecordError`](#aws-cdk-sdk.servicecatalog.ServiceCatalogRecordError)[]

---

##### `recordId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductServiceActionRecordDetail.property.recordId"></a>

- *Type:* `string`

---

##### `recordTags`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductServiceActionRecordDetail.property.recordTags"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogRecordTag`](#aws-cdk-sdk.servicecatalog.ServiceCatalogRecordTag)[]

---

##### `recordType`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductServiceActionRecordDetail.property.recordType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductServiceActionRecordDetail.property.status"></a>

- *Type:* `string`

---

##### `updatedTime`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesExecuteProvisionedProductServiceActionRecordDetail.property.updatedTime"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesFetchAwsOrganizationsAccessStatus <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesFetchAwsOrganizationsAccessStatus"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesFetchAwsOrganizationsAccessStatus.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesFetchAwsOrganizationsAccessStatus(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesFetchAwsOrganizationsAccessStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesFetchAwsOrganizationsAccessStatus.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `accessStatus`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesFetchAwsOrganizationsAccessStatus.property.accessStatus"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesFetchProvisionedProductOutputs <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesFetchProvisionedProductOutputs"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesFetchProvisionedProductOutputs.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesFetchProvisionedProductOutputs(__scope: Construct, __resources: string[], __input: ServiceCatalogGetProvisionedProductOutputsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesFetchProvisionedProductOutputs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesFetchProvisionedProductOutputs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesFetchProvisionedProductOutputs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogGetProvisionedProductOutputsInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogGetProvisionedProductOutputsInput)

---



#### Properties <a name="Properties"></a>

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesFetchProvisionedProductOutputs.property.nextPageToken"></a>

- *Type:* `string`

---

##### `outputs`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesFetchProvisionedProductOutputs.property.outputs"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogRecordOutput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogRecordOutput)[]

---


### ServiceCatalogResponsesImportAsProvisionedProduct <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesImportAsProvisionedProduct"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesImportAsProvisionedProduct.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesImportAsProvisionedProduct(__scope: Construct, __resources: string[], __input: ServiceCatalogImportAsProvisionedProductInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesImportAsProvisionedProduct.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesImportAsProvisionedProduct.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesImportAsProvisionedProduct.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogImportAsProvisionedProductInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogImportAsProvisionedProductInput)

---



#### Properties <a name="Properties"></a>

##### `recordDetail`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesImportAsProvisionedProduct.property.recordDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesImportAsProvisionedProductRecordDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesImportAsProvisionedProductRecordDetail)

---


### ServiceCatalogResponsesImportAsProvisionedProductRecordDetail <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesImportAsProvisionedProductRecordDetail"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesImportAsProvisionedProductRecordDetail.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesImportAsProvisionedProductRecordDetail(__scope: Construct, __resources: string[], __input: ServiceCatalogImportAsProvisionedProductInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesImportAsProvisionedProductRecordDetail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesImportAsProvisionedProductRecordDetail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesImportAsProvisionedProductRecordDetail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogImportAsProvisionedProductInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogImportAsProvisionedProductInput)

---



#### Properties <a name="Properties"></a>

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesImportAsProvisionedProductRecordDetail.property.createdTime"></a>

- *Type:* `string`

---

##### `launchRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesImportAsProvisionedProductRecordDetail.property.launchRoleArn"></a>

- *Type:* `string`

---

##### `pathId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesImportAsProvisionedProductRecordDetail.property.pathId"></a>

- *Type:* `string`

---

##### `productId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesImportAsProvisionedProductRecordDetail.property.productId"></a>

- *Type:* `string`

---

##### `provisionedProductId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesImportAsProvisionedProductRecordDetail.property.provisionedProductId"></a>

- *Type:* `string`

---

##### `provisionedProductName`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesImportAsProvisionedProductRecordDetail.property.provisionedProductName"></a>

- *Type:* `string`

---

##### `provisionedProductType`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesImportAsProvisionedProductRecordDetail.property.provisionedProductType"></a>

- *Type:* `string`

---

##### `provisioningArtifactId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesImportAsProvisionedProductRecordDetail.property.provisioningArtifactId"></a>

- *Type:* `string`

---

##### `recordErrors`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesImportAsProvisionedProductRecordDetail.property.recordErrors"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogRecordError`](#aws-cdk-sdk.servicecatalog.ServiceCatalogRecordError)[]

---

##### `recordId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesImportAsProvisionedProductRecordDetail.property.recordId"></a>

- *Type:* `string`

---

##### `recordTags`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesImportAsProvisionedProductRecordDetail.property.recordTags"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogRecordTag`](#aws-cdk-sdk.servicecatalog.ServiceCatalogRecordTag)[]

---

##### `recordType`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesImportAsProvisionedProductRecordDetail.property.recordType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesImportAsProvisionedProductRecordDetail.property.status"></a>

- *Type:* `string`

---

##### `updatedTime`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesImportAsProvisionedProductRecordDetail.property.updatedTime"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesListAcceptedPortfolioShares <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListAcceptedPortfolioShares"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListAcceptedPortfolioShares.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesListAcceptedPortfolioShares(__scope: Construct, __resources: string[], __input: ServiceCatalogListAcceptedPortfolioSharesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListAcceptedPortfolioShares.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListAcceptedPortfolioShares.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListAcceptedPortfolioShares.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogListAcceptedPortfolioSharesInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogListAcceptedPortfolioSharesInput)

---



#### Properties <a name="Properties"></a>

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListAcceptedPortfolioShares.property.nextPageToken"></a>

- *Type:* `string`

---

##### `portfolioDetails`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListAcceptedPortfolioShares.property.portfolioDetails"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogPortfolioDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogPortfolioDetail)[]

---


### ServiceCatalogResponsesListBudgetsForResource <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListBudgetsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListBudgetsForResource.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesListBudgetsForResource(__scope: Construct, __resources: string[], __input: ServiceCatalogListBudgetsForResourceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListBudgetsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListBudgetsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListBudgetsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogListBudgetsForResourceInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogListBudgetsForResourceInput)

---



#### Properties <a name="Properties"></a>

##### `budgets`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListBudgetsForResource.property.budgets"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogBudgetDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogBudgetDetail)[]

---

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListBudgetsForResource.property.nextPageToken"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesListConstraintsForPortfolio <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListConstraintsForPortfolio"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListConstraintsForPortfolio.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesListConstraintsForPortfolio(__scope: Construct, __resources: string[], __input: ServiceCatalogListConstraintsForPortfolioInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListConstraintsForPortfolio.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListConstraintsForPortfolio.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListConstraintsForPortfolio.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogListConstraintsForPortfolioInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogListConstraintsForPortfolioInput)

---



#### Properties <a name="Properties"></a>

##### `constraintDetails`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListConstraintsForPortfolio.property.constraintDetails"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogConstraintDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogConstraintDetail)[]

---

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListConstraintsForPortfolio.property.nextPageToken"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesListLaunchPaths <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListLaunchPaths"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListLaunchPaths.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesListLaunchPaths(__scope: Construct, __resources: string[], __input: ServiceCatalogListLaunchPathsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListLaunchPaths.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListLaunchPaths.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListLaunchPaths.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogListLaunchPathsInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogListLaunchPathsInput)

---



#### Properties <a name="Properties"></a>

##### `launchPathSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListLaunchPaths.property.launchPathSummaries"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogLaunchPathSummary`](#aws-cdk-sdk.servicecatalog.ServiceCatalogLaunchPathSummary)[]

---

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListLaunchPaths.property.nextPageToken"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesListOrganizationPortfolioAccess <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListOrganizationPortfolioAccess"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListOrganizationPortfolioAccess.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesListOrganizationPortfolioAccess(__scope: Construct, __resources: string[], __input: ServiceCatalogListOrganizationPortfolioAccessInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListOrganizationPortfolioAccess.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListOrganizationPortfolioAccess.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListOrganizationPortfolioAccess.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogListOrganizationPortfolioAccessInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogListOrganizationPortfolioAccessInput)

---



#### Properties <a name="Properties"></a>

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListOrganizationPortfolioAccess.property.nextPageToken"></a>

- *Type:* `string`

---

##### `organizationNodes`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListOrganizationPortfolioAccess.property.organizationNodes"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogOrganizationNode`](#aws-cdk-sdk.servicecatalog.ServiceCatalogOrganizationNode)[]

---


### ServiceCatalogResponsesListPortfolioAccess <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListPortfolioAccess"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListPortfolioAccess.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesListPortfolioAccess(__scope: Construct, __resources: string[], __input: ServiceCatalogListPortfolioAccessInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListPortfolioAccess.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListPortfolioAccess.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListPortfolioAccess.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogListPortfolioAccessInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogListPortfolioAccessInput)

---



#### Properties <a name="Properties"></a>

##### `accountIds`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListPortfolioAccess.property.accountIds"></a>

- *Type:* `string`[]

---

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListPortfolioAccess.property.nextPageToken"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesListPortfolios <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListPortfolios"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListPortfolios.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesListPortfolios(__scope: Construct, __resources: string[], __input: ServiceCatalogListPortfoliosInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListPortfolios.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListPortfolios.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListPortfolios.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogListPortfoliosInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogListPortfoliosInput)

---



#### Properties <a name="Properties"></a>

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListPortfolios.property.nextPageToken"></a>

- *Type:* `string`

---

##### `portfolioDetails`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListPortfolios.property.portfolioDetails"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogPortfolioDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogPortfolioDetail)[]

---


### ServiceCatalogResponsesListPortfoliosForProduct <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListPortfoliosForProduct"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListPortfoliosForProduct.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesListPortfoliosForProduct(__scope: Construct, __resources: string[], __input: ServiceCatalogListPortfoliosForProductInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListPortfoliosForProduct.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListPortfoliosForProduct.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListPortfoliosForProduct.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogListPortfoliosForProductInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogListPortfoliosForProductInput)

---



#### Properties <a name="Properties"></a>

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListPortfoliosForProduct.property.nextPageToken"></a>

- *Type:* `string`

---

##### `portfolioDetails`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListPortfoliosForProduct.property.portfolioDetails"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogPortfolioDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogPortfolioDetail)[]

---


### ServiceCatalogResponsesListPrincipalsForPortfolio <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListPrincipalsForPortfolio"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListPrincipalsForPortfolio.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesListPrincipalsForPortfolio(__scope: Construct, __resources: string[], __input: ServiceCatalogListPrincipalsForPortfolioInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListPrincipalsForPortfolio.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListPrincipalsForPortfolio.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListPrincipalsForPortfolio.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogListPrincipalsForPortfolioInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogListPrincipalsForPortfolioInput)

---



#### Properties <a name="Properties"></a>

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListPrincipalsForPortfolio.property.nextPageToken"></a>

- *Type:* `string`

---

##### `principals`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListPrincipalsForPortfolio.property.principals"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogPrincipal`](#aws-cdk-sdk.servicecatalog.ServiceCatalogPrincipal)[]

---


### ServiceCatalogResponsesListProvisionedProductPlans <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListProvisionedProductPlans"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListProvisionedProductPlans.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesListProvisionedProductPlans(__scope: Construct, __resources: string[], __input: ServiceCatalogListProvisionedProductPlansInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListProvisionedProductPlans.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListProvisionedProductPlans.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListProvisionedProductPlans.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogListProvisionedProductPlansInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogListProvisionedProductPlansInput)

---



#### Properties <a name="Properties"></a>

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListProvisionedProductPlans.property.nextPageToken"></a>

- *Type:* `string`

---

##### `provisionedProductPlans`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListProvisionedProductPlans.property.provisionedProductPlans"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductPlanSummary`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductPlanSummary)[]

---


### ServiceCatalogResponsesListProvisioningArtifacts <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListProvisioningArtifacts"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListProvisioningArtifacts.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesListProvisioningArtifacts(__scope: Construct, __resources: string[], __input: ServiceCatalogListProvisioningArtifactsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListProvisioningArtifacts.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListProvisioningArtifacts.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListProvisioningArtifacts.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogListProvisioningArtifactsInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogListProvisioningArtifactsInput)

---



#### Properties <a name="Properties"></a>

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListProvisioningArtifacts.property.nextPageToken"></a>

- *Type:* `string`

---

##### `provisioningArtifactDetails`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListProvisioningArtifacts.property.provisioningArtifactDetails"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactDetail)[]

---


### ServiceCatalogResponsesListProvisioningArtifactsForServiceAction <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListProvisioningArtifactsForServiceAction"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListProvisioningArtifactsForServiceAction.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesListProvisioningArtifactsForServiceAction(__scope: Construct, __resources: string[], __input: ServiceCatalogListProvisioningArtifactsForServiceActionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListProvisioningArtifactsForServiceAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListProvisioningArtifactsForServiceAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListProvisioningArtifactsForServiceAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogListProvisioningArtifactsForServiceActionInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogListProvisioningArtifactsForServiceActionInput)

---



#### Properties <a name="Properties"></a>

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListProvisioningArtifactsForServiceAction.property.nextPageToken"></a>

- *Type:* `string`

---

##### `provisioningArtifactViews`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListProvisioningArtifactsForServiceAction.property.provisioningArtifactViews"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactView`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProvisioningArtifactView)[]

---


### ServiceCatalogResponsesListRecordHistory <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListRecordHistory"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListRecordHistory.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesListRecordHistory(__scope: Construct, __resources: string[], __input: ServiceCatalogListRecordHistoryInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListRecordHistory.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListRecordHistory.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListRecordHistory.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogListRecordHistoryInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogListRecordHistoryInput)

---



#### Properties <a name="Properties"></a>

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListRecordHistory.property.nextPageToken"></a>

- *Type:* `string`

---

##### `recordDetails`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListRecordHistory.property.recordDetails"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogRecordDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogRecordDetail)[]

---


### ServiceCatalogResponsesListResourcesForTagOption <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListResourcesForTagOption"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListResourcesForTagOption.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesListResourcesForTagOption(__scope: Construct, __resources: string[], __input: ServiceCatalogListResourcesForTagOptionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListResourcesForTagOption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListResourcesForTagOption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListResourcesForTagOption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogListResourcesForTagOptionInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogListResourcesForTagOptionInput)

---



#### Properties <a name="Properties"></a>

##### `pageToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListResourcesForTagOption.property.pageToken"></a>

- *Type:* `string`

---

##### `resourceDetails`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListResourcesForTagOption.property.resourceDetails"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogResourceDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogResourceDetail)[]

---


### ServiceCatalogResponsesListServiceActions <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListServiceActions"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListServiceActions.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesListServiceActions(__scope: Construct, __resources: string[], __input: ServiceCatalogListServiceActionsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListServiceActions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListServiceActions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListServiceActions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogListServiceActionsInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogListServiceActionsInput)

---



#### Properties <a name="Properties"></a>

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListServiceActions.property.nextPageToken"></a>

- *Type:* `string`

---

##### `serviceActionSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListServiceActions.property.serviceActionSummaries"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogServiceActionSummary`](#aws-cdk-sdk.servicecatalog.ServiceCatalogServiceActionSummary)[]

---


### ServiceCatalogResponsesListServiceActionsForProvisioningArtifact <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListServiceActionsForProvisioningArtifact"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListServiceActionsForProvisioningArtifact.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesListServiceActionsForProvisioningArtifact(__scope: Construct, __resources: string[], __input: ServiceCatalogListServiceActionsForProvisioningArtifactInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListServiceActionsForProvisioningArtifact.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListServiceActionsForProvisioningArtifact.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListServiceActionsForProvisioningArtifact.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogListServiceActionsForProvisioningArtifactInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogListServiceActionsForProvisioningArtifactInput)

---



#### Properties <a name="Properties"></a>

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListServiceActionsForProvisioningArtifact.property.nextPageToken"></a>

- *Type:* `string`

---

##### `serviceActionSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListServiceActionsForProvisioningArtifact.property.serviceActionSummaries"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogServiceActionSummary`](#aws-cdk-sdk.servicecatalog.ServiceCatalogServiceActionSummary)[]

---


### ServiceCatalogResponsesListStackInstancesForProvisionedProduct <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListStackInstancesForProvisionedProduct"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListStackInstancesForProvisionedProduct.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesListStackInstancesForProvisionedProduct(__scope: Construct, __resources: string[], __input: ServiceCatalogListStackInstancesForProvisionedProductInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListStackInstancesForProvisionedProduct.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListStackInstancesForProvisionedProduct.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListStackInstancesForProvisionedProduct.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogListStackInstancesForProvisionedProductInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogListStackInstancesForProvisionedProductInput)

---



#### Properties <a name="Properties"></a>

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListStackInstancesForProvisionedProduct.property.nextPageToken"></a>

- *Type:* `string`

---

##### `stackInstances`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListStackInstancesForProvisionedProduct.property.stackInstances"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogStackInstance`](#aws-cdk-sdk.servicecatalog.ServiceCatalogStackInstance)[]

---


### ServiceCatalogResponsesListTagOptions <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListTagOptions"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListTagOptions.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesListTagOptions(__scope: Construct, __resources: string[], __input: ServiceCatalogListTagOptionsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListTagOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListTagOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListTagOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogListTagOptionsInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogListTagOptionsInput)

---



#### Properties <a name="Properties"></a>

##### `pageToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListTagOptions.property.pageToken"></a>

- *Type:* `string`

---

##### `tagOptionDetails`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesListTagOptions.property.tagOptionDetails"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogTagOptionDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogTagOptionDetail)[]

---


### ServiceCatalogResponsesProvisionProduct <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesProvisionProduct"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesProvisionProduct.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesProvisionProduct(__scope: Construct, __resources: string[], __input: ServiceCatalogProvisionProductInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesProvisionProduct.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesProvisionProduct.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesProvisionProduct.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionProductInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionProductInput)

---



#### Properties <a name="Properties"></a>

##### `recordDetail`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesProvisionProduct.property.recordDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesProvisionProductRecordDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesProvisionProductRecordDetail)

---


### ServiceCatalogResponsesProvisionProductRecordDetail <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesProvisionProductRecordDetail"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesProvisionProductRecordDetail.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesProvisionProductRecordDetail(__scope: Construct, __resources: string[], __input: ServiceCatalogProvisionProductInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesProvisionProductRecordDetail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesProvisionProductRecordDetail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesProvisionProductRecordDetail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionProductInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionProductInput)

---



#### Properties <a name="Properties"></a>

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesProvisionProductRecordDetail.property.createdTime"></a>

- *Type:* `string`

---

##### `launchRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesProvisionProductRecordDetail.property.launchRoleArn"></a>

- *Type:* `string`

---

##### `pathId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesProvisionProductRecordDetail.property.pathId"></a>

- *Type:* `string`

---

##### `productId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesProvisionProductRecordDetail.property.productId"></a>

- *Type:* `string`

---

##### `provisionedProductId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesProvisionProductRecordDetail.property.provisionedProductId"></a>

- *Type:* `string`

---

##### `provisionedProductName`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesProvisionProductRecordDetail.property.provisionedProductName"></a>

- *Type:* `string`

---

##### `provisionedProductType`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesProvisionProductRecordDetail.property.provisionedProductType"></a>

- *Type:* `string`

---

##### `provisioningArtifactId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesProvisionProductRecordDetail.property.provisioningArtifactId"></a>

- *Type:* `string`

---

##### `recordErrors`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesProvisionProductRecordDetail.property.recordErrors"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogRecordError`](#aws-cdk-sdk.servicecatalog.ServiceCatalogRecordError)[]

---

##### `recordId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesProvisionProductRecordDetail.property.recordId"></a>

- *Type:* `string`

---

##### `recordTags`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesProvisionProductRecordDetail.property.recordTags"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogRecordTag`](#aws-cdk-sdk.servicecatalog.ServiceCatalogRecordTag)[]

---

##### `recordType`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesProvisionProductRecordDetail.property.recordType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesProvisionProductRecordDetail.property.status"></a>

- *Type:* `string`

---

##### `updatedTime`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesProvisionProductRecordDetail.property.updatedTime"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesScanProvisionedProducts <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesScanProvisionedProducts"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesScanProvisionedProducts.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesScanProvisionedProducts(__scope: Construct, __resources: string[], __input: ServiceCatalogScanProvisionedProductsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesScanProvisionedProducts.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesScanProvisionedProducts.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesScanProvisionedProducts.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogScanProvisionedProductsInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogScanProvisionedProductsInput)

---



#### Properties <a name="Properties"></a>

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesScanProvisionedProducts.property.nextPageToken"></a>

- *Type:* `string`

---

##### `provisionedProducts`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesScanProvisionedProducts.property.provisionedProducts"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductDetail)[]

---


### ServiceCatalogResponsesSearchProducts <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesSearchProducts"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesSearchProducts.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesSearchProducts(__scope: Construct, __resources: string[], __input: ServiceCatalogSearchProductsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesSearchProducts.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesSearchProducts.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesSearchProducts.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProductsInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProductsInput)

---



#### Properties <a name="Properties"></a>

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesSearchProducts.property.nextPageToken"></a>

- *Type:* `string`

---

##### `productViewAggregations`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesSearchProducts.property.productViewAggregations"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.servicecatalog.ServiceCatalogProductViewAggregationValue`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProductViewAggregationValue)[]}

---

##### `productViewSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesSearchProducts.property.productViewSummaries"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogProductViewSummary`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProductViewSummary)[]

---


### ServiceCatalogResponsesSearchProductsAsAdmin <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesSearchProductsAsAdmin"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesSearchProductsAsAdmin.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesSearchProductsAsAdmin(__scope: Construct, __resources: string[], __input: ServiceCatalogSearchProductsAsAdminInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesSearchProductsAsAdmin.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesSearchProductsAsAdmin.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesSearchProductsAsAdmin.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProductsAsAdminInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProductsAsAdminInput)

---



#### Properties <a name="Properties"></a>

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesSearchProductsAsAdmin.property.nextPageToken"></a>

- *Type:* `string`

---

##### `productViewDetails`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesSearchProductsAsAdmin.property.productViewDetails"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogProductViewDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProductViewDetail)[]

---


### ServiceCatalogResponsesSearchProvisionedProducts <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesSearchProvisionedProducts"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesSearchProvisionedProducts.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesSearchProvisionedProducts(__scope: Construct, __resources: string[], __input: ServiceCatalogSearchProvisionedProductsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesSearchProvisionedProducts.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesSearchProvisionedProducts.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesSearchProvisionedProducts.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProvisionedProductsInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogSearchProvisionedProductsInput)

---



#### Properties <a name="Properties"></a>

##### `nextPageToken`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesSearchProvisionedProducts.property.nextPageToken"></a>

- *Type:* `string`

---

##### `provisionedProducts`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesSearchProvisionedProducts.property.provisionedProducts"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductAttribute`](#aws-cdk-sdk.servicecatalog.ServiceCatalogProvisionedProductAttribute)[]

---

##### `totalResultsCount`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesSearchProvisionedProducts.property.totalResultsCount"></a>

- *Type:* `number`

---


### ServiceCatalogResponsesTerminateProvisionedProduct <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesTerminateProvisionedProduct"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesTerminateProvisionedProduct.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesTerminateProvisionedProduct(__scope: Construct, __resources: string[], __input: ServiceCatalogTerminateProvisionedProductInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesTerminateProvisionedProduct.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesTerminateProvisionedProduct.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesTerminateProvisionedProduct.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogTerminateProvisionedProductInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogTerminateProvisionedProductInput)

---



#### Properties <a name="Properties"></a>

##### `recordDetail`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesTerminateProvisionedProduct.property.recordDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesTerminateProvisionedProductRecordDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesTerminateProvisionedProductRecordDetail)

---


### ServiceCatalogResponsesTerminateProvisionedProductRecordDetail <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesTerminateProvisionedProductRecordDetail"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesTerminateProvisionedProductRecordDetail.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesTerminateProvisionedProductRecordDetail(__scope: Construct, __resources: string[], __input: ServiceCatalogTerminateProvisionedProductInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesTerminateProvisionedProductRecordDetail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesTerminateProvisionedProductRecordDetail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesTerminateProvisionedProductRecordDetail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogTerminateProvisionedProductInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogTerminateProvisionedProductInput)

---



#### Properties <a name="Properties"></a>

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesTerminateProvisionedProductRecordDetail.property.createdTime"></a>

- *Type:* `string`

---

##### `launchRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesTerminateProvisionedProductRecordDetail.property.launchRoleArn"></a>

- *Type:* `string`

---

##### `pathId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesTerminateProvisionedProductRecordDetail.property.pathId"></a>

- *Type:* `string`

---

##### `productId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesTerminateProvisionedProductRecordDetail.property.productId"></a>

- *Type:* `string`

---

##### `provisionedProductId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesTerminateProvisionedProductRecordDetail.property.provisionedProductId"></a>

- *Type:* `string`

---

##### `provisionedProductName`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesTerminateProvisionedProductRecordDetail.property.provisionedProductName"></a>

- *Type:* `string`

---

##### `provisionedProductType`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesTerminateProvisionedProductRecordDetail.property.provisionedProductType"></a>

- *Type:* `string`

---

##### `provisioningArtifactId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesTerminateProvisionedProductRecordDetail.property.provisioningArtifactId"></a>

- *Type:* `string`

---

##### `recordErrors`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesTerminateProvisionedProductRecordDetail.property.recordErrors"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogRecordError`](#aws-cdk-sdk.servicecatalog.ServiceCatalogRecordError)[]

---

##### `recordId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesTerminateProvisionedProductRecordDetail.property.recordId"></a>

- *Type:* `string`

---

##### `recordTags`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesTerminateProvisionedProductRecordDetail.property.recordTags"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogRecordTag`](#aws-cdk-sdk.servicecatalog.ServiceCatalogRecordTag)[]

---

##### `recordType`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesTerminateProvisionedProductRecordDetail.property.recordType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesTerminateProvisionedProductRecordDetail.property.status"></a>

- *Type:* `string`

---

##### `updatedTime`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesTerminateProvisionedProductRecordDetail.property.updatedTime"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesUpdateConstraint <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateConstraint"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateConstraint.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesUpdateConstraint(__scope: Construct, __resources: string[], __input: ServiceCatalogUpdateConstraintInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateConstraint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateConstraint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateConstraint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateConstraintInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateConstraintInput)

---



#### Properties <a name="Properties"></a>

##### `constraintDetail`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateConstraint.property.constraintDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateConstraintConstraintDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateConstraintConstraintDetail)

---

##### `constraintParameters`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateConstraint.property.constraintParameters"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateConstraint.property.status"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesUpdateConstraintConstraintDetail <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateConstraintConstraintDetail"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateConstraintConstraintDetail.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesUpdateConstraintConstraintDetail(__scope: Construct, __resources: string[], __input: ServiceCatalogUpdateConstraintInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateConstraintConstraintDetail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateConstraintConstraintDetail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateConstraintConstraintDetail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateConstraintInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateConstraintInput)

---



#### Properties <a name="Properties"></a>

##### `constraintId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateConstraintConstraintDetail.property.constraintId"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateConstraintConstraintDetail.property.description"></a>

- *Type:* `string`

---

##### `owner`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateConstraintConstraintDetail.property.owner"></a>

- *Type:* `string`

---

##### `portfolioId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateConstraintConstraintDetail.property.portfolioId"></a>

- *Type:* `string`

---

##### `productId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateConstraintConstraintDetail.property.productId"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateConstraintConstraintDetail.property.type"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesUpdatePortfolio <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdatePortfolio"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdatePortfolio.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesUpdatePortfolio(__scope: Construct, __resources: string[], __input: ServiceCatalogUpdatePortfolioInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdatePortfolio.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdatePortfolio.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdatePortfolio.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogUpdatePortfolioInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogUpdatePortfolioInput)

---



#### Properties <a name="Properties"></a>

##### `portfolioDetail`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdatePortfolio.property.portfolioDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdatePortfolioPortfolioDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdatePortfolioPortfolioDetail)

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdatePortfolio.property.tags"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogTag`](#aws-cdk-sdk.servicecatalog.ServiceCatalogTag)[]

---


### ServiceCatalogResponsesUpdatePortfolioPortfolioDetail <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdatePortfolioPortfolioDetail"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdatePortfolioPortfolioDetail.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesUpdatePortfolioPortfolioDetail(__scope: Construct, __resources: string[], __input: ServiceCatalogUpdatePortfolioInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdatePortfolioPortfolioDetail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdatePortfolioPortfolioDetail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdatePortfolioPortfolioDetail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogUpdatePortfolioInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogUpdatePortfolioInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdatePortfolioPortfolioDetail.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdatePortfolioPortfolioDetail.property.createdTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdatePortfolioPortfolioDetail.property.description"></a>

- *Type:* `string`

---

##### `displayName`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdatePortfolioPortfolioDetail.property.displayName"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdatePortfolioPortfolioDetail.property.id"></a>

- *Type:* `string`

---

##### `providerName`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdatePortfolioPortfolioDetail.property.providerName"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesUpdateProduct <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProduct"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProduct.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesUpdateProduct(__scope: Construct, __resources: string[], __input: ServiceCatalogUpdateProductInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProduct.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProduct.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProduct.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProductInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProductInput)

---



#### Properties <a name="Properties"></a>

##### `productViewDetail`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProduct.property.productViewDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProductProductViewDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProductProductViewDetail)

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProduct.property.tags"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogTag`](#aws-cdk-sdk.servicecatalog.ServiceCatalogTag)[]

---


### ServiceCatalogResponsesUpdateProductProductViewDetail <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProductProductViewDetail"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProductProductViewDetail.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesUpdateProductProductViewDetail(__scope: Construct, __resources: string[], __input: ServiceCatalogUpdateProductInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProductProductViewDetail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProductProductViewDetail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProductProductViewDetail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProductInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProductInput)

---



#### Properties <a name="Properties"></a>

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProductProductViewDetail.property.createdTime"></a>

- *Type:* `string`

---

##### `productArn`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProductProductViewDetail.property.productArn"></a>

- *Type:* `string`

---

##### `productViewSummary`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProductProductViewDetail.property.productViewSummary"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProductProductViewDetailProductViewSummary`](#aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProductProductViewDetailProductViewSummary)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProductProductViewDetail.property.status"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesUpdateProductProductViewDetailProductViewSummary <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProductProductViewDetailProductViewSummary"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProductProductViewDetailProductViewSummary.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesUpdateProductProductViewDetailProductViewSummary(__scope: Construct, __resources: string[], __input: ServiceCatalogUpdateProductInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProductProductViewDetailProductViewSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProductProductViewDetailProductViewSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProductProductViewDetailProductViewSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProductInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProductInput)

---



#### Properties <a name="Properties"></a>

##### `distributor`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProductProductViewDetailProductViewSummary.property.distributor"></a>

- *Type:* `string`

---

##### `hasDefaultPath`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProductProductViewDetailProductViewSummary.property.hasDefaultPath"></a>

- *Type:* `boolean`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProductProductViewDetailProductViewSummary.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProductProductViewDetailProductViewSummary.property.name"></a>

- *Type:* `string`

---

##### `owner`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProductProductViewDetailProductViewSummary.property.owner"></a>

- *Type:* `string`

---

##### `productId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProductProductViewDetailProductViewSummary.property.productId"></a>

- *Type:* `string`

---

##### `shortDescription`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProductProductViewDetailProductViewSummary.property.shortDescription"></a>

- *Type:* `string`

---

##### `supportDescription`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProductProductViewDetailProductViewSummary.property.supportDescription"></a>

- *Type:* `string`

---

##### `supportEmail`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProductProductViewDetailProductViewSummary.property.supportEmail"></a>

- *Type:* `string`

---

##### `supportUrl`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProductProductViewDetailProductViewSummary.property.supportUrl"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProductProductViewDetailProductViewSummary.property.type"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesUpdateProvisionedProduct <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisionedProduct"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisionedProduct.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesUpdateProvisionedProduct(__scope: Construct, __resources: string[], __input: ServiceCatalogUpdateProvisionedProductInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisionedProduct.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisionedProduct.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisionedProduct.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisionedProductInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisionedProductInput)

---



#### Properties <a name="Properties"></a>

##### `recordDetail`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisionedProduct.property.recordDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisionedProductRecordDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisionedProductRecordDetail)

---


### ServiceCatalogResponsesUpdateProvisionedProductProperties <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisionedProductProperties"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisionedProductProperties.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesUpdateProvisionedProductProperties(__scope: Construct, __resources: string[], __input: ServiceCatalogUpdateProvisionedProductPropertiesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisionedProductProperties.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisionedProductProperties.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisionedProductProperties.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisionedProductPropertiesInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisionedProductPropertiesInput)

---



#### Properties <a name="Properties"></a>

##### `provisionedProductId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisionedProductProperties.property.provisionedProductId"></a>

- *Type:* `string`

---

##### `provisionedProductProperties`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisionedProductProperties.property.provisionedProductProperties"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `recordId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisionedProductProperties.property.recordId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisionedProductProperties.property.status"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesUpdateProvisionedProductRecordDetail <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisionedProductRecordDetail"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisionedProductRecordDetail.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesUpdateProvisionedProductRecordDetail(__scope: Construct, __resources: string[], __input: ServiceCatalogUpdateProvisionedProductInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisionedProductRecordDetail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisionedProductRecordDetail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisionedProductRecordDetail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisionedProductInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisionedProductInput)

---



#### Properties <a name="Properties"></a>

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisionedProductRecordDetail.property.createdTime"></a>

- *Type:* `string`

---

##### `launchRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisionedProductRecordDetail.property.launchRoleArn"></a>

- *Type:* `string`

---

##### `pathId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisionedProductRecordDetail.property.pathId"></a>

- *Type:* `string`

---

##### `productId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisionedProductRecordDetail.property.productId"></a>

- *Type:* `string`

---

##### `provisionedProductId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisionedProductRecordDetail.property.provisionedProductId"></a>

- *Type:* `string`

---

##### `provisionedProductName`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisionedProductRecordDetail.property.provisionedProductName"></a>

- *Type:* `string`

---

##### `provisionedProductType`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisionedProductRecordDetail.property.provisionedProductType"></a>

- *Type:* `string`

---

##### `provisioningArtifactId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisionedProductRecordDetail.property.provisioningArtifactId"></a>

- *Type:* `string`

---

##### `recordErrors`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisionedProductRecordDetail.property.recordErrors"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogRecordError`](#aws-cdk-sdk.servicecatalog.ServiceCatalogRecordError)[]

---

##### `recordId`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisionedProductRecordDetail.property.recordId"></a>

- *Type:* `string`

---

##### `recordTags`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisionedProductRecordDetail.property.recordTags"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogRecordTag`](#aws-cdk-sdk.servicecatalog.ServiceCatalogRecordTag)[]

---

##### `recordType`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisionedProductRecordDetail.property.recordType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisionedProductRecordDetail.property.status"></a>

- *Type:* `string`

---

##### `updatedTime`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisionedProductRecordDetail.property.updatedTime"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesUpdateProvisioningArtifact <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisioningArtifact"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisioningArtifact.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesUpdateProvisioningArtifact(__scope: Construct, __resources: string[], __input: ServiceCatalogUpdateProvisioningArtifactInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisioningArtifact.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisioningArtifact.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisioningArtifact.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisioningArtifactInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisioningArtifactInput)

---



#### Properties <a name="Properties"></a>

##### `info`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisioningArtifact.property.info"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `provisioningArtifactDetail`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisioningArtifact.property.provisioningArtifactDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisioningArtifactProvisioningArtifactDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisioningArtifactProvisioningArtifactDetail)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisioningArtifact.property.status"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesUpdateProvisioningArtifactProvisioningArtifactDetail <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisioningArtifactProvisioningArtifactDetail"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisioningArtifactProvisioningArtifactDetail.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesUpdateProvisioningArtifactProvisioningArtifactDetail(__scope: Construct, __resources: string[], __input: ServiceCatalogUpdateProvisioningArtifactInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisioningArtifactProvisioningArtifactDetail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisioningArtifactProvisioningArtifactDetail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisioningArtifactProvisioningArtifactDetail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisioningArtifactInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateProvisioningArtifactInput)

---



#### Properties <a name="Properties"></a>

##### `active`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisioningArtifactProvisioningArtifactDetail.property.active"></a>

- *Type:* `boolean`

---

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisioningArtifactProvisioningArtifactDetail.property.createdTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisioningArtifactProvisioningArtifactDetail.property.description"></a>

- *Type:* `string`

---

##### `guidance`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisioningArtifactProvisioningArtifactDetail.property.guidance"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisioningArtifactProvisioningArtifactDetail.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisioningArtifactProvisioningArtifactDetail.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateProvisioningArtifactProvisioningArtifactDetail.property.type"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesUpdateServiceAction <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateServiceAction"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateServiceAction.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesUpdateServiceAction(__scope: Construct, __resources: string[], __input: ServiceCatalogUpdateServiceActionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateServiceAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateServiceAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateServiceAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateServiceActionInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateServiceActionInput)

---



#### Properties <a name="Properties"></a>

##### `serviceActionDetail`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateServiceAction.property.serviceActionDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateServiceActionServiceActionDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateServiceActionServiceActionDetail)

---


### ServiceCatalogResponsesUpdateServiceActionServiceActionDetail <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateServiceActionServiceActionDetail"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateServiceActionServiceActionDetail.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesUpdateServiceActionServiceActionDetail(__scope: Construct, __resources: string[], __input: ServiceCatalogUpdateServiceActionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateServiceActionServiceActionDetail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateServiceActionServiceActionDetail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateServiceActionServiceActionDetail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateServiceActionInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateServiceActionInput)

---



#### Properties <a name="Properties"></a>

##### `definition`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateServiceActionServiceActionDetail.property.definition"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `serviceActionSummary`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateServiceActionServiceActionDetail.property.serviceActionSummary"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateServiceActionServiceActionDetailServiceActionSummary`](#aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateServiceActionServiceActionDetailServiceActionSummary)

---


### ServiceCatalogResponsesUpdateServiceActionServiceActionDetailServiceActionSummary <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateServiceActionServiceActionDetailServiceActionSummary"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateServiceActionServiceActionDetailServiceActionSummary.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesUpdateServiceActionServiceActionDetailServiceActionSummary(__scope: Construct, __resources: string[], __input: ServiceCatalogUpdateServiceActionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateServiceActionServiceActionDetailServiceActionSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateServiceActionServiceActionDetailServiceActionSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateServiceActionServiceActionDetailServiceActionSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateServiceActionInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateServiceActionInput)

---



#### Properties <a name="Properties"></a>

##### `definitionType`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateServiceActionServiceActionDetailServiceActionSummary.property.definitionType"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateServiceActionServiceActionDetailServiceActionSummary.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateServiceActionServiceActionDetailServiceActionSummary.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateServiceActionServiceActionDetailServiceActionSummary.property.name"></a>

- *Type:* `string`

---


### ServiceCatalogResponsesUpdateTagOption <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateTagOption"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateTagOption.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesUpdateTagOption(__scope: Construct, __resources: string[], __input: ServiceCatalogUpdateTagOptionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateTagOption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateTagOption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateTagOption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateTagOptionInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateTagOptionInput)

---



#### Properties <a name="Properties"></a>

##### `tagOptionDetail`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateTagOption.property.tagOptionDetail"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateTagOptionTagOptionDetail`](#aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateTagOptionTagOptionDetail)

---


### ServiceCatalogResponsesUpdateTagOptionTagOptionDetail <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateTagOptionTagOptionDetail"></a>

#### Initializer <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateTagOptionTagOptionDetail.Initializer"></a>

```typescript
import { servicecatalog } from 'aws-cdk-sdk'

new servicecatalog.ServiceCatalogResponsesUpdateTagOptionTagOptionDetail(__scope: Construct, __resources: string[], __input: ServiceCatalogUpdateTagOptionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateTagOptionTagOptionDetail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateTagOptionTagOptionDetail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateTagOptionTagOptionDetail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateTagOptionInput`](#aws-cdk-sdk.servicecatalog.ServiceCatalogUpdateTagOptionInput)

---



#### Properties <a name="Properties"></a>

##### `active`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateTagOptionTagOptionDetail.property.active"></a>

- *Type:* `boolean`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateTagOptionTagOptionDetail.property.id"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateTagOptionTagOptionDetail.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.servicecatalog.ServiceCatalogResponsesUpdateTagOptionTagOptionDetail.property.value"></a>

- *Type:* `string`

---



