import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ServiceCatalogClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public acceptPortfolioShare(input: shapes.ServiceCatalogAcceptPortfolioShareInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptPortfolioShare',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.AcceptPortfolioShare'),
        parameters: {
          AcceptLanguage: input.acceptLanguage,
          PortfolioId: input.portfolioId,
          PortfolioShareType: input.portfolioShareType,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AcceptPortfolioShare', props);
  }

  public associateBudgetWithResource(input: shapes.ServiceCatalogAssociateBudgetWithResourceInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateBudgetWithResource',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.AssociateBudgetWithResource'),
        parameters: {
          BudgetName: input.budgetName,
          ResourceId: input.resourceId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssociateBudgetWithResource', props);
  }

  public associatePrincipalWithPortfolio(input: shapes.ServiceCatalogAssociatePrincipalWithPortfolioInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associatePrincipalWithPortfolio',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.AssociatePrincipalWithPortfolio'),
        parameters: {
          AcceptLanguage: input.acceptLanguage,
          PortfolioId: input.portfolioId,
          PrincipalARN: input.principalArn,
          PrincipalType: input.principalType,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssociatePrincipalWithPortfolio', props);
  }

  public associateProductWithPortfolio(input: shapes.ServiceCatalogAssociateProductWithPortfolioInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateProductWithPortfolio',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.AssociateProductWithPortfolio'),
        parameters: {
          AcceptLanguage: input.acceptLanguage,
          ProductId: input.productId,
          PortfolioId: input.portfolioId,
          SourcePortfolioId: input.sourcePortfolioId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssociateProductWithPortfolio', props);
  }

  public associateServiceActionWithProvisioningArtifact(input: shapes.ServiceCatalogAssociateServiceActionWithProvisioningArtifactInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateServiceActionWithProvisioningArtifact',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.AssociateServiceActionWithProvisioningArtifact'),
        parameters: {
          ProductId: input.productId,
          ProvisioningArtifactId: input.provisioningArtifactId,
          ServiceActionId: input.serviceActionId,
          AcceptLanguage: input.acceptLanguage,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssociateServiceActionWithProvisioningArtifact', props);
  }

  public associateTagOptionWithResource(input: shapes.ServiceCatalogAssociateTagOptionWithResourceInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateTagOptionWithResource',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.AssociateTagOptionWithResource'),
        parameters: {
          ResourceId: input.resourceId,
          TagOptionId: input.tagOptionId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssociateTagOptionWithResource', props);
  }

  public batchAssociateServiceActionWithProvisioningArtifact(input: shapes.ServiceCatalogBatchAssociateServiceActionWithProvisioningArtifactInput): ServiceCatalogResponsesBatchAssociateServiceActionWithProvisioningArtifact {
    return new ServiceCatalogResponsesBatchAssociateServiceActionWithProvisioningArtifact(this, this.__resources, input);
  }

  public batchDisassociateServiceActionFromProvisioningArtifact(input: shapes.ServiceCatalogBatchDisassociateServiceActionFromProvisioningArtifactInput): ServiceCatalogResponsesBatchDisassociateServiceActionFromProvisioningArtifact {
    return new ServiceCatalogResponsesBatchDisassociateServiceActionFromProvisioningArtifact(this, this.__resources, input);
  }

  public copyProduct(input: shapes.ServiceCatalogCopyProductInput): ServiceCatalogResponsesCopyProduct {
    return new ServiceCatalogResponsesCopyProduct(this, this.__resources, input);
  }

  public createConstraint(input: shapes.ServiceCatalogCreateConstraintInput): ServiceCatalogResponsesCreateConstraint {
    return new ServiceCatalogResponsesCreateConstraint(this, this.__resources, input);
  }

  public createPortfolio(input: shapes.ServiceCatalogCreatePortfolioInput): ServiceCatalogResponsesCreatePortfolio {
    return new ServiceCatalogResponsesCreatePortfolio(this, this.__resources, input);
  }

  public createPortfolioShare(input: shapes.ServiceCatalogCreatePortfolioShareInput): ServiceCatalogResponsesCreatePortfolioShare {
    return new ServiceCatalogResponsesCreatePortfolioShare(this, this.__resources, input);
  }

  public createProduct(input: shapes.ServiceCatalogCreateProductInput): ServiceCatalogResponsesCreateProduct {
    return new ServiceCatalogResponsesCreateProduct(this, this.__resources, input);
  }

  public createProvisionedProductPlan(input: shapes.ServiceCatalogCreateProvisionedProductPlanInput): ServiceCatalogResponsesCreateProvisionedProductPlan {
    return new ServiceCatalogResponsesCreateProvisionedProductPlan(this, this.__resources, input);
  }

  public createProvisioningArtifact(input: shapes.ServiceCatalogCreateProvisioningArtifactInput): ServiceCatalogResponsesCreateProvisioningArtifact {
    return new ServiceCatalogResponsesCreateProvisioningArtifact(this, this.__resources, input);
  }

  public createServiceAction(input: shapes.ServiceCatalogCreateServiceActionInput): ServiceCatalogResponsesCreateServiceAction {
    return new ServiceCatalogResponsesCreateServiceAction(this, this.__resources, input);
  }

  public createTagOption(input: shapes.ServiceCatalogCreateTagOptionInput): ServiceCatalogResponsesCreateTagOption {
    return new ServiceCatalogResponsesCreateTagOption(this, this.__resources, input);
  }

  public deleteConstraint(input: shapes.ServiceCatalogDeleteConstraintInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConstraint',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DeleteConstraint'),
        parameters: {
          AcceptLanguage: input.acceptLanguage,
          Id: input.id,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteConstraint', props);
  }

  public deletePortfolio(input: shapes.ServiceCatalogDeletePortfolioInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePortfolio',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DeletePortfolio'),
        parameters: {
          AcceptLanguage: input.acceptLanguage,
          Id: input.id,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeletePortfolio', props);
  }

  public deletePortfolioShare(input: shapes.ServiceCatalogDeletePortfolioShareInput): ServiceCatalogResponsesDeletePortfolioShare {
    return new ServiceCatalogResponsesDeletePortfolioShare(this, this.__resources, input);
  }

  public deleteProduct(input: shapes.ServiceCatalogDeleteProductInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DeleteProduct'),
        parameters: {
          AcceptLanguage: input.acceptLanguage,
          Id: input.id,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteProduct', props);
  }

  public deleteProvisionedProductPlan(input: shapes.ServiceCatalogDeleteProvisionedProductPlanInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteProvisionedProductPlan',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DeleteProvisionedProductPlan'),
        parameters: {
          AcceptLanguage: input.acceptLanguage,
          PlanId: input.planId,
          IgnoreErrors: input.ignoreErrors,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteProvisionedProductPlan', props);
  }

  public deleteProvisioningArtifact(input: shapes.ServiceCatalogDeleteProvisioningArtifactInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteProvisioningArtifact',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DeleteProvisioningArtifact'),
        parameters: {
          AcceptLanguage: input.acceptLanguage,
          ProductId: input.productId,
          ProvisioningArtifactId: input.provisioningArtifactId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteProvisioningArtifact', props);
  }

  public deleteServiceAction(input: shapes.ServiceCatalogDeleteServiceActionInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteServiceAction',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DeleteServiceAction'),
        parameters: {
          Id: input.id,
          AcceptLanguage: input.acceptLanguage,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteServiceAction', props);
  }

  public deleteTagOption(input: shapes.ServiceCatalogDeleteTagOptionInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTagOption',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DeleteTagOption'),
        parameters: {
          Id: input.id,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteTagOption', props);
  }

  public describeConstraint(input: shapes.ServiceCatalogDescribeConstraintInput): ServiceCatalogResponsesDescribeConstraint {
    return new ServiceCatalogResponsesDescribeConstraint(this, this.__resources, input);
  }

  public describeCopyProductStatus(input: shapes.ServiceCatalogDescribeCopyProductStatusInput): ServiceCatalogResponsesDescribeCopyProductStatus {
    return new ServiceCatalogResponsesDescribeCopyProductStatus(this, this.__resources, input);
  }

  public describePortfolio(input: shapes.ServiceCatalogDescribePortfolioInput): ServiceCatalogResponsesDescribePortfolio {
    return new ServiceCatalogResponsesDescribePortfolio(this, this.__resources, input);
  }

  public describePortfolioShareStatus(input: shapes.ServiceCatalogDescribePortfolioShareStatusInput): ServiceCatalogResponsesDescribePortfolioShareStatus {
    return new ServiceCatalogResponsesDescribePortfolioShareStatus(this, this.__resources, input);
  }

  public describePortfolioShares(input: shapes.ServiceCatalogDescribePortfolioSharesInput): ServiceCatalogResponsesDescribePortfolioShares {
    return new ServiceCatalogResponsesDescribePortfolioShares(this, this.__resources, input);
  }

  public describeProduct(input: shapes.ServiceCatalogDescribeProductInput): ServiceCatalogResponsesDescribeProduct {
    return new ServiceCatalogResponsesDescribeProduct(this, this.__resources, input);
  }

  public describeProductAsAdmin(input: shapes.ServiceCatalogDescribeProductAsAdminInput): ServiceCatalogResponsesDescribeProductAsAdmin {
    return new ServiceCatalogResponsesDescribeProductAsAdmin(this, this.__resources, input);
  }

  public describeProductView(input: shapes.ServiceCatalogDescribeProductViewInput): ServiceCatalogResponsesDescribeProductView {
    return new ServiceCatalogResponsesDescribeProductView(this, this.__resources, input);
  }

  public describeProvisionedProduct(input: shapes.ServiceCatalogDescribeProvisionedProductInput): ServiceCatalogResponsesDescribeProvisionedProduct {
    return new ServiceCatalogResponsesDescribeProvisionedProduct(this, this.__resources, input);
  }

  public describeProvisionedProductPlan(input: shapes.ServiceCatalogDescribeProvisionedProductPlanInput): ServiceCatalogResponsesDescribeProvisionedProductPlan {
    return new ServiceCatalogResponsesDescribeProvisionedProductPlan(this, this.__resources, input);
  }

  public describeProvisioningArtifact(input: shapes.ServiceCatalogDescribeProvisioningArtifactInput): ServiceCatalogResponsesDescribeProvisioningArtifact {
    return new ServiceCatalogResponsesDescribeProvisioningArtifact(this, this.__resources, input);
  }

  public describeProvisioningParameters(input: shapes.ServiceCatalogDescribeProvisioningParametersInput): ServiceCatalogResponsesDescribeProvisioningParameters {
    return new ServiceCatalogResponsesDescribeProvisioningParameters(this, this.__resources, input);
  }

  public describeRecord(input: shapes.ServiceCatalogDescribeRecordInput): ServiceCatalogResponsesDescribeRecord {
    return new ServiceCatalogResponsesDescribeRecord(this, this.__resources, input);
  }

  public describeServiceAction(input: shapes.ServiceCatalogDescribeServiceActionInput): ServiceCatalogResponsesDescribeServiceAction {
    return new ServiceCatalogResponsesDescribeServiceAction(this, this.__resources, input);
  }

  public describeServiceActionExecutionParameters(input: shapes.ServiceCatalogDescribeServiceActionExecutionParametersInput): ServiceCatalogResponsesDescribeServiceActionExecutionParameters {
    return new ServiceCatalogResponsesDescribeServiceActionExecutionParameters(this, this.__resources, input);
  }

  public describeTagOption(input: shapes.ServiceCatalogDescribeTagOptionInput): ServiceCatalogResponsesDescribeTagOption {
    return new ServiceCatalogResponsesDescribeTagOption(this, this.__resources, input);
  }

  public disableAwsOrganizationsAccess(): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disableAwsOrganizationsAccess',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DisableAWSOrganizationsAccess'),
        parameters: {
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisableAWSOrganizationsAccess', props);
  }

  public disassociateBudgetFromResource(input: shapes.ServiceCatalogDisassociateBudgetFromResourceInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateBudgetFromResource',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DisassociateBudgetFromResource'),
        parameters: {
          BudgetName: input.budgetName,
          ResourceId: input.resourceId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateBudgetFromResource', props);
  }

  public disassociatePrincipalFromPortfolio(input: shapes.ServiceCatalogDisassociatePrincipalFromPortfolioInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociatePrincipalFromPortfolio',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DisassociatePrincipalFromPortfolio'),
        parameters: {
          AcceptLanguage: input.acceptLanguage,
          PortfolioId: input.portfolioId,
          PrincipalARN: input.principalArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociatePrincipalFromPortfolio', props);
  }

  public disassociateProductFromPortfolio(input: shapes.ServiceCatalogDisassociateProductFromPortfolioInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateProductFromPortfolio',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DisassociateProductFromPortfolio'),
        parameters: {
          AcceptLanguage: input.acceptLanguage,
          ProductId: input.productId,
          PortfolioId: input.portfolioId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateProductFromPortfolio', props);
  }

  public disassociateServiceActionFromProvisioningArtifact(input: shapes.ServiceCatalogDisassociateServiceActionFromProvisioningArtifactInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateServiceActionFromProvisioningArtifact',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DisassociateServiceActionFromProvisioningArtifact'),
        parameters: {
          ProductId: input.productId,
          ProvisioningArtifactId: input.provisioningArtifactId,
          ServiceActionId: input.serviceActionId,
          AcceptLanguage: input.acceptLanguage,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateServiceActionFromProvisioningArtifact', props);
  }

  public disassociateTagOptionFromResource(input: shapes.ServiceCatalogDisassociateTagOptionFromResourceInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateTagOptionFromResource',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DisassociateTagOptionFromResource'),
        parameters: {
          ResourceId: input.resourceId,
          TagOptionId: input.tagOptionId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateTagOptionFromResource', props);
  }

  public enableAwsOrganizationsAccess(): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'enableAwsOrganizationsAccess',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.EnableAWSOrganizationsAccess'),
        parameters: {
        },
      },
    };
    new cr.AwsCustomResource(this, 'EnableAWSOrganizationsAccess', props);
  }

  public executeProvisionedProductPlan(input: shapes.ServiceCatalogExecuteProvisionedProductPlanInput): ServiceCatalogResponsesExecuteProvisionedProductPlan {
    return new ServiceCatalogResponsesExecuteProvisionedProductPlan(this, this.__resources, input);
  }

  public executeProvisionedProductServiceAction(input: shapes.ServiceCatalogExecuteProvisionedProductServiceActionInput): ServiceCatalogResponsesExecuteProvisionedProductServiceAction {
    return new ServiceCatalogResponsesExecuteProvisionedProductServiceAction(this, this.__resources, input);
  }

  public fetchAwsOrganizationsAccessStatus(): ServiceCatalogResponsesFetchAwsOrganizationsAccessStatus {
    return new ServiceCatalogResponsesFetchAwsOrganizationsAccessStatus(this, this.__resources);
  }

  public fetchProvisionedProductOutputs(input: shapes.ServiceCatalogGetProvisionedProductOutputsInput): ServiceCatalogResponsesFetchProvisionedProductOutputs {
    return new ServiceCatalogResponsesFetchProvisionedProductOutputs(this, this.__resources, input);
  }

  public importAsProvisionedProduct(input: shapes.ServiceCatalogImportAsProvisionedProductInput): ServiceCatalogResponsesImportAsProvisionedProduct {
    return new ServiceCatalogResponsesImportAsProvisionedProduct(this, this.__resources, input);
  }

  public listAcceptedPortfolioShares(input: shapes.ServiceCatalogListAcceptedPortfolioSharesInput): ServiceCatalogResponsesListAcceptedPortfolioShares {
    return new ServiceCatalogResponsesListAcceptedPortfolioShares(this, this.__resources, input);
  }

  public listBudgetsForResource(input: shapes.ServiceCatalogListBudgetsForResourceInput): ServiceCatalogResponsesListBudgetsForResource {
    return new ServiceCatalogResponsesListBudgetsForResource(this, this.__resources, input);
  }

  public listConstraintsForPortfolio(input: shapes.ServiceCatalogListConstraintsForPortfolioInput): ServiceCatalogResponsesListConstraintsForPortfolio {
    return new ServiceCatalogResponsesListConstraintsForPortfolio(this, this.__resources, input);
  }

  public listLaunchPaths(input: shapes.ServiceCatalogListLaunchPathsInput): ServiceCatalogResponsesListLaunchPaths {
    return new ServiceCatalogResponsesListLaunchPaths(this, this.__resources, input);
  }

  public listOrganizationPortfolioAccess(input: shapes.ServiceCatalogListOrganizationPortfolioAccessInput): ServiceCatalogResponsesListOrganizationPortfolioAccess {
    return new ServiceCatalogResponsesListOrganizationPortfolioAccess(this, this.__resources, input);
  }

  public listPortfolioAccess(input: shapes.ServiceCatalogListPortfolioAccessInput): ServiceCatalogResponsesListPortfolioAccess {
    return new ServiceCatalogResponsesListPortfolioAccess(this, this.__resources, input);
  }

  public listPortfolios(input: shapes.ServiceCatalogListPortfoliosInput): ServiceCatalogResponsesListPortfolios {
    return new ServiceCatalogResponsesListPortfolios(this, this.__resources, input);
  }

  public listPortfoliosForProduct(input: shapes.ServiceCatalogListPortfoliosForProductInput): ServiceCatalogResponsesListPortfoliosForProduct {
    return new ServiceCatalogResponsesListPortfoliosForProduct(this, this.__resources, input);
  }

  public listPrincipalsForPortfolio(input: shapes.ServiceCatalogListPrincipalsForPortfolioInput): ServiceCatalogResponsesListPrincipalsForPortfolio {
    return new ServiceCatalogResponsesListPrincipalsForPortfolio(this, this.__resources, input);
  }

  public listProvisionedProductPlans(input: shapes.ServiceCatalogListProvisionedProductPlansInput): ServiceCatalogResponsesListProvisionedProductPlans {
    return new ServiceCatalogResponsesListProvisionedProductPlans(this, this.__resources, input);
  }

  public listProvisioningArtifacts(input: shapes.ServiceCatalogListProvisioningArtifactsInput): ServiceCatalogResponsesListProvisioningArtifacts {
    return new ServiceCatalogResponsesListProvisioningArtifacts(this, this.__resources, input);
  }

  public listProvisioningArtifactsForServiceAction(input: shapes.ServiceCatalogListProvisioningArtifactsForServiceActionInput): ServiceCatalogResponsesListProvisioningArtifactsForServiceAction {
    return new ServiceCatalogResponsesListProvisioningArtifactsForServiceAction(this, this.__resources, input);
  }

  public listRecordHistory(input: shapes.ServiceCatalogListRecordHistoryInput): ServiceCatalogResponsesListRecordHistory {
    return new ServiceCatalogResponsesListRecordHistory(this, this.__resources, input);
  }

  public listResourcesForTagOption(input: shapes.ServiceCatalogListResourcesForTagOptionInput): ServiceCatalogResponsesListResourcesForTagOption {
    return new ServiceCatalogResponsesListResourcesForTagOption(this, this.__resources, input);
  }

  public listServiceActions(input: shapes.ServiceCatalogListServiceActionsInput): ServiceCatalogResponsesListServiceActions {
    return new ServiceCatalogResponsesListServiceActions(this, this.__resources, input);
  }

  public listServiceActionsForProvisioningArtifact(input: shapes.ServiceCatalogListServiceActionsForProvisioningArtifactInput): ServiceCatalogResponsesListServiceActionsForProvisioningArtifact {
    return new ServiceCatalogResponsesListServiceActionsForProvisioningArtifact(this, this.__resources, input);
  }

  public listStackInstancesForProvisionedProduct(input: shapes.ServiceCatalogListStackInstancesForProvisionedProductInput): ServiceCatalogResponsesListStackInstancesForProvisionedProduct {
    return new ServiceCatalogResponsesListStackInstancesForProvisionedProduct(this, this.__resources, input);
  }

  public listTagOptions(input: shapes.ServiceCatalogListTagOptionsInput): ServiceCatalogResponsesListTagOptions {
    return new ServiceCatalogResponsesListTagOptions(this, this.__resources, input);
  }

  public provisionProduct(input: shapes.ServiceCatalogProvisionProductInput): ServiceCatalogResponsesProvisionProduct {
    return new ServiceCatalogResponsesProvisionProduct(this, this.__resources, input);
  }

  public rejectPortfolioShare(input: shapes.ServiceCatalogRejectPortfolioShareInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rejectPortfolioShare',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.RejectPortfolioShare'),
        parameters: {
          AcceptLanguage: input.acceptLanguage,
          PortfolioId: input.portfolioId,
          PortfolioShareType: input.portfolioShareType,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RejectPortfolioShare', props);
  }

  public scanProvisionedProducts(input: shapes.ServiceCatalogScanProvisionedProductsInput): ServiceCatalogResponsesScanProvisionedProducts {
    return new ServiceCatalogResponsesScanProvisionedProducts(this, this.__resources, input);
  }

  public searchProducts(input: shapes.ServiceCatalogSearchProductsInput): ServiceCatalogResponsesSearchProducts {
    return new ServiceCatalogResponsesSearchProducts(this, this.__resources, input);
  }

  public searchProductsAsAdmin(input: shapes.ServiceCatalogSearchProductsAsAdminInput): ServiceCatalogResponsesSearchProductsAsAdmin {
    return new ServiceCatalogResponsesSearchProductsAsAdmin(this, this.__resources, input);
  }

  public searchProvisionedProducts(input: shapes.ServiceCatalogSearchProvisionedProductsInput): ServiceCatalogResponsesSearchProvisionedProducts {
    return new ServiceCatalogResponsesSearchProvisionedProducts(this, this.__resources, input);
  }

  public terminateProvisionedProduct(input: shapes.ServiceCatalogTerminateProvisionedProductInput): ServiceCatalogResponsesTerminateProvisionedProduct {
    return new ServiceCatalogResponsesTerminateProvisionedProduct(this, this.__resources, input);
  }

  public updateConstraint(input: shapes.ServiceCatalogUpdateConstraintInput): ServiceCatalogResponsesUpdateConstraint {
    return new ServiceCatalogResponsesUpdateConstraint(this, this.__resources, input);
  }

  public updatePortfolio(input: shapes.ServiceCatalogUpdatePortfolioInput): ServiceCatalogResponsesUpdatePortfolio {
    return new ServiceCatalogResponsesUpdatePortfolio(this, this.__resources, input);
  }

  public updatePortfolioShare(input: shapes.ServiceCatalogUpdatePortfolioShareInput): ServiceCatalogResponsesUpdatePortfolioShare {
    return new ServiceCatalogResponsesUpdatePortfolioShare(this, this.__resources, input);
  }

  public updateProduct(input: shapes.ServiceCatalogUpdateProductInput): ServiceCatalogResponsesUpdateProduct {
    return new ServiceCatalogResponsesUpdateProduct(this, this.__resources, input);
  }

  public updateProvisionedProduct(input: shapes.ServiceCatalogUpdateProvisionedProductInput): ServiceCatalogResponsesUpdateProvisionedProduct {
    return new ServiceCatalogResponsesUpdateProvisionedProduct(this, this.__resources, input);
  }

  public updateProvisionedProductProperties(input: shapes.ServiceCatalogUpdateProvisionedProductPropertiesInput): ServiceCatalogResponsesUpdateProvisionedProductProperties {
    return new ServiceCatalogResponsesUpdateProvisionedProductProperties(this, this.__resources, input);
  }

  public updateProvisioningArtifact(input: shapes.ServiceCatalogUpdateProvisioningArtifactInput): ServiceCatalogResponsesUpdateProvisioningArtifact {
    return new ServiceCatalogResponsesUpdateProvisioningArtifact(this, this.__resources, input);
  }

  public updateServiceAction(input: shapes.ServiceCatalogUpdateServiceActionInput): ServiceCatalogResponsesUpdateServiceAction {
    return new ServiceCatalogResponsesUpdateServiceAction(this, this.__resources, input);
  }

  public updateTagOption(input: shapes.ServiceCatalogUpdateTagOptionInput): ServiceCatalogResponsesUpdateTagOption {
    return new ServiceCatalogResponsesUpdateTagOption(this, this.__resources, input);
  }

}

export class ServiceCatalogResponsesBatchAssociateServiceActionWithProvisioningArtifact {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogBatchAssociateServiceActionWithProvisioningArtifactInput) {
  }

  public get failedServiceActionAssociations(): shapes.ServiceCatalogFailedServiceActionAssociation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchAssociateServiceActionWithProvisioningArtifact',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.BatchAssociateServiceActionWithProvisioningArtifact.FailedServiceActionAssociations'),
        outputPath: 'FailedServiceActionAssociations',
        parameters: {
          ServiceActionAssociations: this.__input.serviceActionAssociations,
          AcceptLanguage: this.__input.acceptLanguage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchAssociateServiceActionWithProvisioningArtifact.FailedServiceActionAssociations', props);
    return resource.getResponseField('FailedServiceActionAssociations') as unknown as shapes.ServiceCatalogFailedServiceActionAssociation[];
  }

}

export class ServiceCatalogResponsesBatchDisassociateServiceActionFromProvisioningArtifact {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogBatchDisassociateServiceActionFromProvisioningArtifactInput) {
  }

  public get failedServiceActionAssociations(): shapes.ServiceCatalogFailedServiceActionAssociation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDisassociateServiceActionFromProvisioningArtifact',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.BatchDisassociateServiceActionFromProvisioningArtifact.FailedServiceActionAssociations'),
        outputPath: 'FailedServiceActionAssociations',
        parameters: {
          ServiceActionAssociations: this.__input.serviceActionAssociations,
          AcceptLanguage: this.__input.acceptLanguage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDisassociateServiceActionFromProvisioningArtifact.FailedServiceActionAssociations', props);
    return resource.getResponseField('FailedServiceActionAssociations') as unknown as shapes.ServiceCatalogFailedServiceActionAssociation[];
  }

}

export class ServiceCatalogResponsesCopyProduct {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogCopyProductInput) {
  }

  public get copyProductToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CopyProduct.CopyProductToken'),
        outputPath: 'CopyProductToken',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          SourceProductArn: this.__input.sourceProductArn,
          TargetProductId: this.__input.targetProductId,
          TargetProductName: this.__input.targetProductName,
          SourceProvisioningArtifactIdentifiers: this.__input.sourceProvisioningArtifactIdentifiers,
          CopyOptions: this.__input.copyOptions,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyProduct.CopyProductToken', props);
    return resource.getResponseField('CopyProductToken') as unknown as string;
  }

}

export class ServiceCatalogResponsesCreateConstraint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogCreateConstraintInput) {
  }

  public get constraintDetail(): ServiceCatalogResponsesCreateConstraintConstraintDetail {
    return new ServiceCatalogResponsesCreateConstraintConstraintDetail(this.__scope, this.__resources, this.__input);
  }

  public get constraintParameters(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConstraint',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateConstraint.ConstraintParameters'),
        outputPath: 'ConstraintParameters',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PortfolioId: this.__input.portfolioId,
          ProductId: this.__input.productId,
          Parameters: this.__input.parameters,
          Type: this.__input.type,
          Description: this.__input.description,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConstraint.ConstraintParameters', props);
    return resource.getResponseField('ConstraintParameters') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConstraint',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateConstraint.Status'),
        outputPath: 'Status',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PortfolioId: this.__input.portfolioId,
          ProductId: this.__input.productId,
          Parameters: this.__input.parameters,
          Type: this.__input.type,
          Description: this.__input.description,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConstraint.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class ServiceCatalogResponsesCreateConstraintConstraintDetail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogCreateConstraintInput) {
  }

  public get constraintId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConstraint',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateConstraint.ConstraintDetail.ConstraintId'),
        outputPath: 'ConstraintDetail.ConstraintId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PortfolioId: this.__input.portfolioId,
          ProductId: this.__input.productId,
          Parameters: this.__input.parameters,
          Type: this.__input.type,
          Description: this.__input.description,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConstraint.ConstraintDetail.ConstraintId', props);
    return resource.getResponseField('ConstraintDetail.ConstraintId') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConstraint',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateConstraint.ConstraintDetail.Type'),
        outputPath: 'ConstraintDetail.Type',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PortfolioId: this.__input.portfolioId,
          ProductId: this.__input.productId,
          Parameters: this.__input.parameters,
          Type: this.__input.type,
          Description: this.__input.description,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConstraint.ConstraintDetail.Type', props);
    return resource.getResponseField('ConstraintDetail.Type') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConstraint',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateConstraint.ConstraintDetail.Description'),
        outputPath: 'ConstraintDetail.Description',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PortfolioId: this.__input.portfolioId,
          ProductId: this.__input.productId,
          Parameters: this.__input.parameters,
          Type: this.__input.type,
          Description: this.__input.description,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConstraint.ConstraintDetail.Description', props);
    return resource.getResponseField('ConstraintDetail.Description') as unknown as string;
  }

  public get owner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConstraint',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateConstraint.ConstraintDetail.Owner'),
        outputPath: 'ConstraintDetail.Owner',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PortfolioId: this.__input.portfolioId,
          ProductId: this.__input.productId,
          Parameters: this.__input.parameters,
          Type: this.__input.type,
          Description: this.__input.description,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConstraint.ConstraintDetail.Owner', props);
    return resource.getResponseField('ConstraintDetail.Owner') as unknown as string;
  }

  public get productId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConstraint',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateConstraint.ConstraintDetail.ProductId'),
        outputPath: 'ConstraintDetail.ProductId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PortfolioId: this.__input.portfolioId,
          ProductId: this.__input.productId,
          Parameters: this.__input.parameters,
          Type: this.__input.type,
          Description: this.__input.description,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConstraint.ConstraintDetail.ProductId', props);
    return resource.getResponseField('ConstraintDetail.ProductId') as unknown as string;
  }

  public get portfolioId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConstraint',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateConstraint.ConstraintDetail.PortfolioId'),
        outputPath: 'ConstraintDetail.PortfolioId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PortfolioId: this.__input.portfolioId,
          ProductId: this.__input.productId,
          Parameters: this.__input.parameters,
          Type: this.__input.type,
          Description: this.__input.description,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConstraint.ConstraintDetail.PortfolioId', props);
    return resource.getResponseField('ConstraintDetail.PortfolioId') as unknown as string;
  }

}

