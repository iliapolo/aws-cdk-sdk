import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class WorkLinkClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public associateDomain(input: shapes.WorkLinkAssociateDomainRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateDomain',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.AssociateDomain'),
        parameters: {
          FleetArn: input.fleetArn,
          DomainName: input.domainName,
          DisplayName: input.displayName,
          AcmCertificateArn: input.acmCertificateArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssociateDomain', props);
  }

  public associateWebsiteAuthorizationProvider(input: shapes.WorkLinkAssociateWebsiteAuthorizationProviderRequest): WorkLinkAssociateWebsiteAuthorizationProvider {
    return new WorkLinkAssociateWebsiteAuthorizationProvider(this, 'AssociateWebsiteAuthorizationProvider', this.__resources, input);
  }

  public associateWebsiteCertificateAuthority(input: shapes.WorkLinkAssociateWebsiteCertificateAuthorityRequest): WorkLinkAssociateWebsiteCertificateAuthority {
    return new WorkLinkAssociateWebsiteCertificateAuthority(this, 'AssociateWebsiteCertificateAuthority', this.__resources, input);
  }

  public createFleet(input: shapes.WorkLinkCreateFleetRequest): WorkLinkCreateFleet {
    return new WorkLinkCreateFleet(this, 'CreateFleet', this.__resources, input);
  }

  public deleteFleet(input: shapes.WorkLinkDeleteFleetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFleet',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.DeleteFleet'),
        parameters: {
          FleetArn: input.fleetArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteFleet', props);
  }

  public describeAuditStreamConfiguration(input: shapes.WorkLinkDescribeAuditStreamConfigurationRequest): WorkLinkDescribeAuditStreamConfiguration {
    return new WorkLinkDescribeAuditStreamConfiguration(this, 'DescribeAuditStreamConfiguration', this.__resources, input);
  }

  public describeCompanyNetworkConfiguration(input: shapes.WorkLinkDescribeCompanyNetworkConfigurationRequest): WorkLinkDescribeCompanyNetworkConfiguration {
    return new WorkLinkDescribeCompanyNetworkConfiguration(this, 'DescribeCompanyNetworkConfiguration', this.__resources, input);
  }

  public describeDevice(input: shapes.WorkLinkDescribeDeviceRequest): WorkLinkDescribeDevice {
    return new WorkLinkDescribeDevice(this, 'DescribeDevice', this.__resources, input);
  }

  public describeDevicePolicyConfiguration(input: shapes.WorkLinkDescribeDevicePolicyConfigurationRequest): WorkLinkDescribeDevicePolicyConfiguration {
    return new WorkLinkDescribeDevicePolicyConfiguration(this, 'DescribeDevicePolicyConfiguration', this.__resources, input);
  }

  public describeDomain(input: shapes.WorkLinkDescribeDomainRequest): WorkLinkDescribeDomain {
    return new WorkLinkDescribeDomain(this, 'DescribeDomain', this.__resources, input);
  }

  public describeFleetMetadata(input: shapes.WorkLinkDescribeFleetMetadataRequest): WorkLinkDescribeFleetMetadata {
    return new WorkLinkDescribeFleetMetadata(this, 'DescribeFleetMetadata', this.__resources, input);
  }

  public describeIdentityProviderConfiguration(input: shapes.WorkLinkDescribeIdentityProviderConfigurationRequest): WorkLinkDescribeIdentityProviderConfiguration {
    return new WorkLinkDescribeIdentityProviderConfiguration(this, 'DescribeIdentityProviderConfiguration', this.__resources, input);
  }

  public describeWebsiteCertificateAuthority(input: shapes.WorkLinkDescribeWebsiteCertificateAuthorityRequest): WorkLinkDescribeWebsiteCertificateAuthority {
    return new WorkLinkDescribeWebsiteCertificateAuthority(this, 'DescribeWebsiteCertificateAuthority', this.__resources, input);
  }

  public disassociateDomain(input: shapes.WorkLinkDisassociateDomainRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateDomain',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.DisassociateDomain'),
        parameters: {
          FleetArn: input.fleetArn,
          DomainName: input.domainName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateDomain', props);
  }

  public disassociateWebsiteAuthorizationProvider(input: shapes.WorkLinkDisassociateWebsiteAuthorizationProviderRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateWebsiteAuthorizationProvider',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.DisassociateWebsiteAuthorizationProvider'),
        parameters: {
          FleetArn: input.fleetArn,
          AuthorizationProviderId: input.authorizationProviderId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateWebsiteAuthorizationProvider', props);
  }

  public disassociateWebsiteCertificateAuthority(input: shapes.WorkLinkDisassociateWebsiteCertificateAuthorityRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateWebsiteCertificateAuthority',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.DisassociateWebsiteCertificateAuthority'),
        parameters: {
          FleetArn: input.fleetArn,
          WebsiteCaId: input.websiteCaId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateWebsiteCertificateAuthority', props);
  }

  public listDevices(input: shapes.WorkLinkListDevicesRequest): WorkLinkListDevices {
    return new WorkLinkListDevices(this, 'ListDevices', this.__resources, input);
  }

  public listDomains(input: shapes.WorkLinkListDomainsRequest): WorkLinkListDomains {
    return new WorkLinkListDomains(this, 'ListDomains', this.__resources, input);
  }

  public listFleets(input: shapes.WorkLinkListFleetsRequest): WorkLinkListFleets {
    return new WorkLinkListFleets(this, 'ListFleets', this.__resources, input);
  }

  public listTagsForResource(input: shapes.WorkLinkListTagsForResourceRequest): WorkLinkListTagsForResource {
    return new WorkLinkListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public listWebsiteAuthorizationProviders(input: shapes.WorkLinkListWebsiteAuthorizationProvidersRequest): WorkLinkListWebsiteAuthorizationProviders {
    return new WorkLinkListWebsiteAuthorizationProviders(this, 'ListWebsiteAuthorizationProviders', this.__resources, input);
  }

  public listWebsiteCertificateAuthorities(input: shapes.WorkLinkListWebsiteCertificateAuthoritiesRequest): WorkLinkListWebsiteCertificateAuthorities {
    return new WorkLinkListWebsiteCertificateAuthorities(this, 'ListWebsiteCertificateAuthorities', this.__resources, input);
  }

  public restoreDomainAccess(input: shapes.WorkLinkRestoreDomainAccessRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDomainAccess',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.RestoreDomainAccess'),
        parameters: {
          FleetArn: input.fleetArn,
          DomainName: input.domainName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RestoreDomainAccess', props);
  }

  public revokeDomainAccess(input: shapes.WorkLinkRevokeDomainAccessRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'revokeDomainAccess',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.RevokeDomainAccess'),
        parameters: {
          FleetArn: input.fleetArn,
          DomainName: input.domainName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RevokeDomainAccess', props);
  }

  public signOutUser(input: shapes.WorkLinkSignOutUserRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'signOutUser',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.SignOutUser'),
        parameters: {
          FleetArn: input.fleetArn,
          Username: input.username,
        },
      },
    };
    new cr.AwsCustomResource(this, 'SignOutUser', props);
  }

  public tagResource(input: shapes.WorkLinkTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.WorkLinkUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateAuditStreamConfiguration(input: shapes.WorkLinkUpdateAuditStreamConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAuditStreamConfiguration',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.UpdateAuditStreamConfiguration'),
        parameters: {
          FleetArn: input.fleetArn,
          AuditStreamArn: input.auditStreamArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateAuditStreamConfiguration', props);
  }

  public updateCompanyNetworkConfiguration(input: shapes.WorkLinkUpdateCompanyNetworkConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCompanyNetworkConfiguration',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.UpdateCompanyNetworkConfiguration'),
        parameters: {
          FleetArn: input.fleetArn,
          VpcId: input.vpcId,
          SubnetIds: input.subnetIds,
          SecurityGroupIds: input.securityGroupIds,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateCompanyNetworkConfiguration', props);
  }

  public updateDevicePolicyConfiguration(input: shapes.WorkLinkUpdateDevicePolicyConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDevicePolicyConfiguration',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.UpdateDevicePolicyConfiguration'),
        parameters: {
          FleetArn: input.fleetArn,
          DeviceCaCertificate: input.deviceCaCertificate,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateDevicePolicyConfiguration', props);
  }

  public updateDomainMetadata(input: shapes.WorkLinkUpdateDomainMetadataRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainMetadata',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.UpdateDomainMetadata'),
        parameters: {
          FleetArn: input.fleetArn,
          DomainName: input.domainName,
          DisplayName: input.displayName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateDomainMetadata', props);
  }

  public updateFleetMetadata(input: shapes.WorkLinkUpdateFleetMetadataRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFleetMetadata',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.UpdateFleetMetadata'),
        parameters: {
          FleetArn: input.fleetArn,
          DisplayName: input.displayName,
          OptimizeForEndUserLocation: input.optimizeForEndUserLocation,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateFleetMetadata', props);
  }

  public updateIdentityProviderConfiguration(input: shapes.WorkLinkUpdateIdentityProviderConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIdentityProviderConfiguration',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.UpdateIdentityProviderConfiguration'),
        parameters: {
          FleetArn: input.fleetArn,
          IdentityProviderType: input.identityProviderType,
          IdentityProviderSamlMetadata: input.identityProviderSamlMetadata,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateIdentityProviderConfiguration', props);
  }

}

