import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class AthenaClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public batchGetNamedQuery(input: shapes.AthenaBatchGetNamedQueryInput): AthenaBatchGetNamedQuery {
    return new AthenaBatchGetNamedQuery(this, 'BatchGetNamedQuery', this.__resources, input);
  }

  public batchGetQueryExecution(input: shapes.AthenaBatchGetQueryExecutionInput): AthenaBatchGetQueryExecution {
    return new AthenaBatchGetQueryExecution(this, 'BatchGetQueryExecution', this.__resources, input);
  }

  public createDataCatalog(input: shapes.AthenaCreateDataCatalogInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataCatalog',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.CreateDataCatalog'),
        parameters: {
          Name: input.name,
          Type: input.type,
          Description: input.description,
          Parameters: input.parameters,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateDataCatalog', props);
  }

  public createNamedQuery(input: shapes.AthenaCreateNamedQueryInput): AthenaCreateNamedQuery {
    return new AthenaCreateNamedQuery(this, 'CreateNamedQuery', this.__resources, input);
  }

  public createWorkGroup(input: shapes.AthenaCreateWorkGroupInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorkGroup',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.CreateWorkGroup'),
        parameters: {
          Name: input.name,
          Configuration: {
            ResultConfiguration: {
              OutputLocation: input.configuration?.resultConfiguration?.outputLocation,
              EncryptionConfiguration: {
                EncryptionOption: input.configuration?.resultConfiguration?.encryptionConfiguration?.encryptionOption,
                KmsKey: input.configuration?.resultConfiguration?.encryptionConfiguration?.kmsKey,
              },
            },
            EnforceWorkGroupConfiguration: input.configuration?.enforceWorkGroupConfiguration,
            PublishCloudWatchMetricsEnabled: input.configuration?.publishCloudWatchMetricsEnabled,
            BytesScannedCutoffPerQuery: input.configuration?.bytesScannedCutoffPerQuery,
            RequesterPaysEnabled: input.configuration?.requesterPaysEnabled,
          },
          Description: input.description,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateWorkGroup', props);
  }

  public deleteDataCatalog(input: shapes.AthenaDeleteDataCatalogInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDataCatalog',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.DeleteDataCatalog'),
        parameters: {
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDataCatalog', props);
  }

  public deleteNamedQuery(input: shapes.AthenaDeleteNamedQueryInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteNamedQuery',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.DeleteNamedQuery'),
        parameters: {
          NamedQueryId: input.namedQueryId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteNamedQuery', props);
  }

  public deleteWorkGroup(input: shapes.AthenaDeleteWorkGroupInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteWorkGroup',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.DeleteWorkGroup'),
        parameters: {
          WorkGroup: input.workGroup,
          RecursiveDeleteOption: input.recursiveDeleteOption,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteWorkGroup', props);
  }

  public fetchDataCatalog(input: shapes.AthenaGetDataCatalogInput): AthenaFetchDataCatalog {
    return new AthenaFetchDataCatalog(this, 'FetchDataCatalog', this.__resources, input);
  }

  public fetchDatabase(input: shapes.AthenaGetDatabaseInput): AthenaFetchDatabase {
    return new AthenaFetchDatabase(this, 'FetchDatabase', this.__resources, input);
  }

  public fetchNamedQuery(input: shapes.AthenaGetNamedQueryInput): AthenaFetchNamedQuery {
    return new AthenaFetchNamedQuery(this, 'FetchNamedQuery', this.__resources, input);
  }

  public fetchQueryExecution(input: shapes.AthenaGetQueryExecutionInput): AthenaFetchQueryExecution {
    return new AthenaFetchQueryExecution(this, 'FetchQueryExecution', this.__resources, input);
  }

  public fetchQueryResults(input: shapes.AthenaGetQueryResultsInput): AthenaFetchQueryResults {
    return new AthenaFetchQueryResults(this, 'FetchQueryResults', this.__resources, input);
  }

  public fetchTableMetadata(input: shapes.AthenaGetTableMetadataInput): AthenaFetchTableMetadata {
    return new AthenaFetchTableMetadata(this, 'FetchTableMetadata', this.__resources, input);
  }

  public fetchWorkGroup(input: shapes.AthenaGetWorkGroupInput): AthenaFetchWorkGroup {
    return new AthenaFetchWorkGroup(this, 'FetchWorkGroup', this.__resources, input);
  }

  public listDataCatalogs(input: shapes.AthenaListDataCatalogsInput): AthenaListDataCatalogs {
    return new AthenaListDataCatalogs(this, 'ListDataCatalogs', this.__resources, input);
  }

  public listDatabases(input: shapes.AthenaListDatabasesInput): AthenaListDatabases {
    return new AthenaListDatabases(this, 'ListDatabases', this.__resources, input);
  }

  public listNamedQueries(input: shapes.AthenaListNamedQueriesInput): AthenaListNamedQueries {
    return new AthenaListNamedQueries(this, 'ListNamedQueries', this.__resources, input);
  }

  public listQueryExecutions(input: shapes.AthenaListQueryExecutionsInput): AthenaListQueryExecutions {
    return new AthenaListQueryExecutions(this, 'ListQueryExecutions', this.__resources, input);
  }

  public listTableMetadata(input: shapes.AthenaListTableMetadataInput): AthenaListTableMetadata {
    return new AthenaListTableMetadata(this, 'ListTableMetadata', this.__resources, input);
  }

  public listTagsForResource(input: shapes.AthenaListTagsForResourceInput): AthenaListTagsForResource {
    return new AthenaListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public listWorkGroups(input: shapes.AthenaListWorkGroupsInput): AthenaListWorkGroups {
    return new AthenaListWorkGroups(this, 'ListWorkGroups', this.__resources, input);
  }

  public startQueryExecution(input: shapes.AthenaStartQueryExecutionInput): AthenaStartQueryExecution {
    return new AthenaStartQueryExecution(this, 'StartQueryExecution', this.__resources, input);
  }

  public stopQueryExecution(input: shapes.AthenaStopQueryExecutionInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopQueryExecution',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.StopQueryExecution'),
        parameters: {
          QueryExecutionId: input.queryExecutionId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StopQueryExecution', props);
  }

  public tagResource(input: shapes.AthenaTagResourceInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.TagResource'),
        parameters: {
          ResourceARN: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.AthenaUntagResourceInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.UntagResource'),
        parameters: {
          ResourceARN: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateDataCatalog(input: shapes.AthenaUpdateDataCatalogInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataCatalog',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.UpdateDataCatalog'),
        parameters: {
          Name: input.name,
          Type: input.type,
          Description: input.description,
          Parameters: input.parameters,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateDataCatalog', props);
  }

  public updateWorkGroup(input: shapes.AthenaUpdateWorkGroupInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkGroup',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.UpdateWorkGroup'),
        parameters: {
          WorkGroup: input.workGroup,
          Description: input.description,
          ConfigurationUpdates: {
            EnforceWorkGroupConfiguration: input.configurationUpdates?.enforceWorkGroupConfiguration,
            ResultConfigurationUpdates: {
              OutputLocation: input.configurationUpdates?.resultConfigurationUpdates?.outputLocation,
              RemoveOutputLocation: input.configurationUpdates?.resultConfigurationUpdates?.removeOutputLocation,
              EncryptionConfiguration: {
                EncryptionOption: input.configurationUpdates?.resultConfigurationUpdates?.encryptionConfiguration?.encryptionOption,
                KmsKey: input.configurationUpdates?.resultConfigurationUpdates?.encryptionConfiguration?.kmsKey,
              },
              RemoveEncryptionConfiguration: input.configurationUpdates?.resultConfigurationUpdates?.removeEncryptionConfiguration,
            },
            PublishCloudWatchMetricsEnabled: input.configurationUpdates?.publishCloudWatchMetricsEnabled,
            BytesScannedCutoffPerQuery: input.configurationUpdates?.bytesScannedCutoffPerQuery,
            RemoveBytesScannedCutoffPerQuery: input.configurationUpdates?.removeBytesScannedCutoffPerQuery,
            RequesterPaysEnabled: input.configurationUpdates?.requesterPaysEnabled,
          },
          State: input.state,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateWorkGroup', props);
  }

}

export class AthenaBatchGetNamedQuery extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AthenaBatchGetNamedQueryInput) {
    super(scope, id);
  }

  public get namedQueries(): shapes.AthenaNamedQuery[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetNamedQuery',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.BatchGetNamedQuery.NamedQueries'),
        outputPath: 'NamedQueries',
        parameters: {
          NamedQueryIds: this.input.namedQueryIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetNamedQuery.NamedQueries', props);
    return resource.getResponseField('NamedQueries') as unknown as shapes.AthenaNamedQuery[];
  }

  public get unprocessedNamedQueryIds(): shapes.AthenaUnprocessedNamedQueryId[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetNamedQuery',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.BatchGetNamedQuery.UnprocessedNamedQueryIds'),
        outputPath: 'UnprocessedNamedQueryIds',
        parameters: {
          NamedQueryIds: this.input.namedQueryIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetNamedQuery.UnprocessedNamedQueryIds', props);
    return resource.getResponseField('UnprocessedNamedQueryIds') as unknown as shapes.AthenaUnprocessedNamedQueryId[];
  }

}

export class AthenaBatchGetQueryExecution extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AthenaBatchGetQueryExecutionInput) {
    super(scope, id);
  }

  public get queryExecutions(): shapes.AthenaQueryExecution[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetQueryExecution',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.BatchGetQueryExecution.QueryExecutions'),
        outputPath: 'QueryExecutions',
        parameters: {
          QueryExecutionIds: this.input.queryExecutionIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetQueryExecution.QueryExecutions', props);
    return resource.getResponseField('QueryExecutions') as unknown as shapes.AthenaQueryExecution[];
  }

  public get unprocessedQueryExecutionIds(): shapes.AthenaUnprocessedQueryExecutionId[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetQueryExecution',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.BatchGetQueryExecution.UnprocessedQueryExecutionIds'),
        outputPath: 'UnprocessedQueryExecutionIds',
        parameters: {
          QueryExecutionIds: this.input.queryExecutionIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetQueryExecution.UnprocessedQueryExecutionIds', props);
    return resource.getResponseField('UnprocessedQueryExecutionIds') as unknown as shapes.AthenaUnprocessedQueryExecutionId[];
  }

}

