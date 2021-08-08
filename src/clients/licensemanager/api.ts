import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class LicenseManagerClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public acceptGrant(input: shapes.LicenseManagerAcceptGrantRequest): LicenseManagerResponsesAcceptGrant {
    return new LicenseManagerResponsesAcceptGrant(this, this.__resources, input);
  }

  public checkInLicense(input: shapes.LicenseManagerCheckInLicenseRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'checkInLicense',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.CheckInLicense'),
        parameters: {
          LicenseConsumptionToken: input.licenseConsumptionToken,
          Beneficiary: input.beneficiary,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CheckInLicense', props);
  }

  public checkoutBorrowLicense(input: shapes.LicenseManagerCheckoutBorrowLicenseRequest): LicenseManagerResponsesCheckoutBorrowLicense {
    return new LicenseManagerResponsesCheckoutBorrowLicense(this, this.__resources, input);
  }

  public checkoutLicense(input: shapes.LicenseManagerCheckoutLicenseRequest): LicenseManagerResponsesCheckoutLicense {
    return new LicenseManagerResponsesCheckoutLicense(this, this.__resources, input);
  }

  public createGrant(input: shapes.LicenseManagerCreateGrantRequest): LicenseManagerResponsesCreateGrant {
    return new LicenseManagerResponsesCreateGrant(this, this.__resources, input);
  }

  public createGrantVersion(input: shapes.LicenseManagerCreateGrantVersionRequest): LicenseManagerResponsesCreateGrantVersion {
    return new LicenseManagerResponsesCreateGrantVersion(this, this.__resources, input);
  }

  public createLicense(input: shapes.LicenseManagerCreateLicenseRequest): LicenseManagerResponsesCreateLicense {
    return new LicenseManagerResponsesCreateLicense(this, this.__resources, input);
  }

  public createLicenseConfiguration(input: shapes.LicenseManagerCreateLicenseConfigurationRequest): LicenseManagerResponsesCreateLicenseConfiguration {
    return new LicenseManagerResponsesCreateLicenseConfiguration(this, this.__resources, input);
  }

  public createLicenseManagerReportGenerator(input: shapes.LicenseManagerCreateLicenseManagerReportGeneratorRequest): LicenseManagerResponsesCreateLicenseManagerReportGenerator {
    return new LicenseManagerResponsesCreateLicenseManagerReportGenerator(this, this.__resources, input);
  }

  public createLicenseVersion(input: shapes.LicenseManagerCreateLicenseVersionRequest): LicenseManagerResponsesCreateLicenseVersion {
    return new LicenseManagerResponsesCreateLicenseVersion(this, this.__resources, input);
  }

  public createToken(input: shapes.LicenseManagerCreateTokenRequest): LicenseManagerResponsesCreateToken {
    return new LicenseManagerResponsesCreateToken(this, this.__resources, input);
  }

  public deleteGrant(input: shapes.LicenseManagerDeleteGrantRequest): LicenseManagerResponsesDeleteGrant {
    return new LicenseManagerResponsesDeleteGrant(this, this.__resources, input);
  }

  public deleteLicense(input: shapes.LicenseManagerDeleteLicenseRequest): LicenseManagerResponsesDeleteLicense {
    return new LicenseManagerResponsesDeleteLicense(this, this.__resources, input);
  }

  public deleteLicenseConfiguration(input: shapes.LicenseManagerDeleteLicenseConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLicenseConfiguration',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.DeleteLicenseConfiguration'),
        parameters: {
          LicenseConfigurationArn: input.licenseConfigurationArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteLicenseConfiguration', props);
  }

  public deleteLicenseManagerReportGenerator(input: shapes.LicenseManagerDeleteLicenseManagerReportGeneratorRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLicenseManagerReportGenerator',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.DeleteLicenseManagerReportGenerator'),
        parameters: {
          LicenseManagerReportGeneratorArn: input.licenseManagerReportGeneratorArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteLicenseManagerReportGenerator', props);
  }

  public deleteToken(input: shapes.LicenseManagerDeleteTokenRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteToken',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.DeleteToken'),
        parameters: {
          TokenId: input.tokenId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteToken', props);
  }

  public extendLicenseConsumption(input: shapes.LicenseManagerExtendLicenseConsumptionRequest): LicenseManagerResponsesExtendLicenseConsumption {
    return new LicenseManagerResponsesExtendLicenseConsumption(this, this.__resources, input);
  }

  public fetchAccessToken(input: shapes.LicenseManagerGetAccessTokenRequest): LicenseManagerResponsesFetchAccessToken {
    return new LicenseManagerResponsesFetchAccessToken(this, this.__resources, input);
  }

  public fetchGrant(input: shapes.LicenseManagerGetGrantRequest): LicenseManagerResponsesFetchGrant {
    return new LicenseManagerResponsesFetchGrant(this, this.__resources, input);
  }

  public fetchLicense(input: shapes.LicenseManagerGetLicenseRequest): LicenseManagerResponsesFetchLicense {
    return new LicenseManagerResponsesFetchLicense(this, this.__resources, input);
  }

  public fetchLicenseConfiguration(input: shapes.LicenseManagerGetLicenseConfigurationRequest): LicenseManagerResponsesFetchLicenseConfiguration {
    return new LicenseManagerResponsesFetchLicenseConfiguration(this, this.__resources, input);
  }

  public fetchLicenseManagerReportGenerator(input: shapes.LicenseManagerGetLicenseManagerReportGeneratorRequest): LicenseManagerResponsesFetchLicenseManagerReportGenerator {
    return new LicenseManagerResponsesFetchLicenseManagerReportGenerator(this, this.__resources, input);
  }

  public fetchLicenseUsage(input: shapes.LicenseManagerGetLicenseUsageRequest): LicenseManagerResponsesFetchLicenseUsage {
    return new LicenseManagerResponsesFetchLicenseUsage(this, this.__resources, input);
  }

  public fetchServiceSettings(): LicenseManagerResponsesFetchServiceSettings {
    return new LicenseManagerResponsesFetchServiceSettings(this, this.__resources);
  }

  public listAssociationsForLicenseConfiguration(input: shapes.LicenseManagerListAssociationsForLicenseConfigurationRequest): LicenseManagerResponsesListAssociationsForLicenseConfiguration {
    return new LicenseManagerResponsesListAssociationsForLicenseConfiguration(this, this.__resources, input);
  }

  public listDistributedGrants(input: shapes.LicenseManagerListDistributedGrantsRequest): LicenseManagerResponsesListDistributedGrants {
    return new LicenseManagerResponsesListDistributedGrants(this, this.__resources, input);
  }

  public listFailuresForLicenseConfigurationOperations(input: shapes.LicenseManagerListFailuresForLicenseConfigurationOperationsRequest): LicenseManagerResponsesListFailuresForLicenseConfigurationOperations {
    return new LicenseManagerResponsesListFailuresForLicenseConfigurationOperations(this, this.__resources, input);
  }

  public listLicenseConfigurations(input: shapes.LicenseManagerListLicenseConfigurationsRequest): LicenseManagerResponsesListLicenseConfigurations {
    return new LicenseManagerResponsesListLicenseConfigurations(this, this.__resources, input);
  }

  public listLicenseManagerReportGenerators(input: shapes.LicenseManagerListLicenseManagerReportGeneratorsRequest): LicenseManagerResponsesListLicenseManagerReportGenerators {
    return new LicenseManagerResponsesListLicenseManagerReportGenerators(this, this.__resources, input);
  }

  public listLicenseSpecificationsForResource(input: shapes.LicenseManagerListLicenseSpecificationsForResourceRequest): LicenseManagerResponsesListLicenseSpecificationsForResource {
    return new LicenseManagerResponsesListLicenseSpecificationsForResource(this, this.__resources, input);
  }

  public listLicenseVersions(input: shapes.LicenseManagerListLicenseVersionsRequest): LicenseManagerResponsesListLicenseVersions {
    return new LicenseManagerResponsesListLicenseVersions(this, this.__resources, input);
  }

  public listLicenses(input: shapes.LicenseManagerListLicensesRequest): LicenseManagerResponsesListLicenses {
    return new LicenseManagerResponsesListLicenses(this, this.__resources, input);
  }

  public listReceivedGrants(input: shapes.LicenseManagerListReceivedGrantsRequest): LicenseManagerResponsesListReceivedGrants {
    return new LicenseManagerResponsesListReceivedGrants(this, this.__resources, input);
  }

  public listReceivedLicenses(input: shapes.LicenseManagerListReceivedLicensesRequest): LicenseManagerResponsesListReceivedLicenses {
    return new LicenseManagerResponsesListReceivedLicenses(this, this.__resources, input);
  }

  public listResourceInventory(input: shapes.LicenseManagerListResourceInventoryRequest): LicenseManagerResponsesListResourceInventory {
    return new LicenseManagerResponsesListResourceInventory(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.LicenseManagerListTagsForResourceRequest): LicenseManagerResponsesListTagsForResource {
    return new LicenseManagerResponsesListTagsForResource(this, this.__resources, input);
  }

  public listTokens(input: shapes.LicenseManagerListTokensRequest): LicenseManagerResponsesListTokens {
    return new LicenseManagerResponsesListTokens(this, this.__resources, input);
  }

  public listUsageForLicenseConfiguration(input: shapes.LicenseManagerListUsageForLicenseConfigurationRequest): LicenseManagerResponsesListUsageForLicenseConfiguration {
    return new LicenseManagerResponsesListUsageForLicenseConfiguration(this, this.__resources, input);
  }

  public rejectGrant(input: shapes.LicenseManagerRejectGrantRequest): LicenseManagerResponsesRejectGrant {
    return new LicenseManagerResponsesRejectGrant(this, this.__resources, input);
  }

  public tagResource(input: shapes.LicenseManagerTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.LicenseManagerUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateLicenseConfiguration(input: shapes.LicenseManagerUpdateLicenseConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLicenseConfiguration',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.UpdateLicenseConfiguration'),
        parameters: {
          LicenseConfigurationArn: input.licenseConfigurationArn,
          LicenseConfigurationStatus: input.licenseConfigurationStatus,
          LicenseRules: input.licenseRules,
          LicenseCount: input.licenseCount,
          LicenseCountHardLimit: input.licenseCountHardLimit,
          Name: input.name,
          Description: input.description,
          ProductInformationList: input.productInformationList,
          DisassociateWhenNotFound: input.disassociateWhenNotFound,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateLicenseConfiguration', props);
  }

  public updateLicenseManagerReportGenerator(input: shapes.LicenseManagerUpdateLicenseManagerReportGeneratorRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLicenseManagerReportGenerator',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.UpdateLicenseManagerReportGenerator'),
        parameters: {
          LicenseManagerReportGeneratorArn: input.licenseManagerReportGeneratorArn,
          ReportGeneratorName: input.reportGeneratorName,
          Type: input.type,
          ReportContext: {
            licenseConfigurationArns: input.reportContext.licenseConfigurationArns,
          },
          ReportFrequency: {
            value: input.reportFrequency.value,
            period: input.reportFrequency.period,
          },
          ClientToken: input.clientToken,
          Description: input.description,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateLicenseManagerReportGenerator', props);
  }

  public updateLicenseSpecificationsForResource(input: shapes.LicenseManagerUpdateLicenseSpecificationsForResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLicenseSpecificationsForResource',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.UpdateLicenseSpecificationsForResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          AddLicenseSpecifications: input.addLicenseSpecifications,
          RemoveLicenseSpecifications: input.removeLicenseSpecifications,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateLicenseSpecificationsForResource', props);
  }

  public updateServiceSettings(input: shapes.LicenseManagerUpdateServiceSettingsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceSettings',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.UpdateServiceSettings'),
        parameters: {
          S3BucketArn: input.s3BucketArn,
          SnsTopicArn: input.snsTopicArn,
          OrganizationConfiguration: {
            EnableIntegration: input.organizationConfiguration?.enableIntegration,
          },
          EnableCrossAccountsDiscovery: input.enableCrossAccountsDiscovery,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateServiceSettings', props);
  }

}

export class LicenseManagerResponsesAcceptGrant {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerAcceptGrantRequest) {
  }

  public get grantArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptGrant',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.AcceptGrant.GrantArn'),
        outputPath: 'GrantArn',
        parameters: {
          GrantArn: this.__input.grantArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcceptGrant.GrantArn', props);
    return resource.getResponseField('GrantArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptGrant',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.AcceptGrant.Status'),
        outputPath: 'Status',
        parameters: {
          GrantArn: this.__input.grantArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcceptGrant.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'acceptGrant',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.AcceptGrant.Version'),
        outputPath: 'Version',
        parameters: {
          GrantArn: this.__input.grantArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AcceptGrant.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

}

export class LicenseManagerResponsesCheckoutBorrowLicense {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerCheckoutBorrowLicenseRequest) {
  }

  public get licenseArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'checkoutBorrowLicense',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.CheckoutBorrowLicense.LicenseArn'),
        outputPath: 'LicenseArn',
        parameters: {
          LicenseArn: this.__input.licenseArn,
          Entitlements: this.__input.entitlements,
          DigitalSignatureMethod: this.__input.digitalSignatureMethod,
          NodeId: this.__input.nodeId,
          CheckoutMetadata: this.__input.checkoutMetadata,
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CheckoutBorrowLicense.LicenseArn', props);
    return resource.getResponseField('LicenseArn') as unknown as string;
  }

  public get licenseConsumptionToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'checkoutBorrowLicense',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.CheckoutBorrowLicense.LicenseConsumptionToken'),
        outputPath: 'LicenseConsumptionToken',
        parameters: {
          LicenseArn: this.__input.licenseArn,
          Entitlements: this.__input.entitlements,
          DigitalSignatureMethod: this.__input.digitalSignatureMethod,
          NodeId: this.__input.nodeId,
          CheckoutMetadata: this.__input.checkoutMetadata,
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CheckoutBorrowLicense.LicenseConsumptionToken', props);
    return resource.getResponseField('LicenseConsumptionToken') as unknown as string;
  }

  public get entitlementsAllowed(): shapes.LicenseManagerEntitlementData[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'checkoutBorrowLicense',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.CheckoutBorrowLicense.EntitlementsAllowed'),
        outputPath: 'EntitlementsAllowed',
        parameters: {
          LicenseArn: this.__input.licenseArn,
          Entitlements: this.__input.entitlements,
          DigitalSignatureMethod: this.__input.digitalSignatureMethod,
          NodeId: this.__input.nodeId,
          CheckoutMetadata: this.__input.checkoutMetadata,
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CheckoutBorrowLicense.EntitlementsAllowed', props);
    return resource.getResponseField('EntitlementsAllowed') as unknown as shapes.LicenseManagerEntitlementData[];
  }

  public get nodeId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'checkoutBorrowLicense',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.CheckoutBorrowLicense.NodeId'),
        outputPath: 'NodeId',
        parameters: {
          LicenseArn: this.__input.licenseArn,
          Entitlements: this.__input.entitlements,
          DigitalSignatureMethod: this.__input.digitalSignatureMethod,
          NodeId: this.__input.nodeId,
          CheckoutMetadata: this.__input.checkoutMetadata,
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CheckoutBorrowLicense.NodeId', props);
    return resource.getResponseField('NodeId') as unknown as string;
  }

  public get signedToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'checkoutBorrowLicense',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.CheckoutBorrowLicense.SignedToken'),
        outputPath: 'SignedToken',
        parameters: {
          LicenseArn: this.__input.licenseArn,
          Entitlements: this.__input.entitlements,
          DigitalSignatureMethod: this.__input.digitalSignatureMethod,
          NodeId: this.__input.nodeId,
          CheckoutMetadata: this.__input.checkoutMetadata,
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CheckoutBorrowLicense.SignedToken', props);
    return resource.getResponseField('SignedToken') as unknown as string;
  }

  public get issuedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'checkoutBorrowLicense',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.CheckoutBorrowLicense.IssuedAt'),
        outputPath: 'IssuedAt',
        parameters: {
          LicenseArn: this.__input.licenseArn,
          Entitlements: this.__input.entitlements,
          DigitalSignatureMethod: this.__input.digitalSignatureMethod,
          NodeId: this.__input.nodeId,
          CheckoutMetadata: this.__input.checkoutMetadata,
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CheckoutBorrowLicense.IssuedAt', props);
    return resource.getResponseField('IssuedAt') as unknown as string;
  }

  public get expiration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'checkoutBorrowLicense',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.CheckoutBorrowLicense.Expiration'),
        outputPath: 'Expiration',
        parameters: {
          LicenseArn: this.__input.licenseArn,
          Entitlements: this.__input.entitlements,
          DigitalSignatureMethod: this.__input.digitalSignatureMethod,
          NodeId: this.__input.nodeId,
          CheckoutMetadata: this.__input.checkoutMetadata,
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CheckoutBorrowLicense.Expiration', props);
    return resource.getResponseField('Expiration') as unknown as string;
  }

  public get checkoutMetadata(): shapes.LicenseManagerMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'checkoutBorrowLicense',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.CheckoutBorrowLicense.CheckoutMetadata'),
        outputPath: 'CheckoutMetadata',
        parameters: {
          LicenseArn: this.__input.licenseArn,
          Entitlements: this.__input.entitlements,
          DigitalSignatureMethod: this.__input.digitalSignatureMethod,
          NodeId: this.__input.nodeId,
          CheckoutMetadata: this.__input.checkoutMetadata,
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CheckoutBorrowLicense.CheckoutMetadata', props);
    return resource.getResponseField('CheckoutMetadata') as unknown as shapes.LicenseManagerMetadata[];
  }

}

export class LicenseManagerResponsesCheckoutLicense {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerCheckoutLicenseRequest) {
  }

  public get checkoutType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'checkoutLicense',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.CheckoutLicense.CheckoutType'),
        outputPath: 'CheckoutType',
        parameters: {
          ProductSKU: this.__input.productSku,
          CheckoutType: this.__input.checkoutType,
          KeyFingerprint: this.__input.keyFingerprint,
          Entitlements: this.__input.entitlements,
          ClientToken: this.__input.clientToken,
          Beneficiary: this.__input.beneficiary,
          NodeId: this.__input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CheckoutLicense.CheckoutType', props);
    return resource.getResponseField('CheckoutType') as unknown as string;
  }

  public get licenseConsumptionToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'checkoutLicense',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.CheckoutLicense.LicenseConsumptionToken'),
        outputPath: 'LicenseConsumptionToken',
        parameters: {
          ProductSKU: this.__input.productSku,
          CheckoutType: this.__input.checkoutType,
          KeyFingerprint: this.__input.keyFingerprint,
          Entitlements: this.__input.entitlements,
          ClientToken: this.__input.clientToken,
          Beneficiary: this.__input.beneficiary,
          NodeId: this.__input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CheckoutLicense.LicenseConsumptionToken', props);
    return resource.getResponseField('LicenseConsumptionToken') as unknown as string;
  }

  public get entitlementsAllowed(): shapes.LicenseManagerEntitlementData[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'checkoutLicense',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.CheckoutLicense.EntitlementsAllowed'),
        outputPath: 'EntitlementsAllowed',
        parameters: {
          ProductSKU: this.__input.productSku,
          CheckoutType: this.__input.checkoutType,
          KeyFingerprint: this.__input.keyFingerprint,
          Entitlements: this.__input.entitlements,
          ClientToken: this.__input.clientToken,
          Beneficiary: this.__input.beneficiary,
          NodeId: this.__input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CheckoutLicense.EntitlementsAllowed', props);
    return resource.getResponseField('EntitlementsAllowed') as unknown as shapes.LicenseManagerEntitlementData[];
  }

  public get signedToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'checkoutLicense',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.CheckoutLicense.SignedToken'),
        outputPath: 'SignedToken',
        parameters: {
          ProductSKU: this.__input.productSku,
          CheckoutType: this.__input.checkoutType,
          KeyFingerprint: this.__input.keyFingerprint,
          Entitlements: this.__input.entitlements,
          ClientToken: this.__input.clientToken,
          Beneficiary: this.__input.beneficiary,
          NodeId: this.__input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CheckoutLicense.SignedToken', props);
    return resource.getResponseField('SignedToken') as unknown as string;
  }

  public get nodeId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'checkoutLicense',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.CheckoutLicense.NodeId'),
        outputPath: 'NodeId',
        parameters: {
          ProductSKU: this.__input.productSku,
          CheckoutType: this.__input.checkoutType,
          KeyFingerprint: this.__input.keyFingerprint,
          Entitlements: this.__input.entitlements,
          ClientToken: this.__input.clientToken,
          Beneficiary: this.__input.beneficiary,
          NodeId: this.__input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CheckoutLicense.NodeId', props);
    return resource.getResponseField('NodeId') as unknown as string;
  }

  public get issuedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'checkoutLicense',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.CheckoutLicense.IssuedAt'),
        outputPath: 'IssuedAt',
        parameters: {
          ProductSKU: this.__input.productSku,
          CheckoutType: this.__input.checkoutType,
          KeyFingerprint: this.__input.keyFingerprint,
          Entitlements: this.__input.entitlements,
          ClientToken: this.__input.clientToken,
          Beneficiary: this.__input.beneficiary,
          NodeId: this.__input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CheckoutLicense.IssuedAt', props);
    return resource.getResponseField('IssuedAt') as unknown as string;
  }

  public get expiration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'checkoutLicense',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.CheckoutLicense.Expiration'),
        outputPath: 'Expiration',
        parameters: {
          ProductSKU: this.__input.productSku,
          CheckoutType: this.__input.checkoutType,
          KeyFingerprint: this.__input.keyFingerprint,
          Entitlements: this.__input.entitlements,
          ClientToken: this.__input.clientToken,
          Beneficiary: this.__input.beneficiary,
          NodeId: this.__input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CheckoutLicense.Expiration', props);
    return resource.getResponseField('Expiration') as unknown as string;
  }

}

export class LicenseManagerResponsesCreateGrant {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerCreateGrantRequest) {
  }

  public get grantArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGrant',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.CreateGrant.GrantArn'),
        outputPath: 'GrantArn',
        parameters: {
          ClientToken: this.__input.clientToken,
          GrantName: this.__input.grantName,
          LicenseArn: this.__input.licenseArn,
          Principals: this.__input.principals,
          HomeRegion: this.__input.homeRegion,
          AllowedOperations: this.__input.allowedOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGrant.GrantArn', props);
    return resource.getResponseField('GrantArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGrant',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.CreateGrant.Status'),
        outputPath: 'Status',
        parameters: {
          ClientToken: this.__input.clientToken,
          GrantName: this.__input.grantName,
          LicenseArn: this.__input.licenseArn,
          Principals: this.__input.principals,
          HomeRegion: this.__input.homeRegion,
          AllowedOperations: this.__input.allowedOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGrant.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGrant',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.CreateGrant.Version'),
        outputPath: 'Version',
        parameters: {
          ClientToken: this.__input.clientToken,
          GrantName: this.__input.grantName,
          LicenseArn: this.__input.licenseArn,
          Principals: this.__input.principals,
          HomeRegion: this.__input.homeRegion,
          AllowedOperations: this.__input.allowedOperations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGrant.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

}

export class LicenseManagerResponsesCreateGrantVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerCreateGrantVersionRequest) {
  }

  public get grantArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGrantVersion',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.CreateGrantVersion.GrantArn'),
        outputPath: 'GrantArn',
        parameters: {
          ClientToken: this.__input.clientToken,
          GrantArn: this.__input.grantArn,
          GrantName: this.__input.grantName,
          AllowedOperations: this.__input.allowedOperations,
          Status: this.__input.status,
          StatusReason: this.__input.statusReason,
          SourceVersion: this.__input.sourceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGrantVersion.GrantArn', props);
    return resource.getResponseField('GrantArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGrantVersion',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.CreateGrantVersion.Status'),
        outputPath: 'Status',
        parameters: {
          ClientToken: this.__input.clientToken,
          GrantArn: this.__input.grantArn,
          GrantName: this.__input.grantName,
          AllowedOperations: this.__input.allowedOperations,
          Status: this.__input.status,
          StatusReason: this.__input.statusReason,
          SourceVersion: this.__input.sourceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGrantVersion.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGrantVersion',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.CreateGrantVersion.Version'),
        outputPath: 'Version',
        parameters: {
          ClientToken: this.__input.clientToken,
          GrantArn: this.__input.grantArn,
          GrantName: this.__input.grantName,
          AllowedOperations: this.__input.allowedOperations,
          Status: this.__input.status,
          StatusReason: this.__input.statusReason,
          SourceVersion: this.__input.sourceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGrantVersion.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

}

export class LicenseManagerResponsesCreateLicense {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerCreateLicenseRequest) {
  }

  public get licenseArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLicense',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.CreateLicense.LicenseArn'),
        outputPath: 'LicenseArn',
        parameters: {
          LicenseName: this.__input.licenseName,
          ProductName: this.__input.productName,
          ProductSKU: this.__input.productSku,
          Issuer: {
            Name: this.__input.issuer.name,
            SignKey: this.__input.issuer.signKey,
          },
          HomeRegion: this.__input.homeRegion,
          Validity: {
            Begin: this.__input.validity.begin,
            End: this.__input.validity.end,
          },
          Entitlements: this.__input.entitlements,
          Beneficiary: this.__input.beneficiary,
          ConsumptionConfiguration: {
            RenewType: this.__input.consumptionConfiguration.renewType,
            ProvisionalConfiguration: {
              MaxTimeToLiveInMinutes: this.__input.consumptionConfiguration.provisionalConfiguration?.maxTimeToLiveInMinutes,
            },
            BorrowConfiguration: {
              AllowEarlyCheckIn: this.__input.consumptionConfiguration.borrowConfiguration?.allowEarlyCheckIn,
              MaxTimeToLiveInMinutes: this.__input.consumptionConfiguration.borrowConfiguration?.maxTimeToLiveInMinutes,
            },
          },
          LicenseMetadata: this.__input.licenseMetadata,
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLicense.LicenseArn', props);
    return resource.getResponseField('LicenseArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLicense',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.CreateLicense.Status'),
        outputPath: 'Status',
        parameters: {
          LicenseName: this.__input.licenseName,
          ProductName: this.__input.productName,
          ProductSKU: this.__input.productSku,
          Issuer: {
            Name: this.__input.issuer.name,
            SignKey: this.__input.issuer.signKey,
          },
          HomeRegion: this.__input.homeRegion,
          Validity: {
            Begin: this.__input.validity.begin,
            End: this.__input.validity.end,
          },
          Entitlements: this.__input.entitlements,
          Beneficiary: this.__input.beneficiary,
          ConsumptionConfiguration: {
            RenewType: this.__input.consumptionConfiguration.renewType,
            ProvisionalConfiguration: {
              MaxTimeToLiveInMinutes: this.__input.consumptionConfiguration.provisionalConfiguration?.maxTimeToLiveInMinutes,
            },
            BorrowConfiguration: {
              AllowEarlyCheckIn: this.__input.consumptionConfiguration.borrowConfiguration?.allowEarlyCheckIn,
              MaxTimeToLiveInMinutes: this.__input.consumptionConfiguration.borrowConfiguration?.maxTimeToLiveInMinutes,
            },
          },
          LicenseMetadata: this.__input.licenseMetadata,
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLicense.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLicense',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.CreateLicense.Version'),
        outputPath: 'Version',
        parameters: {
          LicenseName: this.__input.licenseName,
          ProductName: this.__input.productName,
          ProductSKU: this.__input.productSku,
          Issuer: {
            Name: this.__input.issuer.name,
            SignKey: this.__input.issuer.signKey,
          },
          HomeRegion: this.__input.homeRegion,
          Validity: {
            Begin: this.__input.validity.begin,
            End: this.__input.validity.end,
          },
          Entitlements: this.__input.entitlements,
          Beneficiary: this.__input.beneficiary,
          ConsumptionConfiguration: {
            RenewType: this.__input.consumptionConfiguration.renewType,
            ProvisionalConfiguration: {
              MaxTimeToLiveInMinutes: this.__input.consumptionConfiguration.provisionalConfiguration?.maxTimeToLiveInMinutes,
            },
            BorrowConfiguration: {
              AllowEarlyCheckIn: this.__input.consumptionConfiguration.borrowConfiguration?.allowEarlyCheckIn,
              MaxTimeToLiveInMinutes: this.__input.consumptionConfiguration.borrowConfiguration?.maxTimeToLiveInMinutes,
            },
          },
          LicenseMetadata: this.__input.licenseMetadata,
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLicense.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

}

export class LicenseManagerResponsesCreateLicenseConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerCreateLicenseConfigurationRequest) {
  }

  public get licenseConfigurationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLicenseConfiguration',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.CreateLicenseConfiguration.LicenseConfigurationArn'),
        outputPath: 'LicenseConfigurationArn',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          LicenseCountingType: this.__input.licenseCountingType,
          LicenseCount: this.__input.licenseCount,
          LicenseCountHardLimit: this.__input.licenseCountHardLimit,
          LicenseRules: this.__input.licenseRules,
          Tags: this.__input.tags,
          DisassociateWhenNotFound: this.__input.disassociateWhenNotFound,
          ProductInformationList: this.__input.productInformationList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLicenseConfiguration.LicenseConfigurationArn', props);
    return resource.getResponseField('LicenseConfigurationArn') as unknown as string;
  }

}

export class LicenseManagerResponsesCreateLicenseManagerReportGenerator {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerCreateLicenseManagerReportGeneratorRequest) {
  }

  public get licenseManagerReportGeneratorArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLicenseManagerReportGenerator',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.CreateLicenseManagerReportGenerator.LicenseManagerReportGeneratorArn'),
        outputPath: 'LicenseManagerReportGeneratorArn',
        parameters: {
          ReportGeneratorName: this.__input.reportGeneratorName,
          Type: this.__input.type,
          ReportContext: {
            licenseConfigurationArns: this.__input.reportContext.licenseConfigurationArns,
          },
          ReportFrequency: {
            value: this.__input.reportFrequency.value,
            period: this.__input.reportFrequency.period,
          },
          ClientToken: this.__input.clientToken,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLicenseManagerReportGenerator.LicenseManagerReportGeneratorArn', props);
    return resource.getResponseField('LicenseManagerReportGeneratorArn') as unknown as string;
  }

}

export class LicenseManagerResponsesCreateLicenseVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerCreateLicenseVersionRequest) {
  }

  public get licenseArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLicenseVersion',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.CreateLicenseVersion.LicenseArn'),
        outputPath: 'LicenseArn',
        parameters: {
          LicenseArn: this.__input.licenseArn,
          LicenseName: this.__input.licenseName,
          ProductName: this.__input.productName,
          Issuer: {
            Name: this.__input.issuer.name,
            SignKey: this.__input.issuer.signKey,
          },
          HomeRegion: this.__input.homeRegion,
          Validity: {
            Begin: this.__input.validity.begin,
            End: this.__input.validity.end,
          },
          LicenseMetadata: this.__input.licenseMetadata,
          Entitlements: this.__input.entitlements,
          ConsumptionConfiguration: {
            RenewType: this.__input.consumptionConfiguration.renewType,
            ProvisionalConfiguration: {
              MaxTimeToLiveInMinutes: this.__input.consumptionConfiguration.provisionalConfiguration?.maxTimeToLiveInMinutes,
            },
            BorrowConfiguration: {
              AllowEarlyCheckIn: this.__input.consumptionConfiguration.borrowConfiguration?.allowEarlyCheckIn,
              MaxTimeToLiveInMinutes: this.__input.consumptionConfiguration.borrowConfiguration?.maxTimeToLiveInMinutes,
            },
          },
          Status: this.__input.status,
          ClientToken: this.__input.clientToken,
          SourceVersion: this.__input.sourceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLicenseVersion.LicenseArn', props);
    return resource.getResponseField('LicenseArn') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLicenseVersion',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.CreateLicenseVersion.Version'),
        outputPath: 'Version',
        parameters: {
          LicenseArn: this.__input.licenseArn,
          LicenseName: this.__input.licenseName,
          ProductName: this.__input.productName,
          Issuer: {
            Name: this.__input.issuer.name,
            SignKey: this.__input.issuer.signKey,
          },
          HomeRegion: this.__input.homeRegion,
          Validity: {
            Begin: this.__input.validity.begin,
            End: this.__input.validity.end,
          },
          LicenseMetadata: this.__input.licenseMetadata,
          Entitlements: this.__input.entitlements,
          ConsumptionConfiguration: {
            RenewType: this.__input.consumptionConfiguration.renewType,
            ProvisionalConfiguration: {
              MaxTimeToLiveInMinutes: this.__input.consumptionConfiguration.provisionalConfiguration?.maxTimeToLiveInMinutes,
            },
            BorrowConfiguration: {
              AllowEarlyCheckIn: this.__input.consumptionConfiguration.borrowConfiguration?.allowEarlyCheckIn,
              MaxTimeToLiveInMinutes: this.__input.consumptionConfiguration.borrowConfiguration?.maxTimeToLiveInMinutes,
            },
          },
          Status: this.__input.status,
          ClientToken: this.__input.clientToken,
          SourceVersion: this.__input.sourceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLicenseVersion.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLicenseVersion',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.CreateLicenseVersion.Status'),
        outputPath: 'Status',
        parameters: {
          LicenseArn: this.__input.licenseArn,
          LicenseName: this.__input.licenseName,
          ProductName: this.__input.productName,
          Issuer: {
            Name: this.__input.issuer.name,
            SignKey: this.__input.issuer.signKey,
          },
          HomeRegion: this.__input.homeRegion,
          Validity: {
            Begin: this.__input.validity.begin,
            End: this.__input.validity.end,
          },
          LicenseMetadata: this.__input.licenseMetadata,
          Entitlements: this.__input.entitlements,
          ConsumptionConfiguration: {
            RenewType: this.__input.consumptionConfiguration.renewType,
            ProvisionalConfiguration: {
              MaxTimeToLiveInMinutes: this.__input.consumptionConfiguration.provisionalConfiguration?.maxTimeToLiveInMinutes,
            },
            BorrowConfiguration: {
              AllowEarlyCheckIn: this.__input.consumptionConfiguration.borrowConfiguration?.allowEarlyCheckIn,
              MaxTimeToLiveInMinutes: this.__input.consumptionConfiguration.borrowConfiguration?.maxTimeToLiveInMinutes,
            },
          },
          Status: this.__input.status,
          ClientToken: this.__input.clientToken,
          SourceVersion: this.__input.sourceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLicenseVersion.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class LicenseManagerResponsesCreateToken {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerCreateTokenRequest) {
  }

  public get tokenId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createToken',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.CreateToken.TokenId'),
        outputPath: 'TokenId',
        parameters: {
          LicenseArn: this.__input.licenseArn,
          RoleArns: this.__input.roleArns,
          ExpirationInDays: this.__input.expirationInDays,
          TokenProperties: this.__input.tokenProperties,
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateToken.TokenId', props);
    return resource.getResponseField('TokenId') as unknown as string;
  }

  public get tokenType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createToken',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.CreateToken.TokenType'),
        outputPath: 'TokenType',
        parameters: {
          LicenseArn: this.__input.licenseArn,
          RoleArns: this.__input.roleArns,
          ExpirationInDays: this.__input.expirationInDays,
          TokenProperties: this.__input.tokenProperties,
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateToken.TokenType', props);
    return resource.getResponseField('TokenType') as unknown as string;
  }

  public get token(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createToken',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.CreateToken.Token'),
        outputPath: 'Token',
        parameters: {
          LicenseArn: this.__input.licenseArn,
          RoleArns: this.__input.roleArns,
          ExpirationInDays: this.__input.expirationInDays,
          TokenProperties: this.__input.tokenProperties,
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateToken.Token', props);
    return resource.getResponseField('Token') as unknown as string;
  }

}

