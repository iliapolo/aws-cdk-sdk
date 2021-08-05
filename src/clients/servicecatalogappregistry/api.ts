import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ServiceCatalogAppRegistryClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public associateAttributeGroup(input: shapes.ServiceCatalogAppRegistryAssociateAttributeGroupRequest): ServiceCatalogAppRegistryResponsesAssociateAttributeGroup {
    return new ServiceCatalogAppRegistryResponsesAssociateAttributeGroup(this, this.__resources, input);
  }

  public associateResource(input: shapes.ServiceCatalogAppRegistryAssociateResourceRequest): ServiceCatalogAppRegistryResponsesAssociateResource {
    return new ServiceCatalogAppRegistryResponsesAssociateResource(this, this.__resources, input);
  }

  public createApplication(input: shapes.ServiceCatalogAppRegistryCreateApplicationRequest): ServiceCatalogAppRegistryResponsesCreateApplication {
    return new ServiceCatalogAppRegistryResponsesCreateApplication(this, this.__resources, input);
  }

  public createAttributeGroup(input: shapes.ServiceCatalogAppRegistryCreateAttributeGroupRequest): ServiceCatalogAppRegistryResponsesCreateAttributeGroup {
    return new ServiceCatalogAppRegistryResponsesCreateAttributeGroup(this, this.__resources, input);
  }

  public deleteApplication(input: shapes.ServiceCatalogAppRegistryDeleteApplicationRequest): ServiceCatalogAppRegistryResponsesDeleteApplication {
    return new ServiceCatalogAppRegistryResponsesDeleteApplication(this, this.__resources, input);
  }

  public deleteAttributeGroup(input: shapes.ServiceCatalogAppRegistryDeleteAttributeGroupRequest): ServiceCatalogAppRegistryResponsesDeleteAttributeGroup {
    return new ServiceCatalogAppRegistryResponsesDeleteAttributeGroup(this, this.__resources, input);
  }

  public disassociateAttributeGroup(input: shapes.ServiceCatalogAppRegistryDisassociateAttributeGroupRequest): ServiceCatalogAppRegistryResponsesDisassociateAttributeGroup {
    return new ServiceCatalogAppRegistryResponsesDisassociateAttributeGroup(this, this.__resources, input);
  }

  public disassociateResource(input: shapes.ServiceCatalogAppRegistryDisassociateResourceRequest): ServiceCatalogAppRegistryResponsesDisassociateResource {
    return new ServiceCatalogAppRegistryResponsesDisassociateResource(this, this.__resources, input);
  }

  public fetchApplication(input: shapes.ServiceCatalogAppRegistryGetApplicationRequest): ServiceCatalogAppRegistryResponsesFetchApplication {
    return new ServiceCatalogAppRegistryResponsesFetchApplication(this, this.__resources, input);
  }

  public fetchAttributeGroup(input: shapes.ServiceCatalogAppRegistryGetAttributeGroupRequest): ServiceCatalogAppRegistryResponsesFetchAttributeGroup {
    return new ServiceCatalogAppRegistryResponsesFetchAttributeGroup(this, this.__resources, input);
  }

  public listApplications(input: shapes.ServiceCatalogAppRegistryListApplicationsRequest): ServiceCatalogAppRegistryResponsesListApplications {
    return new ServiceCatalogAppRegistryResponsesListApplications(this, this.__resources, input);
  }

  public listAssociatedAttributeGroups(input: shapes.ServiceCatalogAppRegistryListAssociatedAttributeGroupsRequest): ServiceCatalogAppRegistryResponsesListAssociatedAttributeGroups {
    return new ServiceCatalogAppRegistryResponsesListAssociatedAttributeGroups(this, this.__resources, input);
  }

  public listAssociatedResources(input: shapes.ServiceCatalogAppRegistryListAssociatedResourcesRequest): ServiceCatalogAppRegistryResponsesListAssociatedResources {
    return new ServiceCatalogAppRegistryResponsesListAssociatedResources(this, this.__resources, input);
  }

  public listAttributeGroups(input: shapes.ServiceCatalogAppRegistryListAttributeGroupsRequest): ServiceCatalogAppRegistryResponsesListAttributeGroups {
    return new ServiceCatalogAppRegistryResponsesListAttributeGroups(this, this.__resources, input);
  }

  public updateApplication(input: shapes.ServiceCatalogAppRegistryUpdateApplicationRequest): ServiceCatalogAppRegistryResponsesUpdateApplication {
    return new ServiceCatalogAppRegistryResponsesUpdateApplication(this, this.__resources, input);
  }

  public updateAttributeGroup(input: shapes.ServiceCatalogAppRegistryUpdateAttributeGroupRequest): ServiceCatalogAppRegistryResponsesUpdateAttributeGroup {
    return new ServiceCatalogAppRegistryResponsesUpdateAttributeGroup(this, this.__resources, input);
  }

}