export class WorkLinkAssociateWebsiteAuthorizationProvider extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkLinkAssociateWebsiteAuthorizationProviderRequest) {
    super(scope, id);
  }

  public get authorizationProviderId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateWebsiteAuthorizationProvider',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.AssociateWebsiteAuthorizationProvider.AuthorizationProviderId'),
        outputPath: 'AuthorizationProviderId',
        parameters: {
          FleetArn: this.input.fleetArn,
          AuthorizationProviderType: this.input.authorizationProviderType,
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateWebsiteAuthorizationProvider.AuthorizationProviderId', props);
    return resource.getResponseField('AuthorizationProviderId') as unknown as string;
  }

}

export class WorkLinkAssociateWebsiteCertificateAuthority extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkLinkAssociateWebsiteCertificateAuthorityRequest) {
    super(scope, id);
  }

  public get websiteCaId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateWebsiteCertificateAuthority',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.AssociateWebsiteCertificateAuthority.WebsiteCaId'),
        outputPath: 'WebsiteCaId',
        parameters: {
          FleetArn: this.input.fleetArn,
          Certificate: this.input.certificate,
          DisplayName: this.input.displayName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateWebsiteCertificateAuthority.WebsiteCaId', props);
    return resource.getResponseField('WebsiteCaId') as unknown as string;
  }

}

