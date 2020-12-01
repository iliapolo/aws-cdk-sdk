/**
 * @schema AcceptPortfolioShareInput
 */
export interface AcceptPortfolioShareInput {
  /**
   * @schema AcceptPortfolioShareInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema AcceptPortfolioShareInput#PortfolioId
   */
  readonly portfolioId: string;

  /**
   * @schema AcceptPortfolioShareInput#PortfolioShareType
   */
  readonly portfolioShareType?: string;

}

/**
 * @schema AcceptPortfolioShareOutput
 */
export interface AcceptPortfolioShareOutput {
}

/**
 * @schema AssociateBudgetWithResourceInput
 */
export interface AssociateBudgetWithResourceInput {
  /**
   * @schema AssociateBudgetWithResourceInput#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema AssociateBudgetWithResourceInput#ResourceId
   */
  readonly resourceId: string;

}

/**
 * @schema AssociateBudgetWithResourceOutput
 */
export interface AssociateBudgetWithResourceOutput {
}

/**
 * @schema AssociatePrincipalWithPortfolioInput
 */
export interface AssociatePrincipalWithPortfolioInput {
  /**
   * @schema AssociatePrincipalWithPortfolioInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema AssociatePrincipalWithPortfolioInput#PortfolioId
   */
  readonly portfolioId: string;

  /**
   * @schema AssociatePrincipalWithPortfolioInput#PrincipalARN
   */
  readonly principalArn: string;

  /**
   * @schema AssociatePrincipalWithPortfolioInput#PrincipalType
   */
  readonly principalType: string;

}

/**
 * @schema AssociatePrincipalWithPortfolioOutput
 */
export interface AssociatePrincipalWithPortfolioOutput {
}

/**
 * @schema AssociateProductWithPortfolioInput
 */
export interface AssociateProductWithPortfolioInput {
  /**
   * @schema AssociateProductWithPortfolioInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema AssociateProductWithPortfolioInput#ProductId
   */
  readonly productId: string;

  /**
   * @schema AssociateProductWithPortfolioInput#PortfolioId
   */
  readonly portfolioId: string;

  /**
   * @schema AssociateProductWithPortfolioInput#SourcePortfolioId
   */
  readonly sourcePortfolioId?: string;

}

/**
 * @schema AssociateProductWithPortfolioOutput
 */
export interface AssociateProductWithPortfolioOutput {
}

/**
 * @schema AssociateServiceActionWithProvisioningArtifactInput
 */
export interface AssociateServiceActionWithProvisioningArtifactInput {
  /**
   * @schema AssociateServiceActionWithProvisioningArtifactInput#ProductId
   */
  readonly productId: string;

  /**
   * @schema AssociateServiceActionWithProvisioningArtifactInput#ProvisioningArtifactId
   */
  readonly provisioningArtifactId: string;

  /**
   * @schema AssociateServiceActionWithProvisioningArtifactInput#ServiceActionId
   */
  readonly serviceActionId: string;

  /**
   * @schema AssociateServiceActionWithProvisioningArtifactInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

}

/**
 * @schema AssociateServiceActionWithProvisioningArtifactOutput
 */
export interface AssociateServiceActionWithProvisioningArtifactOutput {
}

/**
 * @schema AssociateTagOptionWithResourceInput
 */
export interface AssociateTagOptionWithResourceInput {
  /**
   * @schema AssociateTagOptionWithResourceInput#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema AssociateTagOptionWithResourceInput#TagOptionId
   */
  readonly tagOptionId: string;

}

/**
 * @schema AssociateTagOptionWithResourceOutput
 */
export interface AssociateTagOptionWithResourceOutput {
}

/**
 * @schema BatchAssociateServiceActionWithProvisioningArtifactInput
 */
export interface BatchAssociateServiceActionWithProvisioningArtifactInput {
  /**
   * @schema BatchAssociateServiceActionWithProvisioningArtifactInput#ServiceActionAssociations
   */
  readonly serviceActionAssociations: ServiceActionAssociation[];

  /**
   * @schema BatchAssociateServiceActionWithProvisioningArtifactInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

}

/**
 * @schema BatchAssociateServiceActionWithProvisioningArtifactOutput
 */
export interface BatchAssociateServiceActionWithProvisioningArtifactOutput {
  /**
   * @schema BatchAssociateServiceActionWithProvisioningArtifactOutput#FailedServiceActionAssociations
   */
  readonly failedServiceActionAssociations?: FailedServiceActionAssociation[];

}

/**
 * @schema BatchDisassociateServiceActionFromProvisioningArtifactInput
 */
export interface BatchDisassociateServiceActionFromProvisioningArtifactInput {
  /**
   * @schema BatchDisassociateServiceActionFromProvisioningArtifactInput#ServiceActionAssociations
   */
  readonly serviceActionAssociations: ServiceActionAssociation[];

  /**
   * @schema BatchDisassociateServiceActionFromProvisioningArtifactInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

}

/**
 * @schema BatchDisassociateServiceActionFromProvisioningArtifactOutput
 */
export interface BatchDisassociateServiceActionFromProvisioningArtifactOutput {
  /**
   * @schema BatchDisassociateServiceActionFromProvisioningArtifactOutput#FailedServiceActionAssociations
   */
  readonly failedServiceActionAssociations?: FailedServiceActionAssociation[];

}

/**
 * @schema CopyProductInput
 */
export interface CopyProductInput {
  /**
   * @schema CopyProductInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema CopyProductInput#SourceProductArn
   */
  readonly sourceProductArn: string;

  /**
   * @schema CopyProductInput#TargetProductId
   */
  readonly targetProductId?: string;

  /**
   * @schema CopyProductInput#TargetProductName
   */
  readonly targetProductName?: string;

  /**
   * @schema CopyProductInput#SourceProvisioningArtifactIdentifiers
   */
  readonly sourceProvisioningArtifactIdentifiers?: { [key: string]: string }[];

  /**
   * @schema CopyProductInput#CopyOptions
   */
  readonly copyOptions?: string[];

  /**
   * @schema CopyProductInput#IdempotencyToken
   */
  readonly idempotencyToken: string;

}

/**
 * @schema CopyProductOutput
 */
export interface CopyProductOutput {
  /**
   * @schema CopyProductOutput#CopyProductToken
   */
  readonly copyProductToken?: string;

}

/**
 * @schema CreateConstraintInput
 */
export interface CreateConstraintInput {
  /**
   * @schema CreateConstraintInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema CreateConstraintInput#PortfolioId
   */
  readonly portfolioId: string;

  /**
   * @schema CreateConstraintInput#ProductId
   */
  readonly productId: string;

  /**
   * @schema CreateConstraintInput#Parameters
   */
  readonly parameters: string;

  /**
   * @schema CreateConstraintInput#Type
   */
  readonly type: string;

  /**
   * @schema CreateConstraintInput#Description
   */
  readonly description?: string;

  /**
   * @schema CreateConstraintInput#IdempotencyToken
   */
  readonly idempotencyToken: string;

}

/**
 * @schema CreateConstraintOutput
 */
export interface CreateConstraintOutput {
  /**
   * @schema CreateConstraintOutput#ConstraintDetail
   */
  readonly constraintDetail?: ConstraintDetail;

  /**
   * @schema CreateConstraintOutput#ConstraintParameters
   */
  readonly constraintParameters?: string;

  /**
   * @schema CreateConstraintOutput#Status
   */
  readonly status?: string;

}

/**
 * @schema CreatePortfolioInput
 */
export interface CreatePortfolioInput {
  /**
   * @schema CreatePortfolioInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema CreatePortfolioInput#DisplayName
   */
  readonly displayName: string;

  /**
   * @schema CreatePortfolioInput#Description
   */
  readonly description?: string;

  /**
   * @schema CreatePortfolioInput#ProviderName
   */
  readonly providerName: string;

  /**
   * @schema CreatePortfolioInput#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreatePortfolioInput#IdempotencyToken
   */
  readonly idempotencyToken: string;

}

/**
 * @schema CreatePortfolioOutput
 */
export interface CreatePortfolioOutput {
  /**
   * @schema CreatePortfolioOutput#PortfolioDetail
   */
  readonly portfolioDetail?: PortfolioDetail;

  /**
   * @schema CreatePortfolioOutput#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreatePortfolioShareInput
 */
export interface CreatePortfolioShareInput {
  /**
   * @schema CreatePortfolioShareInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema CreatePortfolioShareInput#PortfolioId
   */
  readonly portfolioId: string;

  /**
   * @schema CreatePortfolioShareInput#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema CreatePortfolioShareInput#OrganizationNode
   */
  readonly organizationNode?: OrganizationNode;

}

/**
 * @schema CreatePortfolioShareOutput
 */
export interface CreatePortfolioShareOutput {
  /**
   * @schema CreatePortfolioShareOutput#PortfolioShareToken
   */
  readonly portfolioShareToken?: string;

}

/**
 * @schema CreateProductInput
 */
export interface CreateProductInput {
  /**
   * @schema CreateProductInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema CreateProductInput#Name
   */
  readonly name: string;

  /**
   * @schema CreateProductInput#Owner
   */
  readonly owner: string;

  /**
   * @schema CreateProductInput#Description
   */
  readonly description?: string;

  /**
   * @schema CreateProductInput#Distributor
   */
  readonly distributor?: string;

  /**
   * @schema CreateProductInput#SupportDescription
   */
  readonly supportDescription?: string;

  /**
   * @schema CreateProductInput#SupportEmail
   */
  readonly supportEmail?: string;

  /**
   * @schema CreateProductInput#SupportUrl
   */
  readonly supportUrl?: string;

  /**
   * @schema CreateProductInput#ProductType
   */
  readonly productType: string;

  /**
   * @schema CreateProductInput#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateProductInput#ProvisioningArtifactParameters
   */
  readonly provisioningArtifactParameters: ProvisioningArtifactProperties;

  /**
   * @schema CreateProductInput#IdempotencyToken
   */
  readonly idempotencyToken: string;

}

/**
 * @schema CreateProductOutput
 */
export interface CreateProductOutput {
  /**
   * @schema CreateProductOutput#ProductViewDetail
   */
  readonly productViewDetail?: ProductViewDetail;

  /**
   * @schema CreateProductOutput#ProvisioningArtifactDetail
   */
  readonly provisioningArtifactDetail?: ProvisioningArtifactDetail;

  /**
   * @schema CreateProductOutput#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateProvisionedProductPlanInput
 */
export interface CreateProvisionedProductPlanInput {
  /**
   * @schema CreateProvisionedProductPlanInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema CreateProvisionedProductPlanInput#PlanName
   */
  readonly planName: string;

  /**
   * @schema CreateProvisionedProductPlanInput#PlanType
   */
  readonly planType: string;

  /**
   * @schema CreateProvisionedProductPlanInput#NotificationArns
   */
  readonly notificationArns?: string[];

  /**
   * @schema CreateProvisionedProductPlanInput#PathId
   */
  readonly pathId?: string;

  /**
   * @schema CreateProvisionedProductPlanInput#ProductId
   */
  readonly productId: string;

  /**
   * @schema CreateProvisionedProductPlanInput#ProvisionedProductName
   */
  readonly provisionedProductName: string;

  /**
   * @schema CreateProvisionedProductPlanInput#ProvisioningArtifactId
   */
  readonly provisioningArtifactId: string;

  /**
   * @schema CreateProvisionedProductPlanInput#ProvisioningParameters
   */
  readonly provisioningParameters?: UpdateProvisioningParameter[];

  /**
   * @schema CreateProvisionedProductPlanInput#IdempotencyToken
   */
  readonly idempotencyToken: string;

  /**
   * @schema CreateProvisionedProductPlanInput#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateProvisionedProductPlanOutput
 */
export interface CreateProvisionedProductPlanOutput {
  /**
   * @schema CreateProvisionedProductPlanOutput#PlanName
   */
  readonly planName?: string;

  /**
   * @schema CreateProvisionedProductPlanOutput#PlanId
   */
  readonly planId?: string;