export class AthenaCreateNamedQuery extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AthenaCreateNamedQueryInput) {
    super(scope, id);
  }

  public get namedQueryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNamedQuery',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.CreateNamedQuery.NamedQueryId'),
        outputPath: 'NamedQueryId',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          Database: this.input.database,
          QueryString: this.input.queryString,
          ClientRequestToken: this.input.clientRequestToken,
          WorkGroup: this.input.workGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNamedQuery.NamedQueryId', props);
    return resource.getResponseField('NamedQueryId') as unknown as string;
  }

}

export class AthenaFetchDataCatalog extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AthenaGetDataCatalogInput) {
    super(scope, id);
  }

  public get dataCatalog(): AthenaFetchDataCatalogDataCatalog {
    return new AthenaFetchDataCatalogDataCatalog(this, 'DataCatalog', this.__resources, this.input);
  }

}

export class AthenaFetchDataCatalogDataCatalog extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AthenaGetDataCatalogInput) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataCatalog',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetDataCatalog.DataCatalog.Name'),
        outputPath: 'DataCatalog.Name',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataCatalog.DataCatalog.Name', props);
    return resource.getResponseField('DataCatalog.Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataCatalog',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetDataCatalog.DataCatalog.Description'),
        outputPath: 'DataCatalog.Description',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataCatalog.DataCatalog.Description', props);
    return resource.getResponseField('DataCatalog.Description') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataCatalog',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetDataCatalog.DataCatalog.Type'),
        outputPath: 'DataCatalog.Type',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataCatalog.DataCatalog.Type', props);
    return resource.getResponseField('DataCatalog.Type') as unknown as string;
  }

  public get parameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataCatalog',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetDataCatalog.DataCatalog.Parameters'),
        outputPath: 'DataCatalog.Parameters',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataCatalog.DataCatalog.Parameters', props);
    return resource.getResponseField('DataCatalog.Parameters') as unknown as Record<string, string>;
  }

}