export class LicenseManagerResponsesDeleteGrant {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerDeleteGrantRequest) {
  }

  public get grantArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGrant',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.DeleteGrant.GrantArn'),
        outputPath: 'GrantArn',
        parameters: {
          GrantArn: this.__input.grantArn,
          StatusReason: this.__input.statusReason,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteGrant.GrantArn', props);
    return resource.getResponseField('GrantArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGrant',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.DeleteGrant.Status'),
        outputPath: 'Status',
        parameters: {
          GrantArn: this.__input.grantArn,
          StatusReason: this.__input.statusReason,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteGrant.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGrant',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.DeleteGrant.Version'),
        outputPath: 'Version',
        parameters: {
          GrantArn: this.__input.grantArn,
          StatusReason: this.__input.statusReason,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteGrant.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

}

export class LicenseManagerResponsesDeleteLicense {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerDeleteLicenseRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLicense',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.DeleteLicense.Status'),
        outputPath: 'Status',
        parameters: {
          LicenseArn: this.__input.licenseArn,
          SourceVersion: this.__input.sourceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLicense.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get deletionDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLicense',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.DeleteLicense.DeletionDate'),
        outputPath: 'DeletionDate',
        parameters: {
          LicenseArn: this.__input.licenseArn,
          SourceVersion: this.__input.sourceVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLicense.DeletionDate', props);
    return resource.getResponseField('DeletionDate') as unknown as string;
  }

}

export class LicenseManagerResponsesExtendLicenseConsumption {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerExtendLicenseConsumptionRequest) {
  }

  public get licenseConsumptionToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'extendLicenseConsumption',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.ExtendLicenseConsumption.LicenseConsumptionToken'),
        outputPath: 'LicenseConsumptionToken',
        parameters: {
          LicenseConsumptionToken: this.__input.licenseConsumptionToken,
          DryRun: this.__input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExtendLicenseConsumption.LicenseConsumptionToken', props);
    return resource.getResponseField('LicenseConsumptionToken') as unknown as string;
  }

  public get expiration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'extendLicenseConsumption',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.ExtendLicenseConsumption.Expiration'),
        outputPath: 'Expiration',
        parameters: {
          LicenseConsumptionToken: this.__input.licenseConsumptionToken,
          DryRun: this.__input.dryRun,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExtendLicenseConsumption.Expiration', props);
    return resource.getResponseField('Expiration') as unknown as string;
  }

}

