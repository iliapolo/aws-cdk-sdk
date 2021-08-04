/**
 * @schema ServiceCatalogAcceptPortfolioShareInput
 */
export interface ServiceCatalogAcceptPortfolioShareInput {
  /**
   * @schema ServiceCatalogAcceptPortfolioShareInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogAcceptPortfolioShareInput#PortfolioId
   */
  readonly portfolioId: string;

  /**
   * @schema ServiceCatalogAcceptPortfolioShareInput#PortfolioShareType
   */
  readonly portfolioShareType?: string;

}

/**
 * @schema ServiceCatalogAcceptPortfolioShareOutput
 */
export interface ServiceCatalogAcceptPortfolioShareOutput {
}

/**
 * @schema ServiceCatalogAssociateBudgetWithResourceInput
 */
export interface ServiceCatalogAssociateBudgetWithResourceInput {
  /**
   * @schema ServiceCatalogAssociateBudgetWithResourceInput#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema ServiceCatalogAssociateBudgetWithResourceInput#ResourceId
   */
  readonly resourceId: string;

}

/**
 * @schema ServiceCatalogAssociateBudgetWithResourceOutput
 */
export interface ServiceCatalogAssociateBudgetWithResourceOutput {
}

/**
 * @schema ServiceCatalogAssociatePrincipalWithPortfolioInput
 */
export interface ServiceCatalogAssociatePrincipalWithPortfolioInput {
  /**
   * @schema ServiceCatalogAssociatePrincipalWithPortfolioInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogAssociatePrincipalWithPortfolioInput#PortfolioId
   */
  readonly portfolioId: string;

  /**
   * @schema ServiceCatalogAssociatePrincipalWithPortfolioInput#PrincipalARN
   */
  readonly principalArn: string;

  /**
   * @schema ServiceCatalogAssociatePrincipalWithPortfolioInput#PrincipalType
   */
  readonly principalType: string;

}

/**
 * @schema ServiceCatalogAssociatePrincipalWithPortfolioOutput
 */
export interface ServiceCatalogAssociatePrincipalWithPortfolioOutput {
}

/**
 * @schema ServiceCatalogAssociateProductWithPortfolioInput
 */
export interface ServiceCatalogAssociateProductWithPortfolioInput {
  /**
   * @schema ServiceCatalogAssociateProductWithPortfolioInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogAssociateProductWithPortfolioInput#ProductId
   */
  readonly productId: string;

  /**
   * @schema ServiceCatalogAssociateProductWithPortfolioInput#PortfolioId
   */
  readonly portfolioId: string;

  /**
   * @schema ServiceCatalogAssociateProductWithPortfolioInput#SourcePortfolioId
   */
  readonly sourcePortfolioId?: string;

}

/**
 * @schema ServiceCatalogAssociateProductWithPortfolioOutput
 */
export interface ServiceCatalogAssociateProductWithPortfolioOutput {
}

/**
 * @schema ServiceCatalogAssociateServiceActionWithProvisioningArtifactInput
 */
export interface ServiceCatalogAssociateServiceActionWithProvisioningArtifactInput {
  /**
   * @schema ServiceCatalogAssociateServiceActionWithProvisioningArtifactInput#ProductId
   */
  readonly productId: string;

  /**
   * @schema ServiceCatalogAssociateServiceActionWithProvisioningArtifactInput#ProvisioningArtifactId
   */
  readonly provisioningArtifactId: string;

  /**
   * @schema ServiceCatalogAssociateServiceActionWithProvisioningArtifactInput#ServiceActionId
   */
  readonly serviceActionId: string;

  /**
   * @schema ServiceCatalogAssociateServiceActionWithProvisioningArtifactInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

}

/**
 * @schema ServiceCatalogAssociateServiceActionWithProvisioningArtifactOutput
 */
export interface ServiceCatalogAssociateServiceActionWithProvisioningArtifactOutput {
}

/**
 * @schema ServiceCatalogAssociateTagOptionWithResourceInput
 */
export interface ServiceCatalogAssociateTagOptionWithResourceInput {
  /**
   * @schema ServiceCatalogAssociateTagOptionWithResourceInput#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema ServiceCatalogAssociateTagOptionWithResourceInput#TagOptionId
   */
  readonly tagOptionId: string;

}

/**
 * @schema ServiceCatalogAssociateTagOptionWithResourceOutput
 */
export interface ServiceCatalogAssociateTagOptionWithResourceOutput {
}

/**
 * @schema ServiceCatalogBatchAssociateServiceActionWithProvisioningArtifactInput
 */
export interface ServiceCatalogBatchAssociateServiceActionWithProvisioningArtifactInput {
  /**
   * @schema ServiceCatalogBatchAssociateServiceActionWithProvisioningArtifactInput#ServiceActionAssociations
   */
  readonly serviceActionAssociations: ServiceCatalogServiceActionAssociation[];

  /**
   * @schema ServiceCatalogBatchAssociateServiceActionWithProvisioningArtifactInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

}

/**
 * @schema ServiceCatalogBatchAssociateServiceActionWithProvisioningArtifactOutput
 */
export interface ServiceCatalogBatchAssociateServiceActionWithProvisioningArtifactOutput {
  /**
   * @schema ServiceCatalogBatchAssociateServiceActionWithProvisioningArtifactOutput#FailedServiceActionAssociations
   */
  readonly failedServiceActionAssociations?: ServiceCatalogFailedServiceActionAssociation[];

}

/**
 * @schema ServiceCatalogBatchDisassociateServiceActionFromProvisioningArtifactInput
 */
export interface ServiceCatalogBatchDisassociateServiceActionFromProvisioningArtifactInput {
  /**
   * @schema ServiceCatalogBatchDisassociateServiceActionFromProvisioningArtifactInput#ServiceActionAssociations
   */
  readonly serviceActionAssociations: ServiceCatalogServiceActionAssociation[];

  /**
   * @schema ServiceCatalogBatchDisassociateServiceActionFromProvisioningArtifactInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

}

/**
 * @schema ServiceCatalogBatchDisassociateServiceActionFromProvisioningArtifactOutput
 */
export interface ServiceCatalogBatchDisassociateServiceActionFromProvisioningArtifactOutput {
  /**
   * @schema ServiceCatalogBatchDisassociateServiceActionFromProvisioningArtifactOutput#FailedServiceActionAssociations
   */
  readonly failedServiceActionAssociations?: ServiceCatalogFailedServiceActionAssociation[];

}

/**
 * @schema ServiceCatalogCopyProductInput
 */
export interface ServiceCatalogCopyProductInput {
  /**
   * @schema ServiceCatalogCopyProductInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogCopyProductInput#SourceProductArn
   */
  readonly sourceProductArn: string;

  /**
   * @schema ServiceCatalogCopyProductInput#TargetProductId
   */
  readonly targetProductId?: string;

  /**
   * @schema ServiceCatalogCopyProductInput#TargetProductName
   */
  readonly targetProductName?: string;

  /**
   * @schema ServiceCatalogCopyProductInput#SourceProvisioningArtifactIdentifiers
   */
  readonly sourceProvisioningArtifactIdentifiers?: { [key: string]: string }[];

  /**
   * @schema ServiceCatalogCopyProductInput#CopyOptions
   */
  readonly copyOptions?: string[];

  /**
   * @schema ServiceCatalogCopyProductInput#IdempotencyToken
   */
  readonly idempotencyToken: string;

}

/**
 * @schema ServiceCatalogCopyProductOutput
 */
export interface ServiceCatalogCopyProductOutput {
  /**
   * @schema ServiceCatalogCopyProductOutput#CopyProductToken
   */
  readonly copyProductToken?: string;

}

/**
 * @schema ServiceCatalogCreateConstraintInput
 */
export interface ServiceCatalogCreateConstraintInput {
  /**
   * @schema ServiceCatalogCreateConstraintInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogCreateConstraintInput#PortfolioId
   */
  readonly portfolioId: string;

  /**
   * @schema ServiceCatalogCreateConstraintInput#ProductId
   */
  readonly productId: string;

  /**
   * @schema ServiceCatalogCreateConstraintInput#Parameters
   */
  readonly parameters: string;

  /**
   * @schema ServiceCatalogCreateConstraintInput#Type
   */
  readonly type: string;

  /**
   * @schema ServiceCatalogCreateConstraintInput#Description
   */
  readonly description?: string;

  /**
   * @schema ServiceCatalogCreateConstraintInput#IdempotencyToken
   */
  readonly idempotencyToken: string;

}

/**
 * @schema ServiceCatalogCreateConstraintOutput
 */
export interface ServiceCatalogCreateConstraintOutput {
  /**
   * @schema ServiceCatalogCreateConstraintOutput#ConstraintDetail
   */
  readonly constraintDetail?: ServiceCatalogConstraintDetail;

  /**
   * @schema ServiceCatalogCreateConstraintOutput#ConstraintParameters
   */
  readonly constraintParameters?: string;

  /**
   * @schema ServiceCatalogCreateConstraintOutput#Status
   */
  readonly status?: string;

}

/**
 * @schema ServiceCatalogCreatePortfolioInput
 */
export interface ServiceCatalogCreatePortfolioInput {
  /**
   * @schema ServiceCatalogCreatePortfolioInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogCreatePortfolioInput#DisplayName
   */
  readonly displayName: string;

  /**
   * @schema ServiceCatalogCreatePortfolioInput#Description
   */
  readonly description?: string;

  /**
   * @schema ServiceCatalogCreatePortfolioInput#ProviderName
   */
  readonly providerName: string;

  /**
   * @schema ServiceCatalogCreatePortfolioInput#Tags
   */
  readonly tags?: ServiceCatalogTag[];

  /**
   * @schema ServiceCatalogCreatePortfolioInput#IdempotencyToken
   */
  readonly idempotencyToken: string;

}

/**
 * @schema ServiceCatalogCreatePortfolioOutput
 */
export interface ServiceCatalogCreatePortfolioOutput {
  /**
   * @schema ServiceCatalogCreatePortfolioOutput#PortfolioDetail
   */
  readonly portfolioDetail?: ServiceCatalogPortfolioDetail;

  /**
   * @schema ServiceCatalogCreatePortfolioOutput#Tags
   */
  readonly tags?: ServiceCatalogTag[];

}

/**
 * @schema ServiceCatalogCreatePortfolioShareInput
 */
export interface ServiceCatalogCreatePortfolioShareInput {
  /**
   * @schema ServiceCatalogCreatePortfolioShareInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogCreatePortfolioShareInput#PortfolioId
   */
  readonly portfolioId: string;

  /**
   * @schema ServiceCatalogCreatePortfolioShareInput#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ServiceCatalogCreatePortfolioShareInput#OrganizationNode
   */
  readonly organizationNode?: ServiceCatalogOrganizationNode;

}

/**
 * @schema ServiceCatalogCreatePortfolioShareOutput
 */
export interface ServiceCatalogCreatePortfolioShareOutput {
  /**
   * @schema ServiceCatalogCreatePortfolioShareOutput#PortfolioShareToken
   */
  readonly portfolioShareToken?: string;

}

/**
 * @schema ServiceCatalogCreateProductInput
 */
export interface ServiceCatalogCreateProductInput {
  /**
   * @schema ServiceCatalogCreateProductInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogCreateProductInput#Name
   */
  readonly name: string;

  /**
   * @schema ServiceCatalogCreateProductInput#Owner
   */
  readonly owner: string;

  /**
   * @schema ServiceCatalogCreateProductInput#Description
   */
  readonly description?: string;

  /**
   * @schema ServiceCatalogCreateProductInput#Distributor
   */
  readonly distributor?: string;

  /**
   * @schema ServiceCatalogCreateProductInput#SupportDescription
   */
  readonly supportDescription?: string;

  /**
   * @schema ServiceCatalogCreateProductInput#SupportEmail
   */
  readonly supportEmail?: string;

  /**
   * @schema ServiceCatalogCreateProductInput#SupportUrl
   */
  readonly supportUrl?: string;

  /**
   * @schema ServiceCatalogCreateProductInput#ProductType
   */
  readonly productType: string;

  /**
   * @schema ServiceCatalogCreateProductInput#Tags
   */
  readonly tags?: ServiceCatalogTag[];

  /**
   * @schema ServiceCatalogCreateProductInput#ProvisioningArtifactParameters
   */
  readonly provisioningArtifactParameters: ServiceCatalogProvisioningArtifactProperties;

  /**
   * @schema ServiceCatalogCreateProductInput#IdempotencyToken
   */
  readonly idempotencyToken: string;

}

/**
 * @schema ServiceCatalogCreateProductOutput
 */
export interface ServiceCatalogCreateProductOutput {
  /**
   * @schema ServiceCatalogCreateProductOutput#ProductViewDetail
   */
  readonly productViewDetail?: ServiceCatalogProductViewDetail;

  /**
   * @schema ServiceCatalogCreateProductOutput#ProvisioningArtifactDetail
   */
  readonly provisioningArtifactDetail?: ServiceCatalogProvisioningArtifactDetail;

  /**
   * @schema ServiceCatalogCreateProductOutput#Tags
   */
  readonly tags?: ServiceCatalogTag[];

}

/**
 * @schema ServiceCatalogCreateProvisionedProductPlanInput
 */
export interface ServiceCatalogCreateProvisionedProductPlanInput {
  /**
   * @schema ServiceCatalogCreateProvisionedProductPlanInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogCreateProvisionedProductPlanInput#PlanName
   */
  readonly planName: string;

  /**
   * @schema ServiceCatalogCreateProvisionedProductPlanInput#PlanType
   */
  readonly planType: string;

  /**
   * @schema ServiceCatalogCreateProvisionedProductPlanInput#NotificationArns
   */
  readonly notificationArns?: string[];

  /**
   * @schema ServiceCatalogCreateProvisionedProductPlanInput#PathId
   */
  readonly pathId?: string;

  /**
   * @schema ServiceCatalogCreateProvisionedProductPlanInput#ProductId
   */
  readonly productId: string;

  /**
   * @schema ServiceCatalogCreateProvisionedProductPlanInput#ProvisionedProductName
   */
  readonly provisionedProductName: string;

  /**
   * @schema ServiceCatalogCreateProvisionedProductPlanInput#ProvisioningArtifactId
   */
  readonly provisioningArtifactId: string;

  /**
   * @schema ServiceCatalogCreateProvisionedProductPlanInput#ProvisioningParameters
   */
  readonly provisioningParameters?: ServiceCatalogUpdateProvisioningParameter[];

  /**
   * @schema ServiceCatalogCreateProvisionedProductPlanInput#IdempotencyToken
   */
  readonly idempotencyToken: string;

  /**
   * @schema ServiceCatalogCreateProvisionedProductPlanInput#Tags
   */
  readonly tags?: ServiceCatalogTag[];

}

/**
 * @schema ServiceCatalogCreateProvisionedProductPlanOutput
 */
export interface ServiceCatalogCreateProvisionedProductPlanOutput {
  /**
   * @schema ServiceCatalogCreateProvisionedProductPlanOutput#PlanName
   */
  readonly planName?: string;