  /**
   * @schema CreateProvisionedProductPlanOutput#ProvisionProductId
   */
  readonly provisionProductId?: string;

  /**
   * @schema CreateProvisionedProductPlanOutput#ProvisionedProductName
   */
  readonly provisionedProductName?: string;

  /**
   * @schema CreateProvisionedProductPlanOutput#ProvisioningArtifactId
   */
  readonly provisioningArtifactId?: string;

}

/**
 * @schema CreateProvisioningArtifactInput
 */
export interface CreateProvisioningArtifactInput {
  /**
   * @schema CreateProvisioningArtifactInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema CreateProvisioningArtifactInput#ProductId
   */
  readonly productId: string;

  /**
   * @schema CreateProvisioningArtifactInput#Parameters
   */
  readonly parameters: ProvisioningArtifactProperties;

  /**
   * @schema CreateProvisioningArtifactInput#IdempotencyToken
   */
  readonly idempotencyToken: string;

}

/**
 * @schema CreateProvisioningArtifactOutput
 */
export interface CreateProvisioningArtifactOutput {
  /**
   * @schema CreateProvisioningArtifactOutput#ProvisioningArtifactDetail
   */
  readonly provisioningArtifactDetail?: ProvisioningArtifactDetail;

  /**
   * @schema CreateProvisioningArtifactOutput#Info
   */
  readonly info?: { [key: string]: string };

  /**
   * @schema CreateProvisioningArtifactOutput#Status
   */
  readonly status?: string;

}

/**
 * @schema CreateServiceActionInput
 */
export interface CreateServiceActionInput {
  /**
   * @schema CreateServiceActionInput#Name
   */
  readonly name: string;

  /**
   * @schema CreateServiceActionInput#DefinitionType
   */
  readonly definitionType: string;

  /**
   * @schema CreateServiceActionInput#Definition
   */
  readonly definition: { [key: string]: string };

  /**
   * @schema CreateServiceActionInput#Description
   */
  readonly description?: string;

  /**
   * @schema CreateServiceActionInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema CreateServiceActionInput#IdempotencyToken
   */
  readonly idempotencyToken: string;

}

/**
 * @schema CreateServiceActionOutput
 */
export interface CreateServiceActionOutput {
  /**
   * @schema CreateServiceActionOutput#ServiceActionDetail
   */
  readonly serviceActionDetail?: ServiceActionDetail;

}

/**
 * @schema CreateTagOptionInput
 */
export interface CreateTagOptionInput {
  /**
   * @schema CreateTagOptionInput#Key
   */
  readonly key: string;

  /**
   * @schema CreateTagOptionInput#Value
   */
  readonly value: string;

}

/**
 * @schema CreateTagOptionOutput
 */
export interface CreateTagOptionOutput {
  /**
   * @schema CreateTagOptionOutput#TagOptionDetail
   */
  readonly tagOptionDetail?: TagOptionDetail;

}

/**
 * @schema DeleteConstraintInput
 */
export interface DeleteConstraintInput {
  /**
   * @schema DeleteConstraintInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema DeleteConstraintInput#Id
   */
  readonly id: string;

}

/**
 * @schema DeleteConstraintOutput
 */
export interface DeleteConstraintOutput {
}

/**
 * @schema DeletePortfolioInput
 */
export interface DeletePortfolioInput {
  /**
   * @schema DeletePortfolioInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema DeletePortfolioInput#Id
   */
  readonly id: string;

}

/**
 * @schema DeletePortfolioOutput
 */
export interface DeletePortfolioOutput {
}

/**
 * @schema DeletePortfolioShareInput
 */
export interface DeletePortfolioShareInput {
  /**
   * @schema DeletePortfolioShareInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema DeletePortfolioShareInput#PortfolioId
   */
  readonly portfolioId: string;

  /**
   * @schema DeletePortfolioShareInput#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema DeletePortfolioShareInput#OrganizationNode
   */
  readonly organizationNode?: OrganizationNode;

}

/**
 * @schema DeletePortfolioShareOutput
 */
export interface DeletePortfolioShareOutput {
  /**
   * @schema DeletePortfolioShareOutput#PortfolioShareToken
   */
  readonly portfolioShareToken?: string;

}

/**
 * @schema DeleteProductInput
 */
export interface DeleteProductInput {
  /**
   * @schema DeleteProductInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema DeleteProductInput#Id
   */
  readonly id: string;

}

/**
 * @schema DeleteProductOutput
 */
export interface DeleteProductOutput {
}

/**
 * @schema DeleteProvisionedProductPlanInput
 */
export interface DeleteProvisionedProductPlanInput {
  /**
   * @schema DeleteProvisionedProductPlanInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema DeleteProvisionedProductPlanInput#PlanId
   */
  readonly planId: string;

  /**
   * @schema DeleteProvisionedProductPlanInput#IgnoreErrors
   */
  readonly ignoreErrors?: boolean;

}

/**
 * @schema DeleteProvisionedProductPlanOutput
 */
export interface DeleteProvisionedProductPlanOutput {
}

/**
 * @schema DeleteProvisioningArtifactInput
 */
export interface DeleteProvisioningArtifactInput {
  /**
   * @schema DeleteProvisioningArtifactInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema DeleteProvisioningArtifactInput#ProductId
   */
  readonly productId: string;

  /**
   * @schema DeleteProvisioningArtifactInput#ProvisioningArtifactId
   */
  readonly provisioningArtifactId: string;

}

/**
 * @schema DeleteProvisioningArtifactOutput
 */
export interface DeleteProvisioningArtifactOutput {
}

/**
 * @schema DeleteServiceActionInput
 */
export interface DeleteServiceActionInput {
  /**
   * @schema DeleteServiceActionInput#Id
   */
  readonly id: string;

  /**
   * @schema DeleteServiceActionInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

}

/**
 * @schema DeleteServiceActionOutput
 */
export interface DeleteServiceActionOutput {
}

/**
 * @schema DeleteTagOptionInput
 */
export interface DeleteTagOptionInput {
  /**
   * @schema DeleteTagOptionInput#Id
   */
  readonly id: string;

}

/**
 * @schema DeleteTagOptionOutput
 */
export interface DeleteTagOptionOutput {
}

/**
 * @schema DescribeConstraintInput
 */
export interface DescribeConstraintInput {
  /**
   * @schema DescribeConstraintInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema DescribeConstraintInput#Id
   */
  readonly id: string;

}

/**
 * @schema DescribeConstraintOutput
 */
export interface DescribeConstraintOutput {
  /**
   * @schema DescribeConstraintOutput#ConstraintDetail
   */
  readonly constraintDetail?: ConstraintDetail;

  /**
   * @schema DescribeConstraintOutput#ConstraintParameters
   */
  readonly constraintParameters?: string;

  /**
   * @schema DescribeConstraintOutput#Status
   */
  readonly status?: string;

}

/**
 * @schema DescribeCopyProductStatusInput
 */
export interface DescribeCopyProductStatusInput {
  /**
   * @schema DescribeCopyProductStatusInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema DescribeCopyProductStatusInput#CopyProductToken
   */
  readonly copyProductToken: string;

}

/**
 * @schema DescribeCopyProductStatusOutput
 */
export interface DescribeCopyProductStatusOutput {
  /**
   * @schema DescribeCopyProductStatusOutput#CopyProductStatus
   */
  readonly copyProductStatus?: string;

  /**
   * @schema DescribeCopyProductStatusOutput#TargetProductId
   */
  readonly targetProductId?: string;

  /**
   * @schema DescribeCopyProductStatusOutput#StatusDetail
   */
  readonly statusDetail?: string;

}

/**
 * @schema DescribePortfolioInput
 */
export interface DescribePortfolioInput {
  /**
   * @schema DescribePortfolioInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema DescribePortfolioInput#Id
   */
  readonly id: string;

}

/**
 * @schema DescribePortfolioOutput
 */
export interface DescribePortfolioOutput {
  /**
   * @schema DescribePortfolioOutput#PortfolioDetail
   */
  readonly portfolioDetail?: PortfolioDetail;

  /**
   * @schema DescribePortfolioOutput#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema DescribePortfolioOutput#TagOptions
   */
  readonly tagOptions?: TagOptionDetail[];

  /**
   * @schema DescribePortfolioOutput#Budgets
   */
  readonly budgets?: BudgetDetail[];

}

/**
 * @schema DescribePortfolioShareStatusInput
 */
export interface DescribePortfolioShareStatusInput {
  /**
   * @schema DescribePortfolioShareStatusInput#PortfolioShareToken
   */
  readonly portfolioShareToken: string;

}

/**
 * @schema DescribePortfolioShareStatusOutput
 */
export interface DescribePortfolioShareStatusOutput {
  /**
   * @schema DescribePortfolioShareStatusOutput#PortfolioShareToken
   */
  readonly portfolioShareToken?: string;

  /**
   * @schema DescribePortfolioShareStatusOutput#PortfolioId
   */
  readonly portfolioId?: string;

  /**
   * @schema DescribePortfolioShareStatusOutput#OrganizationNodeValue
   */
  readonly organizationNodeValue?: string;

  /**
   * @schema DescribePortfolioShareStatusOutput#Status
   */
  readonly status?: string;

  /**
   * @schema DescribePortfolioShareStatusOutput#ShareDetails
   */
  readonly shareDetails?: ShareDetails;

}

/**
 * @schema DescribeProductInput
 */
export interface DescribeProductInput {
  /**
   * @schema DescribeProductInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema DescribeProductInput#Id
   */
  readonly id?: string;

  /**
   * @schema DescribeProductInput#Name
   */
  readonly name?: string;

}

/**
 * @schema DescribeProductOutput
 */
export interface DescribeProductOutput {
  /**
   * @schema DescribeProductOutput#ProductViewSummary
   */
  readonly productViewSummary?: ProductViewSummary;

  /**
   * @schema DescribeProductOutput#ProvisioningArtifacts
   */
  readonly provisioningArtifacts?: ProvisioningArtifact[];

  /**
   * @schema DescribeProductOutput#Budgets
   */
  readonly budgets?: BudgetDetail[];

  /**
   * @schema DescribeProductOutput#LaunchPaths
   */
  readonly launchPaths?: LaunchPath[];

}

/**
 * @schema DescribeProductAsAdminInput
 */
export interface DescribeProductAsAdminInput {
  /**
   * @schema DescribeProductAsAdminInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema DescribeProductAsAdminInput#Id
   */
  readonly id?: string;

  /**
   * @schema DescribeProductAsAdminInput#Name
   */
  readonly name?: string;

}

/**
 * @schema DescribeProductAsAdminOutput
 */
export interface DescribeProductAsAdminOutput {
  /**
   * @schema DescribeProductAsAdminOutput#ProductViewDetail
   */
  readonly productViewDetail?: ProductViewDetail;

  /**
   * @schema DescribeProductAsAdminOutput#ProvisioningArtifactSummaries
   */
  readonly provisioningArtifactSummaries?: ProvisioningArtifactSummary[];

  /**
   * @schema DescribeProductAsAdminOutput#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema DescribeProductAsAdminOutput#TagOptions
   */
  readonly tagOptions?: TagOptionDetail[];

  /**
   * @schema DescribeProductAsAdminOutput#Budgets
   */
  readonly budgets?: BudgetDetail[];

}

/**
 * @schema DescribeProductViewInput
 */
export interface DescribeProductViewInput {
  /**
   * @schema DescribeProductViewInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema DescribeProductViewInput#Id
   */
  readonly id: string;

}

/**
 * @schema DescribeProductViewOutput
 */
export interface DescribeProductViewOutput {
  /**
   * @schema DescribeProductViewOutput#ProductViewSummary
   */
  readonly productViewSummary?: ProductViewSummary;

  /**
   * @schema DescribeProductViewOutput#ProvisioningArtifacts
   */
  readonly provisioningArtifacts?: ProvisioningArtifact[];

}

/**
 * @schema DescribeProvisionedProductInput
 */
export interface DescribeProvisionedProductInput {
  /**
   * @schema DescribeProvisionedProductInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema DescribeProvisionedProductInput#Id
   */
  readonly id?: string;