export class LicenseManagerResponsesFetchAccessToken {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerGetAccessTokenRequest) {
  }

  public get accessToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccessToken',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetAccessToken.AccessToken'),
        outputPath: 'AccessToken',
        parameters: {
          Token: this.__input.token,
          TokenProperties: this.__input.tokenProperties,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccessToken.AccessToken', props);
    return resource.getResponseField('AccessToken') as unknown as string;
  }

}

export class LicenseManagerResponsesFetchGrant {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerGetGrantRequest) {
  }

  public get grant(): LicenseManagerResponsesFetchGrantGrant {
    return new LicenseManagerResponsesFetchGrantGrant(this.__scope, this.__resources, this.__input);
  }

}

export class LicenseManagerResponsesFetchGrantGrant {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerGetGrantRequest) {
  }

  public get grantArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGrant',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetGrant.Grant.GrantArn'),
        outputPath: 'Grant.GrantArn',
        parameters: {
          GrantArn: this.__input.grantArn,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGrant.Grant.GrantArn', props);
    return resource.getResponseField('Grant.GrantArn') as unknown as string;
  }

  public get grantName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGrant',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetGrant.Grant.GrantName'),
        outputPath: 'Grant.GrantName',
        parameters: {
          GrantArn: this.__input.grantArn,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGrant.Grant.GrantName', props);
    return resource.getResponseField('Grant.GrantName') as unknown as string;
  }

  public get parentArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGrant',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetGrant.Grant.ParentArn'),
        outputPath: 'Grant.ParentArn',
        parameters: {
          GrantArn: this.__input.grantArn,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGrant.Grant.ParentArn', props);
    return resource.getResponseField('Grant.ParentArn') as unknown as string;
  }

  public get licenseArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGrant',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetGrant.Grant.LicenseArn'),
        outputPath: 'Grant.LicenseArn',
        parameters: {
          GrantArn: this.__input.grantArn,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGrant.Grant.LicenseArn', props);
    return resource.getResponseField('Grant.LicenseArn') as unknown as string;
  }

  public get granteePrincipalArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGrant',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetGrant.Grant.GranteePrincipalArn'),
        outputPath: 'Grant.GranteePrincipalArn',
        parameters: {
          GrantArn: this.__input.grantArn,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGrant.Grant.GranteePrincipalArn', props);
    return resource.getResponseField('Grant.GranteePrincipalArn') as unknown as string;
  }

  public get homeRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGrant',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetGrant.Grant.HomeRegion'),
        outputPath: 'Grant.HomeRegion',
        parameters: {
          GrantArn: this.__input.grantArn,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGrant.Grant.HomeRegion', props);
    return resource.getResponseField('Grant.HomeRegion') as unknown as string;
  }

  public get grantStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGrant',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetGrant.Grant.GrantStatus'),
        outputPath: 'Grant.GrantStatus',
        parameters: {
          GrantArn: this.__input.grantArn,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGrant.Grant.GrantStatus', props);
    return resource.getResponseField('Grant.GrantStatus') as unknown as string;
  }

  public get statusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGrant',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetGrant.Grant.StatusReason'),
        outputPath: 'Grant.StatusReason',
        parameters: {
          GrantArn: this.__input.grantArn,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGrant.Grant.StatusReason', props);
    return resource.getResponseField('Grant.StatusReason') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGrant',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetGrant.Grant.Version'),
        outputPath: 'Grant.Version',
        parameters: {
          GrantArn: this.__input.grantArn,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGrant.Grant.Version', props);
    return resource.getResponseField('Grant.Version') as unknown as string;
  }

  public get grantedOperations(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGrant',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetGrant.Grant.GrantedOperations'),
        outputPath: 'Grant.GrantedOperations',
        parameters: {
          GrantArn: this.__input.grantArn,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGrant.Grant.GrantedOperations', props);
    return resource.getResponseField('Grant.GrantedOperations') as unknown as string[];
  }

}

