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
  readonly portfolioId?: string;

  /**
   * @schema ServiceCatalogAcceptPortfolioShareInput#PortfolioShareType
   */
  readonly portfolioShareType?: string;

}

/**
 * Converts an object of type 'ServiceCatalogAcceptPortfolioShareInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAcceptPortfolioShareInput(obj: ServiceCatalogAcceptPortfolioShareInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'PortfolioId': obj.portfolioId,
    'PortfolioShareType': obj.portfolioShareType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAcceptPortfolioShareOutput
 */
export interface ServiceCatalogAcceptPortfolioShareOutput {
}

/**
 * Converts an object of type 'ServiceCatalogAcceptPortfolioShareOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAcceptPortfolioShareOutput(obj: ServiceCatalogAcceptPortfolioShareOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAssociateBudgetWithResourceInput
 */
export interface ServiceCatalogAssociateBudgetWithResourceInput {
  /**
   * @schema ServiceCatalogAssociateBudgetWithResourceInput#BudgetName
   */
  readonly budgetName?: string;

  /**
   * @schema ServiceCatalogAssociateBudgetWithResourceInput#ResourceId
   */
  readonly resourceId?: string;

}

/**
 * Converts an object of type 'ServiceCatalogAssociateBudgetWithResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAssociateBudgetWithResourceInput(obj: ServiceCatalogAssociateBudgetWithResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BudgetName': obj.budgetName,
    'ResourceId': obj.resourceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAssociateBudgetWithResourceOutput
 */
export interface ServiceCatalogAssociateBudgetWithResourceOutput {
}

/**
 * Converts an object of type 'ServiceCatalogAssociateBudgetWithResourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAssociateBudgetWithResourceOutput(obj: ServiceCatalogAssociateBudgetWithResourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly portfolioId?: string;

  /**
   * @schema ServiceCatalogAssociatePrincipalWithPortfolioInput#PrincipalARN
   */
  readonly principalArn?: string;

  /**
   * @schema ServiceCatalogAssociatePrincipalWithPortfolioInput#PrincipalType
   */
  readonly principalType?: string;

}

/**
 * Converts an object of type 'ServiceCatalogAssociatePrincipalWithPortfolioInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAssociatePrincipalWithPortfolioInput(obj: ServiceCatalogAssociatePrincipalWithPortfolioInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'PortfolioId': obj.portfolioId,
    'PrincipalARN': obj.principalArn,
    'PrincipalType': obj.principalType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAssociatePrincipalWithPortfolioOutput
 */
export interface ServiceCatalogAssociatePrincipalWithPortfolioOutput {
}

/**
 * Converts an object of type 'ServiceCatalogAssociatePrincipalWithPortfolioOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAssociatePrincipalWithPortfolioOutput(obj: ServiceCatalogAssociatePrincipalWithPortfolioOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly productId?: string;

  /**
   * @schema ServiceCatalogAssociateProductWithPortfolioInput#PortfolioId
   */
  readonly portfolioId?: string;

  /**
   * @schema ServiceCatalogAssociateProductWithPortfolioInput#SourcePortfolioId
   */
  readonly sourcePortfolioId?: string;

}

/**
 * Converts an object of type 'ServiceCatalogAssociateProductWithPortfolioInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAssociateProductWithPortfolioInput(obj: ServiceCatalogAssociateProductWithPortfolioInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'ProductId': obj.productId,
    'PortfolioId': obj.portfolioId,
    'SourcePortfolioId': obj.sourcePortfolioId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAssociateProductWithPortfolioOutput
 */
export interface ServiceCatalogAssociateProductWithPortfolioOutput {
}

/**
 * Converts an object of type 'ServiceCatalogAssociateProductWithPortfolioOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAssociateProductWithPortfolioOutput(obj: ServiceCatalogAssociateProductWithPortfolioOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAssociateServiceActionWithProvisioningArtifactInput
 */
export interface ServiceCatalogAssociateServiceActionWithProvisioningArtifactInput {
  /**
   * @schema ServiceCatalogAssociateServiceActionWithProvisioningArtifactInput#ProductId
   */
  readonly productId?: string;

  /**
   * @schema ServiceCatalogAssociateServiceActionWithProvisioningArtifactInput#ProvisioningArtifactId
   */
  readonly provisioningArtifactId?: string;

  /**
   * @schema ServiceCatalogAssociateServiceActionWithProvisioningArtifactInput#ServiceActionId
   */
  readonly serviceActionId?: string;

  /**
   * @schema ServiceCatalogAssociateServiceActionWithProvisioningArtifactInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

}

/**
 * Converts an object of type 'ServiceCatalogAssociateServiceActionWithProvisioningArtifactInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAssociateServiceActionWithProvisioningArtifactInput(obj: ServiceCatalogAssociateServiceActionWithProvisioningArtifactInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProductId': obj.productId,
    'ProvisioningArtifactId': obj.provisioningArtifactId,
    'ServiceActionId': obj.serviceActionId,
    'AcceptLanguage': obj.acceptLanguage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAssociateServiceActionWithProvisioningArtifactOutput
 */
export interface ServiceCatalogAssociateServiceActionWithProvisioningArtifactOutput {
}

/**
 * Converts an object of type 'ServiceCatalogAssociateServiceActionWithProvisioningArtifactOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAssociateServiceActionWithProvisioningArtifactOutput(obj: ServiceCatalogAssociateServiceActionWithProvisioningArtifactOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAssociateTagOptionWithResourceInput
 */
export interface ServiceCatalogAssociateTagOptionWithResourceInput {
  /**
   * @schema ServiceCatalogAssociateTagOptionWithResourceInput#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema ServiceCatalogAssociateTagOptionWithResourceInput#TagOptionId
   */
  readonly tagOptionId?: string;

}

/**
 * Converts an object of type 'ServiceCatalogAssociateTagOptionWithResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAssociateTagOptionWithResourceInput(obj: ServiceCatalogAssociateTagOptionWithResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceId': obj.resourceId,
    'TagOptionId': obj.tagOptionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogAssociateTagOptionWithResourceOutput
 */
export interface ServiceCatalogAssociateTagOptionWithResourceOutput {
}

/**
 * Converts an object of type 'ServiceCatalogAssociateTagOptionWithResourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAssociateTagOptionWithResourceOutput(obj: ServiceCatalogAssociateTagOptionWithResourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogBatchAssociateServiceActionWithProvisioningArtifactInput
 */
export interface ServiceCatalogBatchAssociateServiceActionWithProvisioningArtifactInput {
  /**
   * @schema ServiceCatalogBatchAssociateServiceActionWithProvisioningArtifactInput#ServiceActionAssociations
   */
  readonly serviceActionAssociations?: ServiceCatalogServiceActionAssociation[];

  /**
   * @schema ServiceCatalogBatchAssociateServiceActionWithProvisioningArtifactInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

}

/**
 * Converts an object of type 'ServiceCatalogBatchAssociateServiceActionWithProvisioningArtifactInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogBatchAssociateServiceActionWithProvisioningArtifactInput(obj: ServiceCatalogBatchAssociateServiceActionWithProvisioningArtifactInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceActionAssociations': obj.serviceActionAssociations?.map(y => toJson_ServiceCatalogServiceActionAssociation(y)),
    'AcceptLanguage': obj.acceptLanguage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogBatchAssociateServiceActionWithProvisioningArtifactOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogBatchAssociateServiceActionWithProvisioningArtifactOutput(obj: ServiceCatalogBatchAssociateServiceActionWithProvisioningArtifactOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FailedServiceActionAssociations': obj.failedServiceActionAssociations?.map(y => toJson_ServiceCatalogFailedServiceActionAssociation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogBatchDisassociateServiceActionFromProvisioningArtifactInput
 */
export interface ServiceCatalogBatchDisassociateServiceActionFromProvisioningArtifactInput {
  /**
   * @schema ServiceCatalogBatchDisassociateServiceActionFromProvisioningArtifactInput#ServiceActionAssociations
   */
  readonly serviceActionAssociations?: ServiceCatalogServiceActionAssociation[];

  /**
   * @schema ServiceCatalogBatchDisassociateServiceActionFromProvisioningArtifactInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

}

/**
 * Converts an object of type 'ServiceCatalogBatchDisassociateServiceActionFromProvisioningArtifactInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogBatchDisassociateServiceActionFromProvisioningArtifactInput(obj: ServiceCatalogBatchDisassociateServiceActionFromProvisioningArtifactInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceActionAssociations': obj.serviceActionAssociations?.map(y => toJson_ServiceCatalogServiceActionAssociation(y)),
    'AcceptLanguage': obj.acceptLanguage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogBatchDisassociateServiceActionFromProvisioningArtifactOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogBatchDisassociateServiceActionFromProvisioningArtifactOutput(obj: ServiceCatalogBatchDisassociateServiceActionFromProvisioningArtifactOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FailedServiceActionAssociations': obj.failedServiceActionAssociations?.map(y => toJson_ServiceCatalogFailedServiceActionAssociation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly sourceProductArn?: string;

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
  readonly idempotencyToken?: string;

}

/**
 * Converts an object of type 'ServiceCatalogCopyProductInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogCopyProductInput(obj: ServiceCatalogCopyProductInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'SourceProductArn': obj.sourceProductArn,
    'TargetProductId': obj.targetProductId,
    'TargetProductName': obj.targetProductName,
    'SourceProvisioningArtifactIdentifiers': obj.sourceProvisioningArtifactIdentifiers?.map(y => ((y) === undefined) ? undefined : (Object.entries(y).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {}))),
    'CopyOptions': obj.copyOptions?.map(y => y),
    'IdempotencyToken': obj.idempotencyToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogCopyProductOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogCopyProductOutput(obj: ServiceCatalogCopyProductOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CopyProductToken': obj.copyProductToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly portfolioId?: string;

  /**
   * @schema ServiceCatalogCreateConstraintInput#ProductId
   */
  readonly productId?: string;

  /**
   * @schema ServiceCatalogCreateConstraintInput#Parameters
   */
  readonly parameters?: string;

  /**
   * @schema ServiceCatalogCreateConstraintInput#Type
   */
  readonly type?: string;

  /**
   * @schema ServiceCatalogCreateConstraintInput#Description
   */
  readonly description?: string;

  /**
   * @schema ServiceCatalogCreateConstraintInput#IdempotencyToken
   */
  readonly idempotencyToken?: string;

}

/**
 * Converts an object of type 'ServiceCatalogCreateConstraintInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogCreateConstraintInput(obj: ServiceCatalogCreateConstraintInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'PortfolioId': obj.portfolioId,
    'ProductId': obj.productId,
    'Parameters': obj.parameters,
    'Type': obj.type,
    'Description': obj.description,
    'IdempotencyToken': obj.idempotencyToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogCreateConstraintOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogCreateConstraintOutput(obj: ServiceCatalogCreateConstraintOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConstraintDetail': toJson_ServiceCatalogConstraintDetail(obj.constraintDetail),
    'ConstraintParameters': obj.constraintParameters,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly displayName?: string;

  /**
   * @schema ServiceCatalogCreatePortfolioInput#Description
   */
  readonly description?: string;

  /**
   * @schema ServiceCatalogCreatePortfolioInput#ProviderName
   */
  readonly providerName?: string;

  /**
   * @schema ServiceCatalogCreatePortfolioInput#Tags
   */
  readonly tags?: ServiceCatalogTag[];

