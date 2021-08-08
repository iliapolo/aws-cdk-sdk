import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class AthenaClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public batchGetNamedQuery(input: shapes.AthenaBatchGetNamedQueryInput): AthenaResponsesBatchGetNamedQuery {
    return new AthenaResponsesBatchGetNamedQuery(this, this.__resources, input);
  }

  public batchGetQueryExecution(input: shapes.AthenaBatchGetQueryExecutionInput): AthenaResponsesBatchGetQueryExecution {
    return new AthenaResponsesBatchGetQueryExecution(this, this.__resources, input);
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

  public createNamedQuery(input: shapes.AthenaCreateNamedQueryInput): AthenaResponsesCreateNamedQuery {
    return new AthenaResponsesCreateNamedQuery(this, this.__resources, input);
  }

  public createPreparedStatement(input: shapes.AthenaCreatePreparedStatementInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPreparedStatement',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.CreatePreparedStatement'),
        parameters: {
          StatementName: input.statementName,
          WorkGroup: input.workGroup,
          QueryStatement: input.queryStatement,
          Description: input.description,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreatePreparedStatement', props);
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
            EngineVersion: {
              SelectedEngineVersion: input.configuration?.engineVersion?.selectedEngineVersion,
              EffectiveEngineVersion: input.configuration?.engineVersion?.effectiveEngineVersion,
            },
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

  public deletePreparedStatement(input: shapes.AthenaDeletePreparedStatementInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePreparedStatement',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.DeletePreparedStatement'),
        parameters: {
          StatementName: input.statementName,
          WorkGroup: input.workGroup,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeletePreparedStatement', props);
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

  public fetchDataCatalog(input: shapes.AthenaGetDataCatalogInput): AthenaResponsesFetchDataCatalog {
    return new AthenaResponsesFetchDataCatalog(this, this.__resources, input);
  }

  public fetchDatabase(input: shapes.AthenaGetDatabaseInput): AthenaResponsesFetchDatabase {
    return new AthenaResponsesFetchDatabase(this, this.__resources, input);
  }

  public fetchNamedQuery(input: shapes.AthenaGetNamedQueryInput): AthenaResponsesFetchNamedQuery {
    return new AthenaResponsesFetchNamedQuery(this, this.__resources, input);
  }

  public fetchPreparedStatement(input: shapes.AthenaGetPreparedStatementInput): AthenaResponsesFetchPreparedStatement {
    return new AthenaResponsesFetchPreparedStatement(this, this.__resources, input);
  }

  public fetchQueryExecution(input: shapes.AthenaGetQueryExecutionInput): AthenaResponsesFetchQueryExecution {
    return new AthenaResponsesFetchQueryExecution(this, this.__resources, input);
  }

  public fetchQueryResults(input: shapes.AthenaGetQueryResultsInput): AthenaResponsesFetchQueryResults {
    return new AthenaResponsesFetchQueryResults(this, this.__resources, input);
  }

  public fetchTableMetadata(input: shapes.AthenaGetTableMetadataInput): AthenaResponsesFetchTableMetadata {
    return new AthenaResponsesFetchTableMetadata(this, this.__resources, input);
  }

  public fetchWorkGroup(input: shapes.AthenaGetWorkGroupInput): AthenaResponsesFetchWorkGroup {
    return new AthenaResponsesFetchWorkGroup(this, this.__resources, input);
  }

  public listDataCatalogs(input: shapes.AthenaListDataCatalogsInput): AthenaResponsesListDataCatalogs {
    return new AthenaResponsesListDataCatalogs(this, this.__resources, input);
  }

  public listDatabases(input: shapes.AthenaListDatabasesInput): AthenaResponsesListDatabases {
    return new AthenaResponsesListDatabases(this, this.__resources, input);
  }

  public listEngineVersions(input: shapes.AthenaListEngineVersionsInput): AthenaResponsesListEngineVersions {
    return new AthenaResponsesListEngineVersions(this, this.__resources, input);
  }

  public listNamedQueries(input: shapes.AthenaListNamedQueriesInput): AthenaResponsesListNamedQueries {
    return new AthenaResponsesListNamedQueries(this, this.__resources, input);
  }

  public listPreparedStatements(input: shapes.AthenaListPreparedStatementsInput): AthenaResponsesListPreparedStatements {
    return new AthenaResponsesListPreparedStatements(this, this.__resources, input);
  }

  public listQueryExecutions(input: shapes.AthenaListQueryExecutionsInput): AthenaResponsesListQueryExecutions {
    return new AthenaResponsesListQueryExecutions(this, this.__resources, input);
  }

  public listTableMetadata(input: shapes.AthenaListTableMetadataInput): AthenaResponsesListTableMetadata {
    return new AthenaResponsesListTableMetadata(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.AthenaListTagsForResourceInput): AthenaResponsesListTagsForResource {
    return new AthenaResponsesListTagsForResource(this, this.__resources, input);
  }

  public listWorkGroups(input: shapes.AthenaListWorkGroupsInput): AthenaResponsesListWorkGroups {
    return new AthenaResponsesListWorkGroups(this, this.__resources, input);
  }

  public startQueryExecution(input: shapes.AthenaStartQueryExecutionInput): AthenaResponsesStartQueryExecution {
    return new AthenaResponsesStartQueryExecution(this, this.__resources, input);
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

  public updatePreparedStatement(input: shapes.AthenaUpdatePreparedStatementInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePreparedStatement',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.UpdatePreparedStatement'),
        parameters: {
          StatementName: input.statementName,
          WorkGroup: input.workGroup,
          QueryStatement: input.queryStatement,
          Description: input.description,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdatePreparedStatement', props);
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
            EngineVersion: {
              SelectedEngineVersion: input.configurationUpdates?.engineVersion?.selectedEngineVersion,
              EffectiveEngineVersion: input.configurationUpdates?.engineVersion?.effectiveEngineVersion,
            },
          },
          State: input.state,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateWorkGroup', props);
  }

}

export class AthenaResponsesBatchGetNamedQuery {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AthenaBatchGetNamedQueryInput) {
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
          NamedQueryIds: this.__input.namedQueryIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetNamedQuery.NamedQueries', props);
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
          NamedQueryIds: this.__input.namedQueryIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetNamedQuery.UnprocessedNamedQueryIds', props);
    return resource.getResponseField('UnprocessedNamedQueryIds') as unknown as shapes.AthenaUnprocessedNamedQueryId[];
  }

}

export class AthenaResponsesBatchGetQueryExecution {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AthenaBatchGetQueryExecutionInput) {
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
          QueryExecutionIds: this.__input.queryExecutionIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetQueryExecution.QueryExecutions', props);
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
          QueryExecutionIds: this.__input.queryExecutionIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetQueryExecution.UnprocessedQueryExecutionIds', props);
    return resource.getResponseField('UnprocessedQueryExecutionIds') as unknown as shapes.AthenaUnprocessedQueryExecutionId[];
  }

}

export class AthenaResponsesCreateNamedQuery {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AthenaCreateNamedQueryInput) {
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
          Name: this.__input.name,
          Description: this.__input.description,
          Database: this.__input.database,
          QueryString: this.__input.queryString,
          ClientRequestToken: this.__input.clientRequestToken,
          WorkGroup: this.__input.workGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNamedQuery.NamedQueryId', props);
    return resource.getResponseField('NamedQueryId') as unknown as string;
  }

}