export class LicenseManagerResponsesFetchLicense {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerGetLicenseRequest) {
  }

  public get license(): LicenseManagerResponsesFetchLicenseLicense {
    return new LicenseManagerResponsesFetchLicenseLicense(this.__scope, this.__resources, this.__input);
  }

}

export class LicenseManagerResponsesFetchLicenseLicense {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerGetLicenseRequest) {
  }

  public get licenseArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicense',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicense.License.LicenseArn'),
        outputPath: 'License.LicenseArn',
        parameters: {
          LicenseArn: this.__input.licenseArn,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicense.License.LicenseArn', props);
    return resource.getResponseField('License.LicenseArn') as unknown as string;
  }

  public get licenseName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicense',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicense.License.LicenseName'),
        outputPath: 'License.LicenseName',
        parameters: {
          LicenseArn: this.__input.licenseArn,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicense.License.LicenseName', props);
    return resource.getResponseField('License.LicenseName') as unknown as string;
  }

  public get productName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicense',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicense.License.ProductName'),
        outputPath: 'License.ProductName',
        parameters: {
          LicenseArn: this.__input.licenseArn,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicense.License.ProductName', props);
    return resource.getResponseField('License.ProductName') as unknown as string;
  }

  public get productSku(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicense',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicense.License.ProductSKU'),
        outputPath: 'License.ProductSKU',
        parameters: {
          LicenseArn: this.__input.licenseArn,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicense.License.ProductSKU', props);
    return resource.getResponseField('License.ProductSKU') as unknown as string;
  }

  public get issuer(): LicenseManagerResponsesFetchLicenseLicenseIssuer {
    return new LicenseManagerResponsesFetchLicenseLicenseIssuer(this.__scope, this.__resources, this.__input);
  }

  public get homeRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicense',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicense.License.HomeRegion'),
        outputPath: 'License.HomeRegion',
        parameters: {
          LicenseArn: this.__input.licenseArn,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicense.License.HomeRegion', props);
    return resource.getResponseField('License.HomeRegion') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicense',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicense.License.Status'),
        outputPath: 'License.Status',
        parameters: {
          LicenseArn: this.__input.licenseArn,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicense.License.Status', props);
    return resource.getResponseField('License.Status') as unknown as string;
  }

  public get validity(): LicenseManagerResponsesFetchLicenseLicenseValidity {
    return new LicenseManagerResponsesFetchLicenseLicenseValidity(this.__scope, this.__resources, this.__input);
  }

  public get beneficiary(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicense',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicense.License.Beneficiary'),
        outputPath: 'License.Beneficiary',
        parameters: {
          LicenseArn: this.__input.licenseArn,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicense.License.Beneficiary', props);
    return resource.getResponseField('License.Beneficiary') as unknown as string;
  }

  public get entitlements(): shapes.LicenseManagerEntitlement[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicense',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicense.License.Entitlements'),
        outputPath: 'License.Entitlements',
        parameters: {
          LicenseArn: this.__input.licenseArn,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicense.License.Entitlements', props);
    return resource.getResponseField('License.Entitlements') as unknown as shapes.LicenseManagerEntitlement[];
  }

  public get consumptionConfiguration(): LicenseManagerResponsesFetchLicenseLicenseConsumptionConfiguration {
    return new LicenseManagerResponsesFetchLicenseLicenseConsumptionConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get licenseMetadata(): shapes.LicenseManagerMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicense',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicense.License.LicenseMetadata'),
        outputPath: 'License.LicenseMetadata',
        parameters: {
          LicenseArn: this.__input.licenseArn,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicense.License.LicenseMetadata', props);
    return resource.getResponseField('License.LicenseMetadata') as unknown as shapes.LicenseManagerMetadata[];
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicense',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicense.License.CreateTime'),
        outputPath: 'License.CreateTime',
        parameters: {
          LicenseArn: this.__input.licenseArn,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicense.License.CreateTime', props);
    return resource.getResponseField('License.CreateTime') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicense',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicense.License.Version'),
        outputPath: 'License.Version',
        parameters: {
          LicenseArn: this.__input.licenseArn,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicense.License.Version', props);
    return resource.getResponseField('License.Version') as unknown as string;
  }

}

export class LicenseManagerResponsesFetchLicenseLicenseIssuer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerGetLicenseRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicense',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicense.License.Issuer.Name'),
        outputPath: 'License.Issuer.Name',
        parameters: {
          LicenseArn: this.__input.licenseArn,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicense.License.Issuer.Name', props);
    return resource.getResponseField('License.Issuer.Name') as unknown as string;
  }

  public get signKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicense',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicense.License.Issuer.SignKey'),
        outputPath: 'License.Issuer.SignKey',
        parameters: {
          LicenseArn: this.__input.licenseArn,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicense.License.Issuer.SignKey', props);
    return resource.getResponseField('License.Issuer.SignKey') as unknown as string;
  }

  public get keyFingerprint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicense',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicense.License.Issuer.KeyFingerprint'),
        outputPath: 'License.Issuer.KeyFingerprint',
        parameters: {
          LicenseArn: this.__input.licenseArn,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicense.License.Issuer.KeyFingerprint', props);
    return resource.getResponseField('License.Issuer.KeyFingerprint') as unknown as string;
  }

}

export class LicenseManagerResponsesFetchLicenseLicenseValidity {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerGetLicenseRequest) {
  }

  public get begin(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicense',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicense.License.Validity.Begin'),
        outputPath: 'License.Validity.Begin',
        parameters: {
          LicenseArn: this.__input.licenseArn,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicense.License.Validity.Begin', props);
    return resource.getResponseField('License.Validity.Begin') as unknown as string;
  }

  public get end(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicense',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicense.License.Validity.End'),
        outputPath: 'License.Validity.End',
        parameters: {
          LicenseArn: this.__input.licenseArn,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicense.License.Validity.End', props);
    return resource.getResponseField('License.Validity.End') as unknown as string;
  }

}

export class LicenseManagerResponsesFetchLicenseLicenseConsumptionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerGetLicenseRequest) {
  }

  public get renewType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicense',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicense.License.ConsumptionConfiguration.RenewType'),
        outputPath: 'License.ConsumptionConfiguration.RenewType',
        parameters: {
          LicenseArn: this.__input.licenseArn,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicense.License.ConsumptionConfiguration.RenewType', props);
    return resource.getResponseField('License.ConsumptionConfiguration.RenewType') as unknown as string;
  }

  public get provisionalConfiguration(): LicenseManagerResponsesFetchLicenseLicenseConsumptionConfigurationProvisionalConfiguration {
    return new LicenseManagerResponsesFetchLicenseLicenseConsumptionConfigurationProvisionalConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get borrowConfiguration(): LicenseManagerResponsesFetchLicenseLicenseConsumptionConfigurationBorrowConfiguration {
    return new LicenseManagerResponsesFetchLicenseLicenseConsumptionConfigurationBorrowConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class LicenseManagerResponsesFetchLicenseLicenseConsumptionConfigurationProvisionalConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerGetLicenseRequest) {
  }

  public get maxTimeToLiveInMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicense',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicense.License.ConsumptionConfiguration.ProvisionalConfiguration.MaxTimeToLiveInMinutes'),
        outputPath: 'License.ConsumptionConfiguration.ProvisionalConfiguration.MaxTimeToLiveInMinutes',
        parameters: {
          LicenseArn: this.__input.licenseArn,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicense.License.ConsumptionConfiguration.ProvisionalConfiguration.MaxTimeToLiveInMinutes', props);
    return resource.getResponseField('License.ConsumptionConfiguration.ProvisionalConfiguration.MaxTimeToLiveInMinutes') as unknown as number;
  }

}