  /**
   * @schema ServiceCatalogCreateProvisionedProductPlanOutput#PlanId
   */
  readonly planId?: string;

  /**
   * @schema ServiceCatalogCreateProvisionedProductPlanOutput#ProvisionProductId
   */
  readonly provisionProductId?: string;

  /**
   * @schema ServiceCatalogCreateProvisionedProductPlanOutput#ProvisionedProductName
   */
  readonly provisionedProductName?: string;

  /**
   * @schema ServiceCatalogCreateProvisionedProductPlanOutput#ProvisioningArtifactId
   */
  readonly provisioningArtifactId?: string;

}

/**
 * @schema ServiceCatalogCreateProvisioningArtifactInput
 */
export interface ServiceCatalogCreateProvisioningArtifactInput {
  /**
   * @schema ServiceCatalogCreateProvisioningArtifactInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogCreateProvisioningArtifactInput#ProductId
   */
  readonly productId: string;

  /**
   * @schema ServiceCatalogCreateProvisioningArtifactInput#Parameters
   */
  readonly parameters: ServiceCatalogProvisioningArtifactProperties;

  /**
   * @schema ServiceCatalogCreateProvisioningArtifactInput#IdempotencyToken
   */
  readonly idempotencyToken: string;

}

/**
 * @schema ServiceCatalogCreateProvisioningArtifactOutput
 */
export interface ServiceCatalogCreateProvisioningArtifactOutput {
  /**
   * @schema ServiceCatalogCreateProvisioningArtifactOutput#ProvisioningArtifactDetail
   */
  readonly provisioningArtifactDetail?: ServiceCatalogProvisioningArtifactDetail;

  /**
   * @schema ServiceCatalogCreateProvisioningArtifactOutput#Info
   */
  readonly info?: { [key: string]: string };

  /**
   * @schema ServiceCatalogCreateProvisioningArtifactOutput#Status
   */
  readonly status?: string;

}

/**
 * @schema ServiceCatalogCreateServiceActionInput
 */
export interface ServiceCatalogCreateServiceActionInput {
  /**
   * @schema ServiceCatalogCreateServiceActionInput#Name
   */
  readonly name: string;

  /**
   * @schema ServiceCatalogCreateServiceActionInput#DefinitionType
   */
  readonly definitionType: string;

  /**
   * @schema ServiceCatalogCreateServiceActionInput#Definition
   */
  readonly definition: { [key: string]: string };

  /**
   * @schema ServiceCatalogCreateServiceActionInput#Description
   */
  readonly description?: string;

  /**
   * @schema ServiceCatalogCreateServiceActionInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogCreateServiceActionInput#IdempotencyToken
   */
  readonly idempotencyToken: string;

}

/**
 * @schema ServiceCatalogCreateServiceActionOutput
 */
export interface ServiceCatalogCreateServiceActionOutput {
  /**
   * @schema ServiceCatalogCreateServiceActionOutput#ServiceActionDetail
   */
  readonly serviceActionDetail?: ServiceCatalogServiceActionDetail;

}

/**
 * @schema ServiceCatalogCreateTagOptionInput
 */
export interface ServiceCatalogCreateTagOptionInput {
  /**
   * @schema ServiceCatalogCreateTagOptionInput#Key
   */
  readonly key: string;

  /**
   * @schema ServiceCatalogCreateTagOptionInput#Value
   */
  readonly value: string;

}

/**
 * @schema ServiceCatalogCreateTagOptionOutput
 */
export interface ServiceCatalogCreateTagOptionOutput {
  /**
   * @schema ServiceCatalogCreateTagOptionOutput#TagOptionDetail
   */
  readonly tagOptionDetail?: ServiceCatalogTagOptionDetail;

}

/**
 * @schema ServiceCatalogDeleteConstraintInput
 */
export interface ServiceCatalogDeleteConstraintInput {
  /**
   * @schema ServiceCatalogDeleteConstraintInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogDeleteConstraintInput#Id
   */
  readonly id: string;

}

/**
 * @schema ServiceCatalogDeleteConstraintOutput
 */
export interface ServiceCatalogDeleteConstraintOutput {
}

/**
 * @schema ServiceCatalogDeletePortfolioInput
 */
export interface ServiceCatalogDeletePortfolioInput {
  /**
   * @schema ServiceCatalogDeletePortfolioInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogDeletePortfolioInput#Id
   */
  readonly id: string;

}

/**
 * @schema ServiceCatalogDeletePortfolioOutput
 */
export interface ServiceCatalogDeletePortfolioOutput {
}

/**
 * @schema ServiceCatalogDeletePortfolioShareInput
 */
export interface ServiceCatalogDeletePortfolioShareInput {
  /**
   * @schema ServiceCatalogDeletePortfolioShareInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogDeletePortfolioShareInput#PortfolioId
   */
  readonly portfolioId: string;

  /**
   * @schema ServiceCatalogDeletePortfolioShareInput#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ServiceCatalogDeletePortfolioShareInput#OrganizationNode
   */
  readonly organizationNode?: ServiceCatalogOrganizationNode;

}

/**
 * @schema ServiceCatalogDeletePortfolioShareOutput
 */
export interface ServiceCatalogDeletePortfolioShareOutput {
  /**
   * @schema ServiceCatalogDeletePortfolioShareOutput#PortfolioShareToken
   */
  readonly portfolioShareToken?: string;

}

/**
 * @schema ServiceCatalogDeleteProductInput
 */
export interface ServiceCatalogDeleteProductInput {
  /**
   * @schema ServiceCatalogDeleteProductInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogDeleteProductInput#Id
   */
  readonly id: string;

}

/**
 * @schema ServiceCatalogDeleteProductOutput
 */
export interface ServiceCatalogDeleteProductOutput {
}

/**
 * @schema ServiceCatalogDeleteProvisionedProductPlanInput
 */
export interface ServiceCatalogDeleteProvisionedProductPlanInput {
  /**
   * @schema ServiceCatalogDeleteProvisionedProductPlanInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogDeleteProvisionedProductPlanInput#PlanId
   */
  readonly planId: string;

  /**
   * @schema ServiceCatalogDeleteProvisionedProductPlanInput#IgnoreErrors
   */
  readonly ignoreErrors?: boolean;

}

/**
 * @schema ServiceCatalogDeleteProvisionedProductPlanOutput
 */
export interface ServiceCatalogDeleteProvisionedProductPlanOutput {
}

/**
 * @schema ServiceCatalogDeleteProvisioningArtifactInput
 */
export interface ServiceCatalogDeleteProvisioningArtifactInput {
  /**
   * @schema ServiceCatalogDeleteProvisioningArtifactInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogDeleteProvisioningArtifactInput#ProductId
   */
  readonly productId: string;

  /**
   * @schema ServiceCatalogDeleteProvisioningArtifactInput#ProvisioningArtifactId
   */
  readonly provisioningArtifactId: string;

}

/**
 * @schema ServiceCatalogDeleteProvisioningArtifactOutput
 */
export interface ServiceCatalogDeleteProvisioningArtifactOutput {
}

/**
 * @schema ServiceCatalogDeleteServiceActionInput
 */
export interface ServiceCatalogDeleteServiceActionInput {
  /**
   * @schema ServiceCatalogDeleteServiceActionInput#Id
   */
  readonly id: string;

  /**
   * @schema ServiceCatalogDeleteServiceActionInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

}

/**
 * @schema ServiceCatalogDeleteServiceActionOutput
 */
export interface ServiceCatalogDeleteServiceActionOutput {
}

/**
 * @schema ServiceCatalogDeleteTagOptionInput
 */
export interface ServiceCatalogDeleteTagOptionInput {
  /**
   * @schema ServiceCatalogDeleteTagOptionInput#Id
   */
  readonly id: string;

}

/**
 * @schema ServiceCatalogDeleteTagOptionOutput
 */
export interface ServiceCatalogDeleteTagOptionOutput {
}

/**
 * @schema ServiceCatalogDescribeConstraintInput
 */
export interface ServiceCatalogDescribeConstraintInput {
  /**
   * @schema ServiceCatalogDescribeConstraintInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogDescribeConstraintInput#Id
   */
  readonly id: string;

}

/**
 * @schema ServiceCatalogDescribeConstraintOutput
 */
export interface ServiceCatalogDescribeConstraintOutput {
  /**
   * @schema ServiceCatalogDescribeConstraintOutput#ConstraintDetail
   */
  readonly constraintDetail?: ServiceCatalogConstraintDetail;

  /**
   * @schema ServiceCatalogDescribeConstraintOutput#ConstraintParameters
   */
  readonly constraintParameters?: string;

  /**
   * @schema ServiceCatalogDescribeConstraintOutput#Status
   */
  readonly status?: string;

}

/**
 * @schema ServiceCatalogDescribeCopyProductStatusInput
 */
export interface ServiceCatalogDescribeCopyProductStatusInput {
  /**
   * @schema ServiceCatalogDescribeCopyProductStatusInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogDescribeCopyProductStatusInput#CopyProductToken
   */
  readonly copyProductToken: string;

}

/**
 * @schema ServiceCatalogDescribeCopyProductStatusOutput
 */
export interface ServiceCatalogDescribeCopyProductStatusOutput {
  /**
   * @schema ServiceCatalogDescribeCopyProductStatusOutput#CopyProductStatus
   */
  readonly copyProductStatus?: string;

  /**
   * @schema ServiceCatalogDescribeCopyProductStatusOutput#TargetProductId
   */
  readonly targetProductId?: string;

  /**
   * @schema ServiceCatalogDescribeCopyProductStatusOutput#StatusDetail
   */
  readonly statusDetail?: string;

}

/**
 * @schema ServiceCatalogDescribePortfolioInput
 */
export interface ServiceCatalogDescribePortfolioInput {
  /**
   * @schema ServiceCatalogDescribePortfolioInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogDescribePortfolioInput#Id
   */
  readonly id: string;

}

/**
 * @schema ServiceCatalogDescribePortfolioOutput
 */
export interface ServiceCatalogDescribePortfolioOutput {
  /**
   * @schema ServiceCatalogDescribePortfolioOutput#PortfolioDetail
   */
  readonly portfolioDetail?: ServiceCatalogPortfolioDetail;

  /**
   * @schema ServiceCatalogDescribePortfolioOutput#Tags
   */
  readonly tags?: ServiceCatalogTag[];

  /**
   * @schema ServiceCatalogDescribePortfolioOutput#TagOptions
   */
  readonly tagOptions?: ServiceCatalogTagOptionDetail[];

  /**
   * @schema ServiceCatalogDescribePortfolioOutput#Budgets
   */
  readonly budgets?: ServiceCatalogBudgetDetail[];

}

/**
 * @schema ServiceCatalogDescribePortfolioShareStatusInput
 */
export interface ServiceCatalogDescribePortfolioShareStatusInput {
  /**
   * @schema ServiceCatalogDescribePortfolioShareStatusInput#PortfolioShareToken
   */
  readonly portfolioShareToken: string;

}

/**
 * @schema ServiceCatalogDescribePortfolioShareStatusOutput
 */
export interface ServiceCatalogDescribePortfolioShareStatusOutput {
  /**
   * @schema ServiceCatalogDescribePortfolioShareStatusOutput#PortfolioShareToken
   */
  readonly portfolioShareToken?: string;

  /**
   * @schema ServiceCatalogDescribePortfolioShareStatusOutput#PortfolioId
   */
  readonly portfolioId?: string;

  /**
   * @schema ServiceCatalogDescribePortfolioShareStatusOutput#OrganizationNodeValue
   */
  readonly organizationNodeValue?: string;

  /**
   * @schema ServiceCatalogDescribePortfolioShareStatusOutput#Status
   */
  readonly status?: string;

  /**
   * @schema ServiceCatalogDescribePortfolioShareStatusOutput#ShareDetails
   */
  readonly shareDetails?: ServiceCatalogShareDetails;

}

/**
 * @schema ServiceCatalogDescribeProductInput
 */
export interface ServiceCatalogDescribeProductInput {
  /**
   * @schema ServiceCatalogDescribeProductInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogDescribeProductInput#Id
   */
  readonly id?: string;

  /**
   * @schema ServiceCatalogDescribeProductInput#Name
   */
  readonly name?: string;

}

/**
 * @schema ServiceCatalogDescribeProductOutput
 */
export interface ServiceCatalogDescribeProductOutput {
  /**
   * @schema ServiceCatalogDescribeProductOutput#ProductViewSummary
   */
  readonly productViewSummary?: ServiceCatalogProductViewSummary;

  /**
   * @schema ServiceCatalogDescribeProductOutput#ProvisioningArtifacts
   */
  readonly provisioningArtifacts?: ServiceCatalogProvisioningArtifact[];

  /**
   * @schema ServiceCatalogDescribeProductOutput#Budgets
   */
  readonly budgets?: ServiceCatalogBudgetDetail[];

  /**
   * @schema ServiceCatalogDescribeProductOutput#LaunchPaths
   */
  readonly launchPaths?: ServiceCatalogLaunchPath[];

}

/**
 * @schema ServiceCatalogDescribeProductAsAdminInput
 */
export interface ServiceCatalogDescribeProductAsAdminInput {
  /**
   * @schema ServiceCatalogDescribeProductAsAdminInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogDescribeProductAsAdminInput#Id
   */
  readonly id?: string;

  /**
   * @schema ServiceCatalogDescribeProductAsAdminInput#Name
   */
  readonly name?: string;

}

/**
 * @schema ServiceCatalogDescribeProductAsAdminOutput
 */
export interface ServiceCatalogDescribeProductAsAdminOutput {
  /**
   * @schema ServiceCatalogDescribeProductAsAdminOutput#ProductViewDetail
   */
  readonly productViewDetail?: ServiceCatalogProductViewDetail;

  /**
   * @schema ServiceCatalogDescribeProductAsAdminOutput#ProvisioningArtifactSummaries
   */
  readonly provisioningArtifactSummaries?: ServiceCatalogProvisioningArtifactSummary[];

  /**
   * @schema ServiceCatalogDescribeProductAsAdminOutput#Tags
   */
  readonly tags?: ServiceCatalogTag[];

  /**
   * @schema ServiceCatalogDescribeProductAsAdminOutput#TagOptions
   */
  readonly tagOptions?: ServiceCatalogTagOptionDetail[];

  /**
   * @schema ServiceCatalogDescribeProductAsAdminOutput#Budgets
   */
  readonly budgets?: ServiceCatalogBudgetDetail[];

}

/**
 * @schema ServiceCatalogDescribeProductViewInput
 */
export interface ServiceCatalogDescribeProductViewInput {
  /**
   * @schema ServiceCatalogDescribeProductViewInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogDescribeProductViewInput#Id
   */
  readonly id: string;

}

/**
 * @schema ServiceCatalogDescribeProductViewOutput
 */
export interface ServiceCatalogDescribeProductViewOutput {
  /**
   * @schema ServiceCatalogDescribeProductViewOutput#ProductViewSummary
   */
  readonly productViewSummary?: ServiceCatalogProductViewSummary;