export class ServiceCatalogResponsesCreatePortfolio {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogCreatePortfolioInput) {
  }

  public get portfolioDetail(): ServiceCatalogResponsesCreatePortfolioPortfolioDetail {
    return new ServiceCatalogResponsesCreatePortfolioPortfolioDetail(this.__scope, this.__resources, this.__input);
  }

  public get tags(): shapes.ServiceCatalogTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPortfolio',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreatePortfolio.Tags'),
        outputPath: 'Tags',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          DisplayName: this.__input.displayName,
          Description: this.__input.description,
          ProviderName: this.__input.providerName,
          Tags: this.__input.tags,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePortfolio.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.ServiceCatalogTag[];
  }

}

export class ServiceCatalogResponsesCreatePortfolioPortfolioDetail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogCreatePortfolioInput) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPortfolio',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreatePortfolio.PortfolioDetail.Id'),
        outputPath: 'PortfolioDetail.Id',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          DisplayName: this.__input.displayName,
          Description: this.__input.description,
          ProviderName: this.__input.providerName,
          Tags: this.__input.tags,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePortfolio.PortfolioDetail.Id', props);
    return resource.getResponseField('PortfolioDetail.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPortfolio',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreatePortfolio.PortfolioDetail.ARN'),
        outputPath: 'PortfolioDetail.ARN',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          DisplayName: this.__input.displayName,
          Description: this.__input.description,
          ProviderName: this.__input.providerName,
          Tags: this.__input.tags,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePortfolio.PortfolioDetail.ARN', props);
    return resource.getResponseField('PortfolioDetail.ARN') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPortfolio',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreatePortfolio.PortfolioDetail.DisplayName'),
        outputPath: 'PortfolioDetail.DisplayName',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          DisplayName: this.__input.displayName,
          Description: this.__input.description,
          ProviderName: this.__input.providerName,
          Tags: this.__input.tags,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePortfolio.PortfolioDetail.DisplayName', props);
    return resource.getResponseField('PortfolioDetail.DisplayName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPortfolio',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreatePortfolio.PortfolioDetail.Description'),
        outputPath: 'PortfolioDetail.Description',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          DisplayName: this.__input.displayName,
          Description: this.__input.description,
          ProviderName: this.__input.providerName,
          Tags: this.__input.tags,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePortfolio.PortfolioDetail.Description', props);
    return resource.getResponseField('PortfolioDetail.Description') as unknown as string;
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPortfolio',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreatePortfolio.PortfolioDetail.CreatedTime'),
        outputPath: 'PortfolioDetail.CreatedTime',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          DisplayName: this.__input.displayName,
          Description: this.__input.description,
          ProviderName: this.__input.providerName,
          Tags: this.__input.tags,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePortfolio.PortfolioDetail.CreatedTime', props);
    return resource.getResponseField('PortfolioDetail.CreatedTime') as unknown as string;
  }

  public get providerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPortfolio',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreatePortfolio.PortfolioDetail.ProviderName'),
        outputPath: 'PortfolioDetail.ProviderName',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          DisplayName: this.__input.displayName,
          Description: this.__input.description,
          ProviderName: this.__input.providerName,
          Tags: this.__input.tags,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePortfolio.PortfolioDetail.ProviderName', props);
    return resource.getResponseField('PortfolioDetail.ProviderName') as unknown as string;
  }

}

export class ServiceCatalogResponsesCreatePortfolioShare {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogCreatePortfolioShareInput) {
  }

  public get portfolioShareToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPortfolioShare',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreatePortfolioShare.PortfolioShareToken'),
        outputPath: 'PortfolioShareToken',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PortfolioId: this.__input.portfolioId,
          AccountId: this.__input.accountId,
          OrganizationNode: {
            Type: this.__input.organizationNode?.type,
            Value: this.__input.organizationNode?.value,
          },
          ShareTagOptions: this.__input.shareTagOptions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePortfolioShare.PortfolioShareToken', props);
    return resource.getResponseField('PortfolioShareToken') as unknown as string;
  }

}

export class ServiceCatalogResponsesCreateProduct {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogCreateProductInput) {
  }

  public get productViewDetail(): ServiceCatalogResponsesCreateProductProductViewDetail {
    return new ServiceCatalogResponsesCreateProductProductViewDetail(this.__scope, this.__resources, this.__input);
  }

  public get provisioningArtifactDetail(): ServiceCatalogResponsesCreateProductProvisioningArtifactDetail {
    return new ServiceCatalogResponsesCreateProductProvisioningArtifactDetail(this.__scope, this.__resources, this.__input);
  }

  public get tags(): shapes.ServiceCatalogTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateProduct.Tags'),
        outputPath: 'Tags',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Name: this.__input.name,
          Owner: this.__input.owner,
          Description: this.__input.description,
          Distributor: this.__input.distributor,
          SupportDescription: this.__input.supportDescription,
          SupportEmail: this.__input.supportEmail,
          SupportUrl: this.__input.supportUrl,
          ProductType: this.__input.productType,
          Tags: this.__input.tags,
          ProvisioningArtifactParameters: {
            Name: this.__input.provisioningArtifactParameters.name,
            Description: this.__input.provisioningArtifactParameters.description,
            Info: this.__input.provisioningArtifactParameters.info,
            Type: this.__input.provisioningArtifactParameters.type,
            DisableTemplateValidation: this.__input.provisioningArtifactParameters.disableTemplateValidation,
          },
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProduct.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.ServiceCatalogTag[];
  }

}

export class ServiceCatalogResponsesCreateProductProductViewDetail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogCreateProductInput) {
  }

  public get productViewSummary(): ServiceCatalogResponsesCreateProductProductViewDetailProductViewSummary {
    return new ServiceCatalogResponsesCreateProductProductViewDetailProductViewSummary(this.__scope, this.__resources, this.__input);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateProduct.ProductViewDetail.Status'),
        outputPath: 'ProductViewDetail.Status',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Name: this.__input.name,
          Owner: this.__input.owner,
          Description: this.__input.description,
          Distributor: this.__input.distributor,
          SupportDescription: this.__input.supportDescription,
          SupportEmail: this.__input.supportEmail,
          SupportUrl: this.__input.supportUrl,
          ProductType: this.__input.productType,
          Tags: this.__input.tags,
          ProvisioningArtifactParameters: {
            Name: this.__input.provisioningArtifactParameters.name,
            Description: this.__input.provisioningArtifactParameters.description,
            Info: this.__input.provisioningArtifactParameters.info,
            Type: this.__input.provisioningArtifactParameters.type,
            DisableTemplateValidation: this.__input.provisioningArtifactParameters.disableTemplateValidation,
          },
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProduct.ProductViewDetail.Status', props);
    return resource.getResponseField('ProductViewDetail.Status') as unknown as string;
  }

  public get productArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateProduct.ProductViewDetail.ProductARN'),
        outputPath: 'ProductViewDetail.ProductARN',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Name: this.__input.name,
          Owner: this.__input.owner,
          Description: this.__input.description,
          Distributor: this.__input.distributor,
          SupportDescription: this.__input.supportDescription,
          SupportEmail: this.__input.supportEmail,
          SupportUrl: this.__input.supportUrl,
          ProductType: this.__input.productType,
          Tags: this.__input.tags,
          ProvisioningArtifactParameters: {
            Name: this.__input.provisioningArtifactParameters.name,
            Description: this.__input.provisioningArtifactParameters.description,
            Info: this.__input.provisioningArtifactParameters.info,
            Type: this.__input.provisioningArtifactParameters.type,
            DisableTemplateValidation: this.__input.provisioningArtifactParameters.disableTemplateValidation,
          },
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProduct.ProductViewDetail.ProductARN', props);
    return resource.getResponseField('ProductViewDetail.ProductARN') as unknown as string;
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateProduct.ProductViewDetail.CreatedTime'),
        outputPath: 'ProductViewDetail.CreatedTime',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Name: this.__input.name,
          Owner: this.__input.owner,
          Description: this.__input.description,
          Distributor: this.__input.distributor,
          SupportDescription: this.__input.supportDescription,
          SupportEmail: this.__input.supportEmail,
          SupportUrl: this.__input.supportUrl,
          ProductType: this.__input.productType,
          Tags: this.__input.tags,
          ProvisioningArtifactParameters: {
            Name: this.__input.provisioningArtifactParameters.name,
            Description: this.__input.provisioningArtifactParameters.description,
            Info: this.__input.provisioningArtifactParameters.info,
            Type: this.__input.provisioningArtifactParameters.type,
            DisableTemplateValidation: this.__input.provisioningArtifactParameters.disableTemplateValidation,
          },
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProduct.ProductViewDetail.CreatedTime', props);
    return resource.getResponseField('ProductViewDetail.CreatedTime') as unknown as string;
  }

}

export class ServiceCatalogResponsesCreateProductProductViewDetailProductViewSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogCreateProductInput) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateProduct.ProductViewDetail.ProductViewSummary.Id'),
        outputPath: 'ProductViewDetail.ProductViewSummary.Id',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Name: this.__input.name,
          Owner: this.__input.owner,
          Description: this.__input.description,
          Distributor: this.__input.distributor,
          SupportDescription: this.__input.supportDescription,
          SupportEmail: this.__input.supportEmail,
          SupportUrl: this.__input.supportUrl,
          ProductType: this.__input.productType,
          Tags: this.__input.tags,
          ProvisioningArtifactParameters: {
            Name: this.__input.provisioningArtifactParameters.name,
            Description: this.__input.provisioningArtifactParameters.description,
            Info: this.__input.provisioningArtifactParameters.info,
            Type: this.__input.provisioningArtifactParameters.type,
            DisableTemplateValidation: this.__input.provisioningArtifactParameters.disableTemplateValidation,
          },
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProduct.ProductViewDetail.ProductViewSummary.Id', props);
    return resource.getResponseField('ProductViewDetail.ProductViewSummary.Id') as unknown as string;
  }

  public get productId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateProduct.ProductViewDetail.ProductViewSummary.ProductId'),
        outputPath: 'ProductViewDetail.ProductViewSummary.ProductId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Name: this.__input.name,
          Owner: this.__input.owner,
          Description: this.__input.description,
          Distributor: this.__input.distributor,
          SupportDescription: this.__input.supportDescription,
          SupportEmail: this.__input.supportEmail,
          SupportUrl: this.__input.supportUrl,
          ProductType: this.__input.productType,
          Tags: this.__input.tags,
          ProvisioningArtifactParameters: {
            Name: this.__input.provisioningArtifactParameters.name,
            Description: this.__input.provisioningArtifactParameters.description,
            Info: this.__input.provisioningArtifactParameters.info,
            Type: this.__input.provisioningArtifactParameters.type,
            DisableTemplateValidation: this.__input.provisioningArtifactParameters.disableTemplateValidation,
          },
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProduct.ProductViewDetail.ProductViewSummary.ProductId', props);
    return resource.getResponseField('ProductViewDetail.ProductViewSummary.ProductId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateProduct.ProductViewDetail.ProductViewSummary.Name'),
        outputPath: 'ProductViewDetail.ProductViewSummary.Name',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Name: this.__input.name,
          Owner: this.__input.owner,
          Description: this.__input.description,
          Distributor: this.__input.distributor,
          SupportDescription: this.__input.supportDescription,
          SupportEmail: this.__input.supportEmail,
          SupportUrl: this.__input.supportUrl,
          ProductType: this.__input.productType,
          Tags: this.__input.tags,
          ProvisioningArtifactParameters: {
            Name: this.__input.provisioningArtifactParameters.name,
            Description: this.__input.provisioningArtifactParameters.description,
            Info: this.__input.provisioningArtifactParameters.info,
            Type: this.__input.provisioningArtifactParameters.type,
            DisableTemplateValidation: this.__input.provisioningArtifactParameters.disableTemplateValidation,
          },
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProduct.ProductViewDetail.ProductViewSummary.Name', props);
    return resource.getResponseField('ProductViewDetail.ProductViewSummary.Name') as unknown as string;
  }

  public get owner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateProduct.ProductViewDetail.ProductViewSummary.Owner'),
        outputPath: 'ProductViewDetail.ProductViewSummary.Owner',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Name: this.__input.name,
          Owner: this.__input.owner,
          Description: this.__input.description,
          Distributor: this.__input.distributor,
          SupportDescription: this.__input.supportDescription,
          SupportEmail: this.__input.supportEmail,
          SupportUrl: this.__input.supportUrl,
          ProductType: this.__input.productType,
          Tags: this.__input.tags,
          ProvisioningArtifactParameters: {
            Name: this.__input.provisioningArtifactParameters.name,
            Description: this.__input.provisioningArtifactParameters.description,
            Info: this.__input.provisioningArtifactParameters.info,
            Type: this.__input.provisioningArtifactParameters.type,
            DisableTemplateValidation: this.__input.provisioningArtifactParameters.disableTemplateValidation,
          },
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProduct.ProductViewDetail.ProductViewSummary.Owner', props);
    return resource.getResponseField('ProductViewDetail.ProductViewSummary.Owner') as unknown as string;
  }

  public get shortDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateProduct.ProductViewDetail.ProductViewSummary.ShortDescription'),
        outputPath: 'ProductViewDetail.ProductViewSummary.ShortDescription',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Name: this.__input.name,
          Owner: this.__input.owner,
          Description: this.__input.description,
          Distributor: this.__input.distributor,
          SupportDescription: this.__input.supportDescription,
          SupportEmail: this.__input.supportEmail,
          SupportUrl: this.__input.supportUrl,
          ProductType: this.__input.productType,
          Tags: this.__input.tags,
          ProvisioningArtifactParameters: {
            Name: this.__input.provisioningArtifactParameters.name,
            Description: this.__input.provisioningArtifactParameters.description,
            Info: this.__input.provisioningArtifactParameters.info,
            Type: this.__input.provisioningArtifactParameters.type,
            DisableTemplateValidation: this.__input.provisioningArtifactParameters.disableTemplateValidation,
          },
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProduct.ProductViewDetail.ProductViewSummary.ShortDescription', props);
    return resource.getResponseField('ProductViewDetail.ProductViewSummary.ShortDescription') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateProduct.ProductViewDetail.ProductViewSummary.Type'),
        outputPath: 'ProductViewDetail.ProductViewSummary.Type',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Name: this.__input.name,
          Owner: this.__input.owner,
          Description: this.__input.description,
          Distributor: this.__input.distributor,
          SupportDescription: this.__input.supportDescription,
          SupportEmail: this.__input.supportEmail,
          SupportUrl: this.__input.supportUrl,
          ProductType: this.__input.productType,
          Tags: this.__input.tags,
          ProvisioningArtifactParameters: {
            Name: this.__input.provisioningArtifactParameters.name,
            Description: this.__input.provisioningArtifactParameters.description,
            Info: this.__input.provisioningArtifactParameters.info,
            Type: this.__input.provisioningArtifactParameters.type,
            DisableTemplateValidation: this.__input.provisioningArtifactParameters.disableTemplateValidation,
          },
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProduct.ProductViewDetail.ProductViewSummary.Type', props);
    return resource.getResponseField('ProductViewDetail.ProductViewSummary.Type') as unknown as string;
  }

  public get distributor(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateProduct.ProductViewDetail.ProductViewSummary.Distributor'),
        outputPath: 'ProductViewDetail.ProductViewSummary.Distributor',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Name: this.__input.name,
          Owner: this.__input.owner,
          Description: this.__input.description,
          Distributor: this.__input.distributor,
          SupportDescription: this.__input.supportDescription,
          SupportEmail: this.__input.supportEmail,
          SupportUrl: this.__input.supportUrl,
          ProductType: this.__input.productType,
          Tags: this.__input.tags,
          ProvisioningArtifactParameters: {
            Name: this.__input.provisioningArtifactParameters.name,
            Description: this.__input.provisioningArtifactParameters.description,
            Info: this.__input.provisioningArtifactParameters.info,
            Type: this.__input.provisioningArtifactParameters.type,
            DisableTemplateValidation: this.__input.provisioningArtifactParameters.disableTemplateValidation,
          },
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProduct.ProductViewDetail.ProductViewSummary.Distributor', props);
    return resource.getResponseField('ProductViewDetail.ProductViewSummary.Distributor') as unknown as string;
  }

  public get hasDefaultPath(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateProduct.ProductViewDetail.ProductViewSummary.HasDefaultPath'),
        outputPath: 'ProductViewDetail.ProductViewSummary.HasDefaultPath',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Name: this.__input.name,
          Owner: this.__input.owner,
          Description: this.__input.description,
          Distributor: this.__input.distributor,
          SupportDescription: this.__input.supportDescription,
          SupportEmail: this.__input.supportEmail,
          SupportUrl: this.__input.supportUrl,
          ProductType: this.__input.productType,
          Tags: this.__input.tags,
          ProvisioningArtifactParameters: {
            Name: this.__input.provisioningArtifactParameters.name,
            Description: this.__input.provisioningArtifactParameters.description,
            Info: this.__input.provisioningArtifactParameters.info,
            Type: this.__input.provisioningArtifactParameters.type,
            DisableTemplateValidation: this.__input.provisioningArtifactParameters.disableTemplateValidation,
          },
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProduct.ProductViewDetail.ProductViewSummary.HasDefaultPath', props);
    return resource.getResponseField('ProductViewDetail.ProductViewSummary.HasDefaultPath') as unknown as boolean;
  }

  public get supportEmail(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateProduct.ProductViewDetail.ProductViewSummary.SupportEmail'),
        outputPath: 'ProductViewDetail.ProductViewSummary.SupportEmail',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Name: this.__input.name,
          Owner: this.__input.owner,
          Description: this.__input.description,
          Distributor: this.__input.distributor,
          SupportDescription: this.__input.supportDescription,
          SupportEmail: this.__input.supportEmail,
          SupportUrl: this.__input.supportUrl,
          ProductType: this.__input.productType,
          Tags: this.__input.tags,
          ProvisioningArtifactParameters: {
            Name: this.__input.provisioningArtifactParameters.name,
            Description: this.__input.provisioningArtifactParameters.description,
            Info: this.__input.provisioningArtifactParameters.info,
            Type: this.__input.provisioningArtifactParameters.type,
            DisableTemplateValidation: this.__input.provisioningArtifactParameters.disableTemplateValidation,
          },
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProduct.ProductViewDetail.ProductViewSummary.SupportEmail', props);
    return resource.getResponseField('ProductViewDetail.ProductViewSummary.SupportEmail') as unknown as string;
  }

  public get supportDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateProduct.ProductViewDetail.ProductViewSummary.SupportDescription'),
        outputPath: 'ProductViewDetail.ProductViewSummary.SupportDescription',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Name: this.__input.name,
          Owner: this.__input.owner,
          Description: this.__input.description,
          Distributor: this.__input.distributor,
          SupportDescription: this.__input.supportDescription,
          SupportEmail: this.__input.supportEmail,
          SupportUrl: this.__input.supportUrl,
          ProductType: this.__input.productType,
          Tags: this.__input.tags,
          ProvisioningArtifactParameters: {
            Name: this.__input.provisioningArtifactParameters.name,
            Description: this.__input.provisioningArtifactParameters.description,
            Info: this.__input.provisioningArtifactParameters.info,
            Type: this.__input.provisioningArtifactParameters.type,
            DisableTemplateValidation: this.__input.provisioningArtifactParameters.disableTemplateValidation,
          },
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProduct.ProductViewDetail.ProductViewSummary.SupportDescription', props);
    return resource.getResponseField('ProductViewDetail.ProductViewSummary.SupportDescription') as unknown as string;
  }

  public get supportUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateProduct.ProductViewDetail.ProductViewSummary.SupportUrl'),
        outputPath: 'ProductViewDetail.ProductViewSummary.SupportUrl',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Name: this.__input.name,
          Owner: this.__input.owner,
          Description: this.__input.description,
          Distributor: this.__input.distributor,
          SupportDescription: this.__input.supportDescription,
          SupportEmail: this.__input.supportEmail,
          SupportUrl: this.__input.supportUrl,
          ProductType: this.__input.productType,
          Tags: this.__input.tags,
          ProvisioningArtifactParameters: {
            Name: this.__input.provisioningArtifactParameters.name,
            Description: this.__input.provisioningArtifactParameters.description,
            Info: this.__input.provisioningArtifactParameters.info,
            Type: this.__input.provisioningArtifactParameters.type,
            DisableTemplateValidation: this.__input.provisioningArtifactParameters.disableTemplateValidation,
          },
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProduct.ProductViewDetail.ProductViewSummary.SupportUrl', props);
    return resource.getResponseField('ProductViewDetail.ProductViewSummary.SupportUrl') as unknown as string;
  }

}

export class ServiceCatalogResponsesCreateProductProvisioningArtifactDetail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogCreateProductInput) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateProduct.ProvisioningArtifactDetail.Id'),
        outputPath: 'ProvisioningArtifactDetail.Id',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Name: this.__input.name,
          Owner: this.__input.owner,
          Description: this.__input.description,
          Distributor: this.__input.distributor,
          SupportDescription: this.__input.supportDescription,
          SupportEmail: this.__input.supportEmail,
          SupportUrl: this.__input.supportUrl,
          ProductType: this.__input.productType,
          Tags: this.__input.tags,
          ProvisioningArtifactParameters: {
            Name: this.__input.provisioningArtifactParameters.name,
            Description: this.__input.provisioningArtifactParameters.description,
            Info: this.__input.provisioningArtifactParameters.info,
            Type: this.__input.provisioningArtifactParameters.type,
            DisableTemplateValidation: this.__input.provisioningArtifactParameters.disableTemplateValidation,
          },
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProduct.ProvisioningArtifactDetail.Id', props);
    return resource.getResponseField('ProvisioningArtifactDetail.Id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateProduct.ProvisioningArtifactDetail.Name'),
        outputPath: 'ProvisioningArtifactDetail.Name',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Name: this.__input.name,
          Owner: this.__input.owner,
          Description: this.__input.description,
          Distributor: this.__input.distributor,
          SupportDescription: this.__input.supportDescription,
          SupportEmail: this.__input.supportEmail,
          SupportUrl: this.__input.supportUrl,
          ProductType: this.__input.productType,
          Tags: this.__input.tags,
          ProvisioningArtifactParameters: {
            Name: this.__input.provisioningArtifactParameters.name,
            Description: this.__input.provisioningArtifactParameters.description,
            Info: this.__input.provisioningArtifactParameters.info,
            Type: this.__input.provisioningArtifactParameters.type,
            DisableTemplateValidation: this.__input.provisioningArtifactParameters.disableTemplateValidation,
          },
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProduct.ProvisioningArtifactDetail.Name', props);
    return resource.getResponseField('ProvisioningArtifactDetail.Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateProduct.ProvisioningArtifactDetail.Description'),
        outputPath: 'ProvisioningArtifactDetail.Description',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Name: this.__input.name,
          Owner: this.__input.owner,
          Description: this.__input.description,
          Distributor: this.__input.distributor,
          SupportDescription: this.__input.supportDescription,
          SupportEmail: this.__input.supportEmail,
          SupportUrl: this.__input.supportUrl,
          ProductType: this.__input.productType,
          Tags: this.__input.tags,
          ProvisioningArtifactParameters: {
            Name: this.__input.provisioningArtifactParameters.name,
            Description: this.__input.provisioningArtifactParameters.description,
            Info: this.__input.provisioningArtifactParameters.info,
            Type: this.__input.provisioningArtifactParameters.type,
            DisableTemplateValidation: this.__input.provisioningArtifactParameters.disableTemplateValidation,
          },
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProduct.ProvisioningArtifactDetail.Description', props);
    return resource.getResponseField('ProvisioningArtifactDetail.Description') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateProduct.ProvisioningArtifactDetail.Type'),
        outputPath: 'ProvisioningArtifactDetail.Type',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Name: this.__input.name,
          Owner: this.__input.owner,
          Description: this.__input.description,
          Distributor: this.__input.distributor,
          SupportDescription: this.__input.supportDescription,
          SupportEmail: this.__input.supportEmail,
          SupportUrl: this.__input.supportUrl,
          ProductType: this.__input.productType,
          Tags: this.__input.tags,
          ProvisioningArtifactParameters: {
            Name: this.__input.provisioningArtifactParameters.name,
            Description: this.__input.provisioningArtifactParameters.description,
            Info: this.__input.provisioningArtifactParameters.info,
            Type: this.__input.provisioningArtifactParameters.type,
            DisableTemplateValidation: this.__input.provisioningArtifactParameters.disableTemplateValidation,
          },
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProduct.ProvisioningArtifactDetail.Type', props);
    return resource.getResponseField('ProvisioningArtifactDetail.Type') as unknown as string;
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateProduct.ProvisioningArtifactDetail.CreatedTime'),
        outputPath: 'ProvisioningArtifactDetail.CreatedTime',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Name: this.__input.name,
          Owner: this.__input.owner,
          Description: this.__input.description,
          Distributor: this.__input.distributor,
          SupportDescription: this.__input.supportDescription,
          SupportEmail: this.__input.supportEmail,
          SupportUrl: this.__input.supportUrl,
          ProductType: this.__input.productType,
          Tags: this.__input.tags,
          ProvisioningArtifactParameters: {
            Name: this.__input.provisioningArtifactParameters.name,
            Description: this.__input.provisioningArtifactParameters.description,
            Info: this.__input.provisioningArtifactParameters.info,
            Type: this.__input.provisioningArtifactParameters.type,
            DisableTemplateValidation: this.__input.provisioningArtifactParameters.disableTemplateValidation,
          },
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProduct.ProvisioningArtifactDetail.CreatedTime', props);
    return resource.getResponseField('ProvisioningArtifactDetail.CreatedTime') as unknown as string;
  }

  public get active(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateProduct.ProvisioningArtifactDetail.Active'),
        outputPath: 'ProvisioningArtifactDetail.Active',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Name: this.__input.name,
          Owner: this.__input.owner,
          Description: this.__input.description,
          Distributor: this.__input.distributor,
          SupportDescription: this.__input.supportDescription,
          SupportEmail: this.__input.supportEmail,
          SupportUrl: this.__input.supportUrl,
          ProductType: this.__input.productType,
          Tags: this.__input.tags,
          ProvisioningArtifactParameters: {
            Name: this.__input.provisioningArtifactParameters.name,
            Description: this.__input.provisioningArtifactParameters.description,
            Info: this.__input.provisioningArtifactParameters.info,
            Type: this.__input.provisioningArtifactParameters.type,
            DisableTemplateValidation: this.__input.provisioningArtifactParameters.disableTemplateValidation,
          },
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProduct.ProvisioningArtifactDetail.Active', props);
    return resource.getResponseField('ProvisioningArtifactDetail.Active') as unknown as boolean;
  }

  public get guidance(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateProduct.ProvisioningArtifactDetail.Guidance'),
        outputPath: 'ProvisioningArtifactDetail.Guidance',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Name: this.__input.name,
          Owner: this.__input.owner,
          Description: this.__input.description,
          Distributor: this.__input.distributor,
          SupportDescription: this.__input.supportDescription,
          SupportEmail: this.__input.supportEmail,
          SupportUrl: this.__input.supportUrl,
          ProductType: this.__input.productType,
          Tags: this.__input.tags,
          ProvisioningArtifactParameters: {
            Name: this.__input.provisioningArtifactParameters.name,
            Description: this.__input.provisioningArtifactParameters.description,
            Info: this.__input.provisioningArtifactParameters.info,
            Type: this.__input.provisioningArtifactParameters.type,
            DisableTemplateValidation: this.__input.provisioningArtifactParameters.disableTemplateValidation,
          },
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProduct.ProvisioningArtifactDetail.Guidance', props);
    return resource.getResponseField('ProvisioningArtifactDetail.Guidance') as unknown as string;
  }

}

export class ServiceCatalogResponsesCreateProvisionedProductPlan {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogCreateProvisionedProductPlanInput) {
  }

  public get planName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProvisionedProductPlan',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateProvisionedProductPlan.PlanName'),
        outputPath: 'PlanName',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PlanName: this.__input.planName,
          PlanType: this.__input.planType,
          NotificationArns: this.__input.notificationArns,
          PathId: this.__input.pathId,
          ProductId: this.__input.productId,
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisioningParameters: this.__input.provisioningParameters,
          IdempotencyToken: this.__input.idempotencyToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProvisionedProductPlan.PlanName', props);
    return resource.getResponseField('PlanName') as unknown as string;
  }

  public get planId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProvisionedProductPlan',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateProvisionedProductPlan.PlanId'),
        outputPath: 'PlanId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PlanName: this.__input.planName,
          PlanType: this.__input.planType,
          NotificationArns: this.__input.notificationArns,
          PathId: this.__input.pathId,
          ProductId: this.__input.productId,
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisioningParameters: this.__input.provisioningParameters,
          IdempotencyToken: this.__input.idempotencyToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProvisionedProductPlan.PlanId', props);
    return resource.getResponseField('PlanId') as unknown as string;
  }

  public get provisionProductId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProvisionedProductPlan',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateProvisionedProductPlan.ProvisionProductId'),
        outputPath: 'ProvisionProductId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PlanName: this.__input.planName,
          PlanType: this.__input.planType,
          NotificationArns: this.__input.notificationArns,
          PathId: this.__input.pathId,
          ProductId: this.__input.productId,
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisioningParameters: this.__input.provisioningParameters,
          IdempotencyToken: this.__input.idempotencyToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProvisionedProductPlan.ProvisionProductId', props);
    return resource.getResponseField('ProvisionProductId') as unknown as string;
  }

  public get provisionedProductName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProvisionedProductPlan',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateProvisionedProductPlan.ProvisionedProductName'),
        outputPath: 'ProvisionedProductName',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PlanName: this.__input.planName,
          PlanType: this.__input.planType,
          NotificationArns: this.__input.notificationArns,
          PathId: this.__input.pathId,
          ProductId: this.__input.productId,
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisioningParameters: this.__input.provisioningParameters,
          IdempotencyToken: this.__input.idempotencyToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProvisionedProductPlan.ProvisionedProductName', props);
    return resource.getResponseField('ProvisionedProductName') as unknown as string;
  }

  public get provisioningArtifactId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProvisionedProductPlan',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateProvisionedProductPlan.ProvisioningArtifactId'),
        outputPath: 'ProvisioningArtifactId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PlanName: this.__input.planName,
          PlanType: this.__input.planType,
          NotificationArns: this.__input.notificationArns,
          PathId: this.__input.pathId,
          ProductId: this.__input.productId,
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisioningParameters: this.__input.provisioningParameters,
          IdempotencyToken: this.__input.idempotencyToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProvisionedProductPlan.ProvisioningArtifactId', props);
    return resource.getResponseField('ProvisioningArtifactId') as unknown as string;
  }

}

