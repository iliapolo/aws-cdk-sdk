import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class SchemasClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createDiscoverer(input: shapes.SchemasCreateDiscovererRequest): SchemasResponsesCreateDiscoverer {
    return new SchemasResponsesCreateDiscoverer(this, this.__resources, input);
  }

  public createRegistry(input: shapes.SchemasCreateRegistryRequest): SchemasResponsesCreateRegistry {
    return new SchemasResponsesCreateRegistry(this, this.__resources, input);
  }

  public createSchema(input: shapes.SchemasCreateSchemaRequest): SchemasResponsesCreateSchema {
    return new SchemasResponsesCreateSchema(this, this.__resources, input);
  }

  public deleteDiscoverer(input: shapes.SchemasDeleteDiscovererRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDiscoverer',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DeleteDiscoverer'),
        parameters: {
          DiscovererId: input.discovererId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDiscoverer', props);
  }

  public deleteRegistry(input: shapes.SchemasDeleteRegistryRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRegistry',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DeleteRegistry'),
        parameters: {
          RegistryName: input.registryName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteRegistry', props);
  }

  public deleteResourcePolicy(input: shapes.SchemasDeleteResourcePolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResourcePolicy',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DeleteResourcePolicy'),
        parameters: {
          RegistryName: input.registryName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteResourcePolicy', props);
  }

  public deleteSchema(input: shapes.SchemasDeleteSchemaRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DeleteSchema'),
        parameters: {
          RegistryName: input.registryName,
          SchemaName: input.schemaName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteSchema', props);
  }

  public deleteSchemaVersion(input: shapes.SchemasDeleteSchemaVersionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSchemaVersion',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DeleteSchemaVersion'),
        parameters: {
          RegistryName: input.registryName,
          SchemaName: input.schemaName,
          SchemaVersion: input.schemaVersion,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteSchemaVersion', props);
  }

  public describeCodeBinding(input: shapes.SchemasDescribeCodeBindingRequest): SchemasResponsesDescribeCodeBinding {
    return new SchemasResponsesDescribeCodeBinding(this, this.__resources, input);
  }

  public describeDiscoverer(input: shapes.SchemasDescribeDiscovererRequest): SchemasResponsesDescribeDiscoverer {
    return new SchemasResponsesDescribeDiscoverer(this, this.__resources, input);
  }

  public describeRegistry(input: shapes.SchemasDescribeRegistryRequest): SchemasResponsesDescribeRegistry {
    return new SchemasResponsesDescribeRegistry(this, this.__resources, input);
  }

  public describeSchema(input: shapes.SchemasDescribeSchemaRequest): SchemasResponsesDescribeSchema {
    return new SchemasResponsesDescribeSchema(this, this.__resources, input);
  }

  public exportSchema(input: shapes.SchemasExportSchemaRequest): SchemasResponsesExportSchema {
    return new SchemasResponsesExportSchema(this, this.__resources, input);
  }

  public fetchCodeBindingSource(input: shapes.SchemasGetCodeBindingSourceRequest): SchemasResponsesFetchCodeBindingSource {
    return new SchemasResponsesFetchCodeBindingSource(this, this.__resources, input);
  }

  public fetchDiscoveredSchema(input: shapes.SchemasGetDiscoveredSchemaRequest): SchemasResponsesFetchDiscoveredSchema {
    return new SchemasResponsesFetchDiscoveredSchema(this, this.__resources, input);
  }

  public fetchResourcePolicy(input: shapes.SchemasGetResourcePolicyRequest): SchemasResponsesFetchResourcePolicy {
    return new SchemasResponsesFetchResourcePolicy(this, this.__resources, input);
  }

  public listDiscoverers(input: shapes.SchemasListDiscoverersRequest): SchemasResponsesListDiscoverers {
    return new SchemasResponsesListDiscoverers(this, this.__resources, input);
  }

  public listRegistries(input: shapes.SchemasListRegistriesRequest): SchemasResponsesListRegistries {
    return new SchemasResponsesListRegistries(this, this.__resources, input);
  }

  public listSchemaVersions(input: shapes.SchemasListSchemaVersionsRequest): SchemasResponsesListSchemaVersions {
    return new SchemasResponsesListSchemaVersions(this, this.__resources, input);
  }

  public listSchemas(input: shapes.SchemasListSchemasRequest): SchemasResponsesListSchemas {
    return new SchemasResponsesListSchemas(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.SchemasListTagsForResourceRequest): SchemasResponsesListTagsForResource {
    return new SchemasResponsesListTagsForResource(this, this.__resources, input);
  }

  public putCodeBinding(input: shapes.SchemasPutCodeBindingRequest): SchemasResponsesPutCodeBinding {
    return new SchemasResponsesPutCodeBinding(this, this.__resources, input);
  }

  public putResourcePolicy(input: shapes.SchemasPutResourcePolicyRequest): SchemasResponsesPutResourcePolicy {
    return new SchemasResponsesPutResourcePolicy(this, this.__resources, input);
  }

  public searchSchemas(input: shapes.SchemasSearchSchemasRequest): SchemasResponsesSearchSchemas {
    return new SchemasResponsesSearchSchemas(this, this.__resources, input);
  }

  public startDiscoverer(input: shapes.SchemasStartDiscovererRequest): SchemasResponsesStartDiscoverer {
    return new SchemasResponsesStartDiscoverer(this, this.__resources, input);
  }

  public stopDiscoverer(input: shapes.SchemasStopDiscovererRequest): SchemasResponsesStopDiscoverer {
    return new SchemasResponsesStopDiscoverer(this, this.__resources, input);
  }

  public tagResource(input: shapes.SchemasTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.SchemasUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateDiscoverer(input: shapes.SchemasUpdateDiscovererRequest): SchemasResponsesUpdateDiscoverer {
    return new SchemasResponsesUpdateDiscoverer(this, this.__resources, input);
  }

  public updateRegistry(input: shapes.SchemasUpdateRegistryRequest): SchemasResponsesUpdateRegistry {
    return new SchemasResponsesUpdateRegistry(this, this.__resources, input);
  }

  public updateSchema(input: shapes.SchemasUpdateSchemaRequest): SchemasResponsesUpdateSchema {
    return new SchemasResponsesUpdateSchema(this, this.__resources, input);
  }

}

export class SchemasResponsesCreateDiscoverer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SchemasCreateDiscovererRequest) {
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDiscoverer',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.CreateDiscoverer.Description'),
        outputPath: 'Description',
        parameters: {
          Description: this.__input.description,
          SourceArn: this.__input.sourceArn,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDiscoverer.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get discovererArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDiscoverer',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.CreateDiscoverer.DiscovererArn'),
        outputPath: 'DiscovererArn',
        parameters: {
          Description: this.__input.description,
          SourceArn: this.__input.sourceArn,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDiscoverer.DiscovererArn', props);
    return resource.getResponseField('DiscovererArn') as unknown as string;
  }

  public get discovererId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDiscoverer',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.CreateDiscoverer.DiscovererId'),
        outputPath: 'DiscovererId',
        parameters: {
          Description: this.__input.description,
          SourceArn: this.__input.sourceArn,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDiscoverer.DiscovererId', props);
    return resource.getResponseField('DiscovererId') as unknown as string;
  }

  public get sourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDiscoverer',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.CreateDiscoverer.SourceArn'),
        outputPath: 'SourceArn',
        parameters: {
          Description: this.__input.description,
          SourceArn: this.__input.sourceArn,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDiscoverer.SourceArn', props);
    return resource.getResponseField('SourceArn') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDiscoverer',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.CreateDiscoverer.State'),
        outputPath: 'State',
        parameters: {
          Description: this.__input.description,
          SourceArn: this.__input.sourceArn,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDiscoverer.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDiscoverer',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.CreateDiscoverer.Tags'),
        outputPath: 'Tags',
        parameters: {
          Description: this.__input.description,
          SourceArn: this.__input.sourceArn,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDiscoverer.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class SchemasResponsesCreateRegistry {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SchemasCreateRegistryRequest) {
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRegistry',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.CreateRegistry.Description'),
        outputPath: 'Description',
        parameters: {
          Description: this.__input.description,
          RegistryName: this.__input.registryName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRegistry.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get registryArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRegistry',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.CreateRegistry.RegistryArn'),
        outputPath: 'RegistryArn',
        parameters: {
          Description: this.__input.description,
          RegistryName: this.__input.registryName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRegistry.RegistryArn', props);
    return resource.getResponseField('RegistryArn') as unknown as string;
  }

  public get registryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRegistry',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.CreateRegistry.RegistryName'),
        outputPath: 'RegistryName',
        parameters: {
          Description: this.__input.description,
          RegistryName: this.__input.registryName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRegistry.RegistryName', props);
    return resource.getResponseField('RegistryName') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRegistry',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.CreateRegistry.Tags'),
        outputPath: 'Tags',
        parameters: {
          Description: this.__input.description,
          RegistryName: this.__input.registryName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRegistry.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class SchemasResponsesCreateSchema {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SchemasCreateSchemaRequest) {
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.CreateSchema.Description'),
        outputPath: 'Description',
        parameters: {
          Content: this.__input.content,
          Description: this.__input.description,
          RegistryName: this.__input.registryName,
          SchemaName: this.__input.schemaName,
          Tags: this.__input.tags,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSchema.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get lastModified(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.CreateSchema.LastModified'),
        outputPath: 'LastModified',
        parameters: {
          Content: this.__input.content,
          Description: this.__input.description,
          RegistryName: this.__input.registryName,
          SchemaName: this.__input.schemaName,
          Tags: this.__input.tags,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSchema.LastModified', props);
    return resource.getResponseField('LastModified') as unknown as string;
  }

  public get schemaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.CreateSchema.SchemaArn'),
        outputPath: 'SchemaArn',
        parameters: {
          Content: this.__input.content,
          Description: this.__input.description,
          RegistryName: this.__input.registryName,
          SchemaName: this.__input.schemaName,
          Tags: this.__input.tags,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSchema.SchemaArn', props);
    return resource.getResponseField('SchemaArn') as unknown as string;
  }

  public get schemaName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.CreateSchema.SchemaName'),
        outputPath: 'SchemaName',
        parameters: {
          Content: this.__input.content,
          Description: this.__input.description,
          RegistryName: this.__input.registryName,
          SchemaName: this.__input.schemaName,
          Tags: this.__input.tags,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSchema.SchemaName', props);
    return resource.getResponseField('SchemaName') as unknown as string;
  }

  public get schemaVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.CreateSchema.SchemaVersion'),
        outputPath: 'SchemaVersion',
        parameters: {
          Content: this.__input.content,
          Description: this.__input.description,
          RegistryName: this.__input.registryName,
          SchemaName: this.__input.schemaName,
          Tags: this.__input.tags,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSchema.SchemaVersion', props);
    return resource.getResponseField('SchemaVersion') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.CreateSchema.Tags'),
        outputPath: 'Tags',
        parameters: {
          Content: this.__input.content,
          Description: this.__input.description,
          RegistryName: this.__input.registryName,
          SchemaName: this.__input.schemaName,
          Tags: this.__input.tags,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSchema.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.CreateSchema.Type'),
        outputPath: 'Type',
        parameters: {
          Content: this.__input.content,
          Description: this.__input.description,
          RegistryName: this.__input.registryName,
          SchemaName: this.__input.schemaName,
          Tags: this.__input.tags,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSchema.Type', props);
    return resource.getResponseField('Type') as unknown as string;
  }

  public get versionCreatedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.CreateSchema.VersionCreatedDate'),
        outputPath: 'VersionCreatedDate',
        parameters: {
          Content: this.__input.content,
          Description: this.__input.description,
          RegistryName: this.__input.registryName,
          SchemaName: this.__input.schemaName,
          Tags: this.__input.tags,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSchema.VersionCreatedDate', props);
    return resource.getResponseField('VersionCreatedDate') as unknown as string;
  }

}

export class SchemasResponsesDescribeCodeBinding {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SchemasDescribeCodeBindingRequest) {
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCodeBinding',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DescribeCodeBinding.CreationDate'),
        outputPath: 'CreationDate',
        parameters: {
          Language: this.__input.language,
          RegistryName: this.__input.registryName,
          SchemaName: this.__input.schemaName,
          SchemaVersion: this.__input.schemaVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCodeBinding.CreationDate', props);
    return resource.getResponseField('CreationDate') as unknown as string;
  }

  public get lastModified(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCodeBinding',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DescribeCodeBinding.LastModified'),
        outputPath: 'LastModified',
        parameters: {
          Language: this.__input.language,
          RegistryName: this.__input.registryName,
          SchemaName: this.__input.schemaName,
          SchemaVersion: this.__input.schemaVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCodeBinding.LastModified', props);
    return resource.getResponseField('LastModified') as unknown as string;
  }

  public get schemaVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCodeBinding',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DescribeCodeBinding.SchemaVersion'),
        outputPath: 'SchemaVersion',
        parameters: {
          Language: this.__input.language,
          RegistryName: this.__input.registryName,
          SchemaName: this.__input.schemaName,
          SchemaVersion: this.__input.schemaVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCodeBinding.SchemaVersion', props);
    return resource.getResponseField('SchemaVersion') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCodeBinding',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DescribeCodeBinding.Status'),
        outputPath: 'Status',
        parameters: {
          Language: this.__input.language,
          RegistryName: this.__input.registryName,
          SchemaName: this.__input.schemaName,
          SchemaVersion: this.__input.schemaVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCodeBinding.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class SchemasResponsesDescribeDiscoverer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SchemasDescribeDiscovererRequest) {
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDiscoverer',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DescribeDiscoverer.Description'),
        outputPath: 'Description',
        parameters: {
          DiscovererId: this.__input.discovererId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDiscoverer.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get discovererArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDiscoverer',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DescribeDiscoverer.DiscovererArn'),
        outputPath: 'DiscovererArn',
        parameters: {
          DiscovererId: this.__input.discovererId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDiscoverer.DiscovererArn', props);
    return resource.getResponseField('DiscovererArn') as unknown as string;
  }

  public get discovererId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDiscoverer',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DescribeDiscoverer.DiscovererId'),
        outputPath: 'DiscovererId',
        parameters: {
          DiscovererId: this.__input.discovererId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDiscoverer.DiscovererId', props);
    return resource.getResponseField('DiscovererId') as unknown as string;
  }

  public get sourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDiscoverer',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DescribeDiscoverer.SourceArn'),
        outputPath: 'SourceArn',
        parameters: {
          DiscovererId: this.__input.discovererId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDiscoverer.SourceArn', props);
    return resource.getResponseField('SourceArn') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDiscoverer',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DescribeDiscoverer.State'),
        outputPath: 'State',
        parameters: {
          DiscovererId: this.__input.discovererId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDiscoverer.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDiscoverer',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DescribeDiscoverer.Tags'),
        outputPath: 'Tags',
        parameters: {
          DiscovererId: this.__input.discovererId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDiscoverer.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class SchemasResponsesDescribeRegistry {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SchemasDescribeRegistryRequest) {
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRegistry',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DescribeRegistry.Description'),
        outputPath: 'Description',
        parameters: {
          RegistryName: this.__input.registryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRegistry.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get registryArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRegistry',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DescribeRegistry.RegistryArn'),
        outputPath: 'RegistryArn',
        parameters: {
          RegistryName: this.__input.registryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRegistry.RegistryArn', props);
    return resource.getResponseField('RegistryArn') as unknown as string;
  }

  public get registryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRegistry',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DescribeRegistry.RegistryName'),
        outputPath: 'RegistryName',
        parameters: {
          RegistryName: this.__input.registryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRegistry.RegistryName', props);
    return resource.getResponseField('RegistryName') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRegistry',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DescribeRegistry.Tags'),
        outputPath: 'Tags',
        parameters: {
          RegistryName: this.__input.registryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRegistry.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class SchemasResponsesDescribeSchema {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SchemasDescribeSchemaRequest) {
  }

  public get content(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DescribeSchema.Content'),
        outputPath: 'Content',
        parameters: {
          RegistryName: this.__input.registryName,
          SchemaName: this.__input.schemaName,
          SchemaVersion: this.__input.schemaVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSchema.Content', props);
    return resource.getResponseField('Content') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DescribeSchema.Description'),
        outputPath: 'Description',
        parameters: {
          RegistryName: this.__input.registryName,
          SchemaName: this.__input.schemaName,
          SchemaVersion: this.__input.schemaVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSchema.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get lastModified(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DescribeSchema.LastModified'),
        outputPath: 'LastModified',
        parameters: {
          RegistryName: this.__input.registryName,
          SchemaName: this.__input.schemaName,
          SchemaVersion: this.__input.schemaVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSchema.LastModified', props);
    return resource.getResponseField('LastModified') as unknown as string;
  }

  public get schemaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DescribeSchema.SchemaArn'),
        outputPath: 'SchemaArn',
        parameters: {
          RegistryName: this.__input.registryName,
          SchemaName: this.__input.schemaName,
          SchemaVersion: this.__input.schemaVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSchema.SchemaArn', props);
    return resource.getResponseField('SchemaArn') as unknown as string;
  }

  public get schemaName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DescribeSchema.SchemaName'),
        outputPath: 'SchemaName',
        parameters: {
          RegistryName: this.__input.registryName,
          SchemaName: this.__input.schemaName,
          SchemaVersion: this.__input.schemaVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSchema.SchemaName', props);
    return resource.getResponseField('SchemaName') as unknown as string;
  }

  public get schemaVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DescribeSchema.SchemaVersion'),
        outputPath: 'SchemaVersion',
        parameters: {
          RegistryName: this.__input.registryName,
          SchemaName: this.__input.schemaName,
          SchemaVersion: this.__input.schemaVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSchema.SchemaVersion', props);
    return resource.getResponseField('SchemaVersion') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DescribeSchema.Tags'),
        outputPath: 'Tags',
        parameters: {
          RegistryName: this.__input.registryName,
          SchemaName: this.__input.schemaName,
          SchemaVersion: this.__input.schemaVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSchema.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DescribeSchema.Type'),
        outputPath: 'Type',
        parameters: {
          RegistryName: this.__input.registryName,
          SchemaName: this.__input.schemaName,
          SchemaVersion: this.__input.schemaVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSchema.Type', props);
    return resource.getResponseField('Type') as unknown as string;
  }

  public get versionCreatedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.DescribeSchema.VersionCreatedDate'),
        outputPath: 'VersionCreatedDate',
        parameters: {
          RegistryName: this.__input.registryName,
          SchemaName: this.__input.schemaName,
          SchemaVersion: this.__input.schemaVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSchema.VersionCreatedDate', props);
    return resource.getResponseField('VersionCreatedDate') as unknown as string;
  }

}

export class SchemasResponsesExportSchema {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SchemasExportSchemaRequest) {
  }

  public get content(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.ExportSchema.Content'),
        outputPath: 'Content',
        parameters: {
          RegistryName: this.__input.registryName,
          SchemaName: this.__input.schemaName,
          SchemaVersion: this.__input.schemaVersion,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportSchema.Content', props);
    return resource.getResponseField('Content') as unknown as string;
  }

  public get schemaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.ExportSchema.SchemaArn'),
        outputPath: 'SchemaArn',
        parameters: {
          RegistryName: this.__input.registryName,
          SchemaName: this.__input.schemaName,
          SchemaVersion: this.__input.schemaVersion,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportSchema.SchemaArn', props);
    return resource.getResponseField('SchemaArn') as unknown as string;
  }

  public get schemaName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.ExportSchema.SchemaName'),
        outputPath: 'SchemaName',
        parameters: {
          RegistryName: this.__input.registryName,
          SchemaName: this.__input.schemaName,
          SchemaVersion: this.__input.schemaVersion,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportSchema.SchemaName', props);
    return resource.getResponseField('SchemaName') as unknown as string;
  }

  public get schemaVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.ExportSchema.SchemaVersion'),
        outputPath: 'SchemaVersion',
        parameters: {
          RegistryName: this.__input.registryName,
          SchemaName: this.__input.schemaName,
          SchemaVersion: this.__input.schemaVersion,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportSchema.SchemaVersion', props);
    return resource.getResponseField('SchemaVersion') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.ExportSchema.Type'),
        outputPath: 'Type',
        parameters: {
          RegistryName: this.__input.registryName,
          SchemaName: this.__input.schemaName,
          SchemaVersion: this.__input.schemaVersion,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportSchema.Type', props);
    return resource.getResponseField('Type') as unknown as string;
  }

}

export class SchemasResponsesFetchCodeBindingSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SchemasGetCodeBindingSourceRequest) {
  }

  public get body(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCodeBindingSource',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.GetCodeBindingSource.Body'),
        outputPath: 'Body',
        parameters: {
          Language: this.__input.language,
          RegistryName: this.__input.registryName,
          SchemaName: this.__input.schemaName,
          SchemaVersion: this.__input.schemaVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCodeBindingSource.Body', props);
    return resource.getResponseField('Body') as unknown as any;
  }

}

export class SchemasResponsesFetchDiscoveredSchema {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SchemasGetDiscoveredSchemaRequest) {
  }

  public get content(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDiscoveredSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.GetDiscoveredSchema.Content'),
        outputPath: 'Content',
        parameters: {
          Events: this.__input.events,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDiscoveredSchema.Content', props);
    return resource.getResponseField('Content') as unknown as string;
  }

}

export class SchemasResponsesFetchResourcePolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SchemasGetResourcePolicyRequest) {
  }

  public get policy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourcePolicy',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.GetResourcePolicy.Policy'),
        outputPath: 'Policy',
        parameters: {
          RegistryName: this.__input.registryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourcePolicy.Policy', props);
    return resource.getResponseField('Policy') as unknown as string;
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourcePolicy',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.GetResourcePolicy.RevisionId'),
        outputPath: 'RevisionId',
        parameters: {
          RegistryName: this.__input.registryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResourcePolicy.RevisionId', props);
    return resource.getResponseField('RevisionId') as unknown as string;
  }

}

export class SchemasResponsesListDiscoverers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SchemasListDiscoverersRequest) {
  }

  public get discoverers(): shapes.SchemasDiscovererSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDiscoverers',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.ListDiscoverers.Discoverers'),
        outputPath: 'Discoverers',
        parameters: {
          DiscovererIdPrefix: this.__input.discovererIdPrefix,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
          SourceArnPrefix: this.__input.sourceArnPrefix,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDiscoverers.Discoverers', props);
    return resource.getResponseField('Discoverers') as unknown as shapes.SchemasDiscovererSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDiscoverers',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.ListDiscoverers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          DiscovererIdPrefix: this.__input.discovererIdPrefix,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
          SourceArnPrefix: this.__input.sourceArnPrefix,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDiscoverers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SchemasResponsesListRegistries {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SchemasListRegistriesRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRegistries',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.ListRegistries.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
          RegistryNamePrefix: this.__input.registryNamePrefix,
          Scope: this.__input.scope,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRegistries.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get registries(): shapes.SchemasRegistrySummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRegistries',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.ListRegistries.Registries'),
        outputPath: 'Registries',
        parameters: {
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
          RegistryNamePrefix: this.__input.registryNamePrefix,
          Scope: this.__input.scope,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRegistries.Registries', props);
    return resource.getResponseField('Registries') as unknown as shapes.SchemasRegistrySummary[];
  }

}

export class SchemasResponsesListSchemaVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SchemasListSchemaVersionsRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSchemaVersions',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.ListSchemaVersions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
          RegistryName: this.__input.registryName,
          SchemaName: this.__input.schemaName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSchemaVersions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get schemaVersions(): shapes.SchemasSchemaVersionSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSchemaVersions',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.ListSchemaVersions.SchemaVersions'),
        outputPath: 'SchemaVersions',
        parameters: {
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
          RegistryName: this.__input.registryName,
          SchemaName: this.__input.schemaName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSchemaVersions.SchemaVersions', props);
    return resource.getResponseField('SchemaVersions') as unknown as shapes.SchemasSchemaVersionSummary[];
  }

}

