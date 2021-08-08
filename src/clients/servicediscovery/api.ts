import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ServiceDiscoveryClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createHttpNamespace(input: shapes.ServiceDiscoveryCreateHttpNamespaceRequest): ServiceDiscoveryResponsesCreateHttpNamespace {
    return new ServiceDiscoveryResponsesCreateHttpNamespace(this, this.__resources, input);
  }

  public createPrivateDnsNamespace(input: shapes.ServiceDiscoveryCreatePrivateDnsNamespaceRequest): ServiceDiscoveryResponsesCreatePrivateDnsNamespace {
    return new ServiceDiscoveryResponsesCreatePrivateDnsNamespace(this, this.__resources, input);
  }

  public createPublicDnsNamespace(input: shapes.ServiceDiscoveryCreatePublicDnsNamespaceRequest): ServiceDiscoveryResponsesCreatePublicDnsNamespace {
    return new ServiceDiscoveryResponsesCreatePublicDnsNamespace(this, this.__resources, input);
  }

  public createService(input: shapes.ServiceDiscoveryCreateServiceRequest): ServiceDiscoveryResponsesCreateService {
    return new ServiceDiscoveryResponsesCreateService(this, this.__resources, input);
  }

  public deleteNamespace(input: shapes.ServiceDiscoveryDeleteNamespaceRequest): ServiceDiscoveryResponsesDeleteNamespace {
    return new ServiceDiscoveryResponsesDeleteNamespace(this, this.__resources, input);
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

  public deregisterInstance(input: shapes.ServiceDiscoveryDeregisterInstanceRequest): ServiceDiscoveryResponsesDeregisterInstance {
    return new ServiceDiscoveryResponsesDeregisterInstance(this, this.__resources, input);
  }

  public discoverInstances(input: shapes.ServiceDiscoveryDiscoverInstancesRequest): ServiceDiscoveryResponsesDiscoverInstances {
    return new ServiceDiscoveryResponsesDiscoverInstances(this, this.__resources, input);
  }

  public fetchInstance(input: shapes.ServiceDiscoveryGetInstanceRequest): ServiceDiscoveryResponsesFetchInstance {
    return new ServiceDiscoveryResponsesFetchInstance(this, this.__resources, input);
  }

  public fetchInstancesHealthStatus(input: shapes.ServiceDiscoveryGetInstancesHealthStatusRequest): ServiceDiscoveryResponsesFetchInstancesHealthStatus {
    return new ServiceDiscoveryResponsesFetchInstancesHealthStatus(this, this.__resources, input);
  }

  public fetchNamespace(input: shapes.ServiceDiscoveryGetNamespaceRequest): ServiceDiscoveryResponsesFetchNamespace {
    return new ServiceDiscoveryResponsesFetchNamespace(this, this.__resources, input);
  }

  public fetchOperation(input: shapes.ServiceDiscoveryGetOperationRequest): ServiceDiscoveryResponsesFetchOperation {
    return new ServiceDiscoveryResponsesFetchOperation(this, this.__resources, input);
  }

  public fetchService(input: shapes.ServiceDiscoveryGetServiceRequest): ServiceDiscoveryResponsesFetchService {
    return new ServiceDiscoveryResponsesFetchService(this, this.__resources, input);
  }

  public listInstances(input: shapes.ServiceDiscoveryListInstancesRequest): ServiceDiscoveryResponsesListInstances {
    return new ServiceDiscoveryResponsesListInstances(this, this.__resources, input);
  }

  public listNamespaces(input: shapes.ServiceDiscoveryListNamespacesRequest): ServiceDiscoveryResponsesListNamespaces {
    return new ServiceDiscoveryResponsesListNamespaces(this, this.__resources, input);
  }

  public listOperations(input: shapes.ServiceDiscoveryListOperationsRequest): ServiceDiscoveryResponsesListOperations {
    return new ServiceDiscoveryResponsesListOperations(this, this.__resources, input);
  }

  public listServices(input: shapes.ServiceDiscoveryListServicesRequest): ServiceDiscoveryResponsesListServices {
    return new ServiceDiscoveryResponsesListServices(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.ServiceDiscoveryListTagsForResourceRequest): ServiceDiscoveryResponsesListTagsForResource {
    return new ServiceDiscoveryResponsesListTagsForResource(this, this.__resources, input);
  }

  public registerInstance(input: shapes.ServiceDiscoveryRegisterInstanceRequest): ServiceDiscoveryResponsesRegisterInstance {
    return new ServiceDiscoveryResponsesRegisterInstance(this, this.__resources, input);
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

  public updateHttpNamespace(input: shapes.ServiceDiscoveryUpdateHttpNamespaceRequest): ServiceDiscoveryResponsesUpdateHttpNamespace {
    return new ServiceDiscoveryResponsesUpdateHttpNamespace(this, this.__resources, input);
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

  public updatePrivateDnsNamespace(input: shapes.ServiceDiscoveryUpdatePrivateDnsNamespaceRequest): ServiceDiscoveryResponsesUpdatePrivateDnsNamespace {
    return new ServiceDiscoveryResponsesUpdatePrivateDnsNamespace(this, this.__resources, input);
  }

  public updatePublicDnsNamespace(input: shapes.ServiceDiscoveryUpdatePublicDnsNamespaceRequest): ServiceDiscoveryResponsesUpdatePublicDnsNamespace {
    return new ServiceDiscoveryResponsesUpdatePublicDnsNamespace(this, this.__resources, input);
  }

  public updateService(input: shapes.ServiceDiscoveryUpdateServiceRequest): ServiceDiscoveryResponsesUpdateService {
    return new ServiceDiscoveryResponsesUpdateService(this, this.__resources, input);
  }

}

export class ServiceDiscoveryResponsesCreateHttpNamespace {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceDiscoveryCreateHttpNamespaceRequest) {
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
          Name: this.__input.name,
          CreatorRequestId: this.__input.creatorRequestId,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHttpNamespace.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class ServiceDiscoveryResponsesCreatePrivateDnsNamespace {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceDiscoveryCreatePrivateDnsNamespaceRequest) {
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
          Name: this.__input.name,
          CreatorRequestId: this.__input.creatorRequestId,
          Description: this.__input.description,
          Vpc: this.__input.vpc,
          Tags: this.__input.tags,
          Properties: {
            DnsProperties: {
              SOA: {
                TTL: this.__input.properties?.dnsProperties.soa.ttl,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePrivateDnsNamespace.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class ServiceDiscoveryResponsesCreatePublicDnsNamespace {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceDiscoveryCreatePublicDnsNamespaceRequest) {
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
          Name: this.__input.name,
          CreatorRequestId: this.__input.creatorRequestId,
          Description: this.__input.description,
          Tags: this.__input.tags,
          Properties: {
            DnsProperties: {
              SOA: {
                TTL: this.__input.properties?.dnsProperties.soa.ttl,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePublicDnsNamespace.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class ServiceDiscoveryResponsesCreateService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceDiscoveryCreateServiceRequest) {
  }

  public get service(): ServiceDiscoveryResponsesCreateServiceService {
    return new ServiceDiscoveryResponsesCreateServiceService(this.__scope, this.__resources, this.__input);
  }

}

export class ServiceDiscoveryResponsesCreateServiceService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceDiscoveryCreateServiceRequest) {
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
          Name: this.__input.name,
          NamespaceId: this.__input.namespaceId,
          CreatorRequestId: this.__input.creatorRequestId,
          Description: this.__input.description,
          DnsConfig: {
            NamespaceId: this.__input.dnsConfig?.namespaceId,
            RoutingPolicy: this.__input.dnsConfig?.routingPolicy,
            DnsRecords: this.__input.dnsConfig?.dnsRecords,
          },
          HealthCheckConfig: {
            Type: this.__input.healthCheckConfig?.type,
            ResourcePath: this.__input.healthCheckConfig?.resourcePath,
            FailureThreshold: this.__input.healthCheckConfig?.failureThreshold,
          },
          HealthCheckCustomConfig: {
            FailureThreshold: this.__input.healthCheckCustomConfig?.failureThreshold,
          },
          Tags: this.__input.tags,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.Id', props);
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
          Name: this.__input.name,
          NamespaceId: this.__input.namespaceId,
          CreatorRequestId: this.__input.creatorRequestId,
          Description: this.__input.description,
          DnsConfig: {
            NamespaceId: this.__input.dnsConfig?.namespaceId,
            RoutingPolicy: this.__input.dnsConfig?.routingPolicy,
            DnsRecords: this.__input.dnsConfig?.dnsRecords,
          },
          HealthCheckConfig: {
            Type: this.__input.healthCheckConfig?.type,
            ResourcePath: this.__input.healthCheckConfig?.resourcePath,
            FailureThreshold: this.__input.healthCheckConfig?.failureThreshold,
          },
          HealthCheckCustomConfig: {
            FailureThreshold: this.__input.healthCheckCustomConfig?.failureThreshold,
          },
          Tags: this.__input.tags,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.Arn', props);
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
          Name: this.__input.name,
          NamespaceId: this.__input.namespaceId,
          CreatorRequestId: this.__input.creatorRequestId,
          Description: this.__input.description,
          DnsConfig: {
            NamespaceId: this.__input.dnsConfig?.namespaceId,
            RoutingPolicy: this.__input.dnsConfig?.routingPolicy,
            DnsRecords: this.__input.dnsConfig?.dnsRecords,
          },
          HealthCheckConfig: {
            Type: this.__input.healthCheckConfig?.type,
            ResourcePath: this.__input.healthCheckConfig?.resourcePath,
            FailureThreshold: this.__input.healthCheckConfig?.failureThreshold,
          },
          HealthCheckCustomConfig: {
            FailureThreshold: this.__input.healthCheckCustomConfig?.failureThreshold,
          },
          Tags: this.__input.tags,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.Name', props);
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
          Name: this.__input.name,
          NamespaceId: this.__input.namespaceId,
          CreatorRequestId: this.__input.creatorRequestId,
          Description: this.__input.description,
          DnsConfig: {
            NamespaceId: this.__input.dnsConfig?.namespaceId,
            RoutingPolicy: this.__input.dnsConfig?.routingPolicy,
            DnsRecords: this.__input.dnsConfig?.dnsRecords,
          },
          HealthCheckConfig: {
            Type: this.__input.healthCheckConfig?.type,
            ResourcePath: this.__input.healthCheckConfig?.resourcePath,
            FailureThreshold: this.__input.healthCheckConfig?.failureThreshold,
          },
          HealthCheckCustomConfig: {
            FailureThreshold: this.__input.healthCheckCustomConfig?.failureThreshold,
          },
          Tags: this.__input.tags,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.NamespaceId', props);
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
          Name: this.__input.name,
          NamespaceId: this.__input.namespaceId,
          CreatorRequestId: this.__input.creatorRequestId,
          Description: this.__input.description,
          DnsConfig: {
            NamespaceId: this.__input.dnsConfig?.namespaceId,
            RoutingPolicy: this.__input.dnsConfig?.routingPolicy,
            DnsRecords: this.__input.dnsConfig?.dnsRecords,
          },
          HealthCheckConfig: {
            Type: this.__input.healthCheckConfig?.type,
            ResourcePath: this.__input.healthCheckConfig?.resourcePath,
            FailureThreshold: this.__input.healthCheckConfig?.failureThreshold,
          },
          HealthCheckCustomConfig: {
            FailureThreshold: this.__input.healthCheckCustomConfig?.failureThreshold,
          },
          Tags: this.__input.tags,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.Description', props);
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
          Name: this.__input.name,
          NamespaceId: this.__input.namespaceId,
          CreatorRequestId: this.__input.creatorRequestId,
          Description: this.__input.description,
          DnsConfig: {
            NamespaceId: this.__input.dnsConfig?.namespaceId,
            RoutingPolicy: this.__input.dnsConfig?.routingPolicy,
            DnsRecords: this.__input.dnsConfig?.dnsRecords,
          },
          HealthCheckConfig: {
            Type: this.__input.healthCheckConfig?.type,
            ResourcePath: this.__input.healthCheckConfig?.resourcePath,
            FailureThreshold: this.__input.healthCheckConfig?.failureThreshold,
          },
          HealthCheckCustomConfig: {
            FailureThreshold: this.__input.healthCheckCustomConfig?.failureThreshold,
          },
          Tags: this.__input.tags,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.InstanceCount', props);
    return resource.getResponseField('Service.InstanceCount') as unknown as number;
  }

  public get dnsConfig(): ServiceDiscoveryResponsesCreateServiceServiceDnsConfig {
    return new ServiceDiscoveryResponsesCreateServiceServiceDnsConfig(this.__scope, this.__resources, this.__input);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createService',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.CreateService.Service.Type'),
        outputPath: 'Service.Type',
        parameters: {
          Name: this.__input.name,
          NamespaceId: this.__input.namespaceId,
          CreatorRequestId: this.__input.creatorRequestId,
          Description: this.__input.description,
          DnsConfig: {
            NamespaceId: this.__input.dnsConfig?.namespaceId,
            RoutingPolicy: this.__input.dnsConfig?.routingPolicy,
            DnsRecords: this.__input.dnsConfig?.dnsRecords,
          },
          HealthCheckConfig: {
            Type: this.__input.healthCheckConfig?.type,
            ResourcePath: this.__input.healthCheckConfig?.resourcePath,
            FailureThreshold: this.__input.healthCheckConfig?.failureThreshold,
          },
          HealthCheckCustomConfig: {
            FailureThreshold: this.__input.healthCheckCustomConfig?.failureThreshold,
          },
          Tags: this.__input.tags,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.Type', props);
    return resource.getResponseField('Service.Type') as unknown as string;
  }

  public get healthCheckConfig(): ServiceDiscoveryResponsesCreateServiceServiceHealthCheckConfig {
    return new ServiceDiscoveryResponsesCreateServiceServiceHealthCheckConfig(this.__scope, this.__resources, this.__input);
  }

  public get healthCheckCustomConfig(): ServiceDiscoveryResponsesCreateServiceServiceHealthCheckCustomConfig {
    return new ServiceDiscoveryResponsesCreateServiceServiceHealthCheckCustomConfig(this.__scope, this.__resources, this.__input);
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
          Name: this.__input.name,
          NamespaceId: this.__input.namespaceId,
          CreatorRequestId: this.__input.creatorRequestId,
          Description: this.__input.description,
          DnsConfig: {
            NamespaceId: this.__input.dnsConfig?.namespaceId,
            RoutingPolicy: this.__input.dnsConfig?.routingPolicy,
            DnsRecords: this.__input.dnsConfig?.dnsRecords,
          },
          HealthCheckConfig: {
            Type: this.__input.healthCheckConfig?.type,
            ResourcePath: this.__input.healthCheckConfig?.resourcePath,
            FailureThreshold: this.__input.healthCheckConfig?.failureThreshold,
          },
          HealthCheckCustomConfig: {
            FailureThreshold: this.__input.healthCheckCustomConfig?.failureThreshold,
          },
          Tags: this.__input.tags,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.CreateDate', props);
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
          Name: this.__input.name,
          NamespaceId: this.__input.namespaceId,
          CreatorRequestId: this.__input.creatorRequestId,
          Description: this.__input.description,
          DnsConfig: {
            NamespaceId: this.__input.dnsConfig?.namespaceId,
            RoutingPolicy: this.__input.dnsConfig?.routingPolicy,
            DnsRecords: this.__input.dnsConfig?.dnsRecords,
          },
          HealthCheckConfig: {
            Type: this.__input.healthCheckConfig?.type,
            ResourcePath: this.__input.healthCheckConfig?.resourcePath,
            FailureThreshold: this.__input.healthCheckConfig?.failureThreshold,
          },
          HealthCheckCustomConfig: {
            FailureThreshold: this.__input.healthCheckCustomConfig?.failureThreshold,
          },
          Tags: this.__input.tags,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.CreatorRequestId', props);
    return resource.getResponseField('Service.CreatorRequestId') as unknown as string;
  }

}

export class ServiceDiscoveryResponsesCreateServiceServiceDnsConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceDiscoveryCreateServiceRequest) {
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
          Name: this.__input.name,
          NamespaceId: this.__input.namespaceId,
          CreatorRequestId: this.__input.creatorRequestId,
          Description: this.__input.description,
          DnsConfig: {
            NamespaceId: this.__input.dnsConfig?.namespaceId,
            RoutingPolicy: this.__input.dnsConfig?.routingPolicy,
            DnsRecords: this.__input.dnsConfig?.dnsRecords,
          },
          HealthCheckConfig: {
            Type: this.__input.healthCheckConfig?.type,
            ResourcePath: this.__input.healthCheckConfig?.resourcePath,
            FailureThreshold: this.__input.healthCheckConfig?.failureThreshold,
          },
          HealthCheckCustomConfig: {
            FailureThreshold: this.__input.healthCheckCustomConfig?.failureThreshold,
          },
          Tags: this.__input.tags,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.DnsConfig.NamespaceId', props);
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
          Name: this.__input.name,
          NamespaceId: this.__input.namespaceId,
          CreatorRequestId: this.__input.creatorRequestId,
          Description: this.__input.description,
          DnsConfig: {
            NamespaceId: this.__input.dnsConfig?.namespaceId,
            RoutingPolicy: this.__input.dnsConfig?.routingPolicy,
            DnsRecords: this.__input.dnsConfig?.dnsRecords,
          },
          HealthCheckConfig: {
            Type: this.__input.healthCheckConfig?.type,
            ResourcePath: this.__input.healthCheckConfig?.resourcePath,
            FailureThreshold: this.__input.healthCheckConfig?.failureThreshold,
          },
          HealthCheckCustomConfig: {
            FailureThreshold: this.__input.healthCheckCustomConfig?.failureThreshold,
          },
          Tags: this.__input.tags,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.DnsConfig.RoutingPolicy', props);
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
          Name: this.__input.name,
          NamespaceId: this.__input.namespaceId,
          CreatorRequestId: this.__input.creatorRequestId,
          Description: this.__input.description,
          DnsConfig: {
            NamespaceId: this.__input.dnsConfig?.namespaceId,
            RoutingPolicy: this.__input.dnsConfig?.routingPolicy,
            DnsRecords: this.__input.dnsConfig?.dnsRecords,
          },
          HealthCheckConfig: {
            Type: this.__input.healthCheckConfig?.type,
            ResourcePath: this.__input.healthCheckConfig?.resourcePath,
            FailureThreshold: this.__input.healthCheckConfig?.failureThreshold,
          },
          HealthCheckCustomConfig: {
            FailureThreshold: this.__input.healthCheckCustomConfig?.failureThreshold,
          },
          Tags: this.__input.tags,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.DnsConfig.DnsRecords', props);
    return resource.getResponseField('Service.DnsConfig.DnsRecords') as unknown as shapes.ServiceDiscoveryDnsRecord[];
  }

}

export class ServiceDiscoveryResponsesCreateServiceServiceHealthCheckConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceDiscoveryCreateServiceRequest) {
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
          Name: this.__input.name,
          NamespaceId: this.__input.namespaceId,
          CreatorRequestId: this.__input.creatorRequestId,
          Description: this.__input.description,
          DnsConfig: {
            NamespaceId: this.__input.dnsConfig?.namespaceId,
            RoutingPolicy: this.__input.dnsConfig?.routingPolicy,
            DnsRecords: this.__input.dnsConfig?.dnsRecords,
          },
          HealthCheckConfig: {
            Type: this.__input.healthCheckConfig?.type,
            ResourcePath: this.__input.healthCheckConfig?.resourcePath,
            FailureThreshold: this.__input.healthCheckConfig?.failureThreshold,
          },
          HealthCheckCustomConfig: {
            FailureThreshold: this.__input.healthCheckCustomConfig?.failureThreshold,
          },
          Tags: this.__input.tags,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.HealthCheckConfig.Type', props);
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
          Name: this.__input.name,
          NamespaceId: this.__input.namespaceId,
          CreatorRequestId: this.__input.creatorRequestId,
          Description: this.__input.description,
          DnsConfig: {
            NamespaceId: this.__input.dnsConfig?.namespaceId,
            RoutingPolicy: this.__input.dnsConfig?.routingPolicy,
            DnsRecords: this.__input.dnsConfig?.dnsRecords,
          },
          HealthCheckConfig: {
            Type: this.__input.healthCheckConfig?.type,
            ResourcePath: this.__input.healthCheckConfig?.resourcePath,
            FailureThreshold: this.__input.healthCheckConfig?.failureThreshold,
          },
          HealthCheckCustomConfig: {
            FailureThreshold: this.__input.healthCheckCustomConfig?.failureThreshold,
          },
          Tags: this.__input.tags,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.HealthCheckConfig.ResourcePath', props);
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
          Name: this.__input.name,
          NamespaceId: this.__input.namespaceId,
          CreatorRequestId: this.__input.creatorRequestId,
          Description: this.__input.description,
          DnsConfig: {
            NamespaceId: this.__input.dnsConfig?.namespaceId,
            RoutingPolicy: this.__input.dnsConfig?.routingPolicy,
            DnsRecords: this.__input.dnsConfig?.dnsRecords,
          },
          HealthCheckConfig: {
            Type: this.__input.healthCheckConfig?.type,
            ResourcePath: this.__input.healthCheckConfig?.resourcePath,
            FailureThreshold: this.__input.healthCheckConfig?.failureThreshold,
          },
          HealthCheckCustomConfig: {
            FailureThreshold: this.__input.healthCheckCustomConfig?.failureThreshold,
          },
          Tags: this.__input.tags,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.HealthCheckConfig.FailureThreshold', props);
    return resource.getResponseField('Service.HealthCheckConfig.FailureThreshold') as unknown as number;
  }

}

export class ServiceDiscoveryResponsesCreateServiceServiceHealthCheckCustomConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceDiscoveryCreateServiceRequest) {
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
          Name: this.__input.name,
          NamespaceId: this.__input.namespaceId,
          CreatorRequestId: this.__input.creatorRequestId,
          Description: this.__input.description,
          DnsConfig: {
            NamespaceId: this.__input.dnsConfig?.namespaceId,
            RoutingPolicy: this.__input.dnsConfig?.routingPolicy,
            DnsRecords: this.__input.dnsConfig?.dnsRecords,
          },
          HealthCheckConfig: {
            Type: this.__input.healthCheckConfig?.type,
            ResourcePath: this.__input.healthCheckConfig?.resourcePath,
            FailureThreshold: this.__input.healthCheckConfig?.failureThreshold,
          },
          HealthCheckCustomConfig: {
            FailureThreshold: this.__input.healthCheckCustomConfig?.failureThreshold,
          },
          Tags: this.__input.tags,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateService.Service.HealthCheckCustomConfig.FailureThreshold', props);
    return resource.getResponseField('Service.HealthCheckCustomConfig.FailureThreshold') as unknown as number;
  }

}

export class ServiceDiscoveryResponsesDeleteNamespace {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceDiscoveryDeleteNamespaceRequest) {
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteNamespace.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class ServiceDiscoveryResponsesDeregisterInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceDiscoveryDeregisterInstanceRequest) {
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
          ServiceId: this.__input.serviceId,
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterInstance.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class ServiceDiscoveryResponsesDiscoverInstances {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceDiscoveryDiscoverInstancesRequest) {
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
          NamespaceName: this.__input.namespaceName,
          ServiceName: this.__input.serviceName,
          MaxResults: this.__input.maxResults,
          QueryParameters: this.__input.queryParameters,
          OptionalParameters: this.__input.optionalParameters,
          HealthStatus: this.__input.healthStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DiscoverInstances.Instances', props);
    return resource.getResponseField('Instances') as unknown as shapes.ServiceDiscoveryHttpInstanceSummary[];
  }

}

export class ServiceDiscoveryResponsesFetchInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceDiscoveryGetInstanceRequest) {
  }

  public get instance(): ServiceDiscoveryResponsesFetchInstanceInstance {
    return new ServiceDiscoveryResponsesFetchInstanceInstance(this.__scope, this.__resources, this.__input);
  }

}