export class AthenaFetchDatabase extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AthenaGetDatabaseInput) {
    super(scope, id);
  }

  public get database(): AthenaFetchDatabaseDatabase {
    return new AthenaFetchDatabaseDatabase(this, 'Database', this.__resources, this.input);
  }

}

export class AthenaFetchDatabaseDatabase extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AthenaGetDatabaseInput) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDatabase',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetDatabase.Database.Name'),
        outputPath: 'Database.Name',
        parameters: {
          CatalogName: this.input.catalogName,
          DatabaseName: this.input.databaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDatabase.Database.Name', props);
    return resource.getResponseField('Database.Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDatabase',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetDatabase.Database.Description'),
        outputPath: 'Database.Description',
        parameters: {
          CatalogName: this.input.catalogName,
          DatabaseName: this.input.databaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDatabase.Database.Description', props);
    return resource.getResponseField('Database.Description') as unknown as string;
  }

  public get parameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDatabase',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetDatabase.Database.Parameters'),
        outputPath: 'Database.Parameters',
        parameters: {
          CatalogName: this.input.catalogName,
          DatabaseName: this.input.databaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDatabase.Database.Parameters', props);
    return resource.getResponseField('Database.Parameters') as unknown as Record<string, string>;
  }

}

export class AthenaFetchNamedQuery extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AthenaGetNamedQueryInput) {
    super(scope, id);
  }

  public get namedQuery(): AthenaFetchNamedQueryNamedQuery {
    return new AthenaFetchNamedQueryNamedQuery(this, 'NamedQuery', this.__resources, this.input);
  }

}

export class AthenaFetchNamedQueryNamedQuery extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AthenaGetNamedQueryInput) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNamedQuery',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetNamedQuery.NamedQuery.Name'),
        outputPath: 'NamedQuery.Name',
        parameters: {
          NamedQueryId: this.input.namedQueryId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNamedQuery.NamedQuery.Name', props);
    return resource.getResponseField('NamedQuery.Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNamedQuery',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetNamedQuery.NamedQuery.Description'),
        outputPath: 'NamedQuery.Description',
        parameters: {
          NamedQueryId: this.input.namedQueryId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNamedQuery.NamedQuery.Description', props);
    return resource.getResponseField('NamedQuery.Description') as unknown as string;
  }

  public get database(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNamedQuery',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetNamedQuery.NamedQuery.Database'),
        outputPath: 'NamedQuery.Database',
        parameters: {
          NamedQueryId: this.input.namedQueryId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNamedQuery.NamedQuery.Database', props);
    return resource.getResponseField('NamedQuery.Database') as unknown as string;
  }

  public get queryString(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNamedQuery',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetNamedQuery.NamedQuery.QueryString'),
        outputPath: 'NamedQuery.QueryString',
        parameters: {
          NamedQueryId: this.input.namedQueryId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNamedQuery.NamedQuery.QueryString', props);
    return resource.getResponseField('NamedQuery.QueryString') as unknown as string;
  }

  public get namedQueryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNamedQuery',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetNamedQuery.NamedQuery.NamedQueryId'),
        outputPath: 'NamedQuery.NamedQueryId',
        parameters: {
          NamedQueryId: this.input.namedQueryId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNamedQuery.NamedQuery.NamedQueryId', props);
    return resource.getResponseField('NamedQuery.NamedQueryId') as unknown as string;
  }

  public get workGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNamedQuery',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetNamedQuery.NamedQuery.WorkGroup'),
        outputPath: 'NamedQuery.WorkGroup',
        parameters: {
          NamedQueryId: this.input.namedQueryId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNamedQuery.NamedQuery.WorkGroup', props);
    return resource.getResponseField('NamedQuery.WorkGroup') as unknown as string;
  }

}

export class AthenaFetchQueryExecution extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AthenaGetQueryExecutionInput) {
    super(scope, id);
  }

  public get queryExecution(): AthenaFetchQueryExecutionQueryExecution {
    return new AthenaFetchQueryExecutionQueryExecution(this, 'QueryExecution', this.__resources, this.input);
  }

}