export class WorkLinkCreateFleet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkLinkCreateFleetRequest) {
    super(scope, id);
  }

  public get fleetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.CreateFleet.FleetArn'),
        outputPath: 'FleetArn',
        parameters: {
          FleetName: this.input.fleetName,
          DisplayName: this.input.displayName,
          OptimizeForEndUserLocation: this.input.optimizeForEndUserLocation,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.FleetArn', props);
    return resource.getResponseField('FleetArn') as unknown as string;
  }

}

export class WorkLinkDescribeAuditStreamConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkLinkDescribeAuditStreamConfigurationRequest) {
    super(scope, id);
  }

  public get auditStreamArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAuditStreamConfiguration',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.DescribeAuditStreamConfiguration.AuditStreamArn'),
        outputPath: 'AuditStreamArn',
        parameters: {
          FleetArn: this.input.fleetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAuditStreamConfiguration.AuditStreamArn', props);
    return resource.getResponseField('AuditStreamArn') as unknown as string;
  }

}

export class WorkLinkDescribeCompanyNetworkConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkLinkDescribeCompanyNetworkConfigurationRequest) {
    super(scope, id);
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCompanyNetworkConfiguration',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.DescribeCompanyNetworkConfiguration.VpcId'),
        outputPath: 'VpcId',
        parameters: {
          FleetArn: this.input.fleetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCompanyNetworkConfiguration.VpcId', props);
    return resource.getResponseField('VpcId') as unknown as string;
  }

  public get subnetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCompanyNetworkConfiguration',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.DescribeCompanyNetworkConfiguration.SubnetIds'),
        outputPath: 'SubnetIds',
        parameters: {
          FleetArn: this.input.fleetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCompanyNetworkConfiguration.SubnetIds', props);
    return resource.getResponseField('SubnetIds') as unknown as string[];
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCompanyNetworkConfiguration',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.DescribeCompanyNetworkConfiguration.SecurityGroupIds'),
        outputPath: 'SecurityGroupIds',
        parameters: {
          FleetArn: this.input.fleetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCompanyNetworkConfiguration.SecurityGroupIds', props);
    return resource.getResponseField('SecurityGroupIds') as unknown as string[];
  }

}