  /**
   * @schema ServiceCatalogDescribeProductViewOutput#ProvisioningArtifacts
   */
  readonly provisioningArtifacts?: ServiceCatalogProvisioningArtifact[];

}

/**
 * @schema ServiceCatalogDescribeProvisionedProductInput
 */
export interface ServiceCatalogDescribeProvisionedProductInput {
  /**
   * @schema ServiceCatalogDescribeProvisionedProductInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogDescribeProvisionedProductInput#Id
   */
  readonly id?: string;

  /**
   * @schema ServiceCatalogDescribeProvisionedProductInput#Name
   */
  readonly name?: string;

}

/**
 * @schema ServiceCatalogDescribeProvisionedProductOutput
 */
export interface ServiceCatalogDescribeProvisionedProductOutput {
  /**
   * @schema ServiceCatalogDescribeProvisionedProductOutput#ProvisionedProductDetail
   */
  readonly provisionedProductDetail?: ServiceCatalogProvisionedProductDetail;

  /**
   * @schema ServiceCatalogDescribeProvisionedProductOutput#CloudWatchDashboards
   */
  readonly cloudWatchDashboards?: ServiceCatalogCloudWatchDashboard[];

}

/**
 * @schema ServiceCatalogDescribeProvisionedProductPlanInput
 */
export interface ServiceCatalogDescribeProvisionedProductPlanInput {
  /**
   * @schema ServiceCatalogDescribeProvisionedProductPlanInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogDescribeProvisionedProductPlanInput#PlanId
   */
  readonly planId: string;

  /**
   * @schema ServiceCatalogDescribeProvisionedProductPlanInput#PageSize
   */
  readonly pageSize?: number;

  /**
   * @schema ServiceCatalogDescribeProvisionedProductPlanInput#PageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema ServiceCatalogDescribeProvisionedProductPlanOutput
 */
export interface ServiceCatalogDescribeProvisionedProductPlanOutput {
  /**
   * @schema ServiceCatalogDescribeProvisionedProductPlanOutput#ProvisionedProductPlanDetails
   */
  readonly provisionedProductPlanDetails?: ServiceCatalogProvisionedProductPlanDetails;

  /**
   * @schema ServiceCatalogDescribeProvisionedProductPlanOutput#ResourceChanges
   */
  readonly resourceChanges?: ServiceCatalogResourceChange[];

  /**
   * @schema ServiceCatalogDescribeProvisionedProductPlanOutput#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ServiceCatalogDescribeProvisioningArtifactInput
 */
export interface ServiceCatalogDescribeProvisioningArtifactInput {
  /**
   * @schema ServiceCatalogDescribeProvisioningArtifactInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogDescribeProvisioningArtifactInput#ProvisioningArtifactId
   */
  readonly provisioningArtifactId?: string;

  /**
   * @schema ServiceCatalogDescribeProvisioningArtifactInput#ProductId
   */
  readonly productId?: string;

  /**
   * @schema ServiceCatalogDescribeProvisioningArtifactInput#ProvisioningArtifactName
   */
  readonly provisioningArtifactName?: string;

  /**
   * @schema ServiceCatalogDescribeProvisioningArtifactInput#ProductName
   */
  readonly productName?: string;

  /**
   * @schema ServiceCatalogDescribeProvisioningArtifactInput#Verbose
   */
  readonly verbose?: boolean;

}

/**
 * @schema ServiceCatalogDescribeProvisioningArtifactOutput
 */
export interface ServiceCatalogDescribeProvisioningArtifactOutput {
  /**
   * @schema ServiceCatalogDescribeProvisioningArtifactOutput#ProvisioningArtifactDetail
   */
  readonly provisioningArtifactDetail?: ServiceCatalogProvisioningArtifactDetail;

  /**
   * @schema ServiceCatalogDescribeProvisioningArtifactOutput#Info
   */
  readonly info?: { [key: string]: string };

  /**
   * @schema ServiceCatalogDescribeProvisioningArtifactOutput#Status
   */
  readonly status?: string;

}

/**
 * @schema ServiceCatalogDescribeProvisioningParametersInput
 */
export interface ServiceCatalogDescribeProvisioningParametersInput {
  /**
   * @schema ServiceCatalogDescribeProvisioningParametersInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogDescribeProvisioningParametersInput#ProductId
   */
  readonly productId?: string;

  /**
   * @schema ServiceCatalogDescribeProvisioningParametersInput#ProductName
   */
  readonly productName?: string;

  /**
   * @schema ServiceCatalogDescribeProvisioningParametersInput#ProvisioningArtifactId
   */
  readonly provisioningArtifactId?: string;

  /**
   * @schema ServiceCatalogDescribeProvisioningParametersInput#ProvisioningArtifactName
   */
  readonly provisioningArtifactName?: string;

  /**
   * @schema ServiceCatalogDescribeProvisioningParametersInput#PathId
   */
  readonly pathId?: string;

  /**
   * @schema ServiceCatalogDescribeProvisioningParametersInput#PathName
   */
  readonly pathName?: string;

}

/**
 * @schema ServiceCatalogDescribeProvisioningParametersOutput
 */
export interface ServiceCatalogDescribeProvisioningParametersOutput {
  /**
   * @schema ServiceCatalogDescribeProvisioningParametersOutput#ProvisioningArtifactParameters
   */
  readonly provisioningArtifactParameters?: ServiceCatalogProvisioningArtifactParameter[];

  /**
   * @schema ServiceCatalogDescribeProvisioningParametersOutput#ConstraintSummaries
   */
  readonly constraintSummaries?: ServiceCatalogConstraintSummary[];

  /**
   * @schema ServiceCatalogDescribeProvisioningParametersOutput#UsageInstructions
   */
  readonly usageInstructions?: ServiceCatalogUsageInstruction[];

  /**
   * @schema ServiceCatalogDescribeProvisioningParametersOutput#TagOptions
   */
  readonly tagOptions?: ServiceCatalogTagOptionSummary[];

  /**
   * @schema ServiceCatalogDescribeProvisioningParametersOutput#ProvisioningArtifactPreferences
   */
  readonly provisioningArtifactPreferences?: ServiceCatalogProvisioningArtifactPreferences;

  /**
   * @schema ServiceCatalogDescribeProvisioningParametersOutput#ProvisioningArtifactOutputs
   */
  readonly provisioningArtifactOutputs?: ServiceCatalogProvisioningArtifactOutput[];

}

/**
 * @schema ServiceCatalogDescribeRecordInput
 */
export interface ServiceCatalogDescribeRecordInput {
  /**
   * @schema ServiceCatalogDescribeRecordInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogDescribeRecordInput#Id
   */
  readonly id: string;

  /**
   * @schema ServiceCatalogDescribeRecordInput#PageToken
   */
  readonly pageToken?: string;

  /**
   * @schema ServiceCatalogDescribeRecordInput#PageSize
   */
  readonly pageSize?: number;

}

/**
 * @schema ServiceCatalogDescribeRecordOutput
 */
export interface ServiceCatalogDescribeRecordOutput {
  /**
   * @schema ServiceCatalogDescribeRecordOutput#RecordDetail
   */
  readonly recordDetail?: ServiceCatalogRecordDetail;

  /**
   * @schema ServiceCatalogDescribeRecordOutput#RecordOutputs
   */
  readonly recordOutputs?: ServiceCatalogRecordOutput[];

  /**
   * @schema ServiceCatalogDescribeRecordOutput#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ServiceCatalogDescribeServiceActionInput
 */
export interface ServiceCatalogDescribeServiceActionInput {
  /**
   * @schema ServiceCatalogDescribeServiceActionInput#Id
   */
  readonly id: string;

  /**
   * @schema ServiceCatalogDescribeServiceActionInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

}

/**
 * @schema ServiceCatalogDescribeServiceActionOutput
 */
export interface ServiceCatalogDescribeServiceActionOutput {
  /**
   * @schema ServiceCatalogDescribeServiceActionOutput#ServiceActionDetail
   */
  readonly serviceActionDetail?: ServiceCatalogServiceActionDetail;

}

/**
 * @schema ServiceCatalogDescribeServiceActionExecutionParametersInput
 */
export interface ServiceCatalogDescribeServiceActionExecutionParametersInput {
  /**
   * @schema ServiceCatalogDescribeServiceActionExecutionParametersInput#ProvisionedProductId
   */
  readonly provisionedProductId: string;

  /**
   * @schema ServiceCatalogDescribeServiceActionExecutionParametersInput#ServiceActionId
   */
  readonly serviceActionId: string;

  /**
   * @schema ServiceCatalogDescribeServiceActionExecutionParametersInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

}

/**
 * @schema ServiceCatalogDescribeServiceActionExecutionParametersOutput
 */
export interface ServiceCatalogDescribeServiceActionExecutionParametersOutput {
  /**
   * @schema ServiceCatalogDescribeServiceActionExecutionParametersOutput#ServiceActionParameters
   */
  readonly serviceActionParameters?: ServiceCatalogExecutionParameter[];

}

/**
 * @schema ServiceCatalogDescribeTagOptionInput
 */
export interface ServiceCatalogDescribeTagOptionInput {
  /**
   * @schema ServiceCatalogDescribeTagOptionInput#Id
   */
  readonly id: string;

}

/**
 * @schema ServiceCatalogDescribeTagOptionOutput
 */
export interface ServiceCatalogDescribeTagOptionOutput {
  /**
   * @schema ServiceCatalogDescribeTagOptionOutput#TagOptionDetail
   */
  readonly tagOptionDetail?: ServiceCatalogTagOptionDetail;

}

/**
 * @schema ServiceCatalogDisableAwsOrganizationsAccessInput
 */
export interface ServiceCatalogDisableAwsOrganizationsAccessInput {
}

/**
 * @schema ServiceCatalogDisableAwsOrganizationsAccessOutput
 */
export interface ServiceCatalogDisableAwsOrganizationsAccessOutput {
}

/**
 * @schema ServiceCatalogDisassociateBudgetFromResourceInput
 */
export interface ServiceCatalogDisassociateBudgetFromResourceInput {
  /**
   * @schema ServiceCatalogDisassociateBudgetFromResourceInput#BudgetName
   */
  readonly budgetName: string;

  /**
   * @schema ServiceCatalogDisassociateBudgetFromResourceInput#ResourceId
   */
  readonly resourceId: string;

}

/**
 * @schema ServiceCatalogDisassociateBudgetFromResourceOutput
 */
export interface ServiceCatalogDisassociateBudgetFromResourceOutput {
}

/**
 * @schema ServiceCatalogDisassociatePrincipalFromPortfolioInput
 */
export interface ServiceCatalogDisassociatePrincipalFromPortfolioInput {
  /**
   * @schema ServiceCatalogDisassociatePrincipalFromPortfolioInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogDisassociatePrincipalFromPortfolioInput#PortfolioId
   */
  readonly portfolioId: string;

  /**
   * @schema ServiceCatalogDisassociatePrincipalFromPortfolioInput#PrincipalARN
   */
  readonly principalArn: string;

}

/**
 * @schema ServiceCatalogDisassociatePrincipalFromPortfolioOutput
 */
export interface ServiceCatalogDisassociatePrincipalFromPortfolioOutput {
}

/**
 * @schema ServiceCatalogDisassociateProductFromPortfolioInput
 */
export interface ServiceCatalogDisassociateProductFromPortfolioInput {
  /**
   * @schema ServiceCatalogDisassociateProductFromPortfolioInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogDisassociateProductFromPortfolioInput#ProductId
   */
  readonly productId: string;

  /**
   * @schema ServiceCatalogDisassociateProductFromPortfolioInput#PortfolioId
   */
  readonly portfolioId: string;

}

/**
 * @schema ServiceCatalogDisassociateProductFromPortfolioOutput
 */
export interface ServiceCatalogDisassociateProductFromPortfolioOutput {
}

/**
 * @schema ServiceCatalogDisassociateServiceActionFromProvisioningArtifactInput
 */
export interface ServiceCatalogDisassociateServiceActionFromProvisioningArtifactInput {
  /**
   * @schema ServiceCatalogDisassociateServiceActionFromProvisioningArtifactInput#ProductId
   */
  readonly productId: string;

  /**
   * @schema ServiceCatalogDisassociateServiceActionFromProvisioningArtifactInput#ProvisioningArtifactId
   */
  readonly provisioningArtifactId: string;

  /**
   * @schema ServiceCatalogDisassociateServiceActionFromProvisioningArtifactInput#ServiceActionId
   */
  readonly serviceActionId: string;

  /**
   * @schema ServiceCatalogDisassociateServiceActionFromProvisioningArtifactInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

}

/**
 * @schema ServiceCatalogDisassociateServiceActionFromProvisioningArtifactOutput
 */
export interface ServiceCatalogDisassociateServiceActionFromProvisioningArtifactOutput {
}

/**
 * @schema ServiceCatalogDisassociateTagOptionFromResourceInput
 */
export interface ServiceCatalogDisassociateTagOptionFromResourceInput {
  /**
   * @schema ServiceCatalogDisassociateTagOptionFromResourceInput#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema ServiceCatalogDisassociateTagOptionFromResourceInput#TagOptionId
   */
  readonly tagOptionId: string;

}

/**
 * @schema ServiceCatalogDisassociateTagOptionFromResourceOutput
 */
export interface ServiceCatalogDisassociateTagOptionFromResourceOutput {
}

/**
 * @schema ServiceCatalogEnableAwsOrganizationsAccessInput
 */
export interface ServiceCatalogEnableAwsOrganizationsAccessInput {
}

/**
 * @schema ServiceCatalogEnableAwsOrganizationsAccessOutput
 */
export interface ServiceCatalogEnableAwsOrganizationsAccessOutput {
}

/**
 * @schema ServiceCatalogExecuteProvisionedProductPlanInput
 */
export interface ServiceCatalogExecuteProvisionedProductPlanInput {
  /**
   * @schema ServiceCatalogExecuteProvisionedProductPlanInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogExecuteProvisionedProductPlanInput#PlanId
   */
  readonly planId: string;

  /**
   * @schema ServiceCatalogExecuteProvisionedProductPlanInput#IdempotencyToken
   */
  readonly idempotencyToken: string;

}

/**
 * @schema ServiceCatalogExecuteProvisionedProductPlanOutput
 */
export interface ServiceCatalogExecuteProvisionedProductPlanOutput {
  /**
   * @schema ServiceCatalogExecuteProvisionedProductPlanOutput#RecordDetail
   */
  readonly recordDetail?: ServiceCatalogRecordDetail;

}

/**
 * @schema ServiceCatalogExecuteProvisionedProductServiceActionInput
 */
export interface ServiceCatalogExecuteProvisionedProductServiceActionInput {
  /**
   * @schema ServiceCatalogExecuteProvisionedProductServiceActionInput#ProvisionedProductId
   */
  readonly provisionedProductId: string;

  /**
   * @schema ServiceCatalogExecuteProvisionedProductServiceActionInput#ServiceActionId
   */
  readonly serviceActionId: string;

  /**
   * @schema ServiceCatalogExecuteProvisionedProductServiceActionInput#ExecuteToken
   */
  readonly executeToken: string;