export class ServiceCatalogResponsesCreateProvisioningArtifact {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogCreateProvisioningArtifactInput) {
  }

  public get provisioningArtifactDetail(): ServiceCatalogResponsesCreateProvisioningArtifactProvisioningArtifactDetail {
    return new ServiceCatalogResponsesCreateProvisioningArtifactProvisioningArtifactDetail(this.__scope, this.__resources, this.__input);
  }

  public get info(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProvisioningArtifact',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateProvisioningArtifact.Info'),
        outputPath: 'Info',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          Parameters: {
            Name: this.__input.parameters.name,
            Description: this.__input.parameters.description,
            Info: this.__input.parameters.info,
            Type: this.__input.parameters.type,
            DisableTemplateValidation: this.__input.parameters.disableTemplateValidation,
          },
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProvisioningArtifact.Info', props);
    return resource.getResponseField('Info') as unknown as Record<string, string>;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProvisioningArtifact',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateProvisioningArtifact.Status'),
        outputPath: 'Status',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          Parameters: {
            Name: this.__input.parameters.name,
            Description: this.__input.parameters.description,
            Info: this.__input.parameters.info,
            Type: this.__input.parameters.type,
            DisableTemplateValidation: this.__input.parameters.disableTemplateValidation,
          },
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProvisioningArtifact.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class ServiceCatalogResponsesCreateProvisioningArtifactProvisioningArtifactDetail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogCreateProvisioningArtifactInput) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProvisioningArtifact',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateProvisioningArtifact.ProvisioningArtifactDetail.Id'),
        outputPath: 'ProvisioningArtifactDetail.Id',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          Parameters: {
            Name: this.__input.parameters.name,
            Description: this.__input.parameters.description,
            Info: this.__input.parameters.info,
            Type: this.__input.parameters.type,
            DisableTemplateValidation: this.__input.parameters.disableTemplateValidation,
          },
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProvisioningArtifact.ProvisioningArtifactDetail.Id', props);
    return resource.getResponseField('ProvisioningArtifactDetail.Id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProvisioningArtifact',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateProvisioningArtifact.ProvisioningArtifactDetail.Name'),
        outputPath: 'ProvisioningArtifactDetail.Name',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          Parameters: {
            Name: this.__input.parameters.name,
            Description: this.__input.parameters.description,
            Info: this.__input.parameters.info,
            Type: this.__input.parameters.type,
            DisableTemplateValidation: this.__input.parameters.disableTemplateValidation,
          },
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProvisioningArtifact.ProvisioningArtifactDetail.Name', props);
    return resource.getResponseField('ProvisioningArtifactDetail.Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProvisioningArtifact',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateProvisioningArtifact.ProvisioningArtifactDetail.Description'),
        outputPath: 'ProvisioningArtifactDetail.Description',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          Parameters: {
            Name: this.__input.parameters.name,
            Description: this.__input.parameters.description,
            Info: this.__input.parameters.info,
            Type: this.__input.parameters.type,
            DisableTemplateValidation: this.__input.parameters.disableTemplateValidation,
          },
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProvisioningArtifact.ProvisioningArtifactDetail.Description', props);
    return resource.getResponseField('ProvisioningArtifactDetail.Description') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProvisioningArtifact',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateProvisioningArtifact.ProvisioningArtifactDetail.Type'),
        outputPath: 'ProvisioningArtifactDetail.Type',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          Parameters: {
            Name: this.__input.parameters.name,
            Description: this.__input.parameters.description,
            Info: this.__input.parameters.info,
            Type: this.__input.parameters.type,
            DisableTemplateValidation: this.__input.parameters.disableTemplateValidation,
          },
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProvisioningArtifact.ProvisioningArtifactDetail.Type', props);
    return resource.getResponseField('ProvisioningArtifactDetail.Type') as unknown as string;
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProvisioningArtifact',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateProvisioningArtifact.ProvisioningArtifactDetail.CreatedTime'),
        outputPath: 'ProvisioningArtifactDetail.CreatedTime',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          Parameters: {
            Name: this.__input.parameters.name,
            Description: this.__input.parameters.description,
            Info: this.__input.parameters.info,
            Type: this.__input.parameters.type,
            DisableTemplateValidation: this.__input.parameters.disableTemplateValidation,
          },
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProvisioningArtifact.ProvisioningArtifactDetail.CreatedTime', props);
    return resource.getResponseField('ProvisioningArtifactDetail.CreatedTime') as unknown as string;
  }

  public get active(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProvisioningArtifact',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateProvisioningArtifact.ProvisioningArtifactDetail.Active'),
        outputPath: 'ProvisioningArtifactDetail.Active',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          Parameters: {
            Name: this.__input.parameters.name,
            Description: this.__input.parameters.description,
            Info: this.__input.parameters.info,
            Type: this.__input.parameters.type,
            DisableTemplateValidation: this.__input.parameters.disableTemplateValidation,
          },
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProvisioningArtifact.ProvisioningArtifactDetail.Active', props);
    return resource.getResponseField('ProvisioningArtifactDetail.Active') as unknown as boolean;
  }

  public get guidance(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProvisioningArtifact',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateProvisioningArtifact.ProvisioningArtifactDetail.Guidance'),
        outputPath: 'ProvisioningArtifactDetail.Guidance',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          Parameters: {
            Name: this.__input.parameters.name,
            Description: this.__input.parameters.description,
            Info: this.__input.parameters.info,
            Type: this.__input.parameters.type,
            DisableTemplateValidation: this.__input.parameters.disableTemplateValidation,
          },
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProvisioningArtifact.ProvisioningArtifactDetail.Guidance', props);
    return resource.getResponseField('ProvisioningArtifactDetail.Guidance') as unknown as string;
  }

}

export class ServiceCatalogResponsesCreateServiceAction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogCreateServiceActionInput) {
  }

  public get serviceActionDetail(): ServiceCatalogResponsesCreateServiceActionServiceActionDetail {
    return new ServiceCatalogResponsesCreateServiceActionServiceActionDetail(this.__scope, this.__resources, this.__input);
  }

}

export class ServiceCatalogResponsesCreateServiceActionServiceActionDetail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogCreateServiceActionInput) {
  }

  public get serviceActionSummary(): ServiceCatalogResponsesCreateServiceActionServiceActionDetailServiceActionSummary {
    return new ServiceCatalogResponsesCreateServiceActionServiceActionDetailServiceActionSummary(this.__scope, this.__resources, this.__input);
  }

  public get definition(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceAction',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateServiceAction.ServiceActionDetail.Definition'),
        outputPath: 'ServiceActionDetail.Definition',
        parameters: {
          Name: this.__input.name,
          DefinitionType: this.__input.definitionType,
          Definition: this.__input.definition,
          Description: this.__input.description,
          AcceptLanguage: this.__input.acceptLanguage,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceAction.ServiceActionDetail.Definition', props);
    return resource.getResponseField('ServiceActionDetail.Definition') as unknown as Record<string, string>;
  }

}

export class ServiceCatalogResponsesCreateServiceActionServiceActionDetailServiceActionSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogCreateServiceActionInput) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceAction',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateServiceAction.ServiceActionDetail.ServiceActionSummary.Id'),
        outputPath: 'ServiceActionDetail.ServiceActionSummary.Id',
        parameters: {
          Name: this.__input.name,
          DefinitionType: this.__input.definitionType,
          Definition: this.__input.definition,
          Description: this.__input.description,
          AcceptLanguage: this.__input.acceptLanguage,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceAction.ServiceActionDetail.ServiceActionSummary.Id', props);
    return resource.getResponseField('ServiceActionDetail.ServiceActionSummary.Id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceAction',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateServiceAction.ServiceActionDetail.ServiceActionSummary.Name'),
        outputPath: 'ServiceActionDetail.ServiceActionSummary.Name',
        parameters: {
          Name: this.__input.name,
          DefinitionType: this.__input.definitionType,
          Definition: this.__input.definition,
          Description: this.__input.description,
          AcceptLanguage: this.__input.acceptLanguage,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceAction.ServiceActionDetail.ServiceActionSummary.Name', props);
    return resource.getResponseField('ServiceActionDetail.ServiceActionSummary.Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceAction',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateServiceAction.ServiceActionDetail.ServiceActionSummary.Description'),
        outputPath: 'ServiceActionDetail.ServiceActionSummary.Description',
        parameters: {
          Name: this.__input.name,
          DefinitionType: this.__input.definitionType,
          Definition: this.__input.definition,
          Description: this.__input.description,
          AcceptLanguage: this.__input.acceptLanguage,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceAction.ServiceActionDetail.ServiceActionSummary.Description', props);
    return resource.getResponseField('ServiceActionDetail.ServiceActionSummary.Description') as unknown as string;
  }

  public get definitionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServiceAction',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateServiceAction.ServiceActionDetail.ServiceActionSummary.DefinitionType'),
        outputPath: 'ServiceActionDetail.ServiceActionSummary.DefinitionType',
        parameters: {
          Name: this.__input.name,
          DefinitionType: this.__input.definitionType,
          Definition: this.__input.definition,
          Description: this.__input.description,
          AcceptLanguage: this.__input.acceptLanguage,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServiceAction.ServiceActionDetail.ServiceActionSummary.DefinitionType', props);
    return resource.getResponseField('ServiceActionDetail.ServiceActionSummary.DefinitionType') as unknown as string;
  }

}

export class ServiceCatalogResponsesCreateTagOption {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogCreateTagOptionInput) {
  }

  public get tagOptionDetail(): ServiceCatalogResponsesCreateTagOptionTagOptionDetail {
    return new ServiceCatalogResponsesCreateTagOptionTagOptionDetail(this.__scope, this.__resources, this.__input);
  }

}

export class ServiceCatalogResponsesCreateTagOptionTagOptionDetail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogCreateTagOptionInput) {
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTagOption',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateTagOption.TagOptionDetail.Key'),
        outputPath: 'TagOptionDetail.Key',
        parameters: {
          Key: this.__input.key,
          Value: this.__input.value,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTagOption.TagOptionDetail.Key', props);
    return resource.getResponseField('TagOptionDetail.Key') as unknown as string;
  }

  public get value(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTagOption',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateTagOption.TagOptionDetail.Value'),
        outputPath: 'TagOptionDetail.Value',
        parameters: {
          Key: this.__input.key,
          Value: this.__input.value,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTagOption.TagOptionDetail.Value', props);
    return resource.getResponseField('TagOptionDetail.Value') as unknown as string;
  }

  public get active(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTagOption',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateTagOption.TagOptionDetail.Active'),
        outputPath: 'TagOptionDetail.Active',
        parameters: {
          Key: this.__input.key,
          Value: this.__input.value,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTagOption.TagOptionDetail.Active', props);
    return resource.getResponseField('TagOptionDetail.Active') as unknown as boolean;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTagOption',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateTagOption.TagOptionDetail.Id'),
        outputPath: 'TagOptionDetail.Id',
        parameters: {
          Key: this.__input.key,
          Value: this.__input.value,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTagOption.TagOptionDetail.Id', props);
    return resource.getResponseField('TagOptionDetail.Id') as unknown as string;
  }

  public get owner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTagOption',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.CreateTagOption.TagOptionDetail.Owner'),
        outputPath: 'TagOptionDetail.Owner',
        parameters: {
          Key: this.__input.key,
          Value: this.__input.value,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTagOption.TagOptionDetail.Owner', props);
    return resource.getResponseField('TagOptionDetail.Owner') as unknown as string;
  }

}

export class ServiceCatalogResponsesDeletePortfolioShare {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogDeletePortfolioShareInput) {
  }

  public get portfolioShareToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePortfolioShare',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DeletePortfolioShare.PortfolioShareToken'),
        outputPath: 'PortfolioShareToken',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PortfolioId: this.__input.portfolioId,
          AccountId: this.__input.accountId,
          OrganizationNode: {
            Type: this.__input.organizationNode?.type,
            Value: this.__input.organizationNode?.value,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeletePortfolioShare.PortfolioShareToken', props);
    return resource.getResponseField('PortfolioShareToken') as unknown as string;
  }

}

export class ServiceCatalogResponsesDescribeConstraint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogDescribeConstraintInput) {
  }

  public get constraintDetail(): ServiceCatalogResponsesDescribeConstraintConstraintDetail {
    return new ServiceCatalogResponsesDescribeConstraintConstraintDetail(this.__scope, this.__resources, this.__input);
  }

  public get constraintParameters(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConstraint',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeConstraint.ConstraintParameters'),
        outputPath: 'ConstraintParameters',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConstraint.ConstraintParameters', props);
    return resource.getResponseField('ConstraintParameters') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConstraint',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeConstraint.Status'),
        outputPath: 'Status',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConstraint.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class ServiceCatalogResponsesDescribeConstraintConstraintDetail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogDescribeConstraintInput) {
  }

  public get constraintId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConstraint',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeConstraint.ConstraintDetail.ConstraintId'),
        outputPath: 'ConstraintDetail.ConstraintId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConstraint.ConstraintDetail.ConstraintId', props);
    return resource.getResponseField('ConstraintDetail.ConstraintId') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConstraint',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeConstraint.ConstraintDetail.Type'),
        outputPath: 'ConstraintDetail.Type',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConstraint.ConstraintDetail.Type', props);
    return resource.getResponseField('ConstraintDetail.Type') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConstraint',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeConstraint.ConstraintDetail.Description'),
        outputPath: 'ConstraintDetail.Description',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConstraint.ConstraintDetail.Description', props);
    return resource.getResponseField('ConstraintDetail.Description') as unknown as string;
  }

  public get owner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConstraint',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeConstraint.ConstraintDetail.Owner'),
        outputPath: 'ConstraintDetail.Owner',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConstraint.ConstraintDetail.Owner', props);
    return resource.getResponseField('ConstraintDetail.Owner') as unknown as string;
  }

  public get productId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConstraint',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeConstraint.ConstraintDetail.ProductId'),
        outputPath: 'ConstraintDetail.ProductId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConstraint.ConstraintDetail.ProductId', props);
    return resource.getResponseField('ConstraintDetail.ProductId') as unknown as string;
  }

  public get portfolioId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConstraint',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeConstraint.ConstraintDetail.PortfolioId'),
        outputPath: 'ConstraintDetail.PortfolioId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConstraint.ConstraintDetail.PortfolioId', props);
    return resource.getResponseField('ConstraintDetail.PortfolioId') as unknown as string;
  }

}

export class ServiceCatalogResponsesDescribeCopyProductStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogDescribeCopyProductStatusInput) {
  }

  public get copyProductStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCopyProductStatus',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeCopyProductStatus.CopyProductStatus'),
        outputPath: 'CopyProductStatus',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          CopyProductToken: this.__input.copyProductToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCopyProductStatus.CopyProductStatus', props);
    return resource.getResponseField('CopyProductStatus') as unknown as string;
  }

  public get targetProductId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCopyProductStatus',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeCopyProductStatus.TargetProductId'),
        outputPath: 'TargetProductId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          CopyProductToken: this.__input.copyProductToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCopyProductStatus.TargetProductId', props);
    return resource.getResponseField('TargetProductId') as unknown as string;
  }

  public get statusDetail(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCopyProductStatus',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeCopyProductStatus.StatusDetail'),
        outputPath: 'StatusDetail',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          CopyProductToken: this.__input.copyProductToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCopyProductStatus.StatusDetail', props);
    return resource.getResponseField('StatusDetail') as unknown as string;
  }

}

export class ServiceCatalogResponsesDescribePortfolio {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogDescribePortfolioInput) {
  }

  public get portfolioDetail(): ServiceCatalogResponsesDescribePortfolioPortfolioDetail {
    return new ServiceCatalogResponsesDescribePortfolioPortfolioDetail(this.__scope, this.__resources, this.__input);
  }

  public get tags(): shapes.ServiceCatalogTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePortfolio',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribePortfolio.Tags'),
        outputPath: 'Tags',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePortfolio.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.ServiceCatalogTag[];
  }

  public get tagOptions(): shapes.ServiceCatalogTagOptionDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePortfolio',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribePortfolio.TagOptions'),
        outputPath: 'TagOptions',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePortfolio.TagOptions', props);
    return resource.getResponseField('TagOptions') as unknown as shapes.ServiceCatalogTagOptionDetail[];
  }

  public get budgets(): shapes.ServiceCatalogBudgetDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePortfolio',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribePortfolio.Budgets'),
        outputPath: 'Budgets',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePortfolio.Budgets', props);
    return resource.getResponseField('Budgets') as unknown as shapes.ServiceCatalogBudgetDetail[];
  }

}

export class ServiceCatalogResponsesDescribePortfolioPortfolioDetail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogDescribePortfolioInput) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePortfolio',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribePortfolio.PortfolioDetail.Id'),
        outputPath: 'PortfolioDetail.Id',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePortfolio.PortfolioDetail.Id', props);
    return resource.getResponseField('PortfolioDetail.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePortfolio',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribePortfolio.PortfolioDetail.ARN'),
        outputPath: 'PortfolioDetail.ARN',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePortfolio.PortfolioDetail.ARN', props);
    return resource.getResponseField('PortfolioDetail.ARN') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePortfolio',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribePortfolio.PortfolioDetail.DisplayName'),
        outputPath: 'PortfolioDetail.DisplayName',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePortfolio.PortfolioDetail.DisplayName', props);
    return resource.getResponseField('PortfolioDetail.DisplayName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePortfolio',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribePortfolio.PortfolioDetail.Description'),
        outputPath: 'PortfolioDetail.Description',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePortfolio.PortfolioDetail.Description', props);
    return resource.getResponseField('PortfolioDetail.Description') as unknown as string;
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePortfolio',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribePortfolio.PortfolioDetail.CreatedTime'),
        outputPath: 'PortfolioDetail.CreatedTime',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePortfolio.PortfolioDetail.CreatedTime', props);
    return resource.getResponseField('PortfolioDetail.CreatedTime') as unknown as string;
  }

  public get providerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePortfolio',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribePortfolio.PortfolioDetail.ProviderName'),
        outputPath: 'PortfolioDetail.ProviderName',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePortfolio.PortfolioDetail.ProviderName', props);
    return resource.getResponseField('PortfolioDetail.ProviderName') as unknown as string;
  }

}

export class ServiceCatalogResponsesDescribePortfolioShareStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogDescribePortfolioShareStatusInput) {
  }

  public get portfolioShareToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePortfolioShareStatus',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribePortfolioShareStatus.PortfolioShareToken'),
        outputPath: 'PortfolioShareToken',
        parameters: {
          PortfolioShareToken: this.__input.portfolioShareToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePortfolioShareStatus.PortfolioShareToken', props);
    return resource.getResponseField('PortfolioShareToken') as unknown as string;
  }

  public get portfolioId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePortfolioShareStatus',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribePortfolioShareStatus.PortfolioId'),
        outputPath: 'PortfolioId',
        parameters: {
          PortfolioShareToken: this.__input.portfolioShareToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePortfolioShareStatus.PortfolioId', props);
    return resource.getResponseField('PortfolioId') as unknown as string;
  }

  public get organizationNodeValue(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePortfolioShareStatus',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribePortfolioShareStatus.OrganizationNodeValue'),
        outputPath: 'OrganizationNodeValue',
        parameters: {
          PortfolioShareToken: this.__input.portfolioShareToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePortfolioShareStatus.OrganizationNodeValue', props);
    return resource.getResponseField('OrganizationNodeValue') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePortfolioShareStatus',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribePortfolioShareStatus.Status'),
        outputPath: 'Status',
        parameters: {
          PortfolioShareToken: this.__input.portfolioShareToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePortfolioShareStatus.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get shareDetails(): ServiceCatalogResponsesDescribePortfolioShareStatusShareDetails {
    return new ServiceCatalogResponsesDescribePortfolioShareStatusShareDetails(this.__scope, this.__resources, this.__input);
  }

}

export class ServiceCatalogResponsesDescribePortfolioShareStatusShareDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogDescribePortfolioShareStatusInput) {
  }

  public get successfulShares(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePortfolioShareStatus',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribePortfolioShareStatus.ShareDetails.SuccessfulShares'),
        outputPath: 'ShareDetails.SuccessfulShares',
        parameters: {
          PortfolioShareToken: this.__input.portfolioShareToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePortfolioShareStatus.ShareDetails.SuccessfulShares', props);
    return resource.getResponseField('ShareDetails.SuccessfulShares') as unknown as string[];
  }

  public get shareErrors(): shapes.ServiceCatalogShareError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePortfolioShareStatus',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribePortfolioShareStatus.ShareDetails.ShareErrors'),
        outputPath: 'ShareDetails.ShareErrors',
        parameters: {
          PortfolioShareToken: this.__input.portfolioShareToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePortfolioShareStatus.ShareDetails.ShareErrors', props);
    return resource.getResponseField('ShareDetails.ShareErrors') as unknown as shapes.ServiceCatalogShareError[];
  }

}

export class ServiceCatalogResponsesDescribePortfolioShares {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogDescribePortfolioSharesInput) {
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePortfolioShares',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribePortfolioShares.NextPageToken'),
        outputPath: 'NextPageToken',
        parameters: {
          PortfolioId: this.__input.portfolioId,
          Type: this.__input.type,
          PageToken: this.__input.pageToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePortfolioShares.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

  public get portfolioShareDetails(): shapes.ServiceCatalogPortfolioShareDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePortfolioShares',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribePortfolioShares.PortfolioShareDetails'),
        outputPath: 'PortfolioShareDetails',
        parameters: {
          PortfolioId: this.__input.portfolioId,
          Type: this.__input.type,
          PageToken: this.__input.pageToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePortfolioShares.PortfolioShareDetails', props);
    return resource.getResponseField('PortfolioShareDetails') as unknown as shapes.ServiceCatalogPortfolioShareDetail[];
  }

}

export class ServiceCatalogResponsesDescribeProduct {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogDescribeProductInput) {
  }

  public get productViewSummary(): ServiceCatalogResponsesDescribeProductProductViewSummary {
    return new ServiceCatalogResponsesDescribeProductProductViewSummary(this.__scope, this.__resources, this.__input);
  }

  public get provisioningArtifacts(): shapes.ServiceCatalogProvisioningArtifact[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProduct.ProvisioningArtifacts'),
        outputPath: 'ProvisioningArtifacts',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProduct.ProvisioningArtifacts', props);
    return resource.getResponseField('ProvisioningArtifacts') as unknown as shapes.ServiceCatalogProvisioningArtifact[];
  }

  public get budgets(): shapes.ServiceCatalogBudgetDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProduct.Budgets'),
        outputPath: 'Budgets',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProduct.Budgets', props);
    return resource.getResponseField('Budgets') as unknown as shapes.ServiceCatalogBudgetDetail[];
  }

  public get launchPaths(): shapes.ServiceCatalogLaunchPath[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProduct.LaunchPaths'),
        outputPath: 'LaunchPaths',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProduct.LaunchPaths', props);
    return resource.getResponseField('LaunchPaths') as unknown as shapes.ServiceCatalogLaunchPath[];
  }

}

export class ServiceCatalogResponsesDescribeProductProductViewSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogDescribeProductInput) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProduct.ProductViewSummary.Id'),
        outputPath: 'ProductViewSummary.Id',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProduct.ProductViewSummary.Id', props);
    return resource.getResponseField('ProductViewSummary.Id') as unknown as string;
  }

  public get productId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProduct.ProductViewSummary.ProductId'),
        outputPath: 'ProductViewSummary.ProductId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProduct.ProductViewSummary.ProductId', props);
    return resource.getResponseField('ProductViewSummary.ProductId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProduct.ProductViewSummary.Name'),
        outputPath: 'ProductViewSummary.Name',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProduct.ProductViewSummary.Name', props);
    return resource.getResponseField('ProductViewSummary.Name') as unknown as string;
  }

  public get owner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProduct.ProductViewSummary.Owner'),
        outputPath: 'ProductViewSummary.Owner',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProduct.ProductViewSummary.Owner', props);
    return resource.getResponseField('ProductViewSummary.Owner') as unknown as string;
  }

  public get shortDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProduct.ProductViewSummary.ShortDescription'),
        outputPath: 'ProductViewSummary.ShortDescription',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProduct.ProductViewSummary.ShortDescription', props);
    return resource.getResponseField('ProductViewSummary.ShortDescription') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProduct.ProductViewSummary.Type'),
        outputPath: 'ProductViewSummary.Type',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProduct.ProductViewSummary.Type', props);
    return resource.getResponseField('ProductViewSummary.Type') as unknown as string;
  }

  public get distributor(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProduct.ProductViewSummary.Distributor'),
        outputPath: 'ProductViewSummary.Distributor',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProduct.ProductViewSummary.Distributor', props);
    return resource.getResponseField('ProductViewSummary.Distributor') as unknown as string;
  }

  public get hasDefaultPath(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProduct.ProductViewSummary.HasDefaultPath'),
        outputPath: 'ProductViewSummary.HasDefaultPath',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProduct.ProductViewSummary.HasDefaultPath', props);
    return resource.getResponseField('ProductViewSummary.HasDefaultPath') as unknown as boolean;
  }

  public get supportEmail(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProduct.ProductViewSummary.SupportEmail'),
        outputPath: 'ProductViewSummary.SupportEmail',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProduct.ProductViewSummary.SupportEmail', props);
    return resource.getResponseField('ProductViewSummary.SupportEmail') as unknown as string;
  }

  public get supportDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProduct.ProductViewSummary.SupportDescription'),
        outputPath: 'ProductViewSummary.SupportDescription',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProduct.ProductViewSummary.SupportDescription', props);
    return resource.getResponseField('ProductViewSummary.SupportDescription') as unknown as string;
  }

  public get supportUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProduct.ProductViewSummary.SupportUrl'),
        outputPath: 'ProductViewSummary.SupportUrl',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProduct.ProductViewSummary.SupportUrl', props);
    return resource.getResponseField('ProductViewSummary.SupportUrl') as unknown as string;
  }

}

export class ServiceCatalogResponsesDescribeProductAsAdmin {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogDescribeProductAsAdminInput) {
  }

  public get productViewDetail(): ServiceCatalogResponsesDescribeProductAsAdminProductViewDetail {
    return new ServiceCatalogResponsesDescribeProductAsAdminProductViewDetail(this.__scope, this.__resources, this.__input);
  }

  public get provisioningArtifactSummaries(): shapes.ServiceCatalogProvisioningArtifactSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProductAsAdmin',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProductAsAdmin.ProvisioningArtifactSummaries'),
        outputPath: 'ProvisioningArtifactSummaries',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
          SourcePortfolioId: this.__input.sourcePortfolioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProductAsAdmin.ProvisioningArtifactSummaries', props);
    return resource.getResponseField('ProvisioningArtifactSummaries') as unknown as shapes.ServiceCatalogProvisioningArtifactSummary[];
  }

  public get tags(): shapes.ServiceCatalogTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProductAsAdmin',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProductAsAdmin.Tags'),
        outputPath: 'Tags',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
          SourcePortfolioId: this.__input.sourcePortfolioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProductAsAdmin.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.ServiceCatalogTag[];
  }

  public get tagOptions(): shapes.ServiceCatalogTagOptionDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProductAsAdmin',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProductAsAdmin.TagOptions'),
        outputPath: 'TagOptions',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
          SourcePortfolioId: this.__input.sourcePortfolioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProductAsAdmin.TagOptions', props);
    return resource.getResponseField('TagOptions') as unknown as shapes.ServiceCatalogTagOptionDetail[];
  }

  public get budgets(): shapes.ServiceCatalogBudgetDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProductAsAdmin',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProductAsAdmin.Budgets'),
        outputPath: 'Budgets',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
          SourcePortfolioId: this.__input.sourcePortfolioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProductAsAdmin.Budgets', props);
    return resource.getResponseField('Budgets') as unknown as shapes.ServiceCatalogBudgetDetail[];
  }

}

export class ServiceCatalogResponsesDescribeProductAsAdminProductViewDetail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogDescribeProductAsAdminInput) {
  }

  public get productViewSummary(): ServiceCatalogResponsesDescribeProductAsAdminProductViewDetailProductViewSummary {
    return new ServiceCatalogResponsesDescribeProductAsAdminProductViewDetailProductViewSummary(this.__scope, this.__resources, this.__input);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProductAsAdmin',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProductAsAdmin.ProductViewDetail.Status'),
        outputPath: 'ProductViewDetail.Status',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
          SourcePortfolioId: this.__input.sourcePortfolioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProductAsAdmin.ProductViewDetail.Status', props);
    return resource.getResponseField('ProductViewDetail.Status') as unknown as string;
  }

  public get productArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProductAsAdmin',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProductAsAdmin.ProductViewDetail.ProductARN'),
        outputPath: 'ProductViewDetail.ProductARN',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
          SourcePortfolioId: this.__input.sourcePortfolioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProductAsAdmin.ProductViewDetail.ProductARN', props);
    return resource.getResponseField('ProductViewDetail.ProductARN') as unknown as string;
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProductAsAdmin',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProductAsAdmin.ProductViewDetail.CreatedTime'),
        outputPath: 'ProductViewDetail.CreatedTime',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
          SourcePortfolioId: this.__input.sourcePortfolioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProductAsAdmin.ProductViewDetail.CreatedTime', props);
    return resource.getResponseField('ProductViewDetail.CreatedTime') as unknown as string;
  }

}

