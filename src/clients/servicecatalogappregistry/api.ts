import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ServiceCatalogAppRegistryClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public associateAttributeGroup(input: shapes.ServiceCatalogAppRegistryAssociateAttributeGroupRequest): ServiceCatalogAppRegistryAssociateAttributeGroup {
    return new ServiceCatalogAppRegistryAssociateAttributeGroup(this, 'AssociateAttributeGroup', this.__resources, input);
  }

  public associateResource(input: shapes.ServiceCatalogAppRegistryAssociateResourceRequest): ServiceCatalogAppRegistryAssociateResource {
    return new ServiceCatalogAppRegistryAssociateResource(this, 'AssociateResource', this.__resources, input);
  }

  public createApplication(input: shapes.ServiceCatalogAppRegistryCreateApplicationRequest): ServiceCatalogAppRegistryCreateApplication {
    return new ServiceCatalogAppRegistryCreateApplication(this, 'CreateApplication', this.__resources, input);
  }

  public createAttributeGroup(input: shapes.ServiceCatalogAppRegistryCreateAttributeGroupRequest): ServiceCatalogAppRegistryCreateAttributeGroup {
    return new ServiceCatalogAppRegistryCreateAttributeGroup(this, 'CreateAttributeGroup', this.__resources, input);
  }

  public deleteApplication(input: shapes.ServiceCatalogAppRegistryDeleteApplicationRequest): ServiceCatalogAppRegistryDeleteApplication {
    return new ServiceCatalogAppRegistryDeleteApplication(this, 'DeleteApplication', this.__resources, input);
  }

  public deleteAttributeGroup(input: shapes.ServiceCatalogAppRegistryDeleteAttributeGroupRequest): ServiceCatalogAppRegistryDeleteAttributeGroup {
    return new ServiceCatalogAppRegistryDeleteAttributeGroup(this, 'DeleteAttributeGroup', this.__resources, input);
  }

  public disassociateAttributeGroup(input: shapes.ServiceCatalogAppRegistryDisassociateAttributeGroupRequest): ServiceCatalogAppRegistryDisassociateAttributeGroup {
    return new ServiceCatalogAppRegistryDisassociateAttributeGroup(this, 'DisassociateAttributeGroup', this.__resources, input);
  }

  public disassociateResource(input: shapes.ServiceCatalogAppRegistryDisassociateResourceRequest): ServiceCatalogAppRegistryDisassociateResource {
    return new ServiceCatalogAppRegistryDisassociateResource(this, 'DisassociateResource', this.__resources, input);
  }

  public fetchApplication(input: shapes.ServiceCatalogAppRegistryGetApplicationRequest): ServiceCatalogAppRegistryFetchApplication {
    return new ServiceCatalogAppRegistryFetchApplication(this, 'FetchApplication', this.__resources, input);
  }

  public fetchAttributeGroup(input: shapes.ServiceCatalogAppRegistryGetAttributeGroupRequest): ServiceCatalogAppRegistryFetchAttributeGroup {
    return new ServiceCatalogAppRegistryFetchAttributeGroup(this, 'FetchAttributeGroup', this.__resources, input);
  }

  public listApplications(input: shapes.ServiceCatalogAppRegistryListApplicationsRequest): ServiceCatalogAppRegistryListApplications {
    return new ServiceCatalogAppRegistryListApplications(this, 'ListApplications', this.__resources, input);
  }

  public listAssociatedAttributeGroups(input: shapes.ServiceCatalogAppRegistryListAssociatedAttributeGroupsRequest): ServiceCatalogAppRegistryListAssociatedAttributeGroups {
    return new ServiceCatalogAppRegistryListAssociatedAttributeGroups(this, 'ListAssociatedAttributeGroups', this.__resources, input);
  }

  public listAssociatedResources(input: shapes.ServiceCatalogAppRegistryListAssociatedResourcesRequest): ServiceCatalogAppRegistryListAssociatedResources {
    return new ServiceCatalogAppRegistryListAssociatedResources(this, 'ListAssociatedResources', this.__resources, input);
  }

  public listAttributeGroups(input: shapes.ServiceCatalogAppRegistryListAttributeGroupsRequest): ServiceCatalogAppRegistryListAttributeGroups {
    return new ServiceCatalogAppRegistryListAttributeGroups(this, 'ListAttributeGroups', this.__resources, input);
  }

  public updateApplication(input: shapes.ServiceCatalogAppRegistryUpdateApplicationRequest): ServiceCatalogAppRegistryUpdateApplication {
    return new ServiceCatalogAppRegistryUpdateApplication(this, 'UpdateApplication', this.__resources, input);
  }

  public updateAttributeGroup(input: shapes.ServiceCatalogAppRegistryUpdateAttributeGroupRequest): ServiceCatalogAppRegistryUpdateAttributeGroup {
    return new ServiceCatalogAppRegistryUpdateAttributeGroup(this, 'UpdateAttributeGroup', this.__resources, input);
  }

}