export class ServiceDiscoveryResponsesFetchInstanceInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceDiscoveryGetInstanceRequest) {
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
          ServiceId: this.__input.serviceId,
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstance.Instance.Id', props);
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
          ServiceId: this.__input.serviceId,
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstance.Instance.CreatorRequestId', props);
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
          ServiceId: this.__input.serviceId,
          InstanceId: this.__input.instanceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstance.Instance.Attributes', props);
    return resource.getResponseField('Instance.Attributes') as unknown as Record<string, string>;
  }

}

export class ServiceDiscoveryResponsesFetchInstancesHealthStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceDiscoveryGetInstancesHealthStatusRequest) {
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
          ServiceId: this.__input.serviceId,
          Instances: this.__input.instances,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstancesHealthStatus.Status', props);
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
          ServiceId: this.__input.serviceId,
          Instances: this.__input.instances,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstancesHealthStatus.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ServiceDiscoveryResponsesFetchNamespace {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceDiscoveryGetNamespaceRequest) {
  }

  public get namespace(): ServiceDiscoveryResponsesFetchNamespaceNamespace {
    return new ServiceDiscoveryResponsesFetchNamespaceNamespace(this.__scope, this.__resources, this.__input);
  }

}

export class ServiceDiscoveryResponsesFetchNamespaceNamespace {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceDiscoveryGetNamespaceRequest) {
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNamespace.Namespace.Id', props);
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNamespace.Namespace.Arn', props);
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNamespace.Namespace.Name', props);
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNamespace.Namespace.Type', props);
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNamespace.Namespace.Description', props);
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNamespace.Namespace.ServiceCount', props);
    return resource.getResponseField('Namespace.ServiceCount') as unknown as number;
  }

  public get properties(): ServiceDiscoveryResponsesFetchNamespaceNamespaceProperties {
    return new ServiceDiscoveryResponsesFetchNamespaceNamespaceProperties(this.__scope, this.__resources, this.__input);
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNamespace.Namespace.CreateDate', props);
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNamespace.Namespace.CreatorRequestId', props);
    return resource.getResponseField('Namespace.CreatorRequestId') as unknown as string;
  }

}