  /**
   * @schema ServiceCatalogCreatePortfolioInput#IdempotencyToken
   */
  readonly idempotencyToken?: string;

}

/**
 * Converts an object of type 'ServiceCatalogCreatePortfolioInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogCreatePortfolioInput(obj: ServiceCatalogCreatePortfolioInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'DisplayName': obj.displayName,
    'Description': obj.description,
    'ProviderName': obj.providerName,
    'Tags': obj.tags?.map(y => toJson_ServiceCatalogTag(y)),
    'IdempotencyToken': obj.idempotencyToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogCreatePortfolioOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogCreatePortfolioOutput(obj: ServiceCatalogCreatePortfolioOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PortfolioDetail': toJson_ServiceCatalogPortfolioDetail(obj.portfolioDetail),
    'Tags': obj.tags?.map(y => toJson_ServiceCatalogTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly portfolioId?: string;

  /**
   * @schema ServiceCatalogCreatePortfolioShareInput#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ServiceCatalogCreatePortfolioShareInput#OrganizationNode
   */
  readonly organizationNode?: ServiceCatalogOrganizationNode;

  /**
   * @schema ServiceCatalogCreatePortfolioShareInput#ShareTagOptions
   */
  readonly shareTagOptions?: boolean;

}

/**
 * Converts an object of type 'ServiceCatalogCreatePortfolioShareInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogCreatePortfolioShareInput(obj: ServiceCatalogCreatePortfolioShareInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'PortfolioId': obj.portfolioId,
    'AccountId': obj.accountId,
    'OrganizationNode': toJson_ServiceCatalogOrganizationNode(obj.organizationNode),
    'ShareTagOptions': obj.shareTagOptions,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogCreatePortfolioShareOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogCreatePortfolioShareOutput(obj: ServiceCatalogCreatePortfolioShareOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PortfolioShareToken': obj.portfolioShareToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly name?: string;

  /**
   * @schema ServiceCatalogCreateProductInput#Owner
   */
  readonly owner?: string;

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
  readonly productType?: string;

  /**
   * @schema ServiceCatalogCreateProductInput#Tags
   */
  readonly tags?: ServiceCatalogTag[];

  /**
   * @schema ServiceCatalogCreateProductInput#ProvisioningArtifactParameters
   */
  readonly provisioningArtifactParameters?: ServiceCatalogProvisioningArtifactProperties;

  /**
   * @schema ServiceCatalogCreateProductInput#IdempotencyToken
   */
  readonly idempotencyToken?: string;

}

/**
 * Converts an object of type 'ServiceCatalogCreateProductInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogCreateProductInput(obj: ServiceCatalogCreateProductInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'Name': obj.name,
    'Owner': obj.owner,
    'Description': obj.description,
    'Distributor': obj.distributor,
    'SupportDescription': obj.supportDescription,
    'SupportEmail': obj.supportEmail,
    'SupportUrl': obj.supportUrl,
    'ProductType': obj.productType,
    'Tags': obj.tags?.map(y => toJson_ServiceCatalogTag(y)),
    'ProvisioningArtifactParameters': toJson_ServiceCatalogProvisioningArtifactProperties(obj.provisioningArtifactParameters),
    'IdempotencyToken': obj.idempotencyToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogCreateProductOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogCreateProductOutput(obj: ServiceCatalogCreateProductOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProductViewDetail': toJson_ServiceCatalogProductViewDetail(obj.productViewDetail),
    'ProvisioningArtifactDetail': toJson_ServiceCatalogProvisioningArtifactDetail(obj.provisioningArtifactDetail),
    'Tags': obj.tags?.map(y => toJson_ServiceCatalogTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly planName?: string;

  /**
   * @schema ServiceCatalogCreateProvisionedProductPlanInput#PlanType
   */
  readonly planType?: string;

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
  readonly productId?: string;

  /**
   * @schema ServiceCatalogCreateProvisionedProductPlanInput#ProvisionedProductName
   */
  readonly provisionedProductName?: string;

  /**
   * @schema ServiceCatalogCreateProvisionedProductPlanInput#ProvisioningArtifactId
   */
  readonly provisioningArtifactId?: string;

  /**
   * @schema ServiceCatalogCreateProvisionedProductPlanInput#ProvisioningParameters
   */
  readonly provisioningParameters?: ServiceCatalogUpdateProvisioningParameter[];

  /**
   * @schema ServiceCatalogCreateProvisionedProductPlanInput#IdempotencyToken
   */
  readonly idempotencyToken?: string;

  /**
   * @schema ServiceCatalogCreateProvisionedProductPlanInput#Tags
   */
  readonly tags?: ServiceCatalogTag[];

}

/**
 * Converts an object of type 'ServiceCatalogCreateProvisionedProductPlanInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogCreateProvisionedProductPlanInput(obj: ServiceCatalogCreateProvisionedProductPlanInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'PlanName': obj.planName,
    'PlanType': obj.planType,
    'NotificationArns': obj.notificationArns?.map(y => y),
    'PathId': obj.pathId,
    'ProductId': obj.productId,
    'ProvisionedProductName': obj.provisionedProductName,
    'ProvisioningArtifactId': obj.provisioningArtifactId,
    'ProvisioningParameters': obj.provisioningParameters?.map(y => toJson_ServiceCatalogUpdateProvisioningParameter(y)),
    'IdempotencyToken': obj.idempotencyToken,
    'Tags': obj.tags?.map(y => toJson_ServiceCatalogTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogCreateProvisionedProductPlanOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogCreateProvisionedProductPlanOutput(obj: ServiceCatalogCreateProvisionedProductPlanOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PlanName': obj.planName,
    'PlanId': obj.planId,
    'ProvisionProductId': obj.provisionProductId,
    'ProvisionedProductName': obj.provisionedProductName,
    'ProvisioningArtifactId': obj.provisioningArtifactId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly productId?: string;

  /**
   * @schema ServiceCatalogCreateProvisioningArtifactInput#Parameters
   */
  readonly parameters?: ServiceCatalogProvisioningArtifactProperties;

  /**
   * @schema ServiceCatalogCreateProvisioningArtifactInput#IdempotencyToken
   */
  readonly idempotencyToken?: string;

}

/**
 * Converts an object of type 'ServiceCatalogCreateProvisioningArtifactInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogCreateProvisioningArtifactInput(obj: ServiceCatalogCreateProvisioningArtifactInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'ProductId': obj.productId,
    'Parameters': toJson_ServiceCatalogProvisioningArtifactProperties(obj.parameters),
    'IdempotencyToken': obj.idempotencyToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogCreateProvisioningArtifactOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogCreateProvisioningArtifactOutput(obj: ServiceCatalogCreateProvisioningArtifactOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProvisioningArtifactDetail': toJson_ServiceCatalogProvisioningArtifactDetail(obj.provisioningArtifactDetail),
    'Info': ((obj.info) === undefined) ? undefined : (Object.entries(obj.info).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogCreateServiceActionInput
 */
export interface ServiceCatalogCreateServiceActionInput {
  /**
   * @schema ServiceCatalogCreateServiceActionInput#Name
   */
  readonly name?: string;

  /**
   * @schema ServiceCatalogCreateServiceActionInput#DefinitionType
   */
  readonly definitionType?: string;

  /**
   * @schema ServiceCatalogCreateServiceActionInput#Definition
   */
  readonly definition?: { [key: string]: string };

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
  readonly idempotencyToken?: string;

}

/**
 * Converts an object of type 'ServiceCatalogCreateServiceActionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogCreateServiceActionInput(obj: ServiceCatalogCreateServiceActionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'DefinitionType': obj.definitionType,
    'Definition': ((obj.definition) === undefined) ? undefined : (Object.entries(obj.definition).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Description': obj.description,
    'AcceptLanguage': obj.acceptLanguage,
    'IdempotencyToken': obj.idempotencyToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogCreateServiceActionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogCreateServiceActionOutput(obj: ServiceCatalogCreateServiceActionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceActionDetail': toJson_ServiceCatalogServiceActionDetail(obj.serviceActionDetail),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogCreateTagOptionInput
 */
export interface ServiceCatalogCreateTagOptionInput {
  /**
   * @schema ServiceCatalogCreateTagOptionInput#Key
   */
  readonly key?: string;

  /**
   * @schema ServiceCatalogCreateTagOptionInput#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'ServiceCatalogCreateTagOptionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogCreateTagOptionInput(obj: ServiceCatalogCreateTagOptionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogCreateTagOptionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogCreateTagOptionOutput(obj: ServiceCatalogCreateTagOptionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TagOptionDetail': toJson_ServiceCatalogTagOptionDetail(obj.tagOptionDetail),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly id?: string;

}

/**
 * Converts an object of type 'ServiceCatalogDeleteConstraintInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDeleteConstraintInput(obj: ServiceCatalogDeleteConstraintInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogDeleteConstraintOutput
 */
export interface ServiceCatalogDeleteConstraintOutput {
}

/**
 * Converts an object of type 'ServiceCatalogDeleteConstraintOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDeleteConstraintOutput(obj: ServiceCatalogDeleteConstraintOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly id?: string;

}

/**
 * Converts an object of type 'ServiceCatalogDeletePortfolioInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDeletePortfolioInput(obj: ServiceCatalogDeletePortfolioInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogDeletePortfolioOutput
 */
export interface ServiceCatalogDeletePortfolioOutput {
}

/**
 * Converts an object of type 'ServiceCatalogDeletePortfolioOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDeletePortfolioOutput(obj: ServiceCatalogDeletePortfolioOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly portfolioId?: string;

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
 * Converts an object of type 'ServiceCatalogDeletePortfolioShareInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDeletePortfolioShareInput(obj: ServiceCatalogDeletePortfolioShareInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'PortfolioId': obj.portfolioId,
    'AccountId': obj.accountId,
    'OrganizationNode': toJson_ServiceCatalogOrganizationNode(obj.organizationNode),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogDeletePortfolioShareOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDeletePortfolioShareOutput(obj: ServiceCatalogDeletePortfolioShareOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PortfolioShareToken': obj.portfolioShareToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly id?: string;

}

/**
 * Converts an object of type 'ServiceCatalogDeleteProductInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDeleteProductInput(obj: ServiceCatalogDeleteProductInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogDeleteProductOutput
 */
export interface ServiceCatalogDeleteProductOutput {
}

/**
 * Converts an object of type 'ServiceCatalogDeleteProductOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDeleteProductOutput(obj: ServiceCatalogDeleteProductOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly planId?: string;

  /**
   * @schema ServiceCatalogDeleteProvisionedProductPlanInput#IgnoreErrors
   */
  readonly ignoreErrors?: boolean;

}

/**
 * Converts an object of type 'ServiceCatalogDeleteProvisionedProductPlanInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDeleteProvisionedProductPlanInput(obj: ServiceCatalogDeleteProvisionedProductPlanInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'PlanId': obj.planId,
    'IgnoreErrors': obj.ignoreErrors,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogDeleteProvisionedProductPlanOutput
 */
export interface ServiceCatalogDeleteProvisionedProductPlanOutput {
}

/**
 * Converts an object of type 'ServiceCatalogDeleteProvisionedProductPlanOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDeleteProvisionedProductPlanOutput(obj: ServiceCatalogDeleteProvisionedProductPlanOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly productId?: string;

  /**
   * @schema ServiceCatalogDeleteProvisioningArtifactInput#ProvisioningArtifactId
   */
  readonly provisioningArtifactId?: string;

}

/**
 * Converts an object of type 'ServiceCatalogDeleteProvisioningArtifactInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDeleteProvisioningArtifactInput(obj: ServiceCatalogDeleteProvisioningArtifactInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'ProductId': obj.productId,
    'ProvisioningArtifactId': obj.provisioningArtifactId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogDeleteProvisioningArtifactOutput
 */
export interface ServiceCatalogDeleteProvisioningArtifactOutput {
}