export class ServiceCatalogAppRegistryAssociateAttributeGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogAppRegistryAssociateAttributeGroupRequest) {
    super(scope, id);
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
          application: this.input.application,
          attributeGroup: this.input.attributeGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateAttributeGroup.applicationArn', props);
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
          application: this.input.application,
          attributeGroup: this.input.attributeGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateAttributeGroup.attributeGroupArn', props);
    return resource.getResponseField('attributeGroupArn') as unknown as string;
  }

}

export class ServiceCatalogAppRegistryAssociateResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogAppRegistryAssociateResourceRequest) {
    super(scope, id);
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
          application: this.input.application,
          resourceType: this.input.resourceType,
          resource: this.input.resource,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateResource.applicationArn', props);
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
          application: this.input.application,
          resourceType: this.input.resourceType,
          resource: this.input.resource,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateResource.resourceArn', props);
    return resource.getResponseField('resourceArn') as unknown as string;
  }

}

export class ServiceCatalogAppRegistryCreateApplication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogAppRegistryCreateApplicationRequest) {
    super(scope, id);
  }

  public get application(): ServiceCatalogAppRegistryCreateApplicationApplication {
    return new ServiceCatalogAppRegistryCreateApplicationApplication(this, 'Application', this.__resources, this.input);
  }

}

export class ServiceCatalogAppRegistryCreateApplicationApplication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogAppRegistryCreateApplicationRequest) {
    super(scope, id);
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
          name: this.input.name,
          description: this.input.description,
          tags: this.input.tags,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.application.id', props);
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
          name: this.input.name,
          description: this.input.description,
          tags: this.input.tags,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.application.arn', props);
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
          name: this.input.name,
          description: this.input.description,
          tags: this.input.tags,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.application.name', props);
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
          name: this.input.name,
          description: this.input.description,
          tags: this.input.tags,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.application.description', props);
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
          name: this.input.name,
          description: this.input.description,
          tags: this.input.tags,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.application.creationTime', props);
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
          name: this.input.name,
          description: this.input.description,
          tags: this.input.tags,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.application.lastUpdateTime', props);
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
          name: this.input.name,
          description: this.input.description,
          tags: this.input.tags,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.application.tags', props);
    return resource.getResponseField('application.tags') as unknown as Record<string, string>;
  }

}

export class ServiceCatalogAppRegistryCreateAttributeGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogAppRegistryCreateAttributeGroupRequest) {
    super(scope, id);
  }

  public get attributeGroup(): ServiceCatalogAppRegistryCreateAttributeGroupAttributeGroup {
    return new ServiceCatalogAppRegistryCreateAttributeGroupAttributeGroup(this, 'AttributeGroup', this.__resources, this.input);
  }

}

export class ServiceCatalogAppRegistryCreateAttributeGroupAttributeGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogAppRegistryCreateAttributeGroupRequest) {
    super(scope, id);
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
          name: this.input.name,
          description: this.input.description,
          attributes: this.input.attributes,
          tags: this.input.tags,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAttributeGroup.attributeGroup.id', props);
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
          name: this.input.name,
          description: this.input.description,
          attributes: this.input.attributes,
          tags: this.input.tags,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAttributeGroup.attributeGroup.arn', props);
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
          name: this.input.name,
          description: this.input.description,
          attributes: this.input.attributes,
          tags: this.input.tags,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAttributeGroup.attributeGroup.name', props);
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
          name: this.input.name,
          description: this.input.description,
          attributes: this.input.attributes,
          tags: this.input.tags,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAttributeGroup.attributeGroup.description', props);
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
          name: this.input.name,
          description: this.input.description,
          attributes: this.input.attributes,
          tags: this.input.tags,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAttributeGroup.attributeGroup.creationTime', props);
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
          name: this.input.name,
          description: this.input.description,
          attributes: this.input.attributes,
          tags: this.input.tags,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAttributeGroup.attributeGroup.lastUpdateTime', props);
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
          name: this.input.name,
          description: this.input.description,
          attributes: this.input.attributes,
          tags: this.input.tags,
          clientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAttributeGroup.attributeGroup.tags', props);
    return resource.getResponseField('attributeGroup.tags') as unknown as Record<string, string>;
  }

}

