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

  public batchAssociateServiceActionWithProvisioningArtifact(input: shapes.ServiceCatalogBatchAssociateServiceActionWithProvisioningArtifactInput): ServiceCatalogBatchAssociateServiceActionWithProvisioningArtifact {
    return new ServiceCatalogBatchAssociateServiceActionWithProvisioningArtifact(this, 'BatchAssociateServiceActionWithProvisioningArtifact', this.__resources, input);
  }

  public batchDisassociateServiceActionFromProvisioningArtifact(input: shapes.ServiceCatalogBatchDisassociateServiceActionFromProvisioningArtifactInput): ServiceCatalogBatchDisassociateServiceActionFromProvisioningArtifact {
    return new ServiceCatalogBatchDisassociateServiceActionFromProvisioningArtifact(this, 'BatchDisassociateServiceActionFromProvisioningArtifact', this.__resources, input);
  }

  public copyProduct(input: shapes.ServiceCatalogCopyProductInput): ServiceCatalogCopyProduct {
    return new ServiceCatalogCopyProduct(this, 'CopyProduct', this.__resources, input);
  }

  public createConstraint(input: shapes.ServiceCatalogCreateConstraintInput): ServiceCatalogCreateConstraint {
    return new ServiceCatalogCreateConstraint(this, 'CreateConstraint', this.__resources, input);
  }

  public createPortfolio(input: shapes.ServiceCatalogCreatePortfolioInput): ServiceCatalogCreatePortfolio {
    return new ServiceCatalogCreatePortfolio(this, 'CreatePortfolio', this.__resources, input);
  }

  public createPortfolioShare(input: shapes.ServiceCatalogCreatePortfolioShareInput): ServiceCatalogCreatePortfolioShare {
    return new ServiceCatalogCreatePortfolioShare(this, 'CreatePortfolioShare', this.__resources, input);
  }

  public createProduct(input: shapes.ServiceCatalogCreateProductInput): ServiceCatalogCreateProduct {
    return new ServiceCatalogCreateProduct(this, 'CreateProduct', this.__resources, input);
  }

  public createProvisionedProductPlan(input: shapes.ServiceCatalogCreateProvisionedProductPlanInput): ServiceCatalogCreateProvisionedProductPlan {
    return new ServiceCatalogCreateProvisionedProductPlan(this, 'CreateProvisionedProductPlan', this.__resources, input);
  }

  public createProvisioningArtifact(input: shapes.ServiceCatalogCreateProvisioningArtifactInput): ServiceCatalogCreateProvisioningArtifact {
    return new ServiceCatalogCreateProvisioningArtifact(this, 'CreateProvisioningArtifact', this.__resources, input);
  }

  public createServiceAction(input: shapes.ServiceCatalogCreateServiceActionInput): ServiceCatalogCreateServiceAction {
    return new ServiceCatalogCreateServiceAction(this, 'CreateServiceAction', this.__resources, input);
  }

  public createTagOption(input: shapes.ServiceCatalogCreateTagOptionInput): ServiceCatalogCreateTagOption {
    return new ServiceCatalogCreateTagOption(this, 'CreateTagOption', this.__resources, input);
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

  public deletePortfolioShare(input: shapes.ServiceCatalogDeletePortfolioShareInput): ServiceCatalogDeletePortfolioShare {
    return new ServiceCatalogDeletePortfolioShare(this, 'DeletePortfolioShare', this.__resources, input);
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

  public describeConstraint(input: shapes.ServiceCatalogDescribeConstraintInput): ServiceCatalogDescribeConstraint {
    return new ServiceCatalogDescribeConstraint(this, 'DescribeConstraint', this.__resources, input);
  }

  public describeCopyProductStatus(input: shapes.ServiceCatalogDescribeCopyProductStatusInput): ServiceCatalogDescribeCopyProductStatus {
    return new ServiceCatalogDescribeCopyProductStatus(this, 'DescribeCopyProductStatus', this.__resources, input);
  }

  public describePortfolio(input: shapes.ServiceCatalogDescribePortfolioInput): ServiceCatalogDescribePortfolio {
    return new ServiceCatalogDescribePortfolio(this, 'DescribePortfolio', this.__resources, input);
  }

  public describePortfolioShareStatus(input: shapes.ServiceCatalogDescribePortfolioShareStatusInput): ServiceCatalogDescribePortfolioShareStatus {
    return new ServiceCatalogDescribePortfolioShareStatus(this, 'DescribePortfolioShareStatus', this.__resources, input);
  }

  public describeProduct(input: shapes.ServiceCatalogDescribeProductInput): ServiceCatalogDescribeProduct {
    return new ServiceCatalogDescribeProduct(this, 'DescribeProduct', this.__resources, input);
  }

  public describeProductAsAdmin(input: shapes.ServiceCatalogDescribeProductAsAdminInput): ServiceCatalogDescribeProductAsAdmin {
    return new ServiceCatalogDescribeProductAsAdmin(this, 'DescribeProductAsAdmin', this.__resources, input);
  }

  public describeProductView(input: shapes.ServiceCatalogDescribeProductViewInput): ServiceCatalogDescribeProductView {
    return new ServiceCatalogDescribeProductView(this, 'DescribeProductView', this.__resources, input);
  }

  public describeProvisionedProduct(input: shapes.ServiceCatalogDescribeProvisionedProductInput): ServiceCatalogDescribeProvisionedProduct {
    return new ServiceCatalogDescribeProvisionedProduct(this, 'DescribeProvisionedProduct', this.__resources, input);
  }

  public describeProvisionedProductPlan(input: shapes.ServiceCatalogDescribeProvisionedProductPlanInput): ServiceCatalogDescribeProvisionedProductPlan {
    return new ServiceCatalogDescribeProvisionedProductPlan(this, 'DescribeProvisionedProductPlan', this.__resources, input);
  }

  public describeProvisioningArtifact(input: shapes.ServiceCatalogDescribeProvisioningArtifactInput): ServiceCatalogDescribeProvisioningArtifact {
    return new ServiceCatalogDescribeProvisioningArtifact(this, 'DescribeProvisioningArtifact', this.__resources, input);
  }

  public describeProvisioningParameters(input: shapes.ServiceCatalogDescribeProvisioningParametersInput): ServiceCatalogDescribeProvisioningParameters {
    return new ServiceCatalogDescribeProvisioningParameters(this, 'DescribeProvisioningParameters', this.__resources, input);
  }

  public describeRecord(input: shapes.ServiceCatalogDescribeRecordInput): ServiceCatalogDescribeRecord {
    return new ServiceCatalogDescribeRecord(this, 'DescribeRecord', this.__resources, input);
  }

  public describeServiceAction(input: shapes.ServiceCatalogDescribeServiceActionInput): ServiceCatalogDescribeServiceAction {
    return new ServiceCatalogDescribeServiceAction(this, 'DescribeServiceAction', this.__resources, input);
  }

  public describeServiceActionExecutionParameters(input: shapes.ServiceCatalogDescribeServiceActionExecutionParametersInput): ServiceCatalogDescribeServiceActionExecutionParameters {
    return new ServiceCatalogDescribeServiceActionExecutionParameters(this, 'DescribeServiceActionExecutionParameters', this.__resources, input);
  }

  public describeTagOption(input: shapes.ServiceCatalogDescribeTagOptionInput): ServiceCatalogDescribeTagOption {
    return new ServiceCatalogDescribeTagOption(this, 'DescribeTagOption', this.__resources, input);
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

  public executeProvisionedProductPlan(input: shapes.ServiceCatalogExecuteProvisionedProductPlanInput): ServiceCatalogExecuteProvisionedProductPlan {
    return new ServiceCatalogExecuteProvisionedProductPlan(this, 'ExecuteProvisionedProductPlan', this.__resources, input);
  }

  public executeProvisionedProductServiceAction(input: shapes.ServiceCatalogExecuteProvisionedProductServiceActionInput): ServiceCatalogExecuteProvisionedProductServiceAction {
    return new ServiceCatalogExecuteProvisionedProductServiceAction(this, 'ExecuteProvisionedProductServiceAction', this.__resources, input);
  }

  public fetchAwsOrganizationsAccessStatus(): ServiceCatalogFetchAwsOrganizationsAccessStatus {
    return new ServiceCatalogFetchAwsOrganizationsAccessStatus(this, 'FetchAwsOrganizationsAccessStatus', this.__resources);
  }

  public fetchProvisionedProductOutputs(input: shapes.ServiceCatalogGetProvisionedProductOutputsInput): ServiceCatalogFetchProvisionedProductOutputs {
    return new ServiceCatalogFetchProvisionedProductOutputs(this, 'FetchProvisionedProductOutputs', this.__resources, input);
  }

  public importAsProvisionedProduct(input: shapes.ServiceCatalogImportAsProvisionedProductInput): ServiceCatalogImportAsProvisionedProduct {
    return new ServiceCatalogImportAsProvisionedProduct(this, 'ImportAsProvisionedProduct', this.__resources, input);
  }

  public listAcceptedPortfolioShares(input: shapes.ServiceCatalogListAcceptedPortfolioSharesInput): ServiceCatalogListAcceptedPortfolioShares {
    return new ServiceCatalogListAcceptedPortfolioShares(this, 'ListAcceptedPortfolioShares', this.__resources, input);
  }

  public listBudgetsForResource(input: shapes.ServiceCatalogListBudgetsForResourceInput): ServiceCatalogListBudgetsForResource {
    return new ServiceCatalogListBudgetsForResource(this, 'ListBudgetsForResource', this.__resources, input);
  }

  public listConstraintsForPortfolio(input: shapes.ServiceCatalogListConstraintsForPortfolioInput): ServiceCatalogListConstraintsForPortfolio {
    return new ServiceCatalogListConstraintsForPortfolio(this, 'ListConstraintsForPortfolio', this.__resources, input);
  }

  public listLaunchPaths(input: shapes.ServiceCatalogListLaunchPathsInput): ServiceCatalogListLaunchPaths {
    return new ServiceCatalogListLaunchPaths(this, 'ListLaunchPaths', this.__resources, input);
  }

  public listOrganizationPortfolioAccess(input: shapes.ServiceCatalogListOrganizationPortfolioAccessInput): ServiceCatalogListOrganizationPortfolioAccess {
    return new ServiceCatalogListOrganizationPortfolioAccess(this, 'ListOrganizationPortfolioAccess', this.__resources, input);
  }

  public listPortfolioAccess(input: shapes.ServiceCatalogListPortfolioAccessInput): ServiceCatalogListPortfolioAccess {
    return new ServiceCatalogListPortfolioAccess(this, 'ListPortfolioAccess', this.__resources, input);
  }

  public listPortfolios(input: shapes.ServiceCatalogListPortfoliosInput): ServiceCatalogListPortfolios {
    return new ServiceCatalogListPortfolios(this, 'ListPortfolios', this.__resources, input);
  }

  public listPortfoliosForProduct(input: shapes.ServiceCatalogListPortfoliosForProductInput): ServiceCatalogListPortfoliosForProduct {
    return new ServiceCatalogListPortfoliosForProduct(this, 'ListPortfoliosForProduct', this.__resources, input);
  }

  public listPrincipalsForPortfolio(input: shapes.ServiceCatalogListPrincipalsForPortfolioInput): ServiceCatalogListPrincipalsForPortfolio {
    return new ServiceCatalogListPrincipalsForPortfolio(this, 'ListPrincipalsForPortfolio', this.__resources, input);
  }

  public listProvisionedProductPlans(input: shapes.ServiceCatalogListProvisionedProductPlansInput): ServiceCatalogListProvisionedProductPlans {
    return new ServiceCatalogListProvisionedProductPlans(this, 'ListProvisionedProductPlans', this.__resources, input);
  }

  public listProvisioningArtifacts(input: shapes.ServiceCatalogListProvisioningArtifactsInput): ServiceCatalogListProvisioningArtifacts {
    return new ServiceCatalogListProvisioningArtifacts(this, 'ListProvisioningArtifacts', this.__resources, input);
  }

  public listProvisioningArtifactsForServiceAction(input: shapes.ServiceCatalogListProvisioningArtifactsForServiceActionInput): ServiceCatalogListProvisioningArtifactsForServiceAction {
    return new ServiceCatalogListProvisioningArtifactsForServiceAction(this, 'ListProvisioningArtifactsForServiceAction', this.__resources, input);
  }

  public listRecordHistory(input: shapes.ServiceCatalogListRecordHistoryInput): ServiceCatalogListRecordHistory {
    return new ServiceCatalogListRecordHistory(this, 'ListRecordHistory', this.__resources, input);
  }

  public listResourcesForTagOption(input: shapes.ServiceCatalogListResourcesForTagOptionInput): ServiceCatalogListResourcesForTagOption {
    return new ServiceCatalogListResourcesForTagOption(this, 'ListResourcesForTagOption', this.__resources, input);
  }

  public listServiceActions(input: shapes.ServiceCatalogListServiceActionsInput): ServiceCatalogListServiceActions {
    return new ServiceCatalogListServiceActions(this, 'ListServiceActions', this.__resources, input);
  }

  public listServiceActionsForProvisioningArtifact(input: shapes.ServiceCatalogListServiceActionsForProvisioningArtifactInput): ServiceCatalogListServiceActionsForProvisioningArtifact {
    return new ServiceCatalogListServiceActionsForProvisioningArtifact(this, 'ListServiceActionsForProvisioningArtifact', this.__resources, input);
  }

  public listStackInstancesForProvisionedProduct(input: shapes.ServiceCatalogListStackInstancesForProvisionedProductInput): ServiceCatalogListStackInstancesForProvisionedProduct {
    return new ServiceCatalogListStackInstancesForProvisionedProduct(this, 'ListStackInstancesForProvisionedProduct', this.__resources, input);
  }

  public listTagOptions(input: shapes.ServiceCatalogListTagOptionsInput): ServiceCatalogListTagOptions {
    return new ServiceCatalogListTagOptions(this, 'ListTagOptions', this.__resources, input);
  }

  public provisionProduct(input: shapes.ServiceCatalogProvisionProductInput): ServiceCatalogProvisionProduct {
    return new ServiceCatalogProvisionProduct(this, 'ProvisionProduct', this.__resources, input);
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

  public scanProvisionedProducts(input: shapes.ServiceCatalogScanProvisionedProductsInput): ServiceCatalogScanProvisionedProducts {
    return new ServiceCatalogScanProvisionedProducts(this, 'ScanProvisionedProducts', this.__resources, input);
  }

  public searchProducts(input: shapes.ServiceCatalogSearchProductsInput): ServiceCatalogSearchProducts {
    return new ServiceCatalogSearchProducts(this, 'SearchProducts', this.__resources, input);
  }

  public searchProductsAsAdmin(input: shapes.ServiceCatalogSearchProductsAsAdminInput): ServiceCatalogSearchProductsAsAdmin {
    return new ServiceCatalogSearchProductsAsAdmin(this, 'SearchProductsAsAdmin', this.__resources, input);
  }

  public searchProvisionedProducts(input: shapes.ServiceCatalogSearchProvisionedProductsInput): ServiceCatalogSearchProvisionedProducts {
    return new ServiceCatalogSearchProvisionedProducts(this, 'SearchProvisionedProducts', this.__resources, input);
  }

  public terminateProvisionedProduct(input: shapes.ServiceCatalogTerminateProvisionedProductInput): ServiceCatalogTerminateProvisionedProduct {
    return new ServiceCatalogTerminateProvisionedProduct(this, 'TerminateProvisionedProduct', this.__resources, input);
  }

  public updateConstraint(input: shapes.ServiceCatalogUpdateConstraintInput): ServiceCatalogUpdateConstraint {
    return new ServiceCatalogUpdateConstraint(this, 'UpdateConstraint', this.__resources, input);
  }

  public updatePortfolio(input: shapes.ServiceCatalogUpdatePortfolioInput): ServiceCatalogUpdatePortfolio {
    return new ServiceCatalogUpdatePortfolio(this, 'UpdatePortfolio', this.__resources, input);
  }

  public updateProduct(input: shapes.ServiceCatalogUpdateProductInput): ServiceCatalogUpdateProduct {
    return new ServiceCatalogUpdateProduct(this, 'UpdateProduct', this.__resources, input);
  }

  public updateProvisionedProduct(input: shapes.ServiceCatalogUpdateProvisionedProductInput): ServiceCatalogUpdateProvisionedProduct {
    return new ServiceCatalogUpdateProvisionedProduct(this, 'UpdateProvisionedProduct', this.__resources, input);
  }

  public updateProvisionedProductProperties(input: shapes.ServiceCatalogUpdateProvisionedProductPropertiesInput): ServiceCatalogUpdateProvisionedProductProperties {
    return new ServiceCatalogUpdateProvisionedProductProperties(this, 'UpdateProvisionedProductProperties', this.__resources, input);
  }

  public updateProvisioningArtifact(input: shapes.ServiceCatalogUpdateProvisioningArtifactInput): ServiceCatalogUpdateProvisioningArtifact {
    return new ServiceCatalogUpdateProvisioningArtifact(this, 'UpdateProvisioningArtifact', this.__resources, input);
  }

  public updateServiceAction(input: shapes.ServiceCatalogUpdateServiceActionInput): ServiceCatalogUpdateServiceAction {
    return new ServiceCatalogUpdateServiceAction(this, 'UpdateServiceAction', this.__resources, input);
  }

  public updateTagOption(input: shapes.ServiceCatalogUpdateTagOptionInput): ServiceCatalogUpdateTagOption {
    return new ServiceCatalogUpdateTagOption(this, 'UpdateTagOption', this.__resources, input);
  }

}

export class ServiceCatalogBatchAssociateServiceActionWithProvisioningArtifact extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogBatchAssociateServiceActionWithProvisioningArtifactInput) {
    super(scope, id);
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
          ServiceActionAssociations: this.input.serviceActionAssociations,
          AcceptLanguage: this.input.acceptLanguage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchAssociateServiceActionWithProvisioningArtifact.FailedServiceActionAssociations', props);
    return resource.getResponseField('FailedServiceActionAssociations') as unknown as shapes.ServiceCatalogFailedServiceActionAssociation[];
  }

}

export class ServiceCatalogBatchDisassociateServiceActionFromProvisioningArtifact extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogBatchDisassociateServiceActionFromProvisioningArtifactInput) {
    super(scope, id);
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
          ServiceActionAssociations: this.input.serviceActionAssociations,
          AcceptLanguage: this.input.acceptLanguage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchDisassociateServiceActionFromProvisioningArtifact.FailedServiceActionAssociations', props);
    return resource.getResponseField('FailedServiceActionAssociations') as unknown as shapes.ServiceCatalogFailedServiceActionAssociation[];
  }

}

