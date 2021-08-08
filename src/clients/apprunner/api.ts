import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class AppRunnerClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public associateCustomDomain(input: shapes.AppRunnerAssociateCustomDomainRequest): AppRunnerResponsesAssociateCustomDomain {
    return new AppRunnerResponsesAssociateCustomDomain(this, this.__resources, input);
  }

  public createAutoScalingConfiguration(input: shapes.AppRunnerCreateAutoScalingConfigurationRequest): AppRunnerResponsesCreateAutoScalingConfiguration {
    return new AppRunnerResponsesCreateAutoScalingConfiguration(this, this.__resources, input);
  }

  public createConnection(input: shapes.AppRunnerCreateConnectionRequest): AppRunnerResponsesCreateConnection {
    return new AppRunnerResponsesCreateConnection(this, this.__resources, input);
  }

  public createService(input: shapes.AppRunnerCreateServiceRequest): AppRunnerResponsesCreateService {
    return new AppRunnerResponsesCreateService(this, this.__resources, input);
  }

  public deleteAutoScalingConfiguration(input: shapes.AppRunnerDeleteAutoScalingConfigurationRequest): AppRunnerResponsesDeleteAutoScalingConfiguration {
    return new AppRunnerResponsesDeleteAutoScalingConfiguration(this, this.__resources, input);
  }

  public deleteConnection(input: shapes.AppRunnerDeleteConnectionRequest): AppRunnerResponsesDeleteConnection {
    return new AppRunnerResponsesDeleteConnection(this, this.__resources, input);
  }

  public deleteService(input: shapes.AppRunnerDeleteServiceRequest): AppRunnerResponsesDeleteService {
    return new AppRunnerResponsesDeleteService(this, this.__resources, input);
  }

  public describeAutoScalingConfiguration(input: shapes.AppRunnerDescribeAutoScalingConfigurationRequest): AppRunnerResponsesDescribeAutoScalingConfiguration {
    return new AppRunnerResponsesDescribeAutoScalingConfiguration(this, this.__resources, input);
  }

  public describeCustomDomains(input: shapes.AppRunnerDescribeCustomDomainsRequest): AppRunnerResponsesDescribeCustomDomains {
    return new AppRunnerResponsesDescribeCustomDomains(this, this.__resources, input);
  }

  public describeService(input: shapes.AppRunnerDescribeServiceRequest): AppRunnerResponsesDescribeService {
    return new AppRunnerResponsesDescribeService(this, this.__resources, input);
  }

  public disassociateCustomDomain(input: shapes.AppRunnerDisassociateCustomDomainRequest): AppRunnerResponsesDisassociateCustomDomain {
    return new AppRunnerResponsesDisassociateCustomDomain(this, this.__resources, input);
  }

  public listAutoScalingConfigurations(input: shapes.AppRunnerListAutoScalingConfigurationsRequest): AppRunnerResponsesListAutoScalingConfigurations {
    return new AppRunnerResponsesListAutoScalingConfigurations(this, this.__resources, input);
  }

  public listConnections(input: shapes.AppRunnerListConnectionsRequest): AppRunnerResponsesListConnections {
    return new AppRunnerResponsesListConnections(this, this.__resources, input);
  }

  public listOperations(input: shapes.AppRunnerListOperationsRequest): AppRunnerResponsesListOperations {
    return new AppRunnerResponsesListOperations(this, this.__resources, input);
  }

  public listServices(input: shapes.AppRunnerListServicesRequest): AppRunnerResponsesListServices {
    return new AppRunnerResponsesListServices(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.AppRunnerListTagsForResourceRequest): AppRunnerResponsesListTagsForResource {
    return new AppRunnerResponsesListTagsForResource(this, this.__resources, input);
  }

  public pauseService(input: shapes.AppRunnerPauseServiceRequest): AppRunnerResponsesPauseService {
    return new AppRunnerResponsesPauseService(this, this.__resources, input);
  }

  public resumeService(input: shapes.AppRunnerResumeServiceRequest): AppRunnerResponsesResumeService {
    return new AppRunnerResponsesResumeService(this, this.__resources, input);
  }

  public startDeployment(input: shapes.AppRunnerStartDeploymentRequest): AppRunnerResponsesStartDeployment {
    return new AppRunnerResponsesStartDeployment(this, this.__resources, input);
  }

  public tagResource(input: shapes.AppRunnerTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.AppRunnerUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateService(input: shapes.AppRunnerUpdateServiceRequest): AppRunnerResponsesUpdateService {
    return new AppRunnerResponsesUpdateService(this, this.__resources, input);
  }

}

export class AppRunnerResponsesAssociateCustomDomain {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerAssociateCustomDomainRequest) {
  }

  public get dnsTarget(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateCustomDomain',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.AssociateCustomDomain.DNSTarget'),
        outputPath: 'DNSTarget',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          DomainName: this.__input.domainName,
          EnableWWWSubdomain: this.__input.enableWwwSubdomain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateCustomDomain.DNSTarget', props);
    return resource.getResponseField('DNSTarget') as unknown as string;
  }

  public get serviceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateCustomDomain',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.AssociateCustomDomain.ServiceArn'),
        outputPath: 'ServiceArn',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          DomainName: this.__input.domainName,
          EnableWWWSubdomain: this.__input.enableWwwSubdomain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateCustomDomain.ServiceArn', props);
    return resource.getResponseField('ServiceArn') as unknown as string;
  }

  public get customDomain(): AppRunnerResponsesAssociateCustomDomainCustomDomain {
    return new AppRunnerResponsesAssociateCustomDomainCustomDomain(this.__scope, this.__resources, this.__input);
  }

}

export class AppRunnerResponsesAssociateCustomDomainCustomDomain {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerAssociateCustomDomainRequest) {
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateCustomDomain',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.AssociateCustomDomain.CustomDomain.DomainName'),
        outputPath: 'CustomDomain.DomainName',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          DomainName: this.__input.domainName,
          EnableWWWSubdomain: this.__input.enableWwwSubdomain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateCustomDomain.CustomDomain.DomainName', props);
    return resource.getResponseField('CustomDomain.DomainName') as unknown as string;
  }

  public get enableWwwSubdomain(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateCustomDomain',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.AssociateCustomDomain.CustomDomain.EnableWWWSubdomain'),
        outputPath: 'CustomDomain.EnableWWWSubdomain',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          DomainName: this.__input.domainName,
          EnableWWWSubdomain: this.__input.enableWwwSubdomain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateCustomDomain.CustomDomain.EnableWWWSubdomain', props);
    return resource.getResponseField('CustomDomain.EnableWWWSubdomain') as unknown as boolean;
  }

  public get certificateValidationRecords(): shapes.AppRunnerCertificateValidationRecord[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateCustomDomain',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.AssociateCustomDomain.CustomDomain.CertificateValidationRecords'),
        outputPath: 'CustomDomain.CertificateValidationRecords',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          DomainName: this.__input.domainName,
          EnableWWWSubdomain: this.__input.enableWwwSubdomain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateCustomDomain.CustomDomain.CertificateValidationRecords', props);
    return resource.getResponseField('CustomDomain.CertificateValidationRecords') as unknown as shapes.AppRunnerCertificateValidationRecord[];
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateCustomDomain',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.AssociateCustomDomain.CustomDomain.Status'),
        outputPath: 'CustomDomain.Status',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          DomainName: this.__input.domainName,
          EnableWWWSubdomain: this.__input.enableWwwSubdomain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateCustomDomain.CustomDomain.Status', props);
    return resource.getResponseField('CustomDomain.Status') as unknown as string;
  }

}

export class AppRunnerResponsesCreateAutoScalingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerCreateAutoScalingConfigurationRequest) {
  }

  public get autoScalingConfiguration(): AppRunnerResponsesCreateAutoScalingConfigurationAutoScalingConfiguration {
    return new AppRunnerResponsesCreateAutoScalingConfigurationAutoScalingConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class AppRunnerResponsesCreateAutoScalingConfigurationAutoScalingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerCreateAutoScalingConfigurationRequest) {
  }

  public get autoScalingConfigurationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAutoScalingConfiguration',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateAutoScalingConfiguration.AutoScalingConfiguration.AutoScalingConfigurationArn'),
        outputPath: 'AutoScalingConfiguration.AutoScalingConfigurationArn',
        parameters: {
          AutoScalingConfigurationName: this.__input.autoScalingConfigurationName,
          MaxConcurrency: this.__input.maxConcurrency,
          MinSize: this.__input.minSize,
          MaxSize: this.__input.maxSize,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAutoScalingConfiguration.AutoScalingConfiguration.AutoScalingConfigurationArn', props);
    return resource.getResponseField('AutoScalingConfiguration.AutoScalingConfigurationArn') as unknown as string;
  }

  public get autoScalingConfigurationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAutoScalingConfiguration',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateAutoScalingConfiguration.AutoScalingConfiguration.AutoScalingConfigurationName'),
        outputPath: 'AutoScalingConfiguration.AutoScalingConfigurationName',
        parameters: {
          AutoScalingConfigurationName: this.__input.autoScalingConfigurationName,
          MaxConcurrency: this.__input.maxConcurrency,
          MinSize: this.__input.minSize,
          MaxSize: this.__input.maxSize,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAutoScalingConfiguration.AutoScalingConfiguration.AutoScalingConfigurationName', props);
    return resource.getResponseField('AutoScalingConfiguration.AutoScalingConfigurationName') as unknown as string;
  }

  public get autoScalingConfigurationRevision(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAutoScalingConfiguration',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateAutoScalingConfiguration.AutoScalingConfiguration.AutoScalingConfigurationRevision'),
        outputPath: 'AutoScalingConfiguration.AutoScalingConfigurationRevision',
        parameters: {
          AutoScalingConfigurationName: this.__input.autoScalingConfigurationName,
          MaxConcurrency: this.__input.maxConcurrency,
          MinSize: this.__input.minSize,
          MaxSize: this.__input.maxSize,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAutoScalingConfiguration.AutoScalingConfiguration.AutoScalingConfigurationRevision', props);
    return resource.getResponseField('AutoScalingConfiguration.AutoScalingConfigurationRevision') as unknown as number;
  }

  public get latest(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAutoScalingConfiguration',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateAutoScalingConfiguration.AutoScalingConfiguration.Latest'),
        outputPath: 'AutoScalingConfiguration.Latest',
        parameters: {
          AutoScalingConfigurationName: this.__input.autoScalingConfigurationName,
          MaxConcurrency: this.__input.maxConcurrency,
          MinSize: this.__input.minSize,
          MaxSize: this.__input.maxSize,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAutoScalingConfiguration.AutoScalingConfiguration.Latest', props);
    return resource.getResponseField('AutoScalingConfiguration.Latest') as unknown as boolean;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAutoScalingConfiguration',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateAutoScalingConfiguration.AutoScalingConfiguration.Status'),
        outputPath: 'AutoScalingConfiguration.Status',
        parameters: {
          AutoScalingConfigurationName: this.__input.autoScalingConfigurationName,
          MaxConcurrency: this.__input.maxConcurrency,
          MinSize: this.__input.minSize,
          MaxSize: this.__input.maxSize,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAutoScalingConfiguration.AutoScalingConfiguration.Status', props);
    return resource.getResponseField('AutoScalingConfiguration.Status') as unknown as string;
  }

  public get maxConcurrency(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAutoScalingConfiguration',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateAutoScalingConfiguration.AutoScalingConfiguration.MaxConcurrency'),
        outputPath: 'AutoScalingConfiguration.MaxConcurrency',
        parameters: {
          AutoScalingConfigurationName: this.__input.autoScalingConfigurationName,
          MaxConcurrency: this.__input.maxConcurrency,
          MinSize: this.__input.minSize,
          MaxSize: this.__input.maxSize,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAutoScalingConfiguration.AutoScalingConfiguration.MaxConcurrency', props);
    return resource.getResponseField('AutoScalingConfiguration.MaxConcurrency') as unknown as number;
  }

  public get minSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAutoScalingConfiguration',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateAutoScalingConfiguration.AutoScalingConfiguration.MinSize'),
        outputPath: 'AutoScalingConfiguration.MinSize',
        parameters: {
          AutoScalingConfigurationName: this.__input.autoScalingConfigurationName,
          MaxConcurrency: this.__input.maxConcurrency,
          MinSize: this.__input.minSize,
          MaxSize: this.__input.maxSize,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAutoScalingConfiguration.AutoScalingConfiguration.MinSize', props);
    return resource.getResponseField('AutoScalingConfiguration.MinSize') as unknown as number;
  }

  public get maxSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAutoScalingConfiguration',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateAutoScalingConfiguration.AutoScalingConfiguration.MaxSize'),
        outputPath: 'AutoScalingConfiguration.MaxSize',
        parameters: {
          AutoScalingConfigurationName: this.__input.autoScalingConfigurationName,
          MaxConcurrency: this.__input.maxConcurrency,
          MinSize: this.__input.minSize,
          MaxSize: this.__input.maxSize,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAutoScalingConfiguration.AutoScalingConfiguration.MaxSize', props);
    return resource.getResponseField('AutoScalingConfiguration.MaxSize') as unknown as number;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAutoScalingConfiguration',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateAutoScalingConfiguration.AutoScalingConfiguration.CreatedAt'),
        outputPath: 'AutoScalingConfiguration.CreatedAt',
        parameters: {
          AutoScalingConfigurationName: this.__input.autoScalingConfigurationName,
          MaxConcurrency: this.__input.maxConcurrency,
          MinSize: this.__input.minSize,
          MaxSize: this.__input.maxSize,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAutoScalingConfiguration.AutoScalingConfiguration.CreatedAt', props);
    return resource.getResponseField('AutoScalingConfiguration.CreatedAt') as unknown as string;
  }

  public get deletedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAutoScalingConfiguration',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateAutoScalingConfiguration.AutoScalingConfiguration.DeletedAt'),
        outputPath: 'AutoScalingConfiguration.DeletedAt',
        parameters: {
          AutoScalingConfigurationName: this.__input.autoScalingConfigurationName,
          MaxConcurrency: this.__input.maxConcurrency,
          MinSize: this.__input.minSize,
          MaxSize: this.__input.maxSize,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAutoScalingConfiguration.AutoScalingConfiguration.DeletedAt', props);
    return resource.getResponseField('AutoScalingConfiguration.DeletedAt') as unknown as string;
  }

}

export class AppRunnerResponsesCreateConnection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerCreateConnectionRequest) {
  }

  public get connection(): AppRunnerResponsesCreateConnectionConnection {
    return new AppRunnerResponsesCreateConnectionConnection(this.__scope, this.__resources, this.__input);
  }

}

export class AppRunnerResponsesCreateConnectionConnection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerCreateConnectionRequest) {
  }

  public get connectionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConnection',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateConnection.Connection.ConnectionName'),
        outputPath: 'Connection.ConnectionName',
        parameters: {
          ConnectionName: this.__input.connectionName,
          ProviderType: this.__input.providerType,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConnection.Connection.ConnectionName', props);
    return resource.getResponseField('Connection.ConnectionName') as unknown as string;
  }

  public get connectionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConnection',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateConnection.Connection.ConnectionArn'),
        outputPath: 'Connection.ConnectionArn',
        parameters: {
          ConnectionName: this.__input.connectionName,
          ProviderType: this.__input.providerType,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConnection.Connection.ConnectionArn', props);
    return resource.getResponseField('Connection.ConnectionArn') as unknown as string;
  }

  public get providerType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConnection',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateConnection.Connection.ProviderType'),
        outputPath: 'Connection.ProviderType',
        parameters: {
          ConnectionName: this.__input.connectionName,
          ProviderType: this.__input.providerType,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConnection.Connection.ProviderType', props);
    return resource.getResponseField('Connection.ProviderType') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConnection',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateConnection.Connection.Status'),
        outputPath: 'Connection.Status',
        parameters: {
          ConnectionName: this.__input.connectionName,
          ProviderType: this.__input.providerType,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConnection.Connection.Status', props);
    return resource.getResponseField('Connection.Status') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConnection',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateConnection.Connection.CreatedAt'),
        outputPath: 'Connection.CreatedAt',
        parameters: {
          ConnectionName: this.__input.connectionName,
          ProviderType: this.__input.providerType,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConnection.Connection.CreatedAt', props);
    return resource.getResponseField('Connection.CreatedAt') as unknown as string;
  }

}