export class ServiceCatalogAppRegistryResponsesAssociateAttributeGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogAppRegistryAssociateAttributeGroupRequest) {
  }

  public get applicationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateAttributeGroup',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.AssociateAttributeGroup.applicationArn'),
        outputPath: 'applicationArn',
        parameters: {
          application: this.__input.application,
          attributeGroup: this.__input.attributeGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateAttributeGroup.applicationArn', props);
    return resource.getResponseField('applicationArn') as unknown as string;
  }

  public get attributeGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateAttributeGroup',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.AssociateAttributeGroup.attributeGroupArn'),
        outputPath: 'attributeGroupArn',
        parameters: {
          application: this.__input.application,
          attributeGroup: this.__input.attributeGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateAttributeGroup.attributeGroupArn', props);
    return resource.getResponseField('attributeGroupArn') as unknown as string;
  }

}

export class ServiceCatalogAppRegistryResponsesAssociateResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogAppRegistryAssociateResourceRequest) {
  }

  public get applicationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateResource',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.AssociateResource.applicationArn'),
        outputPath: 'applicationArn',
        parameters: {
          application: this.__input.application,
          resourceType: this.__input.resourceType,
          resource: this.__input.resource,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateResource.applicationArn', props);
    return resource.getResponseField('applicationArn') as unknown as string;
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateResource',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.AssociateResource.resourceArn'),
        outputPath: 'resourceArn',
        parameters: {
          application: this.__input.application,
          resourceType: this.__input.resourceType,
          resource: this.__input.resource,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateResource.resourceArn', props);
    return resource.getResponseField('resourceArn') as unknown as string;
  }

}

export class ServiceCatalogAppRegistryResponsesCreateApplication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogAppRegistryCreateApplicationRequest) {
  }

  public get application(): ServiceCatalogAppRegistryResponsesCreateApplicationApplication {
    return new ServiceCatalogAppRegistryResponsesCreateApplicationApplication(this.__scope, this.__resources, this.__input);
  }

}

export class ServiceCatalogAppRegistryResponsesCreateApplicationApplication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogAppRegistryCreateApplicationRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.CreateApplication.application.id'),
        outputPath: 'application.id',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          tags: this.__input.tags,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.application.id', props);
    return resource.getResponseField('application.id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.CreateApplication.application.arn'),
        outputPath: 'application.arn',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          tags: this.__input.tags,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.application.arn', props);
    return resource.getResponseField('application.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.CreateApplication.application.name'),
        outputPath: 'application.name',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          tags: this.__input.tags,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.application.name', props);
    return resource.getResponseField('application.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.CreateApplication.application.description'),
        outputPath: 'application.description',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          tags: this.__input.tags,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.application.description', props);
    return resource.getResponseField('application.description') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.CreateApplication.application.creationTime'),
        outputPath: 'application.creationTime',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          tags: this.__input.tags,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.application.creationTime', props);
    return resource.getResponseField('application.creationTime') as unknown as string;
  }

  public get lastUpdateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.CreateApplication.application.lastUpdateTime'),
        outputPath: 'application.lastUpdateTime',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          tags: this.__input.tags,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.application.lastUpdateTime', props);
    return resource.getResponseField('application.lastUpdateTime') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.CreateApplication.application.tags'),
        outputPath: 'application.tags',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          tags: this.__input.tags,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.application.tags', props);
    return resource.getResponseField('application.tags') as unknown as Record<string, string>;
  }

}

