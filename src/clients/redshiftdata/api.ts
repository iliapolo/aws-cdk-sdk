import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class RedshiftDataClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public cancelStatement(input: shapes.RedshiftDataCancelStatementRequest): RedshiftDataResponsesCancelStatement {
    return new RedshiftDataResponsesCancelStatement(this, this.__resources, input);
  }

  public describeStatement(input: shapes.RedshiftDataDescribeStatementRequest): RedshiftDataResponsesDescribeStatement {
    return new RedshiftDataResponsesDescribeStatement(this, this.__resources, input);
  }

  public describeTable(input: shapes.RedshiftDataDescribeTableRequest): RedshiftDataResponsesDescribeTable {
    return new RedshiftDataResponsesDescribeTable(this, this.__resources, input);
  }

  public executeStatement(input: shapes.RedshiftDataExecuteStatementInput): RedshiftDataResponsesExecuteStatement {
    return new RedshiftDataResponsesExecuteStatement(this, this.__resources, input);
  }

  public fetchStatementResult(input: shapes.RedshiftDataGetStatementResultRequest): RedshiftDataResponsesFetchStatementResult {
    return new RedshiftDataResponsesFetchStatementResult(this, this.__resources, input);
  }

  public listDatabases(input: shapes.RedshiftDataListDatabasesRequest): RedshiftDataResponsesListDatabases {
    return new RedshiftDataResponsesListDatabases(this, this.__resources, input);
  }

  public listSchemas(input: shapes.RedshiftDataListSchemasRequest): RedshiftDataResponsesListSchemas {
    return new RedshiftDataResponsesListSchemas(this, this.__resources, input);
  }

  public listStatements(input: shapes.RedshiftDataListStatementsRequest): RedshiftDataResponsesListStatements {
    return new RedshiftDataResponsesListStatements(this, this.__resources, input);
  }

  public listTables(input: shapes.RedshiftDataListTablesRequest): RedshiftDataResponsesListTables {
    return new RedshiftDataResponsesListTables(this, this.__resources, input);
  }

}

export class RedshiftDataResponsesCancelStatement {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RedshiftDataCancelStatementRequest) {
  }

  public get status(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelStatement',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.CancelStatement.Status'),
        outputPath: 'Status',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelStatement.Status', props);
    return resource.getResponseField('Status') as unknown as boolean;
  }

}

export class RedshiftDataResponsesDescribeStatement {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RedshiftDataDescribeStatementRequest) {
  }

  public get clusterIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStatement',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.DescribeStatement.ClusterIdentifier'),
        outputPath: 'ClusterIdentifier',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStatement.ClusterIdentifier', props);
    return resource.getResponseField('ClusterIdentifier') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStatement',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.DescribeStatement.CreatedAt'),
        outputPath: 'CreatedAt',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStatement.CreatedAt', props);
    return resource.getResponseField('CreatedAt') as unknown as string;
  }

  public get database(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStatement',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.DescribeStatement.Database'),
        outputPath: 'Database',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStatement.Database', props);
    return resource.getResponseField('Database') as unknown as string;
  }

  public get dbUser(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStatement',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.DescribeStatement.DbUser'),
        outputPath: 'DbUser',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStatement.DbUser', props);
    return resource.getResponseField('DbUser') as unknown as string;
  }

  public get duration(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStatement',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.DescribeStatement.Duration'),
        outputPath: 'Duration',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStatement.Duration', props);
    return resource.getResponseField('Duration') as unknown as number;
  }

  public get error(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStatement',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.DescribeStatement.Error'),
        outputPath: 'Error',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStatement.Error', props);
    return resource.getResponseField('Error') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStatement',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.DescribeStatement.Id'),
        outputPath: 'Id',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStatement.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get queryString(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStatement',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.DescribeStatement.QueryString'),
        outputPath: 'QueryString',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStatement.QueryString', props);
    return resource.getResponseField('QueryString') as unknown as string;
  }

  public get redshiftPid(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStatement',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.DescribeStatement.RedshiftPid'),
        outputPath: 'RedshiftPid',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStatement.RedshiftPid', props);
    return resource.getResponseField('RedshiftPid') as unknown as number;
  }

  public get redshiftQueryId(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStatement',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.DescribeStatement.RedshiftQueryId'),
        outputPath: 'RedshiftQueryId',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStatement.RedshiftQueryId', props);
    return resource.getResponseField('RedshiftQueryId') as unknown as number;
  }

  public get resultRows(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStatement',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.DescribeStatement.ResultRows'),
        outputPath: 'ResultRows',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStatement.ResultRows', props);
    return resource.getResponseField('ResultRows') as unknown as number;
  }

  public get resultSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStatement',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.DescribeStatement.ResultSize'),
        outputPath: 'ResultSize',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStatement.ResultSize', props);
    return resource.getResponseField('ResultSize') as unknown as number;
  }

  public get secretArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStatement',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.DescribeStatement.SecretArn'),
        outputPath: 'SecretArn',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStatement.SecretArn', props);
    return resource.getResponseField('SecretArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStatement',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.DescribeStatement.Status'),
        outputPath: 'Status',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStatement.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStatement',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.DescribeStatement.UpdatedAt'),
        outputPath: 'UpdatedAt',
        parameters: {
          Id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStatement.UpdatedAt', props);
    return resource.getResponseField('UpdatedAt') as unknown as string;
  }

}