export class LicenseManagerResponsesFetchLicenseLicenseConsumptionConfigurationBorrowConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerGetLicenseRequest) {
  }

  public get allowEarlyCheckIn(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicense',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicense.License.ConsumptionConfiguration.BorrowConfiguration.AllowEarlyCheckIn'),
        outputPath: 'License.ConsumptionConfiguration.BorrowConfiguration.AllowEarlyCheckIn',
        parameters: {
          LicenseArn: this.__input.licenseArn,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicense.License.ConsumptionConfiguration.BorrowConfiguration.AllowEarlyCheckIn', props);
    return resource.getResponseField('License.ConsumptionConfiguration.BorrowConfiguration.AllowEarlyCheckIn') as unknown as boolean;
  }

  public get maxTimeToLiveInMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicense',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicense.License.ConsumptionConfiguration.BorrowConfiguration.MaxTimeToLiveInMinutes'),
        outputPath: 'License.ConsumptionConfiguration.BorrowConfiguration.MaxTimeToLiveInMinutes',
        parameters: {
          LicenseArn: this.__input.licenseArn,
          Version: this.__input.version,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicense.License.ConsumptionConfiguration.BorrowConfiguration.MaxTimeToLiveInMinutes', props);
    return resource.getResponseField('License.ConsumptionConfiguration.BorrowConfiguration.MaxTimeToLiveInMinutes') as unknown as number;
  }

}

export class LicenseManagerResponsesFetchLicenseConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerGetLicenseConfigurationRequest) {
  }

  public get licenseConfigurationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicenseConfiguration',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicenseConfiguration.LicenseConfigurationId'),
        outputPath: 'LicenseConfigurationId',
        parameters: {
          LicenseConfigurationArn: this.__input.licenseConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicenseConfiguration.LicenseConfigurationId', props);
    return resource.getResponseField('LicenseConfigurationId') as unknown as string;
  }

  public get licenseConfigurationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicenseConfiguration',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicenseConfiguration.LicenseConfigurationArn'),
        outputPath: 'LicenseConfigurationArn',
        parameters: {
          LicenseConfigurationArn: this.__input.licenseConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicenseConfiguration.LicenseConfigurationArn', props);
    return resource.getResponseField('LicenseConfigurationArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicenseConfiguration',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicenseConfiguration.Name'),
        outputPath: 'Name',
        parameters: {
          LicenseConfigurationArn: this.__input.licenseConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicenseConfiguration.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicenseConfiguration',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicenseConfiguration.Description'),
        outputPath: 'Description',
        parameters: {
          LicenseConfigurationArn: this.__input.licenseConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicenseConfiguration.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get licenseCountingType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicenseConfiguration',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicenseConfiguration.LicenseCountingType'),
        outputPath: 'LicenseCountingType',
        parameters: {
          LicenseConfigurationArn: this.__input.licenseConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicenseConfiguration.LicenseCountingType', props);
    return resource.getResponseField('LicenseCountingType') as unknown as string;
  }

  public get licenseRules(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicenseConfiguration',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicenseConfiguration.LicenseRules'),
        outputPath: 'LicenseRules',
        parameters: {
          LicenseConfigurationArn: this.__input.licenseConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicenseConfiguration.LicenseRules', props);
    return resource.getResponseField('LicenseRules') as unknown as string[];
  }

  public get licenseCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicenseConfiguration',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicenseConfiguration.LicenseCount'),
        outputPath: 'LicenseCount',
        parameters: {
          LicenseConfigurationArn: this.__input.licenseConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicenseConfiguration.LicenseCount', props);
    return resource.getResponseField('LicenseCount') as unknown as number;
  }

  public get licenseCountHardLimit(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicenseConfiguration',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicenseConfiguration.LicenseCountHardLimit'),
        outputPath: 'LicenseCountHardLimit',
        parameters: {
          LicenseConfigurationArn: this.__input.licenseConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicenseConfiguration.LicenseCountHardLimit', props);
    return resource.getResponseField('LicenseCountHardLimit') as unknown as boolean;
  }

  public get consumedLicenses(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicenseConfiguration',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicenseConfiguration.ConsumedLicenses'),
        outputPath: 'ConsumedLicenses',
        parameters: {
          LicenseConfigurationArn: this.__input.licenseConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicenseConfiguration.ConsumedLicenses', props);
    return resource.getResponseField('ConsumedLicenses') as unknown as number;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicenseConfiguration',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicenseConfiguration.Status'),
        outputPath: 'Status',
        parameters: {
          LicenseConfigurationArn: this.__input.licenseConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicenseConfiguration.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get ownerAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicenseConfiguration',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicenseConfiguration.OwnerAccountId'),
        outputPath: 'OwnerAccountId',
        parameters: {
          LicenseConfigurationArn: this.__input.licenseConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicenseConfiguration.OwnerAccountId', props);
    return resource.getResponseField('OwnerAccountId') as unknown as string;
  }

  public get consumedLicenseSummaryList(): shapes.LicenseManagerConsumedLicenseSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicenseConfiguration',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicenseConfiguration.ConsumedLicenseSummaryList'),
        outputPath: 'ConsumedLicenseSummaryList',
        parameters: {
          LicenseConfigurationArn: this.__input.licenseConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicenseConfiguration.ConsumedLicenseSummaryList', props);
    return resource.getResponseField('ConsumedLicenseSummaryList') as unknown as shapes.LicenseManagerConsumedLicenseSummary[];
  }

  public get managedResourceSummaryList(): shapes.LicenseManagerManagedResourceSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicenseConfiguration',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicenseConfiguration.ManagedResourceSummaryList'),
        outputPath: 'ManagedResourceSummaryList',
        parameters: {
          LicenseConfigurationArn: this.__input.licenseConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicenseConfiguration.ManagedResourceSummaryList', props);
    return resource.getResponseField('ManagedResourceSummaryList') as unknown as shapes.LicenseManagerManagedResourceSummary[];
  }

  public get tags(): shapes.LicenseManagerTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicenseConfiguration',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicenseConfiguration.Tags'),
        outputPath: 'Tags',
        parameters: {
          LicenseConfigurationArn: this.__input.licenseConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicenseConfiguration.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.LicenseManagerTag[];
  }

  public get productInformationList(): shapes.LicenseManagerProductInformation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicenseConfiguration',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicenseConfiguration.ProductInformationList'),
        outputPath: 'ProductInformationList',
        parameters: {
          LicenseConfigurationArn: this.__input.licenseConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicenseConfiguration.ProductInformationList', props);
    return resource.getResponseField('ProductInformationList') as unknown as shapes.LicenseManagerProductInformation[];
  }

  public get automatedDiscoveryInformation(): LicenseManagerResponsesFetchLicenseConfigurationAutomatedDiscoveryInformation {
    return new LicenseManagerResponsesFetchLicenseConfigurationAutomatedDiscoveryInformation(this.__scope, this.__resources, this.__input);
  }

  public get disassociateWhenNotFound(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicenseConfiguration',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicenseConfiguration.DisassociateWhenNotFound'),
        outputPath: 'DisassociateWhenNotFound',
        parameters: {
          LicenseConfigurationArn: this.__input.licenseConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicenseConfiguration.DisassociateWhenNotFound', props);
    return resource.getResponseField('DisassociateWhenNotFound') as unknown as boolean;
  }

}

export class LicenseManagerResponsesFetchLicenseConfigurationAutomatedDiscoveryInformation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerGetLicenseConfigurationRequest) {
  }

  public get lastRunTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicenseConfiguration',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicenseConfiguration.AutomatedDiscoveryInformation.LastRunTime'),
        outputPath: 'AutomatedDiscoveryInformation.LastRunTime',
        parameters: {
          LicenseConfigurationArn: this.__input.licenseConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicenseConfiguration.AutomatedDiscoveryInformation.LastRunTime', props);
    return resource.getResponseField('AutomatedDiscoveryInformation.LastRunTime') as unknown as string;
  }

}

export class LicenseManagerResponsesFetchLicenseManagerReportGenerator {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerGetLicenseManagerReportGeneratorRequest) {
  }

  public get reportGenerator(): LicenseManagerResponsesFetchLicenseManagerReportGeneratorReportGenerator {
    return new LicenseManagerResponsesFetchLicenseManagerReportGeneratorReportGenerator(this.__scope, this.__resources, this.__input);
  }

}