export class AthenaResponsesFetchDataCatalog {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AthenaGetDataCatalogInput) {
  }

  public get dataCatalog(): AthenaResponsesFetchDataCatalogDataCatalog {
    return new AthenaResponsesFetchDataCatalogDataCatalog(this.__scope, this.__resources, this.__input);
  }

}

export class AthenaResponsesFetchDataCatalogDataCatalog {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AthenaGetDataCatalogInput) {
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataCatalog.DataCatalog.Name', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataCatalog.DataCatalog.Description', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataCatalog.DataCatalog.Type', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataCatalog.DataCatalog.Parameters', props);
    return resource.getResponseField('DataCatalog.Parameters') as unknown as Record<string, string>;
  }

}

export class AthenaResponsesFetchDatabase {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AthenaGetDatabaseInput) {
  }

  public get database(): AthenaResponsesFetchDatabaseDatabase {
    return new AthenaResponsesFetchDatabaseDatabase(this.__scope, this.__resources, this.__input);
  }

}

export class AthenaResponsesFetchDatabaseDatabase {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AthenaGetDatabaseInput) {
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
          CatalogName: this.__input.catalogName,
          DatabaseName: this.__input.databaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDatabase.Database.Name', props);
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
          CatalogName: this.__input.catalogName,
          DatabaseName: this.__input.databaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDatabase.Database.Description', props);
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
          CatalogName: this.__input.catalogName,
          DatabaseName: this.__input.databaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDatabase.Database.Parameters', props);
    return resource.getResponseField('Database.Parameters') as unknown as Record<string, string>;
  }

}

