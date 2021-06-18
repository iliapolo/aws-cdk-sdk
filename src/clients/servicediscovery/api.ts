import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ServiceDiscoveryClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createHttpNamespace(input: shapes.ServiceDiscoveryCreateHttpNamespaceRequest): ServiceDiscoveryCreateHttpNamespace {
    return new ServiceDiscoveryCreateHttpNamespace(this, 'CreateHttpNamespace', this.__resources, input);
  }

  public createPrivateDnsNamespace(input: shapes.ServiceDiscoveryCreatePrivateDnsNamespaceRequest): ServiceDiscoveryCreatePrivateDnsNamespace {
    return new ServiceDiscoveryCreatePrivateDnsNamespace(this, 'CreatePrivateDnsNamespace', this.__resources, input);
  }

  public createPublicDnsNamespace(input: shapes.ServiceDiscoveryCreatePublicDnsNamespaceRequest): ServiceDiscoveryCreatePublicDnsNamespace {
    return new ServiceDiscoveryCreatePublicDnsNamespace(this, 'CreatePublicDnsNamespace', this.__resources, input);
  }

  public createService(input: shapes.ServiceDiscoveryCreateServiceRequest): ServiceDiscoveryCreateService {
    return new ServiceDiscoveryCreateService(this, 'CreateService', this.__resources, input);
  }

  public deleteNamespace(input: shapes.ServiceDiscoveryDeleteNamespaceRequest): ServiceDiscoveryDeleteNamespace {
    return new ServiceDiscoveryDeleteNamespace(this, 'DeleteNamespace', this.__resources, input);
  }

  public deleteService(input: shapes.ServiceDiscoveryDeleteServiceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteService',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.DeleteService'),
        parameters: {
          Id: input.id,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteService', props);
  }

  public deregisterInstance(input: shapes.ServiceDiscoveryDeregisterInstanceRequest): ServiceDiscoveryDeregisterInstance {
    return new ServiceDiscoveryDeregisterInstance(this, 'DeregisterInstance', this.__resources, input);
  }

  public discoverInstances(input: shapes.ServiceDiscoveryDiscoverInstancesRequest): ServiceDiscoveryDiscoverInstances {
    return new ServiceDiscoveryDiscoverInstances(this, 'DiscoverInstances', this.__resources, input);
  }

  public fetchInstance(input: shapes.ServiceDiscoveryGetInstanceRequest): ServiceDiscoveryFetchInstance {
    return new ServiceDiscoveryFetchInstance(this, 'FetchInstance', this.__resources, input);
  }

  public fetchInstancesHealthStatus(input: shapes.ServiceDiscoveryGetInstancesHealthStatusRequest): ServiceDiscoveryFetchInstancesHealthStatus {
    return new ServiceDiscoveryFetchInstancesHealthStatus(this, 'FetchInstancesHealthStatus', this.__resources, input);
  }

  public fetchNamespace(input: shapes.ServiceDiscoveryGetNamespaceRequest): ServiceDiscoveryFetchNamespace {
    return new ServiceDiscoveryFetchNamespace(this, 'FetchNamespace', this.__resources, input);
  }

  public fetchOperation(input: shapes.ServiceDiscoveryGetOperationRequest): ServiceDiscoveryFetchOperation {
    return new ServiceDiscoveryFetchOperation(this, 'FetchOperation', this.__resources, input);
  }

  public fetchService(input: shapes.ServiceDiscoveryGetServiceRequest): ServiceDiscoveryFetchService {
    return new ServiceDiscoveryFetchService(this, 'FetchService', this.__resources, input);
  }

  public listInstances(input: shapes.ServiceDiscoveryListInstancesRequest): ServiceDiscoveryListInstances {
    return new ServiceDiscoveryListInstances(this, 'ListInstances', this.__resources, input);
  }

  public listNamespaces(input: shapes.ServiceDiscoveryListNamespacesRequest): ServiceDiscoveryListNamespaces {
    return new ServiceDiscoveryListNamespaces(this, 'ListNamespaces', this.__resources, input);
  }

  public listOperations(input: shapes.ServiceDiscoveryListOperationsRequest): ServiceDiscoveryListOperations {
    return new ServiceDiscoveryListOperations(this, 'ListOperations', this.__resources, input);
  }

  public listServices(input: shapes.ServiceDiscoveryListServicesRequest): ServiceDiscoveryListServices {
    return new ServiceDiscoveryListServices(this, 'ListServices', this.__resources, input);
  }

  public listTagsForResource(input: shapes.ServiceDiscoveryListTagsForResourceRequest): ServiceDiscoveryListTagsForResource {
    return new ServiceDiscoveryListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public registerInstance(input: shapes.ServiceDiscoveryRegisterInstanceRequest): ServiceDiscoveryRegisterInstance {
    return new ServiceDiscoveryRegisterInstance(this, 'RegisterInstance', this.__resources, input);
  }

  public tagResource(input: shapes.ServiceDiscoveryTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.TagResource'),
        parameters: {
          ResourceARN: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.ServiceDiscoveryUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.UntagResource'),
        parameters: {
          ResourceARN: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateInstanceCustomHealthStatus(input: shapes.ServiceDiscoveryUpdateInstanceCustomHealthStatusRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateInstanceCustomHealthStatus',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.UpdateInstanceCustomHealthStatus'),
        parameters: {
          ServiceId: input.serviceId,
          InstanceId: input.instanceId,
          Status: input.status,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateInstanceCustomHealthStatus', props);
  }

  public updateService(input: shapes.ServiceDiscoveryUpdateServiceRequest): ServiceDiscoveryUpdateService {
    return new ServiceDiscoveryUpdateService(this, 'UpdateService', this.__resources, input);
  }

}

export class ServiceDiscoveryCreateHttpNamespace extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceDiscoveryCreateHttpNamespaceRequest) {
    super(scope, id);
  }

  public get operationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHttpNamespace',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.CreateHttpNamespace.OperationId'),
        outputPath: 'OperationId',
        parameters: {
          Name: this.input.name,
          CreatorRequestId: this.input.creatorRequestId,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHttpNamespace.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class ServiceDiscoveryCreatePrivateDnsNamespace extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceDiscoveryCreatePrivateDnsNamespaceRequest) {
    super(scope, id);
  }

  public get operationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPrivateDnsNamespace',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.CreatePrivateDnsNamespace.OperationId'),
        outputPath: 'OperationId',
        parameters: {
          Name: this.input.name,
          CreatorRequestId: this.input.creatorRequestId,
          Description: this.input.description,
          Vpc: this.input.vpc,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePrivateDnsNamespace.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class ServiceDiscoveryCreatePublicDnsNamespace extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceDiscoveryCreatePublicDnsNamespaceRequest) {
    super(scope, id);
  }

  public get operationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPublicDnsNamespace',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.CreatePublicDnsNamespace.OperationId'),
        outputPath: 'OperationId',
        parameters: {
          Name: this.input.name,
          CreatorRequestId: this.input.creatorRequestId,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePublicDnsNamespace.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class ServiceDiscoveryCreateService extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceDiscoveryCreateServiceRequest) {
    super(scope, id);
  }

  public get service(): ServiceDiscoveryCreateServiceService {
    return new ServiceDiscoveryCreateServiceService(this, 'Service', this.__resources, this.input);
  }

}