export class AthenaFetchQueryExecutionQueryExecution extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AthenaGetQueryExecutionInput) {
    super(scope, id);
  }

  public get queryExecutionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getQueryExecution',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetQueryExecution.QueryExecution.QueryExecutionId'),
        outputPath: 'QueryExecution.QueryExecutionId',
        parameters: {
          QueryExecutionId: this.input.queryExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetQueryExecution.QueryExecution.QueryExecutionId', props);
    return resource.getResponseField('QueryExecution.QueryExecutionId') as unknown as string;
  }

  public get query(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getQueryExecution',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetQueryExecution.QueryExecution.Query'),
        outputPath: 'QueryExecution.Query',
        parameters: {
          QueryExecutionId: this.input.queryExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetQueryExecution.QueryExecution.Query', props);
    return resource.getResponseField('QueryExecution.Query') as unknown as string;
  }

  public get statementType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getQueryExecution',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetQueryExecution.QueryExecution.StatementType'),
        outputPath: 'QueryExecution.StatementType',
        parameters: {
          QueryExecutionId: this.input.queryExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetQueryExecution.QueryExecution.StatementType', props);
    return resource.getResponseField('QueryExecution.StatementType') as unknown as string;
  }

  public get resultConfiguration(): AthenaFetchQueryExecutionQueryExecutionResultConfiguration {
    return new AthenaFetchQueryExecutionQueryExecutionResultConfiguration(this, 'ResultConfiguration', this.__resources, this.input);
  }

  public get queryExecutionContext(): AthenaFetchQueryExecutionQueryExecutionQueryExecutionContext {
    return new AthenaFetchQueryExecutionQueryExecutionQueryExecutionContext(this, 'QueryExecutionContext', this.__resources, this.input);
  }

  public get status(): AthenaFetchQueryExecutionQueryExecutionStatus {
    return new AthenaFetchQueryExecutionQueryExecutionStatus(this, 'Status', this.__resources, this.input);
  }

  public get statistics(): AthenaFetchQueryExecutionQueryExecutionStatistics {
    return new AthenaFetchQueryExecutionQueryExecutionStatistics(this, 'Statistics', this.__resources, this.input);
  }

  public get workGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getQueryExecution',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetQueryExecution.QueryExecution.WorkGroup'),
        outputPath: 'QueryExecution.WorkGroup',
        parameters: {
          QueryExecutionId: this.input.queryExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetQueryExecution.QueryExecution.WorkGroup', props);
    return resource.getResponseField('QueryExecution.WorkGroup') as unknown as string;
  }

}

export class AthenaFetchQueryExecutionQueryExecutionResultConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AthenaGetQueryExecutionInput) {
    super(scope, id);
  }

  public get outputLocation(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getQueryExecution',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetQueryExecution.QueryExecution.ResultConfiguration.OutputLocation'),
        outputPath: 'QueryExecution.ResultConfiguration.OutputLocation',
        parameters: {
          QueryExecutionId: this.input.queryExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetQueryExecution.QueryExecution.ResultConfiguration.OutputLocation', props);
    return resource.getResponseField('QueryExecution.ResultConfiguration.OutputLocation') as unknown as string;
  }

  public get encryptionConfiguration(): AthenaFetchQueryExecutionQueryExecutionResultConfigurationEncryptionConfiguration {
    return new AthenaFetchQueryExecutionQueryExecutionResultConfigurationEncryptionConfiguration(this, 'EncryptionConfiguration', this.__resources, this.input);
  }

}

export class AthenaFetchQueryExecutionQueryExecutionResultConfigurationEncryptionConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AthenaGetQueryExecutionInput) {
    super(scope, id);
  }

  public get encryptionOption(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getQueryExecution',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetQueryExecution.QueryExecution.ResultConfiguration.EncryptionConfiguration.EncryptionOption'),
        outputPath: 'QueryExecution.ResultConfiguration.EncryptionConfiguration.EncryptionOption',
        parameters: {
          QueryExecutionId: this.input.queryExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetQueryExecution.QueryExecution.ResultConfiguration.EncryptionConfiguration.EncryptionOption', props);
    return resource.getResponseField('QueryExecution.ResultConfiguration.EncryptionConfiguration.EncryptionOption') as unknown as string;
  }

  public get kmsKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getQueryExecution',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetQueryExecution.QueryExecution.ResultConfiguration.EncryptionConfiguration.KmsKey'),
        outputPath: 'QueryExecution.ResultConfiguration.EncryptionConfiguration.KmsKey',
        parameters: {
          QueryExecutionId: this.input.queryExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetQueryExecution.QueryExecution.ResultConfiguration.EncryptionConfiguration.KmsKey', props);
    return resource.getResponseField('QueryExecution.ResultConfiguration.EncryptionConfiguration.KmsKey') as unknown as string;
  }

}

export class AthenaFetchQueryExecutionQueryExecutionQueryExecutionContext extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AthenaGetQueryExecutionInput) {
    super(scope, id);
  }

  public get database(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getQueryExecution',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetQueryExecution.QueryExecution.QueryExecutionContext.Database'),
        outputPath: 'QueryExecution.QueryExecutionContext.Database',
        parameters: {
          QueryExecutionId: this.input.queryExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetQueryExecution.QueryExecution.QueryExecutionContext.Database', props);
    return resource.getResponseField('QueryExecution.QueryExecutionContext.Database') as unknown as string;
  }

  public get catalog(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getQueryExecution',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetQueryExecution.QueryExecution.QueryExecutionContext.Catalog'),
        outputPath: 'QueryExecution.QueryExecutionContext.Catalog',
        parameters: {
          QueryExecutionId: this.input.queryExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetQueryExecution.QueryExecution.QueryExecutionContext.Catalog', props);
    return resource.getResponseField('QueryExecution.QueryExecutionContext.Catalog') as unknown as string;
  }

}