export class ServiceCatalogAppRegistryResponsesCreateAttributeGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogAppRegistryCreateAttributeGroupRequest) {
  }

  public get attributeGroup(): ServiceCatalogAppRegistryResponsesCreateAttributeGroupAttributeGroup {
    return new ServiceCatalogAppRegistryResponsesCreateAttributeGroupAttributeGroup(this.__scope, this.__resources, this.__input);
  }

}

export class ServiceCatalogAppRegistryResponsesCreateAttributeGroupAttributeGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogAppRegistryCreateAttributeGroupRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAttributeGroup',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.CreateAttributeGroup.attributeGroup.id'),
        outputPath: 'attributeGroup.id',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          attributes: this.__input.attributes,
          tags: this.__input.tags,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAttributeGroup.attributeGroup.id', props);
    return resource.getResponseField('attributeGroup.id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAttributeGroup',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.CreateAttributeGroup.attributeGroup.arn'),
        outputPath: 'attributeGroup.arn',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          attributes: this.__input.attributes,
          tags: this.__input.tags,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAttributeGroup.attributeGroup.arn', props);
    return resource.getResponseField('attributeGroup.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAttributeGroup',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.CreateAttributeGroup.attributeGroup.name'),
        outputPath: 'attributeGroup.name',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          attributes: this.__input.attributes,
          tags: this.__input.tags,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAttributeGroup.attributeGroup.name', props);
    return resource.getResponseField('attributeGroup.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAttributeGroup',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.CreateAttributeGroup.attributeGroup.description'),
        outputPath: 'attributeGroup.description',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          attributes: this.__input.attributes,
          tags: this.__input.tags,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAttributeGroup.attributeGroup.description', props);
    return resource.getResponseField('attributeGroup.description') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAttributeGroup',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.CreateAttributeGroup.attributeGroup.creationTime'),
        outputPath: 'attributeGroup.creationTime',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          attributes: this.__input.attributes,
          tags: this.__input.tags,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAttributeGroup.attributeGroup.creationTime', props);
    return resource.getResponseField('attributeGroup.creationTime') as unknown as string;
  }

  public get lastUpdateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAttributeGroup',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.CreateAttributeGroup.attributeGroup.lastUpdateTime'),
        outputPath: 'attributeGroup.lastUpdateTime',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          attributes: this.__input.attributes,
          tags: this.__input.tags,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAttributeGroup.attributeGroup.lastUpdateTime', props);
    return resource.getResponseField('attributeGroup.lastUpdateTime') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAttributeGroup',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.CreateAttributeGroup.attributeGroup.tags'),
        outputPath: 'attributeGroup.tags',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          attributes: this.__input.attributes,
          tags: this.__input.tags,
          clientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAttributeGroup.attributeGroup.tags', props);
    return resource.getResponseField('attributeGroup.tags') as unknown as Record<string, string>;
  }

}

export class ServiceCatalogAppRegistryResponsesDeleteApplication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogAppRegistryDeleteApplicationRequest) {
  }

  public get application(): ServiceCatalogAppRegistryResponsesDeleteApplicationApplication {
    return new ServiceCatalogAppRegistryResponsesDeleteApplicationApplication(this.__scope, this.__resources, this.__input);
  }

}