export class ServiceDiscoveryCreateServiceService extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceDiscoveryCreateServiceRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.CreateService.Service.Id'),
        outputPath: 'Service.Id',
        parameters: {
          Name: this.input.name,
          NamespaceId: this.input.namespaceId,
          CreatorRequestId: this.input.creatorRequestId,
          Description: this.input.description,
          DnsConfig: {
            NamespaceId: this.input.dnsConfig?.namespaceId,
            RoutingPolicy: this.input.dnsConfig?.routingPolicy,
            DnsRecords: this.input.dnsConfig?.dnsRecords,
          },
          HealthCheckConfig: {
            Type: this.input.healthCheckConfig?.type,
            ResourcePath: this.input.healthCheckConfig?.resourcePath,
            FailureThreshold: this.input.healthCheckConfig?.failureThreshold,
          },
          HealthCheckCustomConfig: {
            FailureThreshold: this.input.healthCheckCustomConfig?.failureThreshold,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.Service.Id', props);
    return resource.getResponseField('Service.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.CreateService.Service.Arn'),
        outputPath: 'Service.Arn',
        parameters: {
          Name: this.input.name,
          NamespaceId: this.input.namespaceId,
          CreatorRequestId: this.input.creatorRequestId,
          Description: this.input.description,
          DnsConfig: {
            NamespaceId: this.input.dnsConfig?.namespaceId,
            RoutingPolicy: this.input.dnsConfig?.routingPolicy,
            DnsRecords: this.input.dnsConfig?.dnsRecords,
          },
          HealthCheckConfig: {
            Type: this.input.healthCheckConfig?.type,
            ResourcePath: this.input.healthCheckConfig?.resourcePath,
            FailureThreshold: this.input.healthCheckConfig?.failureThreshold,
          },
          HealthCheckCustomConfig: {
            FailureThreshold: this.input.healthCheckCustomConfig?.failureThreshold,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.Service.Arn', props);
    return resource.getResponseField('Service.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.CreateService.Service.Name'),
        outputPath: 'Service.Name',
        parameters: {
          Name: this.input.name,
          NamespaceId: this.input.namespaceId,
          CreatorRequestId: this.input.creatorRequestId,
          Description: this.input.description,
          DnsConfig: {
            NamespaceId: this.input.dnsConfig?.namespaceId,
            RoutingPolicy: this.input.dnsConfig?.routingPolicy,
            DnsRecords: this.input.dnsConfig?.dnsRecords,
          },
          HealthCheckConfig: {
            Type: this.input.healthCheckConfig?.type,
            ResourcePath: this.input.healthCheckConfig?.resourcePath,
            FailureThreshold: this.input.healthCheckConfig?.failureThreshold,
          },
          HealthCheckCustomConfig: {
            FailureThreshold: this.input.healthCheckCustomConfig?.failureThreshold,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.Service.Name', props);
    return resource.getResponseField('Service.Name') as unknown as string;
  }

  public get namespaceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.CreateService.Service.NamespaceId'),
        outputPath: 'Service.NamespaceId',
        parameters: {
          Name: this.input.name,
          NamespaceId: this.input.namespaceId,
          CreatorRequestId: this.input.creatorRequestId,
          Description: this.input.description,
          DnsConfig: {
            NamespaceId: this.input.dnsConfig?.namespaceId,
            RoutingPolicy: this.input.dnsConfig?.routingPolicy,
            DnsRecords: this.input.dnsConfig?.dnsRecords,
          },
          HealthCheckConfig: {
            Type: this.input.healthCheckConfig?.type,
            ResourcePath: this.input.healthCheckConfig?.resourcePath,
            FailureThreshold: this.input.healthCheckConfig?.failureThreshold,
          },
          HealthCheckCustomConfig: {
            FailureThreshold: this.input.healthCheckCustomConfig?.failureThreshold,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.Service.NamespaceId', props);
    return resource.getResponseField('Service.NamespaceId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.CreateService.Service.Description'),
        outputPath: 'Service.Description',
        parameters: {
          Name: this.input.name,
          NamespaceId: this.input.namespaceId,
          CreatorRequestId: this.input.creatorRequestId,
          Description: this.input.description,
          DnsConfig: {
            NamespaceId: this.input.dnsConfig?.namespaceId,
            RoutingPolicy: this.input.dnsConfig?.routingPolicy,
            DnsRecords: this.input.dnsConfig?.dnsRecords,
          },
          HealthCheckConfig: {
            Type: this.input.healthCheckConfig?.type,
            ResourcePath: this.input.healthCheckConfig?.resourcePath,
            FailureThreshold: this.input.healthCheckConfig?.failureThreshold,
          },
          HealthCheckCustomConfig: {
            FailureThreshold: this.input.healthCheckCustomConfig?.failureThreshold,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.Service.Description', props);
    return resource.getResponseField('Service.Description') as unknown as string;
  }

  public get instanceCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.CreateService.Service.InstanceCount'),
        outputPath: 'Service.InstanceCount',
        parameters: {
          Name: this.input.name,
          NamespaceId: this.input.namespaceId,
          CreatorRequestId: this.input.creatorRequestId,
          Description: this.input.description,
          DnsConfig: {
            NamespaceId: this.input.dnsConfig?.namespaceId,
            RoutingPolicy: this.input.dnsConfig?.routingPolicy,
            DnsRecords: this.input.dnsConfig?.dnsRecords,
          },
          HealthCheckConfig: {
            Type: this.input.healthCheckConfig?.type,
            ResourcePath: this.input.healthCheckConfig?.resourcePath,
            FailureThreshold: this.input.healthCheckConfig?.failureThreshold,
          },
          HealthCheckCustomConfig: {
            FailureThreshold: this.input.healthCheckCustomConfig?.failureThreshold,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.Service.InstanceCount', props);
    return resource.getResponseField('Service.InstanceCount') as unknown as number;
  }

  public get dnsConfig(): ServiceDiscoveryCreateServiceServiceDnsConfig {
    return new ServiceDiscoveryCreateServiceServiceDnsConfig(this, 'DnsConfig', this.__resources, this.input);
  }

  public get healthCheckConfig(): ServiceDiscoveryCreateServiceServiceHealthCheckConfig {
    return new ServiceDiscoveryCreateServiceServiceHealthCheckConfig(this, 'HealthCheckConfig', this.__resources, this.input);
  }

  public get healthCheckCustomConfig(): ServiceDiscoveryCreateServiceServiceHealthCheckCustomConfig {
    return new ServiceDiscoveryCreateServiceServiceHealthCheckCustomConfig(this, 'HealthCheckCustomConfig', this.__resources, this.input);
  }

  public get createDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.CreateService.Service.CreateDate'),
        outputPath: 'Service.CreateDate',
        parameters: {
          Name: this.input.name,
          NamespaceId: this.input.namespaceId,
          CreatorRequestId: this.input.creatorRequestId,
          Description: this.input.description,
          DnsConfig: {
            NamespaceId: this.input.dnsConfig?.namespaceId,
            RoutingPolicy: this.input.dnsConfig?.routingPolicy,
            DnsRecords: this.input.dnsConfig?.dnsRecords,
          },
          HealthCheckConfig: {
            Type: this.input.healthCheckConfig?.type,
            ResourcePath: this.input.healthCheckConfig?.resourcePath,
            FailureThreshold: this.input.healthCheckConfig?.failureThreshold,
          },
          HealthCheckCustomConfig: {
            FailureThreshold: this.input.healthCheckCustomConfig?.failureThreshold,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.Service.CreateDate', props);
    return resource.getResponseField('Service.CreateDate') as unknown as string;
  }

  public get creatorRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.CreateService.Service.CreatorRequestId'),
        outputPath: 'Service.CreatorRequestId',
        parameters: {
          Name: this.input.name,
          NamespaceId: this.input.namespaceId,
          CreatorRequestId: this.input.creatorRequestId,
          Description: this.input.description,
          DnsConfig: {
            NamespaceId: this.input.dnsConfig?.namespaceId,
            RoutingPolicy: this.input.dnsConfig?.routingPolicy,
            DnsRecords: this.input.dnsConfig?.dnsRecords,
          },
          HealthCheckConfig: {
            Type: this.input.healthCheckConfig?.type,
            ResourcePath: this.input.healthCheckConfig?.resourcePath,
            FailureThreshold: this.input.healthCheckConfig?.failureThreshold,
          },
          HealthCheckCustomConfig: {
            FailureThreshold: this.input.healthCheckCustomConfig?.failureThreshold,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.Service.CreatorRequestId', props);
    return resource.getResponseField('Service.CreatorRequestId') as unknown as string;
  }

}

export class ServiceDiscoveryCreateServiceServiceDnsConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceDiscoveryCreateServiceRequest) {
    super(scope, id);
  }

  public get namespaceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.CreateService.Service.DnsConfig.NamespaceId'),
        outputPath: 'Service.DnsConfig.NamespaceId',
        parameters: {
          Name: this.input.name,
          NamespaceId: this.input.namespaceId,
          CreatorRequestId: this.input.creatorRequestId,
          Description: this.input.description,
          DnsConfig: {
            NamespaceId: this.input.dnsConfig?.namespaceId,
            RoutingPolicy: this.input.dnsConfig?.routingPolicy,
            DnsRecords: this.input.dnsConfig?.dnsRecords,
          },
          HealthCheckConfig: {
            Type: this.input.healthCheckConfig?.type,
            ResourcePath: this.input.healthCheckConfig?.resourcePath,
            FailureThreshold: this.input.healthCheckConfig?.failureThreshold,
          },
          HealthCheckCustomConfig: {
            FailureThreshold: this.input.healthCheckCustomConfig?.failureThreshold,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.Service.DnsConfig.NamespaceId', props);
    return resource.getResponseField('Service.DnsConfig.NamespaceId') as unknown as string;
  }

  public get routingPolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.CreateService.Service.DnsConfig.RoutingPolicy'),
        outputPath: 'Service.DnsConfig.RoutingPolicy',
        parameters: {
          Name: this.input.name,
          NamespaceId: this.input.namespaceId,
          CreatorRequestId: this.input.creatorRequestId,
          Description: this.input.description,
          DnsConfig: {
            NamespaceId: this.input.dnsConfig?.namespaceId,
            RoutingPolicy: this.input.dnsConfig?.routingPolicy,
            DnsRecords: this.input.dnsConfig?.dnsRecords,
          },
          HealthCheckConfig: {
            Type: this.input.healthCheckConfig?.type,
            ResourcePath: this.input.healthCheckConfig?.resourcePath,
            FailureThreshold: this.input.healthCheckConfig?.failureThreshold,
          },
          HealthCheckCustomConfig: {
            FailureThreshold: this.input.healthCheckCustomConfig?.failureThreshold,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.Service.DnsConfig.RoutingPolicy', props);
    return resource.getResponseField('Service.DnsConfig.RoutingPolicy') as unknown as string;
  }

  public get dnsRecords(): shapes.ServiceDiscoveryDnsRecord[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.CreateService.Service.DnsConfig.DnsRecords'),
        outputPath: 'Service.DnsConfig.DnsRecords',
        parameters: {
          Name: this.input.name,
          NamespaceId: this.input.namespaceId,
          CreatorRequestId: this.input.creatorRequestId,
          Description: this.input.description,
          DnsConfig: {
            NamespaceId: this.input.dnsConfig?.namespaceId,
            RoutingPolicy: this.input.dnsConfig?.routingPolicy,
            DnsRecords: this.input.dnsConfig?.dnsRecords,
          },
          HealthCheckConfig: {
            Type: this.input.healthCheckConfig?.type,
            ResourcePath: this.input.healthCheckConfig?.resourcePath,
            FailureThreshold: this.input.healthCheckConfig?.failureThreshold,
          },
          HealthCheckCustomConfig: {
            FailureThreshold: this.input.healthCheckCustomConfig?.failureThreshold,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.Service.DnsConfig.DnsRecords', props);
    return resource.getResponseField('Service.DnsConfig.DnsRecords') as unknown as shapes.ServiceDiscoveryDnsRecord[];
  }

}

export class ServiceDiscoveryCreateServiceServiceHealthCheckConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceDiscoveryCreateServiceRequest) {
    super(scope, id);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.CreateService.Service.HealthCheckConfig.Type'),
        outputPath: 'Service.HealthCheckConfig.Type',
        parameters: {
          Name: this.input.name,
          NamespaceId: this.input.namespaceId,
          CreatorRequestId: this.input.creatorRequestId,
          Description: this.input.description,
          DnsConfig: {
            NamespaceId: this.input.dnsConfig?.namespaceId,
            RoutingPolicy: this.input.dnsConfig?.routingPolicy,
            DnsRecords: this.input.dnsConfig?.dnsRecords,
          },
          HealthCheckConfig: {
            Type: this.input.healthCheckConfig?.type,
            ResourcePath: this.input.healthCheckConfig?.resourcePath,
            FailureThreshold: this.input.healthCheckConfig?.failureThreshold,
          },
          HealthCheckCustomConfig: {
            FailureThreshold: this.input.healthCheckCustomConfig?.failureThreshold,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.Service.HealthCheckConfig.Type', props);
    return resource.getResponseField('Service.HealthCheckConfig.Type') as unknown as string;
  }

  public get resourcePath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.CreateService.Service.HealthCheckConfig.ResourcePath'),
        outputPath: 'Service.HealthCheckConfig.ResourcePath',
        parameters: {
          Name: this.input.name,
          NamespaceId: this.input.namespaceId,
          CreatorRequestId: this.input.creatorRequestId,
          Description: this.input.description,
          DnsConfig: {
            NamespaceId: this.input.dnsConfig?.namespaceId,
            RoutingPolicy: this.input.dnsConfig?.routingPolicy,
            DnsRecords: this.input.dnsConfig?.dnsRecords,
          },
          HealthCheckConfig: {
            Type: this.input.healthCheckConfig?.type,
            ResourcePath: this.input.healthCheckConfig?.resourcePath,
            FailureThreshold: this.input.healthCheckConfig?.failureThreshold,
          },
          HealthCheckCustomConfig: {
            FailureThreshold: this.input.healthCheckCustomConfig?.failureThreshold,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.Service.HealthCheckConfig.ResourcePath', props);
    return resource.getResponseField('Service.HealthCheckConfig.ResourcePath') as unknown as string;
  }

  public get failureThreshold(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.CreateService.Service.HealthCheckConfig.FailureThreshold'),
        outputPath: 'Service.HealthCheckConfig.FailureThreshold',
        parameters: {
          Name: this.input.name,
          NamespaceId: this.input.namespaceId,
          CreatorRequestId: this.input.creatorRequestId,
          Description: this.input.description,
          DnsConfig: {
            NamespaceId: this.input.dnsConfig?.namespaceId,
            RoutingPolicy: this.input.dnsConfig?.routingPolicy,
            DnsRecords: this.input.dnsConfig?.dnsRecords,
          },
          HealthCheckConfig: {
            Type: this.input.healthCheckConfig?.type,
            ResourcePath: this.input.healthCheckConfig?.resourcePath,
            FailureThreshold: this.input.healthCheckConfig?.failureThreshold,
          },
          HealthCheckCustomConfig: {
            FailureThreshold: this.input.healthCheckCustomConfig?.failureThreshold,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.Service.HealthCheckConfig.FailureThreshold', props);
    return resource.getResponseField('Service.HealthCheckConfig.FailureThreshold') as unknown as number;
  }

}

export class ServiceDiscoveryCreateServiceServiceHealthCheckCustomConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceDiscoveryCreateServiceRequest) {
    super(scope, id);
  }

  public get failureThreshold(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.CreateService.Service.HealthCheckCustomConfig.FailureThreshold'),
        outputPath: 'Service.HealthCheckCustomConfig.FailureThreshold',
        parameters: {
          Name: this.input.name,
          NamespaceId: this.input.namespaceId,
          CreatorRequestId: this.input.creatorRequestId,
          Description: this.input.description,
          DnsConfig: {
            NamespaceId: this.input.dnsConfig?.namespaceId,
            RoutingPolicy: this.input.dnsConfig?.routingPolicy,
            DnsRecords: this.input.dnsConfig?.dnsRecords,
          },
          HealthCheckConfig: {
            Type: this.input.healthCheckConfig?.type,
            ResourcePath: this.input.healthCheckConfig?.resourcePath,
            FailureThreshold: this.input.healthCheckConfig?.failureThreshold,
          },
          HealthCheckCustomConfig: {
            FailureThreshold: this.input.healthCheckCustomConfig?.failureThreshold,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateService.Service.HealthCheckCustomConfig.FailureThreshold', props);
    return resource.getResponseField('Service.HealthCheckCustomConfig.FailureThreshold') as unknown as number;
  }

}

export class ServiceDiscoveryDeleteNamespace extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceDiscoveryDeleteNamespaceRequest) {
    super(scope, id);
  }

  public get operationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteNamespace',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.DeleteNamespace.OperationId'),
        outputPath: 'OperationId',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteNamespace.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class ServiceDiscoveryDeregisterInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceDiscoveryDeregisterInstanceRequest) {
    super(scope, id);
  }

  public get operationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterInstance',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.DeregisterInstance.OperationId'),
        outputPath: 'OperationId',
        parameters: {
          ServiceId: this.input.serviceId,
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterInstance.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class ServiceDiscoveryDiscoverInstances extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceDiscoveryDiscoverInstancesRequest) {
    super(scope, id);
  }

  public get instances(): shapes.ServiceDiscoveryHttpInstanceSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'discoverInstances',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.DiscoverInstances.Instances'),
        outputPath: 'Instances',
        parameters: {
          NamespaceName: this.input.namespaceName,
          ServiceName: this.input.serviceName,
          MaxResults: this.input.maxResults,
          QueryParameters: this.input.queryParameters,
          OptionalParameters: this.input.optionalParameters,
          HealthStatus: this.input.healthStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DiscoverInstances.Instances', props);
    return resource.getResponseField('Instances') as unknown as shapes.ServiceDiscoveryHttpInstanceSummary[];
  }

}

export class ServiceDiscoveryFetchInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceDiscoveryGetInstanceRequest) {
    super(scope, id);
  }

  public get instance(): ServiceDiscoveryFetchInstanceInstance {
    return new ServiceDiscoveryFetchInstanceInstance(this, 'Instance', this.__resources, this.input);
  }

}

export class ServiceDiscoveryFetchInstanceInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceDiscoveryGetInstanceRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstance',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.GetInstance.Instance.Id'),
        outputPath: 'Instance.Id',
        parameters: {
          ServiceId: this.input.serviceId,
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstance.Instance.Id', props);
    return resource.getResponseField('Instance.Id') as unknown as string;
  }

  public get creatorRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstance',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.GetInstance.Instance.CreatorRequestId'),
        outputPath: 'Instance.CreatorRequestId',
        parameters: {
          ServiceId: this.input.serviceId,
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstance.Instance.CreatorRequestId', props);
    return resource.getResponseField('Instance.CreatorRequestId') as unknown as string;
  }

  public get attributes(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstance',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.GetInstance.Instance.Attributes'),
        outputPath: 'Instance.Attributes',
        parameters: {
          ServiceId: this.input.serviceId,
          InstanceId: this.input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstance.Instance.Attributes', props);
    return resource.getResponseField('Instance.Attributes') as unknown as Record<string, string>;
  }

}

export class ServiceDiscoveryFetchInstancesHealthStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceDiscoveryGetInstancesHealthStatusRequest) {
    super(scope, id);
  }

  public get status(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstancesHealthStatus',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.GetInstancesHealthStatus.Status'),
        outputPath: 'Status',
        parameters: {
          ServiceId: this.input.serviceId,
          Instances: this.input.instances,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstancesHealthStatus.Status', props);
    return resource.getResponseField('Status') as unknown as Record<string, string>;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstancesHealthStatus',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.GetInstancesHealthStatus.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ServiceId: this.input.serviceId,
          Instances: this.input.instances,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstancesHealthStatus.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ServiceDiscoveryFetchNamespace extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceDiscoveryGetNamespaceRequest) {
    super(scope, id);
  }

  public get namespace(): ServiceDiscoveryFetchNamespaceNamespace {
    return new ServiceDiscoveryFetchNamespaceNamespace(this, 'Namespace', this.__resources, this.input);
  }

}

export class ServiceDiscoveryFetchNamespaceNamespace extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceDiscoveryGetNamespaceRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNamespace',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.GetNamespace.Namespace.Id'),
        outputPath: 'Namespace.Id',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNamespace.Namespace.Id', props);
    return resource.getResponseField('Namespace.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNamespace',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.GetNamespace.Namespace.Arn'),
        outputPath: 'Namespace.Arn',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNamespace.Namespace.Arn', props);
    return resource.getResponseField('Namespace.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNamespace',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.GetNamespace.Namespace.Name'),
        outputPath: 'Namespace.Name',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNamespace.Namespace.Name', props);
    return resource.getResponseField('Namespace.Name') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNamespace',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.GetNamespace.Namespace.Type'),
        outputPath: 'Namespace.Type',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNamespace.Namespace.Type', props);
    return resource.getResponseField('Namespace.Type') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNamespace',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.GetNamespace.Namespace.Description'),
        outputPath: 'Namespace.Description',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNamespace.Namespace.Description', props);
    return resource.getResponseField('Namespace.Description') as unknown as string;
  }

  public get serviceCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNamespace',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.GetNamespace.Namespace.ServiceCount'),
        outputPath: 'Namespace.ServiceCount',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNamespace.Namespace.ServiceCount', props);
    return resource.getResponseField('Namespace.ServiceCount') as unknown as number;
  }

  public get properties(): ServiceDiscoveryFetchNamespaceNamespaceProperties {
    return new ServiceDiscoveryFetchNamespaceNamespaceProperties(this, 'Properties', this.__resources, this.input);
  }

  public get createDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNamespace',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.GetNamespace.Namespace.CreateDate'),
        outputPath: 'Namespace.CreateDate',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNamespace.Namespace.CreateDate', props);
    return resource.getResponseField('Namespace.CreateDate') as unknown as string;
  }

  public get creatorRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNamespace',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.GetNamespace.Namespace.CreatorRequestId'),
        outputPath: 'Namespace.CreatorRequestId',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNamespace.Namespace.CreatorRequestId', props);
    return resource.getResponseField('Namespace.CreatorRequestId') as unknown as string;
  }

}