export class ServiceCatalogResponsesDescribeProductAsAdminProductViewDetailProductViewSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogDescribeProductAsAdminInput) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProductAsAdmin',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProductAsAdmin.ProductViewDetail.ProductViewSummary.Id'),
        outputPath: 'ProductViewDetail.ProductViewSummary.Id',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
          SourcePortfolioId: this.__input.sourcePortfolioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProductAsAdmin.ProductViewDetail.ProductViewSummary.Id', props);
    return resource.getResponseField('ProductViewDetail.ProductViewSummary.Id') as unknown as string;
  }

  public get productId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProductAsAdmin',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProductAsAdmin.ProductViewDetail.ProductViewSummary.ProductId'),
        outputPath: 'ProductViewDetail.ProductViewSummary.ProductId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
          SourcePortfolioId: this.__input.sourcePortfolioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProductAsAdmin.ProductViewDetail.ProductViewSummary.ProductId', props);
    return resource.getResponseField('ProductViewDetail.ProductViewSummary.ProductId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProductAsAdmin',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProductAsAdmin.ProductViewDetail.ProductViewSummary.Name'),
        outputPath: 'ProductViewDetail.ProductViewSummary.Name',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
          SourcePortfolioId: this.__input.sourcePortfolioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProductAsAdmin.ProductViewDetail.ProductViewSummary.Name', props);
    return resource.getResponseField('ProductViewDetail.ProductViewSummary.Name') as unknown as string;
  }

  public get owner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProductAsAdmin',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProductAsAdmin.ProductViewDetail.ProductViewSummary.Owner'),
        outputPath: 'ProductViewDetail.ProductViewSummary.Owner',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
          SourcePortfolioId: this.__input.sourcePortfolioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProductAsAdmin.ProductViewDetail.ProductViewSummary.Owner', props);
    return resource.getResponseField('ProductViewDetail.ProductViewSummary.Owner') as unknown as string;
  }

  public get shortDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProductAsAdmin',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProductAsAdmin.ProductViewDetail.ProductViewSummary.ShortDescription'),
        outputPath: 'ProductViewDetail.ProductViewSummary.ShortDescription',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
          SourcePortfolioId: this.__input.sourcePortfolioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProductAsAdmin.ProductViewDetail.ProductViewSummary.ShortDescription', props);
    return resource.getResponseField('ProductViewDetail.ProductViewSummary.ShortDescription') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProductAsAdmin',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProductAsAdmin.ProductViewDetail.ProductViewSummary.Type'),
        outputPath: 'ProductViewDetail.ProductViewSummary.Type',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
          SourcePortfolioId: this.__input.sourcePortfolioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProductAsAdmin.ProductViewDetail.ProductViewSummary.Type', props);
    return resource.getResponseField('ProductViewDetail.ProductViewSummary.Type') as unknown as string;
  }

  public get distributor(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProductAsAdmin',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProductAsAdmin.ProductViewDetail.ProductViewSummary.Distributor'),
        outputPath: 'ProductViewDetail.ProductViewSummary.Distributor',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
          SourcePortfolioId: this.__input.sourcePortfolioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProductAsAdmin.ProductViewDetail.ProductViewSummary.Distributor', props);
    return resource.getResponseField('ProductViewDetail.ProductViewSummary.Distributor') as unknown as string;
  }

  public get hasDefaultPath(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProductAsAdmin',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProductAsAdmin.ProductViewDetail.ProductViewSummary.HasDefaultPath'),
        outputPath: 'ProductViewDetail.ProductViewSummary.HasDefaultPath',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
          SourcePortfolioId: this.__input.sourcePortfolioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProductAsAdmin.ProductViewDetail.ProductViewSummary.HasDefaultPath', props);
    return resource.getResponseField('ProductViewDetail.ProductViewSummary.HasDefaultPath') as unknown as boolean;
  }

  public get supportEmail(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProductAsAdmin',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProductAsAdmin.ProductViewDetail.ProductViewSummary.SupportEmail'),
        outputPath: 'ProductViewDetail.ProductViewSummary.SupportEmail',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
          SourcePortfolioId: this.__input.sourcePortfolioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProductAsAdmin.ProductViewDetail.ProductViewSummary.SupportEmail', props);
    return resource.getResponseField('ProductViewDetail.ProductViewSummary.SupportEmail') as unknown as string;
  }

  public get supportDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProductAsAdmin',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProductAsAdmin.ProductViewDetail.ProductViewSummary.SupportDescription'),
        outputPath: 'ProductViewDetail.ProductViewSummary.SupportDescription',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
          SourcePortfolioId: this.__input.sourcePortfolioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProductAsAdmin.ProductViewDetail.ProductViewSummary.SupportDescription', props);
    return resource.getResponseField('ProductViewDetail.ProductViewSummary.SupportDescription') as unknown as string;
  }

  public get supportUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProductAsAdmin',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProductAsAdmin.ProductViewDetail.ProductViewSummary.SupportUrl'),
        outputPath: 'ProductViewDetail.ProductViewSummary.SupportUrl',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
          SourcePortfolioId: this.__input.sourcePortfolioId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProductAsAdmin.ProductViewDetail.ProductViewSummary.SupportUrl', props);
    return resource.getResponseField('ProductViewDetail.ProductViewSummary.SupportUrl') as unknown as string;
  }

}

export class ServiceCatalogResponsesDescribeProductView {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogDescribeProductViewInput) {
  }

  public get productViewSummary(): ServiceCatalogResponsesDescribeProductViewProductViewSummary {
    return new ServiceCatalogResponsesDescribeProductViewProductViewSummary(this.__scope, this.__resources, this.__input);
  }

  public get provisioningArtifacts(): shapes.ServiceCatalogProvisioningArtifact[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProductView',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProductView.ProvisioningArtifacts'),
        outputPath: 'ProvisioningArtifacts',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProductView.ProvisioningArtifacts', props);
    return resource.getResponseField('ProvisioningArtifacts') as unknown as shapes.ServiceCatalogProvisioningArtifact[];
  }

}

export class ServiceCatalogResponsesDescribeProductViewProductViewSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogDescribeProductViewInput) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProductView',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProductView.ProductViewSummary.Id'),
        outputPath: 'ProductViewSummary.Id',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProductView.ProductViewSummary.Id', props);
    return resource.getResponseField('ProductViewSummary.Id') as unknown as string;
  }

  public get productId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProductView',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProductView.ProductViewSummary.ProductId'),
        outputPath: 'ProductViewSummary.ProductId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProductView.ProductViewSummary.ProductId', props);
    return resource.getResponseField('ProductViewSummary.ProductId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProductView',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProductView.ProductViewSummary.Name'),
        outputPath: 'ProductViewSummary.Name',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProductView.ProductViewSummary.Name', props);
    return resource.getResponseField('ProductViewSummary.Name') as unknown as string;
  }

  public get owner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProductView',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProductView.ProductViewSummary.Owner'),
        outputPath: 'ProductViewSummary.Owner',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProductView.ProductViewSummary.Owner', props);
    return resource.getResponseField('ProductViewSummary.Owner') as unknown as string;
  }

  public get shortDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProductView',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProductView.ProductViewSummary.ShortDescription'),
        outputPath: 'ProductViewSummary.ShortDescription',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProductView.ProductViewSummary.ShortDescription', props);
    return resource.getResponseField('ProductViewSummary.ShortDescription') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProductView',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProductView.ProductViewSummary.Type'),
        outputPath: 'ProductViewSummary.Type',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProductView.ProductViewSummary.Type', props);
    return resource.getResponseField('ProductViewSummary.Type') as unknown as string;
  }

  public get distributor(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProductView',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProductView.ProductViewSummary.Distributor'),
        outputPath: 'ProductViewSummary.Distributor',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProductView.ProductViewSummary.Distributor', props);
    return resource.getResponseField('ProductViewSummary.Distributor') as unknown as string;
  }

  public get hasDefaultPath(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProductView',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProductView.ProductViewSummary.HasDefaultPath'),
        outputPath: 'ProductViewSummary.HasDefaultPath',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProductView.ProductViewSummary.HasDefaultPath', props);
    return resource.getResponseField('ProductViewSummary.HasDefaultPath') as unknown as boolean;
  }

  public get supportEmail(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProductView',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProductView.ProductViewSummary.SupportEmail'),
        outputPath: 'ProductViewSummary.SupportEmail',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProductView.ProductViewSummary.SupportEmail', props);
    return resource.getResponseField('ProductViewSummary.SupportEmail') as unknown as string;
  }

  public get supportDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProductView',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProductView.ProductViewSummary.SupportDescription'),
        outputPath: 'ProductViewSummary.SupportDescription',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProductView.ProductViewSummary.SupportDescription', props);
    return resource.getResponseField('ProductViewSummary.SupportDescription') as unknown as string;
  }

  public get supportUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProductView',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProductView.ProductViewSummary.SupportUrl'),
        outputPath: 'ProductViewSummary.SupportUrl',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProductView.ProductViewSummary.SupportUrl', props);
    return resource.getResponseField('ProductViewSummary.SupportUrl') as unknown as string;
  }

}

export class ServiceCatalogResponsesDescribeProvisionedProduct {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogDescribeProvisionedProductInput) {
  }

  public get provisionedProductDetail(): ServiceCatalogResponsesDescribeProvisionedProductProvisionedProductDetail {
    return new ServiceCatalogResponsesDescribeProvisionedProductProvisionedProductDetail(this.__scope, this.__resources, this.__input);
  }

  public get cloudWatchDashboards(): shapes.ServiceCatalogCloudWatchDashboard[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisionedProduct.CloudWatchDashboards'),
        outputPath: 'CloudWatchDashboards',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisionedProduct.CloudWatchDashboards', props);
    return resource.getResponseField('CloudWatchDashboards') as unknown as shapes.ServiceCatalogCloudWatchDashboard[];
  }

}

export class ServiceCatalogResponsesDescribeProvisionedProductProvisionedProductDetail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogDescribeProvisionedProductInput) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisionedProduct.ProvisionedProductDetail.Name'),
        outputPath: 'ProvisionedProductDetail.Name',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisionedProduct.ProvisionedProductDetail.Name', props);
    return resource.getResponseField('ProvisionedProductDetail.Name') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisionedProduct.ProvisionedProductDetail.Arn'),
        outputPath: 'ProvisionedProductDetail.Arn',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisionedProduct.ProvisionedProductDetail.Arn', props);
    return resource.getResponseField('ProvisionedProductDetail.Arn') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisionedProduct.ProvisionedProductDetail.Type'),
        outputPath: 'ProvisionedProductDetail.Type',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisionedProduct.ProvisionedProductDetail.Type', props);
    return resource.getResponseField('ProvisionedProductDetail.Type') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisionedProduct.ProvisionedProductDetail.Id'),
        outputPath: 'ProvisionedProductDetail.Id',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisionedProduct.ProvisionedProductDetail.Id', props);
    return resource.getResponseField('ProvisionedProductDetail.Id') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisionedProduct.ProvisionedProductDetail.Status'),
        outputPath: 'ProvisionedProductDetail.Status',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisionedProduct.ProvisionedProductDetail.Status', props);
    return resource.getResponseField('ProvisionedProductDetail.Status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisionedProduct.ProvisionedProductDetail.StatusMessage'),
        outputPath: 'ProvisionedProductDetail.StatusMessage',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisionedProduct.ProvisionedProductDetail.StatusMessage', props);
    return resource.getResponseField('ProvisionedProductDetail.StatusMessage') as unknown as string;
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisionedProduct.ProvisionedProductDetail.CreatedTime'),
        outputPath: 'ProvisionedProductDetail.CreatedTime',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisionedProduct.ProvisionedProductDetail.CreatedTime', props);
    return resource.getResponseField('ProvisionedProductDetail.CreatedTime') as unknown as string;
  }

  public get idempotencyToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisionedProduct.ProvisionedProductDetail.IdempotencyToken'),
        outputPath: 'ProvisionedProductDetail.IdempotencyToken',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisionedProduct.ProvisionedProductDetail.IdempotencyToken', props);
    return resource.getResponseField('ProvisionedProductDetail.IdempotencyToken') as unknown as string;
  }

  public get lastRecordId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisionedProduct.ProvisionedProductDetail.LastRecordId'),
        outputPath: 'ProvisionedProductDetail.LastRecordId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisionedProduct.ProvisionedProductDetail.LastRecordId', props);
    return resource.getResponseField('ProvisionedProductDetail.LastRecordId') as unknown as string;
  }

  public get lastProvisioningRecordId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisionedProduct.ProvisionedProductDetail.LastProvisioningRecordId'),
        outputPath: 'ProvisionedProductDetail.LastProvisioningRecordId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisionedProduct.ProvisionedProductDetail.LastProvisioningRecordId', props);
    return resource.getResponseField('ProvisionedProductDetail.LastProvisioningRecordId') as unknown as string;
  }

  public get lastSuccessfulProvisioningRecordId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisionedProduct.ProvisionedProductDetail.LastSuccessfulProvisioningRecordId'),
        outputPath: 'ProvisionedProductDetail.LastSuccessfulProvisioningRecordId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisionedProduct.ProvisionedProductDetail.LastSuccessfulProvisioningRecordId', props);
    return resource.getResponseField('ProvisionedProductDetail.LastSuccessfulProvisioningRecordId') as unknown as string;
  }

  public get productId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisionedProduct.ProvisionedProductDetail.ProductId'),
        outputPath: 'ProvisionedProductDetail.ProductId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisionedProduct.ProvisionedProductDetail.ProductId', props);
    return resource.getResponseField('ProvisionedProductDetail.ProductId') as unknown as string;
  }

  public get provisioningArtifactId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisionedProduct.ProvisionedProductDetail.ProvisioningArtifactId'),
        outputPath: 'ProvisionedProductDetail.ProvisioningArtifactId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisionedProduct.ProvisionedProductDetail.ProvisioningArtifactId', props);
    return resource.getResponseField('ProvisionedProductDetail.ProvisioningArtifactId') as unknown as string;
  }

  public get launchRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisionedProduct.ProvisionedProductDetail.LaunchRoleArn'),
        outputPath: 'ProvisionedProductDetail.LaunchRoleArn',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisionedProduct.ProvisionedProductDetail.LaunchRoleArn', props);
    return resource.getResponseField('ProvisionedProductDetail.LaunchRoleArn') as unknown as string;
  }

}

export class ServiceCatalogResponsesDescribeProvisionedProductPlan {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogDescribeProvisionedProductPlanInput) {
  }

  public get provisionedProductPlanDetails(): ServiceCatalogResponsesDescribeProvisionedProductPlanProvisionedProductPlanDetails {
    return new ServiceCatalogResponsesDescribeProvisionedProductPlanProvisionedProductPlanDetails(this.__scope, this.__resources, this.__input);
  }

  public get resourceChanges(): shapes.ServiceCatalogResourceChange[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisionedProductPlan',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisionedProductPlan.ResourceChanges'),
        outputPath: 'ResourceChanges',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PlanId: this.__input.planId,
          PageSize: this.__input.pageSize,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisionedProductPlan.ResourceChanges', props);
    return resource.getResponseField('ResourceChanges') as unknown as shapes.ServiceCatalogResourceChange[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisionedProductPlan',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisionedProductPlan.NextPageToken'),
        outputPath: 'NextPageToken',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PlanId: this.__input.planId,
          PageSize: this.__input.pageSize,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisionedProductPlan.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ServiceCatalogResponsesDescribeProvisionedProductPlanProvisionedProductPlanDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogDescribeProvisionedProductPlanInput) {
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisionedProductPlan',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisionedProductPlan.ProvisionedProductPlanDetails.CreatedTime'),
        outputPath: 'ProvisionedProductPlanDetails.CreatedTime',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PlanId: this.__input.planId,
          PageSize: this.__input.pageSize,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisionedProductPlan.ProvisionedProductPlanDetails.CreatedTime', props);
    return resource.getResponseField('ProvisionedProductPlanDetails.CreatedTime') as unknown as string;
  }

  public get pathId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisionedProductPlan',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisionedProductPlan.ProvisionedProductPlanDetails.PathId'),
        outputPath: 'ProvisionedProductPlanDetails.PathId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PlanId: this.__input.planId,
          PageSize: this.__input.pageSize,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisionedProductPlan.ProvisionedProductPlanDetails.PathId', props);
    return resource.getResponseField('ProvisionedProductPlanDetails.PathId') as unknown as string;
  }

  public get productId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisionedProductPlan',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisionedProductPlan.ProvisionedProductPlanDetails.ProductId'),
        outputPath: 'ProvisionedProductPlanDetails.ProductId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PlanId: this.__input.planId,
          PageSize: this.__input.pageSize,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisionedProductPlan.ProvisionedProductPlanDetails.ProductId', props);
    return resource.getResponseField('ProvisionedProductPlanDetails.ProductId') as unknown as string;
  }

  public get planName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisionedProductPlan',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisionedProductPlan.ProvisionedProductPlanDetails.PlanName'),
        outputPath: 'ProvisionedProductPlanDetails.PlanName',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PlanId: this.__input.planId,
          PageSize: this.__input.pageSize,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisionedProductPlan.ProvisionedProductPlanDetails.PlanName', props);
    return resource.getResponseField('ProvisionedProductPlanDetails.PlanName') as unknown as string;
  }

  public get planId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisionedProductPlan',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisionedProductPlan.ProvisionedProductPlanDetails.PlanId'),
        outputPath: 'ProvisionedProductPlanDetails.PlanId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PlanId: this.__input.planId,
          PageSize: this.__input.pageSize,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisionedProductPlan.ProvisionedProductPlanDetails.PlanId', props);
    return resource.getResponseField('ProvisionedProductPlanDetails.PlanId') as unknown as string;
  }

  public get provisionProductId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisionedProductPlan',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisionedProductPlan.ProvisionedProductPlanDetails.ProvisionProductId'),
        outputPath: 'ProvisionedProductPlanDetails.ProvisionProductId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PlanId: this.__input.planId,
          PageSize: this.__input.pageSize,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisionedProductPlan.ProvisionedProductPlanDetails.ProvisionProductId', props);
    return resource.getResponseField('ProvisionedProductPlanDetails.ProvisionProductId') as unknown as string;
  }

  public get provisionProductName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisionedProductPlan',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisionedProductPlan.ProvisionedProductPlanDetails.ProvisionProductName'),
        outputPath: 'ProvisionedProductPlanDetails.ProvisionProductName',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PlanId: this.__input.planId,
          PageSize: this.__input.pageSize,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisionedProductPlan.ProvisionedProductPlanDetails.ProvisionProductName', props);
    return resource.getResponseField('ProvisionedProductPlanDetails.ProvisionProductName') as unknown as string;
  }

  public get planType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisionedProductPlan',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisionedProductPlan.ProvisionedProductPlanDetails.PlanType'),
        outputPath: 'ProvisionedProductPlanDetails.PlanType',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PlanId: this.__input.planId,
          PageSize: this.__input.pageSize,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisionedProductPlan.ProvisionedProductPlanDetails.PlanType', props);
    return resource.getResponseField('ProvisionedProductPlanDetails.PlanType') as unknown as string;
  }

  public get provisioningArtifactId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisionedProductPlan',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisionedProductPlan.ProvisionedProductPlanDetails.ProvisioningArtifactId'),
        outputPath: 'ProvisionedProductPlanDetails.ProvisioningArtifactId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PlanId: this.__input.planId,
          PageSize: this.__input.pageSize,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisionedProductPlan.ProvisionedProductPlanDetails.ProvisioningArtifactId', props);
    return resource.getResponseField('ProvisionedProductPlanDetails.ProvisioningArtifactId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisionedProductPlan',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisionedProductPlan.ProvisionedProductPlanDetails.Status'),
        outputPath: 'ProvisionedProductPlanDetails.Status',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PlanId: this.__input.planId,
          PageSize: this.__input.pageSize,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisionedProductPlan.ProvisionedProductPlanDetails.Status', props);
    return resource.getResponseField('ProvisionedProductPlanDetails.Status') as unknown as string;
  }

  public get updatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisionedProductPlan',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisionedProductPlan.ProvisionedProductPlanDetails.UpdatedTime'),
        outputPath: 'ProvisionedProductPlanDetails.UpdatedTime',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PlanId: this.__input.planId,
          PageSize: this.__input.pageSize,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisionedProductPlan.ProvisionedProductPlanDetails.UpdatedTime', props);
    return resource.getResponseField('ProvisionedProductPlanDetails.UpdatedTime') as unknown as string;
  }

  public get notificationArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisionedProductPlan',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisionedProductPlan.ProvisionedProductPlanDetails.NotificationArns'),
        outputPath: 'ProvisionedProductPlanDetails.NotificationArns',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PlanId: this.__input.planId,
          PageSize: this.__input.pageSize,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisionedProductPlan.ProvisionedProductPlanDetails.NotificationArns', props);
    return resource.getResponseField('ProvisionedProductPlanDetails.NotificationArns') as unknown as string[];
  }

  public get provisioningParameters(): shapes.ServiceCatalogUpdateProvisioningParameter[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisionedProductPlan',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisionedProductPlan.ProvisionedProductPlanDetails.ProvisioningParameters'),
        outputPath: 'ProvisionedProductPlanDetails.ProvisioningParameters',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PlanId: this.__input.planId,
          PageSize: this.__input.pageSize,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisionedProductPlan.ProvisionedProductPlanDetails.ProvisioningParameters', props);
    return resource.getResponseField('ProvisionedProductPlanDetails.ProvisioningParameters') as unknown as shapes.ServiceCatalogUpdateProvisioningParameter[];
  }

  public get tags(): shapes.ServiceCatalogTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisionedProductPlan',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisionedProductPlan.ProvisionedProductPlanDetails.Tags'),
        outputPath: 'ProvisionedProductPlanDetails.Tags',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PlanId: this.__input.planId,
          PageSize: this.__input.pageSize,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisionedProductPlan.ProvisionedProductPlanDetails.Tags', props);
    return resource.getResponseField('ProvisionedProductPlanDetails.Tags') as unknown as shapes.ServiceCatalogTag[];
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisionedProductPlan',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisionedProductPlan.ProvisionedProductPlanDetails.StatusMessage'),
        outputPath: 'ProvisionedProductPlanDetails.StatusMessage',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PlanId: this.__input.planId,
          PageSize: this.__input.pageSize,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisionedProductPlan.ProvisionedProductPlanDetails.StatusMessage', props);
    return resource.getResponseField('ProvisionedProductPlanDetails.StatusMessage') as unknown as string;
  }

}

export class ServiceCatalogResponsesDescribeProvisioningArtifact {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogDescribeProvisioningArtifactInput) {
  }

  public get provisioningArtifactDetail(): ServiceCatalogResponsesDescribeProvisioningArtifactProvisioningArtifactDetail {
    return new ServiceCatalogResponsesDescribeProvisioningArtifactProvisioningArtifactDetail(this.__scope, this.__resources, this.__input);
  }

  public get info(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisioningArtifact',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisioningArtifact.Info'),
        outputPath: 'Info',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProductId: this.__input.productId,
          ProvisioningArtifactName: this.__input.provisioningArtifactName,
          ProductName: this.__input.productName,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisioningArtifact.Info', props);
    return resource.getResponseField('Info') as unknown as Record<string, string>;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisioningArtifact',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisioningArtifact.Status'),
        outputPath: 'Status',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProductId: this.__input.productId,
          ProvisioningArtifactName: this.__input.provisioningArtifactName,
          ProductName: this.__input.productName,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisioningArtifact.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class ServiceCatalogResponsesDescribeProvisioningArtifactProvisioningArtifactDetail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogDescribeProvisioningArtifactInput) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisioningArtifact',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisioningArtifact.ProvisioningArtifactDetail.Id'),
        outputPath: 'ProvisioningArtifactDetail.Id',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProductId: this.__input.productId,
          ProvisioningArtifactName: this.__input.provisioningArtifactName,
          ProductName: this.__input.productName,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisioningArtifact.ProvisioningArtifactDetail.Id', props);
    return resource.getResponseField('ProvisioningArtifactDetail.Id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisioningArtifact',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisioningArtifact.ProvisioningArtifactDetail.Name'),
        outputPath: 'ProvisioningArtifactDetail.Name',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProductId: this.__input.productId,
          ProvisioningArtifactName: this.__input.provisioningArtifactName,
          ProductName: this.__input.productName,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisioningArtifact.ProvisioningArtifactDetail.Name', props);
    return resource.getResponseField('ProvisioningArtifactDetail.Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisioningArtifact',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisioningArtifact.ProvisioningArtifactDetail.Description'),
        outputPath: 'ProvisioningArtifactDetail.Description',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProductId: this.__input.productId,
          ProvisioningArtifactName: this.__input.provisioningArtifactName,
          ProductName: this.__input.productName,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisioningArtifact.ProvisioningArtifactDetail.Description', props);
    return resource.getResponseField('ProvisioningArtifactDetail.Description') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisioningArtifact',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisioningArtifact.ProvisioningArtifactDetail.Type'),
        outputPath: 'ProvisioningArtifactDetail.Type',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProductId: this.__input.productId,
          ProvisioningArtifactName: this.__input.provisioningArtifactName,
          ProductName: this.__input.productName,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisioningArtifact.ProvisioningArtifactDetail.Type', props);
    return resource.getResponseField('ProvisioningArtifactDetail.Type') as unknown as string;
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisioningArtifact',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisioningArtifact.ProvisioningArtifactDetail.CreatedTime'),
        outputPath: 'ProvisioningArtifactDetail.CreatedTime',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProductId: this.__input.productId,
          ProvisioningArtifactName: this.__input.provisioningArtifactName,
          ProductName: this.__input.productName,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisioningArtifact.ProvisioningArtifactDetail.CreatedTime', props);
    return resource.getResponseField('ProvisioningArtifactDetail.CreatedTime') as unknown as string;
  }

  public get active(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisioningArtifact',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisioningArtifact.ProvisioningArtifactDetail.Active'),
        outputPath: 'ProvisioningArtifactDetail.Active',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProductId: this.__input.productId,
          ProvisioningArtifactName: this.__input.provisioningArtifactName,
          ProductName: this.__input.productName,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisioningArtifact.ProvisioningArtifactDetail.Active', props);
    return resource.getResponseField('ProvisioningArtifactDetail.Active') as unknown as boolean;
  }

  public get guidance(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisioningArtifact',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisioningArtifact.ProvisioningArtifactDetail.Guidance'),
        outputPath: 'ProvisioningArtifactDetail.Guidance',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProductId: this.__input.productId,
          ProvisioningArtifactName: this.__input.provisioningArtifactName,
          ProductName: this.__input.productName,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisioningArtifact.ProvisioningArtifactDetail.Guidance', props);
    return resource.getResponseField('ProvisioningArtifactDetail.Guidance') as unknown as string;
  }

}

export class ServiceCatalogResponsesDescribeProvisioningParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogDescribeProvisioningParametersInput) {
  }

  public get provisioningArtifactParameters(): shapes.ServiceCatalogProvisioningArtifactParameter[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisioningParameters',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisioningParameters.ProvisioningArtifactParameters'),
        outputPath: 'ProvisioningArtifactParameters',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          ProductName: this.__input.productName,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisioningArtifactName: this.__input.provisioningArtifactName,
          PathId: this.__input.pathId,
          PathName: this.__input.pathName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisioningParameters.ProvisioningArtifactParameters', props);
    return resource.getResponseField('ProvisioningArtifactParameters') as unknown as shapes.ServiceCatalogProvisioningArtifactParameter[];
  }

  public get constraintSummaries(): shapes.ServiceCatalogConstraintSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisioningParameters',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisioningParameters.ConstraintSummaries'),
        outputPath: 'ConstraintSummaries',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          ProductName: this.__input.productName,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisioningArtifactName: this.__input.provisioningArtifactName,
          PathId: this.__input.pathId,
          PathName: this.__input.pathName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisioningParameters.ConstraintSummaries', props);
    return resource.getResponseField('ConstraintSummaries') as unknown as shapes.ServiceCatalogConstraintSummary[];
  }

  public get usageInstructions(): shapes.ServiceCatalogUsageInstruction[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisioningParameters',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisioningParameters.UsageInstructions'),
        outputPath: 'UsageInstructions',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          ProductName: this.__input.productName,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisioningArtifactName: this.__input.provisioningArtifactName,
          PathId: this.__input.pathId,
          PathName: this.__input.pathName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisioningParameters.UsageInstructions', props);
    return resource.getResponseField('UsageInstructions') as unknown as shapes.ServiceCatalogUsageInstruction[];
  }

  public get tagOptions(): shapes.ServiceCatalogTagOptionSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisioningParameters',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisioningParameters.TagOptions'),
        outputPath: 'TagOptions',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          ProductName: this.__input.productName,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisioningArtifactName: this.__input.provisioningArtifactName,
          PathId: this.__input.pathId,
          PathName: this.__input.pathName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisioningParameters.TagOptions', props);
    return resource.getResponseField('TagOptions') as unknown as shapes.ServiceCatalogTagOptionSummary[];
  }

  public get provisioningArtifactPreferences(): ServiceCatalogResponsesDescribeProvisioningParametersProvisioningArtifactPreferences {
    return new ServiceCatalogResponsesDescribeProvisioningParametersProvisioningArtifactPreferences(this.__scope, this.__resources, this.__input);
  }

  public get provisioningArtifactOutputs(): shapes.ServiceCatalogProvisioningArtifactOutput[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisioningParameters',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisioningParameters.ProvisioningArtifactOutputs'),
        outputPath: 'ProvisioningArtifactOutputs',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          ProductName: this.__input.productName,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisioningArtifactName: this.__input.provisioningArtifactName,
          PathId: this.__input.pathId,
          PathName: this.__input.pathName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisioningParameters.ProvisioningArtifactOutputs', props);
    return resource.getResponseField('ProvisioningArtifactOutputs') as unknown as shapes.ServiceCatalogProvisioningArtifactOutput[];
  }

}