export class ServiceCatalogAppRegistryDeleteApplication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogAppRegistryDeleteApplicationRequest) {
    super(scope, id);
  }

  public get application(): ServiceCatalogAppRegistryDeleteApplicationApplication {
    return new ServiceCatalogAppRegistryDeleteApplicationApplication(this, 'Application', this.__resources, this.input);
  }

}

export class ServiceCatalogAppRegistryDeleteApplicationApplication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogAppRegistryDeleteApplicationRequest) {
    super(scope, id);
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
          application: this.input.application,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApplication.application.id', props);
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
          application: this.input.application,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApplication.application.arn', props);
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
          application: this.input.application,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApplication.application.name', props);
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
          application: this.input.application,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApplication.application.description', props);
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
          application: this.input.application,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApplication.application.creationTime', props);
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
          application: this.input.application,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteApplication.application.lastUpdateTime', props);
    return resource.getResponseField('application.lastUpdateTime') as unknown as string;
  }

}

export class ServiceCatalogAppRegistryDeleteAttributeGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogAppRegistryDeleteAttributeGroupRequest) {
    super(scope, id);
  }

  public get attributeGroup(): ServiceCatalogAppRegistryDeleteAttributeGroupAttributeGroup {
    return new ServiceCatalogAppRegistryDeleteAttributeGroupAttributeGroup(this, 'AttributeGroup', this.__resources, this.input);
  }

}

export class ServiceCatalogAppRegistryDeleteAttributeGroupAttributeGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogAppRegistryDeleteAttributeGroupRequest) {
    super(scope, id);
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
          attributeGroup: this.input.attributeGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAttributeGroup.attributeGroup.id', props);
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
          attributeGroup: this.input.attributeGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAttributeGroup.attributeGroup.arn', props);
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
          attributeGroup: this.input.attributeGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAttributeGroup.attributeGroup.name', props);
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
          attributeGroup: this.input.attributeGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAttributeGroup.attributeGroup.description', props);
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
          attributeGroup: this.input.attributeGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAttributeGroup.attributeGroup.creationTime', props);
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
          attributeGroup: this.input.attributeGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAttributeGroup.attributeGroup.lastUpdateTime', props);
    return resource.getResponseField('attributeGroup.lastUpdateTime') as unknown as string;
  }

}

export class ServiceCatalogAppRegistryDisassociateAttributeGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogAppRegistryDisassociateAttributeGroupRequest) {
    super(scope, id);
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
          application: this.input.application,
          attributeGroup: this.input.attributeGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateAttributeGroup.applicationArn', props);
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
          application: this.input.application,
          attributeGroup: this.input.attributeGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateAttributeGroup.attributeGroupArn', props);
    return resource.getResponseField('attributeGroupArn') as unknown as string;
  }

}

export class ServiceCatalogAppRegistryDisassociateResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogAppRegistryDisassociateResourceRequest) {
    super(scope, id);
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
          application: this.input.application,
          resourceType: this.input.resourceType,
          resource: this.input.resource,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateResource.applicationArn', props);
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
          application: this.input.application,
          resourceType: this.input.resourceType,
          resource: this.input.resource,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateResource.resourceArn', props);
    return resource.getResponseField('resourceArn') as unknown as string;
  }

}