  /**
   * @schema ServiceCatalogExecuteProvisionedProductServiceActionInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogExecuteProvisionedProductServiceActionInput#Parameters
   */
  readonly parameters?: { [key: string]: string[] };

}

/**
 * @schema ServiceCatalogExecuteProvisionedProductServiceActionOutput
 */
export interface ServiceCatalogExecuteProvisionedProductServiceActionOutput {
  /**
   * @schema ServiceCatalogExecuteProvisionedProductServiceActionOutput#RecordDetail
   */
  readonly recordDetail?: ServiceCatalogRecordDetail;

}

/**
 * @schema ServiceCatalogGetAwsOrganizationsAccessStatusInput
 */
export interface ServiceCatalogGetAwsOrganizationsAccessStatusInput {
}

/**
 * @schema ServiceCatalogGetAwsOrganizationsAccessStatusOutput
 */
export interface ServiceCatalogGetAwsOrganizationsAccessStatusOutput {
  /**
   * @schema ServiceCatalogGetAwsOrganizationsAccessStatusOutput#AccessStatus
   */
  readonly accessStatus?: string;

}

/**
 * @schema ServiceCatalogGetProvisionedProductOutputsInput
 */
export interface ServiceCatalogGetProvisionedProductOutputsInput {
  /**
   * @schema ServiceCatalogGetProvisionedProductOutputsInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogGetProvisionedProductOutputsInput#ProvisionedProductId
   */
  readonly provisionedProductId?: string;

  /**
   * @schema ServiceCatalogGetProvisionedProductOutputsInput#ProvisionedProductName
   */
  readonly provisionedProductName?: string;

  /**
   * @schema ServiceCatalogGetProvisionedProductOutputsInput#OutputKeys
   */
  readonly outputKeys?: string[];

  /**
   * @schema ServiceCatalogGetProvisionedProductOutputsInput#PageSize
   */
  readonly pageSize?: number;

  /**
   * @schema ServiceCatalogGetProvisionedProductOutputsInput#PageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema ServiceCatalogGetProvisionedProductOutputsOutput
 */
export interface ServiceCatalogGetProvisionedProductOutputsOutput {
  /**
   * @schema ServiceCatalogGetProvisionedProductOutputsOutput#Outputs
   */
  readonly outputs?: ServiceCatalogRecordOutput[];

  /**
   * @schema ServiceCatalogGetProvisionedProductOutputsOutput#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ServiceCatalogImportAsProvisionedProductInput
 */
export interface ServiceCatalogImportAsProvisionedProductInput {
  /**
   * @schema ServiceCatalogImportAsProvisionedProductInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogImportAsProvisionedProductInput#ProductId
   */
  readonly productId: string;

  /**
   * @schema ServiceCatalogImportAsProvisionedProductInput#ProvisioningArtifactId
   */
  readonly provisioningArtifactId: string;

  /**
   * @schema ServiceCatalogImportAsProvisionedProductInput#ProvisionedProductName
   */
  readonly provisionedProductName: string;

  /**
   * @schema ServiceCatalogImportAsProvisionedProductInput#PhysicalId
   */
  readonly physicalId: string;

  /**
   * @schema ServiceCatalogImportAsProvisionedProductInput#IdempotencyToken
   */
  readonly idempotencyToken: string;

}

/**
 * @schema ServiceCatalogImportAsProvisionedProductOutput
 */
export interface ServiceCatalogImportAsProvisionedProductOutput {
  /**
   * @schema ServiceCatalogImportAsProvisionedProductOutput#RecordDetail
   */
  readonly recordDetail?: ServiceCatalogRecordDetail;

}

/**
 * @schema ServiceCatalogListAcceptedPortfolioSharesInput
 */
export interface ServiceCatalogListAcceptedPortfolioSharesInput {
  /**
   * @schema ServiceCatalogListAcceptedPortfolioSharesInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogListAcceptedPortfolioSharesInput#PageToken
   */
  readonly pageToken?: string;

  /**
   * @schema ServiceCatalogListAcceptedPortfolioSharesInput#PageSize
   */
  readonly pageSize?: number;

  /**
   * @schema ServiceCatalogListAcceptedPortfolioSharesInput#PortfolioShareType
   */
  readonly portfolioShareType?: string;

}

/**
 * @schema ServiceCatalogListAcceptedPortfolioSharesOutput
 */
export interface ServiceCatalogListAcceptedPortfolioSharesOutput {
  /**
   * @schema ServiceCatalogListAcceptedPortfolioSharesOutput#PortfolioDetails
   */
  readonly portfolioDetails?: ServiceCatalogPortfolioDetail[];

  /**
   * @schema ServiceCatalogListAcceptedPortfolioSharesOutput#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ServiceCatalogListBudgetsForResourceInput
 */
export interface ServiceCatalogListBudgetsForResourceInput {
  /**
   * @schema ServiceCatalogListBudgetsForResourceInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogListBudgetsForResourceInput#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema ServiceCatalogListBudgetsForResourceInput#PageSize
   */
  readonly pageSize?: number;

  /**
   * @schema ServiceCatalogListBudgetsForResourceInput#PageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema ServiceCatalogListBudgetsForResourceOutput
 */
export interface ServiceCatalogListBudgetsForResourceOutput {
  /**
   * @schema ServiceCatalogListBudgetsForResourceOutput#Budgets
   */
  readonly budgets?: ServiceCatalogBudgetDetail[];

  /**
   * @schema ServiceCatalogListBudgetsForResourceOutput#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ServiceCatalogListConstraintsForPortfolioInput
 */
export interface ServiceCatalogListConstraintsForPortfolioInput {
  /**
   * @schema ServiceCatalogListConstraintsForPortfolioInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogListConstraintsForPortfolioInput#PortfolioId
   */
  readonly portfolioId: string;

  /**
   * @schema ServiceCatalogListConstraintsForPortfolioInput#ProductId
   */
  readonly productId?: string;

  /**
   * @schema ServiceCatalogListConstraintsForPortfolioInput#PageSize
   */
  readonly pageSize?: number;

  /**
   * @schema ServiceCatalogListConstraintsForPortfolioInput#PageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema ServiceCatalogListConstraintsForPortfolioOutput
 */
export interface ServiceCatalogListConstraintsForPortfolioOutput {
  /**
   * @schema ServiceCatalogListConstraintsForPortfolioOutput#ConstraintDetails
   */
  readonly constraintDetails?: ServiceCatalogConstraintDetail[];

  /**
   * @schema ServiceCatalogListConstraintsForPortfolioOutput#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ServiceCatalogListLaunchPathsInput
 */
export interface ServiceCatalogListLaunchPathsInput {
  /**
   * @schema ServiceCatalogListLaunchPathsInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogListLaunchPathsInput#ProductId
   */
  readonly productId: string;

  /**
   * @schema ServiceCatalogListLaunchPathsInput#PageSize
   */
  readonly pageSize?: number;

  /**
   * @schema ServiceCatalogListLaunchPathsInput#PageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema ServiceCatalogListLaunchPathsOutput
 */
export interface ServiceCatalogListLaunchPathsOutput {
  /**
   * @schema ServiceCatalogListLaunchPathsOutput#LaunchPathSummaries
   */
  readonly launchPathSummaries?: ServiceCatalogLaunchPathSummary[];

  /**
   * @schema ServiceCatalogListLaunchPathsOutput#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ServiceCatalogListOrganizationPortfolioAccessInput
 */
export interface ServiceCatalogListOrganizationPortfolioAccessInput {
  /**
   * @schema ServiceCatalogListOrganizationPortfolioAccessInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogListOrganizationPortfolioAccessInput#PortfolioId
   */
  readonly portfolioId: string;

  /**
   * @schema ServiceCatalogListOrganizationPortfolioAccessInput#OrganizationNodeType
   */
  readonly organizationNodeType: string;

  /**
   * @schema ServiceCatalogListOrganizationPortfolioAccessInput#PageToken
   */
  readonly pageToken?: string;

  /**
   * @schema ServiceCatalogListOrganizationPortfolioAccessInput#PageSize
   */
  readonly pageSize?: number;

}

/**
 * @schema ServiceCatalogListOrganizationPortfolioAccessOutput
 */
export interface ServiceCatalogListOrganizationPortfolioAccessOutput {
  /**
   * @schema ServiceCatalogListOrganizationPortfolioAccessOutput#OrganizationNodes
   */
  readonly organizationNodes?: ServiceCatalogOrganizationNode[];

  /**
   * @schema ServiceCatalogListOrganizationPortfolioAccessOutput#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ServiceCatalogListPortfolioAccessInput
 */
export interface ServiceCatalogListPortfolioAccessInput {
  /**
   * @schema ServiceCatalogListPortfolioAccessInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogListPortfolioAccessInput#PortfolioId
   */
  readonly portfolioId: string;

  /**
   * @schema ServiceCatalogListPortfolioAccessInput#OrganizationParentId
   */
  readonly organizationParentId?: string;

  /**
   * @schema ServiceCatalogListPortfolioAccessInput#PageToken
   */
  readonly pageToken?: string;

  /**
   * @schema ServiceCatalogListPortfolioAccessInput#PageSize
   */
  readonly pageSize?: number;

}

/**
 * @schema ServiceCatalogListPortfolioAccessOutput
 */
export interface ServiceCatalogListPortfolioAccessOutput {
  /**
   * @schema ServiceCatalogListPortfolioAccessOutput#AccountIds
   */
  readonly accountIds?: string[];

  /**
   * @schema ServiceCatalogListPortfolioAccessOutput#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ServiceCatalogListPortfoliosInput
 */
export interface ServiceCatalogListPortfoliosInput {
  /**
   * @schema ServiceCatalogListPortfoliosInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogListPortfoliosInput#PageToken
   */
  readonly pageToken?: string;

  /**
   * @schema ServiceCatalogListPortfoliosInput#PageSize
   */
  readonly pageSize?: number;

}

/**
 * @schema ServiceCatalogListPortfoliosOutput
 */
export interface ServiceCatalogListPortfoliosOutput {
  /**
   * @schema ServiceCatalogListPortfoliosOutput#PortfolioDetails
   */
  readonly portfolioDetails?: ServiceCatalogPortfolioDetail[];

  /**
   * @schema ServiceCatalogListPortfoliosOutput#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ServiceCatalogListPortfoliosForProductInput
 */
export interface ServiceCatalogListPortfoliosForProductInput {
  /**
   * @schema ServiceCatalogListPortfoliosForProductInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogListPortfoliosForProductInput#ProductId
   */
  readonly productId: string;

  /**
   * @schema ServiceCatalogListPortfoliosForProductInput#PageToken
   */
  readonly pageToken?: string;

  /**
   * @schema ServiceCatalogListPortfoliosForProductInput#PageSize
   */
  readonly pageSize?: number;

}

/**
 * @schema ServiceCatalogListPortfoliosForProductOutput
 */
export interface ServiceCatalogListPortfoliosForProductOutput {
  /**
   * @schema ServiceCatalogListPortfoliosForProductOutput#PortfolioDetails
   */
  readonly portfolioDetails?: ServiceCatalogPortfolioDetail[];

  /**
   * @schema ServiceCatalogListPortfoliosForProductOutput#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ServiceCatalogListPrincipalsForPortfolioInput
 */
export interface ServiceCatalogListPrincipalsForPortfolioInput {
  /**
   * @schema ServiceCatalogListPrincipalsForPortfolioInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogListPrincipalsForPortfolioInput#PortfolioId
   */
  readonly portfolioId: string;

  /**
   * @schema ServiceCatalogListPrincipalsForPortfolioInput#PageSize
   */
  readonly pageSize?: number;

  /**
   * @schema ServiceCatalogListPrincipalsForPortfolioInput#PageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema ServiceCatalogListPrincipalsForPortfolioOutput
 */
export interface ServiceCatalogListPrincipalsForPortfolioOutput {
  /**
   * @schema ServiceCatalogListPrincipalsForPortfolioOutput#Principals
   */
  readonly principals?: ServiceCatalogPrincipal[];

  /**
   * @schema ServiceCatalogListPrincipalsForPortfolioOutput#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ServiceCatalogListProvisionedProductPlansInput
 */
export interface ServiceCatalogListProvisionedProductPlansInput {
  /**
   * @schema ServiceCatalogListProvisionedProductPlansInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogListProvisionedProductPlansInput#ProvisionProductId
   */
  readonly provisionProductId?: string;

  /**
   * @schema ServiceCatalogListProvisionedProductPlansInput#PageSize
   */
  readonly pageSize?: number;

  /**
   * @schema ServiceCatalogListProvisionedProductPlansInput#PageToken
   */
  readonly pageToken?: string;

  /**
   * @schema ServiceCatalogListProvisionedProductPlansInput#AccessLevelFilter
   */
  readonly accessLevelFilter?: ServiceCatalogAccessLevelFilter;

}

/**
 * @schema ServiceCatalogListProvisionedProductPlansOutput
 */
export interface ServiceCatalogListProvisionedProductPlansOutput {
  /**
   * @schema ServiceCatalogListProvisionedProductPlansOutput#ProvisionedProductPlans
   */
  readonly provisionedProductPlans?: ServiceCatalogProvisionedProductPlanSummary[];

  /**
   * @schema ServiceCatalogListProvisionedProductPlansOutput#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ServiceCatalogListProvisioningArtifactsInput
 */
export interface ServiceCatalogListProvisioningArtifactsInput {
  /**
   * @schema ServiceCatalogListProvisioningArtifactsInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogListProvisioningArtifactsInput#ProductId
   */
  readonly productId: string;

}

/**
 * @schema ServiceCatalogListProvisioningArtifactsOutput
 */
export interface ServiceCatalogListProvisioningArtifactsOutput {
  /**
   * @schema ServiceCatalogListProvisioningArtifactsOutput#ProvisioningArtifactDetails
   */
  readonly provisioningArtifactDetails?: ServiceCatalogProvisioningArtifactDetail[];

  /**
   * @schema ServiceCatalogListProvisioningArtifactsOutput#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ServiceCatalogListProvisioningArtifactsForServiceActionInput
 */
export interface ServiceCatalogListProvisioningArtifactsForServiceActionInput {
  /**
   * @schema ServiceCatalogListProvisioningArtifactsForServiceActionInput#ServiceActionId
   */
  readonly serviceActionId: string;

  /**
   * @schema ServiceCatalogListProvisioningArtifactsForServiceActionInput#PageSize
   */
  readonly pageSize?: number;

  /**
   * @schema ServiceCatalogListProvisioningArtifactsForServiceActionInput#PageToken
   */
  readonly pageToken?: string;

  /**
   * @schema ServiceCatalogListProvisioningArtifactsForServiceActionInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

}

/**
 * @schema ServiceCatalogListProvisioningArtifactsForServiceActionOutput
 */
export interface ServiceCatalogListProvisioningArtifactsForServiceActionOutput {
  /**
   * @schema ServiceCatalogListProvisioningArtifactsForServiceActionOutput#ProvisioningArtifactViews
   */
  readonly provisioningArtifactViews?: ServiceCatalogProvisioningArtifactView[];