export class AthenaResponsesFetchNamedQuery {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AthenaGetNamedQueryInput) {
  }

  public get namedQuery(): AthenaResponsesFetchNamedQueryNamedQuery {
    return new AthenaResponsesFetchNamedQueryNamedQuery(this.__scope, this.__resources, this.__input);
  }

}

export class AthenaResponsesFetchNamedQueryNamedQuery {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AthenaGetNamedQueryInput) {
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
          NamedQueryId: this.__input.namedQueryId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNamedQuery.NamedQuery.Name', props);
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
          NamedQueryId: this.__input.namedQueryId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNamedQuery.NamedQuery.Description', props);
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
          NamedQueryId: this.__input.namedQueryId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNamedQuery.NamedQuery.Database', props);
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
          NamedQueryId: this.__input.namedQueryId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNamedQuery.NamedQuery.QueryString', props);
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
          NamedQueryId: this.__input.namedQueryId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNamedQuery.NamedQuery.NamedQueryId', props);
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
          NamedQueryId: this.__input.namedQueryId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNamedQuery.NamedQuery.WorkGroup', props);
    return resource.getResponseField('NamedQuery.WorkGroup') as unknown as string;
  }

}

export class AthenaResponsesFetchPreparedStatement {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AthenaGetPreparedStatementInput) {
  }

  public get preparedStatement(): AthenaResponsesFetchPreparedStatementPreparedStatement {
    return new AthenaResponsesFetchPreparedStatementPreparedStatement(this.__scope, this.__resources, this.__input);
  }

}

export class AthenaResponsesFetchPreparedStatementPreparedStatement {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AthenaGetPreparedStatementInput) {
  }

  public get statementName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPreparedStatement',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetPreparedStatement.PreparedStatement.StatementName'),
        outputPath: 'PreparedStatement.StatementName',
        parameters: {
          StatementName: this.__input.statementName,
          WorkGroup: this.__input.workGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPreparedStatement.PreparedStatement.StatementName', props);
    return resource.getResponseField('PreparedStatement.StatementName') as unknown as string;
  }

  public get queryStatement(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPreparedStatement',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetPreparedStatement.PreparedStatement.QueryStatement'),
        outputPath: 'PreparedStatement.QueryStatement',
        parameters: {
          StatementName: this.__input.statementName,
          WorkGroup: this.__input.workGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPreparedStatement.PreparedStatement.QueryStatement', props);
    return resource.getResponseField('PreparedStatement.QueryStatement') as unknown as string;
  }

  public get workGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPreparedStatement',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetPreparedStatement.PreparedStatement.WorkGroupName'),
        outputPath: 'PreparedStatement.WorkGroupName',
        parameters: {
          StatementName: this.__input.statementName,
          WorkGroup: this.__input.workGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPreparedStatement.PreparedStatement.WorkGroupName', props);
    return resource.getResponseField('PreparedStatement.WorkGroupName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPreparedStatement',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetPreparedStatement.PreparedStatement.Description'),
        outputPath: 'PreparedStatement.Description',
        parameters: {
          StatementName: this.__input.statementName,
          WorkGroup: this.__input.workGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPreparedStatement.PreparedStatement.Description', props);
    return resource.getResponseField('PreparedStatement.Description') as unknown as string;
  }

  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPreparedStatement',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetPreparedStatement.PreparedStatement.LastModifiedTime'),
        outputPath: 'PreparedStatement.LastModifiedTime',
        parameters: {
          StatementName: this.__input.statementName,
          WorkGroup: this.__input.workGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPreparedStatement.PreparedStatement.LastModifiedTime', props);
    return resource.getResponseField('PreparedStatement.LastModifiedTime') as unknown as string;
  }

}