export class SchemasResponsesListSchemas {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SchemasListSchemasRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSchemas',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.ListSchemas.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
          RegistryName: this.__input.registryName,
          SchemaNamePrefix: this.__input.schemaNamePrefix,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSchemas.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get schemas(): shapes.SchemasSchemaSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSchemas',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.ListSchemas.Schemas'),
        outputPath: 'Schemas',
        parameters: {
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
          RegistryName: this.__input.registryName,
          SchemaNamePrefix: this.__input.schemaNamePrefix,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSchemas.Schemas', props);
    return resource.getResponseField('Schemas') as unknown as shapes.SchemasSchemaSummary[];
  }

}

export class SchemasResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SchemasListTagsForResourceRequest) {
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.ListTagsForResource.Tags'),
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

export class SchemasResponsesPutCodeBinding {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SchemasPutCodeBindingRequest) {
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putCodeBinding',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.PutCodeBinding.CreationDate'),
        outputPath: 'CreationDate',
        parameters: {
          Language: this.__input.language,
          RegistryName: this.__input.registryName,
          SchemaName: this.__input.schemaName,
          SchemaVersion: this.__input.schemaVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutCodeBinding.CreationDate', props);
    return resource.getResponseField('CreationDate') as unknown as string;
  }

  public get lastModified(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putCodeBinding',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.PutCodeBinding.LastModified'),
        outputPath: 'LastModified',
        parameters: {
          Language: this.__input.language,
          RegistryName: this.__input.registryName,
          SchemaName: this.__input.schemaName,
          SchemaVersion: this.__input.schemaVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutCodeBinding.LastModified', props);
    return resource.getResponseField('LastModified') as unknown as string;
  }