export class ServiceDiscoveryResponsesFetchNamespaceNamespaceProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceDiscoveryGetNamespaceRequest) {
  }

  public get dnsProperties(): ServiceDiscoveryResponsesFetchNamespaceNamespacePropertiesDnsProperties {
    return new ServiceDiscoveryResponsesFetchNamespaceNamespacePropertiesDnsProperties(this.__scope, this.__resources, this.__input);
  }

  public get httpProperties(): ServiceDiscoveryResponsesFetchNamespaceNamespacePropertiesHttpProperties {
    return new ServiceDiscoveryResponsesFetchNamespaceNamespacePropertiesHttpProperties(this.__scope, this.__resources, this.__input);
  }

}

export class ServiceDiscoveryResponsesFetchNamespaceNamespacePropertiesDnsProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceDiscoveryGetNamespaceRequest) {
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNamespace.Namespace.Properties.DnsProperties.HostedZoneId', props);
    return resource.getResponseField('Namespace.Properties.DnsProperties.HostedZoneId') as unknown as string;
  }

  public get soa(): ServiceDiscoveryResponsesFetchNamespaceNamespacePropertiesDnsPropertiesSoa {
    return new ServiceDiscoveryResponsesFetchNamespaceNamespacePropertiesDnsPropertiesSoa(this.__scope, this.__resources, this.__input);
  }

}