export class AthenaResponsesFetchQueryExecution {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AthenaGetQueryExecutionInput) {
  }

  public get queryExecution(): AthenaResponsesFetchQueryExecutionQueryExecution {
    return new AthenaResponsesFetchQueryExecutionQueryExecution(this.__scope, this.__resources, this.__input);
  }

}

export class AthenaResponsesFetchQueryExecutionQueryExecution {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AthenaGetQueryExecutionInput) {
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
          QueryExecutionId: this.__input.queryExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetQueryExecution.QueryExecution.QueryExecutionId', props);
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
          QueryExecutionId: this.__input.queryExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetQueryExecution.QueryExecution.Query', props);
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
          QueryExecutionId: this.__input.queryExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetQueryExecution.QueryExecution.StatementType', props);
    return resource.getResponseField('QueryExecution.StatementType') as unknown as string;
  }

  public get resultConfiguration(): AthenaResponsesFetchQueryExecutionQueryExecutionResultConfiguration {
    return new AthenaResponsesFetchQueryExecutionQueryExecutionResultConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get queryExecutionContext(): AthenaResponsesFetchQueryExecutionQueryExecutionQueryExecutionContext {
    return new AthenaResponsesFetchQueryExecutionQueryExecutionQueryExecutionContext(this.__scope, this.__resources, this.__input);
  }

  public get status(): AthenaResponsesFetchQueryExecutionQueryExecutionStatus {
    return new AthenaResponsesFetchQueryExecutionQueryExecutionStatus(this.__scope, this.__resources, this.__input);
  }

  public get statistics(): AthenaResponsesFetchQueryExecutionQueryExecutionStatistics {
    return new AthenaResponsesFetchQueryExecutionQueryExecutionStatistics(this.__scope, this.__resources, this.__input);
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
          QueryExecutionId: this.__input.queryExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetQueryExecution.QueryExecution.WorkGroup', props);
    return resource.getResponseField('QueryExecution.WorkGroup') as unknown as string;
  }

  public get engineVersion(): AthenaResponsesFetchQueryExecutionQueryExecutionEngineVersion {
    return new AthenaResponsesFetchQueryExecutionQueryExecutionEngineVersion(this.__scope, this.__resources, this.__input);
  }

}

export class AthenaResponsesFetchQueryExecutionQueryExecutionResultConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AthenaGetQueryExecutionInput) {
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
          QueryExecutionId: this.__input.queryExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetQueryExecution.QueryExecution.ResultConfiguration.OutputLocation', props);
    return resource.getResponseField('QueryExecution.ResultConfiguration.OutputLocation') as unknown as string;
  }

  public get encryptionConfiguration(): AthenaResponsesFetchQueryExecutionQueryExecutionResultConfigurationEncryptionConfiguration {
    return new AthenaResponsesFetchQueryExecutionQueryExecutionResultConfigurationEncryptionConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class AthenaResponsesFetchQueryExecutionQueryExecutionResultConfigurationEncryptionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AthenaGetQueryExecutionInput) {
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
          QueryExecutionId: this.__input.queryExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetQueryExecution.QueryExecution.ResultConfiguration.EncryptionConfiguration.EncryptionOption', props);
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
          QueryExecutionId: this.__input.queryExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetQueryExecution.QueryExecution.ResultConfiguration.EncryptionConfiguration.KmsKey', props);
    return resource.getResponseField('QueryExecution.ResultConfiguration.EncryptionConfiguration.KmsKey') as unknown as string;
  }

}