  /**
   * @schema DescribeProvisionedProductInput#Name
   */
  readonly name?: string;

}

/**
 * @schema DescribeProvisionedProductOutput
 */
export interface DescribeProvisionedProductOutput {
  /**
   * @schema DescribeProvisionedProductOutput#ProvisionedProductDetail
   */
  readonly provisionedProductDetail?: ProvisionedProductDetail;

  /**
   * @schema DescribeProvisionedProductOutput#CloudWatchDashboards
   */
  readonly cloudWatchDashboards?: CloudWatchDashboard[];

}

/**
 * @schema DescribeProvisionedProductPlanInput
 */
export interface DescribeProvisionedProductPlanInput {
  /**
   * @schema DescribeProvisionedProductPlanInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema DescribeProvisionedProductPlanInput#PlanId
   */
  readonly planId: string;

  /**
   * @schema DescribeProvisionedProductPlanInput#PageSize
   */
  readonly pageSize?: number;

  /**
   * @schema DescribeProvisionedProductPlanInput#PageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema DescribeProvisionedProductPlanOutput
 */
export interface DescribeProvisionedProductPlanOutput {
  /**
   * @schema DescribeProvisionedProductPlanOutput#ProvisionedProductPlanDetails
   */
  readonly provisionedProductPlanDetails?: ProvisionedProductPlanDetails;

  /**
   * @schema DescribeProvisionedProductPlanOutput#ResourceChanges
   */
  readonly resourceChanges?: ResourceChange[];

  /**
   * @schema DescribeProvisionedProductPlanOutput#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema DescribeProvisioningArtifactInput
 */
export interface DescribeProvisioningArtifactInput {
  /**
   * @schema DescribeProvisioningArtifactInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema DescribeProvisioningArtifactInput#ProvisioningArtifactId
   */
  readonly provisioningArtifactId?: string;

  /**
   * @schema DescribeProvisioningArtifactInput#ProductId
   */
  readonly productId?: string;

  /**
   * @schema DescribeProvisioningArtifactInput#ProvisioningArtifactName
   */
  readonly provisioningArtifactName?: string;

  /**
   * @schema DescribeProvisioningArtifactInput#ProductName
   */
  readonly productName?: string;

  /**
   * @schema DescribeProvisioningArtifactInput#Verbose
   */
  readonly verbose?: boolean;

}

/**
 * @schema DescribeProvisioningArtifactOutput
 */
export interface DescribeProvisioningArtifactOutput {
  /**
   * @schema DescribeProvisioningArtifactOutput#ProvisioningArtifactDetail
   */
  readonly provisioningArtifactDetail?: ProvisioningArtifactDetail;

  /**
   * @schema DescribeProvisioningArtifactOutput#Info
   */
  readonly info?: { [key: string]: string };

  /**
   * @schema DescribeProvisioningArtifactOutput#Status
   */
  readonly status?: string;

}

/**
 * @schema DescribeProvisioningParametersInput
 */
export interface DescribeProvisioningParametersInput {
  /**
   * @schema DescribeProvisioningParametersInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema DescribeProvisioningParametersInput#ProductId
   */
  readonly productId?: string;

  /**
   * @schema DescribeProvisioningParametersInput#ProductName
   */
  readonly productName?: string;

  /**
   * @schema DescribeProvisioningParametersInput#ProvisioningArtifactId
   */
  readonly provisioningArtifactId?: string;

  /**
   * @schema DescribeProvisioningParametersInput#ProvisioningArtifactName
   */
  readonly provisioningArtifactName?: string;

  /**
   * @schema DescribeProvisioningParametersInput#PathId
   */
  readonly pathId?: string;

  /**
   * @schema DescribeProvisioningParametersInput#PathName
   */
  readonly pathName?: string;

}

/**
 * @schema DescribeProvisioningParametersOutput
 */
export interface DescribeProvisioningParametersOutput {
  /**
   * @schema DescribeProvisioningParametersOutput#ProvisioningArtifactParameters
   */
  readonly provisioningArtifactParameters?: ProvisioningArtifactParameter[];

  /**
   * @schema DescribeProvisioningParametersOutput#ConstraintSummaries
   */
  readonly constraintSummaries?: ConstraintSummary[];

  /**
   * @schema DescribeProvisioningParametersOutput#UsageInstructions
   */
  readonly usageInstructions?: UsageInstruction[];

  /**
   * @schema DescribeProvisioningParametersOutput#TagOptions
   */
  readonly tagOptions?: TagOptionSummary[];

  /**
   * @schema DescribeProvisioningParametersOutput#ProvisioningArtifactPreferences
   */
  readonly provisioningArtifactPreferences?: ProvisioningArtifactPreferences;

  /**
   * @schema DescribeProvisioningParametersOutput#ProvisioningArtifactOutputs
   */
  readonly provisioningArtifactOutputs?: ProvisioningArtifactOutput[];

}

/**
 * @schema DescribeRecordInput
 */
export interface DescribeRecordInput {
  /**
   * @schema DescribeRecordInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema DescribeRecordInput#Id
   */
  readonly id: string;

  /**
   * @schema DescribeRecordInput#PageToken
   */
  readonly pageToken?: string;

  /**
   * @schema DescribeRecordInput#PageSize
   */
  readonly pageSize?: number;

}

/**
 * @schema DescribeRecordOutput
 */
export interface DescribeRecordOutput {
  /**
   * @schema DescribeRecordOutput#RecordDetail
   */
  readonly recordDetail?: RecordDetail;

  /**
   * @schema DescribeRecordOutput#RecordOutputs
   */
  readonly recordOutputs?: RecordOutput[];

  /**
   * @schema DescribeRecordOutput#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema DescribeServiceActionInput
 */
export interface DescribeServiceActionInput {
  /**
   * @schema DescribeServiceActionInput#Id
   */
  readonly id: string;

  /**
   * @schema DescribeServiceActionInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

}

/**
 * @schema DescribeServiceActionOutput
 */
export interface DescribeServiceActionOutput {
  /**
   * @schema DescribeServiceActionOutput#ServiceActionDetail
   */
  readonly serviceActionDetail?: ServiceActionDetail;

}

/**
 * @schema DescribeServiceActionExecutionParametersInput
 */
export interface DescribeServiceActionExecutionParametersInput {
  /**
   * @schema DescribeServiceActionExecutionParametersInput#ProvisionedProductId
   */
  readonly provisionedProductId: string;

  /**
   * @schema DescribeServiceActionExecutionParametersInput#ServiceActionId
   */
  readonly serviceActionId: string;

  /**
   * @schema DescribeServiceActionExecutionParametersInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

}

/**
 * @schema DescribeServiceActionExecutionParametersOutput
 */
export interface DescribeServiceActionExecutionParametersOutput {
  /**
   * @schema DescribeServiceActionExecutionParametersOutput#ServiceActionParameters
   */
  readonly serviceActionParameters?: ExecutionParameter[];

}

/**
 * @schema DescribeTagOptionInput
 */
export interface DescribeTagOptionInput {
  /**
   * @schema DescribeTagOptionInput#Id
   */
  readonly id: string;

}

/**
 * @schema DescribeTagOptionOutput
 */
export interface DescribeTagOptionOutput {
  /**
   * @schema DescribeTagOptionOutput#TagOptionDetail
   */
  readonly tagOptionDetail?: TagOptionDetail;

}

/**
 * @schema DisableAwsOrganizationsAccessInput
 */
export interface DisableAwsOrganizationsAccessInput {
}

/**
 * @schema DisableAwsOrganizationsAccessOutput
 */
export interface DisableAwsOrganizationsAccessOutput {
}

/**
 * @schema DisassociateBudgetFromResourceInput
 */
export interface DisassociateBudgetFromResourceInput {
  /**
   * @schema DisassociateBudgetFromResourceInput#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema DisassociateBudgetFromResourceInput#ResourceId
   */
  readonly resourceId: string;

}

/**
 * @schema DisassociateBudgetFromResourceOutput
 */
export interface DisassociateBudgetFromResourceOutput {
}

/**
 * @schema DisassociatePrincipalFromPortfolioInput
 */
export interface DisassociatePrincipalFromPortfolioInput {
  /**
   * @schema DisassociatePrincipalFromPortfolioInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema DisassociatePrincipalFromPortfolioInput#PortfolioId
   */
  readonly portfolioId: string;

  /**
   * @schema DisassociatePrincipalFromPortfolioInput#PrincipalARN
   */
  readonly principalArn: string;

}

/**
 * @schema DisassociatePrincipalFromPortfolioOutput
 */
export interface DisassociatePrincipalFromPortfolioOutput {
}

/**
 * @schema DisassociateProductFromPortfolioInput
 */
export interface DisassociateProductFromPortfolioInput {
  /**
   * @schema DisassociateProductFromPortfolioInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema DisassociateProductFromPortfolioInput#ProductId
   */
  readonly productId: string;

  /**
   * @schema DisassociateProductFromPortfolioInput#PortfolioId
   */
  readonly portfolioId: string;

}

/**
 * @schema DisassociateProductFromPortfolioOutput
 */
export interface DisassociateProductFromPortfolioOutput {
}

/**
 * @schema DisassociateServiceActionFromProvisioningArtifactInput
 */
export interface DisassociateServiceActionFromProvisioningArtifactInput {
  /**
   * @schema DisassociateServiceActionFromProvisioningArtifactInput#ProductId
   */
  readonly productId: string;

  /**
   * @schema DisassociateServiceActionFromProvisioningArtifactInput#ProvisioningArtifactId
   */
  readonly provisioningArtifactId: string;

  /**
   * @schema DisassociateServiceActionFromProvisioningArtifactInput#ServiceActionId
   */
  readonly serviceActionId: string;

  /**
   * @schema DisassociateServiceActionFromProvisioningArtifactInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

}

/**
 * @schema DisassociateServiceActionFromProvisioningArtifactOutput
 */
export interface DisassociateServiceActionFromProvisioningArtifactOutput {
}

/**
 * @schema DisassociateTagOptionFromResourceInput
 */
export interface DisassociateTagOptionFromResourceInput {
  /**
   * @schema DisassociateTagOptionFromResourceInput#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema DisassociateTagOptionFromResourceInput#TagOptionId
   */
  readonly tagOptionId: string;

}

/**
 * @schema DisassociateTagOptionFromResourceOutput
 */
export interface DisassociateTagOptionFromResourceOutput {
}

/**
 * @schema EnableAwsOrganizationsAccessInput
 */
export interface EnableAwsOrganizationsAccessInput {
}

/**
 * @schema EnableAwsOrganizationsAccessOutput
 */
export interface EnableAwsOrganizationsAccessOutput {
}

/**
 * @schema ExecuteProvisionedProductPlanInput
 */
export interface ExecuteProvisionedProductPlanInput {
  /**
   * @schema ExecuteProvisionedProductPlanInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ExecuteProvisionedProductPlanInput#PlanId
   */
  readonly planId: string;

  /**
   * @schema ExecuteProvisionedProductPlanInput#IdempotencyToken
   */
  readonly idempotencyToken: string;

}

/**
 * @schema ExecuteProvisionedProductPlanOutput
 */
export interface ExecuteProvisionedProductPlanOutput {
  /**
   * @schema ExecuteProvisionedProductPlanOutput#RecordDetail
   */
  readonly recordDetail?: RecordDetail;

}

/**
 * @schema ExecuteProvisionedProductServiceActionInput
 */
export interface ExecuteProvisionedProductServiceActionInput {
  /**
   * @schema ExecuteProvisionedProductServiceActionInput#ProvisionedProductId
   */
  readonly provisionedProductId: string;

  /**
   * @schema ExecuteProvisionedProductServiceActionInput#ServiceActionId
   */
  readonly serviceActionId: string;

  /**
   * @schema ExecuteProvisionedProductServiceActionInput#ExecuteToken
   */
  readonly executeToken: string;