export class ServiceDiscoveryResponsesFetchNamespaceNamespacePropertiesDnsPropertiesSoa {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceDiscoveryGetNamespaceRequest) {
  }

  public get ttl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNamespace',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.GetNamespace.Namespace.Properties.DnsProperties.SOA.TTL'),
        outputPath: 'Namespace.Properties.DnsProperties.SOA.TTL',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNamespace.Namespace.Properties.DnsProperties.SOA.TTL', props);
    return resource.getResponseField('Namespace.Properties.DnsProperties.SOA.TTL') as unknown as number;
  }

}

export class ServiceDiscoveryResponsesFetchNamespaceNamespacePropertiesHttpProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceDiscoveryGetNamespaceRequest) {
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNamespace.Namespace.Properties.HttpProperties.HttpName', props);
    return resource.getResponseField('Namespace.Properties.HttpProperties.HttpName') as unknown as string;
  }

}

export class ServiceDiscoveryResponsesFetchOperation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceDiscoveryGetOperationRequest) {
  }

  public get operation(): ServiceDiscoveryResponsesFetchOperationOperation {
    return new ServiceDiscoveryResponsesFetchOperationOperation(this.__scope, this.__resources, this.__input);
  }

}

export class ServiceDiscoveryResponsesFetchOperationOperation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceDiscoveryGetOperationRequest) {
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
          OperationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOperation.Operation.Id', props);
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
          OperationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOperation.Operation.Type', props);
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
          OperationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOperation.Operation.Status', props);
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
          OperationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOperation.Operation.ErrorMessage', props);
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
          OperationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOperation.Operation.ErrorCode', props);
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
          OperationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOperation.Operation.CreateDate', props);
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
          OperationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOperation.Operation.UpdateDate', props);
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
          OperationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOperation.Operation.Targets', props);
    return resource.getResponseField('Operation.Targets') as unknown as Record<string, string>;
  }

}