export class ServiceCatalogAppRegistryResponsesDeleteApplicationApplication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogAppRegistryDeleteApplicationRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApplication',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.DeleteApplication.application.id'),
        outputPath: 'application.id',
        parameters: {
          application: this.__input.application,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApplication.application.id', props);
    return resource.getResponseField('application.id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApplication',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.DeleteApplication.application.arn'),
        outputPath: 'application.arn',
        parameters: {
          application: this.__input.application,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApplication.application.arn', props);
    return resource.getResponseField('application.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApplication',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.DeleteApplication.application.name'),
        outputPath: 'application.name',
        parameters: {
          application: this.__input.application,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApplication.application.name', props);
    return resource.getResponseField('application.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApplication',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.DeleteApplication.application.description'),
        outputPath: 'application.description',
        parameters: {
          application: this.__input.application,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApplication.application.description', props);
    return resource.getResponseField('application.description') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApplication',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.DeleteApplication.application.creationTime'),
        outputPath: 'application.creationTime',
        parameters: {
          application: this.__input.application,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApplication.application.creationTime', props);
    return resource.getResponseField('application.creationTime') as unknown as string;
  }

  public get lastUpdateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApplication',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.DeleteApplication.application.lastUpdateTime'),
        outputPath: 'application.lastUpdateTime',
        parameters: {
          application: this.__input.application,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteApplication.application.lastUpdateTime', props);
    return resource.getResponseField('application.lastUpdateTime') as unknown as string;
  }

}

export class ServiceCatalogAppRegistryResponsesDeleteAttributeGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogAppRegistryDeleteAttributeGroupRequest) {
  }

  public get attributeGroup(): ServiceCatalogAppRegistryResponsesDeleteAttributeGroupAttributeGroup {
    return new ServiceCatalogAppRegistryResponsesDeleteAttributeGroupAttributeGroup(this.__scope, this.__resources, this.__input);
  }

}

export class ServiceCatalogAppRegistryResponsesDeleteAttributeGroupAttributeGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogAppRegistryDeleteAttributeGroupRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAttributeGroup',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.DeleteAttributeGroup.attributeGroup.id'),
        outputPath: 'attributeGroup.id',
        parameters: {
          attributeGroup: this.__input.attributeGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAttributeGroup.attributeGroup.id', props);
    return resource.getResponseField('attributeGroup.id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAttributeGroup',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.DeleteAttributeGroup.attributeGroup.arn'),
        outputPath: 'attributeGroup.arn',
        parameters: {
          attributeGroup: this.__input.attributeGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAttributeGroup.attributeGroup.arn', props);
    return resource.getResponseField('attributeGroup.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAttributeGroup',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.DeleteAttributeGroup.attributeGroup.name'),
        outputPath: 'attributeGroup.name',
        parameters: {
          attributeGroup: this.__input.attributeGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAttributeGroup.attributeGroup.name', props);
    return resource.getResponseField('attributeGroup.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAttributeGroup',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.DeleteAttributeGroup.attributeGroup.description'),
        outputPath: 'attributeGroup.description',
        parameters: {
          attributeGroup: this.__input.attributeGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAttributeGroup.attributeGroup.description', props);
    return resource.getResponseField('attributeGroup.description') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAttributeGroup',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.DeleteAttributeGroup.attributeGroup.creationTime'),
        outputPath: 'attributeGroup.creationTime',
        parameters: {
          attributeGroup: this.__input.attributeGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAttributeGroup.attributeGroup.creationTime', props);
    return resource.getResponseField('attributeGroup.creationTime') as unknown as string;
  }

  public get lastUpdateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAttributeGroup',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.DeleteAttributeGroup.attributeGroup.lastUpdateTime'),
        outputPath: 'attributeGroup.lastUpdateTime',
        parameters: {
          attributeGroup: this.__input.attributeGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAttributeGroup.attributeGroup.lastUpdateTime', props);
    return resource.getResponseField('attributeGroup.lastUpdateTime') as unknown as string;
  }

}

export class ServiceCatalogAppRegistryResponsesDisassociateAttributeGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogAppRegistryDisassociateAttributeGroupRequest) {
  }

  public get applicationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateAttributeGroup',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.DisassociateAttributeGroup.applicationArn'),
        outputPath: 'applicationArn',
        parameters: {
          application: this.__input.application,
          attributeGroup: this.__input.attributeGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateAttributeGroup.applicationArn', props);
    return resource.getResponseField('applicationArn') as unknown as string;
  }

  public get attributeGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateAttributeGroup',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.DisassociateAttributeGroup.attributeGroupArn'),
        outputPath: 'attributeGroupArn',
        parameters: {
          application: this.__input.application,
          attributeGroup: this.__input.attributeGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateAttributeGroup.attributeGroupArn', props);
    return resource.getResponseField('attributeGroupArn') as unknown as string;
  }

}

export class ServiceCatalogAppRegistryResponsesDisassociateResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogAppRegistryDisassociateResourceRequest) {
  }

  public get applicationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateResource',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.DisassociateResource.applicationArn'),
        outputPath: 'applicationArn',
        parameters: {
          application: this.__input.application,
          resourceType: this.__input.resourceType,
          resource: this.__input.resource,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateResource.applicationArn', props);
    return resource.getResponseField('applicationArn') as unknown as string;
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateResource',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.DisassociateResource.resourceArn'),
        outputPath: 'resourceArn',
        parameters: {
          application: this.__input.application,
          resourceType: this.__input.resourceType,
          resource: this.__input.resource,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateResource.resourceArn', props);
    return resource.getResponseField('resourceArn') as unknown as string;
  }

}