export class ServiceDiscoveryFetchNamespaceNamespaceProperties extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceDiscoveryGetNamespaceRequest) {
    super(scope, id);
  }

  public get dnsProperties(): ServiceDiscoveryFetchNamespaceNamespacePropertiesDnsProperties {
    return new ServiceDiscoveryFetchNamespaceNamespacePropertiesDnsProperties(this, 'DnsProperties', this.__resources, this.input);
  }

  public get httpProperties(): ServiceDiscoveryFetchNamespaceNamespacePropertiesHttpProperties {
    return new ServiceDiscoveryFetchNamespaceNamespacePropertiesHttpProperties(this, 'HttpProperties', this.__resources, this.input);
  }

}

export class ServiceDiscoveryFetchNamespaceNamespacePropertiesDnsProperties extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceDiscoveryGetNamespaceRequest) {
    super(scope, id);
  }

  public get hostedZoneId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNamespace',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.GetNamespace.Namespace.Properties.DnsProperties.HostedZoneId'),
        outputPath: 'Namespace.Properties.DnsProperties.HostedZoneId',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNamespace.Namespace.Properties.DnsProperties.HostedZoneId', props);
    return resource.getResponseField('Namespace.Properties.DnsProperties.HostedZoneId') as unknown as string;
  }

}