export class WorkLinkDescribeDevice extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkLinkDescribeDeviceRequest) {
    super(scope, id);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDevice',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.DescribeDevice.Status'),
        outputPath: 'Status',
        parameters: {
          FleetArn: this.input.fleetArn,
          DeviceId: this.input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDevice.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get model(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDevice',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.DescribeDevice.Model'),
        outputPath: 'Model',
        parameters: {
          FleetArn: this.input.fleetArn,
          DeviceId: this.input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDevice.Model', props);
    return resource.getResponseField('Model') as unknown as string;
  }

  public get manufacturer(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDevice',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.DescribeDevice.Manufacturer'),
        outputPath: 'Manufacturer',
        parameters: {
          FleetArn: this.input.fleetArn,
          DeviceId: this.input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDevice.Manufacturer', props);
    return resource.getResponseField('Manufacturer') as unknown as string;
  }

  public get operatingSystem(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDevice',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.DescribeDevice.OperatingSystem'),
        outputPath: 'OperatingSystem',
        parameters: {
          FleetArn: this.input.fleetArn,
          DeviceId: this.input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDevice.OperatingSystem', props);
    return resource.getResponseField('OperatingSystem') as unknown as string;
  }

  public get operatingSystemVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDevice',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.DescribeDevice.OperatingSystemVersion'),
        outputPath: 'OperatingSystemVersion',
        parameters: {
          FleetArn: this.input.fleetArn,
          DeviceId: this.input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDevice.OperatingSystemVersion', props);
    return resource.getResponseField('OperatingSystemVersion') as unknown as string;
  }

  public get patchLevel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDevice',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.DescribeDevice.PatchLevel'),
        outputPath: 'PatchLevel',
        parameters: {
          FleetArn: this.input.fleetArn,
          DeviceId: this.input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDevice.PatchLevel', props);
    return resource.getResponseField('PatchLevel') as unknown as string;
  }

  public get firstAccessedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDevice',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.DescribeDevice.FirstAccessedTime'),
        outputPath: 'FirstAccessedTime',
        parameters: {
          FleetArn: this.input.fleetArn,
          DeviceId: this.input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDevice.FirstAccessedTime', props);
    return resource.getResponseField('FirstAccessedTime') as unknown as string;
  }

  public get lastAccessedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDevice',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.DescribeDevice.LastAccessedTime'),
        outputPath: 'LastAccessedTime',
        parameters: {
          FleetArn: this.input.fleetArn,
          DeviceId: this.input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDevice.LastAccessedTime', props);
    return resource.getResponseField('LastAccessedTime') as unknown as string;
  }

  public get username(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDevice',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.DescribeDevice.Username'),
        outputPath: 'Username',
        parameters: {
          FleetArn: this.input.fleetArn,
          DeviceId: this.input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDevice.Username', props);
    return resource.getResponseField('Username') as unknown as string;
  }

}

export class WorkLinkDescribeDevicePolicyConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkLinkDescribeDevicePolicyConfigurationRequest) {
    super(scope, id);
  }

  public get deviceCaCertificate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDevicePolicyConfiguration',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.DescribeDevicePolicyConfiguration.DeviceCaCertificate'),
        outputPath: 'DeviceCaCertificate',
        parameters: {
          FleetArn: this.input.fleetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDevicePolicyConfiguration.DeviceCaCertificate', props);
    return resource.getResponseField('DeviceCaCertificate') as unknown as string;
  }

}