export class ServiceCatalogAppRegistryResponsesFetchApplication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogAppRegistryGetApplicationRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApplication',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.GetApplication.id'),
        outputPath: 'id',
        parameters: {
          application: this.__input.application,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApplication.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApplication',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.GetApplication.arn'),
        outputPath: 'arn',
        parameters: {
          application: this.__input.application,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApplication.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApplication',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.GetApplication.name'),
        outputPath: 'name',
        parameters: {
          application: this.__input.application,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApplication.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApplication',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.GetApplication.description'),
        outputPath: 'description',
        parameters: {
          application: this.__input.application,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApplication.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApplication',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.GetApplication.creationTime'),
        outputPath: 'creationTime',
        parameters: {
          application: this.__input.application,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApplication.creationTime', props);
    return resource.getResponseField('creationTime') as unknown as string;
  }

  public get lastUpdateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApplication',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.GetApplication.lastUpdateTime'),
        outputPath: 'lastUpdateTime',
        parameters: {
          application: this.__input.application,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApplication.lastUpdateTime', props);
    return resource.getResponseField('lastUpdateTime') as unknown as string;
  }

  public get associatedResourceCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApplication',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.GetApplication.associatedResourceCount'),
        outputPath: 'associatedResourceCount',
        parameters: {
          application: this.__input.application,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApplication.associatedResourceCount', props);
    return resource.getResponseField('associatedResourceCount') as unknown as number;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getApplication',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.GetApplication.tags'),
        outputPath: 'tags',
        parameters: {
          application: this.__input.application,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetApplication.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class ServiceCatalogAppRegistryResponsesFetchAttributeGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogAppRegistryGetAttributeGroupRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAttributeGroup',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.GetAttributeGroup.id'),
        outputPath: 'id',
        parameters: {
          attributeGroup: this.__input.attributeGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAttributeGroup.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAttributeGroup',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.GetAttributeGroup.arn'),
        outputPath: 'arn',
        parameters: {
          attributeGroup: this.__input.attributeGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAttributeGroup.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAttributeGroup',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.GetAttributeGroup.name'),
        outputPath: 'name',
        parameters: {
          attributeGroup: this.__input.attributeGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAttributeGroup.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAttributeGroup',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.GetAttributeGroup.description'),
        outputPath: 'description',
        parameters: {
          attributeGroup: this.__input.attributeGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAttributeGroup.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

  public get attributes(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAttributeGroup',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.GetAttributeGroup.attributes'),
        outputPath: 'attributes',
        parameters: {
          attributeGroup: this.__input.attributeGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAttributeGroup.attributes', props);
    return resource.getResponseField('attributes') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAttributeGroup',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.GetAttributeGroup.creationTime'),
        outputPath: 'creationTime',
        parameters: {
          attributeGroup: this.__input.attributeGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAttributeGroup.creationTime', props);
    return resource.getResponseField('creationTime') as unknown as string;
  }

  public get lastUpdateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAttributeGroup',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.GetAttributeGroup.lastUpdateTime'),
        outputPath: 'lastUpdateTime',
        parameters: {
          attributeGroup: this.__input.attributeGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAttributeGroup.lastUpdateTime', props);
    return resource.getResponseField('lastUpdateTime') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAttributeGroup',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.GetAttributeGroup.tags'),
        outputPath: 'tags',
        parameters: {
          attributeGroup: this.__input.attributeGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAttributeGroup.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class ServiceCatalogAppRegistryResponsesListApplications {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogAppRegistryListApplicationsRequest) {
  }

  public get applications(): shapes.ServiceCatalogAppRegistryApplicationSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listApplications',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.ListApplications.applications'),
        outputPath: 'applications',
        parameters: {
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListApplications.applications', props);
    return resource.getResponseField('applications') as unknown as shapes.ServiceCatalogAppRegistryApplicationSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listApplications',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.ListApplications.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListApplications.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ServiceCatalogAppRegistryResponsesListAssociatedAttributeGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogAppRegistryListAssociatedAttributeGroupsRequest) {
  }

  public get attributeGroups(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAssociatedAttributeGroups',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.ListAssociatedAttributeGroups.attributeGroups'),
        outputPath: 'attributeGroups',
        parameters: {
          application: this.__input.application,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAssociatedAttributeGroups.attributeGroups', props);
    return resource.getResponseField('attributeGroups') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAssociatedAttributeGroups',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.ListAssociatedAttributeGroups.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          application: this.__input.application,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAssociatedAttributeGroups.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ServiceCatalogAppRegistryResponsesListAssociatedResources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogAppRegistryListAssociatedResourcesRequest) {
  }

  public get resources(): shapes.ServiceCatalogAppRegistryResourceInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAssociatedResources',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.ListAssociatedResources.resources'),
        outputPath: 'resources',
        parameters: {
          application: this.__input.application,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAssociatedResources.resources', props);
    return resource.getResponseField('resources') as unknown as shapes.ServiceCatalogAppRegistryResourceInfo[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAssociatedResources',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.ListAssociatedResources.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          application: this.__input.application,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAssociatedResources.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ServiceCatalogAppRegistryResponsesListAttributeGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogAppRegistryListAttributeGroupsRequest) {
  }

  public get attributeGroups(): shapes.ServiceCatalogAppRegistryAttributeGroupSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAttributeGroups',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.ListAttributeGroups.attributeGroups'),
        outputPath: 'attributeGroups',
        parameters: {
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAttributeGroups.attributeGroups', props);
    return resource.getResponseField('attributeGroups') as unknown as shapes.ServiceCatalogAppRegistryAttributeGroupSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAttributeGroups',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.ListAttributeGroups.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAttributeGroups.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ServiceCatalogAppRegistryResponsesUpdateApplication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogAppRegistryUpdateApplicationRequest) {
  }

  public get application(): ServiceCatalogAppRegistryResponsesUpdateApplicationApplication {
    return new ServiceCatalogAppRegistryResponsesUpdateApplicationApplication(this.__scope, this.__resources, this.__input);
  }

}