export class RedshiftDataResponsesDescribeTable {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RedshiftDataDescribeTableRequest) {
  }

  public get columnList(): shapes.RedshiftDataColumnMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.DescribeTable.ColumnList'),
        outputPath: 'ColumnList',
        parameters: {
          ClusterIdentifier: this.__input.clusterIdentifier,
          Database: this.__input.database,
          DbUser: this.__input.dbUser,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Schema: this.__input.schema,
          SecretArn: this.__input.secretArn,
          Table: this.__input.table,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTable.ColumnList', props);
    return resource.getResponseField('ColumnList') as unknown as shapes.RedshiftDataColumnMetadata[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.DescribeTable.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ClusterIdentifier: this.__input.clusterIdentifier,
          Database: this.__input.database,
          DbUser: this.__input.dbUser,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Schema: this.__input.schema,
          SecretArn: this.__input.secretArn,
          Table: this.__input.table,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTable.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get tableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTable',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.DescribeTable.TableName'),
        outputPath: 'TableName',
        parameters: {
          ClusterIdentifier: this.__input.clusterIdentifier,
          Database: this.__input.database,
          DbUser: this.__input.dbUser,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Schema: this.__input.schema,
          SecretArn: this.__input.secretArn,
          Table: this.__input.table,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTable.TableName', props);
    return resource.getResponseField('TableName') as unknown as string;
  }

}

export class RedshiftDataResponsesExecuteStatement {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RedshiftDataExecuteStatementInput) {
  }

  public get clusterIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeStatement',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.ExecuteStatement.ClusterIdentifier'),
        outputPath: 'ClusterIdentifier',
        parameters: {
          ClusterIdentifier: this.__input.clusterIdentifier,
          Database: this.__input.database,
          DbUser: this.__input.dbUser,
          SecretArn: this.__input.secretArn,
          Sql: this.__input.sql,
          StatementName: this.__input.statementName,
          WithEvent: this.__input.withEvent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteStatement.ClusterIdentifier', props);
    return resource.getResponseField('ClusterIdentifier') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeStatement',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.ExecuteStatement.CreatedAt'),
        outputPath: 'CreatedAt',
        parameters: {
          ClusterIdentifier: this.__input.clusterIdentifier,
          Database: this.__input.database,
          DbUser: this.__input.dbUser,
          SecretArn: this.__input.secretArn,
          Sql: this.__input.sql,
          StatementName: this.__input.statementName,
          WithEvent: this.__input.withEvent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteStatement.CreatedAt', props);
    return resource.getResponseField('CreatedAt') as unknown as string;
  }

  public get database(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeStatement',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.ExecuteStatement.Database'),
        outputPath: 'Database',
        parameters: {
          ClusterIdentifier: this.__input.clusterIdentifier,
          Database: this.__input.database,
          DbUser: this.__input.dbUser,
          SecretArn: this.__input.secretArn,
          Sql: this.__input.sql,
          StatementName: this.__input.statementName,
          WithEvent: this.__input.withEvent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteStatement.Database', props);
    return resource.getResponseField('Database') as unknown as string;
  }

  public get dbUser(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeStatement',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.ExecuteStatement.DbUser'),
        outputPath: 'DbUser',
        parameters: {
          ClusterIdentifier: this.__input.clusterIdentifier,
          Database: this.__input.database,
          DbUser: this.__input.dbUser,
          SecretArn: this.__input.secretArn,
          Sql: this.__input.sql,
          StatementName: this.__input.statementName,
          WithEvent: this.__input.withEvent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteStatement.DbUser', props);
    return resource.getResponseField('DbUser') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeStatement',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.ExecuteStatement.Id'),
        outputPath: 'Id',
        parameters: {
          ClusterIdentifier: this.__input.clusterIdentifier,
          Database: this.__input.database,
          DbUser: this.__input.dbUser,
          SecretArn: this.__input.secretArn,
          Sql: this.__input.sql,
          StatementName: this.__input.statementName,
          WithEvent: this.__input.withEvent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteStatement.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get secretArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeStatement',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.ExecuteStatement.SecretArn'),
        outputPath: 'SecretArn',
        parameters: {
          ClusterIdentifier: this.__input.clusterIdentifier,
          Database: this.__input.database,
          DbUser: this.__input.dbUser,
          SecretArn: this.__input.secretArn,
          Sql: this.__input.sql,
          StatementName: this.__input.statementName,
          WithEvent: this.__input.withEvent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExecuteStatement.SecretArn', props);
    return resource.getResponseField('SecretArn') as unknown as string;
  }

}