export class ServiceDiscoveryFetchNamespaceNamespacePropertiesHttpProperties extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceDiscoveryGetNamespaceRequest) {
    super(scope, id);
  }

  public get httpName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNamespace',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.GetNamespace.Namespace.Properties.HttpProperties.HttpName'),
        outputPath: 'Namespace.Properties.HttpProperties.HttpName',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNamespace.Namespace.Properties.HttpProperties.HttpName', props);
    return resource.getResponseField('Namespace.Properties.HttpProperties.HttpName') as unknown as string;
  }

}

export class ServiceDiscoveryFetchOperation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceDiscoveryGetOperationRequest) {
    super(scope, id);
  }

  public get operation(): ServiceDiscoveryFetchOperationOperation {
    return new ServiceDiscoveryFetchOperationOperation(this, 'Operation', this.__resources, this.input);
  }

}

export class ServiceDiscoveryFetchOperationOperation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceDiscoveryGetOperationRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOperation',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.GetOperation.Operation.Id'),
        outputPath: 'Operation.Id',
        parameters: {
          OperationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOperation.Operation.Id', props);
    return resource.getResponseField('Operation.Id') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOperation',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.GetOperation.Operation.Type'),
        outputPath: 'Operation.Type',
        parameters: {
          OperationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOperation.Operation.Type', props);
    return resource.getResponseField('Operation.Type') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOperation',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.GetOperation.Operation.Status'),
        outputPath: 'Operation.Status',
        parameters: {
          OperationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOperation.Operation.Status', props);
    return resource.getResponseField('Operation.Status') as unknown as string;
  }

  public get errorMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOperation',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.GetOperation.Operation.ErrorMessage'),
        outputPath: 'Operation.ErrorMessage',
        parameters: {
          OperationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOperation.Operation.ErrorMessage', props);
    return resource.getResponseField('Operation.ErrorMessage') as unknown as string;
  }

  public get errorCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOperation',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.GetOperation.Operation.ErrorCode'),
        outputPath: 'Operation.ErrorCode',
        parameters: {
          OperationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOperation.Operation.ErrorCode', props);
    return resource.getResponseField('Operation.ErrorCode') as unknown as string;
  }

  public get createDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOperation',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.GetOperation.Operation.CreateDate'),
        outputPath: 'Operation.CreateDate',
        parameters: {
          OperationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOperation.Operation.CreateDate', props);
    return resource.getResponseField('Operation.CreateDate') as unknown as string;
  }

  public get updateDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOperation',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.GetOperation.Operation.UpdateDate'),
        outputPath: 'Operation.UpdateDate',
        parameters: {
          OperationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOperation.Operation.UpdateDate', props);
    return resource.getResponseField('Operation.UpdateDate') as unknown as string;
  }

  public get targets(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOperation',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.GetOperation.Operation.Targets'),
        outputPath: 'Operation.Targets',
        parameters: {
          OperationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOperation.Operation.Targets', props);
    return resource.getResponseField('Operation.Targets') as unknown as Record<string, string>;
  }

}