export class AppRunnerResponsesCreateService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerCreateServiceRequest) {
  }

  public get service(): AppRunnerResponsesCreateServiceService {
    return new AppRunnerResponsesCreateServiceService(this.__scope, this.__resources, this.__input);
  }

  public get operationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateService.OperationId'),
        outputPath: 'OperationId',
        parameters: {
          ServiceName: this.__input.serviceName,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          Tags: this.__input.tags,
          EncryptionConfiguration: {
            KmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class AppRunnerResponsesCreateServiceService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerCreateServiceRequest) {
  }

  public get serviceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateService.Service.ServiceName'),
        outputPath: 'Service.ServiceName',
        parameters: {
          ServiceName: this.__input.serviceName,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          Tags: this.__input.tags,
          EncryptionConfiguration: {
            KmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.ServiceName', props);
    return resource.getResponseField('Service.ServiceName') as unknown as string;
  }

  public get serviceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateService.Service.ServiceId'),
        outputPath: 'Service.ServiceId',
        parameters: {
          ServiceName: this.__input.serviceName,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          Tags: this.__input.tags,
          EncryptionConfiguration: {
            KmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.ServiceId', props);
    return resource.getResponseField('Service.ServiceId') as unknown as string;
  }

  public get serviceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateService.Service.ServiceArn'),
        outputPath: 'Service.ServiceArn',
        parameters: {
          ServiceName: this.__input.serviceName,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          Tags: this.__input.tags,
          EncryptionConfiguration: {
            KmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.ServiceArn', props);
    return resource.getResponseField('Service.ServiceArn') as unknown as string;
  }

  public get serviceUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateService.Service.ServiceUrl'),
        outputPath: 'Service.ServiceUrl',
        parameters: {
          ServiceName: this.__input.serviceName,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          Tags: this.__input.tags,
          EncryptionConfiguration: {
            KmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.ServiceUrl', props);
    return resource.getResponseField('Service.ServiceUrl') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateService.Service.CreatedAt'),
        outputPath: 'Service.CreatedAt',
        parameters: {
          ServiceName: this.__input.serviceName,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          Tags: this.__input.tags,
          EncryptionConfiguration: {
            KmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.CreatedAt', props);
    return resource.getResponseField('Service.CreatedAt') as unknown as string;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateService.Service.UpdatedAt'),
        outputPath: 'Service.UpdatedAt',
        parameters: {
          ServiceName: this.__input.serviceName,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          Tags: this.__input.tags,
          EncryptionConfiguration: {
            KmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.UpdatedAt', props);
    return resource.getResponseField('Service.UpdatedAt') as unknown as string;
  }

  public get deletedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateService.Service.DeletedAt'),
        outputPath: 'Service.DeletedAt',
        parameters: {
          ServiceName: this.__input.serviceName,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          Tags: this.__input.tags,
          EncryptionConfiguration: {
            KmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.DeletedAt', props);
    return resource.getResponseField('Service.DeletedAt') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateService.Service.Status'),
        outputPath: 'Service.Status',
        parameters: {
          ServiceName: this.__input.serviceName,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          Tags: this.__input.tags,
          EncryptionConfiguration: {
            KmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.Status', props);
    return resource.getResponseField('Service.Status') as unknown as string;
  }

  public get sourceConfiguration(): AppRunnerResponsesCreateServiceServiceSourceConfiguration {
    return new AppRunnerResponsesCreateServiceServiceSourceConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get instanceConfiguration(): AppRunnerResponsesCreateServiceServiceInstanceConfiguration {
    return new AppRunnerResponsesCreateServiceServiceInstanceConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get encryptionConfiguration(): AppRunnerResponsesCreateServiceServiceEncryptionConfiguration {
    return new AppRunnerResponsesCreateServiceServiceEncryptionConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get healthCheckConfiguration(): AppRunnerResponsesCreateServiceServiceHealthCheckConfiguration {
    return new AppRunnerResponsesCreateServiceServiceHealthCheckConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get autoScalingConfigurationSummary(): AppRunnerResponsesCreateServiceServiceAutoScalingConfigurationSummary {
    return new AppRunnerResponsesCreateServiceServiceAutoScalingConfigurationSummary(this.__scope, this.__resources, this.__input);
  }

}

export class AppRunnerResponsesCreateServiceServiceSourceConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerCreateServiceRequest) {
  }

  public get codeRepository(): AppRunnerResponsesCreateServiceServiceSourceConfigurationCodeRepository {
    return new AppRunnerResponsesCreateServiceServiceSourceConfigurationCodeRepository(this.__scope, this.__resources, this.__input);
  }

  public get imageRepository(): AppRunnerResponsesCreateServiceServiceSourceConfigurationImageRepository {
    return new AppRunnerResponsesCreateServiceServiceSourceConfigurationImageRepository(this.__scope, this.__resources, this.__input);
  }

  public get autoDeploymentsEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateService.Service.SourceConfiguration.AutoDeploymentsEnabled'),
        outputPath: 'Service.SourceConfiguration.AutoDeploymentsEnabled',
        parameters: {
          ServiceName: this.__input.serviceName,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          Tags: this.__input.tags,
          EncryptionConfiguration: {
            KmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.SourceConfiguration.AutoDeploymentsEnabled', props);
    return resource.getResponseField('Service.SourceConfiguration.AutoDeploymentsEnabled') as unknown as boolean;
  }

  public get authenticationConfiguration(): AppRunnerResponsesCreateServiceServiceSourceConfigurationAuthenticationConfiguration {
    return new AppRunnerResponsesCreateServiceServiceSourceConfigurationAuthenticationConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class AppRunnerResponsesCreateServiceServiceSourceConfigurationCodeRepository {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerCreateServiceRequest) {
  }

  public get repositoryUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateService.Service.SourceConfiguration.CodeRepository.RepositoryUrl'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.RepositoryUrl',
        parameters: {
          ServiceName: this.__input.serviceName,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          Tags: this.__input.tags,
          EncryptionConfiguration: {
            KmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.SourceConfiguration.CodeRepository.RepositoryUrl', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.RepositoryUrl') as unknown as string;
  }

  public get sourceCodeVersion(): AppRunnerResponsesCreateServiceServiceSourceConfigurationCodeRepositorySourceCodeVersion {
    return new AppRunnerResponsesCreateServiceServiceSourceConfigurationCodeRepositorySourceCodeVersion(this.__scope, this.__resources, this.__input);
  }

  public get codeConfiguration(): AppRunnerResponsesCreateServiceServiceSourceConfigurationCodeRepositoryCodeConfiguration {
    return new AppRunnerResponsesCreateServiceServiceSourceConfigurationCodeRepositoryCodeConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class AppRunnerResponsesCreateServiceServiceSourceConfigurationCodeRepositorySourceCodeVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerCreateServiceRequest) {
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateService.Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Type'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Type',
        parameters: {
          ServiceName: this.__input.serviceName,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          Tags: this.__input.tags,
          EncryptionConfiguration: {
            KmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Type', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Type') as unknown as string;
  }

  public get value(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateService.Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Value'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Value',
        parameters: {
          ServiceName: this.__input.serviceName,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          Tags: this.__input.tags,
          EncryptionConfiguration: {
            KmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Value', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Value') as unknown as string;
  }

}

export class AppRunnerResponsesCreateServiceServiceSourceConfigurationCodeRepositoryCodeConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerCreateServiceRequest) {
  }

  public get configurationSource(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.ConfigurationSource'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.CodeConfiguration.ConfigurationSource',
        parameters: {
          ServiceName: this.__input.serviceName,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          Tags: this.__input.tags,
          EncryptionConfiguration: {
            KmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.ConfigurationSource', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.CodeConfiguration.ConfigurationSource') as unknown as string;
  }

  public get codeConfigurationValues(): AppRunnerResponsesCreateServiceServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues {
    return new AppRunnerResponsesCreateServiceServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues(this.__scope, this.__resources, this.__input);
  }

}

export class AppRunnerResponsesCreateServiceServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerCreateServiceRequest) {
  }

  public get runtime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Runtime'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Runtime',
        parameters: {
          ServiceName: this.__input.serviceName,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          Tags: this.__input.tags,
          EncryptionConfiguration: {
            KmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Runtime', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Runtime') as unknown as string;
  }

  public get buildCommand(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.BuildCommand'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.BuildCommand',
        parameters: {
          ServiceName: this.__input.serviceName,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          Tags: this.__input.tags,
          EncryptionConfiguration: {
            KmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.BuildCommand', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.BuildCommand') as unknown as string;
  }

  public get startCommand(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.StartCommand'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.StartCommand',
        parameters: {
          ServiceName: this.__input.serviceName,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          Tags: this.__input.tags,
          EncryptionConfiguration: {
            KmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.StartCommand', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.StartCommand') as unknown as string;
  }

  public get port(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Port'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Port',
        parameters: {
          ServiceName: this.__input.serviceName,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          Tags: this.__input.tags,
          EncryptionConfiguration: {
            KmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Port', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Port') as unknown as string;
  }

  public get runtimeEnvironmentVariables(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.RuntimeEnvironmentVariables'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.RuntimeEnvironmentVariables',
        parameters: {
          ServiceName: this.__input.serviceName,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          Tags: this.__input.tags,
          EncryptionConfiguration: {
            KmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.RuntimeEnvironmentVariables', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.RuntimeEnvironmentVariables') as unknown as Record<string, string>;
  }

}

export class AppRunnerResponsesCreateServiceServiceSourceConfigurationImageRepository {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerCreateServiceRequest) {
  }

  public get imageIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateService.Service.SourceConfiguration.ImageRepository.ImageIdentifier'),
        outputPath: 'Service.SourceConfiguration.ImageRepository.ImageIdentifier',
        parameters: {
          ServiceName: this.__input.serviceName,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          Tags: this.__input.tags,
          EncryptionConfiguration: {
            KmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.SourceConfiguration.ImageRepository.ImageIdentifier', props);
    return resource.getResponseField('Service.SourceConfiguration.ImageRepository.ImageIdentifier') as unknown as string;
  }

  public get imageConfiguration(): AppRunnerResponsesCreateServiceServiceSourceConfigurationImageRepositoryImageConfiguration {
    return new AppRunnerResponsesCreateServiceServiceSourceConfigurationImageRepositoryImageConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get imageRepositoryType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateService.Service.SourceConfiguration.ImageRepository.ImageRepositoryType'),
        outputPath: 'Service.SourceConfiguration.ImageRepository.ImageRepositoryType',
        parameters: {
          ServiceName: this.__input.serviceName,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          Tags: this.__input.tags,
          EncryptionConfiguration: {
            KmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.SourceConfiguration.ImageRepository.ImageRepositoryType', props);
    return resource.getResponseField('Service.SourceConfiguration.ImageRepository.ImageRepositoryType') as unknown as string;
  }

}

export class AppRunnerResponsesCreateServiceServiceSourceConfigurationImageRepositoryImageConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerCreateServiceRequest) {
  }

  public get runtimeEnvironmentVariables(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateService.Service.SourceConfiguration.ImageRepository.ImageConfiguration.RuntimeEnvironmentVariables'),
        outputPath: 'Service.SourceConfiguration.ImageRepository.ImageConfiguration.RuntimeEnvironmentVariables',
        parameters: {
          ServiceName: this.__input.serviceName,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          Tags: this.__input.tags,
          EncryptionConfiguration: {
            KmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.SourceConfiguration.ImageRepository.ImageConfiguration.RuntimeEnvironmentVariables', props);
    return resource.getResponseField('Service.SourceConfiguration.ImageRepository.ImageConfiguration.RuntimeEnvironmentVariables') as unknown as Record<string, string>;
  }

  public get startCommand(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateService.Service.SourceConfiguration.ImageRepository.ImageConfiguration.StartCommand'),
        outputPath: 'Service.SourceConfiguration.ImageRepository.ImageConfiguration.StartCommand',
        parameters: {
          ServiceName: this.__input.serviceName,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          Tags: this.__input.tags,
          EncryptionConfiguration: {
            KmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.SourceConfiguration.ImageRepository.ImageConfiguration.StartCommand', props);
    return resource.getResponseField('Service.SourceConfiguration.ImageRepository.ImageConfiguration.StartCommand') as unknown as string;
  }

  public get port(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateService.Service.SourceConfiguration.ImageRepository.ImageConfiguration.Port'),
        outputPath: 'Service.SourceConfiguration.ImageRepository.ImageConfiguration.Port',
        parameters: {
          ServiceName: this.__input.serviceName,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          Tags: this.__input.tags,
          EncryptionConfiguration: {
            KmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.SourceConfiguration.ImageRepository.ImageConfiguration.Port', props);
    return resource.getResponseField('Service.SourceConfiguration.ImageRepository.ImageConfiguration.Port') as unknown as string;
  }

}

export class AppRunnerResponsesCreateServiceServiceSourceConfigurationAuthenticationConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerCreateServiceRequest) {
  }

  public get connectionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateService.Service.SourceConfiguration.AuthenticationConfiguration.ConnectionArn'),
        outputPath: 'Service.SourceConfiguration.AuthenticationConfiguration.ConnectionArn',
        parameters: {
          ServiceName: this.__input.serviceName,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          Tags: this.__input.tags,
          EncryptionConfiguration: {
            KmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.SourceConfiguration.AuthenticationConfiguration.ConnectionArn', props);
    return resource.getResponseField('Service.SourceConfiguration.AuthenticationConfiguration.ConnectionArn') as unknown as string;
  }

  public get accessRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateService.Service.SourceConfiguration.AuthenticationConfiguration.AccessRoleArn'),
        outputPath: 'Service.SourceConfiguration.AuthenticationConfiguration.AccessRoleArn',
        parameters: {
          ServiceName: this.__input.serviceName,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          Tags: this.__input.tags,
          EncryptionConfiguration: {
            KmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.SourceConfiguration.AuthenticationConfiguration.AccessRoleArn', props);
    return resource.getResponseField('Service.SourceConfiguration.AuthenticationConfiguration.AccessRoleArn') as unknown as string;
  }

}

export class AppRunnerResponsesCreateServiceServiceInstanceConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerCreateServiceRequest) {
  }

  public get cpu(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateService.Service.InstanceConfiguration.Cpu'),
        outputPath: 'Service.InstanceConfiguration.Cpu',
        parameters: {
          ServiceName: this.__input.serviceName,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          Tags: this.__input.tags,
          EncryptionConfiguration: {
            KmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.InstanceConfiguration.Cpu', props);
    return resource.getResponseField('Service.InstanceConfiguration.Cpu') as unknown as string;
  }

  public get memory(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateService.Service.InstanceConfiguration.Memory'),
        outputPath: 'Service.InstanceConfiguration.Memory',
        parameters: {
          ServiceName: this.__input.serviceName,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          Tags: this.__input.tags,
          EncryptionConfiguration: {
            KmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.InstanceConfiguration.Memory', props);
    return resource.getResponseField('Service.InstanceConfiguration.Memory') as unknown as string;
  }

  public get instanceRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateService.Service.InstanceConfiguration.InstanceRoleArn'),
        outputPath: 'Service.InstanceConfiguration.InstanceRoleArn',
        parameters: {
          ServiceName: this.__input.serviceName,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          Tags: this.__input.tags,
          EncryptionConfiguration: {
            KmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.InstanceConfiguration.InstanceRoleArn', props);
    return resource.getResponseField('Service.InstanceConfiguration.InstanceRoleArn') as unknown as string;
  }

}

export class AppRunnerResponsesCreateServiceServiceEncryptionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerCreateServiceRequest) {
  }

  public get kmsKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateService.Service.EncryptionConfiguration.KmsKey'),
        outputPath: 'Service.EncryptionConfiguration.KmsKey',
        parameters: {
          ServiceName: this.__input.serviceName,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          Tags: this.__input.tags,
          EncryptionConfiguration: {
            KmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.EncryptionConfiguration.KmsKey', props);
    return resource.getResponseField('Service.EncryptionConfiguration.KmsKey') as unknown as string;
  }

}

export class AppRunnerResponsesCreateServiceServiceHealthCheckConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerCreateServiceRequest) {
  }

  public get protocol(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateService.Service.HealthCheckConfiguration.Protocol'),
        outputPath: 'Service.HealthCheckConfiguration.Protocol',
        parameters: {
          ServiceName: this.__input.serviceName,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          Tags: this.__input.tags,
          EncryptionConfiguration: {
            KmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.HealthCheckConfiguration.Protocol', props);
    return resource.getResponseField('Service.HealthCheckConfiguration.Protocol') as unknown as string;
  }

  public get path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateService.Service.HealthCheckConfiguration.Path'),
        outputPath: 'Service.HealthCheckConfiguration.Path',
        parameters: {
          ServiceName: this.__input.serviceName,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          Tags: this.__input.tags,
          EncryptionConfiguration: {
            KmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.HealthCheckConfiguration.Path', props);
    return resource.getResponseField('Service.HealthCheckConfiguration.Path') as unknown as string;
  }

  public get interval(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateService.Service.HealthCheckConfiguration.Interval'),
        outputPath: 'Service.HealthCheckConfiguration.Interval',
        parameters: {
          ServiceName: this.__input.serviceName,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          Tags: this.__input.tags,
          EncryptionConfiguration: {
            KmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.HealthCheckConfiguration.Interval', props);
    return resource.getResponseField('Service.HealthCheckConfiguration.Interval') as unknown as number;
  }

  public get timeout(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateService.Service.HealthCheckConfiguration.Timeout'),
        outputPath: 'Service.HealthCheckConfiguration.Timeout',
        parameters: {
          ServiceName: this.__input.serviceName,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          Tags: this.__input.tags,
          EncryptionConfiguration: {
            KmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.HealthCheckConfiguration.Timeout', props);
    return resource.getResponseField('Service.HealthCheckConfiguration.Timeout') as unknown as number;
  }

  public get healthyThreshold(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateService.Service.HealthCheckConfiguration.HealthyThreshold'),
        outputPath: 'Service.HealthCheckConfiguration.HealthyThreshold',
        parameters: {
          ServiceName: this.__input.serviceName,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          Tags: this.__input.tags,
          EncryptionConfiguration: {
            KmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.HealthCheckConfiguration.HealthyThreshold', props);
    return resource.getResponseField('Service.HealthCheckConfiguration.HealthyThreshold') as unknown as number;
  }

  public get unhealthyThreshold(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateService.Service.HealthCheckConfiguration.UnhealthyThreshold'),
        outputPath: 'Service.HealthCheckConfiguration.UnhealthyThreshold',
        parameters: {
          ServiceName: this.__input.serviceName,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          Tags: this.__input.tags,
          EncryptionConfiguration: {
            KmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.HealthCheckConfiguration.UnhealthyThreshold', props);
    return resource.getResponseField('Service.HealthCheckConfiguration.UnhealthyThreshold') as unknown as number;
  }

}

export class AppRunnerResponsesCreateServiceServiceAutoScalingConfigurationSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerCreateServiceRequest) {
  }

  public get autoScalingConfigurationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateService.Service.AutoScalingConfigurationSummary.AutoScalingConfigurationArn'),
        outputPath: 'Service.AutoScalingConfigurationSummary.AutoScalingConfigurationArn',
        parameters: {
          ServiceName: this.__input.serviceName,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          Tags: this.__input.tags,
          EncryptionConfiguration: {
            KmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.AutoScalingConfigurationSummary.AutoScalingConfigurationArn', props);
    return resource.getResponseField('Service.AutoScalingConfigurationSummary.AutoScalingConfigurationArn') as unknown as string;
  }

  public get autoScalingConfigurationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateService.Service.AutoScalingConfigurationSummary.AutoScalingConfigurationName'),
        outputPath: 'Service.AutoScalingConfigurationSummary.AutoScalingConfigurationName',
        parameters: {
          ServiceName: this.__input.serviceName,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          Tags: this.__input.tags,
          EncryptionConfiguration: {
            KmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.AutoScalingConfigurationSummary.AutoScalingConfigurationName', props);
    return resource.getResponseField('Service.AutoScalingConfigurationSummary.AutoScalingConfigurationName') as unknown as string;
  }

  public get autoScalingConfigurationRevision(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.CreateService.Service.AutoScalingConfigurationSummary.AutoScalingConfigurationRevision'),
        outputPath: 'Service.AutoScalingConfigurationSummary.AutoScalingConfigurationRevision',
        parameters: {
          ServiceName: this.__input.serviceName,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          Tags: this.__input.tags,
          EncryptionConfiguration: {
            KmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.AutoScalingConfigurationSummary.AutoScalingConfigurationRevision', props);
    return resource.getResponseField('Service.AutoScalingConfigurationSummary.AutoScalingConfigurationRevision') as unknown as number;
  }

}

export class AppRunnerResponsesDeleteAutoScalingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerDeleteAutoScalingConfigurationRequest) {
  }

  public get autoScalingConfiguration(): AppRunnerResponsesDeleteAutoScalingConfigurationAutoScalingConfiguration {
    return new AppRunnerResponsesDeleteAutoScalingConfigurationAutoScalingConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class AppRunnerResponsesDeleteAutoScalingConfigurationAutoScalingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerDeleteAutoScalingConfigurationRequest) {
  }

  public get autoScalingConfigurationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAutoScalingConfiguration',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteAutoScalingConfiguration.AutoScalingConfiguration.AutoScalingConfigurationArn'),
        outputPath: 'AutoScalingConfiguration.AutoScalingConfigurationArn',
        parameters: {
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAutoScalingConfiguration.AutoScalingConfiguration.AutoScalingConfigurationArn', props);
    return resource.getResponseField('AutoScalingConfiguration.AutoScalingConfigurationArn') as unknown as string;
  }

  public get autoScalingConfigurationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAutoScalingConfiguration',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteAutoScalingConfiguration.AutoScalingConfiguration.AutoScalingConfigurationName'),
        outputPath: 'AutoScalingConfiguration.AutoScalingConfigurationName',
        parameters: {
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAutoScalingConfiguration.AutoScalingConfiguration.AutoScalingConfigurationName', props);
    return resource.getResponseField('AutoScalingConfiguration.AutoScalingConfigurationName') as unknown as string;
  }

  public get autoScalingConfigurationRevision(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAutoScalingConfiguration',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteAutoScalingConfiguration.AutoScalingConfiguration.AutoScalingConfigurationRevision'),
        outputPath: 'AutoScalingConfiguration.AutoScalingConfigurationRevision',
        parameters: {
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAutoScalingConfiguration.AutoScalingConfiguration.AutoScalingConfigurationRevision', props);
    return resource.getResponseField('AutoScalingConfiguration.AutoScalingConfigurationRevision') as unknown as number;
  }

  public get latest(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAutoScalingConfiguration',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteAutoScalingConfiguration.AutoScalingConfiguration.Latest'),
        outputPath: 'AutoScalingConfiguration.Latest',
        parameters: {
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAutoScalingConfiguration.AutoScalingConfiguration.Latest', props);
    return resource.getResponseField('AutoScalingConfiguration.Latest') as unknown as boolean;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAutoScalingConfiguration',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteAutoScalingConfiguration.AutoScalingConfiguration.Status'),
        outputPath: 'AutoScalingConfiguration.Status',
        parameters: {
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAutoScalingConfiguration.AutoScalingConfiguration.Status', props);
    return resource.getResponseField('AutoScalingConfiguration.Status') as unknown as string;
  }

  public get maxConcurrency(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAutoScalingConfiguration',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteAutoScalingConfiguration.AutoScalingConfiguration.MaxConcurrency'),
        outputPath: 'AutoScalingConfiguration.MaxConcurrency',
        parameters: {
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAutoScalingConfiguration.AutoScalingConfiguration.MaxConcurrency', props);
    return resource.getResponseField('AutoScalingConfiguration.MaxConcurrency') as unknown as number;
  }

  public get minSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAutoScalingConfiguration',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteAutoScalingConfiguration.AutoScalingConfiguration.MinSize'),
        outputPath: 'AutoScalingConfiguration.MinSize',
        parameters: {
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAutoScalingConfiguration.AutoScalingConfiguration.MinSize', props);
    return resource.getResponseField('AutoScalingConfiguration.MinSize') as unknown as number;
  }

  public get maxSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAutoScalingConfiguration',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteAutoScalingConfiguration.AutoScalingConfiguration.MaxSize'),
        outputPath: 'AutoScalingConfiguration.MaxSize',
        parameters: {
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAutoScalingConfiguration.AutoScalingConfiguration.MaxSize', props);
    return resource.getResponseField('AutoScalingConfiguration.MaxSize') as unknown as number;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAutoScalingConfiguration',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteAutoScalingConfiguration.AutoScalingConfiguration.CreatedAt'),
        outputPath: 'AutoScalingConfiguration.CreatedAt',
        parameters: {
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAutoScalingConfiguration.AutoScalingConfiguration.CreatedAt', props);
    return resource.getResponseField('AutoScalingConfiguration.CreatedAt') as unknown as string;
  }

  public get deletedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAutoScalingConfiguration',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteAutoScalingConfiguration.AutoScalingConfiguration.DeletedAt'),
        outputPath: 'AutoScalingConfiguration.DeletedAt',
        parameters: {
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAutoScalingConfiguration.AutoScalingConfiguration.DeletedAt', props);
    return resource.getResponseField('AutoScalingConfiguration.DeletedAt') as unknown as string;
  }

}

export class AppRunnerResponsesDeleteConnection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerDeleteConnectionRequest) {
  }

  public get connection(): AppRunnerResponsesDeleteConnectionConnection {
    return new AppRunnerResponsesDeleteConnectionConnection(this.__scope, this.__resources, this.__input);
  }

}

export class AppRunnerResponsesDeleteConnectionConnection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerDeleteConnectionRequest) {
  }

  public get connectionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConnection',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteConnection.Connection.ConnectionName'),
        outputPath: 'Connection.ConnectionName',
        parameters: {
          ConnectionArn: this.__input.connectionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteConnection.Connection.ConnectionName', props);
    return resource.getResponseField('Connection.ConnectionName') as unknown as string;
  }

  public get connectionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConnection',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteConnection.Connection.ConnectionArn'),
        outputPath: 'Connection.ConnectionArn',
        parameters: {
          ConnectionArn: this.__input.connectionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteConnection.Connection.ConnectionArn', props);
    return resource.getResponseField('Connection.ConnectionArn') as unknown as string;
  }

  public get providerType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConnection',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteConnection.Connection.ProviderType'),
        outputPath: 'Connection.ProviderType',
        parameters: {
          ConnectionArn: this.__input.connectionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteConnection.Connection.ProviderType', props);
    return resource.getResponseField('Connection.ProviderType') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConnection',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteConnection.Connection.Status'),
        outputPath: 'Connection.Status',
        parameters: {
          ConnectionArn: this.__input.connectionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteConnection.Connection.Status', props);
    return resource.getResponseField('Connection.Status') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConnection',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteConnection.Connection.CreatedAt'),
        outputPath: 'Connection.CreatedAt',
        parameters: {
          ConnectionArn: this.__input.connectionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteConnection.Connection.CreatedAt', props);
    return resource.getResponseField('Connection.CreatedAt') as unknown as string;
  }

}

export class AppRunnerResponsesDeleteService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerDeleteServiceRequest) {
  }

  public get service(): AppRunnerResponsesDeleteServiceService {
    return new AppRunnerResponsesDeleteServiceService(this.__scope, this.__resources, this.__input);
  }

  public get operationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteService.OperationId'),
        outputPath: 'OperationId',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class AppRunnerResponsesDeleteServiceService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerDeleteServiceRequest) {
  }

  public get serviceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteService.Service.ServiceName'),
        outputPath: 'Service.ServiceName',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.Service.ServiceName', props);
    return resource.getResponseField('Service.ServiceName') as unknown as string;
  }

  public get serviceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteService.Service.ServiceId'),
        outputPath: 'Service.ServiceId',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.Service.ServiceId', props);
    return resource.getResponseField('Service.ServiceId') as unknown as string;
  }

  public get serviceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteService.Service.ServiceArn'),
        outputPath: 'Service.ServiceArn',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.Service.ServiceArn', props);
    return resource.getResponseField('Service.ServiceArn') as unknown as string;
  }

  public get serviceUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteService.Service.ServiceUrl'),
        outputPath: 'Service.ServiceUrl',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.Service.ServiceUrl', props);
    return resource.getResponseField('Service.ServiceUrl') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteService.Service.CreatedAt'),
        outputPath: 'Service.CreatedAt',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.Service.CreatedAt', props);
    return resource.getResponseField('Service.CreatedAt') as unknown as string;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteService.Service.UpdatedAt'),
        outputPath: 'Service.UpdatedAt',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.Service.UpdatedAt', props);
    return resource.getResponseField('Service.UpdatedAt') as unknown as string;
  }

  public get deletedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteService.Service.DeletedAt'),
        outputPath: 'Service.DeletedAt',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.Service.DeletedAt', props);
    return resource.getResponseField('Service.DeletedAt') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteService.Service.Status'),
        outputPath: 'Service.Status',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.Service.Status', props);
    return resource.getResponseField('Service.Status') as unknown as string;
  }

  public get sourceConfiguration(): AppRunnerResponsesDeleteServiceServiceSourceConfiguration {
    return new AppRunnerResponsesDeleteServiceServiceSourceConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get instanceConfiguration(): AppRunnerResponsesDeleteServiceServiceInstanceConfiguration {
    return new AppRunnerResponsesDeleteServiceServiceInstanceConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get encryptionConfiguration(): AppRunnerResponsesDeleteServiceServiceEncryptionConfiguration {
    return new AppRunnerResponsesDeleteServiceServiceEncryptionConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get healthCheckConfiguration(): AppRunnerResponsesDeleteServiceServiceHealthCheckConfiguration {
    return new AppRunnerResponsesDeleteServiceServiceHealthCheckConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get autoScalingConfigurationSummary(): AppRunnerResponsesDeleteServiceServiceAutoScalingConfigurationSummary {
    return new AppRunnerResponsesDeleteServiceServiceAutoScalingConfigurationSummary(this.__scope, this.__resources, this.__input);
  }

}

export class AppRunnerResponsesDeleteServiceServiceSourceConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerDeleteServiceRequest) {
  }

  public get codeRepository(): AppRunnerResponsesDeleteServiceServiceSourceConfigurationCodeRepository {
    return new AppRunnerResponsesDeleteServiceServiceSourceConfigurationCodeRepository(this.__scope, this.__resources, this.__input);
  }

  public get imageRepository(): AppRunnerResponsesDeleteServiceServiceSourceConfigurationImageRepository {
    return new AppRunnerResponsesDeleteServiceServiceSourceConfigurationImageRepository(this.__scope, this.__resources, this.__input);
  }

  public get autoDeploymentsEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteService.Service.SourceConfiguration.AutoDeploymentsEnabled'),
        outputPath: 'Service.SourceConfiguration.AutoDeploymentsEnabled',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.Service.SourceConfiguration.AutoDeploymentsEnabled', props);
    return resource.getResponseField('Service.SourceConfiguration.AutoDeploymentsEnabled') as unknown as boolean;
  }

  public get authenticationConfiguration(): AppRunnerResponsesDeleteServiceServiceSourceConfigurationAuthenticationConfiguration {
    return new AppRunnerResponsesDeleteServiceServiceSourceConfigurationAuthenticationConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class AppRunnerResponsesDeleteServiceServiceSourceConfigurationCodeRepository {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerDeleteServiceRequest) {
  }

  public get repositoryUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteService.Service.SourceConfiguration.CodeRepository.RepositoryUrl'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.RepositoryUrl',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.Service.SourceConfiguration.CodeRepository.RepositoryUrl', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.RepositoryUrl') as unknown as string;
  }

  public get sourceCodeVersion(): AppRunnerResponsesDeleteServiceServiceSourceConfigurationCodeRepositorySourceCodeVersion {
    return new AppRunnerResponsesDeleteServiceServiceSourceConfigurationCodeRepositorySourceCodeVersion(this.__scope, this.__resources, this.__input);
  }

  public get codeConfiguration(): AppRunnerResponsesDeleteServiceServiceSourceConfigurationCodeRepositoryCodeConfiguration {
    return new AppRunnerResponsesDeleteServiceServiceSourceConfigurationCodeRepositoryCodeConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class AppRunnerResponsesDeleteServiceServiceSourceConfigurationCodeRepositorySourceCodeVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerDeleteServiceRequest) {
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteService.Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Type'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Type',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Type', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Type') as unknown as string;
  }

  public get value(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteService.Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Value'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Value',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Value', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Value') as unknown as string;
  }

}

export class AppRunnerResponsesDeleteServiceServiceSourceConfigurationCodeRepositoryCodeConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerDeleteServiceRequest) {
  }

  public get configurationSource(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.ConfigurationSource'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.CodeConfiguration.ConfigurationSource',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.ConfigurationSource', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.CodeConfiguration.ConfigurationSource') as unknown as string;
  }

  public get codeConfigurationValues(): AppRunnerResponsesDeleteServiceServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues {
    return new AppRunnerResponsesDeleteServiceServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues(this.__scope, this.__resources, this.__input);
  }

}

export class AppRunnerResponsesDeleteServiceServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerDeleteServiceRequest) {
  }

  public get runtime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Runtime'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Runtime',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Runtime', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Runtime') as unknown as string;
  }

  public get buildCommand(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.BuildCommand'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.BuildCommand',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.BuildCommand', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.BuildCommand') as unknown as string;
  }

  public get startCommand(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.StartCommand'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.StartCommand',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.StartCommand', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.StartCommand') as unknown as string;
  }

  public get port(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Port'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Port',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Port', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Port') as unknown as string;
  }

  public get runtimeEnvironmentVariables(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.RuntimeEnvironmentVariables'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.RuntimeEnvironmentVariables',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.RuntimeEnvironmentVariables', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.RuntimeEnvironmentVariables') as unknown as Record<string, string>;
  }

}

export class AppRunnerResponsesDeleteServiceServiceSourceConfigurationImageRepository {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerDeleteServiceRequest) {
  }

  public get imageIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteService.Service.SourceConfiguration.ImageRepository.ImageIdentifier'),
        outputPath: 'Service.SourceConfiguration.ImageRepository.ImageIdentifier',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.Service.SourceConfiguration.ImageRepository.ImageIdentifier', props);
    return resource.getResponseField('Service.SourceConfiguration.ImageRepository.ImageIdentifier') as unknown as string;
  }

  public get imageConfiguration(): AppRunnerResponsesDeleteServiceServiceSourceConfigurationImageRepositoryImageConfiguration {
    return new AppRunnerResponsesDeleteServiceServiceSourceConfigurationImageRepositoryImageConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get imageRepositoryType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteService.Service.SourceConfiguration.ImageRepository.ImageRepositoryType'),
        outputPath: 'Service.SourceConfiguration.ImageRepository.ImageRepositoryType',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.Service.SourceConfiguration.ImageRepository.ImageRepositoryType', props);
    return resource.getResponseField('Service.SourceConfiguration.ImageRepository.ImageRepositoryType') as unknown as string;
  }

}