export class WorkLinkDescribeDomain extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkLinkDescribeDomainRequest) {
    super(scope, id);
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.DescribeDomain.DomainName'),
        outputPath: 'DomainName',
        parameters: {
          FleetArn: this.input.fleetArn,
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.DomainName', props);
    return resource.getResponseField('DomainName') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.DescribeDomain.DisplayName'),
        outputPath: 'DisplayName',
        parameters: {
          FleetArn: this.input.fleetArn,
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.DisplayName', props);
    return resource.getResponseField('DisplayName') as unknown as string;
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.DescribeDomain.CreatedTime'),
        outputPath: 'CreatedTime',
        parameters: {
          FleetArn: this.input.fleetArn,
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.CreatedTime', props);
    return resource.getResponseField('CreatedTime') as unknown as string;
  }

  public get domainStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.DescribeDomain.DomainStatus'),
        outputPath: 'DomainStatus',
        parameters: {
          FleetArn: this.input.fleetArn,
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.DomainStatus', props);
    return resource.getResponseField('DomainStatus') as unknown as string;
  }

  public get acmCertificateArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomain',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.DescribeDomain.AcmCertificateArn'),
        outputPath: 'AcmCertificateArn',
        parameters: {
          FleetArn: this.input.fleetArn,
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomain.AcmCertificateArn', props);
    return resource.getResponseField('AcmCertificateArn') as unknown as string;
  }

}

export class WorkLinkDescribeFleetMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkLinkDescribeFleetMetadataRequest) {
    super(scope, id);
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFleetMetadata',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.DescribeFleetMetadata.CreatedTime'),
        outputPath: 'CreatedTime',
        parameters: {
          FleetArn: this.input.fleetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFleetMetadata.CreatedTime', props);
    return resource.getResponseField('CreatedTime') as unknown as string;
  }

  public get lastUpdatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFleetMetadata',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.DescribeFleetMetadata.LastUpdatedTime'),
        outputPath: 'LastUpdatedTime',
        parameters: {
          FleetArn: this.input.fleetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFleetMetadata.LastUpdatedTime', props);
    return resource.getResponseField('LastUpdatedTime') as unknown as string;
  }

  public get fleetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFleetMetadata',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.DescribeFleetMetadata.FleetName'),
        outputPath: 'FleetName',
        parameters: {
          FleetArn: this.input.fleetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFleetMetadata.FleetName', props);
    return resource.getResponseField('FleetName') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFleetMetadata',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.DescribeFleetMetadata.DisplayName'),
        outputPath: 'DisplayName',
        parameters: {
          FleetArn: this.input.fleetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFleetMetadata.DisplayName', props);
    return resource.getResponseField('DisplayName') as unknown as string;
  }

  public get optimizeForEndUserLocation(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFleetMetadata',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.DescribeFleetMetadata.OptimizeForEndUserLocation'),
        outputPath: 'OptimizeForEndUserLocation',
        parameters: {
          FleetArn: this.input.fleetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFleetMetadata.OptimizeForEndUserLocation', props);
    return resource.getResponseField('OptimizeForEndUserLocation') as unknown as boolean;
  }

  public get companyCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFleetMetadata',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.DescribeFleetMetadata.CompanyCode'),
        outputPath: 'CompanyCode',
        parameters: {
          FleetArn: this.input.fleetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFleetMetadata.CompanyCode', props);
    return resource.getResponseField('CompanyCode') as unknown as string;
  }

  public get fleetStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFleetMetadata',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.DescribeFleetMetadata.FleetStatus'),
        outputPath: 'FleetStatus',
        parameters: {
          FleetArn: this.input.fleetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFleetMetadata.FleetStatus', props);
    return resource.getResponseField('FleetStatus') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFleetMetadata',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.DescribeFleetMetadata.Tags'),
        outputPath: 'Tags',
        parameters: {
          FleetArn: this.input.fleetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFleetMetadata.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class WorkLinkDescribeIdentityProviderConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkLinkDescribeIdentityProviderConfigurationRequest) {
    super(scope, id);
  }

  public get identityProviderType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIdentityProviderConfiguration',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.DescribeIdentityProviderConfiguration.IdentityProviderType'),
        outputPath: 'IdentityProviderType',
        parameters: {
          FleetArn: this.input.fleetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIdentityProviderConfiguration.IdentityProviderType', props);
    return resource.getResponseField('IdentityProviderType') as unknown as string;
  }

  public get serviceProviderSamlMetadata(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIdentityProviderConfiguration',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.DescribeIdentityProviderConfiguration.ServiceProviderSamlMetadata'),
        outputPath: 'ServiceProviderSamlMetadata',
        parameters: {
          FleetArn: this.input.fleetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIdentityProviderConfiguration.ServiceProviderSamlMetadata', props);
    return resource.getResponseField('ServiceProviderSamlMetadata') as unknown as string;
  }

  public get identityProviderSamlMetadata(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIdentityProviderConfiguration',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.DescribeIdentityProviderConfiguration.IdentityProviderSamlMetadata'),
        outputPath: 'IdentityProviderSamlMetadata',
        parameters: {
          FleetArn: this.input.fleetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIdentityProviderConfiguration.IdentityProviderSamlMetadata', props);
    return resource.getResponseField('IdentityProviderSamlMetadata') as unknown as string;
  }

}