export class LicenseManagerResponsesFetchLicenseManagerReportGeneratorReportGenerator {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerGetLicenseManagerReportGeneratorRequest) {
  }

  public get reportGeneratorName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicenseManagerReportGenerator',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicenseManagerReportGenerator.ReportGenerator.ReportGeneratorName'),
        outputPath: 'ReportGenerator.ReportGeneratorName',
        parameters: {
          LicenseManagerReportGeneratorArn: this.__input.licenseManagerReportGeneratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicenseManagerReportGenerator.ReportGenerator.ReportGeneratorName', props);
    return resource.getResponseField('ReportGenerator.ReportGeneratorName') as unknown as string;
  }

  public get reportType(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicenseManagerReportGenerator',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicenseManagerReportGenerator.ReportGenerator.ReportType'),
        outputPath: 'ReportGenerator.ReportType',
        parameters: {
          LicenseManagerReportGeneratorArn: this.__input.licenseManagerReportGeneratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicenseManagerReportGenerator.ReportGenerator.ReportType', props);
    return resource.getResponseField('ReportGenerator.ReportType') as unknown as string[];
  }

  public get reportContext(): LicenseManagerResponsesFetchLicenseManagerReportGeneratorReportGeneratorReportContext {
    return new LicenseManagerResponsesFetchLicenseManagerReportGeneratorReportGeneratorReportContext(this.__scope, this.__resources, this.__input);
  }

  public get reportFrequency(): LicenseManagerResponsesFetchLicenseManagerReportGeneratorReportGeneratorReportFrequency {
    return new LicenseManagerResponsesFetchLicenseManagerReportGeneratorReportGeneratorReportFrequency(this.__scope, this.__resources, this.__input);
  }

  public get licenseManagerReportGeneratorArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicenseManagerReportGenerator',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicenseManagerReportGenerator.ReportGenerator.LicenseManagerReportGeneratorArn'),
        outputPath: 'ReportGenerator.LicenseManagerReportGeneratorArn',
        parameters: {
          LicenseManagerReportGeneratorArn: this.__input.licenseManagerReportGeneratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicenseManagerReportGenerator.ReportGenerator.LicenseManagerReportGeneratorArn', props);
    return resource.getResponseField('ReportGenerator.LicenseManagerReportGeneratorArn') as unknown as string;
  }

  public get lastRunStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicenseManagerReportGenerator',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicenseManagerReportGenerator.ReportGenerator.LastRunStatus'),
        outputPath: 'ReportGenerator.LastRunStatus',
        parameters: {
          LicenseManagerReportGeneratorArn: this.__input.licenseManagerReportGeneratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicenseManagerReportGenerator.ReportGenerator.LastRunStatus', props);
    return resource.getResponseField('ReportGenerator.LastRunStatus') as unknown as string;
  }

  public get lastRunFailureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicenseManagerReportGenerator',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicenseManagerReportGenerator.ReportGenerator.LastRunFailureReason'),
        outputPath: 'ReportGenerator.LastRunFailureReason',
        parameters: {
          LicenseManagerReportGeneratorArn: this.__input.licenseManagerReportGeneratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicenseManagerReportGenerator.ReportGenerator.LastRunFailureReason', props);
    return resource.getResponseField('ReportGenerator.LastRunFailureReason') as unknown as string;
  }

  public get lastReportGenerationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicenseManagerReportGenerator',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicenseManagerReportGenerator.ReportGenerator.LastReportGenerationTime'),
        outputPath: 'ReportGenerator.LastReportGenerationTime',
        parameters: {
          LicenseManagerReportGeneratorArn: this.__input.licenseManagerReportGeneratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicenseManagerReportGenerator.ReportGenerator.LastReportGenerationTime', props);
    return resource.getResponseField('ReportGenerator.LastReportGenerationTime') as unknown as string;
  }

  public get reportCreatorAccount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicenseManagerReportGenerator',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicenseManagerReportGenerator.ReportGenerator.ReportCreatorAccount'),
        outputPath: 'ReportGenerator.ReportCreatorAccount',
        parameters: {
          LicenseManagerReportGeneratorArn: this.__input.licenseManagerReportGeneratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicenseManagerReportGenerator.ReportGenerator.ReportCreatorAccount', props);
    return resource.getResponseField('ReportGenerator.ReportCreatorAccount') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicenseManagerReportGenerator',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicenseManagerReportGenerator.ReportGenerator.Description'),
        outputPath: 'ReportGenerator.Description',
        parameters: {
          LicenseManagerReportGeneratorArn: this.__input.licenseManagerReportGeneratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicenseManagerReportGenerator.ReportGenerator.Description', props);
    return resource.getResponseField('ReportGenerator.Description') as unknown as string;
  }

  public get s3Location(): LicenseManagerResponsesFetchLicenseManagerReportGeneratorReportGeneratorS3Location {
    return new LicenseManagerResponsesFetchLicenseManagerReportGeneratorReportGeneratorS3Location(this.__scope, this.__resources, this.__input);
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicenseManagerReportGenerator',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicenseManagerReportGenerator.ReportGenerator.CreateTime'),
        outputPath: 'ReportGenerator.CreateTime',
        parameters: {
          LicenseManagerReportGeneratorArn: this.__input.licenseManagerReportGeneratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicenseManagerReportGenerator.ReportGenerator.CreateTime', props);
    return resource.getResponseField('ReportGenerator.CreateTime') as unknown as string;
  }

  public get tags(): shapes.LicenseManagerTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicenseManagerReportGenerator',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicenseManagerReportGenerator.ReportGenerator.Tags'),
        outputPath: 'ReportGenerator.Tags',
        parameters: {
          LicenseManagerReportGeneratorArn: this.__input.licenseManagerReportGeneratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicenseManagerReportGenerator.ReportGenerator.Tags', props);
    return resource.getResponseField('ReportGenerator.Tags') as unknown as shapes.LicenseManagerTag[];
  }

}

export class LicenseManagerResponsesFetchLicenseManagerReportGeneratorReportGeneratorReportContext {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerGetLicenseManagerReportGeneratorRequest) {
  }

  public get licenseConfigurationArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicenseManagerReportGenerator',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicenseManagerReportGenerator.ReportGenerator.ReportContext.licenseConfigurationArns'),
        outputPath: 'ReportGenerator.ReportContext.licenseConfigurationArns',
        parameters: {
          LicenseManagerReportGeneratorArn: this.__input.licenseManagerReportGeneratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicenseManagerReportGenerator.ReportGenerator.ReportContext.licenseConfigurationArns', props);
    return resource.getResponseField('ReportGenerator.ReportContext.licenseConfigurationArns') as unknown as string[];
  }

}

export class LicenseManagerResponsesFetchLicenseManagerReportGeneratorReportGeneratorReportFrequency {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerGetLicenseManagerReportGeneratorRequest) {
  }

  public get value(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicenseManagerReportGenerator',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicenseManagerReportGenerator.ReportGenerator.ReportFrequency.value'),
        outputPath: 'ReportGenerator.ReportFrequency.value',
        parameters: {
          LicenseManagerReportGeneratorArn: this.__input.licenseManagerReportGeneratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicenseManagerReportGenerator.ReportGenerator.ReportFrequency.value', props);
    return resource.getResponseField('ReportGenerator.ReportFrequency.value') as unknown as number;
  }

  public get period(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicenseManagerReportGenerator',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicenseManagerReportGenerator.ReportGenerator.ReportFrequency.period'),
        outputPath: 'ReportGenerator.ReportFrequency.period',
        parameters: {
          LicenseManagerReportGeneratorArn: this.__input.licenseManagerReportGeneratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicenseManagerReportGenerator.ReportGenerator.ReportFrequency.period', props);
    return resource.getResponseField('ReportGenerator.ReportFrequency.period') as unknown as string;
  }

}

export class LicenseManagerResponsesFetchLicenseManagerReportGeneratorReportGeneratorS3Location {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerGetLicenseManagerReportGeneratorRequest) {
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicenseManagerReportGenerator',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicenseManagerReportGenerator.ReportGenerator.S3Location.bucket'),
        outputPath: 'ReportGenerator.S3Location.bucket',
        parameters: {
          LicenseManagerReportGeneratorArn: this.__input.licenseManagerReportGeneratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicenseManagerReportGenerator.ReportGenerator.S3Location.bucket', props);
    return resource.getResponseField('ReportGenerator.S3Location.bucket') as unknown as string;
  }

  public get keyPrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicenseManagerReportGenerator',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicenseManagerReportGenerator.ReportGenerator.S3Location.keyPrefix'),
        outputPath: 'ReportGenerator.S3Location.keyPrefix',
        parameters: {
          LicenseManagerReportGeneratorArn: this.__input.licenseManagerReportGeneratorArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicenseManagerReportGenerator.ReportGenerator.S3Location.keyPrefix', props);
    return resource.getResponseField('ReportGenerator.S3Location.keyPrefix') as unknown as string;
  }

}

export class LicenseManagerResponsesFetchLicenseUsage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerGetLicenseUsageRequest) {
  }

  public get licenseUsage(): LicenseManagerResponsesFetchLicenseUsageLicenseUsage {
    return new LicenseManagerResponsesFetchLicenseUsageLicenseUsage(this.__scope, this.__resources, this.__input);
  }

}

export class LicenseManagerResponsesFetchLicenseUsageLicenseUsage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerGetLicenseUsageRequest) {
  }

  public get entitlementUsages(): shapes.LicenseManagerEntitlementUsage[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLicenseUsage',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetLicenseUsage.LicenseUsage.EntitlementUsages'),
        outputPath: 'LicenseUsage.EntitlementUsages',
        parameters: {
          LicenseArn: this.__input.licenseArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLicenseUsage.LicenseUsage.EntitlementUsages', props);
    return resource.getResponseField('LicenseUsage.EntitlementUsages') as unknown as shapes.LicenseManagerEntitlementUsage[];
  }

}

export class LicenseManagerResponsesFetchServiceSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get s3BucketArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceSettings',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetServiceSettings.S3BucketArn'),
        outputPath: 'S3BucketArn',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceSettings.S3BucketArn', props);
    return resource.getResponseField('S3BucketArn') as unknown as string;
  }

  public get snsTopicArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceSettings',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetServiceSettings.SnsTopicArn'),
        outputPath: 'SnsTopicArn',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceSettings.SnsTopicArn', props);
    return resource.getResponseField('SnsTopicArn') as unknown as string;
  }

  public get organizationConfiguration(): LicenseManagerResponsesFetchServiceSettingsOrganizationConfiguration {
    return new LicenseManagerResponsesFetchServiceSettingsOrganizationConfiguration(this.__scope, this.__resources);
  }

  public get enableCrossAccountsDiscovery(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceSettings',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetServiceSettings.EnableCrossAccountsDiscovery'),
        outputPath: 'EnableCrossAccountsDiscovery',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceSettings.EnableCrossAccountsDiscovery', props);
    return resource.getResponseField('EnableCrossAccountsDiscovery') as unknown as boolean;
  }

  public get licenseManagerResourceShareArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceSettings',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetServiceSettings.LicenseManagerResourceShareArn'),
        outputPath: 'LicenseManagerResourceShareArn',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceSettings.LicenseManagerResourceShareArn', props);
    return resource.getResponseField('LicenseManagerResourceShareArn') as unknown as string;
  }

}

export class LicenseManagerResponsesFetchServiceSettingsOrganizationConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get enableIntegration(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceSettings',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.GetServiceSettings.OrganizationConfiguration.EnableIntegration'),
        outputPath: 'OrganizationConfiguration.EnableIntegration',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceSettings.OrganizationConfiguration.EnableIntegration', props);
    return resource.getResponseField('OrganizationConfiguration.EnableIntegration') as unknown as boolean;
  }

}