export class AthenaResponsesFetchQueryExecutionQueryExecutionQueryExecutionContext {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AthenaGetQueryExecutionInput) {
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
          QueryExecutionId: this.__input.queryExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetQueryExecution.QueryExecution.QueryExecutionContext.Database', props);
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
          QueryExecutionId: this.__input.queryExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetQueryExecution.QueryExecution.QueryExecutionContext.Catalog', props);
    return resource.getResponseField('QueryExecution.QueryExecutionContext.Catalog') as unknown as string;
  }

}

export class AthenaResponsesFetchQueryExecutionQueryExecutionStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AthenaGetQueryExecutionInput) {
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
          QueryExecutionId: this.__input.queryExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetQueryExecution.QueryExecution.Status.State', props);
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
          QueryExecutionId: this.__input.queryExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetQueryExecution.QueryExecution.Status.StateChangeReason', props);
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
          QueryExecutionId: this.__input.queryExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetQueryExecution.QueryExecution.Status.SubmissionDateTime', props);
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
          QueryExecutionId: this.__input.queryExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetQueryExecution.QueryExecution.Status.CompletionDateTime', props);
    return resource.getResponseField('QueryExecution.Status.CompletionDateTime') as unknown as string;
  }

}

export class AthenaResponsesFetchQueryExecutionQueryExecutionStatistics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AthenaGetQueryExecutionInput) {
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
          QueryExecutionId: this.__input.queryExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetQueryExecution.QueryExecution.Statistics.EngineExecutionTimeInMillis', props);
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
          QueryExecutionId: this.__input.queryExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetQueryExecution.QueryExecution.Statistics.DataScannedInBytes', props);
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
          QueryExecutionId: this.__input.queryExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetQueryExecution.QueryExecution.Statistics.DataManifestLocation', props);
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
          QueryExecutionId: this.__input.queryExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetQueryExecution.QueryExecution.Statistics.TotalExecutionTimeInMillis', props);
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
          QueryExecutionId: this.__input.queryExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetQueryExecution.QueryExecution.Statistics.QueryQueueTimeInMillis', props);
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
          QueryExecutionId: this.__input.queryExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetQueryExecution.QueryExecution.Statistics.QueryPlanningTimeInMillis', props);
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
          QueryExecutionId: this.__input.queryExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetQueryExecution.QueryExecution.Statistics.ServiceProcessingTimeInMillis', props);
    return resource.getResponseField('QueryExecution.Statistics.ServiceProcessingTimeInMillis') as unknown as number;
  }

}

export class AthenaResponsesFetchQueryExecutionQueryExecutionEngineVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AthenaGetQueryExecutionInput) {
  }

  public get selectedEngineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getQueryExecution',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetQueryExecution.QueryExecution.EngineVersion.SelectedEngineVersion'),
        outputPath: 'QueryExecution.EngineVersion.SelectedEngineVersion',
        parameters: {
          QueryExecutionId: this.__input.queryExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetQueryExecution.QueryExecution.EngineVersion.SelectedEngineVersion', props);
    return resource.getResponseField('QueryExecution.EngineVersion.SelectedEngineVersion') as unknown as string;
  }

  public get effectiveEngineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getQueryExecution',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetQueryExecution.QueryExecution.EngineVersion.EffectiveEngineVersion'),
        outputPath: 'QueryExecution.EngineVersion.EffectiveEngineVersion',
        parameters: {
          QueryExecutionId: this.__input.queryExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetQueryExecution.QueryExecution.EngineVersion.EffectiveEngineVersion', props);
    return resource.getResponseField('QueryExecution.EngineVersion.EffectiveEngineVersion') as unknown as string;
  }

}