  /**
   * @schema ExecuteProvisionedProductServiceActionInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ExecuteProvisionedProductServiceActionInput#Parameters
   */
  readonly parameters?: { [key: string]: string[] };

}

/**
 * @schema ExecuteProvisionedProductServiceActionOutput
 */
export interface ExecuteProvisionedProductServiceActionOutput {
  /**
   * @schema ExecuteProvisionedProductServiceActionOutput#RecordDetail
   */
  readonly recordDetail?: RecordDetail;

}

/**
 * @schema GetAwsOrganizationsAccessStatusInput
 */
export interface GetAwsOrganizationsAccessStatusInput {
}

/**
 * @schema GetAwsOrganizationsAccessStatusOutput
 */
export interface GetAwsOrganizationsAccessStatusOutput {
  /**
   * @schema GetAwsOrganizationsAccessStatusOutput#AccessStatus
   */
  readonly accessStatus?: string;

}

/**
 * @schema GetProvisionedProductOutputsInput
 */
export interface GetProvisionedProductOutputsInput {
  /**
   * @schema GetProvisionedProductOutputsInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema GetProvisionedProductOutputsInput#ProvisionedProductId
   */
  readonly provisionedProductId?: string;

  /**
   * @schema GetProvisionedProductOutputsInput#ProvisionedProductName
   */
  readonly provisionedProductName?: string;

  /**
   * @schema GetProvisionedProductOutputsInput#OutputKeys
   */
  readonly outputKeys?: string[];

  /**
   * @schema GetProvisionedProductOutputsInput#PageSize
   */
  readonly pageSize?: number;

  /**
   * @schema GetProvisionedProductOutputsInput#PageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema GetProvisionedProductOutputsOutput
 */
export interface GetProvisionedProductOutputsOutput {
  /**
   * @schema GetProvisionedProductOutputsOutput#Outputs
   */
  readonly outputs?: RecordOutput[];

  /**
   * @schema GetProvisionedProductOutputsOutput#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ImportAsProvisionedProductInput
 */
export interface ImportAsProvisionedProductInput {
  /**
   * @schema ImportAsProvisionedProductInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ImportAsProvisionedProductInput#ProductId
   */
  readonly productId: string;

  /**
   * @schema ImportAsProvisionedProductInput#ProvisioningArtifactId
   */
  readonly provisioningArtifactId: string;

  /**
   * @schema ImportAsProvisionedProductInput#ProvisionedProductName
   */
  readonly provisionedProductName: string;

  /**
   * @schema ImportAsProvisionedProductInput#PhysicalId
   */
  readonly physicalId: string;

  /**
   * @schema ImportAsProvisionedProductInput#IdempotencyToken
   */
  readonly idempotencyToken: string;

}

/**
 * @schema ImportAsProvisionedProductOutput
 */
export interface ImportAsProvisionedProductOutput {
  /**
   * @schema ImportAsProvisionedProductOutput#RecordDetail
   */
  readonly recordDetail?: RecordDetail;

}

/**
 * @schema ListAcceptedPortfolioSharesInput
 */
export interface ListAcceptedPortfolioSharesInput {
  /**
   * @schema ListAcceptedPortfolioSharesInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ListAcceptedPortfolioSharesInput#PageToken
   */
  readonly pageToken?: string;

  /**
   * @schema ListAcceptedPortfolioSharesInput#PageSize
   */
  readonly pageSize?: number;

  /**
   * @schema ListAcceptedPortfolioSharesInput#PortfolioShareType
   */
  readonly portfolioShareType?: string;

}

/**
 * @schema ListAcceptedPortfolioSharesOutput
 */
export interface ListAcceptedPortfolioSharesOutput {
  /**
   * @schema ListAcceptedPortfolioSharesOutput#PortfolioDetails
   */
  readonly portfolioDetails?: PortfolioDetail[];

  /**
   * @schema ListAcceptedPortfolioSharesOutput#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ListBudgetsForResourceInput
 */
export interface ListBudgetsForResourceInput {
  /**
   * @schema ListBudgetsForResourceInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ListBudgetsForResourceInput#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema ListBudgetsForResourceInput#PageSize
   */
  readonly pageSize?: number;

  /**
   * @schema ListBudgetsForResourceInput#PageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema ListBudgetsForResourceOutput
 */
export interface ListBudgetsForResourceOutput {
  /**
   * @schema ListBudgetsForResourceOutput#Budgets
   */
  readonly budgets?: BudgetDetail[];

  /**
   * @schema ListBudgetsForResourceOutput#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ListConstraintsForPortfolioInput
 */
export interface ListConstraintsForPortfolioInput {
  /**
   * @schema ListConstraintsForPortfolioInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ListConstraintsForPortfolioInput#PortfolioId
   */
  readonly portfolioId: string;

  /**
   * @schema ListConstraintsForPortfolioInput#ProductId
   */
  readonly productId?: string;

  /**
   * @schema ListConstraintsForPortfolioInput#PageSize
   */
  readonly pageSize?: number;

  /**
   * @schema ListConstraintsForPortfolioInput#PageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema ListConstraintsForPortfolioOutput
 */
export interface ListConstraintsForPortfolioOutput {
  /**
   * @schema ListConstraintsForPortfolioOutput#ConstraintDetails
   */
  readonly constraintDetails?: ConstraintDetail[];

  /**
   * @schema ListConstraintsForPortfolioOutput#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ListLaunchPathsInput
 */
export interface ListLaunchPathsInput {
  /**
   * @schema ListLaunchPathsInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ListLaunchPathsInput#ProductId
   */
  readonly productId: string;

  /**
   * @schema ListLaunchPathsInput#PageSize
   */
  readonly pageSize?: number;

  /**
   * @schema ListLaunchPathsInput#PageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema ListLaunchPathsOutput
 */
export interface ListLaunchPathsOutput {
  /**
   * @schema ListLaunchPathsOutput#LaunchPathSummaries
   */
  readonly launchPathSummaries?: LaunchPathSummary[];

  /**
   * @schema ListLaunchPathsOutput#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ListOrganizationPortfolioAccessInput
 */
export interface ListOrganizationPortfolioAccessInput {
  /**
   * @schema ListOrganizationPortfolioAccessInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ListOrganizationPortfolioAccessInput#PortfolioId
   */
  readonly portfolioId: string;

  /**
   * @schema ListOrganizationPortfolioAccessInput#OrganizationNodeType
   */
  readonly organizationNodeType: string;

  /**
   * @schema ListOrganizationPortfolioAccessInput#PageToken
   */
  readonly pageToken?: string;

  /**
   * @schema ListOrganizationPortfolioAccessInput#PageSize
   */
  readonly pageSize?: number;

}

/**
 * @schema ListOrganizationPortfolioAccessOutput
 */
export interface ListOrganizationPortfolioAccessOutput {
  /**
   * @schema ListOrganizationPortfolioAccessOutput#OrganizationNodes
   */
  readonly organizationNodes?: OrganizationNode[];

  /**
   * @schema ListOrganizationPortfolioAccessOutput#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ListPortfolioAccessInput
 */
export interface ListPortfolioAccessInput {
  /**
   * @schema ListPortfolioAccessInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ListPortfolioAccessInput#PortfolioId
   */
  readonly portfolioId: string;

  /**
   * @schema ListPortfolioAccessInput#OrganizationParentId
   */
  readonly organizationParentId?: string;

  /**
   * @schema ListPortfolioAccessInput#PageToken
   */
  readonly pageToken?: string;

  /**
   * @schema ListPortfolioAccessInput#PageSize
   */
  readonly pageSize?: number;

}

/**
 * @schema ListPortfolioAccessOutput
 */
export interface ListPortfolioAccessOutput {
  /**
   * @schema ListPortfolioAccessOutput#AccountIds
   */
  readonly accountIds?: string[];

  /**
   * @schema ListPortfolioAccessOutput#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ListPortfoliosInput
 */
export interface ListPortfoliosInput {
  /**
   * @schema ListPortfoliosInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ListPortfoliosInput#PageToken
   */
  readonly pageToken?: string;

  /**
   * @schema ListPortfoliosInput#PageSize
   */
  readonly pageSize?: number;

}

/**
 * @schema ListPortfoliosOutput
 */
export interface ListPortfoliosOutput {
  /**
   * @schema ListPortfoliosOutput#PortfolioDetails
   */
  readonly portfolioDetails?: PortfolioDetail[];

  /**
   * @schema ListPortfoliosOutput#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ListPortfoliosForProductInput
 */
export interface ListPortfoliosForProductInput {
  /**
   * @schema ListPortfoliosForProductInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ListPortfoliosForProductInput#ProductId
   */
  readonly productId: string;

  /**
   * @schema ListPortfoliosForProductInput#PageToken
   */
  readonly pageToken?: string;

  /**
   * @schema ListPortfoliosForProductInput#PageSize
   */
  readonly pageSize?: number;

}

/**
 * @schema ListPortfoliosForProductOutput
 */
export interface ListPortfoliosForProductOutput {
  /**
   * @schema ListPortfoliosForProductOutput#PortfolioDetails
   */
  readonly portfolioDetails?: PortfolioDetail[];

  /**
   * @schema ListPortfoliosForProductOutput#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ListPrincipalsForPortfolioInput
 */
export interface ListPrincipalsForPortfolioInput {
  /**
   * @schema ListPrincipalsForPortfolioInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ListPrincipalsForPortfolioInput#PortfolioId
   */
  readonly portfolioId: string;

  /**
   * @schema ListPrincipalsForPortfolioInput#PageSize
   */
  readonly pageSize?: number;

  /**
   * @schema ListPrincipalsForPortfolioInput#PageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema ListPrincipalsForPortfolioOutput
 */
export interface ListPrincipalsForPortfolioOutput {
  /**
   * @schema ListPrincipalsForPortfolioOutput#Principals
   */
  readonly principals?: Principal[];

  /**
   * @schema ListPrincipalsForPortfolioOutput#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ListProvisionedProductPlansInput
 */
export interface ListProvisionedProductPlansInput {
  /**
   * @schema ListProvisionedProductPlansInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ListProvisionedProductPlansInput#ProvisionProductId
   */
  readonly provisionProductId?: string;

  /**
   * @schema ListProvisionedProductPlansInput#PageSize
   */
  readonly pageSize?: number;

  /**
   * @schema ListProvisionedProductPlansInput#PageToken
   */
  readonly pageToken?: string;

  /**
   * @schema ListProvisionedProductPlansInput#AccessLevelFilter
   */
  readonly accessLevelFilter?: AccessLevelFilter;

}

/**
 * @schema ListProvisionedProductPlansOutput
 */
export interface ListProvisionedProductPlansOutput {
  /**
   * @schema ListProvisionedProductPlansOutput#ProvisionedProductPlans
   */
  readonly provisionedProductPlans?: ProvisionedProductPlanSummary[];

  /**
   * @schema ListProvisionedProductPlansOutput#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ListProvisioningArtifactsInput
 */
export interface ListProvisioningArtifactsInput {
  /**
   * @schema ListProvisioningArtifactsInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ListProvisioningArtifactsInput#ProductId
   */
  readonly productId: string;

}

/**
 * @schema ListProvisioningArtifactsOutput
 */
export interface ListProvisioningArtifactsOutput {
  /**
   * @schema ListProvisioningArtifactsOutput#ProvisioningArtifactDetails
   */
  readonly provisioningArtifactDetails?: ProvisioningArtifactDetail[];

  /**
   * @schema ListProvisioningArtifactsOutput#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ListProvisioningArtifactsForServiceActionInput
 */
export interface ListProvisioningArtifactsForServiceActionInput {
  /**
   * @schema ListProvisioningArtifactsForServiceActionInput#ServiceActionId
   */
  readonly serviceActionId: string;

  /**
   * @schema ListProvisioningArtifactsForServiceActionInput#PageSize
   */
  readonly pageSize?: number;

  /**
   * @schema ListProvisioningArtifactsForServiceActionInput#PageToken
   */
  readonly pageToken?: string;