export class ServiceCatalogAppRegistryResponsesUpdateApplicationApplication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogAppRegistryUpdateApplicationRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.UpdateApplication.application.id'),
        outputPath: 'application.id',
        parameters: {
          application: this.__input.application,
          name: this.__input.name,
          description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.application.id', props);
    return resource.getResponseField('application.id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.UpdateApplication.application.arn'),
        outputPath: 'application.arn',
        parameters: {
          application: this.__input.application,
          name: this.__input.name,
          description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.application.arn', props);
    return resource.getResponseField('application.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.UpdateApplication.application.name'),
        outputPath: 'application.name',
        parameters: {
          application: this.__input.application,
          name: this.__input.name,
          description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.application.name', props);
    return resource.getResponseField('application.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.UpdateApplication.application.description'),
        outputPath: 'application.description',
        parameters: {
          application: this.__input.application,
          name: this.__input.name,
          description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.application.description', props);
    return resource.getResponseField('application.description') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.UpdateApplication.application.creationTime'),
        outputPath: 'application.creationTime',
        parameters: {
          application: this.__input.application,
          name: this.__input.name,
          description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.application.creationTime', props);
    return resource.getResponseField('application.creationTime') as unknown as string;
  }

  public get lastUpdateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.UpdateApplication.application.lastUpdateTime'),
        outputPath: 'application.lastUpdateTime',
        parameters: {
          application: this.__input.application,
          name: this.__input.name,
          description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.application.lastUpdateTime', props);
    return resource.getResponseField('application.lastUpdateTime') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.UpdateApplication.application.tags'),
        outputPath: 'application.tags',
        parameters: {
          application: this.__input.application,
          name: this.__input.name,
          description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateApplication.application.tags', props);
    return resource.getResponseField('application.tags') as unknown as Record<string, string>;
  }

}

export class ServiceCatalogAppRegistryResponsesUpdateAttributeGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogAppRegistryUpdateAttributeGroupRequest) {
  }

  public get attributeGroup(): ServiceCatalogAppRegistryResponsesUpdateAttributeGroupAttributeGroup {
    return new ServiceCatalogAppRegistryResponsesUpdateAttributeGroupAttributeGroup(this.__scope, this.__resources, this.__input);
  }

}

export class ServiceCatalogAppRegistryResponsesUpdateAttributeGroupAttributeGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ServiceCatalogAppRegistryUpdateAttributeGroupRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAttributeGroup',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.UpdateAttributeGroup.attributeGroup.id'),
        outputPath: 'attributeGroup.id',
        parameters: {
          attributeGroup: this.__input.attributeGroup,
          name: this.__input.name,
          description: this.__input.description,
          attributes: this.__input.attributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAttributeGroup.attributeGroup.id', props);
    return resource.getResponseField('attributeGroup.id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAttributeGroup',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.UpdateAttributeGroup.attributeGroup.arn'),
        outputPath: 'attributeGroup.arn',
        parameters: {
          attributeGroup: this.__input.attributeGroup,
          name: this.__input.name,
          description: this.__input.description,
          attributes: this.__input.attributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAttributeGroup.attributeGroup.arn', props);
    return resource.getResponseField('attributeGroup.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAttributeGroup',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.UpdateAttributeGroup.attributeGroup.name'),
        outputPath: 'attributeGroup.name',
        parameters: {
          attributeGroup: this.__input.attributeGroup,
          name: this.__input.name,
          description: this.__input.description,
          attributes: this.__input.attributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAttributeGroup.attributeGroup.name', props);
    return resource.getResponseField('attributeGroup.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAttributeGroup',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.UpdateAttributeGroup.attributeGroup.description'),
        outputPath: 'attributeGroup.description',
        parameters: {
          attributeGroup: this.__input.attributeGroup,
          name: this.__input.name,
          description: this.__input.description,
          attributes: this.__input.attributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAttributeGroup.attributeGroup.description', props);
    return resource.getResponseField('attributeGroup.description') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAttributeGroup',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.UpdateAttributeGroup.attributeGroup.creationTime'),
        outputPath: 'attributeGroup.creationTime',
        parameters: {
          attributeGroup: this.__input.attributeGroup,
          name: this.__input.name,
          description: this.__input.description,
          attributes: this.__input.attributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAttributeGroup.attributeGroup.creationTime', props);
    return resource.getResponseField('attributeGroup.creationTime') as unknown as string;
  }

  public get lastUpdateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAttributeGroup',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.UpdateAttributeGroup.attributeGroup.lastUpdateTime'),
        outputPath: 'attributeGroup.lastUpdateTime',
        parameters: {
          attributeGroup: this.__input.attributeGroup,
          name: this.__input.name,
          description: this.__input.description,
          attributes: this.__input.attributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAttributeGroup.attributeGroup.lastUpdateTime', props);
    return resource.getResponseField('attributeGroup.lastUpdateTime') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAttributeGroup',
        service: 'ServiceCatalogAppRegistry',
        physicalResourceId: cr.PhysicalResourceId.of('ServiceCatalogAppRegistry.UpdateAttributeGroup.attributeGroup.tags'),
        outputPath: 'attributeGroup.tags',
        parameters: {
          attributeGroup: this.__input.attributeGroup,
          name: this.__input.name,
          description: this.__input.description,
          attributes: this.__input.attributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAttributeGroup.attributeGroup.tags', props);
    return resource.getResponseField('attributeGroup.tags') as unknown as Record<string, string>;
  }

}