export class ServiceDiscoveryFetchService extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceDiscoveryGetServiceRequest) {
    super(scope, id);
  }

  public get service(): ServiceDiscoveryFetchServiceService {
    return new ServiceDiscoveryFetchServiceService(this, 'Service', this.__resources, this.input);
  }

}

export class ServiceDiscoveryFetchServiceService extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceDiscoveryGetServiceRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getService',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.GetService.Service.Id'),
        outputPath: 'Service.Id',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetService.Service.Id', props);
    return resource.getResponseField('Service.Id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getService',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.GetService.Service.Arn'),
        outputPath: 'Service.Arn',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetService.Service.Arn', props);
    return resource.getResponseField('Service.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getService',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.GetService.Service.Name'),
        outputPath: 'Service.Name',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetService.Service.Name', props);
    return resource.getResponseField('Service.Name') as unknown as string;
  }

  public get namespaceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getService',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.GetService.Service.NamespaceId'),
        outputPath: 'Service.NamespaceId',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetService.Service.NamespaceId', props);
    return resource.getResponseField('Service.NamespaceId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getService',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.GetService.Service.Description'),
        outputPath: 'Service.Description',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetService.Service.Description', props);
    return resource.getResponseField('Service.Description') as unknown as string;
  }

  public get instanceCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getService',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.GetService.Service.InstanceCount'),
        outputPath: 'Service.InstanceCount',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetService.Service.InstanceCount', props);
    return resource.getResponseField('Service.InstanceCount') as unknown as number;
  }

  public get dnsConfig(): ServiceDiscoveryFetchServiceServiceDnsConfig {
    return new ServiceDiscoveryFetchServiceServiceDnsConfig(this, 'DnsConfig', this.__resources, this.input);
  }

  public get healthCheckConfig(): ServiceDiscoveryFetchServiceServiceHealthCheckConfig {
    return new ServiceDiscoveryFetchServiceServiceHealthCheckConfig(this, 'HealthCheckConfig', this.__resources, this.input);
  }

  public get healthCheckCustomConfig(): ServiceDiscoveryFetchServiceServiceHealthCheckCustomConfig {
    return new ServiceDiscoveryFetchServiceServiceHealthCheckCustomConfig(this, 'HealthCheckCustomConfig', this.__resources, this.input);
  }

  public get createDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getService',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.GetService.Service.CreateDate'),
        outputPath: 'Service.CreateDate',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetService.Service.CreateDate', props);
    return resource.getResponseField('Service.CreateDate') as unknown as string;
  }

  public get creatorRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getService',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.GetService.Service.CreatorRequestId'),
        outputPath: 'Service.CreatorRequestId',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetService.Service.CreatorRequestId', props);
    return resource.getResponseField('Service.CreatorRequestId') as unknown as string;
  }

}