  /**
   * @schema ListProvisioningArtifactsForServiceActionInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

}

/**
 * @schema ListProvisioningArtifactsForServiceActionOutput
 */
export interface ListProvisioningArtifactsForServiceActionOutput {
  /**
   * @schema ListProvisioningArtifactsForServiceActionOutput#ProvisioningArtifactViews
   */
  readonly provisioningArtifactViews?: ProvisioningArtifactView[];

  /**
   * @schema ListProvisioningArtifactsForServiceActionOutput#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ListRecordHistoryInput
 */
export interface ListRecordHistoryInput {
  /**
   * @schema ListRecordHistoryInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ListRecordHistoryInput#AccessLevelFilter
   */
  readonly accessLevelFilter?: AccessLevelFilter;

  /**
   * @schema ListRecordHistoryInput#SearchFilter
   */
  readonly searchFilter?: ListRecordHistorySearchFilter;

  /**
   * @schema ListRecordHistoryInput#PageSize
   */
  readonly pageSize?: number;

  /**
   * @schema ListRecordHistoryInput#PageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema ListRecordHistoryOutput
 */
export interface ListRecordHistoryOutput {
  /**
   * @schema ListRecordHistoryOutput#RecordDetails
   */
  readonly recordDetails?: RecordDetail[];

  /**
   * @schema ListRecordHistoryOutput#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ListResourcesForTagOptionInput
 */
export interface ListResourcesForTagOptionInput {
  /**
   * @schema ListResourcesForTagOptionInput#TagOptionId
   */
  readonly tagOptionId: string;

  /**
   * @schema ListResourcesForTagOptionInput#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema ListResourcesForTagOptionInput#PageSize
   */
  readonly pageSize?: number;

  /**
   * @schema ListResourcesForTagOptionInput#PageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema ListResourcesForTagOptionOutput
 */
export interface ListResourcesForTagOptionOutput {
  /**
   * @schema ListResourcesForTagOptionOutput#ResourceDetails
   */
  readonly resourceDetails?: ResourceDetail[];

  /**
   * @schema ListResourcesForTagOptionOutput#PageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema ListServiceActionsInput
 */
export interface ListServiceActionsInput {
  /**
   * @schema ListServiceActionsInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ListServiceActionsInput#PageSize
   */
  readonly pageSize?: number;

  /**
   * @schema ListServiceActionsInput#PageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema ListServiceActionsOutput
 */
export interface ListServiceActionsOutput {
  /**
   * @schema ListServiceActionsOutput#ServiceActionSummaries
   */
  readonly serviceActionSummaries?: ServiceActionSummary[];

  /**
   * @schema ListServiceActionsOutput#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ListServiceActionsForProvisioningArtifactInput
 */
export interface ListServiceActionsForProvisioningArtifactInput {
  /**
   * @schema ListServiceActionsForProvisioningArtifactInput#ProductId
   */
  readonly productId: string;

  /**
   * @schema ListServiceActionsForProvisioningArtifactInput#ProvisioningArtifactId
   */
  readonly provisioningArtifactId: string;

  /**
   * @schema ListServiceActionsForProvisioningArtifactInput#PageSize
   */
  readonly pageSize?: number;

  /**
   * @schema ListServiceActionsForProvisioningArtifactInput#PageToken
   */
  readonly pageToken?: string;

  /**
   * @schema ListServiceActionsForProvisioningArtifactInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

}

/**
 * @schema ListServiceActionsForProvisioningArtifactOutput
 */
export interface ListServiceActionsForProvisioningArtifactOutput {
  /**
   * @schema ListServiceActionsForProvisioningArtifactOutput#ServiceActionSummaries
   */
  readonly serviceActionSummaries?: ServiceActionSummary[];

  /**
   * @schema ListServiceActionsForProvisioningArtifactOutput#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ListStackInstancesForProvisionedProductInput
 */
export interface ListStackInstancesForProvisionedProductInput {
  /**
   * @schema ListStackInstancesForProvisionedProductInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ListStackInstancesForProvisionedProductInput#ProvisionedProductId
   */
  readonly provisionedProductId: string;

  /**
   * @schema ListStackInstancesForProvisionedProductInput#PageToken
   */
  readonly pageToken?: string;

  /**
   * @schema ListStackInstancesForProvisionedProductInput#PageSize
   */
  readonly pageSize?: number;

}

/**
 * @schema ListStackInstancesForProvisionedProductOutput
 */
export interface ListStackInstancesForProvisionedProductOutput {
  /**
   * @schema ListStackInstancesForProvisionedProductOutput#StackInstances
   */
  readonly stackInstances?: StackInstance[];

  /**
   * @schema ListStackInstancesForProvisionedProductOutput#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ListTagOptionsInput
 */
export interface ListTagOptionsInput {
  /**
   * @schema ListTagOptionsInput#Filters
   */
  readonly filters?: ListTagOptionsFilters;

  /**
   * @schema ListTagOptionsInput#PageSize
   */
  readonly pageSize?: number;

  /**
   * @schema ListTagOptionsInput#PageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema ListTagOptionsOutput
 */
export interface ListTagOptionsOutput {
  /**
   * @schema ListTagOptionsOutput#TagOptionDetails
   */
  readonly tagOptionDetails?: TagOptionDetail[];

  /**
   * @schema ListTagOptionsOutput#PageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema ProvisionProductInput
 */
export interface ProvisionProductInput {
  /**
   * @schema ProvisionProductInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ProvisionProductInput#ProductId
   */
  readonly productId?: string;

  /**
   * @schema ProvisionProductInput#ProductName
   */
  readonly productName?: string;

  /**
   * @schema ProvisionProductInput#ProvisioningArtifactId
   */
  readonly provisioningArtifactId?: string;

  /**
   * @schema ProvisionProductInput#ProvisioningArtifactName
   */
  readonly provisioningArtifactName?: string;

  /**
   * @schema ProvisionProductInput#PathId
   */
  readonly pathId?: string;

  /**
   * @schema ProvisionProductInput#PathName
   */
  readonly pathName?: string;

  /**
   * @schema ProvisionProductInput#ProvisionedProductName
   */
  readonly provisionedProductName: string;

  /**
   * @schema ProvisionProductInput#ProvisioningParameters
   */
  readonly provisioningParameters?: ProvisioningParameter[];

  /**
   * @schema ProvisionProductInput#ProvisioningPreferences
   */
  readonly provisioningPreferences?: ProvisioningPreferences;

  /**
   * @schema ProvisionProductInput#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema ProvisionProductInput#NotificationArns
   */
  readonly notificationArns?: string[];

  /**
   * @schema ProvisionProductInput#ProvisionToken
   */
  readonly provisionToken: string;

}

/**
 * @schema ProvisionProductOutput
 */
export interface ProvisionProductOutput {
  /**
   * @schema ProvisionProductOutput#RecordDetail
   */
  readonly recordDetail?: RecordDetail;

}

/**
 * @schema RejectPortfolioShareInput
 */
export interface RejectPortfolioShareInput {
  /**
   * @schema RejectPortfolioShareInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema RejectPortfolioShareInput#PortfolioId
   */
  readonly portfolioId: string;

  /**
   * @schema RejectPortfolioShareInput#PortfolioShareType
   */
  readonly portfolioShareType?: string;

}

/**
 * @schema RejectPortfolioShareOutput
 */
export interface RejectPortfolioShareOutput {
}

/**
 * @schema ScanProvisionedProductsInput
 */
export interface ScanProvisionedProductsInput {
  /**
   * @schema ScanProvisionedProductsInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ScanProvisionedProductsInput#AccessLevelFilter
   */
  readonly accessLevelFilter?: AccessLevelFilter;

  /**
   * @schema ScanProvisionedProductsInput#PageSize
   */
  readonly pageSize?: number;

  /**
   * @schema ScanProvisionedProductsInput#PageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema ScanProvisionedProductsOutput
 */
export interface ScanProvisionedProductsOutput {
  /**
   * @schema ScanProvisionedProductsOutput#ProvisionedProducts
   */
  readonly provisionedProducts?: ProvisionedProductDetail[];

  /**
   * @schema ScanProvisionedProductsOutput#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema SearchProductsInput
 */
export interface SearchProductsInput {
  /**
   * @schema SearchProductsInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema SearchProductsInput#Filters
   */
  readonly filters?: { [key: string]: string[] };

  /**
   * @schema SearchProductsInput#PageSize
   */
  readonly pageSize?: number;

  /**
   * @schema SearchProductsInput#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema SearchProductsInput#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema SearchProductsInput#PageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema SearchProductsOutput
 */
export interface SearchProductsOutput {
  /**
   * @schema SearchProductsOutput#ProductViewSummaries
   */
  readonly productViewSummaries?: ProductViewSummary[];

  /**
   * @schema SearchProductsOutput#ProductViewAggregations
   */
  readonly productViewAggregations?: { [key: string]: ProductViewAggregationValue[] };

  /**
   * @schema SearchProductsOutput#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema SearchProductsAsAdminInput
 */
export interface SearchProductsAsAdminInput {
  /**
   * @schema SearchProductsAsAdminInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema SearchProductsAsAdminInput#PortfolioId
   */
  readonly portfolioId?: string;

  /**
   * @schema SearchProductsAsAdminInput#Filters
   */
  readonly filters?: { [key: string]: string[] };

  /**
   * @schema SearchProductsAsAdminInput#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema SearchProductsAsAdminInput#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema SearchProductsAsAdminInput#PageToken
   */
  readonly pageToken?: string;

  /**
   * @schema SearchProductsAsAdminInput#PageSize
   */
  readonly pageSize?: number;

  /**
   * @schema SearchProductsAsAdminInput#ProductSource
   */
  readonly productSource?: string;

}

/**
 * @schema SearchProductsAsAdminOutput
 */
export interface SearchProductsAsAdminOutput {
  /**
   * @schema SearchProductsAsAdminOutput#ProductViewDetails
   */
  readonly productViewDetails?: ProductViewDetail[];

  /**
   * @schema SearchProductsAsAdminOutput#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema SearchProvisionedProductsInput
 */
export interface SearchProvisionedProductsInput {
  /**
   * @schema SearchProvisionedProductsInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema SearchProvisionedProductsInput#AccessLevelFilter
   */
  readonly accessLevelFilter?: AccessLevelFilter;

  /**
   * @schema SearchProvisionedProductsInput#Filters
   */
  readonly filters?: { [key: string]: string[] };

  /**
   * @schema SearchProvisionedProductsInput#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema SearchProvisionedProductsInput#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema SearchProvisionedProductsInput#PageSize
   */
  readonly pageSize?: number;

  /**
   * @schema SearchProvisionedProductsInput#PageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema SearchProvisionedProductsOutput
 */
export interface SearchProvisionedProductsOutput {
  /**
   * @schema SearchProvisionedProductsOutput#ProvisionedProducts
   */
  readonly provisionedProducts?: ProvisionedProductAttribute[];

  /**
   * @schema SearchProvisionedProductsOutput#TotalResultsCount
   */
  readonly totalResultsCount?: number;

  /**
   * @schema SearchProvisionedProductsOutput#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema TerminateProvisionedProductInput
 */
export interface TerminateProvisionedProductInput {
  /**
   * @schema TerminateProvisionedProductInput#ProvisionedProductName
   */
  readonly provisionedProductName?: string;

  /**
   * @schema TerminateProvisionedProductInput#ProvisionedProductId
   */
  readonly provisionedProductId?: string;

  /**
   * @schema TerminateProvisionedProductInput#TerminateToken
   */
  readonly terminateToken: string;

  /**
   * @schema TerminateProvisionedProductInput#IgnoreErrors
   */
  readonly ignoreErrors?: boolean;

  /**
   * @schema TerminateProvisionedProductInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema TerminateProvisionedProductInput#RetainPhysicalResources
   */
  readonly retainPhysicalResources?: boolean;

}

/**
 * @schema TerminateProvisionedProductOutput
 */
export interface TerminateProvisionedProductOutput {
  /**
   * @schema TerminateProvisionedProductOutput#RecordDetail
   */
  readonly recordDetail?: RecordDetail;

}

/**
 * @schema UpdateConstraintInput
 */
export interface UpdateConstraintInput {
  /**
   * @schema UpdateConstraintInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema UpdateConstraintInput#Id
   */
  readonly id: string;

