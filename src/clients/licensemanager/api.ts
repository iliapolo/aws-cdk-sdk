import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class LicenseManagerClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createLicenseConfiguration(input: shapes.LicenseManagerCreateLicenseConfigurationRequest): LicenseManagerCreateLicenseConfiguration {
    return new LicenseManagerCreateLicenseConfiguration(this, 'CreateLicenseConfiguration', this.__resources, input);
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

  public fetchLicenseConfiguration(input: shapes.LicenseManagerGetLicenseConfigurationRequest): LicenseManagerFetchLicenseConfiguration {
    return new LicenseManagerFetchLicenseConfiguration(this, 'FetchLicenseConfiguration', this.__resources, input);
  }

  public fetchServiceSettings(): LicenseManagerFetchServiceSettings {
    return new LicenseManagerFetchServiceSettings(this, 'FetchServiceSettings', this.__resources);
  }

  public listAssociationsForLicenseConfiguration(input: shapes.LicenseManagerListAssociationsForLicenseConfigurationRequest): LicenseManagerListAssociationsForLicenseConfiguration {
    return new LicenseManagerListAssociationsForLicenseConfiguration(this, 'ListAssociationsForLicenseConfiguration', this.__resources, input);
  }

  public listFailuresForLicenseConfigurationOperations(input: shapes.LicenseManagerListFailuresForLicenseConfigurationOperationsRequest): LicenseManagerListFailuresForLicenseConfigurationOperations {
    return new LicenseManagerListFailuresForLicenseConfigurationOperations(this, 'ListFailuresForLicenseConfigurationOperations', this.__resources, input);
  }

  public listLicenseConfigurations(input: shapes.LicenseManagerListLicenseConfigurationsRequest): LicenseManagerListLicenseConfigurations {
    return new LicenseManagerListLicenseConfigurations(this, 'ListLicenseConfigurations', this.__resources, input);
  }

  public listLicenseSpecificationsForResource(input: shapes.LicenseManagerListLicenseSpecificationsForResourceRequest): LicenseManagerListLicenseSpecificationsForResource {
    return new LicenseManagerListLicenseSpecificationsForResource(this, 'ListLicenseSpecificationsForResource', this.__resources, input);
  }

  public listResourceInventory(input: shapes.LicenseManagerListResourceInventoryRequest): LicenseManagerListResourceInventory {
    return new LicenseManagerListResourceInventory(this, 'ListResourceInventory', this.__resources, input);
  }

  public listTagsForResource(input: shapes.LicenseManagerListTagsForResourceRequest): LicenseManagerListTagsForResource {
    return new LicenseManagerListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public listUsageForLicenseConfiguration(input: shapes.LicenseManagerListUsageForLicenseConfigurationRequest): LicenseManagerListUsageForLicenseConfiguration {
    return new LicenseManagerListUsageForLicenseConfiguration(this, 'ListUsageForLicenseConfiguration', this.__resources, input);
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
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateLicenseConfiguration', props);
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

export class LicenseManagerCreateLicenseConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LicenseManagerCreateLicenseConfigurationRequest) {
    super(scope, id);
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
          Name: this.input.name,
          Description: this.input.description,
          LicenseCountingType: this.input.licenseCountingType,
          LicenseCount: this.input.licenseCount,
          LicenseCountHardLimit: this.input.licenseCountHardLimit,
          LicenseRules: this.input.licenseRules,
          Tags: this.input.tags,
          ProductInformationList: this.input.productInformationList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLicenseConfiguration.LicenseConfigurationArn', props);
    return resource.getResponseField('LicenseConfigurationArn') as unknown as string;
  }

}

export class LicenseManagerFetchLicenseConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LicenseManagerGetLicenseConfigurationRequest) {
    super(scope, id);
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
          LicenseConfigurationArn: this.input.licenseConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLicenseConfiguration.LicenseConfigurationId', props);
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
          LicenseConfigurationArn: this.input.licenseConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLicenseConfiguration.LicenseConfigurationArn', props);
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
          LicenseConfigurationArn: this.input.licenseConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLicenseConfiguration.Name', props);
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
          LicenseConfigurationArn: this.input.licenseConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLicenseConfiguration.Description', props);
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
          LicenseConfigurationArn: this.input.licenseConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLicenseConfiguration.LicenseCountingType', props);
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
          LicenseConfigurationArn: this.input.licenseConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLicenseConfiguration.LicenseRules', props);
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
          LicenseConfigurationArn: this.input.licenseConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLicenseConfiguration.LicenseCount', props);
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
          LicenseConfigurationArn: this.input.licenseConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLicenseConfiguration.LicenseCountHardLimit', props);
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
          LicenseConfigurationArn: this.input.licenseConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLicenseConfiguration.ConsumedLicenses', props);
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
          LicenseConfigurationArn: this.input.licenseConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLicenseConfiguration.Status', props);
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
          LicenseConfigurationArn: this.input.licenseConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLicenseConfiguration.OwnerAccountId', props);
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
          LicenseConfigurationArn: this.input.licenseConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLicenseConfiguration.ConsumedLicenseSummaryList', props);
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
          LicenseConfigurationArn: this.input.licenseConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLicenseConfiguration.ManagedResourceSummaryList', props);
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
          LicenseConfigurationArn: this.input.licenseConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLicenseConfiguration.Tags', props);
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
          LicenseConfigurationArn: this.input.licenseConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLicenseConfiguration.ProductInformationList', props);
    return resource.getResponseField('ProductInformationList') as unknown as shapes.LicenseManagerProductInformation[];
  }

  public get automatedDiscoveryInformation(): LicenseManagerFetchLicenseConfigurationAutomatedDiscoveryInformation {
    return new LicenseManagerFetchLicenseConfigurationAutomatedDiscoveryInformation(this, 'AutomatedDiscoveryInformation', this.__resources, this.input);
  }

}