export class AppRunnerResponsesDeleteServiceServiceSourceConfigurationImageRepositoryImageConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerDeleteServiceRequest) {
  }

  public get runtimeEnvironmentVariables(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteService.Service.SourceConfiguration.ImageRepository.ImageConfiguration.RuntimeEnvironmentVariables'),
        outputPath: 'Service.SourceConfiguration.ImageRepository.ImageConfiguration.RuntimeEnvironmentVariables',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.Service.SourceConfiguration.ImageRepository.ImageConfiguration.RuntimeEnvironmentVariables', props);
    return resource.getResponseField('Service.SourceConfiguration.ImageRepository.ImageConfiguration.RuntimeEnvironmentVariables') as unknown as Record<string, string>;
  }

  public get startCommand(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteService.Service.SourceConfiguration.ImageRepository.ImageConfiguration.StartCommand'),
        outputPath: 'Service.SourceConfiguration.ImageRepository.ImageConfiguration.StartCommand',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.Service.SourceConfiguration.ImageRepository.ImageConfiguration.StartCommand', props);
    return resource.getResponseField('Service.SourceConfiguration.ImageRepository.ImageConfiguration.StartCommand') as unknown as string;
  }

  public get port(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteService.Service.SourceConfiguration.ImageRepository.ImageConfiguration.Port'),
        outputPath: 'Service.SourceConfiguration.ImageRepository.ImageConfiguration.Port',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.Service.SourceConfiguration.ImageRepository.ImageConfiguration.Port', props);
    return resource.getResponseField('Service.SourceConfiguration.ImageRepository.ImageConfiguration.Port') as unknown as string;
  }

}