export class ServiceDiscoveryResponsesFetchService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceDiscoveryGetServiceRequest) {
  }

  public get service(): ServiceDiscoveryResponsesFetchServiceService {
    return new ServiceDiscoveryResponsesFetchServiceService(this.__scope, this.__resources, this.__input);
  }

}

export class ServiceDiscoveryResponsesFetchServiceService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceDiscoveryGetServiceRequest) {
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetService.Service.Id', props);
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetService.Service.Arn', props);
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetService.Service.Name', props);
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetService.Service.NamespaceId', props);
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetService.Service.Description', props);
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetService.Service.InstanceCount', props);
    return resource.getResponseField('Service.InstanceCount') as unknown as number;
  }

  public get dnsConfig(): ServiceDiscoveryResponsesFetchServiceServiceDnsConfig {
    return new ServiceDiscoveryResponsesFetchServiceServiceDnsConfig(this.__scope, this.__resources, this.__input);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getService',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.GetService.Service.Type'),
        outputPath: 'Service.Type',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetService.Service.Type', props);
    return resource.getResponseField('Service.Type') as unknown as string;
  }

  public get healthCheckConfig(): ServiceDiscoveryResponsesFetchServiceServiceHealthCheckConfig {
    return new ServiceDiscoveryResponsesFetchServiceServiceHealthCheckConfig(this.__scope, this.__resources, this.__input);
  }

  public get healthCheckCustomConfig(): ServiceDiscoveryResponsesFetchServiceServiceHealthCheckCustomConfig {
    return new ServiceDiscoveryResponsesFetchServiceServiceHealthCheckCustomConfig(this.__scope, this.__resources, this.__input);
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetService.Service.CreateDate', props);
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetService.Service.CreatorRequestId', props);
    return resource.getResponseField('Service.CreatorRequestId') as unknown as string;
  }

}