export class AthenaFetchQueryExecutionQueryExecutionStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AthenaGetQueryExecutionInput) {
    super(scope, id);
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getQueryExecution',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetQueryExecution.QueryExecution.Status.State'),
        outputPath: 'QueryExecution.Status.State',
        parameters: {
          QueryExecutionId: this.input.queryExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetQueryExecution.QueryExecution.Status.State', props);
    return resource.getResponseField('QueryExecution.Status.State') as unknown as string;
  }

  public get stateChangeReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getQueryExecution',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetQueryExecution.QueryExecution.Status.StateChangeReason'),
        outputPath: 'QueryExecution.Status.StateChangeReason',
        parameters: {
          QueryExecutionId: this.input.queryExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetQueryExecution.QueryExecution.Status.StateChangeReason', props);
    return resource.getResponseField('QueryExecution.Status.StateChangeReason') as unknown as string;
  }

  public get submissionDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getQueryExecution',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetQueryExecution.QueryExecution.Status.SubmissionDateTime'),
        outputPath: 'QueryExecution.Status.SubmissionDateTime',
        parameters: {
          QueryExecutionId: this.input.queryExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetQueryExecution.QueryExecution.Status.SubmissionDateTime', props);
    return resource.getResponseField('QueryExecution.Status.SubmissionDateTime') as unknown as string;
  }

  public get completionDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getQueryExecution',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetQueryExecution.QueryExecution.Status.CompletionDateTime'),
        outputPath: 'QueryExecution.Status.CompletionDateTime',
        parameters: {
          QueryExecutionId: this.input.queryExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetQueryExecution.QueryExecution.Status.CompletionDateTime', props);
    return resource.getResponseField('QueryExecution.Status.CompletionDateTime') as unknown as string;
  }

}

export class AthenaFetchQueryExecutionQueryExecutionStatistics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AthenaGetQueryExecutionInput) {
    super(scope, id);
  }

  public get engineExecutionTimeInMillis(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getQueryExecution',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetQueryExecution.QueryExecution.Statistics.EngineExecutionTimeInMillis'),
        outputPath: 'QueryExecution.Statistics.EngineExecutionTimeInMillis',
        parameters: {
          QueryExecutionId: this.input.queryExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetQueryExecution.QueryExecution.Statistics.EngineExecutionTimeInMillis', props);
    return resource.getResponseField('QueryExecution.Statistics.EngineExecutionTimeInMillis') as unknown as number;
  }

  public get dataScannedInBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getQueryExecution',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetQueryExecution.QueryExecution.Statistics.DataScannedInBytes'),
        outputPath: 'QueryExecution.Statistics.DataScannedInBytes',
        parameters: {
          QueryExecutionId: this.input.queryExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetQueryExecution.QueryExecution.Statistics.DataScannedInBytes', props);
    return resource.getResponseField('QueryExecution.Statistics.DataScannedInBytes') as unknown as number;
  }

  public get dataManifestLocation(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getQueryExecution',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetQueryExecution.QueryExecution.Statistics.DataManifestLocation'),
        outputPath: 'QueryExecution.Statistics.DataManifestLocation',
        parameters: {
          QueryExecutionId: this.input.queryExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetQueryExecution.QueryExecution.Statistics.DataManifestLocation', props);
    return resource.getResponseField('QueryExecution.Statistics.DataManifestLocation') as unknown as string;
  }

  public get totalExecutionTimeInMillis(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getQueryExecution',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetQueryExecution.QueryExecution.Statistics.TotalExecutionTimeInMillis'),
        outputPath: 'QueryExecution.Statistics.TotalExecutionTimeInMillis',
        parameters: {
          QueryExecutionId: this.input.queryExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetQueryExecution.QueryExecution.Statistics.TotalExecutionTimeInMillis', props);
    return resource.getResponseField('QueryExecution.Statistics.TotalExecutionTimeInMillis') as unknown as number;
  }

  public get queryQueueTimeInMillis(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getQueryExecution',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetQueryExecution.QueryExecution.Statistics.QueryQueueTimeInMillis'),
        outputPath: 'QueryExecution.Statistics.QueryQueueTimeInMillis',
        parameters: {
          QueryExecutionId: this.input.queryExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetQueryExecution.QueryExecution.Statistics.QueryQueueTimeInMillis', props);
    return resource.getResponseField('QueryExecution.Statistics.QueryQueueTimeInMillis') as unknown as number;
  }

  public get queryPlanningTimeInMillis(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getQueryExecution',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetQueryExecution.QueryExecution.Statistics.QueryPlanningTimeInMillis'),
        outputPath: 'QueryExecution.Statistics.QueryPlanningTimeInMillis',
        parameters: {
          QueryExecutionId: this.input.queryExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetQueryExecution.QueryExecution.Statistics.QueryPlanningTimeInMillis', props);
    return resource.getResponseField('QueryExecution.Statistics.QueryPlanningTimeInMillis') as unknown as number;
  }

  public get serviceProcessingTimeInMillis(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getQueryExecution',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetQueryExecution.QueryExecution.Statistics.ServiceProcessingTimeInMillis'),
        outputPath: 'QueryExecution.Statistics.ServiceProcessingTimeInMillis',
        parameters: {
          QueryExecutionId: this.input.queryExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetQueryExecution.QueryExecution.Statistics.ServiceProcessingTimeInMillis', props);
    return resource.getResponseField('QueryExecution.Statistics.ServiceProcessingTimeInMillis') as unknown as number;
  }

}