export class AppRunnerResponsesDeleteServiceServiceSourceConfigurationAuthenticationConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerDeleteServiceRequest) {
  }

  public get connectionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteService.Service.SourceConfiguration.AuthenticationConfiguration.ConnectionArn'),
        outputPath: 'Service.SourceConfiguration.AuthenticationConfiguration.ConnectionArn',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.Service.SourceConfiguration.AuthenticationConfiguration.ConnectionArn', props);
    return resource.getResponseField('Service.SourceConfiguration.AuthenticationConfiguration.ConnectionArn') as unknown as string;
  }

  public get accessRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteService.Service.SourceConfiguration.AuthenticationConfiguration.AccessRoleArn'),
        outputPath: 'Service.SourceConfiguration.AuthenticationConfiguration.AccessRoleArn',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.Service.SourceConfiguration.AuthenticationConfiguration.AccessRoleArn', props);
    return resource.getResponseField('Service.SourceConfiguration.AuthenticationConfiguration.AccessRoleArn') as unknown as string;
  }

}

export class AppRunnerResponsesDeleteServiceServiceInstanceConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerDeleteServiceRequest) {
  }

  public get cpu(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteService.Service.InstanceConfiguration.Cpu'),
        outputPath: 'Service.InstanceConfiguration.Cpu',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.Service.InstanceConfiguration.Cpu', props);
    return resource.getResponseField('Service.InstanceConfiguration.Cpu') as unknown as string;
  }

  public get memory(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteService.Service.InstanceConfiguration.Memory'),
        outputPath: 'Service.InstanceConfiguration.Memory',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.Service.InstanceConfiguration.Memory', props);
    return resource.getResponseField('Service.InstanceConfiguration.Memory') as unknown as string;
  }

  public get instanceRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteService.Service.InstanceConfiguration.InstanceRoleArn'),
        outputPath: 'Service.InstanceConfiguration.InstanceRoleArn',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.Service.InstanceConfiguration.InstanceRoleArn', props);
    return resource.getResponseField('Service.InstanceConfiguration.InstanceRoleArn') as unknown as string;
  }

}

export class AppRunnerResponsesDeleteServiceServiceEncryptionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerDeleteServiceRequest) {
  }

  public get kmsKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteService.Service.EncryptionConfiguration.KmsKey'),
        outputPath: 'Service.EncryptionConfiguration.KmsKey',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.Service.EncryptionConfiguration.KmsKey', props);
    return resource.getResponseField('Service.EncryptionConfiguration.KmsKey') as unknown as string;
  }

}

export class AppRunnerResponsesDeleteServiceServiceHealthCheckConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerDeleteServiceRequest) {
  }

  public get protocol(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteService.Service.HealthCheckConfiguration.Protocol'),
        outputPath: 'Service.HealthCheckConfiguration.Protocol',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.Service.HealthCheckConfiguration.Protocol', props);
    return resource.getResponseField('Service.HealthCheckConfiguration.Protocol') as unknown as string;
  }

  public get path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteService.Service.HealthCheckConfiguration.Path'),
        outputPath: 'Service.HealthCheckConfiguration.Path',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.Service.HealthCheckConfiguration.Path', props);
    return resource.getResponseField('Service.HealthCheckConfiguration.Path') as unknown as string;
  }

  public get interval(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteService.Service.HealthCheckConfiguration.Interval'),
        outputPath: 'Service.HealthCheckConfiguration.Interval',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.Service.HealthCheckConfiguration.Interval', props);
    return resource.getResponseField('Service.HealthCheckConfiguration.Interval') as unknown as number;
  }

  public get timeout(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteService.Service.HealthCheckConfiguration.Timeout'),
        outputPath: 'Service.HealthCheckConfiguration.Timeout',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.Service.HealthCheckConfiguration.Timeout', props);
    return resource.getResponseField('Service.HealthCheckConfiguration.Timeout') as unknown as number;
  }

  public get healthyThreshold(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteService.Service.HealthCheckConfiguration.HealthyThreshold'),
        outputPath: 'Service.HealthCheckConfiguration.HealthyThreshold',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.Service.HealthCheckConfiguration.HealthyThreshold', props);
    return resource.getResponseField('Service.HealthCheckConfiguration.HealthyThreshold') as unknown as number;
  }

  public get unhealthyThreshold(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteService.Service.HealthCheckConfiguration.UnhealthyThreshold'),
        outputPath: 'Service.HealthCheckConfiguration.UnhealthyThreshold',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.Service.HealthCheckConfiguration.UnhealthyThreshold', props);
    return resource.getResponseField('Service.HealthCheckConfiguration.UnhealthyThreshold') as unknown as number;
  }

}

export class AppRunnerResponsesDeleteServiceServiceAutoScalingConfigurationSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerDeleteServiceRequest) {
  }

  public get autoScalingConfigurationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteService.Service.AutoScalingConfigurationSummary.AutoScalingConfigurationArn'),
        outputPath: 'Service.AutoScalingConfigurationSummary.AutoScalingConfigurationArn',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.Service.AutoScalingConfigurationSummary.AutoScalingConfigurationArn', props);
    return resource.getResponseField('Service.AutoScalingConfigurationSummary.AutoScalingConfigurationArn') as unknown as string;
  }

  public get autoScalingConfigurationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteService.Service.AutoScalingConfigurationSummary.AutoScalingConfigurationName'),
        outputPath: 'Service.AutoScalingConfigurationSummary.AutoScalingConfigurationName',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.Service.AutoScalingConfigurationSummary.AutoScalingConfigurationName', props);
    return resource.getResponseField('Service.AutoScalingConfigurationSummary.AutoScalingConfigurationName') as unknown as string;
  }

  public get autoScalingConfigurationRevision(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DeleteService.Service.AutoScalingConfigurationSummary.AutoScalingConfigurationRevision'),
        outputPath: 'Service.AutoScalingConfigurationSummary.AutoScalingConfigurationRevision',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteService.Service.AutoScalingConfigurationSummary.AutoScalingConfigurationRevision', props);
    return resource.getResponseField('Service.AutoScalingConfigurationSummary.AutoScalingConfigurationRevision') as unknown as number;
  }

}

export class AppRunnerResponsesDescribeAutoScalingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerDescribeAutoScalingConfigurationRequest) {
  }

  public get autoScalingConfiguration(): AppRunnerResponsesDescribeAutoScalingConfigurationAutoScalingConfiguration {
    return new AppRunnerResponsesDescribeAutoScalingConfigurationAutoScalingConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class AppRunnerResponsesDescribeAutoScalingConfigurationAutoScalingConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerDescribeAutoScalingConfigurationRequest) {
  }

  public get autoScalingConfigurationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoScalingConfiguration',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeAutoScalingConfiguration.AutoScalingConfiguration.AutoScalingConfigurationArn'),
        outputPath: 'AutoScalingConfiguration.AutoScalingConfigurationArn',
        parameters: {
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoScalingConfiguration.AutoScalingConfiguration.AutoScalingConfigurationArn', props);
    return resource.getResponseField('AutoScalingConfiguration.AutoScalingConfigurationArn') as unknown as string;
  }

  public get autoScalingConfigurationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoScalingConfiguration',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeAutoScalingConfiguration.AutoScalingConfiguration.AutoScalingConfigurationName'),
        outputPath: 'AutoScalingConfiguration.AutoScalingConfigurationName',
        parameters: {
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoScalingConfiguration.AutoScalingConfiguration.AutoScalingConfigurationName', props);
    return resource.getResponseField('AutoScalingConfiguration.AutoScalingConfigurationName') as unknown as string;
  }

  public get autoScalingConfigurationRevision(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoScalingConfiguration',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeAutoScalingConfiguration.AutoScalingConfiguration.AutoScalingConfigurationRevision'),
        outputPath: 'AutoScalingConfiguration.AutoScalingConfigurationRevision',
        parameters: {
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoScalingConfiguration.AutoScalingConfiguration.AutoScalingConfigurationRevision', props);
    return resource.getResponseField('AutoScalingConfiguration.AutoScalingConfigurationRevision') as unknown as number;
  }

  public get latest(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoScalingConfiguration',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeAutoScalingConfiguration.AutoScalingConfiguration.Latest'),
        outputPath: 'AutoScalingConfiguration.Latest',
        parameters: {
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoScalingConfiguration.AutoScalingConfiguration.Latest', props);
    return resource.getResponseField('AutoScalingConfiguration.Latest') as unknown as boolean;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoScalingConfiguration',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeAutoScalingConfiguration.AutoScalingConfiguration.Status'),
        outputPath: 'AutoScalingConfiguration.Status',
        parameters: {
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoScalingConfiguration.AutoScalingConfiguration.Status', props);
    return resource.getResponseField('AutoScalingConfiguration.Status') as unknown as string;
  }

  public get maxConcurrency(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoScalingConfiguration',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeAutoScalingConfiguration.AutoScalingConfiguration.MaxConcurrency'),
        outputPath: 'AutoScalingConfiguration.MaxConcurrency',
        parameters: {
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoScalingConfiguration.AutoScalingConfiguration.MaxConcurrency', props);
    return resource.getResponseField('AutoScalingConfiguration.MaxConcurrency') as unknown as number;
  }

  public get minSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoScalingConfiguration',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeAutoScalingConfiguration.AutoScalingConfiguration.MinSize'),
        outputPath: 'AutoScalingConfiguration.MinSize',
        parameters: {
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoScalingConfiguration.AutoScalingConfiguration.MinSize', props);
    return resource.getResponseField('AutoScalingConfiguration.MinSize') as unknown as number;
  }

  public get maxSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoScalingConfiguration',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeAutoScalingConfiguration.AutoScalingConfiguration.MaxSize'),
        outputPath: 'AutoScalingConfiguration.MaxSize',
        parameters: {
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoScalingConfiguration.AutoScalingConfiguration.MaxSize', props);
    return resource.getResponseField('AutoScalingConfiguration.MaxSize') as unknown as number;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoScalingConfiguration',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeAutoScalingConfiguration.AutoScalingConfiguration.CreatedAt'),
        outputPath: 'AutoScalingConfiguration.CreatedAt',
        parameters: {
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoScalingConfiguration.AutoScalingConfiguration.CreatedAt', props);
    return resource.getResponseField('AutoScalingConfiguration.CreatedAt') as unknown as string;
  }

  public get deletedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutoScalingConfiguration',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeAutoScalingConfiguration.AutoScalingConfiguration.DeletedAt'),
        outputPath: 'AutoScalingConfiguration.DeletedAt',
        parameters: {
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutoScalingConfiguration.AutoScalingConfiguration.DeletedAt', props);
    return resource.getResponseField('AutoScalingConfiguration.DeletedAt') as unknown as string;
  }

}

export class AppRunnerResponsesDescribeCustomDomains {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerDescribeCustomDomainsRequest) {
  }

  public get dnsTarget(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCustomDomains',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeCustomDomains.DNSTarget'),
        outputPath: 'DNSTarget',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCustomDomains.DNSTarget', props);
    return resource.getResponseField('DNSTarget') as unknown as string;
  }

  public get serviceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCustomDomains',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeCustomDomains.ServiceArn'),
        outputPath: 'ServiceArn',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCustomDomains.ServiceArn', props);
    return resource.getResponseField('ServiceArn') as unknown as string;
  }

  public get customDomains(): shapes.AppRunnerCustomDomain[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCustomDomains',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeCustomDomains.CustomDomains'),
        outputPath: 'CustomDomains',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCustomDomains.CustomDomains', props);
    return resource.getResponseField('CustomDomains') as unknown as shapes.AppRunnerCustomDomain[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCustomDomains',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeCustomDomains.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCustomDomains.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AppRunnerResponsesDescribeService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerDescribeServiceRequest) {
  }

  public get service(): AppRunnerResponsesDescribeServiceService {
    return new AppRunnerResponsesDescribeServiceService(this.__scope, this.__resources, this.__input);
  }

}

export class AppRunnerResponsesDescribeServiceService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerDescribeServiceRequest) {
  }

  public get serviceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeService.Service.ServiceName'),
        outputPath: 'Service.ServiceName',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeService.Service.ServiceName', props);
    return resource.getResponseField('Service.ServiceName') as unknown as string;
  }

  public get serviceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeService.Service.ServiceId'),
        outputPath: 'Service.ServiceId',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeService.Service.ServiceId', props);
    return resource.getResponseField('Service.ServiceId') as unknown as string;
  }

  public get serviceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeService.Service.ServiceArn'),
        outputPath: 'Service.ServiceArn',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeService.Service.ServiceArn', props);
    return resource.getResponseField('Service.ServiceArn') as unknown as string;
  }

  public get serviceUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeService.Service.ServiceUrl'),
        outputPath: 'Service.ServiceUrl',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeService.Service.ServiceUrl', props);
    return resource.getResponseField('Service.ServiceUrl') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeService.Service.CreatedAt'),
        outputPath: 'Service.CreatedAt',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeService.Service.CreatedAt', props);
    return resource.getResponseField('Service.CreatedAt') as unknown as string;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeService.Service.UpdatedAt'),
        outputPath: 'Service.UpdatedAt',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeService.Service.UpdatedAt', props);
    return resource.getResponseField('Service.UpdatedAt') as unknown as string;
  }

  public get deletedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeService.Service.DeletedAt'),
        outputPath: 'Service.DeletedAt',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeService.Service.DeletedAt', props);
    return resource.getResponseField('Service.DeletedAt') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeService.Service.Status'),
        outputPath: 'Service.Status',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeService.Service.Status', props);
    return resource.getResponseField('Service.Status') as unknown as string;
  }

  public get sourceConfiguration(): AppRunnerResponsesDescribeServiceServiceSourceConfiguration {
    return new AppRunnerResponsesDescribeServiceServiceSourceConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get instanceConfiguration(): AppRunnerResponsesDescribeServiceServiceInstanceConfiguration {
    return new AppRunnerResponsesDescribeServiceServiceInstanceConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get encryptionConfiguration(): AppRunnerResponsesDescribeServiceServiceEncryptionConfiguration {
    return new AppRunnerResponsesDescribeServiceServiceEncryptionConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get healthCheckConfiguration(): AppRunnerResponsesDescribeServiceServiceHealthCheckConfiguration {
    return new AppRunnerResponsesDescribeServiceServiceHealthCheckConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get autoScalingConfigurationSummary(): AppRunnerResponsesDescribeServiceServiceAutoScalingConfigurationSummary {
    return new AppRunnerResponsesDescribeServiceServiceAutoScalingConfigurationSummary(this.__scope, this.__resources, this.__input);
  }

}

export class AppRunnerResponsesDescribeServiceServiceSourceConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerDescribeServiceRequest) {
  }

  public get codeRepository(): AppRunnerResponsesDescribeServiceServiceSourceConfigurationCodeRepository {
    return new AppRunnerResponsesDescribeServiceServiceSourceConfigurationCodeRepository(this.__scope, this.__resources, this.__input);
  }

  public get imageRepository(): AppRunnerResponsesDescribeServiceServiceSourceConfigurationImageRepository {
    return new AppRunnerResponsesDescribeServiceServiceSourceConfigurationImageRepository(this.__scope, this.__resources, this.__input);
  }

  public get autoDeploymentsEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeService.Service.SourceConfiguration.AutoDeploymentsEnabled'),
        outputPath: 'Service.SourceConfiguration.AutoDeploymentsEnabled',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeService.Service.SourceConfiguration.AutoDeploymentsEnabled', props);
    return resource.getResponseField('Service.SourceConfiguration.AutoDeploymentsEnabled') as unknown as boolean;
  }

  public get authenticationConfiguration(): AppRunnerResponsesDescribeServiceServiceSourceConfigurationAuthenticationConfiguration {
    return new AppRunnerResponsesDescribeServiceServiceSourceConfigurationAuthenticationConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class AppRunnerResponsesDescribeServiceServiceSourceConfigurationCodeRepository {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerDescribeServiceRequest) {
  }

  public get repositoryUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeService.Service.SourceConfiguration.CodeRepository.RepositoryUrl'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.RepositoryUrl',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeService.Service.SourceConfiguration.CodeRepository.RepositoryUrl', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.RepositoryUrl') as unknown as string;
  }

  public get sourceCodeVersion(): AppRunnerResponsesDescribeServiceServiceSourceConfigurationCodeRepositorySourceCodeVersion {
    return new AppRunnerResponsesDescribeServiceServiceSourceConfigurationCodeRepositorySourceCodeVersion(this.__scope, this.__resources, this.__input);
  }

  public get codeConfiguration(): AppRunnerResponsesDescribeServiceServiceSourceConfigurationCodeRepositoryCodeConfiguration {
    return new AppRunnerResponsesDescribeServiceServiceSourceConfigurationCodeRepositoryCodeConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class AppRunnerResponsesDescribeServiceServiceSourceConfigurationCodeRepositorySourceCodeVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerDescribeServiceRequest) {
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeService.Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Type'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Type',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeService.Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Type', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Type') as unknown as string;
  }

  public get value(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeService.Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Value'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Value',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeService.Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Value', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Value') as unknown as string;
  }

}