  /**
   * @schema UpdateConstraintInput#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateConstraintInput#Parameters
   */
  readonly parameters?: string;

}

/**
 * @schema UpdateConstraintOutput
 */
export interface UpdateConstraintOutput {
  /**
   * @schema UpdateConstraintOutput#ConstraintDetail
   */
  readonly constraintDetail?: ConstraintDetail;

  /**
   * @schema UpdateConstraintOutput#ConstraintParameters
   */
  readonly constraintParameters?: string;

  /**
   * @schema UpdateConstraintOutput#Status
   */
  readonly status?: string;

}

/**
 * @schema UpdatePortfolioInput
 */
export interface UpdatePortfolioInput {
  /**
   * @schema UpdatePortfolioInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema UpdatePortfolioInput#Id
   */
  readonly id: string;

  /**
   * @schema UpdatePortfolioInput#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema UpdatePortfolioInput#Description
   */
  readonly description?: string;

  /**
   * @schema UpdatePortfolioInput#ProviderName
   */
  readonly providerName?: string;

  /**
   * @schema UpdatePortfolioInput#AddTags
   */
  readonly addTags?: Tag[];

  /**
   * @schema UpdatePortfolioInput#RemoveTags
   */
  readonly removeTags?: string[];

}

/**
 * @schema UpdatePortfolioOutput
 */
export interface UpdatePortfolioOutput {
  /**
   * @schema UpdatePortfolioOutput#PortfolioDetail
   */
  readonly portfolioDetail?: PortfolioDetail;

  /**
   * @schema UpdatePortfolioOutput#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema UpdateProductInput
 */
export interface UpdateProductInput {
  /**
   * @schema UpdateProductInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema UpdateProductInput#Id
   */
  readonly id: string;

  /**
   * @schema UpdateProductInput#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateProductInput#Owner
   */
  readonly owner?: string;

  /**
   * @schema UpdateProductInput#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateProductInput#Distributor
   */
  readonly distributor?: string;

  /**
   * @schema UpdateProductInput#SupportDescription
   */
  readonly supportDescription?: string;

  /**
   * @schema UpdateProductInput#SupportEmail
   */
  readonly supportEmail?: string;

  /**
   * @schema UpdateProductInput#SupportUrl
   */
  readonly supportUrl?: string;

  /**
   * @schema UpdateProductInput#AddTags
   */
  readonly addTags?: Tag[];

  /**
   * @schema UpdateProductInput#RemoveTags
   */
  readonly removeTags?: string[];

}

/**
 * @schema UpdateProductOutput
 */
export interface UpdateProductOutput {
  /**
   * @schema UpdateProductOutput#ProductViewDetail
   */
  readonly productViewDetail?: ProductViewDetail;

  /**
   * @schema UpdateProductOutput#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema UpdateProvisionedProductInput
 */
export interface UpdateProvisionedProductInput {
  /**
   * @schema UpdateProvisionedProductInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema UpdateProvisionedProductInput#ProvisionedProductName
   */
  readonly provisionedProductName?: string;

  /**
   * @schema UpdateProvisionedProductInput#ProvisionedProductId
   */
  readonly provisionedProductId?: string;

  /**
   * @schema UpdateProvisionedProductInput#ProductId
   */
  readonly productId?: string;

  /**
   * @schema UpdateProvisionedProductInput#ProductName
   */
  readonly productName?: string;

  /**
   * @schema UpdateProvisionedProductInput#ProvisioningArtifactId
   */
  readonly provisioningArtifactId?: string;

  /**
   * @schema UpdateProvisionedProductInput#ProvisioningArtifactName
   */
  readonly provisioningArtifactName?: string;

  /**
   * @schema UpdateProvisionedProductInput#PathId
   */
  readonly pathId?: string;

  /**
   * @schema UpdateProvisionedProductInput#PathName
   */
  readonly pathName?: string;

  /**
   * @schema UpdateProvisionedProductInput#ProvisioningParameters
   */
  readonly provisioningParameters?: UpdateProvisioningParameter[];

  /**
   * @schema UpdateProvisionedProductInput#ProvisioningPreferences
   */
  readonly provisioningPreferences?: UpdateProvisioningPreferences;

  /**
   * @schema UpdateProvisionedProductInput#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema UpdateProvisionedProductInput#UpdateToken
   */
  readonly updateToken: string;

}

/**
 * @schema UpdateProvisionedProductOutput
 */
export interface UpdateProvisionedProductOutput {
  /**
   * @schema UpdateProvisionedProductOutput#RecordDetail
   */
  readonly recordDetail?: RecordDetail;

}

/**
 * @schema UpdateProvisionedProductPropertiesInput
 */
export interface UpdateProvisionedProductPropertiesInput {
  /**
   * @schema UpdateProvisionedProductPropertiesInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema UpdateProvisionedProductPropertiesInput#ProvisionedProductId
   */
  readonly provisionedProductId: string;

  /**
   * @schema UpdateProvisionedProductPropertiesInput#ProvisionedProductProperties
   */
  readonly provisionedProductProperties: { [key: string]: string };

  /**
   * @schema UpdateProvisionedProductPropertiesInput#IdempotencyToken
   */
  readonly idempotencyToken: string;

}

/**
 * @schema UpdateProvisionedProductPropertiesOutput
 */
export interface UpdateProvisionedProductPropertiesOutput {
  /**
   * @schema UpdateProvisionedProductPropertiesOutput#ProvisionedProductId
   */
  readonly provisionedProductId?: string;

  /**
   * @schema UpdateProvisionedProductPropertiesOutput#ProvisionedProductProperties
   */
  readonly provisionedProductProperties?: { [key: string]: string };

  /**
   * @schema UpdateProvisionedProductPropertiesOutput#RecordId
   */
  readonly recordId?: string;

  /**
   * @schema UpdateProvisionedProductPropertiesOutput#Status
   */
  readonly status?: string;

}

/**
 * @schema UpdateProvisioningArtifactInput
 */
export interface UpdateProvisioningArtifactInput {
  /**
   * @schema UpdateProvisioningArtifactInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema UpdateProvisioningArtifactInput#ProductId
   */
  readonly productId: string;

  /**
   * @schema UpdateProvisioningArtifactInput#ProvisioningArtifactId
   */
  readonly provisioningArtifactId: string;

  /**
   * @schema UpdateProvisioningArtifactInput#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateProvisioningArtifactInput#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateProvisioningArtifactInput#Active
   */
  readonly active?: boolean;

  /**
   * @schema UpdateProvisioningArtifactInput#Guidance
   */
  readonly guidance?: string;

}

/**
 * @schema UpdateProvisioningArtifactOutput
 */
export interface UpdateProvisioningArtifactOutput {
  /**
   * @schema UpdateProvisioningArtifactOutput#ProvisioningArtifactDetail
   */
  readonly provisioningArtifactDetail?: ProvisioningArtifactDetail;

  /**
   * @schema UpdateProvisioningArtifactOutput#Info
   */
  readonly info?: { [key: string]: string };

  /**
   * @schema UpdateProvisioningArtifactOutput#Status
   */
  readonly status?: string;

}

/**
 * @schema UpdateServiceActionInput
 */
export interface UpdateServiceActionInput {
  /**
   * @schema UpdateServiceActionInput#Id
   */
  readonly id: string;

  /**
   * @schema UpdateServiceActionInput#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateServiceActionInput#Definition
   */
  readonly definition?: { [key: string]: string };

  /**
   * @schema UpdateServiceActionInput#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateServiceActionInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

}

/**
 * @schema UpdateServiceActionOutput
 */
export interface UpdateServiceActionOutput {
  /**
   * @schema UpdateServiceActionOutput#ServiceActionDetail
   */
  readonly serviceActionDetail?: ServiceActionDetail;

}

/**
 * @schema UpdateTagOptionInput
 */
export interface UpdateTagOptionInput {
  /**
   * @schema UpdateTagOptionInput#Id
   */
  readonly id: string;

  /**
   * @schema UpdateTagOptionInput#Value
   */
  readonly value?: string;

  /**
   * @schema UpdateTagOptionInput#Active
   */
  readonly active?: boolean;

}

/**
 * @schema UpdateTagOptionOutput
 */
export interface UpdateTagOptionOutput {
  /**
   * @schema UpdateTagOptionOutput#TagOptionDetail
   */
  readonly tagOptionDetail?: TagOptionDetail;

}

/**
 * @schema ServiceActionAssociation
 */
export interface ServiceActionAssociation {
  /**
   * @schema ServiceActionAssociation#ServiceActionId
   */
  readonly serviceActionId: string;

  /**
   * @schema ServiceActionAssociation#ProductId
   */
  readonly productId: string;

  /**
   * @schema ServiceActionAssociation#ProvisioningArtifactId
   */
  readonly provisioningArtifactId: string;

}

/**
 * @schema FailedServiceActionAssociation
 */
export interface FailedServiceActionAssociation {
  /**
   * @schema FailedServiceActionAssociation#ServiceActionId
   */
  readonly serviceActionId?: string;

  /**
   * @schema FailedServiceActionAssociation#ProductId
   */
  readonly productId?: string;

  /**
   * @schema FailedServiceActionAssociation#ProvisioningArtifactId
   */
  readonly provisioningArtifactId?: string;

  /**
   * @schema FailedServiceActionAssociation#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema FailedServiceActionAssociation#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema ConstraintDetail
 */
export interface ConstraintDetail {
  /**
   * @schema ConstraintDetail#ConstraintId
   */
  readonly constraintId?: string;

  /**
   * @schema ConstraintDetail#Type
   */
  readonly type?: string;

  /**
   * @schema ConstraintDetail#Description
   */
  readonly description?: string;

  /**
   * @schema ConstraintDetail#Owner
   */
  readonly owner?: string;

  /**
   * @schema ConstraintDetail#ProductId
   */
  readonly productId?: string;

  /**
   * @schema ConstraintDetail#PortfolioId
   */
  readonly portfolioId?: string;

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#Key
   */
  readonly key: string;

  /**
   * @schema Tag#Value
   */
  readonly value: string;

}

/**
 * @schema PortfolioDetail
 */
export interface PortfolioDetail {
  /**
   * @schema PortfolioDetail#Id
   */
  readonly id?: string;

  /**
   * @schema PortfolioDetail#ARN
   */
  readonly arn?: string;

  /**
   * @schema PortfolioDetail#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema PortfolioDetail#Description
   */
  readonly description?: string;

  /**
   * @schema PortfolioDetail#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema PortfolioDetail#ProviderName
   */
  readonly providerName?: string;

}

/**
 * @schema OrganizationNode
 */
export interface OrganizationNode {
  /**
   * @schema OrganizationNode#Type
   */
  readonly type?: string;

  /**
   * @schema OrganizationNode#Value
   */
  readonly value?: string;

}

/**
 * @schema ProvisioningArtifactProperties
 */
export interface ProvisioningArtifactProperties {
  /**
   * @schema ProvisioningArtifactProperties#Name
   */
  readonly name?: string;

  /**
   * @schema ProvisioningArtifactProperties#Description
   */
  readonly description?: string;

  /**
   * @schema ProvisioningArtifactProperties#Info
   */
  readonly info: { [key: string]: string };

  /**
   * @schema ProvisioningArtifactProperties#Type
   */
  readonly type?: string;

  /**
   * @schema ProvisioningArtifactProperties#DisableTemplateValidation
   */
  readonly disableTemplateValidation?: boolean;

}

/**
 * @schema ProductViewDetail
 */
export interface ProductViewDetail {
  /**
   * @schema ProductViewDetail#ProductViewSummary
   */
  readonly productViewSummary?: ProductViewSummary;

  /**
   * @schema ProductViewDetail#Status
   */
  readonly status?: string;

  /**
   * @schema ProductViewDetail#ProductARN
   */
  readonly productArn?: string;