export class ServiceCatalogResponsesDescribeProvisioningParametersProvisioningArtifactPreferences {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogDescribeProvisioningParametersInput) {
  }

  public get stackSetAccounts(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisioningParameters',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisioningParameters.ProvisioningArtifactPreferences.StackSetAccounts'),
        outputPath: 'ProvisioningArtifactPreferences.StackSetAccounts',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          ProductName: this.__input.productName,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisioningArtifactName: this.__input.provisioningArtifactName,
          PathId: this.__input.pathId,
          PathName: this.__input.pathName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisioningParameters.ProvisioningArtifactPreferences.StackSetAccounts', props);
    return resource.getResponseField('ProvisioningArtifactPreferences.StackSetAccounts') as unknown as string[];
  }

  public get stackSetRegions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProvisioningParameters',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeProvisioningParameters.ProvisioningArtifactPreferences.StackSetRegions'),
        outputPath: 'ProvisioningArtifactPreferences.StackSetRegions',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          ProductName: this.__input.productName,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisioningArtifactName: this.__input.provisioningArtifactName,
          PathId: this.__input.pathId,
          PathName: this.__input.pathName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProvisioningParameters.ProvisioningArtifactPreferences.StackSetRegions', props);
    return resource.getResponseField('ProvisioningArtifactPreferences.StackSetRegions') as unknown as string[];
  }

}

export class ServiceCatalogResponsesDescribeRecord {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogDescribeRecordInput) {
  }

  public get recordDetail(): ServiceCatalogResponsesDescribeRecordRecordDetail {
    return new ServiceCatalogResponsesDescribeRecordRecordDetail(this.__scope, this.__resources, this.__input);
  }

  public get recordOutputs(): shapes.ServiceCatalogRecordOutput[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecord',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeRecord.RecordOutputs'),
        outputPath: 'RecordOutputs',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          PageToken: this.__input.pageToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecord.RecordOutputs', props);
    return resource.getResponseField('RecordOutputs') as unknown as shapes.ServiceCatalogRecordOutput[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecord',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeRecord.NextPageToken'),
        outputPath: 'NextPageToken',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          PageToken: this.__input.pageToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecord.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ServiceCatalogResponsesDescribeRecordRecordDetail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogDescribeRecordInput) {
  }

  public get recordId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecord',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeRecord.RecordDetail.RecordId'),
        outputPath: 'RecordDetail.RecordId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          PageToken: this.__input.pageToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecord.RecordDetail.RecordId', props);
    return resource.getResponseField('RecordDetail.RecordId') as unknown as string;
  }

  public get provisionedProductName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecord',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeRecord.RecordDetail.ProvisionedProductName'),
        outputPath: 'RecordDetail.ProvisionedProductName',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          PageToken: this.__input.pageToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecord.RecordDetail.ProvisionedProductName', props);
    return resource.getResponseField('RecordDetail.ProvisionedProductName') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecord',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeRecord.RecordDetail.Status'),
        outputPath: 'RecordDetail.Status',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          PageToken: this.__input.pageToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecord.RecordDetail.Status', props);
    return resource.getResponseField('RecordDetail.Status') as unknown as string;
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecord',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeRecord.RecordDetail.CreatedTime'),
        outputPath: 'RecordDetail.CreatedTime',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          PageToken: this.__input.pageToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecord.RecordDetail.CreatedTime', props);
    return resource.getResponseField('RecordDetail.CreatedTime') as unknown as string;
  }

  public get updatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecord',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeRecord.RecordDetail.UpdatedTime'),
        outputPath: 'RecordDetail.UpdatedTime',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          PageToken: this.__input.pageToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecord.RecordDetail.UpdatedTime', props);
    return resource.getResponseField('RecordDetail.UpdatedTime') as unknown as string;
  }

  public get provisionedProductType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecord',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeRecord.RecordDetail.ProvisionedProductType'),
        outputPath: 'RecordDetail.ProvisionedProductType',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          PageToken: this.__input.pageToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecord.RecordDetail.ProvisionedProductType', props);
    return resource.getResponseField('RecordDetail.ProvisionedProductType') as unknown as string;
  }

  public get recordType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecord',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeRecord.RecordDetail.RecordType'),
        outputPath: 'RecordDetail.RecordType',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          PageToken: this.__input.pageToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecord.RecordDetail.RecordType', props);
    return resource.getResponseField('RecordDetail.RecordType') as unknown as string;
  }

  public get provisionedProductId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecord',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeRecord.RecordDetail.ProvisionedProductId'),
        outputPath: 'RecordDetail.ProvisionedProductId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          PageToken: this.__input.pageToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecord.RecordDetail.ProvisionedProductId', props);
    return resource.getResponseField('RecordDetail.ProvisionedProductId') as unknown as string;
  }

  public get productId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecord',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeRecord.RecordDetail.ProductId'),
        outputPath: 'RecordDetail.ProductId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          PageToken: this.__input.pageToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecord.RecordDetail.ProductId', props);
    return resource.getResponseField('RecordDetail.ProductId') as unknown as string;
  }

  public get provisioningArtifactId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecord',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeRecord.RecordDetail.ProvisioningArtifactId'),
        outputPath: 'RecordDetail.ProvisioningArtifactId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          PageToken: this.__input.pageToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecord.RecordDetail.ProvisioningArtifactId', props);
    return resource.getResponseField('RecordDetail.ProvisioningArtifactId') as unknown as string;
  }

  public get pathId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecord',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeRecord.RecordDetail.PathId'),
        outputPath: 'RecordDetail.PathId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          PageToken: this.__input.pageToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecord.RecordDetail.PathId', props);
    return resource.getResponseField('RecordDetail.PathId') as unknown as string;
  }

  public get recordErrors(): shapes.ServiceCatalogRecordError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecord',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeRecord.RecordDetail.RecordErrors'),
        outputPath: 'RecordDetail.RecordErrors',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          PageToken: this.__input.pageToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecord.RecordDetail.RecordErrors', props);
    return resource.getResponseField('RecordDetail.RecordErrors') as unknown as shapes.ServiceCatalogRecordError[];
  }

  public get recordTags(): shapes.ServiceCatalogRecordTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecord',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeRecord.RecordDetail.RecordTags'),
        outputPath: 'RecordDetail.RecordTags',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          PageToken: this.__input.pageToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecord.RecordDetail.RecordTags', props);
    return resource.getResponseField('RecordDetail.RecordTags') as unknown as shapes.ServiceCatalogRecordTag[];
  }

  public get launchRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecord',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeRecord.RecordDetail.LaunchRoleArn'),
        outputPath: 'RecordDetail.LaunchRoleArn',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          PageToken: this.__input.pageToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecord.RecordDetail.LaunchRoleArn', props);
    return resource.getResponseField('RecordDetail.LaunchRoleArn') as unknown as string;
  }

}

export class ServiceCatalogResponsesDescribeServiceAction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogDescribeServiceActionInput) {
  }

  public get serviceActionDetail(): ServiceCatalogResponsesDescribeServiceActionServiceActionDetail {
    return new ServiceCatalogResponsesDescribeServiceActionServiceActionDetail(this.__scope, this.__resources, this.__input);
  }

}

export class ServiceCatalogResponsesDescribeServiceActionServiceActionDetail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogDescribeServiceActionInput) {
  }

  public get serviceActionSummary(): ServiceCatalogResponsesDescribeServiceActionServiceActionDetailServiceActionSummary {
    return new ServiceCatalogResponsesDescribeServiceActionServiceActionDetailServiceActionSummary(this.__scope, this.__resources, this.__input);
  }

  public get definition(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeServiceAction',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeServiceAction.ServiceActionDetail.Definition'),
        outputPath: 'ServiceActionDetail.Definition',
        parameters: {
          Id: this.__input.id,
          AcceptLanguage: this.__input.acceptLanguage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeServiceAction.ServiceActionDetail.Definition', props);
    return resource.getResponseField('ServiceActionDetail.Definition') as unknown as Record<string, string>;
  }

}

export class ServiceCatalogResponsesDescribeServiceActionServiceActionDetailServiceActionSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogDescribeServiceActionInput) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeServiceAction',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeServiceAction.ServiceActionDetail.ServiceActionSummary.Id'),
        outputPath: 'ServiceActionDetail.ServiceActionSummary.Id',
        parameters: {
          Id: this.__input.id,
          AcceptLanguage: this.__input.acceptLanguage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeServiceAction.ServiceActionDetail.ServiceActionSummary.Id', props);
    return resource.getResponseField('ServiceActionDetail.ServiceActionSummary.Id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeServiceAction',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeServiceAction.ServiceActionDetail.ServiceActionSummary.Name'),
        outputPath: 'ServiceActionDetail.ServiceActionSummary.Name',
        parameters: {
          Id: this.__input.id,
          AcceptLanguage: this.__input.acceptLanguage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeServiceAction.ServiceActionDetail.ServiceActionSummary.Name', props);
    return resource.getResponseField('ServiceActionDetail.ServiceActionSummary.Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeServiceAction',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeServiceAction.ServiceActionDetail.ServiceActionSummary.Description'),
        outputPath: 'ServiceActionDetail.ServiceActionSummary.Description',
        parameters: {
          Id: this.__input.id,
          AcceptLanguage: this.__input.acceptLanguage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeServiceAction.ServiceActionDetail.ServiceActionSummary.Description', props);
    return resource.getResponseField('ServiceActionDetail.ServiceActionSummary.Description') as unknown as string;
  }

  public get definitionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeServiceAction',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeServiceAction.ServiceActionDetail.ServiceActionSummary.DefinitionType'),
        outputPath: 'ServiceActionDetail.ServiceActionSummary.DefinitionType',
        parameters: {
          Id: this.__input.id,
          AcceptLanguage: this.__input.acceptLanguage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeServiceAction.ServiceActionDetail.ServiceActionSummary.DefinitionType', props);
    return resource.getResponseField('ServiceActionDetail.ServiceActionSummary.DefinitionType') as unknown as string;
  }

}

export class ServiceCatalogResponsesDescribeServiceActionExecutionParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogDescribeServiceActionExecutionParametersInput) {
  }

  public get serviceActionParameters(): shapes.ServiceCatalogExecutionParameter[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeServiceActionExecutionParameters',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeServiceActionExecutionParameters.ServiceActionParameters'),
        outputPath: 'ServiceActionParameters',
        parameters: {
          ProvisionedProductId: this.__input.provisionedProductId,
          ServiceActionId: this.__input.serviceActionId,
          AcceptLanguage: this.__input.acceptLanguage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeServiceActionExecutionParameters.ServiceActionParameters', props);
    return resource.getResponseField('ServiceActionParameters') as unknown as shapes.ServiceCatalogExecutionParameter[];
  }

}

export class ServiceCatalogResponsesDescribeTagOption {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogDescribeTagOptionInput) {
  }

  public get tagOptionDetail(): ServiceCatalogResponsesDescribeTagOptionTagOptionDetail {
    return new ServiceCatalogResponsesDescribeTagOptionTagOptionDetail(this.__scope, this.__resources, this.__input);
  }

}

export class ServiceCatalogResponsesDescribeTagOptionTagOptionDetail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogDescribeTagOptionInput) {
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTagOption',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeTagOption.TagOptionDetail.Key'),
        outputPath: 'TagOptionDetail.Key',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTagOption.TagOptionDetail.Key', props);
    return resource.getResponseField('TagOptionDetail.Key') as unknown as string;
  }

  public get value(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTagOption',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeTagOption.TagOptionDetail.Value'),
        outputPath: 'TagOptionDetail.Value',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTagOption.TagOptionDetail.Value', props);
    return resource.getResponseField('TagOptionDetail.Value') as unknown as string;
  }

  public get active(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTagOption',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeTagOption.TagOptionDetail.Active'),
        outputPath: 'TagOptionDetail.Active',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTagOption.TagOptionDetail.Active', props);
    return resource.getResponseField('TagOptionDetail.Active') as unknown as boolean;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTagOption',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeTagOption.TagOptionDetail.Id'),
        outputPath: 'TagOptionDetail.Id',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTagOption.TagOptionDetail.Id', props);
    return resource.getResponseField('TagOptionDetail.Id') as unknown as string;
  }

  public get owner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTagOption',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.DescribeTagOption.TagOptionDetail.Owner'),
        outputPath: 'TagOptionDetail.Owner',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTagOption.TagOptionDetail.Owner', props);
    return resource.getResponseField('TagOptionDetail.Owner') as unknown as string;
  }

}

export class ServiceCatalogResponsesExecuteProvisionedProductPlan {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogExecuteProvisionedProductPlanInput) {
  }

  public get recordDetail(): ServiceCatalogResponsesExecuteProvisionedProductPlanRecordDetail {
    return new ServiceCatalogResponsesExecuteProvisionedProductPlanRecordDetail(this.__scope, this.__resources, this.__input);
  }

}

export class ServiceCatalogResponsesExecuteProvisionedProductPlanRecordDetail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogExecuteProvisionedProductPlanInput) {
  }

  public get recordId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeProvisionedProductPlan',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ExecuteProvisionedProductPlan.RecordDetail.RecordId'),
        outputPath: 'RecordDetail.RecordId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PlanId: this.__input.planId,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteProvisionedProductPlan.RecordDetail.RecordId', props);
    return resource.getResponseField('RecordDetail.RecordId') as unknown as string;
  }

  public get provisionedProductName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeProvisionedProductPlan',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ExecuteProvisionedProductPlan.RecordDetail.ProvisionedProductName'),
        outputPath: 'RecordDetail.ProvisionedProductName',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PlanId: this.__input.planId,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteProvisionedProductPlan.RecordDetail.ProvisionedProductName', props);
    return resource.getResponseField('RecordDetail.ProvisionedProductName') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeProvisionedProductPlan',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ExecuteProvisionedProductPlan.RecordDetail.Status'),
        outputPath: 'RecordDetail.Status',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PlanId: this.__input.planId,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteProvisionedProductPlan.RecordDetail.Status', props);
    return resource.getResponseField('RecordDetail.Status') as unknown as string;
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeProvisionedProductPlan',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ExecuteProvisionedProductPlan.RecordDetail.CreatedTime'),
        outputPath: 'RecordDetail.CreatedTime',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PlanId: this.__input.planId,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteProvisionedProductPlan.RecordDetail.CreatedTime', props);
    return resource.getResponseField('RecordDetail.CreatedTime') as unknown as string;
  }

  public get updatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeProvisionedProductPlan',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ExecuteProvisionedProductPlan.RecordDetail.UpdatedTime'),
        outputPath: 'RecordDetail.UpdatedTime',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PlanId: this.__input.planId,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteProvisionedProductPlan.RecordDetail.UpdatedTime', props);
    return resource.getResponseField('RecordDetail.UpdatedTime') as unknown as string;
  }

  public get provisionedProductType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeProvisionedProductPlan',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ExecuteProvisionedProductPlan.RecordDetail.ProvisionedProductType'),
        outputPath: 'RecordDetail.ProvisionedProductType',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PlanId: this.__input.planId,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteProvisionedProductPlan.RecordDetail.ProvisionedProductType', props);
    return resource.getResponseField('RecordDetail.ProvisionedProductType') as unknown as string;
  }

  public get recordType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeProvisionedProductPlan',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ExecuteProvisionedProductPlan.RecordDetail.RecordType'),
        outputPath: 'RecordDetail.RecordType',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PlanId: this.__input.planId,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteProvisionedProductPlan.RecordDetail.RecordType', props);
    return resource.getResponseField('RecordDetail.RecordType') as unknown as string;
  }

  public get provisionedProductId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeProvisionedProductPlan',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ExecuteProvisionedProductPlan.RecordDetail.ProvisionedProductId'),
        outputPath: 'RecordDetail.ProvisionedProductId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PlanId: this.__input.planId,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteProvisionedProductPlan.RecordDetail.ProvisionedProductId', props);
    return resource.getResponseField('RecordDetail.ProvisionedProductId') as unknown as string;
  }

  public get productId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeProvisionedProductPlan',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ExecuteProvisionedProductPlan.RecordDetail.ProductId'),
        outputPath: 'RecordDetail.ProductId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PlanId: this.__input.planId,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteProvisionedProductPlan.RecordDetail.ProductId', props);
    return resource.getResponseField('RecordDetail.ProductId') as unknown as string;
  }

  public get provisioningArtifactId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeProvisionedProductPlan',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ExecuteProvisionedProductPlan.RecordDetail.ProvisioningArtifactId'),
        outputPath: 'RecordDetail.ProvisioningArtifactId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PlanId: this.__input.planId,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteProvisionedProductPlan.RecordDetail.ProvisioningArtifactId', props);
    return resource.getResponseField('RecordDetail.ProvisioningArtifactId') as unknown as string;
  }

  public get pathId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeProvisionedProductPlan',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ExecuteProvisionedProductPlan.RecordDetail.PathId'),
        outputPath: 'RecordDetail.PathId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PlanId: this.__input.planId,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteProvisionedProductPlan.RecordDetail.PathId', props);
    return resource.getResponseField('RecordDetail.PathId') as unknown as string;
  }

  public get recordErrors(): shapes.ServiceCatalogRecordError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeProvisionedProductPlan',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ExecuteProvisionedProductPlan.RecordDetail.RecordErrors'),
        outputPath: 'RecordDetail.RecordErrors',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PlanId: this.__input.planId,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteProvisionedProductPlan.RecordDetail.RecordErrors', props);
    return resource.getResponseField('RecordDetail.RecordErrors') as unknown as shapes.ServiceCatalogRecordError[];
  }

  public get recordTags(): shapes.ServiceCatalogRecordTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeProvisionedProductPlan',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ExecuteProvisionedProductPlan.RecordDetail.RecordTags'),
        outputPath: 'RecordDetail.RecordTags',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PlanId: this.__input.planId,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteProvisionedProductPlan.RecordDetail.RecordTags', props);
    return resource.getResponseField('RecordDetail.RecordTags') as unknown as shapes.ServiceCatalogRecordTag[];
  }

  public get launchRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeProvisionedProductPlan',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ExecuteProvisionedProductPlan.RecordDetail.LaunchRoleArn'),
        outputPath: 'RecordDetail.LaunchRoleArn',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PlanId: this.__input.planId,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteProvisionedProductPlan.RecordDetail.LaunchRoleArn', props);
    return resource.getResponseField('RecordDetail.LaunchRoleArn') as unknown as string;
  }

}

export class ServiceCatalogResponsesExecuteProvisionedProductServiceAction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogExecuteProvisionedProductServiceActionInput) {
  }

  public get recordDetail(): ServiceCatalogResponsesExecuteProvisionedProductServiceActionRecordDetail {
    return new ServiceCatalogResponsesExecuteProvisionedProductServiceActionRecordDetail(this.__scope, this.__resources, this.__input);
  }

}

export class ServiceCatalogResponsesExecuteProvisionedProductServiceActionRecordDetail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogExecuteProvisionedProductServiceActionInput) {
  }

  public get recordId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeProvisionedProductServiceAction',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ExecuteProvisionedProductServiceAction.RecordDetail.RecordId'),
        outputPath: 'RecordDetail.RecordId',
        parameters: {
          ProvisionedProductId: this.__input.provisionedProductId,
          ServiceActionId: this.__input.serviceActionId,
          ExecuteToken: this.__input.executeToken,
          AcceptLanguage: this.__input.acceptLanguage,
          Parameters: this.__input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteProvisionedProductServiceAction.RecordDetail.RecordId', props);
    return resource.getResponseField('RecordDetail.RecordId') as unknown as string;
  }

  public get provisionedProductName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeProvisionedProductServiceAction',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ExecuteProvisionedProductServiceAction.RecordDetail.ProvisionedProductName'),
        outputPath: 'RecordDetail.ProvisionedProductName',
        parameters: {
          ProvisionedProductId: this.__input.provisionedProductId,
          ServiceActionId: this.__input.serviceActionId,
          ExecuteToken: this.__input.executeToken,
          AcceptLanguage: this.__input.acceptLanguage,
          Parameters: this.__input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteProvisionedProductServiceAction.RecordDetail.ProvisionedProductName', props);
    return resource.getResponseField('RecordDetail.ProvisionedProductName') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeProvisionedProductServiceAction',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ExecuteProvisionedProductServiceAction.RecordDetail.Status'),
        outputPath: 'RecordDetail.Status',
        parameters: {
          ProvisionedProductId: this.__input.provisionedProductId,
          ServiceActionId: this.__input.serviceActionId,
          ExecuteToken: this.__input.executeToken,
          AcceptLanguage: this.__input.acceptLanguage,
          Parameters: this.__input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteProvisionedProductServiceAction.RecordDetail.Status', props);
    return resource.getResponseField('RecordDetail.Status') as unknown as string;
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeProvisionedProductServiceAction',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ExecuteProvisionedProductServiceAction.RecordDetail.CreatedTime'),
        outputPath: 'RecordDetail.CreatedTime',
        parameters: {
          ProvisionedProductId: this.__input.provisionedProductId,
          ServiceActionId: this.__input.serviceActionId,
          ExecuteToken: this.__input.executeToken,
          AcceptLanguage: this.__input.acceptLanguage,
          Parameters: this.__input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteProvisionedProductServiceAction.RecordDetail.CreatedTime', props);
    return resource.getResponseField('RecordDetail.CreatedTime') as unknown as string;
  }

  public get updatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeProvisionedProductServiceAction',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ExecuteProvisionedProductServiceAction.RecordDetail.UpdatedTime'),
        outputPath: 'RecordDetail.UpdatedTime',
        parameters: {
          ProvisionedProductId: this.__input.provisionedProductId,
          ServiceActionId: this.__input.serviceActionId,
          ExecuteToken: this.__input.executeToken,
          AcceptLanguage: this.__input.acceptLanguage,
          Parameters: this.__input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteProvisionedProductServiceAction.RecordDetail.UpdatedTime', props);
    return resource.getResponseField('RecordDetail.UpdatedTime') as unknown as string;
  }

  public get provisionedProductType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeProvisionedProductServiceAction',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ExecuteProvisionedProductServiceAction.RecordDetail.ProvisionedProductType'),
        outputPath: 'RecordDetail.ProvisionedProductType',
        parameters: {
          ProvisionedProductId: this.__input.provisionedProductId,
          ServiceActionId: this.__input.serviceActionId,
          ExecuteToken: this.__input.executeToken,
          AcceptLanguage: this.__input.acceptLanguage,
          Parameters: this.__input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteProvisionedProductServiceAction.RecordDetail.ProvisionedProductType', props);
    return resource.getResponseField('RecordDetail.ProvisionedProductType') as unknown as string;
  }

  public get recordType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeProvisionedProductServiceAction',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ExecuteProvisionedProductServiceAction.RecordDetail.RecordType'),
        outputPath: 'RecordDetail.RecordType',
        parameters: {
          ProvisionedProductId: this.__input.provisionedProductId,
          ServiceActionId: this.__input.serviceActionId,
          ExecuteToken: this.__input.executeToken,
          AcceptLanguage: this.__input.acceptLanguage,
          Parameters: this.__input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteProvisionedProductServiceAction.RecordDetail.RecordType', props);
    return resource.getResponseField('RecordDetail.RecordType') as unknown as string;
  }

  public get provisionedProductId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeProvisionedProductServiceAction',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ExecuteProvisionedProductServiceAction.RecordDetail.ProvisionedProductId'),
        outputPath: 'RecordDetail.ProvisionedProductId',
        parameters: {
          ProvisionedProductId: this.__input.provisionedProductId,
          ServiceActionId: this.__input.serviceActionId,
          ExecuteToken: this.__input.executeToken,
          AcceptLanguage: this.__input.acceptLanguage,
          Parameters: this.__input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteProvisionedProductServiceAction.RecordDetail.ProvisionedProductId', props);
    return resource.getResponseField('RecordDetail.ProvisionedProductId') as unknown as string;
  }

  public get productId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeProvisionedProductServiceAction',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ExecuteProvisionedProductServiceAction.RecordDetail.ProductId'),
        outputPath: 'RecordDetail.ProductId',
        parameters: {
          ProvisionedProductId: this.__input.provisionedProductId,
          ServiceActionId: this.__input.serviceActionId,
          ExecuteToken: this.__input.executeToken,
          AcceptLanguage: this.__input.acceptLanguage,
          Parameters: this.__input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteProvisionedProductServiceAction.RecordDetail.ProductId', props);
    return resource.getResponseField('RecordDetail.ProductId') as unknown as string;
  }

  public get provisioningArtifactId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeProvisionedProductServiceAction',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ExecuteProvisionedProductServiceAction.RecordDetail.ProvisioningArtifactId'),
        outputPath: 'RecordDetail.ProvisioningArtifactId',
        parameters: {
          ProvisionedProductId: this.__input.provisionedProductId,
          ServiceActionId: this.__input.serviceActionId,
          ExecuteToken: this.__input.executeToken,
          AcceptLanguage: this.__input.acceptLanguage,
          Parameters: this.__input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteProvisionedProductServiceAction.RecordDetail.ProvisioningArtifactId', props);
    return resource.getResponseField('RecordDetail.ProvisioningArtifactId') as unknown as string;
  }

  public get pathId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeProvisionedProductServiceAction',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ExecuteProvisionedProductServiceAction.RecordDetail.PathId'),
        outputPath: 'RecordDetail.PathId',
        parameters: {
          ProvisionedProductId: this.__input.provisionedProductId,
          ServiceActionId: this.__input.serviceActionId,
          ExecuteToken: this.__input.executeToken,
          AcceptLanguage: this.__input.acceptLanguage,
          Parameters: this.__input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteProvisionedProductServiceAction.RecordDetail.PathId', props);
    return resource.getResponseField('RecordDetail.PathId') as unknown as string;
  }

  public get recordErrors(): shapes.ServiceCatalogRecordError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeProvisionedProductServiceAction',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ExecuteProvisionedProductServiceAction.RecordDetail.RecordErrors'),
        outputPath: 'RecordDetail.RecordErrors',
        parameters: {
          ProvisionedProductId: this.__input.provisionedProductId,
          ServiceActionId: this.__input.serviceActionId,
          ExecuteToken: this.__input.executeToken,
          AcceptLanguage: this.__input.acceptLanguage,
          Parameters: this.__input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteProvisionedProductServiceAction.RecordDetail.RecordErrors', props);
    return resource.getResponseField('RecordDetail.RecordErrors') as unknown as shapes.ServiceCatalogRecordError[];
  }

  public get recordTags(): shapes.ServiceCatalogRecordTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeProvisionedProductServiceAction',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ExecuteProvisionedProductServiceAction.RecordDetail.RecordTags'),
        outputPath: 'RecordDetail.RecordTags',
        parameters: {
          ProvisionedProductId: this.__input.provisionedProductId,
          ServiceActionId: this.__input.serviceActionId,
          ExecuteToken: this.__input.executeToken,
          AcceptLanguage: this.__input.acceptLanguage,
          Parameters: this.__input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteProvisionedProductServiceAction.RecordDetail.RecordTags', props);
    return resource.getResponseField('RecordDetail.RecordTags') as unknown as shapes.ServiceCatalogRecordTag[];
  }

  public get launchRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeProvisionedProductServiceAction',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ExecuteProvisionedProductServiceAction.RecordDetail.LaunchRoleArn'),
        outputPath: 'RecordDetail.LaunchRoleArn',
        parameters: {
          ProvisionedProductId: this.__input.provisionedProductId,
          ServiceActionId: this.__input.serviceActionId,
          ExecuteToken: this.__input.executeToken,
          AcceptLanguage: this.__input.acceptLanguage,
          Parameters: this.__input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteProvisionedProductServiceAction.RecordDetail.LaunchRoleArn', props);
    return resource.getResponseField('RecordDetail.LaunchRoleArn') as unknown as string;
  }

}

export class ServiceCatalogResponsesFetchAwsOrganizationsAccessStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get accessStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAwsOrganizationsAccessStatus',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.GetAWSOrganizationsAccessStatus.AccessStatus'),
        outputPath: 'AccessStatus',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAWSOrganizationsAccessStatus.AccessStatus', props);
    return resource.getResponseField('AccessStatus') as unknown as string;
  }

}

export class ServiceCatalogResponsesFetchProvisionedProductOutputs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogGetProvisionedProductOutputsInput) {
  }

  public get outputs(): shapes.ServiceCatalogRecordOutput[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProvisionedProductOutputs',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.GetProvisionedProductOutputs.Outputs'),
        outputPath: 'Outputs',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProvisionedProductId: this.__input.provisionedProductId,
          ProvisionedProductName: this.__input.provisionedProductName,
          OutputKeys: this.__input.outputKeys,
          PageSize: this.__input.pageSize,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProvisionedProductOutputs.Outputs', props);
    return resource.getResponseField('Outputs') as unknown as shapes.ServiceCatalogRecordOutput[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProvisionedProductOutputs',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.GetProvisionedProductOutputs.NextPageToken'),
        outputPath: 'NextPageToken',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProvisionedProductId: this.__input.provisionedProductId,
          ProvisionedProductName: this.__input.provisionedProductName,
          OutputKeys: this.__input.outputKeys,
          PageSize: this.__input.pageSize,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProvisionedProductOutputs.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ServiceCatalogResponsesImportAsProvisionedProduct {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogImportAsProvisionedProductInput) {
  }

  public get recordDetail(): ServiceCatalogResponsesImportAsProvisionedProductRecordDetail {
    return new ServiceCatalogResponsesImportAsProvisionedProductRecordDetail(this.__scope, this.__resources, this.__input);
  }

}