export class AthenaFetchQueryResults extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AthenaGetQueryResultsInput) {
    super(scope, id);
  }

  public get updateCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getQueryResults',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetQueryResults.UpdateCount'),
        outputPath: 'UpdateCount',
        parameters: {
          QueryExecutionId: this.input.queryExecutionId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetQueryResults.UpdateCount', props);
    return resource.getResponseField('UpdateCount') as unknown as number;
  }

  public get resultSet(): AthenaFetchQueryResultsResultSet {
    return new AthenaFetchQueryResultsResultSet(this, 'ResultSet', this.__resources, this.input);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getQueryResults',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetQueryResults.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          QueryExecutionId: this.input.queryExecutionId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetQueryResults.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AthenaFetchQueryResultsResultSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AthenaGetQueryResultsInput) {
    super(scope, id);
  }

  public get rows(): shapes.AthenaRow[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getQueryResults',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetQueryResults.ResultSet.Rows'),
        outputPath: 'ResultSet.Rows',
        parameters: {
          QueryExecutionId: this.input.queryExecutionId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetQueryResults.ResultSet.Rows', props);
    return resource.getResponseField('ResultSet.Rows') as unknown as shapes.AthenaRow[];
  }

  public get resultSetMetadata(): AthenaFetchQueryResultsResultSetResultSetMetadata {
    return new AthenaFetchQueryResultsResultSetResultSetMetadata(this, 'ResultSetMetadata', this.__resources, this.input);
  }

}

export class AthenaFetchQueryResultsResultSetResultSetMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AthenaGetQueryResultsInput) {
    super(scope, id);
  }

  public get columnInfo(): shapes.AthenaColumnInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getQueryResults',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetQueryResults.ResultSet.ResultSetMetadata.ColumnInfo'),
        outputPath: 'ResultSet.ResultSetMetadata.ColumnInfo',
        parameters: {
          QueryExecutionId: this.input.queryExecutionId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetQueryResults.ResultSet.ResultSetMetadata.ColumnInfo', props);
    return resource.getResponseField('ResultSet.ResultSetMetadata.ColumnInfo') as unknown as shapes.AthenaColumnInfo[];
  }

}

export class AthenaFetchTableMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AthenaGetTableMetadataInput) {
    super(scope, id);
  }

  public get tableMetadata(): AthenaFetchTableMetadataTableMetadata {
    return new AthenaFetchTableMetadataTableMetadata(this, 'TableMetadata', this.__resources, this.input);
  }

}

export class AthenaFetchTableMetadataTableMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AthenaGetTableMetadataInput) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableMetadata',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetTableMetadata.TableMetadata.Name'),
        outputPath: 'TableMetadata.Name',
        parameters: {
          CatalogName: this.input.catalogName,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableMetadata.TableMetadata.Name', props);
    return resource.getResponseField('TableMetadata.Name') as unknown as string;
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableMetadata',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetTableMetadata.TableMetadata.CreateTime'),
        outputPath: 'TableMetadata.CreateTime',
        parameters: {
          CatalogName: this.input.catalogName,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableMetadata.TableMetadata.CreateTime', props);
    return resource.getResponseField('TableMetadata.CreateTime') as unknown as string;
  }

  public get lastAccessTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableMetadata',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetTableMetadata.TableMetadata.LastAccessTime'),
        outputPath: 'TableMetadata.LastAccessTime',
        parameters: {
          CatalogName: this.input.catalogName,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableMetadata.TableMetadata.LastAccessTime', props);
    return resource.getResponseField('TableMetadata.LastAccessTime') as unknown as string;
  }

  public get tableType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableMetadata',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetTableMetadata.TableMetadata.TableType'),
        outputPath: 'TableMetadata.TableType',
        parameters: {
          CatalogName: this.input.catalogName,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableMetadata.TableMetadata.TableType', props);
    return resource.getResponseField('TableMetadata.TableType') as unknown as string;
  }

  public get columns(): shapes.AthenaColumn[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableMetadata',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetTableMetadata.TableMetadata.Columns'),
        outputPath: 'TableMetadata.Columns',
        parameters: {
          CatalogName: this.input.catalogName,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableMetadata.TableMetadata.Columns', props);
    return resource.getResponseField('TableMetadata.Columns') as unknown as shapes.AthenaColumn[];
  }

  public get partitionKeys(): shapes.AthenaColumn[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableMetadata',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetTableMetadata.TableMetadata.PartitionKeys'),
        outputPath: 'TableMetadata.PartitionKeys',
        parameters: {
          CatalogName: this.input.catalogName,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableMetadata.TableMetadata.PartitionKeys', props);
    return resource.getResponseField('TableMetadata.PartitionKeys') as unknown as shapes.AthenaColumn[];
  }

  public get parameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableMetadata',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetTableMetadata.TableMetadata.Parameters'),
        outputPath: 'TableMetadata.Parameters',
        parameters: {
          CatalogName: this.input.catalogName,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableMetadata.TableMetadata.Parameters', props);
    return resource.getResponseField('TableMetadata.Parameters') as unknown as Record<string, string>;
  }

}