export class AppRunnerResponsesDescribeServiceServiceSourceConfigurationCodeRepositoryCodeConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerDescribeServiceRequest) {
  }

  public get configurationSource(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.ConfigurationSource'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.CodeConfiguration.ConfigurationSource',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.ConfigurationSource', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.CodeConfiguration.ConfigurationSource') as unknown as string;
  }

  public get codeConfigurationValues(): AppRunnerResponsesDescribeServiceServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues {
    return new AppRunnerResponsesDescribeServiceServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues(this.__scope, this.__resources, this.__input);
  }

}

export class AppRunnerResponsesDescribeServiceServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerDescribeServiceRequest) {
  }

  public get runtime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Runtime'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Runtime',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Runtime', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Runtime') as unknown as string;
  }

  public get buildCommand(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.BuildCommand'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.BuildCommand',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.BuildCommand', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.BuildCommand') as unknown as string;
  }

  public get startCommand(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.StartCommand'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.StartCommand',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.StartCommand', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.StartCommand') as unknown as string;
  }

  public get port(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Port'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Port',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Port', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Port') as unknown as string;
  }

  public get runtimeEnvironmentVariables(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.RuntimeEnvironmentVariables'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.RuntimeEnvironmentVariables',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.RuntimeEnvironmentVariables', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.RuntimeEnvironmentVariables') as unknown as Record<string, string>;
  }

}

export class AppRunnerResponsesDescribeServiceServiceSourceConfigurationImageRepository {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerDescribeServiceRequest) {
  }

  public get imageIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeService.Service.SourceConfiguration.ImageRepository.ImageIdentifier'),
        outputPath: 'Service.SourceConfiguration.ImageRepository.ImageIdentifier',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeService.Service.SourceConfiguration.ImageRepository.ImageIdentifier', props);
    return resource.getResponseField('Service.SourceConfiguration.ImageRepository.ImageIdentifier') as unknown as string;
  }

  public get imageConfiguration(): AppRunnerResponsesDescribeServiceServiceSourceConfigurationImageRepositoryImageConfiguration {
    return new AppRunnerResponsesDescribeServiceServiceSourceConfigurationImageRepositoryImageConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get imageRepositoryType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeService.Service.SourceConfiguration.ImageRepository.ImageRepositoryType'),
        outputPath: 'Service.SourceConfiguration.ImageRepository.ImageRepositoryType',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeService.Service.SourceConfiguration.ImageRepository.ImageRepositoryType', props);
    return resource.getResponseField('Service.SourceConfiguration.ImageRepository.ImageRepositoryType') as unknown as string;
  }

}

export class AppRunnerResponsesDescribeServiceServiceSourceConfigurationImageRepositoryImageConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerDescribeServiceRequest) {
  }

  public get runtimeEnvironmentVariables(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeService.Service.SourceConfiguration.ImageRepository.ImageConfiguration.RuntimeEnvironmentVariables'),
        outputPath: 'Service.SourceConfiguration.ImageRepository.ImageConfiguration.RuntimeEnvironmentVariables',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeService.Service.SourceConfiguration.ImageRepository.ImageConfiguration.RuntimeEnvironmentVariables', props);
    return resource.getResponseField('Service.SourceConfiguration.ImageRepository.ImageConfiguration.RuntimeEnvironmentVariables') as unknown as Record<string, string>;
  }

  public get startCommand(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeService.Service.SourceConfiguration.ImageRepository.ImageConfiguration.StartCommand'),
        outputPath: 'Service.SourceConfiguration.ImageRepository.ImageConfiguration.StartCommand',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeService.Service.SourceConfiguration.ImageRepository.ImageConfiguration.StartCommand', props);
    return resource.getResponseField('Service.SourceConfiguration.ImageRepository.ImageConfiguration.StartCommand') as unknown as string;
  }

  public get port(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeService.Service.SourceConfiguration.ImageRepository.ImageConfiguration.Port'),
        outputPath: 'Service.SourceConfiguration.ImageRepository.ImageConfiguration.Port',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeService.Service.SourceConfiguration.ImageRepository.ImageConfiguration.Port', props);
    return resource.getResponseField('Service.SourceConfiguration.ImageRepository.ImageConfiguration.Port') as unknown as string;
  }

}

export class AppRunnerResponsesDescribeServiceServiceSourceConfigurationAuthenticationConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerDescribeServiceRequest) {
  }

  public get connectionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeService.Service.SourceConfiguration.AuthenticationConfiguration.ConnectionArn'),
        outputPath: 'Service.SourceConfiguration.AuthenticationConfiguration.ConnectionArn',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeService.Service.SourceConfiguration.AuthenticationConfiguration.ConnectionArn', props);
    return resource.getResponseField('Service.SourceConfiguration.AuthenticationConfiguration.ConnectionArn') as unknown as string;
  }

  public get accessRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeService.Service.SourceConfiguration.AuthenticationConfiguration.AccessRoleArn'),
        outputPath: 'Service.SourceConfiguration.AuthenticationConfiguration.AccessRoleArn',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeService.Service.SourceConfiguration.AuthenticationConfiguration.AccessRoleArn', props);
    return resource.getResponseField('Service.SourceConfiguration.AuthenticationConfiguration.AccessRoleArn') as unknown as string;
  }

}

export class AppRunnerResponsesDescribeServiceServiceInstanceConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerDescribeServiceRequest) {
  }

  public get cpu(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeService.Service.InstanceConfiguration.Cpu'),
        outputPath: 'Service.InstanceConfiguration.Cpu',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeService.Service.InstanceConfiguration.Cpu', props);
    return resource.getResponseField('Service.InstanceConfiguration.Cpu') as unknown as string;
  }

  public get memory(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeService.Service.InstanceConfiguration.Memory'),
        outputPath: 'Service.InstanceConfiguration.Memory',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeService.Service.InstanceConfiguration.Memory', props);
    return resource.getResponseField('Service.InstanceConfiguration.Memory') as unknown as string;
  }

  public get instanceRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeService.Service.InstanceConfiguration.InstanceRoleArn'),
        outputPath: 'Service.InstanceConfiguration.InstanceRoleArn',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeService.Service.InstanceConfiguration.InstanceRoleArn', props);
    return resource.getResponseField('Service.InstanceConfiguration.InstanceRoleArn') as unknown as string;
  }

}

export class AppRunnerResponsesDescribeServiceServiceEncryptionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerDescribeServiceRequest) {
  }

  public get kmsKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeService.Service.EncryptionConfiguration.KmsKey'),
        outputPath: 'Service.EncryptionConfiguration.KmsKey',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeService.Service.EncryptionConfiguration.KmsKey', props);
    return resource.getResponseField('Service.EncryptionConfiguration.KmsKey') as unknown as string;
  }

}

export class AppRunnerResponsesDescribeServiceServiceHealthCheckConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerDescribeServiceRequest) {
  }

  public get protocol(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeService.Service.HealthCheckConfiguration.Protocol'),
        outputPath: 'Service.HealthCheckConfiguration.Protocol',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeService.Service.HealthCheckConfiguration.Protocol', props);
    return resource.getResponseField('Service.HealthCheckConfiguration.Protocol') as unknown as string;
  }

  public get path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeService.Service.HealthCheckConfiguration.Path'),
        outputPath: 'Service.HealthCheckConfiguration.Path',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeService.Service.HealthCheckConfiguration.Path', props);
    return resource.getResponseField('Service.HealthCheckConfiguration.Path') as unknown as string;
  }

  public get interval(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeService.Service.HealthCheckConfiguration.Interval'),
        outputPath: 'Service.HealthCheckConfiguration.Interval',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeService.Service.HealthCheckConfiguration.Interval', props);
    return resource.getResponseField('Service.HealthCheckConfiguration.Interval') as unknown as number;
  }

  public get timeout(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeService.Service.HealthCheckConfiguration.Timeout'),
        outputPath: 'Service.HealthCheckConfiguration.Timeout',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeService.Service.HealthCheckConfiguration.Timeout', props);
    return resource.getResponseField('Service.HealthCheckConfiguration.Timeout') as unknown as number;
  }

  public get healthyThreshold(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeService.Service.HealthCheckConfiguration.HealthyThreshold'),
        outputPath: 'Service.HealthCheckConfiguration.HealthyThreshold',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeService.Service.HealthCheckConfiguration.HealthyThreshold', props);
    return resource.getResponseField('Service.HealthCheckConfiguration.HealthyThreshold') as unknown as number;
  }

  public get unhealthyThreshold(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeService.Service.HealthCheckConfiguration.UnhealthyThreshold'),
        outputPath: 'Service.HealthCheckConfiguration.UnhealthyThreshold',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeService.Service.HealthCheckConfiguration.UnhealthyThreshold', props);
    return resource.getResponseField('Service.HealthCheckConfiguration.UnhealthyThreshold') as unknown as number;
  }

}

export class AppRunnerResponsesDescribeServiceServiceAutoScalingConfigurationSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerDescribeServiceRequest) {
  }

  public get autoScalingConfigurationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeService.Service.AutoScalingConfigurationSummary.AutoScalingConfigurationArn'),
        outputPath: 'Service.AutoScalingConfigurationSummary.AutoScalingConfigurationArn',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeService.Service.AutoScalingConfigurationSummary.AutoScalingConfigurationArn', props);
    return resource.getResponseField('Service.AutoScalingConfigurationSummary.AutoScalingConfigurationArn') as unknown as string;
  }

  public get autoScalingConfigurationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeService.Service.AutoScalingConfigurationSummary.AutoScalingConfigurationName'),
        outputPath: 'Service.AutoScalingConfigurationSummary.AutoScalingConfigurationName',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeService.Service.AutoScalingConfigurationSummary.AutoScalingConfigurationName', props);
    return resource.getResponseField('Service.AutoScalingConfigurationSummary.AutoScalingConfigurationName') as unknown as string;
  }

  public get autoScalingConfigurationRevision(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DescribeService.Service.AutoScalingConfigurationSummary.AutoScalingConfigurationRevision'),
        outputPath: 'Service.AutoScalingConfigurationSummary.AutoScalingConfigurationRevision',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeService.Service.AutoScalingConfigurationSummary.AutoScalingConfigurationRevision', props);
    return resource.getResponseField('Service.AutoScalingConfigurationSummary.AutoScalingConfigurationRevision') as unknown as number;
  }

}

export class AppRunnerResponsesDisassociateCustomDomain {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerDisassociateCustomDomainRequest) {
  }

  public get dnsTarget(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateCustomDomain',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DisassociateCustomDomain.DNSTarget'),
        outputPath: 'DNSTarget',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateCustomDomain.DNSTarget', props);
    return resource.getResponseField('DNSTarget') as unknown as string;
  }

  public get serviceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateCustomDomain',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DisassociateCustomDomain.ServiceArn'),
        outputPath: 'ServiceArn',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateCustomDomain.ServiceArn', props);
    return resource.getResponseField('ServiceArn') as unknown as string;
  }

  public get customDomain(): AppRunnerResponsesDisassociateCustomDomainCustomDomain {
    return new AppRunnerResponsesDisassociateCustomDomainCustomDomain(this.__scope, this.__resources, this.__input);
  }

}

export class AppRunnerResponsesDisassociateCustomDomainCustomDomain {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerDisassociateCustomDomainRequest) {
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateCustomDomain',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DisassociateCustomDomain.CustomDomain.DomainName'),
        outputPath: 'CustomDomain.DomainName',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateCustomDomain.CustomDomain.DomainName', props);
    return resource.getResponseField('CustomDomain.DomainName') as unknown as string;
  }

  public get enableWwwSubdomain(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateCustomDomain',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DisassociateCustomDomain.CustomDomain.EnableWWWSubdomain'),
        outputPath: 'CustomDomain.EnableWWWSubdomain',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateCustomDomain.CustomDomain.EnableWWWSubdomain', props);
    return resource.getResponseField('CustomDomain.EnableWWWSubdomain') as unknown as boolean;
  }

  public get certificateValidationRecords(): shapes.AppRunnerCertificateValidationRecord[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateCustomDomain',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DisassociateCustomDomain.CustomDomain.CertificateValidationRecords'),
        outputPath: 'CustomDomain.CertificateValidationRecords',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateCustomDomain.CustomDomain.CertificateValidationRecords', props);
    return resource.getResponseField('CustomDomain.CertificateValidationRecords') as unknown as shapes.AppRunnerCertificateValidationRecord[];
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateCustomDomain',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.DisassociateCustomDomain.CustomDomain.Status'),
        outputPath: 'CustomDomain.Status',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateCustomDomain.CustomDomain.Status', props);
    return resource.getResponseField('CustomDomain.Status') as unknown as string;
  }

}

export class AppRunnerResponsesListAutoScalingConfigurations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerListAutoScalingConfigurationsRequest) {
  }

  public get autoScalingConfigurationSummaryList(): shapes.AppRunnerAutoScalingConfigurationSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAutoScalingConfigurations',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ListAutoScalingConfigurations.AutoScalingConfigurationSummaryList'),
        outputPath: 'AutoScalingConfigurationSummaryList',
        parameters: {
          AutoScalingConfigurationName: this.__input.autoScalingConfigurationName,
          LatestOnly: this.__input.latestOnly,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAutoScalingConfigurations.AutoScalingConfigurationSummaryList', props);
    return resource.getResponseField('AutoScalingConfigurationSummaryList') as unknown as shapes.AppRunnerAutoScalingConfigurationSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAutoScalingConfigurations',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ListAutoScalingConfigurations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AutoScalingConfigurationName: this.__input.autoScalingConfigurationName,
          LatestOnly: this.__input.latestOnly,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAutoScalingConfigurations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AppRunnerResponsesListConnections {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerListConnectionsRequest) {
  }

  public get connectionSummaryList(): shapes.AppRunnerConnectionSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listConnections',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ListConnections.ConnectionSummaryList'),
        outputPath: 'ConnectionSummaryList',
        parameters: {
          ConnectionName: this.__input.connectionName,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListConnections.ConnectionSummaryList', props);
    return resource.getResponseField('ConnectionSummaryList') as unknown as shapes.AppRunnerConnectionSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listConnections',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ListConnections.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ConnectionName: this.__input.connectionName,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListConnections.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AppRunnerResponsesListOperations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerListOperationsRequest) {
  }

  public get operationSummaryList(): shapes.AppRunnerOperationSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listOperations',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ListOperations.OperationSummaryList'),
        outputPath: 'OperationSummaryList',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListOperations.OperationSummaryList', props);
    return resource.getResponseField('OperationSummaryList') as unknown as shapes.AppRunnerOperationSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listOperations',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ListOperations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListOperations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AppRunnerResponsesListServices {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerListServicesRequest) {
  }

  public get serviceSummaryList(): shapes.AppRunnerServiceSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listServices',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ListServices.ServiceSummaryList'),
        outputPath: 'ServiceSummaryList',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListServices.ServiceSummaryList', props);
    return resource.getResponseField('ServiceSummaryList') as unknown as shapes.AppRunnerServiceSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listServices',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ListServices.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListServices.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AppRunnerResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerListTagsForResourceRequest) {
  }

  public get tags(): shapes.AppRunnerTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.AppRunnerTag[];
  }

}