export class ServiceCatalogResponsesImportAsProvisionedProductRecordDetail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogImportAsProvisionedProductInput) {
  }

  public get recordId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importAsProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ImportAsProvisionedProduct.RecordDetail.RecordId'),
        outputPath: 'RecordDetail.RecordId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisionedProductName: this.__input.provisionedProductName,
          PhysicalId: this.__input.physicalId,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportAsProvisionedProduct.RecordDetail.RecordId', props);
    return resource.getResponseField('RecordDetail.RecordId') as unknown as string;
  }

  public get provisionedProductName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importAsProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ImportAsProvisionedProduct.RecordDetail.ProvisionedProductName'),
        outputPath: 'RecordDetail.ProvisionedProductName',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisionedProductName: this.__input.provisionedProductName,
          PhysicalId: this.__input.physicalId,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportAsProvisionedProduct.RecordDetail.ProvisionedProductName', props);
    return resource.getResponseField('RecordDetail.ProvisionedProductName') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importAsProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ImportAsProvisionedProduct.RecordDetail.Status'),
        outputPath: 'RecordDetail.Status',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisionedProductName: this.__input.provisionedProductName,
          PhysicalId: this.__input.physicalId,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportAsProvisionedProduct.RecordDetail.Status', props);
    return resource.getResponseField('RecordDetail.Status') as unknown as string;
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importAsProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ImportAsProvisionedProduct.RecordDetail.CreatedTime'),
        outputPath: 'RecordDetail.CreatedTime',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisionedProductName: this.__input.provisionedProductName,
          PhysicalId: this.__input.physicalId,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportAsProvisionedProduct.RecordDetail.CreatedTime', props);
    return resource.getResponseField('RecordDetail.CreatedTime') as unknown as string;
  }

  public get updatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importAsProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ImportAsProvisionedProduct.RecordDetail.UpdatedTime'),
        outputPath: 'RecordDetail.UpdatedTime',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisionedProductName: this.__input.provisionedProductName,
          PhysicalId: this.__input.physicalId,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportAsProvisionedProduct.RecordDetail.UpdatedTime', props);
    return resource.getResponseField('RecordDetail.UpdatedTime') as unknown as string;
  }

  public get provisionedProductType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importAsProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ImportAsProvisionedProduct.RecordDetail.ProvisionedProductType'),
        outputPath: 'RecordDetail.ProvisionedProductType',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisionedProductName: this.__input.provisionedProductName,
          PhysicalId: this.__input.physicalId,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportAsProvisionedProduct.RecordDetail.ProvisionedProductType', props);
    return resource.getResponseField('RecordDetail.ProvisionedProductType') as unknown as string;
  }

  public get recordType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importAsProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ImportAsProvisionedProduct.RecordDetail.RecordType'),
        outputPath: 'RecordDetail.RecordType',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisionedProductName: this.__input.provisionedProductName,
          PhysicalId: this.__input.physicalId,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportAsProvisionedProduct.RecordDetail.RecordType', props);
    return resource.getResponseField('RecordDetail.RecordType') as unknown as string;
  }

  public get provisionedProductId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importAsProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ImportAsProvisionedProduct.RecordDetail.ProvisionedProductId'),
        outputPath: 'RecordDetail.ProvisionedProductId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisionedProductName: this.__input.provisionedProductName,
          PhysicalId: this.__input.physicalId,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportAsProvisionedProduct.RecordDetail.ProvisionedProductId', props);
    return resource.getResponseField('RecordDetail.ProvisionedProductId') as unknown as string;
  }

  public get productId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importAsProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ImportAsProvisionedProduct.RecordDetail.ProductId'),
        outputPath: 'RecordDetail.ProductId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisionedProductName: this.__input.provisionedProductName,
          PhysicalId: this.__input.physicalId,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportAsProvisionedProduct.RecordDetail.ProductId', props);
    return resource.getResponseField('RecordDetail.ProductId') as unknown as string;
  }

  public get provisioningArtifactId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importAsProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ImportAsProvisionedProduct.RecordDetail.ProvisioningArtifactId'),
        outputPath: 'RecordDetail.ProvisioningArtifactId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisionedProductName: this.__input.provisionedProductName,
          PhysicalId: this.__input.physicalId,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportAsProvisionedProduct.RecordDetail.ProvisioningArtifactId', props);
    return resource.getResponseField('RecordDetail.ProvisioningArtifactId') as unknown as string;
  }

  public get pathId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importAsProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ImportAsProvisionedProduct.RecordDetail.PathId'),
        outputPath: 'RecordDetail.PathId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisionedProductName: this.__input.provisionedProductName,
          PhysicalId: this.__input.physicalId,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportAsProvisionedProduct.RecordDetail.PathId', props);
    return resource.getResponseField('RecordDetail.PathId') as unknown as string;
  }

  public get recordErrors(): shapes.ServiceCatalogRecordError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importAsProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ImportAsProvisionedProduct.RecordDetail.RecordErrors'),
        outputPath: 'RecordDetail.RecordErrors',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisionedProductName: this.__input.provisionedProductName,
          PhysicalId: this.__input.physicalId,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportAsProvisionedProduct.RecordDetail.RecordErrors', props);
    return resource.getResponseField('RecordDetail.RecordErrors') as unknown as shapes.ServiceCatalogRecordError[];
  }

  public get recordTags(): shapes.ServiceCatalogRecordTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importAsProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ImportAsProvisionedProduct.RecordDetail.RecordTags'),
        outputPath: 'RecordDetail.RecordTags',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisionedProductName: this.__input.provisionedProductName,
          PhysicalId: this.__input.physicalId,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportAsProvisionedProduct.RecordDetail.RecordTags', props);
    return resource.getResponseField('RecordDetail.RecordTags') as unknown as shapes.ServiceCatalogRecordTag[];
  }

  public get launchRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importAsProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ImportAsProvisionedProduct.RecordDetail.LaunchRoleArn'),
        outputPath: 'RecordDetail.LaunchRoleArn',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisionedProductName: this.__input.provisionedProductName,
          PhysicalId: this.__input.physicalId,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportAsProvisionedProduct.RecordDetail.LaunchRoleArn', props);
    return resource.getResponseField('RecordDetail.LaunchRoleArn') as unknown as string;
  }

}

export class ServiceCatalogResponsesListAcceptedPortfolioShares {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogListAcceptedPortfolioSharesInput) {
  }

  public get portfolioDetails(): shapes.ServiceCatalogPortfolioDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAcceptedPortfolioShares',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ListAcceptedPortfolioShares.PortfolioDetails'),
        outputPath: 'PortfolioDetails',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PageToken: this.__input.pageToken,
          PageSize: this.__input.pageSize,
          PortfolioShareType: this.__input.portfolioShareType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAcceptedPortfolioShares.PortfolioDetails', props);
    return resource.getResponseField('PortfolioDetails') as unknown as shapes.ServiceCatalogPortfolioDetail[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAcceptedPortfolioShares',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ListAcceptedPortfolioShares.NextPageToken'),
        outputPath: 'NextPageToken',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PageToken: this.__input.pageToken,
          PageSize: this.__input.pageSize,
          PortfolioShareType: this.__input.portfolioShareType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAcceptedPortfolioShares.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ServiceCatalogResponsesListBudgetsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogListBudgetsForResourceInput) {
  }

  public get budgets(): shapes.ServiceCatalogBudgetDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBudgetsForResource',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ListBudgetsForResource.Budgets'),
        outputPath: 'Budgets',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ResourceId: this.__input.resourceId,
          PageSize: this.__input.pageSize,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBudgetsForResource.Budgets', props);
    return resource.getResponseField('Budgets') as unknown as shapes.ServiceCatalogBudgetDetail[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBudgetsForResource',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ListBudgetsForResource.NextPageToken'),
        outputPath: 'NextPageToken',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ResourceId: this.__input.resourceId,
          PageSize: this.__input.pageSize,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBudgetsForResource.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ServiceCatalogResponsesListConstraintsForPortfolio {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogListConstraintsForPortfolioInput) {
  }

  public get constraintDetails(): shapes.ServiceCatalogConstraintDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listConstraintsForPortfolio',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ListConstraintsForPortfolio.ConstraintDetails'),
        outputPath: 'ConstraintDetails',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PortfolioId: this.__input.portfolioId,
          ProductId: this.__input.productId,
          PageSize: this.__input.pageSize,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListConstraintsForPortfolio.ConstraintDetails', props);
    return resource.getResponseField('ConstraintDetails') as unknown as shapes.ServiceCatalogConstraintDetail[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listConstraintsForPortfolio',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ListConstraintsForPortfolio.NextPageToken'),
        outputPath: 'NextPageToken',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PortfolioId: this.__input.portfolioId,
          ProductId: this.__input.productId,
          PageSize: this.__input.pageSize,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListConstraintsForPortfolio.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ServiceCatalogResponsesListLaunchPaths {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogListLaunchPathsInput) {
  }

  public get launchPathSummaries(): shapes.ServiceCatalogLaunchPathSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLaunchPaths',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ListLaunchPaths.LaunchPathSummaries'),
        outputPath: 'LaunchPathSummaries',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          PageSize: this.__input.pageSize,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLaunchPaths.LaunchPathSummaries', props);
    return resource.getResponseField('LaunchPathSummaries') as unknown as shapes.ServiceCatalogLaunchPathSummary[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLaunchPaths',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ListLaunchPaths.NextPageToken'),
        outputPath: 'NextPageToken',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          PageSize: this.__input.pageSize,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLaunchPaths.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ServiceCatalogResponsesListOrganizationPortfolioAccess {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogListOrganizationPortfolioAccessInput) {
  }

  public get organizationNodes(): shapes.ServiceCatalogOrganizationNode[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listOrganizationPortfolioAccess',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ListOrganizationPortfolioAccess.OrganizationNodes'),
        outputPath: 'OrganizationNodes',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PortfolioId: this.__input.portfolioId,
          OrganizationNodeType: this.__input.organizationNodeType,
          PageToken: this.__input.pageToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListOrganizationPortfolioAccess.OrganizationNodes', props);
    return resource.getResponseField('OrganizationNodes') as unknown as shapes.ServiceCatalogOrganizationNode[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listOrganizationPortfolioAccess',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ListOrganizationPortfolioAccess.NextPageToken'),
        outputPath: 'NextPageToken',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PortfolioId: this.__input.portfolioId,
          OrganizationNodeType: this.__input.organizationNodeType,
          PageToken: this.__input.pageToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListOrganizationPortfolioAccess.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ServiceCatalogResponsesListPortfolioAccess {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogListPortfolioAccessInput) {
  }

  public get accountIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPortfolioAccess',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ListPortfolioAccess.AccountIds'),
        outputPath: 'AccountIds',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PortfolioId: this.__input.portfolioId,
          OrganizationParentId: this.__input.organizationParentId,
          PageToken: this.__input.pageToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPortfolioAccess.AccountIds', props);
    return resource.getResponseField('AccountIds') as unknown as string[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPortfolioAccess',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ListPortfolioAccess.NextPageToken'),
        outputPath: 'NextPageToken',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PortfolioId: this.__input.portfolioId,
          OrganizationParentId: this.__input.organizationParentId,
          PageToken: this.__input.pageToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPortfolioAccess.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ServiceCatalogResponsesListPortfolios {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogListPortfoliosInput) {
  }

  public get portfolioDetails(): shapes.ServiceCatalogPortfolioDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPortfolios',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ListPortfolios.PortfolioDetails'),
        outputPath: 'PortfolioDetails',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PageToken: this.__input.pageToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPortfolios.PortfolioDetails', props);
    return resource.getResponseField('PortfolioDetails') as unknown as shapes.ServiceCatalogPortfolioDetail[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPortfolios',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ListPortfolios.NextPageToken'),
        outputPath: 'NextPageToken',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PageToken: this.__input.pageToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPortfolios.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ServiceCatalogResponsesListPortfoliosForProduct {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogListPortfoliosForProductInput) {
  }

  public get portfolioDetails(): shapes.ServiceCatalogPortfolioDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPortfoliosForProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ListPortfoliosForProduct.PortfolioDetails'),
        outputPath: 'PortfolioDetails',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          PageToken: this.__input.pageToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPortfoliosForProduct.PortfolioDetails', props);
    return resource.getResponseField('PortfolioDetails') as unknown as shapes.ServiceCatalogPortfolioDetail[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPortfoliosForProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ListPortfoliosForProduct.NextPageToken'),
        outputPath: 'NextPageToken',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          PageToken: this.__input.pageToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPortfoliosForProduct.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ServiceCatalogResponsesListPrincipalsForPortfolio {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogListPrincipalsForPortfolioInput) {
  }

  public get principals(): shapes.ServiceCatalogPrincipal[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPrincipalsForPortfolio',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ListPrincipalsForPortfolio.Principals'),
        outputPath: 'Principals',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PortfolioId: this.__input.portfolioId,
          PageSize: this.__input.pageSize,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPrincipalsForPortfolio.Principals', props);
    return resource.getResponseField('Principals') as unknown as shapes.ServiceCatalogPrincipal[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPrincipalsForPortfolio',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ListPrincipalsForPortfolio.NextPageToken'),
        outputPath: 'NextPageToken',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PortfolioId: this.__input.portfolioId,
          PageSize: this.__input.pageSize,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPrincipalsForPortfolio.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ServiceCatalogResponsesListProvisionedProductPlans {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogListProvisionedProductPlansInput) {
  }

  public get provisionedProductPlans(): shapes.ServiceCatalogProvisionedProductPlanSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProvisionedProductPlans',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ListProvisionedProductPlans.ProvisionedProductPlans'),
        outputPath: 'ProvisionedProductPlans',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProvisionProductId: this.__input.provisionProductId,
          PageSize: this.__input.pageSize,
          PageToken: this.__input.pageToken,
          AccessLevelFilter: {
            Key: this.__input.accessLevelFilter?.key,
            Value: this.__input.accessLevelFilter?.value,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProvisionedProductPlans.ProvisionedProductPlans', props);
    return resource.getResponseField('ProvisionedProductPlans') as unknown as shapes.ServiceCatalogProvisionedProductPlanSummary[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProvisionedProductPlans',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ListProvisionedProductPlans.NextPageToken'),
        outputPath: 'NextPageToken',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProvisionProductId: this.__input.provisionProductId,
          PageSize: this.__input.pageSize,
          PageToken: this.__input.pageToken,
          AccessLevelFilter: {
            Key: this.__input.accessLevelFilter?.key,
            Value: this.__input.accessLevelFilter?.value,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProvisionedProductPlans.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ServiceCatalogResponsesListProvisioningArtifacts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogListProvisioningArtifactsInput) {
  }

  public get provisioningArtifactDetails(): shapes.ServiceCatalogProvisioningArtifactDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProvisioningArtifacts',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ListProvisioningArtifacts.ProvisioningArtifactDetails'),
        outputPath: 'ProvisioningArtifactDetails',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProvisioningArtifacts.ProvisioningArtifactDetails', props);
    return resource.getResponseField('ProvisioningArtifactDetails') as unknown as shapes.ServiceCatalogProvisioningArtifactDetail[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProvisioningArtifacts',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ListProvisioningArtifacts.NextPageToken'),
        outputPath: 'NextPageToken',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProvisioningArtifacts.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ServiceCatalogResponsesListProvisioningArtifactsForServiceAction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogListProvisioningArtifactsForServiceActionInput) {
  }

  public get provisioningArtifactViews(): shapes.ServiceCatalogProvisioningArtifactView[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProvisioningArtifactsForServiceAction',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ListProvisioningArtifactsForServiceAction.ProvisioningArtifactViews'),
        outputPath: 'ProvisioningArtifactViews',
        parameters: {
          ServiceActionId: this.__input.serviceActionId,
          PageSize: this.__input.pageSize,
          PageToken: this.__input.pageToken,
          AcceptLanguage: this.__input.acceptLanguage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProvisioningArtifactsForServiceAction.ProvisioningArtifactViews', props);
    return resource.getResponseField('ProvisioningArtifactViews') as unknown as shapes.ServiceCatalogProvisioningArtifactView[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProvisioningArtifactsForServiceAction',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ListProvisioningArtifactsForServiceAction.NextPageToken'),
        outputPath: 'NextPageToken',
        parameters: {
          ServiceActionId: this.__input.serviceActionId,
          PageSize: this.__input.pageSize,
          PageToken: this.__input.pageToken,
          AcceptLanguage: this.__input.acceptLanguage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProvisioningArtifactsForServiceAction.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ServiceCatalogResponsesListRecordHistory {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogListRecordHistoryInput) {
  }

  public get recordDetails(): shapes.ServiceCatalogRecordDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRecordHistory',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ListRecordHistory.RecordDetails'),
        outputPath: 'RecordDetails',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          AccessLevelFilter: {
            Key: this.__input.accessLevelFilter?.key,
            Value: this.__input.accessLevelFilter?.value,
          },
          SearchFilter: {
            Key: this.__input.searchFilter?.key,
            Value: this.__input.searchFilter?.value,
          },
          PageSize: this.__input.pageSize,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRecordHistory.RecordDetails', props);
    return resource.getResponseField('RecordDetails') as unknown as shapes.ServiceCatalogRecordDetail[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRecordHistory',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ListRecordHistory.NextPageToken'),
        outputPath: 'NextPageToken',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          AccessLevelFilter: {
            Key: this.__input.accessLevelFilter?.key,
            Value: this.__input.accessLevelFilter?.value,
          },
          SearchFilter: {
            Key: this.__input.searchFilter?.key,
            Value: this.__input.searchFilter?.value,
          },
          PageSize: this.__input.pageSize,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRecordHistory.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ServiceCatalogResponsesListResourcesForTagOption {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogListResourcesForTagOptionInput) {
  }

  public get resourceDetails(): shapes.ServiceCatalogResourceDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResourcesForTagOption',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ListResourcesForTagOption.ResourceDetails'),
        outputPath: 'ResourceDetails',
        parameters: {
          TagOptionId: this.__input.tagOptionId,
          ResourceType: this.__input.resourceType,
          PageSize: this.__input.pageSize,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResourcesForTagOption.ResourceDetails', props);
    return resource.getResponseField('ResourceDetails') as unknown as shapes.ServiceCatalogResourceDetail[];
  }

  public get pageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResourcesForTagOption',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ListResourcesForTagOption.PageToken'),
        outputPath: 'PageToken',
        parameters: {
          TagOptionId: this.__input.tagOptionId,
          ResourceType: this.__input.resourceType,
          PageSize: this.__input.pageSize,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResourcesForTagOption.PageToken', props);
    return resource.getResponseField('PageToken') as unknown as string;
  }

}

export class ServiceCatalogResponsesListServiceActions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogListServiceActionsInput) {
  }

  public get serviceActionSummaries(): shapes.ServiceCatalogServiceActionSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listServiceActions',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ListServiceActions.ServiceActionSummaries'),
        outputPath: 'ServiceActionSummaries',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PageSize: this.__input.pageSize,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListServiceActions.ServiceActionSummaries', props);
    return resource.getResponseField('ServiceActionSummaries') as unknown as shapes.ServiceCatalogServiceActionSummary[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listServiceActions',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ListServiceActions.NextPageToken'),
        outputPath: 'NextPageToken',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PageSize: this.__input.pageSize,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListServiceActions.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ServiceCatalogResponsesListServiceActionsForProvisioningArtifact {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogListServiceActionsForProvisioningArtifactInput) {
  }

  public get serviceActionSummaries(): shapes.ServiceCatalogServiceActionSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listServiceActionsForProvisioningArtifact',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ListServiceActionsForProvisioningArtifact.ServiceActionSummaries'),
        outputPath: 'ServiceActionSummaries',
        parameters: {
          ProductId: this.__input.productId,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          PageSize: this.__input.pageSize,
          PageToken: this.__input.pageToken,
          AcceptLanguage: this.__input.acceptLanguage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListServiceActionsForProvisioningArtifact.ServiceActionSummaries', props);
    return resource.getResponseField('ServiceActionSummaries') as unknown as shapes.ServiceCatalogServiceActionSummary[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listServiceActionsForProvisioningArtifact',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ListServiceActionsForProvisioningArtifact.NextPageToken'),
        outputPath: 'NextPageToken',
        parameters: {
          ProductId: this.__input.productId,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          PageSize: this.__input.pageSize,
          PageToken: this.__input.pageToken,
          AcceptLanguage: this.__input.acceptLanguage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListServiceActionsForProvisioningArtifact.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ServiceCatalogResponsesListStackInstancesForProvisionedProduct {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogListStackInstancesForProvisionedProductInput) {
  }

  public get stackInstances(): shapes.ServiceCatalogStackInstance[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listStackInstancesForProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ListStackInstancesForProvisionedProduct.StackInstances'),
        outputPath: 'StackInstances',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProvisionedProductId: this.__input.provisionedProductId,
          PageToken: this.__input.pageToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListStackInstancesForProvisionedProduct.StackInstances', props);
    return resource.getResponseField('StackInstances') as unknown as shapes.ServiceCatalogStackInstance[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listStackInstancesForProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ListStackInstancesForProvisionedProduct.NextPageToken'),
        outputPath: 'NextPageToken',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProvisionedProductId: this.__input.provisionedProductId,
          PageToken: this.__input.pageToken,
          PageSize: this.__input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListStackInstancesForProvisionedProduct.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ServiceCatalogResponsesListTagOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogListTagOptionsInput) {
  }

  public get tagOptionDetails(): shapes.ServiceCatalogTagOptionDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagOptions',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ListTagOptions.TagOptionDetails'),
        outputPath: 'TagOptionDetails',
        parameters: {
          Filters: {
            Key: this.__input.filters?.key,
            Value: this.__input.filters?.value,
            Active: this.__input.filters?.active,
          },
          PageSize: this.__input.pageSize,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagOptions.TagOptionDetails', props);
    return resource.getResponseField('TagOptionDetails') as unknown as shapes.ServiceCatalogTagOptionDetail[];
  }

  public get pageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagOptions',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ListTagOptions.PageToken'),
        outputPath: 'PageToken',
        parameters: {
          Filters: {
            Key: this.__input.filters?.key,
            Value: this.__input.filters?.value,
            Active: this.__input.filters?.active,
          },
          PageSize: this.__input.pageSize,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagOptions.PageToken', props);
    return resource.getResponseField('PageToken') as unknown as string;
  }

}

export class ServiceCatalogResponsesProvisionProduct {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogProvisionProductInput) {
  }

  public get recordDetail(): ServiceCatalogResponsesProvisionProductRecordDetail {
    return new ServiceCatalogResponsesProvisionProductRecordDetail(this.__scope, this.__resources, this.__input);
  }

}

export class ServiceCatalogResponsesProvisionProductRecordDetail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogProvisionProductInput) {
  }

  public get recordId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'provisionProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ProvisionProduct.RecordDetail.RecordId'),
        outputPath: 'RecordDetail.RecordId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          ProductName: this.__input.productName,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisioningArtifactName: this.__input.provisioningArtifactName,
          PathId: this.__input.pathId,
          PathName: this.__input.pathName,
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisioningParameters: this.__input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.__input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.__input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.__input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.__input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.__input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.__input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
          },
          Tags: this.__input.tags,
          NotificationArns: this.__input.notificationArns,
          ProvisionToken: this.__input.provisionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ProvisionProduct.RecordDetail.RecordId', props);
    return resource.getResponseField('RecordDetail.RecordId') as unknown as string;
  }

  public get provisionedProductName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'provisionProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ProvisionProduct.RecordDetail.ProvisionedProductName'),
        outputPath: 'RecordDetail.ProvisionedProductName',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          ProductName: this.__input.productName,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisioningArtifactName: this.__input.provisioningArtifactName,
          PathId: this.__input.pathId,
          PathName: this.__input.pathName,
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisioningParameters: this.__input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.__input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.__input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.__input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.__input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.__input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.__input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
          },
          Tags: this.__input.tags,
          NotificationArns: this.__input.notificationArns,
          ProvisionToken: this.__input.provisionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ProvisionProduct.RecordDetail.ProvisionedProductName', props);
    return resource.getResponseField('RecordDetail.ProvisionedProductName') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'provisionProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ProvisionProduct.RecordDetail.Status'),
        outputPath: 'RecordDetail.Status',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          ProductName: this.__input.productName,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisioningArtifactName: this.__input.provisioningArtifactName,
          PathId: this.__input.pathId,
          PathName: this.__input.pathName,
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisioningParameters: this.__input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.__input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.__input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.__input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.__input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.__input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.__input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
          },
          Tags: this.__input.tags,
          NotificationArns: this.__input.notificationArns,
          ProvisionToken: this.__input.provisionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ProvisionProduct.RecordDetail.Status', props);
    return resource.getResponseField('RecordDetail.Status') as unknown as string;
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'provisionProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ProvisionProduct.RecordDetail.CreatedTime'),
        outputPath: 'RecordDetail.CreatedTime',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          ProductName: this.__input.productName,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisioningArtifactName: this.__input.provisioningArtifactName,
          PathId: this.__input.pathId,
          PathName: this.__input.pathName,
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisioningParameters: this.__input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.__input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.__input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.__input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.__input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.__input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.__input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
          },
          Tags: this.__input.tags,
          NotificationArns: this.__input.notificationArns,
          ProvisionToken: this.__input.provisionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ProvisionProduct.RecordDetail.CreatedTime', props);
    return resource.getResponseField('RecordDetail.CreatedTime') as unknown as string;
  }

  public get updatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'provisionProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ProvisionProduct.RecordDetail.UpdatedTime'),
        outputPath: 'RecordDetail.UpdatedTime',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          ProductName: this.__input.productName,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisioningArtifactName: this.__input.provisioningArtifactName,
          PathId: this.__input.pathId,
          PathName: this.__input.pathName,
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisioningParameters: this.__input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.__input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.__input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.__input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.__input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.__input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.__input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
          },
          Tags: this.__input.tags,
          NotificationArns: this.__input.notificationArns,
          ProvisionToken: this.__input.provisionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ProvisionProduct.RecordDetail.UpdatedTime', props);
    return resource.getResponseField('RecordDetail.UpdatedTime') as unknown as string;
  }

  public get provisionedProductType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'provisionProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ProvisionProduct.RecordDetail.ProvisionedProductType'),
        outputPath: 'RecordDetail.ProvisionedProductType',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          ProductName: this.__input.productName,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisioningArtifactName: this.__input.provisioningArtifactName,
          PathId: this.__input.pathId,
          PathName: this.__input.pathName,
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisioningParameters: this.__input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.__input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.__input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.__input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.__input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.__input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.__input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
          },
          Tags: this.__input.tags,
          NotificationArns: this.__input.notificationArns,
          ProvisionToken: this.__input.provisionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ProvisionProduct.RecordDetail.ProvisionedProductType', props);
    return resource.getResponseField('RecordDetail.ProvisionedProductType') as unknown as string;
  }

  public get recordType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'provisionProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ProvisionProduct.RecordDetail.RecordType'),
        outputPath: 'RecordDetail.RecordType',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          ProductName: this.__input.productName,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisioningArtifactName: this.__input.provisioningArtifactName,
          PathId: this.__input.pathId,
          PathName: this.__input.pathName,
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisioningParameters: this.__input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.__input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.__input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.__input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.__input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.__input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.__input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
          },
          Tags: this.__input.tags,
          NotificationArns: this.__input.notificationArns,
          ProvisionToken: this.__input.provisionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ProvisionProduct.RecordDetail.RecordType', props);
    return resource.getResponseField('RecordDetail.RecordType') as unknown as string;
  }

  public get provisionedProductId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'provisionProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ProvisionProduct.RecordDetail.ProvisionedProductId'),
        outputPath: 'RecordDetail.ProvisionedProductId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          ProductName: this.__input.productName,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisioningArtifactName: this.__input.provisioningArtifactName,
          PathId: this.__input.pathId,
          PathName: this.__input.pathName,
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisioningParameters: this.__input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.__input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.__input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.__input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.__input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.__input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.__input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
          },
          Tags: this.__input.tags,
          NotificationArns: this.__input.notificationArns,
          ProvisionToken: this.__input.provisionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ProvisionProduct.RecordDetail.ProvisionedProductId', props);
    return resource.getResponseField('RecordDetail.ProvisionedProductId') as unknown as string;
  }

  public get productId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'provisionProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ProvisionProduct.RecordDetail.ProductId'),
        outputPath: 'RecordDetail.ProductId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          ProductName: this.__input.productName,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisioningArtifactName: this.__input.provisioningArtifactName,
          PathId: this.__input.pathId,
          PathName: this.__input.pathName,
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisioningParameters: this.__input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.__input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.__input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.__input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.__input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.__input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.__input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
          },
          Tags: this.__input.tags,
          NotificationArns: this.__input.notificationArns,
          ProvisionToken: this.__input.provisionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ProvisionProduct.RecordDetail.ProductId', props);
    return resource.getResponseField('RecordDetail.ProductId') as unknown as string;
  }

  public get provisioningArtifactId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'provisionProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ProvisionProduct.RecordDetail.ProvisioningArtifactId'),
        outputPath: 'RecordDetail.ProvisioningArtifactId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          ProductName: this.__input.productName,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisioningArtifactName: this.__input.provisioningArtifactName,
          PathId: this.__input.pathId,
          PathName: this.__input.pathName,
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisioningParameters: this.__input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.__input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.__input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.__input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.__input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.__input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.__input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
          },
          Tags: this.__input.tags,
          NotificationArns: this.__input.notificationArns,
          ProvisionToken: this.__input.provisionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ProvisionProduct.RecordDetail.ProvisioningArtifactId', props);
    return resource.getResponseField('RecordDetail.ProvisioningArtifactId') as unknown as string;
  }

  public get pathId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'provisionProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ProvisionProduct.RecordDetail.PathId'),
        outputPath: 'RecordDetail.PathId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          ProductName: this.__input.productName,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisioningArtifactName: this.__input.provisioningArtifactName,
          PathId: this.__input.pathId,
          PathName: this.__input.pathName,
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisioningParameters: this.__input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.__input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.__input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.__input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.__input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.__input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.__input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
          },
          Tags: this.__input.tags,
          NotificationArns: this.__input.notificationArns,
          ProvisionToken: this.__input.provisionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ProvisionProduct.RecordDetail.PathId', props);
    return resource.getResponseField('RecordDetail.PathId') as unknown as string;
  }

  public get recordErrors(): shapes.ServiceCatalogRecordError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'provisionProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ProvisionProduct.RecordDetail.RecordErrors'),
        outputPath: 'RecordDetail.RecordErrors',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          ProductName: this.__input.productName,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisioningArtifactName: this.__input.provisioningArtifactName,
          PathId: this.__input.pathId,
          PathName: this.__input.pathName,
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisioningParameters: this.__input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.__input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.__input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.__input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.__input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.__input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.__input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
          },
          Tags: this.__input.tags,
          NotificationArns: this.__input.notificationArns,
          ProvisionToken: this.__input.provisionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ProvisionProduct.RecordDetail.RecordErrors', props);
    return resource.getResponseField('RecordDetail.RecordErrors') as unknown as shapes.ServiceCatalogRecordError[];
  }

  public get recordTags(): shapes.ServiceCatalogRecordTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'provisionProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ProvisionProduct.RecordDetail.RecordTags'),
        outputPath: 'RecordDetail.RecordTags',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          ProductName: this.__input.productName,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisioningArtifactName: this.__input.provisioningArtifactName,
          PathId: this.__input.pathId,
          PathName: this.__input.pathName,
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisioningParameters: this.__input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.__input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.__input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.__input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.__input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.__input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.__input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
          },
          Tags: this.__input.tags,
          NotificationArns: this.__input.notificationArns,
          ProvisionToken: this.__input.provisionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ProvisionProduct.RecordDetail.RecordTags', props);
    return resource.getResponseField('RecordDetail.RecordTags') as unknown as shapes.ServiceCatalogRecordTag[];
  }

  public get launchRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'provisionProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ProvisionProduct.RecordDetail.LaunchRoleArn'),
        outputPath: 'RecordDetail.LaunchRoleArn',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          ProductName: this.__input.productName,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisioningArtifactName: this.__input.provisioningArtifactName,
          PathId: this.__input.pathId,
          PathName: this.__input.pathName,
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisioningParameters: this.__input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.__input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.__input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.__input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.__input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.__input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.__input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
          },
          Tags: this.__input.tags,
          NotificationArns: this.__input.notificationArns,
          ProvisionToken: this.__input.provisionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ProvisionProduct.RecordDetail.LaunchRoleArn', props);
    return resource.getResponseField('RecordDetail.LaunchRoleArn') as unknown as string;
  }

}