  /**
   * @schema ServiceCatalogListProvisioningArtifactsForServiceActionOutput#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ServiceCatalogListRecordHistoryInput
 */
export interface ServiceCatalogListRecordHistoryInput {
  /**
   * @schema ServiceCatalogListRecordHistoryInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogListRecordHistoryInput#AccessLevelFilter
   */
  readonly accessLevelFilter?: ServiceCatalogAccessLevelFilter;

  /**
   * @schema ServiceCatalogListRecordHistoryInput#SearchFilter
   */
  readonly searchFilter?: ServiceCatalogListRecordHistorySearchFilter;

  /**
   * @schema ServiceCatalogListRecordHistoryInput#PageSize
   */
  readonly pageSize?: number;

  /**
   * @schema ServiceCatalogListRecordHistoryInput#PageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema ServiceCatalogListRecordHistoryOutput
 */
export interface ServiceCatalogListRecordHistoryOutput {
  /**
   * @schema ServiceCatalogListRecordHistoryOutput#RecordDetails
   */
  readonly recordDetails?: ServiceCatalogRecordDetail[];

  /**
   * @schema ServiceCatalogListRecordHistoryOutput#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ServiceCatalogListResourcesForTagOptionInput
 */
export interface ServiceCatalogListResourcesForTagOptionInput {
  /**
   * @schema ServiceCatalogListResourcesForTagOptionInput#TagOptionId
   */
  readonly tagOptionId: string;

  /**
   * @schema ServiceCatalogListResourcesForTagOptionInput#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema ServiceCatalogListResourcesForTagOptionInput#PageSize
   */
  readonly pageSize?: number;

  /**
   * @schema ServiceCatalogListResourcesForTagOptionInput#PageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema ServiceCatalogListResourcesForTagOptionOutput
 */
export interface ServiceCatalogListResourcesForTagOptionOutput {
  /**
   * @schema ServiceCatalogListResourcesForTagOptionOutput#ResourceDetails
   */
  readonly resourceDetails?: ServiceCatalogResourceDetail[];

  /**
   * @schema ServiceCatalogListResourcesForTagOptionOutput#PageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema ServiceCatalogListServiceActionsInput
 */
export interface ServiceCatalogListServiceActionsInput {
  /**
   * @schema ServiceCatalogListServiceActionsInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogListServiceActionsInput#PageSize
   */
  readonly pageSize?: number;

  /**
   * @schema ServiceCatalogListServiceActionsInput#PageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema ServiceCatalogListServiceActionsOutput
 */
export interface ServiceCatalogListServiceActionsOutput {
  /**
   * @schema ServiceCatalogListServiceActionsOutput#ServiceActionSummaries
   */
  readonly serviceActionSummaries?: ServiceCatalogServiceActionSummary[];

  /**
   * @schema ServiceCatalogListServiceActionsOutput#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ServiceCatalogListServiceActionsForProvisioningArtifactInput
 */
export interface ServiceCatalogListServiceActionsForProvisioningArtifactInput {
  /**
   * @schema ServiceCatalogListServiceActionsForProvisioningArtifactInput#ProductId
   */
  readonly productId: string;

  /**
   * @schema ServiceCatalogListServiceActionsForProvisioningArtifactInput#ProvisioningArtifactId
   */
  readonly provisioningArtifactId: string;

  /**
   * @schema ServiceCatalogListServiceActionsForProvisioningArtifactInput#PageSize
   */
  readonly pageSize?: number;

  /**
   * @schema ServiceCatalogListServiceActionsForProvisioningArtifactInput#PageToken
   */
  readonly pageToken?: string;

  /**
   * @schema ServiceCatalogListServiceActionsForProvisioningArtifactInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

}

/**
 * @schema ServiceCatalogListServiceActionsForProvisioningArtifactOutput
 */
export interface ServiceCatalogListServiceActionsForProvisioningArtifactOutput {
  /**
   * @schema ServiceCatalogListServiceActionsForProvisioningArtifactOutput#ServiceActionSummaries
   */
  readonly serviceActionSummaries?: ServiceCatalogServiceActionSummary[];

  /**
   * @schema ServiceCatalogListServiceActionsForProvisioningArtifactOutput#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ServiceCatalogListStackInstancesForProvisionedProductInput
 */
export interface ServiceCatalogListStackInstancesForProvisionedProductInput {
  /**
   * @schema ServiceCatalogListStackInstancesForProvisionedProductInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogListStackInstancesForProvisionedProductInput#ProvisionedProductId
   */
  readonly provisionedProductId: string;

  /**
   * @schema ServiceCatalogListStackInstancesForProvisionedProductInput#PageToken
   */
  readonly pageToken?: string;

  /**
   * @schema ServiceCatalogListStackInstancesForProvisionedProductInput#PageSize
   */
  readonly pageSize?: number;

}

/**
 * @schema ServiceCatalogListStackInstancesForProvisionedProductOutput
 */
export interface ServiceCatalogListStackInstancesForProvisionedProductOutput {
  /**
   * @schema ServiceCatalogListStackInstancesForProvisionedProductOutput#StackInstances
   */
  readonly stackInstances?: ServiceCatalogStackInstance[];

  /**
   * @schema ServiceCatalogListStackInstancesForProvisionedProductOutput#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ServiceCatalogListTagOptionsInput
 */
export interface ServiceCatalogListTagOptionsInput {
  /**
   * @schema ServiceCatalogListTagOptionsInput#Filters
   */
  readonly filters?: ServiceCatalogListTagOptionsFilters;

  /**
   * @schema ServiceCatalogListTagOptionsInput#PageSize
   */
  readonly pageSize?: number;

  /**
   * @schema ServiceCatalogListTagOptionsInput#PageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema ServiceCatalogListTagOptionsOutput
 */
export interface ServiceCatalogListTagOptionsOutput {
  /**
   * @schema ServiceCatalogListTagOptionsOutput#TagOptionDetails
   */
  readonly tagOptionDetails?: ServiceCatalogTagOptionDetail[];

  /**
   * @schema ServiceCatalogListTagOptionsOutput#PageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema ServiceCatalogProvisionProductInput
 */
export interface ServiceCatalogProvisionProductInput {
  /**
   * @schema ServiceCatalogProvisionProductInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogProvisionProductInput#ProductId
   */
  readonly productId?: string;

  /**
   * @schema ServiceCatalogProvisionProductInput#ProductName
   */
  readonly productName?: string;

  /**
   * @schema ServiceCatalogProvisionProductInput#ProvisioningArtifactId
   */
  readonly provisioningArtifactId?: string;

  /**
   * @schema ServiceCatalogProvisionProductInput#ProvisioningArtifactName
   */
  readonly provisioningArtifactName?: string;

  /**
   * @schema ServiceCatalogProvisionProductInput#PathId
   */
  readonly pathId?: string;

  /**
   * @schema ServiceCatalogProvisionProductInput#PathName
   */
  readonly pathName?: string;

  /**
   * @schema ServiceCatalogProvisionProductInput#ProvisionedProductName
   */
  readonly provisionedProductName: string;

  /**
   * @schema ServiceCatalogProvisionProductInput#ProvisioningParameters
   */
  readonly provisioningParameters?: ServiceCatalogProvisioningParameter[];

  /**
   * @schema ServiceCatalogProvisionProductInput#ProvisioningPreferences
   */
  readonly provisioningPreferences?: ServiceCatalogProvisioningPreferences;

  /**
   * @schema ServiceCatalogProvisionProductInput#Tags
   */
  readonly tags?: ServiceCatalogTag[];

  /**
   * @schema ServiceCatalogProvisionProductInput#NotificationArns
   */
  readonly notificationArns?: string[];

  /**
   * @schema ServiceCatalogProvisionProductInput#ProvisionToken
   */
  readonly provisionToken: string;

}

/**
 * @schema ServiceCatalogProvisionProductOutput
 */
export interface ServiceCatalogProvisionProductOutput {
  /**
   * @schema ServiceCatalogProvisionProductOutput#RecordDetail
   */
  readonly recordDetail?: ServiceCatalogRecordDetail;

}

/**
 * @schema ServiceCatalogRejectPortfolioShareInput
 */
export interface ServiceCatalogRejectPortfolioShareInput {
  /**
   * @schema ServiceCatalogRejectPortfolioShareInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogRejectPortfolioShareInput#PortfolioId
   */
  readonly portfolioId: string;

  /**
   * @schema ServiceCatalogRejectPortfolioShareInput#PortfolioShareType
   */
  readonly portfolioShareType?: string;

}

/**
 * @schema ServiceCatalogRejectPortfolioShareOutput
 */
export interface ServiceCatalogRejectPortfolioShareOutput {
}

/**
 * @schema ServiceCatalogScanProvisionedProductsInput
 */
export interface ServiceCatalogScanProvisionedProductsInput {
  /**
   * @schema ServiceCatalogScanProvisionedProductsInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogScanProvisionedProductsInput#AccessLevelFilter
   */
  readonly accessLevelFilter?: ServiceCatalogAccessLevelFilter;

  /**
   * @schema ServiceCatalogScanProvisionedProductsInput#PageSize
   */
  readonly pageSize?: number;

  /**
   * @schema ServiceCatalogScanProvisionedProductsInput#PageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema ServiceCatalogScanProvisionedProductsOutput
 */
export interface ServiceCatalogScanProvisionedProductsOutput {
  /**
   * @schema ServiceCatalogScanProvisionedProductsOutput#ProvisionedProducts
   */
  readonly provisionedProducts?: ServiceCatalogProvisionedProductDetail[];

  /**
   * @schema ServiceCatalogScanProvisionedProductsOutput#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ServiceCatalogSearchProductsInput
 */
export interface ServiceCatalogSearchProductsInput {
  /**
   * @schema ServiceCatalogSearchProductsInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogSearchProductsInput#Filters
   */
  readonly filters?: { [key: string]: string[] };

  /**
   * @schema ServiceCatalogSearchProductsInput#PageSize
   */
  readonly pageSize?: number;

  /**
   * @schema ServiceCatalogSearchProductsInput#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema ServiceCatalogSearchProductsInput#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema ServiceCatalogSearchProductsInput#PageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema ServiceCatalogSearchProductsOutput
 */
export interface ServiceCatalogSearchProductsOutput {
  /**
   * @schema ServiceCatalogSearchProductsOutput#ProductViewSummaries
   */
  readonly productViewSummaries?: ServiceCatalogProductViewSummary[];

  /**
   * @schema ServiceCatalogSearchProductsOutput#ProductViewAggregations
   */
  readonly productViewAggregations?: { [key: string]: ServiceCatalogProductViewAggregationValue[] };

  /**
   * @schema ServiceCatalogSearchProductsOutput#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ServiceCatalogSearchProductsAsAdminInput
 */
export interface ServiceCatalogSearchProductsAsAdminInput {
  /**
   * @schema ServiceCatalogSearchProductsAsAdminInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogSearchProductsAsAdminInput#PortfolioId
   */
  readonly portfolioId?: string;

  /**
   * @schema ServiceCatalogSearchProductsAsAdminInput#Filters
   */
  readonly filters?: { [key: string]: string[] };

  /**
   * @schema ServiceCatalogSearchProductsAsAdminInput#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema ServiceCatalogSearchProductsAsAdminInput#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema ServiceCatalogSearchProductsAsAdminInput#PageToken
   */
  readonly pageToken?: string;

  /**
   * @schema ServiceCatalogSearchProductsAsAdminInput#PageSize
   */
  readonly pageSize?: number;

  /**
   * @schema ServiceCatalogSearchProductsAsAdminInput#ProductSource
   */
  readonly productSource?: string;

}

/**
 * @schema ServiceCatalogSearchProductsAsAdminOutput
 */
export interface ServiceCatalogSearchProductsAsAdminOutput {
  /**
   * @schema ServiceCatalogSearchProductsAsAdminOutput#ProductViewDetails
   */
  readonly productViewDetails?: ServiceCatalogProductViewDetail[];

  /**
   * @schema ServiceCatalogSearchProductsAsAdminOutput#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ServiceCatalogSearchProvisionedProductsInput
 */
export interface ServiceCatalogSearchProvisionedProductsInput {
  /**
   * @schema ServiceCatalogSearchProvisionedProductsInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogSearchProvisionedProductsInput#AccessLevelFilter
   */
  readonly accessLevelFilter?: ServiceCatalogAccessLevelFilter;

  /**
   * @schema ServiceCatalogSearchProvisionedProductsInput#Filters
   */
  readonly filters?: { [key: string]: string[] };

  /**
   * @schema ServiceCatalogSearchProvisionedProductsInput#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema ServiceCatalogSearchProvisionedProductsInput#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema ServiceCatalogSearchProvisionedProductsInput#PageSize
   */
  readonly pageSize?: number;

  /**
   * @schema ServiceCatalogSearchProvisionedProductsInput#PageToken
   */
  readonly pageToken?: string;

}

/**
 * @schema ServiceCatalogSearchProvisionedProductsOutput
 */
export interface ServiceCatalogSearchProvisionedProductsOutput {
  /**
   * @schema ServiceCatalogSearchProvisionedProductsOutput#ProvisionedProducts
   */
  readonly provisionedProducts?: ServiceCatalogProvisionedProductAttribute[];

  /**
   * @schema ServiceCatalogSearchProvisionedProductsOutput#TotalResultsCount
   */
  readonly totalResultsCount?: number;

  /**
   * @schema ServiceCatalogSearchProvisionedProductsOutput#NextPageToken
   */
  readonly nextPageToken?: string;

}

/**
 * @schema ServiceCatalogTerminateProvisionedProductInput
 */
export interface ServiceCatalogTerminateProvisionedProductInput {
  /**
   * @schema ServiceCatalogTerminateProvisionedProductInput#ProvisionedProductName
   */
  readonly provisionedProductName?: string;

  /**
   * @schema ServiceCatalogTerminateProvisionedProductInput#ProvisionedProductId
   */
  readonly provisionedProductId?: string;

  /**
   * @schema ServiceCatalogTerminateProvisionedProductInput#TerminateToken
   */
  readonly terminateToken: string;

  /**
   * @schema ServiceCatalogTerminateProvisionedProductInput#IgnoreErrors
   */
  readonly ignoreErrors?: boolean;

  /**
   * @schema ServiceCatalogTerminateProvisionedProductInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogTerminateProvisionedProductInput#RetainPhysicalResources
   */
  readonly retainPhysicalResources?: boolean;

}

/**
 * @schema ServiceCatalogTerminateProvisionedProductOutput
 */
export interface ServiceCatalogTerminateProvisionedProductOutput {
  /**
   * @schema ServiceCatalogTerminateProvisionedProductOutput#RecordDetail
   */
  readonly recordDetail?: ServiceCatalogRecordDetail;

}

/**
 * @schema ServiceCatalogUpdateConstraintInput
 */
export interface ServiceCatalogUpdateConstraintInput {
  /**
   * @schema ServiceCatalogUpdateConstraintInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogUpdateConstraintInput#Id
   */
  readonly id: string;