export class ServiceDiscoveryFetchServiceServiceDnsConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceDiscoveryGetServiceRequest) {
    super(scope, id);
  }

  public get namespaceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getService',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.GetService.Service.DnsConfig.NamespaceId'),
        outputPath: 'Service.DnsConfig.NamespaceId',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetService.Service.DnsConfig.NamespaceId', props);
    return resource.getResponseField('Service.DnsConfig.NamespaceId') as unknown as string;
  }

  public get routingPolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getService',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.GetService.Service.DnsConfig.RoutingPolicy'),
        outputPath: 'Service.DnsConfig.RoutingPolicy',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetService.Service.DnsConfig.RoutingPolicy', props);
    return resource.getResponseField('Service.DnsConfig.RoutingPolicy') as unknown as string;
  }

  public get dnsRecords(): shapes.ServiceDiscoveryDnsRecord[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getService',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.GetService.Service.DnsConfig.DnsRecords'),
        outputPath: 'Service.DnsConfig.DnsRecords',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetService.Service.DnsConfig.DnsRecords', props);
    return resource.getResponseField('Service.DnsConfig.DnsRecords') as unknown as shapes.ServiceDiscoveryDnsRecord[];
  }

}

export class ServiceDiscoveryFetchServiceServiceHealthCheckConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceDiscoveryGetServiceRequest) {
    super(scope, id);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getService',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.GetService.Service.HealthCheckConfig.Type'),
        outputPath: 'Service.HealthCheckConfig.Type',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetService.Service.HealthCheckConfig.Type', props);
    return resource.getResponseField('Service.HealthCheckConfig.Type') as unknown as string;
  }

  public get resourcePath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getService',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.GetService.Service.HealthCheckConfig.ResourcePath'),
        outputPath: 'Service.HealthCheckConfig.ResourcePath',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetService.Service.HealthCheckConfig.ResourcePath', props);
    return resource.getResponseField('Service.HealthCheckConfig.ResourcePath') as unknown as string;
  }

  public get failureThreshold(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getService',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.GetService.Service.HealthCheckConfig.FailureThreshold'),
        outputPath: 'Service.HealthCheckConfig.FailureThreshold',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetService.Service.HealthCheckConfig.FailureThreshold', props);
    return resource.getResponseField('Service.HealthCheckConfig.FailureThreshold') as unknown as number;
  }

}