  public get schemaVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putCodeBinding',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.PutCodeBinding.SchemaVersion'),
        outputPath: 'SchemaVersion',
        parameters: {
          Language: this.__input.language,
          RegistryName: this.__input.registryName,
          SchemaName: this.__input.schemaName,
          SchemaVersion: this.__input.schemaVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutCodeBinding.SchemaVersion', props);
    return resource.getResponseField('SchemaVersion') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putCodeBinding',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.PutCodeBinding.Status'),
        outputPath: 'Status',
        parameters: {
          Language: this.__input.language,
          RegistryName: this.__input.registryName,
          SchemaName: this.__input.schemaName,
          SchemaVersion: this.__input.schemaVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutCodeBinding.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class SchemasResponsesPutResourcePolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SchemasPutResourcePolicyRequest) {
  }

  public get policy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putResourcePolicy',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.PutResourcePolicy.Policy'),
        outputPath: 'Policy',
        parameters: {
          Policy: this.__input.policy,
          RegistryName: this.__input.registryName,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutResourcePolicy.Policy', props);
    return resource.getResponseField('Policy') as unknown as string;
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putResourcePolicy',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.PutResourcePolicy.RevisionId'),
        outputPath: 'RevisionId',
        parameters: {
          Policy: this.__input.policy,
          RegistryName: this.__input.registryName,
          RevisionId: this.__input.revisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutResourcePolicy.RevisionId', props);
    return resource.getResponseField('RevisionId') as unknown as string;
  }

}