export class ServiceCatalogCopyProduct extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogCopyProductInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          SourceProductArn: this.input.sourceProductArn,
          TargetProductId: this.input.targetProductId,
          TargetProductName: this.input.targetProductName,
          SourceProvisioningArtifactIdentifiers: this.input.sourceProvisioningArtifactIdentifiers,
          CopyOptions: this.input.copyOptions,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopyProduct.CopyProductToken', props);
    return resource.getResponseField('CopyProductToken') as unknown as string;
  }

}

export class ServiceCatalogCreateConstraint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogCreateConstraintInput) {
    super(scope, id);
  }

  public get constraintDetail(): ServiceCatalogCreateConstraintConstraintDetail {
    return new ServiceCatalogCreateConstraintConstraintDetail(this, 'ConstraintDetail', this.__resources, this.input);
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
          AcceptLanguage: this.input.acceptLanguage,
          PortfolioId: this.input.portfolioId,
          ProductId: this.input.productId,
          Parameters: this.input.parameters,
          Type: this.input.type,
          Description: this.input.description,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConstraint.ConstraintParameters', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          PortfolioId: this.input.portfolioId,
          ProductId: this.input.productId,
          Parameters: this.input.parameters,
          Type: this.input.type,
          Description: this.input.description,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConstraint.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class ServiceCatalogCreateConstraintConstraintDetail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogCreateConstraintInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          PortfolioId: this.input.portfolioId,
          ProductId: this.input.productId,
          Parameters: this.input.parameters,
          Type: this.input.type,
          Description: this.input.description,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConstraint.ConstraintDetail.ConstraintId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          PortfolioId: this.input.portfolioId,
          ProductId: this.input.productId,
          Parameters: this.input.parameters,
          Type: this.input.type,
          Description: this.input.description,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConstraint.ConstraintDetail.Type', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          PortfolioId: this.input.portfolioId,
          ProductId: this.input.productId,
          Parameters: this.input.parameters,
          Type: this.input.type,
          Description: this.input.description,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConstraint.ConstraintDetail.Description', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          PortfolioId: this.input.portfolioId,
          ProductId: this.input.productId,
          Parameters: this.input.parameters,
          Type: this.input.type,
          Description: this.input.description,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConstraint.ConstraintDetail.Owner', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          PortfolioId: this.input.portfolioId,
          ProductId: this.input.productId,
          Parameters: this.input.parameters,
          Type: this.input.type,
          Description: this.input.description,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConstraint.ConstraintDetail.ProductId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          PortfolioId: this.input.portfolioId,
          ProductId: this.input.productId,
          Parameters: this.input.parameters,
          Type: this.input.type,
          Description: this.input.description,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConstraint.ConstraintDetail.PortfolioId', props);
    return resource.getResponseField('ConstraintDetail.PortfolioId') as unknown as string;
  }

}

export class ServiceCatalogCreatePortfolio extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogCreatePortfolioInput) {
    super(scope, id);
  }

  public get portfolioDetail(): ServiceCatalogCreatePortfolioPortfolioDetail {
    return new ServiceCatalogCreatePortfolioPortfolioDetail(this, 'PortfolioDetail', this.__resources, this.input);
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
          AcceptLanguage: this.input.acceptLanguage,
          DisplayName: this.input.displayName,
          Description: this.input.description,
          ProviderName: this.input.providerName,
          Tags: this.input.tags,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePortfolio.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.ServiceCatalogTag[];
  }

}

export class ServiceCatalogCreatePortfolioPortfolioDetail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogCreatePortfolioInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          DisplayName: this.input.displayName,
          Description: this.input.description,
          ProviderName: this.input.providerName,
          Tags: this.input.tags,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePortfolio.PortfolioDetail.Id', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          DisplayName: this.input.displayName,
          Description: this.input.description,
          ProviderName: this.input.providerName,
          Tags: this.input.tags,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePortfolio.PortfolioDetail.ARN', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          DisplayName: this.input.displayName,
          Description: this.input.description,
          ProviderName: this.input.providerName,
          Tags: this.input.tags,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePortfolio.PortfolioDetail.DisplayName', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          DisplayName: this.input.displayName,
          Description: this.input.description,
          ProviderName: this.input.providerName,
          Tags: this.input.tags,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePortfolio.PortfolioDetail.Description', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          DisplayName: this.input.displayName,
          Description: this.input.description,
          ProviderName: this.input.providerName,
          Tags: this.input.tags,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePortfolio.PortfolioDetail.CreatedTime', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          DisplayName: this.input.displayName,
          Description: this.input.description,
          ProviderName: this.input.providerName,
          Tags: this.input.tags,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePortfolio.PortfolioDetail.ProviderName', props);
    return resource.getResponseField('PortfolioDetail.ProviderName') as unknown as string;
  }

}

export class ServiceCatalogCreatePortfolioShare extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogCreatePortfolioShareInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          PortfolioId: this.input.portfolioId,
          AccountId: this.input.accountId,
          OrganizationNode: {
            Type: this.input.organizationNode?.type,
            Value: this.input.organizationNode?.value,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePortfolioShare.PortfolioShareToken', props);
    return resource.getResponseField('PortfolioShareToken') as unknown as string;
  }

}

export class ServiceCatalogCreateProduct extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogCreateProductInput) {
    super(scope, id);
  }

  public get productViewDetail(): ServiceCatalogCreateProductProductViewDetail {
    return new ServiceCatalogCreateProductProductViewDetail(this, 'ProductViewDetail', this.__resources, this.input);
  }

  public get provisioningArtifactDetail(): ServiceCatalogCreateProductProvisioningArtifactDetail {
    return new ServiceCatalogCreateProductProvisioningArtifactDetail(this, 'ProvisioningArtifactDetail', this.__resources, this.input);
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
          AcceptLanguage: this.input.acceptLanguage,
          Name: this.input.name,
          Owner: this.input.owner,
          Description: this.input.description,
          Distributor: this.input.distributor,
          SupportDescription: this.input.supportDescription,
          SupportEmail: this.input.supportEmail,
          SupportUrl: this.input.supportUrl,
          ProductType: this.input.productType,
          Tags: this.input.tags,
          ProvisioningArtifactParameters: {
            Name: this.input.provisioningArtifactParameters.name,
            Description: this.input.provisioningArtifactParameters.description,
            Info: this.input.provisioningArtifactParameters.info,
            Type: this.input.provisioningArtifactParameters.type,
            DisableTemplateValidation: this.input.provisioningArtifactParameters.disableTemplateValidation,
          },
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProduct.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.ServiceCatalogTag[];
  }

}

export class ServiceCatalogCreateProductProductViewDetail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogCreateProductInput) {
    super(scope, id);
  }

  public get productViewSummary(): ServiceCatalogCreateProductProductViewDetailProductViewSummary {
    return new ServiceCatalogCreateProductProductViewDetailProductViewSummary(this, 'ProductViewSummary', this.__resources, this.input);
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
          AcceptLanguage: this.input.acceptLanguage,
          Name: this.input.name,
          Owner: this.input.owner,
          Description: this.input.description,
          Distributor: this.input.distributor,
          SupportDescription: this.input.supportDescription,
          SupportEmail: this.input.supportEmail,
          SupportUrl: this.input.supportUrl,
          ProductType: this.input.productType,
          Tags: this.input.tags,
          ProvisioningArtifactParameters: {
            Name: this.input.provisioningArtifactParameters.name,
            Description: this.input.provisioningArtifactParameters.description,
            Info: this.input.provisioningArtifactParameters.info,
            Type: this.input.provisioningArtifactParameters.type,
            DisableTemplateValidation: this.input.provisioningArtifactParameters.disableTemplateValidation,
          },
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProduct.ProductViewDetail.Status', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Name: this.input.name,
          Owner: this.input.owner,
          Description: this.input.description,
          Distributor: this.input.distributor,
          SupportDescription: this.input.supportDescription,
          SupportEmail: this.input.supportEmail,
          SupportUrl: this.input.supportUrl,
          ProductType: this.input.productType,
          Tags: this.input.tags,
          ProvisioningArtifactParameters: {
            Name: this.input.provisioningArtifactParameters.name,
            Description: this.input.provisioningArtifactParameters.description,
            Info: this.input.provisioningArtifactParameters.info,
            Type: this.input.provisioningArtifactParameters.type,
            DisableTemplateValidation: this.input.provisioningArtifactParameters.disableTemplateValidation,
          },
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProduct.ProductViewDetail.ProductARN', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Name: this.input.name,
          Owner: this.input.owner,
          Description: this.input.description,
          Distributor: this.input.distributor,
          SupportDescription: this.input.supportDescription,
          SupportEmail: this.input.supportEmail,
          SupportUrl: this.input.supportUrl,
          ProductType: this.input.productType,
          Tags: this.input.tags,
          ProvisioningArtifactParameters: {
            Name: this.input.provisioningArtifactParameters.name,
            Description: this.input.provisioningArtifactParameters.description,
            Info: this.input.provisioningArtifactParameters.info,
            Type: this.input.provisioningArtifactParameters.type,
            DisableTemplateValidation: this.input.provisioningArtifactParameters.disableTemplateValidation,
          },
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProduct.ProductViewDetail.CreatedTime', props);
    return resource.getResponseField('ProductViewDetail.CreatedTime') as unknown as string;
  }

}

export class ServiceCatalogCreateProductProductViewDetailProductViewSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogCreateProductInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          Name: this.input.name,
          Owner: this.input.owner,
          Description: this.input.description,
          Distributor: this.input.distributor,
          SupportDescription: this.input.supportDescription,
          SupportEmail: this.input.supportEmail,
          SupportUrl: this.input.supportUrl,
          ProductType: this.input.productType,
          Tags: this.input.tags,
          ProvisioningArtifactParameters: {
            Name: this.input.provisioningArtifactParameters.name,
            Description: this.input.provisioningArtifactParameters.description,
            Info: this.input.provisioningArtifactParameters.info,
            Type: this.input.provisioningArtifactParameters.type,
            DisableTemplateValidation: this.input.provisioningArtifactParameters.disableTemplateValidation,
          },
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProduct.ProductViewDetail.ProductViewSummary.Id', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Name: this.input.name,
          Owner: this.input.owner,
          Description: this.input.description,
          Distributor: this.input.distributor,
          SupportDescription: this.input.supportDescription,
          SupportEmail: this.input.supportEmail,
          SupportUrl: this.input.supportUrl,
          ProductType: this.input.productType,
          Tags: this.input.tags,
          ProvisioningArtifactParameters: {
            Name: this.input.provisioningArtifactParameters.name,
            Description: this.input.provisioningArtifactParameters.description,
            Info: this.input.provisioningArtifactParameters.info,
            Type: this.input.provisioningArtifactParameters.type,
            DisableTemplateValidation: this.input.provisioningArtifactParameters.disableTemplateValidation,
          },
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProduct.ProductViewDetail.ProductViewSummary.ProductId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Name: this.input.name,
          Owner: this.input.owner,
          Description: this.input.description,
          Distributor: this.input.distributor,
          SupportDescription: this.input.supportDescription,
          SupportEmail: this.input.supportEmail,
          SupportUrl: this.input.supportUrl,
          ProductType: this.input.productType,
          Tags: this.input.tags,
          ProvisioningArtifactParameters: {
            Name: this.input.provisioningArtifactParameters.name,
            Description: this.input.provisioningArtifactParameters.description,
            Info: this.input.provisioningArtifactParameters.info,
            Type: this.input.provisioningArtifactParameters.type,
            DisableTemplateValidation: this.input.provisioningArtifactParameters.disableTemplateValidation,
          },
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProduct.ProductViewDetail.ProductViewSummary.Name', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Name: this.input.name,
          Owner: this.input.owner,
          Description: this.input.description,
          Distributor: this.input.distributor,
          SupportDescription: this.input.supportDescription,
          SupportEmail: this.input.supportEmail,
          SupportUrl: this.input.supportUrl,
          ProductType: this.input.productType,
          Tags: this.input.tags,
          ProvisioningArtifactParameters: {
            Name: this.input.provisioningArtifactParameters.name,
            Description: this.input.provisioningArtifactParameters.description,
            Info: this.input.provisioningArtifactParameters.info,
            Type: this.input.provisioningArtifactParameters.type,
            DisableTemplateValidation: this.input.provisioningArtifactParameters.disableTemplateValidation,
          },
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProduct.ProductViewDetail.ProductViewSummary.Owner', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Name: this.input.name,
          Owner: this.input.owner,
          Description: this.input.description,
          Distributor: this.input.distributor,
          SupportDescription: this.input.supportDescription,
          SupportEmail: this.input.supportEmail,
          SupportUrl: this.input.supportUrl,
          ProductType: this.input.productType,
          Tags: this.input.tags,
          ProvisioningArtifactParameters: {
            Name: this.input.provisioningArtifactParameters.name,
            Description: this.input.provisioningArtifactParameters.description,
            Info: this.input.provisioningArtifactParameters.info,
            Type: this.input.provisioningArtifactParameters.type,
            DisableTemplateValidation: this.input.provisioningArtifactParameters.disableTemplateValidation,
          },
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProduct.ProductViewDetail.ProductViewSummary.ShortDescription', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Name: this.input.name,
          Owner: this.input.owner,
          Description: this.input.description,
          Distributor: this.input.distributor,
          SupportDescription: this.input.supportDescription,
          SupportEmail: this.input.supportEmail,
          SupportUrl: this.input.supportUrl,
          ProductType: this.input.productType,
          Tags: this.input.tags,
          ProvisioningArtifactParameters: {
            Name: this.input.provisioningArtifactParameters.name,
            Description: this.input.provisioningArtifactParameters.description,
            Info: this.input.provisioningArtifactParameters.info,
            Type: this.input.provisioningArtifactParameters.type,
            DisableTemplateValidation: this.input.provisioningArtifactParameters.disableTemplateValidation,
          },
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProduct.ProductViewDetail.ProductViewSummary.Type', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Name: this.input.name,
          Owner: this.input.owner,
          Description: this.input.description,
          Distributor: this.input.distributor,
          SupportDescription: this.input.supportDescription,
          SupportEmail: this.input.supportEmail,
          SupportUrl: this.input.supportUrl,
          ProductType: this.input.productType,
          Tags: this.input.tags,
          ProvisioningArtifactParameters: {
            Name: this.input.provisioningArtifactParameters.name,
            Description: this.input.provisioningArtifactParameters.description,
            Info: this.input.provisioningArtifactParameters.info,
            Type: this.input.provisioningArtifactParameters.type,
            DisableTemplateValidation: this.input.provisioningArtifactParameters.disableTemplateValidation,
          },
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProduct.ProductViewDetail.ProductViewSummary.Distributor', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Name: this.input.name,
          Owner: this.input.owner,
          Description: this.input.description,
          Distributor: this.input.distributor,
          SupportDescription: this.input.supportDescription,
          SupportEmail: this.input.supportEmail,
          SupportUrl: this.input.supportUrl,
          ProductType: this.input.productType,
          Tags: this.input.tags,
          ProvisioningArtifactParameters: {
            Name: this.input.provisioningArtifactParameters.name,
            Description: this.input.provisioningArtifactParameters.description,
            Info: this.input.provisioningArtifactParameters.info,
            Type: this.input.provisioningArtifactParameters.type,
            DisableTemplateValidation: this.input.provisioningArtifactParameters.disableTemplateValidation,
          },
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProduct.ProductViewDetail.ProductViewSummary.HasDefaultPath', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Name: this.input.name,
          Owner: this.input.owner,
          Description: this.input.description,
          Distributor: this.input.distributor,
          SupportDescription: this.input.supportDescription,
          SupportEmail: this.input.supportEmail,
          SupportUrl: this.input.supportUrl,
          ProductType: this.input.productType,
          Tags: this.input.tags,
          ProvisioningArtifactParameters: {
            Name: this.input.provisioningArtifactParameters.name,
            Description: this.input.provisioningArtifactParameters.description,
            Info: this.input.provisioningArtifactParameters.info,
            Type: this.input.provisioningArtifactParameters.type,
            DisableTemplateValidation: this.input.provisioningArtifactParameters.disableTemplateValidation,
          },
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProduct.ProductViewDetail.ProductViewSummary.SupportEmail', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Name: this.input.name,
          Owner: this.input.owner,
          Description: this.input.description,
          Distributor: this.input.distributor,
          SupportDescription: this.input.supportDescription,
          SupportEmail: this.input.supportEmail,
          SupportUrl: this.input.supportUrl,
          ProductType: this.input.productType,
          Tags: this.input.tags,
          ProvisioningArtifactParameters: {
            Name: this.input.provisioningArtifactParameters.name,
            Description: this.input.provisioningArtifactParameters.description,
            Info: this.input.provisioningArtifactParameters.info,
            Type: this.input.provisioningArtifactParameters.type,
            DisableTemplateValidation: this.input.provisioningArtifactParameters.disableTemplateValidation,
          },
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProduct.ProductViewDetail.ProductViewSummary.SupportDescription', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Name: this.input.name,
          Owner: this.input.owner,
          Description: this.input.description,
          Distributor: this.input.distributor,
          SupportDescription: this.input.supportDescription,
          SupportEmail: this.input.supportEmail,
          SupportUrl: this.input.supportUrl,
          ProductType: this.input.productType,
          Tags: this.input.tags,
          ProvisioningArtifactParameters: {
            Name: this.input.provisioningArtifactParameters.name,
            Description: this.input.provisioningArtifactParameters.description,
            Info: this.input.provisioningArtifactParameters.info,
            Type: this.input.provisioningArtifactParameters.type,
            DisableTemplateValidation: this.input.provisioningArtifactParameters.disableTemplateValidation,
          },
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProduct.ProductViewDetail.ProductViewSummary.SupportUrl', props);
    return resource.getResponseField('ProductViewDetail.ProductViewSummary.SupportUrl') as unknown as string;
  }

}