/**
 * Converts an object of type 'ServiceCatalogDeleteProvisioningArtifactOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDeleteProvisioningArtifactOutput(obj: ServiceCatalogDeleteProvisioningArtifactOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogDeleteServiceActionInput
 */
export interface ServiceCatalogDeleteServiceActionInput {
  /**
   * @schema ServiceCatalogDeleteServiceActionInput#Id
   */
  readonly id?: string;

  /**
   * @schema ServiceCatalogDeleteServiceActionInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

}

/**
 * Converts an object of type 'ServiceCatalogDeleteServiceActionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDeleteServiceActionInput(obj: ServiceCatalogDeleteServiceActionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'AcceptLanguage': obj.acceptLanguage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogDeleteServiceActionOutput
 */
export interface ServiceCatalogDeleteServiceActionOutput {
}

/**
 * Converts an object of type 'ServiceCatalogDeleteServiceActionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDeleteServiceActionOutput(obj: ServiceCatalogDeleteServiceActionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogDeleteTagOptionInput
 */
export interface ServiceCatalogDeleteTagOptionInput {
  /**
   * @schema ServiceCatalogDeleteTagOptionInput#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'ServiceCatalogDeleteTagOptionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDeleteTagOptionInput(obj: ServiceCatalogDeleteTagOptionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogDeleteTagOptionOutput
 */
export interface ServiceCatalogDeleteTagOptionOutput {
}

/**
 * Converts an object of type 'ServiceCatalogDeleteTagOptionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDeleteTagOptionOutput(obj: ServiceCatalogDeleteTagOptionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly id?: string;

}

/**
 * Converts an object of type 'ServiceCatalogDescribeConstraintInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDescribeConstraintInput(obj: ServiceCatalogDescribeConstraintInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogDescribeConstraintOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDescribeConstraintOutput(obj: ServiceCatalogDescribeConstraintOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConstraintDetail': toJson_ServiceCatalogConstraintDetail(obj.constraintDetail),
    'ConstraintParameters': obj.constraintParameters,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly copyProductToken?: string;

}

/**
 * Converts an object of type 'ServiceCatalogDescribeCopyProductStatusInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDescribeCopyProductStatusInput(obj: ServiceCatalogDescribeCopyProductStatusInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'CopyProductToken': obj.copyProductToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogDescribeCopyProductStatusOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDescribeCopyProductStatusOutput(obj: ServiceCatalogDescribeCopyProductStatusOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CopyProductStatus': obj.copyProductStatus,
    'TargetProductId': obj.targetProductId,
    'StatusDetail': obj.statusDetail,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly id?: string;

}

/**
 * Converts an object of type 'ServiceCatalogDescribePortfolioInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDescribePortfolioInput(obj: ServiceCatalogDescribePortfolioInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogDescribePortfolioOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDescribePortfolioOutput(obj: ServiceCatalogDescribePortfolioOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PortfolioDetail': toJson_ServiceCatalogPortfolioDetail(obj.portfolioDetail),
    'Tags': obj.tags?.map(y => toJson_ServiceCatalogTag(y)),
    'TagOptions': obj.tagOptions?.map(y => toJson_ServiceCatalogTagOptionDetail(y)),
    'Budgets': obj.budgets?.map(y => toJson_ServiceCatalogBudgetDetail(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogDescribePortfolioShareStatusInput
 */
export interface ServiceCatalogDescribePortfolioShareStatusInput {
  /**
   * @schema ServiceCatalogDescribePortfolioShareStatusInput#PortfolioShareToken
   */
  readonly portfolioShareToken?: string;

}

/**
 * Converts an object of type 'ServiceCatalogDescribePortfolioShareStatusInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDescribePortfolioShareStatusInput(obj: ServiceCatalogDescribePortfolioShareStatusInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PortfolioShareToken': obj.portfolioShareToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogDescribePortfolioShareStatusOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDescribePortfolioShareStatusOutput(obj: ServiceCatalogDescribePortfolioShareStatusOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PortfolioShareToken': obj.portfolioShareToken,
    'PortfolioId': obj.portfolioId,
    'OrganizationNodeValue': obj.organizationNodeValue,
    'Status': obj.status,
    'ShareDetails': toJson_ServiceCatalogShareDetails(obj.shareDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogDescribePortfolioSharesInput
 */
export interface ServiceCatalogDescribePortfolioSharesInput {
  /**
   * @schema ServiceCatalogDescribePortfolioSharesInput#PortfolioId
   */
  readonly portfolioId?: string;

  /**
   * @schema ServiceCatalogDescribePortfolioSharesInput#Type
   */
  readonly type?: string;

  /**
   * @schema ServiceCatalogDescribePortfolioSharesInput#PageToken
   */
  readonly pageToken?: string;

  /**
   * @schema ServiceCatalogDescribePortfolioSharesInput#PageSize
   */
  readonly pageSize?: number;

}

/**
 * Converts an object of type 'ServiceCatalogDescribePortfolioSharesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDescribePortfolioSharesInput(obj: ServiceCatalogDescribePortfolioSharesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PortfolioId': obj.portfolioId,
    'Type': obj.type,
    'PageToken': obj.pageToken,
    'PageSize': obj.pageSize,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogDescribePortfolioSharesOutput
 */
export interface ServiceCatalogDescribePortfolioSharesOutput {
  /**
   * @schema ServiceCatalogDescribePortfolioSharesOutput#NextPageToken
   */
  readonly nextPageToken?: string;

  /**
   * @schema ServiceCatalogDescribePortfolioSharesOutput#PortfolioShareDetails
   */
  readonly portfolioShareDetails?: ServiceCatalogPortfolioShareDetail[];

}

/**
 * Converts an object of type 'ServiceCatalogDescribePortfolioSharesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDescribePortfolioSharesOutput(obj: ServiceCatalogDescribePortfolioSharesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextPageToken': obj.nextPageToken,
    'PortfolioShareDetails': obj.portfolioShareDetails?.map(y => toJson_ServiceCatalogPortfolioShareDetail(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogDescribeProductInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDescribeProductInput(obj: ServiceCatalogDescribeProductInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'Id': obj.id,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogDescribeProductOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDescribeProductOutput(obj: ServiceCatalogDescribeProductOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProductViewSummary': toJson_ServiceCatalogProductViewSummary(obj.productViewSummary),
    'ProvisioningArtifacts': obj.provisioningArtifacts?.map(y => toJson_ServiceCatalogProvisioningArtifact(y)),
    'Budgets': obj.budgets?.map(y => toJson_ServiceCatalogBudgetDetail(y)),
    'LaunchPaths': obj.launchPaths?.map(y => toJson_ServiceCatalogLaunchPath(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema ServiceCatalogDescribeProductAsAdminInput#SourcePortfolioId
   */
  readonly sourcePortfolioId?: string;

}

/**
 * Converts an object of type 'ServiceCatalogDescribeProductAsAdminInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDescribeProductAsAdminInput(obj: ServiceCatalogDescribeProductAsAdminInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'Id': obj.id,
    'Name': obj.name,
    'SourcePortfolioId': obj.sourcePortfolioId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogDescribeProductAsAdminOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDescribeProductAsAdminOutput(obj: ServiceCatalogDescribeProductAsAdminOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProductViewDetail': toJson_ServiceCatalogProductViewDetail(obj.productViewDetail),
    'ProvisioningArtifactSummaries': obj.provisioningArtifactSummaries?.map(y => toJson_ServiceCatalogProvisioningArtifactSummary(y)),
    'Tags': obj.tags?.map(y => toJson_ServiceCatalogTag(y)),
    'TagOptions': obj.tagOptions?.map(y => toJson_ServiceCatalogTagOptionDetail(y)),
    'Budgets': obj.budgets?.map(y => toJson_ServiceCatalogBudgetDetail(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly id?: string;

}

/**
 * Converts an object of type 'ServiceCatalogDescribeProductViewInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDescribeProductViewInput(obj: ServiceCatalogDescribeProductViewInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogDescribeProductViewOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDescribeProductViewOutput(obj: ServiceCatalogDescribeProductViewOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProductViewSummary': toJson_ServiceCatalogProductViewSummary(obj.productViewSummary),
    'ProvisioningArtifacts': obj.provisioningArtifacts?.map(y => toJson_ServiceCatalogProvisioningArtifact(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogDescribeProvisionedProductInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDescribeProvisionedProductInput(obj: ServiceCatalogDescribeProvisionedProductInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'Id': obj.id,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogDescribeProvisionedProductOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDescribeProvisionedProductOutput(obj: ServiceCatalogDescribeProvisionedProductOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProvisionedProductDetail': toJson_ServiceCatalogProvisionedProductDetail(obj.provisionedProductDetail),
    'CloudWatchDashboards': obj.cloudWatchDashboards?.map(y => toJson_ServiceCatalogCloudWatchDashboard(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly planId?: string;

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
 * Converts an object of type 'ServiceCatalogDescribeProvisionedProductPlanInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDescribeProvisionedProductPlanInput(obj: ServiceCatalogDescribeProvisionedProductPlanInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'PlanId': obj.planId,
    'PageSize': obj.pageSize,
    'PageToken': obj.pageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogDescribeProvisionedProductPlanOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDescribeProvisionedProductPlanOutput(obj: ServiceCatalogDescribeProvisionedProductPlanOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProvisionedProductPlanDetails': toJson_ServiceCatalogProvisionedProductPlanDetails(obj.provisionedProductPlanDetails),
    'ResourceChanges': obj.resourceChanges?.map(y => toJson_ServiceCatalogResourceChange(y)),
    'NextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogDescribeProvisioningArtifactInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDescribeProvisioningArtifactInput(obj: ServiceCatalogDescribeProvisioningArtifactInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'ProvisioningArtifactId': obj.provisioningArtifactId,
    'ProductId': obj.productId,
    'ProvisioningArtifactName': obj.provisioningArtifactName,
    'ProductName': obj.productName,
    'Verbose': obj.verbose,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogDescribeProvisioningArtifactOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDescribeProvisioningArtifactOutput(obj: ServiceCatalogDescribeProvisioningArtifactOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProvisioningArtifactDetail': toJson_ServiceCatalogProvisioningArtifactDetail(obj.provisioningArtifactDetail),
    'Info': ((obj.info) === undefined) ? undefined : (Object.entries(obj.info).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogDescribeProvisioningParametersInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDescribeProvisioningParametersInput(obj: ServiceCatalogDescribeProvisioningParametersInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'ProductId': obj.productId,
    'ProductName': obj.productName,
    'ProvisioningArtifactId': obj.provisioningArtifactId,
    'ProvisioningArtifactName': obj.provisioningArtifactName,
    'PathId': obj.pathId,
    'PathName': obj.pathName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogDescribeProvisioningParametersOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDescribeProvisioningParametersOutput(obj: ServiceCatalogDescribeProvisioningParametersOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProvisioningArtifactParameters': obj.provisioningArtifactParameters?.map(y => toJson_ServiceCatalogProvisioningArtifactParameter(y)),
    'ConstraintSummaries': obj.constraintSummaries?.map(y => toJson_ServiceCatalogConstraintSummary(y)),
    'UsageInstructions': obj.usageInstructions?.map(y => toJson_ServiceCatalogUsageInstruction(y)),
    'TagOptions': obj.tagOptions?.map(y => toJson_ServiceCatalogTagOptionSummary(y)),
    'ProvisioningArtifactPreferences': toJson_ServiceCatalogProvisioningArtifactPreferences(obj.provisioningArtifactPreferences),
    'ProvisioningArtifactOutputs': obj.provisioningArtifactOutputs?.map(y => toJson_ServiceCatalogProvisioningArtifactOutput(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly id?: string;

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
 * Converts an object of type 'ServiceCatalogDescribeRecordInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDescribeRecordInput(obj: ServiceCatalogDescribeRecordInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'Id': obj.id,
    'PageToken': obj.pageToken,
    'PageSize': obj.pageSize,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogDescribeRecordOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDescribeRecordOutput(obj: ServiceCatalogDescribeRecordOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RecordDetail': toJson_ServiceCatalogRecordDetail(obj.recordDetail),
    'RecordOutputs': obj.recordOutputs?.map(y => toJson_ServiceCatalogRecordOutput(y)),
    'NextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogDescribeServiceActionInput
 */
export interface ServiceCatalogDescribeServiceActionInput {
  /**
   * @schema ServiceCatalogDescribeServiceActionInput#Id
   */
  readonly id?: string;

