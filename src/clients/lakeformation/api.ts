import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class LakeFormationClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public batchGrantPermissions(input: shapes.LakeFormationBatchGrantPermissionsRequest): LakeFormationResponsesBatchGrantPermissions {
    return new LakeFormationResponsesBatchGrantPermissions(this, this.__resources, input);
  }

  public batchRevokePermissions(input: shapes.LakeFormationBatchRevokePermissionsRequest): LakeFormationResponsesBatchRevokePermissions {
    return new LakeFormationResponsesBatchRevokePermissions(this, this.__resources, input);
  }

  public deregisterResource(input: shapes.LakeFormationDeregisterResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterResource',
        service: 'LakeFormation',
        physicalResourceId: cr.PhysicalResourceId.of('LakeFormation.DeregisterResource'),
        parameters: {
          ResourceArn: input.resourceArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeregisterResource', props);
  }

  public describeResource(input: shapes.LakeFormationDescribeResourceRequest): LakeFormationResponsesDescribeResource {
    return new LakeFormationResponsesDescribeResource(this, this.__resources, input);
  }

  public fetchDataLakeSettings(input: shapes.LakeFormationGetDataLakeSettingsRequest): LakeFormationResponsesFetchDataLakeSettings {
    return new LakeFormationResponsesFetchDataLakeSettings(this, this.__resources, input);
  }

  public fetchEffectivePermissionsForPath(input: shapes.LakeFormationGetEffectivePermissionsForPathRequest): LakeFormationResponsesFetchEffectivePermissionsForPath {
    return new LakeFormationResponsesFetchEffectivePermissionsForPath(this, this.__resources, input);
  }

  public grantPermissions(input: shapes.LakeFormationGrantPermissionsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'grantPermissions',
        service: 'LakeFormation',
        physicalResourceId: cr.PhysicalResourceId.of('LakeFormation.GrantPermissions'),
        parameters: {
          CatalogId: input.catalogId,
          Principal: {
            DataLakePrincipalIdentifier: input.principal.dataLakePrincipalIdentifier,
          },
          Resource: {
            Catalog: {
            },
            Database: {
              CatalogId: input.resource.database?.catalogId,
              Name: input.resource.database?.name,
            },
            Table: {
              CatalogId: input.resource.table?.catalogId,
              DatabaseName: input.resource.table?.databaseName,
              Name: input.resource.table?.name,
              TableWildcard: {
              },
            },
            TableWithColumns: {
              CatalogId: input.resource.tableWithColumns?.catalogId,
              DatabaseName: input.resource.tableWithColumns?.databaseName,
              Name: input.resource.tableWithColumns?.name,
              ColumnNames: input.resource.tableWithColumns?.columnNames,
              ColumnWildcard: {
                ExcludedColumnNames: input.resource.tableWithColumns?.columnWildcard?.excludedColumnNames,
              },
            },
            DataLocation: {
              CatalogId: input.resource.dataLocation?.catalogId,
              ResourceArn: input.resource.dataLocation?.resourceArn,
            },
          },
          Permissions: input.permissions,
          PermissionsWithGrantOption: input.permissionsWithGrantOption,
        },
      },
    };
    new cr.AwsCustomResource(this, 'GrantPermissions', props);
  }

  public listPermissions(input: shapes.LakeFormationListPermissionsRequest): LakeFormationResponsesListPermissions {
    return new LakeFormationResponsesListPermissions(this, this.__resources, input);
  }

  public listResources(input: shapes.LakeFormationListResourcesRequest): LakeFormationResponsesListResources {
    return new LakeFormationResponsesListResources(this, this.__resources, input);
  }

  public putDataLakeSettings(input: shapes.LakeFormationPutDataLakeSettingsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putDataLakeSettings',
        service: 'LakeFormation',
        physicalResourceId: cr.PhysicalResourceId.of('LakeFormation.PutDataLakeSettings'),
        parameters: {
          CatalogId: input.catalogId,
          DataLakeSettings: {
            DataLakeAdmins: input.dataLakeSettings.dataLakeAdmins,
            CreateDatabaseDefaultPermissions: input.dataLakeSettings.createDatabaseDefaultPermissions,
            CreateTableDefaultPermissions: input.dataLakeSettings.createTableDefaultPermissions,
            TrustedResourceOwners: input.dataLakeSettings.trustedResourceOwners,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutDataLakeSettings', props);
  }

  public registerResource(input: shapes.LakeFormationRegisterResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerResource',
        service: 'LakeFormation',
        physicalResourceId: cr.PhysicalResourceId.of('LakeFormation.RegisterResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          UseServiceLinkedRole: input.useServiceLinkedRole,
          RoleArn: input.roleArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RegisterResource', props);
  }

  public revokePermissions(input: shapes.LakeFormationRevokePermissionsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'revokePermissions',
        service: 'LakeFormation',
        physicalResourceId: cr.PhysicalResourceId.of('LakeFormation.RevokePermissions'),
        parameters: {
          CatalogId: input.catalogId,
          Principal: {
            DataLakePrincipalIdentifier: input.principal.dataLakePrincipalIdentifier,
          },
          Resource: {
            Catalog: {
            },
            Database: {
              CatalogId: input.resource.database?.catalogId,
              Name: input.resource.database?.name,
            },
            Table: {
              CatalogId: input.resource.table?.catalogId,
              DatabaseName: input.resource.table?.databaseName,
              Name: input.resource.table?.name,
              TableWildcard: {
              },
            },
            TableWithColumns: {
              CatalogId: input.resource.tableWithColumns?.catalogId,
              DatabaseName: input.resource.tableWithColumns?.databaseName,
              Name: input.resource.tableWithColumns?.name,
              ColumnNames: input.resource.tableWithColumns?.columnNames,
              ColumnWildcard: {
                ExcludedColumnNames: input.resource.tableWithColumns?.columnWildcard?.excludedColumnNames,
              },
            },
            DataLocation: {
              CatalogId: input.resource.dataLocation?.catalogId,
              ResourceArn: input.resource.dataLocation?.resourceArn,
            },
          },
          Permissions: input.permissions,
          PermissionsWithGrantOption: input.permissionsWithGrantOption,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RevokePermissions', props);
  }

  public updateResource(input: shapes.LakeFormationUpdateResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResource',
        service: 'LakeFormation',
        physicalResourceId: cr.PhysicalResourceId.of('LakeFormation.UpdateResource'),
        parameters: {
          RoleArn: input.roleArn,
          ResourceArn: input.resourceArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateResource', props);
  }

}

export class LakeFormationResponsesBatchGrantPermissions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LakeFormationBatchGrantPermissionsRequest) {
  }

  public get failures(): shapes.LakeFormationBatchPermissionsFailureEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGrantPermissions',
        service: 'LakeFormation',
        physicalResourceId: cr.PhysicalResourceId.of('LakeFormation.BatchGrantPermissions.Failures'),
        outputPath: 'Failures',
        parameters: {
          CatalogId: this.__input.catalogId,
          Entries: this.__input.entries,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGrantPermissions.Failures', props);
    return resource.getResponseField('Failures') as unknown as shapes.LakeFormationBatchPermissionsFailureEntry[];
  }

}

export class LakeFormationResponsesBatchRevokePermissions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LakeFormationBatchRevokePermissionsRequest) {
  }

  public get failures(): shapes.LakeFormationBatchPermissionsFailureEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchRevokePermissions',
        service: 'LakeFormation',
        physicalResourceId: cr.PhysicalResourceId.of('LakeFormation.BatchRevokePermissions.Failures'),
        outputPath: 'Failures',
        parameters: {
          CatalogId: this.__input.catalogId,
          Entries: this.__input.entries,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchRevokePermissions.Failures', props);
    return resource.getResponseField('Failures') as unknown as shapes.LakeFormationBatchPermissionsFailureEntry[];
  }

}

export class LakeFormationResponsesDescribeResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LakeFormationDescribeResourceRequest) {
  }

  public get resourceInfo(): LakeFormationResponsesDescribeResourceResourceInfo {
    return new LakeFormationResponsesDescribeResourceResourceInfo(this.__scope, this.__resources, this.__input);
  }

}

export class LakeFormationResponsesDescribeResourceResourceInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LakeFormationDescribeResourceRequest) {
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeResource',
        service: 'LakeFormation',
        physicalResourceId: cr.PhysicalResourceId.of('LakeFormation.DescribeResource.ResourceInfo.ResourceArn'),
        outputPath: 'ResourceInfo.ResourceArn',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeResource.ResourceInfo.ResourceArn', props);
    return resource.getResponseField('ResourceInfo.ResourceArn') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeResource',
        service: 'LakeFormation',
        physicalResourceId: cr.PhysicalResourceId.of('LakeFormation.DescribeResource.ResourceInfo.RoleArn'),
        outputPath: 'ResourceInfo.RoleArn',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeResource.ResourceInfo.RoleArn', props);
    return resource.getResponseField('ResourceInfo.RoleArn') as unknown as string;
  }

  public get lastModified(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeResource',
        service: 'LakeFormation',
        physicalResourceId: cr.PhysicalResourceId.of('LakeFormation.DescribeResource.ResourceInfo.LastModified'),
        outputPath: 'ResourceInfo.LastModified',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeResource.ResourceInfo.LastModified', props);
    return resource.getResponseField('ResourceInfo.LastModified') as unknown as string;
  }

}

export class LakeFormationResponsesFetchDataLakeSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LakeFormationGetDataLakeSettingsRequest) {
  }

  public get dataLakeSettings(): LakeFormationResponsesFetchDataLakeSettingsDataLakeSettings {
    return new LakeFormationResponsesFetchDataLakeSettingsDataLakeSettings(this.__scope, this.__resources, this.__input);
  }

}

export class LakeFormationResponsesFetchDataLakeSettingsDataLakeSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LakeFormationGetDataLakeSettingsRequest) {
  }

  public get dataLakeAdmins(): shapes.LakeFormationDataLakePrincipal[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataLakeSettings',
        service: 'LakeFormation',
        physicalResourceId: cr.PhysicalResourceId.of('LakeFormation.GetDataLakeSettings.DataLakeSettings.DataLakeAdmins'),
        outputPath: 'DataLakeSettings.DataLakeAdmins',
        parameters: {
          CatalogId: this.__input.catalogId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataLakeSettings.DataLakeSettings.DataLakeAdmins', props);
    return resource.getResponseField('DataLakeSettings.DataLakeAdmins') as unknown as shapes.LakeFormationDataLakePrincipal[];
  }

  public get createDatabaseDefaultPermissions(): shapes.LakeFormationPrincipalPermissions[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataLakeSettings',
        service: 'LakeFormation',
        physicalResourceId: cr.PhysicalResourceId.of('LakeFormation.GetDataLakeSettings.DataLakeSettings.CreateDatabaseDefaultPermissions'),
        outputPath: 'DataLakeSettings.CreateDatabaseDefaultPermissions',
        parameters: {
          CatalogId: this.__input.catalogId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataLakeSettings.DataLakeSettings.CreateDatabaseDefaultPermissions', props);
    return resource.getResponseField('DataLakeSettings.CreateDatabaseDefaultPermissions') as unknown as shapes.LakeFormationPrincipalPermissions[];
  }

  public get createTableDefaultPermissions(): shapes.LakeFormationPrincipalPermissions[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataLakeSettings',
        service: 'LakeFormation',
        physicalResourceId: cr.PhysicalResourceId.of('LakeFormation.GetDataLakeSettings.DataLakeSettings.CreateTableDefaultPermissions'),
        outputPath: 'DataLakeSettings.CreateTableDefaultPermissions',
        parameters: {
          CatalogId: this.__input.catalogId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataLakeSettings.DataLakeSettings.CreateTableDefaultPermissions', props);
    return resource.getResponseField('DataLakeSettings.CreateTableDefaultPermissions') as unknown as shapes.LakeFormationPrincipalPermissions[];
  }

  public get trustedResourceOwners(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataLakeSettings',
        service: 'LakeFormation',
        physicalResourceId: cr.PhysicalResourceId.of('LakeFormation.GetDataLakeSettings.DataLakeSettings.TrustedResourceOwners'),
        outputPath: 'DataLakeSettings.TrustedResourceOwners',
        parameters: {
          CatalogId: this.__input.catalogId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataLakeSettings.DataLakeSettings.TrustedResourceOwners', props);
    return resource.getResponseField('DataLakeSettings.TrustedResourceOwners') as unknown as string[];
  }

}

export class LakeFormationResponsesFetchEffectivePermissionsForPath {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LakeFormationGetEffectivePermissionsForPathRequest) {
  }

  public get permissions(): shapes.LakeFormationPrincipalResourcePermissions[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEffectivePermissionsForPath',
        service: 'LakeFormation',
        physicalResourceId: cr.PhysicalResourceId.of('LakeFormation.GetEffectivePermissionsForPath.Permissions'),
        outputPath: 'Permissions',
        parameters: {
          CatalogId: this.__input.catalogId,
          ResourceArn: this.__input.resourceArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEffectivePermissionsForPath.Permissions', props);
    return resource.getResponseField('Permissions') as unknown as shapes.LakeFormationPrincipalResourcePermissions[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEffectivePermissionsForPath',
        service: 'LakeFormation',
        physicalResourceId: cr.PhysicalResourceId.of('LakeFormation.GetEffectivePermissionsForPath.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CatalogId: this.__input.catalogId,
          ResourceArn: this.__input.resourceArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEffectivePermissionsForPath.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class LakeFormationResponsesListPermissions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LakeFormationListPermissionsRequest) {
  }

  public get principalResourcePermissions(): shapes.LakeFormationPrincipalResourcePermissions[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPermissions',
        service: 'LakeFormation',
        physicalResourceId: cr.PhysicalResourceId.of('LakeFormation.ListPermissions.PrincipalResourcePermissions'),
        outputPath: 'PrincipalResourcePermissions',
        parameters: {
          CatalogId: this.__input.catalogId,
          Principal: {
            DataLakePrincipalIdentifier: this.__input.principal?.dataLakePrincipalIdentifier,
          },
          ResourceType: this.__input.resourceType,
          Resource: {
            Catalog: {
            },
            Database: {
              CatalogId: this.__input.resource?.database?.catalogId,
              Name: this.__input.resource?.database?.name,
            },
            Table: {
              CatalogId: this.__input.resource?.table?.catalogId,
              DatabaseName: this.__input.resource?.table?.databaseName,
              Name: this.__input.resource?.table?.name,
              TableWildcard: {
              },
            },
            TableWithColumns: {
              CatalogId: this.__input.resource?.tableWithColumns?.catalogId,
              DatabaseName: this.__input.resource?.tableWithColumns?.databaseName,
              Name: this.__input.resource?.tableWithColumns?.name,
              ColumnNames: this.__input.resource?.tableWithColumns?.columnNames,
              ColumnWildcard: {
                ExcludedColumnNames: this.__input.resource?.tableWithColumns?.columnWildcard?.excludedColumnNames,
              },
            },
            DataLocation: {
              CatalogId: this.__input.resource?.dataLocation?.catalogId,
              ResourceArn: this.__input.resource?.dataLocation?.resourceArn,
            },
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPermissions.PrincipalResourcePermissions', props);
    return resource.getResponseField('PrincipalResourcePermissions') as unknown as shapes.LakeFormationPrincipalResourcePermissions[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPermissions',
        service: 'LakeFormation',
        physicalResourceId: cr.PhysicalResourceId.of('LakeFormation.ListPermissions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CatalogId: this.__input.catalogId,
          Principal: {
            DataLakePrincipalIdentifier: this.__input.principal?.dataLakePrincipalIdentifier,
          },
          ResourceType: this.__input.resourceType,
          Resource: {
            Catalog: {
            },
            Database: {
              CatalogId: this.__input.resource?.database?.catalogId,
              Name: this.__input.resource?.database?.name,
            },
            Table: {
              CatalogId: this.__input.resource?.table?.catalogId,
              DatabaseName: this.__input.resource?.table?.databaseName,
              Name: this.__input.resource?.table?.name,
              TableWildcard: {
              },
            },
            TableWithColumns: {
              CatalogId: this.__input.resource?.tableWithColumns?.catalogId,
              DatabaseName: this.__input.resource?.tableWithColumns?.databaseName,
              Name: this.__input.resource?.tableWithColumns?.name,
              ColumnNames: this.__input.resource?.tableWithColumns?.columnNames,
              ColumnWildcard: {
                ExcludedColumnNames: this.__input.resource?.tableWithColumns?.columnWildcard?.excludedColumnNames,
              },
            },
            DataLocation: {
              CatalogId: this.__input.resource?.dataLocation?.catalogId,
              ResourceArn: this.__input.resource?.dataLocation?.resourceArn,
            },
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPermissions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class LakeFormationResponsesListResources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LakeFormationListResourcesRequest) {
  }

  public get resourceInfoList(): shapes.LakeFormationResourceInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResources',
        service: 'LakeFormation',
        physicalResourceId: cr.PhysicalResourceId.of('LakeFormation.ListResources.ResourceInfoList'),
        outputPath: 'ResourceInfoList',
        parameters: {
          FilterConditionList: this.__input.filterConditionList,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResources.ResourceInfoList', props);
    return resource.getResponseField('ResourceInfoList') as unknown as shapes.LakeFormationResourceInfo[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResources',
        service: 'LakeFormation',
        physicalResourceId: cr.PhysicalResourceId.of('LakeFormation.ListResources.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          FilterConditionList: this.__input.filterConditionList,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResources.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