  /**
   * @schema ServiceCatalogUpdateConstraintInput#Description
   */
  readonly description?: string;

  /**
   * @schema ServiceCatalogUpdateConstraintInput#Parameters
   */
  readonly parameters?: string;

}

/**
 * @schema ServiceCatalogUpdateConstraintOutput
 */
export interface ServiceCatalogUpdateConstraintOutput {
  /**
   * @schema ServiceCatalogUpdateConstraintOutput#ConstraintDetail
   */
  readonly constraintDetail?: ServiceCatalogConstraintDetail;

  /**
   * @schema ServiceCatalogUpdateConstraintOutput#ConstraintParameters
   */
  readonly constraintParameters?: string;

  /**
   * @schema ServiceCatalogUpdateConstraintOutput#Status
   */
  readonly status?: string;

}

/**
 * @schema ServiceCatalogUpdatePortfolioInput
 */
export interface ServiceCatalogUpdatePortfolioInput {
  /**
   * @schema ServiceCatalogUpdatePortfolioInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogUpdatePortfolioInput#Id
   */
  readonly id: string;

  /**
   * @schema ServiceCatalogUpdatePortfolioInput#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema ServiceCatalogUpdatePortfolioInput#Description
   */
  readonly description?: string;

  /**
   * @schema ServiceCatalogUpdatePortfolioInput#ProviderName
   */
  readonly providerName?: string;

  /**
   * @schema ServiceCatalogUpdatePortfolioInput#AddTags
   */
  readonly addTags?: ServiceCatalogTag[];

  /**
   * @schema ServiceCatalogUpdatePortfolioInput#RemoveTags
   */
  readonly removeTags?: string[];

}

/**
 * @schema ServiceCatalogUpdatePortfolioOutput
 */
export interface ServiceCatalogUpdatePortfolioOutput {
  /**
   * @schema ServiceCatalogUpdatePortfolioOutput#PortfolioDetail
   */
  readonly portfolioDetail?: ServiceCatalogPortfolioDetail;

  /**
   * @schema ServiceCatalogUpdatePortfolioOutput#Tags
   */
  readonly tags?: ServiceCatalogTag[];

}

/**
 * @schema ServiceCatalogUpdateProductInput
 */
export interface ServiceCatalogUpdateProductInput {
  /**
   * @schema ServiceCatalogUpdateProductInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogUpdateProductInput#Id
   */
  readonly id: string;

  /**
   * @schema ServiceCatalogUpdateProductInput#Name
   */
  readonly name?: string;

  /**
   * @schema ServiceCatalogUpdateProductInput#Owner
   */
  readonly owner?: string;

  /**
   * @schema ServiceCatalogUpdateProductInput#Description
   */
  readonly description?: string;

  /**
   * @schema ServiceCatalogUpdateProductInput#Distributor
   */
  readonly distributor?: string;

  /**
   * @schema ServiceCatalogUpdateProductInput#SupportDescription
   */
  readonly supportDescription?: string;

  /**
   * @schema ServiceCatalogUpdateProductInput#SupportEmail
   */
  readonly supportEmail?: string;

  /**
   * @schema ServiceCatalogUpdateProductInput#SupportUrl
   */
  readonly supportUrl?: string;

  /**
   * @schema ServiceCatalogUpdateProductInput#AddTags
   */
  readonly addTags?: ServiceCatalogTag[];

  /**
   * @schema ServiceCatalogUpdateProductInput#RemoveTags
   */
  readonly removeTags?: string[];

}

/**
 * @schema ServiceCatalogUpdateProductOutput
 */
export interface ServiceCatalogUpdateProductOutput {
  /**
   * @schema ServiceCatalogUpdateProductOutput#ProductViewDetail
   */
  readonly productViewDetail?: ServiceCatalogProductViewDetail;

  /**
   * @schema ServiceCatalogUpdateProductOutput#Tags
   */
  readonly tags?: ServiceCatalogTag[];

}

/**
 * @schema ServiceCatalogUpdateProvisionedProductInput
 */
export interface ServiceCatalogUpdateProvisionedProductInput {
  /**
   * @schema ServiceCatalogUpdateProvisionedProductInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogUpdateProvisionedProductInput#ProvisionedProductName
   */
  readonly provisionedProductName?: string;

  /**
   * @schema ServiceCatalogUpdateProvisionedProductInput#ProvisionedProductId
   */
  readonly provisionedProductId?: string;

  /**
   * @schema ServiceCatalogUpdateProvisionedProductInput#ProductId
   */
  readonly productId?: string;

  /**
   * @schema ServiceCatalogUpdateProvisionedProductInput#ProductName
   */
  readonly productName?: string;

  /**
   * @schema ServiceCatalogUpdateProvisionedProductInput#ProvisioningArtifactId
   */
  readonly provisioningArtifactId?: string;

  /**
   * @schema ServiceCatalogUpdateProvisionedProductInput#ProvisioningArtifactName
   */
  readonly provisioningArtifactName?: string;

  /**
   * @schema ServiceCatalogUpdateProvisionedProductInput#PathId
   */
  readonly pathId?: string;

  /**
   * @schema ServiceCatalogUpdateProvisionedProductInput#PathName
   */
  readonly pathName?: string;

  /**
   * @schema ServiceCatalogUpdateProvisionedProductInput#ProvisioningParameters
   */
  readonly provisioningParameters?: ServiceCatalogUpdateProvisioningParameter[];

  /**
   * @schema ServiceCatalogUpdateProvisionedProductInput#ProvisioningPreferences
   */
  readonly provisioningPreferences?: ServiceCatalogUpdateProvisioningPreferences;

  /**
   * @schema ServiceCatalogUpdateProvisionedProductInput#Tags
   */
  readonly tags?: ServiceCatalogTag[];

  /**
   * @schema ServiceCatalogUpdateProvisionedProductInput#UpdateToken
   */
  readonly updateToken: string;

}

/**
 * @schema ServiceCatalogUpdateProvisionedProductOutput
 */
export interface ServiceCatalogUpdateProvisionedProductOutput {
  /**
   * @schema ServiceCatalogUpdateProvisionedProductOutput#RecordDetail
   */
  readonly recordDetail?: ServiceCatalogRecordDetail;

}

/**
 * @schema ServiceCatalogUpdateProvisionedProductPropertiesInput
 */
export interface ServiceCatalogUpdateProvisionedProductPropertiesInput {
  /**
   * @schema ServiceCatalogUpdateProvisionedProductPropertiesInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogUpdateProvisionedProductPropertiesInput#ProvisionedProductId
   */
  readonly provisionedProductId: string;

  /**
   * @schema ServiceCatalogUpdateProvisionedProductPropertiesInput#ProvisionedProductProperties
   */
  readonly provisionedProductProperties: { [key: string]: string };

  /**
   * @schema ServiceCatalogUpdateProvisionedProductPropertiesInput#IdempotencyToken
   */
  readonly idempotencyToken: string;

}

/**
 * @schema ServiceCatalogUpdateProvisionedProductPropertiesOutput
 */
export interface ServiceCatalogUpdateProvisionedProductPropertiesOutput {
  /**
   * @schema ServiceCatalogUpdateProvisionedProductPropertiesOutput#ProvisionedProductId
   */
  readonly provisionedProductId?: string;

  /**
   * @schema ServiceCatalogUpdateProvisionedProductPropertiesOutput#ProvisionedProductProperties
   */
  readonly provisionedProductProperties?: { [key: string]: string };

  /**
   * @schema ServiceCatalogUpdateProvisionedProductPropertiesOutput#RecordId
   */
  readonly recordId?: string;

  /**
   * @schema ServiceCatalogUpdateProvisionedProductPropertiesOutput#Status
   */
  readonly status?: string;

}

/**
 * @schema ServiceCatalogUpdateProvisioningArtifactInput
 */
export interface ServiceCatalogUpdateProvisioningArtifactInput {
  /**
   * @schema ServiceCatalogUpdateProvisioningArtifactInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogUpdateProvisioningArtifactInput#ProductId
   */
  readonly productId: string;

  /**
   * @schema ServiceCatalogUpdateProvisioningArtifactInput#ProvisioningArtifactId
   */
  readonly provisioningArtifactId: string;

  /**
   * @schema ServiceCatalogUpdateProvisioningArtifactInput#Name
   */
  readonly name?: string;

  /**
   * @schema ServiceCatalogUpdateProvisioningArtifactInput#Description
   */
  readonly description?: string;

  /**
   * @schema ServiceCatalogUpdateProvisioningArtifactInput#Active
   */
  readonly active?: boolean;

  /**
   * @schema ServiceCatalogUpdateProvisioningArtifactInput#Guidance
   */
  readonly guidance?: string;

}

/**
 * @schema ServiceCatalogUpdateProvisioningArtifactOutput
 */
export interface ServiceCatalogUpdateProvisioningArtifactOutput {
  /**
   * @schema ServiceCatalogUpdateProvisioningArtifactOutput#ProvisioningArtifactDetail
   */
  readonly provisioningArtifactDetail?: ServiceCatalogProvisioningArtifactDetail;

  /**
   * @schema ServiceCatalogUpdateProvisioningArtifactOutput#Info
   */
  readonly info?: { [key: string]: string };

  /**
   * @schema ServiceCatalogUpdateProvisioningArtifactOutput#Status
   */
  readonly status?: string;

}

/**
 * @schema ServiceCatalogUpdateServiceActionInput
 */
export interface ServiceCatalogUpdateServiceActionInput {
  /**
   * @schema ServiceCatalogUpdateServiceActionInput#Id
   */
  readonly id: string;

  /**
   * @schema ServiceCatalogUpdateServiceActionInput#Name
   */
  readonly name?: string;

  /**
   * @schema ServiceCatalogUpdateServiceActionInput#Definition
   */
  readonly definition?: { [key: string]: string };

  /**
   * @schema ServiceCatalogUpdateServiceActionInput#Description
   */
  readonly description?: string;

  /**
   * @schema ServiceCatalogUpdateServiceActionInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

}

/**
 * @schema ServiceCatalogUpdateServiceActionOutput
 */
export interface ServiceCatalogUpdateServiceActionOutput {
  /**
   * @schema ServiceCatalogUpdateServiceActionOutput#ServiceActionDetail
   */
  readonly serviceActionDetail?: ServiceCatalogServiceActionDetail;

}

/**
 * @schema ServiceCatalogUpdateTagOptionInput
 */
export interface ServiceCatalogUpdateTagOptionInput {
  /**
   * @schema ServiceCatalogUpdateTagOptionInput#Id
   */
  readonly id: string;

  /**
   * @schema ServiceCatalogUpdateTagOptionInput#Value
   */
  readonly value?: string;

  /**
   * @schema ServiceCatalogUpdateTagOptionInput#Active
   */
  readonly active?: boolean;

}

/**
 * @schema ServiceCatalogUpdateTagOptionOutput
 */
export interface ServiceCatalogUpdateTagOptionOutput {
  /**
   * @schema ServiceCatalogUpdateTagOptionOutput#TagOptionDetail
   */
  readonly tagOptionDetail?: ServiceCatalogTagOptionDetail;

}

/**
 * @schema ServiceCatalogServiceActionAssociation
 */
export interface ServiceCatalogServiceActionAssociation {
  /**
   * @schema ServiceCatalogServiceActionAssociation#ServiceActionId
   */
  readonly serviceActionId: string;

  /**
   * @schema ServiceCatalogServiceActionAssociation#ProductId
   */
  readonly productId: string;

  /**
   * @schema ServiceCatalogServiceActionAssociation#ProvisioningArtifactId
   */
  readonly provisioningArtifactId: string;

}

/**
 * @schema ServiceCatalogFailedServiceActionAssociation
 */
export interface ServiceCatalogFailedServiceActionAssociation {
  /**
   * @schema ServiceCatalogFailedServiceActionAssociation#ServiceActionId
   */
  readonly serviceActionId?: string;

  /**
   * @schema ServiceCatalogFailedServiceActionAssociation#ProductId
   */
  readonly productId?: string;

  /**
   * @schema ServiceCatalogFailedServiceActionAssociation#ProvisioningArtifactId
   */
  readonly provisioningArtifactId?: string;

  /**
   * @schema ServiceCatalogFailedServiceActionAssociation#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema ServiceCatalogFailedServiceActionAssociation#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema ServiceCatalogConstraintDetail
 */
export interface ServiceCatalogConstraintDetail {
  /**
   * @schema ServiceCatalogConstraintDetail#ConstraintId
   */
  readonly constraintId?: string;

  /**
   * @schema ServiceCatalogConstraintDetail#Type
   */
  readonly type?: string;

  /**
   * @schema ServiceCatalogConstraintDetail#Description
   */
  readonly description?: string;

  /**
   * @schema ServiceCatalogConstraintDetail#Owner
   */
  readonly owner?: string;

  /**
   * @schema ServiceCatalogConstraintDetail#ProductId
   */
  readonly productId?: string;

  /**
   * @schema ServiceCatalogConstraintDetail#PortfolioId
   */
  readonly portfolioId?: string;

}

/**
 * @schema ServiceCatalogTag
 */
export interface ServiceCatalogTag {
  /**
   * @schema ServiceCatalogTag#Key
   */
  readonly key: string;

  /**
   * @schema ServiceCatalogTag#Value
   */
  readonly value: string;

}

/**
 * @schema ServiceCatalogPortfolioDetail
 */
export interface ServiceCatalogPortfolioDetail {
  /**
   * @schema ServiceCatalogPortfolioDetail#Id
   */
  readonly id?: string;

  /**
   * @schema ServiceCatalogPortfolioDetail#ARN
   */
  readonly arn?: string;

  /**
   * @schema ServiceCatalogPortfolioDetail#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema ServiceCatalogPortfolioDetail#Description
   */
  readonly description?: string;

  /**
   * @schema ServiceCatalogPortfolioDetail#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema ServiceCatalogPortfolioDetail#ProviderName
   */
  readonly providerName?: string;

}

/**
 * @schema ServiceCatalogOrganizationNode
 */
export interface ServiceCatalogOrganizationNode {
  /**
   * @schema ServiceCatalogOrganizationNode#Type
   */
  readonly type?: string;

  /**
   * @schema ServiceCatalogOrganizationNode#Value
   */
  readonly value?: string;

}

/**
 * @schema ServiceCatalogProvisioningArtifactProperties
 */
export interface ServiceCatalogProvisioningArtifactProperties {
  /**
   * @schema ServiceCatalogProvisioningArtifactProperties#Name
   */
  readonly name?: string;

  /**
   * @schema ServiceCatalogProvisioningArtifactProperties#Description
   */
  readonly description?: string;

  /**
   * @schema ServiceCatalogProvisioningArtifactProperties#Info
   */
  readonly info: { [key: string]: string };

  /**
   * @schema ServiceCatalogProvisioningArtifactProperties#Type
   */
  readonly type?: string;