export class SchemasResponsesSearchSchemas {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SchemasSearchSchemasRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchSchemas',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.SearchSchemas.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Keywords: this.__input.keywords,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
          RegistryName: this.__input.registryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchSchemas.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get schemas(): shapes.SchemasSearchSchemaSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchSchemas',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.SearchSchemas.Schemas'),
        outputPath: 'Schemas',
        parameters: {
          Keywords: this.__input.keywords,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
          RegistryName: this.__input.registryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchSchemas.Schemas', props);
    return resource.getResponseField('Schemas') as unknown as shapes.SchemasSearchSchemaSummary[];
  }

}

export class SchemasResponsesStartDiscoverer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SchemasStartDiscovererRequest) {
  }

  public get discovererId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDiscoverer',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.StartDiscoverer.DiscovererId'),
        outputPath: 'DiscovererId',
        parameters: {
          DiscovererId: this.__input.discovererId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDiscoverer.DiscovererId', props);
    return resource.getResponseField('DiscovererId') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDiscoverer',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.StartDiscoverer.State'),
        outputPath: 'State',
        parameters: {
          DiscovererId: this.__input.discovererId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDiscoverer.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

}

export class SchemasResponsesStopDiscoverer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SchemasStopDiscovererRequest) {
  }

  public get discovererId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDiscoverer',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.StopDiscoverer.DiscovererId'),
        outputPath: 'DiscovererId',
        parameters: {
          DiscovererId: this.__input.discovererId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDiscoverer.DiscovererId', props);
    return resource.getResponseField('DiscovererId') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDiscoverer',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.StopDiscoverer.State'),
        outputPath: 'State',
        parameters: {
          DiscovererId: this.__input.discovererId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDiscoverer.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

}