export class AppRunnerResponsesPauseService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerPauseServiceRequest) {
  }

  public get service(): AppRunnerResponsesPauseServiceService {
    return new AppRunnerResponsesPauseServiceService(this.__scope, this.__resources, this.__input);
  }

  public get operationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pauseService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.PauseService.OperationId'),
        outputPath: 'OperationId',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PauseService.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class AppRunnerResponsesPauseServiceService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerPauseServiceRequest) {
  }

  public get serviceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pauseService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.PauseService.Service.ServiceName'),
        outputPath: 'Service.ServiceName',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PauseService.Service.ServiceName', props);
    return resource.getResponseField('Service.ServiceName') as unknown as string;
  }

  public get serviceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pauseService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.PauseService.Service.ServiceId'),
        outputPath: 'Service.ServiceId',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PauseService.Service.ServiceId', props);
    return resource.getResponseField('Service.ServiceId') as unknown as string;
  }

  public get serviceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pauseService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.PauseService.Service.ServiceArn'),
        outputPath: 'Service.ServiceArn',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PauseService.Service.ServiceArn', props);
    return resource.getResponseField('Service.ServiceArn') as unknown as string;
  }

  public get serviceUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pauseService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.PauseService.Service.ServiceUrl'),
        outputPath: 'Service.ServiceUrl',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PauseService.Service.ServiceUrl', props);
    return resource.getResponseField('Service.ServiceUrl') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pauseService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.PauseService.Service.CreatedAt'),
        outputPath: 'Service.CreatedAt',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PauseService.Service.CreatedAt', props);
    return resource.getResponseField('Service.CreatedAt') as unknown as string;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pauseService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.PauseService.Service.UpdatedAt'),
        outputPath: 'Service.UpdatedAt',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PauseService.Service.UpdatedAt', props);
    return resource.getResponseField('Service.UpdatedAt') as unknown as string;
  }

  public get deletedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pauseService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.PauseService.Service.DeletedAt'),
        outputPath: 'Service.DeletedAt',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PauseService.Service.DeletedAt', props);
    return resource.getResponseField('Service.DeletedAt') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pauseService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.PauseService.Service.Status'),
        outputPath: 'Service.Status',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PauseService.Service.Status', props);
    return resource.getResponseField('Service.Status') as unknown as string;
  }

  public get sourceConfiguration(): AppRunnerResponsesPauseServiceServiceSourceConfiguration {
    return new AppRunnerResponsesPauseServiceServiceSourceConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get instanceConfiguration(): AppRunnerResponsesPauseServiceServiceInstanceConfiguration {
    return new AppRunnerResponsesPauseServiceServiceInstanceConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get encryptionConfiguration(): AppRunnerResponsesPauseServiceServiceEncryptionConfiguration {
    return new AppRunnerResponsesPauseServiceServiceEncryptionConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get healthCheckConfiguration(): AppRunnerResponsesPauseServiceServiceHealthCheckConfiguration {
    return new AppRunnerResponsesPauseServiceServiceHealthCheckConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get autoScalingConfigurationSummary(): AppRunnerResponsesPauseServiceServiceAutoScalingConfigurationSummary {
    return new AppRunnerResponsesPauseServiceServiceAutoScalingConfigurationSummary(this.__scope, this.__resources, this.__input);
  }

}

export class AppRunnerResponsesPauseServiceServiceSourceConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerPauseServiceRequest) {
  }

  public get codeRepository(): AppRunnerResponsesPauseServiceServiceSourceConfigurationCodeRepository {
    return new AppRunnerResponsesPauseServiceServiceSourceConfigurationCodeRepository(this.__scope, this.__resources, this.__input);
  }

  public get imageRepository(): AppRunnerResponsesPauseServiceServiceSourceConfigurationImageRepository {
    return new AppRunnerResponsesPauseServiceServiceSourceConfigurationImageRepository(this.__scope, this.__resources, this.__input);
  }

  public get autoDeploymentsEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pauseService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.PauseService.Service.SourceConfiguration.AutoDeploymentsEnabled'),
        outputPath: 'Service.SourceConfiguration.AutoDeploymentsEnabled',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PauseService.Service.SourceConfiguration.AutoDeploymentsEnabled', props);
    return resource.getResponseField('Service.SourceConfiguration.AutoDeploymentsEnabled') as unknown as boolean;
  }

  public get authenticationConfiguration(): AppRunnerResponsesPauseServiceServiceSourceConfigurationAuthenticationConfiguration {
    return new AppRunnerResponsesPauseServiceServiceSourceConfigurationAuthenticationConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class AppRunnerResponsesPauseServiceServiceSourceConfigurationCodeRepository {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerPauseServiceRequest) {
  }

  public get repositoryUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pauseService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.PauseService.Service.SourceConfiguration.CodeRepository.RepositoryUrl'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.RepositoryUrl',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PauseService.Service.SourceConfiguration.CodeRepository.RepositoryUrl', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.RepositoryUrl') as unknown as string;
  }

  public get sourceCodeVersion(): AppRunnerResponsesPauseServiceServiceSourceConfigurationCodeRepositorySourceCodeVersion {
    return new AppRunnerResponsesPauseServiceServiceSourceConfigurationCodeRepositorySourceCodeVersion(this.__scope, this.__resources, this.__input);
  }

  public get codeConfiguration(): AppRunnerResponsesPauseServiceServiceSourceConfigurationCodeRepositoryCodeConfiguration {
    return new AppRunnerResponsesPauseServiceServiceSourceConfigurationCodeRepositoryCodeConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class AppRunnerResponsesPauseServiceServiceSourceConfigurationCodeRepositorySourceCodeVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerPauseServiceRequest) {
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pauseService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.PauseService.Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Type'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Type',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PauseService.Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Type', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Type') as unknown as string;
  }

  public get value(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pauseService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.PauseService.Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Value'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Value',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PauseService.Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Value', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Value') as unknown as string;
  }

}

export class AppRunnerResponsesPauseServiceServiceSourceConfigurationCodeRepositoryCodeConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerPauseServiceRequest) {
  }

  public get configurationSource(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pauseService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.PauseService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.ConfigurationSource'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.CodeConfiguration.ConfigurationSource',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PauseService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.ConfigurationSource', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.CodeConfiguration.ConfigurationSource') as unknown as string;
  }

  public get codeConfigurationValues(): AppRunnerResponsesPauseServiceServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues {
    return new AppRunnerResponsesPauseServiceServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues(this.__scope, this.__resources, this.__input);
  }

}

export class AppRunnerResponsesPauseServiceServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerPauseServiceRequest) {
  }

  public get runtime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pauseService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.PauseService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Runtime'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Runtime',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PauseService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Runtime', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Runtime') as unknown as string;
  }

  public get buildCommand(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pauseService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.PauseService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.BuildCommand'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.BuildCommand',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PauseService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.BuildCommand', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.BuildCommand') as unknown as string;
  }

  public get startCommand(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pauseService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.PauseService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.StartCommand'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.StartCommand',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PauseService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.StartCommand', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.StartCommand') as unknown as string;
  }

  public get port(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pauseService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.PauseService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Port'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Port',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PauseService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Port', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Port') as unknown as string;
  }

  public get runtimeEnvironmentVariables(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pauseService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.PauseService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.RuntimeEnvironmentVariables'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.RuntimeEnvironmentVariables',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PauseService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.RuntimeEnvironmentVariables', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.RuntimeEnvironmentVariables') as unknown as Record<string, string>;
  }

}

export class AppRunnerResponsesPauseServiceServiceSourceConfigurationImageRepository {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerPauseServiceRequest) {
  }

  public get imageIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pauseService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.PauseService.Service.SourceConfiguration.ImageRepository.ImageIdentifier'),
        outputPath: 'Service.SourceConfiguration.ImageRepository.ImageIdentifier',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PauseService.Service.SourceConfiguration.ImageRepository.ImageIdentifier', props);
    return resource.getResponseField('Service.SourceConfiguration.ImageRepository.ImageIdentifier') as unknown as string;
  }

  public get imageConfiguration(): AppRunnerResponsesPauseServiceServiceSourceConfigurationImageRepositoryImageConfiguration {
    return new AppRunnerResponsesPauseServiceServiceSourceConfigurationImageRepositoryImageConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get imageRepositoryType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pauseService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.PauseService.Service.SourceConfiguration.ImageRepository.ImageRepositoryType'),
        outputPath: 'Service.SourceConfiguration.ImageRepository.ImageRepositoryType',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PauseService.Service.SourceConfiguration.ImageRepository.ImageRepositoryType', props);
    return resource.getResponseField('Service.SourceConfiguration.ImageRepository.ImageRepositoryType') as unknown as string;
  }

}

export class AppRunnerResponsesPauseServiceServiceSourceConfigurationImageRepositoryImageConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerPauseServiceRequest) {
  }

  public get runtimeEnvironmentVariables(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pauseService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.PauseService.Service.SourceConfiguration.ImageRepository.ImageConfiguration.RuntimeEnvironmentVariables'),
        outputPath: 'Service.SourceConfiguration.ImageRepository.ImageConfiguration.RuntimeEnvironmentVariables',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PauseService.Service.SourceConfiguration.ImageRepository.ImageConfiguration.RuntimeEnvironmentVariables', props);
    return resource.getResponseField('Service.SourceConfiguration.ImageRepository.ImageConfiguration.RuntimeEnvironmentVariables') as unknown as Record<string, string>;
  }

  public get startCommand(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pauseService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.PauseService.Service.SourceConfiguration.ImageRepository.ImageConfiguration.StartCommand'),
        outputPath: 'Service.SourceConfiguration.ImageRepository.ImageConfiguration.StartCommand',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PauseService.Service.SourceConfiguration.ImageRepository.ImageConfiguration.StartCommand', props);
    return resource.getResponseField('Service.SourceConfiguration.ImageRepository.ImageConfiguration.StartCommand') as unknown as string;
  }

  public get port(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pauseService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.PauseService.Service.SourceConfiguration.ImageRepository.ImageConfiguration.Port'),
        outputPath: 'Service.SourceConfiguration.ImageRepository.ImageConfiguration.Port',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PauseService.Service.SourceConfiguration.ImageRepository.ImageConfiguration.Port', props);
    return resource.getResponseField('Service.SourceConfiguration.ImageRepository.ImageConfiguration.Port') as unknown as string;
  }

}

export class AppRunnerResponsesPauseServiceServiceSourceConfigurationAuthenticationConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerPauseServiceRequest) {
  }

  public get connectionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pauseService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.PauseService.Service.SourceConfiguration.AuthenticationConfiguration.ConnectionArn'),
        outputPath: 'Service.SourceConfiguration.AuthenticationConfiguration.ConnectionArn',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PauseService.Service.SourceConfiguration.AuthenticationConfiguration.ConnectionArn', props);
    return resource.getResponseField('Service.SourceConfiguration.AuthenticationConfiguration.ConnectionArn') as unknown as string;
  }

  public get accessRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pauseService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.PauseService.Service.SourceConfiguration.AuthenticationConfiguration.AccessRoleArn'),
        outputPath: 'Service.SourceConfiguration.AuthenticationConfiguration.AccessRoleArn',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PauseService.Service.SourceConfiguration.AuthenticationConfiguration.AccessRoleArn', props);
    return resource.getResponseField('Service.SourceConfiguration.AuthenticationConfiguration.AccessRoleArn') as unknown as string;
  }

}

export class AppRunnerResponsesPauseServiceServiceInstanceConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerPauseServiceRequest) {
  }

  public get cpu(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pauseService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.PauseService.Service.InstanceConfiguration.Cpu'),
        outputPath: 'Service.InstanceConfiguration.Cpu',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PauseService.Service.InstanceConfiguration.Cpu', props);
    return resource.getResponseField('Service.InstanceConfiguration.Cpu') as unknown as string;
  }

  public get memory(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pauseService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.PauseService.Service.InstanceConfiguration.Memory'),
        outputPath: 'Service.InstanceConfiguration.Memory',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PauseService.Service.InstanceConfiguration.Memory', props);
    return resource.getResponseField('Service.InstanceConfiguration.Memory') as unknown as string;
  }

  public get instanceRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pauseService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.PauseService.Service.InstanceConfiguration.InstanceRoleArn'),
        outputPath: 'Service.InstanceConfiguration.InstanceRoleArn',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PauseService.Service.InstanceConfiguration.InstanceRoleArn', props);
    return resource.getResponseField('Service.InstanceConfiguration.InstanceRoleArn') as unknown as string;
  }

}

export class AppRunnerResponsesPauseServiceServiceEncryptionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerPauseServiceRequest) {
  }

  public get kmsKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pauseService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.PauseService.Service.EncryptionConfiguration.KmsKey'),
        outputPath: 'Service.EncryptionConfiguration.KmsKey',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PauseService.Service.EncryptionConfiguration.KmsKey', props);
    return resource.getResponseField('Service.EncryptionConfiguration.KmsKey') as unknown as string;
  }

}

export class AppRunnerResponsesPauseServiceServiceHealthCheckConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerPauseServiceRequest) {
  }

  public get protocol(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pauseService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.PauseService.Service.HealthCheckConfiguration.Protocol'),
        outputPath: 'Service.HealthCheckConfiguration.Protocol',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PauseService.Service.HealthCheckConfiguration.Protocol', props);
    return resource.getResponseField('Service.HealthCheckConfiguration.Protocol') as unknown as string;
  }

  public get path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pauseService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.PauseService.Service.HealthCheckConfiguration.Path'),
        outputPath: 'Service.HealthCheckConfiguration.Path',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PauseService.Service.HealthCheckConfiguration.Path', props);
    return resource.getResponseField('Service.HealthCheckConfiguration.Path') as unknown as string;
  }

  public get interval(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pauseService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.PauseService.Service.HealthCheckConfiguration.Interval'),
        outputPath: 'Service.HealthCheckConfiguration.Interval',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PauseService.Service.HealthCheckConfiguration.Interval', props);
    return resource.getResponseField('Service.HealthCheckConfiguration.Interval') as unknown as number;
  }

  public get timeout(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pauseService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.PauseService.Service.HealthCheckConfiguration.Timeout'),
        outputPath: 'Service.HealthCheckConfiguration.Timeout',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PauseService.Service.HealthCheckConfiguration.Timeout', props);
    return resource.getResponseField('Service.HealthCheckConfiguration.Timeout') as unknown as number;
  }

  public get healthyThreshold(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pauseService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.PauseService.Service.HealthCheckConfiguration.HealthyThreshold'),
        outputPath: 'Service.HealthCheckConfiguration.HealthyThreshold',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PauseService.Service.HealthCheckConfiguration.HealthyThreshold', props);
    return resource.getResponseField('Service.HealthCheckConfiguration.HealthyThreshold') as unknown as number;
  }

  public get unhealthyThreshold(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pauseService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.PauseService.Service.HealthCheckConfiguration.UnhealthyThreshold'),
        outputPath: 'Service.HealthCheckConfiguration.UnhealthyThreshold',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PauseService.Service.HealthCheckConfiguration.UnhealthyThreshold', props);
    return resource.getResponseField('Service.HealthCheckConfiguration.UnhealthyThreshold') as unknown as number;
  }

}

export class AppRunnerResponsesPauseServiceServiceAutoScalingConfigurationSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerPauseServiceRequest) {
  }

  public get autoScalingConfigurationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pauseService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.PauseService.Service.AutoScalingConfigurationSummary.AutoScalingConfigurationArn'),
        outputPath: 'Service.AutoScalingConfigurationSummary.AutoScalingConfigurationArn',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PauseService.Service.AutoScalingConfigurationSummary.AutoScalingConfigurationArn', props);
    return resource.getResponseField('Service.AutoScalingConfigurationSummary.AutoScalingConfigurationArn') as unknown as string;
  }

  public get autoScalingConfigurationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pauseService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.PauseService.Service.AutoScalingConfigurationSummary.AutoScalingConfigurationName'),
        outputPath: 'Service.AutoScalingConfigurationSummary.AutoScalingConfigurationName',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PauseService.Service.AutoScalingConfigurationSummary.AutoScalingConfigurationName', props);
    return resource.getResponseField('Service.AutoScalingConfigurationSummary.AutoScalingConfigurationName') as unknown as string;
  }

  public get autoScalingConfigurationRevision(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'pauseService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.PauseService.Service.AutoScalingConfigurationSummary.AutoScalingConfigurationRevision'),
        outputPath: 'Service.AutoScalingConfigurationSummary.AutoScalingConfigurationRevision',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PauseService.Service.AutoScalingConfigurationSummary.AutoScalingConfigurationRevision', props);
    return resource.getResponseField('Service.AutoScalingConfigurationSummary.AutoScalingConfigurationRevision') as unknown as number;
  }

}

export class AppRunnerResponsesResumeService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerResumeServiceRequest) {
  }

  public get service(): AppRunnerResponsesResumeServiceService {
    return new AppRunnerResponsesResumeServiceService(this.__scope, this.__resources, this.__input);
  }

  public get operationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ResumeService.OperationId'),
        outputPath: 'OperationId',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeService.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class AppRunnerResponsesResumeServiceService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerResumeServiceRequest) {
  }

  public get serviceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ResumeService.Service.ServiceName'),
        outputPath: 'Service.ServiceName',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeService.Service.ServiceName', props);
    return resource.getResponseField('Service.ServiceName') as unknown as string;
  }

  public get serviceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ResumeService.Service.ServiceId'),
        outputPath: 'Service.ServiceId',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeService.Service.ServiceId', props);
    return resource.getResponseField('Service.ServiceId') as unknown as string;
  }

  public get serviceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ResumeService.Service.ServiceArn'),
        outputPath: 'Service.ServiceArn',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeService.Service.ServiceArn', props);
    return resource.getResponseField('Service.ServiceArn') as unknown as string;
  }

  public get serviceUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ResumeService.Service.ServiceUrl'),
        outputPath: 'Service.ServiceUrl',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeService.Service.ServiceUrl', props);
    return resource.getResponseField('Service.ServiceUrl') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ResumeService.Service.CreatedAt'),
        outputPath: 'Service.CreatedAt',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeService.Service.CreatedAt', props);
    return resource.getResponseField('Service.CreatedAt') as unknown as string;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ResumeService.Service.UpdatedAt'),
        outputPath: 'Service.UpdatedAt',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeService.Service.UpdatedAt', props);
    return resource.getResponseField('Service.UpdatedAt') as unknown as string;
  }

  public get deletedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ResumeService.Service.DeletedAt'),
        outputPath: 'Service.DeletedAt',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeService.Service.DeletedAt', props);
    return resource.getResponseField('Service.DeletedAt') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ResumeService.Service.Status'),
        outputPath: 'Service.Status',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeService.Service.Status', props);
    return resource.getResponseField('Service.Status') as unknown as string;
  }

  public get sourceConfiguration(): AppRunnerResponsesResumeServiceServiceSourceConfiguration {
    return new AppRunnerResponsesResumeServiceServiceSourceConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get instanceConfiguration(): AppRunnerResponsesResumeServiceServiceInstanceConfiguration {
    return new AppRunnerResponsesResumeServiceServiceInstanceConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get encryptionConfiguration(): AppRunnerResponsesResumeServiceServiceEncryptionConfiguration {
    return new AppRunnerResponsesResumeServiceServiceEncryptionConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get healthCheckConfiguration(): AppRunnerResponsesResumeServiceServiceHealthCheckConfiguration {
    return new AppRunnerResponsesResumeServiceServiceHealthCheckConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get autoScalingConfigurationSummary(): AppRunnerResponsesResumeServiceServiceAutoScalingConfigurationSummary {
    return new AppRunnerResponsesResumeServiceServiceAutoScalingConfigurationSummary(this.__scope, this.__resources, this.__input);
  }

}

export class AppRunnerResponsesResumeServiceServiceSourceConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerResumeServiceRequest) {
  }

  public get codeRepository(): AppRunnerResponsesResumeServiceServiceSourceConfigurationCodeRepository {
    return new AppRunnerResponsesResumeServiceServiceSourceConfigurationCodeRepository(this.__scope, this.__resources, this.__input);
  }

  public get imageRepository(): AppRunnerResponsesResumeServiceServiceSourceConfigurationImageRepository {
    return new AppRunnerResponsesResumeServiceServiceSourceConfigurationImageRepository(this.__scope, this.__resources, this.__input);
  }

  public get autoDeploymentsEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ResumeService.Service.SourceConfiguration.AutoDeploymentsEnabled'),
        outputPath: 'Service.SourceConfiguration.AutoDeploymentsEnabled',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeService.Service.SourceConfiguration.AutoDeploymentsEnabled', props);
    return resource.getResponseField('Service.SourceConfiguration.AutoDeploymentsEnabled') as unknown as boolean;
  }

  public get authenticationConfiguration(): AppRunnerResponsesResumeServiceServiceSourceConfigurationAuthenticationConfiguration {
    return new AppRunnerResponsesResumeServiceServiceSourceConfigurationAuthenticationConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class AppRunnerResponsesResumeServiceServiceSourceConfigurationCodeRepository {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerResumeServiceRequest) {
  }

  public get repositoryUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ResumeService.Service.SourceConfiguration.CodeRepository.RepositoryUrl'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.RepositoryUrl',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeService.Service.SourceConfiguration.CodeRepository.RepositoryUrl', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.RepositoryUrl') as unknown as string;
  }

  public get sourceCodeVersion(): AppRunnerResponsesResumeServiceServiceSourceConfigurationCodeRepositorySourceCodeVersion {
    return new AppRunnerResponsesResumeServiceServiceSourceConfigurationCodeRepositorySourceCodeVersion(this.__scope, this.__resources, this.__input);
  }

  public get codeConfiguration(): AppRunnerResponsesResumeServiceServiceSourceConfigurationCodeRepositoryCodeConfiguration {
    return new AppRunnerResponsesResumeServiceServiceSourceConfigurationCodeRepositoryCodeConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class AppRunnerResponsesResumeServiceServiceSourceConfigurationCodeRepositorySourceCodeVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerResumeServiceRequest) {
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ResumeService.Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Type'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Type',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeService.Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Type', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Type') as unknown as string;
  }

  public get value(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ResumeService.Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Value'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Value',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeService.Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Value', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Value') as unknown as string;
  }

}

