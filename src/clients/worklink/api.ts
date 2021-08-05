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

  public associateWebsiteAuthorizationProvider(input: shapes.WorkLinkAssociateWebsiteAuthorizationProviderRequest): WorkLinkResponsesAssociateWebsiteAuthorizationProvider {
    return new WorkLinkResponsesAssociateWebsiteAuthorizationProvider(this, this.__resources, input);
  }

  public associateWebsiteCertificateAuthority(input: shapes.WorkLinkAssociateWebsiteCertificateAuthorityRequest): WorkLinkResponsesAssociateWebsiteCertificateAuthority {
    return new WorkLinkResponsesAssociateWebsiteCertificateAuthority(this, this.__resources, input);
  }

  public createFleet(input: shapes.WorkLinkCreateFleetRequest): WorkLinkResponsesCreateFleet {
    return new WorkLinkResponsesCreateFleet(this, this.__resources, input);
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

  public describeAuditStreamConfiguration(input: shapes.WorkLinkDescribeAuditStreamConfigurationRequest): WorkLinkResponsesDescribeAuditStreamConfiguration {
    return new WorkLinkResponsesDescribeAuditStreamConfiguration(this, this.__resources, input);
  }

  public describeCompanyNetworkConfiguration(input: shapes.WorkLinkDescribeCompanyNetworkConfigurationRequest): WorkLinkResponsesDescribeCompanyNetworkConfiguration {
    return new WorkLinkResponsesDescribeCompanyNetworkConfiguration(this, this.__resources, input);
  }

  public describeDevice(input: shapes.WorkLinkDescribeDeviceRequest): WorkLinkResponsesDescribeDevice {
    return new WorkLinkResponsesDescribeDevice(this, this.__resources, input);
  }

  public describeDevicePolicyConfiguration(input: shapes.WorkLinkDescribeDevicePolicyConfigurationRequest): WorkLinkResponsesDescribeDevicePolicyConfiguration {
    return new WorkLinkResponsesDescribeDevicePolicyConfiguration(this, this.__resources, input);
  }

  public describeDomain(input: shapes.WorkLinkDescribeDomainRequest): WorkLinkResponsesDescribeDomain {
    return new WorkLinkResponsesDescribeDomain(this, this.__resources, input);
  }

  public describeFleetMetadata(input: shapes.WorkLinkDescribeFleetMetadataRequest): WorkLinkResponsesDescribeFleetMetadata {
    return new WorkLinkResponsesDescribeFleetMetadata(this, this.__resources, input);
  }

  public describeIdentityProviderConfiguration(input: shapes.WorkLinkDescribeIdentityProviderConfigurationRequest): WorkLinkResponsesDescribeIdentityProviderConfiguration {
    return new WorkLinkResponsesDescribeIdentityProviderConfiguration(this, this.__resources, input);
  }

  public describeWebsiteCertificateAuthority(input: shapes.WorkLinkDescribeWebsiteCertificateAuthorityRequest): WorkLinkResponsesDescribeWebsiteCertificateAuthority {
    return new WorkLinkResponsesDescribeWebsiteCertificateAuthority(this, this.__resources, input);
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

  public listDevices(input: shapes.WorkLinkListDevicesRequest): WorkLinkResponsesListDevices {
    return new WorkLinkResponsesListDevices(this, this.__resources, input);
  }

  public listDomains(input: shapes.WorkLinkListDomainsRequest): WorkLinkResponsesListDomains {
    return new WorkLinkResponsesListDomains(this, this.__resources, input);
  }

  public listFleets(input: shapes.WorkLinkListFleetsRequest): WorkLinkResponsesListFleets {
    return new WorkLinkResponsesListFleets(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.WorkLinkListTagsForResourceRequest): WorkLinkResponsesListTagsForResource {
    return new WorkLinkResponsesListTagsForResource(this, this.__resources, input);
  }

  public listWebsiteAuthorizationProviders(input: shapes.WorkLinkListWebsiteAuthorizationProvidersRequest): WorkLinkResponsesListWebsiteAuthorizationProviders {
    return new WorkLinkResponsesListWebsiteAuthorizationProviders(this, this.__resources, input);
  }

  public listWebsiteCertificateAuthorities(input: shapes.WorkLinkListWebsiteCertificateAuthoritiesRequest): WorkLinkResponsesListWebsiteCertificateAuthorities {
    return new WorkLinkResponsesListWebsiteCertificateAuthorities(this, this.__resources, input);
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

export class WorkLinkResponsesAssociateWebsiteAuthorizationProvider {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkLinkAssociateWebsiteAuthorizationProviderRequest) {
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
          FleetArn: this.__input.fleetArn,
          AuthorizationProviderType: this.__input.authorizationProviderType,
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateWebsiteAuthorizationProvider.AuthorizationProviderId', props);
    return resource.getResponseField('AuthorizationProviderId') as unknown as string;
  }

}

export class WorkLinkResponsesAssociateWebsiteCertificateAuthority {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkLinkAssociateWebsiteCertificateAuthorityRequest) {
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
          FleetArn: this.__input.fleetArn,
          Certificate: this.__input.certificate,
          DisplayName: this.__input.displayName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateWebsiteCertificateAuthority.WebsiteCaId', props);
    return resource.getResponseField('WebsiteCaId') as unknown as string;
  }

}

export class WorkLinkResponsesCreateFleet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkLinkCreateFleetRequest) {
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
          FleetName: this.__input.fleetName,
          DisplayName: this.__input.displayName,
          OptimizeForEndUserLocation: this.__input.optimizeForEndUserLocation,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.FleetArn', props);
    return resource.getResponseField('FleetArn') as unknown as string;
  }

}

export class WorkLinkResponsesDescribeAuditStreamConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkLinkDescribeAuditStreamConfigurationRequest) {
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
          FleetArn: this.__input.fleetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAuditStreamConfiguration.AuditStreamArn', props);
    return resource.getResponseField('AuditStreamArn') as unknown as string;
  }

}

export class WorkLinkResponsesDescribeCompanyNetworkConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkLinkDescribeCompanyNetworkConfigurationRequest) {
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
          FleetArn: this.__input.fleetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCompanyNetworkConfiguration.VpcId', props);
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
          FleetArn: this.__input.fleetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCompanyNetworkConfiguration.SubnetIds', props);
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
          FleetArn: this.__input.fleetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCompanyNetworkConfiguration.SecurityGroupIds', props);
    return resource.getResponseField('SecurityGroupIds') as unknown as string[];
  }

}

export class WorkLinkResponsesDescribeDevice {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkLinkDescribeDeviceRequest) {
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
          FleetArn: this.__input.fleetArn,
          DeviceId: this.__input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDevice.Status', props);
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
          FleetArn: this.__input.fleetArn,
          DeviceId: this.__input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDevice.Model', props);
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
          FleetArn: this.__input.fleetArn,
          DeviceId: this.__input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDevice.Manufacturer', props);
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
          FleetArn: this.__input.fleetArn,
          DeviceId: this.__input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDevice.OperatingSystem', props);
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
          FleetArn: this.__input.fleetArn,
          DeviceId: this.__input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDevice.OperatingSystemVersion', props);
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
          FleetArn: this.__input.fleetArn,
          DeviceId: this.__input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDevice.PatchLevel', props);
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
          FleetArn: this.__input.fleetArn,
          DeviceId: this.__input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDevice.FirstAccessedTime', props);
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
          FleetArn: this.__input.fleetArn,
          DeviceId: this.__input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDevice.LastAccessedTime', props);
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
          FleetArn: this.__input.fleetArn,
          DeviceId: this.__input.deviceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDevice.Username', props);
    return resource.getResponseField('Username') as unknown as string;
  }

}

export class WorkLinkResponsesDescribeDevicePolicyConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkLinkDescribeDevicePolicyConfigurationRequest) {
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
          FleetArn: this.__input.fleetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDevicePolicyConfiguration.DeviceCaCertificate', props);
    return resource.getResponseField('DeviceCaCertificate') as unknown as string;
  }

}