  /**
   * @schema ProductViewDetail#CreatedTime
   */
  readonly createdTime?: string;

}

/**
 * @schema ProvisioningArtifactDetail
 */
export interface ProvisioningArtifactDetail {
  /**
   * @schema ProvisioningArtifactDetail#Id
   */
  readonly id?: string;

  /**
   * @schema ProvisioningArtifactDetail#Name
   */
  readonly name?: string;

  /**
   * @schema ProvisioningArtifactDetail#Description
   */
  readonly description?: string;

  /**
   * @schema ProvisioningArtifactDetail#Type
   */
  readonly type?: string;

  /**
   * @schema ProvisioningArtifactDetail#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema ProvisioningArtifactDetail#Active
   */
  readonly active?: boolean;

  /**
   * @schema ProvisioningArtifactDetail#Guidance
   */
  readonly guidance?: string;

}

/**
 * @schema UpdateProvisioningParameter
 */
export interface UpdateProvisioningParameter {
  /**
   * @schema UpdateProvisioningParameter#Key
   */
  readonly key?: string;

  /**
   * @schema UpdateProvisioningParameter#Value
   */
  readonly value?: string;

  /**
   * @schema UpdateProvisioningParameter#UsePreviousValue
   */
  readonly usePreviousValue?: boolean;

}

/**
 * @schema ServiceActionDetail
 */
export interface ServiceActionDetail {
  /**
   * @schema ServiceActionDetail#ServiceActionSummary
   */
  readonly serviceActionSummary?: ServiceActionSummary;

  /**
   * @schema ServiceActionDetail#Definition
   */
  readonly definition?: { [key: string]: string };

}

/**
 * @schema TagOptionDetail
 */
export interface TagOptionDetail {
  /**
   * @schema TagOptionDetail#Key
   */
  readonly key?: string;

  /**
   * @schema TagOptionDetail#Value
   */
  readonly value?: string;

  /**
   * @schema TagOptionDetail#Active
   */
  readonly active?: boolean;

  /**
   * @schema TagOptionDetail#Id
   */
  readonly id?: string;

}

/**
 * @schema BudgetDetail
 */
export interface BudgetDetail {
  /**
   * @schema BudgetDetail#BudgetName
   */
  readonly budgetName?: string;

}

/**
 * @schema ShareDetails
 */
export interface ShareDetails {
  /**
   * @schema ShareDetails#SuccessfulShares
   */
  readonly successfulShares?: string[];

  /**
   * @schema ShareDetails#ShareErrors
   */
  readonly shareErrors?: ShareError[];

}

/**
 * @schema ProductViewSummary
 */
export interface ProductViewSummary {
  /**
   * @schema ProductViewSummary#Id
   */
  readonly id?: string;

  /**
   * @schema ProductViewSummary#ProductId
   */
  readonly productId?: string;

  /**
   * @schema ProductViewSummary#Name
   */
  readonly name?: string;

  /**
   * @schema ProductViewSummary#Owner
   */
  readonly owner?: string;

  /**
   * @schema ProductViewSummary#ShortDescription
   */
  readonly shortDescription?: string;

  /**
   * @schema ProductViewSummary#Type
   */
  readonly type?: string;

  /**
   * @schema ProductViewSummary#Distributor
   */
  readonly distributor?: string;

  /**
   * @schema ProductViewSummary#HasDefaultPath
   */
  readonly hasDefaultPath?: boolean;

  /**
   * @schema ProductViewSummary#SupportEmail
   */
  readonly supportEmail?: string;

  /**
   * @schema ProductViewSummary#SupportDescription
   */
  readonly supportDescription?: string;

  /**
   * @schema ProductViewSummary#SupportUrl
   */
  readonly supportUrl?: string;

}

/**
 * @schema ProvisioningArtifact
 */
export interface ProvisioningArtifact {
  /**
   * @schema ProvisioningArtifact#Id
   */
  readonly id?: string;

  /**
   * @schema ProvisioningArtifact#Name
   */
  readonly name?: string;

  /**
   * @schema ProvisioningArtifact#Description
   */
  readonly description?: string;

  /**
   * @schema ProvisioningArtifact#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema ProvisioningArtifact#Guidance
   */
  readonly guidance?: string;

}

/**
 * @schema LaunchPath
 */
export interface LaunchPath {
  /**
   * @schema LaunchPath#Id
   */
  readonly id?: string;

  /**
   * @schema LaunchPath#Name
   */
  readonly name?: string;

}

/**
 * @schema ProvisioningArtifactSummary
 */
export interface ProvisioningArtifactSummary {
  /**
   * @schema ProvisioningArtifactSummary#Id
   */
  readonly id?: string;

  /**
   * @schema ProvisioningArtifactSummary#Name
   */
  readonly name?: string;

  /**
   * @schema ProvisioningArtifactSummary#Description
   */
  readonly description?: string;

  /**
   * @schema ProvisioningArtifactSummary#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema ProvisioningArtifactSummary#ProvisioningArtifactMetadata
   */
  readonly provisioningArtifactMetadata?: { [key: string]: string };

}

/**
 * @schema ProvisionedProductDetail
 */
export interface ProvisionedProductDetail {
  /**
   * @schema ProvisionedProductDetail#Name
   */
  readonly name?: string;

  /**
   * @schema ProvisionedProductDetail#Arn
   */
  readonly arn?: string;

  /**
   * @schema ProvisionedProductDetail#Type
   */
  readonly type?: string;

  /**
   * @schema ProvisionedProductDetail#Id
   */
  readonly id?: string;

  /**
   * @schema ProvisionedProductDetail#Status
   */
  readonly status?: string;

  /**
   * @schema ProvisionedProductDetail#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema ProvisionedProductDetail#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema ProvisionedProductDetail#IdempotencyToken
   */
  readonly idempotencyToken?: string;

  /**
   * @schema ProvisionedProductDetail#LastRecordId
   */
  readonly lastRecordId?: string;

  /**
   * @schema ProvisionedProductDetail#LastProvisioningRecordId
   */
  readonly lastProvisioningRecordId?: string;

  /**
   * @schema ProvisionedProductDetail#LastSuccessfulProvisioningRecordId
   */
  readonly lastSuccessfulProvisioningRecordId?: string;

  /**
   * @schema ProvisionedProductDetail#ProductId
   */
  readonly productId?: string;

  /**
   * @schema ProvisionedProductDetail#ProvisioningArtifactId
   */
  readonly provisioningArtifactId?: string;

  /**
   * @schema ProvisionedProductDetail#LaunchRoleArn
   */
  readonly launchRoleArn?: string;

}

/**
 * @schema CloudWatchDashboard
 */
export interface CloudWatchDashboard {
  /**
   * @schema CloudWatchDashboard#Name
   */
  readonly name?: string;

}

/**
 * @schema ProvisionedProductPlanDetails
 */
export interface ProvisionedProductPlanDetails {
  /**
   * @schema ProvisionedProductPlanDetails#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema ProvisionedProductPlanDetails#PathId
   */
  readonly pathId?: string;

  /**
   * @schema ProvisionedProductPlanDetails#ProductId
   */
  readonly productId?: string;

  /**
   * @schema ProvisionedProductPlanDetails#PlanName
   */
  readonly planName?: string;

  /**
   * @schema ProvisionedProductPlanDetails#PlanId
   */
  readonly planId?: string;

  /**
   * @schema ProvisionedProductPlanDetails#ProvisionProductId
   */
  readonly provisionProductId?: string;

  /**
   * @schema ProvisionedProductPlanDetails#ProvisionProductName
   */
  readonly provisionProductName?: string;

  /**
   * @schema ProvisionedProductPlanDetails#PlanType
   */
  readonly planType?: string;

  /**
   * @schema ProvisionedProductPlanDetails#ProvisioningArtifactId
   */
  readonly provisioningArtifactId?: string;

  /**
   * @schema ProvisionedProductPlanDetails#Status
   */
  readonly status?: string;

  /**
   * @schema ProvisionedProductPlanDetails#UpdatedTime
   */
  readonly updatedTime?: string;

  /**
   * @schema ProvisionedProductPlanDetails#NotificationArns
   */
  readonly notificationArns?: string[];

  /**
   * @schema ProvisionedProductPlanDetails#ProvisioningParameters
   */
  readonly provisioningParameters?: UpdateProvisioningParameter[];

  /**
   * @schema ProvisionedProductPlanDetails#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema ProvisionedProductPlanDetails#StatusMessage
   */
  readonly statusMessage?: string;

}

/**
 * @schema ResourceChange
 */
export interface ResourceChange {
  /**
   * @schema ResourceChange#Action
   */
  readonly action?: string;

  /**
   * @schema ResourceChange#LogicalResourceId
   */
  readonly logicalResourceId?: string;

  /**
   * @schema ResourceChange#PhysicalResourceId
   */
  readonly physicalResourceId?: string;

  /**
   * @schema ResourceChange#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema ResourceChange#Replacement
   */
  readonly replacement?: string;

  /**
   * @schema ResourceChange#Scope
   */
  readonly scope?: string[];

  /**
   * @schema ResourceChange#Details
   */
  readonly details?: ResourceChangeDetail[];

}

/**
 * @schema ProvisioningArtifactParameter
 */
export interface ProvisioningArtifactParameter {
  /**
   * @schema ProvisioningArtifactParameter#ParameterKey
   */
  readonly parameterKey?: string;

  /**
   * @schema ProvisioningArtifactParameter#DefaultValue
   */
  readonly defaultValue?: string;

  /**
   * @schema ProvisioningArtifactParameter#ParameterType
   */
  readonly parameterType?: string;

  /**
   * @schema ProvisioningArtifactParameter#IsNoEcho
   */
  readonly isNoEcho?: boolean;

  /**
   * @schema ProvisioningArtifactParameter#Description
   */
  readonly description?: string;

  /**
   * @schema ProvisioningArtifactParameter#ParameterConstraints
   */
  readonly parameterConstraints?: ParameterConstraints;

}

/**
 * @schema ConstraintSummary
 */
export interface ConstraintSummary {
  /**
   * @schema ConstraintSummary#Type
   */
  readonly type?: string;

  /**
   * @schema ConstraintSummary#Description
   */
  readonly description?: string;

}

/**
 * @schema UsageInstruction
 */
export interface UsageInstruction {
  /**
   * @schema UsageInstruction#Type
   */
  readonly type?: string;

  /**
   * @schema UsageInstruction#Value
   */
  readonly value?: string;

}

/**
 * @schema TagOptionSummary
 */
export interface TagOptionSummary {
  /**
   * @schema TagOptionSummary#Key
   */
  readonly key?: string;

  /**
   * @schema TagOptionSummary#Values
   */
  readonly values?: string[];

}

/**
 * @schema ProvisioningArtifactPreferences
 */
export interface ProvisioningArtifactPreferences {
  /**
   * @schema ProvisioningArtifactPreferences#StackSetAccounts
   */
  readonly stackSetAccounts?: string[];

  /**
   * @schema ProvisioningArtifactPreferences#StackSetRegions
   */
  readonly stackSetRegions?: string[];

}

/**
 * @schema ProvisioningArtifactOutput
 */
export interface ProvisioningArtifactOutput {
  /**
   * @schema ProvisioningArtifactOutput#Key
   */
  readonly key?: string;

  /**
   * @schema ProvisioningArtifactOutput#Description
   */
  readonly description?: string;

}

/**
 * @schema RecordDetail
 */
export interface RecordDetail {
  /**
   * @schema RecordDetail#RecordId
   */
  readonly recordId?: string;

  /**
   * @schema RecordDetail#ProvisionedProductName
   */
  readonly provisionedProductName?: string;

  /**
   * @schema RecordDetail#Status
   */
  readonly status?: string;

  /**
   * @schema RecordDetail#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema RecordDetail#UpdatedTime
   */
  readonly updatedTime?: string;

  /**
   * @schema RecordDetail#ProvisionedProductType
   */
  readonly provisionedProductType?: string;

  /**
   * @schema RecordDetail#RecordType
   */
  readonly recordType?: string;