  /**
   * @schema ServiceCatalogDescribeServiceActionInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

}

/**
 * Converts an object of type 'ServiceCatalogDescribeServiceActionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDescribeServiceActionInput(obj: ServiceCatalogDescribeServiceActionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'AcceptLanguage': obj.acceptLanguage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogDescribeServiceActionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDescribeServiceActionOutput(obj: ServiceCatalogDescribeServiceActionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceActionDetail': toJson_ServiceCatalogServiceActionDetail(obj.serviceActionDetail),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogDescribeServiceActionExecutionParametersInput
 */
export interface ServiceCatalogDescribeServiceActionExecutionParametersInput {
  /**
   * @schema ServiceCatalogDescribeServiceActionExecutionParametersInput#ProvisionedProductId
   */
  readonly provisionedProductId?: string;

  /**
   * @schema ServiceCatalogDescribeServiceActionExecutionParametersInput#ServiceActionId
   */
  readonly serviceActionId?: string;

  /**
   * @schema ServiceCatalogDescribeServiceActionExecutionParametersInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

}

/**
 * Converts an object of type 'ServiceCatalogDescribeServiceActionExecutionParametersInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDescribeServiceActionExecutionParametersInput(obj: ServiceCatalogDescribeServiceActionExecutionParametersInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProvisionedProductId': obj.provisionedProductId,
    'ServiceActionId': obj.serviceActionId,
    'AcceptLanguage': obj.acceptLanguage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogDescribeServiceActionExecutionParametersOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDescribeServiceActionExecutionParametersOutput(obj: ServiceCatalogDescribeServiceActionExecutionParametersOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceActionParameters': obj.serviceActionParameters?.map(y => toJson_ServiceCatalogExecutionParameter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogDescribeTagOptionInput
 */
export interface ServiceCatalogDescribeTagOptionInput {
  /**
   * @schema ServiceCatalogDescribeTagOptionInput#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'ServiceCatalogDescribeTagOptionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDescribeTagOptionInput(obj: ServiceCatalogDescribeTagOptionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogDescribeTagOptionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDescribeTagOptionOutput(obj: ServiceCatalogDescribeTagOptionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TagOptionDetail': toJson_ServiceCatalogTagOptionDetail(obj.tagOptionDetail),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogDisableAwsOrganizationsAccessInput
 */
export interface ServiceCatalogDisableAwsOrganizationsAccessInput {
}

/**
 * Converts an object of type 'ServiceCatalogDisableAwsOrganizationsAccessInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDisableAwsOrganizationsAccessInput(obj: ServiceCatalogDisableAwsOrganizationsAccessInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogDisableAwsOrganizationsAccessOutput
 */
export interface ServiceCatalogDisableAwsOrganizationsAccessOutput {
}

/**
 * Converts an object of type 'ServiceCatalogDisableAwsOrganizationsAccessOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDisableAwsOrganizationsAccessOutput(obj: ServiceCatalogDisableAwsOrganizationsAccessOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogDisassociateBudgetFromResourceInput
 */
export interface ServiceCatalogDisassociateBudgetFromResourceInput {
  /**
   * @schema ServiceCatalogDisassociateBudgetFromResourceInput#BudgetName
   */
  readonly budgetName?: string;

  /**
   * @schema ServiceCatalogDisassociateBudgetFromResourceInput#ResourceId
   */
  readonly resourceId?: string;

}

/**
 * Converts an object of type 'ServiceCatalogDisassociateBudgetFromResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDisassociateBudgetFromResourceInput(obj: ServiceCatalogDisassociateBudgetFromResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BudgetName': obj.budgetName,
    'ResourceId': obj.resourceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogDisassociateBudgetFromResourceOutput
 */
export interface ServiceCatalogDisassociateBudgetFromResourceOutput {
}

/**
 * Converts an object of type 'ServiceCatalogDisassociateBudgetFromResourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDisassociateBudgetFromResourceOutput(obj: ServiceCatalogDisassociateBudgetFromResourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly portfolioId?: string;

  /**
   * @schema ServiceCatalogDisassociatePrincipalFromPortfolioInput#PrincipalARN
   */
  readonly principalArn?: string;

}

/**
 * Converts an object of type 'ServiceCatalogDisassociatePrincipalFromPortfolioInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDisassociatePrincipalFromPortfolioInput(obj: ServiceCatalogDisassociatePrincipalFromPortfolioInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'PortfolioId': obj.portfolioId,
    'PrincipalARN': obj.principalArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogDisassociatePrincipalFromPortfolioOutput
 */
export interface ServiceCatalogDisassociatePrincipalFromPortfolioOutput {
}

/**
 * Converts an object of type 'ServiceCatalogDisassociatePrincipalFromPortfolioOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDisassociatePrincipalFromPortfolioOutput(obj: ServiceCatalogDisassociatePrincipalFromPortfolioOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly productId?: string;

  /**
   * @schema ServiceCatalogDisassociateProductFromPortfolioInput#PortfolioId
   */
  readonly portfolioId?: string;

}

/**
 * Converts an object of type 'ServiceCatalogDisassociateProductFromPortfolioInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDisassociateProductFromPortfolioInput(obj: ServiceCatalogDisassociateProductFromPortfolioInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'ProductId': obj.productId,
    'PortfolioId': obj.portfolioId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogDisassociateProductFromPortfolioOutput
 */
export interface ServiceCatalogDisassociateProductFromPortfolioOutput {
}

/**
 * Converts an object of type 'ServiceCatalogDisassociateProductFromPortfolioOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDisassociateProductFromPortfolioOutput(obj: ServiceCatalogDisassociateProductFromPortfolioOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogDisassociateServiceActionFromProvisioningArtifactInput
 */
export interface ServiceCatalogDisassociateServiceActionFromProvisioningArtifactInput {
  /**
   * @schema ServiceCatalogDisassociateServiceActionFromProvisioningArtifactInput#ProductId
   */
  readonly productId?: string;

  /**
   * @schema ServiceCatalogDisassociateServiceActionFromProvisioningArtifactInput#ProvisioningArtifactId
   */
  readonly provisioningArtifactId?: string;

  /**
   * @schema ServiceCatalogDisassociateServiceActionFromProvisioningArtifactInput#ServiceActionId
   */
  readonly serviceActionId?: string;

  /**
   * @schema ServiceCatalogDisassociateServiceActionFromProvisioningArtifactInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

}

/**
 * Converts an object of type 'ServiceCatalogDisassociateServiceActionFromProvisioningArtifactInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDisassociateServiceActionFromProvisioningArtifactInput(obj: ServiceCatalogDisassociateServiceActionFromProvisioningArtifactInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProductId': obj.productId,
    'ProvisioningArtifactId': obj.provisioningArtifactId,
    'ServiceActionId': obj.serviceActionId,
    'AcceptLanguage': obj.acceptLanguage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogDisassociateServiceActionFromProvisioningArtifactOutput
 */
export interface ServiceCatalogDisassociateServiceActionFromProvisioningArtifactOutput {
}

/**
 * Converts an object of type 'ServiceCatalogDisassociateServiceActionFromProvisioningArtifactOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDisassociateServiceActionFromProvisioningArtifactOutput(obj: ServiceCatalogDisassociateServiceActionFromProvisioningArtifactOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogDisassociateTagOptionFromResourceInput
 */
export interface ServiceCatalogDisassociateTagOptionFromResourceInput {
  /**
   * @schema ServiceCatalogDisassociateTagOptionFromResourceInput#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema ServiceCatalogDisassociateTagOptionFromResourceInput#TagOptionId
   */
  readonly tagOptionId?: string;

}

/**
 * Converts an object of type 'ServiceCatalogDisassociateTagOptionFromResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDisassociateTagOptionFromResourceInput(obj: ServiceCatalogDisassociateTagOptionFromResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceId': obj.resourceId,
    'TagOptionId': obj.tagOptionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogDisassociateTagOptionFromResourceOutput
 */
export interface ServiceCatalogDisassociateTagOptionFromResourceOutput {
}

/**
 * Converts an object of type 'ServiceCatalogDisassociateTagOptionFromResourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogDisassociateTagOptionFromResourceOutput(obj: ServiceCatalogDisassociateTagOptionFromResourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogEnableAwsOrganizationsAccessInput
 */
export interface ServiceCatalogEnableAwsOrganizationsAccessInput {
}

/**
 * Converts an object of type 'ServiceCatalogEnableAwsOrganizationsAccessInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogEnableAwsOrganizationsAccessInput(obj: ServiceCatalogEnableAwsOrganizationsAccessInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogEnableAwsOrganizationsAccessOutput
 */
export interface ServiceCatalogEnableAwsOrganizationsAccessOutput {
}

/**
 * Converts an object of type 'ServiceCatalogEnableAwsOrganizationsAccessOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogEnableAwsOrganizationsAccessOutput(obj: ServiceCatalogEnableAwsOrganizationsAccessOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly planId?: string;

  /**
   * @schema ServiceCatalogExecuteProvisionedProductPlanInput#IdempotencyToken
   */
  readonly idempotencyToken?: string;

}

/**
 * Converts an object of type 'ServiceCatalogExecuteProvisionedProductPlanInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogExecuteProvisionedProductPlanInput(obj: ServiceCatalogExecuteProvisionedProductPlanInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'PlanId': obj.planId,
    'IdempotencyToken': obj.idempotencyToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogExecuteProvisionedProductPlanOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogExecuteProvisionedProductPlanOutput(obj: ServiceCatalogExecuteProvisionedProductPlanOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RecordDetail': toJson_ServiceCatalogRecordDetail(obj.recordDetail),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogExecuteProvisionedProductServiceActionInput
 */
export interface ServiceCatalogExecuteProvisionedProductServiceActionInput {
  /**
   * @schema ServiceCatalogExecuteProvisionedProductServiceActionInput#ProvisionedProductId
   */
  readonly provisionedProductId?: string;

  /**
   * @schema ServiceCatalogExecuteProvisionedProductServiceActionInput#ServiceActionId
   */
  readonly serviceActionId?: string;