export class AthenaResponsesFetchQueryResults {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AthenaGetQueryResultsInput) {
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
          QueryExecutionId: this.__input.queryExecutionId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetQueryResults.UpdateCount', props);
    return resource.getResponseField('UpdateCount') as unknown as number;
  }

  public get resultSet(): AthenaResponsesFetchQueryResultsResultSet {
    return new AthenaResponsesFetchQueryResultsResultSet(this.__scope, this.__resources, this.__input);
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
          QueryExecutionId: this.__input.queryExecutionId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetQueryResults.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AthenaResponsesFetchQueryResultsResultSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AthenaGetQueryResultsInput) {
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
          QueryExecutionId: this.__input.queryExecutionId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetQueryResults.ResultSet.Rows', props);
    return resource.getResponseField('ResultSet.Rows') as unknown as shapes.AthenaRow[];
  }

  public get resultSetMetadata(): AthenaResponsesFetchQueryResultsResultSetResultSetMetadata {
    return new AthenaResponsesFetchQueryResultsResultSetResultSetMetadata(this.__scope, this.__resources, this.__input);
  }

}

export class AthenaResponsesFetchQueryResultsResultSetResultSetMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AthenaGetQueryResultsInput) {
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
          QueryExecutionId: this.__input.queryExecutionId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetQueryResults.ResultSet.ResultSetMetadata.ColumnInfo', props);
    return resource.getResponseField('ResultSet.ResultSetMetadata.ColumnInfo') as unknown as shapes.AthenaColumnInfo[];
  }

}

export class AthenaResponsesFetchTableMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AthenaGetTableMetadataInput) {
  }

  public get tableMetadata(): AthenaResponsesFetchTableMetadataTableMetadata {
    return new AthenaResponsesFetchTableMetadataTableMetadata(this.__scope, this.__resources, this.__input);
  }

}

export class AthenaResponsesFetchTableMetadataTableMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AthenaGetTableMetadataInput) {
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
          CatalogName: this.__input.catalogName,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableMetadata.TableMetadata.Name', props);
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
          CatalogName: this.__input.catalogName,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableMetadata.TableMetadata.CreateTime', props);
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
          CatalogName: this.__input.catalogName,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableMetadata.TableMetadata.LastAccessTime', props);
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
          CatalogName: this.__input.catalogName,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableMetadata.TableMetadata.TableType', props);
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
          CatalogName: this.__input.catalogName,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableMetadata.TableMetadata.Columns', props);
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
          CatalogName: this.__input.catalogName,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableMetadata.TableMetadata.PartitionKeys', props);
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
          CatalogName: this.__input.catalogName,
          DatabaseName: this.__input.databaseName,
          TableName: this.__input.tableName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTableMetadata.TableMetadata.Parameters', props);
    return resource.getResponseField('TableMetadata.Parameters') as unknown as Record<string, string>;
  }

}

export class AthenaResponsesFetchWorkGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AthenaGetWorkGroupInput) {
  }

  public get workGroup(): AthenaResponsesFetchWorkGroupWorkGroup {
    return new AthenaResponsesFetchWorkGroupWorkGroup(this.__scope, this.__resources, this.__input);
  }

}