export class ServiceDiscoveryResponsesFetchServiceServiceDnsConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceDiscoveryGetServiceRequest) {
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetService.Service.DnsConfig.NamespaceId', props);
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetService.Service.DnsConfig.RoutingPolicy', props);
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetService.Service.DnsConfig.DnsRecords', props);
    return resource.getResponseField('Service.DnsConfig.DnsRecords') as unknown as shapes.ServiceDiscoveryDnsRecord[];
  }

}

export class ServiceDiscoveryResponsesFetchServiceServiceHealthCheckConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceDiscoveryGetServiceRequest) {
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetService.Service.HealthCheckConfig.Type', props);
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetService.Service.HealthCheckConfig.ResourcePath', props);
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetService.Service.HealthCheckConfig.FailureThreshold', props);
    return resource.getResponseField('Service.HealthCheckConfig.FailureThreshold') as unknown as number;
  }

}

export class ServiceDiscoveryResponsesFetchServiceServiceHealthCheckCustomConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceDiscoveryGetServiceRequest) {
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
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetService.Service.HealthCheckCustomConfig.FailureThreshold', props);
    return resource.getResponseField('Service.HealthCheckCustomConfig.FailureThreshold') as unknown as number;
  }

}

export class ServiceDiscoveryResponsesListInstances {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceDiscoveryListInstancesRequest) {
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
          ServiceId: this.__input.serviceId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInstances.Instances', props);
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
          ServiceId: this.__input.serviceId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInstances.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ServiceDiscoveryResponsesListNamespaces {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceDiscoveryListNamespacesRequest) {
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListNamespaces.Namespaces', props);
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListNamespaces.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ServiceDiscoveryResponsesListOperations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceDiscoveryListOperationsRequest) {
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListOperations.Operations', props);
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListOperations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ServiceDiscoveryResponsesListServices {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceDiscoveryListServicesRequest) {
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListServices.Services', props);
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListServices.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ServiceDiscoveryResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceDiscoveryListTagsForResourceRequest) {
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
          ResourceARN: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.ServiceDiscoveryTag[];
  }

}

export class ServiceDiscoveryResponsesRegisterInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceDiscoveryRegisterInstanceRequest) {
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
          ServiceId: this.__input.serviceId,
          InstanceId: this.__input.instanceId,
          CreatorRequestId: this.__input.creatorRequestId,
          Attributes: this.__input.attributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterInstance.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class ServiceDiscoveryResponsesUpdateHttpNamespace {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceDiscoveryUpdateHttpNamespaceRequest) {
  }