export class WorkLinkResponsesDescribeDomain {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkLinkDescribeDomainRequest) {
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
          FleetArn: this.__input.fleetArn,
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.DomainName', props);
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
          FleetArn: this.__input.fleetArn,
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.DisplayName', props);
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
          FleetArn: this.__input.fleetArn,
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.CreatedTime', props);
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
          FleetArn: this.__input.fleetArn,
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.DomainStatus', props);
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
          FleetArn: this.__input.fleetArn,
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomain.AcmCertificateArn', props);
    return resource.getResponseField('AcmCertificateArn') as unknown as string;
  }

}

export class WorkLinkResponsesDescribeFleetMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkLinkDescribeFleetMetadataRequest) {
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
          FleetArn: this.__input.fleetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFleetMetadata.CreatedTime', props);
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
          FleetArn: this.__input.fleetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFleetMetadata.LastUpdatedTime', props);
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
          FleetArn: this.__input.fleetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFleetMetadata.FleetName', props);
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
          FleetArn: this.__input.fleetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFleetMetadata.DisplayName', props);
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
          FleetArn: this.__input.fleetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFleetMetadata.OptimizeForEndUserLocation', props);
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
          FleetArn: this.__input.fleetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFleetMetadata.CompanyCode', props);
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
          FleetArn: this.__input.fleetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFleetMetadata.FleetStatus', props);
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
          FleetArn: this.__input.fleetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFleetMetadata.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class WorkLinkResponsesDescribeIdentityProviderConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkLinkDescribeIdentityProviderConfigurationRequest) {
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
          FleetArn: this.__input.fleetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIdentityProviderConfiguration.IdentityProviderType', props);
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
          FleetArn: this.__input.fleetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIdentityProviderConfiguration.ServiceProviderSamlMetadata', props);
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
          FleetArn: this.__input.fleetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIdentityProviderConfiguration.IdentityProviderSamlMetadata', props);
    return resource.getResponseField('IdentityProviderSamlMetadata') as unknown as string;
  }

}

export class WorkLinkResponsesDescribeWebsiteCertificateAuthority {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkLinkDescribeWebsiteCertificateAuthorityRequest) {
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
          FleetArn: this.__input.fleetArn,
          WebsiteCaId: this.__input.websiteCaId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWebsiteCertificateAuthority.Certificate', props);
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
          FleetArn: this.__input.fleetArn,
          WebsiteCaId: this.__input.websiteCaId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWebsiteCertificateAuthority.CreatedTime', props);
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
          FleetArn: this.__input.fleetArn,
          WebsiteCaId: this.__input.websiteCaId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWebsiteCertificateAuthority.DisplayName', props);
    return resource.getResponseField('DisplayName') as unknown as string;
  }

}

export class WorkLinkResponsesListDevices {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkLinkListDevicesRequest) {
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
          FleetArn: this.__input.fleetArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDevices.Devices', props);
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
          FleetArn: this.__input.fleetArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDevices.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkLinkResponsesListDomains {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkLinkListDomainsRequest) {
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
          FleetArn: this.__input.fleetArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDomains.Domains', props);
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
          FleetArn: this.__input.fleetArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDomains.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkLinkResponsesListFleets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkLinkListFleetsRequest) {
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFleets.FleetSummaryList', props);
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFleets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkLinkResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkLinkListTagsForResourceRequest) {
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
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class WorkLinkResponsesListWebsiteAuthorizationProviders {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkLinkListWebsiteAuthorizationProvidersRequest) {
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
          FleetArn: this.__input.fleetArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListWebsiteAuthorizationProviders.WebsiteAuthorizationProviders', props);
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
          FleetArn: this.__input.fleetArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListWebsiteAuthorizationProviders.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkLinkResponsesListWebsiteCertificateAuthorities {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkLinkListWebsiteCertificateAuthoritiesRequest) {
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
          FleetArn: this.__input.fleetArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListWebsiteCertificateAuthorities.WebsiteCertificateAuthorities', props);
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
          FleetArn: this.__input.fleetArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListWebsiteCertificateAuthorities.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