export class AthenaResponsesFetchWorkGroupWorkGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AthenaGetWorkGroupInput) {
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
          WorkGroup: this.__input.workGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkGroup.WorkGroup.Name', props);
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
          WorkGroup: this.__input.workGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkGroup.WorkGroup.State', props);
    return resource.getResponseField('WorkGroup.State') as unknown as string;
  }

  public get configuration(): AthenaResponsesFetchWorkGroupWorkGroupConfiguration {
    return new AthenaResponsesFetchWorkGroupWorkGroupConfiguration(this.__scope, this.__resources, this.__input);
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
          WorkGroup: this.__input.workGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkGroup.WorkGroup.Description', props);
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
          WorkGroup: this.__input.workGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkGroup.WorkGroup.CreationTime', props);
    return resource.getResponseField('WorkGroup.CreationTime') as unknown as string;
  }

}

export class AthenaResponsesFetchWorkGroupWorkGroupConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AthenaGetWorkGroupInput) {
  }

  public get resultConfiguration(): AthenaResponsesFetchWorkGroupWorkGroupConfigurationResultConfiguration {
    return new AthenaResponsesFetchWorkGroupWorkGroupConfigurationResultConfiguration(this.__scope, this.__resources, this.__input);
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
          WorkGroup: this.__input.workGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkGroup.WorkGroup.Configuration.EnforceWorkGroupConfiguration', props);
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
          WorkGroup: this.__input.workGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkGroup.WorkGroup.Configuration.PublishCloudWatchMetricsEnabled', props);
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
          WorkGroup: this.__input.workGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkGroup.WorkGroup.Configuration.BytesScannedCutoffPerQuery', props);
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
          WorkGroup: this.__input.workGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkGroup.WorkGroup.Configuration.RequesterPaysEnabled', props);
    return resource.getResponseField('WorkGroup.Configuration.RequesterPaysEnabled') as unknown as boolean;
  }

  public get engineVersion(): AthenaResponsesFetchWorkGroupWorkGroupConfigurationEngineVersion {
    return new AthenaResponsesFetchWorkGroupWorkGroupConfigurationEngineVersion(this.__scope, this.__resources, this.__input);
  }

}

export class AthenaResponsesFetchWorkGroupWorkGroupConfigurationResultConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AthenaGetWorkGroupInput) {
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
          WorkGroup: this.__input.workGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkGroup.WorkGroup.Configuration.ResultConfiguration.OutputLocation', props);
    return resource.getResponseField('WorkGroup.Configuration.ResultConfiguration.OutputLocation') as unknown as string;
  }

  public get encryptionConfiguration(): AthenaResponsesFetchWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration {
    return new AthenaResponsesFetchWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class AthenaResponsesFetchWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AthenaGetWorkGroupInput) {
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
          WorkGroup: this.__input.workGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkGroup.WorkGroup.Configuration.ResultConfiguration.EncryptionConfiguration.EncryptionOption', props);
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
          WorkGroup: this.__input.workGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkGroup.WorkGroup.Configuration.ResultConfiguration.EncryptionConfiguration.KmsKey', props);
    return resource.getResponseField('WorkGroup.Configuration.ResultConfiguration.EncryptionConfiguration.KmsKey') as unknown as string;
  }

}

export class AthenaResponsesFetchWorkGroupWorkGroupConfigurationEngineVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AthenaGetWorkGroupInput) {
  }

  public get selectedEngineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkGroup',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetWorkGroup.WorkGroup.Configuration.EngineVersion.SelectedEngineVersion'),
        outputPath: 'WorkGroup.Configuration.EngineVersion.SelectedEngineVersion',
        parameters: {
          WorkGroup: this.__input.workGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkGroup.WorkGroup.Configuration.EngineVersion.SelectedEngineVersion', props);
    return resource.getResponseField('WorkGroup.Configuration.EngineVersion.SelectedEngineVersion') as unknown as string;
  }

  public get effectiveEngineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkGroup',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.GetWorkGroup.WorkGroup.Configuration.EngineVersion.EffectiveEngineVersion'),
        outputPath: 'WorkGroup.Configuration.EngineVersion.EffectiveEngineVersion',
        parameters: {
          WorkGroup: this.__input.workGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorkGroup.WorkGroup.Configuration.EngineVersion.EffectiveEngineVersion', props);
    return resource.getResponseField('WorkGroup.Configuration.EngineVersion.EffectiveEngineVersion') as unknown as string;
  }

}