export class AppRunnerResponsesResumeServiceServiceSourceConfigurationCodeRepositoryCodeConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerResumeServiceRequest) {
  }

  public get configurationSource(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ResumeService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.ConfigurationSource'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.CodeConfiguration.ConfigurationSource',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.ConfigurationSource', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.CodeConfiguration.ConfigurationSource') as unknown as string;
  }

  public get codeConfigurationValues(): AppRunnerResponsesResumeServiceServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues {
    return new AppRunnerResponsesResumeServiceServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues(this.__scope, this.__resources, this.__input);
  }

}

export class AppRunnerResponsesResumeServiceServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerResumeServiceRequest) {
  }

  public get runtime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ResumeService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Runtime'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Runtime',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Runtime', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Runtime') as unknown as string;
  }

  public get buildCommand(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ResumeService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.BuildCommand'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.BuildCommand',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.BuildCommand', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.BuildCommand') as unknown as string;
  }

  public get startCommand(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ResumeService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.StartCommand'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.StartCommand',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.StartCommand', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.StartCommand') as unknown as string;
  }

  public get port(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ResumeService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Port'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Port',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Port', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Port') as unknown as string;
  }

  public get runtimeEnvironmentVariables(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ResumeService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.RuntimeEnvironmentVariables'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.RuntimeEnvironmentVariables',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.RuntimeEnvironmentVariables', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.RuntimeEnvironmentVariables') as unknown as Record<string, string>;
  }

}

export class AppRunnerResponsesResumeServiceServiceSourceConfigurationImageRepository {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerResumeServiceRequest) {
  }

  public get imageIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ResumeService.Service.SourceConfiguration.ImageRepository.ImageIdentifier'),
        outputPath: 'Service.SourceConfiguration.ImageRepository.ImageIdentifier',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeService.Service.SourceConfiguration.ImageRepository.ImageIdentifier', props);
    return resource.getResponseField('Service.SourceConfiguration.ImageRepository.ImageIdentifier') as unknown as string;
  }

  public get imageConfiguration(): AppRunnerResponsesResumeServiceServiceSourceConfigurationImageRepositoryImageConfiguration {
    return new AppRunnerResponsesResumeServiceServiceSourceConfigurationImageRepositoryImageConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get imageRepositoryType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ResumeService.Service.SourceConfiguration.ImageRepository.ImageRepositoryType'),
        outputPath: 'Service.SourceConfiguration.ImageRepository.ImageRepositoryType',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeService.Service.SourceConfiguration.ImageRepository.ImageRepositoryType', props);
    return resource.getResponseField('Service.SourceConfiguration.ImageRepository.ImageRepositoryType') as unknown as string;
  }

}

export class AppRunnerResponsesResumeServiceServiceSourceConfigurationImageRepositoryImageConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerResumeServiceRequest) {
  }

  public get runtimeEnvironmentVariables(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ResumeService.Service.SourceConfiguration.ImageRepository.ImageConfiguration.RuntimeEnvironmentVariables'),
        outputPath: 'Service.SourceConfiguration.ImageRepository.ImageConfiguration.RuntimeEnvironmentVariables',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeService.Service.SourceConfiguration.ImageRepository.ImageConfiguration.RuntimeEnvironmentVariables', props);
    return resource.getResponseField('Service.SourceConfiguration.ImageRepository.ImageConfiguration.RuntimeEnvironmentVariables') as unknown as Record<string, string>;
  }

  public get startCommand(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ResumeService.Service.SourceConfiguration.ImageRepository.ImageConfiguration.StartCommand'),
        outputPath: 'Service.SourceConfiguration.ImageRepository.ImageConfiguration.StartCommand',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeService.Service.SourceConfiguration.ImageRepository.ImageConfiguration.StartCommand', props);
    return resource.getResponseField('Service.SourceConfiguration.ImageRepository.ImageConfiguration.StartCommand') as unknown as string;
  }

  public get port(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ResumeService.Service.SourceConfiguration.ImageRepository.ImageConfiguration.Port'),
        outputPath: 'Service.SourceConfiguration.ImageRepository.ImageConfiguration.Port',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeService.Service.SourceConfiguration.ImageRepository.ImageConfiguration.Port', props);
    return resource.getResponseField('Service.SourceConfiguration.ImageRepository.ImageConfiguration.Port') as unknown as string;
  }

}

export class AppRunnerResponsesResumeServiceServiceSourceConfigurationAuthenticationConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerResumeServiceRequest) {
  }

  public get connectionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ResumeService.Service.SourceConfiguration.AuthenticationConfiguration.ConnectionArn'),
        outputPath: 'Service.SourceConfiguration.AuthenticationConfiguration.ConnectionArn',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeService.Service.SourceConfiguration.AuthenticationConfiguration.ConnectionArn', props);
    return resource.getResponseField('Service.SourceConfiguration.AuthenticationConfiguration.ConnectionArn') as unknown as string;
  }

  public get accessRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ResumeService.Service.SourceConfiguration.AuthenticationConfiguration.AccessRoleArn'),
        outputPath: 'Service.SourceConfiguration.AuthenticationConfiguration.AccessRoleArn',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeService.Service.SourceConfiguration.AuthenticationConfiguration.AccessRoleArn', props);
    return resource.getResponseField('Service.SourceConfiguration.AuthenticationConfiguration.AccessRoleArn') as unknown as string;
  }

}

export class AppRunnerResponsesResumeServiceServiceInstanceConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerResumeServiceRequest) {
  }

  public get cpu(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ResumeService.Service.InstanceConfiguration.Cpu'),
        outputPath: 'Service.InstanceConfiguration.Cpu',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeService.Service.InstanceConfiguration.Cpu', props);
    return resource.getResponseField('Service.InstanceConfiguration.Cpu') as unknown as string;
  }

  public get memory(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ResumeService.Service.InstanceConfiguration.Memory'),
        outputPath: 'Service.InstanceConfiguration.Memory',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeService.Service.InstanceConfiguration.Memory', props);
    return resource.getResponseField('Service.InstanceConfiguration.Memory') as unknown as string;
  }

  public get instanceRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ResumeService.Service.InstanceConfiguration.InstanceRoleArn'),
        outputPath: 'Service.InstanceConfiguration.InstanceRoleArn',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeService.Service.InstanceConfiguration.InstanceRoleArn', props);
    return resource.getResponseField('Service.InstanceConfiguration.InstanceRoleArn') as unknown as string;
  }

}

export class AppRunnerResponsesResumeServiceServiceEncryptionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerResumeServiceRequest) {
  }

  public get kmsKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ResumeService.Service.EncryptionConfiguration.KmsKey'),
        outputPath: 'Service.EncryptionConfiguration.KmsKey',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeService.Service.EncryptionConfiguration.KmsKey', props);
    return resource.getResponseField('Service.EncryptionConfiguration.KmsKey') as unknown as string;
  }

}

export class AppRunnerResponsesResumeServiceServiceHealthCheckConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerResumeServiceRequest) {
  }

  public get protocol(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ResumeService.Service.HealthCheckConfiguration.Protocol'),
        outputPath: 'Service.HealthCheckConfiguration.Protocol',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeService.Service.HealthCheckConfiguration.Protocol', props);
    return resource.getResponseField('Service.HealthCheckConfiguration.Protocol') as unknown as string;
  }

  public get path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ResumeService.Service.HealthCheckConfiguration.Path'),
        outputPath: 'Service.HealthCheckConfiguration.Path',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeService.Service.HealthCheckConfiguration.Path', props);
    return resource.getResponseField('Service.HealthCheckConfiguration.Path') as unknown as string;
  }

  public get interval(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ResumeService.Service.HealthCheckConfiguration.Interval'),
        outputPath: 'Service.HealthCheckConfiguration.Interval',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeService.Service.HealthCheckConfiguration.Interval', props);
    return resource.getResponseField('Service.HealthCheckConfiguration.Interval') as unknown as number;
  }

  public get timeout(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ResumeService.Service.HealthCheckConfiguration.Timeout'),
        outputPath: 'Service.HealthCheckConfiguration.Timeout',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeService.Service.HealthCheckConfiguration.Timeout', props);
    return resource.getResponseField('Service.HealthCheckConfiguration.Timeout') as unknown as number;
  }

  public get healthyThreshold(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ResumeService.Service.HealthCheckConfiguration.HealthyThreshold'),
        outputPath: 'Service.HealthCheckConfiguration.HealthyThreshold',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeService.Service.HealthCheckConfiguration.HealthyThreshold', props);
    return resource.getResponseField('Service.HealthCheckConfiguration.HealthyThreshold') as unknown as number;
  }

  public get unhealthyThreshold(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ResumeService.Service.HealthCheckConfiguration.UnhealthyThreshold'),
        outputPath: 'Service.HealthCheckConfiguration.UnhealthyThreshold',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeService.Service.HealthCheckConfiguration.UnhealthyThreshold', props);
    return resource.getResponseField('Service.HealthCheckConfiguration.UnhealthyThreshold') as unknown as number;
  }

}

export class AppRunnerResponsesResumeServiceServiceAutoScalingConfigurationSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerResumeServiceRequest) {
  }

  public get autoScalingConfigurationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ResumeService.Service.AutoScalingConfigurationSummary.AutoScalingConfigurationArn'),
        outputPath: 'Service.AutoScalingConfigurationSummary.AutoScalingConfigurationArn',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeService.Service.AutoScalingConfigurationSummary.AutoScalingConfigurationArn', props);
    return resource.getResponseField('Service.AutoScalingConfigurationSummary.AutoScalingConfigurationArn') as unknown as string;
  }

  public get autoScalingConfigurationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ResumeService.Service.AutoScalingConfigurationSummary.AutoScalingConfigurationName'),
        outputPath: 'Service.AutoScalingConfigurationSummary.AutoScalingConfigurationName',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeService.Service.AutoScalingConfigurationSummary.AutoScalingConfigurationName', props);
    return resource.getResponseField('Service.AutoScalingConfigurationSummary.AutoScalingConfigurationName') as unknown as string;
  }

  public get autoScalingConfigurationRevision(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.ResumeService.Service.AutoScalingConfigurationSummary.AutoScalingConfigurationRevision'),
        outputPath: 'Service.AutoScalingConfigurationSummary.AutoScalingConfigurationRevision',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeService.Service.AutoScalingConfigurationSummary.AutoScalingConfigurationRevision', props);
    return resource.getResponseField('Service.AutoScalingConfigurationSummary.AutoScalingConfigurationRevision') as unknown as number;
  }

}

export class AppRunnerResponsesStartDeployment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerStartDeploymentRequest) {
  }

  public get operationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDeployment',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.StartDeployment.OperationId'),
        outputPath: 'OperationId',
        parameters: {
          ServiceArn: this.__input.serviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDeployment.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class AppRunnerResponsesUpdateService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerUpdateServiceRequest) {
  }

  public get service(): AppRunnerResponsesUpdateServiceService {
    return new AppRunnerResponsesUpdateServiceService(this.__scope, this.__resources, this.__input);
  }

  public get operationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.UpdateService.OperationId'),
        outputPath: 'OperationId',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration?.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration?.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration?.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration?.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration?.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration?.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class AppRunnerResponsesUpdateServiceService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerUpdateServiceRequest) {
  }

  public get serviceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.UpdateService.Service.ServiceName'),
        outputPath: 'Service.ServiceName',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration?.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration?.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration?.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration?.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration?.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration?.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.Service.ServiceName', props);
    return resource.getResponseField('Service.ServiceName') as unknown as string;
  }

  public get serviceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.UpdateService.Service.ServiceId'),
        outputPath: 'Service.ServiceId',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration?.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration?.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration?.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration?.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration?.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration?.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.Service.ServiceId', props);
    return resource.getResponseField('Service.ServiceId') as unknown as string;
  }

  public get serviceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.UpdateService.Service.ServiceArn'),
        outputPath: 'Service.ServiceArn',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration?.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration?.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration?.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration?.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration?.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration?.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.Service.ServiceArn', props);
    return resource.getResponseField('Service.ServiceArn') as unknown as string;
  }

  public get serviceUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.UpdateService.Service.ServiceUrl'),
        outputPath: 'Service.ServiceUrl',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration?.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration?.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration?.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration?.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration?.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration?.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.Service.ServiceUrl', props);
    return resource.getResponseField('Service.ServiceUrl') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.UpdateService.Service.CreatedAt'),
        outputPath: 'Service.CreatedAt',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration?.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration?.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration?.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration?.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration?.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration?.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.Service.CreatedAt', props);
    return resource.getResponseField('Service.CreatedAt') as unknown as string;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.UpdateService.Service.UpdatedAt'),
        outputPath: 'Service.UpdatedAt',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration?.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration?.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration?.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration?.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration?.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration?.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.Service.UpdatedAt', props);
    return resource.getResponseField('Service.UpdatedAt') as unknown as string;
  }

  public get deletedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.UpdateService.Service.DeletedAt'),
        outputPath: 'Service.DeletedAt',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration?.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration?.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration?.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration?.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration?.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration?.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.Service.DeletedAt', props);
    return resource.getResponseField('Service.DeletedAt') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.UpdateService.Service.Status'),
        outputPath: 'Service.Status',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration?.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration?.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration?.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration?.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration?.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration?.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.Service.Status', props);
    return resource.getResponseField('Service.Status') as unknown as string;
  }

  public get sourceConfiguration(): AppRunnerResponsesUpdateServiceServiceSourceConfiguration {
    return new AppRunnerResponsesUpdateServiceServiceSourceConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get instanceConfiguration(): AppRunnerResponsesUpdateServiceServiceInstanceConfiguration {
    return new AppRunnerResponsesUpdateServiceServiceInstanceConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get encryptionConfiguration(): AppRunnerResponsesUpdateServiceServiceEncryptionConfiguration {
    return new AppRunnerResponsesUpdateServiceServiceEncryptionConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get healthCheckConfiguration(): AppRunnerResponsesUpdateServiceServiceHealthCheckConfiguration {
    return new AppRunnerResponsesUpdateServiceServiceHealthCheckConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get autoScalingConfigurationSummary(): AppRunnerResponsesUpdateServiceServiceAutoScalingConfigurationSummary {
    return new AppRunnerResponsesUpdateServiceServiceAutoScalingConfigurationSummary(this.__scope, this.__resources, this.__input);
  }

}

export class AppRunnerResponsesUpdateServiceServiceSourceConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerUpdateServiceRequest) {
  }

  public get codeRepository(): AppRunnerResponsesUpdateServiceServiceSourceConfigurationCodeRepository {
    return new AppRunnerResponsesUpdateServiceServiceSourceConfigurationCodeRepository(this.__scope, this.__resources, this.__input);
  }

  public get imageRepository(): AppRunnerResponsesUpdateServiceServiceSourceConfigurationImageRepository {
    return new AppRunnerResponsesUpdateServiceServiceSourceConfigurationImageRepository(this.__scope, this.__resources, this.__input);
  }

  public get autoDeploymentsEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.UpdateService.Service.SourceConfiguration.AutoDeploymentsEnabled'),
        outputPath: 'Service.SourceConfiguration.AutoDeploymentsEnabled',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration?.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration?.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration?.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration?.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration?.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration?.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.Service.SourceConfiguration.AutoDeploymentsEnabled', props);
    return resource.getResponseField('Service.SourceConfiguration.AutoDeploymentsEnabled') as unknown as boolean;
  }

  public get authenticationConfiguration(): AppRunnerResponsesUpdateServiceServiceSourceConfigurationAuthenticationConfiguration {
    return new AppRunnerResponsesUpdateServiceServiceSourceConfigurationAuthenticationConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class AppRunnerResponsesUpdateServiceServiceSourceConfigurationCodeRepository {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerUpdateServiceRequest) {
  }

  public get repositoryUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.UpdateService.Service.SourceConfiguration.CodeRepository.RepositoryUrl'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.RepositoryUrl',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration?.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration?.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration?.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration?.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration?.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration?.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.Service.SourceConfiguration.CodeRepository.RepositoryUrl', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.RepositoryUrl') as unknown as string;
  }

  public get sourceCodeVersion(): AppRunnerResponsesUpdateServiceServiceSourceConfigurationCodeRepositorySourceCodeVersion {
    return new AppRunnerResponsesUpdateServiceServiceSourceConfigurationCodeRepositorySourceCodeVersion(this.__scope, this.__resources, this.__input);
  }

  public get codeConfiguration(): AppRunnerResponsesUpdateServiceServiceSourceConfigurationCodeRepositoryCodeConfiguration {
    return new AppRunnerResponsesUpdateServiceServiceSourceConfigurationCodeRepositoryCodeConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class AppRunnerResponsesUpdateServiceServiceSourceConfigurationCodeRepositorySourceCodeVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerUpdateServiceRequest) {
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.UpdateService.Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Type'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Type',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration?.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration?.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration?.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration?.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration?.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration?.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Type', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Type') as unknown as string;
  }

  public get value(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.UpdateService.Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Value'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Value',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration?.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration?.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration?.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration?.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration?.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration?.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Value', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.SourceCodeVersion.Value') as unknown as string;
  }

}