  /**
   * @schema ServiceCatalogExecuteProvisionedProductServiceActionInput#ExecuteToken
   */
  readonly executeToken?: string;

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
 * Converts an object of type 'ServiceCatalogExecuteProvisionedProductServiceActionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogExecuteProvisionedProductServiceActionInput(obj: ServiceCatalogExecuteProvisionedProductServiceActionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProvisionedProductId': obj.provisionedProductId,
    'ServiceActionId': obj.serviceActionId,
    'ExecuteToken': obj.executeToken,
    'AcceptLanguage': obj.acceptLanguage,
    'Parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogExecuteProvisionedProductServiceActionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogExecuteProvisionedProductServiceActionOutput(obj: ServiceCatalogExecuteProvisionedProductServiceActionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RecordDetail': toJson_ServiceCatalogRecordDetail(obj.recordDetail),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogGetAwsOrganizationsAccessStatusInput
 */
export interface ServiceCatalogGetAwsOrganizationsAccessStatusInput {
}

/**
 * Converts an object of type 'ServiceCatalogGetAwsOrganizationsAccessStatusInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogGetAwsOrganizationsAccessStatusInput(obj: ServiceCatalogGetAwsOrganizationsAccessStatusInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogGetAwsOrganizationsAccessStatusOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogGetAwsOrganizationsAccessStatusOutput(obj: ServiceCatalogGetAwsOrganizationsAccessStatusOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccessStatus': obj.accessStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogGetProvisionedProductOutputsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogGetProvisionedProductOutputsInput(obj: ServiceCatalogGetProvisionedProductOutputsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'ProvisionedProductId': obj.provisionedProductId,
    'ProvisionedProductName': obj.provisionedProductName,
    'OutputKeys': obj.outputKeys?.map(y => y),
    'PageSize': obj.pageSize,
    'PageToken': obj.pageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogGetProvisionedProductOutputsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogGetProvisionedProductOutputsOutput(obj: ServiceCatalogGetProvisionedProductOutputsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Outputs': obj.outputs?.map(y => toJson_ServiceCatalogRecordOutput(y)),
    'NextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly productId?: string;

  /**
   * @schema ServiceCatalogImportAsProvisionedProductInput#ProvisioningArtifactId
   */
  readonly provisioningArtifactId?: string;

  /**
   * @schema ServiceCatalogImportAsProvisionedProductInput#ProvisionedProductName
   */
  readonly provisionedProductName?: string;

  /**
   * @schema ServiceCatalogImportAsProvisionedProductInput#PhysicalId
   */
  readonly physicalId?: string;