export class LicenseManagerFetchLicenseConfigurationAutomatedDiscoveryInformation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LicenseManagerGetLicenseConfigurationRequest) {
    super(scope, id);
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
          LicenseConfigurationArn: this.input.licenseConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLicenseConfiguration.AutomatedDiscoveryInformation.LastRunTime', props);
    return resource.getResponseField('AutomatedDiscoveryInformation.LastRunTime') as unknown as string;
  }

}

export class LicenseManagerFetchServiceSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetServiceSettings.S3BucketArn', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetServiceSettings.SnsTopicArn', props);
    return resource.getResponseField('SnsTopicArn') as unknown as string;
  }

  public get organizationConfiguration(): LicenseManagerFetchServiceSettingsOrganizationConfiguration {
    return new LicenseManagerFetchServiceSettingsOrganizationConfiguration(this, 'OrganizationConfiguration', this.__resources);
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
    const resource = new cr.AwsCustomResource(this, 'GetServiceSettings.EnableCrossAccountsDiscovery', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetServiceSettings.LicenseManagerResourceShareArn', props);
    return resource.getResponseField('LicenseManagerResourceShareArn') as unknown as string;
  }

}

export class LicenseManagerFetchServiceSettingsOrganizationConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetServiceSettings.OrganizationConfiguration.EnableIntegration', props);
    return resource.getResponseField('OrganizationConfiguration.EnableIntegration') as unknown as boolean;
  }

}

export class LicenseManagerListAssociationsForLicenseConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LicenseManagerListAssociationsForLicenseConfigurationRequest) {
    super(scope, id);
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
          LicenseConfigurationArn: this.input.licenseConfigurationArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAssociationsForLicenseConfiguration.LicenseConfigurationAssociations', props);
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
          LicenseConfigurationArn: this.input.licenseConfigurationArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAssociationsForLicenseConfiguration.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class LicenseManagerListFailuresForLicenseConfigurationOperations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LicenseManagerListFailuresForLicenseConfigurationOperationsRequest) {
    super(scope, id);
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
          LicenseConfigurationArn: this.input.licenseConfigurationArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFailuresForLicenseConfigurationOperations.LicenseOperationFailureList', props);
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
          LicenseConfigurationArn: this.input.licenseConfigurationArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFailuresForLicenseConfigurationOperations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class LicenseManagerListLicenseConfigurations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LicenseManagerListLicenseConfigurationsRequest) {
    super(scope, id);
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
          LicenseConfigurationArns: this.input.licenseConfigurationArns,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListLicenseConfigurations.LicenseConfigurations', props);
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
          LicenseConfigurationArns: this.input.licenseConfigurationArns,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListLicenseConfigurations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class LicenseManagerListLicenseSpecificationsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LicenseManagerListLicenseSpecificationsForResourceRequest) {
    super(scope, id);
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
          ResourceArn: this.input.resourceArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListLicenseSpecificationsForResource.LicenseSpecifications', props);
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
          ResourceArn: this.input.resourceArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListLicenseSpecificationsForResource.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class LicenseManagerListResourceInventory extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LicenseManagerListResourceInventoryRequest) {
    super(scope, id);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResourceInventory.ResourceInventoryList', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResourceInventory.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class LicenseManagerListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LicenseManagerListTagsForResourceRequest) {
    super(scope, id);
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
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.LicenseManagerTag[];
  }

}

export class LicenseManagerListUsageForLicenseConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LicenseManagerListUsageForLicenseConfigurationRequest) {
    super(scope, id);
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
          LicenseConfigurationArn: this.input.licenseConfigurationArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListUsageForLicenseConfiguration.LicenseConfigurationUsageList', props);
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
          LicenseConfigurationArn: this.input.licenseConfigurationArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListUsageForLicenseConfiguration.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