export class RedshiftDataResponsesFetchStatementResult {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RedshiftDataGetStatementResultRequest) {
  }

  public get columnMetadata(): shapes.RedshiftDataColumnMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStatementResult',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.GetStatementResult.ColumnMetadata'),
        outputPath: 'ColumnMetadata',
        parameters: {
          Id: this.__input.id,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStatementResult.ColumnMetadata', props);
    return resource.getResponseField('ColumnMetadata') as unknown as shapes.RedshiftDataColumnMetadata[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStatementResult',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.GetStatementResult.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Id: this.__input.id,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStatementResult.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get records(): shapes.RedshiftDataField[][] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStatementResult',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.GetStatementResult.Records'),
        outputPath: 'Records',
        parameters: {
          Id: this.__input.id,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStatementResult.Records', props);
    return resource.getResponseField('Records') as unknown as shapes.RedshiftDataField[][];
  }

  public get totalNumRows(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStatementResult',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.GetStatementResult.TotalNumRows'),
        outputPath: 'TotalNumRows',
        parameters: {
          Id: this.__input.id,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStatementResult.TotalNumRows', props);
    return resource.getResponseField('TotalNumRows') as unknown as number;
  }

}

export class RedshiftDataResponsesListDatabases {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RedshiftDataListDatabasesRequest) {
  }

  public get databases(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDatabases',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.ListDatabases.Databases'),
        outputPath: 'Databases',
        parameters: {
          ClusterIdentifier: this.__input.clusterIdentifier,
          Database: this.__input.database,
          DbUser: this.__input.dbUser,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SecretArn: this.__input.secretArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDatabases.Databases', props);
    return resource.getResponseField('Databases') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDatabases',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.ListDatabases.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ClusterIdentifier: this.__input.clusterIdentifier,
          Database: this.__input.database,
          DbUser: this.__input.dbUser,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SecretArn: this.__input.secretArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDatabases.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class RedshiftDataResponsesListSchemas {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RedshiftDataListSchemasRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSchemas',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.ListSchemas.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ClusterIdentifier: this.__input.clusterIdentifier,
          Database: this.__input.database,
          DbUser: this.__input.dbUser,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SchemaPattern: this.__input.schemaPattern,
          SecretArn: this.__input.secretArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSchemas.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get schemas(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSchemas',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.ListSchemas.Schemas'),
        outputPath: 'Schemas',
        parameters: {
          ClusterIdentifier: this.__input.clusterIdentifier,
          Database: this.__input.database,
          DbUser: this.__input.dbUser,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SchemaPattern: this.__input.schemaPattern,
          SecretArn: this.__input.secretArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSchemas.Schemas', props);
    return resource.getResponseField('Schemas') as unknown as string[];
  }

}

export class RedshiftDataResponsesListStatements {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RedshiftDataListStatementsRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listStatements',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.ListStatements.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          StatementName: this.__input.statementName,
          Status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListStatements.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get statements(): shapes.RedshiftDataStatementData[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listStatements',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.ListStatements.Statements'),
        outputPath: 'Statements',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          StatementName: this.__input.statementName,
          Status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListStatements.Statements', props);
    return resource.getResponseField('Statements') as unknown as shapes.RedshiftDataStatementData[];
  }

}

export class RedshiftDataResponsesListTables {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RedshiftDataListTablesRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTables',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.ListTables.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ClusterIdentifier: this.__input.clusterIdentifier,
          Database: this.__input.database,
          DbUser: this.__input.dbUser,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SchemaPattern: this.__input.schemaPattern,
          SecretArn: this.__input.secretArn,
          TablePattern: this.__input.tablePattern,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTables.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get tables(): shapes.RedshiftDataTableMember[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTables',
        service: 'RedshiftData',
        physicalResourceId: cr.PhysicalResourceId.of('RedshiftData.ListTables.Tables'),
        outputPath: 'Tables',
        parameters: {
          ClusterIdentifier: this.__input.clusterIdentifier,
          Database: this.__input.database,
          DbUser: this.__input.dbUser,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          SchemaPattern: this.__input.schemaPattern,
          SecretArn: this.__input.secretArn,
          TablePattern: this.__input.tablePattern,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTables.Tables', props);
    return resource.getResponseField('Tables') as unknown as shapes.RedshiftDataTableMember[];
  }

}