export class ServiceCatalogCreateProductProvisioningArtifactDetail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogCreateProductInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          Name: this.input.name,
          Owner: this.input.owner,
          Description: this.input.description,
          Distributor: this.input.distributor,
          SupportDescription: this.input.supportDescription,
          SupportEmail: this.input.supportEmail,
          SupportUrl: this.input.supportUrl,
          ProductType: this.input.productType,
          Tags: this.input.tags,
          ProvisioningArtifactParameters: {
            Name: this.input.provisioningArtifactParameters.name,
            Description: this.input.provisioningArtifactParameters.description,
            Info: this.input.provisioningArtifactParameters.info,
            Type: this.input.provisioningArtifactParameters.type,
            DisableTemplateValidation: this.input.provisioningArtifactParameters.disableTemplateValidation,
          },
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProduct.ProvisioningArtifactDetail.Id', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Name: this.input.name,
          Owner: this.input.owner,
          Description: this.input.description,
          Distributor: this.input.distributor,
          SupportDescription: this.input.supportDescription,
          SupportEmail: this.input.supportEmail,
          SupportUrl: this.input.supportUrl,
          ProductType: this.input.productType,
          Tags: this.input.tags,
          ProvisioningArtifactParameters: {
            Name: this.input.provisioningArtifactParameters.name,
            Description: this.input.provisioningArtifactParameters.description,
            Info: this.input.provisioningArtifactParameters.info,
            Type: this.input.provisioningArtifactParameters.type,
            DisableTemplateValidation: this.input.provisioningArtifactParameters.disableTemplateValidation,
          },
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProduct.ProvisioningArtifactDetail.Name', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Name: this.input.name,
          Owner: this.input.owner,
          Description: this.input.description,
          Distributor: this.input.distributor,
          SupportDescription: this.input.supportDescription,
          SupportEmail: this.input.supportEmail,
          SupportUrl: this.input.supportUrl,
          ProductType: this.input.productType,
          Tags: this.input.tags,
          ProvisioningArtifactParameters: {
            Name: this.input.provisioningArtifactParameters.name,
            Description: this.input.provisioningArtifactParameters.description,
            Info: this.input.provisioningArtifactParameters.info,
            Type: this.input.provisioningArtifactParameters.type,
            DisableTemplateValidation: this.input.provisioningArtifactParameters.disableTemplateValidation,
          },
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProduct.ProvisioningArtifactDetail.Description', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Name: this.input.name,
          Owner: this.input.owner,
          Description: this.input.description,
          Distributor: this.input.distributor,
          SupportDescription: this.input.supportDescription,
          SupportEmail: this.input.supportEmail,
          SupportUrl: this.input.supportUrl,
          ProductType: this.input.productType,
          Tags: this.input.tags,
          ProvisioningArtifactParameters: {
            Name: this.input.provisioningArtifactParameters.name,
            Description: this.input.provisioningArtifactParameters.description,
            Info: this.input.provisioningArtifactParameters.info,
            Type: this.input.provisioningArtifactParameters.type,
            DisableTemplateValidation: this.input.provisioningArtifactParameters.disableTemplateValidation,
          },
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProduct.ProvisioningArtifactDetail.Type', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Name: this.input.name,
          Owner: this.input.owner,
          Description: this.input.description,
          Distributor: this.input.distributor,
          SupportDescription: this.input.supportDescription,
          SupportEmail: this.input.supportEmail,
          SupportUrl: this.input.supportUrl,
          ProductType: this.input.productType,
          Tags: this.input.tags,
          ProvisioningArtifactParameters: {
            Name: this.input.provisioningArtifactParameters.name,
            Description: this.input.provisioningArtifactParameters.description,
            Info: this.input.provisioningArtifactParameters.info,
            Type: this.input.provisioningArtifactParameters.type,
            DisableTemplateValidation: this.input.provisioningArtifactParameters.disableTemplateValidation,
          },
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProduct.ProvisioningArtifactDetail.CreatedTime', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Name: this.input.name,
          Owner: this.input.owner,
          Description: this.input.description,
          Distributor: this.input.distributor,
          SupportDescription: this.input.supportDescription,
          SupportEmail: this.input.supportEmail,
          SupportUrl: this.input.supportUrl,
          ProductType: this.input.productType,
          Tags: this.input.tags,
          ProvisioningArtifactParameters: {
            Name: this.input.provisioningArtifactParameters.name,
            Description: this.input.provisioningArtifactParameters.description,
            Info: this.input.provisioningArtifactParameters.info,
            Type: this.input.provisioningArtifactParameters.type,
            DisableTemplateValidation: this.input.provisioningArtifactParameters.disableTemplateValidation,
          },
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProduct.ProvisioningArtifactDetail.Active', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Name: this.input.name,
          Owner: this.input.owner,
          Description: this.input.description,
          Distributor: this.input.distributor,
          SupportDescription: this.input.supportDescription,
          SupportEmail: this.input.supportEmail,
          SupportUrl: this.input.supportUrl,
          ProductType: this.input.productType,
          Tags: this.input.tags,
          ProvisioningArtifactParameters: {
            Name: this.input.provisioningArtifactParameters.name,
            Description: this.input.provisioningArtifactParameters.description,
            Info: this.input.provisioningArtifactParameters.info,
            Type: this.input.provisioningArtifactParameters.type,
            DisableTemplateValidation: this.input.provisioningArtifactParameters.disableTemplateValidation,
          },
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProduct.ProvisioningArtifactDetail.Guidance', props);
    return resource.getResponseField('ProvisioningArtifactDetail.Guidance') as unknown as string;
  }

}

export class ServiceCatalogCreateProvisionedProductPlan extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogCreateProvisionedProductPlanInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          PlanName: this.input.planName,
          PlanType: this.input.planType,
          NotificationArns: this.input.notificationArns,
          PathId: this.input.pathId,
          ProductId: this.input.productId,
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisioningParameters: this.input.provisioningParameters,
          IdempotencyToken: this.input.idempotencyToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProvisionedProductPlan.PlanName', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          PlanName: this.input.planName,
          PlanType: this.input.planType,
          NotificationArns: this.input.notificationArns,
          PathId: this.input.pathId,
          ProductId: this.input.productId,
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisioningParameters: this.input.provisioningParameters,
          IdempotencyToken: this.input.idempotencyToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProvisionedProductPlan.PlanId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          PlanName: this.input.planName,
          PlanType: this.input.planType,
          NotificationArns: this.input.notificationArns,
          PathId: this.input.pathId,
          ProductId: this.input.productId,
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisioningParameters: this.input.provisioningParameters,
          IdempotencyToken: this.input.idempotencyToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProvisionedProductPlan.ProvisionProductId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          PlanName: this.input.planName,
          PlanType: this.input.planType,
          NotificationArns: this.input.notificationArns,
          PathId: this.input.pathId,
          ProductId: this.input.productId,
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisioningParameters: this.input.provisioningParameters,
          IdempotencyToken: this.input.idempotencyToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProvisionedProductPlan.ProvisionedProductName', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          PlanName: this.input.planName,
          PlanType: this.input.planType,
          NotificationArns: this.input.notificationArns,
          PathId: this.input.pathId,
          ProductId: this.input.productId,
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisioningParameters: this.input.provisioningParameters,
          IdempotencyToken: this.input.idempotencyToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProvisionedProductPlan.ProvisioningArtifactId', props);
    return resource.getResponseField('ProvisioningArtifactId') as unknown as string;
  }

}

export class ServiceCatalogCreateProvisioningArtifact extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogCreateProvisioningArtifactInput) {
    super(scope, id);
  }

  public get provisioningArtifactDetail(): ServiceCatalogCreateProvisioningArtifactProvisioningArtifactDetail {
    return new ServiceCatalogCreateProvisioningArtifactProvisioningArtifactDetail(this, 'ProvisioningArtifactDetail', this.__resources, this.input);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          Parameters: {
            Name: this.input.parameters.name,
            Description: this.input.parameters.description,
            Info: this.input.parameters.info,
            Type: this.input.parameters.type,
            DisableTemplateValidation: this.input.parameters.disableTemplateValidation,
          },
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProvisioningArtifact.Info', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          Parameters: {
            Name: this.input.parameters.name,
            Description: this.input.parameters.description,
            Info: this.input.parameters.info,
            Type: this.input.parameters.type,
            DisableTemplateValidation: this.input.parameters.disableTemplateValidation,
          },
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProvisioningArtifact.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class ServiceCatalogCreateProvisioningArtifactProvisioningArtifactDetail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogCreateProvisioningArtifactInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          Parameters: {
            Name: this.input.parameters.name,
            Description: this.input.parameters.description,
            Info: this.input.parameters.info,
            Type: this.input.parameters.type,
            DisableTemplateValidation: this.input.parameters.disableTemplateValidation,
          },
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProvisioningArtifact.ProvisioningArtifactDetail.Id', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          Parameters: {
            Name: this.input.parameters.name,
            Description: this.input.parameters.description,
            Info: this.input.parameters.info,
            Type: this.input.parameters.type,
            DisableTemplateValidation: this.input.parameters.disableTemplateValidation,
          },
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProvisioningArtifact.ProvisioningArtifactDetail.Name', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          Parameters: {
            Name: this.input.parameters.name,
            Description: this.input.parameters.description,
            Info: this.input.parameters.info,
            Type: this.input.parameters.type,
            DisableTemplateValidation: this.input.parameters.disableTemplateValidation,
          },
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProvisioningArtifact.ProvisioningArtifactDetail.Description', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          Parameters: {
            Name: this.input.parameters.name,
            Description: this.input.parameters.description,
            Info: this.input.parameters.info,
            Type: this.input.parameters.type,
            DisableTemplateValidation: this.input.parameters.disableTemplateValidation,
          },
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProvisioningArtifact.ProvisioningArtifactDetail.Type', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          Parameters: {
            Name: this.input.parameters.name,
            Description: this.input.parameters.description,
            Info: this.input.parameters.info,
            Type: this.input.parameters.type,
            DisableTemplateValidation: this.input.parameters.disableTemplateValidation,
          },
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProvisioningArtifact.ProvisioningArtifactDetail.CreatedTime', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          Parameters: {
            Name: this.input.parameters.name,
            Description: this.input.parameters.description,
            Info: this.input.parameters.info,
            Type: this.input.parameters.type,
            DisableTemplateValidation: this.input.parameters.disableTemplateValidation,
          },
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProvisioningArtifact.ProvisioningArtifactDetail.Active', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          Parameters: {
            Name: this.input.parameters.name,
            Description: this.input.parameters.description,
            Info: this.input.parameters.info,
            Type: this.input.parameters.type,
            DisableTemplateValidation: this.input.parameters.disableTemplateValidation,
          },
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProvisioningArtifact.ProvisioningArtifactDetail.Guidance', props);
    return resource.getResponseField('ProvisioningArtifactDetail.Guidance') as unknown as string;
  }

}

export class ServiceCatalogCreateServiceAction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogCreateServiceActionInput) {
    super(scope, id);
  }

  public get serviceActionDetail(): ServiceCatalogCreateServiceActionServiceActionDetail {
    return new ServiceCatalogCreateServiceActionServiceActionDetail(this, 'ServiceActionDetail', this.__resources, this.input);
  }

}

export class ServiceCatalogCreateServiceActionServiceActionDetail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogCreateServiceActionInput) {
    super(scope, id);
  }

  public get serviceActionSummary(): ServiceCatalogCreateServiceActionServiceActionDetailServiceActionSummary {
    return new ServiceCatalogCreateServiceActionServiceActionDetailServiceActionSummary(this, 'ServiceActionSummary', this.__resources, this.input);
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
          Name: this.input.name,
          DefinitionType: this.input.definitionType,
          Definition: this.input.definition,
          Description: this.input.description,
          AcceptLanguage: this.input.acceptLanguage,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServiceAction.ServiceActionDetail.Definition', props);
    return resource.getResponseField('ServiceActionDetail.Definition') as unknown as Record<string, string>;
  }

}

export class ServiceCatalogCreateServiceActionServiceActionDetailServiceActionSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogCreateServiceActionInput) {
    super(scope, id);
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
          Name: this.input.name,
          DefinitionType: this.input.definitionType,
          Definition: this.input.definition,
          Description: this.input.description,
          AcceptLanguage: this.input.acceptLanguage,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServiceAction.ServiceActionDetail.ServiceActionSummary.Id', props);
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
          Name: this.input.name,
          DefinitionType: this.input.definitionType,
          Definition: this.input.definition,
          Description: this.input.description,
          AcceptLanguage: this.input.acceptLanguage,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServiceAction.ServiceActionDetail.ServiceActionSummary.Name', props);
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
          Name: this.input.name,
          DefinitionType: this.input.definitionType,
          Definition: this.input.definition,
          Description: this.input.description,
          AcceptLanguage: this.input.acceptLanguage,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServiceAction.ServiceActionDetail.ServiceActionSummary.Description', props);
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
          Name: this.input.name,
          DefinitionType: this.input.definitionType,
          Definition: this.input.definition,
          Description: this.input.description,
          AcceptLanguage: this.input.acceptLanguage,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServiceAction.ServiceActionDetail.ServiceActionSummary.DefinitionType', props);
    return resource.getResponseField('ServiceActionDetail.ServiceActionSummary.DefinitionType') as unknown as string;
  }

}