export class ServiceDiscoveryFetchServiceServiceHealthCheckCustomConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceDiscoveryGetServiceRequest) {
    super(scope, id);
  }

  public get failureThreshold(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getService',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.GetService.Service.HealthCheckCustomConfig.FailureThreshold'),
        outputPath: 'Service.HealthCheckCustomConfig.FailureThreshold',
        parameters: {
          Id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetService.Service.HealthCheckCustomConfig.FailureThreshold', props);
    return resource.getResponseField('Service.HealthCheckCustomConfig.FailureThreshold') as unknown as number;
  }

}

export class ServiceDiscoveryListInstances extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceDiscoveryListInstancesRequest) {
    super(scope, id);
  }

  public get instances(): shapes.ServiceDiscoveryInstanceSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInstances',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.ListInstances.Instances'),
        outputPath: 'Instances',
        parameters: {
          ServiceId: this.input.serviceId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListInstances.Instances', props);
    return resource.getResponseField('Instances') as unknown as shapes.ServiceDiscoveryInstanceSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInstances',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.ListInstances.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ServiceId: this.input.serviceId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListInstances.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ServiceDiscoveryListNamespaces extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceDiscoveryListNamespacesRequest) {
    super(scope, id);
  }

  public get namespaces(): shapes.ServiceDiscoveryNamespaceSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listNamespaces',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.ListNamespaces.Namespaces'),
        outputPath: 'Namespaces',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          Filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListNamespaces.Namespaces', props);
    return resource.getResponseField('Namespaces') as unknown as shapes.ServiceDiscoveryNamespaceSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listNamespaces',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.ListNamespaces.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          Filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListNamespaces.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ServiceDiscoveryListOperations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceDiscoveryListOperationsRequest) {
    super(scope, id);
  }

  public get operations(): shapes.ServiceDiscoveryOperationSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listOperations',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.ListOperations.Operations'),
        outputPath: 'Operations',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          Filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListOperations.Operations', props);
    return resource.getResponseField('Operations') as unknown as shapes.ServiceDiscoveryOperationSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listOperations',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.ListOperations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          Filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListOperations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ServiceDiscoveryListServices extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceDiscoveryListServicesRequest) {
    super(scope, id);
  }

  public get services(): shapes.ServiceDiscoveryServiceSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listServices',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.ListServices.Services'),
        outputPath: 'Services',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          Filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListServices.Services', props);
    return resource.getResponseField('Services') as unknown as shapes.ServiceDiscoveryServiceSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listServices',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.ListServices.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          Filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListServices.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ServiceDiscoveryListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceDiscoveryListTagsForResourceRequest) {
    super(scope, id);
  }

  public get tags(): shapes.ServiceDiscoveryTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceARN: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.ServiceDiscoveryTag[];
  }

}

export class ServiceDiscoveryRegisterInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceDiscoveryRegisterInstanceRequest) {
    super(scope, id);
  }

  public get operationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerInstance',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.RegisterInstance.OperationId'),
        outputPath: 'OperationId',
        parameters: {
          ServiceId: this.input.serviceId,
          InstanceId: this.input.instanceId,
          CreatorRequestId: this.input.creatorRequestId,
          Attributes: this.input.attributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterInstance.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class ServiceDiscoveryUpdateService extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceDiscoveryUpdateServiceRequest) {
    super(scope, id);
  }

  public get operationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateService',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.UpdateService.OperationId'),
        outputPath: 'OperationId',
        parameters: {
          Id: this.input.id,
          Service: {
            Description: this.input.service.description,
            DnsConfig: {
              DnsRecords: this.input.service.dnsConfig?.dnsRecords,
            },
            HealthCheckConfig: {
              Type: this.input.service.healthCheckConfig?.type,
              ResourcePath: this.input.service.healthCheckConfig?.resourcePath,
              FailureThreshold: this.input.service.healthCheckConfig?.failureThreshold,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateService.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