  public get operationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateHttpNamespace',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.UpdateHttpNamespace.OperationId'),
        outputPath: 'OperationId',
        parameters: {
          Id: this.__input.id,
          UpdaterRequestId: this.__input.updaterRequestId,
          Namespace: {
            Description: this.__input.namespace.description,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateHttpNamespace.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class ServiceDiscoveryResponsesUpdatePrivateDnsNamespace {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceDiscoveryUpdatePrivateDnsNamespaceRequest) {
  }

  public get operationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePrivateDnsNamespace',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.UpdatePrivateDnsNamespace.OperationId'),
        outputPath: 'OperationId',
        parameters: {
          Id: this.__input.id,
          UpdaterRequestId: this.__input.updaterRequestId,
          Namespace: {
            Description: this.__input.namespace.description,
            Properties: {
              DnsProperties: {
                SOA: {
                  TTL: this.__input.namespace.properties?.dnsProperties.soa.ttl,
                },
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePrivateDnsNamespace.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class ServiceDiscoveryResponsesUpdatePublicDnsNamespace {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceDiscoveryUpdatePublicDnsNamespaceRequest) {
  }

  public get operationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePublicDnsNamespace',
        service: 'ServiceDiscovery',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceDiscovery.UpdatePublicDnsNamespace.OperationId'),
        outputPath: 'OperationId',
        parameters: {
          Id: this.__input.id,
          UpdaterRequestId: this.__input.updaterRequestId,
          Namespace: {
            Description: this.__input.namespace.description,
            Properties: {
              DnsProperties: {
                SOA: {
                  TTL: this.__input.namespace.properties?.dnsProperties.soa.ttl,
                },
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePublicDnsNamespace.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class ServiceDiscoveryResponsesUpdateService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceDiscoveryUpdateServiceRequest) {
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
          Id: this.__input.id,
          Service: {
            Description: this.__input.service.description,
            DnsConfig: {
              DnsRecords: this.__input.service.dnsConfig?.dnsRecords,
            },
            HealthCheckConfig: {
              Type: this.__input.service.healthCheckConfig?.type,
              ResourcePath: this.__input.service.healthCheckConfig?.resourcePath,
              FailureThreshold: this.__input.service.healthCheckConfig?.failureThreshold,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateService.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