export class ServiceCatalogCreateTagOption extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogCreateTagOptionInput) {
    super(scope, id);
  }

  public get tagOptionDetail(): ServiceCatalogCreateTagOptionTagOptionDetail {
    return new ServiceCatalogCreateTagOptionTagOptionDetail(this, 'TagOptionDetail', this.__resources, this.input);
  }

}

export class ServiceCatalogCreateTagOptionTagOptionDetail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogCreateTagOptionInput) {
    super(scope, id);
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
          Key: this.input.key,
          Value: this.input.value,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTagOption.TagOptionDetail.Key', props);
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
          Key: this.input.key,
          Value: this.input.value,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTagOption.TagOptionDetail.Value', props);
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
          Key: this.input.key,
          Value: this.input.value,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTagOption.TagOptionDetail.Active', props);
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
          Key: this.input.key,
          Value: this.input.value,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTagOption.TagOptionDetail.Id', props);
    return resource.getResponseField('TagOptionDetail.Id') as unknown as string;
  }

}

export class ServiceCatalogDeletePortfolioShare extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogDeletePortfolioShareInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          PortfolioId: this.input.portfolioId,
          AccountId: this.input.accountId,
          OrganizationNode: {
            Type: this.input.organizationNode?.type,
            Value: this.input.organizationNode?.value,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeletePortfolioShare.PortfolioShareToken', props);
    return resource.getResponseField('PortfolioShareToken') as unknown as string;
  }

}

export class ServiceCatalogDescribeConstraint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogDescribeConstraintInput) {
    super(scope, id);
  }

  public get constraintDetail(): ServiceCatalogDescribeConstraintConstraintDetail {
    return new ServiceCatalogDescribeConstraintConstraintDetail(this, 'ConstraintDetail', this.__resources, this.input);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConstraint.ConstraintParameters', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConstraint.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class ServiceCatalogDescribeConstraintConstraintDetail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogDescribeConstraintInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConstraint.ConstraintDetail.ConstraintId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConstraint.ConstraintDetail.Type', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConstraint.ConstraintDetail.Description', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConstraint.ConstraintDetail.Owner', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConstraint.ConstraintDetail.ProductId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConstraint.ConstraintDetail.PortfolioId', props);
    return resource.getResponseField('ConstraintDetail.PortfolioId') as unknown as string;
  }

}

export class ServiceCatalogDescribeCopyProductStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogDescribeCopyProductStatusInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          CopyProductToken: this.input.copyProductToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCopyProductStatus.CopyProductStatus', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          CopyProductToken: this.input.copyProductToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCopyProductStatus.TargetProductId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          CopyProductToken: this.input.copyProductToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCopyProductStatus.StatusDetail', props);
    return resource.getResponseField('StatusDetail') as unknown as string;
  }

}

export class ServiceCatalogDescribePortfolio extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogDescribePortfolioInput) {
    super(scope, id);
  }

  public get portfolioDetail(): ServiceCatalogDescribePortfolioPortfolioDetail {
    return new ServiceCatalogDescribePortfolioPortfolioDetail(this, 'PortfolioDetail', this.__resources, this.input);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePortfolio.Tags', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePortfolio.TagOptions', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePortfolio.Budgets', props);
    return resource.getResponseField('Budgets') as unknown as shapes.ServiceCatalogBudgetDetail[];
  }

}

export class ServiceCatalogDescribePortfolioPortfolioDetail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogDescribePortfolioInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePortfolio.PortfolioDetail.Id', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePortfolio.PortfolioDetail.ARN', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePortfolio.PortfolioDetail.DisplayName', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePortfolio.PortfolioDetail.Description', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePortfolio.PortfolioDetail.CreatedTime', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePortfolio.PortfolioDetail.ProviderName', props);
    return resource.getResponseField('PortfolioDetail.ProviderName') as unknown as string;
  }

}

export class ServiceCatalogDescribePortfolioShareStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogDescribePortfolioShareStatusInput) {
    super(scope, id);
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
          PortfolioShareToken: this.input.portfolioShareToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePortfolioShareStatus.PortfolioShareToken', props);
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
          PortfolioShareToken: this.input.portfolioShareToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePortfolioShareStatus.PortfolioId', props);
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
          PortfolioShareToken: this.input.portfolioShareToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePortfolioShareStatus.OrganizationNodeValue', props);
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
          PortfolioShareToken: this.input.portfolioShareToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePortfolioShareStatus.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get shareDetails(): ServiceCatalogDescribePortfolioShareStatusShareDetails {
    return new ServiceCatalogDescribePortfolioShareStatusShareDetails(this, 'ShareDetails', this.__resources, this.input);
  }

}

export class ServiceCatalogDescribePortfolioShareStatusShareDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogDescribePortfolioShareStatusInput) {
    super(scope, id);
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
          PortfolioShareToken: this.input.portfolioShareToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePortfolioShareStatus.ShareDetails.SuccessfulShares', props);
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
          PortfolioShareToken: this.input.portfolioShareToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePortfolioShareStatus.ShareDetails.ShareErrors', props);
    return resource.getResponseField('ShareDetails.ShareErrors') as unknown as shapes.ServiceCatalogShareError[];
  }

}

export class ServiceCatalogDescribeProduct extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogDescribeProductInput) {
    super(scope, id);
  }

  public get productViewSummary(): ServiceCatalogDescribeProductProductViewSummary {
    return new ServiceCatalogDescribeProductProductViewSummary(this, 'ProductViewSummary', this.__resources, this.input);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProduct.ProvisioningArtifacts', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProduct.Budgets', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProduct.LaunchPaths', props);
    return resource.getResponseField('LaunchPaths') as unknown as shapes.ServiceCatalogLaunchPath[];
  }

}

export class ServiceCatalogDescribeProductProductViewSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogDescribeProductInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProduct.ProductViewSummary.Id', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProduct.ProductViewSummary.ProductId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProduct.ProductViewSummary.Name', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProduct.ProductViewSummary.Owner', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProduct.ProductViewSummary.ShortDescription', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProduct.ProductViewSummary.Type', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProduct.ProductViewSummary.Distributor', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProduct.ProductViewSummary.HasDefaultPath', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProduct.ProductViewSummary.SupportEmail', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProduct.ProductViewSummary.SupportDescription', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProduct.ProductViewSummary.SupportUrl', props);
    return resource.getResponseField('ProductViewSummary.SupportUrl') as unknown as string;
  }

}

export class ServiceCatalogDescribeProductAsAdmin extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogDescribeProductAsAdminInput) {
    super(scope, id);
  }

  public get productViewDetail(): ServiceCatalogDescribeProductAsAdminProductViewDetail {
    return new ServiceCatalogDescribeProductAsAdminProductViewDetail(this, 'ProductViewDetail', this.__resources, this.input);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProductAsAdmin.ProvisioningArtifactSummaries', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProductAsAdmin.Tags', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProductAsAdmin.TagOptions', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProductAsAdmin.Budgets', props);
    return resource.getResponseField('Budgets') as unknown as shapes.ServiceCatalogBudgetDetail[];
  }

}

export class ServiceCatalogDescribeProductAsAdminProductViewDetail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogDescribeProductAsAdminInput) {
    super(scope, id);
  }

  public get productViewSummary(): ServiceCatalogDescribeProductAsAdminProductViewDetailProductViewSummary {
    return new ServiceCatalogDescribeProductAsAdminProductViewDetailProductViewSummary(this, 'ProductViewSummary', this.__resources, this.input);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProductAsAdmin.ProductViewDetail.Status', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProductAsAdmin.ProductViewDetail.ProductARN', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProductAsAdmin.ProductViewDetail.CreatedTime', props);
    return resource.getResponseField('ProductViewDetail.CreatedTime') as unknown as string;
  }

}

export class ServiceCatalogDescribeProductAsAdminProductViewDetailProductViewSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogDescribeProductAsAdminInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProductAsAdmin.ProductViewDetail.ProductViewSummary.Id', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProductAsAdmin.ProductViewDetail.ProductViewSummary.ProductId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProductAsAdmin.ProductViewDetail.ProductViewSummary.Name', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProductAsAdmin.ProductViewDetail.ProductViewSummary.Owner', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProductAsAdmin.ProductViewDetail.ProductViewSummary.ShortDescription', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProductAsAdmin.ProductViewDetail.ProductViewSummary.Type', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProductAsAdmin.ProductViewDetail.ProductViewSummary.Distributor', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProductAsAdmin.ProductViewDetail.ProductViewSummary.HasDefaultPath', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProductAsAdmin.ProductViewDetail.ProductViewSummary.SupportEmail', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProductAsAdmin.ProductViewDetail.ProductViewSummary.SupportDescription', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProductAsAdmin.ProductViewDetail.ProductViewSummary.SupportUrl', props);
    return resource.getResponseField('ProductViewDetail.ProductViewSummary.SupportUrl') as unknown as string;
  }

}

export class ServiceCatalogDescribeProductView extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogDescribeProductViewInput) {
    super(scope, id);
  }

  public get productViewSummary(): ServiceCatalogDescribeProductViewProductViewSummary {
    return new ServiceCatalogDescribeProductViewProductViewSummary(this, 'ProductViewSummary', this.__resources, this.input);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProductView.ProvisioningArtifacts', props);
    return resource.getResponseField('ProvisioningArtifacts') as unknown as shapes.ServiceCatalogProvisioningArtifact[];
  }

}

export class ServiceCatalogDescribeProductViewProductViewSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogDescribeProductViewInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProductView.ProductViewSummary.Id', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProductView.ProductViewSummary.ProductId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProductView.ProductViewSummary.Name', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProductView.ProductViewSummary.Owner', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProductView.ProductViewSummary.ShortDescription', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProductView.ProductViewSummary.Type', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProductView.ProductViewSummary.Distributor', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProductView.ProductViewSummary.HasDefaultPath', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProductView.ProductViewSummary.SupportEmail', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProductView.ProductViewSummary.SupportDescription', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProductView.ProductViewSummary.SupportUrl', props);
    return resource.getResponseField('ProductViewSummary.SupportUrl') as unknown as string;
  }

}

export class ServiceCatalogDescribeProvisionedProduct extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogDescribeProvisionedProductInput) {
    super(scope, id);
  }

  public get provisionedProductDetail(): ServiceCatalogDescribeProvisionedProductProvisionedProductDetail {
    return new ServiceCatalogDescribeProvisionedProductProvisionedProductDetail(this, 'ProvisionedProductDetail', this.__resources, this.input);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisionedProduct.CloudWatchDashboards', props);
    return resource.getResponseField('CloudWatchDashboards') as unknown as shapes.ServiceCatalogCloudWatchDashboard[];
  }

}

export class ServiceCatalogDescribeProvisionedProductProvisionedProductDetail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogDescribeProvisionedProductInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisionedProduct.ProvisionedProductDetail.Name', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisionedProduct.ProvisionedProductDetail.Arn', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisionedProduct.ProvisionedProductDetail.Type', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisionedProduct.ProvisionedProductDetail.Id', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisionedProduct.ProvisionedProductDetail.Status', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisionedProduct.ProvisionedProductDetail.StatusMessage', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisionedProduct.ProvisionedProductDetail.CreatedTime', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisionedProduct.ProvisionedProductDetail.IdempotencyToken', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisionedProduct.ProvisionedProductDetail.LastRecordId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisionedProduct.ProvisionedProductDetail.LastProvisioningRecordId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisionedProduct.ProvisionedProductDetail.LastSuccessfulProvisioningRecordId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisionedProduct.ProvisionedProductDetail.ProductId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisionedProduct.ProvisionedProductDetail.ProvisioningArtifactId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisionedProduct.ProvisionedProductDetail.LaunchRoleArn', props);
    return resource.getResponseField('ProvisionedProductDetail.LaunchRoleArn') as unknown as string;
  }

}

export class ServiceCatalogDescribeProvisionedProductPlan extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogDescribeProvisionedProductPlanInput) {
    super(scope, id);
  }

  public get provisionedProductPlanDetails(): ServiceCatalogDescribeProvisionedProductPlanProvisionedProductPlanDetails {
    return new ServiceCatalogDescribeProvisionedProductPlanProvisionedProductPlanDetails(this, 'ProvisionedProductPlanDetails', this.__resources, this.input);
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
          AcceptLanguage: this.input.acceptLanguage,
          PlanId: this.input.planId,
          PageSize: this.input.pageSize,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisionedProductPlan.ResourceChanges', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          PlanId: this.input.planId,
          PageSize: this.input.pageSize,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisionedProductPlan.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ServiceCatalogDescribeProvisionedProductPlanProvisionedProductPlanDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogDescribeProvisionedProductPlanInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          PlanId: this.input.planId,
          PageSize: this.input.pageSize,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisionedProductPlan.ProvisionedProductPlanDetails.CreatedTime', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          PlanId: this.input.planId,
          PageSize: this.input.pageSize,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisionedProductPlan.ProvisionedProductPlanDetails.PathId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          PlanId: this.input.planId,
          PageSize: this.input.pageSize,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisionedProductPlan.ProvisionedProductPlanDetails.ProductId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          PlanId: this.input.planId,
          PageSize: this.input.pageSize,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisionedProductPlan.ProvisionedProductPlanDetails.PlanName', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          PlanId: this.input.planId,
          PageSize: this.input.pageSize,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisionedProductPlan.ProvisionedProductPlanDetails.PlanId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          PlanId: this.input.planId,
          PageSize: this.input.pageSize,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisionedProductPlan.ProvisionedProductPlanDetails.ProvisionProductId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          PlanId: this.input.planId,
          PageSize: this.input.pageSize,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisionedProductPlan.ProvisionedProductPlanDetails.ProvisionProductName', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          PlanId: this.input.planId,
          PageSize: this.input.pageSize,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisionedProductPlan.ProvisionedProductPlanDetails.PlanType', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          PlanId: this.input.planId,
          PageSize: this.input.pageSize,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisionedProductPlan.ProvisionedProductPlanDetails.ProvisioningArtifactId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          PlanId: this.input.planId,
          PageSize: this.input.pageSize,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisionedProductPlan.ProvisionedProductPlanDetails.Status', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          PlanId: this.input.planId,
          PageSize: this.input.pageSize,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisionedProductPlan.ProvisionedProductPlanDetails.UpdatedTime', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          PlanId: this.input.planId,
          PageSize: this.input.pageSize,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisionedProductPlan.ProvisionedProductPlanDetails.NotificationArns', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          PlanId: this.input.planId,
          PageSize: this.input.pageSize,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisionedProductPlan.ProvisionedProductPlanDetails.ProvisioningParameters', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          PlanId: this.input.planId,
          PageSize: this.input.pageSize,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisionedProductPlan.ProvisionedProductPlanDetails.Tags', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          PlanId: this.input.planId,
          PageSize: this.input.pageSize,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisionedProductPlan.ProvisionedProductPlanDetails.StatusMessage', props);
    return resource.getResponseField('ProvisionedProductPlanDetails.StatusMessage') as unknown as string;
  }

}

export class ServiceCatalogDescribeProvisioningArtifact extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogDescribeProvisioningArtifactInput) {
    super(scope, id);
  }

  public get provisioningArtifactDetail(): ServiceCatalogDescribeProvisioningArtifactProvisioningArtifactDetail {
    return new ServiceCatalogDescribeProvisioningArtifactProvisioningArtifactDetail(this, 'ProvisioningArtifactDetail', this.__resources, this.input);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProductId: this.input.productId,
          ProvisioningArtifactName: this.input.provisioningArtifactName,
          ProductName: this.input.productName,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisioningArtifact.Info', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProductId: this.input.productId,
          ProvisioningArtifactName: this.input.provisioningArtifactName,
          ProductName: this.input.productName,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisioningArtifact.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class ServiceCatalogDescribeProvisioningArtifactProvisioningArtifactDetail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogDescribeProvisioningArtifactInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProductId: this.input.productId,
          ProvisioningArtifactName: this.input.provisioningArtifactName,
          ProductName: this.input.productName,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisioningArtifact.ProvisioningArtifactDetail.Id', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProductId: this.input.productId,
          ProvisioningArtifactName: this.input.provisioningArtifactName,
          ProductName: this.input.productName,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisioningArtifact.ProvisioningArtifactDetail.Name', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProductId: this.input.productId,
          ProvisioningArtifactName: this.input.provisioningArtifactName,
          ProductName: this.input.productName,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisioningArtifact.ProvisioningArtifactDetail.Description', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProductId: this.input.productId,
          ProvisioningArtifactName: this.input.provisioningArtifactName,
          ProductName: this.input.productName,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisioningArtifact.ProvisioningArtifactDetail.Type', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProductId: this.input.productId,
          ProvisioningArtifactName: this.input.provisioningArtifactName,
          ProductName: this.input.productName,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisioningArtifact.ProvisioningArtifactDetail.CreatedTime', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProductId: this.input.productId,
          ProvisioningArtifactName: this.input.provisioningArtifactName,
          ProductName: this.input.productName,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisioningArtifact.ProvisioningArtifactDetail.Active', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProductId: this.input.productId,
          ProvisioningArtifactName: this.input.provisioningArtifactName,
          ProductName: this.input.productName,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisioningArtifact.ProvisioningArtifactDetail.Guidance', props);
    return resource.getResponseField('ProvisioningArtifactDetail.Guidance') as unknown as string;
  }

}

export class ServiceCatalogDescribeProvisioningParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogDescribeProvisioningParametersInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          ProductName: this.input.productName,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisioningArtifactName: this.input.provisioningArtifactName,
          PathId: this.input.pathId,
          PathName: this.input.pathName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisioningParameters.ProvisioningArtifactParameters', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          ProductName: this.input.productName,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisioningArtifactName: this.input.provisioningArtifactName,
          PathId: this.input.pathId,
          PathName: this.input.pathName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisioningParameters.ConstraintSummaries', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          ProductName: this.input.productName,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisioningArtifactName: this.input.provisioningArtifactName,
          PathId: this.input.pathId,
          PathName: this.input.pathName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisioningParameters.UsageInstructions', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          ProductName: this.input.productName,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisioningArtifactName: this.input.provisioningArtifactName,
          PathId: this.input.pathId,
          PathName: this.input.pathName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisioningParameters.TagOptions', props);
    return resource.getResponseField('TagOptions') as unknown as shapes.ServiceCatalogTagOptionSummary[];
  }

  public get provisioningArtifactPreferences(): ServiceCatalogDescribeProvisioningParametersProvisioningArtifactPreferences {
    return new ServiceCatalogDescribeProvisioningParametersProvisioningArtifactPreferences(this, 'ProvisioningArtifactPreferences', this.__resources, this.input);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          ProductName: this.input.productName,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisioningArtifactName: this.input.provisioningArtifactName,
          PathId: this.input.pathId,
          PathName: this.input.pathName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisioningParameters.ProvisioningArtifactOutputs', props);
    return resource.getResponseField('ProvisioningArtifactOutputs') as unknown as shapes.ServiceCatalogProvisioningArtifactOutput[];
  }

}

export class ServiceCatalogDescribeProvisioningParametersProvisioningArtifactPreferences extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogDescribeProvisioningParametersInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          ProductName: this.input.productName,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisioningArtifactName: this.input.provisioningArtifactName,
          PathId: this.input.pathId,
          PathName: this.input.pathName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisioningParameters.ProvisioningArtifactPreferences.StackSetAccounts', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          ProductName: this.input.productName,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisioningArtifactName: this.input.provisioningArtifactName,
          PathId: this.input.pathId,
          PathName: this.input.pathName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProvisioningParameters.ProvisioningArtifactPreferences.StackSetRegions', props);
    return resource.getResponseField('ProvisioningArtifactPreferences.StackSetRegions') as unknown as string[];
  }

}

export class ServiceCatalogDescribeRecord extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogDescribeRecordInput) {
    super(scope, id);
  }

  public get recordDetail(): ServiceCatalogDescribeRecordRecordDetail {
    return new ServiceCatalogDescribeRecordRecordDetail(this, 'RecordDetail', this.__resources, this.input);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          PageToken: this.input.pageToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecord.RecordOutputs', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          PageToken: this.input.pageToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecord.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ServiceCatalogDescribeRecordRecordDetail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogDescribeRecordInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          PageToken: this.input.pageToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecord.RecordDetail.RecordId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          PageToken: this.input.pageToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecord.RecordDetail.ProvisionedProductName', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          PageToken: this.input.pageToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecord.RecordDetail.Status', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          PageToken: this.input.pageToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecord.RecordDetail.CreatedTime', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          PageToken: this.input.pageToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecord.RecordDetail.UpdatedTime', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          PageToken: this.input.pageToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecord.RecordDetail.ProvisionedProductType', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          PageToken: this.input.pageToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecord.RecordDetail.RecordType', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          PageToken: this.input.pageToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecord.RecordDetail.ProvisionedProductId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          PageToken: this.input.pageToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecord.RecordDetail.ProductId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          PageToken: this.input.pageToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecord.RecordDetail.ProvisioningArtifactId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          PageToken: this.input.pageToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecord.RecordDetail.PathId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          PageToken: this.input.pageToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecord.RecordDetail.RecordErrors', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          PageToken: this.input.pageToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecord.RecordDetail.RecordTags', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          PageToken: this.input.pageToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecord.RecordDetail.LaunchRoleArn', props);
    return resource.getResponseField('RecordDetail.LaunchRoleArn') as unknown as string;
  }

}

export class ServiceCatalogDescribeServiceAction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogDescribeServiceActionInput) {
    super(scope, id);
  }

  public get serviceActionDetail(): ServiceCatalogDescribeServiceActionServiceActionDetail {
    return new ServiceCatalogDescribeServiceActionServiceActionDetail(this, 'ServiceActionDetail', this.__resources, this.input);
  }

}

export class ServiceCatalogDescribeServiceActionServiceActionDetail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogDescribeServiceActionInput) {
    super(scope, id);
  }

  public get serviceActionSummary(): ServiceCatalogDescribeServiceActionServiceActionDetailServiceActionSummary {
    return new ServiceCatalogDescribeServiceActionServiceActionDetailServiceActionSummary(this, 'ServiceActionSummary', this.__resources, this.input);
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
          Id: this.input.id,
          AcceptLanguage: this.input.acceptLanguage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeServiceAction.ServiceActionDetail.Definition', props);
    return resource.getResponseField('ServiceActionDetail.Definition') as unknown as Record<string, string>;
  }

}

export class ServiceCatalogDescribeServiceActionServiceActionDetailServiceActionSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogDescribeServiceActionInput) {
    super(scope, id);
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
          Id: this.input.id,
          AcceptLanguage: this.input.acceptLanguage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeServiceAction.ServiceActionDetail.ServiceActionSummary.Id', props);
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
          Id: this.input.id,
          AcceptLanguage: this.input.acceptLanguage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeServiceAction.ServiceActionDetail.ServiceActionSummary.Name', props);
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
          Id: this.input.id,
          AcceptLanguage: this.input.acceptLanguage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeServiceAction.ServiceActionDetail.ServiceActionSummary.Description', props);
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
          Id: this.input.id,
          AcceptLanguage: this.input.acceptLanguage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeServiceAction.ServiceActionDetail.ServiceActionSummary.DefinitionType', props);
    return resource.getResponseField('ServiceActionDetail.ServiceActionSummary.DefinitionType') as unknown as string;
  }

}

export class ServiceCatalogDescribeServiceActionExecutionParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogDescribeServiceActionExecutionParametersInput) {
    super(scope, id);
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
          ProvisionedProductId: this.input.provisionedProductId,
          ServiceActionId: this.input.serviceActionId,
          AcceptLanguage: this.input.acceptLanguage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeServiceActionExecutionParameters.ServiceActionParameters', props);
    return resource.getResponseField('ServiceActionParameters') as unknown as shapes.ServiceCatalogExecutionParameter[];
  }

}

export class ServiceCatalogDescribeTagOption extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogDescribeTagOptionInput) {
    super(scope, id);
  }

  public get tagOptionDetail(): ServiceCatalogDescribeTagOptionTagOptionDetail {
    return new ServiceCatalogDescribeTagOptionTagOptionDetail(this, 'TagOptionDetail', this.__resources, this.input);
  }

}

export class ServiceCatalogDescribeTagOptionTagOptionDetail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogDescribeTagOptionInput) {
    super(scope, id);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTagOption.TagOptionDetail.Key', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTagOption.TagOptionDetail.Value', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTagOption.TagOptionDetail.Active', props);
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
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTagOption.TagOptionDetail.Id', props);
    return resource.getResponseField('TagOptionDetail.Id') as unknown as string;
  }

}

export class ServiceCatalogExecuteProvisionedProductPlan extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogExecuteProvisionedProductPlanInput) {
    super(scope, id);
  }

  public get recordDetail(): ServiceCatalogExecuteProvisionedProductPlanRecordDetail {
    return new ServiceCatalogExecuteProvisionedProductPlanRecordDetail(this, 'RecordDetail', this.__resources, this.input);
  }

}

export class ServiceCatalogExecuteProvisionedProductPlanRecordDetail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogExecuteProvisionedProductPlanInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          PlanId: this.input.planId,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExecuteProvisionedProductPlan.RecordDetail.RecordId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          PlanId: this.input.planId,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExecuteProvisionedProductPlan.RecordDetail.ProvisionedProductName', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          PlanId: this.input.planId,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExecuteProvisionedProductPlan.RecordDetail.Status', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          PlanId: this.input.planId,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExecuteProvisionedProductPlan.RecordDetail.CreatedTime', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          PlanId: this.input.planId,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExecuteProvisionedProductPlan.RecordDetail.UpdatedTime', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          PlanId: this.input.planId,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExecuteProvisionedProductPlan.RecordDetail.ProvisionedProductType', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          PlanId: this.input.planId,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExecuteProvisionedProductPlan.RecordDetail.RecordType', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          PlanId: this.input.planId,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExecuteProvisionedProductPlan.RecordDetail.ProvisionedProductId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          PlanId: this.input.planId,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExecuteProvisionedProductPlan.RecordDetail.ProductId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          PlanId: this.input.planId,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExecuteProvisionedProductPlan.RecordDetail.ProvisioningArtifactId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          PlanId: this.input.planId,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExecuteProvisionedProductPlan.RecordDetail.PathId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          PlanId: this.input.planId,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExecuteProvisionedProductPlan.RecordDetail.RecordErrors', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          PlanId: this.input.planId,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExecuteProvisionedProductPlan.RecordDetail.RecordTags', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          PlanId: this.input.planId,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExecuteProvisionedProductPlan.RecordDetail.LaunchRoleArn', props);
    return resource.getResponseField('RecordDetail.LaunchRoleArn') as unknown as string;
  }

}

export class ServiceCatalogExecuteProvisionedProductServiceAction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogExecuteProvisionedProductServiceActionInput) {
    super(scope, id);
  }

  public get recordDetail(): ServiceCatalogExecuteProvisionedProductServiceActionRecordDetail {
    return new ServiceCatalogExecuteProvisionedProductServiceActionRecordDetail(this, 'RecordDetail', this.__resources, this.input);
  }

}

export class ServiceCatalogExecuteProvisionedProductServiceActionRecordDetail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogExecuteProvisionedProductServiceActionInput) {
    super(scope, id);
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
          ProvisionedProductId: this.input.provisionedProductId,
          ServiceActionId: this.input.serviceActionId,
          ExecuteToken: this.input.executeToken,
          AcceptLanguage: this.input.acceptLanguage,
          Parameters: this.input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExecuteProvisionedProductServiceAction.RecordDetail.RecordId', props);
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
          ProvisionedProductId: this.input.provisionedProductId,
          ServiceActionId: this.input.serviceActionId,
          ExecuteToken: this.input.executeToken,
          AcceptLanguage: this.input.acceptLanguage,
          Parameters: this.input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExecuteProvisionedProductServiceAction.RecordDetail.ProvisionedProductName', props);
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
          ProvisionedProductId: this.input.provisionedProductId,
          ServiceActionId: this.input.serviceActionId,
          ExecuteToken: this.input.executeToken,
          AcceptLanguage: this.input.acceptLanguage,
          Parameters: this.input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExecuteProvisionedProductServiceAction.RecordDetail.Status', props);
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
          ProvisionedProductId: this.input.provisionedProductId,
          ServiceActionId: this.input.serviceActionId,
          ExecuteToken: this.input.executeToken,
          AcceptLanguage: this.input.acceptLanguage,
          Parameters: this.input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExecuteProvisionedProductServiceAction.RecordDetail.CreatedTime', props);
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
          ProvisionedProductId: this.input.provisionedProductId,
          ServiceActionId: this.input.serviceActionId,
          ExecuteToken: this.input.executeToken,
          AcceptLanguage: this.input.acceptLanguage,
          Parameters: this.input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExecuteProvisionedProductServiceAction.RecordDetail.UpdatedTime', props);
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
          ProvisionedProductId: this.input.provisionedProductId,
          ServiceActionId: this.input.serviceActionId,
          ExecuteToken: this.input.executeToken,
          AcceptLanguage: this.input.acceptLanguage,
          Parameters: this.input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExecuteProvisionedProductServiceAction.RecordDetail.ProvisionedProductType', props);
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
          ProvisionedProductId: this.input.provisionedProductId,
          ServiceActionId: this.input.serviceActionId,
          ExecuteToken: this.input.executeToken,
          AcceptLanguage: this.input.acceptLanguage,
          Parameters: this.input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExecuteProvisionedProductServiceAction.RecordDetail.RecordType', props);
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
          ProvisionedProductId: this.input.provisionedProductId,
          ServiceActionId: this.input.serviceActionId,
          ExecuteToken: this.input.executeToken,
          AcceptLanguage: this.input.acceptLanguage,
          Parameters: this.input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExecuteProvisionedProductServiceAction.RecordDetail.ProvisionedProductId', props);
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
          ProvisionedProductId: this.input.provisionedProductId,
          ServiceActionId: this.input.serviceActionId,
          ExecuteToken: this.input.executeToken,
          AcceptLanguage: this.input.acceptLanguage,
          Parameters: this.input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExecuteProvisionedProductServiceAction.RecordDetail.ProductId', props);
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
          ProvisionedProductId: this.input.provisionedProductId,
          ServiceActionId: this.input.serviceActionId,
          ExecuteToken: this.input.executeToken,
          AcceptLanguage: this.input.acceptLanguage,
          Parameters: this.input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExecuteProvisionedProductServiceAction.RecordDetail.ProvisioningArtifactId', props);
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
          ProvisionedProductId: this.input.provisionedProductId,
          ServiceActionId: this.input.serviceActionId,
          ExecuteToken: this.input.executeToken,
          AcceptLanguage: this.input.acceptLanguage,
          Parameters: this.input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExecuteProvisionedProductServiceAction.RecordDetail.PathId', props);
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
          ProvisionedProductId: this.input.provisionedProductId,
          ServiceActionId: this.input.serviceActionId,
          ExecuteToken: this.input.executeToken,
          AcceptLanguage: this.input.acceptLanguage,
          Parameters: this.input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExecuteProvisionedProductServiceAction.RecordDetail.RecordErrors', props);
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
          ProvisionedProductId: this.input.provisionedProductId,
          ServiceActionId: this.input.serviceActionId,
          ExecuteToken: this.input.executeToken,
          AcceptLanguage: this.input.acceptLanguage,
          Parameters: this.input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExecuteProvisionedProductServiceAction.RecordDetail.RecordTags', props);
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
          ProvisionedProductId: this.input.provisionedProductId,
          ServiceActionId: this.input.serviceActionId,
          ExecuteToken: this.input.executeToken,
          AcceptLanguage: this.input.acceptLanguage,
          Parameters: this.input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExecuteProvisionedProductServiceAction.RecordDetail.LaunchRoleArn', props);
    return resource.getResponseField('RecordDetail.LaunchRoleArn') as unknown as string;
  }

}

export class ServiceCatalogFetchAwsOrganizationsAccessStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetAWSOrganizationsAccessStatus.AccessStatus', props);
    return resource.getResponseField('AccessStatus') as unknown as string;
  }

}

export class ServiceCatalogFetchProvisionedProductOutputs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogGetProvisionedProductOutputsInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProvisionedProductId: this.input.provisionedProductId,
          ProvisionedProductName: this.input.provisionedProductName,
          OutputKeys: this.input.outputKeys,
          PageSize: this.input.pageSize,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProvisionedProductOutputs.Outputs', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProvisionedProductId: this.input.provisionedProductId,
          ProvisionedProductName: this.input.provisionedProductName,
          OutputKeys: this.input.outputKeys,
          PageSize: this.input.pageSize,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProvisionedProductOutputs.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ServiceCatalogImportAsProvisionedProduct extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogImportAsProvisionedProductInput) {
    super(scope, id);
  }

  public get recordDetail(): ServiceCatalogImportAsProvisionedProductRecordDetail {
    return new ServiceCatalogImportAsProvisionedProductRecordDetail(this, 'RecordDetail', this.__resources, this.input);
  }

}