export class AthenaFetchWorkGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AthenaGetWorkGroupInput) {
    super(scope, id);
  }

  public get workGroup(): AthenaFetchWorkGroupWorkGroup {
    return new AthenaFetchWorkGroupWorkGroup(this, 'WorkGroup', this.__resources, this.input);
  }

}

export class AthenaFetchWorkGroupWorkGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AthenaGetWorkGroupInput) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkGroup',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetWorkGroup.WorkGroup.Name'),
        outputPath: 'WorkGroup.Name',
        parameters: {
          WorkGroup: this.input.workGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkGroup.WorkGroup.Name', props);
    return resource.getResponseField('WorkGroup.Name') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkGroup',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetWorkGroup.WorkGroup.State'),
        outputPath: 'WorkGroup.State',
        parameters: {
          WorkGroup: this.input.workGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkGroup.WorkGroup.State', props);
    return resource.getResponseField('WorkGroup.State') as unknown as string;
  }

  public get configuration(): AthenaFetchWorkGroupWorkGroupConfiguration {
    return new AthenaFetchWorkGroupWorkGroupConfiguration(this, 'Configuration', this.__resources, this.input);
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkGroup',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetWorkGroup.WorkGroup.Description'),
        outputPath: 'WorkGroup.Description',
        parameters: {
          WorkGroup: this.input.workGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkGroup.WorkGroup.Description', props);
    return resource.getResponseField('WorkGroup.Description') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkGroup',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetWorkGroup.WorkGroup.CreationTime'),
        outputPath: 'WorkGroup.CreationTime',
        parameters: {
          WorkGroup: this.input.workGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkGroup.WorkGroup.CreationTime', props);
    return resource.getResponseField('WorkGroup.CreationTime') as unknown as string;
  }

}

export class AthenaFetchWorkGroupWorkGroupConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AthenaGetWorkGroupInput) {
    super(scope, id);
  }

  public get resultConfiguration(): AthenaFetchWorkGroupWorkGroupConfigurationResultConfiguration {
    return new AthenaFetchWorkGroupWorkGroupConfigurationResultConfiguration(this, 'ResultConfiguration', this.__resources, this.input);
  }

  public get enforceWorkGroupConfiguration(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkGroup',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetWorkGroup.WorkGroup.Configuration.EnforceWorkGroupConfiguration'),
        outputPath: 'WorkGroup.Configuration.EnforceWorkGroupConfiguration',
        parameters: {
          WorkGroup: this.input.workGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkGroup.WorkGroup.Configuration.EnforceWorkGroupConfiguration', props);
    return resource.getResponseField('WorkGroup.Configuration.EnforceWorkGroupConfiguration') as unknown as boolean;
  }

  public get publishCloudWatchMetricsEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkGroup',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetWorkGroup.WorkGroup.Configuration.PublishCloudWatchMetricsEnabled'),
        outputPath: 'WorkGroup.Configuration.PublishCloudWatchMetricsEnabled',
        parameters: {
          WorkGroup: this.input.workGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkGroup.WorkGroup.Configuration.PublishCloudWatchMetricsEnabled', props);
    return resource.getResponseField('WorkGroup.Configuration.PublishCloudWatchMetricsEnabled') as unknown as boolean;
  }

  public get bytesScannedCutoffPerQuery(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkGroup',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetWorkGroup.WorkGroup.Configuration.BytesScannedCutoffPerQuery'),
        outputPath: 'WorkGroup.Configuration.BytesScannedCutoffPerQuery',
        parameters: {
          WorkGroup: this.input.workGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkGroup.WorkGroup.Configuration.BytesScannedCutoffPerQuery', props);
    return resource.getResponseField('WorkGroup.Configuration.BytesScannedCutoffPerQuery') as unknown as number;
  }

  public get requesterPaysEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkGroup',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetWorkGroup.WorkGroup.Configuration.RequesterPaysEnabled'),
        outputPath: 'WorkGroup.Configuration.RequesterPaysEnabled',
        parameters: {
          WorkGroup: this.input.workGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkGroup.WorkGroup.Configuration.RequesterPaysEnabled', props);
    return resource.getResponseField('WorkGroup.Configuration.RequesterPaysEnabled') as unknown as boolean;
  }

}

export class AthenaFetchWorkGroupWorkGroupConfigurationResultConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AthenaGetWorkGroupInput) {
    super(scope, id);
  }

  public get outputLocation(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkGroup',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetWorkGroup.WorkGroup.Configuration.ResultConfiguration.OutputLocation'),
        outputPath: 'WorkGroup.Configuration.ResultConfiguration.OutputLocation',
        parameters: {
          WorkGroup: this.input.workGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkGroup.WorkGroup.Configuration.ResultConfiguration.OutputLocation', props);
    return resource.getResponseField('WorkGroup.Configuration.ResultConfiguration.OutputLocation') as unknown as string;
  }

  public get encryptionConfiguration(): AthenaFetchWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration {
    return new AthenaFetchWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration(this, 'EncryptionConfiguration', this.__resources, this.input);
  }

}