export class ServiceCatalogResponsesScanProvisionedProducts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogScanProvisionedProductsInput) {
  }

  public get provisionedProducts(): shapes.ServiceCatalogProvisionedProductDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scanProvisionedProducts',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ScanProvisionedProducts.ProvisionedProducts'),
        outputPath: 'ProvisionedProducts',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          AccessLevelFilter: {
            Key: this.__input.accessLevelFilter?.key,
            Value: this.__input.accessLevelFilter?.value,
          },
          PageSize: this.__input.pageSize,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScanProvisionedProducts.ProvisionedProducts', props);
    return resource.getResponseField('ProvisionedProducts') as unknown as shapes.ServiceCatalogProvisionedProductDetail[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scanProvisionedProducts',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.ScanProvisionedProducts.NextPageToken'),
        outputPath: 'NextPageToken',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          AccessLevelFilter: {
            Key: this.__input.accessLevelFilter?.key,
            Value: this.__input.accessLevelFilter?.value,
          },
          PageSize: this.__input.pageSize,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScanProvisionedProducts.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ServiceCatalogResponsesSearchProducts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogSearchProductsInput) {
  }

  public get productViewSummaries(): shapes.ServiceCatalogProductViewSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchProducts',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.SearchProducts.ProductViewSummaries'),
        outputPath: 'ProductViewSummaries',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Filters: this.__input.filters,
          PageSize: this.__input.pageSize,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchProducts.ProductViewSummaries', props);
    return resource.getResponseField('ProductViewSummaries') as unknown as shapes.ServiceCatalogProductViewSummary[];
  }

  public get productViewAggregations(): Record<string, shapes.ServiceCatalogProductViewAggregationValue[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchProducts',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.SearchProducts.ProductViewAggregations'),
        outputPath: 'ProductViewAggregations',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Filters: this.__input.filters,
          PageSize: this.__input.pageSize,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchProducts.ProductViewAggregations', props);
    return resource.getResponseField('ProductViewAggregations') as unknown as Record<string, shapes.ServiceCatalogProductViewAggregationValue[]>;
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchProducts',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.SearchProducts.NextPageToken'),
        outputPath: 'NextPageToken',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Filters: this.__input.filters,
          PageSize: this.__input.pageSize,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchProducts.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ServiceCatalogResponsesSearchProductsAsAdmin {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogSearchProductsAsAdminInput) {
  }

  public get productViewDetails(): shapes.ServiceCatalogProductViewDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchProductsAsAdmin',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.SearchProductsAsAdmin.ProductViewDetails'),
        outputPath: 'ProductViewDetails',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PortfolioId: this.__input.portfolioId,
          Filters: this.__input.filters,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
          PageToken: this.__input.pageToken,
          PageSize: this.__input.pageSize,
          ProductSource: this.__input.productSource,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchProductsAsAdmin.ProductViewDetails', props);
    return resource.getResponseField('ProductViewDetails') as unknown as shapes.ServiceCatalogProductViewDetail[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchProductsAsAdmin',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.SearchProductsAsAdmin.NextPageToken'),
        outputPath: 'NextPageToken',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PortfolioId: this.__input.portfolioId,
          Filters: this.__input.filters,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
          PageToken: this.__input.pageToken,
          PageSize: this.__input.pageSize,
          ProductSource: this.__input.productSource,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchProductsAsAdmin.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ServiceCatalogResponsesSearchProvisionedProducts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogSearchProvisionedProductsInput) {
  }

  public get provisionedProducts(): shapes.ServiceCatalogProvisionedProductAttribute[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchProvisionedProducts',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.SearchProvisionedProducts.ProvisionedProducts'),
        outputPath: 'ProvisionedProducts',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          AccessLevelFilter: {
            Key: this.__input.accessLevelFilter?.key,
            Value: this.__input.accessLevelFilter?.value,
          },
          Filters: this.__input.filters,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
          PageSize: this.__input.pageSize,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchProvisionedProducts.ProvisionedProducts', props);
    return resource.getResponseField('ProvisionedProducts') as unknown as shapes.ServiceCatalogProvisionedProductAttribute[];
  }

  public get totalResultsCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchProvisionedProducts',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.SearchProvisionedProducts.TotalResultsCount'),
        outputPath: 'TotalResultsCount',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          AccessLevelFilter: {
            Key: this.__input.accessLevelFilter?.key,
            Value: this.__input.accessLevelFilter?.value,
          },
          Filters: this.__input.filters,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
          PageSize: this.__input.pageSize,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchProvisionedProducts.TotalResultsCount', props);
    return resource.getResponseField('TotalResultsCount') as unknown as number;
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchProvisionedProducts',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.SearchProvisionedProducts.NextPageToken'),
        outputPath: 'NextPageToken',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          AccessLevelFilter: {
            Key: this.__input.accessLevelFilter?.key,
            Value: this.__input.accessLevelFilter?.value,
          },
          Filters: this.__input.filters,
          SortBy: this.__input.sortBy,
          SortOrder: this.__input.sortOrder,
          PageSize: this.__input.pageSize,
          PageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchProvisionedProducts.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ServiceCatalogResponsesTerminateProvisionedProduct {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogTerminateProvisionedProductInput) {
  }

  public get recordDetail(): ServiceCatalogResponsesTerminateProvisionedProductRecordDetail {
    return new ServiceCatalogResponsesTerminateProvisionedProductRecordDetail(this.__scope, this.__resources, this.__input);
  }

}

export class ServiceCatalogResponsesTerminateProvisionedProductRecordDetail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogTerminateProvisionedProductInput) {
  }

  public get recordId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.TerminateProvisionedProduct.RecordDetail.RecordId'),
        outputPath: 'RecordDetail.RecordId',
        parameters: {
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisionedProductId: this.__input.provisionedProductId,
          TerminateToken: this.__input.terminateToken,
          IgnoreErrors: this.__input.ignoreErrors,
          AcceptLanguage: this.__input.acceptLanguage,
          RetainPhysicalResources: this.__input.retainPhysicalResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateProvisionedProduct.RecordDetail.RecordId', props);
    return resource.getResponseField('RecordDetail.RecordId') as unknown as string;
  }

  public get provisionedProductName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.TerminateProvisionedProduct.RecordDetail.ProvisionedProductName'),
        outputPath: 'RecordDetail.ProvisionedProductName',
        parameters: {
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisionedProductId: this.__input.provisionedProductId,
          TerminateToken: this.__input.terminateToken,
          IgnoreErrors: this.__input.ignoreErrors,
          AcceptLanguage: this.__input.acceptLanguage,
          RetainPhysicalResources: this.__input.retainPhysicalResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateProvisionedProduct.RecordDetail.ProvisionedProductName', props);
    return resource.getResponseField('RecordDetail.ProvisionedProductName') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.TerminateProvisionedProduct.RecordDetail.Status'),
        outputPath: 'RecordDetail.Status',
        parameters: {
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisionedProductId: this.__input.provisionedProductId,
          TerminateToken: this.__input.terminateToken,
          IgnoreErrors: this.__input.ignoreErrors,
          AcceptLanguage: this.__input.acceptLanguage,
          RetainPhysicalResources: this.__input.retainPhysicalResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateProvisionedProduct.RecordDetail.Status', props);
    return resource.getResponseField('RecordDetail.Status') as unknown as string;
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.TerminateProvisionedProduct.RecordDetail.CreatedTime'),
        outputPath: 'RecordDetail.CreatedTime',
        parameters: {
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisionedProductId: this.__input.provisionedProductId,
          TerminateToken: this.__input.terminateToken,
          IgnoreErrors: this.__input.ignoreErrors,
          AcceptLanguage: this.__input.acceptLanguage,
          RetainPhysicalResources: this.__input.retainPhysicalResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateProvisionedProduct.RecordDetail.CreatedTime', props);
    return resource.getResponseField('RecordDetail.CreatedTime') as unknown as string;
  }

  public get updatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.TerminateProvisionedProduct.RecordDetail.UpdatedTime'),
        outputPath: 'RecordDetail.UpdatedTime',
        parameters: {
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisionedProductId: this.__input.provisionedProductId,
          TerminateToken: this.__input.terminateToken,
          IgnoreErrors: this.__input.ignoreErrors,
          AcceptLanguage: this.__input.acceptLanguage,
          RetainPhysicalResources: this.__input.retainPhysicalResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateProvisionedProduct.RecordDetail.UpdatedTime', props);
    return resource.getResponseField('RecordDetail.UpdatedTime') as unknown as string;
  }

  public get provisionedProductType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.TerminateProvisionedProduct.RecordDetail.ProvisionedProductType'),
        outputPath: 'RecordDetail.ProvisionedProductType',
        parameters: {
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisionedProductId: this.__input.provisionedProductId,
          TerminateToken: this.__input.terminateToken,
          IgnoreErrors: this.__input.ignoreErrors,
          AcceptLanguage: this.__input.acceptLanguage,
          RetainPhysicalResources: this.__input.retainPhysicalResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateProvisionedProduct.RecordDetail.ProvisionedProductType', props);
    return resource.getResponseField('RecordDetail.ProvisionedProductType') as unknown as string;
  }

  public get recordType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.TerminateProvisionedProduct.RecordDetail.RecordType'),
        outputPath: 'RecordDetail.RecordType',
        parameters: {
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisionedProductId: this.__input.provisionedProductId,
          TerminateToken: this.__input.terminateToken,
          IgnoreErrors: this.__input.ignoreErrors,
          AcceptLanguage: this.__input.acceptLanguage,
          RetainPhysicalResources: this.__input.retainPhysicalResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateProvisionedProduct.RecordDetail.RecordType', props);
    return resource.getResponseField('RecordDetail.RecordType') as unknown as string;
  }

  public get provisionedProductId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.TerminateProvisionedProduct.RecordDetail.ProvisionedProductId'),
        outputPath: 'RecordDetail.ProvisionedProductId',
        parameters: {
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisionedProductId: this.__input.provisionedProductId,
          TerminateToken: this.__input.terminateToken,
          IgnoreErrors: this.__input.ignoreErrors,
          AcceptLanguage: this.__input.acceptLanguage,
          RetainPhysicalResources: this.__input.retainPhysicalResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateProvisionedProduct.RecordDetail.ProvisionedProductId', props);
    return resource.getResponseField('RecordDetail.ProvisionedProductId') as unknown as string;
  }

  public get productId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.TerminateProvisionedProduct.RecordDetail.ProductId'),
        outputPath: 'RecordDetail.ProductId',
        parameters: {
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisionedProductId: this.__input.provisionedProductId,
          TerminateToken: this.__input.terminateToken,
          IgnoreErrors: this.__input.ignoreErrors,
          AcceptLanguage: this.__input.acceptLanguage,
          RetainPhysicalResources: this.__input.retainPhysicalResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateProvisionedProduct.RecordDetail.ProductId', props);
    return resource.getResponseField('RecordDetail.ProductId') as unknown as string;
  }

  public get provisioningArtifactId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.TerminateProvisionedProduct.RecordDetail.ProvisioningArtifactId'),
        outputPath: 'RecordDetail.ProvisioningArtifactId',
        parameters: {
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisionedProductId: this.__input.provisionedProductId,
          TerminateToken: this.__input.terminateToken,
          IgnoreErrors: this.__input.ignoreErrors,
          AcceptLanguage: this.__input.acceptLanguage,
          RetainPhysicalResources: this.__input.retainPhysicalResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateProvisionedProduct.RecordDetail.ProvisioningArtifactId', props);
    return resource.getResponseField('RecordDetail.ProvisioningArtifactId') as unknown as string;
  }

  public get pathId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.TerminateProvisionedProduct.RecordDetail.PathId'),
        outputPath: 'RecordDetail.PathId',
        parameters: {
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisionedProductId: this.__input.provisionedProductId,
          TerminateToken: this.__input.terminateToken,
          IgnoreErrors: this.__input.ignoreErrors,
          AcceptLanguage: this.__input.acceptLanguage,
          RetainPhysicalResources: this.__input.retainPhysicalResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateProvisionedProduct.RecordDetail.PathId', props);
    return resource.getResponseField('RecordDetail.PathId') as unknown as string;
  }

  public get recordErrors(): shapes.ServiceCatalogRecordError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.TerminateProvisionedProduct.RecordDetail.RecordErrors'),
        outputPath: 'RecordDetail.RecordErrors',
        parameters: {
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisionedProductId: this.__input.provisionedProductId,
          TerminateToken: this.__input.terminateToken,
          IgnoreErrors: this.__input.ignoreErrors,
          AcceptLanguage: this.__input.acceptLanguage,
          RetainPhysicalResources: this.__input.retainPhysicalResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateProvisionedProduct.RecordDetail.RecordErrors', props);
    return resource.getResponseField('RecordDetail.RecordErrors') as unknown as shapes.ServiceCatalogRecordError[];
  }

  public get recordTags(): shapes.ServiceCatalogRecordTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.TerminateProvisionedProduct.RecordDetail.RecordTags'),
        outputPath: 'RecordDetail.RecordTags',
        parameters: {
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisionedProductId: this.__input.provisionedProductId,
          TerminateToken: this.__input.terminateToken,
          IgnoreErrors: this.__input.ignoreErrors,
          AcceptLanguage: this.__input.acceptLanguage,
          RetainPhysicalResources: this.__input.retainPhysicalResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateProvisionedProduct.RecordDetail.RecordTags', props);
    return resource.getResponseField('RecordDetail.RecordTags') as unknown as shapes.ServiceCatalogRecordTag[];
  }

  public get launchRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.TerminateProvisionedProduct.RecordDetail.LaunchRoleArn'),
        outputPath: 'RecordDetail.LaunchRoleArn',
        parameters: {
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisionedProductId: this.__input.provisionedProductId,
          TerminateToken: this.__input.terminateToken,
          IgnoreErrors: this.__input.ignoreErrors,
          AcceptLanguage: this.__input.acceptLanguage,
          RetainPhysicalResources: this.__input.retainPhysicalResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateProvisionedProduct.RecordDetail.LaunchRoleArn', props);
    return resource.getResponseField('RecordDetail.LaunchRoleArn') as unknown as string;
  }

}

export class ServiceCatalogResponsesUpdateConstraint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogUpdateConstraintInput) {
  }

  public get constraintDetail(): ServiceCatalogResponsesUpdateConstraintConstraintDetail {
    return new ServiceCatalogResponsesUpdateConstraintConstraintDetail(this.__scope, this.__resources, this.__input);
  }

  public get constraintParameters(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConstraint',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateConstraint.ConstraintParameters'),
        outputPath: 'ConstraintParameters',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Description: this.__input.description,
          Parameters: this.__input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConstraint.ConstraintParameters', props);
    return resource.getResponseField('ConstraintParameters') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConstraint',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateConstraint.Status'),
        outputPath: 'Status',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Description: this.__input.description,
          Parameters: this.__input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConstraint.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class ServiceCatalogResponsesUpdateConstraintConstraintDetail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogUpdateConstraintInput) {
  }

  public get constraintId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConstraint',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateConstraint.ConstraintDetail.ConstraintId'),
        outputPath: 'ConstraintDetail.ConstraintId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Description: this.__input.description,
          Parameters: this.__input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConstraint.ConstraintDetail.ConstraintId', props);
    return resource.getResponseField('ConstraintDetail.ConstraintId') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConstraint',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateConstraint.ConstraintDetail.Type'),
        outputPath: 'ConstraintDetail.Type',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Description: this.__input.description,
          Parameters: this.__input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConstraint.ConstraintDetail.Type', props);
    return resource.getResponseField('ConstraintDetail.Type') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConstraint',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateConstraint.ConstraintDetail.Description'),
        outputPath: 'ConstraintDetail.Description',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Description: this.__input.description,
          Parameters: this.__input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConstraint.ConstraintDetail.Description', props);
    return resource.getResponseField('ConstraintDetail.Description') as unknown as string;
  }

  public get owner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConstraint',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateConstraint.ConstraintDetail.Owner'),
        outputPath: 'ConstraintDetail.Owner',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Description: this.__input.description,
          Parameters: this.__input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConstraint.ConstraintDetail.Owner', props);
    return resource.getResponseField('ConstraintDetail.Owner') as unknown as string;
  }

  public get productId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConstraint',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateConstraint.ConstraintDetail.ProductId'),
        outputPath: 'ConstraintDetail.ProductId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Description: this.__input.description,
          Parameters: this.__input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConstraint.ConstraintDetail.ProductId', props);
    return resource.getResponseField('ConstraintDetail.ProductId') as unknown as string;
  }

  public get portfolioId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConstraint',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateConstraint.ConstraintDetail.PortfolioId'),
        outputPath: 'ConstraintDetail.PortfolioId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Description: this.__input.description,
          Parameters: this.__input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConstraint.ConstraintDetail.PortfolioId', props);
    return resource.getResponseField('ConstraintDetail.PortfolioId') as unknown as string;
  }

}

export class ServiceCatalogResponsesUpdatePortfolio {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogUpdatePortfolioInput) {
  }

  public get portfolioDetail(): ServiceCatalogResponsesUpdatePortfolioPortfolioDetail {
    return new ServiceCatalogResponsesUpdatePortfolioPortfolioDetail(this.__scope, this.__resources, this.__input);
  }

  public get tags(): shapes.ServiceCatalogTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePortfolio',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdatePortfolio.Tags'),
        outputPath: 'Tags',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          DisplayName: this.__input.displayName,
          Description: this.__input.description,
          ProviderName: this.__input.providerName,
          AddTags: this.__input.addTags,
          RemoveTags: this.__input.removeTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePortfolio.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.ServiceCatalogTag[];
  }

}

export class ServiceCatalogResponsesUpdatePortfolioPortfolioDetail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogUpdatePortfolioInput) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePortfolio',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdatePortfolio.PortfolioDetail.Id'),
        outputPath: 'PortfolioDetail.Id',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          DisplayName: this.__input.displayName,
          Description: this.__input.description,
          ProviderName: this.__input.providerName,
          AddTags: this.__input.addTags,
          RemoveTags: this.__input.removeTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePortfolio.PortfolioDetail.Id', props);
    return resource.getResponseField('PortfolioDetail.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePortfolio',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdatePortfolio.PortfolioDetail.ARN'),
        outputPath: 'PortfolioDetail.ARN',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          DisplayName: this.__input.displayName,
          Description: this.__input.description,
          ProviderName: this.__input.providerName,
          AddTags: this.__input.addTags,
          RemoveTags: this.__input.removeTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePortfolio.PortfolioDetail.ARN', props);
    return resource.getResponseField('PortfolioDetail.ARN') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePortfolio',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdatePortfolio.PortfolioDetail.DisplayName'),
        outputPath: 'PortfolioDetail.DisplayName',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          DisplayName: this.__input.displayName,
          Description: this.__input.description,
          ProviderName: this.__input.providerName,
          AddTags: this.__input.addTags,
          RemoveTags: this.__input.removeTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePortfolio.PortfolioDetail.DisplayName', props);
    return resource.getResponseField('PortfolioDetail.DisplayName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePortfolio',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdatePortfolio.PortfolioDetail.Description'),
        outputPath: 'PortfolioDetail.Description',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          DisplayName: this.__input.displayName,
          Description: this.__input.description,
          ProviderName: this.__input.providerName,
          AddTags: this.__input.addTags,
          RemoveTags: this.__input.removeTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePortfolio.PortfolioDetail.Description', props);
    return resource.getResponseField('PortfolioDetail.Description') as unknown as string;
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePortfolio',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdatePortfolio.PortfolioDetail.CreatedTime'),
        outputPath: 'PortfolioDetail.CreatedTime',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          DisplayName: this.__input.displayName,
          Description: this.__input.description,
          ProviderName: this.__input.providerName,
          AddTags: this.__input.addTags,
          RemoveTags: this.__input.removeTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePortfolio.PortfolioDetail.CreatedTime', props);
    return resource.getResponseField('PortfolioDetail.CreatedTime') as unknown as string;
  }

  public get providerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePortfolio',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdatePortfolio.PortfolioDetail.ProviderName'),
        outputPath: 'PortfolioDetail.ProviderName',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          DisplayName: this.__input.displayName,
          Description: this.__input.description,
          ProviderName: this.__input.providerName,
          AddTags: this.__input.addTags,
          RemoveTags: this.__input.removeTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePortfolio.PortfolioDetail.ProviderName', props);
    return resource.getResponseField('PortfolioDetail.ProviderName') as unknown as string;
  }

}

export class ServiceCatalogResponsesUpdatePortfolioShare {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogUpdatePortfolioShareInput) {
  }

  public get portfolioShareToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePortfolioShare',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdatePortfolioShare.PortfolioShareToken'),
        outputPath: 'PortfolioShareToken',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PortfolioId: this.__input.portfolioId,
          AccountId: this.__input.accountId,
          OrganizationNode: {
            Type: this.__input.organizationNode?.type,
            Value: this.__input.organizationNode?.value,
          },
          ShareTagOptions: this.__input.shareTagOptions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePortfolioShare.PortfolioShareToken', props);
    return resource.getResponseField('PortfolioShareToken') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePortfolioShare',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdatePortfolioShare.Status'),
        outputPath: 'Status',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          PortfolioId: this.__input.portfolioId,
          AccountId: this.__input.accountId,
          OrganizationNode: {
            Type: this.__input.organizationNode?.type,
            Value: this.__input.organizationNode?.value,
          },
          ShareTagOptions: this.__input.shareTagOptions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePortfolioShare.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class ServiceCatalogResponsesUpdateProduct {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogUpdateProductInput) {
  }

  public get productViewDetail(): ServiceCatalogResponsesUpdateProductProductViewDetail {
    return new ServiceCatalogResponsesUpdateProductProductViewDetail(this.__scope, this.__resources, this.__input);
  }

  public get tags(): shapes.ServiceCatalogTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateProduct.Tags'),
        outputPath: 'Tags',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
          Owner: this.__input.owner,
          Description: this.__input.description,
          Distributor: this.__input.distributor,
          SupportDescription: this.__input.supportDescription,
          SupportEmail: this.__input.supportEmail,
          SupportUrl: this.__input.supportUrl,
          AddTags: this.__input.addTags,
          RemoveTags: this.__input.removeTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProduct.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.ServiceCatalogTag[];
  }

}

export class ServiceCatalogResponsesUpdateProductProductViewDetail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogUpdateProductInput) {
  }

  public get productViewSummary(): ServiceCatalogResponsesUpdateProductProductViewDetailProductViewSummary {
    return new ServiceCatalogResponsesUpdateProductProductViewDetailProductViewSummary(this.__scope, this.__resources, this.__input);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateProduct.ProductViewDetail.Status'),
        outputPath: 'ProductViewDetail.Status',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
          Owner: this.__input.owner,
          Description: this.__input.description,
          Distributor: this.__input.distributor,
          SupportDescription: this.__input.supportDescription,
          SupportEmail: this.__input.supportEmail,
          SupportUrl: this.__input.supportUrl,
          AddTags: this.__input.addTags,
          RemoveTags: this.__input.removeTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProduct.ProductViewDetail.Status', props);
    return resource.getResponseField('ProductViewDetail.Status') as unknown as string;
  }

  public get productArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateProduct.ProductViewDetail.ProductARN'),
        outputPath: 'ProductViewDetail.ProductARN',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
          Owner: this.__input.owner,
          Description: this.__input.description,
          Distributor: this.__input.distributor,
          SupportDescription: this.__input.supportDescription,
          SupportEmail: this.__input.supportEmail,
          SupportUrl: this.__input.supportUrl,
          AddTags: this.__input.addTags,
          RemoveTags: this.__input.removeTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProduct.ProductViewDetail.ProductARN', props);
    return resource.getResponseField('ProductViewDetail.ProductARN') as unknown as string;
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateProduct.ProductViewDetail.CreatedTime'),
        outputPath: 'ProductViewDetail.CreatedTime',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
          Owner: this.__input.owner,
          Description: this.__input.description,
          Distributor: this.__input.distributor,
          SupportDescription: this.__input.supportDescription,
          SupportEmail: this.__input.supportEmail,
          SupportUrl: this.__input.supportUrl,
          AddTags: this.__input.addTags,
          RemoveTags: this.__input.removeTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProduct.ProductViewDetail.CreatedTime', props);
    return resource.getResponseField('ProductViewDetail.CreatedTime') as unknown as string;
  }

}