export class ServiceCatalogImportAsProvisionedProductRecordDetail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogImportAsProvisionedProductInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisionedProductName: this.input.provisionedProductName,
          PhysicalId: this.input.physicalId,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportAsProvisionedProduct.RecordDetail.RecordId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisionedProductName: this.input.provisionedProductName,
          PhysicalId: this.input.physicalId,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportAsProvisionedProduct.RecordDetail.ProvisionedProductName', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisionedProductName: this.input.provisionedProductName,
          PhysicalId: this.input.physicalId,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportAsProvisionedProduct.RecordDetail.Status', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisionedProductName: this.input.provisionedProductName,
          PhysicalId: this.input.physicalId,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportAsProvisionedProduct.RecordDetail.CreatedTime', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisionedProductName: this.input.provisionedProductName,
          PhysicalId: this.input.physicalId,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportAsProvisionedProduct.RecordDetail.UpdatedTime', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisionedProductName: this.input.provisionedProductName,
          PhysicalId: this.input.physicalId,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportAsProvisionedProduct.RecordDetail.ProvisionedProductType', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisionedProductName: this.input.provisionedProductName,
          PhysicalId: this.input.physicalId,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportAsProvisionedProduct.RecordDetail.RecordType', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisionedProductName: this.input.provisionedProductName,
          PhysicalId: this.input.physicalId,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportAsProvisionedProduct.RecordDetail.ProvisionedProductId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisionedProductName: this.input.provisionedProductName,
          PhysicalId: this.input.physicalId,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportAsProvisionedProduct.RecordDetail.ProductId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisionedProductName: this.input.provisionedProductName,
          PhysicalId: this.input.physicalId,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportAsProvisionedProduct.RecordDetail.ProvisioningArtifactId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisionedProductName: this.input.provisionedProductName,
          PhysicalId: this.input.physicalId,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportAsProvisionedProduct.RecordDetail.PathId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisionedProductName: this.input.provisionedProductName,
          PhysicalId: this.input.physicalId,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportAsProvisionedProduct.RecordDetail.RecordErrors', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisionedProductName: this.input.provisionedProductName,
          PhysicalId: this.input.physicalId,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportAsProvisionedProduct.RecordDetail.RecordTags', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisionedProductName: this.input.provisionedProductName,
          PhysicalId: this.input.physicalId,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportAsProvisionedProduct.RecordDetail.LaunchRoleArn', props);
    return resource.getResponseField('RecordDetail.LaunchRoleArn') as unknown as string;
  }

}

export class ServiceCatalogListAcceptedPortfolioShares extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogListAcceptedPortfolioSharesInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          PageToken: this.input.pageToken,
          PageSize: this.input.pageSize,
          PortfolioShareType: this.input.portfolioShareType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAcceptedPortfolioShares.PortfolioDetails', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          PageToken: this.input.pageToken,
          PageSize: this.input.pageSize,
          PortfolioShareType: this.input.portfolioShareType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAcceptedPortfolioShares.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ServiceCatalogListBudgetsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogListBudgetsForResourceInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          ResourceId: this.input.resourceId,
          PageSize: this.input.pageSize,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBudgetsForResource.Budgets', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ResourceId: this.input.resourceId,
          PageSize: this.input.pageSize,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBudgetsForResource.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ServiceCatalogListConstraintsForPortfolio extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogListConstraintsForPortfolioInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          PortfolioId: this.input.portfolioId,
          ProductId: this.input.productId,
          PageSize: this.input.pageSize,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListConstraintsForPortfolio.ConstraintDetails', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          PortfolioId: this.input.portfolioId,
          ProductId: this.input.productId,
          PageSize: this.input.pageSize,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListConstraintsForPortfolio.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ServiceCatalogListLaunchPaths extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogListLaunchPathsInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          PageSize: this.input.pageSize,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListLaunchPaths.LaunchPathSummaries', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          PageSize: this.input.pageSize,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListLaunchPaths.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ServiceCatalogListOrganizationPortfolioAccess extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogListOrganizationPortfolioAccessInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          PortfolioId: this.input.portfolioId,
          OrganizationNodeType: this.input.organizationNodeType,
          PageToken: this.input.pageToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListOrganizationPortfolioAccess.OrganizationNodes', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          PortfolioId: this.input.portfolioId,
          OrganizationNodeType: this.input.organizationNodeType,
          PageToken: this.input.pageToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListOrganizationPortfolioAccess.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ServiceCatalogListPortfolioAccess extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogListPortfolioAccessInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          PortfolioId: this.input.portfolioId,
          OrganizationParentId: this.input.organizationParentId,
          PageToken: this.input.pageToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPortfolioAccess.AccountIds', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          PortfolioId: this.input.portfolioId,
          OrganizationParentId: this.input.organizationParentId,
          PageToken: this.input.pageToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPortfolioAccess.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ServiceCatalogListPortfolios extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogListPortfoliosInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          PageToken: this.input.pageToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPortfolios.PortfolioDetails', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          PageToken: this.input.pageToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPortfolios.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ServiceCatalogListPortfoliosForProduct extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogListPortfoliosForProductInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          PageToken: this.input.pageToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPortfoliosForProduct.PortfolioDetails', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          PageToken: this.input.pageToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPortfoliosForProduct.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ServiceCatalogListPrincipalsForPortfolio extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogListPrincipalsForPortfolioInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          PortfolioId: this.input.portfolioId,
          PageSize: this.input.pageSize,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPrincipalsForPortfolio.Principals', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          PortfolioId: this.input.portfolioId,
          PageSize: this.input.pageSize,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPrincipalsForPortfolio.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ServiceCatalogListProvisionedProductPlans extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogListProvisionedProductPlansInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProvisionProductId: this.input.provisionProductId,
          PageSize: this.input.pageSize,
          PageToken: this.input.pageToken,
          AccessLevelFilter: {
            Key: this.input.accessLevelFilter?.key,
            Value: this.input.accessLevelFilter?.value,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProvisionedProductPlans.ProvisionedProductPlans', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProvisionProductId: this.input.provisionProductId,
          PageSize: this.input.pageSize,
          PageToken: this.input.pageToken,
          AccessLevelFilter: {
            Key: this.input.accessLevelFilter?.key,
            Value: this.input.accessLevelFilter?.value,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProvisionedProductPlans.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ServiceCatalogListProvisioningArtifacts extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogListProvisioningArtifactsInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProvisioningArtifacts.ProvisioningArtifactDetails', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProvisioningArtifacts.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ServiceCatalogListProvisioningArtifactsForServiceAction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogListProvisioningArtifactsForServiceActionInput) {
    super(scope, id);
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
          ServiceActionId: this.input.serviceActionId,
          PageSize: this.input.pageSize,
          PageToken: this.input.pageToken,
          AcceptLanguage: this.input.acceptLanguage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProvisioningArtifactsForServiceAction.ProvisioningArtifactViews', props);
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
          ServiceActionId: this.input.serviceActionId,
          PageSize: this.input.pageSize,
          PageToken: this.input.pageToken,
          AcceptLanguage: this.input.acceptLanguage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProvisioningArtifactsForServiceAction.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ServiceCatalogListRecordHistory extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogListRecordHistoryInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          AccessLevelFilter: {
            Key: this.input.accessLevelFilter?.key,
            Value: this.input.accessLevelFilter?.value,
          },
          SearchFilter: {
            Key: this.input.searchFilter?.key,
            Value: this.input.searchFilter?.value,
          },
          PageSize: this.input.pageSize,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRecordHistory.RecordDetails', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          AccessLevelFilter: {
            Key: this.input.accessLevelFilter?.key,
            Value: this.input.accessLevelFilter?.value,
          },
          SearchFilter: {
            Key: this.input.searchFilter?.key,
            Value: this.input.searchFilter?.value,
          },
          PageSize: this.input.pageSize,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRecordHistory.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ServiceCatalogListResourcesForTagOption extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogListResourcesForTagOptionInput) {
    super(scope, id);
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
          TagOptionId: this.input.tagOptionId,
          ResourceType: this.input.resourceType,
          PageSize: this.input.pageSize,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResourcesForTagOption.ResourceDetails', props);
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
          TagOptionId: this.input.tagOptionId,
          ResourceType: this.input.resourceType,
          PageSize: this.input.pageSize,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResourcesForTagOption.PageToken', props);
    return resource.getResponseField('PageToken') as unknown as string;
  }

}

export class ServiceCatalogListServiceActions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogListServiceActionsInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          PageSize: this.input.pageSize,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListServiceActions.ServiceActionSummaries', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          PageSize: this.input.pageSize,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListServiceActions.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ServiceCatalogListServiceActionsForProvisioningArtifact extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogListServiceActionsForProvisioningArtifactInput) {
    super(scope, id);
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
          ProductId: this.input.productId,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          PageSize: this.input.pageSize,
          PageToken: this.input.pageToken,
          AcceptLanguage: this.input.acceptLanguage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListServiceActionsForProvisioningArtifact.ServiceActionSummaries', props);
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
          ProductId: this.input.productId,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          PageSize: this.input.pageSize,
          PageToken: this.input.pageToken,
          AcceptLanguage: this.input.acceptLanguage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListServiceActionsForProvisioningArtifact.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ServiceCatalogListStackInstancesForProvisionedProduct extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogListStackInstancesForProvisionedProductInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProvisionedProductId: this.input.provisionedProductId,
          PageToken: this.input.pageToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListStackInstancesForProvisionedProduct.StackInstances', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProvisionedProductId: this.input.provisionedProductId,
          PageToken: this.input.pageToken,
          PageSize: this.input.pageSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListStackInstancesForProvisionedProduct.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ServiceCatalogListTagOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogListTagOptionsInput) {
    super(scope, id);
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
            Key: this.input.filters?.key,
            Value: this.input.filters?.value,
            Active: this.input.filters?.active,
          },
          PageSize: this.input.pageSize,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagOptions.TagOptionDetails', props);
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
            Key: this.input.filters?.key,
            Value: this.input.filters?.value,
            Active: this.input.filters?.active,
          },
          PageSize: this.input.pageSize,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagOptions.PageToken', props);
    return resource.getResponseField('PageToken') as unknown as string;
  }

}

export class ServiceCatalogProvisionProduct extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogProvisionProductInput) {
    super(scope, id);
  }

  public get recordDetail(): ServiceCatalogProvisionProductRecordDetail {
    return new ServiceCatalogProvisionProductRecordDetail(this, 'RecordDetail', this.__resources, this.input);
  }

}

export class ServiceCatalogProvisionProductRecordDetail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogProvisionProductInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          ProductName: this.input.productName,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisioningArtifactName: this.input.provisioningArtifactName,
          PathId: this.input.pathId,
          PathName: this.input.pathName,
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisioningParameters: this.input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
          },
          Tags: this.input.tags,
          NotificationArns: this.input.notificationArns,
          ProvisionToken: this.input.provisionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ProvisionProduct.RecordDetail.RecordId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          ProductName: this.input.productName,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisioningArtifactName: this.input.provisioningArtifactName,
          PathId: this.input.pathId,
          PathName: this.input.pathName,
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisioningParameters: this.input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
          },
          Tags: this.input.tags,
          NotificationArns: this.input.notificationArns,
          ProvisionToken: this.input.provisionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ProvisionProduct.RecordDetail.ProvisionedProductName', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          ProductName: this.input.productName,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisioningArtifactName: this.input.provisioningArtifactName,
          PathId: this.input.pathId,
          PathName: this.input.pathName,
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisioningParameters: this.input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
          },
          Tags: this.input.tags,
          NotificationArns: this.input.notificationArns,
          ProvisionToken: this.input.provisionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ProvisionProduct.RecordDetail.Status', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          ProductName: this.input.productName,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisioningArtifactName: this.input.provisioningArtifactName,
          PathId: this.input.pathId,
          PathName: this.input.pathName,
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisioningParameters: this.input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
          },
          Tags: this.input.tags,
          NotificationArns: this.input.notificationArns,
          ProvisionToken: this.input.provisionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ProvisionProduct.RecordDetail.CreatedTime', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          ProductName: this.input.productName,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisioningArtifactName: this.input.provisioningArtifactName,
          PathId: this.input.pathId,
          PathName: this.input.pathName,
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisioningParameters: this.input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
          },
          Tags: this.input.tags,
          NotificationArns: this.input.notificationArns,
          ProvisionToken: this.input.provisionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ProvisionProduct.RecordDetail.UpdatedTime', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          ProductName: this.input.productName,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisioningArtifactName: this.input.provisioningArtifactName,
          PathId: this.input.pathId,
          PathName: this.input.pathName,
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisioningParameters: this.input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
          },
          Tags: this.input.tags,
          NotificationArns: this.input.notificationArns,
          ProvisionToken: this.input.provisionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ProvisionProduct.RecordDetail.ProvisionedProductType', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          ProductName: this.input.productName,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisioningArtifactName: this.input.provisioningArtifactName,
          PathId: this.input.pathId,
          PathName: this.input.pathName,
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisioningParameters: this.input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
          },
          Tags: this.input.tags,
          NotificationArns: this.input.notificationArns,
          ProvisionToken: this.input.provisionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ProvisionProduct.RecordDetail.RecordType', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          ProductName: this.input.productName,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisioningArtifactName: this.input.provisioningArtifactName,
          PathId: this.input.pathId,
          PathName: this.input.pathName,
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisioningParameters: this.input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
          },
          Tags: this.input.tags,
          NotificationArns: this.input.notificationArns,
          ProvisionToken: this.input.provisionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ProvisionProduct.RecordDetail.ProvisionedProductId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          ProductName: this.input.productName,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisioningArtifactName: this.input.provisioningArtifactName,
          PathId: this.input.pathId,
          PathName: this.input.pathName,
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisioningParameters: this.input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
          },
          Tags: this.input.tags,
          NotificationArns: this.input.notificationArns,
          ProvisionToken: this.input.provisionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ProvisionProduct.RecordDetail.ProductId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          ProductName: this.input.productName,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisioningArtifactName: this.input.provisioningArtifactName,
          PathId: this.input.pathId,
          PathName: this.input.pathName,
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisioningParameters: this.input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
          },
          Tags: this.input.tags,
          NotificationArns: this.input.notificationArns,
          ProvisionToken: this.input.provisionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ProvisionProduct.RecordDetail.ProvisioningArtifactId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          ProductName: this.input.productName,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisioningArtifactName: this.input.provisioningArtifactName,
          PathId: this.input.pathId,
          PathName: this.input.pathName,
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisioningParameters: this.input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
          },
          Tags: this.input.tags,
          NotificationArns: this.input.notificationArns,
          ProvisionToken: this.input.provisionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ProvisionProduct.RecordDetail.PathId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          ProductName: this.input.productName,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisioningArtifactName: this.input.provisioningArtifactName,
          PathId: this.input.pathId,
          PathName: this.input.pathName,
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisioningParameters: this.input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
          },
          Tags: this.input.tags,
          NotificationArns: this.input.notificationArns,
          ProvisionToken: this.input.provisionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ProvisionProduct.RecordDetail.RecordErrors', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          ProductName: this.input.productName,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisioningArtifactName: this.input.provisioningArtifactName,
          PathId: this.input.pathId,
          PathName: this.input.pathName,
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisioningParameters: this.input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
          },
          Tags: this.input.tags,
          NotificationArns: this.input.notificationArns,
          ProvisionToken: this.input.provisionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ProvisionProduct.RecordDetail.RecordTags', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          ProductName: this.input.productName,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisioningArtifactName: this.input.provisioningArtifactName,
          PathId: this.input.pathId,
          PathName: this.input.pathName,
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisioningParameters: this.input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
          },
          Tags: this.input.tags,
          NotificationArns: this.input.notificationArns,
          ProvisionToken: this.input.provisionToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ProvisionProduct.RecordDetail.LaunchRoleArn', props);
    return resource.getResponseField('RecordDetail.LaunchRoleArn') as unknown as string;
  }

}

