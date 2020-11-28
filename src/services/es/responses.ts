import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';
export class AcceptInboundCrossClusterSearchConnectionResponse {
  static CrossClusterSearchConnectionResponse = class {
    static SourceDomainInfoResponse = class {
      public get ownerId(): shapes.OwnerId {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'acceptInboundCrossClusterSearchConnection',
            service: 'ES',
            outputPath: 'CrossClusterSearchConnection.SourceDomainInfo.OwnerId',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'AcceptInboundCrossClusterSearchConnection.CrossClusterSearchConnection.SourceDomainInfo.OwnerId', props);
        return request.getResponseField('CrossClusterSearchConnection.SourceDomainInfo.OwnerId') as unknown as shapes.OwnerId;
      }
      public get domainName(): shapes.DomainName {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'acceptInboundCrossClusterSearchConnection',
            service: 'ES',
            outputPath: 'CrossClusterSearchConnection.SourceDomainInfo.DomainName',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'AcceptInboundCrossClusterSearchConnection.CrossClusterSearchConnection.SourceDomainInfo.DomainName', props);
        return request.getResponseField('CrossClusterSearchConnection.SourceDomainInfo.DomainName') as unknown as shapes.DomainName;
      }
      public get region(): shapes.Region {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'acceptInboundCrossClusterSearchConnection',
            service: 'ES',
            outputPath: 'CrossClusterSearchConnection.SourceDomainInfo.Region',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'AcceptInboundCrossClusterSearchConnection.CrossClusterSearchConnection.SourceDomainInfo.Region', props);
        return request.getResponseField('CrossClusterSearchConnection.SourceDomainInfo.Region') as unknown as shapes.Region;
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get sourceDomainInfo(): InstanceType<typeof AcceptInboundCrossClusterSearchConnectionResponse.CrossClusterSearchConnectionResponse.SourceDomainInfoResponse> {
      return new AcceptInboundCrossClusterSearchConnectionResponse.CrossClusterSearchConnectionResponse.SourceDomainInfoResponse(this.scope, this.resources);
    }
    static DestinationDomainInfoResponse = class {
      public get ownerId(): shapes.OwnerId {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'acceptInboundCrossClusterSearchConnection',
            service: 'ES',
            outputPath: 'CrossClusterSearchConnection.DestinationDomainInfo.OwnerId',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'AcceptInboundCrossClusterSearchConnection.CrossClusterSearchConnection.DestinationDomainInfo.OwnerId', props);
        return request.getResponseField('CrossClusterSearchConnection.DestinationDomainInfo.OwnerId') as unknown as shapes.OwnerId;
      }
      public get domainName(): shapes.DomainName {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'acceptInboundCrossClusterSearchConnection',
            service: 'ES',
            outputPath: 'CrossClusterSearchConnection.DestinationDomainInfo.DomainName',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'AcceptInboundCrossClusterSearchConnection.CrossClusterSearchConnection.DestinationDomainInfo.DomainName', props);
        return request.getResponseField('CrossClusterSearchConnection.DestinationDomainInfo.DomainName') as unknown as shapes.DomainName;
      }
      public get region(): shapes.Region {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'acceptInboundCrossClusterSearchConnection',
            service: 'ES',
            outputPath: 'CrossClusterSearchConnection.DestinationDomainInfo.Region',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'AcceptInboundCrossClusterSearchConnection.CrossClusterSearchConnection.DestinationDomainInfo.Region', props);
        return request.getResponseField('CrossClusterSearchConnection.DestinationDomainInfo.Region') as unknown as shapes.Region;
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get destinationDomainInfo(): InstanceType<typeof AcceptInboundCrossClusterSearchConnectionResponse.CrossClusterSearchConnectionResponse.DestinationDomainInfoResponse> {
      return new AcceptInboundCrossClusterSearchConnectionResponse.CrossClusterSearchConnectionResponse.DestinationDomainInfoResponse(this.scope, this.resources);
    }
    public get crossClusterSearchConnectionId(): shapes.CrossClusterSearchConnectionId {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'acceptInboundCrossClusterSearchConnection',
          service: 'ES',
          outputPath: 'CrossClusterSearchConnection.CrossClusterSearchConnectionId',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'AcceptInboundCrossClusterSearchConnection.CrossClusterSearchConnection.CrossClusterSearchConnectionId', props);
      return request.getResponseField('CrossClusterSearchConnection.CrossClusterSearchConnectionId') as unknown as shapes.CrossClusterSearchConnectionId;
    }
    static ConnectionStatusResponse = class {
      public get statusCode(): shapes.InboundCrossClusterSearchConnectionStatusCode {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'acceptInboundCrossClusterSearchConnection',
            service: 'ES',
            outputPath: 'CrossClusterSearchConnection.ConnectionStatus.StatusCode',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'AcceptInboundCrossClusterSearchConnection.CrossClusterSearchConnection.ConnectionStatus.StatusCode', props);
        return request.getResponseField('CrossClusterSearchConnection.ConnectionStatus.StatusCode') as unknown as shapes.InboundCrossClusterSearchConnectionStatusCode;
      }
      public get message(): shapes.CrossClusterSearchConnectionStatusMessage {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'acceptInboundCrossClusterSearchConnection',
            service: 'ES',
            outputPath: 'CrossClusterSearchConnection.ConnectionStatus.Message',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'AcceptInboundCrossClusterSearchConnection.CrossClusterSearchConnection.ConnectionStatus.Message', props);
        return request.getResponseField('CrossClusterSearchConnection.ConnectionStatus.Message') as unknown as shapes.CrossClusterSearchConnectionStatusMessage;
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get connectionStatus(): InstanceType<typeof AcceptInboundCrossClusterSearchConnectionResponse.CrossClusterSearchConnectionResponse.ConnectionStatusResponse> {
      return new AcceptInboundCrossClusterSearchConnectionResponse.CrossClusterSearchConnectionResponse.ConnectionStatusResponse(this.scope, this.resources);
    }
    constructor(public scope: cdk.Construct, public readonly resources: string[]) {
    }
  }
  public get crossClusterSearchConnection(): InstanceType<typeof AcceptInboundCrossClusterSearchConnectionResponse.CrossClusterSearchConnectionResponse> {
    return new AcceptInboundCrossClusterSearchConnectionResponse.CrossClusterSearchConnectionResponse(this.scope, this.resources);
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], input: shapes.AcceptInboundCrossClusterSearchConnectionRequest) {
  }
}
export class AssociatePackageResponse {
  static DomainPackageDetailsResponse = class {
    public get packageId(): shapes.PackageID {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'associatePackage',
          service: 'ES',
          outputPath: 'DomainPackageDetails.PackageID',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'AssociatePackage.DomainPackageDetails.PackageID', props);
      return request.getResponseField('DomainPackageDetails.PackageID') as unknown as shapes.PackageID;
    }
    public get packageName(): shapes.PackageName {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'associatePackage',
          service: 'ES',
          outputPath: 'DomainPackageDetails.PackageName',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'AssociatePackage.DomainPackageDetails.PackageName', props);
      return request.getResponseField('DomainPackageDetails.PackageName') as unknown as shapes.PackageName;
    }
    public get packageType(): shapes.PackageType {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'associatePackage',
          service: 'ES',
          outputPath: 'DomainPackageDetails.PackageType',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'AssociatePackage.DomainPackageDetails.PackageType', props);
      return request.getResponseField('DomainPackageDetails.PackageType') as unknown as shapes.PackageType;
    }
    public get lastUpdated(): shapes.LastUpdated {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'associatePackage',
          service: 'ES',
          outputPath: 'DomainPackageDetails.LastUpdated',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'AssociatePackage.DomainPackageDetails.LastUpdated', props);
      return request.getResponseField('DomainPackageDetails.LastUpdated') as unknown as shapes.LastUpdated;
    }
    public get domainName(): shapes.DomainName {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'associatePackage',
          service: 'ES',
          outputPath: 'DomainPackageDetails.DomainName',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'AssociatePackage.DomainPackageDetails.DomainName', props);
      return request.getResponseField('DomainPackageDetails.DomainName') as unknown as shapes.DomainName;
    }
    public get domainPackageStatus(): shapes.DomainPackageStatus {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'associatePackage',
          service: 'ES',
          outputPath: 'DomainPackageDetails.DomainPackageStatus',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'AssociatePackage.DomainPackageDetails.DomainPackageStatus', props);
      return request.getResponseField('DomainPackageDetails.DomainPackageStatus') as unknown as shapes.DomainPackageStatus;
    }
    public get packageVersion(): shapes.PackageVersion {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'associatePackage',
          service: 'ES',
          outputPath: 'DomainPackageDetails.PackageVersion',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'AssociatePackage.DomainPackageDetails.PackageVersion', props);
      return request.getResponseField('DomainPackageDetails.PackageVersion') as unknown as shapes.PackageVersion;
    }
    public get referencePath(): shapes.ReferencePath {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'associatePackage',
          service: 'ES',
          outputPath: 'DomainPackageDetails.ReferencePath',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'AssociatePackage.DomainPackageDetails.ReferencePath', props);
      return request.getResponseField('DomainPackageDetails.ReferencePath') as unknown as shapes.ReferencePath;
    }
    static ErrorDetailsResponse = class {
      public get errorType(): shapes.ErrorType {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'associatePackage',
            service: 'ES',
            outputPath: 'DomainPackageDetails.ErrorDetails.ErrorType',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'AssociatePackage.DomainPackageDetails.ErrorDetails.ErrorType', props);
        return request.getResponseField('DomainPackageDetails.ErrorDetails.ErrorType') as unknown as shapes.ErrorType;
      }
      public get errorMessage(): shapes.ErrorMessage {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'associatePackage',
            service: 'ES',
            outputPath: 'DomainPackageDetails.ErrorDetails.ErrorMessage',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'AssociatePackage.DomainPackageDetails.ErrorDetails.ErrorMessage', props);
        return request.getResponseField('DomainPackageDetails.ErrorDetails.ErrorMessage') as unknown as shapes.ErrorMessage;
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get errorDetails(): InstanceType<typeof AssociatePackageResponse.DomainPackageDetailsResponse.ErrorDetailsResponse> {
      return new AssociatePackageResponse.DomainPackageDetailsResponse.ErrorDetailsResponse(this.scope, this.resources);
    }
    constructor(public scope: cdk.Construct, public readonly resources: string[]) {
    }
  }
  public get domainPackageDetails(): InstanceType<typeof AssociatePackageResponse.DomainPackageDetailsResponse> {
    return new AssociatePackageResponse.DomainPackageDetailsResponse(this.scope, this.resources);
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], input: shapes.AssociatePackageRequest) {
  }
}
export class CancelElasticsearchServiceSoftwareUpdateResponse {
  static ServiceSoftwareOptionsResponse = class {
    public get currentVersion(): shapes.String {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'cancelElasticsearchServiceSoftwareUpdate',
          service: 'ES',
          outputPath: 'ServiceSoftwareOptions.CurrentVersion',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'CancelElasticsearchServiceSoftwareUpdate.ServiceSoftwareOptions.CurrentVersion', props);
      return request.getResponseField('ServiceSoftwareOptions.CurrentVersion') as unknown as shapes.String;
    }
    public get newVersion(): shapes.String {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'cancelElasticsearchServiceSoftwareUpdate',
          service: 'ES',
          outputPath: 'ServiceSoftwareOptions.NewVersion',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'CancelElasticsearchServiceSoftwareUpdate.ServiceSoftwareOptions.NewVersion', props);
      return request.getResponseField('ServiceSoftwareOptions.NewVersion') as unknown as shapes.String;
    }
    public get updateAvailable(): shapes.Boolean {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'cancelElasticsearchServiceSoftwareUpdate',
          service: 'ES',
          outputPath: 'ServiceSoftwareOptions.UpdateAvailable',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'CancelElasticsearchServiceSoftwareUpdate.ServiceSoftwareOptions.UpdateAvailable', props);
      return request.getResponseField('ServiceSoftwareOptions.UpdateAvailable') as unknown as shapes.Boolean;
    }
    public get cancellable(): shapes.Boolean {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'cancelElasticsearchServiceSoftwareUpdate',
          service: 'ES',
          outputPath: 'ServiceSoftwareOptions.Cancellable',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'CancelElasticsearchServiceSoftwareUpdate.ServiceSoftwareOptions.Cancellable', props);
      return request.getResponseField('ServiceSoftwareOptions.Cancellable') as unknown as shapes.Boolean;
    }
    public get updateStatus(): shapes.DeploymentStatus {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'cancelElasticsearchServiceSoftwareUpdate',
          service: 'ES',
          outputPath: 'ServiceSoftwareOptions.UpdateStatus',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'CancelElasticsearchServiceSoftwareUpdate.ServiceSoftwareOptions.UpdateStatus', props);
      return request.getResponseField('ServiceSoftwareOptions.UpdateStatus') as unknown as shapes.DeploymentStatus;
    }
    public get description(): shapes.String {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'cancelElasticsearchServiceSoftwareUpdate',
          service: 'ES',
          outputPath: 'ServiceSoftwareOptions.Description',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'CancelElasticsearchServiceSoftwareUpdate.ServiceSoftwareOptions.Description', props);
      return request.getResponseField('ServiceSoftwareOptions.Description') as unknown as shapes.String;
    }
    public get automatedUpdateDate(): shapes.DeploymentCloseDateTimeStamp {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'cancelElasticsearchServiceSoftwareUpdate',
          service: 'ES',
          outputPath: 'ServiceSoftwareOptions.AutomatedUpdateDate',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'CancelElasticsearchServiceSoftwareUpdate.ServiceSoftwareOptions.AutomatedUpdateDate', props);
      return request.getResponseField('ServiceSoftwareOptions.AutomatedUpdateDate') as unknown as shapes.DeploymentCloseDateTimeStamp;
    }
    public get optionalDeployment(): shapes.Boolean {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'cancelElasticsearchServiceSoftwareUpdate',
          service: 'ES',
          outputPath: 'ServiceSoftwareOptions.OptionalDeployment',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'CancelElasticsearchServiceSoftwareUpdate.ServiceSoftwareOptions.OptionalDeployment', props);
      return request.getResponseField('ServiceSoftwareOptions.OptionalDeployment') as unknown as shapes.Boolean;
    }
    constructor(public scope: cdk.Construct, public readonly resources: string[]) {
    }
  }
  public get serviceSoftwareOptions(): InstanceType<typeof CancelElasticsearchServiceSoftwareUpdateResponse.ServiceSoftwareOptionsResponse> {
    return new CancelElasticsearchServiceSoftwareUpdateResponse.ServiceSoftwareOptionsResponse(this.scope, this.resources);
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], input: shapes.CancelElasticsearchServiceSoftwareUpdateRequest) {
  }
}
export class CreateElasticsearchDomainResponse {
  static DomainStatusResponse = class {
    public get domainId(): shapes.DomainId {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'createElasticsearchDomain',
          service: 'ES',
          outputPath: 'DomainStatus.DomainId',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.DomainId', props);
      return request.getResponseField('DomainStatus.DomainId') as unknown as shapes.DomainId;
    }
    public get domainName(): shapes.DomainName {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'createElasticsearchDomain',
          service: 'ES',
          outputPath: 'DomainStatus.DomainName',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.DomainName', props);
      return request.getResponseField('DomainStatus.DomainName') as unknown as shapes.DomainName;
    }
    public get arn(): shapes.ARN {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'createElasticsearchDomain',
          service: 'ES',
          outputPath: 'DomainStatus.ARN',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.ARN', props);
      return request.getResponseField('DomainStatus.ARN') as unknown as shapes.ARN;
    }
    public get created(): shapes.Boolean {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'createElasticsearchDomain',
          service: 'ES',
          outputPath: 'DomainStatus.Created',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.Created', props);
      return request.getResponseField('DomainStatus.Created') as unknown as shapes.Boolean;
    }
    public get deleted(): shapes.Boolean {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'createElasticsearchDomain',
          service: 'ES',
          outputPath: 'DomainStatus.Deleted',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.Deleted', props);
      return request.getResponseField('DomainStatus.Deleted') as unknown as shapes.Boolean;
    }
    public get endpoint(): shapes.ServiceUrl {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'createElasticsearchDomain',
          service: 'ES',
          outputPath: 'DomainStatus.Endpoint',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.Endpoint', props);
      return request.getResponseField('DomainStatus.Endpoint') as unknown as shapes.ServiceUrl;
    }
    public get endpoints(): shapes.EndpointsMap {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'createElasticsearchDomain',
          service: 'ES',
          outputPath: 'DomainStatus.Endpoints',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.Endpoints', props);
      return request.getResponseField('DomainStatus.Endpoints') as unknown as shapes.EndpointsMap;
    }
    public get processing(): shapes.Boolean {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'createElasticsearchDomain',
          service: 'ES',
          outputPath: 'DomainStatus.Processing',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.Processing', props);
      return request.getResponseField('DomainStatus.Processing') as unknown as shapes.Boolean;
    }
    public get upgradeProcessing(): shapes.Boolean {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'createElasticsearchDomain',
          service: 'ES',
          outputPath: 'DomainStatus.UpgradeProcessing',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.UpgradeProcessing', props);
      return request.getResponseField('DomainStatus.UpgradeProcessing') as unknown as shapes.Boolean;
    }
    public get elasticsearchVersion(): shapes.ElasticsearchVersionString {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'createElasticsearchDomain',
          service: 'ES',
          outputPath: 'DomainStatus.ElasticsearchVersion',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.ElasticsearchVersion', props);
      return request.getResponseField('DomainStatus.ElasticsearchVersion') as unknown as shapes.ElasticsearchVersionString;
    }
    static ElasticsearchClusterConfigResponse = class {
      public get instanceType(): shapes.ESPartitionInstanceType {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'createElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ElasticsearchClusterConfig.InstanceType',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.ElasticsearchClusterConfig.InstanceType', props);
        return request.getResponseField('DomainStatus.ElasticsearchClusterConfig.InstanceType') as unknown as shapes.ESPartitionInstanceType;
      }
      public get instanceCount(): shapes.IntegerClass {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'createElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ElasticsearchClusterConfig.InstanceCount',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.ElasticsearchClusterConfig.InstanceCount', props);
        return request.getResponseField('DomainStatus.ElasticsearchClusterConfig.InstanceCount') as unknown as shapes.IntegerClass;
      }
      public get dedicatedMasterEnabled(): shapes.Boolean {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'createElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ElasticsearchClusterConfig.DedicatedMasterEnabled',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.ElasticsearchClusterConfig.DedicatedMasterEnabled', props);
        return request.getResponseField('DomainStatus.ElasticsearchClusterConfig.DedicatedMasterEnabled') as unknown as shapes.Boolean;
      }
      public get zoneAwarenessEnabled(): shapes.Boolean {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'createElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ElasticsearchClusterConfig.ZoneAwarenessEnabled',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.ElasticsearchClusterConfig.ZoneAwarenessEnabled', props);
        return request.getResponseField('DomainStatus.ElasticsearchClusterConfig.ZoneAwarenessEnabled') as unknown as shapes.Boolean;
      }
      static ZoneAwarenessConfigResponse = class {
        public get availabilityZoneCount(): shapes.IntegerClass {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'createElasticsearchDomain',
              service: 'ES',
              outputPath: 'DomainStatus.ElasticsearchClusterConfig.ZoneAwarenessConfig.AvailabilityZoneCount',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.ElasticsearchClusterConfig.ZoneAwarenessConfig.AvailabilityZoneCount', props);
          return request.getResponseField('DomainStatus.ElasticsearchClusterConfig.ZoneAwarenessConfig.AvailabilityZoneCount') as unknown as shapes.IntegerClass;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get zoneAwarenessConfig(): InstanceType<typeof CreateElasticsearchDomainResponse.DomainStatusResponse.ElasticsearchClusterConfigResponse.ZoneAwarenessConfigResponse> {
        return new CreateElasticsearchDomainResponse.DomainStatusResponse.ElasticsearchClusterConfigResponse.ZoneAwarenessConfigResponse(this.scope, this.resources);
      }
      public get dedicatedMasterType(): shapes.ESPartitionInstanceType {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'createElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ElasticsearchClusterConfig.DedicatedMasterType',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.ElasticsearchClusterConfig.DedicatedMasterType', props);
        return request.getResponseField('DomainStatus.ElasticsearchClusterConfig.DedicatedMasterType') as unknown as shapes.ESPartitionInstanceType;
      }
      public get dedicatedMasterCount(): shapes.IntegerClass {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'createElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ElasticsearchClusterConfig.DedicatedMasterCount',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.ElasticsearchClusterConfig.DedicatedMasterCount', props);
        return request.getResponseField('DomainStatus.ElasticsearchClusterConfig.DedicatedMasterCount') as unknown as shapes.IntegerClass;
      }
      public get warmEnabled(): shapes.Boolean {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'createElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ElasticsearchClusterConfig.WarmEnabled',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.ElasticsearchClusterConfig.WarmEnabled', props);
        return request.getResponseField('DomainStatus.ElasticsearchClusterConfig.WarmEnabled') as unknown as shapes.Boolean;
      }
      public get warmType(): shapes.ESWarmPartitionInstanceType {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'createElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ElasticsearchClusterConfig.WarmType',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.ElasticsearchClusterConfig.WarmType', props);
        return request.getResponseField('DomainStatus.ElasticsearchClusterConfig.WarmType') as unknown as shapes.ESWarmPartitionInstanceType;
      }
      public get warmCount(): shapes.IntegerClass {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'createElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ElasticsearchClusterConfig.WarmCount',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.ElasticsearchClusterConfig.WarmCount', props);
        return request.getResponseField('DomainStatus.ElasticsearchClusterConfig.WarmCount') as unknown as shapes.IntegerClass;
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get elasticsearchClusterConfig(): InstanceType<typeof CreateElasticsearchDomainResponse.DomainStatusResponse.ElasticsearchClusterConfigResponse> {
      return new CreateElasticsearchDomainResponse.DomainStatusResponse.ElasticsearchClusterConfigResponse(this.scope, this.resources);
    }
    static EBSOptionsResponse = class {
      public get ebsEnabled(): shapes.Boolean {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'createElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.EBSOptions.EBSEnabled',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.EBSOptions.EBSEnabled', props);
        return request.getResponseField('DomainStatus.EBSOptions.EBSEnabled') as unknown as shapes.Boolean;
      }
      public get volumeType(): shapes.VolumeType {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'createElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.EBSOptions.VolumeType',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.EBSOptions.VolumeType', props);
        return request.getResponseField('DomainStatus.EBSOptions.VolumeType') as unknown as shapes.VolumeType;
      }
      public get volumeSize(): shapes.IntegerClass {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'createElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.EBSOptions.VolumeSize',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.EBSOptions.VolumeSize', props);
        return request.getResponseField('DomainStatus.EBSOptions.VolumeSize') as unknown as shapes.IntegerClass;
      }
      public get iops(): shapes.IntegerClass {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'createElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.EBSOptions.Iops',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.EBSOptions.Iops', props);
        return request.getResponseField('DomainStatus.EBSOptions.Iops') as unknown as shapes.IntegerClass;
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get ebsOptions(): InstanceType<typeof CreateElasticsearchDomainResponse.DomainStatusResponse.EBSOptionsResponse> {
      return new CreateElasticsearchDomainResponse.DomainStatusResponse.EBSOptionsResponse(this.scope, this.resources);
    }
    public get accessPolicies(): shapes.PolicyDocument {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'createElasticsearchDomain',
          service: 'ES',
          outputPath: 'DomainStatus.AccessPolicies',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.AccessPolicies', props);
      return request.getResponseField('DomainStatus.AccessPolicies') as unknown as shapes.PolicyDocument;
    }
    static SnapshotOptionsResponse = class {
      public get automatedSnapshotStartHour(): shapes.IntegerClass {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'createElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.SnapshotOptions.AutomatedSnapshotStartHour',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.SnapshotOptions.AutomatedSnapshotStartHour', props);
        return request.getResponseField('DomainStatus.SnapshotOptions.AutomatedSnapshotStartHour') as unknown as shapes.IntegerClass;
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get snapshotOptions(): InstanceType<typeof CreateElasticsearchDomainResponse.DomainStatusResponse.SnapshotOptionsResponse> {
      return new CreateElasticsearchDomainResponse.DomainStatusResponse.SnapshotOptionsResponse(this.scope, this.resources);
    }
    static VPCOptionsResponse = class {
      public get vpcId(): shapes.String {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'createElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.VPCOptions.VPCId',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.VPCOptions.VPCId', props);
        return request.getResponseField('DomainStatus.VPCOptions.VPCId') as unknown as shapes.String;
      }
      public get subnetIds(): shapes.StringList {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'createElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.VPCOptions.SubnetIds',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.VPCOptions.SubnetIds', props);
        return request.getResponseField('DomainStatus.VPCOptions.SubnetIds') as unknown as shapes.StringList;
      }
      public get availabilityZones(): shapes.StringList {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'createElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.VPCOptions.AvailabilityZones',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.VPCOptions.AvailabilityZones', props);
        return request.getResponseField('DomainStatus.VPCOptions.AvailabilityZones') as unknown as shapes.StringList;
      }
      public get securityGroupIds(): shapes.StringList {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'createElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.VPCOptions.SecurityGroupIds',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.VPCOptions.SecurityGroupIds', props);
        return request.getResponseField('DomainStatus.VPCOptions.SecurityGroupIds') as unknown as shapes.StringList;
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get vpcOptions(): InstanceType<typeof CreateElasticsearchDomainResponse.DomainStatusResponse.VPCOptionsResponse> {
      return new CreateElasticsearchDomainResponse.DomainStatusResponse.VPCOptionsResponse(this.scope, this.resources);
    }
    static CognitoOptionsResponse = class {
      public get enabled(): shapes.Boolean {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'createElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.CognitoOptions.Enabled',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.CognitoOptions.Enabled', props);
        return request.getResponseField('DomainStatus.CognitoOptions.Enabled') as unknown as shapes.Boolean;
      }
      public get userPoolId(): shapes.UserPoolId {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'createElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.CognitoOptions.UserPoolId',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.CognitoOptions.UserPoolId', props);
        return request.getResponseField('DomainStatus.CognitoOptions.UserPoolId') as unknown as shapes.UserPoolId;
      }
      public get identityPoolId(): shapes.IdentityPoolId {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'createElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.CognitoOptions.IdentityPoolId',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.CognitoOptions.IdentityPoolId', props);
        return request.getResponseField('DomainStatus.CognitoOptions.IdentityPoolId') as unknown as shapes.IdentityPoolId;
      }
      public get roleArn(): shapes.RoleArn {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'createElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.CognitoOptions.RoleArn',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.CognitoOptions.RoleArn', props);
        return request.getResponseField('DomainStatus.CognitoOptions.RoleArn') as unknown as shapes.RoleArn;
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get cognitoOptions(): InstanceType<typeof CreateElasticsearchDomainResponse.DomainStatusResponse.CognitoOptionsResponse> {
      return new CreateElasticsearchDomainResponse.DomainStatusResponse.CognitoOptionsResponse(this.scope, this.resources);
    }
    static EncryptionAtRestOptionsResponse = class {
      public get enabled(): shapes.Boolean {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'createElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.EncryptionAtRestOptions.Enabled',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.EncryptionAtRestOptions.Enabled', props);
        return request.getResponseField('DomainStatus.EncryptionAtRestOptions.Enabled') as unknown as shapes.Boolean;
      }
      public get kmsKeyId(): shapes.KmsKeyId {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'createElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.EncryptionAtRestOptions.KmsKeyId',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.EncryptionAtRestOptions.KmsKeyId', props);
        return request.getResponseField('DomainStatus.EncryptionAtRestOptions.KmsKeyId') as unknown as shapes.KmsKeyId;
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get encryptionAtRestOptions(): InstanceType<typeof CreateElasticsearchDomainResponse.DomainStatusResponse.EncryptionAtRestOptionsResponse> {
      return new CreateElasticsearchDomainResponse.DomainStatusResponse.EncryptionAtRestOptionsResponse(this.scope, this.resources);
    }
    static NodeToNodeEncryptionOptionsResponse = class {
      public get enabled(): shapes.Boolean {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'createElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.NodeToNodeEncryptionOptions.Enabled',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.NodeToNodeEncryptionOptions.Enabled', props);
        return request.getResponseField('DomainStatus.NodeToNodeEncryptionOptions.Enabled') as unknown as shapes.Boolean;
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get nodeToNodeEncryptionOptions(): InstanceType<typeof CreateElasticsearchDomainResponse.DomainStatusResponse.NodeToNodeEncryptionOptionsResponse> {
      return new CreateElasticsearchDomainResponse.DomainStatusResponse.NodeToNodeEncryptionOptionsResponse(this.scope, this.resources);
    }
    public get advancedOptions(): shapes.AdvancedOptions {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'createElasticsearchDomain',
          service: 'ES',
          outputPath: 'DomainStatus.AdvancedOptions',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.AdvancedOptions', props);
      return request.getResponseField('DomainStatus.AdvancedOptions') as unknown as shapes.AdvancedOptions;
    }
    public get logPublishingOptions(): shapes.LogPublishingOptions {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'createElasticsearchDomain',
          service: 'ES',
          outputPath: 'DomainStatus.LogPublishingOptions',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.LogPublishingOptions', props);
      return request.getResponseField('DomainStatus.LogPublishingOptions') as unknown as shapes.LogPublishingOptions;
    }
    static ServiceSoftwareOptionsResponse = class {
      public get currentVersion(): shapes.String {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'createElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ServiceSoftwareOptions.CurrentVersion',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.ServiceSoftwareOptions.CurrentVersion', props);
        return request.getResponseField('DomainStatus.ServiceSoftwareOptions.CurrentVersion') as unknown as shapes.String;
      }
      public get newVersion(): shapes.String {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'createElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ServiceSoftwareOptions.NewVersion',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.ServiceSoftwareOptions.NewVersion', props);
        return request.getResponseField('DomainStatus.ServiceSoftwareOptions.NewVersion') as unknown as shapes.String;
      }
      public get updateAvailable(): shapes.Boolean {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'createElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ServiceSoftwareOptions.UpdateAvailable',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.ServiceSoftwareOptions.UpdateAvailable', props);
        return request.getResponseField('DomainStatus.ServiceSoftwareOptions.UpdateAvailable') as unknown as shapes.Boolean;
      }
      public get cancellable(): shapes.Boolean {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'createElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ServiceSoftwareOptions.Cancellable',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.ServiceSoftwareOptions.Cancellable', props);
        return request.getResponseField('DomainStatus.ServiceSoftwareOptions.Cancellable') as unknown as shapes.Boolean;
      }
      public get updateStatus(): shapes.DeploymentStatus {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'createElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ServiceSoftwareOptions.UpdateStatus',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.ServiceSoftwareOptions.UpdateStatus', props);
        return request.getResponseField('DomainStatus.ServiceSoftwareOptions.UpdateStatus') as unknown as shapes.DeploymentStatus;
      }
      public get description(): shapes.String {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'createElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ServiceSoftwareOptions.Description',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.ServiceSoftwareOptions.Description', props);
        return request.getResponseField('DomainStatus.ServiceSoftwareOptions.Description') as unknown as shapes.String;
      }
      public get automatedUpdateDate(): shapes.DeploymentCloseDateTimeStamp {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'createElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ServiceSoftwareOptions.AutomatedUpdateDate',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.ServiceSoftwareOptions.AutomatedUpdateDate', props);
        return request.getResponseField('DomainStatus.ServiceSoftwareOptions.AutomatedUpdateDate') as unknown as shapes.DeploymentCloseDateTimeStamp;
      }
      public get optionalDeployment(): shapes.Boolean {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'createElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ServiceSoftwareOptions.OptionalDeployment',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.ServiceSoftwareOptions.OptionalDeployment', props);
        return request.getResponseField('DomainStatus.ServiceSoftwareOptions.OptionalDeployment') as unknown as shapes.Boolean;
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get serviceSoftwareOptions(): InstanceType<typeof CreateElasticsearchDomainResponse.DomainStatusResponse.ServiceSoftwareOptionsResponse> {
      return new CreateElasticsearchDomainResponse.DomainStatusResponse.ServiceSoftwareOptionsResponse(this.scope, this.resources);
    }
    static DomainEndpointOptionsResponse = class {
      public get enforceHttps(): shapes.Boolean {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'createElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.DomainEndpointOptions.EnforceHTTPS',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.DomainEndpointOptions.EnforceHTTPS', props);
        return request.getResponseField('DomainStatus.DomainEndpointOptions.EnforceHTTPS') as unknown as shapes.Boolean;
      }
      public get tlsSecurityPolicy(): shapes.TLSSecurityPolicy {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'createElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.DomainEndpointOptions.TLSSecurityPolicy',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.DomainEndpointOptions.TLSSecurityPolicy', props);
        return request.getResponseField('DomainStatus.DomainEndpointOptions.TLSSecurityPolicy') as unknown as shapes.TLSSecurityPolicy;
      }
      public get customEndpointEnabled(): shapes.Boolean {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'createElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.DomainEndpointOptions.CustomEndpointEnabled',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.DomainEndpointOptions.CustomEndpointEnabled', props);
        return request.getResponseField('DomainStatus.DomainEndpointOptions.CustomEndpointEnabled') as unknown as shapes.Boolean;
      }
      public get customEndpoint(): shapes.DomainNameFqdn {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'createElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.DomainEndpointOptions.CustomEndpoint',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.DomainEndpointOptions.CustomEndpoint', props);
        return request.getResponseField('DomainStatus.DomainEndpointOptions.CustomEndpoint') as unknown as shapes.DomainNameFqdn;
      }
      public get customEndpointCertificateArn(): shapes.ARN {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'createElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.DomainEndpointOptions.CustomEndpointCertificateArn',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.DomainEndpointOptions.CustomEndpointCertificateArn', props);
        return request.getResponseField('DomainStatus.DomainEndpointOptions.CustomEndpointCertificateArn') as unknown as shapes.ARN;
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get domainEndpointOptions(): InstanceType<typeof CreateElasticsearchDomainResponse.DomainStatusResponse.DomainEndpointOptionsResponse> {
      return new CreateElasticsearchDomainResponse.DomainStatusResponse.DomainEndpointOptionsResponse(this.scope, this.resources);
    }
    static AdvancedSecurityOptionsResponse = class {
      public get enabled(): shapes.Boolean {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'createElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.AdvancedSecurityOptions.Enabled',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.AdvancedSecurityOptions.Enabled', props);
        return request.getResponseField('DomainStatus.AdvancedSecurityOptions.Enabled') as unknown as shapes.Boolean;
      }
      public get internalUserDatabaseEnabled(): shapes.Boolean {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'createElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.AdvancedSecurityOptions.InternalUserDatabaseEnabled',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.AdvancedSecurityOptions.InternalUserDatabaseEnabled', props);
        return request.getResponseField('DomainStatus.AdvancedSecurityOptions.InternalUserDatabaseEnabled') as unknown as shapes.Boolean;
      }
      static SAMLOptionsResponse = class {
        public get enabled(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'createElasticsearchDomain',
              service: 'ES',
              outputPath: 'DomainStatus.AdvancedSecurityOptions.SAMLOptions.Enabled',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.AdvancedSecurityOptions.SAMLOptions.Enabled', props);
          return request.getResponseField('DomainStatus.AdvancedSecurityOptions.SAMLOptions.Enabled') as unknown as shapes.Boolean;
        }
        static IdpResponse = class {
          public get metadataContent(): shapes.SAMLMetadata {
            const props: cr.AwsCustomResourceProps = {
              onUpdate: {
                action: 'createElasticsearchDomain',
                service: 'ES',
                outputPath: 'DomainStatus.AdvancedSecurityOptions.SAMLOptions.Idp.MetadataContent',
              },
              policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
            };
            const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.AdvancedSecurityOptions.SAMLOptions.Idp.MetadataContent', props);
            return request.getResponseField('DomainStatus.AdvancedSecurityOptions.SAMLOptions.Idp.MetadataContent') as unknown as shapes.SAMLMetadata;
          }
          public get entityId(): shapes.SAMLEntityId {
            const props: cr.AwsCustomResourceProps = {
              onUpdate: {
                action: 'createElasticsearchDomain',
                service: 'ES',
                outputPath: 'DomainStatus.AdvancedSecurityOptions.SAMLOptions.Idp.EntityId',
              },
              policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
            };
            const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.AdvancedSecurityOptions.SAMLOptions.Idp.EntityId', props);
            return request.getResponseField('DomainStatus.AdvancedSecurityOptions.SAMLOptions.Idp.EntityId') as unknown as shapes.SAMLEntityId;
          }
          constructor(public scope: cdk.Construct, public readonly resources: string[]) {
          }
        }
        public get idp(): InstanceType<typeof CreateElasticsearchDomainResponse.DomainStatusResponse.AdvancedSecurityOptionsResponse.SAMLOptionsResponse.IdpResponse> {
          return new CreateElasticsearchDomainResponse.DomainStatusResponse.AdvancedSecurityOptionsResponse.SAMLOptionsResponse.IdpResponse(this.scope, this.resources);
        }
        public get subjectKey(): shapes.String {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'createElasticsearchDomain',
              service: 'ES',
              outputPath: 'DomainStatus.AdvancedSecurityOptions.SAMLOptions.SubjectKey',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.AdvancedSecurityOptions.SAMLOptions.SubjectKey', props);
          return request.getResponseField('DomainStatus.AdvancedSecurityOptions.SAMLOptions.SubjectKey') as unknown as shapes.String;
        }
        public get rolesKey(): shapes.String {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'createElasticsearchDomain',
              service: 'ES',
              outputPath: 'DomainStatus.AdvancedSecurityOptions.SAMLOptions.RolesKey',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.AdvancedSecurityOptions.SAMLOptions.RolesKey', props);
          return request.getResponseField('DomainStatus.AdvancedSecurityOptions.SAMLOptions.RolesKey') as unknown as shapes.String;
        }
        public get sessionTimeoutMinutes(): shapes.IntegerClass {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'createElasticsearchDomain',
              service: 'ES',
              outputPath: 'DomainStatus.AdvancedSecurityOptions.SAMLOptions.SessionTimeoutMinutes',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'CreateElasticsearchDomain.DomainStatus.AdvancedSecurityOptions.SAMLOptions.SessionTimeoutMinutes', props);
          return request.getResponseField('DomainStatus.AdvancedSecurityOptions.SAMLOptions.SessionTimeoutMinutes') as unknown as shapes.IntegerClass;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get samlOptions(): InstanceType<typeof CreateElasticsearchDomainResponse.DomainStatusResponse.AdvancedSecurityOptionsResponse.SAMLOptionsResponse> {
        return new CreateElasticsearchDomainResponse.DomainStatusResponse.AdvancedSecurityOptionsResponse.SAMLOptionsResponse(this.scope, this.resources);
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get advancedSecurityOptions(): InstanceType<typeof CreateElasticsearchDomainResponse.DomainStatusResponse.AdvancedSecurityOptionsResponse> {
      return new CreateElasticsearchDomainResponse.DomainStatusResponse.AdvancedSecurityOptionsResponse(this.scope, this.resources);
    }
    constructor(public scope: cdk.Construct, public readonly resources: string[]) {
    }
  }
  public get domainStatus(): InstanceType<typeof CreateElasticsearchDomainResponse.DomainStatusResponse> {
    return new CreateElasticsearchDomainResponse.DomainStatusResponse(this.scope, this.resources);
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], input: shapes.CreateElasticsearchDomainRequest) {
  }
}
export class CreateOutboundCrossClusterSearchConnectionResponse {
  static SourceDomainInfoResponse = class {
    public get ownerId(): shapes.OwnerId {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'createOutboundCrossClusterSearchConnection',
          service: 'ES',
          outputPath: 'SourceDomainInfo.OwnerId',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'CreateOutboundCrossClusterSearchConnection.SourceDomainInfo.OwnerId', props);
      return request.getResponseField('SourceDomainInfo.OwnerId') as unknown as shapes.OwnerId;
    }
    public get domainName(): shapes.DomainName {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'createOutboundCrossClusterSearchConnection',
          service: 'ES',
          outputPath: 'SourceDomainInfo.DomainName',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'CreateOutboundCrossClusterSearchConnection.SourceDomainInfo.DomainName', props);
      return request.getResponseField('SourceDomainInfo.DomainName') as unknown as shapes.DomainName;
    }
    public get region(): shapes.Region {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'createOutboundCrossClusterSearchConnection',
          service: 'ES',
          outputPath: 'SourceDomainInfo.Region',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'CreateOutboundCrossClusterSearchConnection.SourceDomainInfo.Region', props);
      return request.getResponseField('SourceDomainInfo.Region') as unknown as shapes.Region;
    }
    constructor(public scope: cdk.Construct, public readonly resources: string[]) {
    }
  }
  public get sourceDomainInfo(): InstanceType<typeof CreateOutboundCrossClusterSearchConnectionResponse.SourceDomainInfoResponse> {
    return new CreateOutboundCrossClusterSearchConnectionResponse.SourceDomainInfoResponse(this.scope, this.resources);
  }
  static DestinationDomainInfoResponse = class {
    public get ownerId(): shapes.OwnerId {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'createOutboundCrossClusterSearchConnection',
          service: 'ES',
          outputPath: 'DestinationDomainInfo.OwnerId',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'CreateOutboundCrossClusterSearchConnection.DestinationDomainInfo.OwnerId', props);
      return request.getResponseField('DestinationDomainInfo.OwnerId') as unknown as shapes.OwnerId;
    }
    public get domainName(): shapes.DomainName {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'createOutboundCrossClusterSearchConnection',
          service: 'ES',
          outputPath: 'DestinationDomainInfo.DomainName',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'CreateOutboundCrossClusterSearchConnection.DestinationDomainInfo.DomainName', props);
      return request.getResponseField('DestinationDomainInfo.DomainName') as unknown as shapes.DomainName;
    }
    public get region(): shapes.Region {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'createOutboundCrossClusterSearchConnection',
          service: 'ES',
          outputPath: 'DestinationDomainInfo.Region',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'CreateOutboundCrossClusterSearchConnection.DestinationDomainInfo.Region', props);
      return request.getResponseField('DestinationDomainInfo.Region') as unknown as shapes.Region;
    }
    constructor(public scope: cdk.Construct, public readonly resources: string[]) {
    }
  }
  public get destinationDomainInfo(): InstanceType<typeof CreateOutboundCrossClusterSearchConnectionResponse.DestinationDomainInfoResponse> {
    return new CreateOutboundCrossClusterSearchConnectionResponse.DestinationDomainInfoResponse(this.scope, this.resources);
  }
  public get connectionAlias(): shapes.ConnectionAlias {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'createOutboundCrossClusterSearchConnection',
        service: 'ES',
        outputPath: 'ConnectionAlias',
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'CreateOutboundCrossClusterSearchConnection.ConnectionAlias', props);
    return request.getResponseField('ConnectionAlias') as unknown as shapes.ConnectionAlias;
  }
  static ConnectionStatusResponse = class {
    public get statusCode(): shapes.OutboundCrossClusterSearchConnectionStatusCode {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'createOutboundCrossClusterSearchConnection',
          service: 'ES',
          outputPath: 'ConnectionStatus.StatusCode',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'CreateOutboundCrossClusterSearchConnection.ConnectionStatus.StatusCode', props);
      return request.getResponseField('ConnectionStatus.StatusCode') as unknown as shapes.OutboundCrossClusterSearchConnectionStatusCode;
    }
    public get message(): shapes.CrossClusterSearchConnectionStatusMessage {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'createOutboundCrossClusterSearchConnection',
          service: 'ES',
          outputPath: 'ConnectionStatus.Message',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'CreateOutboundCrossClusterSearchConnection.ConnectionStatus.Message', props);
      return request.getResponseField('ConnectionStatus.Message') as unknown as shapes.CrossClusterSearchConnectionStatusMessage;
    }
    constructor(public scope: cdk.Construct, public readonly resources: string[]) {
    }
  }
  public get connectionStatus(): InstanceType<typeof CreateOutboundCrossClusterSearchConnectionResponse.ConnectionStatusResponse> {
    return new CreateOutboundCrossClusterSearchConnectionResponse.ConnectionStatusResponse(this.scope, this.resources);
  }
  public get crossClusterSearchConnectionId(): shapes.CrossClusterSearchConnectionId {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'createOutboundCrossClusterSearchConnection',
        service: 'ES',
        outputPath: 'CrossClusterSearchConnectionId',
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'CreateOutboundCrossClusterSearchConnection.CrossClusterSearchConnectionId', props);
    return request.getResponseField('CrossClusterSearchConnectionId') as unknown as shapes.CrossClusterSearchConnectionId;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], input: shapes.CreateOutboundCrossClusterSearchConnectionRequest) {
  }
}
export class CreatePackageResponse {
  static PackageDetailsResponse = class {
    public get packageId(): shapes.PackageID {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'createPackage',
          service: 'ES',
          outputPath: 'PackageDetails.PackageID',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'CreatePackage.PackageDetails.PackageID', props);
      return request.getResponseField('PackageDetails.PackageID') as unknown as shapes.PackageID;
    }
    public get packageName(): shapes.PackageName {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'createPackage',
          service: 'ES',
          outputPath: 'PackageDetails.PackageName',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'CreatePackage.PackageDetails.PackageName', props);
      return request.getResponseField('PackageDetails.PackageName') as unknown as shapes.PackageName;
    }
    public get packageType(): shapes.PackageType {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'createPackage',
          service: 'ES',
          outputPath: 'PackageDetails.PackageType',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'CreatePackage.PackageDetails.PackageType', props);
      return request.getResponseField('PackageDetails.PackageType') as unknown as shapes.PackageType;
    }
    public get packageDescription(): shapes.PackageDescription {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'createPackage',
          service: 'ES',
          outputPath: 'PackageDetails.PackageDescription',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'CreatePackage.PackageDetails.PackageDescription', props);
      return request.getResponseField('PackageDetails.PackageDescription') as unknown as shapes.PackageDescription;
    }
    public get packageStatus(): shapes.PackageStatus {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'createPackage',
          service: 'ES',
          outputPath: 'PackageDetails.PackageStatus',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'CreatePackage.PackageDetails.PackageStatus', props);
      return request.getResponseField('PackageDetails.PackageStatus') as unknown as shapes.PackageStatus;
    }
    public get createdAt(): shapes.CreatedAt {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'createPackage',
          service: 'ES',
          outputPath: 'PackageDetails.CreatedAt',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'CreatePackage.PackageDetails.CreatedAt', props);
      return request.getResponseField('PackageDetails.CreatedAt') as unknown as shapes.CreatedAt;
    }
    public get lastUpdatedAt(): shapes.LastUpdated {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'createPackage',
          service: 'ES',
          outputPath: 'PackageDetails.LastUpdatedAt',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'CreatePackage.PackageDetails.LastUpdatedAt', props);
      return request.getResponseField('PackageDetails.LastUpdatedAt') as unknown as shapes.LastUpdated;
    }
    public get availablePackageVersion(): shapes.PackageVersion {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'createPackage',
          service: 'ES',
          outputPath: 'PackageDetails.AvailablePackageVersion',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'CreatePackage.PackageDetails.AvailablePackageVersion', props);
      return request.getResponseField('PackageDetails.AvailablePackageVersion') as unknown as shapes.PackageVersion;
    }
    static ErrorDetailsResponse = class {
      public get errorType(): shapes.ErrorType {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'createPackage',
            service: 'ES',
            outputPath: 'PackageDetails.ErrorDetails.ErrorType',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'CreatePackage.PackageDetails.ErrorDetails.ErrorType', props);
        return request.getResponseField('PackageDetails.ErrorDetails.ErrorType') as unknown as shapes.ErrorType;
      }
      public get errorMessage(): shapes.ErrorMessage {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'createPackage',
            service: 'ES',
            outputPath: 'PackageDetails.ErrorDetails.ErrorMessage',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'CreatePackage.PackageDetails.ErrorDetails.ErrorMessage', props);
        return request.getResponseField('PackageDetails.ErrorDetails.ErrorMessage') as unknown as shapes.ErrorMessage;
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get errorDetails(): InstanceType<typeof CreatePackageResponse.PackageDetailsResponse.ErrorDetailsResponse> {
      return new CreatePackageResponse.PackageDetailsResponse.ErrorDetailsResponse(this.scope, this.resources);
    }
    constructor(public scope: cdk.Construct, public readonly resources: string[]) {
    }
  }
  public get packageDetails(): InstanceType<typeof CreatePackageResponse.PackageDetailsResponse> {
    return new CreatePackageResponse.PackageDetailsResponse(this.scope, this.resources);
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], input: shapes.CreatePackageRequest) {
  }
}
export class DeleteElasticsearchDomainResponse {
  static DomainStatusResponse = class {
    public get domainId(): shapes.DomainId {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'deleteElasticsearchDomain',
          service: 'ES',
          outputPath: 'DomainStatus.DomainId',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.DomainId', props);
      return request.getResponseField('DomainStatus.DomainId') as unknown as shapes.DomainId;
    }
    public get domainName(): shapes.DomainName {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'deleteElasticsearchDomain',
          service: 'ES',
          outputPath: 'DomainStatus.DomainName',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.DomainName', props);
      return request.getResponseField('DomainStatus.DomainName') as unknown as shapes.DomainName;
    }
    public get arn(): shapes.ARN {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'deleteElasticsearchDomain',
          service: 'ES',
          outputPath: 'DomainStatus.ARN',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.ARN', props);
      return request.getResponseField('DomainStatus.ARN') as unknown as shapes.ARN;
    }
    public get created(): shapes.Boolean {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'deleteElasticsearchDomain',
          service: 'ES',
          outputPath: 'DomainStatus.Created',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.Created', props);
      return request.getResponseField('DomainStatus.Created') as unknown as shapes.Boolean;
    }
    public get deleted(): shapes.Boolean {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'deleteElasticsearchDomain',
          service: 'ES',
          outputPath: 'DomainStatus.Deleted',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.Deleted', props);
      return request.getResponseField('DomainStatus.Deleted') as unknown as shapes.Boolean;
    }
    public get endpoint(): shapes.ServiceUrl {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'deleteElasticsearchDomain',
          service: 'ES',
          outputPath: 'DomainStatus.Endpoint',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.Endpoint', props);
      return request.getResponseField('DomainStatus.Endpoint') as unknown as shapes.ServiceUrl;
    }
    public get endpoints(): shapes.EndpointsMap {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'deleteElasticsearchDomain',
          service: 'ES',
          outputPath: 'DomainStatus.Endpoints',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.Endpoints', props);
      return request.getResponseField('DomainStatus.Endpoints') as unknown as shapes.EndpointsMap;
    }
    public get processing(): shapes.Boolean {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'deleteElasticsearchDomain',
          service: 'ES',
          outputPath: 'DomainStatus.Processing',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.Processing', props);
      return request.getResponseField('DomainStatus.Processing') as unknown as shapes.Boolean;
    }
    public get upgradeProcessing(): shapes.Boolean {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'deleteElasticsearchDomain',
          service: 'ES',
          outputPath: 'DomainStatus.UpgradeProcessing',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.UpgradeProcessing', props);
      return request.getResponseField('DomainStatus.UpgradeProcessing') as unknown as shapes.Boolean;
    }
    public get elasticsearchVersion(): shapes.ElasticsearchVersionString {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'deleteElasticsearchDomain',
          service: 'ES',
          outputPath: 'DomainStatus.ElasticsearchVersion',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.ElasticsearchVersion', props);
      return request.getResponseField('DomainStatus.ElasticsearchVersion') as unknown as shapes.ElasticsearchVersionString;
    }
    static ElasticsearchClusterConfigResponse = class {
      public get instanceType(): shapes.ESPartitionInstanceType {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ElasticsearchClusterConfig.InstanceType',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.ElasticsearchClusterConfig.InstanceType', props);
        return request.getResponseField('DomainStatus.ElasticsearchClusterConfig.InstanceType') as unknown as shapes.ESPartitionInstanceType;
      }
      public get instanceCount(): shapes.IntegerClass {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ElasticsearchClusterConfig.InstanceCount',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.ElasticsearchClusterConfig.InstanceCount', props);
        return request.getResponseField('DomainStatus.ElasticsearchClusterConfig.InstanceCount') as unknown as shapes.IntegerClass;
      }
      public get dedicatedMasterEnabled(): shapes.Boolean {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ElasticsearchClusterConfig.DedicatedMasterEnabled',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.ElasticsearchClusterConfig.DedicatedMasterEnabled', props);
        return request.getResponseField('DomainStatus.ElasticsearchClusterConfig.DedicatedMasterEnabled') as unknown as shapes.Boolean;
      }
      public get zoneAwarenessEnabled(): shapes.Boolean {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ElasticsearchClusterConfig.ZoneAwarenessEnabled',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.ElasticsearchClusterConfig.ZoneAwarenessEnabled', props);
        return request.getResponseField('DomainStatus.ElasticsearchClusterConfig.ZoneAwarenessEnabled') as unknown as shapes.Boolean;
      }
      static ZoneAwarenessConfigResponse = class {
        public get availabilityZoneCount(): shapes.IntegerClass {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'deleteElasticsearchDomain',
              service: 'ES',
              outputPath: 'DomainStatus.ElasticsearchClusterConfig.ZoneAwarenessConfig.AvailabilityZoneCount',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.ElasticsearchClusterConfig.ZoneAwarenessConfig.AvailabilityZoneCount', props);
          return request.getResponseField('DomainStatus.ElasticsearchClusterConfig.ZoneAwarenessConfig.AvailabilityZoneCount') as unknown as shapes.IntegerClass;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get zoneAwarenessConfig(): InstanceType<typeof DeleteElasticsearchDomainResponse.DomainStatusResponse.ElasticsearchClusterConfigResponse.ZoneAwarenessConfigResponse> {
        return new DeleteElasticsearchDomainResponse.DomainStatusResponse.ElasticsearchClusterConfigResponse.ZoneAwarenessConfigResponse(this.scope, this.resources);
      }
      public get dedicatedMasterType(): shapes.ESPartitionInstanceType {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ElasticsearchClusterConfig.DedicatedMasterType',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.ElasticsearchClusterConfig.DedicatedMasterType', props);
        return request.getResponseField('DomainStatus.ElasticsearchClusterConfig.DedicatedMasterType') as unknown as shapes.ESPartitionInstanceType;
      }
      public get dedicatedMasterCount(): shapes.IntegerClass {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ElasticsearchClusterConfig.DedicatedMasterCount',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.ElasticsearchClusterConfig.DedicatedMasterCount', props);
        return request.getResponseField('DomainStatus.ElasticsearchClusterConfig.DedicatedMasterCount') as unknown as shapes.IntegerClass;
      }
      public get warmEnabled(): shapes.Boolean {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ElasticsearchClusterConfig.WarmEnabled',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.ElasticsearchClusterConfig.WarmEnabled', props);
        return request.getResponseField('DomainStatus.ElasticsearchClusterConfig.WarmEnabled') as unknown as shapes.Boolean;
      }
      public get warmType(): shapes.ESWarmPartitionInstanceType {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ElasticsearchClusterConfig.WarmType',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.ElasticsearchClusterConfig.WarmType', props);
        return request.getResponseField('DomainStatus.ElasticsearchClusterConfig.WarmType') as unknown as shapes.ESWarmPartitionInstanceType;
      }
      public get warmCount(): shapes.IntegerClass {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ElasticsearchClusterConfig.WarmCount',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.ElasticsearchClusterConfig.WarmCount', props);
        return request.getResponseField('DomainStatus.ElasticsearchClusterConfig.WarmCount') as unknown as shapes.IntegerClass;
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get elasticsearchClusterConfig(): InstanceType<typeof DeleteElasticsearchDomainResponse.DomainStatusResponse.ElasticsearchClusterConfigResponse> {
      return new DeleteElasticsearchDomainResponse.DomainStatusResponse.ElasticsearchClusterConfigResponse(this.scope, this.resources);
    }
    static EBSOptionsResponse = class {
      public get ebsEnabled(): shapes.Boolean {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.EBSOptions.EBSEnabled',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.EBSOptions.EBSEnabled', props);
        return request.getResponseField('DomainStatus.EBSOptions.EBSEnabled') as unknown as shapes.Boolean;
      }
      public get volumeType(): shapes.VolumeType {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.EBSOptions.VolumeType',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.EBSOptions.VolumeType', props);
        return request.getResponseField('DomainStatus.EBSOptions.VolumeType') as unknown as shapes.VolumeType;
      }
      public get volumeSize(): shapes.IntegerClass {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.EBSOptions.VolumeSize',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.EBSOptions.VolumeSize', props);
        return request.getResponseField('DomainStatus.EBSOptions.VolumeSize') as unknown as shapes.IntegerClass;
      }
      public get iops(): shapes.IntegerClass {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.EBSOptions.Iops',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.EBSOptions.Iops', props);
        return request.getResponseField('DomainStatus.EBSOptions.Iops') as unknown as shapes.IntegerClass;
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get ebsOptions(): InstanceType<typeof DeleteElasticsearchDomainResponse.DomainStatusResponse.EBSOptionsResponse> {
      return new DeleteElasticsearchDomainResponse.DomainStatusResponse.EBSOptionsResponse(this.scope, this.resources);
    }
    public get accessPolicies(): shapes.PolicyDocument {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'deleteElasticsearchDomain',
          service: 'ES',
          outputPath: 'DomainStatus.AccessPolicies',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.AccessPolicies', props);
      return request.getResponseField('DomainStatus.AccessPolicies') as unknown as shapes.PolicyDocument;
    }
    static SnapshotOptionsResponse = class {
      public get automatedSnapshotStartHour(): shapes.IntegerClass {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.SnapshotOptions.AutomatedSnapshotStartHour',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.SnapshotOptions.AutomatedSnapshotStartHour', props);
        return request.getResponseField('DomainStatus.SnapshotOptions.AutomatedSnapshotStartHour') as unknown as shapes.IntegerClass;
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get snapshotOptions(): InstanceType<typeof DeleteElasticsearchDomainResponse.DomainStatusResponse.SnapshotOptionsResponse> {
      return new DeleteElasticsearchDomainResponse.DomainStatusResponse.SnapshotOptionsResponse(this.scope, this.resources);
    }
    static VPCOptionsResponse = class {
      public get vpcId(): shapes.String {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.VPCOptions.VPCId',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.VPCOptions.VPCId', props);
        return request.getResponseField('DomainStatus.VPCOptions.VPCId') as unknown as shapes.String;
      }
      public get subnetIds(): shapes.StringList {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.VPCOptions.SubnetIds',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.VPCOptions.SubnetIds', props);
        return request.getResponseField('DomainStatus.VPCOptions.SubnetIds') as unknown as shapes.StringList;
      }
      public get availabilityZones(): shapes.StringList {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.VPCOptions.AvailabilityZones',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.VPCOptions.AvailabilityZones', props);
        return request.getResponseField('DomainStatus.VPCOptions.AvailabilityZones') as unknown as shapes.StringList;
      }
      public get securityGroupIds(): shapes.StringList {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.VPCOptions.SecurityGroupIds',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.VPCOptions.SecurityGroupIds', props);
        return request.getResponseField('DomainStatus.VPCOptions.SecurityGroupIds') as unknown as shapes.StringList;
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get vpcOptions(): InstanceType<typeof DeleteElasticsearchDomainResponse.DomainStatusResponse.VPCOptionsResponse> {
      return new DeleteElasticsearchDomainResponse.DomainStatusResponse.VPCOptionsResponse(this.scope, this.resources);
    }
    static CognitoOptionsResponse = class {
      public get enabled(): shapes.Boolean {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.CognitoOptions.Enabled',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.CognitoOptions.Enabled', props);
        return request.getResponseField('DomainStatus.CognitoOptions.Enabled') as unknown as shapes.Boolean;
      }
      public get userPoolId(): shapes.UserPoolId {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.CognitoOptions.UserPoolId',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.CognitoOptions.UserPoolId', props);
        return request.getResponseField('DomainStatus.CognitoOptions.UserPoolId') as unknown as shapes.UserPoolId;
      }
      public get identityPoolId(): shapes.IdentityPoolId {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.CognitoOptions.IdentityPoolId',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.CognitoOptions.IdentityPoolId', props);
        return request.getResponseField('DomainStatus.CognitoOptions.IdentityPoolId') as unknown as shapes.IdentityPoolId;
      }
      public get roleArn(): shapes.RoleArn {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.CognitoOptions.RoleArn',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.CognitoOptions.RoleArn', props);
        return request.getResponseField('DomainStatus.CognitoOptions.RoleArn') as unknown as shapes.RoleArn;
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get cognitoOptions(): InstanceType<typeof DeleteElasticsearchDomainResponse.DomainStatusResponse.CognitoOptionsResponse> {
      return new DeleteElasticsearchDomainResponse.DomainStatusResponse.CognitoOptionsResponse(this.scope, this.resources);
    }
    static EncryptionAtRestOptionsResponse = class {
      public get enabled(): shapes.Boolean {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.EncryptionAtRestOptions.Enabled',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.EncryptionAtRestOptions.Enabled', props);
        return request.getResponseField('DomainStatus.EncryptionAtRestOptions.Enabled') as unknown as shapes.Boolean;
      }
      public get kmsKeyId(): shapes.KmsKeyId {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.EncryptionAtRestOptions.KmsKeyId',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.EncryptionAtRestOptions.KmsKeyId', props);
        return request.getResponseField('DomainStatus.EncryptionAtRestOptions.KmsKeyId') as unknown as shapes.KmsKeyId;
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get encryptionAtRestOptions(): InstanceType<typeof DeleteElasticsearchDomainResponse.DomainStatusResponse.EncryptionAtRestOptionsResponse> {
      return new DeleteElasticsearchDomainResponse.DomainStatusResponse.EncryptionAtRestOptionsResponse(this.scope, this.resources);
    }
    static NodeToNodeEncryptionOptionsResponse = class {
      public get enabled(): shapes.Boolean {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.NodeToNodeEncryptionOptions.Enabled',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.NodeToNodeEncryptionOptions.Enabled', props);
        return request.getResponseField('DomainStatus.NodeToNodeEncryptionOptions.Enabled') as unknown as shapes.Boolean;
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get nodeToNodeEncryptionOptions(): InstanceType<typeof DeleteElasticsearchDomainResponse.DomainStatusResponse.NodeToNodeEncryptionOptionsResponse> {
      return new DeleteElasticsearchDomainResponse.DomainStatusResponse.NodeToNodeEncryptionOptionsResponse(this.scope, this.resources);
    }
    public get advancedOptions(): shapes.AdvancedOptions {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'deleteElasticsearchDomain',
          service: 'ES',
          outputPath: 'DomainStatus.AdvancedOptions',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.AdvancedOptions', props);
      return request.getResponseField('DomainStatus.AdvancedOptions') as unknown as shapes.AdvancedOptions;
    }
    public get logPublishingOptions(): shapes.LogPublishingOptions {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'deleteElasticsearchDomain',
          service: 'ES',
          outputPath: 'DomainStatus.LogPublishingOptions',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.LogPublishingOptions', props);
      return request.getResponseField('DomainStatus.LogPublishingOptions') as unknown as shapes.LogPublishingOptions;
    }
    static ServiceSoftwareOptionsResponse = class {
      public get currentVersion(): shapes.String {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ServiceSoftwareOptions.CurrentVersion',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.ServiceSoftwareOptions.CurrentVersion', props);
        return request.getResponseField('DomainStatus.ServiceSoftwareOptions.CurrentVersion') as unknown as shapes.String;
      }
      public get newVersion(): shapes.String {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ServiceSoftwareOptions.NewVersion',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.ServiceSoftwareOptions.NewVersion', props);
        return request.getResponseField('DomainStatus.ServiceSoftwareOptions.NewVersion') as unknown as shapes.String;
      }
      public get updateAvailable(): shapes.Boolean {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ServiceSoftwareOptions.UpdateAvailable',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.ServiceSoftwareOptions.UpdateAvailable', props);
        return request.getResponseField('DomainStatus.ServiceSoftwareOptions.UpdateAvailable') as unknown as shapes.Boolean;
      }
      public get cancellable(): shapes.Boolean {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ServiceSoftwareOptions.Cancellable',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.ServiceSoftwareOptions.Cancellable', props);
        return request.getResponseField('DomainStatus.ServiceSoftwareOptions.Cancellable') as unknown as shapes.Boolean;
      }
      public get updateStatus(): shapes.DeploymentStatus {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ServiceSoftwareOptions.UpdateStatus',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.ServiceSoftwareOptions.UpdateStatus', props);
        return request.getResponseField('DomainStatus.ServiceSoftwareOptions.UpdateStatus') as unknown as shapes.DeploymentStatus;
      }
      public get description(): shapes.String {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ServiceSoftwareOptions.Description',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.ServiceSoftwareOptions.Description', props);
        return request.getResponseField('DomainStatus.ServiceSoftwareOptions.Description') as unknown as shapes.String;
      }
      public get automatedUpdateDate(): shapes.DeploymentCloseDateTimeStamp {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ServiceSoftwareOptions.AutomatedUpdateDate',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.ServiceSoftwareOptions.AutomatedUpdateDate', props);
        return request.getResponseField('DomainStatus.ServiceSoftwareOptions.AutomatedUpdateDate') as unknown as shapes.DeploymentCloseDateTimeStamp;
      }
      public get optionalDeployment(): shapes.Boolean {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ServiceSoftwareOptions.OptionalDeployment',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.ServiceSoftwareOptions.OptionalDeployment', props);
        return request.getResponseField('DomainStatus.ServiceSoftwareOptions.OptionalDeployment') as unknown as shapes.Boolean;
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get serviceSoftwareOptions(): InstanceType<typeof DeleteElasticsearchDomainResponse.DomainStatusResponse.ServiceSoftwareOptionsResponse> {
      return new DeleteElasticsearchDomainResponse.DomainStatusResponse.ServiceSoftwareOptionsResponse(this.scope, this.resources);
    }
    static DomainEndpointOptionsResponse = class {
      public get enforceHttps(): shapes.Boolean {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.DomainEndpointOptions.EnforceHTTPS',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.DomainEndpointOptions.EnforceHTTPS', props);
        return request.getResponseField('DomainStatus.DomainEndpointOptions.EnforceHTTPS') as unknown as shapes.Boolean;
      }
      public get tlsSecurityPolicy(): shapes.TLSSecurityPolicy {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.DomainEndpointOptions.TLSSecurityPolicy',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.DomainEndpointOptions.TLSSecurityPolicy', props);
        return request.getResponseField('DomainStatus.DomainEndpointOptions.TLSSecurityPolicy') as unknown as shapes.TLSSecurityPolicy;
      }
      public get customEndpointEnabled(): shapes.Boolean {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.DomainEndpointOptions.CustomEndpointEnabled',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.DomainEndpointOptions.CustomEndpointEnabled', props);
        return request.getResponseField('DomainStatus.DomainEndpointOptions.CustomEndpointEnabled') as unknown as shapes.Boolean;
      }
      public get customEndpoint(): shapes.DomainNameFqdn {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.DomainEndpointOptions.CustomEndpoint',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.DomainEndpointOptions.CustomEndpoint', props);
        return request.getResponseField('DomainStatus.DomainEndpointOptions.CustomEndpoint') as unknown as shapes.DomainNameFqdn;
      }
      public get customEndpointCertificateArn(): shapes.ARN {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.DomainEndpointOptions.CustomEndpointCertificateArn',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.DomainEndpointOptions.CustomEndpointCertificateArn', props);
        return request.getResponseField('DomainStatus.DomainEndpointOptions.CustomEndpointCertificateArn') as unknown as shapes.ARN;
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get domainEndpointOptions(): InstanceType<typeof DeleteElasticsearchDomainResponse.DomainStatusResponse.DomainEndpointOptionsResponse> {
      return new DeleteElasticsearchDomainResponse.DomainStatusResponse.DomainEndpointOptionsResponse(this.scope, this.resources);
    }
    static AdvancedSecurityOptionsResponse = class {
      public get enabled(): shapes.Boolean {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.AdvancedSecurityOptions.Enabled',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.AdvancedSecurityOptions.Enabled', props);
        return request.getResponseField('DomainStatus.AdvancedSecurityOptions.Enabled') as unknown as shapes.Boolean;
      }
      public get internalUserDatabaseEnabled(): shapes.Boolean {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.AdvancedSecurityOptions.InternalUserDatabaseEnabled',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.AdvancedSecurityOptions.InternalUserDatabaseEnabled', props);
        return request.getResponseField('DomainStatus.AdvancedSecurityOptions.InternalUserDatabaseEnabled') as unknown as shapes.Boolean;
      }
      static SAMLOptionsResponse = class {
        public get enabled(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'deleteElasticsearchDomain',
              service: 'ES',
              outputPath: 'DomainStatus.AdvancedSecurityOptions.SAMLOptions.Enabled',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.AdvancedSecurityOptions.SAMLOptions.Enabled', props);
          return request.getResponseField('DomainStatus.AdvancedSecurityOptions.SAMLOptions.Enabled') as unknown as shapes.Boolean;
        }
        static IdpResponse = class {
          public get metadataContent(): shapes.SAMLMetadata {
            const props: cr.AwsCustomResourceProps = {
              onUpdate: {
                action: 'deleteElasticsearchDomain',
                service: 'ES',
                outputPath: 'DomainStatus.AdvancedSecurityOptions.SAMLOptions.Idp.MetadataContent',
              },
              policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
            };
            const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.AdvancedSecurityOptions.SAMLOptions.Idp.MetadataContent', props);
            return request.getResponseField('DomainStatus.AdvancedSecurityOptions.SAMLOptions.Idp.MetadataContent') as unknown as shapes.SAMLMetadata;
          }
          public get entityId(): shapes.SAMLEntityId {
            const props: cr.AwsCustomResourceProps = {
              onUpdate: {
                action: 'deleteElasticsearchDomain',
                service: 'ES',
                outputPath: 'DomainStatus.AdvancedSecurityOptions.SAMLOptions.Idp.EntityId',
              },
              policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
            };
            const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.AdvancedSecurityOptions.SAMLOptions.Idp.EntityId', props);
            return request.getResponseField('DomainStatus.AdvancedSecurityOptions.SAMLOptions.Idp.EntityId') as unknown as shapes.SAMLEntityId;
          }
          constructor(public scope: cdk.Construct, public readonly resources: string[]) {
          }
        }
        public get idp(): InstanceType<typeof DeleteElasticsearchDomainResponse.DomainStatusResponse.AdvancedSecurityOptionsResponse.SAMLOptionsResponse.IdpResponse> {
          return new DeleteElasticsearchDomainResponse.DomainStatusResponse.AdvancedSecurityOptionsResponse.SAMLOptionsResponse.IdpResponse(this.scope, this.resources);
        }
        public get subjectKey(): shapes.String {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'deleteElasticsearchDomain',
              service: 'ES',
              outputPath: 'DomainStatus.AdvancedSecurityOptions.SAMLOptions.SubjectKey',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.AdvancedSecurityOptions.SAMLOptions.SubjectKey', props);
          return request.getResponseField('DomainStatus.AdvancedSecurityOptions.SAMLOptions.SubjectKey') as unknown as shapes.String;
        }
        public get rolesKey(): shapes.String {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'deleteElasticsearchDomain',
              service: 'ES',
              outputPath: 'DomainStatus.AdvancedSecurityOptions.SAMLOptions.RolesKey',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.AdvancedSecurityOptions.SAMLOptions.RolesKey', props);
          return request.getResponseField('DomainStatus.AdvancedSecurityOptions.SAMLOptions.RolesKey') as unknown as shapes.String;
        }
        public get sessionTimeoutMinutes(): shapes.IntegerClass {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'deleteElasticsearchDomain',
              service: 'ES',
              outputPath: 'DomainStatus.AdvancedSecurityOptions.SAMLOptions.SessionTimeoutMinutes',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DeleteElasticsearchDomain.DomainStatus.AdvancedSecurityOptions.SAMLOptions.SessionTimeoutMinutes', props);
          return request.getResponseField('DomainStatus.AdvancedSecurityOptions.SAMLOptions.SessionTimeoutMinutes') as unknown as shapes.IntegerClass;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get samlOptions(): InstanceType<typeof DeleteElasticsearchDomainResponse.DomainStatusResponse.AdvancedSecurityOptionsResponse.SAMLOptionsResponse> {
        return new DeleteElasticsearchDomainResponse.DomainStatusResponse.AdvancedSecurityOptionsResponse.SAMLOptionsResponse(this.scope, this.resources);
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get advancedSecurityOptions(): InstanceType<typeof DeleteElasticsearchDomainResponse.DomainStatusResponse.AdvancedSecurityOptionsResponse> {
      return new DeleteElasticsearchDomainResponse.DomainStatusResponse.AdvancedSecurityOptionsResponse(this.scope, this.resources);
    }
    constructor(public scope: cdk.Construct, public readonly resources: string[]) {
    }
  }
  public get domainStatus(): InstanceType<typeof DeleteElasticsearchDomainResponse.DomainStatusResponse> {
    return new DeleteElasticsearchDomainResponse.DomainStatusResponse(this.scope, this.resources);
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], input: shapes.DeleteElasticsearchDomainRequest) {
  }
}
export class DeleteInboundCrossClusterSearchConnectionResponse {
  static CrossClusterSearchConnectionResponse = class {
    static SourceDomainInfoResponse = class {
      public get ownerId(): shapes.OwnerId {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteInboundCrossClusterSearchConnection',
            service: 'ES',
            outputPath: 'CrossClusterSearchConnection.SourceDomainInfo.OwnerId',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteInboundCrossClusterSearchConnection.CrossClusterSearchConnection.SourceDomainInfo.OwnerId', props);
        return request.getResponseField('CrossClusterSearchConnection.SourceDomainInfo.OwnerId') as unknown as shapes.OwnerId;
      }
      public get domainName(): shapes.DomainName {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteInboundCrossClusterSearchConnection',
            service: 'ES',
            outputPath: 'CrossClusterSearchConnection.SourceDomainInfo.DomainName',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteInboundCrossClusterSearchConnection.CrossClusterSearchConnection.SourceDomainInfo.DomainName', props);
        return request.getResponseField('CrossClusterSearchConnection.SourceDomainInfo.DomainName') as unknown as shapes.DomainName;
      }
      public get region(): shapes.Region {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteInboundCrossClusterSearchConnection',
            service: 'ES',
            outputPath: 'CrossClusterSearchConnection.SourceDomainInfo.Region',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteInboundCrossClusterSearchConnection.CrossClusterSearchConnection.SourceDomainInfo.Region', props);
        return request.getResponseField('CrossClusterSearchConnection.SourceDomainInfo.Region') as unknown as shapes.Region;
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get sourceDomainInfo(): InstanceType<typeof DeleteInboundCrossClusterSearchConnectionResponse.CrossClusterSearchConnectionResponse.SourceDomainInfoResponse> {
      return new DeleteInboundCrossClusterSearchConnectionResponse.CrossClusterSearchConnectionResponse.SourceDomainInfoResponse(this.scope, this.resources);
    }
    static DestinationDomainInfoResponse = class {
      public get ownerId(): shapes.OwnerId {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteInboundCrossClusterSearchConnection',
            service: 'ES',
            outputPath: 'CrossClusterSearchConnection.DestinationDomainInfo.OwnerId',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteInboundCrossClusterSearchConnection.CrossClusterSearchConnection.DestinationDomainInfo.OwnerId', props);
        return request.getResponseField('CrossClusterSearchConnection.DestinationDomainInfo.OwnerId') as unknown as shapes.OwnerId;
      }
      public get domainName(): shapes.DomainName {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteInboundCrossClusterSearchConnection',
            service: 'ES',
            outputPath: 'CrossClusterSearchConnection.DestinationDomainInfo.DomainName',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteInboundCrossClusterSearchConnection.CrossClusterSearchConnection.DestinationDomainInfo.DomainName', props);
        return request.getResponseField('CrossClusterSearchConnection.DestinationDomainInfo.DomainName') as unknown as shapes.DomainName;
      }
      public get region(): shapes.Region {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteInboundCrossClusterSearchConnection',
            service: 'ES',
            outputPath: 'CrossClusterSearchConnection.DestinationDomainInfo.Region',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteInboundCrossClusterSearchConnection.CrossClusterSearchConnection.DestinationDomainInfo.Region', props);
        return request.getResponseField('CrossClusterSearchConnection.DestinationDomainInfo.Region') as unknown as shapes.Region;
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get destinationDomainInfo(): InstanceType<typeof DeleteInboundCrossClusterSearchConnectionResponse.CrossClusterSearchConnectionResponse.DestinationDomainInfoResponse> {
      return new DeleteInboundCrossClusterSearchConnectionResponse.CrossClusterSearchConnectionResponse.DestinationDomainInfoResponse(this.scope, this.resources);
    }
    public get crossClusterSearchConnectionId(): shapes.CrossClusterSearchConnectionId {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'deleteInboundCrossClusterSearchConnection',
          service: 'ES',
          outputPath: 'CrossClusterSearchConnection.CrossClusterSearchConnectionId',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'DeleteInboundCrossClusterSearchConnection.CrossClusterSearchConnection.CrossClusterSearchConnectionId', props);
      return request.getResponseField('CrossClusterSearchConnection.CrossClusterSearchConnectionId') as unknown as shapes.CrossClusterSearchConnectionId;
    }
    static ConnectionStatusResponse = class {
      public get statusCode(): shapes.InboundCrossClusterSearchConnectionStatusCode {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteInboundCrossClusterSearchConnection',
            service: 'ES',
            outputPath: 'CrossClusterSearchConnection.ConnectionStatus.StatusCode',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteInboundCrossClusterSearchConnection.CrossClusterSearchConnection.ConnectionStatus.StatusCode', props);
        return request.getResponseField('CrossClusterSearchConnection.ConnectionStatus.StatusCode') as unknown as shapes.InboundCrossClusterSearchConnectionStatusCode;
      }
      public get message(): shapes.CrossClusterSearchConnectionStatusMessage {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteInboundCrossClusterSearchConnection',
            service: 'ES',
            outputPath: 'CrossClusterSearchConnection.ConnectionStatus.Message',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteInboundCrossClusterSearchConnection.CrossClusterSearchConnection.ConnectionStatus.Message', props);
        return request.getResponseField('CrossClusterSearchConnection.ConnectionStatus.Message') as unknown as shapes.CrossClusterSearchConnectionStatusMessage;
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get connectionStatus(): InstanceType<typeof DeleteInboundCrossClusterSearchConnectionResponse.CrossClusterSearchConnectionResponse.ConnectionStatusResponse> {
      return new DeleteInboundCrossClusterSearchConnectionResponse.CrossClusterSearchConnectionResponse.ConnectionStatusResponse(this.scope, this.resources);
    }
    constructor(public scope: cdk.Construct, public readonly resources: string[]) {
    }
  }
  public get crossClusterSearchConnection(): InstanceType<typeof DeleteInboundCrossClusterSearchConnectionResponse.CrossClusterSearchConnectionResponse> {
    return new DeleteInboundCrossClusterSearchConnectionResponse.CrossClusterSearchConnectionResponse(this.scope, this.resources);
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], input: shapes.DeleteInboundCrossClusterSearchConnectionRequest) {
  }
}
export class DeleteOutboundCrossClusterSearchConnectionResponse {
  static CrossClusterSearchConnectionResponse = class {
    static SourceDomainInfoResponse = class {
      public get ownerId(): shapes.OwnerId {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteOutboundCrossClusterSearchConnection',
            service: 'ES',
            outputPath: 'CrossClusterSearchConnection.SourceDomainInfo.OwnerId',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteOutboundCrossClusterSearchConnection.CrossClusterSearchConnection.SourceDomainInfo.OwnerId', props);
        return request.getResponseField('CrossClusterSearchConnection.SourceDomainInfo.OwnerId') as unknown as shapes.OwnerId;
      }
      public get domainName(): shapes.DomainName {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteOutboundCrossClusterSearchConnection',
            service: 'ES',
            outputPath: 'CrossClusterSearchConnection.SourceDomainInfo.DomainName',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteOutboundCrossClusterSearchConnection.CrossClusterSearchConnection.SourceDomainInfo.DomainName', props);
        return request.getResponseField('CrossClusterSearchConnection.SourceDomainInfo.DomainName') as unknown as shapes.DomainName;
      }
      public get region(): shapes.Region {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteOutboundCrossClusterSearchConnection',
            service: 'ES',
            outputPath: 'CrossClusterSearchConnection.SourceDomainInfo.Region',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteOutboundCrossClusterSearchConnection.CrossClusterSearchConnection.SourceDomainInfo.Region', props);
        return request.getResponseField('CrossClusterSearchConnection.SourceDomainInfo.Region') as unknown as shapes.Region;
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get sourceDomainInfo(): InstanceType<typeof DeleteOutboundCrossClusterSearchConnectionResponse.CrossClusterSearchConnectionResponse.SourceDomainInfoResponse> {
      return new DeleteOutboundCrossClusterSearchConnectionResponse.CrossClusterSearchConnectionResponse.SourceDomainInfoResponse(this.scope, this.resources);
    }
    static DestinationDomainInfoResponse = class {
      public get ownerId(): shapes.OwnerId {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteOutboundCrossClusterSearchConnection',
            service: 'ES',
            outputPath: 'CrossClusterSearchConnection.DestinationDomainInfo.OwnerId',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteOutboundCrossClusterSearchConnection.CrossClusterSearchConnection.DestinationDomainInfo.OwnerId', props);
        return request.getResponseField('CrossClusterSearchConnection.DestinationDomainInfo.OwnerId') as unknown as shapes.OwnerId;
      }
      public get domainName(): shapes.DomainName {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteOutboundCrossClusterSearchConnection',
            service: 'ES',
            outputPath: 'CrossClusterSearchConnection.DestinationDomainInfo.DomainName',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteOutboundCrossClusterSearchConnection.CrossClusterSearchConnection.DestinationDomainInfo.DomainName', props);
        return request.getResponseField('CrossClusterSearchConnection.DestinationDomainInfo.DomainName') as unknown as shapes.DomainName;
      }
      public get region(): shapes.Region {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteOutboundCrossClusterSearchConnection',
            service: 'ES',
            outputPath: 'CrossClusterSearchConnection.DestinationDomainInfo.Region',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteOutboundCrossClusterSearchConnection.CrossClusterSearchConnection.DestinationDomainInfo.Region', props);
        return request.getResponseField('CrossClusterSearchConnection.DestinationDomainInfo.Region') as unknown as shapes.Region;
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get destinationDomainInfo(): InstanceType<typeof DeleteOutboundCrossClusterSearchConnectionResponse.CrossClusterSearchConnectionResponse.DestinationDomainInfoResponse> {
      return new DeleteOutboundCrossClusterSearchConnectionResponse.CrossClusterSearchConnectionResponse.DestinationDomainInfoResponse(this.scope, this.resources);
    }
    public get crossClusterSearchConnectionId(): shapes.CrossClusterSearchConnectionId {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'deleteOutboundCrossClusterSearchConnection',
          service: 'ES',
          outputPath: 'CrossClusterSearchConnection.CrossClusterSearchConnectionId',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'DeleteOutboundCrossClusterSearchConnection.CrossClusterSearchConnection.CrossClusterSearchConnectionId', props);
      return request.getResponseField('CrossClusterSearchConnection.CrossClusterSearchConnectionId') as unknown as shapes.CrossClusterSearchConnectionId;
    }
    public get connectionAlias(): shapes.ConnectionAlias {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'deleteOutboundCrossClusterSearchConnection',
          service: 'ES',
          outputPath: 'CrossClusterSearchConnection.ConnectionAlias',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'DeleteOutboundCrossClusterSearchConnection.CrossClusterSearchConnection.ConnectionAlias', props);
      return request.getResponseField('CrossClusterSearchConnection.ConnectionAlias') as unknown as shapes.ConnectionAlias;
    }
    static ConnectionStatusResponse = class {
      public get statusCode(): shapes.OutboundCrossClusterSearchConnectionStatusCode {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteOutboundCrossClusterSearchConnection',
            service: 'ES',
            outputPath: 'CrossClusterSearchConnection.ConnectionStatus.StatusCode',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteOutboundCrossClusterSearchConnection.CrossClusterSearchConnection.ConnectionStatus.StatusCode', props);
        return request.getResponseField('CrossClusterSearchConnection.ConnectionStatus.StatusCode') as unknown as shapes.OutboundCrossClusterSearchConnectionStatusCode;
      }
      public get message(): shapes.CrossClusterSearchConnectionStatusMessage {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deleteOutboundCrossClusterSearchConnection',
            service: 'ES',
            outputPath: 'CrossClusterSearchConnection.ConnectionStatus.Message',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeleteOutboundCrossClusterSearchConnection.CrossClusterSearchConnection.ConnectionStatus.Message', props);
        return request.getResponseField('CrossClusterSearchConnection.ConnectionStatus.Message') as unknown as shapes.CrossClusterSearchConnectionStatusMessage;
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get connectionStatus(): InstanceType<typeof DeleteOutboundCrossClusterSearchConnectionResponse.CrossClusterSearchConnectionResponse.ConnectionStatusResponse> {
      return new DeleteOutboundCrossClusterSearchConnectionResponse.CrossClusterSearchConnectionResponse.ConnectionStatusResponse(this.scope, this.resources);
    }
    constructor(public scope: cdk.Construct, public readonly resources: string[]) {
    }
  }
  public get crossClusterSearchConnection(): InstanceType<typeof DeleteOutboundCrossClusterSearchConnectionResponse.CrossClusterSearchConnectionResponse> {
    return new DeleteOutboundCrossClusterSearchConnectionResponse.CrossClusterSearchConnectionResponse(this.scope, this.resources);
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], input: shapes.DeleteOutboundCrossClusterSearchConnectionRequest) {
  }
}
export class DeletePackageResponse {
  static PackageDetailsResponse = class {
    public get packageId(): shapes.PackageID {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'deletePackage',
          service: 'ES',
          outputPath: 'PackageDetails.PackageID',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'DeletePackage.PackageDetails.PackageID', props);
      return request.getResponseField('PackageDetails.PackageID') as unknown as shapes.PackageID;
    }
    public get packageName(): shapes.PackageName {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'deletePackage',
          service: 'ES',
          outputPath: 'PackageDetails.PackageName',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'DeletePackage.PackageDetails.PackageName', props);
      return request.getResponseField('PackageDetails.PackageName') as unknown as shapes.PackageName;
    }
    public get packageType(): shapes.PackageType {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'deletePackage',
          service: 'ES',
          outputPath: 'PackageDetails.PackageType',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'DeletePackage.PackageDetails.PackageType', props);
      return request.getResponseField('PackageDetails.PackageType') as unknown as shapes.PackageType;
    }
    public get packageDescription(): shapes.PackageDescription {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'deletePackage',
          service: 'ES',
          outputPath: 'PackageDetails.PackageDescription',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'DeletePackage.PackageDetails.PackageDescription', props);
      return request.getResponseField('PackageDetails.PackageDescription') as unknown as shapes.PackageDescription;
    }
    public get packageStatus(): shapes.PackageStatus {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'deletePackage',
          service: 'ES',
          outputPath: 'PackageDetails.PackageStatus',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'DeletePackage.PackageDetails.PackageStatus', props);
      return request.getResponseField('PackageDetails.PackageStatus') as unknown as shapes.PackageStatus;
    }
    public get createdAt(): shapes.CreatedAt {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'deletePackage',
          service: 'ES',
          outputPath: 'PackageDetails.CreatedAt',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'DeletePackage.PackageDetails.CreatedAt', props);
      return request.getResponseField('PackageDetails.CreatedAt') as unknown as shapes.CreatedAt;
    }
    public get lastUpdatedAt(): shapes.LastUpdated {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'deletePackage',
          service: 'ES',
          outputPath: 'PackageDetails.LastUpdatedAt',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'DeletePackage.PackageDetails.LastUpdatedAt', props);
      return request.getResponseField('PackageDetails.LastUpdatedAt') as unknown as shapes.LastUpdated;
    }
    public get availablePackageVersion(): shapes.PackageVersion {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'deletePackage',
          service: 'ES',
          outputPath: 'PackageDetails.AvailablePackageVersion',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'DeletePackage.PackageDetails.AvailablePackageVersion', props);
      return request.getResponseField('PackageDetails.AvailablePackageVersion') as unknown as shapes.PackageVersion;
    }
    static ErrorDetailsResponse = class {
      public get errorType(): shapes.ErrorType {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deletePackage',
            service: 'ES',
            outputPath: 'PackageDetails.ErrorDetails.ErrorType',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeletePackage.PackageDetails.ErrorDetails.ErrorType', props);
        return request.getResponseField('PackageDetails.ErrorDetails.ErrorType') as unknown as shapes.ErrorType;
      }
      public get errorMessage(): shapes.ErrorMessage {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'deletePackage',
            service: 'ES',
            outputPath: 'PackageDetails.ErrorDetails.ErrorMessage',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DeletePackage.PackageDetails.ErrorDetails.ErrorMessage', props);
        return request.getResponseField('PackageDetails.ErrorDetails.ErrorMessage') as unknown as shapes.ErrorMessage;
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get errorDetails(): InstanceType<typeof DeletePackageResponse.PackageDetailsResponse.ErrorDetailsResponse> {
      return new DeletePackageResponse.PackageDetailsResponse.ErrorDetailsResponse(this.scope, this.resources);
    }
    constructor(public scope: cdk.Construct, public readonly resources: string[]) {
    }
  }
  public get packageDetails(): InstanceType<typeof DeletePackageResponse.PackageDetailsResponse> {
    return new DeletePackageResponse.PackageDetailsResponse(this.scope, this.resources);
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], input: shapes.DeletePackageRequest) {
  }
}
export class DescribeElasticsearchDomainResponse {
  static DomainStatusResponse = class {
    public get domainId(): shapes.DomainId {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'describeElasticsearchDomain',
          service: 'ES',
          outputPath: 'DomainStatus.DomainId',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.DomainId', props);
      return request.getResponseField('DomainStatus.DomainId') as unknown as shapes.DomainId;
    }
    public get domainName(): shapes.DomainName {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'describeElasticsearchDomain',
          service: 'ES',
          outputPath: 'DomainStatus.DomainName',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.DomainName', props);
      return request.getResponseField('DomainStatus.DomainName') as unknown as shapes.DomainName;
    }
    public get arn(): shapes.ARN {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'describeElasticsearchDomain',
          service: 'ES',
          outputPath: 'DomainStatus.ARN',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.ARN', props);
      return request.getResponseField('DomainStatus.ARN') as unknown as shapes.ARN;
    }
    public get created(): shapes.Boolean {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'describeElasticsearchDomain',
          service: 'ES',
          outputPath: 'DomainStatus.Created',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.Created', props);
      return request.getResponseField('DomainStatus.Created') as unknown as shapes.Boolean;
    }
    public get deleted(): shapes.Boolean {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'describeElasticsearchDomain',
          service: 'ES',
          outputPath: 'DomainStatus.Deleted',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.Deleted', props);
      return request.getResponseField('DomainStatus.Deleted') as unknown as shapes.Boolean;
    }
    public get endpoint(): shapes.ServiceUrl {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'describeElasticsearchDomain',
          service: 'ES',
          outputPath: 'DomainStatus.Endpoint',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.Endpoint', props);
      return request.getResponseField('DomainStatus.Endpoint') as unknown as shapes.ServiceUrl;
    }
    public get endpoints(): shapes.EndpointsMap {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'describeElasticsearchDomain',
          service: 'ES',
          outputPath: 'DomainStatus.Endpoints',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.Endpoints', props);
      return request.getResponseField('DomainStatus.Endpoints') as unknown as shapes.EndpointsMap;
    }
    public get processing(): shapes.Boolean {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'describeElasticsearchDomain',
          service: 'ES',
          outputPath: 'DomainStatus.Processing',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.Processing', props);
      return request.getResponseField('DomainStatus.Processing') as unknown as shapes.Boolean;
    }
    public get upgradeProcessing(): shapes.Boolean {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'describeElasticsearchDomain',
          service: 'ES',
          outputPath: 'DomainStatus.UpgradeProcessing',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.UpgradeProcessing', props);
      return request.getResponseField('DomainStatus.UpgradeProcessing') as unknown as shapes.Boolean;
    }
    public get elasticsearchVersion(): shapes.ElasticsearchVersionString {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'describeElasticsearchDomain',
          service: 'ES',
          outputPath: 'DomainStatus.ElasticsearchVersion',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.ElasticsearchVersion', props);
      return request.getResponseField('DomainStatus.ElasticsearchVersion') as unknown as shapes.ElasticsearchVersionString;
    }
    static ElasticsearchClusterConfigResponse = class {
      public get instanceType(): shapes.ESPartitionInstanceType {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'describeElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ElasticsearchClusterConfig.InstanceType',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.ElasticsearchClusterConfig.InstanceType', props);
        return request.getResponseField('DomainStatus.ElasticsearchClusterConfig.InstanceType') as unknown as shapes.ESPartitionInstanceType;
      }
      public get instanceCount(): shapes.IntegerClass {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'describeElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ElasticsearchClusterConfig.InstanceCount',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.ElasticsearchClusterConfig.InstanceCount', props);
        return request.getResponseField('DomainStatus.ElasticsearchClusterConfig.InstanceCount') as unknown as shapes.IntegerClass;
      }
      public get dedicatedMasterEnabled(): shapes.Boolean {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'describeElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ElasticsearchClusterConfig.DedicatedMasterEnabled',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.ElasticsearchClusterConfig.DedicatedMasterEnabled', props);
        return request.getResponseField('DomainStatus.ElasticsearchClusterConfig.DedicatedMasterEnabled') as unknown as shapes.Boolean;
      }
      public get zoneAwarenessEnabled(): shapes.Boolean {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'describeElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ElasticsearchClusterConfig.ZoneAwarenessEnabled',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.ElasticsearchClusterConfig.ZoneAwarenessEnabled', props);
        return request.getResponseField('DomainStatus.ElasticsearchClusterConfig.ZoneAwarenessEnabled') as unknown as shapes.Boolean;
      }
      static ZoneAwarenessConfigResponse = class {
        public get availabilityZoneCount(): shapes.IntegerClass {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomain',
              service: 'ES',
              outputPath: 'DomainStatus.ElasticsearchClusterConfig.ZoneAwarenessConfig.AvailabilityZoneCount',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.ElasticsearchClusterConfig.ZoneAwarenessConfig.AvailabilityZoneCount', props);
          return request.getResponseField('DomainStatus.ElasticsearchClusterConfig.ZoneAwarenessConfig.AvailabilityZoneCount') as unknown as shapes.IntegerClass;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get zoneAwarenessConfig(): InstanceType<typeof DescribeElasticsearchDomainResponse.DomainStatusResponse.ElasticsearchClusterConfigResponse.ZoneAwarenessConfigResponse> {
        return new DescribeElasticsearchDomainResponse.DomainStatusResponse.ElasticsearchClusterConfigResponse.ZoneAwarenessConfigResponse(this.scope, this.resources);
      }
      public get dedicatedMasterType(): shapes.ESPartitionInstanceType {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'describeElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ElasticsearchClusterConfig.DedicatedMasterType',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.ElasticsearchClusterConfig.DedicatedMasterType', props);
        return request.getResponseField('DomainStatus.ElasticsearchClusterConfig.DedicatedMasterType') as unknown as shapes.ESPartitionInstanceType;
      }
      public get dedicatedMasterCount(): shapes.IntegerClass {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'describeElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ElasticsearchClusterConfig.DedicatedMasterCount',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.ElasticsearchClusterConfig.DedicatedMasterCount', props);
        return request.getResponseField('DomainStatus.ElasticsearchClusterConfig.DedicatedMasterCount') as unknown as shapes.IntegerClass;
      }
      public get warmEnabled(): shapes.Boolean {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'describeElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ElasticsearchClusterConfig.WarmEnabled',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.ElasticsearchClusterConfig.WarmEnabled', props);
        return request.getResponseField('DomainStatus.ElasticsearchClusterConfig.WarmEnabled') as unknown as shapes.Boolean;
      }
      public get warmType(): shapes.ESWarmPartitionInstanceType {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'describeElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ElasticsearchClusterConfig.WarmType',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.ElasticsearchClusterConfig.WarmType', props);
        return request.getResponseField('DomainStatus.ElasticsearchClusterConfig.WarmType') as unknown as shapes.ESWarmPartitionInstanceType;
      }
      public get warmCount(): shapes.IntegerClass {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'describeElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ElasticsearchClusterConfig.WarmCount',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.ElasticsearchClusterConfig.WarmCount', props);
        return request.getResponseField('DomainStatus.ElasticsearchClusterConfig.WarmCount') as unknown as shapes.IntegerClass;
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get elasticsearchClusterConfig(): InstanceType<typeof DescribeElasticsearchDomainResponse.DomainStatusResponse.ElasticsearchClusterConfigResponse> {
      return new DescribeElasticsearchDomainResponse.DomainStatusResponse.ElasticsearchClusterConfigResponse(this.scope, this.resources);
    }
    static EBSOptionsResponse = class {
      public get ebsEnabled(): shapes.Boolean {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'describeElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.EBSOptions.EBSEnabled',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.EBSOptions.EBSEnabled', props);
        return request.getResponseField('DomainStatus.EBSOptions.EBSEnabled') as unknown as shapes.Boolean;
      }
      public get volumeType(): shapes.VolumeType {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'describeElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.EBSOptions.VolumeType',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.EBSOptions.VolumeType', props);
        return request.getResponseField('DomainStatus.EBSOptions.VolumeType') as unknown as shapes.VolumeType;
      }
      public get volumeSize(): shapes.IntegerClass {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'describeElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.EBSOptions.VolumeSize',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.EBSOptions.VolumeSize', props);
        return request.getResponseField('DomainStatus.EBSOptions.VolumeSize') as unknown as shapes.IntegerClass;
      }
      public get iops(): shapes.IntegerClass {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'describeElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.EBSOptions.Iops',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.EBSOptions.Iops', props);
        return request.getResponseField('DomainStatus.EBSOptions.Iops') as unknown as shapes.IntegerClass;
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get ebsOptions(): InstanceType<typeof DescribeElasticsearchDomainResponse.DomainStatusResponse.EBSOptionsResponse> {
      return new DescribeElasticsearchDomainResponse.DomainStatusResponse.EBSOptionsResponse(this.scope, this.resources);
    }
    public get accessPolicies(): shapes.PolicyDocument {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'describeElasticsearchDomain',
          service: 'ES',
          outputPath: 'DomainStatus.AccessPolicies',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.AccessPolicies', props);
      return request.getResponseField('DomainStatus.AccessPolicies') as unknown as shapes.PolicyDocument;
    }
    static SnapshotOptionsResponse = class {
      public get automatedSnapshotStartHour(): shapes.IntegerClass {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'describeElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.SnapshotOptions.AutomatedSnapshotStartHour',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.SnapshotOptions.AutomatedSnapshotStartHour', props);
        return request.getResponseField('DomainStatus.SnapshotOptions.AutomatedSnapshotStartHour') as unknown as shapes.IntegerClass;
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get snapshotOptions(): InstanceType<typeof DescribeElasticsearchDomainResponse.DomainStatusResponse.SnapshotOptionsResponse> {
      return new DescribeElasticsearchDomainResponse.DomainStatusResponse.SnapshotOptionsResponse(this.scope, this.resources);
    }
    static VPCOptionsResponse = class {
      public get vpcId(): shapes.String {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'describeElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.VPCOptions.VPCId',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.VPCOptions.VPCId', props);
        return request.getResponseField('DomainStatus.VPCOptions.VPCId') as unknown as shapes.String;
      }
      public get subnetIds(): shapes.StringList {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'describeElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.VPCOptions.SubnetIds',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.VPCOptions.SubnetIds', props);
        return request.getResponseField('DomainStatus.VPCOptions.SubnetIds') as unknown as shapes.StringList;
      }
      public get availabilityZones(): shapes.StringList {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'describeElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.VPCOptions.AvailabilityZones',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.VPCOptions.AvailabilityZones', props);
        return request.getResponseField('DomainStatus.VPCOptions.AvailabilityZones') as unknown as shapes.StringList;
      }
      public get securityGroupIds(): shapes.StringList {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'describeElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.VPCOptions.SecurityGroupIds',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.VPCOptions.SecurityGroupIds', props);
        return request.getResponseField('DomainStatus.VPCOptions.SecurityGroupIds') as unknown as shapes.StringList;
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get vpcOptions(): InstanceType<typeof DescribeElasticsearchDomainResponse.DomainStatusResponse.VPCOptionsResponse> {
      return new DescribeElasticsearchDomainResponse.DomainStatusResponse.VPCOptionsResponse(this.scope, this.resources);
    }
    static CognitoOptionsResponse = class {
      public get enabled(): shapes.Boolean {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'describeElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.CognitoOptions.Enabled',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.CognitoOptions.Enabled', props);
        return request.getResponseField('DomainStatus.CognitoOptions.Enabled') as unknown as shapes.Boolean;
      }
      public get userPoolId(): shapes.UserPoolId {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'describeElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.CognitoOptions.UserPoolId',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.CognitoOptions.UserPoolId', props);
        return request.getResponseField('DomainStatus.CognitoOptions.UserPoolId') as unknown as shapes.UserPoolId;
      }
      public get identityPoolId(): shapes.IdentityPoolId {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'describeElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.CognitoOptions.IdentityPoolId',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.CognitoOptions.IdentityPoolId', props);
        return request.getResponseField('DomainStatus.CognitoOptions.IdentityPoolId') as unknown as shapes.IdentityPoolId;
      }
      public get roleArn(): shapes.RoleArn {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'describeElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.CognitoOptions.RoleArn',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.CognitoOptions.RoleArn', props);
        return request.getResponseField('DomainStatus.CognitoOptions.RoleArn') as unknown as shapes.RoleArn;
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get cognitoOptions(): InstanceType<typeof DescribeElasticsearchDomainResponse.DomainStatusResponse.CognitoOptionsResponse> {
      return new DescribeElasticsearchDomainResponse.DomainStatusResponse.CognitoOptionsResponse(this.scope, this.resources);
    }
    static EncryptionAtRestOptionsResponse = class {
      public get enabled(): shapes.Boolean {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'describeElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.EncryptionAtRestOptions.Enabled',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.EncryptionAtRestOptions.Enabled', props);
        return request.getResponseField('DomainStatus.EncryptionAtRestOptions.Enabled') as unknown as shapes.Boolean;
      }
      public get kmsKeyId(): shapes.KmsKeyId {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'describeElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.EncryptionAtRestOptions.KmsKeyId',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.EncryptionAtRestOptions.KmsKeyId', props);
        return request.getResponseField('DomainStatus.EncryptionAtRestOptions.KmsKeyId') as unknown as shapes.KmsKeyId;
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get encryptionAtRestOptions(): InstanceType<typeof DescribeElasticsearchDomainResponse.DomainStatusResponse.EncryptionAtRestOptionsResponse> {
      return new DescribeElasticsearchDomainResponse.DomainStatusResponse.EncryptionAtRestOptionsResponse(this.scope, this.resources);
    }
    static NodeToNodeEncryptionOptionsResponse = class {
      public get enabled(): shapes.Boolean {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'describeElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.NodeToNodeEncryptionOptions.Enabled',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.NodeToNodeEncryptionOptions.Enabled', props);
        return request.getResponseField('DomainStatus.NodeToNodeEncryptionOptions.Enabled') as unknown as shapes.Boolean;
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get nodeToNodeEncryptionOptions(): InstanceType<typeof DescribeElasticsearchDomainResponse.DomainStatusResponse.NodeToNodeEncryptionOptionsResponse> {
      return new DescribeElasticsearchDomainResponse.DomainStatusResponse.NodeToNodeEncryptionOptionsResponse(this.scope, this.resources);
    }
    public get advancedOptions(): shapes.AdvancedOptions {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'describeElasticsearchDomain',
          service: 'ES',
          outputPath: 'DomainStatus.AdvancedOptions',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.AdvancedOptions', props);
      return request.getResponseField('DomainStatus.AdvancedOptions') as unknown as shapes.AdvancedOptions;
    }
    public get logPublishingOptions(): shapes.LogPublishingOptions {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'describeElasticsearchDomain',
          service: 'ES',
          outputPath: 'DomainStatus.LogPublishingOptions',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.LogPublishingOptions', props);
      return request.getResponseField('DomainStatus.LogPublishingOptions') as unknown as shapes.LogPublishingOptions;
    }
    static ServiceSoftwareOptionsResponse = class {
      public get currentVersion(): shapes.String {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'describeElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ServiceSoftwareOptions.CurrentVersion',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.ServiceSoftwareOptions.CurrentVersion', props);
        return request.getResponseField('DomainStatus.ServiceSoftwareOptions.CurrentVersion') as unknown as shapes.String;
      }
      public get newVersion(): shapes.String {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'describeElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ServiceSoftwareOptions.NewVersion',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.ServiceSoftwareOptions.NewVersion', props);
        return request.getResponseField('DomainStatus.ServiceSoftwareOptions.NewVersion') as unknown as shapes.String;
      }
      public get updateAvailable(): shapes.Boolean {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'describeElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ServiceSoftwareOptions.UpdateAvailable',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.ServiceSoftwareOptions.UpdateAvailable', props);
        return request.getResponseField('DomainStatus.ServiceSoftwareOptions.UpdateAvailable') as unknown as shapes.Boolean;
      }
      public get cancellable(): shapes.Boolean {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'describeElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ServiceSoftwareOptions.Cancellable',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.ServiceSoftwareOptions.Cancellable', props);
        return request.getResponseField('DomainStatus.ServiceSoftwareOptions.Cancellable') as unknown as shapes.Boolean;
      }
      public get updateStatus(): shapes.DeploymentStatus {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'describeElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ServiceSoftwareOptions.UpdateStatus',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.ServiceSoftwareOptions.UpdateStatus', props);
        return request.getResponseField('DomainStatus.ServiceSoftwareOptions.UpdateStatus') as unknown as shapes.DeploymentStatus;
      }
      public get description(): shapes.String {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'describeElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ServiceSoftwareOptions.Description',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.ServiceSoftwareOptions.Description', props);
        return request.getResponseField('DomainStatus.ServiceSoftwareOptions.Description') as unknown as shapes.String;
      }
      public get automatedUpdateDate(): shapes.DeploymentCloseDateTimeStamp {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'describeElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ServiceSoftwareOptions.AutomatedUpdateDate',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.ServiceSoftwareOptions.AutomatedUpdateDate', props);
        return request.getResponseField('DomainStatus.ServiceSoftwareOptions.AutomatedUpdateDate') as unknown as shapes.DeploymentCloseDateTimeStamp;
      }
      public get optionalDeployment(): shapes.Boolean {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'describeElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.ServiceSoftwareOptions.OptionalDeployment',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.ServiceSoftwareOptions.OptionalDeployment', props);
        return request.getResponseField('DomainStatus.ServiceSoftwareOptions.OptionalDeployment') as unknown as shapes.Boolean;
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get serviceSoftwareOptions(): InstanceType<typeof DescribeElasticsearchDomainResponse.DomainStatusResponse.ServiceSoftwareOptionsResponse> {
      return new DescribeElasticsearchDomainResponse.DomainStatusResponse.ServiceSoftwareOptionsResponse(this.scope, this.resources);
    }
    static DomainEndpointOptionsResponse = class {
      public get enforceHttps(): shapes.Boolean {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'describeElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.DomainEndpointOptions.EnforceHTTPS',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.DomainEndpointOptions.EnforceHTTPS', props);
        return request.getResponseField('DomainStatus.DomainEndpointOptions.EnforceHTTPS') as unknown as shapes.Boolean;
      }
      public get tlsSecurityPolicy(): shapes.TLSSecurityPolicy {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'describeElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.DomainEndpointOptions.TLSSecurityPolicy',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.DomainEndpointOptions.TLSSecurityPolicy', props);
        return request.getResponseField('DomainStatus.DomainEndpointOptions.TLSSecurityPolicy') as unknown as shapes.TLSSecurityPolicy;
      }
      public get customEndpointEnabled(): shapes.Boolean {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'describeElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.DomainEndpointOptions.CustomEndpointEnabled',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.DomainEndpointOptions.CustomEndpointEnabled', props);
        return request.getResponseField('DomainStatus.DomainEndpointOptions.CustomEndpointEnabled') as unknown as shapes.Boolean;
      }
      public get customEndpoint(): shapes.DomainNameFqdn {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'describeElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.DomainEndpointOptions.CustomEndpoint',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.DomainEndpointOptions.CustomEndpoint', props);
        return request.getResponseField('DomainStatus.DomainEndpointOptions.CustomEndpoint') as unknown as shapes.DomainNameFqdn;
      }
      public get customEndpointCertificateArn(): shapes.ARN {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'describeElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.DomainEndpointOptions.CustomEndpointCertificateArn',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.DomainEndpointOptions.CustomEndpointCertificateArn', props);
        return request.getResponseField('DomainStatus.DomainEndpointOptions.CustomEndpointCertificateArn') as unknown as shapes.ARN;
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get domainEndpointOptions(): InstanceType<typeof DescribeElasticsearchDomainResponse.DomainStatusResponse.DomainEndpointOptionsResponse> {
      return new DescribeElasticsearchDomainResponse.DomainStatusResponse.DomainEndpointOptionsResponse(this.scope, this.resources);
    }
    static AdvancedSecurityOptionsResponse = class {
      public get enabled(): shapes.Boolean {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'describeElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.AdvancedSecurityOptions.Enabled',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.AdvancedSecurityOptions.Enabled', props);
        return request.getResponseField('DomainStatus.AdvancedSecurityOptions.Enabled') as unknown as shapes.Boolean;
      }
      public get internalUserDatabaseEnabled(): shapes.Boolean {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'describeElasticsearchDomain',
            service: 'ES',
            outputPath: 'DomainStatus.AdvancedSecurityOptions.InternalUserDatabaseEnabled',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.AdvancedSecurityOptions.InternalUserDatabaseEnabled', props);
        return request.getResponseField('DomainStatus.AdvancedSecurityOptions.InternalUserDatabaseEnabled') as unknown as shapes.Boolean;
      }
      static SAMLOptionsResponse = class {
        public get enabled(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomain',
              service: 'ES',
              outputPath: 'DomainStatus.AdvancedSecurityOptions.SAMLOptions.Enabled',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.AdvancedSecurityOptions.SAMLOptions.Enabled', props);
          return request.getResponseField('DomainStatus.AdvancedSecurityOptions.SAMLOptions.Enabled') as unknown as shapes.Boolean;
        }
        static IdpResponse = class {
          public get metadataContent(): shapes.SAMLMetadata {
            const props: cr.AwsCustomResourceProps = {
              onUpdate: {
                action: 'describeElasticsearchDomain',
                service: 'ES',
                outputPath: 'DomainStatus.AdvancedSecurityOptions.SAMLOptions.Idp.MetadataContent',
              },
              policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
            };
            const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.AdvancedSecurityOptions.SAMLOptions.Idp.MetadataContent', props);
            return request.getResponseField('DomainStatus.AdvancedSecurityOptions.SAMLOptions.Idp.MetadataContent') as unknown as shapes.SAMLMetadata;
          }
          public get entityId(): shapes.SAMLEntityId {
            const props: cr.AwsCustomResourceProps = {
              onUpdate: {
                action: 'describeElasticsearchDomain',
                service: 'ES',
                outputPath: 'DomainStatus.AdvancedSecurityOptions.SAMLOptions.Idp.EntityId',
              },
              policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
            };
            const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.AdvancedSecurityOptions.SAMLOptions.Idp.EntityId', props);
            return request.getResponseField('DomainStatus.AdvancedSecurityOptions.SAMLOptions.Idp.EntityId') as unknown as shapes.SAMLEntityId;
          }
          constructor(public scope: cdk.Construct, public readonly resources: string[]) {
          }
        }
        public get idp(): InstanceType<typeof DescribeElasticsearchDomainResponse.DomainStatusResponse.AdvancedSecurityOptionsResponse.SAMLOptionsResponse.IdpResponse> {
          return new DescribeElasticsearchDomainResponse.DomainStatusResponse.AdvancedSecurityOptionsResponse.SAMLOptionsResponse.IdpResponse(this.scope, this.resources);
        }
        public get subjectKey(): shapes.String {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomain',
              service: 'ES',
              outputPath: 'DomainStatus.AdvancedSecurityOptions.SAMLOptions.SubjectKey',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.AdvancedSecurityOptions.SAMLOptions.SubjectKey', props);
          return request.getResponseField('DomainStatus.AdvancedSecurityOptions.SAMLOptions.SubjectKey') as unknown as shapes.String;
        }
        public get rolesKey(): shapes.String {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomain',
              service: 'ES',
              outputPath: 'DomainStatus.AdvancedSecurityOptions.SAMLOptions.RolesKey',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.AdvancedSecurityOptions.SAMLOptions.RolesKey', props);
          return request.getResponseField('DomainStatus.AdvancedSecurityOptions.SAMLOptions.RolesKey') as unknown as shapes.String;
        }
        public get sessionTimeoutMinutes(): shapes.IntegerClass {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomain',
              service: 'ES',
              outputPath: 'DomainStatus.AdvancedSecurityOptions.SAMLOptions.SessionTimeoutMinutes',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomain.DomainStatus.AdvancedSecurityOptions.SAMLOptions.SessionTimeoutMinutes', props);
          return request.getResponseField('DomainStatus.AdvancedSecurityOptions.SAMLOptions.SessionTimeoutMinutes') as unknown as shapes.IntegerClass;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get samlOptions(): InstanceType<typeof DescribeElasticsearchDomainResponse.DomainStatusResponse.AdvancedSecurityOptionsResponse.SAMLOptionsResponse> {
        return new DescribeElasticsearchDomainResponse.DomainStatusResponse.AdvancedSecurityOptionsResponse.SAMLOptionsResponse(this.scope, this.resources);
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get advancedSecurityOptions(): InstanceType<typeof DescribeElasticsearchDomainResponse.DomainStatusResponse.AdvancedSecurityOptionsResponse> {
      return new DescribeElasticsearchDomainResponse.DomainStatusResponse.AdvancedSecurityOptionsResponse(this.scope, this.resources);
    }
    constructor(public scope: cdk.Construct, public readonly resources: string[]) {
    }
  }
  public get domainStatus(): InstanceType<typeof DescribeElasticsearchDomainResponse.DomainStatusResponse> {
    return new DescribeElasticsearchDomainResponse.DomainStatusResponse(this.scope, this.resources);
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], input: shapes.DescribeElasticsearchDomainRequest) {
  }
}
export class DescribeElasticsearchDomainConfigResponse {
  static DomainConfigResponse = class {
    static ElasticsearchVersionResponse = class {
      public get options(): shapes.ElasticsearchVersionString {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'describeElasticsearchDomainConfig',
            service: 'ES',
            outputPath: 'DomainConfig.ElasticsearchVersion.Options',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.ElasticsearchVersion.Options', props);
        return request.getResponseField('DomainConfig.ElasticsearchVersion.Options') as unknown as shapes.ElasticsearchVersionString;
      }
      static StatusResponse = class {
        public get creationDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.ElasticsearchVersion.Status.CreationDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.ElasticsearchVersion.Status.CreationDate', props);
          return request.getResponseField('DomainConfig.ElasticsearchVersion.Status.CreationDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.ElasticsearchVersion.Status.UpdateDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.ElasticsearchVersion.Status.UpdateDate', props);
          return request.getResponseField('DomainConfig.ElasticsearchVersion.Status.UpdateDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateVersion(): shapes.UIntValue {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.ElasticsearchVersion.Status.UpdateVersion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.ElasticsearchVersion.Status.UpdateVersion', props);
          return request.getResponseField('DomainConfig.ElasticsearchVersion.Status.UpdateVersion') as unknown as shapes.UIntValue;
        }
        public get state(): shapes.OptionState {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.ElasticsearchVersion.Status.State',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.ElasticsearchVersion.Status.State', props);
          return request.getResponseField('DomainConfig.ElasticsearchVersion.Status.State') as unknown as shapes.OptionState;
        }
        public get pendingDeletion(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.ElasticsearchVersion.Status.PendingDeletion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.ElasticsearchVersion.Status.PendingDeletion', props);
          return request.getResponseField('DomainConfig.ElasticsearchVersion.Status.PendingDeletion') as unknown as shapes.Boolean;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get status(): InstanceType<typeof DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.ElasticsearchVersionResponse.StatusResponse> {
        return new DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.ElasticsearchVersionResponse.StatusResponse(this.scope, this.resources);
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get elasticsearchVersion(): InstanceType<typeof DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.ElasticsearchVersionResponse> {
      return new DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.ElasticsearchVersionResponse(this.scope, this.resources);
    }
    static ElasticsearchClusterConfigResponse = class {
      static OptionsResponse = class {
        public get instanceType(): shapes.ESPartitionInstanceType {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.ElasticsearchClusterConfig.Options.InstanceType',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.ElasticsearchClusterConfig.Options.InstanceType', props);
          return request.getResponseField('DomainConfig.ElasticsearchClusterConfig.Options.InstanceType') as unknown as shapes.ESPartitionInstanceType;
        }
        public get instanceCount(): shapes.IntegerClass {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.ElasticsearchClusterConfig.Options.InstanceCount',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.ElasticsearchClusterConfig.Options.InstanceCount', props);
          return request.getResponseField('DomainConfig.ElasticsearchClusterConfig.Options.InstanceCount') as unknown as shapes.IntegerClass;
        }
        public get dedicatedMasterEnabled(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.ElasticsearchClusterConfig.Options.DedicatedMasterEnabled',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.ElasticsearchClusterConfig.Options.DedicatedMasterEnabled', props);
          return request.getResponseField('DomainConfig.ElasticsearchClusterConfig.Options.DedicatedMasterEnabled') as unknown as shapes.Boolean;
        }
        public get zoneAwarenessEnabled(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.ElasticsearchClusterConfig.Options.ZoneAwarenessEnabled',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.ElasticsearchClusterConfig.Options.ZoneAwarenessEnabled', props);
          return request.getResponseField('DomainConfig.ElasticsearchClusterConfig.Options.ZoneAwarenessEnabled') as unknown as shapes.Boolean;
        }
        static ZoneAwarenessConfigResponse = class {
          public get availabilityZoneCount(): shapes.IntegerClass {
            const props: cr.AwsCustomResourceProps = {
              onUpdate: {
                action: 'describeElasticsearchDomainConfig',
                service: 'ES',
                outputPath: 'DomainConfig.ElasticsearchClusterConfig.Options.ZoneAwarenessConfig.AvailabilityZoneCount',
              },
              policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
            };
            const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.ElasticsearchClusterConfig.Options.ZoneAwarenessConfig.AvailabilityZoneCount', props);
            return request.getResponseField('DomainConfig.ElasticsearchClusterConfig.Options.ZoneAwarenessConfig.AvailabilityZoneCount') as unknown as shapes.IntegerClass;
          }
          constructor(public scope: cdk.Construct, public readonly resources: string[]) {
          }
        }
        public get zoneAwarenessConfig(): InstanceType<typeof DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.ElasticsearchClusterConfigResponse.OptionsResponse.ZoneAwarenessConfigResponse> {
          return new DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.ElasticsearchClusterConfigResponse.OptionsResponse.ZoneAwarenessConfigResponse(this.scope, this.resources);
        }
        public get dedicatedMasterType(): shapes.ESPartitionInstanceType {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.ElasticsearchClusterConfig.Options.DedicatedMasterType',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.ElasticsearchClusterConfig.Options.DedicatedMasterType', props);
          return request.getResponseField('DomainConfig.ElasticsearchClusterConfig.Options.DedicatedMasterType') as unknown as shapes.ESPartitionInstanceType;
        }
        public get dedicatedMasterCount(): shapes.IntegerClass {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.ElasticsearchClusterConfig.Options.DedicatedMasterCount',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.ElasticsearchClusterConfig.Options.DedicatedMasterCount', props);
          return request.getResponseField('DomainConfig.ElasticsearchClusterConfig.Options.DedicatedMasterCount') as unknown as shapes.IntegerClass;
        }
        public get warmEnabled(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.ElasticsearchClusterConfig.Options.WarmEnabled',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.ElasticsearchClusterConfig.Options.WarmEnabled', props);
          return request.getResponseField('DomainConfig.ElasticsearchClusterConfig.Options.WarmEnabled') as unknown as shapes.Boolean;
        }
        public get warmType(): shapes.ESWarmPartitionInstanceType {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.ElasticsearchClusterConfig.Options.WarmType',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.ElasticsearchClusterConfig.Options.WarmType', props);
          return request.getResponseField('DomainConfig.ElasticsearchClusterConfig.Options.WarmType') as unknown as shapes.ESWarmPartitionInstanceType;
        }
        public get warmCount(): shapes.IntegerClass {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.ElasticsearchClusterConfig.Options.WarmCount',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.ElasticsearchClusterConfig.Options.WarmCount', props);
          return request.getResponseField('DomainConfig.ElasticsearchClusterConfig.Options.WarmCount') as unknown as shapes.IntegerClass;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get options(): InstanceType<typeof DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.ElasticsearchClusterConfigResponse.OptionsResponse> {
        return new DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.ElasticsearchClusterConfigResponse.OptionsResponse(this.scope, this.resources);
      }
      static StatusResponse = class {
        public get creationDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.ElasticsearchClusterConfig.Status.CreationDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.ElasticsearchClusterConfig.Status.CreationDate', props);
          return request.getResponseField('DomainConfig.ElasticsearchClusterConfig.Status.CreationDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.ElasticsearchClusterConfig.Status.UpdateDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.ElasticsearchClusterConfig.Status.UpdateDate', props);
          return request.getResponseField('DomainConfig.ElasticsearchClusterConfig.Status.UpdateDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateVersion(): shapes.UIntValue {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.ElasticsearchClusterConfig.Status.UpdateVersion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.ElasticsearchClusterConfig.Status.UpdateVersion', props);
          return request.getResponseField('DomainConfig.ElasticsearchClusterConfig.Status.UpdateVersion') as unknown as shapes.UIntValue;
        }
        public get state(): shapes.OptionState {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.ElasticsearchClusterConfig.Status.State',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.ElasticsearchClusterConfig.Status.State', props);
          return request.getResponseField('DomainConfig.ElasticsearchClusterConfig.Status.State') as unknown as shapes.OptionState;
        }
        public get pendingDeletion(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.ElasticsearchClusterConfig.Status.PendingDeletion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.ElasticsearchClusterConfig.Status.PendingDeletion', props);
          return request.getResponseField('DomainConfig.ElasticsearchClusterConfig.Status.PendingDeletion') as unknown as shapes.Boolean;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get status(): InstanceType<typeof DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.ElasticsearchClusterConfigResponse.StatusResponse> {
        return new DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.ElasticsearchClusterConfigResponse.StatusResponse(this.scope, this.resources);
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get elasticsearchClusterConfig(): InstanceType<typeof DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.ElasticsearchClusterConfigResponse> {
      return new DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.ElasticsearchClusterConfigResponse(this.scope, this.resources);
    }
    static EBSOptionsResponse = class {
      static OptionsResponse = class {
        public get ebsEnabled(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.EBSOptions.Options.EBSEnabled',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.EBSOptions.Options.EBSEnabled', props);
          return request.getResponseField('DomainConfig.EBSOptions.Options.EBSEnabled') as unknown as shapes.Boolean;
        }
        public get volumeType(): shapes.VolumeType {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.EBSOptions.Options.VolumeType',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.EBSOptions.Options.VolumeType', props);
          return request.getResponseField('DomainConfig.EBSOptions.Options.VolumeType') as unknown as shapes.VolumeType;
        }
        public get volumeSize(): shapes.IntegerClass {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.EBSOptions.Options.VolumeSize',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.EBSOptions.Options.VolumeSize', props);
          return request.getResponseField('DomainConfig.EBSOptions.Options.VolumeSize') as unknown as shapes.IntegerClass;
        }
        public get iops(): shapes.IntegerClass {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.EBSOptions.Options.Iops',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.EBSOptions.Options.Iops', props);
          return request.getResponseField('DomainConfig.EBSOptions.Options.Iops') as unknown as shapes.IntegerClass;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get options(): InstanceType<typeof DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.EBSOptionsResponse.OptionsResponse> {
        return new DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.EBSOptionsResponse.OptionsResponse(this.scope, this.resources);
      }
      static StatusResponse = class {
        public get creationDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.EBSOptions.Status.CreationDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.EBSOptions.Status.CreationDate', props);
          return request.getResponseField('DomainConfig.EBSOptions.Status.CreationDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.EBSOptions.Status.UpdateDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.EBSOptions.Status.UpdateDate', props);
          return request.getResponseField('DomainConfig.EBSOptions.Status.UpdateDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateVersion(): shapes.UIntValue {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.EBSOptions.Status.UpdateVersion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.EBSOptions.Status.UpdateVersion', props);
          return request.getResponseField('DomainConfig.EBSOptions.Status.UpdateVersion') as unknown as shapes.UIntValue;
        }
        public get state(): shapes.OptionState {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.EBSOptions.Status.State',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.EBSOptions.Status.State', props);
          return request.getResponseField('DomainConfig.EBSOptions.Status.State') as unknown as shapes.OptionState;
        }
        public get pendingDeletion(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.EBSOptions.Status.PendingDeletion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.EBSOptions.Status.PendingDeletion', props);
          return request.getResponseField('DomainConfig.EBSOptions.Status.PendingDeletion') as unknown as shapes.Boolean;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get status(): InstanceType<typeof DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.EBSOptionsResponse.StatusResponse> {
        return new DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.EBSOptionsResponse.StatusResponse(this.scope, this.resources);
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get ebsOptions(): InstanceType<typeof DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.EBSOptionsResponse> {
      return new DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.EBSOptionsResponse(this.scope, this.resources);
    }
    static AccessPoliciesResponse = class {
      public get options(): shapes.PolicyDocument {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'describeElasticsearchDomainConfig',
            service: 'ES',
            outputPath: 'DomainConfig.AccessPolicies.Options',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.AccessPolicies.Options', props);
        return request.getResponseField('DomainConfig.AccessPolicies.Options') as unknown as shapes.PolicyDocument;
      }
      static StatusResponse = class {
        public get creationDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.AccessPolicies.Status.CreationDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.AccessPolicies.Status.CreationDate', props);
          return request.getResponseField('DomainConfig.AccessPolicies.Status.CreationDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.AccessPolicies.Status.UpdateDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.AccessPolicies.Status.UpdateDate', props);
          return request.getResponseField('DomainConfig.AccessPolicies.Status.UpdateDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateVersion(): shapes.UIntValue {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.AccessPolicies.Status.UpdateVersion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.AccessPolicies.Status.UpdateVersion', props);
          return request.getResponseField('DomainConfig.AccessPolicies.Status.UpdateVersion') as unknown as shapes.UIntValue;
        }
        public get state(): shapes.OptionState {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.AccessPolicies.Status.State',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.AccessPolicies.Status.State', props);
          return request.getResponseField('DomainConfig.AccessPolicies.Status.State') as unknown as shapes.OptionState;
        }
        public get pendingDeletion(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.AccessPolicies.Status.PendingDeletion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.AccessPolicies.Status.PendingDeletion', props);
          return request.getResponseField('DomainConfig.AccessPolicies.Status.PendingDeletion') as unknown as shapes.Boolean;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get status(): InstanceType<typeof DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.AccessPoliciesResponse.StatusResponse> {
        return new DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.AccessPoliciesResponse.StatusResponse(this.scope, this.resources);
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get accessPolicies(): InstanceType<typeof DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.AccessPoliciesResponse> {
      return new DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.AccessPoliciesResponse(this.scope, this.resources);
    }
    static SnapshotOptionsResponse = class {
      static OptionsResponse = class {
        public get automatedSnapshotStartHour(): shapes.IntegerClass {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.SnapshotOptions.Options.AutomatedSnapshotStartHour',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.SnapshotOptions.Options.AutomatedSnapshotStartHour', props);
          return request.getResponseField('DomainConfig.SnapshotOptions.Options.AutomatedSnapshotStartHour') as unknown as shapes.IntegerClass;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get options(): InstanceType<typeof DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.SnapshotOptionsResponse.OptionsResponse> {
        return new DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.SnapshotOptionsResponse.OptionsResponse(this.scope, this.resources);
      }
      static StatusResponse = class {
        public get creationDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.SnapshotOptions.Status.CreationDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.SnapshotOptions.Status.CreationDate', props);
          return request.getResponseField('DomainConfig.SnapshotOptions.Status.CreationDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.SnapshotOptions.Status.UpdateDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.SnapshotOptions.Status.UpdateDate', props);
          return request.getResponseField('DomainConfig.SnapshotOptions.Status.UpdateDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateVersion(): shapes.UIntValue {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.SnapshotOptions.Status.UpdateVersion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.SnapshotOptions.Status.UpdateVersion', props);
          return request.getResponseField('DomainConfig.SnapshotOptions.Status.UpdateVersion') as unknown as shapes.UIntValue;
        }
        public get state(): shapes.OptionState {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.SnapshotOptions.Status.State',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.SnapshotOptions.Status.State', props);
          return request.getResponseField('DomainConfig.SnapshotOptions.Status.State') as unknown as shapes.OptionState;
        }
        public get pendingDeletion(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.SnapshotOptions.Status.PendingDeletion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.SnapshotOptions.Status.PendingDeletion', props);
          return request.getResponseField('DomainConfig.SnapshotOptions.Status.PendingDeletion') as unknown as shapes.Boolean;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get status(): InstanceType<typeof DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.SnapshotOptionsResponse.StatusResponse> {
        return new DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.SnapshotOptionsResponse.StatusResponse(this.scope, this.resources);
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get snapshotOptions(): InstanceType<typeof DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.SnapshotOptionsResponse> {
      return new DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.SnapshotOptionsResponse(this.scope, this.resources);
    }
    static VPCOptionsResponse = class {
      static OptionsResponse = class {
        public get vpcId(): shapes.String {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.VPCOptions.Options.VPCId',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.VPCOptions.Options.VPCId', props);
          return request.getResponseField('DomainConfig.VPCOptions.Options.VPCId') as unknown as shapes.String;
        }
        public get subnetIds(): shapes.StringList {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.VPCOptions.Options.SubnetIds',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.VPCOptions.Options.SubnetIds', props);
          return request.getResponseField('DomainConfig.VPCOptions.Options.SubnetIds') as unknown as shapes.StringList;
        }
        public get availabilityZones(): shapes.StringList {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.VPCOptions.Options.AvailabilityZones',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.VPCOptions.Options.AvailabilityZones', props);
          return request.getResponseField('DomainConfig.VPCOptions.Options.AvailabilityZones') as unknown as shapes.StringList;
        }
        public get securityGroupIds(): shapes.StringList {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.VPCOptions.Options.SecurityGroupIds',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.VPCOptions.Options.SecurityGroupIds', props);
          return request.getResponseField('DomainConfig.VPCOptions.Options.SecurityGroupIds') as unknown as shapes.StringList;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get options(): InstanceType<typeof DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.VPCOptionsResponse.OptionsResponse> {
        return new DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.VPCOptionsResponse.OptionsResponse(this.scope, this.resources);
      }
      static StatusResponse = class {
        public get creationDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.VPCOptions.Status.CreationDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.VPCOptions.Status.CreationDate', props);
          return request.getResponseField('DomainConfig.VPCOptions.Status.CreationDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.VPCOptions.Status.UpdateDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.VPCOptions.Status.UpdateDate', props);
          return request.getResponseField('DomainConfig.VPCOptions.Status.UpdateDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateVersion(): shapes.UIntValue {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.VPCOptions.Status.UpdateVersion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.VPCOptions.Status.UpdateVersion', props);
          return request.getResponseField('DomainConfig.VPCOptions.Status.UpdateVersion') as unknown as shapes.UIntValue;
        }
        public get state(): shapes.OptionState {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.VPCOptions.Status.State',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.VPCOptions.Status.State', props);
          return request.getResponseField('DomainConfig.VPCOptions.Status.State') as unknown as shapes.OptionState;
        }
        public get pendingDeletion(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.VPCOptions.Status.PendingDeletion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.VPCOptions.Status.PendingDeletion', props);
          return request.getResponseField('DomainConfig.VPCOptions.Status.PendingDeletion') as unknown as shapes.Boolean;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get status(): InstanceType<typeof DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.VPCOptionsResponse.StatusResponse> {
        return new DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.VPCOptionsResponse.StatusResponse(this.scope, this.resources);
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get vpcOptions(): InstanceType<typeof DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.VPCOptionsResponse> {
      return new DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.VPCOptionsResponse(this.scope, this.resources);
    }
    static CognitoOptionsResponse = class {
      static OptionsResponse = class {
        public get enabled(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.CognitoOptions.Options.Enabled',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.CognitoOptions.Options.Enabled', props);
          return request.getResponseField('DomainConfig.CognitoOptions.Options.Enabled') as unknown as shapes.Boolean;
        }
        public get userPoolId(): shapes.UserPoolId {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.CognitoOptions.Options.UserPoolId',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.CognitoOptions.Options.UserPoolId', props);
          return request.getResponseField('DomainConfig.CognitoOptions.Options.UserPoolId') as unknown as shapes.UserPoolId;
        }
        public get identityPoolId(): shapes.IdentityPoolId {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.CognitoOptions.Options.IdentityPoolId',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.CognitoOptions.Options.IdentityPoolId', props);
          return request.getResponseField('DomainConfig.CognitoOptions.Options.IdentityPoolId') as unknown as shapes.IdentityPoolId;
        }
        public get roleArn(): shapes.RoleArn {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.CognitoOptions.Options.RoleArn',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.CognitoOptions.Options.RoleArn', props);
          return request.getResponseField('DomainConfig.CognitoOptions.Options.RoleArn') as unknown as shapes.RoleArn;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get options(): InstanceType<typeof DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.CognitoOptionsResponse.OptionsResponse> {
        return new DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.CognitoOptionsResponse.OptionsResponse(this.scope, this.resources);
      }
      static StatusResponse = class {
        public get creationDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.CognitoOptions.Status.CreationDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.CognitoOptions.Status.CreationDate', props);
          return request.getResponseField('DomainConfig.CognitoOptions.Status.CreationDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.CognitoOptions.Status.UpdateDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.CognitoOptions.Status.UpdateDate', props);
          return request.getResponseField('DomainConfig.CognitoOptions.Status.UpdateDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateVersion(): shapes.UIntValue {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.CognitoOptions.Status.UpdateVersion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.CognitoOptions.Status.UpdateVersion', props);
          return request.getResponseField('DomainConfig.CognitoOptions.Status.UpdateVersion') as unknown as shapes.UIntValue;
        }
        public get state(): shapes.OptionState {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.CognitoOptions.Status.State',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.CognitoOptions.Status.State', props);
          return request.getResponseField('DomainConfig.CognitoOptions.Status.State') as unknown as shapes.OptionState;
        }
        public get pendingDeletion(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.CognitoOptions.Status.PendingDeletion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.CognitoOptions.Status.PendingDeletion', props);
          return request.getResponseField('DomainConfig.CognitoOptions.Status.PendingDeletion') as unknown as shapes.Boolean;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get status(): InstanceType<typeof DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.CognitoOptionsResponse.StatusResponse> {
        return new DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.CognitoOptionsResponse.StatusResponse(this.scope, this.resources);
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get cognitoOptions(): InstanceType<typeof DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.CognitoOptionsResponse> {
      return new DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.CognitoOptionsResponse(this.scope, this.resources);
    }
    static EncryptionAtRestOptionsResponse = class {
      static OptionsResponse = class {
        public get enabled(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.EncryptionAtRestOptions.Options.Enabled',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.EncryptionAtRestOptions.Options.Enabled', props);
          return request.getResponseField('DomainConfig.EncryptionAtRestOptions.Options.Enabled') as unknown as shapes.Boolean;
        }
        public get kmsKeyId(): shapes.KmsKeyId {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.EncryptionAtRestOptions.Options.KmsKeyId',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.EncryptionAtRestOptions.Options.KmsKeyId', props);
          return request.getResponseField('DomainConfig.EncryptionAtRestOptions.Options.KmsKeyId') as unknown as shapes.KmsKeyId;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get options(): InstanceType<typeof DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.EncryptionAtRestOptionsResponse.OptionsResponse> {
        return new DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.EncryptionAtRestOptionsResponse.OptionsResponse(this.scope, this.resources);
      }
      static StatusResponse = class {
        public get creationDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.EncryptionAtRestOptions.Status.CreationDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.EncryptionAtRestOptions.Status.CreationDate', props);
          return request.getResponseField('DomainConfig.EncryptionAtRestOptions.Status.CreationDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.EncryptionAtRestOptions.Status.UpdateDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.EncryptionAtRestOptions.Status.UpdateDate', props);
          return request.getResponseField('DomainConfig.EncryptionAtRestOptions.Status.UpdateDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateVersion(): shapes.UIntValue {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.EncryptionAtRestOptions.Status.UpdateVersion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.EncryptionAtRestOptions.Status.UpdateVersion', props);
          return request.getResponseField('DomainConfig.EncryptionAtRestOptions.Status.UpdateVersion') as unknown as shapes.UIntValue;
        }
        public get state(): shapes.OptionState {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.EncryptionAtRestOptions.Status.State',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.EncryptionAtRestOptions.Status.State', props);
          return request.getResponseField('DomainConfig.EncryptionAtRestOptions.Status.State') as unknown as shapes.OptionState;
        }
        public get pendingDeletion(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.EncryptionAtRestOptions.Status.PendingDeletion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.EncryptionAtRestOptions.Status.PendingDeletion', props);
          return request.getResponseField('DomainConfig.EncryptionAtRestOptions.Status.PendingDeletion') as unknown as shapes.Boolean;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get status(): InstanceType<typeof DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.EncryptionAtRestOptionsResponse.StatusResponse> {
        return new DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.EncryptionAtRestOptionsResponse.StatusResponse(this.scope, this.resources);
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get encryptionAtRestOptions(): InstanceType<typeof DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.EncryptionAtRestOptionsResponse> {
      return new DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.EncryptionAtRestOptionsResponse(this.scope, this.resources);
    }
    static NodeToNodeEncryptionOptionsResponse = class {
      static OptionsResponse = class {
        public get enabled(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.NodeToNodeEncryptionOptions.Options.Enabled',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.NodeToNodeEncryptionOptions.Options.Enabled', props);
          return request.getResponseField('DomainConfig.NodeToNodeEncryptionOptions.Options.Enabled') as unknown as shapes.Boolean;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get options(): InstanceType<typeof DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.NodeToNodeEncryptionOptionsResponse.OptionsResponse> {
        return new DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.NodeToNodeEncryptionOptionsResponse.OptionsResponse(this.scope, this.resources);
      }
      static StatusResponse = class {
        public get creationDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.NodeToNodeEncryptionOptions.Status.CreationDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.NodeToNodeEncryptionOptions.Status.CreationDate', props);
          return request.getResponseField('DomainConfig.NodeToNodeEncryptionOptions.Status.CreationDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.NodeToNodeEncryptionOptions.Status.UpdateDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.NodeToNodeEncryptionOptions.Status.UpdateDate', props);
          return request.getResponseField('DomainConfig.NodeToNodeEncryptionOptions.Status.UpdateDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateVersion(): shapes.UIntValue {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.NodeToNodeEncryptionOptions.Status.UpdateVersion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.NodeToNodeEncryptionOptions.Status.UpdateVersion', props);
          return request.getResponseField('DomainConfig.NodeToNodeEncryptionOptions.Status.UpdateVersion') as unknown as shapes.UIntValue;
        }
        public get state(): shapes.OptionState {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.NodeToNodeEncryptionOptions.Status.State',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.NodeToNodeEncryptionOptions.Status.State', props);
          return request.getResponseField('DomainConfig.NodeToNodeEncryptionOptions.Status.State') as unknown as shapes.OptionState;
        }
        public get pendingDeletion(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.NodeToNodeEncryptionOptions.Status.PendingDeletion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.NodeToNodeEncryptionOptions.Status.PendingDeletion', props);
          return request.getResponseField('DomainConfig.NodeToNodeEncryptionOptions.Status.PendingDeletion') as unknown as shapes.Boolean;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get status(): InstanceType<typeof DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.NodeToNodeEncryptionOptionsResponse.StatusResponse> {
        return new DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.NodeToNodeEncryptionOptionsResponse.StatusResponse(this.scope, this.resources);
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get nodeToNodeEncryptionOptions(): InstanceType<typeof DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.NodeToNodeEncryptionOptionsResponse> {
      return new DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.NodeToNodeEncryptionOptionsResponse(this.scope, this.resources);
    }
    static AdvancedOptionsResponse = class {
      public get options(): shapes.AdvancedOptions {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'describeElasticsearchDomainConfig',
            service: 'ES',
            outputPath: 'DomainConfig.AdvancedOptions.Options',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.AdvancedOptions.Options', props);
        return request.getResponseField('DomainConfig.AdvancedOptions.Options') as unknown as shapes.AdvancedOptions;
      }
      static StatusResponse = class {
        public get creationDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.AdvancedOptions.Status.CreationDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.AdvancedOptions.Status.CreationDate', props);
          return request.getResponseField('DomainConfig.AdvancedOptions.Status.CreationDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.AdvancedOptions.Status.UpdateDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.AdvancedOptions.Status.UpdateDate', props);
          return request.getResponseField('DomainConfig.AdvancedOptions.Status.UpdateDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateVersion(): shapes.UIntValue {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.AdvancedOptions.Status.UpdateVersion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.AdvancedOptions.Status.UpdateVersion', props);
          return request.getResponseField('DomainConfig.AdvancedOptions.Status.UpdateVersion') as unknown as shapes.UIntValue;
        }
        public get state(): shapes.OptionState {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.AdvancedOptions.Status.State',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.AdvancedOptions.Status.State', props);
          return request.getResponseField('DomainConfig.AdvancedOptions.Status.State') as unknown as shapes.OptionState;
        }
        public get pendingDeletion(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.AdvancedOptions.Status.PendingDeletion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.AdvancedOptions.Status.PendingDeletion', props);
          return request.getResponseField('DomainConfig.AdvancedOptions.Status.PendingDeletion') as unknown as shapes.Boolean;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get status(): InstanceType<typeof DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.AdvancedOptionsResponse.StatusResponse> {
        return new DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.AdvancedOptionsResponse.StatusResponse(this.scope, this.resources);
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get advancedOptions(): InstanceType<typeof DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.AdvancedOptionsResponse> {
      return new DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.AdvancedOptionsResponse(this.scope, this.resources);
    }
    static LogPublishingOptionsResponse = class {
      public get options(): shapes.LogPublishingOptions {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'describeElasticsearchDomainConfig',
            service: 'ES',
            outputPath: 'DomainConfig.LogPublishingOptions.Options',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.LogPublishingOptions.Options', props);
        return request.getResponseField('DomainConfig.LogPublishingOptions.Options') as unknown as shapes.LogPublishingOptions;
      }
      static StatusResponse = class {
        public get creationDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.LogPublishingOptions.Status.CreationDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.LogPublishingOptions.Status.CreationDate', props);
          return request.getResponseField('DomainConfig.LogPublishingOptions.Status.CreationDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.LogPublishingOptions.Status.UpdateDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.LogPublishingOptions.Status.UpdateDate', props);
          return request.getResponseField('DomainConfig.LogPublishingOptions.Status.UpdateDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateVersion(): shapes.UIntValue {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.LogPublishingOptions.Status.UpdateVersion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.LogPublishingOptions.Status.UpdateVersion', props);
          return request.getResponseField('DomainConfig.LogPublishingOptions.Status.UpdateVersion') as unknown as shapes.UIntValue;
        }
        public get state(): shapes.OptionState {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.LogPublishingOptions.Status.State',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.LogPublishingOptions.Status.State', props);
          return request.getResponseField('DomainConfig.LogPublishingOptions.Status.State') as unknown as shapes.OptionState;
        }
        public get pendingDeletion(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.LogPublishingOptions.Status.PendingDeletion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.LogPublishingOptions.Status.PendingDeletion', props);
          return request.getResponseField('DomainConfig.LogPublishingOptions.Status.PendingDeletion') as unknown as shapes.Boolean;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get status(): InstanceType<typeof DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.LogPublishingOptionsResponse.StatusResponse> {
        return new DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.LogPublishingOptionsResponse.StatusResponse(this.scope, this.resources);
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get logPublishingOptions(): InstanceType<typeof DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.LogPublishingOptionsResponse> {
      return new DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.LogPublishingOptionsResponse(this.scope, this.resources);
    }
    static DomainEndpointOptionsResponse = class {
      static OptionsResponse = class {
        public get enforceHttps(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.DomainEndpointOptions.Options.EnforceHTTPS',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.DomainEndpointOptions.Options.EnforceHTTPS', props);
          return request.getResponseField('DomainConfig.DomainEndpointOptions.Options.EnforceHTTPS') as unknown as shapes.Boolean;
        }
        public get tlsSecurityPolicy(): shapes.TLSSecurityPolicy {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.DomainEndpointOptions.Options.TLSSecurityPolicy',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.DomainEndpointOptions.Options.TLSSecurityPolicy', props);
          return request.getResponseField('DomainConfig.DomainEndpointOptions.Options.TLSSecurityPolicy') as unknown as shapes.TLSSecurityPolicy;
        }
        public get customEndpointEnabled(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.DomainEndpointOptions.Options.CustomEndpointEnabled',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.DomainEndpointOptions.Options.CustomEndpointEnabled', props);
          return request.getResponseField('DomainConfig.DomainEndpointOptions.Options.CustomEndpointEnabled') as unknown as shapes.Boolean;
        }
        public get customEndpoint(): shapes.DomainNameFqdn {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.DomainEndpointOptions.Options.CustomEndpoint',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.DomainEndpointOptions.Options.CustomEndpoint', props);
          return request.getResponseField('DomainConfig.DomainEndpointOptions.Options.CustomEndpoint') as unknown as shapes.DomainNameFqdn;
        }
        public get customEndpointCertificateArn(): shapes.ARN {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.DomainEndpointOptions.Options.CustomEndpointCertificateArn',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.DomainEndpointOptions.Options.CustomEndpointCertificateArn', props);
          return request.getResponseField('DomainConfig.DomainEndpointOptions.Options.CustomEndpointCertificateArn') as unknown as shapes.ARN;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get options(): InstanceType<typeof DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.DomainEndpointOptionsResponse.OptionsResponse> {
        return new DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.DomainEndpointOptionsResponse.OptionsResponse(this.scope, this.resources);
      }
      static StatusResponse = class {
        public get creationDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.DomainEndpointOptions.Status.CreationDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.DomainEndpointOptions.Status.CreationDate', props);
          return request.getResponseField('DomainConfig.DomainEndpointOptions.Status.CreationDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.DomainEndpointOptions.Status.UpdateDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.DomainEndpointOptions.Status.UpdateDate', props);
          return request.getResponseField('DomainConfig.DomainEndpointOptions.Status.UpdateDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateVersion(): shapes.UIntValue {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.DomainEndpointOptions.Status.UpdateVersion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.DomainEndpointOptions.Status.UpdateVersion', props);
          return request.getResponseField('DomainConfig.DomainEndpointOptions.Status.UpdateVersion') as unknown as shapes.UIntValue;
        }
        public get state(): shapes.OptionState {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.DomainEndpointOptions.Status.State',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.DomainEndpointOptions.Status.State', props);
          return request.getResponseField('DomainConfig.DomainEndpointOptions.Status.State') as unknown as shapes.OptionState;
        }
        public get pendingDeletion(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.DomainEndpointOptions.Status.PendingDeletion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.DomainEndpointOptions.Status.PendingDeletion', props);
          return request.getResponseField('DomainConfig.DomainEndpointOptions.Status.PendingDeletion') as unknown as shapes.Boolean;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get status(): InstanceType<typeof DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.DomainEndpointOptionsResponse.StatusResponse> {
        return new DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.DomainEndpointOptionsResponse.StatusResponse(this.scope, this.resources);
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get domainEndpointOptions(): InstanceType<typeof DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.DomainEndpointOptionsResponse> {
      return new DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.DomainEndpointOptionsResponse(this.scope, this.resources);
    }
    static AdvancedSecurityOptionsResponse = class {
      static OptionsResponse = class {
        public get enabled(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.AdvancedSecurityOptions.Options.Enabled',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.AdvancedSecurityOptions.Options.Enabled', props);
          return request.getResponseField('DomainConfig.AdvancedSecurityOptions.Options.Enabled') as unknown as shapes.Boolean;
        }
        public get internalUserDatabaseEnabled(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.AdvancedSecurityOptions.Options.InternalUserDatabaseEnabled',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.AdvancedSecurityOptions.Options.InternalUserDatabaseEnabled', props);
          return request.getResponseField('DomainConfig.AdvancedSecurityOptions.Options.InternalUserDatabaseEnabled') as unknown as shapes.Boolean;
        }
        static SAMLOptionsResponse = class {
          public get enabled(): shapes.Boolean {
            const props: cr.AwsCustomResourceProps = {
              onUpdate: {
                action: 'describeElasticsearchDomainConfig',
                service: 'ES',
                outputPath: 'DomainConfig.AdvancedSecurityOptions.Options.SAMLOptions.Enabled',
              },
              policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
            };
            const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.AdvancedSecurityOptions.Options.SAMLOptions.Enabled', props);
            return request.getResponseField('DomainConfig.AdvancedSecurityOptions.Options.SAMLOptions.Enabled') as unknown as shapes.Boolean;
          }
          static IdpResponse = class {
            public get metadataContent(): shapes.SAMLMetadata {
              const props: cr.AwsCustomResourceProps = {
                onUpdate: {
                  action: 'describeElasticsearchDomainConfig',
                  service: 'ES',
                  outputPath: 'DomainConfig.AdvancedSecurityOptions.Options.SAMLOptions.Idp.MetadataContent',
                },
                policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
              };
              const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.AdvancedSecurityOptions.Options.SAMLOptions.Idp.MetadataContent', props);
              return request.getResponseField('DomainConfig.AdvancedSecurityOptions.Options.SAMLOptions.Idp.MetadataContent') as unknown as shapes.SAMLMetadata;
            }
            public get entityId(): shapes.SAMLEntityId {
              const props: cr.AwsCustomResourceProps = {
                onUpdate: {
                  action: 'describeElasticsearchDomainConfig',
                  service: 'ES',
                  outputPath: 'DomainConfig.AdvancedSecurityOptions.Options.SAMLOptions.Idp.EntityId',
                },
                policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
              };
              const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.AdvancedSecurityOptions.Options.SAMLOptions.Idp.EntityId', props);
              return request.getResponseField('DomainConfig.AdvancedSecurityOptions.Options.SAMLOptions.Idp.EntityId') as unknown as shapes.SAMLEntityId;
            }
            constructor(public scope: cdk.Construct, public readonly resources: string[]) {
            }
          }
          public get idp(): InstanceType<typeof DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.AdvancedSecurityOptionsResponse.OptionsResponse.SAMLOptionsResponse.IdpResponse> {
            return new DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.AdvancedSecurityOptionsResponse.OptionsResponse.SAMLOptionsResponse.IdpResponse(this.scope, this.resources);
          }
          public get subjectKey(): shapes.String {
            const props: cr.AwsCustomResourceProps = {
              onUpdate: {
                action: 'describeElasticsearchDomainConfig',
                service: 'ES',
                outputPath: 'DomainConfig.AdvancedSecurityOptions.Options.SAMLOptions.SubjectKey',
              },
              policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
            };
            const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.AdvancedSecurityOptions.Options.SAMLOptions.SubjectKey', props);
            return request.getResponseField('DomainConfig.AdvancedSecurityOptions.Options.SAMLOptions.SubjectKey') as unknown as shapes.String;
          }
          public get rolesKey(): shapes.String {
            const props: cr.AwsCustomResourceProps = {
              onUpdate: {
                action: 'describeElasticsearchDomainConfig',
                service: 'ES',
                outputPath: 'DomainConfig.AdvancedSecurityOptions.Options.SAMLOptions.RolesKey',
              },
              policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
            };
            const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.AdvancedSecurityOptions.Options.SAMLOptions.RolesKey', props);
            return request.getResponseField('DomainConfig.AdvancedSecurityOptions.Options.SAMLOptions.RolesKey') as unknown as shapes.String;
          }
          public get sessionTimeoutMinutes(): shapes.IntegerClass {
            const props: cr.AwsCustomResourceProps = {
              onUpdate: {
                action: 'describeElasticsearchDomainConfig',
                service: 'ES',
                outputPath: 'DomainConfig.AdvancedSecurityOptions.Options.SAMLOptions.SessionTimeoutMinutes',
              },
              policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
            };
            const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.AdvancedSecurityOptions.Options.SAMLOptions.SessionTimeoutMinutes', props);
            return request.getResponseField('DomainConfig.AdvancedSecurityOptions.Options.SAMLOptions.SessionTimeoutMinutes') as unknown as shapes.IntegerClass;
          }
          constructor(public scope: cdk.Construct, public readonly resources: string[]) {
          }
        }
        public get samlOptions(): InstanceType<typeof DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.AdvancedSecurityOptionsResponse.OptionsResponse.SAMLOptionsResponse> {
          return new DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.AdvancedSecurityOptionsResponse.OptionsResponse.SAMLOptionsResponse(this.scope, this.resources);
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get options(): InstanceType<typeof DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.AdvancedSecurityOptionsResponse.OptionsResponse> {
        return new DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.AdvancedSecurityOptionsResponse.OptionsResponse(this.scope, this.resources);
      }
      static StatusResponse = class {
        public get creationDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.AdvancedSecurityOptions.Status.CreationDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.AdvancedSecurityOptions.Status.CreationDate', props);
          return request.getResponseField('DomainConfig.AdvancedSecurityOptions.Status.CreationDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.AdvancedSecurityOptions.Status.UpdateDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.AdvancedSecurityOptions.Status.UpdateDate', props);
          return request.getResponseField('DomainConfig.AdvancedSecurityOptions.Status.UpdateDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateVersion(): shapes.UIntValue {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.AdvancedSecurityOptions.Status.UpdateVersion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.AdvancedSecurityOptions.Status.UpdateVersion', props);
          return request.getResponseField('DomainConfig.AdvancedSecurityOptions.Status.UpdateVersion') as unknown as shapes.UIntValue;
        }
        public get state(): shapes.OptionState {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.AdvancedSecurityOptions.Status.State',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.AdvancedSecurityOptions.Status.State', props);
          return request.getResponseField('DomainConfig.AdvancedSecurityOptions.Status.State') as unknown as shapes.OptionState;
        }
        public get pendingDeletion(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'describeElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.AdvancedSecurityOptions.Status.PendingDeletion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomainConfig.DomainConfig.AdvancedSecurityOptions.Status.PendingDeletion', props);
          return request.getResponseField('DomainConfig.AdvancedSecurityOptions.Status.PendingDeletion') as unknown as shapes.Boolean;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get status(): InstanceType<typeof DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.AdvancedSecurityOptionsResponse.StatusResponse> {
        return new DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.AdvancedSecurityOptionsResponse.StatusResponse(this.scope, this.resources);
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get advancedSecurityOptions(): InstanceType<typeof DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.AdvancedSecurityOptionsResponse> {
      return new DescribeElasticsearchDomainConfigResponse.DomainConfigResponse.AdvancedSecurityOptionsResponse(this.scope, this.resources);
    }
    constructor(public scope: cdk.Construct, public readonly resources: string[]) {
    }
  }
  public get domainConfig(): InstanceType<typeof DescribeElasticsearchDomainConfigResponse.DomainConfigResponse> {
    return new DescribeElasticsearchDomainConfigResponse.DomainConfigResponse(this.scope, this.resources);
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], input: shapes.DescribeElasticsearchDomainConfigRequest) {
  }
}
export class DescribeElasticsearchDomainsResponse {
  public get domainStatusList(): shapes.ElasticsearchDomainStatusList {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'describeElasticsearchDomains',
        service: 'ES',
        outputPath: 'DomainStatusList',
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchDomains.DomainStatusList', props);
    return request.getResponseField('DomainStatusList') as unknown as shapes.ElasticsearchDomainStatusList;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], input: shapes.DescribeElasticsearchDomainsRequest) {
  }
}
export class DescribeElasticsearchInstanceTypeLimitsResponse {
  public get limitsByRole(): shapes.LimitsByRole {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'describeElasticsearchInstanceTypeLimits',
        service: 'ES',
        outputPath: 'LimitsByRole',
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'DescribeElasticsearchInstanceTypeLimits.LimitsByRole', props);
    return request.getResponseField('LimitsByRole') as unknown as shapes.LimitsByRole;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], input: shapes.DescribeElasticsearchInstanceTypeLimitsRequest) {
  }
}
export class DescribeInboundCrossClusterSearchConnectionsResponse {
  public get crossClusterSearchConnections(): shapes.InboundCrossClusterSearchConnections {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'describeInboundCrossClusterSearchConnections',
        service: 'ES',
        outputPath: 'CrossClusterSearchConnections',
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'DescribeInboundCrossClusterSearchConnections.CrossClusterSearchConnections', props);
    return request.getResponseField('CrossClusterSearchConnections') as unknown as shapes.InboundCrossClusterSearchConnections;
  }
  public get nextToken(): shapes.NextToken {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'describeInboundCrossClusterSearchConnections',
        service: 'ES',
        outputPath: 'NextToken',
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'DescribeInboundCrossClusterSearchConnections.NextToken', props);
    return request.getResponseField('NextToken') as unknown as shapes.NextToken;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], input: shapes.DescribeInboundCrossClusterSearchConnectionsRequest) {
  }
}
export class DescribeOutboundCrossClusterSearchConnectionsResponse {
  public get crossClusterSearchConnections(): shapes.OutboundCrossClusterSearchConnections {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'describeOutboundCrossClusterSearchConnections',
        service: 'ES',
        outputPath: 'CrossClusterSearchConnections',
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'DescribeOutboundCrossClusterSearchConnections.CrossClusterSearchConnections', props);
    return request.getResponseField('CrossClusterSearchConnections') as unknown as shapes.OutboundCrossClusterSearchConnections;
  }
  public get nextToken(): shapes.NextToken {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'describeOutboundCrossClusterSearchConnections',
        service: 'ES',
        outputPath: 'NextToken',
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'DescribeOutboundCrossClusterSearchConnections.NextToken', props);
    return request.getResponseField('NextToken') as unknown as shapes.NextToken;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], input: shapes.DescribeOutboundCrossClusterSearchConnectionsRequest) {
  }
}
export class DescribePackagesResponse {
  public get packageDetailsList(): shapes.PackageDetailsList {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'describePackages',
        service: 'ES',
        outputPath: 'PackageDetailsList',
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'DescribePackages.PackageDetailsList', props);
    return request.getResponseField('PackageDetailsList') as unknown as shapes.PackageDetailsList;
  }
  public get nextToken(): shapes.String {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'describePackages',
        service: 'ES',
        outputPath: 'NextToken',
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'DescribePackages.NextToken', props);
    return request.getResponseField('NextToken') as unknown as shapes.String;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], input: shapes.DescribePackagesRequest) {
  }
}
export class DescribeReservedElasticsearchInstanceOfferingsResponse {
  public get nextToken(): shapes.NextToken {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'describeReservedElasticsearchInstanceOfferings',
        service: 'ES',
        outputPath: 'NextToken',
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'DescribeReservedElasticsearchInstanceOfferings.NextToken', props);
    return request.getResponseField('NextToken') as unknown as shapes.NextToken;
  }
  public get reservedElasticsearchInstanceOfferings(): shapes.ReservedElasticsearchInstanceOfferingList {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'describeReservedElasticsearchInstanceOfferings',
        service: 'ES',
        outputPath: 'ReservedElasticsearchInstanceOfferings',
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'DescribeReservedElasticsearchInstanceOfferings.ReservedElasticsearchInstanceOfferings', props);
    return request.getResponseField('ReservedElasticsearchInstanceOfferings') as unknown as shapes.ReservedElasticsearchInstanceOfferingList;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], input: shapes.DescribeReservedElasticsearchInstanceOfferingsRequest) {
  }
}
export class DescribeReservedElasticsearchInstancesResponse {
  public get nextToken(): shapes.String {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'describeReservedElasticsearchInstances',
        service: 'ES',
        outputPath: 'NextToken',
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'DescribeReservedElasticsearchInstances.NextToken', props);
    return request.getResponseField('NextToken') as unknown as shapes.String;
  }
  public get reservedElasticsearchInstances(): shapes.ReservedElasticsearchInstanceList {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'describeReservedElasticsearchInstances',
        service: 'ES',
        outputPath: 'ReservedElasticsearchInstances',
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'DescribeReservedElasticsearchInstances.ReservedElasticsearchInstances', props);
    return request.getResponseField('ReservedElasticsearchInstances') as unknown as shapes.ReservedElasticsearchInstanceList;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], input: shapes.DescribeReservedElasticsearchInstancesRequest) {
  }
}
export class DissociatePackageResponse {
  static DomainPackageDetailsResponse = class {
    public get packageId(): shapes.PackageID {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'dissociatePackage',
          service: 'ES',
          outputPath: 'DomainPackageDetails.PackageID',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'DissociatePackage.DomainPackageDetails.PackageID', props);
      return request.getResponseField('DomainPackageDetails.PackageID') as unknown as shapes.PackageID;
    }
    public get packageName(): shapes.PackageName {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'dissociatePackage',
          service: 'ES',
          outputPath: 'DomainPackageDetails.PackageName',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'DissociatePackage.DomainPackageDetails.PackageName', props);
      return request.getResponseField('DomainPackageDetails.PackageName') as unknown as shapes.PackageName;
    }
    public get packageType(): shapes.PackageType {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'dissociatePackage',
          service: 'ES',
          outputPath: 'DomainPackageDetails.PackageType',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'DissociatePackage.DomainPackageDetails.PackageType', props);
      return request.getResponseField('DomainPackageDetails.PackageType') as unknown as shapes.PackageType;
    }
    public get lastUpdated(): shapes.LastUpdated {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'dissociatePackage',
          service: 'ES',
          outputPath: 'DomainPackageDetails.LastUpdated',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'DissociatePackage.DomainPackageDetails.LastUpdated', props);
      return request.getResponseField('DomainPackageDetails.LastUpdated') as unknown as shapes.LastUpdated;
    }
    public get domainName(): shapes.DomainName {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'dissociatePackage',
          service: 'ES',
          outputPath: 'DomainPackageDetails.DomainName',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'DissociatePackage.DomainPackageDetails.DomainName', props);
      return request.getResponseField('DomainPackageDetails.DomainName') as unknown as shapes.DomainName;
    }
    public get domainPackageStatus(): shapes.DomainPackageStatus {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'dissociatePackage',
          service: 'ES',
          outputPath: 'DomainPackageDetails.DomainPackageStatus',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'DissociatePackage.DomainPackageDetails.DomainPackageStatus', props);
      return request.getResponseField('DomainPackageDetails.DomainPackageStatus') as unknown as shapes.DomainPackageStatus;
    }
    public get packageVersion(): shapes.PackageVersion {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'dissociatePackage',
          service: 'ES',
          outputPath: 'DomainPackageDetails.PackageVersion',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'DissociatePackage.DomainPackageDetails.PackageVersion', props);
      return request.getResponseField('DomainPackageDetails.PackageVersion') as unknown as shapes.PackageVersion;
    }
    public get referencePath(): shapes.ReferencePath {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'dissociatePackage',
          service: 'ES',
          outputPath: 'DomainPackageDetails.ReferencePath',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'DissociatePackage.DomainPackageDetails.ReferencePath', props);
      return request.getResponseField('DomainPackageDetails.ReferencePath') as unknown as shapes.ReferencePath;
    }
    static ErrorDetailsResponse = class {
      public get errorType(): shapes.ErrorType {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'dissociatePackage',
            service: 'ES',
            outputPath: 'DomainPackageDetails.ErrorDetails.ErrorType',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DissociatePackage.DomainPackageDetails.ErrorDetails.ErrorType', props);
        return request.getResponseField('DomainPackageDetails.ErrorDetails.ErrorType') as unknown as shapes.ErrorType;
      }
      public get errorMessage(): shapes.ErrorMessage {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'dissociatePackage',
            service: 'ES',
            outputPath: 'DomainPackageDetails.ErrorDetails.ErrorMessage',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'DissociatePackage.DomainPackageDetails.ErrorDetails.ErrorMessage', props);
        return request.getResponseField('DomainPackageDetails.ErrorDetails.ErrorMessage') as unknown as shapes.ErrorMessage;
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get errorDetails(): InstanceType<typeof DissociatePackageResponse.DomainPackageDetailsResponse.ErrorDetailsResponse> {
      return new DissociatePackageResponse.DomainPackageDetailsResponse.ErrorDetailsResponse(this.scope, this.resources);
    }
    constructor(public scope: cdk.Construct, public readonly resources: string[]) {
    }
  }
  public get domainPackageDetails(): InstanceType<typeof DissociatePackageResponse.DomainPackageDetailsResponse> {
    return new DissociatePackageResponse.DomainPackageDetailsResponse(this.scope, this.resources);
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], input: shapes.DissociatePackageRequest) {
  }
}
export class GetCompatibleElasticsearchVersionsResponse {
  public get compatibleElasticsearchVersions(): shapes.CompatibleElasticsearchVersionsList {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getCompatibleElasticsearchVersions',
        service: 'ES',
        outputPath: 'CompatibleElasticsearchVersions',
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetCompatibleElasticsearchVersions.CompatibleElasticsearchVersions', props);
    return request.getResponseField('CompatibleElasticsearchVersions') as unknown as shapes.CompatibleElasticsearchVersionsList;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], input: shapes.GetCompatibleElasticsearchVersionsRequest) {
  }
}
export class GetPackageVersionHistoryResponse {
  public get packageId(): shapes.PackageID {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getPackageVersionHistory',
        service: 'ES',
        outputPath: 'PackageID',
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetPackageVersionHistory.PackageID', props);
    return request.getResponseField('PackageID') as unknown as shapes.PackageID;
  }
  public get packageVersionHistoryList(): shapes.PackageVersionHistoryList {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getPackageVersionHistory',
        service: 'ES',
        outputPath: 'PackageVersionHistoryList',
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetPackageVersionHistory.PackageVersionHistoryList', props);
    return request.getResponseField('PackageVersionHistoryList') as unknown as shapes.PackageVersionHistoryList;
  }
  public get nextToken(): shapes.String {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getPackageVersionHistory',
        service: 'ES',
        outputPath: 'NextToken',
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetPackageVersionHistory.NextToken', props);
    return request.getResponseField('NextToken') as unknown as shapes.String;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], input: shapes.GetPackageVersionHistoryRequest) {
  }
}
export class GetUpgradeHistoryResponse {
  public get upgradeHistories(): shapes.UpgradeHistoryList {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getUpgradeHistory',
        service: 'ES',
        outputPath: 'UpgradeHistories',
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetUpgradeHistory.UpgradeHistories', props);
    return request.getResponseField('UpgradeHistories') as unknown as shapes.UpgradeHistoryList;
  }
  public get nextToken(): shapes.String {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getUpgradeHistory',
        service: 'ES',
        outputPath: 'NextToken',
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetUpgradeHistory.NextToken', props);
    return request.getResponseField('NextToken') as unknown as shapes.String;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], input: shapes.GetUpgradeHistoryRequest) {
  }
}
export class GetUpgradeStatusResponse {
  public get upgradeStep(): shapes.UpgradeStep {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getUpgradeStatus',
        service: 'ES',
        outputPath: 'UpgradeStep',
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetUpgradeStatus.UpgradeStep', props);
    return request.getResponseField('UpgradeStep') as unknown as shapes.UpgradeStep;
  }
  public get stepStatus(): shapes.UpgradeStatus {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getUpgradeStatus',
        service: 'ES',
        outputPath: 'StepStatus',
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetUpgradeStatus.StepStatus', props);
    return request.getResponseField('StepStatus') as unknown as shapes.UpgradeStatus;
  }
  public get upgradeName(): shapes.UpgradeName {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getUpgradeStatus',
        service: 'ES',
        outputPath: 'UpgradeName',
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetUpgradeStatus.UpgradeName', props);
    return request.getResponseField('UpgradeName') as unknown as shapes.UpgradeName;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], input: shapes.GetUpgradeStatusRequest) {
  }
}
export class ListDomainNamesResponse {
  public get domainNames(): shapes.DomainInfoList {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listDomainNames',
        service: 'ES',
        outputPath: 'DomainNames',
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListDomainNames.DomainNames', props);
    return request.getResponseField('DomainNames') as unknown as shapes.DomainInfoList;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[]) {
  }
}
export class ListDomainsForPackageResponse {
  public get domainPackageDetailsList(): shapes.DomainPackageDetailsList {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listDomainsForPackage',
        service: 'ES',
        outputPath: 'DomainPackageDetailsList',
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListDomainsForPackage.DomainPackageDetailsList', props);
    return request.getResponseField('DomainPackageDetailsList') as unknown as shapes.DomainPackageDetailsList;
  }
  public get nextToken(): shapes.String {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listDomainsForPackage',
        service: 'ES',
        outputPath: 'NextToken',
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListDomainsForPackage.NextToken', props);
    return request.getResponseField('NextToken') as unknown as shapes.String;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], input: shapes.ListDomainsForPackageRequest) {
  }
}
export class ListElasticsearchInstanceTypesResponse {
  public get elasticsearchInstanceTypes(): shapes.ElasticsearchInstanceTypeList {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listElasticsearchInstanceTypes',
        service: 'ES',
        outputPath: 'ElasticsearchInstanceTypes',
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListElasticsearchInstanceTypes.ElasticsearchInstanceTypes', props);
    return request.getResponseField('ElasticsearchInstanceTypes') as unknown as shapes.ElasticsearchInstanceTypeList;
  }
  public get nextToken(): shapes.NextToken {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listElasticsearchInstanceTypes',
        service: 'ES',
        outputPath: 'NextToken',
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListElasticsearchInstanceTypes.NextToken', props);
    return request.getResponseField('NextToken') as unknown as shapes.NextToken;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], input: shapes.ListElasticsearchInstanceTypesRequest) {
  }
}
export class ListElasticsearchVersionsResponse {
  public get elasticsearchVersions(): shapes.ElasticsearchVersionList {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listElasticsearchVersions',
        service: 'ES',
        outputPath: 'ElasticsearchVersions',
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListElasticsearchVersions.ElasticsearchVersions', props);
    return request.getResponseField('ElasticsearchVersions') as unknown as shapes.ElasticsearchVersionList;
  }
  public get nextToken(): shapes.NextToken {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listElasticsearchVersions',
        service: 'ES',
        outputPath: 'NextToken',
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListElasticsearchVersions.NextToken', props);
    return request.getResponseField('NextToken') as unknown as shapes.NextToken;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], input: shapes.ListElasticsearchVersionsRequest) {
  }
}
export class ListPackagesForDomainResponse {
  public get domainPackageDetailsList(): shapes.DomainPackageDetailsList {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listPackagesForDomain',
        service: 'ES',
        outputPath: 'DomainPackageDetailsList',
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListPackagesForDomain.DomainPackageDetailsList', props);
    return request.getResponseField('DomainPackageDetailsList') as unknown as shapes.DomainPackageDetailsList;
  }
  public get nextToken(): shapes.String {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listPackagesForDomain',
        service: 'ES',
        outputPath: 'NextToken',
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListPackagesForDomain.NextToken', props);
    return request.getResponseField('NextToken') as unknown as shapes.String;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], input: shapes.ListPackagesForDomainRequest) {
  }
}
export class ListTagsResponse {
  public get tagList(): shapes.TagList {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listTags',
        service: 'ES',
        outputPath: 'TagList',
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListTags.TagList', props);
    return request.getResponseField('TagList') as unknown as shapes.TagList;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], input: shapes.ListTagsRequest) {
  }
}
export class PurchaseReservedElasticsearchInstanceOfferingResponse {
  public get reservedElasticsearchInstanceId(): shapes.GUID {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'purchaseReservedElasticsearchInstanceOffering',
        service: 'ES',
        outputPath: 'ReservedElasticsearchInstanceId',
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'PurchaseReservedElasticsearchInstanceOffering.ReservedElasticsearchInstanceId', props);
    return request.getResponseField('ReservedElasticsearchInstanceId') as unknown as shapes.GUID;
  }
  public get reservationName(): shapes.ReservationToken {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'purchaseReservedElasticsearchInstanceOffering',
        service: 'ES',
        outputPath: 'ReservationName',
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'PurchaseReservedElasticsearchInstanceOffering.ReservationName', props);
    return request.getResponseField('ReservationName') as unknown as shapes.ReservationToken;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], input: shapes.PurchaseReservedElasticsearchInstanceOfferingRequest) {
  }
}
export class RejectInboundCrossClusterSearchConnectionResponse {
  static CrossClusterSearchConnectionResponse = class {
    static SourceDomainInfoResponse = class {
      public get ownerId(): shapes.OwnerId {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'rejectInboundCrossClusterSearchConnection',
            service: 'ES',
            outputPath: 'CrossClusterSearchConnection.SourceDomainInfo.OwnerId',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'RejectInboundCrossClusterSearchConnection.CrossClusterSearchConnection.SourceDomainInfo.OwnerId', props);
        return request.getResponseField('CrossClusterSearchConnection.SourceDomainInfo.OwnerId') as unknown as shapes.OwnerId;
      }
      public get domainName(): shapes.DomainName {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'rejectInboundCrossClusterSearchConnection',
            service: 'ES',
            outputPath: 'CrossClusterSearchConnection.SourceDomainInfo.DomainName',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'RejectInboundCrossClusterSearchConnection.CrossClusterSearchConnection.SourceDomainInfo.DomainName', props);
        return request.getResponseField('CrossClusterSearchConnection.SourceDomainInfo.DomainName') as unknown as shapes.DomainName;
      }
      public get region(): shapes.Region {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'rejectInboundCrossClusterSearchConnection',
            service: 'ES',
            outputPath: 'CrossClusterSearchConnection.SourceDomainInfo.Region',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'RejectInboundCrossClusterSearchConnection.CrossClusterSearchConnection.SourceDomainInfo.Region', props);
        return request.getResponseField('CrossClusterSearchConnection.SourceDomainInfo.Region') as unknown as shapes.Region;
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get sourceDomainInfo(): InstanceType<typeof RejectInboundCrossClusterSearchConnectionResponse.CrossClusterSearchConnectionResponse.SourceDomainInfoResponse> {
      return new RejectInboundCrossClusterSearchConnectionResponse.CrossClusterSearchConnectionResponse.SourceDomainInfoResponse(this.scope, this.resources);
    }
    static DestinationDomainInfoResponse = class {
      public get ownerId(): shapes.OwnerId {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'rejectInboundCrossClusterSearchConnection',
            service: 'ES',
            outputPath: 'CrossClusterSearchConnection.DestinationDomainInfo.OwnerId',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'RejectInboundCrossClusterSearchConnection.CrossClusterSearchConnection.DestinationDomainInfo.OwnerId', props);
        return request.getResponseField('CrossClusterSearchConnection.DestinationDomainInfo.OwnerId') as unknown as shapes.OwnerId;
      }
      public get domainName(): shapes.DomainName {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'rejectInboundCrossClusterSearchConnection',
            service: 'ES',
            outputPath: 'CrossClusterSearchConnection.DestinationDomainInfo.DomainName',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'RejectInboundCrossClusterSearchConnection.CrossClusterSearchConnection.DestinationDomainInfo.DomainName', props);
        return request.getResponseField('CrossClusterSearchConnection.DestinationDomainInfo.DomainName') as unknown as shapes.DomainName;
      }
      public get region(): shapes.Region {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'rejectInboundCrossClusterSearchConnection',
            service: 'ES',
            outputPath: 'CrossClusterSearchConnection.DestinationDomainInfo.Region',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'RejectInboundCrossClusterSearchConnection.CrossClusterSearchConnection.DestinationDomainInfo.Region', props);
        return request.getResponseField('CrossClusterSearchConnection.DestinationDomainInfo.Region') as unknown as shapes.Region;
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get destinationDomainInfo(): InstanceType<typeof RejectInboundCrossClusterSearchConnectionResponse.CrossClusterSearchConnectionResponse.DestinationDomainInfoResponse> {
      return new RejectInboundCrossClusterSearchConnectionResponse.CrossClusterSearchConnectionResponse.DestinationDomainInfoResponse(this.scope, this.resources);
    }
    public get crossClusterSearchConnectionId(): shapes.CrossClusterSearchConnectionId {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'rejectInboundCrossClusterSearchConnection',
          service: 'ES',
          outputPath: 'CrossClusterSearchConnection.CrossClusterSearchConnectionId',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'RejectInboundCrossClusterSearchConnection.CrossClusterSearchConnection.CrossClusterSearchConnectionId', props);
      return request.getResponseField('CrossClusterSearchConnection.CrossClusterSearchConnectionId') as unknown as shapes.CrossClusterSearchConnectionId;
    }
    static ConnectionStatusResponse = class {
      public get statusCode(): shapes.InboundCrossClusterSearchConnectionStatusCode {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'rejectInboundCrossClusterSearchConnection',
            service: 'ES',
            outputPath: 'CrossClusterSearchConnection.ConnectionStatus.StatusCode',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'RejectInboundCrossClusterSearchConnection.CrossClusterSearchConnection.ConnectionStatus.StatusCode', props);
        return request.getResponseField('CrossClusterSearchConnection.ConnectionStatus.StatusCode') as unknown as shapes.InboundCrossClusterSearchConnectionStatusCode;
      }
      public get message(): shapes.CrossClusterSearchConnectionStatusMessage {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'rejectInboundCrossClusterSearchConnection',
            service: 'ES',
            outputPath: 'CrossClusterSearchConnection.ConnectionStatus.Message',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'RejectInboundCrossClusterSearchConnection.CrossClusterSearchConnection.ConnectionStatus.Message', props);
        return request.getResponseField('CrossClusterSearchConnection.ConnectionStatus.Message') as unknown as shapes.CrossClusterSearchConnectionStatusMessage;
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get connectionStatus(): InstanceType<typeof RejectInboundCrossClusterSearchConnectionResponse.CrossClusterSearchConnectionResponse.ConnectionStatusResponse> {
      return new RejectInboundCrossClusterSearchConnectionResponse.CrossClusterSearchConnectionResponse.ConnectionStatusResponse(this.scope, this.resources);
    }
    constructor(public scope: cdk.Construct, public readonly resources: string[]) {
    }
  }
  public get crossClusterSearchConnection(): InstanceType<typeof RejectInboundCrossClusterSearchConnectionResponse.CrossClusterSearchConnectionResponse> {
    return new RejectInboundCrossClusterSearchConnectionResponse.CrossClusterSearchConnectionResponse(this.scope, this.resources);
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], input: shapes.RejectInboundCrossClusterSearchConnectionRequest) {
  }
}
export class StartElasticsearchServiceSoftwareUpdateResponse {
  static ServiceSoftwareOptionsResponse = class {
    public get currentVersion(): shapes.String {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'startElasticsearchServiceSoftwareUpdate',
          service: 'ES',
          outputPath: 'ServiceSoftwareOptions.CurrentVersion',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'StartElasticsearchServiceSoftwareUpdate.ServiceSoftwareOptions.CurrentVersion', props);
      return request.getResponseField('ServiceSoftwareOptions.CurrentVersion') as unknown as shapes.String;
    }
    public get newVersion(): shapes.String {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'startElasticsearchServiceSoftwareUpdate',
          service: 'ES',
          outputPath: 'ServiceSoftwareOptions.NewVersion',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'StartElasticsearchServiceSoftwareUpdate.ServiceSoftwareOptions.NewVersion', props);
      return request.getResponseField('ServiceSoftwareOptions.NewVersion') as unknown as shapes.String;
    }
    public get updateAvailable(): shapes.Boolean {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'startElasticsearchServiceSoftwareUpdate',
          service: 'ES',
          outputPath: 'ServiceSoftwareOptions.UpdateAvailable',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'StartElasticsearchServiceSoftwareUpdate.ServiceSoftwareOptions.UpdateAvailable', props);
      return request.getResponseField('ServiceSoftwareOptions.UpdateAvailable') as unknown as shapes.Boolean;
    }
    public get cancellable(): shapes.Boolean {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'startElasticsearchServiceSoftwareUpdate',
          service: 'ES',
          outputPath: 'ServiceSoftwareOptions.Cancellable',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'StartElasticsearchServiceSoftwareUpdate.ServiceSoftwareOptions.Cancellable', props);
      return request.getResponseField('ServiceSoftwareOptions.Cancellable') as unknown as shapes.Boolean;
    }
    public get updateStatus(): shapes.DeploymentStatus {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'startElasticsearchServiceSoftwareUpdate',
          service: 'ES',
          outputPath: 'ServiceSoftwareOptions.UpdateStatus',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'StartElasticsearchServiceSoftwareUpdate.ServiceSoftwareOptions.UpdateStatus', props);
      return request.getResponseField('ServiceSoftwareOptions.UpdateStatus') as unknown as shapes.DeploymentStatus;
    }
    public get description(): shapes.String {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'startElasticsearchServiceSoftwareUpdate',
          service: 'ES',
          outputPath: 'ServiceSoftwareOptions.Description',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'StartElasticsearchServiceSoftwareUpdate.ServiceSoftwareOptions.Description', props);
      return request.getResponseField('ServiceSoftwareOptions.Description') as unknown as shapes.String;
    }
    public get automatedUpdateDate(): shapes.DeploymentCloseDateTimeStamp {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'startElasticsearchServiceSoftwareUpdate',
          service: 'ES',
          outputPath: 'ServiceSoftwareOptions.AutomatedUpdateDate',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'StartElasticsearchServiceSoftwareUpdate.ServiceSoftwareOptions.AutomatedUpdateDate', props);
      return request.getResponseField('ServiceSoftwareOptions.AutomatedUpdateDate') as unknown as shapes.DeploymentCloseDateTimeStamp;
    }
    public get optionalDeployment(): shapes.Boolean {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'startElasticsearchServiceSoftwareUpdate',
          service: 'ES',
          outputPath: 'ServiceSoftwareOptions.OptionalDeployment',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'StartElasticsearchServiceSoftwareUpdate.ServiceSoftwareOptions.OptionalDeployment', props);
      return request.getResponseField('ServiceSoftwareOptions.OptionalDeployment') as unknown as shapes.Boolean;
    }
    constructor(public scope: cdk.Construct, public readonly resources: string[]) {
    }
  }
  public get serviceSoftwareOptions(): InstanceType<typeof StartElasticsearchServiceSoftwareUpdateResponse.ServiceSoftwareOptionsResponse> {
    return new StartElasticsearchServiceSoftwareUpdateResponse.ServiceSoftwareOptionsResponse(this.scope, this.resources);
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], input: shapes.StartElasticsearchServiceSoftwareUpdateRequest) {
  }
}
export class UpdateElasticsearchDomainConfigResponse {
  static DomainConfigResponse = class {
    static ElasticsearchVersionResponse = class {
      public get options(): shapes.ElasticsearchVersionString {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'updateElasticsearchDomainConfig',
            service: 'ES',
            outputPath: 'DomainConfig.ElasticsearchVersion.Options',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.ElasticsearchVersion.Options', props);
        return request.getResponseField('DomainConfig.ElasticsearchVersion.Options') as unknown as shapes.ElasticsearchVersionString;
      }
      static StatusResponse = class {
        public get creationDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.ElasticsearchVersion.Status.CreationDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.ElasticsearchVersion.Status.CreationDate', props);
          return request.getResponseField('DomainConfig.ElasticsearchVersion.Status.CreationDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.ElasticsearchVersion.Status.UpdateDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.ElasticsearchVersion.Status.UpdateDate', props);
          return request.getResponseField('DomainConfig.ElasticsearchVersion.Status.UpdateDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateVersion(): shapes.UIntValue {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.ElasticsearchVersion.Status.UpdateVersion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.ElasticsearchVersion.Status.UpdateVersion', props);
          return request.getResponseField('DomainConfig.ElasticsearchVersion.Status.UpdateVersion') as unknown as shapes.UIntValue;
        }
        public get state(): shapes.OptionState {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.ElasticsearchVersion.Status.State',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.ElasticsearchVersion.Status.State', props);
          return request.getResponseField('DomainConfig.ElasticsearchVersion.Status.State') as unknown as shapes.OptionState;
        }
        public get pendingDeletion(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.ElasticsearchVersion.Status.PendingDeletion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.ElasticsearchVersion.Status.PendingDeletion', props);
          return request.getResponseField('DomainConfig.ElasticsearchVersion.Status.PendingDeletion') as unknown as shapes.Boolean;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get status(): InstanceType<typeof UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.ElasticsearchVersionResponse.StatusResponse> {
        return new UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.ElasticsearchVersionResponse.StatusResponse(this.scope, this.resources);
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get elasticsearchVersion(): InstanceType<typeof UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.ElasticsearchVersionResponse> {
      return new UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.ElasticsearchVersionResponse(this.scope, this.resources);
    }
    static ElasticsearchClusterConfigResponse = class {
      static OptionsResponse = class {
        public get instanceType(): shapes.ESPartitionInstanceType {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.ElasticsearchClusterConfig.Options.InstanceType',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.ElasticsearchClusterConfig.Options.InstanceType', props);
          return request.getResponseField('DomainConfig.ElasticsearchClusterConfig.Options.InstanceType') as unknown as shapes.ESPartitionInstanceType;
        }
        public get instanceCount(): shapes.IntegerClass {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.ElasticsearchClusterConfig.Options.InstanceCount',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.ElasticsearchClusterConfig.Options.InstanceCount', props);
          return request.getResponseField('DomainConfig.ElasticsearchClusterConfig.Options.InstanceCount') as unknown as shapes.IntegerClass;
        }
        public get dedicatedMasterEnabled(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.ElasticsearchClusterConfig.Options.DedicatedMasterEnabled',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.ElasticsearchClusterConfig.Options.DedicatedMasterEnabled', props);
          return request.getResponseField('DomainConfig.ElasticsearchClusterConfig.Options.DedicatedMasterEnabled') as unknown as shapes.Boolean;
        }
        public get zoneAwarenessEnabled(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.ElasticsearchClusterConfig.Options.ZoneAwarenessEnabled',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.ElasticsearchClusterConfig.Options.ZoneAwarenessEnabled', props);
          return request.getResponseField('DomainConfig.ElasticsearchClusterConfig.Options.ZoneAwarenessEnabled') as unknown as shapes.Boolean;
        }
        static ZoneAwarenessConfigResponse = class {
          public get availabilityZoneCount(): shapes.IntegerClass {
            const props: cr.AwsCustomResourceProps = {
              onUpdate: {
                action: 'updateElasticsearchDomainConfig',
                service: 'ES',
                outputPath: 'DomainConfig.ElasticsearchClusterConfig.Options.ZoneAwarenessConfig.AvailabilityZoneCount',
              },
              policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
            };
            const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.ElasticsearchClusterConfig.Options.ZoneAwarenessConfig.AvailabilityZoneCount', props);
            return request.getResponseField('DomainConfig.ElasticsearchClusterConfig.Options.ZoneAwarenessConfig.AvailabilityZoneCount') as unknown as shapes.IntegerClass;
          }
          constructor(public scope: cdk.Construct, public readonly resources: string[]) {
          }
        }
        public get zoneAwarenessConfig(): InstanceType<typeof UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.ElasticsearchClusterConfigResponse.OptionsResponse.ZoneAwarenessConfigResponse> {
          return new UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.ElasticsearchClusterConfigResponse.OptionsResponse.ZoneAwarenessConfigResponse(this.scope, this.resources);
        }
        public get dedicatedMasterType(): shapes.ESPartitionInstanceType {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.ElasticsearchClusterConfig.Options.DedicatedMasterType',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.ElasticsearchClusterConfig.Options.DedicatedMasterType', props);
          return request.getResponseField('DomainConfig.ElasticsearchClusterConfig.Options.DedicatedMasterType') as unknown as shapes.ESPartitionInstanceType;
        }
        public get dedicatedMasterCount(): shapes.IntegerClass {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.ElasticsearchClusterConfig.Options.DedicatedMasterCount',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.ElasticsearchClusterConfig.Options.DedicatedMasterCount', props);
          return request.getResponseField('DomainConfig.ElasticsearchClusterConfig.Options.DedicatedMasterCount') as unknown as shapes.IntegerClass;
        }
        public get warmEnabled(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.ElasticsearchClusterConfig.Options.WarmEnabled',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.ElasticsearchClusterConfig.Options.WarmEnabled', props);
          return request.getResponseField('DomainConfig.ElasticsearchClusterConfig.Options.WarmEnabled') as unknown as shapes.Boolean;
        }
        public get warmType(): shapes.ESWarmPartitionInstanceType {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.ElasticsearchClusterConfig.Options.WarmType',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.ElasticsearchClusterConfig.Options.WarmType', props);
          return request.getResponseField('DomainConfig.ElasticsearchClusterConfig.Options.WarmType') as unknown as shapes.ESWarmPartitionInstanceType;
        }
        public get warmCount(): shapes.IntegerClass {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.ElasticsearchClusterConfig.Options.WarmCount',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.ElasticsearchClusterConfig.Options.WarmCount', props);
          return request.getResponseField('DomainConfig.ElasticsearchClusterConfig.Options.WarmCount') as unknown as shapes.IntegerClass;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get options(): InstanceType<typeof UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.ElasticsearchClusterConfigResponse.OptionsResponse> {
        return new UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.ElasticsearchClusterConfigResponse.OptionsResponse(this.scope, this.resources);
      }
      static StatusResponse = class {
        public get creationDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.ElasticsearchClusterConfig.Status.CreationDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.ElasticsearchClusterConfig.Status.CreationDate', props);
          return request.getResponseField('DomainConfig.ElasticsearchClusterConfig.Status.CreationDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.ElasticsearchClusterConfig.Status.UpdateDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.ElasticsearchClusterConfig.Status.UpdateDate', props);
          return request.getResponseField('DomainConfig.ElasticsearchClusterConfig.Status.UpdateDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateVersion(): shapes.UIntValue {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.ElasticsearchClusterConfig.Status.UpdateVersion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.ElasticsearchClusterConfig.Status.UpdateVersion', props);
          return request.getResponseField('DomainConfig.ElasticsearchClusterConfig.Status.UpdateVersion') as unknown as shapes.UIntValue;
        }
        public get state(): shapes.OptionState {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.ElasticsearchClusterConfig.Status.State',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.ElasticsearchClusterConfig.Status.State', props);
          return request.getResponseField('DomainConfig.ElasticsearchClusterConfig.Status.State') as unknown as shapes.OptionState;
        }
        public get pendingDeletion(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.ElasticsearchClusterConfig.Status.PendingDeletion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.ElasticsearchClusterConfig.Status.PendingDeletion', props);
          return request.getResponseField('DomainConfig.ElasticsearchClusterConfig.Status.PendingDeletion') as unknown as shapes.Boolean;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get status(): InstanceType<typeof UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.ElasticsearchClusterConfigResponse.StatusResponse> {
        return new UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.ElasticsearchClusterConfigResponse.StatusResponse(this.scope, this.resources);
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get elasticsearchClusterConfig(): InstanceType<typeof UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.ElasticsearchClusterConfigResponse> {
      return new UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.ElasticsearchClusterConfigResponse(this.scope, this.resources);
    }
    static EBSOptionsResponse = class {
      static OptionsResponse = class {
        public get ebsEnabled(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.EBSOptions.Options.EBSEnabled',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.EBSOptions.Options.EBSEnabled', props);
          return request.getResponseField('DomainConfig.EBSOptions.Options.EBSEnabled') as unknown as shapes.Boolean;
        }
        public get volumeType(): shapes.VolumeType {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.EBSOptions.Options.VolumeType',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.EBSOptions.Options.VolumeType', props);
          return request.getResponseField('DomainConfig.EBSOptions.Options.VolumeType') as unknown as shapes.VolumeType;
        }
        public get volumeSize(): shapes.IntegerClass {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.EBSOptions.Options.VolumeSize',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.EBSOptions.Options.VolumeSize', props);
          return request.getResponseField('DomainConfig.EBSOptions.Options.VolumeSize') as unknown as shapes.IntegerClass;
        }
        public get iops(): shapes.IntegerClass {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.EBSOptions.Options.Iops',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.EBSOptions.Options.Iops', props);
          return request.getResponseField('DomainConfig.EBSOptions.Options.Iops') as unknown as shapes.IntegerClass;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get options(): InstanceType<typeof UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.EBSOptionsResponse.OptionsResponse> {
        return new UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.EBSOptionsResponse.OptionsResponse(this.scope, this.resources);
      }
      static StatusResponse = class {
        public get creationDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.EBSOptions.Status.CreationDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.EBSOptions.Status.CreationDate', props);
          return request.getResponseField('DomainConfig.EBSOptions.Status.CreationDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.EBSOptions.Status.UpdateDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.EBSOptions.Status.UpdateDate', props);
          return request.getResponseField('DomainConfig.EBSOptions.Status.UpdateDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateVersion(): shapes.UIntValue {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.EBSOptions.Status.UpdateVersion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.EBSOptions.Status.UpdateVersion', props);
          return request.getResponseField('DomainConfig.EBSOptions.Status.UpdateVersion') as unknown as shapes.UIntValue;
        }
        public get state(): shapes.OptionState {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.EBSOptions.Status.State',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.EBSOptions.Status.State', props);
          return request.getResponseField('DomainConfig.EBSOptions.Status.State') as unknown as shapes.OptionState;
        }
        public get pendingDeletion(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.EBSOptions.Status.PendingDeletion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.EBSOptions.Status.PendingDeletion', props);
          return request.getResponseField('DomainConfig.EBSOptions.Status.PendingDeletion') as unknown as shapes.Boolean;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get status(): InstanceType<typeof UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.EBSOptionsResponse.StatusResponse> {
        return new UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.EBSOptionsResponse.StatusResponse(this.scope, this.resources);
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get ebsOptions(): InstanceType<typeof UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.EBSOptionsResponse> {
      return new UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.EBSOptionsResponse(this.scope, this.resources);
    }
    static AccessPoliciesResponse = class {
      public get options(): shapes.PolicyDocument {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'updateElasticsearchDomainConfig',
            service: 'ES',
            outputPath: 'DomainConfig.AccessPolicies.Options',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.AccessPolicies.Options', props);
        return request.getResponseField('DomainConfig.AccessPolicies.Options') as unknown as shapes.PolicyDocument;
      }
      static StatusResponse = class {
        public get creationDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.AccessPolicies.Status.CreationDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.AccessPolicies.Status.CreationDate', props);
          return request.getResponseField('DomainConfig.AccessPolicies.Status.CreationDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.AccessPolicies.Status.UpdateDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.AccessPolicies.Status.UpdateDate', props);
          return request.getResponseField('DomainConfig.AccessPolicies.Status.UpdateDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateVersion(): shapes.UIntValue {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.AccessPolicies.Status.UpdateVersion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.AccessPolicies.Status.UpdateVersion', props);
          return request.getResponseField('DomainConfig.AccessPolicies.Status.UpdateVersion') as unknown as shapes.UIntValue;
        }
        public get state(): shapes.OptionState {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.AccessPolicies.Status.State',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.AccessPolicies.Status.State', props);
          return request.getResponseField('DomainConfig.AccessPolicies.Status.State') as unknown as shapes.OptionState;
        }
        public get pendingDeletion(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.AccessPolicies.Status.PendingDeletion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.AccessPolicies.Status.PendingDeletion', props);
          return request.getResponseField('DomainConfig.AccessPolicies.Status.PendingDeletion') as unknown as shapes.Boolean;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get status(): InstanceType<typeof UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.AccessPoliciesResponse.StatusResponse> {
        return new UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.AccessPoliciesResponse.StatusResponse(this.scope, this.resources);
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get accessPolicies(): InstanceType<typeof UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.AccessPoliciesResponse> {
      return new UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.AccessPoliciesResponse(this.scope, this.resources);
    }
    static SnapshotOptionsResponse = class {
      static OptionsResponse = class {
        public get automatedSnapshotStartHour(): shapes.IntegerClass {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.SnapshotOptions.Options.AutomatedSnapshotStartHour',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.SnapshotOptions.Options.AutomatedSnapshotStartHour', props);
          return request.getResponseField('DomainConfig.SnapshotOptions.Options.AutomatedSnapshotStartHour') as unknown as shapes.IntegerClass;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get options(): InstanceType<typeof UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.SnapshotOptionsResponse.OptionsResponse> {
        return new UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.SnapshotOptionsResponse.OptionsResponse(this.scope, this.resources);
      }
      static StatusResponse = class {
        public get creationDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.SnapshotOptions.Status.CreationDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.SnapshotOptions.Status.CreationDate', props);
          return request.getResponseField('DomainConfig.SnapshotOptions.Status.CreationDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.SnapshotOptions.Status.UpdateDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.SnapshotOptions.Status.UpdateDate', props);
          return request.getResponseField('DomainConfig.SnapshotOptions.Status.UpdateDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateVersion(): shapes.UIntValue {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.SnapshotOptions.Status.UpdateVersion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.SnapshotOptions.Status.UpdateVersion', props);
          return request.getResponseField('DomainConfig.SnapshotOptions.Status.UpdateVersion') as unknown as shapes.UIntValue;
        }
        public get state(): shapes.OptionState {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.SnapshotOptions.Status.State',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.SnapshotOptions.Status.State', props);
          return request.getResponseField('DomainConfig.SnapshotOptions.Status.State') as unknown as shapes.OptionState;
        }
        public get pendingDeletion(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.SnapshotOptions.Status.PendingDeletion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.SnapshotOptions.Status.PendingDeletion', props);
          return request.getResponseField('DomainConfig.SnapshotOptions.Status.PendingDeletion') as unknown as shapes.Boolean;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get status(): InstanceType<typeof UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.SnapshotOptionsResponse.StatusResponse> {
        return new UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.SnapshotOptionsResponse.StatusResponse(this.scope, this.resources);
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get snapshotOptions(): InstanceType<typeof UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.SnapshotOptionsResponse> {
      return new UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.SnapshotOptionsResponse(this.scope, this.resources);
    }
    static VPCOptionsResponse = class {
      static OptionsResponse = class {
        public get vpcId(): shapes.String {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.VPCOptions.Options.VPCId',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.VPCOptions.Options.VPCId', props);
          return request.getResponseField('DomainConfig.VPCOptions.Options.VPCId') as unknown as shapes.String;
        }
        public get subnetIds(): shapes.StringList {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.VPCOptions.Options.SubnetIds',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.VPCOptions.Options.SubnetIds', props);
          return request.getResponseField('DomainConfig.VPCOptions.Options.SubnetIds') as unknown as shapes.StringList;
        }
        public get availabilityZones(): shapes.StringList {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.VPCOptions.Options.AvailabilityZones',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.VPCOptions.Options.AvailabilityZones', props);
          return request.getResponseField('DomainConfig.VPCOptions.Options.AvailabilityZones') as unknown as shapes.StringList;
        }
        public get securityGroupIds(): shapes.StringList {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.VPCOptions.Options.SecurityGroupIds',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.VPCOptions.Options.SecurityGroupIds', props);
          return request.getResponseField('DomainConfig.VPCOptions.Options.SecurityGroupIds') as unknown as shapes.StringList;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get options(): InstanceType<typeof UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.VPCOptionsResponse.OptionsResponse> {
        return new UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.VPCOptionsResponse.OptionsResponse(this.scope, this.resources);
      }
      static StatusResponse = class {
        public get creationDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.VPCOptions.Status.CreationDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.VPCOptions.Status.CreationDate', props);
          return request.getResponseField('DomainConfig.VPCOptions.Status.CreationDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.VPCOptions.Status.UpdateDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.VPCOptions.Status.UpdateDate', props);
          return request.getResponseField('DomainConfig.VPCOptions.Status.UpdateDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateVersion(): shapes.UIntValue {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.VPCOptions.Status.UpdateVersion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.VPCOptions.Status.UpdateVersion', props);
          return request.getResponseField('DomainConfig.VPCOptions.Status.UpdateVersion') as unknown as shapes.UIntValue;
        }
        public get state(): shapes.OptionState {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.VPCOptions.Status.State',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.VPCOptions.Status.State', props);
          return request.getResponseField('DomainConfig.VPCOptions.Status.State') as unknown as shapes.OptionState;
        }
        public get pendingDeletion(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.VPCOptions.Status.PendingDeletion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.VPCOptions.Status.PendingDeletion', props);
          return request.getResponseField('DomainConfig.VPCOptions.Status.PendingDeletion') as unknown as shapes.Boolean;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get status(): InstanceType<typeof UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.VPCOptionsResponse.StatusResponse> {
        return new UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.VPCOptionsResponse.StatusResponse(this.scope, this.resources);
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get vpcOptions(): InstanceType<typeof UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.VPCOptionsResponse> {
      return new UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.VPCOptionsResponse(this.scope, this.resources);
    }
    static CognitoOptionsResponse = class {
      static OptionsResponse = class {
        public get enabled(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.CognitoOptions.Options.Enabled',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.CognitoOptions.Options.Enabled', props);
          return request.getResponseField('DomainConfig.CognitoOptions.Options.Enabled') as unknown as shapes.Boolean;
        }
        public get userPoolId(): shapes.UserPoolId {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.CognitoOptions.Options.UserPoolId',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.CognitoOptions.Options.UserPoolId', props);
          return request.getResponseField('DomainConfig.CognitoOptions.Options.UserPoolId') as unknown as shapes.UserPoolId;
        }
        public get identityPoolId(): shapes.IdentityPoolId {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.CognitoOptions.Options.IdentityPoolId',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.CognitoOptions.Options.IdentityPoolId', props);
          return request.getResponseField('DomainConfig.CognitoOptions.Options.IdentityPoolId') as unknown as shapes.IdentityPoolId;
        }
        public get roleArn(): shapes.RoleArn {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.CognitoOptions.Options.RoleArn',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.CognitoOptions.Options.RoleArn', props);
          return request.getResponseField('DomainConfig.CognitoOptions.Options.RoleArn') as unknown as shapes.RoleArn;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get options(): InstanceType<typeof UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.CognitoOptionsResponse.OptionsResponse> {
        return new UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.CognitoOptionsResponse.OptionsResponse(this.scope, this.resources);
      }
      static StatusResponse = class {
        public get creationDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.CognitoOptions.Status.CreationDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.CognitoOptions.Status.CreationDate', props);
          return request.getResponseField('DomainConfig.CognitoOptions.Status.CreationDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.CognitoOptions.Status.UpdateDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.CognitoOptions.Status.UpdateDate', props);
          return request.getResponseField('DomainConfig.CognitoOptions.Status.UpdateDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateVersion(): shapes.UIntValue {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.CognitoOptions.Status.UpdateVersion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.CognitoOptions.Status.UpdateVersion', props);
          return request.getResponseField('DomainConfig.CognitoOptions.Status.UpdateVersion') as unknown as shapes.UIntValue;
        }
        public get state(): shapes.OptionState {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.CognitoOptions.Status.State',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.CognitoOptions.Status.State', props);
          return request.getResponseField('DomainConfig.CognitoOptions.Status.State') as unknown as shapes.OptionState;
        }
        public get pendingDeletion(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.CognitoOptions.Status.PendingDeletion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.CognitoOptions.Status.PendingDeletion', props);
          return request.getResponseField('DomainConfig.CognitoOptions.Status.PendingDeletion') as unknown as shapes.Boolean;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get status(): InstanceType<typeof UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.CognitoOptionsResponse.StatusResponse> {
        return new UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.CognitoOptionsResponse.StatusResponse(this.scope, this.resources);
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get cognitoOptions(): InstanceType<typeof UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.CognitoOptionsResponse> {
      return new UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.CognitoOptionsResponse(this.scope, this.resources);
    }
    static EncryptionAtRestOptionsResponse = class {
      static OptionsResponse = class {
        public get enabled(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.EncryptionAtRestOptions.Options.Enabled',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.EncryptionAtRestOptions.Options.Enabled', props);
          return request.getResponseField('DomainConfig.EncryptionAtRestOptions.Options.Enabled') as unknown as shapes.Boolean;
        }
        public get kmsKeyId(): shapes.KmsKeyId {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.EncryptionAtRestOptions.Options.KmsKeyId',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.EncryptionAtRestOptions.Options.KmsKeyId', props);
          return request.getResponseField('DomainConfig.EncryptionAtRestOptions.Options.KmsKeyId') as unknown as shapes.KmsKeyId;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get options(): InstanceType<typeof UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.EncryptionAtRestOptionsResponse.OptionsResponse> {
        return new UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.EncryptionAtRestOptionsResponse.OptionsResponse(this.scope, this.resources);
      }
      static StatusResponse = class {
        public get creationDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.EncryptionAtRestOptions.Status.CreationDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.EncryptionAtRestOptions.Status.CreationDate', props);
          return request.getResponseField('DomainConfig.EncryptionAtRestOptions.Status.CreationDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.EncryptionAtRestOptions.Status.UpdateDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.EncryptionAtRestOptions.Status.UpdateDate', props);
          return request.getResponseField('DomainConfig.EncryptionAtRestOptions.Status.UpdateDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateVersion(): shapes.UIntValue {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.EncryptionAtRestOptions.Status.UpdateVersion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.EncryptionAtRestOptions.Status.UpdateVersion', props);
          return request.getResponseField('DomainConfig.EncryptionAtRestOptions.Status.UpdateVersion') as unknown as shapes.UIntValue;
        }
        public get state(): shapes.OptionState {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.EncryptionAtRestOptions.Status.State',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.EncryptionAtRestOptions.Status.State', props);
          return request.getResponseField('DomainConfig.EncryptionAtRestOptions.Status.State') as unknown as shapes.OptionState;
        }
        public get pendingDeletion(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.EncryptionAtRestOptions.Status.PendingDeletion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.EncryptionAtRestOptions.Status.PendingDeletion', props);
          return request.getResponseField('DomainConfig.EncryptionAtRestOptions.Status.PendingDeletion') as unknown as shapes.Boolean;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get status(): InstanceType<typeof UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.EncryptionAtRestOptionsResponse.StatusResponse> {
        return new UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.EncryptionAtRestOptionsResponse.StatusResponse(this.scope, this.resources);
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get encryptionAtRestOptions(): InstanceType<typeof UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.EncryptionAtRestOptionsResponse> {
      return new UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.EncryptionAtRestOptionsResponse(this.scope, this.resources);
    }
    static NodeToNodeEncryptionOptionsResponse = class {
      static OptionsResponse = class {
        public get enabled(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.NodeToNodeEncryptionOptions.Options.Enabled',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.NodeToNodeEncryptionOptions.Options.Enabled', props);
          return request.getResponseField('DomainConfig.NodeToNodeEncryptionOptions.Options.Enabled') as unknown as shapes.Boolean;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get options(): InstanceType<typeof UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.NodeToNodeEncryptionOptionsResponse.OptionsResponse> {
        return new UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.NodeToNodeEncryptionOptionsResponse.OptionsResponse(this.scope, this.resources);
      }
      static StatusResponse = class {
        public get creationDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.NodeToNodeEncryptionOptions.Status.CreationDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.NodeToNodeEncryptionOptions.Status.CreationDate', props);
          return request.getResponseField('DomainConfig.NodeToNodeEncryptionOptions.Status.CreationDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.NodeToNodeEncryptionOptions.Status.UpdateDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.NodeToNodeEncryptionOptions.Status.UpdateDate', props);
          return request.getResponseField('DomainConfig.NodeToNodeEncryptionOptions.Status.UpdateDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateVersion(): shapes.UIntValue {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.NodeToNodeEncryptionOptions.Status.UpdateVersion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.NodeToNodeEncryptionOptions.Status.UpdateVersion', props);
          return request.getResponseField('DomainConfig.NodeToNodeEncryptionOptions.Status.UpdateVersion') as unknown as shapes.UIntValue;
        }
        public get state(): shapes.OptionState {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.NodeToNodeEncryptionOptions.Status.State',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.NodeToNodeEncryptionOptions.Status.State', props);
          return request.getResponseField('DomainConfig.NodeToNodeEncryptionOptions.Status.State') as unknown as shapes.OptionState;
        }
        public get pendingDeletion(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.NodeToNodeEncryptionOptions.Status.PendingDeletion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.NodeToNodeEncryptionOptions.Status.PendingDeletion', props);
          return request.getResponseField('DomainConfig.NodeToNodeEncryptionOptions.Status.PendingDeletion') as unknown as shapes.Boolean;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get status(): InstanceType<typeof UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.NodeToNodeEncryptionOptionsResponse.StatusResponse> {
        return new UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.NodeToNodeEncryptionOptionsResponse.StatusResponse(this.scope, this.resources);
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get nodeToNodeEncryptionOptions(): InstanceType<typeof UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.NodeToNodeEncryptionOptionsResponse> {
      return new UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.NodeToNodeEncryptionOptionsResponse(this.scope, this.resources);
    }
    static AdvancedOptionsResponse = class {
      public get options(): shapes.AdvancedOptions {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'updateElasticsearchDomainConfig',
            service: 'ES',
            outputPath: 'DomainConfig.AdvancedOptions.Options',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.AdvancedOptions.Options', props);
        return request.getResponseField('DomainConfig.AdvancedOptions.Options') as unknown as shapes.AdvancedOptions;
      }
      static StatusResponse = class {
        public get creationDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.AdvancedOptions.Status.CreationDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.AdvancedOptions.Status.CreationDate', props);
          return request.getResponseField('DomainConfig.AdvancedOptions.Status.CreationDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.AdvancedOptions.Status.UpdateDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.AdvancedOptions.Status.UpdateDate', props);
          return request.getResponseField('DomainConfig.AdvancedOptions.Status.UpdateDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateVersion(): shapes.UIntValue {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.AdvancedOptions.Status.UpdateVersion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.AdvancedOptions.Status.UpdateVersion', props);
          return request.getResponseField('DomainConfig.AdvancedOptions.Status.UpdateVersion') as unknown as shapes.UIntValue;
        }
        public get state(): shapes.OptionState {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.AdvancedOptions.Status.State',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.AdvancedOptions.Status.State', props);
          return request.getResponseField('DomainConfig.AdvancedOptions.Status.State') as unknown as shapes.OptionState;
        }
        public get pendingDeletion(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.AdvancedOptions.Status.PendingDeletion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.AdvancedOptions.Status.PendingDeletion', props);
          return request.getResponseField('DomainConfig.AdvancedOptions.Status.PendingDeletion') as unknown as shapes.Boolean;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get status(): InstanceType<typeof UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.AdvancedOptionsResponse.StatusResponse> {
        return new UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.AdvancedOptionsResponse.StatusResponse(this.scope, this.resources);
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get advancedOptions(): InstanceType<typeof UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.AdvancedOptionsResponse> {
      return new UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.AdvancedOptionsResponse(this.scope, this.resources);
    }
    static LogPublishingOptionsResponse = class {
      public get options(): shapes.LogPublishingOptions {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'updateElasticsearchDomainConfig',
            service: 'ES',
            outputPath: 'DomainConfig.LogPublishingOptions.Options',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.LogPublishingOptions.Options', props);
        return request.getResponseField('DomainConfig.LogPublishingOptions.Options') as unknown as shapes.LogPublishingOptions;
      }
      static StatusResponse = class {
        public get creationDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.LogPublishingOptions.Status.CreationDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.LogPublishingOptions.Status.CreationDate', props);
          return request.getResponseField('DomainConfig.LogPublishingOptions.Status.CreationDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.LogPublishingOptions.Status.UpdateDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.LogPublishingOptions.Status.UpdateDate', props);
          return request.getResponseField('DomainConfig.LogPublishingOptions.Status.UpdateDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateVersion(): shapes.UIntValue {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.LogPublishingOptions.Status.UpdateVersion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.LogPublishingOptions.Status.UpdateVersion', props);
          return request.getResponseField('DomainConfig.LogPublishingOptions.Status.UpdateVersion') as unknown as shapes.UIntValue;
        }
        public get state(): shapes.OptionState {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.LogPublishingOptions.Status.State',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.LogPublishingOptions.Status.State', props);
          return request.getResponseField('DomainConfig.LogPublishingOptions.Status.State') as unknown as shapes.OptionState;
        }
        public get pendingDeletion(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.LogPublishingOptions.Status.PendingDeletion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.LogPublishingOptions.Status.PendingDeletion', props);
          return request.getResponseField('DomainConfig.LogPublishingOptions.Status.PendingDeletion') as unknown as shapes.Boolean;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get status(): InstanceType<typeof UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.LogPublishingOptionsResponse.StatusResponse> {
        return new UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.LogPublishingOptionsResponse.StatusResponse(this.scope, this.resources);
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get logPublishingOptions(): InstanceType<typeof UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.LogPublishingOptionsResponse> {
      return new UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.LogPublishingOptionsResponse(this.scope, this.resources);
    }
    static DomainEndpointOptionsResponse = class {
      static OptionsResponse = class {
        public get enforceHttps(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.DomainEndpointOptions.Options.EnforceHTTPS',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.DomainEndpointOptions.Options.EnforceHTTPS', props);
          return request.getResponseField('DomainConfig.DomainEndpointOptions.Options.EnforceHTTPS') as unknown as shapes.Boolean;
        }
        public get tlsSecurityPolicy(): shapes.TLSSecurityPolicy {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.DomainEndpointOptions.Options.TLSSecurityPolicy',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.DomainEndpointOptions.Options.TLSSecurityPolicy', props);
          return request.getResponseField('DomainConfig.DomainEndpointOptions.Options.TLSSecurityPolicy') as unknown as shapes.TLSSecurityPolicy;
        }
        public get customEndpointEnabled(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.DomainEndpointOptions.Options.CustomEndpointEnabled',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.DomainEndpointOptions.Options.CustomEndpointEnabled', props);
          return request.getResponseField('DomainConfig.DomainEndpointOptions.Options.CustomEndpointEnabled') as unknown as shapes.Boolean;
        }
        public get customEndpoint(): shapes.DomainNameFqdn {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.DomainEndpointOptions.Options.CustomEndpoint',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.DomainEndpointOptions.Options.CustomEndpoint', props);
          return request.getResponseField('DomainConfig.DomainEndpointOptions.Options.CustomEndpoint') as unknown as shapes.DomainNameFqdn;
        }
        public get customEndpointCertificateArn(): shapes.ARN {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.DomainEndpointOptions.Options.CustomEndpointCertificateArn',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.DomainEndpointOptions.Options.CustomEndpointCertificateArn', props);
          return request.getResponseField('DomainConfig.DomainEndpointOptions.Options.CustomEndpointCertificateArn') as unknown as shapes.ARN;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get options(): InstanceType<typeof UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.DomainEndpointOptionsResponse.OptionsResponse> {
        return new UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.DomainEndpointOptionsResponse.OptionsResponse(this.scope, this.resources);
      }
      static StatusResponse = class {
        public get creationDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.DomainEndpointOptions.Status.CreationDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.DomainEndpointOptions.Status.CreationDate', props);
          return request.getResponseField('DomainConfig.DomainEndpointOptions.Status.CreationDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.DomainEndpointOptions.Status.UpdateDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.DomainEndpointOptions.Status.UpdateDate', props);
          return request.getResponseField('DomainConfig.DomainEndpointOptions.Status.UpdateDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateVersion(): shapes.UIntValue {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.DomainEndpointOptions.Status.UpdateVersion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.DomainEndpointOptions.Status.UpdateVersion', props);
          return request.getResponseField('DomainConfig.DomainEndpointOptions.Status.UpdateVersion') as unknown as shapes.UIntValue;
        }
        public get state(): shapes.OptionState {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.DomainEndpointOptions.Status.State',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.DomainEndpointOptions.Status.State', props);
          return request.getResponseField('DomainConfig.DomainEndpointOptions.Status.State') as unknown as shapes.OptionState;
        }
        public get pendingDeletion(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.DomainEndpointOptions.Status.PendingDeletion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.DomainEndpointOptions.Status.PendingDeletion', props);
          return request.getResponseField('DomainConfig.DomainEndpointOptions.Status.PendingDeletion') as unknown as shapes.Boolean;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get status(): InstanceType<typeof UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.DomainEndpointOptionsResponse.StatusResponse> {
        return new UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.DomainEndpointOptionsResponse.StatusResponse(this.scope, this.resources);
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get domainEndpointOptions(): InstanceType<typeof UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.DomainEndpointOptionsResponse> {
      return new UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.DomainEndpointOptionsResponse(this.scope, this.resources);
    }
    static AdvancedSecurityOptionsResponse = class {
      static OptionsResponse = class {
        public get enabled(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.AdvancedSecurityOptions.Options.Enabled',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.AdvancedSecurityOptions.Options.Enabled', props);
          return request.getResponseField('DomainConfig.AdvancedSecurityOptions.Options.Enabled') as unknown as shapes.Boolean;
        }
        public get internalUserDatabaseEnabled(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.AdvancedSecurityOptions.Options.InternalUserDatabaseEnabled',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.AdvancedSecurityOptions.Options.InternalUserDatabaseEnabled', props);
          return request.getResponseField('DomainConfig.AdvancedSecurityOptions.Options.InternalUserDatabaseEnabled') as unknown as shapes.Boolean;
        }
        static SAMLOptionsResponse = class {
          public get enabled(): shapes.Boolean {
            const props: cr.AwsCustomResourceProps = {
              onUpdate: {
                action: 'updateElasticsearchDomainConfig',
                service: 'ES',
                outputPath: 'DomainConfig.AdvancedSecurityOptions.Options.SAMLOptions.Enabled',
              },
              policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
            };
            const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.AdvancedSecurityOptions.Options.SAMLOptions.Enabled', props);
            return request.getResponseField('DomainConfig.AdvancedSecurityOptions.Options.SAMLOptions.Enabled') as unknown as shapes.Boolean;
          }
          static IdpResponse = class {
            public get metadataContent(): shapes.SAMLMetadata {
              const props: cr.AwsCustomResourceProps = {
                onUpdate: {
                  action: 'updateElasticsearchDomainConfig',
                  service: 'ES',
                  outputPath: 'DomainConfig.AdvancedSecurityOptions.Options.SAMLOptions.Idp.MetadataContent',
                },
                policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
              };
              const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.AdvancedSecurityOptions.Options.SAMLOptions.Idp.MetadataContent', props);
              return request.getResponseField('DomainConfig.AdvancedSecurityOptions.Options.SAMLOptions.Idp.MetadataContent') as unknown as shapes.SAMLMetadata;
            }
            public get entityId(): shapes.SAMLEntityId {
              const props: cr.AwsCustomResourceProps = {
                onUpdate: {
                  action: 'updateElasticsearchDomainConfig',
                  service: 'ES',
                  outputPath: 'DomainConfig.AdvancedSecurityOptions.Options.SAMLOptions.Idp.EntityId',
                },
                policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
              };
              const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.AdvancedSecurityOptions.Options.SAMLOptions.Idp.EntityId', props);
              return request.getResponseField('DomainConfig.AdvancedSecurityOptions.Options.SAMLOptions.Idp.EntityId') as unknown as shapes.SAMLEntityId;
            }
            constructor(public scope: cdk.Construct, public readonly resources: string[]) {
            }
          }
          public get idp(): InstanceType<typeof UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.AdvancedSecurityOptionsResponse.OptionsResponse.SAMLOptionsResponse.IdpResponse> {
            return new UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.AdvancedSecurityOptionsResponse.OptionsResponse.SAMLOptionsResponse.IdpResponse(this.scope, this.resources);
          }
          public get subjectKey(): shapes.String {
            const props: cr.AwsCustomResourceProps = {
              onUpdate: {
                action: 'updateElasticsearchDomainConfig',
                service: 'ES',
                outputPath: 'DomainConfig.AdvancedSecurityOptions.Options.SAMLOptions.SubjectKey',
              },
              policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
            };
            const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.AdvancedSecurityOptions.Options.SAMLOptions.SubjectKey', props);
            return request.getResponseField('DomainConfig.AdvancedSecurityOptions.Options.SAMLOptions.SubjectKey') as unknown as shapes.String;
          }
          public get rolesKey(): shapes.String {
            const props: cr.AwsCustomResourceProps = {
              onUpdate: {
                action: 'updateElasticsearchDomainConfig',
                service: 'ES',
                outputPath: 'DomainConfig.AdvancedSecurityOptions.Options.SAMLOptions.RolesKey',
              },
              policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
            };
            const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.AdvancedSecurityOptions.Options.SAMLOptions.RolesKey', props);
            return request.getResponseField('DomainConfig.AdvancedSecurityOptions.Options.SAMLOptions.RolesKey') as unknown as shapes.String;
          }
          public get sessionTimeoutMinutes(): shapes.IntegerClass {
            const props: cr.AwsCustomResourceProps = {
              onUpdate: {
                action: 'updateElasticsearchDomainConfig',
                service: 'ES',
                outputPath: 'DomainConfig.AdvancedSecurityOptions.Options.SAMLOptions.SessionTimeoutMinutes',
              },
              policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
            };
            const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.AdvancedSecurityOptions.Options.SAMLOptions.SessionTimeoutMinutes', props);
            return request.getResponseField('DomainConfig.AdvancedSecurityOptions.Options.SAMLOptions.SessionTimeoutMinutes') as unknown as shapes.IntegerClass;
          }
          constructor(public scope: cdk.Construct, public readonly resources: string[]) {
          }
        }
        public get samlOptions(): InstanceType<typeof UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.AdvancedSecurityOptionsResponse.OptionsResponse.SAMLOptionsResponse> {
          return new UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.AdvancedSecurityOptionsResponse.OptionsResponse.SAMLOptionsResponse(this.scope, this.resources);
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get options(): InstanceType<typeof UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.AdvancedSecurityOptionsResponse.OptionsResponse> {
        return new UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.AdvancedSecurityOptionsResponse.OptionsResponse(this.scope, this.resources);
      }
      static StatusResponse = class {
        public get creationDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.AdvancedSecurityOptions.Status.CreationDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.AdvancedSecurityOptions.Status.CreationDate', props);
          return request.getResponseField('DomainConfig.AdvancedSecurityOptions.Status.CreationDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateDate(): shapes.UpdateTimestamp {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.AdvancedSecurityOptions.Status.UpdateDate',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.AdvancedSecurityOptions.Status.UpdateDate', props);
          return request.getResponseField('DomainConfig.AdvancedSecurityOptions.Status.UpdateDate') as unknown as shapes.UpdateTimestamp;
        }
        public get updateVersion(): shapes.UIntValue {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.AdvancedSecurityOptions.Status.UpdateVersion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.AdvancedSecurityOptions.Status.UpdateVersion', props);
          return request.getResponseField('DomainConfig.AdvancedSecurityOptions.Status.UpdateVersion') as unknown as shapes.UIntValue;
        }
        public get state(): shapes.OptionState {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.AdvancedSecurityOptions.Status.State',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.AdvancedSecurityOptions.Status.State', props);
          return request.getResponseField('DomainConfig.AdvancedSecurityOptions.Status.State') as unknown as shapes.OptionState;
        }
        public get pendingDeletion(): shapes.Boolean {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'updateElasticsearchDomainConfig',
              service: 'ES',
              outputPath: 'DomainConfig.AdvancedSecurityOptions.Status.PendingDeletion',
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'UpdateElasticsearchDomainConfig.DomainConfig.AdvancedSecurityOptions.Status.PendingDeletion', props);
          return request.getResponseField('DomainConfig.AdvancedSecurityOptions.Status.PendingDeletion') as unknown as shapes.Boolean;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[]) {
        }
      }
      public get status(): InstanceType<typeof UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.AdvancedSecurityOptionsResponse.StatusResponse> {
        return new UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.AdvancedSecurityOptionsResponse.StatusResponse(this.scope, this.resources);
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get advancedSecurityOptions(): InstanceType<typeof UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.AdvancedSecurityOptionsResponse> {
      return new UpdateElasticsearchDomainConfigResponse.DomainConfigResponse.AdvancedSecurityOptionsResponse(this.scope, this.resources);
    }
    constructor(public scope: cdk.Construct, public readonly resources: string[]) {
    }
  }
  public get domainConfig(): InstanceType<typeof UpdateElasticsearchDomainConfigResponse.DomainConfigResponse> {
    return new UpdateElasticsearchDomainConfigResponse.DomainConfigResponse(this.scope, this.resources);
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], input: shapes.UpdateElasticsearchDomainConfigRequest) {
  }
}
export class UpdatePackageResponse {
  static PackageDetailsResponse = class {
    public get packageId(): shapes.PackageID {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'updatePackage',
          service: 'ES',
          outputPath: 'PackageDetails.PackageID',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'UpdatePackage.PackageDetails.PackageID', props);
      return request.getResponseField('PackageDetails.PackageID') as unknown as shapes.PackageID;
    }
    public get packageName(): shapes.PackageName {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'updatePackage',
          service: 'ES',
          outputPath: 'PackageDetails.PackageName',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'UpdatePackage.PackageDetails.PackageName', props);
      return request.getResponseField('PackageDetails.PackageName') as unknown as shapes.PackageName;
    }
    public get packageType(): shapes.PackageType {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'updatePackage',
          service: 'ES',
          outputPath: 'PackageDetails.PackageType',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'UpdatePackage.PackageDetails.PackageType', props);
      return request.getResponseField('PackageDetails.PackageType') as unknown as shapes.PackageType;
    }
    public get packageDescription(): shapes.PackageDescription {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'updatePackage',
          service: 'ES',
          outputPath: 'PackageDetails.PackageDescription',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'UpdatePackage.PackageDetails.PackageDescription', props);
      return request.getResponseField('PackageDetails.PackageDescription') as unknown as shapes.PackageDescription;
    }
    public get packageStatus(): shapes.PackageStatus {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'updatePackage',
          service: 'ES',
          outputPath: 'PackageDetails.PackageStatus',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'UpdatePackage.PackageDetails.PackageStatus', props);
      return request.getResponseField('PackageDetails.PackageStatus') as unknown as shapes.PackageStatus;
    }
    public get createdAt(): shapes.CreatedAt {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'updatePackage',
          service: 'ES',
          outputPath: 'PackageDetails.CreatedAt',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'UpdatePackage.PackageDetails.CreatedAt', props);
      return request.getResponseField('PackageDetails.CreatedAt') as unknown as shapes.CreatedAt;
    }
    public get lastUpdatedAt(): shapes.LastUpdated {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'updatePackage',
          service: 'ES',
          outputPath: 'PackageDetails.LastUpdatedAt',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'UpdatePackage.PackageDetails.LastUpdatedAt', props);
      return request.getResponseField('PackageDetails.LastUpdatedAt') as unknown as shapes.LastUpdated;
    }
    public get availablePackageVersion(): shapes.PackageVersion {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'updatePackage',
          service: 'ES',
          outputPath: 'PackageDetails.AvailablePackageVersion',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'UpdatePackage.PackageDetails.AvailablePackageVersion', props);
      return request.getResponseField('PackageDetails.AvailablePackageVersion') as unknown as shapes.PackageVersion;
    }
    static ErrorDetailsResponse = class {
      public get errorType(): shapes.ErrorType {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'updatePackage',
            service: 'ES',
            outputPath: 'PackageDetails.ErrorDetails.ErrorType',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'UpdatePackage.PackageDetails.ErrorDetails.ErrorType', props);
        return request.getResponseField('PackageDetails.ErrorDetails.ErrorType') as unknown as shapes.ErrorType;
      }
      public get errorMessage(): shapes.ErrorMessage {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'updatePackage',
            service: 'ES',
            outputPath: 'PackageDetails.ErrorDetails.ErrorMessage',
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'UpdatePackage.PackageDetails.ErrorDetails.ErrorMessage', props);
        return request.getResponseField('PackageDetails.ErrorDetails.ErrorMessage') as unknown as shapes.ErrorMessage;
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[]) {
      }
    }
    public get errorDetails(): InstanceType<typeof UpdatePackageResponse.PackageDetailsResponse.ErrorDetailsResponse> {
      return new UpdatePackageResponse.PackageDetailsResponse.ErrorDetailsResponse(this.scope, this.resources);
    }
    constructor(public scope: cdk.Construct, public readonly resources: string[]) {
    }
  }
  public get packageDetails(): InstanceType<typeof UpdatePackageResponse.PackageDetailsResponse> {
    return new UpdatePackageResponse.PackageDetailsResponse(this.scope, this.resources);
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], input: shapes.UpdatePackageRequest) {
  }
}
export class UpgradeElasticsearchDomainResponse {
  public get domainName(): shapes.DomainName {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'upgradeElasticsearchDomain',
        service: 'ES',
        outputPath: 'DomainName',
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'UpgradeElasticsearchDomain.DomainName', props);
    return request.getResponseField('DomainName') as unknown as shapes.DomainName;
  }
  public get targetVersion(): shapes.ElasticsearchVersionString {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'upgradeElasticsearchDomain',
        service: 'ES',
        outputPath: 'TargetVersion',
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'UpgradeElasticsearchDomain.TargetVersion', props);
    return request.getResponseField('TargetVersion') as unknown as shapes.ElasticsearchVersionString;
  }
  public get performCheckOnly(): shapes.Boolean {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'upgradeElasticsearchDomain',
        service: 'ES',
        outputPath: 'PerformCheckOnly',
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'UpgradeElasticsearchDomain.PerformCheckOnly', props);
    return request.getResponseField('PerformCheckOnly') as unknown as shapes.Boolean;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], input: shapes.UpgradeElasticsearchDomainRequest) {
  }
}