  /**
   * @schema ServiceCatalogImportAsProvisionedProductInput#IdempotencyToken
   */
  readonly idempotencyToken?: string;

}

/**
 * Converts an object of type 'ServiceCatalogImportAsProvisionedProductInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogImportAsProvisionedProductInput(obj: ServiceCatalogImportAsProvisionedProductInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'ProductId': obj.productId,
    'ProvisioningArtifactId': obj.provisioningArtifactId,
    'ProvisionedProductName': obj.provisionedProductName,
    'PhysicalId': obj.physicalId,
    'IdempotencyToken': obj.idempotencyToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogImportAsProvisionedProductOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogImportAsProvisionedProductOutput(obj: ServiceCatalogImportAsProvisionedProductOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RecordDetail': toJson_ServiceCatalogRecordDetail(obj.recordDetail),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogListAcceptedPortfolioSharesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogListAcceptedPortfolioSharesInput(obj: ServiceCatalogListAcceptedPortfolioSharesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'PageToken': obj.pageToken,
    'PageSize': obj.pageSize,
    'PortfolioShareType': obj.portfolioShareType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogListAcceptedPortfolioSharesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogListAcceptedPortfolioSharesOutput(obj: ServiceCatalogListAcceptedPortfolioSharesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PortfolioDetails': obj.portfolioDetails?.map(y => toJson_ServiceCatalogPortfolioDetail(y)),
    'NextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly resourceId?: string;

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
 * Converts an object of type 'ServiceCatalogListBudgetsForResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogListBudgetsForResourceInput(obj: ServiceCatalogListBudgetsForResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'ResourceId': obj.resourceId,
    'PageSize': obj.pageSize,
    'PageToken': obj.pageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogListBudgetsForResourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogListBudgetsForResourceOutput(obj: ServiceCatalogListBudgetsForResourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Budgets': obj.budgets?.map(y => toJson_ServiceCatalogBudgetDetail(y)),
    'NextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly portfolioId?: string;

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
 * Converts an object of type 'ServiceCatalogListConstraintsForPortfolioInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogListConstraintsForPortfolioInput(obj: ServiceCatalogListConstraintsForPortfolioInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'PortfolioId': obj.portfolioId,
    'ProductId': obj.productId,
    'PageSize': obj.pageSize,
    'PageToken': obj.pageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogListConstraintsForPortfolioOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogListConstraintsForPortfolioOutput(obj: ServiceCatalogListConstraintsForPortfolioOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConstraintDetails': obj.constraintDetails?.map(y => toJson_ServiceCatalogConstraintDetail(y)),
    'NextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly productId?: string;

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
 * Converts an object of type 'ServiceCatalogListLaunchPathsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogListLaunchPathsInput(obj: ServiceCatalogListLaunchPathsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'ProductId': obj.productId,
    'PageSize': obj.pageSize,
    'PageToken': obj.pageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogListLaunchPathsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogListLaunchPathsOutput(obj: ServiceCatalogListLaunchPathsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LaunchPathSummaries': obj.launchPathSummaries?.map(y => toJson_ServiceCatalogLaunchPathSummary(y)),
    'NextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly portfolioId?: string;

  /**
   * @schema ServiceCatalogListOrganizationPortfolioAccessInput#OrganizationNodeType
   */
  readonly organizationNodeType?: string;

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
 * Converts an object of type 'ServiceCatalogListOrganizationPortfolioAccessInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogListOrganizationPortfolioAccessInput(obj: ServiceCatalogListOrganizationPortfolioAccessInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'PortfolioId': obj.portfolioId,
    'OrganizationNodeType': obj.organizationNodeType,
    'PageToken': obj.pageToken,
    'PageSize': obj.pageSize,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogListOrganizationPortfolioAccessOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogListOrganizationPortfolioAccessOutput(obj: ServiceCatalogListOrganizationPortfolioAccessOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrganizationNodes': obj.organizationNodes?.map(y => toJson_ServiceCatalogOrganizationNode(y)),
    'NextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly portfolioId?: string;

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
 * Converts an object of type 'ServiceCatalogListPortfolioAccessInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogListPortfolioAccessInput(obj: ServiceCatalogListPortfolioAccessInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'PortfolioId': obj.portfolioId,
    'OrganizationParentId': obj.organizationParentId,
    'PageToken': obj.pageToken,
    'PageSize': obj.pageSize,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogListPortfolioAccessOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogListPortfolioAccessOutput(obj: ServiceCatalogListPortfolioAccessOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountIds': obj.accountIds?.map(y => y),
    'NextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogListPortfoliosInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogListPortfoliosInput(obj: ServiceCatalogListPortfoliosInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'PageToken': obj.pageToken,
    'PageSize': obj.pageSize,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogListPortfoliosOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogListPortfoliosOutput(obj: ServiceCatalogListPortfoliosOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PortfolioDetails': obj.portfolioDetails?.map(y => toJson_ServiceCatalogPortfolioDetail(y)),
    'NextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly productId?: string;

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
 * Converts an object of type 'ServiceCatalogListPortfoliosForProductInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogListPortfoliosForProductInput(obj: ServiceCatalogListPortfoliosForProductInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'ProductId': obj.productId,
    'PageToken': obj.pageToken,
    'PageSize': obj.pageSize,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogListPortfoliosForProductOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogListPortfoliosForProductOutput(obj: ServiceCatalogListPortfoliosForProductOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PortfolioDetails': obj.portfolioDetails?.map(y => toJson_ServiceCatalogPortfolioDetail(y)),
    'NextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly portfolioId?: string;

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
 * Converts an object of type 'ServiceCatalogListPrincipalsForPortfolioInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogListPrincipalsForPortfolioInput(obj: ServiceCatalogListPrincipalsForPortfolioInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'PortfolioId': obj.portfolioId,
    'PageSize': obj.pageSize,
    'PageToken': obj.pageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogListPrincipalsForPortfolioOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogListPrincipalsForPortfolioOutput(obj: ServiceCatalogListPrincipalsForPortfolioOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Principals': obj.principals?.map(y => toJson_ServiceCatalogPrincipal(y)),
    'NextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogListProvisionedProductPlansInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogListProvisionedProductPlansInput(obj: ServiceCatalogListProvisionedProductPlansInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'ProvisionProductId': obj.provisionProductId,
    'PageSize': obj.pageSize,
    'PageToken': obj.pageToken,
    'AccessLevelFilter': toJson_ServiceCatalogAccessLevelFilter(obj.accessLevelFilter),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogListProvisionedProductPlansOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogListProvisionedProductPlansOutput(obj: ServiceCatalogListProvisionedProductPlansOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProvisionedProductPlans': obj.provisionedProductPlans?.map(y => toJson_ServiceCatalogProvisionedProductPlanSummary(y)),
    'NextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly productId?: string;

}

/**
 * Converts an object of type 'ServiceCatalogListProvisioningArtifactsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogListProvisioningArtifactsInput(obj: ServiceCatalogListProvisioningArtifactsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'ProductId': obj.productId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogListProvisioningArtifactsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogListProvisioningArtifactsOutput(obj: ServiceCatalogListProvisioningArtifactsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProvisioningArtifactDetails': obj.provisioningArtifactDetails?.map(y => toJson_ServiceCatalogProvisioningArtifactDetail(y)),
    'NextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogListProvisioningArtifactsForServiceActionInput
 */
export interface ServiceCatalogListProvisioningArtifactsForServiceActionInput {
  /**
   * @schema ServiceCatalogListProvisioningArtifactsForServiceActionInput#ServiceActionId
   */
  readonly serviceActionId?: string;

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
 * Converts an object of type 'ServiceCatalogListProvisioningArtifactsForServiceActionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogListProvisioningArtifactsForServiceActionInput(obj: ServiceCatalogListProvisioningArtifactsForServiceActionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceActionId': obj.serviceActionId,
    'PageSize': obj.pageSize,
    'PageToken': obj.pageToken,
    'AcceptLanguage': obj.acceptLanguage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogListProvisioningArtifactsForServiceActionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogListProvisioningArtifactsForServiceActionOutput(obj: ServiceCatalogListProvisioningArtifactsForServiceActionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProvisioningArtifactViews': obj.provisioningArtifactViews?.map(y => toJson_ServiceCatalogProvisioningArtifactView(y)),
    'NextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogListRecordHistoryInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogListRecordHistoryInput(obj: ServiceCatalogListRecordHistoryInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'AccessLevelFilter': toJson_ServiceCatalogAccessLevelFilter(obj.accessLevelFilter),
    'SearchFilter': toJson_ServiceCatalogListRecordHistorySearchFilter(obj.searchFilter),
    'PageSize': obj.pageSize,
    'PageToken': obj.pageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogListRecordHistoryOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogListRecordHistoryOutput(obj: ServiceCatalogListRecordHistoryOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RecordDetails': obj.recordDetails?.map(y => toJson_ServiceCatalogRecordDetail(y)),
    'NextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogListResourcesForTagOptionInput
 */
export interface ServiceCatalogListResourcesForTagOptionInput {
  /**
   * @schema ServiceCatalogListResourcesForTagOptionInput#TagOptionId
   */
  readonly tagOptionId?: string;

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
 * Converts an object of type 'ServiceCatalogListResourcesForTagOptionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogListResourcesForTagOptionInput(obj: ServiceCatalogListResourcesForTagOptionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TagOptionId': obj.tagOptionId,
    'ResourceType': obj.resourceType,
    'PageSize': obj.pageSize,
    'PageToken': obj.pageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogListResourcesForTagOptionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogListResourcesForTagOptionOutput(obj: ServiceCatalogListResourcesForTagOptionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceDetails': obj.resourceDetails?.map(y => toJson_ServiceCatalogResourceDetail(y)),
    'PageToken': obj.pageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogListServiceActionsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogListServiceActionsInput(obj: ServiceCatalogListServiceActionsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'PageSize': obj.pageSize,
    'PageToken': obj.pageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogListServiceActionsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogListServiceActionsOutput(obj: ServiceCatalogListServiceActionsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceActionSummaries': obj.serviceActionSummaries?.map(y => toJson_ServiceCatalogServiceActionSummary(y)),
    'NextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogListServiceActionsForProvisioningArtifactInput
 */
export interface ServiceCatalogListServiceActionsForProvisioningArtifactInput {
  /**
   * @schema ServiceCatalogListServiceActionsForProvisioningArtifactInput#ProductId
   */
  readonly productId?: string;

  /**
   * @schema ServiceCatalogListServiceActionsForProvisioningArtifactInput#ProvisioningArtifactId
   */
  readonly provisioningArtifactId?: string;

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
 * Converts an object of type 'ServiceCatalogListServiceActionsForProvisioningArtifactInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogListServiceActionsForProvisioningArtifactInput(obj: ServiceCatalogListServiceActionsForProvisioningArtifactInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProductId': obj.productId,
    'ProvisioningArtifactId': obj.provisioningArtifactId,
    'PageSize': obj.pageSize,
    'PageToken': obj.pageToken,
    'AcceptLanguage': obj.acceptLanguage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogListServiceActionsForProvisioningArtifactOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogListServiceActionsForProvisioningArtifactOutput(obj: ServiceCatalogListServiceActionsForProvisioningArtifactOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceActionSummaries': obj.serviceActionSummaries?.map(y => toJson_ServiceCatalogServiceActionSummary(y)),
    'NextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly provisionedProductId?: string;

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
 * Converts an object of type 'ServiceCatalogListStackInstancesForProvisionedProductInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogListStackInstancesForProvisionedProductInput(obj: ServiceCatalogListStackInstancesForProvisionedProductInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'ProvisionedProductId': obj.provisionedProductId,
    'PageToken': obj.pageToken,
    'PageSize': obj.pageSize,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogListStackInstancesForProvisionedProductOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogListStackInstancesForProvisionedProductOutput(obj: ServiceCatalogListStackInstancesForProvisionedProductOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackInstances': obj.stackInstances?.map(y => toJson_ServiceCatalogStackInstance(y)),
    'NextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogListTagOptionsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogListTagOptionsInput(obj: ServiceCatalogListTagOptionsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filters': toJson_ServiceCatalogListTagOptionsFilters(obj.filters),
    'PageSize': obj.pageSize,
    'PageToken': obj.pageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogListTagOptionsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogListTagOptionsOutput(obj: ServiceCatalogListTagOptionsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TagOptionDetails': obj.tagOptionDetails?.map(y => toJson_ServiceCatalogTagOptionDetail(y)),
    'PageToken': obj.pageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly provisionedProductName?: string;

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
  readonly provisionToken?: string;

}

/**
 * Converts an object of type 'ServiceCatalogProvisionProductInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogProvisionProductInput(obj: ServiceCatalogProvisionProductInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'ProductId': obj.productId,
    'ProductName': obj.productName,
    'ProvisioningArtifactId': obj.provisioningArtifactId,
    'ProvisioningArtifactName': obj.provisioningArtifactName,
    'PathId': obj.pathId,
    'PathName': obj.pathName,
    'ProvisionedProductName': obj.provisionedProductName,
    'ProvisioningParameters': obj.provisioningParameters?.map(y => toJson_ServiceCatalogProvisioningParameter(y)),
    'ProvisioningPreferences': toJson_ServiceCatalogProvisioningPreferences(obj.provisioningPreferences),
    'Tags': obj.tags?.map(y => toJson_ServiceCatalogTag(y)),
    'NotificationArns': obj.notificationArns?.map(y => y),
    'ProvisionToken': obj.provisionToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogProvisionProductOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogProvisionProductOutput(obj: ServiceCatalogProvisionProductOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RecordDetail': toJson_ServiceCatalogRecordDetail(obj.recordDetail),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly portfolioId?: string;

  /**
   * @schema ServiceCatalogRejectPortfolioShareInput#PortfolioShareType
   */
  readonly portfolioShareType?: string;

}

/**
 * Converts an object of type 'ServiceCatalogRejectPortfolioShareInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogRejectPortfolioShareInput(obj: ServiceCatalogRejectPortfolioShareInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'PortfolioId': obj.portfolioId,
    'PortfolioShareType': obj.portfolioShareType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogRejectPortfolioShareOutput
 */
export interface ServiceCatalogRejectPortfolioShareOutput {
}

/**
 * Converts an object of type 'ServiceCatalogRejectPortfolioShareOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogRejectPortfolioShareOutput(obj: ServiceCatalogRejectPortfolioShareOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogScanProvisionedProductsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogScanProvisionedProductsInput(obj: ServiceCatalogScanProvisionedProductsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'AccessLevelFilter': toJson_ServiceCatalogAccessLevelFilter(obj.accessLevelFilter),
    'PageSize': obj.pageSize,
    'PageToken': obj.pageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogScanProvisionedProductsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogScanProvisionedProductsOutput(obj: ServiceCatalogScanProvisionedProductsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProvisionedProducts': obj.provisionedProducts?.map(y => toJson_ServiceCatalogProvisionedProductDetail(y)),
    'NextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogSearchProductsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogSearchProductsInput(obj: ServiceCatalogSearchProductsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'Filters': ((obj.filters) === undefined) ? undefined : (Object.entries(obj.filters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
    'PageSize': obj.pageSize,
    'SortBy': obj.sortBy,
    'SortOrder': obj.sortOrder,
    'PageToken': obj.pageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogSearchProductsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogSearchProductsOutput(obj: ServiceCatalogSearchProductsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProductViewSummaries': obj.productViewSummaries?.map(y => toJson_ServiceCatalogProductViewSummary(y)),
    'ProductViewAggregations': ((obj.productViewAggregations) === undefined) ? undefined : (Object.entries(obj.productViewAggregations).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => toJson_ServiceCatalogProductViewAggregationValue(y)) }), {})),
    'NextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogSearchProductsAsAdminInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogSearchProductsAsAdminInput(obj: ServiceCatalogSearchProductsAsAdminInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'PortfolioId': obj.portfolioId,
    'Filters': ((obj.filters) === undefined) ? undefined : (Object.entries(obj.filters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
    'SortBy': obj.sortBy,
    'SortOrder': obj.sortOrder,
    'PageToken': obj.pageToken,
    'PageSize': obj.pageSize,
    'ProductSource': obj.productSource,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogSearchProductsAsAdminOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogSearchProductsAsAdminOutput(obj: ServiceCatalogSearchProductsAsAdminOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProductViewDetails': obj.productViewDetails?.map(y => toJson_ServiceCatalogProductViewDetail(y)),
    'NextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogSearchProvisionedProductsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogSearchProvisionedProductsInput(obj: ServiceCatalogSearchProvisionedProductsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'AccessLevelFilter': toJson_ServiceCatalogAccessLevelFilter(obj.accessLevelFilter),
    'Filters': ((obj.filters) === undefined) ? undefined : (Object.entries(obj.filters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
    'SortBy': obj.sortBy,
    'SortOrder': obj.sortOrder,
    'PageSize': obj.pageSize,
    'PageToken': obj.pageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogSearchProvisionedProductsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogSearchProvisionedProductsOutput(obj: ServiceCatalogSearchProvisionedProductsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProvisionedProducts': obj.provisionedProducts?.map(y => toJson_ServiceCatalogProvisionedProductAttribute(y)),
    'TotalResultsCount': obj.totalResultsCount,
    'NextPageToken': obj.nextPageToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly terminateToken?: string;

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
 * Converts an object of type 'ServiceCatalogTerminateProvisionedProductInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogTerminateProvisionedProductInput(obj: ServiceCatalogTerminateProvisionedProductInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProvisionedProductName': obj.provisionedProductName,
    'ProvisionedProductId': obj.provisionedProductId,
    'TerminateToken': obj.terminateToken,
    'IgnoreErrors': obj.ignoreErrors,
    'AcceptLanguage': obj.acceptLanguage,
    'RetainPhysicalResources': obj.retainPhysicalResources,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogTerminateProvisionedProductOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogTerminateProvisionedProductOutput(obj: ServiceCatalogTerminateProvisionedProductOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RecordDetail': toJson_ServiceCatalogRecordDetail(obj.recordDetail),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly id?: string;

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
 * Converts an object of type 'ServiceCatalogUpdateConstraintInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogUpdateConstraintInput(obj: ServiceCatalogUpdateConstraintInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'Id': obj.id,
    'Description': obj.description,
    'Parameters': obj.parameters,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogUpdateConstraintOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogUpdateConstraintOutput(obj: ServiceCatalogUpdateConstraintOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConstraintDetail': toJson_ServiceCatalogConstraintDetail(obj.constraintDetail),
    'ConstraintParameters': obj.constraintParameters,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly id?: string;

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
 * Converts an object of type 'ServiceCatalogUpdatePortfolioInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogUpdatePortfolioInput(obj: ServiceCatalogUpdatePortfolioInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'Id': obj.id,
    'DisplayName': obj.displayName,
    'Description': obj.description,
    'ProviderName': obj.providerName,
    'AddTags': obj.addTags?.map(y => toJson_ServiceCatalogTag(y)),
    'RemoveTags': obj.removeTags?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogUpdatePortfolioOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogUpdatePortfolioOutput(obj: ServiceCatalogUpdatePortfolioOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PortfolioDetail': toJson_ServiceCatalogPortfolioDetail(obj.portfolioDetail),
    'Tags': obj.tags?.map(y => toJson_ServiceCatalogTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogUpdatePortfolioShareInput
 */
export interface ServiceCatalogUpdatePortfolioShareInput {
  /**
   * @schema ServiceCatalogUpdatePortfolioShareInput#AcceptLanguage
   */
  readonly acceptLanguage?: string;

  /**
   * @schema ServiceCatalogUpdatePortfolioShareInput#PortfolioId
   */
  readonly portfolioId?: string;

  /**
   * @schema ServiceCatalogUpdatePortfolioShareInput#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema ServiceCatalogUpdatePortfolioShareInput#OrganizationNode
   */
  readonly organizationNode?: ServiceCatalogOrganizationNode;

  /**
   * @schema ServiceCatalogUpdatePortfolioShareInput#ShareTagOptions
   */
  readonly shareTagOptions?: boolean;

}

/**
 * Converts an object of type 'ServiceCatalogUpdatePortfolioShareInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogUpdatePortfolioShareInput(obj: ServiceCatalogUpdatePortfolioShareInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'PortfolioId': obj.portfolioId,
    'AccountId': obj.accountId,
    'OrganizationNode': toJson_ServiceCatalogOrganizationNode(obj.organizationNode),
    'ShareTagOptions': obj.shareTagOptions,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogUpdatePortfolioShareOutput
 */
export interface ServiceCatalogUpdatePortfolioShareOutput {
  /**
   * @schema ServiceCatalogUpdatePortfolioShareOutput#PortfolioShareToken
   */
  readonly portfolioShareToken?: string;

  /**
   * @schema ServiceCatalogUpdatePortfolioShareOutput#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'ServiceCatalogUpdatePortfolioShareOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogUpdatePortfolioShareOutput(obj: ServiceCatalogUpdatePortfolioShareOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PortfolioShareToken': obj.portfolioShareToken,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly id?: string;

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
 * Converts an object of type 'ServiceCatalogUpdateProductInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogUpdateProductInput(obj: ServiceCatalogUpdateProductInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'Id': obj.id,
    'Name': obj.name,
    'Owner': obj.owner,
    'Description': obj.description,
    'Distributor': obj.distributor,
    'SupportDescription': obj.supportDescription,
    'SupportEmail': obj.supportEmail,
    'SupportUrl': obj.supportUrl,
    'AddTags': obj.addTags?.map(y => toJson_ServiceCatalogTag(y)),
    'RemoveTags': obj.removeTags?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogUpdateProductOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogUpdateProductOutput(obj: ServiceCatalogUpdateProductOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProductViewDetail': toJson_ServiceCatalogProductViewDetail(obj.productViewDetail),
    'Tags': obj.tags?.map(y => toJson_ServiceCatalogTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly updateToken?: string;

}

/**
 * Converts an object of type 'ServiceCatalogUpdateProvisionedProductInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogUpdateProvisionedProductInput(obj: ServiceCatalogUpdateProvisionedProductInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'ProvisionedProductName': obj.provisionedProductName,
    'ProvisionedProductId': obj.provisionedProductId,
    'ProductId': obj.productId,
    'ProductName': obj.productName,
    'ProvisioningArtifactId': obj.provisioningArtifactId,
    'ProvisioningArtifactName': obj.provisioningArtifactName,
    'PathId': obj.pathId,
    'PathName': obj.pathName,
    'ProvisioningParameters': obj.provisioningParameters?.map(y => toJson_ServiceCatalogUpdateProvisioningParameter(y)),
    'ProvisioningPreferences': toJson_ServiceCatalogUpdateProvisioningPreferences(obj.provisioningPreferences),
    'Tags': obj.tags?.map(y => toJson_ServiceCatalogTag(y)),
    'UpdateToken': obj.updateToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogUpdateProvisionedProductOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogUpdateProvisionedProductOutput(obj: ServiceCatalogUpdateProvisionedProductOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RecordDetail': toJson_ServiceCatalogRecordDetail(obj.recordDetail),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly provisionedProductId?: string;

  /**
   * @schema ServiceCatalogUpdateProvisionedProductPropertiesInput#ProvisionedProductProperties
   */
  readonly provisionedProductProperties?: { [key: string]: string };

  /**
   * @schema ServiceCatalogUpdateProvisionedProductPropertiesInput#IdempotencyToken
   */
  readonly idempotencyToken?: string;

}

/**
 * Converts an object of type 'ServiceCatalogUpdateProvisionedProductPropertiesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogUpdateProvisionedProductPropertiesInput(obj: ServiceCatalogUpdateProvisionedProductPropertiesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'ProvisionedProductId': obj.provisionedProductId,
    'ProvisionedProductProperties': ((obj.provisionedProductProperties) === undefined) ? undefined : (Object.entries(obj.provisionedProductProperties).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'IdempotencyToken': obj.idempotencyToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogUpdateProvisionedProductPropertiesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogUpdateProvisionedProductPropertiesOutput(obj: ServiceCatalogUpdateProvisionedProductPropertiesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProvisionedProductId': obj.provisionedProductId,
    'ProvisionedProductProperties': ((obj.provisionedProductProperties) === undefined) ? undefined : (Object.entries(obj.provisionedProductProperties).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'RecordId': obj.recordId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly productId?: string;

  /**
   * @schema ServiceCatalogUpdateProvisioningArtifactInput#ProvisioningArtifactId
   */
  readonly provisioningArtifactId?: string;

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
 * Converts an object of type 'ServiceCatalogUpdateProvisioningArtifactInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogUpdateProvisioningArtifactInput(obj: ServiceCatalogUpdateProvisioningArtifactInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptLanguage': obj.acceptLanguage,
    'ProductId': obj.productId,
    'ProvisioningArtifactId': obj.provisioningArtifactId,
    'Name': obj.name,
    'Description': obj.description,
    'Active': obj.active,
    'Guidance': obj.guidance,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogUpdateProvisioningArtifactOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogUpdateProvisioningArtifactOutput(obj: ServiceCatalogUpdateProvisioningArtifactOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProvisioningArtifactDetail': toJson_ServiceCatalogProvisioningArtifactDetail(obj.provisioningArtifactDetail),
    'Info': ((obj.info) === undefined) ? undefined : (Object.entries(obj.info).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogUpdateServiceActionInput
 */
export interface ServiceCatalogUpdateServiceActionInput {
  /**
   * @schema ServiceCatalogUpdateServiceActionInput#Id
   */
  readonly id?: string;

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
 * Converts an object of type 'ServiceCatalogUpdateServiceActionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogUpdateServiceActionInput(obj: ServiceCatalogUpdateServiceActionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Name': obj.name,
    'Definition': ((obj.definition) === undefined) ? undefined : (Object.entries(obj.definition).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Description': obj.description,
    'AcceptLanguage': obj.acceptLanguage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogUpdateServiceActionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogUpdateServiceActionOutput(obj: ServiceCatalogUpdateServiceActionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceActionDetail': toJson_ServiceCatalogServiceActionDetail(obj.serviceActionDetail),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogUpdateTagOptionInput
 */
export interface ServiceCatalogUpdateTagOptionInput {
  /**
   * @schema ServiceCatalogUpdateTagOptionInput#Id
   */
  readonly id?: string;

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
 * Converts an object of type 'ServiceCatalogUpdateTagOptionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogUpdateTagOptionInput(obj: ServiceCatalogUpdateTagOptionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Value': obj.value,
    'Active': obj.active,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogUpdateTagOptionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogUpdateTagOptionOutput(obj: ServiceCatalogUpdateTagOptionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TagOptionDetail': toJson_ServiceCatalogTagOptionDetail(obj.tagOptionDetail),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogServiceActionAssociation
 */
export interface ServiceCatalogServiceActionAssociation {
  /**
   * @schema ServiceCatalogServiceActionAssociation#ServiceActionId
   */
  readonly serviceActionId?: string;

  /**
   * @schema ServiceCatalogServiceActionAssociation#ProductId
   */
  readonly productId?: string;

  /**
   * @schema ServiceCatalogServiceActionAssociation#ProvisioningArtifactId
   */
  readonly provisioningArtifactId?: string;

}

/**
 * Converts an object of type 'ServiceCatalogServiceActionAssociation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogServiceActionAssociation(obj: ServiceCatalogServiceActionAssociation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceActionId': obj.serviceActionId,
    'ProductId': obj.productId,
    'ProvisioningArtifactId': obj.provisioningArtifactId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogFailedServiceActionAssociation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogFailedServiceActionAssociation(obj: ServiceCatalogFailedServiceActionAssociation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceActionId': obj.serviceActionId,
    'ProductId': obj.productId,
    'ProvisioningArtifactId': obj.provisioningArtifactId,
    'ErrorCode': obj.errorCode,
    'ErrorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogConstraintDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogConstraintDetail(obj: ServiceCatalogConstraintDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConstraintId': obj.constraintId,
    'Type': obj.type,
    'Description': obj.description,
    'Owner': obj.owner,
    'ProductId': obj.productId,
    'PortfolioId': obj.portfolioId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogTag
 */
export interface ServiceCatalogTag {
  /**
   * @schema ServiceCatalogTag#Key
   */
  readonly key?: string;

  /**
   * @schema ServiceCatalogTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'ServiceCatalogTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogTag(obj: ServiceCatalogTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogPortfolioDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogPortfolioDetail(obj: ServiceCatalogPortfolioDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'ARN': obj.arn,
    'DisplayName': obj.displayName,
    'Description': obj.description,
    'CreatedTime': obj.createdTime,
    'ProviderName': obj.providerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogOrganizationNode' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogOrganizationNode(obj: ServiceCatalogOrganizationNode | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly info?: { [key: string]: string };

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
 * Converts an object of type 'ServiceCatalogProvisioningArtifactProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogProvisioningArtifactProperties(obj: ServiceCatalogProvisioningArtifactProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'Info': ((obj.info) === undefined) ? undefined : (Object.entries(obj.info).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Type': obj.type,
    'DisableTemplateValidation': obj.disableTemplateValidation,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogProductViewDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogProductViewDetail(obj: ServiceCatalogProductViewDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProductViewSummary': toJson_ServiceCatalogProductViewSummary(obj.productViewSummary),
    'Status': obj.status,
    'ProductARN': obj.productArn,
    'CreatedTime': obj.createdTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogProvisioningArtifactDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogProvisioningArtifactDetail(obj: ServiceCatalogProvisioningArtifactDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Name': obj.name,
    'Description': obj.description,
    'Type': obj.type,
    'CreatedTime': obj.createdTime,
    'Active': obj.active,
    'Guidance': obj.guidance,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogUpdateProvisioningParameter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogUpdateProvisioningParameter(obj: ServiceCatalogUpdateProvisioningParameter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
    'UsePreviousValue': obj.usePreviousValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogServiceActionDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogServiceActionDetail(obj: ServiceCatalogServiceActionDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceActionSummary': toJson_ServiceCatalogServiceActionSummary(obj.serviceActionSummary),
    'Definition': ((obj.definition) === undefined) ? undefined : (Object.entries(obj.definition).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema ServiceCatalogTagOptionDetail#Owner
   */
  readonly owner?: string;

}

/**
 * Converts an object of type 'ServiceCatalogTagOptionDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogTagOptionDetail(obj: ServiceCatalogTagOptionDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
    'Active': obj.active,
    'Id': obj.id,
    'Owner': obj.owner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogBudgetDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogBudgetDetail(obj: ServiceCatalogBudgetDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BudgetName': obj.budgetName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogShareDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogShareDetails(obj: ServiceCatalogShareDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SuccessfulShares': obj.successfulShares?.map(y => y),
    'ShareErrors': obj.shareErrors?.map(y => toJson_ServiceCatalogShareError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogPortfolioShareDetail
 */
export interface ServiceCatalogPortfolioShareDetail {
  /**
   * @schema ServiceCatalogPortfolioShareDetail#PrincipalId
   */
  readonly principalId?: string;

  /**
   * @schema ServiceCatalogPortfolioShareDetail#Type
   */
  readonly type?: string;

  /**
   * @schema ServiceCatalogPortfolioShareDetail#Accepted
   */
  readonly accepted?: boolean;

  /**
   * @schema ServiceCatalogPortfolioShareDetail#ShareTagOptions
   */
  readonly shareTagOptions?: boolean;

}

/**
 * Converts an object of type 'ServiceCatalogPortfolioShareDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogPortfolioShareDetail(obj: ServiceCatalogPortfolioShareDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PrincipalId': obj.principalId,
    'Type': obj.type,
    'Accepted': obj.accepted,
    'ShareTagOptions': obj.shareTagOptions,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogProductViewSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogProductViewSummary(obj: ServiceCatalogProductViewSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'ProductId': obj.productId,
    'Name': obj.name,
    'Owner': obj.owner,
    'ShortDescription': obj.shortDescription,
    'Type': obj.type,
    'Distributor': obj.distributor,
    'HasDefaultPath': obj.hasDefaultPath,
    'SupportEmail': obj.supportEmail,
    'SupportDescription': obj.supportDescription,
    'SupportUrl': obj.supportUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogProvisioningArtifact' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogProvisioningArtifact(obj: ServiceCatalogProvisioningArtifact | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Name': obj.name,
    'Description': obj.description,
    'CreatedTime': obj.createdTime,
    'Guidance': obj.guidance,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogLaunchPath' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogLaunchPath(obj: ServiceCatalogLaunchPath | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogProvisioningArtifactSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogProvisioningArtifactSummary(obj: ServiceCatalogProvisioningArtifactSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Name': obj.name,
    'Description': obj.description,
    'CreatedTime': obj.createdTime,
    'ProvisioningArtifactMetadata': ((obj.provisioningArtifactMetadata) === undefined) ? undefined : (Object.entries(obj.provisioningArtifactMetadata).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogProvisionedProductDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogProvisionedProductDetail(obj: ServiceCatalogProvisionedProductDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Arn': obj.arn,
    'Type': obj.type,
    'Id': obj.id,
    'Status': obj.status,
    'StatusMessage': obj.statusMessage,
    'CreatedTime': obj.createdTime,
    'IdempotencyToken': obj.idempotencyToken,
    'LastRecordId': obj.lastRecordId,
    'LastProvisioningRecordId': obj.lastProvisioningRecordId,
    'LastSuccessfulProvisioningRecordId': obj.lastSuccessfulProvisioningRecordId,
    'ProductId': obj.productId,
    'ProvisioningArtifactId': obj.provisioningArtifactId,
    'LaunchRoleArn': obj.launchRoleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogCloudWatchDashboard' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogCloudWatchDashboard(obj: ServiceCatalogCloudWatchDashboard | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogProvisionedProductPlanDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogProvisionedProductPlanDetails(obj: ServiceCatalogProvisionedProductPlanDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreatedTime': obj.createdTime,
    'PathId': obj.pathId,
    'ProductId': obj.productId,
    'PlanName': obj.planName,
    'PlanId': obj.planId,
    'ProvisionProductId': obj.provisionProductId,
    'ProvisionProductName': obj.provisionProductName,
    'PlanType': obj.planType,
    'ProvisioningArtifactId': obj.provisioningArtifactId,
    'Status': obj.status,
    'UpdatedTime': obj.updatedTime,
    'NotificationArns': obj.notificationArns?.map(y => y),
    'ProvisioningParameters': obj.provisioningParameters?.map(y => toJson_ServiceCatalogUpdateProvisioningParameter(y)),
    'Tags': obj.tags?.map(y => toJson_ServiceCatalogTag(y)),
    'StatusMessage': obj.statusMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogResourceChange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogResourceChange(obj: ServiceCatalogResourceChange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Action': obj.action,
    'LogicalResourceId': obj.logicalResourceId,
    'PhysicalResourceId': obj.physicalResourceId,
    'ResourceType': obj.resourceType,
    'Replacement': obj.replacement,
    'Scope': obj.scope?.map(y => y),
    'Details': obj.details?.map(y => toJson_ServiceCatalogResourceChangeDetail(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogProvisioningArtifactParameter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogProvisioningArtifactParameter(obj: ServiceCatalogProvisioningArtifactParameter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ParameterKey': obj.parameterKey,
    'DefaultValue': obj.defaultValue,
    'ParameterType': obj.parameterType,
    'IsNoEcho': obj.isNoEcho,
    'Description': obj.description,
    'ParameterConstraints': toJson_ServiceCatalogParameterConstraints(obj.parameterConstraints),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogConstraintSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogConstraintSummary(obj: ServiceCatalogConstraintSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogUsageInstruction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogUsageInstruction(obj: ServiceCatalogUsageInstruction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogTagOptionSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogTagOptionSummary(obj: ServiceCatalogTagOptionSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogProvisioningArtifactPreferences' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogProvisioningArtifactPreferences(obj: ServiceCatalogProvisioningArtifactPreferences | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackSetAccounts': obj.stackSetAccounts?.map(y => y),
    'StackSetRegions': obj.stackSetRegions?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogProvisioningArtifactOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogProvisioningArtifactOutput(obj: ServiceCatalogProvisioningArtifactOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogRecordDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogRecordDetail(obj: ServiceCatalogRecordDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RecordId': obj.recordId,
    'ProvisionedProductName': obj.provisionedProductName,
    'Status': obj.status,
    'CreatedTime': obj.createdTime,
    'UpdatedTime': obj.updatedTime,
    'ProvisionedProductType': obj.provisionedProductType,
    'RecordType': obj.recordType,
    'ProvisionedProductId': obj.provisionedProductId,
    'ProductId': obj.productId,
    'ProvisioningArtifactId': obj.provisioningArtifactId,
    'PathId': obj.pathId,
    'RecordErrors': obj.recordErrors?.map(y => toJson_ServiceCatalogRecordError(y)),
    'RecordTags': obj.recordTags?.map(y => toJson_ServiceCatalogRecordTag(y)),
    'LaunchRoleArn': obj.launchRoleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogRecordOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogRecordOutput(obj: ServiceCatalogRecordOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OutputKey': obj.outputKey,
    'OutputValue': obj.outputValue,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogExecutionParameter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogExecutionParameter(obj: ServiceCatalogExecutionParameter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Type': obj.type,
    'DefaultValues': obj.defaultValues?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogLaunchPathSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogLaunchPathSummary(obj: ServiceCatalogLaunchPathSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'ConstraintSummaries': obj.constraintSummaries?.map(y => toJson_ServiceCatalogConstraintSummary(y)),
    'Tags': obj.tags?.map(y => toJson_ServiceCatalogTag(y)),
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogPrincipal' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogPrincipal(obj: ServiceCatalogPrincipal | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PrincipalARN': obj.principalArn,
    'PrincipalType': obj.principalType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogAccessLevelFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogAccessLevelFilter(obj: ServiceCatalogAccessLevelFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogProvisionedProductPlanSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogProvisionedProductPlanSummary(obj: ServiceCatalogProvisionedProductPlanSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PlanName': obj.planName,
    'PlanId': obj.planId,
    'ProvisionProductId': obj.provisionProductId,
    'ProvisionProductName': obj.provisionProductName,
    'PlanType': obj.planType,
    'ProvisioningArtifactId': obj.provisioningArtifactId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogProvisioningArtifactView' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogProvisioningArtifactView(obj: ServiceCatalogProvisioningArtifactView | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProductViewSummary': toJson_ServiceCatalogProductViewSummary(obj.productViewSummary),
    'ProvisioningArtifact': toJson_ServiceCatalogProvisioningArtifact(obj.provisioningArtifact),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogListRecordHistorySearchFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogListRecordHistorySearchFilter(obj: ServiceCatalogListRecordHistorySearchFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogResourceDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogResourceDetail(obj: ServiceCatalogResourceDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'ARN': obj.arn,
    'Name': obj.name,
    'Description': obj.description,
    'CreatedTime': obj.createdTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogServiceActionSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogServiceActionSummary(obj: ServiceCatalogServiceActionSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Name': obj.name,
    'Description': obj.description,
    'DefinitionType': obj.definitionType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogStackInstance' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogStackInstance(obj: ServiceCatalogStackInstance | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Account': obj.account,
    'Region': obj.region,
    'StackInstanceStatus': obj.stackInstanceStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogListTagOptionsFilters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogListTagOptionsFilters(obj: ServiceCatalogListTagOptionsFilters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
    'Active': obj.active,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogProvisioningParameter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogProvisioningParameter(obj: ServiceCatalogProvisioningParameter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogProvisioningPreferences' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogProvisioningPreferences(obj: ServiceCatalogProvisioningPreferences | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackSetAccounts': obj.stackSetAccounts?.map(y => y),
    'StackSetRegions': obj.stackSetRegions?.map(y => y),
    'StackSetFailureToleranceCount': obj.stackSetFailureToleranceCount,
    'StackSetFailureTolerancePercentage': obj.stackSetFailureTolerancePercentage,
    'StackSetMaxConcurrencyCount': obj.stackSetMaxConcurrencyCount,
    'StackSetMaxConcurrencyPercentage': obj.stackSetMaxConcurrencyPercentage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogProductViewAggregationValue' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogProductViewAggregationValue(obj: ServiceCatalogProductViewAggregationValue | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Value': obj.value,
    'ApproximateCount': obj.approximateCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogProvisionedProductAttribute' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogProvisionedProductAttribute(obj: ServiceCatalogProvisionedProductAttribute | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Arn': obj.arn,
    'Type': obj.type,
    'Id': obj.id,
    'Status': obj.status,
    'StatusMessage': obj.statusMessage,
    'CreatedTime': obj.createdTime,
    'IdempotencyToken': obj.idempotencyToken,
    'LastRecordId': obj.lastRecordId,
    'LastProvisioningRecordId': obj.lastProvisioningRecordId,
    'LastSuccessfulProvisioningRecordId': obj.lastSuccessfulProvisioningRecordId,
    'Tags': obj.tags?.map(y => toJson_ServiceCatalogTag(y)),
    'PhysicalId': obj.physicalId,
    'ProductId': obj.productId,
    'ProductName': obj.productName,
    'ProvisioningArtifactId': obj.provisioningArtifactId,
    'ProvisioningArtifactName': obj.provisioningArtifactName,
    'UserArn': obj.userArn,
    'UserArnSession': obj.userArnSession,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogUpdateProvisioningPreferences' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogUpdateProvisioningPreferences(obj: ServiceCatalogUpdateProvisioningPreferences | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackSetAccounts': obj.stackSetAccounts?.map(y => y),
    'StackSetRegions': obj.stackSetRegions?.map(y => y),
    'StackSetFailureToleranceCount': obj.stackSetFailureToleranceCount,
    'StackSetFailureTolerancePercentage': obj.stackSetFailureTolerancePercentage,
    'StackSetMaxConcurrencyCount': obj.stackSetMaxConcurrencyCount,
    'StackSetMaxConcurrencyPercentage': obj.stackSetMaxConcurrencyPercentage,
    'StackSetOperationType': obj.stackSetOperationType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogShareError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogShareError(obj: ServiceCatalogShareError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Accounts': obj.accounts?.map(y => y),
    'Message': obj.message,
    'Error': obj.error,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogResourceChangeDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogResourceChangeDetail(obj: ServiceCatalogResourceChangeDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Target': toJson_ServiceCatalogResourceTargetDefinition(obj.target),
    'Evaluation': obj.evaluation,
    'CausingEntity': obj.causingEntity,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ServiceCatalogParameterConstraints
 */
export interface ServiceCatalogParameterConstraints {
  /**
   * @schema ServiceCatalogParameterConstraints#AllowedValues
   */
  readonly allowedValues?: string[];

  /**
   * @schema ServiceCatalogParameterConstraints#AllowedPattern
   */
  readonly allowedPattern?: string;

  /**
   * @schema ServiceCatalogParameterConstraints#ConstraintDescription
   */
  readonly constraintDescription?: string;

  /**
   * @schema ServiceCatalogParameterConstraints#MaxLength
   */
  readonly maxLength?: string;

  /**
   * @schema ServiceCatalogParameterConstraints#MinLength
   */
  readonly minLength?: string;

  /**
   * @schema ServiceCatalogParameterConstraints#MaxValue
   */
  readonly maxValue?: string;

  /**
   * @schema ServiceCatalogParameterConstraints#MinValue
   */
  readonly minValue?: string;

}

/**
 * Converts an object of type 'ServiceCatalogParameterConstraints' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogParameterConstraints(obj: ServiceCatalogParameterConstraints | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AllowedValues': obj.allowedValues?.map(y => y),
    'AllowedPattern': obj.allowedPattern,
    'ConstraintDescription': obj.constraintDescription,
    'MaxLength': obj.maxLength,
    'MinLength': obj.minLength,
    'MaxValue': obj.maxValue,
    'MinValue': obj.minValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogRecordError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogRecordError(obj: ServiceCatalogRecordError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Code': obj.code,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ServiceCatalogRecordTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogRecordTag(obj: ServiceCatalogRecordTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

/**
 * Converts an object of type 'ServiceCatalogResourceTargetDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ServiceCatalogResourceTargetDefinition(obj: ServiceCatalogResourceTargetDefinition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Attribute': obj.attribute,
    'Name': obj.name,
    'RequiresRecreation': obj.requiresRecreation,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