export class AppRunnerResponsesUpdateServiceServiceSourceConfigurationCodeRepositoryCodeConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerUpdateServiceRequest) {
  }

  public get configurationSource(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.UpdateService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.ConfigurationSource'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.CodeConfiguration.ConfigurationSource',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration?.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration?.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration?.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration?.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration?.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration?.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.ConfigurationSource', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.CodeConfiguration.ConfigurationSource') as unknown as string;
  }

  public get codeConfigurationValues(): AppRunnerResponsesUpdateServiceServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues {
    return new AppRunnerResponsesUpdateServiceServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues(this.__scope, this.__resources, this.__input);
  }

}

export class AppRunnerResponsesUpdateServiceServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerUpdateServiceRequest) {
  }

  public get runtime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.UpdateService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Runtime'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Runtime',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration?.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration?.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration?.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration?.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration?.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration?.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Runtime', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Runtime') as unknown as string;
  }

  public get buildCommand(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.UpdateService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.BuildCommand'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.BuildCommand',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration?.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration?.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration?.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration?.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration?.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration?.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.BuildCommand', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.BuildCommand') as unknown as string;
  }

  public get startCommand(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.UpdateService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.StartCommand'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.StartCommand',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration?.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration?.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration?.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration?.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration?.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration?.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.StartCommand', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.StartCommand') as unknown as string;
  }

  public get port(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.UpdateService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Port'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Port',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration?.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration?.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration?.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration?.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration?.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration?.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Port', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.Port') as unknown as string;
  }

  public get runtimeEnvironmentVariables(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.UpdateService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.RuntimeEnvironmentVariables'),
        outputPath: 'Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.RuntimeEnvironmentVariables',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration?.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration?.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration?.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration?.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration?.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration?.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.RuntimeEnvironmentVariables', props);
    return resource.getResponseField('Service.SourceConfiguration.CodeRepository.CodeConfiguration.CodeConfigurationValues.RuntimeEnvironmentVariables') as unknown as Record<string, string>;
  }

}

export class AppRunnerResponsesUpdateServiceServiceSourceConfigurationImageRepository {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerUpdateServiceRequest) {
  }

  public get imageIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.UpdateService.Service.SourceConfiguration.ImageRepository.ImageIdentifier'),
        outputPath: 'Service.SourceConfiguration.ImageRepository.ImageIdentifier',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration?.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration?.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration?.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration?.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration?.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration?.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.Service.SourceConfiguration.ImageRepository.ImageIdentifier', props);
    return resource.getResponseField('Service.SourceConfiguration.ImageRepository.ImageIdentifier') as unknown as string;
  }

  public get imageConfiguration(): AppRunnerResponsesUpdateServiceServiceSourceConfigurationImageRepositoryImageConfiguration {
    return new AppRunnerResponsesUpdateServiceServiceSourceConfigurationImageRepositoryImageConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get imageRepositoryType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.UpdateService.Service.SourceConfiguration.ImageRepository.ImageRepositoryType'),
        outputPath: 'Service.SourceConfiguration.ImageRepository.ImageRepositoryType',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration?.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration?.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration?.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration?.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration?.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration?.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.Service.SourceConfiguration.ImageRepository.ImageRepositoryType', props);
    return resource.getResponseField('Service.SourceConfiguration.ImageRepository.ImageRepositoryType') as unknown as string;
  }

}

export class AppRunnerResponsesUpdateServiceServiceSourceConfigurationImageRepositoryImageConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerUpdateServiceRequest) {
  }

  public get runtimeEnvironmentVariables(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.UpdateService.Service.SourceConfiguration.ImageRepository.ImageConfiguration.RuntimeEnvironmentVariables'),
        outputPath: 'Service.SourceConfiguration.ImageRepository.ImageConfiguration.RuntimeEnvironmentVariables',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration?.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration?.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration?.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration?.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration?.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration?.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.Service.SourceConfiguration.ImageRepository.ImageConfiguration.RuntimeEnvironmentVariables', props);
    return resource.getResponseField('Service.SourceConfiguration.ImageRepository.ImageConfiguration.RuntimeEnvironmentVariables') as unknown as Record<string, string>;
  }

  public get startCommand(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.UpdateService.Service.SourceConfiguration.ImageRepository.ImageConfiguration.StartCommand'),
        outputPath: 'Service.SourceConfiguration.ImageRepository.ImageConfiguration.StartCommand',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration?.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration?.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration?.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration?.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration?.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration?.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.Service.SourceConfiguration.ImageRepository.ImageConfiguration.StartCommand', props);
    return resource.getResponseField('Service.SourceConfiguration.ImageRepository.ImageConfiguration.StartCommand') as unknown as string;
  }

  public get port(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.UpdateService.Service.SourceConfiguration.ImageRepository.ImageConfiguration.Port'),
        outputPath: 'Service.SourceConfiguration.ImageRepository.ImageConfiguration.Port',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration?.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration?.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration?.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration?.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration?.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration?.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.Service.SourceConfiguration.ImageRepository.ImageConfiguration.Port', props);
    return resource.getResponseField('Service.SourceConfiguration.ImageRepository.ImageConfiguration.Port') as unknown as string;
  }

}

export class AppRunnerResponsesUpdateServiceServiceSourceConfigurationAuthenticationConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerUpdateServiceRequest) {
  }

  public get connectionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.UpdateService.Service.SourceConfiguration.AuthenticationConfiguration.ConnectionArn'),
        outputPath: 'Service.SourceConfiguration.AuthenticationConfiguration.ConnectionArn',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration?.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration?.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration?.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration?.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration?.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration?.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.Service.SourceConfiguration.AuthenticationConfiguration.ConnectionArn', props);
    return resource.getResponseField('Service.SourceConfiguration.AuthenticationConfiguration.ConnectionArn') as unknown as string;
  }

  public get accessRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.UpdateService.Service.SourceConfiguration.AuthenticationConfiguration.AccessRoleArn'),
        outputPath: 'Service.SourceConfiguration.AuthenticationConfiguration.AccessRoleArn',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration?.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration?.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration?.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration?.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration?.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration?.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.Service.SourceConfiguration.AuthenticationConfiguration.AccessRoleArn', props);
    return resource.getResponseField('Service.SourceConfiguration.AuthenticationConfiguration.AccessRoleArn') as unknown as string;
  }

}

export class AppRunnerResponsesUpdateServiceServiceInstanceConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerUpdateServiceRequest) {
  }

  public get cpu(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.UpdateService.Service.InstanceConfiguration.Cpu'),
        outputPath: 'Service.InstanceConfiguration.Cpu',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration?.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration?.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration?.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration?.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration?.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration?.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.Service.InstanceConfiguration.Cpu', props);
    return resource.getResponseField('Service.InstanceConfiguration.Cpu') as unknown as string;
  }

  public get memory(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.UpdateService.Service.InstanceConfiguration.Memory'),
        outputPath: 'Service.InstanceConfiguration.Memory',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration?.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration?.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration?.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration?.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration?.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration?.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.Service.InstanceConfiguration.Memory', props);
    return resource.getResponseField('Service.InstanceConfiguration.Memory') as unknown as string;
  }

  public get instanceRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.UpdateService.Service.InstanceConfiguration.InstanceRoleArn'),
        outputPath: 'Service.InstanceConfiguration.InstanceRoleArn',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration?.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration?.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration?.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration?.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration?.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration?.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.Service.InstanceConfiguration.InstanceRoleArn', props);
    return resource.getResponseField('Service.InstanceConfiguration.InstanceRoleArn') as unknown as string;
  }

}

export class AppRunnerResponsesUpdateServiceServiceEncryptionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerUpdateServiceRequest) {
  }

  public get kmsKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.UpdateService.Service.EncryptionConfiguration.KmsKey'),
        outputPath: 'Service.EncryptionConfiguration.KmsKey',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration?.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration?.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration?.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration?.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration?.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration?.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.Service.EncryptionConfiguration.KmsKey', props);
    return resource.getResponseField('Service.EncryptionConfiguration.KmsKey') as unknown as string;
  }

}

export class AppRunnerResponsesUpdateServiceServiceHealthCheckConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerUpdateServiceRequest) {
  }

  public get protocol(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.UpdateService.Service.HealthCheckConfiguration.Protocol'),
        outputPath: 'Service.HealthCheckConfiguration.Protocol',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration?.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration?.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration?.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration?.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration?.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration?.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.Service.HealthCheckConfiguration.Protocol', props);
    return resource.getResponseField('Service.HealthCheckConfiguration.Protocol') as unknown as string;
  }

  public get path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.UpdateService.Service.HealthCheckConfiguration.Path'),
        outputPath: 'Service.HealthCheckConfiguration.Path',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration?.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration?.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration?.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration?.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration?.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration?.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.Service.HealthCheckConfiguration.Path', props);
    return resource.getResponseField('Service.HealthCheckConfiguration.Path') as unknown as string;
  }

  public get interval(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.UpdateService.Service.HealthCheckConfiguration.Interval'),
        outputPath: 'Service.HealthCheckConfiguration.Interval',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration?.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration?.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration?.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration?.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration?.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration?.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.Service.HealthCheckConfiguration.Interval', props);
    return resource.getResponseField('Service.HealthCheckConfiguration.Interval') as unknown as number;
  }

  public get timeout(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.UpdateService.Service.HealthCheckConfiguration.Timeout'),
        outputPath: 'Service.HealthCheckConfiguration.Timeout',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration?.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration?.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration?.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration?.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration?.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration?.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.Service.HealthCheckConfiguration.Timeout', props);
    return resource.getResponseField('Service.HealthCheckConfiguration.Timeout') as unknown as number;
  }

  public get healthyThreshold(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.UpdateService.Service.HealthCheckConfiguration.HealthyThreshold'),
        outputPath: 'Service.HealthCheckConfiguration.HealthyThreshold',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration?.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration?.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration?.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration?.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration?.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration?.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.Service.HealthCheckConfiguration.HealthyThreshold', props);
    return resource.getResponseField('Service.HealthCheckConfiguration.HealthyThreshold') as unknown as number;
  }

  public get unhealthyThreshold(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.UpdateService.Service.HealthCheckConfiguration.UnhealthyThreshold'),
        outputPath: 'Service.HealthCheckConfiguration.UnhealthyThreshold',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration?.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration?.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration?.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration?.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration?.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration?.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.Service.HealthCheckConfiguration.UnhealthyThreshold', props);
    return resource.getResponseField('Service.HealthCheckConfiguration.UnhealthyThreshold') as unknown as number;
  }

}

export class AppRunnerResponsesUpdateServiceServiceAutoScalingConfigurationSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppRunnerUpdateServiceRequest) {
  }

  public get autoScalingConfigurationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.UpdateService.Service.AutoScalingConfigurationSummary.AutoScalingConfigurationArn'),
        outputPath: 'Service.AutoScalingConfigurationSummary.AutoScalingConfigurationArn',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration?.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration?.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration?.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration?.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration?.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration?.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.Service.AutoScalingConfigurationSummary.AutoScalingConfigurationArn', props);
    return resource.getResponseField('Service.AutoScalingConfigurationSummary.AutoScalingConfigurationArn') as unknown as string;
  }

  public get autoScalingConfigurationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.UpdateService.Service.AutoScalingConfigurationSummary.AutoScalingConfigurationName'),
        outputPath: 'Service.AutoScalingConfigurationSummary.AutoScalingConfigurationName',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration?.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration?.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration?.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration?.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration?.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration?.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.Service.AutoScalingConfigurationSummary.AutoScalingConfigurationName', props);
    return resource.getResponseField('Service.AutoScalingConfigurationSummary.AutoScalingConfigurationName') as unknown as string;
  }

  public get autoScalingConfigurationRevision(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'AppRunner',
        physicalResourceId: cr.PhysicalResourceId.of('AppRunner.UpdateService.Service.AutoScalingConfigurationSummary.AutoScalingConfigurationRevision'),
        outputPath: 'Service.AutoScalingConfigurationSummary.AutoScalingConfigurationRevision',
        parameters: {
          ServiceArn: this.__input.serviceArn,
          SourceConfiguration: {
            CodeRepository: {
              RepositoryUrl: this.__input.sourceConfiguration?.codeRepository?.repositoryUrl,
              SourceCodeVersion: {
                Type: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.type,
                Value: this.__input.sourceConfiguration?.codeRepository?.sourceCodeVersion.value,
              },
              CodeConfiguration: {
                ConfigurationSource: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.configurationSource,
                CodeConfigurationValues: {
                  Runtime: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtime,
                  BuildCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.buildCommand,
                  StartCommand: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.startCommand,
                  Port: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.port,
                  RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.codeRepository?.codeConfiguration?.codeConfigurationValues?.runtimeEnvironmentVariables,
                },
              },
            },
            ImageRepository: {
              ImageIdentifier: this.__input.sourceConfiguration?.imageRepository?.imageIdentifier,
              ImageConfiguration: {
                RuntimeEnvironmentVariables: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.runtimeEnvironmentVariables,
                StartCommand: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.startCommand,
                Port: this.__input.sourceConfiguration?.imageRepository?.imageConfiguration?.port,
              },
              ImageRepositoryType: this.__input.sourceConfiguration?.imageRepository?.imageRepositoryType,
            },
            AutoDeploymentsEnabled: this.__input.sourceConfiguration?.autoDeploymentsEnabled,
            AuthenticationConfiguration: {
              ConnectionArn: this.__input.sourceConfiguration?.authenticationConfiguration?.connectionArn,
              AccessRoleArn: this.__input.sourceConfiguration?.authenticationConfiguration?.accessRoleArn,
            },
          },
          InstanceConfiguration: {
            Cpu: this.__input.instanceConfiguration?.cpu,
            Memory: this.__input.instanceConfiguration?.memory,
            InstanceRoleArn: this.__input.instanceConfiguration?.instanceRoleArn,
          },
          AutoScalingConfigurationArn: this.__input.autoScalingConfigurationArn,
          HealthCheckConfiguration: {
            Protocol: this.__input.healthCheckConfiguration?.protocol,
            Path: this.__input.healthCheckConfiguration?.path,
            Interval: this.__input.healthCheckConfiguration?.interval,
            Timeout: this.__input.healthCheckConfiguration?.timeout,
            HealthyThreshold: this.__input.healthCheckConfiguration?.healthyThreshold,
            UnhealthyThreshold: this.__input.healthCheckConfiguration?.unhealthyThreshold,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.Service.AutoScalingConfigurationSummary.AutoScalingConfigurationRevision', props);
    return resource.getResponseField('Service.AutoScalingConfigurationSummary.AutoScalingConfigurationRevision') as unknown as number;
  }

}