export class AthenaResponsesListDataCatalogs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AthenaListDataCatalogsInput) {
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDataCatalogs.DataCatalogsSummary', props);
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDataCatalogs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AthenaResponsesListDatabases {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AthenaListDatabasesInput) {
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
          CatalogName: this.__input.catalogName,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDatabases.DatabaseList', props);
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
          CatalogName: this.__input.catalogName,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDatabases.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AthenaResponsesListEngineVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AthenaListEngineVersionsInput) {
  }

  public get engineVersions(): shapes.AthenaEngineVersion[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEngineVersions',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.ListEngineVersions.EngineVersions'),
        outputPath: 'EngineVersions',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEngineVersions.EngineVersions', props);
    return resource.getResponseField('EngineVersions') as unknown as shapes.AthenaEngineVersion[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEngineVersions',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.ListEngineVersions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEngineVersions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AthenaResponsesListNamedQueries {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AthenaListNamedQueriesInput) {
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          WorkGroup: this.__input.workGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListNamedQueries.NamedQueryIds', props);
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          WorkGroup: this.__input.workGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListNamedQueries.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AthenaResponsesListPreparedStatements {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AthenaListPreparedStatementsInput) {
  }

  public get preparedStatements(): shapes.AthenaPreparedStatementSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPreparedStatements',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.ListPreparedStatements.PreparedStatements'),
        outputPath: 'PreparedStatements',
        parameters: {
          WorkGroup: this.__input.workGroup,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPreparedStatements.PreparedStatements', props);
    return resource.getResponseField('PreparedStatements') as unknown as shapes.AthenaPreparedStatementSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPreparedStatements',
        service: 'Athena',
        physicalResourceId: cr.PhysicalResourceId.of('Athena.ListPreparedStatements.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          WorkGroup: this.__input.workGroup,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPreparedStatements.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AthenaResponsesListQueryExecutions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AthenaListQueryExecutionsInput) {
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          WorkGroup: this.__input.workGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListQueryExecutions.QueryExecutionIds', props);
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          WorkGroup: this.__input.workGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListQueryExecutions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AthenaResponsesListTableMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AthenaListTableMetadataInput) {
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
          CatalogName: this.__input.catalogName,
          DatabaseName: this.__input.databaseName,
          Expression: this.__input.expression,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTableMetadata.TableMetadataList', props);
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
          CatalogName: this.__input.catalogName,
          DatabaseName: this.__input.databaseName,
          Expression: this.__input.expression,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTableMetadata.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AthenaResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AthenaListTagsForResourceInput) {
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
          ResourceARN: this.__input.resourceArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
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
          ResourceARN: this.__input.resourceArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AthenaResponsesListWorkGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AthenaListWorkGroupsInput) {
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListWorkGroups.WorkGroups', props);
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListWorkGroups.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AthenaResponsesStartQueryExecution {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AthenaStartQueryExecutionInput) {
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
          QueryString: this.__input.queryString,
          ClientRequestToken: this.__input.clientRequestToken,
          QueryExecutionContext: {
            Database: this.__input.queryExecutionContext?.database,
            Catalog: this.__input.queryExecutionContext?.catalog,
          },
          ResultConfiguration: {
            OutputLocation: this.__input.resultConfiguration?.outputLocation,
            EncryptionConfiguration: {
              EncryptionOption: this.__input.resultConfiguration?.encryptionConfiguration?.encryptionOption,
              KmsKey: this.__input.resultConfiguration?.encryptionConfiguration?.kmsKey,
            },
          },
          WorkGroup: this.__input.workGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartQueryExecution.QueryExecutionId', props);
    return resource.getResponseField('QueryExecutionId') as unknown as string;
  }

}