export class ServiceCatalogAppRegistryFetchApplication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogAppRegistryGetApplicationRequest) {
    super(scope, id);
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
          application: this.input.application,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApplication.id', props);
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
          application: this.input.application,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApplication.arn', props);
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
          application: this.input.application,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApplication.name', props);
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
          application: this.input.application,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApplication.description', props);
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
          application: this.input.application,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApplication.creationTime', props);
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
          application: this.input.application,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApplication.lastUpdateTime', props);
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
          application: this.input.application,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApplication.associatedResourceCount', props);
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
          application: this.input.application,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetApplication.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class ServiceCatalogAppRegistryFetchAttributeGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogAppRegistryGetAttributeGroupRequest) {
    super(scope, id);
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
          attributeGroup: this.input.attributeGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAttributeGroup.id', props);
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
          attributeGroup: this.input.attributeGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAttributeGroup.arn', props);
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
          attributeGroup: this.input.attributeGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAttributeGroup.name', props);
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
          attributeGroup: this.input.attributeGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAttributeGroup.description', props);
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
          attributeGroup: this.input.attributeGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAttributeGroup.attributes', props);
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
          attributeGroup: this.input.attributeGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAttributeGroup.creationTime', props);
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
          attributeGroup: this.input.attributeGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAttributeGroup.lastUpdateTime', props);
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
          attributeGroup: this.input.attributeGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAttributeGroup.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class ServiceCatalogAppRegistryListApplications extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogAppRegistryListApplicationsRequest) {
    super(scope, id);
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
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListApplications.applications', props);
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
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListApplications.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ServiceCatalogAppRegistryListAssociatedAttributeGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogAppRegistryListAssociatedAttributeGroupsRequest) {
    super(scope, id);
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
          application: this.input.application,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAssociatedAttributeGroups.attributeGroups', props);
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
          application: this.input.application,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAssociatedAttributeGroups.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ServiceCatalogAppRegistryListAssociatedResources extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogAppRegistryListAssociatedResourcesRequest) {
    super(scope, id);
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
          application: this.input.application,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAssociatedResources.resources', props);
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
          application: this.input.application,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAssociatedResources.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ServiceCatalogAppRegistryListAttributeGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogAppRegistryListAttributeGroupsRequest) {
    super(scope, id);
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
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAttributeGroups.attributeGroups', props);
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
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAttributeGroups.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ServiceCatalogAppRegistryUpdateApplication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogAppRegistryUpdateApplicationRequest) {
    super(scope, id);
  }

  public get application(): ServiceCatalogAppRegistryUpdateApplicationApplication {
    return new ServiceCatalogAppRegistryUpdateApplicationApplication(this, 'Application', this.__resources, this.input);
  }

}

export class ServiceCatalogAppRegistryUpdateApplicationApplication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogAppRegistryUpdateApplicationRequest) {
    super(scope, id);
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
          application: this.input.application,
          name: this.input.name,
          description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.application.id', props);
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
          application: this.input.application,
          name: this.input.name,
          description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.application.arn', props);
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
          application: this.input.application,
          name: this.input.name,
          description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.application.name', props);
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
          application: this.input.application,
          name: this.input.name,
          description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.application.description', props);
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
          application: this.input.application,
          name: this.input.name,
          description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.application.creationTime', props);
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
          application: this.input.application,
          name: this.input.name,
          description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.application.lastUpdateTime', props);
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
          application: this.input.application,
          name: this.input.name,
          description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateApplication.application.tags', props);
    return resource.getResponseField('application.tags') as unknown as Record<string, string>;
  }

}

export class ServiceCatalogAppRegistryUpdateAttributeGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogAppRegistryUpdateAttributeGroupRequest) {
    super(scope, id);
  }

  public get attributeGroup(): ServiceCatalogAppRegistryUpdateAttributeGroupAttributeGroup {
    return new ServiceCatalogAppRegistryUpdateAttributeGroupAttributeGroup(this, 'AttributeGroup', this.__resources, this.input);
  }

}

export class ServiceCatalogAppRegistryUpdateAttributeGroupAttributeGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ServiceCatalogAppRegistryUpdateAttributeGroupRequest) {
    super(scope, id);
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
          attributeGroup: this.input.attributeGroup,
          name: this.input.name,
          description: this.input.description,
          attributes: this.input.attributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAttributeGroup.attributeGroup.id', props);
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
          attributeGroup: this.input.attributeGroup,
          name: this.input.name,
          description: this.input.description,
          attributes: this.input.attributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAttributeGroup.attributeGroup.arn', props);
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
          attributeGroup: this.input.attributeGroup,
          name: this.input.name,
          description: this.input.description,
          attributes: this.input.attributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAttributeGroup.attributeGroup.name', props);
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
          attributeGroup: this.input.attributeGroup,
          name: this.input.name,
          description: this.input.description,
          attributes: this.input.attributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAttributeGroup.attributeGroup.description', props);
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
          attributeGroup: this.input.attributeGroup,
          name: this.input.name,
          description: this.input.description,
          attributes: this.input.attributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAttributeGroup.attributeGroup.creationTime', props);
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
          attributeGroup: this.input.attributeGroup,
          name: this.input.name,
          description: this.input.description,
          attributes: this.input.attributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAttributeGroup.attributeGroup.lastUpdateTime', props);
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
          attributeGroup: this.input.attributeGroup,
          name: this.input.name,
          description: this.input.description,
          attributes: this.input.attributes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAttributeGroup.attributeGroup.tags', props);
    return resource.getResponseField('attributeGroup.tags') as unknown as Record<string, string>;
  }

}