export class WorkLinkDescribeWebsiteCertificateAuthority extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkLinkDescribeWebsiteCertificateAuthorityRequest) {
    super(scope, id);
  }

  public get certificate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWebsiteCertificateAuthority',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.DescribeWebsiteCertificateAuthority.Certificate'),
        outputPath: 'Certificate',
        parameters: {
          FleetArn: this.input.fleetArn,
          WebsiteCaId: this.input.websiteCaId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWebsiteCertificateAuthority.Certificate', props);
    return resource.getResponseField('Certificate') as unknown as string;
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWebsiteCertificateAuthority',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.DescribeWebsiteCertificateAuthority.CreatedTime'),
        outputPath: 'CreatedTime',
        parameters: {
          FleetArn: this.input.fleetArn,
          WebsiteCaId: this.input.websiteCaId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWebsiteCertificateAuthority.CreatedTime', props);
    return resource.getResponseField('CreatedTime') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWebsiteCertificateAuthority',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.DescribeWebsiteCertificateAuthority.DisplayName'),
        outputPath: 'DisplayName',
        parameters: {
          FleetArn: this.input.fleetArn,
          WebsiteCaId: this.input.websiteCaId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWebsiteCertificateAuthority.DisplayName', props);
    return resource.getResponseField('DisplayName') as unknown as string;
  }

}

export class WorkLinkListDevices extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkLinkListDevicesRequest) {
    super(scope, id);
  }

  public get devices(): shapes.WorkLinkDeviceSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDevices',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.ListDevices.Devices'),
        outputPath: 'Devices',
        parameters: {
          FleetArn: this.input.fleetArn,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDevices.Devices', props);
    return resource.getResponseField('Devices') as unknown as shapes.WorkLinkDeviceSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDevices',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.ListDevices.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          FleetArn: this.input.fleetArn,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDevices.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkLinkListDomains extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkLinkListDomainsRequest) {
    super(scope, id);
  }

  public get domains(): shapes.WorkLinkDomainSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDomains',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.ListDomains.Domains'),
        outputPath: 'Domains',
        parameters: {
          FleetArn: this.input.fleetArn,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDomains.Domains', props);
    return resource.getResponseField('Domains') as unknown as shapes.WorkLinkDomainSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDomains',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.ListDomains.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          FleetArn: this.input.fleetArn,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDomains.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkLinkListFleets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkLinkListFleetsRequest) {
    super(scope, id);
  }

  public get fleetSummaryList(): shapes.WorkLinkFleetSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFleets',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.ListFleets.FleetSummaryList'),
        outputPath: 'FleetSummaryList',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFleets.FleetSummaryList', props);
    return resource.getResponseField('FleetSummaryList') as unknown as shapes.WorkLinkFleetSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFleets',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.ListFleets.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFleets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkLinkListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkLinkListTagsForResourceRequest) {
    super(scope, id);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class WorkLinkListWebsiteAuthorizationProviders extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkLinkListWebsiteAuthorizationProvidersRequest) {
    super(scope, id);
  }

  public get websiteAuthorizationProviders(): shapes.WorkLinkWebsiteAuthorizationProviderSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWebsiteAuthorizationProviders',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.ListWebsiteAuthorizationProviders.WebsiteAuthorizationProviders'),
        outputPath: 'WebsiteAuthorizationProviders',
        parameters: {
          FleetArn: this.input.fleetArn,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListWebsiteAuthorizationProviders.WebsiteAuthorizationProviders', props);
    return resource.getResponseField('WebsiteAuthorizationProviders') as unknown as shapes.WorkLinkWebsiteAuthorizationProviderSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWebsiteAuthorizationProviders',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.ListWebsiteAuthorizationProviders.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          FleetArn: this.input.fleetArn,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListWebsiteAuthorizationProviders.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkLinkListWebsiteCertificateAuthorities extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkLinkListWebsiteCertificateAuthoritiesRequest) {
    super(scope, id);
  }

  public get websiteCertificateAuthorities(): shapes.WorkLinkWebsiteCaSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWebsiteCertificateAuthorities',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.ListWebsiteCertificateAuthorities.WebsiteCertificateAuthorities'),
        outputPath: 'WebsiteCertificateAuthorities',
        parameters: {
          FleetArn: this.input.fleetArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListWebsiteCertificateAuthorities.WebsiteCertificateAuthorities', props);
    return resource.getResponseField('WebsiteCertificateAuthorities') as unknown as shapes.WorkLinkWebsiteCaSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWebsiteCertificateAuthorities',
        service: 'WorkLink',
        physicalResourceId: cr.PhysicalResourceId.of('WorkLink.ListWebsiteCertificateAuthorities.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          FleetArn: this.input.fleetArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListWebsiteCertificateAuthorities.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