  /**
   * @schema RecordDetail#ProvisionedProductId
   */
  readonly provisionedProductId?: string;

  /**
   * @schema RecordDetail#ProductId
   */
  readonly productId?: string;

  /**
   * @schema RecordDetail#ProvisioningArtifactId
   */
  readonly provisioningArtifactId?: string;

  /**
   * @schema RecordDetail#PathId
   */
  readonly pathId?: string;

  /**
   * @schema RecordDetail#RecordErrors
   */
  readonly recordErrors?: RecordError[];

  /**
   * @schema RecordDetail#RecordTags
   */
  readonly recordTags?: RecordTag[];

  /**
   * @schema RecordDetail#LaunchRoleArn
   */
  readonly launchRoleArn?: string;

}

/**
 * @schema RecordOutput
 */
export interface RecordOutput {
  /**
   * @schema RecordOutput#OutputKey
   */
  readonly outputKey?: string;

  /**
   * @schema RecordOutput#OutputValue
   */
  readonly outputValue?: string;

  /**
   * @schema RecordOutput#Description
   */
  readonly description?: string;

}

/**
 * @schema ExecutionParameter
 */
export interface ExecutionParameter {
  /**
   * @schema ExecutionParameter#Name
   */
  readonly name?: string;

  /**
   * @schema ExecutionParameter#Type
   */
  readonly type?: string;

  /**
   * @schema ExecutionParameter#DefaultValues
   */
  readonly defaultValues?: string[];

}

/**
 * @schema LaunchPathSummary
 */
export interface LaunchPathSummary {
  /**
   * @schema LaunchPathSummary#Id
   */
  readonly id?: string;

  /**
   * @schema LaunchPathSummary#ConstraintSummaries
   */
  readonly constraintSummaries?: ConstraintSummary[];

  /**
   * @schema LaunchPathSummary#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema LaunchPathSummary#Name
   */
  readonly name?: string;

}

/**
 * @schema Principal
 */
export interface Principal {
  /**
   * @schema Principal#PrincipalARN
   */
  readonly principalArn?: string;

  /**
   * @schema Principal#PrincipalType
   */
  readonly principalType?: string;

}

/**
 * @schema AccessLevelFilter
 */
export interface AccessLevelFilter {
  /**
   * @schema AccessLevelFilter#Key
   */
  readonly key?: string;

  /**
   * @schema AccessLevelFilter#Value
   */
  readonly value?: string;

}

/**
 * @schema ProvisionedProductPlanSummary
 */
export interface ProvisionedProductPlanSummary {
  /**
   * @schema ProvisionedProductPlanSummary#PlanName
   */
  readonly planName?: string;

  /**
   * @schema ProvisionedProductPlanSummary#PlanId
   */
  readonly planId?: string;

  /**
   * @schema ProvisionedProductPlanSummary#ProvisionProductId
   */
  readonly provisionProductId?: string;

  /**
   * @schema ProvisionedProductPlanSummary#ProvisionProductName
   */
  readonly provisionProductName?: string;

  /**
   * @schema ProvisionedProductPlanSummary#PlanType
   */
  readonly planType?: string;

  /**
   * @schema ProvisionedProductPlanSummary#ProvisioningArtifactId
   */
  readonly provisioningArtifactId?: string;

}

/**
 * @schema ProvisioningArtifactView
 */
export interface ProvisioningArtifactView {
  /**
   * @schema ProvisioningArtifactView#ProductViewSummary
   */
  readonly productViewSummary?: ProductViewSummary;

  /**
   * @schema ProvisioningArtifactView#ProvisioningArtifact
   */
  readonly provisioningArtifact?: ProvisioningArtifact;

}

/**
 * @schema ListRecordHistorySearchFilter
 */
export interface ListRecordHistorySearchFilter {
  /**
   * @schema ListRecordHistorySearchFilter#Key
   */
  readonly key?: string;

  /**
   * @schema ListRecordHistorySearchFilter#Value
   */
  readonly value?: string;

}

/**
 * @schema ResourceDetail
 */
export interface ResourceDetail {
  /**
   * @schema ResourceDetail#Id
   */
  readonly id?: string;

  /**
   * @schema ResourceDetail#ARN
   */
  readonly arn?: string;

  /**
   * @schema ResourceDetail#Name
   */
  readonly name?: string;

  /**
   * @schema ResourceDetail#Description
   */
  readonly description?: string;

  /**
   * @schema ResourceDetail#CreatedTime
   */
  readonly createdTime?: string;

}

/**
 * @schema ServiceActionSummary
 */
export interface ServiceActionSummary {
  /**
   * @schema ServiceActionSummary#Id
   */
  readonly id?: string;

  /**
   * @schema ServiceActionSummary#Name
   */
  readonly name?: string;

  /**
   * @schema ServiceActionSummary#Description
   */
  readonly description?: string;

  /**
   * @schema ServiceActionSummary#DefinitionType
   */
  readonly definitionType?: string;

}

/**
 * @schema StackInstance
 */
export interface StackInstance {
  /**
   * @schema StackInstance#Account
   */
  readonly account?: string;

  /**
   * @schema StackInstance#Region
   */
  readonly region?: string;

  /**
   * @schema StackInstance#StackInstanceStatus
   */
  readonly stackInstanceStatus?: string;

}

/**
 * @schema ListTagOptionsFilters
 */
export interface ListTagOptionsFilters {
  /**
   * @schema ListTagOptionsFilters#Key
   */
  readonly key?: string;

  /**
   * @schema ListTagOptionsFilters#Value
   */
  readonly value?: string;

  /**
   * @schema ListTagOptionsFilters#Active
   */
  readonly active?: boolean;

}

/**
 * @schema ProvisioningParameter
 */
export interface ProvisioningParameter {
  /**
   * @schema ProvisioningParameter#Key
   */
  readonly key?: string;

  /**
   * @schema ProvisioningParameter#Value
   */
  readonly value?: string;

}

/**
 * @schema ProvisioningPreferences
 */
export interface ProvisioningPreferences {
  /**
   * @schema ProvisioningPreferences#StackSetAccounts
   */
  readonly stackSetAccounts?: string[];

  /**
   * @schema ProvisioningPreferences#StackSetRegions
   */
  readonly stackSetRegions?: string[];

  /**
   * @schema ProvisioningPreferences#StackSetFailureToleranceCount
   */
  readonly stackSetFailureToleranceCount?: number;

  /**
   * @schema ProvisioningPreferences#StackSetFailureTolerancePercentage
   */
  readonly stackSetFailureTolerancePercentage?: number;

  /**
   * @schema ProvisioningPreferences#StackSetMaxConcurrencyCount
   */
  readonly stackSetMaxConcurrencyCount?: number;

  /**
   * @schema ProvisioningPreferences#StackSetMaxConcurrencyPercentage
   */
  readonly stackSetMaxConcurrencyPercentage?: number;

}

/**
 * @schema ProductViewAggregationValue
 */
export interface ProductViewAggregationValue {
  /**
   * @schema ProductViewAggregationValue#Value
   */
  readonly value?: string;

  /**
   * @schema ProductViewAggregationValue#ApproximateCount
   */
  readonly approximateCount?: number;

}

/**
 * @schema ProvisionedProductAttribute
 */
export interface ProvisionedProductAttribute {
  /**
   * @schema ProvisionedProductAttribute#Name
   */
  readonly name?: string;

  /**
   * @schema ProvisionedProductAttribute#Arn
   */
  readonly arn?: string;

  /**
   * @schema ProvisionedProductAttribute#Type
   */
  readonly type?: string;

  /**
   * @schema ProvisionedProductAttribute#Id
   */
  readonly id?: string;

  /**
   * @schema ProvisionedProductAttribute#Status
   */
  readonly status?: string;

  /**
   * @schema ProvisionedProductAttribute#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema ProvisionedProductAttribute#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema ProvisionedProductAttribute#IdempotencyToken
   */
  readonly idempotencyToken?: string;

  /**
   * @schema ProvisionedProductAttribute#LastRecordId
   */
  readonly lastRecordId?: string;

  /**
   * @schema ProvisionedProductAttribute#LastProvisioningRecordId
   */
  readonly lastProvisioningRecordId?: string;

  /**
   * @schema ProvisionedProductAttribute#LastSuccessfulProvisioningRecordId
   */
  readonly lastSuccessfulProvisioningRecordId?: string;

  /**
   * @schema ProvisionedProductAttribute#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema ProvisionedProductAttribute#PhysicalId
   */
  readonly physicalId?: string;

  /**
   * @schema ProvisionedProductAttribute#ProductId
   */
  readonly productId?: string;

  /**
   * @schema ProvisionedProductAttribute#ProductName
   */
  readonly productName?: string;

  /**
   * @schema ProvisionedProductAttribute#ProvisioningArtifactId
   */
  readonly provisioningArtifactId?: string;

  /**
   * @schema ProvisionedProductAttribute#ProvisioningArtifactName
   */
  readonly provisioningArtifactName?: string;

  /**
   * @schema ProvisionedProductAttribute#UserArn
   */
  readonly userArn?: string;

  /**
   * @schema ProvisionedProductAttribute#UserArnSession
   */
  readonly userArnSession?: string;

}

/**
 * @schema UpdateProvisioningPreferences
 */
export interface UpdateProvisioningPreferences {
  /**
   * @schema UpdateProvisioningPreferences#StackSetAccounts
   */
  readonly stackSetAccounts?: string[];

  /**
   * @schema UpdateProvisioningPreferences#StackSetRegions
   */
  readonly stackSetRegions?: string[];

  /**
   * @schema UpdateProvisioningPreferences#StackSetFailureToleranceCount
   */
  readonly stackSetFailureToleranceCount?: number;

  /**
   * @schema UpdateProvisioningPreferences#StackSetFailureTolerancePercentage
   */
  readonly stackSetFailureTolerancePercentage?: number;

  /**
   * @schema UpdateProvisioningPreferences#StackSetMaxConcurrencyCount
   */
  readonly stackSetMaxConcurrencyCount?: number;

  /**
   * @schema UpdateProvisioningPreferences#StackSetMaxConcurrencyPercentage
   */
  readonly stackSetMaxConcurrencyPercentage?: number;

  /**
   * @schema UpdateProvisioningPreferences#StackSetOperationType
   */
  readonly stackSetOperationType?: string;

}

/**
 * @schema ShareError
 */
export interface ShareError {
  /**
   * @schema ShareError#Accounts
   */
  readonly accounts?: string[];

  /**
   * @schema ShareError#Message
   */
  readonly message?: string;

  /**
   * @schema ShareError#Error
   */
  readonly error?: string;

}

/**
 * @schema ResourceChangeDetail
 */
export interface ResourceChangeDetail {
  /**
   * @schema ResourceChangeDetail#Target
   */
  readonly target?: ResourceTargetDefinition;

  /**
   * @schema ResourceChangeDetail#Evaluation
   */
  readonly evaluation?: string;

  /**
   * @schema ResourceChangeDetail#CausingEntity
   */
  readonly causingEntity?: string;

}

/**
 * @schema ParameterConstraints
 */
export interface ParameterConstraints {
  /**
   * @schema ParameterConstraints#AllowedValues
   */
  readonly allowedValues?: string[];

}

/**
 * @schema RecordError
 */
export interface RecordError {
  /**
   * @schema RecordError#Code
   */
  readonly code?: string;

  /**
   * @schema RecordError#Description
   */
  readonly description?: string;

}

/**
 * @schema RecordTag
 */
export interface RecordTag {
  /**
   * @schema RecordTag#Key
   */
  readonly key?: string;

  /**
   * @schema RecordTag#Value
   */
  readonly value?: string;

}

/**
 * @schema ResourceTargetDefinition
 */
export interface ResourceTargetDefinition {
  /**
   * @schema ResourceTargetDefinition#Attribute
   */
  readonly attribute?: string;

  /**
   * @schema ResourceTargetDefinition#Name
   */
  readonly name?: string;

  /**
   * @schema ResourceTargetDefinition#RequiresRecreation
   */
  readonly requiresRecreation?: string;

}