export class LicenseManagerResponsesListAssociationsForLicenseConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerListAssociationsForLicenseConfigurationRequest) {
  }

  public get licenseConfigurationAssociations(): shapes.LicenseManagerLicenseConfigurationAssociation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAssociationsForLicenseConfiguration',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.ListAssociationsForLicenseConfiguration.LicenseConfigurationAssociations'),
        outputPath: 'LicenseConfigurationAssociations',
        parameters: {
          LicenseConfigurationArn: this.__input.licenseConfigurationArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAssociationsForLicenseConfiguration.LicenseConfigurationAssociations', props);
    return resource.getResponseField('LicenseConfigurationAssociations') as unknown as shapes.LicenseManagerLicenseConfigurationAssociation[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAssociationsForLicenseConfiguration',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.ListAssociationsForLicenseConfiguration.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          LicenseConfigurationArn: this.__input.licenseConfigurationArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAssociationsForLicenseConfiguration.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class LicenseManagerResponsesListDistributedGrants {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerListDistributedGrantsRequest) {
  }

  public get grants(): shapes.LicenseManagerGrant[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDistributedGrants',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.ListDistributedGrants.Grants'),
        outputPath: 'Grants',
        parameters: {
          GrantArns: this.__input.grantArns,
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDistributedGrants.Grants', props);
    return resource.getResponseField('Grants') as unknown as shapes.LicenseManagerGrant[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDistributedGrants',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.ListDistributedGrants.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          GrantArns: this.__input.grantArns,
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDistributedGrants.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class LicenseManagerResponsesListFailuresForLicenseConfigurationOperations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerListFailuresForLicenseConfigurationOperationsRequest) {
  }

  public get licenseOperationFailureList(): shapes.LicenseManagerLicenseOperationFailure[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFailuresForLicenseConfigurationOperations',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.ListFailuresForLicenseConfigurationOperations.LicenseOperationFailureList'),
        outputPath: 'LicenseOperationFailureList',
        parameters: {
          LicenseConfigurationArn: this.__input.licenseConfigurationArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFailuresForLicenseConfigurationOperations.LicenseOperationFailureList', props);
    return resource.getResponseField('LicenseOperationFailureList') as unknown as shapes.LicenseManagerLicenseOperationFailure[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFailuresForLicenseConfigurationOperations',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.ListFailuresForLicenseConfigurationOperations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          LicenseConfigurationArn: this.__input.licenseConfigurationArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFailuresForLicenseConfigurationOperations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class LicenseManagerResponsesListLicenseConfigurations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerListLicenseConfigurationsRequest) {
  }

  public get licenseConfigurations(): shapes.LicenseManagerLicenseConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLicenseConfigurations',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.ListLicenseConfigurations.LicenseConfigurations'),
        outputPath: 'LicenseConfigurations',
        parameters: {
          LicenseConfigurationArns: this.__input.licenseConfigurationArns,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLicenseConfigurations.LicenseConfigurations', props);
    return resource.getResponseField('LicenseConfigurations') as unknown as shapes.LicenseManagerLicenseConfiguration[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLicenseConfigurations',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.ListLicenseConfigurations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          LicenseConfigurationArns: this.__input.licenseConfigurationArns,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLicenseConfigurations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class LicenseManagerResponsesListLicenseManagerReportGenerators {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerListLicenseManagerReportGeneratorsRequest) {
  }

  public get reportGenerators(): shapes.LicenseManagerReportGenerator[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLicenseManagerReportGenerators',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.ListLicenseManagerReportGenerators.ReportGenerators'),
        outputPath: 'ReportGenerators',
        parameters: {
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLicenseManagerReportGenerators.ReportGenerators', props);
    return resource.getResponseField('ReportGenerators') as unknown as shapes.LicenseManagerReportGenerator[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLicenseManagerReportGenerators',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.ListLicenseManagerReportGenerators.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLicenseManagerReportGenerators.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class LicenseManagerResponsesListLicenseSpecificationsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerListLicenseSpecificationsForResourceRequest) {
  }

  public get licenseSpecifications(): shapes.LicenseManagerLicenseSpecification[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLicenseSpecificationsForResource',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.ListLicenseSpecificationsForResource.LicenseSpecifications'),
        outputPath: 'LicenseSpecifications',
        parameters: {
          ResourceArn: this.__input.resourceArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLicenseSpecificationsForResource.LicenseSpecifications', props);
    return resource.getResponseField('LicenseSpecifications') as unknown as shapes.LicenseManagerLicenseSpecification[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLicenseSpecificationsForResource',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.ListLicenseSpecificationsForResource.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ResourceArn: this.__input.resourceArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLicenseSpecificationsForResource.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class LicenseManagerResponsesListLicenseVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerListLicenseVersionsRequest) {
  }

  public get licenses(): shapes.LicenseManagerLicense[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLicenseVersions',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.ListLicenseVersions.Licenses'),
        outputPath: 'Licenses',
        parameters: {
          LicenseArn: this.__input.licenseArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLicenseVersions.Licenses', props);
    return resource.getResponseField('Licenses') as unknown as shapes.LicenseManagerLicense[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLicenseVersions',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.ListLicenseVersions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          LicenseArn: this.__input.licenseArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLicenseVersions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class LicenseManagerResponsesListLicenses {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerListLicensesRequest) {
  }

  public get licenses(): shapes.LicenseManagerLicense[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLicenses',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.ListLicenses.Licenses'),
        outputPath: 'Licenses',
        parameters: {
          LicenseArns: this.__input.licenseArns,
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLicenses.Licenses', props);
    return resource.getResponseField('Licenses') as unknown as shapes.LicenseManagerLicense[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLicenses',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.ListLicenses.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          LicenseArns: this.__input.licenseArns,
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLicenses.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class LicenseManagerResponsesListReceivedGrants {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerListReceivedGrantsRequest) {
  }

  public get grants(): shapes.LicenseManagerGrant[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listReceivedGrants',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.ListReceivedGrants.Grants'),
        outputPath: 'Grants',
        parameters: {
          GrantArns: this.__input.grantArns,
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListReceivedGrants.Grants', props);
    return resource.getResponseField('Grants') as unknown as shapes.LicenseManagerGrant[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listReceivedGrants',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.ListReceivedGrants.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          GrantArns: this.__input.grantArns,
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListReceivedGrants.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class LicenseManagerResponsesListReceivedLicenses {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerListReceivedLicensesRequest) {
  }

  public get licenses(): shapes.LicenseManagerGrantedLicense[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listReceivedLicenses',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.ListReceivedLicenses.Licenses'),
        outputPath: 'Licenses',
        parameters: {
          LicenseArns: this.__input.licenseArns,
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListReceivedLicenses.Licenses', props);
    return resource.getResponseField('Licenses') as unknown as shapes.LicenseManagerGrantedLicense[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listReceivedLicenses',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.ListReceivedLicenses.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          LicenseArns: this.__input.licenseArns,
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListReceivedLicenses.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class LicenseManagerResponsesListResourceInventory {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerListResourceInventoryRequest) {
  }

  public get resourceInventoryList(): shapes.LicenseManagerResourceInventory[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResourceInventory',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.ListResourceInventory.ResourceInventoryList'),
        outputPath: 'ResourceInventoryList',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResourceInventory.ResourceInventoryList', props);
    return resource.getResponseField('ResourceInventoryList') as unknown as shapes.LicenseManagerResourceInventory[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResourceInventory',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.ListResourceInventory.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResourceInventory.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class LicenseManagerResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerListTagsForResourceRequest) {
  }

  public get tags(): shapes.LicenseManagerTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.LicenseManagerTag[];
  }

}

export class LicenseManagerResponsesListTokens {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerListTokensRequest) {
  }

  public get tokens(): shapes.LicenseManagerTokenData[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTokens',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.ListTokens.Tokens'),
        outputPath: 'Tokens',
        parameters: {
          TokenIds: this.__input.tokenIds,
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTokens.Tokens', props);
    return resource.getResponseField('Tokens') as unknown as shapes.LicenseManagerTokenData[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTokens',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.ListTokens.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          TokenIds: this.__input.tokenIds,
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTokens.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class LicenseManagerResponsesListUsageForLicenseConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerListUsageForLicenseConfigurationRequest) {
  }

  public get licenseConfigurationUsageList(): shapes.LicenseManagerLicenseConfigurationUsage[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listUsageForLicenseConfiguration',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.ListUsageForLicenseConfiguration.LicenseConfigurationUsageList'),
        outputPath: 'LicenseConfigurationUsageList',
        parameters: {
          LicenseConfigurationArn: this.__input.licenseConfigurationArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListUsageForLicenseConfiguration.LicenseConfigurationUsageList', props);
    return resource.getResponseField('LicenseConfigurationUsageList') as unknown as shapes.LicenseManagerLicenseConfigurationUsage[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listUsageForLicenseConfiguration',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.ListUsageForLicenseConfiguration.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          LicenseConfigurationArn: this.__input.licenseConfigurationArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListUsageForLicenseConfiguration.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class LicenseManagerResponsesRejectGrant {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LicenseManagerRejectGrantRequest) {
  }

  public get grantArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rejectGrant',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.RejectGrant.GrantArn'),
        outputPath: 'GrantArn',
        parameters: {
          GrantArn: this.__input.grantArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RejectGrant.GrantArn', props);
    return resource.getResponseField('GrantArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rejectGrant',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.RejectGrant.Status'),
        outputPath: 'Status',
        parameters: {
          GrantArn: this.__input.grantArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RejectGrant.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rejectGrant',
        service: 'LicenseManager',
        physicalResourceId: cr.PhysicalResourceId.of('LicenseManager.RejectGrant.Version'),
        outputPath: 'Version',
        parameters: {
          GrantArn: this.__input.grantArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RejectGrant.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

}