  /**
   * @schema ServiceCatalogProvisioningArtifactProperties#DisableTemplateValidation
   */
  readonly disableTemplateValidation?: boolean;

}

/**
 * @schema ServiceCatalogProductViewDetail
 */
export interface ServiceCatalogProductViewDetail {
  /**
   * @schema ServiceCatalogProductViewDetail#ProductViewSummary
   */
  readonly productViewSummary?: ServiceCatalogProductViewSummary;

  /**
   * @schema ServiceCatalogProductViewDetail#Status
   */
  readonly status?: string;

  /**
   * @schema ServiceCatalogProductViewDetail#ProductARN
   */
  readonly productArn?: string;

  /**
   * @schema ServiceCatalogProductViewDetail#CreatedTime
   */
  readonly createdTime?: string;

}

/**
 * @schema ServiceCatalogProvisioningArtifactDetail
 */
export interface ServiceCatalogProvisioningArtifactDetail {
  /**
   * @schema ServiceCatalogProvisioningArtifactDetail#Id
   */
  readonly id?: string;

  /**
   * @schema ServiceCatalogProvisioningArtifactDetail#Name
   */
  readonly name?: string;

  /**
   * @schema ServiceCatalogProvisioningArtifactDetail#Description
   */
  readonly description?: string;

  /**
   * @schema ServiceCatalogProvisioningArtifactDetail#Type
   */
  readonly type?: string;

  /**
   * @schema ServiceCatalogProvisioningArtifactDetail#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema ServiceCatalogProvisioningArtifactDetail#Active
   */
  readonly active?: boolean;

  /**
   * @schema ServiceCatalogProvisioningArtifactDetail#Guidance
   */
  readonly guidance?: string;

}

/**
 * @schema ServiceCatalogUpdateProvisioningParameter
 */
export interface ServiceCatalogUpdateProvisioningParameter {
  /**
   * @schema ServiceCatalogUpdateProvisioningParameter#Key
   */
  readonly key?: string;

  /**
   * @schema ServiceCatalogUpdateProvisioningParameter#Value
   */
  readonly value?: string;

  /**
   * @schema ServiceCatalogUpdateProvisioningParameter#UsePreviousValue
   */
  readonly usePreviousValue?: boolean;

}

/**
 * @schema ServiceCatalogServiceActionDetail
 */
export interface ServiceCatalogServiceActionDetail {
  /**
   * @schema ServiceCatalogServiceActionDetail#ServiceActionSummary
   */
  readonly serviceActionSummary?: ServiceCatalogServiceActionSummary;

  /**
   * @schema ServiceCatalogServiceActionDetail#Definition
   */
  readonly definition?: { [key: string]: string };

}

/**
 * @schema ServiceCatalogTagOptionDetail
 */
export interface ServiceCatalogTagOptionDetail {
  /**
   * @schema ServiceCatalogTagOptionDetail#Key
   */
  readonly key?: string;

  /**
   * @schema ServiceCatalogTagOptionDetail#Value
   */
  readonly value?: string;

  /**
   * @schema ServiceCatalogTagOptionDetail#Active
   */
  readonly active?: boolean;

  /**
   * @schema ServiceCatalogTagOptionDetail#Id
   */
  readonly id?: string;

}

/**
 * @schema ServiceCatalogBudgetDetail
 */
export interface ServiceCatalogBudgetDetail {
  /**
   * @schema ServiceCatalogBudgetDetail#BudgetName
   */
  readonly budgetName?: string;

}

/**
 * @schema ServiceCatalogShareDetails
 */
export interface ServiceCatalogShareDetails {
  /**
   * @schema ServiceCatalogShareDetails#SuccessfulShares
   */
  readonly successfulShares?: string[];

  /**
   * @schema ServiceCatalogShareDetails#ShareErrors
   */
  readonly shareErrors?: ServiceCatalogShareError[];

}

/**
 * @schema ServiceCatalogProductViewSummary
 */
export interface ServiceCatalogProductViewSummary {
  /**
   * @schema ServiceCatalogProductViewSummary#Id
   */
  readonly id?: string;

  /**
   * @schema ServiceCatalogProductViewSummary#ProductId
   */
  readonly productId?: string;

  /**
   * @schema ServiceCatalogProductViewSummary#Name
   */
  readonly name?: string;

  /**
   * @schema ServiceCatalogProductViewSummary#Owner
   */
  readonly owner?: string;

  /**
   * @schema ServiceCatalogProductViewSummary#ShortDescription
   */
  readonly shortDescription?: string;

  /**
   * @schema ServiceCatalogProductViewSummary#Type
   */
  readonly type?: string;

  /**
   * @schema ServiceCatalogProductViewSummary#Distributor
   */
  readonly distributor?: string;

  /**
   * @schema ServiceCatalogProductViewSummary#HasDefaultPath
   */
  readonly hasDefaultPath?: boolean;

  /**
   * @schema ServiceCatalogProductViewSummary#SupportEmail
   */
  readonly supportEmail?: string;

  /**
   * @schema ServiceCatalogProductViewSummary#SupportDescription
   */
  readonly supportDescription?: string;

  /**
   * @schema ServiceCatalogProductViewSummary#SupportUrl
   */
  readonly supportUrl?: string;

}

/**
 * @schema ServiceCatalogProvisioningArtifact
 */
export interface ServiceCatalogProvisioningArtifact {
  /**
   * @schema ServiceCatalogProvisioningArtifact#Id
   */
  readonly id?: string;

  /**
   * @schema ServiceCatalogProvisioningArtifact#Name
   */
  readonly name?: string;

  /**
   * @schema ServiceCatalogProvisioningArtifact#Description
   */
  readonly description?: string;

  /**
   * @schema ServiceCatalogProvisioningArtifact#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema ServiceCatalogProvisioningArtifact#Guidance
   */
  readonly guidance?: string;

}

/**
 * @schema ServiceCatalogLaunchPath
 */
export interface ServiceCatalogLaunchPath {
  /**
   * @schema ServiceCatalogLaunchPath#Id
   */
  readonly id?: string;

  /**
   * @schema ServiceCatalogLaunchPath#Name
   */
  readonly name?: string;

}

/**
 * @schema ServiceCatalogProvisioningArtifactSummary
 */
export interface ServiceCatalogProvisioningArtifactSummary {
  /**
   * @schema ServiceCatalogProvisioningArtifactSummary#Id
   */
  readonly id?: string;

  /**
   * @schema ServiceCatalogProvisioningArtifactSummary#Name
   */
  readonly name?: string;

  /**
   * @schema ServiceCatalogProvisioningArtifactSummary#Description
   */
  readonly description?: string;

  /**
   * @schema ServiceCatalogProvisioningArtifactSummary#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema ServiceCatalogProvisioningArtifactSummary#ProvisioningArtifactMetadata
   */
  readonly provisioningArtifactMetadata?: { [key: string]: string };

}

/**
 * @schema ServiceCatalogProvisionedProductDetail
 */
export interface ServiceCatalogProvisionedProductDetail {
  /**
   * @schema ServiceCatalogProvisionedProductDetail#Name
   */
  readonly name?: string;

  /**
   * @schema ServiceCatalogProvisionedProductDetail#Arn
   */
  readonly arn?: string;

  /**
   * @schema ServiceCatalogProvisionedProductDetail#Type
   */
  readonly type?: string;

  /**
   * @schema ServiceCatalogProvisionedProductDetail#Id
   */
  readonly id?: string;

  /**
   * @schema ServiceCatalogProvisionedProductDetail#Status
   */
  readonly status?: string;

  /**
   * @schema ServiceCatalogProvisionedProductDetail#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema ServiceCatalogProvisionedProductDetail#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema ServiceCatalogProvisionedProductDetail#IdempotencyToken
   */
  readonly idempotencyToken?: string;

  /**
   * @schema ServiceCatalogProvisionedProductDetail#LastRecordId
   */
  readonly lastRecordId?: string;

  /**
   * @schema ServiceCatalogProvisionedProductDetail#LastProvisioningRecordId
   */
  readonly lastProvisioningRecordId?: string;

  /**
   * @schema ServiceCatalogProvisionedProductDetail#LastSuccessfulProvisioningRecordId
   */
  readonly lastSuccessfulProvisioningRecordId?: string;

  /**
   * @schema ServiceCatalogProvisionedProductDetail#ProductId
   */
  readonly productId?: string;

  /**
   * @schema ServiceCatalogProvisionedProductDetail#ProvisioningArtifactId
   */
  readonly provisioningArtifactId?: string;

  /**
   * @schema ServiceCatalogProvisionedProductDetail#LaunchRoleArn
   */
  readonly launchRoleArn?: string;

}

/**
 * @schema ServiceCatalogCloudWatchDashboard
 */
export interface ServiceCatalogCloudWatchDashboard {
  /**
   * @schema ServiceCatalogCloudWatchDashboard#Name
   */
  readonly name?: string;

}

/**
 * @schema ServiceCatalogProvisionedProductPlanDetails
 */
export interface ServiceCatalogProvisionedProductPlanDetails {
  /**
   * @schema ServiceCatalogProvisionedProductPlanDetails#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema ServiceCatalogProvisionedProductPlanDetails#PathId
   */
  readonly pathId?: string;

  /**
   * @schema ServiceCatalogProvisionedProductPlanDetails#ProductId
   */
  readonly productId?: string;

  /**
   * @schema ServiceCatalogProvisionedProductPlanDetails#PlanName
   */
  readonly planName?: string;

  /**
   * @schema ServiceCatalogProvisionedProductPlanDetails#PlanId
   */
  readonly planId?: string;

  /**
   * @schema ServiceCatalogProvisionedProductPlanDetails#ProvisionProductId
   */
  readonly provisionProductId?: string;

  /**
   * @schema ServiceCatalogProvisionedProductPlanDetails#ProvisionProductName
   */
  readonly provisionProductName?: string;

  /**
   * @schema ServiceCatalogProvisionedProductPlanDetails#PlanType
   */
  readonly planType?: string;

  /**
   * @schema ServiceCatalogProvisionedProductPlanDetails#ProvisioningArtifactId
   */
  readonly provisioningArtifactId?: string;

  /**
   * @schema ServiceCatalogProvisionedProductPlanDetails#Status
   */
  readonly status?: string;

  /**
   * @schema ServiceCatalogProvisionedProductPlanDetails#UpdatedTime
   */
  readonly updatedTime?: string;

  /**
   * @schema ServiceCatalogProvisionedProductPlanDetails#NotificationArns
   */
  readonly notificationArns?: string[];

  /**
   * @schema ServiceCatalogProvisionedProductPlanDetails#ProvisioningParameters
   */
  readonly provisioningParameters?: ServiceCatalogUpdateProvisioningParameter[];

  /**
   * @schema ServiceCatalogProvisionedProductPlanDetails#Tags
   */
  readonly tags?: ServiceCatalogTag[];

  /**
   * @schema ServiceCatalogProvisionedProductPlanDetails#StatusMessage
   */
  readonly statusMessage?: string;

}

/**
 * @schema ServiceCatalogResourceChange
 */
export interface ServiceCatalogResourceChange {
  /**
   * @schema ServiceCatalogResourceChange#Action
   */
  readonly action?: string;

  /**
   * @schema ServiceCatalogResourceChange#LogicalResourceId
   */
  readonly logicalResourceId?: string;

  /**
   * @schema ServiceCatalogResourceChange#PhysicalResourceId
   */
  readonly physicalResourceId?: string;

  /**
   * @schema ServiceCatalogResourceChange#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema ServiceCatalogResourceChange#Replacement
   */
  readonly replacement?: string;

  /**
   * @schema ServiceCatalogResourceChange#Scope
   */
  readonly scope?: string[];

  /**
   * @schema ServiceCatalogResourceChange#Details
   */
  readonly details?: ServiceCatalogResourceChangeDetail[];

}

/**
 * @schema ServiceCatalogProvisioningArtifactParameter
 */
export interface ServiceCatalogProvisioningArtifactParameter {
  /**
   * @schema ServiceCatalogProvisioningArtifactParameter#ParameterKey
   */
  readonly parameterKey?: string;

  /**
   * @schema ServiceCatalogProvisioningArtifactParameter#DefaultValue
   */
  readonly defaultValue?: string;

  /**
   * @schema ServiceCatalogProvisioningArtifactParameter#ParameterType
   */
  readonly parameterType?: string;

  /**
   * @schema ServiceCatalogProvisioningArtifactParameter#IsNoEcho
   */
  readonly isNoEcho?: boolean;

  /**
   * @schema ServiceCatalogProvisioningArtifactParameter#Description
   */
  readonly description?: string;

  /**
   * @schema ServiceCatalogProvisioningArtifactParameter#ParameterConstraints
   */
  readonly parameterConstraints?: ServiceCatalogParameterConstraints;

}

/**
 * @schema ServiceCatalogConstraintSummary
 */
export interface ServiceCatalogConstraintSummary {
  /**
   * @schema ServiceCatalogConstraintSummary#Type
   */
  readonly type?: string;

  /**
   * @schema ServiceCatalogConstraintSummary#Description
   */
  readonly description?: string;

}

/**
 * @schema ServiceCatalogUsageInstruction
 */
export interface ServiceCatalogUsageInstruction {
  /**
   * @schema ServiceCatalogUsageInstruction#Type
   */
  readonly type?: string;

  /**
   * @schema ServiceCatalogUsageInstruction#Value
   */
  readonly value?: string;

}

/**
 * @schema ServiceCatalogTagOptionSummary
 */
export interface ServiceCatalogTagOptionSummary {
  /**
   * @schema ServiceCatalogTagOptionSummary#Key
   */
  readonly key?: string;

  /**
   * @schema ServiceCatalogTagOptionSummary#Values
   */
  readonly values?: string[];

}

/**
 * @schema ServiceCatalogProvisioningArtifactPreferences
 */
export interface ServiceCatalogProvisioningArtifactPreferences {
  /**
   * @schema ServiceCatalogProvisioningArtifactPreferences#StackSetAccounts
   */
  readonly stackSetAccounts?: string[];

  /**
   * @schema ServiceCatalogProvisioningArtifactPreferences#StackSetRegions
   */
  readonly stackSetRegions?: string[];

}

/**
 * @schema ServiceCatalogProvisioningArtifactOutput
 */
export interface ServiceCatalogProvisioningArtifactOutput {
  /**
   * @schema ServiceCatalogProvisioningArtifactOutput#Key
   */
  readonly key?: string;

  /**
   * @schema ServiceCatalogProvisioningArtifactOutput#Description
   */
  readonly description?: string;

}

/**
 * @schema ServiceCatalogRecordDetail
 */
export interface ServiceCatalogRecordDetail {
  /**
   * @schema ServiceCatalogRecordDetail#RecordId
   */
  readonly recordId?: string;

  /**
   * @schema ServiceCatalogRecordDetail#ProvisionedProductName
   */
  readonly provisionedProductName?: string;

  /**
   * @schema ServiceCatalogRecordDetail#Status
   */
  readonly status?: string;

  /**
   * @schema ServiceCatalogRecordDetail#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema ServiceCatalogRecordDetail#UpdatedTime
   */
  readonly updatedTime?: string;