export class ServiceCatalogResponsesUpdateProductProductViewDetailProductViewSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogUpdateProductInput) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateProduct.ProductViewDetail.ProductViewSummary.Id'),
        outputPath: 'ProductViewDetail.ProductViewSummary.Id',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
          Owner: this.__input.owner,
          Description: this.__input.description,
          Distributor: this.__input.distributor,
          SupportDescription: this.__input.supportDescription,
          SupportEmail: this.__input.supportEmail,
          SupportUrl: this.__input.supportUrl,
          AddTags: this.__input.addTags,
          RemoveTags: this.__input.removeTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProduct.ProductViewDetail.ProductViewSummary.Id', props);
    return resource.getResponseField('ProductViewDetail.ProductViewSummary.Id') as unknown as string;
  }

  public get productId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateProduct.ProductViewDetail.ProductViewSummary.ProductId'),
        outputPath: 'ProductViewDetail.ProductViewSummary.ProductId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
          Owner: this.__input.owner,
          Description: this.__input.description,
          Distributor: this.__input.distributor,
          SupportDescription: this.__input.supportDescription,
          SupportEmail: this.__input.supportEmail,
          SupportUrl: this.__input.supportUrl,
          AddTags: this.__input.addTags,
          RemoveTags: this.__input.removeTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProduct.ProductViewDetail.ProductViewSummary.ProductId', props);
    return resource.getResponseField('ProductViewDetail.ProductViewSummary.ProductId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateProduct.ProductViewDetail.ProductViewSummary.Name'),
        outputPath: 'ProductViewDetail.ProductViewSummary.Name',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
          Owner: this.__input.owner,
          Description: this.__input.description,
          Distributor: this.__input.distributor,
          SupportDescription: this.__input.supportDescription,
          SupportEmail: this.__input.supportEmail,
          SupportUrl: this.__input.supportUrl,
          AddTags: this.__input.addTags,
          RemoveTags: this.__input.removeTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProduct.ProductViewDetail.ProductViewSummary.Name', props);
    return resource.getResponseField('ProductViewDetail.ProductViewSummary.Name') as unknown as string;
  }

  public get owner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateProduct.ProductViewDetail.ProductViewSummary.Owner'),
        outputPath: 'ProductViewDetail.ProductViewSummary.Owner',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
          Owner: this.__input.owner,
          Description: this.__input.description,
          Distributor: this.__input.distributor,
          SupportDescription: this.__input.supportDescription,
          SupportEmail: this.__input.supportEmail,
          SupportUrl: this.__input.supportUrl,
          AddTags: this.__input.addTags,
          RemoveTags: this.__input.removeTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProduct.ProductViewDetail.ProductViewSummary.Owner', props);
    return resource.getResponseField('ProductViewDetail.ProductViewSummary.Owner') as unknown as string;
  }

  public get shortDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateProduct.ProductViewDetail.ProductViewSummary.ShortDescription'),
        outputPath: 'ProductViewDetail.ProductViewSummary.ShortDescription',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
          Owner: this.__input.owner,
          Description: this.__input.description,
          Distributor: this.__input.distributor,
          SupportDescription: this.__input.supportDescription,
          SupportEmail: this.__input.supportEmail,
          SupportUrl: this.__input.supportUrl,
          AddTags: this.__input.addTags,
          RemoveTags: this.__input.removeTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProduct.ProductViewDetail.ProductViewSummary.ShortDescription', props);
    return resource.getResponseField('ProductViewDetail.ProductViewSummary.ShortDescription') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateProduct.ProductViewDetail.ProductViewSummary.Type'),
        outputPath: 'ProductViewDetail.ProductViewSummary.Type',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
          Owner: this.__input.owner,
          Description: this.__input.description,
          Distributor: this.__input.distributor,
          SupportDescription: this.__input.supportDescription,
          SupportEmail: this.__input.supportEmail,
          SupportUrl: this.__input.supportUrl,
          AddTags: this.__input.addTags,
          RemoveTags: this.__input.removeTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProduct.ProductViewDetail.ProductViewSummary.Type', props);
    return resource.getResponseField('ProductViewDetail.ProductViewSummary.Type') as unknown as string;
  }

  public get distributor(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateProduct.ProductViewDetail.ProductViewSummary.Distributor'),
        outputPath: 'ProductViewDetail.ProductViewSummary.Distributor',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
          Owner: this.__input.owner,
          Description: this.__input.description,
          Distributor: this.__input.distributor,
          SupportDescription: this.__input.supportDescription,
          SupportEmail: this.__input.supportEmail,
          SupportUrl: this.__input.supportUrl,
          AddTags: this.__input.addTags,
          RemoveTags: this.__input.removeTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProduct.ProductViewDetail.ProductViewSummary.Distributor', props);
    return resource.getResponseField('ProductViewDetail.ProductViewSummary.Distributor') as unknown as string;
  }

  public get hasDefaultPath(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateProduct.ProductViewDetail.ProductViewSummary.HasDefaultPath'),
        outputPath: 'ProductViewDetail.ProductViewSummary.HasDefaultPath',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
          Owner: this.__input.owner,
          Description: this.__input.description,
          Distributor: this.__input.distributor,
          SupportDescription: this.__input.supportDescription,
          SupportEmail: this.__input.supportEmail,
          SupportUrl: this.__input.supportUrl,
          AddTags: this.__input.addTags,
          RemoveTags: this.__input.removeTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProduct.ProductViewDetail.ProductViewSummary.HasDefaultPath', props);
    return resource.getResponseField('ProductViewDetail.ProductViewSummary.HasDefaultPath') as unknown as boolean;
  }

  public get supportEmail(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateProduct.ProductViewDetail.ProductViewSummary.SupportEmail'),
        outputPath: 'ProductViewDetail.ProductViewSummary.SupportEmail',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
          Owner: this.__input.owner,
          Description: this.__input.description,
          Distributor: this.__input.distributor,
          SupportDescription: this.__input.supportDescription,
          SupportEmail: this.__input.supportEmail,
          SupportUrl: this.__input.supportUrl,
          AddTags: this.__input.addTags,
          RemoveTags: this.__input.removeTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProduct.ProductViewDetail.ProductViewSummary.SupportEmail', props);
    return resource.getResponseField('ProductViewDetail.ProductViewSummary.SupportEmail') as unknown as string;
  }

  public get supportDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateProduct.ProductViewDetail.ProductViewSummary.SupportDescription'),
        outputPath: 'ProductViewDetail.ProductViewSummary.SupportDescription',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
          Owner: this.__input.owner,
          Description: this.__input.description,
          Distributor: this.__input.distributor,
          SupportDescription: this.__input.supportDescription,
          SupportEmail: this.__input.supportEmail,
          SupportUrl: this.__input.supportUrl,
          AddTags: this.__input.addTags,
          RemoveTags: this.__input.removeTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProduct.ProductViewDetail.ProductViewSummary.SupportDescription', props);
    return resource.getResponseField('ProductViewDetail.ProductViewSummary.SupportDescription') as unknown as string;
  }

  public get supportUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateProduct.ProductViewDetail.ProductViewSummary.SupportUrl'),
        outputPath: 'ProductViewDetail.ProductViewSummary.SupportUrl',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          Id: this.__input.id,
          Name: this.__input.name,
          Owner: this.__input.owner,
          Description: this.__input.description,
          Distributor: this.__input.distributor,
          SupportDescription: this.__input.supportDescription,
          SupportEmail: this.__input.supportEmail,
          SupportUrl: this.__input.supportUrl,
          AddTags: this.__input.addTags,
          RemoveTags: this.__input.removeTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProduct.ProductViewDetail.ProductViewSummary.SupportUrl', props);
    return resource.getResponseField('ProductViewDetail.ProductViewSummary.SupportUrl') as unknown as string;
  }

}

export class ServiceCatalogResponsesUpdateProvisionedProduct {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogUpdateProvisionedProductInput) {
  }

  public get recordDetail(): ServiceCatalogResponsesUpdateProvisionedProductRecordDetail {
    return new ServiceCatalogResponsesUpdateProvisionedProductRecordDetail(this.__scope, this.__resources, this.__input);
  }

}

export class ServiceCatalogResponsesUpdateProvisionedProductRecordDetail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogUpdateProvisionedProductInput) {
  }

  public get recordId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateProvisionedProduct.RecordDetail.RecordId'),
        outputPath: 'RecordDetail.RecordId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisionedProductId: this.__input.provisionedProductId,
          ProductId: this.__input.productId,
          ProductName: this.__input.productName,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisioningArtifactName: this.__input.provisioningArtifactName,
          PathId: this.__input.pathId,
          PathName: this.__input.pathName,
          ProvisioningParameters: this.__input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.__input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.__input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.__input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.__input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.__input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.__input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
            StackSetOperationType: this.__input.provisioningPreferences?.stackSetOperationType,
          },
          Tags: this.__input.tags,
          UpdateToken: this.__input.updateToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProvisionedProduct.RecordDetail.RecordId', props);
    return resource.getResponseField('RecordDetail.RecordId') as unknown as string;
  }

  public get provisionedProductName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateProvisionedProduct.RecordDetail.ProvisionedProductName'),
        outputPath: 'RecordDetail.ProvisionedProductName',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisionedProductId: this.__input.provisionedProductId,
          ProductId: this.__input.productId,
          ProductName: this.__input.productName,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisioningArtifactName: this.__input.provisioningArtifactName,
          PathId: this.__input.pathId,
          PathName: this.__input.pathName,
          ProvisioningParameters: this.__input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.__input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.__input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.__input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.__input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.__input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.__input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
            StackSetOperationType: this.__input.provisioningPreferences?.stackSetOperationType,
          },
          Tags: this.__input.tags,
          UpdateToken: this.__input.updateToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProvisionedProduct.RecordDetail.ProvisionedProductName', props);
    return resource.getResponseField('RecordDetail.ProvisionedProductName') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateProvisionedProduct.RecordDetail.Status'),
        outputPath: 'RecordDetail.Status',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisionedProductId: this.__input.provisionedProductId,
          ProductId: this.__input.productId,
          ProductName: this.__input.productName,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisioningArtifactName: this.__input.provisioningArtifactName,
          PathId: this.__input.pathId,
          PathName: this.__input.pathName,
          ProvisioningParameters: this.__input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.__input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.__input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.__input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.__input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.__input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.__input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
            StackSetOperationType: this.__input.provisioningPreferences?.stackSetOperationType,
          },
          Tags: this.__input.tags,
          UpdateToken: this.__input.updateToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProvisionedProduct.RecordDetail.Status', props);
    return resource.getResponseField('RecordDetail.Status') as unknown as string;
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateProvisionedProduct.RecordDetail.CreatedTime'),
        outputPath: 'RecordDetail.CreatedTime',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisionedProductId: this.__input.provisionedProductId,
          ProductId: this.__input.productId,
          ProductName: this.__input.productName,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisioningArtifactName: this.__input.provisioningArtifactName,
          PathId: this.__input.pathId,
          PathName: this.__input.pathName,
          ProvisioningParameters: this.__input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.__input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.__input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.__input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.__input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.__input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.__input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
            StackSetOperationType: this.__input.provisioningPreferences?.stackSetOperationType,
          },
          Tags: this.__input.tags,
          UpdateToken: this.__input.updateToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProvisionedProduct.RecordDetail.CreatedTime', props);
    return resource.getResponseField('RecordDetail.CreatedTime') as unknown as string;
  }

  public get updatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateProvisionedProduct.RecordDetail.UpdatedTime'),
        outputPath: 'RecordDetail.UpdatedTime',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisionedProductId: this.__input.provisionedProductId,
          ProductId: this.__input.productId,
          ProductName: this.__input.productName,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisioningArtifactName: this.__input.provisioningArtifactName,
          PathId: this.__input.pathId,
          PathName: this.__input.pathName,
          ProvisioningParameters: this.__input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.__input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.__input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.__input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.__input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.__input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.__input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
            StackSetOperationType: this.__input.provisioningPreferences?.stackSetOperationType,
          },
          Tags: this.__input.tags,
          UpdateToken: this.__input.updateToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProvisionedProduct.RecordDetail.UpdatedTime', props);
    return resource.getResponseField('RecordDetail.UpdatedTime') as unknown as string;
  }

  public get provisionedProductType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateProvisionedProduct.RecordDetail.ProvisionedProductType'),
        outputPath: 'RecordDetail.ProvisionedProductType',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisionedProductId: this.__input.provisionedProductId,
          ProductId: this.__input.productId,
          ProductName: this.__input.productName,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisioningArtifactName: this.__input.provisioningArtifactName,
          PathId: this.__input.pathId,
          PathName: this.__input.pathName,
          ProvisioningParameters: this.__input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.__input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.__input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.__input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.__input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.__input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.__input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
            StackSetOperationType: this.__input.provisioningPreferences?.stackSetOperationType,
          },
          Tags: this.__input.tags,
          UpdateToken: this.__input.updateToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProvisionedProduct.RecordDetail.ProvisionedProductType', props);
    return resource.getResponseField('RecordDetail.ProvisionedProductType') as unknown as string;
  }

  public get recordType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateProvisionedProduct.RecordDetail.RecordType'),
        outputPath: 'RecordDetail.RecordType',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisionedProductId: this.__input.provisionedProductId,
          ProductId: this.__input.productId,
          ProductName: this.__input.productName,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisioningArtifactName: this.__input.provisioningArtifactName,
          PathId: this.__input.pathId,
          PathName: this.__input.pathName,
          ProvisioningParameters: this.__input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.__input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.__input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.__input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.__input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.__input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.__input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
            StackSetOperationType: this.__input.provisioningPreferences?.stackSetOperationType,
          },
          Tags: this.__input.tags,
          UpdateToken: this.__input.updateToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProvisionedProduct.RecordDetail.RecordType', props);
    return resource.getResponseField('RecordDetail.RecordType') as unknown as string;
  }

  public get provisionedProductId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateProvisionedProduct.RecordDetail.ProvisionedProductId'),
        outputPath: 'RecordDetail.ProvisionedProductId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisionedProductId: this.__input.provisionedProductId,
          ProductId: this.__input.productId,
          ProductName: this.__input.productName,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisioningArtifactName: this.__input.provisioningArtifactName,
          PathId: this.__input.pathId,
          PathName: this.__input.pathName,
          ProvisioningParameters: this.__input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.__input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.__input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.__input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.__input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.__input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.__input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
            StackSetOperationType: this.__input.provisioningPreferences?.stackSetOperationType,
          },
          Tags: this.__input.tags,
          UpdateToken: this.__input.updateToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProvisionedProduct.RecordDetail.ProvisionedProductId', props);
    return resource.getResponseField('RecordDetail.ProvisionedProductId') as unknown as string;
  }

  public get productId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateProvisionedProduct.RecordDetail.ProductId'),
        outputPath: 'RecordDetail.ProductId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisionedProductId: this.__input.provisionedProductId,
          ProductId: this.__input.productId,
          ProductName: this.__input.productName,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisioningArtifactName: this.__input.provisioningArtifactName,
          PathId: this.__input.pathId,
          PathName: this.__input.pathName,
          ProvisioningParameters: this.__input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.__input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.__input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.__input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.__input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.__input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.__input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
            StackSetOperationType: this.__input.provisioningPreferences?.stackSetOperationType,
          },
          Tags: this.__input.tags,
          UpdateToken: this.__input.updateToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProvisionedProduct.RecordDetail.ProductId', props);
    return resource.getResponseField('RecordDetail.ProductId') as unknown as string;
  }

  public get provisioningArtifactId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateProvisionedProduct.RecordDetail.ProvisioningArtifactId'),
        outputPath: 'RecordDetail.ProvisioningArtifactId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisionedProductId: this.__input.provisionedProductId,
          ProductId: this.__input.productId,
          ProductName: this.__input.productName,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisioningArtifactName: this.__input.provisioningArtifactName,
          PathId: this.__input.pathId,
          PathName: this.__input.pathName,
          ProvisioningParameters: this.__input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.__input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.__input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.__input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.__input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.__input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.__input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
            StackSetOperationType: this.__input.provisioningPreferences?.stackSetOperationType,
          },
          Tags: this.__input.tags,
          UpdateToken: this.__input.updateToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProvisionedProduct.RecordDetail.ProvisioningArtifactId', props);
    return resource.getResponseField('RecordDetail.ProvisioningArtifactId') as unknown as string;
  }

  public get pathId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateProvisionedProduct.RecordDetail.PathId'),
        outputPath: 'RecordDetail.PathId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisionedProductId: this.__input.provisionedProductId,
          ProductId: this.__input.productId,
          ProductName: this.__input.productName,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisioningArtifactName: this.__input.provisioningArtifactName,
          PathId: this.__input.pathId,
          PathName: this.__input.pathName,
          ProvisioningParameters: this.__input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.__input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.__input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.__input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.__input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.__input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.__input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
            StackSetOperationType: this.__input.provisioningPreferences?.stackSetOperationType,
          },
          Tags: this.__input.tags,
          UpdateToken: this.__input.updateToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProvisionedProduct.RecordDetail.PathId', props);
    return resource.getResponseField('RecordDetail.PathId') as unknown as string;
  }

  public get recordErrors(): shapes.ServiceCatalogRecordError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateProvisionedProduct.RecordDetail.RecordErrors'),
        outputPath: 'RecordDetail.RecordErrors',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisionedProductId: this.__input.provisionedProductId,
          ProductId: this.__input.productId,
          ProductName: this.__input.productName,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisioningArtifactName: this.__input.provisioningArtifactName,
          PathId: this.__input.pathId,
          PathName: this.__input.pathName,
          ProvisioningParameters: this.__input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.__input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.__input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.__input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.__input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.__input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.__input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
            StackSetOperationType: this.__input.provisioningPreferences?.stackSetOperationType,
          },
          Tags: this.__input.tags,
          UpdateToken: this.__input.updateToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProvisionedProduct.RecordDetail.RecordErrors', props);
    return resource.getResponseField('RecordDetail.RecordErrors') as unknown as shapes.ServiceCatalogRecordError[];
  }

  public get recordTags(): shapes.ServiceCatalogRecordTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateProvisionedProduct.RecordDetail.RecordTags'),
        outputPath: 'RecordDetail.RecordTags',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisionedProductId: this.__input.provisionedProductId,
          ProductId: this.__input.productId,
          ProductName: this.__input.productName,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisioningArtifactName: this.__input.provisioningArtifactName,
          PathId: this.__input.pathId,
          PathName: this.__input.pathName,
          ProvisioningParameters: this.__input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.__input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.__input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.__input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.__input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.__input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.__input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
            StackSetOperationType: this.__input.provisioningPreferences?.stackSetOperationType,
          },
          Tags: this.__input.tags,
          UpdateToken: this.__input.updateToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProvisionedProduct.RecordDetail.RecordTags', props);
    return resource.getResponseField('RecordDetail.RecordTags') as unknown as shapes.ServiceCatalogRecordTag[];
  }

  public get launchRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProvisionedProduct',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateProvisionedProduct.RecordDetail.LaunchRoleArn'),
        outputPath: 'RecordDetail.LaunchRoleArn',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProvisionedProductName: this.__input.provisionedProductName,
          ProvisionedProductId: this.__input.provisionedProductId,
          ProductId: this.__input.productId,
          ProductName: this.__input.productName,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          ProvisioningArtifactName: this.__input.provisioningArtifactName,
          PathId: this.__input.pathId,
          PathName: this.__input.pathName,
          ProvisioningParameters: this.__input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.__input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.__input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.__input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.__input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.__input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.__input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
            StackSetOperationType: this.__input.provisioningPreferences?.stackSetOperationType,
          },
          Tags: this.__input.tags,
          UpdateToken: this.__input.updateToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProvisionedProduct.RecordDetail.LaunchRoleArn', props);
    return resource.getResponseField('RecordDetail.LaunchRoleArn') as unknown as string;
  }

}

export class ServiceCatalogResponsesUpdateProvisionedProductProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogUpdateProvisionedProductPropertiesInput) {
  }

  public get provisionedProductId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProvisionedProductProperties',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateProvisionedProductProperties.ProvisionedProductId'),
        outputPath: 'ProvisionedProductId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProvisionedProductId: this.__input.provisionedProductId,
          ProvisionedProductProperties: this.__input.provisionedProductProperties,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProvisionedProductProperties.ProvisionedProductId', props);
    return resource.getResponseField('ProvisionedProductId') as unknown as string;
  }

  public get provisionedProductProperties(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProvisionedProductProperties',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateProvisionedProductProperties.ProvisionedProductProperties'),
        outputPath: 'ProvisionedProductProperties',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProvisionedProductId: this.__input.provisionedProductId,
          ProvisionedProductProperties: this.__input.provisionedProductProperties,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProvisionedProductProperties.ProvisionedProductProperties', props);
    return resource.getResponseField('ProvisionedProductProperties') as unknown as Record<string, string>;
  }

  public get recordId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProvisionedProductProperties',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateProvisionedProductProperties.RecordId'),
        outputPath: 'RecordId',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProvisionedProductId: this.__input.provisionedProductId,
          ProvisionedProductProperties: this.__input.provisionedProductProperties,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProvisionedProductProperties.RecordId', props);
    return resource.getResponseField('RecordId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProvisionedProductProperties',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateProvisionedProductProperties.Status'),
        outputPath: 'Status',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProvisionedProductId: this.__input.provisionedProductId,
          ProvisionedProductProperties: this.__input.provisionedProductProperties,
          IdempotencyToken: this.__input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProvisionedProductProperties.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class ServiceCatalogResponsesUpdateProvisioningArtifact {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogUpdateProvisioningArtifactInput) {
  }

  public get provisioningArtifactDetail(): ServiceCatalogResponsesUpdateProvisioningArtifactProvisioningArtifactDetail {
    return new ServiceCatalogResponsesUpdateProvisioningArtifactProvisioningArtifactDetail(this.__scope, this.__resources, this.__input);
  }

  public get info(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProvisioningArtifact',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateProvisioningArtifact.Info'),
        outputPath: 'Info',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          Name: this.__input.name,
          Description: this.__input.description,
          Active: this.__input.active,
          Guidance: this.__input.guidance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProvisioningArtifact.Info', props);
    return resource.getResponseField('Info') as unknown as Record<string, string>;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProvisioningArtifact',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateProvisioningArtifact.Status'),
        outputPath: 'Status',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          Name: this.__input.name,
          Description: this.__input.description,
          Active: this.__input.active,
          Guidance: this.__input.guidance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProvisioningArtifact.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class ServiceCatalogResponsesUpdateProvisioningArtifactProvisioningArtifactDetail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogUpdateProvisioningArtifactInput) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProvisioningArtifact',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateProvisioningArtifact.ProvisioningArtifactDetail.Id'),
        outputPath: 'ProvisioningArtifactDetail.Id',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          Name: this.__input.name,
          Description: this.__input.description,
          Active: this.__input.active,
          Guidance: this.__input.guidance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProvisioningArtifact.ProvisioningArtifactDetail.Id', props);
    return resource.getResponseField('ProvisioningArtifactDetail.Id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProvisioningArtifact',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateProvisioningArtifact.ProvisioningArtifactDetail.Name'),
        outputPath: 'ProvisioningArtifactDetail.Name',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          Name: this.__input.name,
          Description: this.__input.description,
          Active: this.__input.active,
          Guidance: this.__input.guidance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProvisioningArtifact.ProvisioningArtifactDetail.Name', props);
    return resource.getResponseField('ProvisioningArtifactDetail.Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProvisioningArtifact',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateProvisioningArtifact.ProvisioningArtifactDetail.Description'),
        outputPath: 'ProvisioningArtifactDetail.Description',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          Name: this.__input.name,
          Description: this.__input.description,
          Active: this.__input.active,
          Guidance: this.__input.guidance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProvisioningArtifact.ProvisioningArtifactDetail.Description', props);
    return resource.getResponseField('ProvisioningArtifactDetail.Description') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProvisioningArtifact',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateProvisioningArtifact.ProvisioningArtifactDetail.Type'),
        outputPath: 'ProvisioningArtifactDetail.Type',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          Name: this.__input.name,
          Description: this.__input.description,
          Active: this.__input.active,
          Guidance: this.__input.guidance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProvisioningArtifact.ProvisioningArtifactDetail.Type', props);
    return resource.getResponseField('ProvisioningArtifactDetail.Type') as unknown as string;
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProvisioningArtifact',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateProvisioningArtifact.ProvisioningArtifactDetail.CreatedTime'),
        outputPath: 'ProvisioningArtifactDetail.CreatedTime',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          Name: this.__input.name,
          Description: this.__input.description,
          Active: this.__input.active,
          Guidance: this.__input.guidance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProvisioningArtifact.ProvisioningArtifactDetail.CreatedTime', props);
    return resource.getResponseField('ProvisioningArtifactDetail.CreatedTime') as unknown as string;
  }

  public get active(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProvisioningArtifact',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateProvisioningArtifact.ProvisioningArtifactDetail.Active'),
        outputPath: 'ProvisioningArtifactDetail.Active',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          Name: this.__input.name,
          Description: this.__input.description,
          Active: this.__input.active,
          Guidance: this.__input.guidance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProvisioningArtifact.ProvisioningArtifactDetail.Active', props);
    return resource.getResponseField('ProvisioningArtifactDetail.Active') as unknown as boolean;
  }

  public get guidance(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProvisioningArtifact',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateProvisioningArtifact.ProvisioningArtifactDetail.Guidance'),
        outputPath: 'ProvisioningArtifactDetail.Guidance',
        parameters: {
          AcceptLanguage: this.__input.acceptLanguage,
          ProductId: this.__input.productId,
          ProvisioningArtifactId: this.__input.provisioningArtifactId,
          Name: this.__input.name,
          Description: this.__input.description,
          Active: this.__input.active,
          Guidance: this.__input.guidance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProvisioningArtifact.ProvisioningArtifactDetail.Guidance', props);
    return resource.getResponseField('ProvisioningArtifactDetail.Guidance') as unknown as string;
  }

}

export class ServiceCatalogResponsesUpdateServiceAction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogUpdateServiceActionInput) {
  }

  public get serviceActionDetail(): ServiceCatalogResponsesUpdateServiceActionServiceActionDetail {
    return new ServiceCatalogResponsesUpdateServiceActionServiceActionDetail(this.__scope, this.__resources, this.__input);
  }

}

export class ServiceCatalogResponsesUpdateServiceActionServiceActionDetail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogUpdateServiceActionInput) {
  }

  public get serviceActionSummary(): ServiceCatalogResponsesUpdateServiceActionServiceActionDetailServiceActionSummary {
    return new ServiceCatalogResponsesUpdateServiceActionServiceActionDetailServiceActionSummary(this.__scope, this.__resources, this.__input);
  }

  public get definition(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceAction',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateServiceAction.ServiceActionDetail.Definition'),
        outputPath: 'ServiceActionDetail.Definition',
        parameters: {
          Id: this.__input.id,
          Name: this.__input.name,
          Definition: this.__input.definition,
          Description: this.__input.description,
          AcceptLanguage: this.__input.acceptLanguage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServiceAction.ServiceActionDetail.Definition', props);
    return resource.getResponseField('ServiceActionDetail.Definition') as unknown as Record<string, string>;
  }

}

export class ServiceCatalogResponsesUpdateServiceActionServiceActionDetailServiceActionSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogUpdateServiceActionInput) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceAction',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateServiceAction.ServiceActionDetail.ServiceActionSummary.Id'),
        outputPath: 'ServiceActionDetail.ServiceActionSummary.Id',
        parameters: {
          Id: this.__input.id,
          Name: this.__input.name,
          Definition: this.__input.definition,
          Description: this.__input.description,
          AcceptLanguage: this.__input.acceptLanguage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServiceAction.ServiceActionDetail.ServiceActionSummary.Id', props);
    return resource.getResponseField('ServiceActionDetail.ServiceActionSummary.Id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceAction',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateServiceAction.ServiceActionDetail.ServiceActionSummary.Name'),
        outputPath: 'ServiceActionDetail.ServiceActionSummary.Name',
        parameters: {
          Id: this.__input.id,
          Name: this.__input.name,
          Definition: this.__input.definition,
          Description: this.__input.description,
          AcceptLanguage: this.__input.acceptLanguage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServiceAction.ServiceActionDetail.ServiceActionSummary.Name', props);
    return resource.getResponseField('ServiceActionDetail.ServiceActionSummary.Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceAction',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateServiceAction.ServiceActionDetail.ServiceActionSummary.Description'),
        outputPath: 'ServiceActionDetail.ServiceActionSummary.Description',
        parameters: {
          Id: this.__input.id,
          Name: this.__input.name,
          Definition: this.__input.definition,
          Description: this.__input.description,
          AcceptLanguage: this.__input.acceptLanguage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServiceAction.ServiceActionDetail.ServiceActionSummary.Description', props);
    return resource.getResponseField('ServiceActionDetail.ServiceActionSummary.Description') as unknown as string;
  }

  public get definitionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceAction',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateServiceAction.ServiceActionDetail.ServiceActionSummary.DefinitionType'),
        outputPath: 'ServiceActionDetail.ServiceActionSummary.DefinitionType',
        parameters: {
          Id: this.__input.id,
          Name: this.__input.name,
          Definition: this.__input.definition,
          Description: this.__input.description,
          AcceptLanguage: this.__input.acceptLanguage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServiceAction.ServiceActionDetail.ServiceActionSummary.DefinitionType', props);
    return resource.getResponseField('ServiceActionDetail.ServiceActionSummary.DefinitionType') as unknown as string;
  }

}

export class ServiceCatalogResponsesUpdateTagOption {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogUpdateTagOptionInput) {
  }

  public get tagOptionDetail(): ServiceCatalogResponsesUpdateTagOptionTagOptionDetail {
    return new ServiceCatalogResponsesUpdateTagOptionTagOptionDetail(this.__scope, this.__resources, this.__input);
  }

}

export class ServiceCatalogResponsesUpdateTagOptionTagOptionDetail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogUpdateTagOptionInput) {
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTagOption',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateTagOption.TagOptionDetail.Key'),
        outputPath: 'TagOptionDetail.Key',
        parameters: {
          Id: this.__input.id,
          Value: this.__input.value,
          Active: this.__input.active,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTagOption.TagOptionDetail.Key', props);
    return resource.getResponseField('TagOptionDetail.Key') as unknown as string;
  }

  public get value(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTagOption',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateTagOption.TagOptionDetail.Value'),
        outputPath: 'TagOptionDetail.Value',
        parameters: {
          Id: this.__input.id,
          Value: this.__input.value,
          Active: this.__input.active,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTagOption.TagOptionDetail.Value', props);
    return resource.getResponseField('TagOptionDetail.Value') as unknown as string;
  }

  public get active(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTagOption',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateTagOption.TagOptionDetail.Active'),
        outputPath: 'TagOptionDetail.Active',
        parameters: {
          Id: this.__input.id,
          Value: this.__input.value,
          Active: this.__input.active,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTagOption.TagOptionDetail.Active', props);
    return resource.getResponseField('TagOptionDetail.Active') as unknown as boolean;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTagOption',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateTagOption.TagOptionDetail.Id'),
        outputPath: 'TagOptionDetail.Id',
        parameters: {
          Id: this.__input.id,
          Value: this.__input.value,
          Active: this.__input.active,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTagOption.TagOptionDetail.Id', props);
    return resource.getResponseField('TagOptionDetail.Id') as unknown as string;
  }

  public get owner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTagOption',
        service: 'ServiceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalog.UpdateTagOption.TagOptionDetail.Owner'),
        outputPath: 'TagOptionDetail.Owner',
        parameters: {
          Id: this.__input.id,
          Value: this.__input.value,
          Active: this.__input.active,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTagOption.TagOptionDetail.Owner', props);
    return resource.getResponseField('TagOptionDetail.Owner') as unknown as string;
  }

}