export class ServiceCatalogScanProvisionedProducts extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogScanProvisionedProductsInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          AccessLevelFilter: {
            Key: this.input.accessLevelFilter?.key,
            Value: this.input.accessLevelFilter?.value,
          },
          PageSize: this.input.pageSize,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScanProvisionedProducts.ProvisionedProducts', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          AccessLevelFilter: {
            Key: this.input.accessLevelFilter?.key,
            Value: this.input.accessLevelFilter?.value,
          },
          PageSize: this.input.pageSize,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScanProvisionedProducts.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ServiceCatalogSearchProducts extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogSearchProductsInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          Filters: this.input.filters,
          PageSize: this.input.pageSize,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SearchProducts.ProductViewSummaries', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Filters: this.input.filters,
          PageSize: this.input.pageSize,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SearchProducts.ProductViewAggregations', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Filters: this.input.filters,
          PageSize: this.input.pageSize,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SearchProducts.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ServiceCatalogSearchProductsAsAdmin extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogSearchProductsAsAdminInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          PortfolioId: this.input.portfolioId,
          Filters: this.input.filters,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
          PageToken: this.input.pageToken,
          PageSize: this.input.pageSize,
          ProductSource: this.input.productSource,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SearchProductsAsAdmin.ProductViewDetails', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          PortfolioId: this.input.portfolioId,
          Filters: this.input.filters,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
          PageToken: this.input.pageToken,
          PageSize: this.input.pageSize,
          ProductSource: this.input.productSource,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SearchProductsAsAdmin.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ServiceCatalogSearchProvisionedProducts extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogSearchProvisionedProductsInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          AccessLevelFilter: {
            Key: this.input.accessLevelFilter?.key,
            Value: this.input.accessLevelFilter?.value,
          },
          Filters: this.input.filters,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
          PageSize: this.input.pageSize,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SearchProvisionedProducts.ProvisionedProducts', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          AccessLevelFilter: {
            Key: this.input.accessLevelFilter?.key,
            Value: this.input.accessLevelFilter?.value,
          },
          Filters: this.input.filters,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
          PageSize: this.input.pageSize,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SearchProvisionedProducts.TotalResultsCount', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          AccessLevelFilter: {
            Key: this.input.accessLevelFilter?.key,
            Value: this.input.accessLevelFilter?.value,
          },
          Filters: this.input.filters,
          SortBy: this.input.sortBy,
          SortOrder: this.input.sortOrder,
          PageSize: this.input.pageSize,
          PageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SearchProvisionedProducts.NextPageToken', props);
    return resource.getResponseField('NextPageToken') as unknown as string;
  }

}

export class ServiceCatalogTerminateProvisionedProduct extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogTerminateProvisionedProductInput) {
    super(scope, id);
  }

  public get recordDetail(): ServiceCatalogTerminateProvisionedProductRecordDetail {
    return new ServiceCatalogTerminateProvisionedProductRecordDetail(this, 'RecordDetail', this.__resources, this.input);
  }

}

export class ServiceCatalogTerminateProvisionedProductRecordDetail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogTerminateProvisionedProductInput) {
    super(scope, id);
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
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisionedProductId: this.input.provisionedProductId,
          TerminateToken: this.input.terminateToken,
          IgnoreErrors: this.input.ignoreErrors,
          AcceptLanguage: this.input.acceptLanguage,
          RetainPhysicalResources: this.input.retainPhysicalResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateProvisionedProduct.RecordDetail.RecordId', props);
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
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisionedProductId: this.input.provisionedProductId,
          TerminateToken: this.input.terminateToken,
          IgnoreErrors: this.input.ignoreErrors,
          AcceptLanguage: this.input.acceptLanguage,
          RetainPhysicalResources: this.input.retainPhysicalResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateProvisionedProduct.RecordDetail.ProvisionedProductName', props);
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
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisionedProductId: this.input.provisionedProductId,
          TerminateToken: this.input.terminateToken,
          IgnoreErrors: this.input.ignoreErrors,
          AcceptLanguage: this.input.acceptLanguage,
          RetainPhysicalResources: this.input.retainPhysicalResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateProvisionedProduct.RecordDetail.Status', props);
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
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisionedProductId: this.input.provisionedProductId,
          TerminateToken: this.input.terminateToken,
          IgnoreErrors: this.input.ignoreErrors,
          AcceptLanguage: this.input.acceptLanguage,
          RetainPhysicalResources: this.input.retainPhysicalResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateProvisionedProduct.RecordDetail.CreatedTime', props);
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
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisionedProductId: this.input.provisionedProductId,
          TerminateToken: this.input.terminateToken,
          IgnoreErrors: this.input.ignoreErrors,
          AcceptLanguage: this.input.acceptLanguage,
          RetainPhysicalResources: this.input.retainPhysicalResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateProvisionedProduct.RecordDetail.UpdatedTime', props);
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
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisionedProductId: this.input.provisionedProductId,
          TerminateToken: this.input.terminateToken,
          IgnoreErrors: this.input.ignoreErrors,
          AcceptLanguage: this.input.acceptLanguage,
          RetainPhysicalResources: this.input.retainPhysicalResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateProvisionedProduct.RecordDetail.ProvisionedProductType', props);
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
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisionedProductId: this.input.provisionedProductId,
          TerminateToken: this.input.terminateToken,
          IgnoreErrors: this.input.ignoreErrors,
          AcceptLanguage: this.input.acceptLanguage,
          RetainPhysicalResources: this.input.retainPhysicalResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateProvisionedProduct.RecordDetail.RecordType', props);
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
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisionedProductId: this.input.provisionedProductId,
          TerminateToken: this.input.terminateToken,
          IgnoreErrors: this.input.ignoreErrors,
          AcceptLanguage: this.input.acceptLanguage,
          RetainPhysicalResources: this.input.retainPhysicalResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateProvisionedProduct.RecordDetail.ProvisionedProductId', props);
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
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisionedProductId: this.input.provisionedProductId,
          TerminateToken: this.input.terminateToken,
          IgnoreErrors: this.input.ignoreErrors,
          AcceptLanguage: this.input.acceptLanguage,
          RetainPhysicalResources: this.input.retainPhysicalResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateProvisionedProduct.RecordDetail.ProductId', props);
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
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisionedProductId: this.input.provisionedProductId,
          TerminateToken: this.input.terminateToken,
          IgnoreErrors: this.input.ignoreErrors,
          AcceptLanguage: this.input.acceptLanguage,
          RetainPhysicalResources: this.input.retainPhysicalResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateProvisionedProduct.RecordDetail.ProvisioningArtifactId', props);
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
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisionedProductId: this.input.provisionedProductId,
          TerminateToken: this.input.terminateToken,
          IgnoreErrors: this.input.ignoreErrors,
          AcceptLanguage: this.input.acceptLanguage,
          RetainPhysicalResources: this.input.retainPhysicalResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateProvisionedProduct.RecordDetail.PathId', props);
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
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisionedProductId: this.input.provisionedProductId,
          TerminateToken: this.input.terminateToken,
          IgnoreErrors: this.input.ignoreErrors,
          AcceptLanguage: this.input.acceptLanguage,
          RetainPhysicalResources: this.input.retainPhysicalResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateProvisionedProduct.RecordDetail.RecordErrors', props);
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
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisionedProductId: this.input.provisionedProductId,
          TerminateToken: this.input.terminateToken,
          IgnoreErrors: this.input.ignoreErrors,
          AcceptLanguage: this.input.acceptLanguage,
          RetainPhysicalResources: this.input.retainPhysicalResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateProvisionedProduct.RecordDetail.RecordTags', props);
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
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisionedProductId: this.input.provisionedProductId,
          TerminateToken: this.input.terminateToken,
          IgnoreErrors: this.input.ignoreErrors,
          AcceptLanguage: this.input.acceptLanguage,
          RetainPhysicalResources: this.input.retainPhysicalResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateProvisionedProduct.RecordDetail.LaunchRoleArn', props);
    return resource.getResponseField('RecordDetail.LaunchRoleArn') as unknown as string;
  }

}

export class ServiceCatalogUpdateConstraint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogUpdateConstraintInput) {
    super(scope, id);
  }

  public get constraintDetail(): ServiceCatalogUpdateConstraintConstraintDetail {
    return new ServiceCatalogUpdateConstraintConstraintDetail(this, 'ConstraintDetail', this.__resources, this.input);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Description: this.input.description,
          Parameters: this.input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateConstraint.ConstraintParameters', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Description: this.input.description,
          Parameters: this.input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateConstraint.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class ServiceCatalogUpdateConstraintConstraintDetail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogUpdateConstraintInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Description: this.input.description,
          Parameters: this.input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateConstraint.ConstraintDetail.ConstraintId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Description: this.input.description,
          Parameters: this.input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateConstraint.ConstraintDetail.Type', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Description: this.input.description,
          Parameters: this.input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateConstraint.ConstraintDetail.Description', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Description: this.input.description,
          Parameters: this.input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateConstraint.ConstraintDetail.Owner', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Description: this.input.description,
          Parameters: this.input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateConstraint.ConstraintDetail.ProductId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Description: this.input.description,
          Parameters: this.input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateConstraint.ConstraintDetail.PortfolioId', props);
    return resource.getResponseField('ConstraintDetail.PortfolioId') as unknown as string;
  }

}

export class ServiceCatalogUpdatePortfolio extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogUpdatePortfolioInput) {
    super(scope, id);
  }

  public get portfolioDetail(): ServiceCatalogUpdatePortfolioPortfolioDetail {
    return new ServiceCatalogUpdatePortfolioPortfolioDetail(this, 'PortfolioDetail', this.__resources, this.input);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          DisplayName: this.input.displayName,
          Description: this.input.description,
          ProviderName: this.input.providerName,
          AddTags: this.input.addTags,
          RemoveTags: this.input.removeTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePortfolio.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.ServiceCatalogTag[];
  }

}

export class ServiceCatalogUpdatePortfolioPortfolioDetail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogUpdatePortfolioInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          DisplayName: this.input.displayName,
          Description: this.input.description,
          ProviderName: this.input.providerName,
          AddTags: this.input.addTags,
          RemoveTags: this.input.removeTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePortfolio.PortfolioDetail.Id', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          DisplayName: this.input.displayName,
          Description: this.input.description,
          ProviderName: this.input.providerName,
          AddTags: this.input.addTags,
          RemoveTags: this.input.removeTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePortfolio.PortfolioDetail.ARN', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          DisplayName: this.input.displayName,
          Description: this.input.description,
          ProviderName: this.input.providerName,
          AddTags: this.input.addTags,
          RemoveTags: this.input.removeTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePortfolio.PortfolioDetail.DisplayName', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          DisplayName: this.input.displayName,
          Description: this.input.description,
          ProviderName: this.input.providerName,
          AddTags: this.input.addTags,
          RemoveTags: this.input.removeTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePortfolio.PortfolioDetail.Description', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          DisplayName: this.input.displayName,
          Description: this.input.description,
          ProviderName: this.input.providerName,
          AddTags: this.input.addTags,
          RemoveTags: this.input.removeTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePortfolio.PortfolioDetail.CreatedTime', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          DisplayName: this.input.displayName,
          Description: this.input.description,
          ProviderName: this.input.providerName,
          AddTags: this.input.addTags,
          RemoveTags: this.input.removeTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePortfolio.PortfolioDetail.ProviderName', props);
    return resource.getResponseField('PortfolioDetail.ProviderName') as unknown as string;
  }

}

export class ServiceCatalogUpdateProduct extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogUpdateProductInput) {
    super(scope, id);
  }

  public get productViewDetail(): ServiceCatalogUpdateProductProductViewDetail {
    return new ServiceCatalogUpdateProductProductViewDetail(this, 'ProductViewDetail', this.__resources, this.input);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
          Owner: this.input.owner,
          Description: this.input.description,
          Distributor: this.input.distributor,
          SupportDescription: this.input.supportDescription,
          SupportEmail: this.input.supportEmail,
          SupportUrl: this.input.supportUrl,
          AddTags: this.input.addTags,
          RemoveTags: this.input.removeTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProduct.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.ServiceCatalogTag[];
  }

}

export class ServiceCatalogUpdateProductProductViewDetail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogUpdateProductInput) {
    super(scope, id);
  }

  public get productViewSummary(): ServiceCatalogUpdateProductProductViewDetailProductViewSummary {
    return new ServiceCatalogUpdateProductProductViewDetailProductViewSummary(this, 'ProductViewSummary', this.__resources, this.input);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
          Owner: this.input.owner,
          Description: this.input.description,
          Distributor: this.input.distributor,
          SupportDescription: this.input.supportDescription,
          SupportEmail: this.input.supportEmail,
          SupportUrl: this.input.supportUrl,
          AddTags: this.input.addTags,
          RemoveTags: this.input.removeTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProduct.ProductViewDetail.Status', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
          Owner: this.input.owner,
          Description: this.input.description,
          Distributor: this.input.distributor,
          SupportDescription: this.input.supportDescription,
          SupportEmail: this.input.supportEmail,
          SupportUrl: this.input.supportUrl,
          AddTags: this.input.addTags,
          RemoveTags: this.input.removeTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProduct.ProductViewDetail.ProductARN', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
          Owner: this.input.owner,
          Description: this.input.description,
          Distributor: this.input.distributor,
          SupportDescription: this.input.supportDescription,
          SupportEmail: this.input.supportEmail,
          SupportUrl: this.input.supportUrl,
          AddTags: this.input.addTags,
          RemoveTags: this.input.removeTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProduct.ProductViewDetail.CreatedTime', props);
    return resource.getResponseField('ProductViewDetail.CreatedTime') as unknown as string;
  }

}

export class ServiceCatalogUpdateProductProductViewDetailProductViewSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogUpdateProductInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
          Owner: this.input.owner,
          Description: this.input.description,
          Distributor: this.input.distributor,
          SupportDescription: this.input.supportDescription,
          SupportEmail: this.input.supportEmail,
          SupportUrl: this.input.supportUrl,
          AddTags: this.input.addTags,
          RemoveTags: this.input.removeTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProduct.ProductViewDetail.ProductViewSummary.Id', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
          Owner: this.input.owner,
          Description: this.input.description,
          Distributor: this.input.distributor,
          SupportDescription: this.input.supportDescription,
          SupportEmail: this.input.supportEmail,
          SupportUrl: this.input.supportUrl,
          AddTags: this.input.addTags,
          RemoveTags: this.input.removeTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProduct.ProductViewDetail.ProductViewSummary.ProductId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
          Owner: this.input.owner,
          Description: this.input.description,
          Distributor: this.input.distributor,
          SupportDescription: this.input.supportDescription,
          SupportEmail: this.input.supportEmail,
          SupportUrl: this.input.supportUrl,
          AddTags: this.input.addTags,
          RemoveTags: this.input.removeTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProduct.ProductViewDetail.ProductViewSummary.Name', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
          Owner: this.input.owner,
          Description: this.input.description,
          Distributor: this.input.distributor,
          SupportDescription: this.input.supportDescription,
          SupportEmail: this.input.supportEmail,
          SupportUrl: this.input.supportUrl,
          AddTags: this.input.addTags,
          RemoveTags: this.input.removeTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProduct.ProductViewDetail.ProductViewSummary.Owner', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
          Owner: this.input.owner,
          Description: this.input.description,
          Distributor: this.input.distributor,
          SupportDescription: this.input.supportDescription,
          SupportEmail: this.input.supportEmail,
          SupportUrl: this.input.supportUrl,
          AddTags: this.input.addTags,
          RemoveTags: this.input.removeTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProduct.ProductViewDetail.ProductViewSummary.ShortDescription', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
          Owner: this.input.owner,
          Description: this.input.description,
          Distributor: this.input.distributor,
          SupportDescription: this.input.supportDescription,
          SupportEmail: this.input.supportEmail,
          SupportUrl: this.input.supportUrl,
          AddTags: this.input.addTags,
          RemoveTags: this.input.removeTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProduct.ProductViewDetail.ProductViewSummary.Type', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
          Owner: this.input.owner,
          Description: this.input.description,
          Distributor: this.input.distributor,
          SupportDescription: this.input.supportDescription,
          SupportEmail: this.input.supportEmail,
          SupportUrl: this.input.supportUrl,
          AddTags: this.input.addTags,
          RemoveTags: this.input.removeTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProduct.ProductViewDetail.ProductViewSummary.Distributor', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
          Owner: this.input.owner,
          Description: this.input.description,
          Distributor: this.input.distributor,
          SupportDescription: this.input.supportDescription,
          SupportEmail: this.input.supportEmail,
          SupportUrl: this.input.supportUrl,
          AddTags: this.input.addTags,
          RemoveTags: this.input.removeTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProduct.ProductViewDetail.ProductViewSummary.HasDefaultPath', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
          Owner: this.input.owner,
          Description: this.input.description,
          Distributor: this.input.distributor,
          SupportDescription: this.input.supportDescription,
          SupportEmail: this.input.supportEmail,
          SupportUrl: this.input.supportUrl,
          AddTags: this.input.addTags,
          RemoveTags: this.input.removeTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProduct.ProductViewDetail.ProductViewSummary.SupportEmail', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
          Owner: this.input.owner,
          Description: this.input.description,
          Distributor: this.input.distributor,
          SupportDescription: this.input.supportDescription,
          SupportEmail: this.input.supportEmail,
          SupportUrl: this.input.supportUrl,
          AddTags: this.input.addTags,
          RemoveTags: this.input.removeTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProduct.ProductViewDetail.ProductViewSummary.SupportDescription', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          Id: this.input.id,
          Name: this.input.name,
          Owner: this.input.owner,
          Description: this.input.description,
          Distributor: this.input.distributor,
          SupportDescription: this.input.supportDescription,
          SupportEmail: this.input.supportEmail,
          SupportUrl: this.input.supportUrl,
          AddTags: this.input.addTags,
          RemoveTags: this.input.removeTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProduct.ProductViewDetail.ProductViewSummary.SupportUrl', props);
    return resource.getResponseField('ProductViewDetail.ProductViewSummary.SupportUrl') as unknown as string;
  }

}