export class SchemasResponsesUpdateDiscoverer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SchemasUpdateDiscovererRequest) {
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDiscoverer',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.UpdateDiscoverer.Description'),
        outputPath: 'Description',
        parameters: {
          Description: this.__input.description,
          DiscovererId: this.__input.discovererId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDiscoverer.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get discovererArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDiscoverer',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.UpdateDiscoverer.DiscovererArn'),
        outputPath: 'DiscovererArn',
        parameters: {
          Description: this.__input.description,
          DiscovererId: this.__input.discovererId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDiscoverer.DiscovererArn', props);
    return resource.getResponseField('DiscovererArn') as unknown as string;
  }

  public get discovererId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDiscoverer',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.UpdateDiscoverer.DiscovererId'),
        outputPath: 'DiscovererId',
        parameters: {
          Description: this.__input.description,
          DiscovererId: this.__input.discovererId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDiscoverer.DiscovererId', props);
    return resource.getResponseField('DiscovererId') as unknown as string;
  }

  public get sourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDiscoverer',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.UpdateDiscoverer.SourceArn'),
        outputPath: 'SourceArn',
        parameters: {
          Description: this.__input.description,
          DiscovererId: this.__input.discovererId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDiscoverer.SourceArn', props);
    return resource.getResponseField('SourceArn') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDiscoverer',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.UpdateDiscoverer.State'),
        outputPath: 'State',
        parameters: {
          Description: this.__input.description,
          DiscovererId: this.__input.discovererId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDiscoverer.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDiscoverer',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.UpdateDiscoverer.Tags'),
        outputPath: 'Tags',
        parameters: {
          Description: this.__input.description,
          DiscovererId: this.__input.discovererId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDiscoverer.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class SchemasResponsesUpdateRegistry {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SchemasUpdateRegistryRequest) {
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRegistry',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.UpdateRegistry.Description'),
        outputPath: 'Description',
        parameters: {
          Description: this.__input.description,
          RegistryName: this.__input.registryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRegistry.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get registryArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRegistry',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.UpdateRegistry.RegistryArn'),
        outputPath: 'RegistryArn',
        parameters: {
          Description: this.__input.description,
          RegistryName: this.__input.registryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRegistry.RegistryArn', props);
    return resource.getResponseField('RegistryArn') as unknown as string;
  }

  public get registryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRegistry',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.UpdateRegistry.RegistryName'),
        outputPath: 'RegistryName',
        parameters: {
          Description: this.__input.description,
          RegistryName: this.__input.registryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRegistry.RegistryName', props);
    return resource.getResponseField('RegistryName') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRegistry',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.UpdateRegistry.Tags'),
        outputPath: 'Tags',
        parameters: {
          Description: this.__input.description,
          RegistryName: this.__input.registryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRegistry.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class SchemasResponsesUpdateSchema {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SchemasUpdateSchemaRequest) {
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.UpdateSchema.Description'),
        outputPath: 'Description',
        parameters: {
          ClientTokenId: this.__input.clientTokenId,
          Content: this.__input.content,
          Description: this.__input.description,
          RegistryName: this.__input.registryName,
          SchemaName: this.__input.schemaName,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSchema.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get lastModified(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.UpdateSchema.LastModified'),
        outputPath: 'LastModified',
        parameters: {
          ClientTokenId: this.__input.clientTokenId,
          Content: this.__input.content,
          Description: this.__input.description,
          RegistryName: this.__input.registryName,
          SchemaName: this.__input.schemaName,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSchema.LastModified', props);
    return resource.getResponseField('LastModified') as unknown as string;
  }

  public get schemaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.UpdateSchema.SchemaArn'),
        outputPath: 'SchemaArn',
        parameters: {
          ClientTokenId: this.__input.clientTokenId,
          Content: this.__input.content,
          Description: this.__input.description,
          RegistryName: this.__input.registryName,
          SchemaName: this.__input.schemaName,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSchema.SchemaArn', props);
    return resource.getResponseField('SchemaArn') as unknown as string;
  }

  public get schemaName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.UpdateSchema.SchemaName'),
        outputPath: 'SchemaName',
        parameters: {
          ClientTokenId: this.__input.clientTokenId,
          Content: this.__input.content,
          Description: this.__input.description,
          RegistryName: this.__input.registryName,
          SchemaName: this.__input.schemaName,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSchema.SchemaName', props);
    return resource.getResponseField('SchemaName') as unknown as string;
  }

  public get schemaVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.UpdateSchema.SchemaVersion'),
        outputPath: 'SchemaVersion',
        parameters: {
          ClientTokenId: this.__input.clientTokenId,
          Content: this.__input.content,
          Description: this.__input.description,
          RegistryName: this.__input.registryName,
          SchemaName: this.__input.schemaName,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSchema.SchemaVersion', props);
    return resource.getResponseField('SchemaVersion') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.UpdateSchema.Tags'),
        outputPath: 'Tags',
        parameters: {
          ClientTokenId: this.__input.clientTokenId,
          Content: this.__input.content,
          Description: this.__input.description,
          RegistryName: this.__input.registryName,
          SchemaName: this.__input.schemaName,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSchema.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.UpdateSchema.Type'),
        outputPath: 'Type',
        parameters: {
          ClientTokenId: this.__input.clientTokenId,
          Content: this.__input.content,
          Description: this.__input.description,
          RegistryName: this.__input.registryName,
          SchemaName: this.__input.schemaName,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSchema.Type', props);
    return resource.getResponseField('Type') as unknown as string;
  }

  public get versionCreatedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSchema',
        service: 'Schemas',
        physicalResourceId: cr.PhysicalResourceId.of('Schemas.UpdateSchema.VersionCreatedDate'),
        outputPath: 'VersionCreatedDate',
        parameters: {
          ClientTokenId: this.__input.clientTokenId,
          Content: this.__input.content,
          Description: this.__input.description,
          RegistryName: this.__input.registryName,
          SchemaName: this.__input.schemaName,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSchema.VersionCreatedDate', props);
    return resource.getResponseField('VersionCreatedDate') as unknown as string;
  }

}