  /**
   * @schema ServiceCatalogRecordDetail#ProvisionedProductType
   */
  readonly provisionedProductType?: string;

  /**
   * @schema ServiceCatalogRecordDetail#RecordType
   */
  readonly recordType?: string;

  /**
   * @schema ServiceCatalogRecordDetail#ProvisionedProductId
   */
  readonly provisionedProductId?: string;

  /**
   * @schema ServiceCatalogRecordDetail#ProductId
   */
  readonly productId?: string;

  /**
   * @schema ServiceCatalogRecordDetail#ProvisioningArtifactId
   */
  readonly provisioningArtifactId?: string;

  /**
   * @schema ServiceCatalogRecordDetail#PathId
   */
  readonly pathId?: string;

  /**
   * @schema ServiceCatalogRecordDetail#RecordErrors
   */
  readonly recordErrors?: ServiceCatalogRecordError[];

  /**
   * @schema ServiceCatalogRecordDetail#RecordTags
   */
  readonly recordTags?: ServiceCatalogRecordTag[];

  /**
   * @schema ServiceCatalogRecordDetail#LaunchRoleArn
   */
  readonly launchRoleArn?: string;

}

/**
 * @schema ServiceCatalogRecordOutput
 */
export interface ServiceCatalogRecordOutput {
  /**
   * @schema ServiceCatalogRecordOutput#OutputKey
   */
  readonly outputKey?: string;

  /**
   * @schema ServiceCatalogRecordOutput#OutputValue
   */
  readonly outputValue?: string;

  /**
   * @schema ServiceCatalogRecordOutput#Description
   */
  readonly description?: string;

}

/**
 * @schema ServiceCatalogExecutionParameter
 */
export interface ServiceCatalogExecutionParameter {
  /**
   * @schema ServiceCatalogExecutionParameter#Name
   */
  readonly name?: string;

  /**
   * @schema ServiceCatalogExecutionParameter#Type
   */
  readonly type?: string;

  /**
   * @schema ServiceCatalogExecutionParameter#DefaultValues
   */
  readonly defaultValues?: string[];

}

/**
 * @schema ServiceCatalogLaunchPathSummary
 */
export interface ServiceCatalogLaunchPathSummary {
  /**
   * @schema ServiceCatalogLaunchPathSummary#Id
   */
  readonly id?: string;

  /**
   * @schema ServiceCatalogLaunchPathSummary#ConstraintSummaries
   */
  readonly constraintSummaries?: ServiceCatalogConstraintSummary[];

  /**
   * @schema ServiceCatalogLaunchPathSummary#Tags
   */
  readonly tags?: ServiceCatalogTag[];

  /**
   * @schema ServiceCatalogLaunchPathSummary#Name
   */
  readonly name?: string;

}

/**
 * @schema ServiceCatalogPrincipal
 */
export interface ServiceCatalogPrincipal {
  /**
   * @schema ServiceCatalogPrincipal#PrincipalARN
   */
  readonly principalArn?: string;

  /**
   * @schema ServiceCatalogPrincipal#PrincipalType
   */
  readonly principalType?: string;

}

/**
 * @schema ServiceCatalogAccessLevelFilter
 */
export interface ServiceCatalogAccessLevelFilter {
  /**
   * @schema ServiceCatalogAccessLevelFilter#Key
   */
  readonly key?: string;

  /**
   * @schema ServiceCatalogAccessLevelFilter#Value
   */
  readonly value?: string;

}

/**
 * @schema ServiceCatalogProvisionedProductPlanSummary
 */
export interface ServiceCatalogProvisionedProductPlanSummary {
  /**
   * @schema ServiceCatalogProvisionedProductPlanSummary#PlanName
   */
  readonly planName?: string;

  /**
   * @schema ServiceCatalogProvisionedProductPlanSummary#PlanId
   */
  readonly planId?: string;

  /**
   * @schema ServiceCatalogProvisionedProductPlanSummary#ProvisionProductId
   */
  readonly provisionProductId?: string;

  /**
   * @schema ServiceCatalogProvisionedProductPlanSummary#ProvisionProductName
   */
  readonly provisionProductName?: string;

  /**
   * @schema ServiceCatalogProvisionedProductPlanSummary#PlanType
   */
  readonly planType?: string;

  /**
   * @schema ServiceCatalogProvisionedProductPlanSummary#ProvisioningArtifactId
   */
  readonly provisioningArtifactId?: string;

}

/**
 * @schema ServiceCatalogProvisioningArtifactView
 */
export interface ServiceCatalogProvisioningArtifactView {
  /**
   * @schema ServiceCatalogProvisioningArtifactView#ProductViewSummary
   */
  readonly productViewSummary?: ServiceCatalogProductViewSummary;

  /**
   * @schema ServiceCatalogProvisioningArtifactView#ProvisioningArtifact
   */
  readonly provisioningArtifact?: ServiceCatalogProvisioningArtifact;

}

/**
 * @schema ServiceCatalogListRecordHistorySearchFilter
 */
export interface ServiceCatalogListRecordHistorySearchFilter {
  /**
   * @schema ServiceCatalogListRecordHistorySearchFilter#Key
   */
  readonly key?: string;

  /**
   * @schema ServiceCatalogListRecordHistorySearchFilter#Value
   */
  readonly value?: string;

}

/**
 * @schema ServiceCatalogResourceDetail
 */
export interface ServiceCatalogResourceDetail {
  /**
   * @schema ServiceCatalogResourceDetail#Id
   */
  readonly id?: string;

  /**
   * @schema ServiceCatalogResourceDetail#ARN
   */
  readonly arn?: string;

  /**
   * @schema ServiceCatalogResourceDetail#Name
   */
  readonly name?: string;

  /**
   * @schema ServiceCatalogResourceDetail#Description
   */
  readonly description?: string;

  /**
   * @schema ServiceCatalogResourceDetail#CreatedTime
   */
  readonly createdTime?: string;

}

/**
 * @schema ServiceCatalogServiceActionSummary
 */
export interface ServiceCatalogServiceActionSummary {
  /**
   * @schema ServiceCatalogServiceActionSummary#Id
   */
  readonly id?: string;

  /**
   * @schema ServiceCatalogServiceActionSummary#Name
   */
  readonly name?: string;

  /**
   * @schema ServiceCatalogServiceActionSummary#Description
   */
  readonly description?: string;

  /**
   * @schema ServiceCatalogServiceActionSummary#DefinitionType
   */
  readonly definitionType?: string;

}

/**
 * @schema ServiceCatalogStackInstance
 */
export interface ServiceCatalogStackInstance {
  /**
   * @schema ServiceCatalogStackInstance#Account
   */
  readonly account?: string;

  /**
   * @schema ServiceCatalogStackInstance#Region
   */
  readonly region?: string;

  /**
   * @schema ServiceCatalogStackInstance#StackInstanceStatus
   */
  readonly stackInstanceStatus?: string;

}

/**
 * @schema ServiceCatalogListTagOptionsFilters
 */
export interface ServiceCatalogListTagOptionsFilters {
  /**
   * @schema ServiceCatalogListTagOptionsFilters#Key
   */
  readonly key?: string;

  /**
   * @schema ServiceCatalogListTagOptionsFilters#Value
   */
  readonly value?: string;

  /**
   * @schema ServiceCatalogListTagOptionsFilters#Active
   */
  readonly active?: boolean;

}

/**
 * @schema ServiceCatalogProvisioningParameter
 */
export interface ServiceCatalogProvisioningParameter {
  /**
   * @schema ServiceCatalogProvisioningParameter#Key
   */
  readonly key?: string;

  /**
   * @schema ServiceCatalogProvisioningParameter#Value
   */
  readonly value?: string;

}

/**
 * @schema ServiceCatalogProvisioningPreferences
 */
export interface ServiceCatalogProvisioningPreferences {
  /**
   * @schema ServiceCatalogProvisioningPreferences#StackSetAccounts
   */
  readonly stackSetAccounts?: string[];

  /**
   * @schema ServiceCatalogProvisioningPreferences#StackSetRegions
   */
  readonly stackSetRegions?: string[];

  /**
   * @schema ServiceCatalogProvisioningPreferences#StackSetFailureToleranceCount
   */
  readonly stackSetFailureToleranceCount?: number;

  /**
   * @schema ServiceCatalogProvisioningPreferences#StackSetFailureTolerancePercentage
   */
  readonly stackSetFailureTolerancePercentage?: number;

  /**
   * @schema ServiceCatalogProvisioningPreferences#StackSetMaxConcurrencyCount
   */
  readonly stackSetMaxConcurrencyCount?: number;

  /**
   * @schema ServiceCatalogProvisioningPreferences#StackSetMaxConcurrencyPercentage
   */
  readonly stackSetMaxConcurrencyPercentage?: number;

}

/**
 * @schema ServiceCatalogProductViewAggregationValue
 */
export interface ServiceCatalogProductViewAggregationValue {
  /**
   * @schema ServiceCatalogProductViewAggregationValue#Value
   */
  readonly value?: string;

  /**
   * @schema ServiceCatalogProductViewAggregationValue#ApproximateCount
   */
  readonly approximateCount?: number;

}

/**
 * @schema ServiceCatalogProvisionedProductAttribute
 */
export interface ServiceCatalogProvisionedProductAttribute {
  /**
   * @schema ServiceCatalogProvisionedProductAttribute#Name
   */
  readonly name?: string;

  /**
   * @schema ServiceCatalogProvisionedProductAttribute#Arn
   */
  readonly arn?: string;

  /**
   * @schema ServiceCatalogProvisionedProductAttribute#Type
   */
  readonly type?: string;

  /**
   * @schema ServiceCatalogProvisionedProductAttribute#Id
   */
  readonly id?: string;

  /**
   * @schema ServiceCatalogProvisionedProductAttribute#Status
   */
  readonly status?: string;

  /**
   * @schema ServiceCatalogProvisionedProductAttribute#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema ServiceCatalogProvisionedProductAttribute#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema ServiceCatalogProvisionedProductAttribute#IdempotencyToken
   */
  readonly idempotencyToken?: string;

  /**
   * @schema ServiceCatalogProvisionedProductAttribute#LastRecordId
   */
  readonly lastRecordId?: string;

  /**
   * @schema ServiceCatalogProvisionedProductAttribute#LastProvisioningRecordId
   */
  readonly lastProvisioningRecordId?: string;

  /**
   * @schema ServiceCatalogProvisionedProductAttribute#LastSuccessfulProvisioningRecordId
   */
  readonly lastSuccessfulProvisioningRecordId?: string;

  /**
   * @schema ServiceCatalogProvisionedProductAttribute#Tags
   */
  readonly tags?: ServiceCatalogTag[];

  /**
   * @schema ServiceCatalogProvisionedProductAttribute#PhysicalId
   */
  readonly physicalId?: string;

  /**
   * @schema ServiceCatalogProvisionedProductAttribute#ProductId
   */
  readonly productId?: string;

  /**
   * @schema ServiceCatalogProvisionedProductAttribute#ProductName
   */
  readonly productName?: string;

  /**
   * @schema ServiceCatalogProvisionedProductAttribute#ProvisioningArtifactId
   */
  readonly provisioningArtifactId?: string;

  /**
   * @schema ServiceCatalogProvisionedProductAttribute#ProvisioningArtifactName
   */
  readonly provisioningArtifactName?: string;

  /**
   * @schema ServiceCatalogProvisionedProductAttribute#UserArn
   */
  readonly userArn?: string;

  /**
   * @schema ServiceCatalogProvisionedProductAttribute#UserArnSession
   */
  readonly userArnSession?: string;

}

/**
 * @schema ServiceCatalogUpdateProvisioningPreferences
 */
export interface ServiceCatalogUpdateProvisioningPreferences {
  /**
   * @schema ServiceCatalogUpdateProvisioningPreferences#StackSetAccounts
   */
  readonly stackSetAccounts?: string[];

  /**
   * @schema ServiceCatalogUpdateProvisioningPreferences#StackSetRegions
   */
  readonly stackSetRegions?: string[];

  /**
   * @schema ServiceCatalogUpdateProvisioningPreferences#StackSetFailureToleranceCount
   */
  readonly stackSetFailureToleranceCount?: number;

  /**
   * @schema ServiceCatalogUpdateProvisioningPreferences#StackSetFailureTolerancePercentage
   */
  readonly stackSetFailureTolerancePercentage?: number;

  /**
   * @schema ServiceCatalogUpdateProvisioningPreferences#StackSetMaxConcurrencyCount
   */
  readonly stackSetMaxConcurrencyCount?: number;

  /**
   * @schema ServiceCatalogUpdateProvisioningPreferences#StackSetMaxConcurrencyPercentage
   */
  readonly stackSetMaxConcurrencyPercentage?: number;

  /**
   * @schema ServiceCatalogUpdateProvisioningPreferences#StackSetOperationType
   */
  readonly stackSetOperationType?: string;

}

/**
 * @schema ServiceCatalogShareError
 */
export interface ServiceCatalogShareError {
  /**
   * @schema ServiceCatalogShareError#Accounts
   */
  readonly accounts?: string[];

  /**
   * @schema ServiceCatalogShareError#Message
   */
  readonly message?: string;

  /**
   * @schema ServiceCatalogShareError#Error
   */
  readonly error?: string;

}

/**
 * @schema ServiceCatalogResourceChangeDetail
 */
export interface ServiceCatalogResourceChangeDetail {
  /**
   * @schema ServiceCatalogResourceChangeDetail#Target
   */
  readonly target?: ServiceCatalogResourceTargetDefinition;

  /**
   * @schema ServiceCatalogResourceChangeDetail#Evaluation
   */
  readonly evaluation?: string;

  /**
   * @schema ServiceCatalogResourceChangeDetail#CausingEntity
   */
  readonly causingEntity?: string;

}

/**
 * @schema ServiceCatalogParameterConstraints
 */
export interface ServiceCatalogParameterConstraints {
  /**
   * @schema ServiceCatalogParameterConstraints#AllowedValues
   */
  readonly allowedValues?: string[];

}

/**
 * @schema ServiceCatalogRecordError
 */
export interface ServiceCatalogRecordError {
  /**
   * @schema ServiceCatalogRecordError#Code
   */
  readonly code?: string;

  /**
   * @schema ServiceCatalogRecordError#Description
   */
  readonly description?: string;

}

/**
 * @schema ServiceCatalogRecordTag
 */
export interface ServiceCatalogRecordTag {
  /**
   * @schema ServiceCatalogRecordTag#Key
   */
  readonly key?: string;

  /**
   * @schema ServiceCatalogRecordTag#Value
   */
  readonly value?: string;

}

/**
 * @schema ServiceCatalogResourceTargetDefinition
 */
export interface ServiceCatalogResourceTargetDefinition {
  /**
   * @schema ServiceCatalogResourceTargetDefinition#Attribute
   */
  readonly attribute?: string;

  /**
   * @schema ServiceCatalogResourceTargetDefinition#Name
   */
  readonly name?: string;

  /**
   * @schema ServiceCatalogResourceTargetDefinition#RequiresRecreation
   */
  readonly requiresRecreation?: string;

}