export class AthenaFetchWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AthenaGetWorkGroupInput) {
    super(scope, id);
  }

  public get encryptionOption(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkGroup',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetWorkGroup.WorkGroup.Configuration.ResultConfiguration.EncryptionConfiguration.EncryptionOption'),
        outputPath: 'WorkGroup.Configuration.ResultConfiguration.EncryptionConfiguration.EncryptionOption',
        parameters: {
          WorkGroup: this.input.workGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkGroup.WorkGroup.Configuration.ResultConfiguration.EncryptionConfiguration.EncryptionOption', props);
    return resource.getResponseField('WorkGroup.Configuration.ResultConfiguration.EncryptionConfiguration.EncryptionOption') as unknown as string;
  }

  public get kmsKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkGroup',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetWorkGroup.WorkGroup.Configuration.ResultConfiguration.EncryptionConfiguration.KmsKey'),
        outputPath: 'WorkGroup.Configuration.ResultConfiguration.EncryptionConfiguration.KmsKey',
        parameters: {
          WorkGroup: this.input.workGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkGroup.WorkGroup.Configuration.ResultConfiguration.EncryptionConfiguration.KmsKey', props);
    return resource.getResponseField('WorkGroup.Configuration.ResultConfiguration.EncryptionConfiguration.KmsKey') as unknown as string;
  }

}

export class AthenaListDataCatalogs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AthenaListDataCatalogsInput) {
    super(scope, id);
  }

  public get dataCatalogsSummary(): shapes.AthenaDataCatalogSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDataCatalogs',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.ListDataCatalogs.DataCatalogsSummary'),
        outputPath: 'DataCatalogsSummary',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDataCatalogs.DataCatalogsSummary', props);
    return resource.getResponseField('DataCatalogsSummary') as unknown as shapes.AthenaDataCatalogSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDataCatalogs',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.ListDataCatalogs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDataCatalogs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AthenaListDatabases extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AthenaListDatabasesInput) {
    super(scope, id);
  }

  public get databaseList(): shapes.AthenaDatabase[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDatabases',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.ListDatabases.DatabaseList'),
        outputPath: 'DatabaseList',
        parameters: {
          CatalogName: this.input.catalogName,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDatabases.DatabaseList', props);
    return resource.getResponseField('DatabaseList') as unknown as shapes.AthenaDatabase[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDatabases',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.ListDatabases.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CatalogName: this.input.catalogName,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDatabases.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AthenaListNamedQueries extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AthenaListNamedQueriesInput) {
    super(scope, id);
  }

  public get namedQueryIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listNamedQueries',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.ListNamedQueries.NamedQueryIds'),
        outputPath: 'NamedQueryIds',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          WorkGroup: this.input.workGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListNamedQueries.NamedQueryIds', props);
    return resource.getResponseField('NamedQueryIds') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listNamedQueries',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.ListNamedQueries.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          WorkGroup: this.input.workGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListNamedQueries.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AthenaListQueryExecutions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AthenaListQueryExecutionsInput) {
    super(scope, id);
  }

  public get queryExecutionIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listQueryExecutions',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.ListQueryExecutions.QueryExecutionIds'),
        outputPath: 'QueryExecutionIds',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          WorkGroup: this.input.workGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListQueryExecutions.QueryExecutionIds', props);
    return resource.getResponseField('QueryExecutionIds') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listQueryExecutions',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.ListQueryExecutions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          WorkGroup: this.input.workGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListQueryExecutions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AthenaListTableMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AthenaListTableMetadataInput) {
    super(scope, id);
  }

  public get tableMetadataList(): shapes.AthenaTableMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTableMetadata',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.ListTableMetadata.TableMetadataList'),
        outputPath: 'TableMetadataList',
        parameters: {
          CatalogName: this.input.catalogName,
          DatabaseName: this.input.databaseName,
          Expression: this.input.expression,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTableMetadata.TableMetadataList', props);
    return resource.getResponseField('TableMetadataList') as unknown as shapes.AthenaTableMetadata[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTableMetadata',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.ListTableMetadata.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CatalogName: this.input.catalogName,
          DatabaseName: this.input.databaseName,
          Expression: this.input.expression,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTableMetadata.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AthenaListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AthenaListTagsForResourceInput) {
    super(scope, id);
  }

  public get tags(): shapes.AthenaTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceARN: this.input.resourceArn,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.AthenaTag[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.ListTagsForResource.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ResourceARN: this.input.resourceArn,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AthenaListWorkGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AthenaListWorkGroupsInput) {
    super(scope, id);
  }

  public get workGroups(): shapes.AthenaWorkGroupSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWorkGroups',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.ListWorkGroups.WorkGroups'),
        outputPath: 'WorkGroups',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListWorkGroups.WorkGroups', props);
    return resource.getResponseField('WorkGroups') as unknown as shapes.AthenaWorkGroupSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWorkGroups',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.ListWorkGroups.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListWorkGroups.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AthenaStartQueryExecution extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AthenaStartQueryExecutionInput) {
    super(scope, id);
  }

  public get queryExecutionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startQueryExecution',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.StartQueryExecution.QueryExecutionId'),
        outputPath: 'QueryExecutionId',
        parameters: {
          QueryString: this.input.queryString,
          ClientRequestToken: this.input.clientRequestToken,
          QueryExecutionContext: {
            Database: this.input.queryExecutionContext?.database,
            Catalog: this.input.queryExecutionContext?.catalog,
          },
          ResultConfiguration: {
            OutputLocation: this.input.resultConfiguration?.outputLocation,
            EncryptionConfiguration: {
              EncryptionOption: this.input.resultConfiguration?.encryptionConfiguration?.encryptionOption,
              KmsKey: this.input.resultConfiguration?.encryptionConfiguration?.kmsKey,
            },
          },
          WorkGroup: this.input.workGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartQueryExecution.QueryExecutionId', props);
    return resource.getResponseField('QueryExecutionId') as unknown as string;
  }

}