export class ServiceCatalogUpdateProvisionedProduct extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogUpdateProvisionedProductInput) {
    super(scope, id);
  }

  public get recordDetail(): ServiceCatalogUpdateProvisionedProductRecordDetail {
    return new ServiceCatalogUpdateProvisionedProductRecordDetail(this, 'RecordDetail', this.__resources, this.input);
  }

}

export class ServiceCatalogUpdateProvisionedProductRecordDetail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogUpdateProvisionedProductInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisionedProductId: this.input.provisionedProductId,
          ProductId: this.input.productId,
          ProductName: this.input.productName,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisioningArtifactName: this.input.provisioningArtifactName,
          PathId: this.input.pathId,
          PathName: this.input.pathName,
          ProvisioningParameters: this.input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
            StackSetOperationType: this.input.provisioningPreferences?.stackSetOperationType,
          },
          Tags: this.input.tags,
          UpdateToken: this.input.updateToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProvisionedProduct.RecordDetail.RecordId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisionedProductId: this.input.provisionedProductId,
          ProductId: this.input.productId,
          ProductName: this.input.productName,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisioningArtifactName: this.input.provisioningArtifactName,
          PathId: this.input.pathId,
          PathName: this.input.pathName,
          ProvisioningParameters: this.input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
            StackSetOperationType: this.input.provisioningPreferences?.stackSetOperationType,
          },
          Tags: this.input.tags,
          UpdateToken: this.input.updateToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProvisionedProduct.RecordDetail.ProvisionedProductName', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisionedProductId: this.input.provisionedProductId,
          ProductId: this.input.productId,
          ProductName: this.input.productName,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisioningArtifactName: this.input.provisioningArtifactName,
          PathId: this.input.pathId,
          PathName: this.input.pathName,
          ProvisioningParameters: this.input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
            StackSetOperationType: this.input.provisioningPreferences?.stackSetOperationType,
          },
          Tags: this.input.tags,
          UpdateToken: this.input.updateToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProvisionedProduct.RecordDetail.Status', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisionedProductId: this.input.provisionedProductId,
          ProductId: this.input.productId,
          ProductName: this.input.productName,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisioningArtifactName: this.input.provisioningArtifactName,
          PathId: this.input.pathId,
          PathName: this.input.pathName,
          ProvisioningParameters: this.input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
            StackSetOperationType: this.input.provisioningPreferences?.stackSetOperationType,
          },
          Tags: this.input.tags,
          UpdateToken: this.input.updateToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProvisionedProduct.RecordDetail.CreatedTime', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisionedProductId: this.input.provisionedProductId,
          ProductId: this.input.productId,
          ProductName: this.input.productName,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisioningArtifactName: this.input.provisioningArtifactName,
          PathId: this.input.pathId,
          PathName: this.input.pathName,
          ProvisioningParameters: this.input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
            StackSetOperationType: this.input.provisioningPreferences?.stackSetOperationType,
          },
          Tags: this.input.tags,
          UpdateToken: this.input.updateToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProvisionedProduct.RecordDetail.UpdatedTime', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisionedProductId: this.input.provisionedProductId,
          ProductId: this.input.productId,
          ProductName: this.input.productName,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisioningArtifactName: this.input.provisioningArtifactName,
          PathId: this.input.pathId,
          PathName: this.input.pathName,
          ProvisioningParameters: this.input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
            StackSetOperationType: this.input.provisioningPreferences?.stackSetOperationType,
          },
          Tags: this.input.tags,
          UpdateToken: this.input.updateToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProvisionedProduct.RecordDetail.ProvisionedProductType', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisionedProductId: this.input.provisionedProductId,
          ProductId: this.input.productId,
          ProductName: this.input.productName,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisioningArtifactName: this.input.provisioningArtifactName,
          PathId: this.input.pathId,
          PathName: this.input.pathName,
          ProvisioningParameters: this.input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
            StackSetOperationType: this.input.provisioningPreferences?.stackSetOperationType,
          },
          Tags: this.input.tags,
          UpdateToken: this.input.updateToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProvisionedProduct.RecordDetail.RecordType', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisionedProductId: this.input.provisionedProductId,
          ProductId: this.input.productId,
          ProductName: this.input.productName,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisioningArtifactName: this.input.provisioningArtifactName,
          PathId: this.input.pathId,
          PathName: this.input.pathName,
          ProvisioningParameters: this.input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
            StackSetOperationType: this.input.provisioningPreferences?.stackSetOperationType,
          },
          Tags: this.input.tags,
          UpdateToken: this.input.updateToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProvisionedProduct.RecordDetail.ProvisionedProductId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisionedProductId: this.input.provisionedProductId,
          ProductId: this.input.productId,
          ProductName: this.input.productName,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisioningArtifactName: this.input.provisioningArtifactName,
          PathId: this.input.pathId,
          PathName: this.input.pathName,
          ProvisioningParameters: this.input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
            StackSetOperationType: this.input.provisioningPreferences?.stackSetOperationType,
          },
          Tags: this.input.tags,
          UpdateToken: this.input.updateToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProvisionedProduct.RecordDetail.ProductId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisionedProductId: this.input.provisionedProductId,
          ProductId: this.input.productId,
          ProductName: this.input.productName,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisioningArtifactName: this.input.provisioningArtifactName,
          PathId: this.input.pathId,
          PathName: this.input.pathName,
          ProvisioningParameters: this.input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
            StackSetOperationType: this.input.provisioningPreferences?.stackSetOperationType,
          },
          Tags: this.input.tags,
          UpdateToken: this.input.updateToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProvisionedProduct.RecordDetail.ProvisioningArtifactId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisionedProductId: this.input.provisionedProductId,
          ProductId: this.input.productId,
          ProductName: this.input.productName,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisioningArtifactName: this.input.provisioningArtifactName,
          PathId: this.input.pathId,
          PathName: this.input.pathName,
          ProvisioningParameters: this.input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
            StackSetOperationType: this.input.provisioningPreferences?.stackSetOperationType,
          },
          Tags: this.input.tags,
          UpdateToken: this.input.updateToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProvisionedProduct.RecordDetail.PathId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisionedProductId: this.input.provisionedProductId,
          ProductId: this.input.productId,
          ProductName: this.input.productName,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisioningArtifactName: this.input.provisioningArtifactName,
          PathId: this.input.pathId,
          PathName: this.input.pathName,
          ProvisioningParameters: this.input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
            StackSetOperationType: this.input.provisioningPreferences?.stackSetOperationType,
          },
          Tags: this.input.tags,
          UpdateToken: this.input.updateToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProvisionedProduct.RecordDetail.RecordErrors', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisionedProductId: this.input.provisionedProductId,
          ProductId: this.input.productId,
          ProductName: this.input.productName,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisioningArtifactName: this.input.provisioningArtifactName,
          PathId: this.input.pathId,
          PathName: this.input.pathName,
          ProvisioningParameters: this.input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
            StackSetOperationType: this.input.provisioningPreferences?.stackSetOperationType,
          },
          Tags: this.input.tags,
          UpdateToken: this.input.updateToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProvisionedProduct.RecordDetail.RecordTags', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProvisionedProductName: this.input.provisionedProductName,
          ProvisionedProductId: this.input.provisionedProductId,
          ProductId: this.input.productId,
          ProductName: this.input.productName,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          ProvisioningArtifactName: this.input.provisioningArtifactName,
          PathId: this.input.pathId,
          PathName: this.input.pathName,
          ProvisioningParameters: this.input.provisioningParameters,
          ProvisioningPreferences: {
            StackSetAccounts: this.input.provisioningPreferences?.stackSetAccounts,
            StackSetRegions: this.input.provisioningPreferences?.stackSetRegions,
            StackSetFailureToleranceCount: this.input.provisioningPreferences?.stackSetFailureToleranceCount,
            StackSetFailureTolerancePercentage: this.input.provisioningPreferences?.stackSetFailureTolerancePercentage,
            StackSetMaxConcurrencyCount: this.input.provisioningPreferences?.stackSetMaxConcurrencyCount,
            StackSetMaxConcurrencyPercentage: this.input.provisioningPreferences?.stackSetMaxConcurrencyPercentage,
            StackSetOperationType: this.input.provisioningPreferences?.stackSetOperationType,
          },
          Tags: this.input.tags,
          UpdateToken: this.input.updateToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProvisionedProduct.RecordDetail.LaunchRoleArn', props);
    return resource.getResponseField('RecordDetail.LaunchRoleArn') as unknown as string;
  }

}

export class ServiceCatalogUpdateProvisionedProductProperties extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogUpdateProvisionedProductPropertiesInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProvisionedProductId: this.input.provisionedProductId,
          ProvisionedProductProperties: this.input.provisionedProductProperties,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProvisionedProductProperties.ProvisionedProductId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProvisionedProductId: this.input.provisionedProductId,
          ProvisionedProductProperties: this.input.provisionedProductProperties,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProvisionedProductProperties.ProvisionedProductProperties', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProvisionedProductId: this.input.provisionedProductId,
          ProvisionedProductProperties: this.input.provisionedProductProperties,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProvisionedProductProperties.RecordId', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProvisionedProductId: this.input.provisionedProductId,
          ProvisionedProductProperties: this.input.provisionedProductProperties,
          IdempotencyToken: this.input.idempotencyToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProvisionedProductProperties.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class ServiceCatalogUpdateProvisioningArtifact extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogUpdateProvisioningArtifactInput) {
    super(scope, id);
  }

  public get provisioningArtifactDetail(): ServiceCatalogUpdateProvisioningArtifactProvisioningArtifactDetail {
    return new ServiceCatalogUpdateProvisioningArtifactProvisioningArtifactDetail(this, 'ProvisioningArtifactDetail', this.__resources, this.input);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          Name: this.input.name,
          Description: this.input.description,
          Active: this.input.active,
          Guidance: this.input.guidance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProvisioningArtifact.Info', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          Name: this.input.name,
          Description: this.input.description,
          Active: this.input.active,
          Guidance: this.input.guidance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProvisioningArtifact.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class ServiceCatalogUpdateProvisioningArtifactProvisioningArtifactDetail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogUpdateProvisioningArtifactInput) {
    super(scope, id);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          Name: this.input.name,
          Description: this.input.description,
          Active: this.input.active,
          Guidance: this.input.guidance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProvisioningArtifact.ProvisioningArtifactDetail.Id', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          Name: this.input.name,
          Description: this.input.description,
          Active: this.input.active,
          Guidance: this.input.guidance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProvisioningArtifact.ProvisioningArtifactDetail.Name', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          Name: this.input.name,
          Description: this.input.description,
          Active: this.input.active,
          Guidance: this.input.guidance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProvisioningArtifact.ProvisioningArtifactDetail.Description', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          Name: this.input.name,
          Description: this.input.description,
          Active: this.input.active,
          Guidance: this.input.guidance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProvisioningArtifact.ProvisioningArtifactDetail.Type', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          Name: this.input.name,
          Description: this.input.description,
          Active: this.input.active,
          Guidance: this.input.guidance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProvisioningArtifact.ProvisioningArtifactDetail.CreatedTime', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          Name: this.input.name,
          Description: this.input.description,
          Active: this.input.active,
          Guidance: this.input.guidance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProvisioningArtifact.ProvisioningArtifactDetail.Active', props);
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
          AcceptLanguage: this.input.acceptLanguage,
          ProductId: this.input.productId,
          ProvisioningArtifactId: this.input.provisioningArtifactId,
          Name: this.input.name,
          Description: this.input.description,
          Active: this.input.active,
          Guidance: this.input.guidance,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProvisioningArtifact.ProvisioningArtifactDetail.Guidance', props);
    return resource.getResponseField('ProvisioningArtifactDetail.Guidance') as unknown as string;
  }

}

export class ServiceCatalogUpdateServiceAction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogUpdateServiceActionInput) {
    super(scope, id);
  }

  public get serviceActionDetail(): ServiceCatalogUpdateServiceActionServiceActionDetail {
    return new ServiceCatalogUpdateServiceActionServiceActionDetail(this, 'ServiceActionDetail', this.__resources, this.input);
  }

}

export class ServiceCatalogUpdateServiceActionServiceActionDetail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogUpdateServiceActionInput) {
    super(scope, id);
  }

  public get serviceActionSummary(): ServiceCatalogUpdateServiceActionServiceActionDetailServiceActionSummary {
    return new ServiceCatalogUpdateServiceActionServiceActionDetailServiceActionSummary(this, 'ServiceActionSummary', this.__resources, this.input);
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
          Id: this.input.id,
          Name: this.input.name,
          Definition: this.input.definition,
          Description: this.input.description,
          AcceptLanguage: this.input.acceptLanguage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServiceAction.ServiceActionDetail.Definition', props);
    return resource.getResponseField('ServiceActionDetail.Definition') as unknown as Record<string, string>;
  }

}

export class ServiceCatalogUpdateServiceActionServiceActionDetailServiceActionSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogUpdateServiceActionInput) {
    super(scope, id);
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
          Id: this.input.id,
          Name: this.input.name,
          Definition: this.input.definition,
          Description: this.input.description,
          AcceptLanguage: this.input.acceptLanguage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServiceAction.ServiceActionDetail.ServiceActionSummary.Id', props);
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
          Id: this.input.id,
          Name: this.input.name,
          Definition: this.input.definition,
          Description: this.input.description,
          AcceptLanguage: this.input.acceptLanguage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServiceAction.ServiceActionDetail.ServiceActionSummary.Name', props);
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
          Id: this.input.id,
          Name: this.input.name,
          Definition: this.input.definition,
          Description: this.input.description,
          AcceptLanguage: this.input.acceptLanguage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServiceAction.ServiceActionDetail.ServiceActionSummary.Description', props);
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
          Id: this.input.id,
          Name: this.input.name,
          Definition: this.input.definition,
          Description: this.input.description,
          AcceptLanguage: this.input.acceptLanguage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServiceAction.ServiceActionDetail.ServiceActionSummary.DefinitionType', props);
    return resource.getResponseField('ServiceActionDetail.ServiceActionSummary.DefinitionType') as unknown as string;
  }

}

export class ServiceCatalogUpdateTagOption extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogUpdateTagOptionInput) {
    super(scope, id);
  }

  public get tagOptionDetail(): ServiceCatalogUpdateTagOptionTagOptionDetail {
    return new ServiceCatalogUpdateTagOptionTagOptionDetail(this, 'TagOptionDetail', this.__resources, this.input);
  }

}

export class ServiceCatalogUpdateTagOptionTagOptionDetail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogUpdateTagOptionInput) {
    super(scope, id);
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
          Id: this.input.id,
          Value: this.input.value,
          Active: this.input.active,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTagOption.TagOptionDetail.Key', props);
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
          Id: this.input.id,
          Value: this.input.value,
          Active: this.input.active,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTagOption.TagOptionDetail.Value', props);
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
          Id: this.input.id,
          Value: this.input.value,
          Active: this.input.active,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTagOption.TagOptionDetail.Active', props);
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
          Id: this.input.id,
          Value: this.input.value,
          Active: this.input.active,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTagOption.TagOptionDetail.Id', props);
    return resource.getResponseField('TagOptionDetail.Id') as unknown as string;
  }

}

