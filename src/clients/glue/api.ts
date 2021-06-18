import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class GlueClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public batchCreatePartition(input: shapes.GlueBatchCreatePartitionRequest): GlueBatchCreatePartition {
    return new GlueBatchCreatePartition(this, 'BatchCreatePartition', this.__resources, input);
  }

  public batchDeleteConnection(input: shapes.GlueBatchDeleteConnectionRequest): GlueBatchDeleteConnection {
    return new GlueBatchDeleteConnection(this, 'BatchDeleteConnection', this.__resources, input);
  }

  public batchDeletePartition(input: shapes.GlueBatchDeletePartitionRequest): GlueBatchDeletePartition {
    return new GlueBatchDeletePartition(this, 'BatchDeletePartition', this.__resources, input);
  }

  public batchDeleteTable(input: shapes.GlueBatchDeleteTableRequest): GlueBatchDeleteTable {
    return new GlueBatchDeleteTable(this, 'BatchDeleteTable', this.__resources, input);
  }

  public batchDeleteTableVersion(input: shapes.GlueBatchDeleteTableVersionRequest): GlueBatchDeleteTableVersion {
    return new GlueBatchDeleteTableVersion(this, 'BatchDeleteTableVersion', this.__resources, input);
  }

  public batchGetCrawlers(input: shapes.GlueBatchGetCrawlersRequest): GlueBatchGetCrawlers {
    return new GlueBatchGetCrawlers(this, 'BatchGetCrawlers', this.__resources, input);
  }

  public batchGetDevEndpoints(input: shapes.GlueBatchGetDevEndpointsRequest): GlueBatchGetDevEndpoints {
    return new GlueBatchGetDevEndpoints(this, 'BatchGetDevEndpoints', this.__resources, input);
  }

  public batchGetJobs(input: shapes.GlueBatchGetJobsRequest): GlueBatchGetJobs {
    return new GlueBatchGetJobs(this, 'BatchGetJobs', this.__resources, input);
  }

  public batchGetPartition(input: shapes.GlueBatchGetPartitionRequest): GlueBatchGetPartition {
    return new GlueBatchGetPartition(this, 'BatchGetPartition', this.__resources, input);
  }

  public batchGetTriggers(input: shapes.GlueBatchGetTriggersRequest): GlueBatchGetTriggers {
    return new GlueBatchGetTriggers(this, 'BatchGetTriggers', this.__resources, input);
  }

  public batchGetWorkflows(input: shapes.GlueBatchGetWorkflowsRequest): GlueBatchGetWorkflows {
    return new GlueBatchGetWorkflows(this, 'BatchGetWorkflows', this.__resources, input);
  }

  public batchStopJobRun(input: shapes.GlueBatchStopJobRunRequest): GlueBatchStopJobRun {
    return new GlueBatchStopJobRun(this, 'BatchStopJobRun', this.__resources, input);
  }

  public batchUpdatePartition(input: shapes.GlueBatchUpdatePartitionRequest): GlueBatchUpdatePartition {
    return new GlueBatchUpdatePartition(this, 'BatchUpdatePartition', this.__resources, input);
  }

  public cancelMlTaskRun(input: shapes.GlueCancelMlTaskRunRequest): GlueCancelMlTaskRun {
    return new GlueCancelMlTaskRun(this, 'CancelMlTaskRun', this.__resources, input);
  }

  public checkSchemaVersionValidity(input: shapes.GlueCheckSchemaVersionValidityInput): GlueCheckSchemaVersionValidity {
    return new GlueCheckSchemaVersionValidity(this, 'CheckSchemaVersionValidity', this.__resources, input);
  }

  public createClassifier(input: shapes.GlueCreateClassifierRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateClassifier'),
        parameters: {
          GrokClassifier: {
            Classification: input.grokClassifier?.classification,
            Name: input.grokClassifier?.name,
            GrokPattern: input.grokClassifier?.grokPattern,
            CustomPatterns: input.grokClassifier?.customPatterns,
          },
          XMLClassifier: {
            Classification: input.xmlClassifier?.classification,
            Name: input.xmlClassifier?.name,
            RowTag: input.xmlClassifier?.rowTag,
          },
          JsonClassifier: {
            Name: input.jsonClassifier?.name,
            JsonPath: input.jsonClassifier?.jsonPath,
          },
          CsvClassifier: {
            Name: input.csvClassifier?.name,
            Delimiter: input.csvClassifier?.delimiter,
            QuoteSymbol: input.csvClassifier?.quoteSymbol,
            ContainsHeader: input.csvClassifier?.containsHeader,
            Header: input.csvClassifier?.header,
            DisableValueTrimming: input.csvClassifier?.disableValueTrimming,
            AllowSingleColumn: input.csvClassifier?.allowSingleColumn,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateClassifier', props);
  }

  public createConnection(input: shapes.GlueCreateConnectionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConnection',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateConnection'),
        parameters: {
          CatalogId: input.catalogId,
          ConnectionInput: {
            Name: input.connectionInput.name,
            Description: input.connectionInput.description,
            ConnectionType: input.connectionInput.connectionType,
            MatchCriteria: input.connectionInput.matchCriteria,
            ConnectionProperties: input.connectionInput.connectionProperties,
            PhysicalConnectionRequirements: {
              SubnetId: input.connectionInput.physicalConnectionRequirements?.subnetId,
              SecurityGroupIdList: input.connectionInput.physicalConnectionRequirements?.securityGroupIdList,
              AvailabilityZone: input.connectionInput.physicalConnectionRequirements?.availabilityZone,
            },
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateConnection', props);
  }

  public createCrawler(input: shapes.GlueCreateCrawlerRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateCrawler'),
        parameters: {
          Name: input.name,
          Role: input.role,
          DatabaseName: input.databaseName,
          Description: input.description,
          Targets: {
            S3Targets: input.targets.s3Targets,
            JdbcTargets: input.targets.jdbcTargets,
            MongoDBTargets: input.targets.mongoDbTargets,
            DynamoDBTargets: input.targets.dynamoDbTargets,
            CatalogTargets: input.targets.catalogTargets,
          },
          Schedule: input.schedule,
          Classifiers: input.classifiers,
          TablePrefix: input.tablePrefix,
          SchemaChangePolicy: {
            UpdateBehavior: input.schemaChangePolicy?.updateBehavior,
            DeleteBehavior: input.schemaChangePolicy?.deleteBehavior,
          },
          RecrawlPolicy: {
            RecrawlBehavior: input.recrawlPolicy?.recrawlBehavior,
          },
          LineageConfiguration: {
            CrawlerLineageSettings: input.lineageConfiguration?.crawlerLineageSettings,
          },
          Configuration: input.configuration,
          CrawlerSecurityConfiguration: input.crawlerSecurityConfiguration,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateCrawler', props);
  }

  public createDatabase(input: shapes.GlueCreateDatabaseRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDatabase',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateDatabase'),
        parameters: {
          CatalogId: input.catalogId,
          DatabaseInput: {
            Name: input.databaseInput.name,
            Description: input.databaseInput.description,
            LocationUri: input.databaseInput.locationUri,
            Parameters: input.databaseInput.parameters,
            CreateTableDefaultPermissions: input.databaseInput.createTableDefaultPermissions,
            TargetDatabase: {
              CatalogId: input.databaseInput.targetDatabase?.catalogId,
              DatabaseName: input.databaseInput.targetDatabase?.databaseName,
            },
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateDatabase', props);
  }

  public createDevEndpoint(input: shapes.GlueCreateDevEndpointRequest): GlueCreateDevEndpoint {
    return new GlueCreateDevEndpoint(this, 'CreateDevEndpoint', this.__resources, input);
  }

  public createJob(input: shapes.GlueCreateJobRequest): GlueCreateJob {
    return new GlueCreateJob(this, 'CreateJob', this.__resources, input);
  }

  public createMlTransform(input: shapes.GlueCreateMlTransformRequest): GlueCreateMlTransform {
    return new GlueCreateMlTransform(this, 'CreateMlTransform', this.__resources, input);
  }

  public createPartition(input: shapes.GlueCreatePartitionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreatePartition'),
        parameters: {
          CatalogId: input.catalogId,
          DatabaseName: input.databaseName,
          TableName: input.tableName,
          PartitionInput: {
            Values: input.partitionInput.values,
            LastAccessTime: input.partitionInput.lastAccessTime,
            StorageDescriptor: {
              Columns: input.partitionInput.storageDescriptor?.columns,
              Location: input.partitionInput.storageDescriptor?.location,
              InputFormat: input.partitionInput.storageDescriptor?.inputFormat,
              OutputFormat: input.partitionInput.storageDescriptor?.outputFormat,
              Compressed: input.partitionInput.storageDescriptor?.compressed,
              NumberOfBuckets: input.partitionInput.storageDescriptor?.numberOfBuckets,
              SerdeInfo: {
                Name: input.partitionInput.storageDescriptor?.serdeInfo?.name,
                SerializationLibrary: input.partitionInput.storageDescriptor?.serdeInfo?.serializationLibrary,
                Parameters: input.partitionInput.storageDescriptor?.serdeInfo?.parameters,
              },
              BucketColumns: input.partitionInput.storageDescriptor?.bucketColumns,
              SortColumns: input.partitionInput.storageDescriptor?.sortColumns,
              Parameters: input.partitionInput.storageDescriptor?.parameters,
              SkewedInfo: {
                SkewedColumnNames: input.partitionInput.storageDescriptor?.skewedInfo?.skewedColumnNames,
                SkewedColumnValues: input.partitionInput.storageDescriptor?.skewedInfo?.skewedColumnValues,
                SkewedColumnValueLocationMaps: input.partitionInput.storageDescriptor?.skewedInfo?.skewedColumnValueLocationMaps,
              },
              StoredAsSubDirectories: input.partitionInput.storageDescriptor?.storedAsSubDirectories,
              SchemaReference: {
                SchemaId: {
                  SchemaArn: input.partitionInput.storageDescriptor?.schemaReference?.schemaId?.schemaArn,
                  SchemaName: input.partitionInput.storageDescriptor?.schemaReference?.schemaId?.schemaName,
                  RegistryName: input.partitionInput.storageDescriptor?.schemaReference?.schemaId?.registryName,
                },
                SchemaVersionId: input.partitionInput.storageDescriptor?.schemaReference?.schemaVersionId,
                SchemaVersionNumber: input.partitionInput.storageDescriptor?.schemaReference?.schemaVersionNumber,
              },
            },
            Parameters: input.partitionInput.parameters,
            LastAnalyzedTime: input.partitionInput.lastAnalyzedTime,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreatePartition', props);
  }

  public createPartitionIndex(input: shapes.GlueCreatePartitionIndexRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPartitionIndex',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreatePartitionIndex'),
        parameters: {
          CatalogId: input.catalogId,
          DatabaseName: input.databaseName,
          TableName: input.tableName,
          PartitionIndex: {
            Keys: input.partitionIndex.keys,
            IndexName: input.partitionIndex.indexName,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreatePartitionIndex', props);
  }

  public createRegistry(input: shapes.GlueCreateRegistryInput): GlueCreateRegistry {
    return new GlueCreateRegistry(this, 'CreateRegistry', this.__resources, input);
  }

  public createSchema(input: shapes.GlueCreateSchemaInput): GlueCreateSchema {
    return new GlueCreateSchema(this, 'CreateSchema', this.__resources, input);
  }

  public createScript(input: shapes.GlueCreateScriptRequest): GlueCreateScript {
    return new GlueCreateScript(this, 'CreateScript', this.__resources, input);
  }

  public createSecurityConfiguration(input: shapes.GlueCreateSecurityConfigurationRequest): GlueCreateSecurityConfiguration {
    return new GlueCreateSecurityConfiguration(this, 'CreateSecurityConfiguration', this.__resources, input);
  }

  public createTable(input: shapes.GlueCreateTableRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateTable'),
        parameters: {
          CatalogId: input.catalogId,
          DatabaseName: input.databaseName,
          TableInput: {
            Name: input.tableInput.name,
            Description: input.tableInput.description,
            Owner: input.tableInput.owner,
            LastAccessTime: input.tableInput.lastAccessTime,
            LastAnalyzedTime: input.tableInput.lastAnalyzedTime,
            Retention: input.tableInput.retention,
            StorageDescriptor: {
              Columns: input.tableInput.storageDescriptor?.columns,
              Location: input.tableInput.storageDescriptor?.location,
              InputFormat: input.tableInput.storageDescriptor?.inputFormat,
              OutputFormat: input.tableInput.storageDescriptor?.outputFormat,
              Compressed: input.tableInput.storageDescriptor?.compressed,
              NumberOfBuckets: input.tableInput.storageDescriptor?.numberOfBuckets,
              SerdeInfo: {
                Name: input.tableInput.storageDescriptor?.serdeInfo?.name,
                SerializationLibrary: input.tableInput.storageDescriptor?.serdeInfo?.serializationLibrary,
                Parameters: input.tableInput.storageDescriptor?.serdeInfo?.parameters,
              },
              BucketColumns: input.tableInput.storageDescriptor?.bucketColumns,
              SortColumns: input.tableInput.storageDescriptor?.sortColumns,
              Parameters: input.tableInput.storageDescriptor?.parameters,
              SkewedInfo: {
                SkewedColumnNames: input.tableInput.storageDescriptor?.skewedInfo?.skewedColumnNames,
                SkewedColumnValues: input.tableInput.storageDescriptor?.skewedInfo?.skewedColumnValues,
                SkewedColumnValueLocationMaps: input.tableInput.storageDescriptor?.skewedInfo?.skewedColumnValueLocationMaps,
              },
              StoredAsSubDirectories: input.tableInput.storageDescriptor?.storedAsSubDirectories,
              SchemaReference: {
                SchemaId: {
                  SchemaArn: input.tableInput.storageDescriptor?.schemaReference?.schemaId?.schemaArn,
                  SchemaName: input.tableInput.storageDescriptor?.schemaReference?.schemaId?.schemaName,
                  RegistryName: input.tableInput.storageDescriptor?.schemaReference?.schemaId?.registryName,
                },
                SchemaVersionId: input.tableInput.storageDescriptor?.schemaReference?.schemaVersionId,
                SchemaVersionNumber: input.tableInput.storageDescriptor?.schemaReference?.schemaVersionNumber,
              },
            },
            PartitionKeys: input.tableInput.partitionKeys,
            ViewOriginalText: input.tableInput.viewOriginalText,
            ViewExpandedText: input.tableInput.viewExpandedText,
            TableType: input.tableInput.tableType,
            Parameters: input.tableInput.parameters,
            TargetTable: {
              CatalogId: input.tableInput.targetTable?.catalogId,
              DatabaseName: input.tableInput.targetTable?.databaseName,
              Name: input.tableInput.targetTable?.name,
            },
          },
          PartitionIndexes: input.partitionIndexes,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateTable', props);
  }

  public createTrigger(input: shapes.GlueCreateTriggerRequest): GlueCreateTrigger {
    return new GlueCreateTrigger(this, 'CreateTrigger', this.__resources, input);
  }

  public createUserDefinedFunction(input: shapes.GlueCreateUserDefinedFunctionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUserDefinedFunction',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateUserDefinedFunction'),
        parameters: {
          CatalogId: input.catalogId,
          DatabaseName: input.databaseName,
          FunctionInput: {
            FunctionName: input.functionInput.functionName,
            ClassName: input.functionInput.className,
            OwnerName: input.functionInput.ownerName,
            OwnerType: input.functionInput.ownerType,
            ResourceUris: input.functionInput.resourceUris,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateUserDefinedFunction', props);
  }

  public createWorkflow(input: shapes.GlueCreateWorkflowRequest): GlueCreateWorkflow {
    return new GlueCreateWorkflow(this, 'CreateWorkflow', this.__resources, input);
  }

  public deleteClassifier(input: shapes.GlueDeleteClassifierRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeleteClassifier'),
        parameters: {
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteClassifier', props);
  }

  public deleteColumnStatisticsForPartition(input: shapes.GlueDeleteColumnStatisticsForPartitionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteColumnStatisticsForPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeleteColumnStatisticsForPartition'),
        parameters: {
          CatalogId: input.catalogId,
          DatabaseName: input.databaseName,
          TableName: input.tableName,
          PartitionValues: input.partitionValues,
          ColumnName: input.columnName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteColumnStatisticsForPartition', props);
  }

  public deleteColumnStatisticsForTable(input: shapes.GlueDeleteColumnStatisticsForTableRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteColumnStatisticsForTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeleteColumnStatisticsForTable'),
        parameters: {
          CatalogId: input.catalogId,
          DatabaseName: input.databaseName,
          TableName: input.tableName,
          ColumnName: input.columnName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteColumnStatisticsForTable', props);
  }

  public deleteConnection(input: shapes.GlueDeleteConnectionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConnection',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeleteConnection'),
        parameters: {
          CatalogId: input.catalogId,
          ConnectionName: input.connectionName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteConnection', props);
  }

  public deleteCrawler(input: shapes.GlueDeleteCrawlerRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeleteCrawler'),
        parameters: {
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteCrawler', props);
  }

  public deleteDatabase(input: shapes.GlueDeleteDatabaseRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDatabase',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeleteDatabase'),
        parameters: {
          CatalogId: input.catalogId,
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDatabase', props);
  }

  public deleteDevEndpoint(input: shapes.GlueDeleteDevEndpointRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeleteDevEndpoint'),
        parameters: {
          EndpointName: input.endpointName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDevEndpoint', props);
  }

  public deleteJob(input: shapes.GlueDeleteJobRequest): GlueDeleteJob {
    return new GlueDeleteJob(this, 'DeleteJob', this.__resources, input);
  }

  public deleteMlTransform(input: shapes.GlueDeleteMlTransformRequest): GlueDeleteMlTransform {
    return new GlueDeleteMlTransform(this, 'DeleteMlTransform', this.__resources, input);
  }

  public deletePartition(input: shapes.GlueDeletePartitionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeletePartition'),
        parameters: {
          CatalogId: input.catalogId,
          DatabaseName: input.databaseName,
          TableName: input.tableName,
          PartitionValues: input.partitionValues,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeletePartition', props);
  }

  public deletePartitionIndex(input: shapes.GlueDeletePartitionIndexRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePartitionIndex',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeletePartitionIndex'),
        parameters: {
          CatalogId: input.catalogId,
          DatabaseName: input.databaseName,
          TableName: input.tableName,
          IndexName: input.indexName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeletePartitionIndex', props);
  }

  public deleteRegistry(input: shapes.GlueDeleteRegistryInput): GlueDeleteRegistry {
    return new GlueDeleteRegistry(this, 'DeleteRegistry', this.__resources, input);
  }

  public deleteResourcePolicy(input: shapes.GlueDeleteResourcePolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResourcePolicy',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeleteResourcePolicy'),
        parameters: {
          PolicyHashCondition: input.policyHashCondition,
          ResourceArn: input.resourceArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteResourcePolicy', props);
  }

  public deleteSchema(input: shapes.GlueDeleteSchemaInput): GlueDeleteSchema {
    return new GlueDeleteSchema(this, 'DeleteSchema', this.__resources, input);
  }

  public deleteSchemaVersions(input: shapes.GlueDeleteSchemaVersionsInput): GlueDeleteSchemaVersions {
    return new GlueDeleteSchemaVersions(this, 'DeleteSchemaVersions', this.__resources, input);
  }

  public deleteSecurityConfiguration(input: shapes.GlueDeleteSecurityConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSecurityConfiguration',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeleteSecurityConfiguration'),
        parameters: {
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteSecurityConfiguration', props);
  }

  public deleteTable(input: shapes.GlueDeleteTableRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeleteTable'),
        parameters: {
          CatalogId: input.catalogId,
          DatabaseName: input.databaseName,
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteTable', props);
  }

  public deleteTableVersion(input: shapes.GlueDeleteTableVersionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeleteTableVersion'),
        parameters: {
          CatalogId: input.catalogId,
          DatabaseName: input.databaseName,
          TableName: input.tableName,
          VersionId: input.versionId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteTableVersion', props);
  }

  public deleteTrigger(input: shapes.GlueDeleteTriggerRequest): GlueDeleteTrigger {
    return new GlueDeleteTrigger(this, 'DeleteTrigger', this.__resources, input);
  }

  public deleteUserDefinedFunction(input: shapes.GlueDeleteUserDefinedFunctionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteUserDefinedFunction',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeleteUserDefinedFunction'),
        parameters: {
          CatalogId: input.catalogId,
          DatabaseName: input.databaseName,
          FunctionName: input.functionName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteUserDefinedFunction', props);
  }

  public deleteWorkflow(input: shapes.GlueDeleteWorkflowRequest): GlueDeleteWorkflow {
    return new GlueDeleteWorkflow(this, 'DeleteWorkflow', this.__resources, input);
  }

  public fetchCatalogImportStatus(input: shapes.GlueGetCatalogImportStatusRequest): GlueFetchCatalogImportStatus {
    return new GlueFetchCatalogImportStatus(this, 'FetchCatalogImportStatus', this.__resources, input);
  }

  public fetchClassifier(input: shapes.GlueGetClassifierRequest): GlueFetchClassifier {
    return new GlueFetchClassifier(this, 'FetchClassifier', this.__resources, input);
  }

  public fetchClassifiers(input: shapes.GlueGetClassifiersRequest): GlueFetchClassifiers {
    return new GlueFetchClassifiers(this, 'FetchClassifiers', this.__resources, input);
  }

  public fetchColumnStatisticsForPartition(input: shapes.GlueGetColumnStatisticsForPartitionRequest): GlueFetchColumnStatisticsForPartition {
    return new GlueFetchColumnStatisticsForPartition(this, 'FetchColumnStatisticsForPartition', this.__resources, input);
  }

  public fetchColumnStatisticsForTable(input: shapes.GlueGetColumnStatisticsForTableRequest): GlueFetchColumnStatisticsForTable {
    return new GlueFetchColumnStatisticsForTable(this, 'FetchColumnStatisticsForTable', this.__resources, input);
  }

  public fetchConnection(input: shapes.GlueGetConnectionRequest): GlueFetchConnection {
    return new GlueFetchConnection(this, 'FetchConnection', this.__resources, input);
  }

  public fetchConnections(input: shapes.GlueGetConnectionsRequest): GlueFetchConnections {
    return new GlueFetchConnections(this, 'FetchConnections', this.__resources, input);
  }

  public fetchCrawler(input: shapes.GlueGetCrawlerRequest): GlueFetchCrawler {
    return new GlueFetchCrawler(this, 'FetchCrawler', this.__resources, input);
  }

  public fetchCrawlerMetrics(input: shapes.GlueGetCrawlerMetricsRequest): GlueFetchCrawlerMetrics {
    return new GlueFetchCrawlerMetrics(this, 'FetchCrawlerMetrics', this.__resources, input);
  }

  public fetchCrawlers(input: shapes.GlueGetCrawlersRequest): GlueFetchCrawlers {
    return new GlueFetchCrawlers(this, 'FetchCrawlers', this.__resources, input);
  }

  public fetchDataCatalogEncryptionSettings(input: shapes.GlueGetDataCatalogEncryptionSettingsRequest): GlueFetchDataCatalogEncryptionSettings {
    return new GlueFetchDataCatalogEncryptionSettings(this, 'FetchDataCatalogEncryptionSettings', this.__resources, input);
  }

  public fetchDatabase(input: shapes.GlueGetDatabaseRequest): GlueFetchDatabase {
    return new GlueFetchDatabase(this, 'FetchDatabase', this.__resources, input);
  }

  public fetchDatabases(input: shapes.GlueGetDatabasesRequest): GlueFetchDatabases {
    return new GlueFetchDatabases(this, 'FetchDatabases', this.__resources, input);
  }

  public fetchDataflowGraph(input: shapes.GlueGetDataflowGraphRequest): GlueFetchDataflowGraph {
    return new GlueFetchDataflowGraph(this, 'FetchDataflowGraph', this.__resources, input);
  }

  public fetchDevEndpoint(input: shapes.GlueGetDevEndpointRequest): GlueFetchDevEndpoint {
    return new GlueFetchDevEndpoint(this, 'FetchDevEndpoint', this.__resources, input);
  }

  public fetchDevEndpoints(input: shapes.GlueGetDevEndpointsRequest): GlueFetchDevEndpoints {
    return new GlueFetchDevEndpoints(this, 'FetchDevEndpoints', this.__resources, input);
  }

  public fetchJob(input: shapes.GlueGetJobRequest): GlueFetchJob {
    return new GlueFetchJob(this, 'FetchJob', this.__resources, input);
  }

  public fetchJobBookmark(input: shapes.GlueGetJobBookmarkRequest): GlueFetchJobBookmark {
    return new GlueFetchJobBookmark(this, 'FetchJobBookmark', this.__resources, input);
  }

  public fetchJobRun(input: shapes.GlueGetJobRunRequest): GlueFetchJobRun {
    return new GlueFetchJobRun(this, 'FetchJobRun', this.__resources, input);
  }

  public fetchJobRuns(input: shapes.GlueGetJobRunsRequest): GlueFetchJobRuns {
    return new GlueFetchJobRuns(this, 'FetchJobRuns', this.__resources, input);
  }

  public fetchJobs(input: shapes.GlueGetJobsRequest): GlueFetchJobs {
    return new GlueFetchJobs(this, 'FetchJobs', this.__resources, input);
  }

  public fetchMlTaskRun(input: shapes.GlueGetMlTaskRunRequest): GlueFetchMlTaskRun {
    return new GlueFetchMlTaskRun(this, 'FetchMlTaskRun', this.__resources, input);
  }

  public fetchMlTaskRuns(input: shapes.GlueGetMlTaskRunsRequest): GlueFetchMlTaskRuns {
    return new GlueFetchMlTaskRuns(this, 'FetchMlTaskRuns', this.__resources, input);
  }

  public fetchMlTransform(input: shapes.GlueGetMlTransformRequest): GlueFetchMlTransform {
    return new GlueFetchMlTransform(this, 'FetchMlTransform', this.__resources, input);
  }

  public fetchMlTransforms(input: shapes.GlueGetMlTransformsRequest): GlueFetchMlTransforms {
    return new GlueFetchMlTransforms(this, 'FetchMlTransforms', this.__resources, input);
  }

  public fetchMapping(input: shapes.GlueGetMappingRequest): GlueFetchMapping {
    return new GlueFetchMapping(this, 'FetchMapping', this.__resources, input);
  }

  public fetchPartition(input: shapes.GlueGetPartitionRequest): GlueFetchPartition {
    return new GlueFetchPartition(this, 'FetchPartition', this.__resources, input);
  }

  public fetchPartitionIndexes(input: shapes.GlueGetPartitionIndexesRequest): GlueFetchPartitionIndexes {
    return new GlueFetchPartitionIndexes(this, 'FetchPartitionIndexes', this.__resources, input);
  }

  public fetchPartitions(input: shapes.GlueGetPartitionsRequest): GlueFetchPartitions {
    return new GlueFetchPartitions(this, 'FetchPartitions', this.__resources, input);
  }

  public fetchPlan(input: shapes.GlueGetPlanRequest): GlueFetchPlan {
    return new GlueFetchPlan(this, 'FetchPlan', this.__resources, input);
  }

  public fetchRegistry(input: shapes.GlueGetRegistryInput): GlueFetchRegistry {
    return new GlueFetchRegistry(this, 'FetchRegistry', this.__resources, input);
  }

  public fetchResourcePolicies(input: shapes.GlueGetResourcePoliciesRequest): GlueFetchResourcePolicies {
    return new GlueFetchResourcePolicies(this, 'FetchResourcePolicies', this.__resources, input);
  }

  public fetchResourcePolicy(input: shapes.GlueGetResourcePolicyRequest): GlueFetchResourcePolicy {
    return new GlueFetchResourcePolicy(this, 'FetchResourcePolicy', this.__resources, input);
  }

  public fetchSchema(input: shapes.GlueGetSchemaInput): GlueFetchSchema {
    return new GlueFetchSchema(this, 'FetchSchema', this.__resources, input);
  }

  public fetchSchemaByDefinition(input: shapes.GlueGetSchemaByDefinitionInput): GlueFetchSchemaByDefinition {
    return new GlueFetchSchemaByDefinition(this, 'FetchSchemaByDefinition', this.__resources, input);
  }

  public fetchSchemaVersion(input: shapes.GlueGetSchemaVersionInput): GlueFetchSchemaVersion {
    return new GlueFetchSchemaVersion(this, 'FetchSchemaVersion', this.__resources, input);
  }

  public fetchSchemaVersionsDiff(input: shapes.GlueGetSchemaVersionsDiffInput): GlueFetchSchemaVersionsDiff {
    return new GlueFetchSchemaVersionsDiff(this, 'FetchSchemaVersionsDiff', this.__resources, input);
  }

  public fetchSecurityConfiguration(input: shapes.GlueGetSecurityConfigurationRequest): GlueFetchSecurityConfiguration {
    return new GlueFetchSecurityConfiguration(this, 'FetchSecurityConfiguration', this.__resources, input);
  }

  public fetchSecurityConfigurations(input: shapes.GlueGetSecurityConfigurationsRequest): GlueFetchSecurityConfigurations {
    return new GlueFetchSecurityConfigurations(this, 'FetchSecurityConfigurations', this.__resources, input);
  }

  public fetchTable(input: shapes.GlueGetTableRequest): GlueFetchTable {
    return new GlueFetchTable(this, 'FetchTable', this.__resources, input);
  }

  public fetchTableVersion(input: shapes.GlueGetTableVersionRequest): GlueFetchTableVersion {
    return new GlueFetchTableVersion(this, 'FetchTableVersion', this.__resources, input);
  }

  public fetchTableVersions(input: shapes.GlueGetTableVersionsRequest): GlueFetchTableVersions {
    return new GlueFetchTableVersions(this, 'FetchTableVersions', this.__resources, input);
  }

  public fetchTables(input: shapes.GlueGetTablesRequest): GlueFetchTables {
    return new GlueFetchTables(this, 'FetchTables', this.__resources, input);
  }

  public fetchTags(input: shapes.GlueGetTagsRequest): GlueFetchTags {
    return new GlueFetchTags(this, 'FetchTags', this.__resources, input);
  }

  public fetchTrigger(input: shapes.GlueGetTriggerRequest): GlueFetchTrigger {
    return new GlueFetchTrigger(this, 'FetchTrigger', this.__resources, input);
  }

  public fetchTriggers(input: shapes.GlueGetTriggersRequest): GlueFetchTriggers {
    return new GlueFetchTriggers(this, 'FetchTriggers', this.__resources, input);
  }

  public fetchUserDefinedFunction(input: shapes.GlueGetUserDefinedFunctionRequest): GlueFetchUserDefinedFunction {
    return new GlueFetchUserDefinedFunction(this, 'FetchUserDefinedFunction', this.__resources, input);
  }

  public fetchUserDefinedFunctions(input: shapes.GlueGetUserDefinedFunctionsRequest): GlueFetchUserDefinedFunctions {
    return new GlueFetchUserDefinedFunctions(this, 'FetchUserDefinedFunctions', this.__resources, input);
  }

  public fetchWorkflow(input: shapes.GlueGetWorkflowRequest): GlueFetchWorkflow {
    return new GlueFetchWorkflow(this, 'FetchWorkflow', this.__resources, input);
  }

  public fetchWorkflowRun(input: shapes.GlueGetWorkflowRunRequest): GlueFetchWorkflowRun {
    return new GlueFetchWorkflowRun(this, 'FetchWorkflowRun', this.__resources, input);
  }

  public fetchWorkflowRunProperties(input: shapes.GlueGetWorkflowRunPropertiesRequest): GlueFetchWorkflowRunProperties {
    return new GlueFetchWorkflowRunProperties(this, 'FetchWorkflowRunProperties', this.__resources, input);
  }

  public fetchWorkflowRuns(input: shapes.GlueGetWorkflowRunsRequest): GlueFetchWorkflowRuns {
    return new GlueFetchWorkflowRuns(this, 'FetchWorkflowRuns', this.__resources, input);
  }

  public importCatalogToGlue(input: shapes.GlueImportCatalogToGlueRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importCatalogToGlue',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ImportCatalogToGlue'),
        parameters: {
          CatalogId: input.catalogId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'ImportCatalogToGlue', props);
  }

  public listCrawlers(input: shapes.GlueListCrawlersRequest): GlueListCrawlers {
    return new GlueListCrawlers(this, 'ListCrawlers', this.__resources, input);
  }

  public listDevEndpoints(input: shapes.GlueListDevEndpointsRequest): GlueListDevEndpoints {
    return new GlueListDevEndpoints(this, 'ListDevEndpoints', this.__resources, input);
  }

  public listJobs(input: shapes.GlueListJobsRequest): GlueListJobs {
    return new GlueListJobs(this, 'ListJobs', this.__resources, input);
  }

  public listMlTransforms(input: shapes.GlueListMlTransformsRequest): GlueListMlTransforms {
    return new GlueListMlTransforms(this, 'ListMlTransforms', this.__resources, input);
  }

  public listRegistries(input: shapes.GlueListRegistriesInput): GlueListRegistries {
    return new GlueListRegistries(this, 'ListRegistries', this.__resources, input);
  }

  public listSchemaVersions(input: shapes.GlueListSchemaVersionsInput): GlueListSchemaVersions {
    return new GlueListSchemaVersions(this, 'ListSchemaVersions', this.__resources, input);
  }

  public listSchemas(input: shapes.GlueListSchemasInput): GlueListSchemas {
    return new GlueListSchemas(this, 'ListSchemas', this.__resources, input);
  }

  public listTriggers(input: shapes.GlueListTriggersRequest): GlueListTriggers {
    return new GlueListTriggers(this, 'ListTriggers', this.__resources, input);
  }

  public listWorkflows(input: shapes.GlueListWorkflowsRequest): GlueListWorkflows {
    return new GlueListWorkflows(this, 'ListWorkflows', this.__resources, input);
  }

  public putDataCatalogEncryptionSettings(input: shapes.GluePutDataCatalogEncryptionSettingsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putDataCatalogEncryptionSettings',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.PutDataCatalogEncryptionSettings'),
        parameters: {
          CatalogId: input.catalogId,
          DataCatalogEncryptionSettings: {
            EncryptionAtRest: {
              CatalogEncryptionMode: input.dataCatalogEncryptionSettings.encryptionAtRest?.catalogEncryptionMode,
              SseAwsKmsKeyId: input.dataCatalogEncryptionSettings.encryptionAtRest?.sseAwsKmsKeyId,
            },
            ConnectionPasswordEncryption: {
              ReturnConnectionPasswordEncrypted: input.dataCatalogEncryptionSettings.connectionPasswordEncryption?.returnConnectionPasswordEncrypted,
              AwsKmsKeyId: input.dataCatalogEncryptionSettings.connectionPasswordEncryption?.awsKmsKeyId,
            },
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutDataCatalogEncryptionSettings', props);
  }

  public putResourcePolicy(input: shapes.GluePutResourcePolicyRequest): GluePutResourcePolicy {
    return new GluePutResourcePolicy(this, 'PutResourcePolicy', this.__resources, input);
  }

  public putSchemaVersionMetadata(input: shapes.GluePutSchemaVersionMetadataInput): GluePutSchemaVersionMetadata {
    return new GluePutSchemaVersionMetadata(this, 'PutSchemaVersionMetadata', this.__resources, input);
  }

  public putWorkflowRunProperties(input: shapes.GluePutWorkflowRunPropertiesRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putWorkflowRunProperties',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.PutWorkflowRunProperties'),
        parameters: {
          Name: input.name,
          RunId: input.runId,
          RunProperties: input.runProperties,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutWorkflowRunProperties', props);
  }

  public querySchemaVersionMetadata(input: shapes.GlueQuerySchemaVersionMetadataInput): GlueQuerySchemaVersionMetadata {
    return new GlueQuerySchemaVersionMetadata(this, 'QuerySchemaVersionMetadata', this.__resources, input);
  }

  public registerSchemaVersion(input: shapes.GlueRegisterSchemaVersionInput): GlueRegisterSchemaVersion {
    return new GlueRegisterSchemaVersion(this, 'RegisterSchemaVersion', this.__resources, input);
  }

  public removeSchemaVersionMetadata(input: shapes.GlueRemoveSchemaVersionMetadataInput): GlueRemoveSchemaVersionMetadata {
    return new GlueRemoveSchemaVersionMetadata(this, 'RemoveSchemaVersionMetadata', this.__resources, input);
  }

  public resetJobBookmark(input: shapes.GlueResetJobBookmarkRequest): GlueResetJobBookmark {
    return new GlueResetJobBookmark(this, 'ResetJobBookmark', this.__resources, input);
  }

  public resumeWorkflowRun(input: shapes.GlueResumeWorkflowRunRequest): GlueResumeWorkflowRun {
    return new GlueResumeWorkflowRun(this, 'ResumeWorkflowRun', this.__resources, input);
  }

  public searchTables(input: shapes.GlueSearchTablesRequest): GlueSearchTables {
    return new GlueSearchTables(this, 'SearchTables', this.__resources, input);
  }

  public startCrawler(input: shapes.GlueStartCrawlerRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.StartCrawler'),
        parameters: {
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StartCrawler', props);
  }

  public startCrawlerSchedule(input: shapes.GlueStartCrawlerScheduleRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startCrawlerSchedule',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.StartCrawlerSchedule'),
        parameters: {
          CrawlerName: input.crawlerName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StartCrawlerSchedule', props);
  }

  public startExportLabelsTaskRun(input: shapes.GlueStartExportLabelsTaskRunRequest): GlueStartExportLabelsTaskRun {
    return new GlueStartExportLabelsTaskRun(this, 'StartExportLabelsTaskRun', this.__resources, input);
  }

  public startImportLabelsTaskRun(input: shapes.GlueStartImportLabelsTaskRunRequest): GlueStartImportLabelsTaskRun {
    return new GlueStartImportLabelsTaskRun(this, 'StartImportLabelsTaskRun', this.__resources, input);
  }

  public startJobRun(input: shapes.GlueStartJobRunRequest): GlueStartJobRun {
    return new GlueStartJobRun(this, 'StartJobRun', this.__resources, input);
  }

  public startMlEvaluationTaskRun(input: shapes.GlueStartMlEvaluationTaskRunRequest): GlueStartMlEvaluationTaskRun {
    return new GlueStartMlEvaluationTaskRun(this, 'StartMlEvaluationTaskRun', this.__resources, input);
  }

  public startMlLabelingSetGenerationTaskRun(input: shapes.GlueStartMlLabelingSetGenerationTaskRunRequest): GlueStartMlLabelingSetGenerationTaskRun {
    return new GlueStartMlLabelingSetGenerationTaskRun(this, 'StartMlLabelingSetGenerationTaskRun', this.__resources, input);
  }

  public startTrigger(input: shapes.GlueStartTriggerRequest): GlueStartTrigger {
    return new GlueStartTrigger(this, 'StartTrigger', this.__resources, input);
  }

  public startWorkflowRun(input: shapes.GlueStartWorkflowRunRequest): GlueStartWorkflowRun {
    return new GlueStartWorkflowRun(this, 'StartWorkflowRun', this.__resources, input);
  }

  public stopCrawler(input: shapes.GlueStopCrawlerRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.StopCrawler'),
        parameters: {
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StopCrawler', props);
  }

  public stopCrawlerSchedule(input: shapes.GlueStopCrawlerScheduleRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopCrawlerSchedule',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.StopCrawlerSchedule'),
        parameters: {
          CrawlerName: input.crawlerName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StopCrawlerSchedule', props);
  }

  public stopTrigger(input: shapes.GlueStopTriggerRequest): GlueStopTrigger {
    return new GlueStopTrigger(this, 'StopTrigger', this.__resources, input);
  }

  public stopWorkflowRun(input: shapes.GlueStopWorkflowRunRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopWorkflowRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.StopWorkflowRun'),
        parameters: {
          Name: input.name,
          RunId: input.runId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StopWorkflowRun', props);
  }

  public tagResource(input: shapes.GlueTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagsToAdd: input.tagsToAdd,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.GlueUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagsToRemove: input.tagsToRemove,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateClassifier(input: shapes.GlueUpdateClassifierRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateClassifier'),
        parameters: {
          GrokClassifier: {
            Name: input.grokClassifier?.name,
            Classification: input.grokClassifier?.classification,
            GrokPattern: input.grokClassifier?.grokPattern,
            CustomPatterns: input.grokClassifier?.customPatterns,
          },
          XMLClassifier: {
            Name: input.xmlClassifier?.name,
            Classification: input.xmlClassifier?.classification,
            RowTag: input.xmlClassifier?.rowTag,
          },
          JsonClassifier: {
            Name: input.jsonClassifier?.name,
            JsonPath: input.jsonClassifier?.jsonPath,
          },
          CsvClassifier: {
            Name: input.csvClassifier?.name,
            Delimiter: input.csvClassifier?.delimiter,
            QuoteSymbol: input.csvClassifier?.quoteSymbol,
            ContainsHeader: input.csvClassifier?.containsHeader,
            Header: input.csvClassifier?.header,
            DisableValueTrimming: input.csvClassifier?.disableValueTrimming,
            AllowSingleColumn: input.csvClassifier?.allowSingleColumn,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateClassifier', props);
  }

  public updateColumnStatisticsForPartition(input: shapes.GlueUpdateColumnStatisticsForPartitionRequest): GlueUpdateColumnStatisticsForPartition {
    return new GlueUpdateColumnStatisticsForPartition(this, 'UpdateColumnStatisticsForPartition', this.__resources, input);
  }

  public updateColumnStatisticsForTable(input: shapes.GlueUpdateColumnStatisticsForTableRequest): GlueUpdateColumnStatisticsForTable {
    return new GlueUpdateColumnStatisticsForTable(this, 'UpdateColumnStatisticsForTable', this.__resources, input);
  }

  public updateConnection(input: shapes.GlueUpdateConnectionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConnection',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateConnection'),
        parameters: {
          CatalogId: input.catalogId,
          Name: input.name,
          ConnectionInput: {
            Name: input.connectionInput.name,
            Description: input.connectionInput.description,
            ConnectionType: input.connectionInput.connectionType,
            MatchCriteria: input.connectionInput.matchCriteria,
            ConnectionProperties: input.connectionInput.connectionProperties,
            PhysicalConnectionRequirements: {
              SubnetId: input.connectionInput.physicalConnectionRequirements?.subnetId,
              SecurityGroupIdList: input.connectionInput.physicalConnectionRequirements?.securityGroupIdList,
              AvailabilityZone: input.connectionInput.physicalConnectionRequirements?.availabilityZone,
            },
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateConnection', props);
  }

  public updateCrawler(input: shapes.GlueUpdateCrawlerRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateCrawler'),
        parameters: {
          Name: input.name,
          Role: input.role,
          DatabaseName: input.databaseName,
          Description: input.description,
          Targets: {
            S3Targets: input.targets?.s3Targets,
            JdbcTargets: input.targets?.jdbcTargets,
            MongoDBTargets: input.targets?.mongoDbTargets,
            DynamoDBTargets: input.targets?.dynamoDbTargets,
            CatalogTargets: input.targets?.catalogTargets,
          },
          Schedule: input.schedule,
          Classifiers: input.classifiers,
          TablePrefix: input.tablePrefix,
          SchemaChangePolicy: {
            UpdateBehavior: input.schemaChangePolicy?.updateBehavior,
            DeleteBehavior: input.schemaChangePolicy?.deleteBehavior,
          },
          RecrawlPolicy: {
            RecrawlBehavior: input.recrawlPolicy?.recrawlBehavior,
          },
          LineageConfiguration: {
            CrawlerLineageSettings: input.lineageConfiguration?.crawlerLineageSettings,
          },
          Configuration: input.configuration,
          CrawlerSecurityConfiguration: input.crawlerSecurityConfiguration,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateCrawler', props);
  }

  public updateCrawlerSchedule(input: shapes.GlueUpdateCrawlerScheduleRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCrawlerSchedule',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateCrawlerSchedule'),
        parameters: {
          CrawlerName: input.crawlerName,
          Schedule: input.schedule,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateCrawlerSchedule', props);
  }

  public updateDatabase(input: shapes.GlueUpdateDatabaseRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDatabase',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateDatabase'),
        parameters: {
          CatalogId: input.catalogId,
          Name: input.name,
          DatabaseInput: {
            Name: input.databaseInput.name,
            Description: input.databaseInput.description,
            LocationUri: input.databaseInput.locationUri,
            Parameters: input.databaseInput.parameters,
            CreateTableDefaultPermissions: input.databaseInput.createTableDefaultPermissions,
            TargetDatabase: {
              CatalogId: input.databaseInput.targetDatabase?.catalogId,
              DatabaseName: input.databaseInput.targetDatabase?.databaseName,
            },
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateDatabase', props);
  }

  public updateDevEndpoint(input: shapes.GlueUpdateDevEndpointRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateDevEndpoint'),
        parameters: {
          EndpointName: input.endpointName,
          PublicKey: input.publicKey,
          AddPublicKeys: input.addPublicKeys,
          DeletePublicKeys: input.deletePublicKeys,
          CustomLibraries: {
            ExtraPythonLibsS3Path: input.customLibraries?.extraPythonLibsS3Path,
            ExtraJarsS3Path: input.customLibraries?.extraJarsS3Path,
          },
          UpdateEtlLibraries: input.updateEtlLibraries,
          DeleteArguments: input.deleteArguments,
          AddArguments: input.addArguments,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateDevEndpoint', props);
  }

  public updateJob(input: shapes.GlueUpdateJobRequest): GlueUpdateJob {
    return new GlueUpdateJob(this, 'UpdateJob', this.__resources, input);
  }

  public updateMlTransform(input: shapes.GlueUpdateMlTransformRequest): GlueUpdateMlTransform {
    return new GlueUpdateMlTransform(this, 'UpdateMlTransform', this.__resources, input);
  }

  public updatePartition(input: shapes.GlueUpdatePartitionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdatePartition'),
        parameters: {
          CatalogId: input.catalogId,
          DatabaseName: input.databaseName,
          TableName: input.tableName,
          PartitionValueList: input.partitionValueList,
          PartitionInput: {
            Values: input.partitionInput.values,
            LastAccessTime: input.partitionInput.lastAccessTime,
            StorageDescriptor: {
              Columns: input.partitionInput.storageDescriptor?.columns,
              Location: input.partitionInput.storageDescriptor?.location,
              InputFormat: input.partitionInput.storageDescriptor?.inputFormat,
              OutputFormat: input.partitionInput.storageDescriptor?.outputFormat,
              Compressed: input.partitionInput.storageDescriptor?.compressed,
              NumberOfBuckets: input.partitionInput.storageDescriptor?.numberOfBuckets,
              SerdeInfo: {
                Name: input.partitionInput.storageDescriptor?.serdeInfo?.name,
                SerializationLibrary: input.partitionInput.storageDescriptor?.serdeInfo?.serializationLibrary,
                Parameters: input.partitionInput.storageDescriptor?.serdeInfo?.parameters,
              },
              BucketColumns: input.partitionInput.storageDescriptor?.bucketColumns,
              SortColumns: input.partitionInput.storageDescriptor?.sortColumns,
              Parameters: input.partitionInput.storageDescriptor?.parameters,
              SkewedInfo: {
                SkewedColumnNames: input.partitionInput.storageDescriptor?.skewedInfo?.skewedColumnNames,
                SkewedColumnValues: input.partitionInput.storageDescriptor?.skewedInfo?.skewedColumnValues,
                SkewedColumnValueLocationMaps: input.partitionInput.storageDescriptor?.skewedInfo?.skewedColumnValueLocationMaps,
              },
              StoredAsSubDirectories: input.partitionInput.storageDescriptor?.storedAsSubDirectories,
              SchemaReference: {
                SchemaId: {
                  SchemaArn: input.partitionInput.storageDescriptor?.schemaReference?.schemaId?.schemaArn,
                  SchemaName: input.partitionInput.storageDescriptor?.schemaReference?.schemaId?.schemaName,
                  RegistryName: input.partitionInput.storageDescriptor?.schemaReference?.schemaId?.registryName,
                },
                SchemaVersionId: input.partitionInput.storageDescriptor?.schemaReference?.schemaVersionId,
                SchemaVersionNumber: input.partitionInput.storageDescriptor?.schemaReference?.schemaVersionNumber,
              },
            },
            Parameters: input.partitionInput.parameters,
            LastAnalyzedTime: input.partitionInput.lastAnalyzedTime,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdatePartition', props);
  }

  public updateRegistry(input: shapes.GlueUpdateRegistryInput): GlueUpdateRegistry {
    return new GlueUpdateRegistry(this, 'UpdateRegistry', this.__resources, input);
  }

  public updateSchema(input: shapes.GlueUpdateSchemaInput): GlueUpdateSchema {
    return new GlueUpdateSchema(this, 'UpdateSchema', this.__resources, input);
  }

  public updateTable(input: shapes.GlueUpdateTableRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateTable'),
        parameters: {
          CatalogId: input.catalogId,
          DatabaseName: input.databaseName,
          TableInput: {
            Name: input.tableInput.name,
            Description: input.tableInput.description,
            Owner: input.tableInput.owner,
            LastAccessTime: input.tableInput.lastAccessTime,
            LastAnalyzedTime: input.tableInput.lastAnalyzedTime,
            Retention: input.tableInput.retention,
            StorageDescriptor: {
              Columns: input.tableInput.storageDescriptor?.columns,
              Location: input.tableInput.storageDescriptor?.location,
              InputFormat: input.tableInput.storageDescriptor?.inputFormat,
              OutputFormat: input.tableInput.storageDescriptor?.outputFormat,
              Compressed: input.tableInput.storageDescriptor?.compressed,
              NumberOfBuckets: input.tableInput.storageDescriptor?.numberOfBuckets,
              SerdeInfo: {
                Name: input.tableInput.storageDescriptor?.serdeInfo?.name,
                SerializationLibrary: input.tableInput.storageDescriptor?.serdeInfo?.serializationLibrary,
                Parameters: input.tableInput.storageDescriptor?.serdeInfo?.parameters,
              },
              BucketColumns: input.tableInput.storageDescriptor?.bucketColumns,
              SortColumns: input.tableInput.storageDescriptor?.sortColumns,
              Parameters: input.tableInput.storageDescriptor?.parameters,
              SkewedInfo: {
                SkewedColumnNames: input.tableInput.storageDescriptor?.skewedInfo?.skewedColumnNames,
                SkewedColumnValues: input.tableInput.storageDescriptor?.skewedInfo?.skewedColumnValues,
                SkewedColumnValueLocationMaps: input.tableInput.storageDescriptor?.skewedInfo?.skewedColumnValueLocationMaps,
              },
              StoredAsSubDirectories: input.tableInput.storageDescriptor?.storedAsSubDirectories,
              SchemaReference: {
                SchemaId: {
                  SchemaArn: input.tableInput.storageDescriptor?.schemaReference?.schemaId?.schemaArn,
                  SchemaName: input.tableInput.storageDescriptor?.schemaReference?.schemaId?.schemaName,
                  RegistryName: input.tableInput.storageDescriptor?.schemaReference?.schemaId?.registryName,
                },
                SchemaVersionId: input.tableInput.storageDescriptor?.schemaReference?.schemaVersionId,
                SchemaVersionNumber: input.tableInput.storageDescriptor?.schemaReference?.schemaVersionNumber,
              },
            },
            PartitionKeys: input.tableInput.partitionKeys,
            ViewOriginalText: input.tableInput.viewOriginalText,
            ViewExpandedText: input.tableInput.viewExpandedText,
            TableType: input.tableInput.tableType,
            Parameters: input.tableInput.parameters,
            TargetTable: {
              CatalogId: input.tableInput.targetTable?.catalogId,
              DatabaseName: input.tableInput.targetTable?.databaseName,
              Name: input.tableInput.targetTable?.name,
            },
          },
          SkipArchive: input.skipArchive,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateTable', props);
  }

  public updateTrigger(input: shapes.GlueUpdateTriggerRequest): GlueUpdateTrigger {
    return new GlueUpdateTrigger(this, 'UpdateTrigger', this.__resources, input);
  }

  public updateUserDefinedFunction(input: shapes.GlueUpdateUserDefinedFunctionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUserDefinedFunction',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateUserDefinedFunction'),
        parameters: {
          CatalogId: input.catalogId,
          DatabaseName: input.databaseName,
          FunctionName: input.functionName,
          FunctionInput: {
            FunctionName: input.functionInput.functionName,
            ClassName: input.functionInput.className,
            OwnerName: input.functionInput.ownerName,
            OwnerType: input.functionInput.ownerType,
            ResourceUris: input.functionInput.resourceUris,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateUserDefinedFunction', props);
  }

  public updateWorkflow(input: shapes.GlueUpdateWorkflowRequest): GlueUpdateWorkflow {
    return new GlueUpdateWorkflow(this, 'UpdateWorkflow', this.__resources, input);
  }

}

export class GlueBatchCreatePartition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueBatchCreatePartitionRequest) {
    super(scope, id);
  }

  public get errors(): shapes.GluePartitionError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchCreatePartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.BatchCreatePartition.Errors'),
        outputPath: 'Errors',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          PartitionInputList: this.input.partitionInputList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchCreatePartition.Errors', props);
    return resource.getResponseField('Errors') as unknown as shapes.GluePartitionError[];
  }

}

export class GlueBatchDeleteConnection extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueBatchDeleteConnectionRequest) {
    super(scope, id);
  }

  public get succeeded(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDeleteConnection',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.BatchDeleteConnection.Succeeded'),
        outputPath: 'Succeeded',
        parameters: {
          CatalogId: this.input.catalogId,
          ConnectionNameList: this.input.connectionNameList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchDeleteConnection.Succeeded', props);
    return resource.getResponseField('Succeeded') as unknown as string[];
  }

  public get errors(): Record<string, shapes.GlueErrorDetail> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDeleteConnection',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.BatchDeleteConnection.Errors'),
        outputPath: 'Errors',
        parameters: {
          CatalogId: this.input.catalogId,
          ConnectionNameList: this.input.connectionNameList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchDeleteConnection.Errors', props);
    return resource.getResponseField('Errors') as unknown as Record<string, shapes.GlueErrorDetail>;
  }

}

export class GlueBatchDeletePartition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueBatchDeletePartitionRequest) {
    super(scope, id);
  }

  public get errors(): shapes.GluePartitionError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDeletePartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.BatchDeletePartition.Errors'),
        outputPath: 'Errors',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          PartitionsToDelete: this.input.partitionsToDelete,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchDeletePartition.Errors', props);
    return resource.getResponseField('Errors') as unknown as shapes.GluePartitionError[];
  }

}

export class GlueBatchDeleteTable extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueBatchDeleteTableRequest) {
    super(scope, id);
  }

  public get errors(): shapes.GlueTableError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDeleteTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.BatchDeleteTable.Errors'),
        outputPath: 'Errors',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TablesToDelete: this.input.tablesToDelete,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchDeleteTable.Errors', props);
    return resource.getResponseField('Errors') as unknown as shapes.GlueTableError[];
  }

}

export class GlueBatchDeleteTableVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueBatchDeleteTableVersionRequest) {
    super(scope, id);
  }

  public get errors(): shapes.GlueTableVersionError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDeleteTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.BatchDeleteTableVersion.Errors'),
        outputPath: 'Errors',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          VersionIds: this.input.versionIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchDeleteTableVersion.Errors', props);
    return resource.getResponseField('Errors') as unknown as shapes.GlueTableVersionError[];
  }

}

export class GlueBatchGetCrawlers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueBatchGetCrawlersRequest) {
    super(scope, id);
  }

  public get crawlers(): shapes.GlueCrawler[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetCrawlers',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.BatchGetCrawlers.Crawlers'),
        outputPath: 'Crawlers',
        parameters: {
          CrawlerNames: this.input.crawlerNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetCrawlers.Crawlers', props);
    return resource.getResponseField('Crawlers') as unknown as shapes.GlueCrawler[];
  }

  public get crawlersNotFound(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetCrawlers',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.BatchGetCrawlers.CrawlersNotFound'),
        outputPath: 'CrawlersNotFound',
        parameters: {
          CrawlerNames: this.input.crawlerNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetCrawlers.CrawlersNotFound', props);
    return resource.getResponseField('CrawlersNotFound') as unknown as string[];
  }

}

export class GlueBatchGetDevEndpoints extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueBatchGetDevEndpointsRequest) {
    super(scope, id);
  }

  public get devEndpoints(): shapes.GlueDevEndpoint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetDevEndpoints',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.BatchGetDevEndpoints.DevEndpoints'),
        outputPath: 'DevEndpoints',
        parameters: {
          DevEndpointNames: this.input.devEndpointNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetDevEndpoints.DevEndpoints', props);
    return resource.getResponseField('DevEndpoints') as unknown as shapes.GlueDevEndpoint[];
  }

  public get devEndpointsNotFound(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetDevEndpoints',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.BatchGetDevEndpoints.DevEndpointsNotFound'),
        outputPath: 'DevEndpointsNotFound',
        parameters: {
          DevEndpointNames: this.input.devEndpointNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetDevEndpoints.DevEndpointsNotFound', props);
    return resource.getResponseField('DevEndpointsNotFound') as unknown as string[];
  }

}

export class GlueBatchGetJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueBatchGetJobsRequest) {
    super(scope, id);
  }

  public get jobs(): shapes.GlueJob[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetJobs',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.BatchGetJobs.Jobs'),
        outputPath: 'Jobs',
        parameters: {
          JobNames: this.input.jobNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetJobs.Jobs', props);
    return resource.getResponseField('Jobs') as unknown as shapes.GlueJob[];
  }

  public get jobsNotFound(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetJobs',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.BatchGetJobs.JobsNotFound'),
        outputPath: 'JobsNotFound',
        parameters: {
          JobNames: this.input.jobNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetJobs.JobsNotFound', props);
    return resource.getResponseField('JobsNotFound') as unknown as string[];
  }

}

export class GlueBatchGetPartition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueBatchGetPartitionRequest) {
    super(scope, id);
  }

  public get partitions(): shapes.GluePartition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.BatchGetPartition.Partitions'),
        outputPath: 'Partitions',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          PartitionsToGet: this.input.partitionsToGet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetPartition.Partitions', props);
    return resource.getResponseField('Partitions') as unknown as shapes.GluePartition[];
  }

  public get unprocessedKeys(): shapes.GluePartitionValueList[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.BatchGetPartition.UnprocessedKeys'),
        outputPath: 'UnprocessedKeys',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          PartitionsToGet: this.input.partitionsToGet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetPartition.UnprocessedKeys', props);
    return resource.getResponseField('UnprocessedKeys') as unknown as shapes.GluePartitionValueList[];
  }

}

export class GlueBatchGetTriggers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueBatchGetTriggersRequest) {
    super(scope, id);
  }

  public get triggers(): shapes.GlueTrigger[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetTriggers',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.BatchGetTriggers.Triggers'),
        outputPath: 'Triggers',
        parameters: {
          TriggerNames: this.input.triggerNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetTriggers.Triggers', props);
    return resource.getResponseField('Triggers') as unknown as shapes.GlueTrigger[];
  }

  public get triggersNotFound(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetTriggers',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.BatchGetTriggers.TriggersNotFound'),
        outputPath: 'TriggersNotFound',
        parameters: {
          TriggerNames: this.input.triggerNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetTriggers.TriggersNotFound', props);
    return resource.getResponseField('TriggersNotFound') as unknown as string[];
  }

}

export class GlueBatchGetWorkflows extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueBatchGetWorkflowsRequest) {
    super(scope, id);
  }

  public get workflows(): shapes.GlueWorkflow[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetWorkflows',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.BatchGetWorkflows.Workflows'),
        outputPath: 'Workflows',
        parameters: {
          Names: this.input.names,
          IncludeGraph: this.input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetWorkflows.Workflows', props);
    return resource.getResponseField('Workflows') as unknown as shapes.GlueWorkflow[];
  }

  public get missingWorkflows(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetWorkflows',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.BatchGetWorkflows.MissingWorkflows'),
        outputPath: 'MissingWorkflows',
        parameters: {
          Names: this.input.names,
          IncludeGraph: this.input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetWorkflows.MissingWorkflows', props);
    return resource.getResponseField('MissingWorkflows') as unknown as string[];
  }

}

export class GlueBatchStopJobRun extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueBatchStopJobRunRequest) {
    super(scope, id);
  }

  public get successfulSubmissions(): shapes.GlueBatchStopJobRunSuccessfulSubmission[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchStopJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.BatchStopJobRun.SuccessfulSubmissions'),
        outputPath: 'SuccessfulSubmissions',
        parameters: {
          JobName: this.input.jobName,
          JobRunIds: this.input.jobRunIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchStopJobRun.SuccessfulSubmissions', props);
    return resource.getResponseField('SuccessfulSubmissions') as unknown as shapes.GlueBatchStopJobRunSuccessfulSubmission[];
  }

  public get errors(): shapes.GlueBatchStopJobRunError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchStopJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.BatchStopJobRun.Errors'),
        outputPath: 'Errors',
        parameters: {
          JobName: this.input.jobName,
          JobRunIds: this.input.jobRunIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchStopJobRun.Errors', props);
    return resource.getResponseField('Errors') as unknown as shapes.GlueBatchStopJobRunError[];
  }

}

export class GlueBatchUpdatePartition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueBatchUpdatePartitionRequest) {
    super(scope, id);
  }

  public get errors(): shapes.GlueBatchUpdatePartitionFailureEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchUpdatePartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.BatchUpdatePartition.Errors'),
        outputPath: 'Errors',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          Entries: this.input.entries,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchUpdatePartition.Errors', props);
    return resource.getResponseField('Errors') as unknown as shapes.GlueBatchUpdatePartitionFailureEntry[];
  }

}

export class GlueCancelMlTaskRun extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueCancelMlTaskRunRequest) {
    super(scope, id);
  }

  public get transformId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelMlTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CancelMLTaskRun.TransformId'),
        outputPath: 'TransformId',
        parameters: {
          TransformId: this.input.transformId,
          TaskRunId: this.input.taskRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CancelMLTaskRun.TransformId', props);
    return resource.getResponseField('TransformId') as unknown as string;
  }

  public get taskRunId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelMlTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CancelMLTaskRun.TaskRunId'),
        outputPath: 'TaskRunId',
        parameters: {
          TransformId: this.input.transformId,
          TaskRunId: this.input.taskRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CancelMLTaskRun.TaskRunId', props);
    return resource.getResponseField('TaskRunId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelMlTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CancelMLTaskRun.Status'),
        outputPath: 'Status',
        parameters: {
          TransformId: this.input.transformId,
          TaskRunId: this.input.taskRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CancelMLTaskRun.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class GlueCheckSchemaVersionValidity extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueCheckSchemaVersionValidityInput) {
    super(scope, id);
  }

  public get valid(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'checkSchemaVersionValidity',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CheckSchemaVersionValidity.Valid'),
        outputPath: 'Valid',
        parameters: {
          DataFormat: this.input.dataFormat,
          SchemaDefinition: this.input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CheckSchemaVersionValidity.Valid', props);
    return resource.getResponseField('Valid') as unknown as boolean;
  }

  public get error(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'checkSchemaVersionValidity',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CheckSchemaVersionValidity.Error'),
        outputPath: 'Error',
        parameters: {
          DataFormat: this.input.dataFormat,
          SchemaDefinition: this.input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CheckSchemaVersionValidity.Error', props);
    return resource.getResponseField('Error') as unknown as string;
  }

}

export class GlueCreateDevEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueCreateDevEndpointRequest) {
    super(scope, id);
  }

  public get endpointName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateDevEndpoint.EndpointName'),
        outputPath: 'EndpointName',
        parameters: {
          EndpointName: this.input.endpointName,
          RoleArn: this.input.roleArn,
          SecurityGroupIds: this.input.securityGroupIds,
          SubnetId: this.input.subnetId,
          PublicKey: this.input.publicKey,
          PublicKeys: this.input.publicKeys,
          NumberOfNodes: this.input.numberOfNodes,
          WorkerType: this.input.workerType,
          GlueVersion: this.input.glueVersion,
          NumberOfWorkers: this.input.numberOfWorkers,
          ExtraPythonLibsS3Path: this.input.extraPythonLibsS3Path,
          ExtraJarsS3Path: this.input.extraJarsS3Path,
          SecurityConfiguration: this.input.securityConfiguration,
          Tags: this.input.tags,
          Arguments: this.input.arguments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDevEndpoint.EndpointName', props);
    return resource.getResponseField('EndpointName') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateDevEndpoint.Status'),
        outputPath: 'Status',
        parameters: {
          EndpointName: this.input.endpointName,
          RoleArn: this.input.roleArn,
          SecurityGroupIds: this.input.securityGroupIds,
          SubnetId: this.input.subnetId,
          PublicKey: this.input.publicKey,
          PublicKeys: this.input.publicKeys,
          NumberOfNodes: this.input.numberOfNodes,
          WorkerType: this.input.workerType,
          GlueVersion: this.input.glueVersion,
          NumberOfWorkers: this.input.numberOfWorkers,
          ExtraPythonLibsS3Path: this.input.extraPythonLibsS3Path,
          ExtraJarsS3Path: this.input.extraJarsS3Path,
          SecurityConfiguration: this.input.securityConfiguration,
          Tags: this.input.tags,
          Arguments: this.input.arguments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDevEndpoint.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateDevEndpoint.SecurityGroupIds'),
        outputPath: 'SecurityGroupIds',
        parameters: {
          EndpointName: this.input.endpointName,
          RoleArn: this.input.roleArn,
          SecurityGroupIds: this.input.securityGroupIds,
          SubnetId: this.input.subnetId,
          PublicKey: this.input.publicKey,
          PublicKeys: this.input.publicKeys,
          NumberOfNodes: this.input.numberOfNodes,
          WorkerType: this.input.workerType,
          GlueVersion: this.input.glueVersion,
          NumberOfWorkers: this.input.numberOfWorkers,
          ExtraPythonLibsS3Path: this.input.extraPythonLibsS3Path,
          ExtraJarsS3Path: this.input.extraJarsS3Path,
          SecurityConfiguration: this.input.securityConfiguration,
          Tags: this.input.tags,
          Arguments: this.input.arguments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDevEndpoint.SecurityGroupIds', props);
    return resource.getResponseField('SecurityGroupIds') as unknown as string[];
  }

  public get subnetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateDevEndpoint.SubnetId'),
        outputPath: 'SubnetId',
        parameters: {
          EndpointName: this.input.endpointName,
          RoleArn: this.input.roleArn,
          SecurityGroupIds: this.input.securityGroupIds,
          SubnetId: this.input.subnetId,
          PublicKey: this.input.publicKey,
          PublicKeys: this.input.publicKeys,
          NumberOfNodes: this.input.numberOfNodes,
          WorkerType: this.input.workerType,
          GlueVersion: this.input.glueVersion,
          NumberOfWorkers: this.input.numberOfWorkers,
          ExtraPythonLibsS3Path: this.input.extraPythonLibsS3Path,
          ExtraJarsS3Path: this.input.extraJarsS3Path,
          SecurityConfiguration: this.input.securityConfiguration,
          Tags: this.input.tags,
          Arguments: this.input.arguments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDevEndpoint.SubnetId', props);
    return resource.getResponseField('SubnetId') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateDevEndpoint.RoleArn'),
        outputPath: 'RoleArn',
        parameters: {
          EndpointName: this.input.endpointName,
          RoleArn: this.input.roleArn,
          SecurityGroupIds: this.input.securityGroupIds,
          SubnetId: this.input.subnetId,
          PublicKey: this.input.publicKey,
          PublicKeys: this.input.publicKeys,
          NumberOfNodes: this.input.numberOfNodes,
          WorkerType: this.input.workerType,
          GlueVersion: this.input.glueVersion,
          NumberOfWorkers: this.input.numberOfWorkers,
          ExtraPythonLibsS3Path: this.input.extraPythonLibsS3Path,
          ExtraJarsS3Path: this.input.extraJarsS3Path,
          SecurityConfiguration: this.input.securityConfiguration,
          Tags: this.input.tags,
          Arguments: this.input.arguments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDevEndpoint.RoleArn', props);
    return resource.getResponseField('RoleArn') as unknown as string;
  }

  public get yarnEndpointAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateDevEndpoint.YarnEndpointAddress'),
        outputPath: 'YarnEndpointAddress',
        parameters: {
          EndpointName: this.input.endpointName,
          RoleArn: this.input.roleArn,
          SecurityGroupIds: this.input.securityGroupIds,
          SubnetId: this.input.subnetId,
          PublicKey: this.input.publicKey,
          PublicKeys: this.input.publicKeys,
          NumberOfNodes: this.input.numberOfNodes,
          WorkerType: this.input.workerType,
          GlueVersion: this.input.glueVersion,
          NumberOfWorkers: this.input.numberOfWorkers,
          ExtraPythonLibsS3Path: this.input.extraPythonLibsS3Path,
          ExtraJarsS3Path: this.input.extraJarsS3Path,
          SecurityConfiguration: this.input.securityConfiguration,
          Tags: this.input.tags,
          Arguments: this.input.arguments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDevEndpoint.YarnEndpointAddress', props);
    return resource.getResponseField('YarnEndpointAddress') as unknown as string;
  }

  public get zeppelinRemoteSparkInterpreterPort(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateDevEndpoint.ZeppelinRemoteSparkInterpreterPort'),
        outputPath: 'ZeppelinRemoteSparkInterpreterPort',
        parameters: {
          EndpointName: this.input.endpointName,
          RoleArn: this.input.roleArn,
          SecurityGroupIds: this.input.securityGroupIds,
          SubnetId: this.input.subnetId,
          PublicKey: this.input.publicKey,
          PublicKeys: this.input.publicKeys,
          NumberOfNodes: this.input.numberOfNodes,
          WorkerType: this.input.workerType,
          GlueVersion: this.input.glueVersion,
          NumberOfWorkers: this.input.numberOfWorkers,
          ExtraPythonLibsS3Path: this.input.extraPythonLibsS3Path,
          ExtraJarsS3Path: this.input.extraJarsS3Path,
          SecurityConfiguration: this.input.securityConfiguration,
          Tags: this.input.tags,
          Arguments: this.input.arguments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDevEndpoint.ZeppelinRemoteSparkInterpreterPort', props);
    return resource.getResponseField('ZeppelinRemoteSparkInterpreterPort') as unknown as number;
  }

  public get numberOfNodes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateDevEndpoint.NumberOfNodes'),
        outputPath: 'NumberOfNodes',
        parameters: {
          EndpointName: this.input.endpointName,
          RoleArn: this.input.roleArn,
          SecurityGroupIds: this.input.securityGroupIds,
          SubnetId: this.input.subnetId,
          PublicKey: this.input.publicKey,
          PublicKeys: this.input.publicKeys,
          NumberOfNodes: this.input.numberOfNodes,
          WorkerType: this.input.workerType,
          GlueVersion: this.input.glueVersion,
          NumberOfWorkers: this.input.numberOfWorkers,
          ExtraPythonLibsS3Path: this.input.extraPythonLibsS3Path,
          ExtraJarsS3Path: this.input.extraJarsS3Path,
          SecurityConfiguration: this.input.securityConfiguration,
          Tags: this.input.tags,
          Arguments: this.input.arguments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDevEndpoint.NumberOfNodes', props);
    return resource.getResponseField('NumberOfNodes') as unknown as number;
  }

  public get workerType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateDevEndpoint.WorkerType'),
        outputPath: 'WorkerType',
        parameters: {
          EndpointName: this.input.endpointName,
          RoleArn: this.input.roleArn,
          SecurityGroupIds: this.input.securityGroupIds,
          SubnetId: this.input.subnetId,
          PublicKey: this.input.publicKey,
          PublicKeys: this.input.publicKeys,
          NumberOfNodes: this.input.numberOfNodes,
          WorkerType: this.input.workerType,
          GlueVersion: this.input.glueVersion,
          NumberOfWorkers: this.input.numberOfWorkers,
          ExtraPythonLibsS3Path: this.input.extraPythonLibsS3Path,
          ExtraJarsS3Path: this.input.extraJarsS3Path,
          SecurityConfiguration: this.input.securityConfiguration,
          Tags: this.input.tags,
          Arguments: this.input.arguments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDevEndpoint.WorkerType', props);
    return resource.getResponseField('WorkerType') as unknown as string;
  }

  public get glueVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateDevEndpoint.GlueVersion'),
        outputPath: 'GlueVersion',
        parameters: {
          EndpointName: this.input.endpointName,
          RoleArn: this.input.roleArn,
          SecurityGroupIds: this.input.securityGroupIds,
          SubnetId: this.input.subnetId,
          PublicKey: this.input.publicKey,
          PublicKeys: this.input.publicKeys,
          NumberOfNodes: this.input.numberOfNodes,
          WorkerType: this.input.workerType,
          GlueVersion: this.input.glueVersion,
          NumberOfWorkers: this.input.numberOfWorkers,
          ExtraPythonLibsS3Path: this.input.extraPythonLibsS3Path,
          ExtraJarsS3Path: this.input.extraJarsS3Path,
          SecurityConfiguration: this.input.securityConfiguration,
          Tags: this.input.tags,
          Arguments: this.input.arguments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDevEndpoint.GlueVersion', props);
    return resource.getResponseField('GlueVersion') as unknown as string;
  }

  public get numberOfWorkers(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateDevEndpoint.NumberOfWorkers'),
        outputPath: 'NumberOfWorkers',
        parameters: {
          EndpointName: this.input.endpointName,
          RoleArn: this.input.roleArn,
          SecurityGroupIds: this.input.securityGroupIds,
          SubnetId: this.input.subnetId,
          PublicKey: this.input.publicKey,
          PublicKeys: this.input.publicKeys,
          NumberOfNodes: this.input.numberOfNodes,
          WorkerType: this.input.workerType,
          GlueVersion: this.input.glueVersion,
          NumberOfWorkers: this.input.numberOfWorkers,
          ExtraPythonLibsS3Path: this.input.extraPythonLibsS3Path,
          ExtraJarsS3Path: this.input.extraJarsS3Path,
          SecurityConfiguration: this.input.securityConfiguration,
          Tags: this.input.tags,
          Arguments: this.input.arguments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDevEndpoint.NumberOfWorkers', props);
    return resource.getResponseField('NumberOfWorkers') as unknown as number;
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateDevEndpoint.AvailabilityZone'),
        outputPath: 'AvailabilityZone',
        parameters: {
          EndpointName: this.input.endpointName,
          RoleArn: this.input.roleArn,
          SecurityGroupIds: this.input.securityGroupIds,
          SubnetId: this.input.subnetId,
          PublicKey: this.input.publicKey,
          PublicKeys: this.input.publicKeys,
          NumberOfNodes: this.input.numberOfNodes,
          WorkerType: this.input.workerType,
          GlueVersion: this.input.glueVersion,
          NumberOfWorkers: this.input.numberOfWorkers,
          ExtraPythonLibsS3Path: this.input.extraPythonLibsS3Path,
          ExtraJarsS3Path: this.input.extraJarsS3Path,
          SecurityConfiguration: this.input.securityConfiguration,
          Tags: this.input.tags,
          Arguments: this.input.arguments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDevEndpoint.AvailabilityZone', props);
    return resource.getResponseField('AvailabilityZone') as unknown as string;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateDevEndpoint.VpcId'),
        outputPath: 'VpcId',
        parameters: {
          EndpointName: this.input.endpointName,
          RoleArn: this.input.roleArn,
          SecurityGroupIds: this.input.securityGroupIds,
          SubnetId: this.input.subnetId,
          PublicKey: this.input.publicKey,
          PublicKeys: this.input.publicKeys,
          NumberOfNodes: this.input.numberOfNodes,
          WorkerType: this.input.workerType,
          GlueVersion: this.input.glueVersion,
          NumberOfWorkers: this.input.numberOfWorkers,
          ExtraPythonLibsS3Path: this.input.extraPythonLibsS3Path,
          ExtraJarsS3Path: this.input.extraJarsS3Path,
          SecurityConfiguration: this.input.securityConfiguration,
          Tags: this.input.tags,
          Arguments: this.input.arguments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDevEndpoint.VpcId', props);
    return resource.getResponseField('VpcId') as unknown as string;
  }

  public get extraPythonLibsS3Path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateDevEndpoint.ExtraPythonLibsS3Path'),
        outputPath: 'ExtraPythonLibsS3Path',
        parameters: {
          EndpointName: this.input.endpointName,
          RoleArn: this.input.roleArn,
          SecurityGroupIds: this.input.securityGroupIds,
          SubnetId: this.input.subnetId,
          PublicKey: this.input.publicKey,
          PublicKeys: this.input.publicKeys,
          NumberOfNodes: this.input.numberOfNodes,
          WorkerType: this.input.workerType,
          GlueVersion: this.input.glueVersion,
          NumberOfWorkers: this.input.numberOfWorkers,
          ExtraPythonLibsS3Path: this.input.extraPythonLibsS3Path,
          ExtraJarsS3Path: this.input.extraJarsS3Path,
          SecurityConfiguration: this.input.securityConfiguration,
          Tags: this.input.tags,
          Arguments: this.input.arguments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDevEndpoint.ExtraPythonLibsS3Path', props);
    return resource.getResponseField('ExtraPythonLibsS3Path') as unknown as string;
  }

  public get extraJarsS3Path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateDevEndpoint.ExtraJarsS3Path'),
        outputPath: 'ExtraJarsS3Path',
        parameters: {
          EndpointName: this.input.endpointName,
          RoleArn: this.input.roleArn,
          SecurityGroupIds: this.input.securityGroupIds,
          SubnetId: this.input.subnetId,
          PublicKey: this.input.publicKey,
          PublicKeys: this.input.publicKeys,
          NumberOfNodes: this.input.numberOfNodes,
          WorkerType: this.input.workerType,
          GlueVersion: this.input.glueVersion,
          NumberOfWorkers: this.input.numberOfWorkers,
          ExtraPythonLibsS3Path: this.input.extraPythonLibsS3Path,
          ExtraJarsS3Path: this.input.extraJarsS3Path,
          SecurityConfiguration: this.input.securityConfiguration,
          Tags: this.input.tags,
          Arguments: this.input.arguments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDevEndpoint.ExtraJarsS3Path', props);
    return resource.getResponseField('ExtraJarsS3Path') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateDevEndpoint.FailureReason'),
        outputPath: 'FailureReason',
        parameters: {
          EndpointName: this.input.endpointName,
          RoleArn: this.input.roleArn,
          SecurityGroupIds: this.input.securityGroupIds,
          SubnetId: this.input.subnetId,
          PublicKey: this.input.publicKey,
          PublicKeys: this.input.publicKeys,
          NumberOfNodes: this.input.numberOfNodes,
          WorkerType: this.input.workerType,
          GlueVersion: this.input.glueVersion,
          NumberOfWorkers: this.input.numberOfWorkers,
          ExtraPythonLibsS3Path: this.input.extraPythonLibsS3Path,
          ExtraJarsS3Path: this.input.extraJarsS3Path,
          SecurityConfiguration: this.input.securityConfiguration,
          Tags: this.input.tags,
          Arguments: this.input.arguments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDevEndpoint.FailureReason', props);
    return resource.getResponseField('FailureReason') as unknown as string;
  }

  public get securityConfiguration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateDevEndpoint.SecurityConfiguration'),
        outputPath: 'SecurityConfiguration',
        parameters: {
          EndpointName: this.input.endpointName,
          RoleArn: this.input.roleArn,
          SecurityGroupIds: this.input.securityGroupIds,
          SubnetId: this.input.subnetId,
          PublicKey: this.input.publicKey,
          PublicKeys: this.input.publicKeys,
          NumberOfNodes: this.input.numberOfNodes,
          WorkerType: this.input.workerType,
          GlueVersion: this.input.glueVersion,
          NumberOfWorkers: this.input.numberOfWorkers,
          ExtraPythonLibsS3Path: this.input.extraPythonLibsS3Path,
          ExtraJarsS3Path: this.input.extraJarsS3Path,
          SecurityConfiguration: this.input.securityConfiguration,
          Tags: this.input.tags,
          Arguments: this.input.arguments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDevEndpoint.SecurityConfiguration', props);
    return resource.getResponseField('SecurityConfiguration') as unknown as string;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateDevEndpoint.CreatedTimestamp'),
        outputPath: 'CreatedTimestamp',
        parameters: {
          EndpointName: this.input.endpointName,
          RoleArn: this.input.roleArn,
          SecurityGroupIds: this.input.securityGroupIds,
          SubnetId: this.input.subnetId,
          PublicKey: this.input.publicKey,
          PublicKeys: this.input.publicKeys,
          NumberOfNodes: this.input.numberOfNodes,
          WorkerType: this.input.workerType,
          GlueVersion: this.input.glueVersion,
          NumberOfWorkers: this.input.numberOfWorkers,
          ExtraPythonLibsS3Path: this.input.extraPythonLibsS3Path,
          ExtraJarsS3Path: this.input.extraJarsS3Path,
          SecurityConfiguration: this.input.securityConfiguration,
          Tags: this.input.tags,
          Arguments: this.input.arguments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDevEndpoint.CreatedTimestamp', props);
    return resource.getResponseField('CreatedTimestamp') as unknown as string;
  }

  public get arguments(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateDevEndpoint.Arguments'),
        outputPath: 'Arguments',
        parameters: {
          EndpointName: this.input.endpointName,
          RoleArn: this.input.roleArn,
          SecurityGroupIds: this.input.securityGroupIds,
          SubnetId: this.input.subnetId,
          PublicKey: this.input.publicKey,
          PublicKeys: this.input.publicKeys,
          NumberOfNodes: this.input.numberOfNodes,
          WorkerType: this.input.workerType,
          GlueVersion: this.input.glueVersion,
          NumberOfWorkers: this.input.numberOfWorkers,
          ExtraPythonLibsS3Path: this.input.extraPythonLibsS3Path,
          ExtraJarsS3Path: this.input.extraJarsS3Path,
          SecurityConfiguration: this.input.securityConfiguration,
          Tags: this.input.tags,
          Arguments: this.input.arguments,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDevEndpoint.Arguments', props);
    return resource.getResponseField('Arguments') as unknown as Record<string, string>;
  }

}

export class GlueCreateJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueCreateJobRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateJob.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          LogUri: this.input.logUri,
          Role: this.input.role,
          ExecutionProperty: {
            MaxConcurrentRuns: this.input.executionProperty?.maxConcurrentRuns,
          },
          Command: {
            Name: this.input.command.name,
            ScriptLocation: this.input.command.scriptLocation,
            PythonVersion: this.input.command.pythonVersion,
          },
          DefaultArguments: this.input.defaultArguments,
          NonOverridableArguments: this.input.nonOverridableArguments,
          Connections: {
            Connections: this.input.connections?.connections,
          },
          MaxRetries: this.input.maxRetries,
          AllocatedCapacity: this.input.allocatedCapacity,
          Timeout: this.input.timeout,
          MaxCapacity: this.input.maxCapacity,
          SecurityConfiguration: this.input.securityConfiguration,
          Tags: this.input.tags,
          NotificationProperty: {
            NotifyDelayAfter: this.input.notificationProperty?.notifyDelayAfter,
          },
          GlueVersion: this.input.glueVersion,
          NumberOfWorkers: this.input.numberOfWorkers,
          WorkerType: this.input.workerType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class GlueCreateMlTransform extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueCreateMlTransformRequest) {
    super(scope, id);
  }

  public get transformId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateMLTransform.TransformId'),
        outputPath: 'TransformId',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          InputRecordTables: this.input.inputRecordTables,
          Parameters: {
            TransformType: this.input.parameters.transformType,
            FindMatchesParameters: {
              PrimaryKeyColumnName: this.input.parameters.findMatchesParameters?.primaryKeyColumnName,
              PrecisionRecallTradeoff: this.input.parameters.findMatchesParameters?.precisionRecallTradeoff,
              AccuracyCostTradeoff: this.input.parameters.findMatchesParameters?.accuracyCostTradeoff,
              EnforceProvidedLabels: this.input.parameters.findMatchesParameters?.enforceProvidedLabels,
            },
          },
          Role: this.input.role,
          GlueVersion: this.input.glueVersion,
          MaxCapacity: this.input.maxCapacity,
          WorkerType: this.input.workerType,
          NumberOfWorkers: this.input.numberOfWorkers,
          Timeout: this.input.timeout,
          MaxRetries: this.input.maxRetries,
          Tags: this.input.tags,
          TransformEncryption: {
            MlUserDataEncryption: {
              MlUserDataEncryptionMode: this.input.transformEncryption?.mlUserDataEncryption?.mlUserDataEncryptionMode,
              KmsKeyId: this.input.transformEncryption?.mlUserDataEncryption?.kmsKeyId,
            },
            TaskRunSecurityConfigurationName: this.input.transformEncryption?.taskRunSecurityConfigurationName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMLTransform.TransformId', props);
    return resource.getResponseField('TransformId') as unknown as string;
  }

}

export class GlueCreateRegistry extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueCreateRegistryInput) {
    super(scope, id);
  }

  public get registryArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRegistry',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateRegistry.RegistryArn'),
        outputPath: 'RegistryArn',
        parameters: {
          RegistryName: this.input.registryName,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRegistry.RegistryArn', props);
    return resource.getResponseField('RegistryArn') as unknown as string;
  }

  public get registryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRegistry',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateRegistry.RegistryName'),
        outputPath: 'RegistryName',
        parameters: {
          RegistryName: this.input.registryName,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRegistry.RegistryName', props);
    return resource.getResponseField('RegistryName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRegistry',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateRegistry.Description'),
        outputPath: 'Description',
        parameters: {
          RegistryName: this.input.registryName,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRegistry.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRegistry',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateRegistry.Tags'),
        outputPath: 'Tags',
        parameters: {
          RegistryName: this.input.registryName,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRegistry.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class GlueCreateSchema extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueCreateSchemaInput) {
    super(scope, id);
  }

  public get registryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateSchema.RegistryName'),
        outputPath: 'RegistryName',
        parameters: {
          RegistryId: {
            RegistryName: this.input.registryId?.registryName,
            RegistryArn: this.input.registryId?.registryArn,
          },
          SchemaName: this.input.schemaName,
          DataFormat: this.input.dataFormat,
          Compatibility: this.input.compatibility,
          Description: this.input.description,
          Tags: this.input.tags,
          SchemaDefinition: this.input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSchema.RegistryName', props);
    return resource.getResponseField('RegistryName') as unknown as string;
  }

  public get registryArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateSchema.RegistryArn'),
        outputPath: 'RegistryArn',
        parameters: {
          RegistryId: {
            RegistryName: this.input.registryId?.registryName,
            RegistryArn: this.input.registryId?.registryArn,
          },
          SchemaName: this.input.schemaName,
          DataFormat: this.input.dataFormat,
          Compatibility: this.input.compatibility,
          Description: this.input.description,
          Tags: this.input.tags,
          SchemaDefinition: this.input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSchema.RegistryArn', props);
    return resource.getResponseField('RegistryArn') as unknown as string;
  }

  public get schemaName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateSchema.SchemaName'),
        outputPath: 'SchemaName',
        parameters: {
          RegistryId: {
            RegistryName: this.input.registryId?.registryName,
            RegistryArn: this.input.registryId?.registryArn,
          },
          SchemaName: this.input.schemaName,
          DataFormat: this.input.dataFormat,
          Compatibility: this.input.compatibility,
          Description: this.input.description,
          Tags: this.input.tags,
          SchemaDefinition: this.input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSchema.SchemaName', props);
    return resource.getResponseField('SchemaName') as unknown as string;
  }

  public get schemaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateSchema.SchemaArn'),
        outputPath: 'SchemaArn',
        parameters: {
          RegistryId: {
            RegistryName: this.input.registryId?.registryName,
            RegistryArn: this.input.registryId?.registryArn,
          },
          SchemaName: this.input.schemaName,
          DataFormat: this.input.dataFormat,
          Compatibility: this.input.compatibility,
          Description: this.input.description,
          Tags: this.input.tags,
          SchemaDefinition: this.input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSchema.SchemaArn', props);
    return resource.getResponseField('SchemaArn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateSchema.Description'),
        outputPath: 'Description',
        parameters: {
          RegistryId: {
            RegistryName: this.input.registryId?.registryName,
            RegistryArn: this.input.registryId?.registryArn,
          },
          SchemaName: this.input.schemaName,
          DataFormat: this.input.dataFormat,
          Compatibility: this.input.compatibility,
          Description: this.input.description,
          Tags: this.input.tags,
          SchemaDefinition: this.input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSchema.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get dataFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateSchema.DataFormat'),
        outputPath: 'DataFormat',
        parameters: {
          RegistryId: {
            RegistryName: this.input.registryId?.registryName,
            RegistryArn: this.input.registryId?.registryArn,
          },
          SchemaName: this.input.schemaName,
          DataFormat: this.input.dataFormat,
          Compatibility: this.input.compatibility,
          Description: this.input.description,
          Tags: this.input.tags,
          SchemaDefinition: this.input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSchema.DataFormat', props);
    return resource.getResponseField('DataFormat') as unknown as string;
  }

  public get compatibility(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateSchema.Compatibility'),
        outputPath: 'Compatibility',
        parameters: {
          RegistryId: {
            RegistryName: this.input.registryId?.registryName,
            RegistryArn: this.input.registryId?.registryArn,
          },
          SchemaName: this.input.schemaName,
          DataFormat: this.input.dataFormat,
          Compatibility: this.input.compatibility,
          Description: this.input.description,
          Tags: this.input.tags,
          SchemaDefinition: this.input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSchema.Compatibility', props);
    return resource.getResponseField('Compatibility') as unknown as string;
  }

  public get schemaCheckpoint(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateSchema.SchemaCheckpoint'),
        outputPath: 'SchemaCheckpoint',
        parameters: {
          RegistryId: {
            RegistryName: this.input.registryId?.registryName,
            RegistryArn: this.input.registryId?.registryArn,
          },
          SchemaName: this.input.schemaName,
          DataFormat: this.input.dataFormat,
          Compatibility: this.input.compatibility,
          Description: this.input.description,
          Tags: this.input.tags,
          SchemaDefinition: this.input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSchema.SchemaCheckpoint', props);
    return resource.getResponseField('SchemaCheckpoint') as unknown as number;
  }

  public get latestSchemaVersion(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateSchema.LatestSchemaVersion'),
        outputPath: 'LatestSchemaVersion',
        parameters: {
          RegistryId: {
            RegistryName: this.input.registryId?.registryName,
            RegistryArn: this.input.registryId?.registryArn,
          },
          SchemaName: this.input.schemaName,
          DataFormat: this.input.dataFormat,
          Compatibility: this.input.compatibility,
          Description: this.input.description,
          Tags: this.input.tags,
          SchemaDefinition: this.input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSchema.LatestSchemaVersion', props);
    return resource.getResponseField('LatestSchemaVersion') as unknown as number;
  }

  public get nextSchemaVersion(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateSchema.NextSchemaVersion'),
        outputPath: 'NextSchemaVersion',
        parameters: {
          RegistryId: {
            RegistryName: this.input.registryId?.registryName,
            RegistryArn: this.input.registryId?.registryArn,
          },
          SchemaName: this.input.schemaName,
          DataFormat: this.input.dataFormat,
          Compatibility: this.input.compatibility,
          Description: this.input.description,
          Tags: this.input.tags,
          SchemaDefinition: this.input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSchema.NextSchemaVersion', props);
    return resource.getResponseField('NextSchemaVersion') as unknown as number;
  }

  public get schemaStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateSchema.SchemaStatus'),
        outputPath: 'SchemaStatus',
        parameters: {
          RegistryId: {
            RegistryName: this.input.registryId?.registryName,
            RegistryArn: this.input.registryId?.registryArn,
          },
          SchemaName: this.input.schemaName,
          DataFormat: this.input.dataFormat,
          Compatibility: this.input.compatibility,
          Description: this.input.description,
          Tags: this.input.tags,
          SchemaDefinition: this.input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSchema.SchemaStatus', props);
    return resource.getResponseField('SchemaStatus') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateSchema.Tags'),
        outputPath: 'Tags',
        parameters: {
          RegistryId: {
            RegistryName: this.input.registryId?.registryName,
            RegistryArn: this.input.registryId?.registryArn,
          },
          SchemaName: this.input.schemaName,
          DataFormat: this.input.dataFormat,
          Compatibility: this.input.compatibility,
          Description: this.input.description,
          Tags: this.input.tags,
          SchemaDefinition: this.input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSchema.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

  public get schemaVersionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateSchema.SchemaVersionId'),
        outputPath: 'SchemaVersionId',
        parameters: {
          RegistryId: {
            RegistryName: this.input.registryId?.registryName,
            RegistryArn: this.input.registryId?.registryArn,
          },
          SchemaName: this.input.schemaName,
          DataFormat: this.input.dataFormat,
          Compatibility: this.input.compatibility,
          Description: this.input.description,
          Tags: this.input.tags,
          SchemaDefinition: this.input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSchema.SchemaVersionId', props);
    return resource.getResponseField('SchemaVersionId') as unknown as string;
  }

  public get schemaVersionStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateSchema.SchemaVersionStatus'),
        outputPath: 'SchemaVersionStatus',
        parameters: {
          RegistryId: {
            RegistryName: this.input.registryId?.registryName,
            RegistryArn: this.input.registryId?.registryArn,
          },
          SchemaName: this.input.schemaName,
          DataFormat: this.input.dataFormat,
          Compatibility: this.input.compatibility,
          Description: this.input.description,
          Tags: this.input.tags,
          SchemaDefinition: this.input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSchema.SchemaVersionStatus', props);
    return resource.getResponseField('SchemaVersionStatus') as unknown as string;
  }

}

export class GlueCreateScript extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueCreateScriptRequest) {
    super(scope, id);
  }

  public get pythonScript(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createScript',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateScript.PythonScript'),
        outputPath: 'PythonScript',
        parameters: {
          DagNodes: this.input.dagNodes,
          DagEdges: this.input.dagEdges,
          Language: this.input.language,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateScript.PythonScript', props);
    return resource.getResponseField('PythonScript') as unknown as string;
  }

  public get scalaCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createScript',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateScript.ScalaCode'),
        outputPath: 'ScalaCode',
        parameters: {
          DagNodes: this.input.dagNodes,
          DagEdges: this.input.dagEdges,
          Language: this.input.language,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateScript.ScalaCode', props);
    return resource.getResponseField('ScalaCode') as unknown as string;
  }

}

export class GlueCreateSecurityConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueCreateSecurityConfigurationRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSecurityConfiguration',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateSecurityConfiguration.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.input.name,
          EncryptionConfiguration: {
            S3Encryption: this.input.encryptionConfiguration.s3Encryption,
            CloudWatchEncryption: {
              CloudWatchEncryptionMode: this.input.encryptionConfiguration.cloudWatchEncryption?.cloudWatchEncryptionMode,
              KmsKeyArn: this.input.encryptionConfiguration.cloudWatchEncryption?.kmsKeyArn,
            },
            JobBookmarksEncryption: {
              JobBookmarksEncryptionMode: this.input.encryptionConfiguration.jobBookmarksEncryption?.jobBookmarksEncryptionMode,
              KmsKeyArn: this.input.encryptionConfiguration.jobBookmarksEncryption?.kmsKeyArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSecurityConfiguration.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSecurityConfiguration',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateSecurityConfiguration.CreatedTimestamp'),
        outputPath: 'CreatedTimestamp',
        parameters: {
          Name: this.input.name,
          EncryptionConfiguration: {
            S3Encryption: this.input.encryptionConfiguration.s3Encryption,
            CloudWatchEncryption: {
              CloudWatchEncryptionMode: this.input.encryptionConfiguration.cloudWatchEncryption?.cloudWatchEncryptionMode,
              KmsKeyArn: this.input.encryptionConfiguration.cloudWatchEncryption?.kmsKeyArn,
            },
            JobBookmarksEncryption: {
              JobBookmarksEncryptionMode: this.input.encryptionConfiguration.jobBookmarksEncryption?.jobBookmarksEncryptionMode,
              KmsKeyArn: this.input.encryptionConfiguration.jobBookmarksEncryption?.kmsKeyArn,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSecurityConfiguration.CreatedTimestamp', props);
    return resource.getResponseField('CreatedTimestamp') as unknown as string;
  }

}

export class GlueCreateTrigger extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueCreateTriggerRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateTrigger.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.input.name,
          WorkflowName: this.input.workflowName,
          Type: this.input.type,
          Schedule: this.input.schedule,
          Predicate: {
            Logical: this.input.predicate?.logical,
            Conditions: this.input.predicate?.conditions,
          },
          Actions: this.input.actions,
          Description: this.input.description,
          StartOnCreation: this.input.startOnCreation,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTrigger.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class GlueCreateWorkflow extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueCreateWorkflowRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.CreateWorkflow.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          DefaultRunProperties: this.input.defaultRunProperties,
          Tags: this.input.tags,
          MaxConcurrentRuns: this.input.maxConcurrentRuns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWorkflow.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class GlueDeleteJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueDeleteJobRequest) {
    super(scope, id);
  }

  public get jobName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeleteJob.JobName'),
        outputPath: 'JobName',
        parameters: {
          JobName: this.input.jobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteJob.JobName', props);
    return resource.getResponseField('JobName') as unknown as string;
  }

}

export class GlueDeleteMlTransform extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueDeleteMlTransformRequest) {
    super(scope, id);
  }

  public get transformId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeleteMLTransform.TransformId'),
        outputPath: 'TransformId',
        parameters: {
          TransformId: this.input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteMLTransform.TransformId', props);
    return resource.getResponseField('TransformId') as unknown as string;
  }

}

export class GlueDeleteRegistry extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueDeleteRegistryInput) {
    super(scope, id);
  }

  public get registryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRegistry',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeleteRegistry.RegistryName'),
        outputPath: 'RegistryName',
        parameters: {
          RegistryId: {
            RegistryName: this.input.registryId.registryName,
            RegistryArn: this.input.registryId.registryArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRegistry.RegistryName', props);
    return resource.getResponseField('RegistryName') as unknown as string;
  }

  public get registryArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRegistry',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeleteRegistry.RegistryArn'),
        outputPath: 'RegistryArn',
        parameters: {
          RegistryId: {
            RegistryName: this.input.registryId.registryName,
            RegistryArn: this.input.registryId.registryArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRegistry.RegistryArn', props);
    return resource.getResponseField('RegistryArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRegistry',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeleteRegistry.Status'),
        outputPath: 'Status',
        parameters: {
          RegistryId: {
            RegistryName: this.input.registryId.registryName,
            RegistryArn: this.input.registryId.registryArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRegistry.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class GlueDeleteSchema extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueDeleteSchemaInput) {
    super(scope, id);
  }

  public get schemaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeleteSchema.SchemaArn'),
        outputPath: 'SchemaArn',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId.schemaArn,
            SchemaName: this.input.schemaId.schemaName,
            RegistryName: this.input.schemaId.registryName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSchema.SchemaArn', props);
    return resource.getResponseField('SchemaArn') as unknown as string;
  }

  public get schemaName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeleteSchema.SchemaName'),
        outputPath: 'SchemaName',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId.schemaArn,
            SchemaName: this.input.schemaId.schemaName,
            RegistryName: this.input.schemaId.registryName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSchema.SchemaName', props);
    return resource.getResponseField('SchemaName') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeleteSchema.Status'),
        outputPath: 'Status',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId.schemaArn,
            SchemaName: this.input.schemaId.schemaName,
            RegistryName: this.input.schemaId.registryName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSchema.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class GlueDeleteSchemaVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueDeleteSchemaVersionsInput) {
    super(scope, id);
  }

  public get schemaVersionErrors(): shapes.GlueSchemaVersionErrorItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSchemaVersions',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeleteSchemaVersions.SchemaVersionErrors'),
        outputPath: 'SchemaVersionErrors',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId.schemaArn,
            SchemaName: this.input.schemaId.schemaName,
            RegistryName: this.input.schemaId.registryName,
          },
          Versions: this.input.versions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSchemaVersions.SchemaVersionErrors', props);
    return resource.getResponseField('SchemaVersionErrors') as unknown as shapes.GlueSchemaVersionErrorItem[];
  }

}

export class GlueDeleteTrigger extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueDeleteTriggerRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeleteTrigger.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTrigger.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class GlueDeleteWorkflow extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueDeleteWorkflowRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.DeleteWorkflow.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteWorkflow.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class GlueFetchCatalogImportStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetCatalogImportStatusRequest) {
    super(scope, id);
  }

  public get importStatus(): GlueFetchCatalogImportStatusImportStatus {
    return new GlueFetchCatalogImportStatusImportStatus(this, 'ImportStatus', this.__resources, this.input);
  }

}

export class GlueFetchCatalogImportStatusImportStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetCatalogImportStatusRequest) {
    super(scope, id);
  }

  public get importCompleted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCatalogImportStatus',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCatalogImportStatus.ImportStatus.ImportCompleted'),
        outputPath: 'ImportStatus.ImportCompleted',
        parameters: {
          CatalogId: this.input.catalogId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCatalogImportStatus.ImportStatus.ImportCompleted', props);
    return resource.getResponseField('ImportStatus.ImportCompleted') as unknown as boolean;
  }

  public get importTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCatalogImportStatus',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCatalogImportStatus.ImportStatus.ImportTime'),
        outputPath: 'ImportStatus.ImportTime',
        parameters: {
          CatalogId: this.input.catalogId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCatalogImportStatus.ImportStatus.ImportTime', props);
    return resource.getResponseField('ImportStatus.ImportTime') as unknown as string;
  }

  public get importedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCatalogImportStatus',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCatalogImportStatus.ImportStatus.ImportedBy'),
        outputPath: 'ImportStatus.ImportedBy',
        parameters: {
          CatalogId: this.input.catalogId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCatalogImportStatus.ImportStatus.ImportedBy', props);
    return resource.getResponseField('ImportStatus.ImportedBy') as unknown as string;
  }

}

export class GlueFetchClassifier extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetClassifierRequest) {
    super(scope, id);
  }

  public get classifier(): GlueFetchClassifierClassifier {
    return new GlueFetchClassifierClassifier(this, 'Classifier', this.__resources, this.input);
  }

}

export class GlueFetchClassifierClassifier extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetClassifierRequest) {
    super(scope, id);
  }

  public get grokClassifier(): GlueFetchClassifierClassifierGrokClassifier {
    return new GlueFetchClassifierClassifierGrokClassifier(this, 'GrokClassifier', this.__resources, this.input);
  }

  public get xmlClassifier(): GlueFetchClassifierClassifierXmlClassifier {
    return new GlueFetchClassifierClassifierXmlClassifier(this, 'XmlClassifier', this.__resources, this.input);
  }

  public get jsonClassifier(): GlueFetchClassifierClassifierJsonClassifier {
    return new GlueFetchClassifierClassifierJsonClassifier(this, 'JsonClassifier', this.__resources, this.input);
  }

  public get csvClassifier(): GlueFetchClassifierClassifierCsvClassifier {
    return new GlueFetchClassifierClassifierCsvClassifier(this, 'CsvClassifier', this.__resources, this.input);
  }

}

export class GlueFetchClassifierClassifierGrokClassifier extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetClassifierRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.GrokClassifier.Name'),
        outputPath: 'Classifier.GrokClassifier.Name',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetClassifier.Classifier.GrokClassifier.Name', props);
    return resource.getResponseField('Classifier.GrokClassifier.Name') as unknown as string;
  }

  public get classification(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.GrokClassifier.Classification'),
        outputPath: 'Classifier.GrokClassifier.Classification',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetClassifier.Classifier.GrokClassifier.Classification', props);
    return resource.getResponseField('Classifier.GrokClassifier.Classification') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.GrokClassifier.CreationTime'),
        outputPath: 'Classifier.GrokClassifier.CreationTime',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetClassifier.Classifier.GrokClassifier.CreationTime', props);
    return resource.getResponseField('Classifier.GrokClassifier.CreationTime') as unknown as string;
  }

  public get lastUpdated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.GrokClassifier.LastUpdated'),
        outputPath: 'Classifier.GrokClassifier.LastUpdated',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetClassifier.Classifier.GrokClassifier.LastUpdated', props);
    return resource.getResponseField('Classifier.GrokClassifier.LastUpdated') as unknown as string;
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.GrokClassifier.Version'),
        outputPath: 'Classifier.GrokClassifier.Version',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetClassifier.Classifier.GrokClassifier.Version', props);
    return resource.getResponseField('Classifier.GrokClassifier.Version') as unknown as number;
  }

  public get grokPattern(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.GrokClassifier.GrokPattern'),
        outputPath: 'Classifier.GrokClassifier.GrokPattern',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetClassifier.Classifier.GrokClassifier.GrokPattern', props);
    return resource.getResponseField('Classifier.GrokClassifier.GrokPattern') as unknown as string;
  }

  public get customPatterns(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.GrokClassifier.CustomPatterns'),
        outputPath: 'Classifier.GrokClassifier.CustomPatterns',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetClassifier.Classifier.GrokClassifier.CustomPatterns', props);
    return resource.getResponseField('Classifier.GrokClassifier.CustomPatterns') as unknown as string;
  }

}

export class GlueFetchClassifierClassifierXmlClassifier extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetClassifierRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.XMLClassifier.Name'),
        outputPath: 'Classifier.XMLClassifier.Name',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetClassifier.Classifier.XMLClassifier.Name', props);
    return resource.getResponseField('Classifier.XMLClassifier.Name') as unknown as string;
  }

  public get classification(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.XMLClassifier.Classification'),
        outputPath: 'Classifier.XMLClassifier.Classification',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetClassifier.Classifier.XMLClassifier.Classification', props);
    return resource.getResponseField('Classifier.XMLClassifier.Classification') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.XMLClassifier.CreationTime'),
        outputPath: 'Classifier.XMLClassifier.CreationTime',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetClassifier.Classifier.XMLClassifier.CreationTime', props);
    return resource.getResponseField('Classifier.XMLClassifier.CreationTime') as unknown as string;
  }

  public get lastUpdated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.XMLClassifier.LastUpdated'),
        outputPath: 'Classifier.XMLClassifier.LastUpdated',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetClassifier.Classifier.XMLClassifier.LastUpdated', props);
    return resource.getResponseField('Classifier.XMLClassifier.LastUpdated') as unknown as string;
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.XMLClassifier.Version'),
        outputPath: 'Classifier.XMLClassifier.Version',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetClassifier.Classifier.XMLClassifier.Version', props);
    return resource.getResponseField('Classifier.XMLClassifier.Version') as unknown as number;
  }

  public get rowTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.XMLClassifier.RowTag'),
        outputPath: 'Classifier.XMLClassifier.RowTag',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetClassifier.Classifier.XMLClassifier.RowTag', props);
    return resource.getResponseField('Classifier.XMLClassifier.RowTag') as unknown as string;
  }

}

export class GlueFetchClassifierClassifierJsonClassifier extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetClassifierRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.JsonClassifier.Name'),
        outputPath: 'Classifier.JsonClassifier.Name',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetClassifier.Classifier.JsonClassifier.Name', props);
    return resource.getResponseField('Classifier.JsonClassifier.Name') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.JsonClassifier.CreationTime'),
        outputPath: 'Classifier.JsonClassifier.CreationTime',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetClassifier.Classifier.JsonClassifier.CreationTime', props);
    return resource.getResponseField('Classifier.JsonClassifier.CreationTime') as unknown as string;
  }

  public get lastUpdated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.JsonClassifier.LastUpdated'),
        outputPath: 'Classifier.JsonClassifier.LastUpdated',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetClassifier.Classifier.JsonClassifier.LastUpdated', props);
    return resource.getResponseField('Classifier.JsonClassifier.LastUpdated') as unknown as string;
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.JsonClassifier.Version'),
        outputPath: 'Classifier.JsonClassifier.Version',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetClassifier.Classifier.JsonClassifier.Version', props);
    return resource.getResponseField('Classifier.JsonClassifier.Version') as unknown as number;
  }

  public get jsonPath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.JsonClassifier.JsonPath'),
        outputPath: 'Classifier.JsonClassifier.JsonPath',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetClassifier.Classifier.JsonClassifier.JsonPath', props);
    return resource.getResponseField('Classifier.JsonClassifier.JsonPath') as unknown as string;
  }

}

export class GlueFetchClassifierClassifierCsvClassifier extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetClassifierRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.CsvClassifier.Name'),
        outputPath: 'Classifier.CsvClassifier.Name',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetClassifier.Classifier.CsvClassifier.Name', props);
    return resource.getResponseField('Classifier.CsvClassifier.Name') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.CsvClassifier.CreationTime'),
        outputPath: 'Classifier.CsvClassifier.CreationTime',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetClassifier.Classifier.CsvClassifier.CreationTime', props);
    return resource.getResponseField('Classifier.CsvClassifier.CreationTime') as unknown as string;
  }

  public get lastUpdated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.CsvClassifier.LastUpdated'),
        outputPath: 'Classifier.CsvClassifier.LastUpdated',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetClassifier.Classifier.CsvClassifier.LastUpdated', props);
    return resource.getResponseField('Classifier.CsvClassifier.LastUpdated') as unknown as string;
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.CsvClassifier.Version'),
        outputPath: 'Classifier.CsvClassifier.Version',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetClassifier.Classifier.CsvClassifier.Version', props);
    return resource.getResponseField('Classifier.CsvClassifier.Version') as unknown as number;
  }

  public get delimiter(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.CsvClassifier.Delimiter'),
        outputPath: 'Classifier.CsvClassifier.Delimiter',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetClassifier.Classifier.CsvClassifier.Delimiter', props);
    return resource.getResponseField('Classifier.CsvClassifier.Delimiter') as unknown as string;
  }

  public get quoteSymbol(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.CsvClassifier.QuoteSymbol'),
        outputPath: 'Classifier.CsvClassifier.QuoteSymbol',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetClassifier.Classifier.CsvClassifier.QuoteSymbol', props);
    return resource.getResponseField('Classifier.CsvClassifier.QuoteSymbol') as unknown as string;
  }

  public get containsHeader(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.CsvClassifier.ContainsHeader'),
        outputPath: 'Classifier.CsvClassifier.ContainsHeader',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetClassifier.Classifier.CsvClassifier.ContainsHeader', props);
    return resource.getResponseField('Classifier.CsvClassifier.ContainsHeader') as unknown as string;
  }

  public get header(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.CsvClassifier.Header'),
        outputPath: 'Classifier.CsvClassifier.Header',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetClassifier.Classifier.CsvClassifier.Header', props);
    return resource.getResponseField('Classifier.CsvClassifier.Header') as unknown as string[];
  }

  public get disableValueTrimming(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.CsvClassifier.DisableValueTrimming'),
        outputPath: 'Classifier.CsvClassifier.DisableValueTrimming',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetClassifier.Classifier.CsvClassifier.DisableValueTrimming', props);
    return resource.getResponseField('Classifier.CsvClassifier.DisableValueTrimming') as unknown as boolean;
  }

  public get allowSingleColumn(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifier',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifier.Classifier.CsvClassifier.AllowSingleColumn'),
        outputPath: 'Classifier.CsvClassifier.AllowSingleColumn',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetClassifier.Classifier.CsvClassifier.AllowSingleColumn', props);
    return resource.getResponseField('Classifier.CsvClassifier.AllowSingleColumn') as unknown as boolean;
  }

}

export class GlueFetchClassifiers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetClassifiersRequest) {
    super(scope, id);
  }

  public get classifiers(): shapes.GlueClassifier[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifiers',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifiers.Classifiers'),
        outputPath: 'Classifiers',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetClassifiers.Classifiers', props);
    return resource.getResponseField('Classifiers') as unknown as shapes.GlueClassifier[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getClassifiers',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetClassifiers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetClassifiers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueFetchColumnStatisticsForPartition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetColumnStatisticsForPartitionRequest) {
    super(scope, id);
  }

  public get columnStatisticsList(): shapes.GlueColumnStatistics[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getColumnStatisticsForPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetColumnStatisticsForPartition.ColumnStatisticsList'),
        outputPath: 'ColumnStatisticsList',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          PartitionValues: this.input.partitionValues,
          ColumnNames: this.input.columnNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetColumnStatisticsForPartition.ColumnStatisticsList', props);
    return resource.getResponseField('ColumnStatisticsList') as unknown as shapes.GlueColumnStatistics[];
  }

  public get errors(): shapes.GlueColumnError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getColumnStatisticsForPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetColumnStatisticsForPartition.Errors'),
        outputPath: 'Errors',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          PartitionValues: this.input.partitionValues,
          ColumnNames: this.input.columnNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetColumnStatisticsForPartition.Errors', props);
    return resource.getResponseField('Errors') as unknown as shapes.GlueColumnError[];
  }

}

export class GlueFetchColumnStatisticsForTable extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetColumnStatisticsForTableRequest) {
    super(scope, id);
  }

  public get columnStatisticsList(): shapes.GlueColumnStatistics[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getColumnStatisticsForTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetColumnStatisticsForTable.ColumnStatisticsList'),
        outputPath: 'ColumnStatisticsList',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          ColumnNames: this.input.columnNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetColumnStatisticsForTable.ColumnStatisticsList', props);
    return resource.getResponseField('ColumnStatisticsList') as unknown as shapes.GlueColumnStatistics[];
  }

  public get errors(): shapes.GlueColumnError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getColumnStatisticsForTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetColumnStatisticsForTable.Errors'),
        outputPath: 'Errors',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          ColumnNames: this.input.columnNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetColumnStatisticsForTable.Errors', props);
    return resource.getResponseField('Errors') as unknown as shapes.GlueColumnError[];
  }

}

export class GlueFetchConnection extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetConnectionRequest) {
    super(scope, id);
  }

  public get connection(): GlueFetchConnectionConnection {
    return new GlueFetchConnectionConnection(this, 'Connection', this.__resources, this.input);
  }

}

export class GlueFetchConnectionConnection extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetConnectionRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnection',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetConnection.Connection.Name'),
        outputPath: 'Connection.Name',
        parameters: {
          CatalogId: this.input.catalogId,
          Name: this.input.name,
          HidePassword: this.input.hidePassword,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConnection.Connection.Name', props);
    return resource.getResponseField('Connection.Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnection',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetConnection.Connection.Description'),
        outputPath: 'Connection.Description',
        parameters: {
          CatalogId: this.input.catalogId,
          Name: this.input.name,
          HidePassword: this.input.hidePassword,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConnection.Connection.Description', props);
    return resource.getResponseField('Connection.Description') as unknown as string;
  }

  public get connectionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnection',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetConnection.Connection.ConnectionType'),
        outputPath: 'Connection.ConnectionType',
        parameters: {
          CatalogId: this.input.catalogId,
          Name: this.input.name,
          HidePassword: this.input.hidePassword,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConnection.Connection.ConnectionType', props);
    return resource.getResponseField('Connection.ConnectionType') as unknown as string;
  }

  public get matchCriteria(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnection',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetConnection.Connection.MatchCriteria'),
        outputPath: 'Connection.MatchCriteria',
        parameters: {
          CatalogId: this.input.catalogId,
          Name: this.input.name,
          HidePassword: this.input.hidePassword,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConnection.Connection.MatchCriteria', props);
    return resource.getResponseField('Connection.MatchCriteria') as unknown as string[];
  }

  public get connectionProperties(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnection',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetConnection.Connection.ConnectionProperties'),
        outputPath: 'Connection.ConnectionProperties',
        parameters: {
          CatalogId: this.input.catalogId,
          Name: this.input.name,
          HidePassword: this.input.hidePassword,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConnection.Connection.ConnectionProperties', props);
    return resource.getResponseField('Connection.ConnectionProperties') as unknown as Record<string, string>;
  }

  public get physicalConnectionRequirements(): GlueFetchConnectionConnectionPhysicalConnectionRequirements {
    return new GlueFetchConnectionConnectionPhysicalConnectionRequirements(this, 'PhysicalConnectionRequirements', this.__resources, this.input);
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnection',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetConnection.Connection.CreationTime'),
        outputPath: 'Connection.CreationTime',
        parameters: {
          CatalogId: this.input.catalogId,
          Name: this.input.name,
          HidePassword: this.input.hidePassword,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConnection.Connection.CreationTime', props);
    return resource.getResponseField('Connection.CreationTime') as unknown as string;
  }

  public get lastUpdatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnection',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetConnection.Connection.LastUpdatedTime'),
        outputPath: 'Connection.LastUpdatedTime',
        parameters: {
          CatalogId: this.input.catalogId,
          Name: this.input.name,
          HidePassword: this.input.hidePassword,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConnection.Connection.LastUpdatedTime', props);
    return resource.getResponseField('Connection.LastUpdatedTime') as unknown as string;
  }

  public get lastUpdatedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnection',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetConnection.Connection.LastUpdatedBy'),
        outputPath: 'Connection.LastUpdatedBy',
        parameters: {
          CatalogId: this.input.catalogId,
          Name: this.input.name,
          HidePassword: this.input.hidePassword,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConnection.Connection.LastUpdatedBy', props);
    return resource.getResponseField('Connection.LastUpdatedBy') as unknown as string;
  }

}

export class GlueFetchConnectionConnectionPhysicalConnectionRequirements extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetConnectionRequest) {
    super(scope, id);
  }

  public get subnetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnection',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetConnection.Connection.PhysicalConnectionRequirements.SubnetId'),
        outputPath: 'Connection.PhysicalConnectionRequirements.SubnetId',
        parameters: {
          CatalogId: this.input.catalogId,
          Name: this.input.name,
          HidePassword: this.input.hidePassword,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConnection.Connection.PhysicalConnectionRequirements.SubnetId', props);
    return resource.getResponseField('Connection.PhysicalConnectionRequirements.SubnetId') as unknown as string;
  }

  public get securityGroupIdList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnection',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetConnection.Connection.PhysicalConnectionRequirements.SecurityGroupIdList'),
        outputPath: 'Connection.PhysicalConnectionRequirements.SecurityGroupIdList',
        parameters: {
          CatalogId: this.input.catalogId,
          Name: this.input.name,
          HidePassword: this.input.hidePassword,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConnection.Connection.PhysicalConnectionRequirements.SecurityGroupIdList', props);
    return resource.getResponseField('Connection.PhysicalConnectionRequirements.SecurityGroupIdList') as unknown as string[];
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnection',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetConnection.Connection.PhysicalConnectionRequirements.AvailabilityZone'),
        outputPath: 'Connection.PhysicalConnectionRequirements.AvailabilityZone',
        parameters: {
          CatalogId: this.input.catalogId,
          Name: this.input.name,
          HidePassword: this.input.hidePassword,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConnection.Connection.PhysicalConnectionRequirements.AvailabilityZone', props);
    return resource.getResponseField('Connection.PhysicalConnectionRequirements.AvailabilityZone') as unknown as string;
  }

}

export class GlueFetchConnections extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetConnectionsRequest) {
    super(scope, id);
  }

  public get connectionList(): shapes.GlueConnection[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnections',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetConnections.ConnectionList'),
        outputPath: 'ConnectionList',
        parameters: {
          CatalogId: this.input.catalogId,
          Filter: {
            MatchCriteria: this.input.filter?.matchCriteria,
            ConnectionType: this.input.filter?.connectionType,
          },
          HidePassword: this.input.hidePassword,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConnections.ConnectionList', props);
    return resource.getResponseField('ConnectionList') as unknown as shapes.GlueConnection[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnections',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetConnections.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CatalogId: this.input.catalogId,
          Filter: {
            MatchCriteria: this.input.filter?.matchCriteria,
            ConnectionType: this.input.filter?.connectionType,
          },
          HidePassword: this.input.hidePassword,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConnections.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueFetchCrawler extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetCrawlerRequest) {
    super(scope, id);
  }

  public get crawler(): GlueFetchCrawlerCrawler {
    return new GlueFetchCrawlerCrawler(this, 'Crawler', this.__resources, this.input);
  }

}

export class GlueFetchCrawlerCrawler extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetCrawlerRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.Name'),
        outputPath: 'Crawler.Name',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCrawler.Crawler.Name', props);
    return resource.getResponseField('Crawler.Name') as unknown as string;
  }

  public get role(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.Role'),
        outputPath: 'Crawler.Role',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCrawler.Crawler.Role', props);
    return resource.getResponseField('Crawler.Role') as unknown as string;
  }

  public get targets(): GlueFetchCrawlerCrawlerTargets {
    return new GlueFetchCrawlerCrawlerTargets(this, 'Targets', this.__resources, this.input);
  }

  public get databaseName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.DatabaseName'),
        outputPath: 'Crawler.DatabaseName',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCrawler.Crawler.DatabaseName', props);
    return resource.getResponseField('Crawler.DatabaseName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.Description'),
        outputPath: 'Crawler.Description',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCrawler.Crawler.Description', props);
    return resource.getResponseField('Crawler.Description') as unknown as string;
  }

  public get classifiers(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.Classifiers'),
        outputPath: 'Crawler.Classifiers',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCrawler.Crawler.Classifiers', props);
    return resource.getResponseField('Crawler.Classifiers') as unknown as string[];
  }

  public get recrawlPolicy(): GlueFetchCrawlerCrawlerRecrawlPolicy {
    return new GlueFetchCrawlerCrawlerRecrawlPolicy(this, 'RecrawlPolicy', this.__resources, this.input);
  }

  public get schemaChangePolicy(): GlueFetchCrawlerCrawlerSchemaChangePolicy {
    return new GlueFetchCrawlerCrawlerSchemaChangePolicy(this, 'SchemaChangePolicy', this.__resources, this.input);
  }

  public get lineageConfiguration(): GlueFetchCrawlerCrawlerLineageConfiguration {
    return new GlueFetchCrawlerCrawlerLineageConfiguration(this, 'LineageConfiguration', this.__resources, this.input);
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.State'),
        outputPath: 'Crawler.State',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCrawler.Crawler.State', props);
    return resource.getResponseField('Crawler.State') as unknown as string;
  }

  public get tablePrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.TablePrefix'),
        outputPath: 'Crawler.TablePrefix',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCrawler.Crawler.TablePrefix', props);
    return resource.getResponseField('Crawler.TablePrefix') as unknown as string;
  }

  public get schedule(): GlueFetchCrawlerCrawlerSchedule {
    return new GlueFetchCrawlerCrawlerSchedule(this, 'Schedule', this.__resources, this.input);
  }

  public get crawlElapsedTime(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.CrawlElapsedTime'),
        outputPath: 'Crawler.CrawlElapsedTime',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCrawler.Crawler.CrawlElapsedTime', props);
    return resource.getResponseField('Crawler.CrawlElapsedTime') as unknown as number;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.CreationTime'),
        outputPath: 'Crawler.CreationTime',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCrawler.Crawler.CreationTime', props);
    return resource.getResponseField('Crawler.CreationTime') as unknown as string;
  }

  public get lastUpdated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.LastUpdated'),
        outputPath: 'Crawler.LastUpdated',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCrawler.Crawler.LastUpdated', props);
    return resource.getResponseField('Crawler.LastUpdated') as unknown as string;
  }

  public get lastCrawl(): GlueFetchCrawlerCrawlerLastCrawl {
    return new GlueFetchCrawlerCrawlerLastCrawl(this, 'LastCrawl', this.__resources, this.input);
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.Version'),
        outputPath: 'Crawler.Version',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCrawler.Crawler.Version', props);
    return resource.getResponseField('Crawler.Version') as unknown as number;
  }

  public get configuration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.Configuration'),
        outputPath: 'Crawler.Configuration',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCrawler.Crawler.Configuration', props);
    return resource.getResponseField('Crawler.Configuration') as unknown as string;
  }

  public get crawlerSecurityConfiguration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.CrawlerSecurityConfiguration'),
        outputPath: 'Crawler.CrawlerSecurityConfiguration',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCrawler.Crawler.CrawlerSecurityConfiguration', props);
    return resource.getResponseField('Crawler.CrawlerSecurityConfiguration') as unknown as string;
  }

}

export class GlueFetchCrawlerCrawlerTargets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetCrawlerRequest) {
    super(scope, id);
  }

  public get s3Targets(): shapes.GlueS3Target[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.Targets.S3Targets'),
        outputPath: 'Crawler.Targets.S3Targets',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCrawler.Crawler.Targets.S3Targets', props);
    return resource.getResponseField('Crawler.Targets.S3Targets') as unknown as shapes.GlueS3Target[];
  }

  public get jdbcTargets(): shapes.GlueJdbcTarget[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.Targets.JdbcTargets'),
        outputPath: 'Crawler.Targets.JdbcTargets',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCrawler.Crawler.Targets.JdbcTargets', props);
    return resource.getResponseField('Crawler.Targets.JdbcTargets') as unknown as shapes.GlueJdbcTarget[];
  }

  public get mongoDbTargets(): shapes.GlueMongoDbTarget[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.Targets.MongoDBTargets'),
        outputPath: 'Crawler.Targets.MongoDBTargets',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCrawler.Crawler.Targets.MongoDBTargets', props);
    return resource.getResponseField('Crawler.Targets.MongoDBTargets') as unknown as shapes.GlueMongoDbTarget[];
  }

  public get dynamoDbTargets(): shapes.GlueDynamoDbTarget[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.Targets.DynamoDBTargets'),
        outputPath: 'Crawler.Targets.DynamoDBTargets',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCrawler.Crawler.Targets.DynamoDBTargets', props);
    return resource.getResponseField('Crawler.Targets.DynamoDBTargets') as unknown as shapes.GlueDynamoDbTarget[];
  }

  public get catalogTargets(): shapes.GlueCatalogTarget[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.Targets.CatalogTargets'),
        outputPath: 'Crawler.Targets.CatalogTargets',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCrawler.Crawler.Targets.CatalogTargets', props);
    return resource.getResponseField('Crawler.Targets.CatalogTargets') as unknown as shapes.GlueCatalogTarget[];
  }

}

export class GlueFetchCrawlerCrawlerRecrawlPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetCrawlerRequest) {
    super(scope, id);
  }

  public get recrawlBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.RecrawlPolicy.RecrawlBehavior'),
        outputPath: 'Crawler.RecrawlPolicy.RecrawlBehavior',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCrawler.Crawler.RecrawlPolicy.RecrawlBehavior', props);
    return resource.getResponseField('Crawler.RecrawlPolicy.RecrawlBehavior') as unknown as string;
  }

}

export class GlueFetchCrawlerCrawlerSchemaChangePolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetCrawlerRequest) {
    super(scope, id);
  }

  public get updateBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.SchemaChangePolicy.UpdateBehavior'),
        outputPath: 'Crawler.SchemaChangePolicy.UpdateBehavior',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCrawler.Crawler.SchemaChangePolicy.UpdateBehavior', props);
    return resource.getResponseField('Crawler.SchemaChangePolicy.UpdateBehavior') as unknown as string;
  }

  public get deleteBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.SchemaChangePolicy.DeleteBehavior'),
        outputPath: 'Crawler.SchemaChangePolicy.DeleteBehavior',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCrawler.Crawler.SchemaChangePolicy.DeleteBehavior', props);
    return resource.getResponseField('Crawler.SchemaChangePolicy.DeleteBehavior') as unknown as string;
  }

}

export class GlueFetchCrawlerCrawlerLineageConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetCrawlerRequest) {
    super(scope, id);
  }

  public get crawlerLineageSettings(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.LineageConfiguration.CrawlerLineageSettings'),
        outputPath: 'Crawler.LineageConfiguration.CrawlerLineageSettings',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCrawler.Crawler.LineageConfiguration.CrawlerLineageSettings', props);
    return resource.getResponseField('Crawler.LineageConfiguration.CrawlerLineageSettings') as unknown as string;
  }

}

export class GlueFetchCrawlerCrawlerSchedule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetCrawlerRequest) {
    super(scope, id);
  }

  public get scheduleExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.Schedule.ScheduleExpression'),
        outputPath: 'Crawler.Schedule.ScheduleExpression',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCrawler.Crawler.Schedule.ScheduleExpression', props);
    return resource.getResponseField('Crawler.Schedule.ScheduleExpression') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.Schedule.State'),
        outputPath: 'Crawler.Schedule.State',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCrawler.Crawler.Schedule.State', props);
    return resource.getResponseField('Crawler.Schedule.State') as unknown as string;
  }

}

export class GlueFetchCrawlerCrawlerLastCrawl extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetCrawlerRequest) {
    super(scope, id);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.LastCrawl.Status'),
        outputPath: 'Crawler.LastCrawl.Status',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCrawler.Crawler.LastCrawl.Status', props);
    return resource.getResponseField('Crawler.LastCrawl.Status') as unknown as string;
  }

  public get errorMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.LastCrawl.ErrorMessage'),
        outputPath: 'Crawler.LastCrawl.ErrorMessage',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCrawler.Crawler.LastCrawl.ErrorMessage', props);
    return resource.getResponseField('Crawler.LastCrawl.ErrorMessage') as unknown as string;
  }

  public get logGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.LastCrawl.LogGroup'),
        outputPath: 'Crawler.LastCrawl.LogGroup',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCrawler.Crawler.LastCrawl.LogGroup', props);
    return resource.getResponseField('Crawler.LastCrawl.LogGroup') as unknown as string;
  }

  public get logStream(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.LastCrawl.LogStream'),
        outputPath: 'Crawler.LastCrawl.LogStream',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCrawler.Crawler.LastCrawl.LogStream', props);
    return resource.getResponseField('Crawler.LastCrawl.LogStream') as unknown as string;
  }

  public get messagePrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.LastCrawl.MessagePrefix'),
        outputPath: 'Crawler.LastCrawl.MessagePrefix',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCrawler.Crawler.LastCrawl.MessagePrefix', props);
    return resource.getResponseField('Crawler.LastCrawl.MessagePrefix') as unknown as string;
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawler',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawler.Crawler.LastCrawl.StartTime'),
        outputPath: 'Crawler.LastCrawl.StartTime',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCrawler.Crawler.LastCrawl.StartTime', props);
    return resource.getResponseField('Crawler.LastCrawl.StartTime') as unknown as string;
  }

}

export class GlueFetchCrawlerMetrics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetCrawlerMetricsRequest) {
    super(scope, id);
  }

  public get crawlerMetricsList(): shapes.GlueCrawlerMetrics[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawlerMetrics',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawlerMetrics.CrawlerMetricsList'),
        outputPath: 'CrawlerMetricsList',
        parameters: {
          CrawlerNameList: this.input.crawlerNameList,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCrawlerMetrics.CrawlerMetricsList', props);
    return resource.getResponseField('CrawlerMetricsList') as unknown as shapes.GlueCrawlerMetrics[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawlerMetrics',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawlerMetrics.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CrawlerNameList: this.input.crawlerNameList,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCrawlerMetrics.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueFetchCrawlers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetCrawlersRequest) {
    super(scope, id);
  }

  public get crawlers(): shapes.GlueCrawler[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawlers',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawlers.Crawlers'),
        outputPath: 'Crawlers',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCrawlers.Crawlers', props);
    return resource.getResponseField('Crawlers') as unknown as shapes.GlueCrawler[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCrawlers',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetCrawlers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCrawlers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueFetchDataCatalogEncryptionSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetDataCatalogEncryptionSettingsRequest) {
    super(scope, id);
  }

  public get dataCatalogEncryptionSettings(): GlueFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettings {
    return new GlueFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettings(this, 'DataCatalogEncryptionSettings', this.__resources, this.input);
  }

}

export class GlueFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetDataCatalogEncryptionSettingsRequest) {
    super(scope, id);
  }

  public get encryptionAtRest(): GlueFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest {
    return new GlueFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest(this, 'EncryptionAtRest', this.__resources, this.input);
  }

  public get connectionPasswordEncryption(): GlueFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption {
    return new GlueFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption(this, 'ConnectionPasswordEncryption', this.__resources, this.input);
  }

}

export class GlueFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetDataCatalogEncryptionSettingsRequest) {
    super(scope, id);
  }

  public get catalogEncryptionMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataCatalogEncryptionSettings',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDataCatalogEncryptionSettings.DataCatalogEncryptionSettings.EncryptionAtRest.CatalogEncryptionMode'),
        outputPath: 'DataCatalogEncryptionSettings.EncryptionAtRest.CatalogEncryptionMode',
        parameters: {
          CatalogId: this.input.catalogId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataCatalogEncryptionSettings.DataCatalogEncryptionSettings.EncryptionAtRest.CatalogEncryptionMode', props);
    return resource.getResponseField('DataCatalogEncryptionSettings.EncryptionAtRest.CatalogEncryptionMode') as unknown as string;
  }

  public get sseAwsKmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataCatalogEncryptionSettings',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDataCatalogEncryptionSettings.DataCatalogEncryptionSettings.EncryptionAtRest.SseAwsKmsKeyId'),
        outputPath: 'DataCatalogEncryptionSettings.EncryptionAtRest.SseAwsKmsKeyId',
        parameters: {
          CatalogId: this.input.catalogId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataCatalogEncryptionSettings.DataCatalogEncryptionSettings.EncryptionAtRest.SseAwsKmsKeyId', props);
    return resource.getResponseField('DataCatalogEncryptionSettings.EncryptionAtRest.SseAwsKmsKeyId') as unknown as string;
  }

}

export class GlueFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetDataCatalogEncryptionSettingsRequest) {
    super(scope, id);
  }

  public get returnConnectionPasswordEncrypted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataCatalogEncryptionSettings',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDataCatalogEncryptionSettings.DataCatalogEncryptionSettings.ConnectionPasswordEncryption.ReturnConnectionPasswordEncrypted'),
        outputPath: 'DataCatalogEncryptionSettings.ConnectionPasswordEncryption.ReturnConnectionPasswordEncrypted',
        parameters: {
          CatalogId: this.input.catalogId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataCatalogEncryptionSettings.DataCatalogEncryptionSettings.ConnectionPasswordEncryption.ReturnConnectionPasswordEncrypted', props);
    return resource.getResponseField('DataCatalogEncryptionSettings.ConnectionPasswordEncryption.ReturnConnectionPasswordEncrypted') as unknown as boolean;
  }

  public get awsKmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataCatalogEncryptionSettings',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDataCatalogEncryptionSettings.DataCatalogEncryptionSettings.ConnectionPasswordEncryption.AwsKmsKeyId'),
        outputPath: 'DataCatalogEncryptionSettings.ConnectionPasswordEncryption.AwsKmsKeyId',
        parameters: {
          CatalogId: this.input.catalogId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataCatalogEncryptionSettings.DataCatalogEncryptionSettings.ConnectionPasswordEncryption.AwsKmsKeyId', props);
    return resource.getResponseField('DataCatalogEncryptionSettings.ConnectionPasswordEncryption.AwsKmsKeyId') as unknown as string;
  }

}

export class GlueFetchDatabase extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetDatabaseRequest) {
    super(scope, id);
  }

  public get database(): GlueFetchDatabaseDatabase {
    return new GlueFetchDatabaseDatabase(this, 'Database', this.__resources, this.input);
  }

}

export class GlueFetchDatabaseDatabase extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetDatabaseRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDatabase',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDatabase.Database.Name'),
        outputPath: 'Database.Name',
        parameters: {
          CatalogId: this.input.catalogId,
          Name: this.input.name,
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
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDatabase.Database.Description'),
        outputPath: 'Database.Description',
        parameters: {
          CatalogId: this.input.catalogId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDatabase.Database.Description', props);
    return resource.getResponseField('Database.Description') as unknown as string;
  }

  public get locationUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDatabase',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDatabase.Database.LocationUri'),
        outputPath: 'Database.LocationUri',
        parameters: {
          CatalogId: this.input.catalogId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDatabase.Database.LocationUri', props);
    return resource.getResponseField('Database.LocationUri') as unknown as string;
  }

  public get parameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDatabase',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDatabase.Database.Parameters'),
        outputPath: 'Database.Parameters',
        parameters: {
          CatalogId: this.input.catalogId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDatabase.Database.Parameters', props);
    return resource.getResponseField('Database.Parameters') as unknown as Record<string, string>;
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDatabase',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDatabase.Database.CreateTime'),
        outputPath: 'Database.CreateTime',
        parameters: {
          CatalogId: this.input.catalogId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDatabase.Database.CreateTime', props);
    return resource.getResponseField('Database.CreateTime') as unknown as string;
  }

  public get createTableDefaultPermissions(): shapes.GluePrincipalPermissions[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDatabase',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDatabase.Database.CreateTableDefaultPermissions'),
        outputPath: 'Database.CreateTableDefaultPermissions',
        parameters: {
          CatalogId: this.input.catalogId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDatabase.Database.CreateTableDefaultPermissions', props);
    return resource.getResponseField('Database.CreateTableDefaultPermissions') as unknown as shapes.GluePrincipalPermissions[];
  }

  public get targetDatabase(): GlueFetchDatabaseDatabaseTargetDatabase {
    return new GlueFetchDatabaseDatabaseTargetDatabase(this, 'TargetDatabase', this.__resources, this.input);
  }

  public get catalogId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDatabase',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDatabase.Database.CatalogId'),
        outputPath: 'Database.CatalogId',
        parameters: {
          CatalogId: this.input.catalogId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDatabase.Database.CatalogId', props);
    return resource.getResponseField('Database.CatalogId') as unknown as string;
  }

}

export class GlueFetchDatabaseDatabaseTargetDatabase extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetDatabaseRequest) {
    super(scope, id);
  }

  public get catalogId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDatabase',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDatabase.Database.TargetDatabase.CatalogId'),
        outputPath: 'Database.TargetDatabase.CatalogId',
        parameters: {
          CatalogId: this.input.catalogId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDatabase.Database.TargetDatabase.CatalogId', props);
    return resource.getResponseField('Database.TargetDatabase.CatalogId') as unknown as string;
  }

  public get databaseName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDatabase',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDatabase.Database.TargetDatabase.DatabaseName'),
        outputPath: 'Database.TargetDatabase.DatabaseName',
        parameters: {
          CatalogId: this.input.catalogId,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDatabase.Database.TargetDatabase.DatabaseName', props);
    return resource.getResponseField('Database.TargetDatabase.DatabaseName') as unknown as string;
  }

}

export class GlueFetchDatabases extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetDatabasesRequest) {
    super(scope, id);
  }

  public get databaseList(): shapes.GlueDatabase[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDatabases',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDatabases.DatabaseList'),
        outputPath: 'DatabaseList',
        parameters: {
          CatalogId: this.input.catalogId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          ResourceShareType: this.input.resourceShareType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDatabases.DatabaseList', props);
    return resource.getResponseField('DatabaseList') as unknown as shapes.GlueDatabase[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDatabases',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDatabases.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CatalogId: this.input.catalogId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          ResourceShareType: this.input.resourceShareType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDatabases.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueFetchDataflowGraph extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetDataflowGraphRequest) {
    super(scope, id);
  }

  public get dagNodes(): shapes.GlueCodeGenNode[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataflowGraph',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDataflowGraph.DagNodes'),
        outputPath: 'DagNodes',
        parameters: {
          PythonScript: this.input.pythonScript,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataflowGraph.DagNodes', props);
    return resource.getResponseField('DagNodes') as unknown as shapes.GlueCodeGenNode[];
  }

  public get dagEdges(): shapes.GlueCodeGenEdge[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataflowGraph',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDataflowGraph.DagEdges'),
        outputPath: 'DagEdges',
        parameters: {
          PythonScript: this.input.pythonScript,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataflowGraph.DagEdges', props);
    return resource.getResponseField('DagEdges') as unknown as shapes.GlueCodeGenEdge[];
  }

}

export class GlueFetchDevEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetDevEndpointRequest) {
    super(scope, id);
  }

  public get devEndpoint(): GlueFetchDevEndpointDevEndpoint {
    return new GlueFetchDevEndpointDevEndpoint(this, 'DevEndpoint', this.__resources, this.input);
  }

}

export class GlueFetchDevEndpointDevEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetDevEndpointRequest) {
    super(scope, id);
  }

  public get endpointName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.EndpointName'),
        outputPath: 'DevEndpoint.EndpointName',
        parameters: {
          EndpointName: this.input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevEndpoint.DevEndpoint.EndpointName', props);
    return resource.getResponseField('DevEndpoint.EndpointName') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.RoleArn'),
        outputPath: 'DevEndpoint.RoleArn',
        parameters: {
          EndpointName: this.input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevEndpoint.DevEndpoint.RoleArn', props);
    return resource.getResponseField('DevEndpoint.RoleArn') as unknown as string;
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.SecurityGroupIds'),
        outputPath: 'DevEndpoint.SecurityGroupIds',
        parameters: {
          EndpointName: this.input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevEndpoint.DevEndpoint.SecurityGroupIds', props);
    return resource.getResponseField('DevEndpoint.SecurityGroupIds') as unknown as string[];
  }

  public get subnetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.SubnetId'),
        outputPath: 'DevEndpoint.SubnetId',
        parameters: {
          EndpointName: this.input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevEndpoint.DevEndpoint.SubnetId', props);
    return resource.getResponseField('DevEndpoint.SubnetId') as unknown as string;
  }

  public get yarnEndpointAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.YarnEndpointAddress'),
        outputPath: 'DevEndpoint.YarnEndpointAddress',
        parameters: {
          EndpointName: this.input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevEndpoint.DevEndpoint.YarnEndpointAddress', props);
    return resource.getResponseField('DevEndpoint.YarnEndpointAddress') as unknown as string;
  }

  public get privateAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.PrivateAddress'),
        outputPath: 'DevEndpoint.PrivateAddress',
        parameters: {
          EndpointName: this.input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevEndpoint.DevEndpoint.PrivateAddress', props);
    return resource.getResponseField('DevEndpoint.PrivateAddress') as unknown as string;
  }

  public get zeppelinRemoteSparkInterpreterPort(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.ZeppelinRemoteSparkInterpreterPort'),
        outputPath: 'DevEndpoint.ZeppelinRemoteSparkInterpreterPort',
        parameters: {
          EndpointName: this.input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevEndpoint.DevEndpoint.ZeppelinRemoteSparkInterpreterPort', props);
    return resource.getResponseField('DevEndpoint.ZeppelinRemoteSparkInterpreterPort') as unknown as number;
  }

  public get publicAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.PublicAddress'),
        outputPath: 'DevEndpoint.PublicAddress',
        parameters: {
          EndpointName: this.input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevEndpoint.DevEndpoint.PublicAddress', props);
    return resource.getResponseField('DevEndpoint.PublicAddress') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.Status'),
        outputPath: 'DevEndpoint.Status',
        parameters: {
          EndpointName: this.input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevEndpoint.DevEndpoint.Status', props);
    return resource.getResponseField('DevEndpoint.Status') as unknown as string;
  }

  public get workerType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.WorkerType'),
        outputPath: 'DevEndpoint.WorkerType',
        parameters: {
          EndpointName: this.input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevEndpoint.DevEndpoint.WorkerType', props);
    return resource.getResponseField('DevEndpoint.WorkerType') as unknown as string;
  }

  public get glueVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.GlueVersion'),
        outputPath: 'DevEndpoint.GlueVersion',
        parameters: {
          EndpointName: this.input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevEndpoint.DevEndpoint.GlueVersion', props);
    return resource.getResponseField('DevEndpoint.GlueVersion') as unknown as string;
  }

  public get numberOfWorkers(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.NumberOfWorkers'),
        outputPath: 'DevEndpoint.NumberOfWorkers',
        parameters: {
          EndpointName: this.input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevEndpoint.DevEndpoint.NumberOfWorkers', props);
    return resource.getResponseField('DevEndpoint.NumberOfWorkers') as unknown as number;
  }

  public get numberOfNodes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.NumberOfNodes'),
        outputPath: 'DevEndpoint.NumberOfNodes',
        parameters: {
          EndpointName: this.input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevEndpoint.DevEndpoint.NumberOfNodes', props);
    return resource.getResponseField('DevEndpoint.NumberOfNodes') as unknown as number;
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.AvailabilityZone'),
        outputPath: 'DevEndpoint.AvailabilityZone',
        parameters: {
          EndpointName: this.input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevEndpoint.DevEndpoint.AvailabilityZone', props);
    return resource.getResponseField('DevEndpoint.AvailabilityZone') as unknown as string;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.VpcId'),
        outputPath: 'DevEndpoint.VpcId',
        parameters: {
          EndpointName: this.input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevEndpoint.DevEndpoint.VpcId', props);
    return resource.getResponseField('DevEndpoint.VpcId') as unknown as string;
  }

  public get extraPythonLibsS3Path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.ExtraPythonLibsS3Path'),
        outputPath: 'DevEndpoint.ExtraPythonLibsS3Path',
        parameters: {
          EndpointName: this.input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevEndpoint.DevEndpoint.ExtraPythonLibsS3Path', props);
    return resource.getResponseField('DevEndpoint.ExtraPythonLibsS3Path') as unknown as string;
  }

  public get extraJarsS3Path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.ExtraJarsS3Path'),
        outputPath: 'DevEndpoint.ExtraJarsS3Path',
        parameters: {
          EndpointName: this.input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevEndpoint.DevEndpoint.ExtraJarsS3Path', props);
    return resource.getResponseField('DevEndpoint.ExtraJarsS3Path') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.FailureReason'),
        outputPath: 'DevEndpoint.FailureReason',
        parameters: {
          EndpointName: this.input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevEndpoint.DevEndpoint.FailureReason', props);
    return resource.getResponseField('DevEndpoint.FailureReason') as unknown as string;
  }

  public get lastUpdateStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.LastUpdateStatus'),
        outputPath: 'DevEndpoint.LastUpdateStatus',
        parameters: {
          EndpointName: this.input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevEndpoint.DevEndpoint.LastUpdateStatus', props);
    return resource.getResponseField('DevEndpoint.LastUpdateStatus') as unknown as string;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.CreatedTimestamp'),
        outputPath: 'DevEndpoint.CreatedTimestamp',
        parameters: {
          EndpointName: this.input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevEndpoint.DevEndpoint.CreatedTimestamp', props);
    return resource.getResponseField('DevEndpoint.CreatedTimestamp') as unknown as string;
  }

  public get lastModifiedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.LastModifiedTimestamp'),
        outputPath: 'DevEndpoint.LastModifiedTimestamp',
        parameters: {
          EndpointName: this.input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevEndpoint.DevEndpoint.LastModifiedTimestamp', props);
    return resource.getResponseField('DevEndpoint.LastModifiedTimestamp') as unknown as string;
  }

  public get publicKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.PublicKey'),
        outputPath: 'DevEndpoint.PublicKey',
        parameters: {
          EndpointName: this.input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevEndpoint.DevEndpoint.PublicKey', props);
    return resource.getResponseField('DevEndpoint.PublicKey') as unknown as string;
  }

  public get publicKeys(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.PublicKeys'),
        outputPath: 'DevEndpoint.PublicKeys',
        parameters: {
          EndpointName: this.input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevEndpoint.DevEndpoint.PublicKeys', props);
    return resource.getResponseField('DevEndpoint.PublicKeys') as unknown as string[];
  }

  public get securityConfiguration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.SecurityConfiguration'),
        outputPath: 'DevEndpoint.SecurityConfiguration',
        parameters: {
          EndpointName: this.input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevEndpoint.DevEndpoint.SecurityConfiguration', props);
    return resource.getResponseField('DevEndpoint.SecurityConfiguration') as unknown as string;
  }

  public get arguments(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoint',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoint.DevEndpoint.Arguments'),
        outputPath: 'DevEndpoint.Arguments',
        parameters: {
          EndpointName: this.input.endpointName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevEndpoint.DevEndpoint.Arguments', props);
    return resource.getResponseField('DevEndpoint.Arguments') as unknown as Record<string, string>;
  }

}

export class GlueFetchDevEndpoints extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetDevEndpointsRequest) {
    super(scope, id);
  }

  public get devEndpoints(): shapes.GlueDevEndpoint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoints',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoints.DevEndpoints'),
        outputPath: 'DevEndpoints',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevEndpoints.DevEndpoints', props);
    return resource.getResponseField('DevEndpoints') as unknown as shapes.GlueDevEndpoint[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevEndpoints',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetDevEndpoints.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevEndpoints.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueFetchJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetJobRequest) {
    super(scope, id);
  }

  public get job(): GlueFetchJobJob {
    return new GlueFetchJobJob(this, 'Job', this.__resources, this.input);
  }

}

export class GlueFetchJobJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetJobRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJob.Job.Name'),
        outputPath: 'Job.Name',
        parameters: {
          JobName: this.input.jobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.Job.Name', props);
    return resource.getResponseField('Job.Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJob.Job.Description'),
        outputPath: 'Job.Description',
        parameters: {
          JobName: this.input.jobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.Job.Description', props);
    return resource.getResponseField('Job.Description') as unknown as string;
  }

  public get logUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJob.Job.LogUri'),
        outputPath: 'Job.LogUri',
        parameters: {
          JobName: this.input.jobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.Job.LogUri', props);
    return resource.getResponseField('Job.LogUri') as unknown as string;
  }

  public get role(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJob.Job.Role'),
        outputPath: 'Job.Role',
        parameters: {
          JobName: this.input.jobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.Job.Role', props);
    return resource.getResponseField('Job.Role') as unknown as string;
  }

  public get createdOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJob.Job.CreatedOn'),
        outputPath: 'Job.CreatedOn',
        parameters: {
          JobName: this.input.jobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.Job.CreatedOn', props);
    return resource.getResponseField('Job.CreatedOn') as unknown as string;
  }

  public get lastModifiedOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJob.Job.LastModifiedOn'),
        outputPath: 'Job.LastModifiedOn',
        parameters: {
          JobName: this.input.jobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.Job.LastModifiedOn', props);
    return resource.getResponseField('Job.LastModifiedOn') as unknown as string;
  }

  public get executionProperty(): GlueFetchJobJobExecutionProperty {
    return new GlueFetchJobJobExecutionProperty(this, 'ExecutionProperty', this.__resources, this.input);
  }

  public get command(): GlueFetchJobJobCommand {
    return new GlueFetchJobJobCommand(this, 'Command', this.__resources, this.input);
  }

  public get defaultArguments(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJob.Job.DefaultArguments'),
        outputPath: 'Job.DefaultArguments',
        parameters: {
          JobName: this.input.jobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.Job.DefaultArguments', props);
    return resource.getResponseField('Job.DefaultArguments') as unknown as Record<string, string>;
  }

  public get nonOverridableArguments(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJob.Job.NonOverridableArguments'),
        outputPath: 'Job.NonOverridableArguments',
        parameters: {
          JobName: this.input.jobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.Job.NonOverridableArguments', props);
    return resource.getResponseField('Job.NonOverridableArguments') as unknown as Record<string, string>;
  }

  public get connections(): GlueFetchJobJobConnections {
    return new GlueFetchJobJobConnections(this, 'Connections', this.__resources, this.input);
  }

  public get maxRetries(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJob.Job.MaxRetries'),
        outputPath: 'Job.MaxRetries',
        parameters: {
          JobName: this.input.jobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.Job.MaxRetries', props);
    return resource.getResponseField('Job.MaxRetries') as unknown as number;
  }

  public get allocatedCapacity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJob.Job.AllocatedCapacity'),
        outputPath: 'Job.AllocatedCapacity',
        parameters: {
          JobName: this.input.jobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.Job.AllocatedCapacity', props);
    return resource.getResponseField('Job.AllocatedCapacity') as unknown as number;
  }

  public get timeout(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJob.Job.Timeout'),
        outputPath: 'Job.Timeout',
        parameters: {
          JobName: this.input.jobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.Job.Timeout', props);
    return resource.getResponseField('Job.Timeout') as unknown as number;
  }

  public get maxCapacity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJob.Job.MaxCapacity'),
        outputPath: 'Job.MaxCapacity',
        parameters: {
          JobName: this.input.jobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.Job.MaxCapacity', props);
    return resource.getResponseField('Job.MaxCapacity') as unknown as number;
  }

  public get workerType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJob.Job.WorkerType'),
        outputPath: 'Job.WorkerType',
        parameters: {
          JobName: this.input.jobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.Job.WorkerType', props);
    return resource.getResponseField('Job.WorkerType') as unknown as string;
  }

  public get numberOfWorkers(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJob.Job.NumberOfWorkers'),
        outputPath: 'Job.NumberOfWorkers',
        parameters: {
          JobName: this.input.jobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.Job.NumberOfWorkers', props);
    return resource.getResponseField('Job.NumberOfWorkers') as unknown as number;
  }

  public get securityConfiguration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJob.Job.SecurityConfiguration'),
        outputPath: 'Job.SecurityConfiguration',
        parameters: {
          JobName: this.input.jobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.Job.SecurityConfiguration', props);
    return resource.getResponseField('Job.SecurityConfiguration') as unknown as string;
  }

  public get notificationProperty(): GlueFetchJobJobNotificationProperty {
    return new GlueFetchJobJobNotificationProperty(this, 'NotificationProperty', this.__resources, this.input);
  }

  public get glueVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJob.Job.GlueVersion'),
        outputPath: 'Job.GlueVersion',
        parameters: {
          JobName: this.input.jobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.Job.GlueVersion', props);
    return resource.getResponseField('Job.GlueVersion') as unknown as string;
  }

}

export class GlueFetchJobJobExecutionProperty extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetJobRequest) {
    super(scope, id);
  }

  public get maxConcurrentRuns(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJob.Job.ExecutionProperty.MaxConcurrentRuns'),
        outputPath: 'Job.ExecutionProperty.MaxConcurrentRuns',
        parameters: {
          JobName: this.input.jobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.Job.ExecutionProperty.MaxConcurrentRuns', props);
    return resource.getResponseField('Job.ExecutionProperty.MaxConcurrentRuns') as unknown as number;
  }

}

export class GlueFetchJobJobCommand extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetJobRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJob.Job.Command.Name'),
        outputPath: 'Job.Command.Name',
        parameters: {
          JobName: this.input.jobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.Job.Command.Name', props);
    return resource.getResponseField('Job.Command.Name') as unknown as string;
  }

  public get scriptLocation(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJob.Job.Command.ScriptLocation'),
        outputPath: 'Job.Command.ScriptLocation',
        parameters: {
          JobName: this.input.jobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.Job.Command.ScriptLocation', props);
    return resource.getResponseField('Job.Command.ScriptLocation') as unknown as string;
  }

  public get pythonVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJob.Job.Command.PythonVersion'),
        outputPath: 'Job.Command.PythonVersion',
        parameters: {
          JobName: this.input.jobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.Job.Command.PythonVersion', props);
    return resource.getResponseField('Job.Command.PythonVersion') as unknown as string;
  }

}

export class GlueFetchJobJobConnections extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetJobRequest) {
    super(scope, id);
  }

  public get connections(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJob.Job.Connections.Connections'),
        outputPath: 'Job.Connections.Connections',
        parameters: {
          JobName: this.input.jobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.Job.Connections.Connections', props);
    return resource.getResponseField('Job.Connections.Connections') as unknown as string[];
  }

}

export class GlueFetchJobJobNotificationProperty extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetJobRequest) {
    super(scope, id);
  }

  public get notifyDelayAfter(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJob.Job.NotificationProperty.NotifyDelayAfter'),
        outputPath: 'Job.NotificationProperty.NotifyDelayAfter',
        parameters: {
          JobName: this.input.jobName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.Job.NotificationProperty.NotifyDelayAfter', props);
    return resource.getResponseField('Job.NotificationProperty.NotifyDelayAfter') as unknown as number;
  }

}

export class GlueFetchJobBookmark extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetJobBookmarkRequest) {
    super(scope, id);
  }

  public get jobBookmarkEntry(): GlueFetchJobBookmarkJobBookmarkEntry {
    return new GlueFetchJobBookmarkJobBookmarkEntry(this, 'JobBookmarkEntry', this.__resources, this.input);
  }

}

export class GlueFetchJobBookmarkJobBookmarkEntry extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetJobBookmarkRequest) {
    super(scope, id);
  }

  public get jobName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobBookmark',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobBookmark.JobBookmarkEntry.JobName'),
        outputPath: 'JobBookmarkEntry.JobName',
        parameters: {
          JobName: this.input.jobName,
          RunId: this.input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobBookmark.JobBookmarkEntry.JobName', props);
    return resource.getResponseField('JobBookmarkEntry.JobName') as unknown as string;
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobBookmark',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobBookmark.JobBookmarkEntry.Version'),
        outputPath: 'JobBookmarkEntry.Version',
        parameters: {
          JobName: this.input.jobName,
          RunId: this.input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobBookmark.JobBookmarkEntry.Version', props);
    return resource.getResponseField('JobBookmarkEntry.Version') as unknown as number;
  }

  public get run(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobBookmark',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobBookmark.JobBookmarkEntry.Run'),
        outputPath: 'JobBookmarkEntry.Run',
        parameters: {
          JobName: this.input.jobName,
          RunId: this.input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobBookmark.JobBookmarkEntry.Run', props);
    return resource.getResponseField('JobBookmarkEntry.Run') as unknown as number;
  }

  public get attempt(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobBookmark',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobBookmark.JobBookmarkEntry.Attempt'),
        outputPath: 'JobBookmarkEntry.Attempt',
        parameters: {
          JobName: this.input.jobName,
          RunId: this.input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobBookmark.JobBookmarkEntry.Attempt', props);
    return resource.getResponseField('JobBookmarkEntry.Attempt') as unknown as number;
  }

  public get previousRunId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobBookmark',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobBookmark.JobBookmarkEntry.PreviousRunId'),
        outputPath: 'JobBookmarkEntry.PreviousRunId',
        parameters: {
          JobName: this.input.jobName,
          RunId: this.input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobBookmark.JobBookmarkEntry.PreviousRunId', props);
    return resource.getResponseField('JobBookmarkEntry.PreviousRunId') as unknown as string;
  }

  public get runId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobBookmark',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobBookmark.JobBookmarkEntry.RunId'),
        outputPath: 'JobBookmarkEntry.RunId',
        parameters: {
          JobName: this.input.jobName,
          RunId: this.input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobBookmark.JobBookmarkEntry.RunId', props);
    return resource.getResponseField('JobBookmarkEntry.RunId') as unknown as string;
  }

  public get jobBookmark(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobBookmark',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobBookmark.JobBookmarkEntry.JobBookmark'),
        outputPath: 'JobBookmarkEntry.JobBookmark',
        parameters: {
          JobName: this.input.jobName,
          RunId: this.input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobBookmark.JobBookmarkEntry.JobBookmark', props);
    return resource.getResponseField('JobBookmarkEntry.JobBookmark') as unknown as string;
  }

}

export class GlueFetchJobRun extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetJobRunRequest) {
    super(scope, id);
  }

  public get jobRun(): GlueFetchJobRunJobRun {
    return new GlueFetchJobRunJobRun(this, 'JobRun', this.__resources, this.input);
  }

}

export class GlueFetchJobRunJobRun extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetJobRunRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRun.JobRun.Id'),
        outputPath: 'JobRun.Id',
        parameters: {
          JobName: this.input.jobName,
          RunId: this.input.runId,
          PredecessorsIncluded: this.input.predecessorsIncluded,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobRun.JobRun.Id', props);
    return resource.getResponseField('JobRun.Id') as unknown as string;
  }

  public get attempt(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRun.JobRun.Attempt'),
        outputPath: 'JobRun.Attempt',
        parameters: {
          JobName: this.input.jobName,
          RunId: this.input.runId,
          PredecessorsIncluded: this.input.predecessorsIncluded,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobRun.JobRun.Attempt', props);
    return resource.getResponseField('JobRun.Attempt') as unknown as number;
  }

  public get previousRunId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRun.JobRun.PreviousRunId'),
        outputPath: 'JobRun.PreviousRunId',
        parameters: {
          JobName: this.input.jobName,
          RunId: this.input.runId,
          PredecessorsIncluded: this.input.predecessorsIncluded,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobRun.JobRun.PreviousRunId', props);
    return resource.getResponseField('JobRun.PreviousRunId') as unknown as string;
  }

  public get triggerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRun.JobRun.TriggerName'),
        outputPath: 'JobRun.TriggerName',
        parameters: {
          JobName: this.input.jobName,
          RunId: this.input.runId,
          PredecessorsIncluded: this.input.predecessorsIncluded,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobRun.JobRun.TriggerName', props);
    return resource.getResponseField('JobRun.TriggerName') as unknown as string;
  }

  public get jobName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRun.JobRun.JobName'),
        outputPath: 'JobRun.JobName',
        parameters: {
          JobName: this.input.jobName,
          RunId: this.input.runId,
          PredecessorsIncluded: this.input.predecessorsIncluded,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobRun.JobRun.JobName', props);
    return resource.getResponseField('JobRun.JobName') as unknown as string;
  }

  public get startedOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRun.JobRun.StartedOn'),
        outputPath: 'JobRun.StartedOn',
        parameters: {
          JobName: this.input.jobName,
          RunId: this.input.runId,
          PredecessorsIncluded: this.input.predecessorsIncluded,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobRun.JobRun.StartedOn', props);
    return resource.getResponseField('JobRun.StartedOn') as unknown as string;
  }

  public get lastModifiedOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRun.JobRun.LastModifiedOn'),
        outputPath: 'JobRun.LastModifiedOn',
        parameters: {
          JobName: this.input.jobName,
          RunId: this.input.runId,
          PredecessorsIncluded: this.input.predecessorsIncluded,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobRun.JobRun.LastModifiedOn', props);
    return resource.getResponseField('JobRun.LastModifiedOn') as unknown as string;
  }

  public get completedOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRun.JobRun.CompletedOn'),
        outputPath: 'JobRun.CompletedOn',
        parameters: {
          JobName: this.input.jobName,
          RunId: this.input.runId,
          PredecessorsIncluded: this.input.predecessorsIncluded,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobRun.JobRun.CompletedOn', props);
    return resource.getResponseField('JobRun.CompletedOn') as unknown as string;
  }

  public get jobRunState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRun.JobRun.JobRunState'),
        outputPath: 'JobRun.JobRunState',
        parameters: {
          JobName: this.input.jobName,
          RunId: this.input.runId,
          PredecessorsIncluded: this.input.predecessorsIncluded,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobRun.JobRun.JobRunState', props);
    return resource.getResponseField('JobRun.JobRunState') as unknown as string;
  }

  public get arguments(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRun.JobRun.Arguments'),
        outputPath: 'JobRun.Arguments',
        parameters: {
          JobName: this.input.jobName,
          RunId: this.input.runId,
          PredecessorsIncluded: this.input.predecessorsIncluded,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobRun.JobRun.Arguments', props);
    return resource.getResponseField('JobRun.Arguments') as unknown as Record<string, string>;
  }

  public get errorMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRun.JobRun.ErrorMessage'),
        outputPath: 'JobRun.ErrorMessage',
        parameters: {
          JobName: this.input.jobName,
          RunId: this.input.runId,
          PredecessorsIncluded: this.input.predecessorsIncluded,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobRun.JobRun.ErrorMessage', props);
    return resource.getResponseField('JobRun.ErrorMessage') as unknown as string;
  }

  public get predecessorRuns(): shapes.GluePredecessor[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRun.JobRun.PredecessorRuns'),
        outputPath: 'JobRun.PredecessorRuns',
        parameters: {
          JobName: this.input.jobName,
          RunId: this.input.runId,
          PredecessorsIncluded: this.input.predecessorsIncluded,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobRun.JobRun.PredecessorRuns', props);
    return resource.getResponseField('JobRun.PredecessorRuns') as unknown as shapes.GluePredecessor[];
  }

  public get allocatedCapacity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRun.JobRun.AllocatedCapacity'),
        outputPath: 'JobRun.AllocatedCapacity',
        parameters: {
          JobName: this.input.jobName,
          RunId: this.input.runId,
          PredecessorsIncluded: this.input.predecessorsIncluded,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobRun.JobRun.AllocatedCapacity', props);
    return resource.getResponseField('JobRun.AllocatedCapacity') as unknown as number;
  }

  public get executionTime(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRun.JobRun.ExecutionTime'),
        outputPath: 'JobRun.ExecutionTime',
        parameters: {
          JobName: this.input.jobName,
          RunId: this.input.runId,
          PredecessorsIncluded: this.input.predecessorsIncluded,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobRun.JobRun.ExecutionTime', props);
    return resource.getResponseField('JobRun.ExecutionTime') as unknown as number;
  }

  public get timeout(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRun.JobRun.Timeout'),
        outputPath: 'JobRun.Timeout',
        parameters: {
          JobName: this.input.jobName,
          RunId: this.input.runId,
          PredecessorsIncluded: this.input.predecessorsIncluded,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobRun.JobRun.Timeout', props);
    return resource.getResponseField('JobRun.Timeout') as unknown as number;
  }

  public get maxCapacity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRun.JobRun.MaxCapacity'),
        outputPath: 'JobRun.MaxCapacity',
        parameters: {
          JobName: this.input.jobName,
          RunId: this.input.runId,
          PredecessorsIncluded: this.input.predecessorsIncluded,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobRun.JobRun.MaxCapacity', props);
    return resource.getResponseField('JobRun.MaxCapacity') as unknown as number;
  }

  public get workerType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRun.JobRun.WorkerType'),
        outputPath: 'JobRun.WorkerType',
        parameters: {
          JobName: this.input.jobName,
          RunId: this.input.runId,
          PredecessorsIncluded: this.input.predecessorsIncluded,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobRun.JobRun.WorkerType', props);
    return resource.getResponseField('JobRun.WorkerType') as unknown as string;
  }

  public get numberOfWorkers(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRun.JobRun.NumberOfWorkers'),
        outputPath: 'JobRun.NumberOfWorkers',
        parameters: {
          JobName: this.input.jobName,
          RunId: this.input.runId,
          PredecessorsIncluded: this.input.predecessorsIncluded,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobRun.JobRun.NumberOfWorkers', props);
    return resource.getResponseField('JobRun.NumberOfWorkers') as unknown as number;
  }

  public get securityConfiguration(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRun.JobRun.SecurityConfiguration'),
        outputPath: 'JobRun.SecurityConfiguration',
        parameters: {
          JobName: this.input.jobName,
          RunId: this.input.runId,
          PredecessorsIncluded: this.input.predecessorsIncluded,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobRun.JobRun.SecurityConfiguration', props);
    return resource.getResponseField('JobRun.SecurityConfiguration') as unknown as string;
  }

  public get logGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRun.JobRun.LogGroupName'),
        outputPath: 'JobRun.LogGroupName',
        parameters: {
          JobName: this.input.jobName,
          RunId: this.input.runId,
          PredecessorsIncluded: this.input.predecessorsIncluded,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobRun.JobRun.LogGroupName', props);
    return resource.getResponseField('JobRun.LogGroupName') as unknown as string;
  }

  public get notificationProperty(): GlueFetchJobRunJobRunNotificationProperty {
    return new GlueFetchJobRunJobRunNotificationProperty(this, 'NotificationProperty', this.__resources, this.input);
  }

  public get glueVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRun.JobRun.GlueVersion'),
        outputPath: 'JobRun.GlueVersion',
        parameters: {
          JobName: this.input.jobName,
          RunId: this.input.runId,
          PredecessorsIncluded: this.input.predecessorsIncluded,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobRun.JobRun.GlueVersion', props);
    return resource.getResponseField('JobRun.GlueVersion') as unknown as string;
  }

}

export class GlueFetchJobRunJobRunNotificationProperty extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetJobRunRequest) {
    super(scope, id);
  }

  public get notifyDelayAfter(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRun.JobRun.NotificationProperty.NotifyDelayAfter'),
        outputPath: 'JobRun.NotificationProperty.NotifyDelayAfter',
        parameters: {
          JobName: this.input.jobName,
          RunId: this.input.runId,
          PredecessorsIncluded: this.input.predecessorsIncluded,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobRun.JobRun.NotificationProperty.NotifyDelayAfter', props);
    return resource.getResponseField('JobRun.NotificationProperty.NotifyDelayAfter') as unknown as number;
  }

}

export class GlueFetchJobRuns extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetJobRunsRequest) {
    super(scope, id);
  }

  public get jobRuns(): shapes.GlueJobRun[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRuns',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRuns.JobRuns'),
        outputPath: 'JobRuns',
        parameters: {
          JobName: this.input.jobName,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobRuns.JobRuns', props);
    return resource.getResponseField('JobRuns') as unknown as shapes.GlueJobRun[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobRuns',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobRuns.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          JobName: this.input.jobName,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobRuns.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueFetchJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetJobsRequest) {
    super(scope, id);
  }

  public get jobs(): shapes.GlueJob[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobs',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobs.Jobs'),
        outputPath: 'Jobs',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobs.Jobs', props);
    return resource.getResponseField('Jobs') as unknown as shapes.GlueJob[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobs',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetJobs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueFetchMlTaskRun extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetMlTaskRunRequest) {
    super(scope, id);
  }

  public get transformId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTaskRun.TransformId'),
        outputPath: 'TransformId',
        parameters: {
          TransformId: this.input.transformId,
          TaskRunId: this.input.taskRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTaskRun.TransformId', props);
    return resource.getResponseField('TransformId') as unknown as string;
  }

  public get taskRunId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTaskRun.TaskRunId'),
        outputPath: 'TaskRunId',
        parameters: {
          TransformId: this.input.transformId,
          TaskRunId: this.input.taskRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTaskRun.TaskRunId', props);
    return resource.getResponseField('TaskRunId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTaskRun.Status'),
        outputPath: 'Status',
        parameters: {
          TransformId: this.input.transformId,
          TaskRunId: this.input.taskRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTaskRun.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get logGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTaskRun.LogGroupName'),
        outputPath: 'LogGroupName',
        parameters: {
          TransformId: this.input.transformId,
          TaskRunId: this.input.taskRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTaskRun.LogGroupName', props);
    return resource.getResponseField('LogGroupName') as unknown as string;
  }

  public get properties(): GlueFetchMlTaskRunProperties {
    return new GlueFetchMlTaskRunProperties(this, 'Properties', this.__resources, this.input);
  }

  public get errorString(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTaskRun.ErrorString'),
        outputPath: 'ErrorString',
        parameters: {
          TransformId: this.input.transformId,
          TaskRunId: this.input.taskRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTaskRun.ErrorString', props);
    return resource.getResponseField('ErrorString') as unknown as string;
  }

  public get startedOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTaskRun.StartedOn'),
        outputPath: 'StartedOn',
        parameters: {
          TransformId: this.input.transformId,
          TaskRunId: this.input.taskRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTaskRun.StartedOn', props);
    return resource.getResponseField('StartedOn') as unknown as string;
  }

  public get lastModifiedOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTaskRun.LastModifiedOn'),
        outputPath: 'LastModifiedOn',
        parameters: {
          TransformId: this.input.transformId,
          TaskRunId: this.input.taskRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTaskRun.LastModifiedOn', props);
    return resource.getResponseField('LastModifiedOn') as unknown as string;
  }

  public get completedOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTaskRun.CompletedOn'),
        outputPath: 'CompletedOn',
        parameters: {
          TransformId: this.input.transformId,
          TaskRunId: this.input.taskRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTaskRun.CompletedOn', props);
    return resource.getResponseField('CompletedOn') as unknown as string;
  }

  public get executionTime(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTaskRun.ExecutionTime'),
        outputPath: 'ExecutionTime',
        parameters: {
          TransformId: this.input.transformId,
          TaskRunId: this.input.taskRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTaskRun.ExecutionTime', props);
    return resource.getResponseField('ExecutionTime') as unknown as number;
  }

}

export class GlueFetchMlTaskRunProperties extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetMlTaskRunRequest) {
    super(scope, id);
  }

  public get taskType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTaskRun.Properties.TaskType'),
        outputPath: 'Properties.TaskType',
        parameters: {
          TransformId: this.input.transformId,
          TaskRunId: this.input.taskRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTaskRun.Properties.TaskType', props);
    return resource.getResponseField('Properties.TaskType') as unknown as string;
  }

  public get importLabelsTaskRunProperties(): GlueFetchMlTaskRunPropertiesImportLabelsTaskRunProperties {
    return new GlueFetchMlTaskRunPropertiesImportLabelsTaskRunProperties(this, 'ImportLabelsTaskRunProperties', this.__resources, this.input);
  }

  public get exportLabelsTaskRunProperties(): GlueFetchMlTaskRunPropertiesExportLabelsTaskRunProperties {
    return new GlueFetchMlTaskRunPropertiesExportLabelsTaskRunProperties(this, 'ExportLabelsTaskRunProperties', this.__resources, this.input);
  }

  public get labelingSetGenerationTaskRunProperties(): GlueFetchMlTaskRunPropertiesLabelingSetGenerationTaskRunProperties {
    return new GlueFetchMlTaskRunPropertiesLabelingSetGenerationTaskRunProperties(this, 'LabelingSetGenerationTaskRunProperties', this.__resources, this.input);
  }

  public get findMatchesTaskRunProperties(): GlueFetchMlTaskRunPropertiesFindMatchesTaskRunProperties {
    return new GlueFetchMlTaskRunPropertiesFindMatchesTaskRunProperties(this, 'FindMatchesTaskRunProperties', this.__resources, this.input);
  }

}

export class GlueFetchMlTaskRunPropertiesImportLabelsTaskRunProperties extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetMlTaskRunRequest) {
    super(scope, id);
  }

  public get inputS3Path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTaskRun.Properties.ImportLabelsTaskRunProperties.InputS3Path'),
        outputPath: 'Properties.ImportLabelsTaskRunProperties.InputS3Path',
        parameters: {
          TransformId: this.input.transformId,
          TaskRunId: this.input.taskRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTaskRun.Properties.ImportLabelsTaskRunProperties.InputS3Path', props);
    return resource.getResponseField('Properties.ImportLabelsTaskRunProperties.InputS3Path') as unknown as string;
  }

  public get replace(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTaskRun.Properties.ImportLabelsTaskRunProperties.Replace'),
        outputPath: 'Properties.ImportLabelsTaskRunProperties.Replace',
        parameters: {
          TransformId: this.input.transformId,
          TaskRunId: this.input.taskRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTaskRun.Properties.ImportLabelsTaskRunProperties.Replace', props);
    return resource.getResponseField('Properties.ImportLabelsTaskRunProperties.Replace') as unknown as boolean;
  }

}

export class GlueFetchMlTaskRunPropertiesExportLabelsTaskRunProperties extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetMlTaskRunRequest) {
    super(scope, id);
  }

  public get outputS3Path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTaskRun.Properties.ExportLabelsTaskRunProperties.OutputS3Path'),
        outputPath: 'Properties.ExportLabelsTaskRunProperties.OutputS3Path',
        parameters: {
          TransformId: this.input.transformId,
          TaskRunId: this.input.taskRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTaskRun.Properties.ExportLabelsTaskRunProperties.OutputS3Path', props);
    return resource.getResponseField('Properties.ExportLabelsTaskRunProperties.OutputS3Path') as unknown as string;
  }

}

export class GlueFetchMlTaskRunPropertiesLabelingSetGenerationTaskRunProperties extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetMlTaskRunRequest) {
    super(scope, id);
  }

  public get outputS3Path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTaskRun.Properties.LabelingSetGenerationTaskRunProperties.OutputS3Path'),
        outputPath: 'Properties.LabelingSetGenerationTaskRunProperties.OutputS3Path',
        parameters: {
          TransformId: this.input.transformId,
          TaskRunId: this.input.taskRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTaskRun.Properties.LabelingSetGenerationTaskRunProperties.OutputS3Path', props);
    return resource.getResponseField('Properties.LabelingSetGenerationTaskRunProperties.OutputS3Path') as unknown as string;
  }

}

export class GlueFetchMlTaskRunPropertiesFindMatchesTaskRunProperties extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetMlTaskRunRequest) {
    super(scope, id);
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTaskRun.Properties.FindMatchesTaskRunProperties.JobId'),
        outputPath: 'Properties.FindMatchesTaskRunProperties.JobId',
        parameters: {
          TransformId: this.input.transformId,
          TaskRunId: this.input.taskRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTaskRun.Properties.FindMatchesTaskRunProperties.JobId', props);
    return resource.getResponseField('Properties.FindMatchesTaskRunProperties.JobId') as unknown as string;
  }

  public get jobName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTaskRun.Properties.FindMatchesTaskRunProperties.JobName'),
        outputPath: 'Properties.FindMatchesTaskRunProperties.JobName',
        parameters: {
          TransformId: this.input.transformId,
          TaskRunId: this.input.taskRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTaskRun.Properties.FindMatchesTaskRunProperties.JobName', props);
    return resource.getResponseField('Properties.FindMatchesTaskRunProperties.JobName') as unknown as string;
  }

  public get jobRunId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTaskRun.Properties.FindMatchesTaskRunProperties.JobRunId'),
        outputPath: 'Properties.FindMatchesTaskRunProperties.JobRunId',
        parameters: {
          TransformId: this.input.transformId,
          TaskRunId: this.input.taskRunId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTaskRun.Properties.FindMatchesTaskRunProperties.JobRunId', props);
    return resource.getResponseField('Properties.FindMatchesTaskRunProperties.JobRunId') as unknown as string;
  }

}

export class GlueFetchMlTaskRuns extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetMlTaskRunsRequest) {
    super(scope, id);
  }

  public get taskRuns(): shapes.GlueTaskRun[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTaskRuns',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTaskRuns.TaskRuns'),
        outputPath: 'TaskRuns',
        parameters: {
          TransformId: this.input.transformId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          Filter: {
            TaskRunType: this.input.filter?.taskRunType,
            Status: this.input.filter?.status,
            StartedBefore: this.input.filter?.startedBefore,
            StartedAfter: this.input.filter?.startedAfter,
          },
          Sort: {
            Column: this.input.sort?.column,
            SortDirection: this.input.sort?.sortDirection,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTaskRuns.TaskRuns', props);
    return resource.getResponseField('TaskRuns') as unknown as shapes.GlueTaskRun[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTaskRuns',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTaskRuns.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          TransformId: this.input.transformId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          Filter: {
            TaskRunType: this.input.filter?.taskRunType,
            Status: this.input.filter?.status,
            StartedBefore: this.input.filter?.startedBefore,
            StartedAfter: this.input.filter?.startedAfter,
          },
          Sort: {
            Column: this.input.sort?.column,
            SortDirection: this.input.sort?.sortDirection,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTaskRuns.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueFetchMlTransform extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetMlTransformRequest) {
    super(scope, id);
  }

  public get transformId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.TransformId'),
        outputPath: 'TransformId',
        parameters: {
          TransformId: this.input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTransform.TransformId', props);
    return resource.getResponseField('TransformId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.Name'),
        outputPath: 'Name',
        parameters: {
          TransformId: this.input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTransform.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.Description'),
        outputPath: 'Description',
        parameters: {
          TransformId: this.input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTransform.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.Status'),
        outputPath: 'Status',
        parameters: {
          TransformId: this.input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTransform.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get createdOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.CreatedOn'),
        outputPath: 'CreatedOn',
        parameters: {
          TransformId: this.input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTransform.CreatedOn', props);
    return resource.getResponseField('CreatedOn') as unknown as string;
  }

  public get lastModifiedOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.LastModifiedOn'),
        outputPath: 'LastModifiedOn',
        parameters: {
          TransformId: this.input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTransform.LastModifiedOn', props);
    return resource.getResponseField('LastModifiedOn') as unknown as string;
  }

  public get inputRecordTables(): shapes.GlueGlueTable[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.InputRecordTables'),
        outputPath: 'InputRecordTables',
        parameters: {
          TransformId: this.input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTransform.InputRecordTables', props);
    return resource.getResponseField('InputRecordTables') as unknown as shapes.GlueGlueTable[];
  }

  public get parameters(): GlueFetchMlTransformParameters {
    return new GlueFetchMlTransformParameters(this, 'Parameters', this.__resources, this.input);
  }

  public get evaluationMetrics(): GlueFetchMlTransformEvaluationMetrics {
    return new GlueFetchMlTransformEvaluationMetrics(this, 'EvaluationMetrics', this.__resources, this.input);
  }

  public get labelCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.LabelCount'),
        outputPath: 'LabelCount',
        parameters: {
          TransformId: this.input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTransform.LabelCount', props);
    return resource.getResponseField('LabelCount') as unknown as number;
  }

  public get schema(): shapes.GlueSchemaColumn[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.Schema'),
        outputPath: 'Schema',
        parameters: {
          TransformId: this.input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTransform.Schema', props);
    return resource.getResponseField('Schema') as unknown as shapes.GlueSchemaColumn[];
  }

  public get role(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.Role'),
        outputPath: 'Role',
        parameters: {
          TransformId: this.input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTransform.Role', props);
    return resource.getResponseField('Role') as unknown as string;
  }

  public get glueVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.GlueVersion'),
        outputPath: 'GlueVersion',
        parameters: {
          TransformId: this.input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTransform.GlueVersion', props);
    return resource.getResponseField('GlueVersion') as unknown as string;
  }

  public get maxCapacity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.MaxCapacity'),
        outputPath: 'MaxCapacity',
        parameters: {
          TransformId: this.input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTransform.MaxCapacity', props);
    return resource.getResponseField('MaxCapacity') as unknown as number;
  }

  public get workerType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.WorkerType'),
        outputPath: 'WorkerType',
        parameters: {
          TransformId: this.input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTransform.WorkerType', props);
    return resource.getResponseField('WorkerType') as unknown as string;
  }

  public get numberOfWorkers(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.NumberOfWorkers'),
        outputPath: 'NumberOfWorkers',
        parameters: {
          TransformId: this.input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTransform.NumberOfWorkers', props);
    return resource.getResponseField('NumberOfWorkers') as unknown as number;
  }

  public get timeout(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.Timeout'),
        outputPath: 'Timeout',
        parameters: {
          TransformId: this.input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTransform.Timeout', props);
    return resource.getResponseField('Timeout') as unknown as number;
  }

  public get maxRetries(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.MaxRetries'),
        outputPath: 'MaxRetries',
        parameters: {
          TransformId: this.input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTransform.MaxRetries', props);
    return resource.getResponseField('MaxRetries') as unknown as number;
  }

  public get transformEncryption(): GlueFetchMlTransformTransformEncryption {
    return new GlueFetchMlTransformTransformEncryption(this, 'TransformEncryption', this.__resources, this.input);
  }

}

export class GlueFetchMlTransformParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetMlTransformRequest) {
    super(scope, id);
  }

  public get transformType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.Parameters.TransformType'),
        outputPath: 'Parameters.TransformType',
        parameters: {
          TransformId: this.input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTransform.Parameters.TransformType', props);
    return resource.getResponseField('Parameters.TransformType') as unknown as string;
  }

  public get findMatchesParameters(): GlueFetchMlTransformParametersFindMatchesParameters {
    return new GlueFetchMlTransformParametersFindMatchesParameters(this, 'FindMatchesParameters', this.__resources, this.input);
  }

}

export class GlueFetchMlTransformParametersFindMatchesParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetMlTransformRequest) {
    super(scope, id);
  }

  public get primaryKeyColumnName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.Parameters.FindMatchesParameters.PrimaryKeyColumnName'),
        outputPath: 'Parameters.FindMatchesParameters.PrimaryKeyColumnName',
        parameters: {
          TransformId: this.input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTransform.Parameters.FindMatchesParameters.PrimaryKeyColumnName', props);
    return resource.getResponseField('Parameters.FindMatchesParameters.PrimaryKeyColumnName') as unknown as string;
  }

  public get precisionRecallTradeoff(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.Parameters.FindMatchesParameters.PrecisionRecallTradeoff'),
        outputPath: 'Parameters.FindMatchesParameters.PrecisionRecallTradeoff',
        parameters: {
          TransformId: this.input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTransform.Parameters.FindMatchesParameters.PrecisionRecallTradeoff', props);
    return resource.getResponseField('Parameters.FindMatchesParameters.PrecisionRecallTradeoff') as unknown as number;
  }

  public get accuracyCostTradeoff(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.Parameters.FindMatchesParameters.AccuracyCostTradeoff'),
        outputPath: 'Parameters.FindMatchesParameters.AccuracyCostTradeoff',
        parameters: {
          TransformId: this.input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTransform.Parameters.FindMatchesParameters.AccuracyCostTradeoff', props);
    return resource.getResponseField('Parameters.FindMatchesParameters.AccuracyCostTradeoff') as unknown as number;
  }

  public get enforceProvidedLabels(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.Parameters.FindMatchesParameters.EnforceProvidedLabels'),
        outputPath: 'Parameters.FindMatchesParameters.EnforceProvidedLabels',
        parameters: {
          TransformId: this.input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTransform.Parameters.FindMatchesParameters.EnforceProvidedLabels', props);
    return resource.getResponseField('Parameters.FindMatchesParameters.EnforceProvidedLabels') as unknown as boolean;
  }

}

export class GlueFetchMlTransformEvaluationMetrics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetMlTransformRequest) {
    super(scope, id);
  }

  public get transformType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.EvaluationMetrics.TransformType'),
        outputPath: 'EvaluationMetrics.TransformType',
        parameters: {
          TransformId: this.input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTransform.EvaluationMetrics.TransformType', props);
    return resource.getResponseField('EvaluationMetrics.TransformType') as unknown as string;
  }

  public get findMatchesMetrics(): GlueFetchMlTransformEvaluationMetricsFindMatchesMetrics {
    return new GlueFetchMlTransformEvaluationMetricsFindMatchesMetrics(this, 'FindMatchesMetrics', this.__resources, this.input);
  }

}

export class GlueFetchMlTransformEvaluationMetricsFindMatchesMetrics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetMlTransformRequest) {
    super(scope, id);
  }

  public get areaUnderPrCurve(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.EvaluationMetrics.FindMatchesMetrics.AreaUnderPRCurve'),
        outputPath: 'EvaluationMetrics.FindMatchesMetrics.AreaUnderPRCurve',
        parameters: {
          TransformId: this.input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTransform.EvaluationMetrics.FindMatchesMetrics.AreaUnderPRCurve', props);
    return resource.getResponseField('EvaluationMetrics.FindMatchesMetrics.AreaUnderPRCurve') as unknown as number;
  }

  public get precision(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.EvaluationMetrics.FindMatchesMetrics.Precision'),
        outputPath: 'EvaluationMetrics.FindMatchesMetrics.Precision',
        parameters: {
          TransformId: this.input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTransform.EvaluationMetrics.FindMatchesMetrics.Precision', props);
    return resource.getResponseField('EvaluationMetrics.FindMatchesMetrics.Precision') as unknown as number;
  }

  public get recall(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.EvaluationMetrics.FindMatchesMetrics.Recall'),
        outputPath: 'EvaluationMetrics.FindMatchesMetrics.Recall',
        parameters: {
          TransformId: this.input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTransform.EvaluationMetrics.FindMatchesMetrics.Recall', props);
    return resource.getResponseField('EvaluationMetrics.FindMatchesMetrics.Recall') as unknown as number;
  }

  public get f1(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.EvaluationMetrics.FindMatchesMetrics.F1'),
        outputPath: 'EvaluationMetrics.FindMatchesMetrics.F1',
        parameters: {
          TransformId: this.input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTransform.EvaluationMetrics.FindMatchesMetrics.F1', props);
    return resource.getResponseField('EvaluationMetrics.FindMatchesMetrics.F1') as unknown as number;
  }

  public get confusionMatrix(): GlueFetchMlTransformEvaluationMetricsFindMatchesMetricsConfusionMatrix {
    return new GlueFetchMlTransformEvaluationMetricsFindMatchesMetricsConfusionMatrix(this, 'ConfusionMatrix', this.__resources, this.input);
  }

}

export class GlueFetchMlTransformEvaluationMetricsFindMatchesMetricsConfusionMatrix extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetMlTransformRequest) {
    super(scope, id);
  }

  public get numTruePositives(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.EvaluationMetrics.FindMatchesMetrics.ConfusionMatrix.NumTruePositives'),
        outputPath: 'EvaluationMetrics.FindMatchesMetrics.ConfusionMatrix.NumTruePositives',
        parameters: {
          TransformId: this.input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTransform.EvaluationMetrics.FindMatchesMetrics.ConfusionMatrix.NumTruePositives', props);
    return resource.getResponseField('EvaluationMetrics.FindMatchesMetrics.ConfusionMatrix.NumTruePositives') as unknown as number;
  }

  public get numFalsePositives(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.EvaluationMetrics.FindMatchesMetrics.ConfusionMatrix.NumFalsePositives'),
        outputPath: 'EvaluationMetrics.FindMatchesMetrics.ConfusionMatrix.NumFalsePositives',
        parameters: {
          TransformId: this.input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTransform.EvaluationMetrics.FindMatchesMetrics.ConfusionMatrix.NumFalsePositives', props);
    return resource.getResponseField('EvaluationMetrics.FindMatchesMetrics.ConfusionMatrix.NumFalsePositives') as unknown as number;
  }

  public get numTrueNegatives(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.EvaluationMetrics.FindMatchesMetrics.ConfusionMatrix.NumTrueNegatives'),
        outputPath: 'EvaluationMetrics.FindMatchesMetrics.ConfusionMatrix.NumTrueNegatives',
        parameters: {
          TransformId: this.input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTransform.EvaluationMetrics.FindMatchesMetrics.ConfusionMatrix.NumTrueNegatives', props);
    return resource.getResponseField('EvaluationMetrics.FindMatchesMetrics.ConfusionMatrix.NumTrueNegatives') as unknown as number;
  }

  public get numFalseNegatives(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.EvaluationMetrics.FindMatchesMetrics.ConfusionMatrix.NumFalseNegatives'),
        outputPath: 'EvaluationMetrics.FindMatchesMetrics.ConfusionMatrix.NumFalseNegatives',
        parameters: {
          TransformId: this.input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTransform.EvaluationMetrics.FindMatchesMetrics.ConfusionMatrix.NumFalseNegatives', props);
    return resource.getResponseField('EvaluationMetrics.FindMatchesMetrics.ConfusionMatrix.NumFalseNegatives') as unknown as number;
  }

}

export class GlueFetchMlTransformTransformEncryption extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetMlTransformRequest) {
    super(scope, id);
  }

  public get mlUserDataEncryption(): GlueFetchMlTransformTransformEncryptionMlUserDataEncryption {
    return new GlueFetchMlTransformTransformEncryptionMlUserDataEncryption(this, 'MlUserDataEncryption', this.__resources, this.input);
  }

  public get taskRunSecurityConfigurationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.TransformEncryption.TaskRunSecurityConfigurationName'),
        outputPath: 'TransformEncryption.TaskRunSecurityConfigurationName',
        parameters: {
          TransformId: this.input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTransform.TransformEncryption.TaskRunSecurityConfigurationName', props);
    return resource.getResponseField('TransformEncryption.TaskRunSecurityConfigurationName') as unknown as string;
  }

}

export class GlueFetchMlTransformTransformEncryptionMlUserDataEncryption extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetMlTransformRequest) {
    super(scope, id);
  }

  public get mlUserDataEncryptionMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.TransformEncryption.MlUserDataEncryption.MlUserDataEncryptionMode'),
        outputPath: 'TransformEncryption.MlUserDataEncryption.MlUserDataEncryptionMode',
        parameters: {
          TransformId: this.input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTransform.TransformEncryption.MlUserDataEncryption.MlUserDataEncryptionMode', props);
    return resource.getResponseField('TransformEncryption.MlUserDataEncryption.MlUserDataEncryptionMode') as unknown as string;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransform.TransformEncryption.MlUserDataEncryption.KmsKeyId'),
        outputPath: 'TransformEncryption.MlUserDataEncryption.KmsKeyId',
        parameters: {
          TransformId: this.input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTransform.TransformEncryption.MlUserDataEncryption.KmsKeyId', props);
    return resource.getResponseField('TransformEncryption.MlUserDataEncryption.KmsKeyId') as unknown as string;
  }

}

export class GlueFetchMlTransforms extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetMlTransformsRequest) {
    super(scope, id);
  }

  public get transforms(): shapes.GlueMlTransform[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransforms',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransforms.Transforms'),
        outputPath: 'Transforms',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          Filter: {
            Name: this.input.filter?.name,
            TransformType: this.input.filter?.transformType,
            Status: this.input.filter?.status,
            GlueVersion: this.input.filter?.glueVersion,
            CreatedBefore: this.input.filter?.createdBefore,
            CreatedAfter: this.input.filter?.createdAfter,
            LastModifiedBefore: this.input.filter?.lastModifiedBefore,
            LastModifiedAfter: this.input.filter?.lastModifiedAfter,
            Schema: this.input.filter?.schema,
          },
          Sort: {
            Column: this.input.sort?.column,
            SortDirection: this.input.sort?.sortDirection,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTransforms.Transforms', props);
    return resource.getResponseField('Transforms') as unknown as shapes.GlueMlTransform[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlTransforms',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMLTransforms.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          Filter: {
            Name: this.input.filter?.name,
            TransformType: this.input.filter?.transformType,
            Status: this.input.filter?.status,
            GlueVersion: this.input.filter?.glueVersion,
            CreatedBefore: this.input.filter?.createdBefore,
            CreatedAfter: this.input.filter?.createdAfter,
            LastModifiedBefore: this.input.filter?.lastModifiedBefore,
            LastModifiedAfter: this.input.filter?.lastModifiedAfter,
            Schema: this.input.filter?.schema,
          },
          Sort: {
            Column: this.input.sort?.column,
            SortDirection: this.input.sort?.sortDirection,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLTransforms.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueFetchMapping extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetMappingRequest) {
    super(scope, id);
  }

  public get mapping(): shapes.GlueMappingEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMapping',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetMapping.Mapping'),
        outputPath: 'Mapping',
        parameters: {
          Source: {
            DatabaseName: this.input.source.databaseName,
            TableName: this.input.source.tableName,
          },
          Sinks: this.input.sinks,
          Location: {
            Jdbc: this.input.location?.jdbc,
            S3: this.input.location?.s3,
            DynamoDB: this.input.location?.dynamoDb,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMapping.Mapping', props);
    return resource.getResponseField('Mapping') as unknown as shapes.GlueMappingEntry[];
  }

}

export class GlueFetchPartition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetPartitionRequest) {
    super(scope, id);
  }

  public get partition(): GlueFetchPartitionPartition {
    return new GlueFetchPartitionPartition(this, 'Partition', this.__resources, this.input);
  }

}

export class GlueFetchPartitionPartition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetPartitionRequest) {
    super(scope, id);
  }

  public get values(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.Values'),
        outputPath: 'Partition.Values',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          PartitionValues: this.input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPartition.Partition.Values', props);
    return resource.getResponseField('Partition.Values') as unknown as string[];
  }

  public get databaseName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.DatabaseName'),
        outputPath: 'Partition.DatabaseName',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          PartitionValues: this.input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPartition.Partition.DatabaseName', props);
    return resource.getResponseField('Partition.DatabaseName') as unknown as string;
  }

  public get tableName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.TableName'),
        outputPath: 'Partition.TableName',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          PartitionValues: this.input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPartition.Partition.TableName', props);
    return resource.getResponseField('Partition.TableName') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.CreationTime'),
        outputPath: 'Partition.CreationTime',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          PartitionValues: this.input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPartition.Partition.CreationTime', props);
    return resource.getResponseField('Partition.CreationTime') as unknown as string;
  }

  public get lastAccessTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.LastAccessTime'),
        outputPath: 'Partition.LastAccessTime',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          PartitionValues: this.input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPartition.Partition.LastAccessTime', props);
    return resource.getResponseField('Partition.LastAccessTime') as unknown as string;
  }

  public get storageDescriptor(): GlueFetchPartitionPartitionStorageDescriptor {
    return new GlueFetchPartitionPartitionStorageDescriptor(this, 'StorageDescriptor', this.__resources, this.input);
  }

  public get parameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.Parameters'),
        outputPath: 'Partition.Parameters',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          PartitionValues: this.input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPartition.Partition.Parameters', props);
    return resource.getResponseField('Partition.Parameters') as unknown as Record<string, string>;
  }

  public get lastAnalyzedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.LastAnalyzedTime'),
        outputPath: 'Partition.LastAnalyzedTime',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          PartitionValues: this.input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPartition.Partition.LastAnalyzedTime', props);
    return resource.getResponseField('Partition.LastAnalyzedTime') as unknown as string;
  }

  public get catalogId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.CatalogId'),
        outputPath: 'Partition.CatalogId',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          PartitionValues: this.input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPartition.Partition.CatalogId', props);
    return resource.getResponseField('Partition.CatalogId') as unknown as string;
  }

}

export class GlueFetchPartitionPartitionStorageDescriptor extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetPartitionRequest) {
    super(scope, id);
  }

  public get columns(): shapes.GlueColumn[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.StorageDescriptor.Columns'),
        outputPath: 'Partition.StorageDescriptor.Columns',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          PartitionValues: this.input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPartition.Partition.StorageDescriptor.Columns', props);
    return resource.getResponseField('Partition.StorageDescriptor.Columns') as unknown as shapes.GlueColumn[];
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.StorageDescriptor.Location'),
        outputPath: 'Partition.StorageDescriptor.Location',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          PartitionValues: this.input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPartition.Partition.StorageDescriptor.Location', props);
    return resource.getResponseField('Partition.StorageDescriptor.Location') as unknown as string;
  }

  public get inputFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.StorageDescriptor.InputFormat'),
        outputPath: 'Partition.StorageDescriptor.InputFormat',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          PartitionValues: this.input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPartition.Partition.StorageDescriptor.InputFormat', props);
    return resource.getResponseField('Partition.StorageDescriptor.InputFormat') as unknown as string;
  }

  public get outputFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.StorageDescriptor.OutputFormat'),
        outputPath: 'Partition.StorageDescriptor.OutputFormat',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          PartitionValues: this.input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPartition.Partition.StorageDescriptor.OutputFormat', props);
    return resource.getResponseField('Partition.StorageDescriptor.OutputFormat') as unknown as string;
  }

  public get compressed(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.StorageDescriptor.Compressed'),
        outputPath: 'Partition.StorageDescriptor.Compressed',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          PartitionValues: this.input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPartition.Partition.StorageDescriptor.Compressed', props);
    return resource.getResponseField('Partition.StorageDescriptor.Compressed') as unknown as boolean;
  }

  public get numberOfBuckets(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.StorageDescriptor.NumberOfBuckets'),
        outputPath: 'Partition.StorageDescriptor.NumberOfBuckets',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          PartitionValues: this.input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPartition.Partition.StorageDescriptor.NumberOfBuckets', props);
    return resource.getResponseField('Partition.StorageDescriptor.NumberOfBuckets') as unknown as number;
  }

  public get serdeInfo(): GlueFetchPartitionPartitionStorageDescriptorSerdeInfo {
    return new GlueFetchPartitionPartitionStorageDescriptorSerdeInfo(this, 'SerdeInfo', this.__resources, this.input);
  }

  public get bucketColumns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.StorageDescriptor.BucketColumns'),
        outputPath: 'Partition.StorageDescriptor.BucketColumns',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          PartitionValues: this.input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPartition.Partition.StorageDescriptor.BucketColumns', props);
    return resource.getResponseField('Partition.StorageDescriptor.BucketColumns') as unknown as string[];
  }

  public get sortColumns(): shapes.GlueOrder[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.StorageDescriptor.SortColumns'),
        outputPath: 'Partition.StorageDescriptor.SortColumns',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          PartitionValues: this.input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPartition.Partition.StorageDescriptor.SortColumns', props);
    return resource.getResponseField('Partition.StorageDescriptor.SortColumns') as unknown as shapes.GlueOrder[];
  }

  public get parameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.StorageDescriptor.Parameters'),
        outputPath: 'Partition.StorageDescriptor.Parameters',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          PartitionValues: this.input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPartition.Partition.StorageDescriptor.Parameters', props);
    return resource.getResponseField('Partition.StorageDescriptor.Parameters') as unknown as Record<string, string>;
  }

  public get skewedInfo(): GlueFetchPartitionPartitionStorageDescriptorSkewedInfo {
    return new GlueFetchPartitionPartitionStorageDescriptorSkewedInfo(this, 'SkewedInfo', this.__resources, this.input);
  }

  public get storedAsSubDirectories(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.StorageDescriptor.StoredAsSubDirectories'),
        outputPath: 'Partition.StorageDescriptor.StoredAsSubDirectories',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          PartitionValues: this.input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPartition.Partition.StorageDescriptor.StoredAsSubDirectories', props);
    return resource.getResponseField('Partition.StorageDescriptor.StoredAsSubDirectories') as unknown as boolean;
  }

  public get schemaReference(): GlueFetchPartitionPartitionStorageDescriptorSchemaReference {
    return new GlueFetchPartitionPartitionStorageDescriptorSchemaReference(this, 'SchemaReference', this.__resources, this.input);
  }

}

export class GlueFetchPartitionPartitionStorageDescriptorSerdeInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetPartitionRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.StorageDescriptor.SerdeInfo.Name'),
        outputPath: 'Partition.StorageDescriptor.SerdeInfo.Name',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          PartitionValues: this.input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPartition.Partition.StorageDescriptor.SerdeInfo.Name', props);
    return resource.getResponseField('Partition.StorageDescriptor.SerdeInfo.Name') as unknown as string;
  }

  public get serializationLibrary(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.StorageDescriptor.SerdeInfo.SerializationLibrary'),
        outputPath: 'Partition.StorageDescriptor.SerdeInfo.SerializationLibrary',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          PartitionValues: this.input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPartition.Partition.StorageDescriptor.SerdeInfo.SerializationLibrary', props);
    return resource.getResponseField('Partition.StorageDescriptor.SerdeInfo.SerializationLibrary') as unknown as string;
  }

  public get parameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.StorageDescriptor.SerdeInfo.Parameters'),
        outputPath: 'Partition.StorageDescriptor.SerdeInfo.Parameters',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          PartitionValues: this.input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPartition.Partition.StorageDescriptor.SerdeInfo.Parameters', props);
    return resource.getResponseField('Partition.StorageDescriptor.SerdeInfo.Parameters') as unknown as Record<string, string>;
  }

}

export class GlueFetchPartitionPartitionStorageDescriptorSkewedInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetPartitionRequest) {
    super(scope, id);
  }

  public get skewedColumnNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.StorageDescriptor.SkewedInfo.SkewedColumnNames'),
        outputPath: 'Partition.StorageDescriptor.SkewedInfo.SkewedColumnNames',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          PartitionValues: this.input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPartition.Partition.StorageDescriptor.SkewedInfo.SkewedColumnNames', props);
    return resource.getResponseField('Partition.StorageDescriptor.SkewedInfo.SkewedColumnNames') as unknown as string[];
  }

  public get skewedColumnValues(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.StorageDescriptor.SkewedInfo.SkewedColumnValues'),
        outputPath: 'Partition.StorageDescriptor.SkewedInfo.SkewedColumnValues',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          PartitionValues: this.input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPartition.Partition.StorageDescriptor.SkewedInfo.SkewedColumnValues', props);
    return resource.getResponseField('Partition.StorageDescriptor.SkewedInfo.SkewedColumnValues') as unknown as string[];
  }

  public get skewedColumnValueLocationMaps(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.StorageDescriptor.SkewedInfo.SkewedColumnValueLocationMaps'),
        outputPath: 'Partition.StorageDescriptor.SkewedInfo.SkewedColumnValueLocationMaps',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          PartitionValues: this.input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPartition.Partition.StorageDescriptor.SkewedInfo.SkewedColumnValueLocationMaps', props);
    return resource.getResponseField('Partition.StorageDescriptor.SkewedInfo.SkewedColumnValueLocationMaps') as unknown as Record<string, string>;
  }

}

export class GlueFetchPartitionPartitionStorageDescriptorSchemaReference extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetPartitionRequest) {
    super(scope, id);
  }

  public get schemaId(): GlueFetchPartitionPartitionStorageDescriptorSchemaReferenceSchemaId {
    return new GlueFetchPartitionPartitionStorageDescriptorSchemaReferenceSchemaId(this, 'SchemaId', this.__resources, this.input);
  }

  public get schemaVersionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.StorageDescriptor.SchemaReference.SchemaVersionId'),
        outputPath: 'Partition.StorageDescriptor.SchemaReference.SchemaVersionId',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          PartitionValues: this.input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPartition.Partition.StorageDescriptor.SchemaReference.SchemaVersionId', props);
    return resource.getResponseField('Partition.StorageDescriptor.SchemaReference.SchemaVersionId') as unknown as string;
  }

  public get schemaVersionNumber(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.StorageDescriptor.SchemaReference.SchemaVersionNumber'),
        outputPath: 'Partition.StorageDescriptor.SchemaReference.SchemaVersionNumber',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          PartitionValues: this.input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPartition.Partition.StorageDescriptor.SchemaReference.SchemaVersionNumber', props);
    return resource.getResponseField('Partition.StorageDescriptor.SchemaReference.SchemaVersionNumber') as unknown as number;
  }

}

export class GlueFetchPartitionPartitionStorageDescriptorSchemaReferenceSchemaId extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetPartitionRequest) {
    super(scope, id);
  }

  public get schemaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.StorageDescriptor.SchemaReference.SchemaId.SchemaArn'),
        outputPath: 'Partition.StorageDescriptor.SchemaReference.SchemaId.SchemaArn',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          PartitionValues: this.input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPartition.Partition.StorageDescriptor.SchemaReference.SchemaId.SchemaArn', props);
    return resource.getResponseField('Partition.StorageDescriptor.SchemaReference.SchemaId.SchemaArn') as unknown as string;
  }

  public get schemaName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.StorageDescriptor.SchemaReference.SchemaId.SchemaName'),
        outputPath: 'Partition.StorageDescriptor.SchemaReference.SchemaId.SchemaName',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          PartitionValues: this.input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPartition.Partition.StorageDescriptor.SchemaReference.SchemaId.SchemaName', props);
    return resource.getResponseField('Partition.StorageDescriptor.SchemaReference.SchemaId.SchemaName') as unknown as string;
  }

  public get registryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartition.Partition.StorageDescriptor.SchemaReference.SchemaId.RegistryName'),
        outputPath: 'Partition.StorageDescriptor.SchemaReference.SchemaId.RegistryName',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          PartitionValues: this.input.partitionValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPartition.Partition.StorageDescriptor.SchemaReference.SchemaId.RegistryName', props);
    return resource.getResponseField('Partition.StorageDescriptor.SchemaReference.SchemaId.RegistryName') as unknown as string;
  }

}

export class GlueFetchPartitionIndexes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetPartitionIndexesRequest) {
    super(scope, id);
  }

  public get partitionIndexDescriptorList(): shapes.GluePartitionIndexDescriptor[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartitionIndexes',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartitionIndexes.PartitionIndexDescriptorList'),
        outputPath: 'PartitionIndexDescriptorList',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPartitionIndexes.PartitionIndexDescriptorList', props);
    return resource.getResponseField('PartitionIndexDescriptorList') as unknown as shapes.GluePartitionIndexDescriptor[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartitionIndexes',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartitionIndexes.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPartitionIndexes.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueFetchPartitions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetPartitionsRequest) {
    super(scope, id);
  }

  public get partitions(): shapes.GluePartition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartitions',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartitions.Partitions'),
        outputPath: 'Partitions',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          Expression: this.input.expression,
          NextToken: this.input.nextToken,
          Segment: {
            SegmentNumber: this.input.segment?.segmentNumber,
            TotalSegments: this.input.segment?.totalSegments,
          },
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPartitions.Partitions', props);
    return resource.getResponseField('Partitions') as unknown as shapes.GluePartition[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPartitions',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPartitions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          Expression: this.input.expression,
          NextToken: this.input.nextToken,
          Segment: {
            SegmentNumber: this.input.segment?.segmentNumber,
            TotalSegments: this.input.segment?.totalSegments,
          },
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPartitions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueFetchPlan extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetPlanRequest) {
    super(scope, id);
  }

  public get pythonScript(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPlan',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPlan.PythonScript'),
        outputPath: 'PythonScript',
        parameters: {
          Mapping: this.input.mapping,
          Source: {
            DatabaseName: this.input.source.databaseName,
            TableName: this.input.source.tableName,
          },
          Sinks: this.input.sinks,
          Location: {
            Jdbc: this.input.location?.jdbc,
            S3: this.input.location?.s3,
            DynamoDB: this.input.location?.dynamoDb,
          },
          Language: this.input.language,
          AdditionalPlanOptionsMap: this.input.additionalPlanOptionsMap,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPlan.PythonScript', props);
    return resource.getResponseField('PythonScript') as unknown as string;
  }

  public get scalaCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPlan',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetPlan.ScalaCode'),
        outputPath: 'ScalaCode',
        parameters: {
          Mapping: this.input.mapping,
          Source: {
            DatabaseName: this.input.source.databaseName,
            TableName: this.input.source.tableName,
          },
          Sinks: this.input.sinks,
          Location: {
            Jdbc: this.input.location?.jdbc,
            S3: this.input.location?.s3,
            DynamoDB: this.input.location?.dynamoDb,
          },
          Language: this.input.language,
          AdditionalPlanOptionsMap: this.input.additionalPlanOptionsMap,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPlan.ScalaCode', props);
    return resource.getResponseField('ScalaCode') as unknown as string;
  }

}

export class GlueFetchRegistry extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetRegistryInput) {
    super(scope, id);
  }

  public get registryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRegistry',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetRegistry.RegistryName'),
        outputPath: 'RegistryName',
        parameters: {
          RegistryId: {
            RegistryName: this.input.registryId.registryName,
            RegistryArn: this.input.registryId.registryArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRegistry.RegistryName', props);
    return resource.getResponseField('RegistryName') as unknown as string;
  }

  public get registryArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRegistry',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetRegistry.RegistryArn'),
        outputPath: 'RegistryArn',
        parameters: {
          RegistryId: {
            RegistryName: this.input.registryId.registryName,
            RegistryArn: this.input.registryId.registryArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRegistry.RegistryArn', props);
    return resource.getResponseField('RegistryArn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRegistry',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetRegistry.Description'),
        outputPath: 'Description',
        parameters: {
          RegistryId: {
            RegistryName: this.input.registryId.registryName,
            RegistryArn: this.input.registryId.registryArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRegistry.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRegistry',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetRegistry.Status'),
        outputPath: 'Status',
        parameters: {
          RegistryId: {
            RegistryName: this.input.registryId.registryName,
            RegistryArn: this.input.registryId.registryArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRegistry.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRegistry',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetRegistry.CreatedTime'),
        outputPath: 'CreatedTime',
        parameters: {
          RegistryId: {
            RegistryName: this.input.registryId.registryName,
            RegistryArn: this.input.registryId.registryArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRegistry.CreatedTime', props);
    return resource.getResponseField('CreatedTime') as unknown as string;
  }

  public get updatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRegistry',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetRegistry.UpdatedTime'),
        outputPath: 'UpdatedTime',
        parameters: {
          RegistryId: {
            RegistryName: this.input.registryId.registryName,
            RegistryArn: this.input.registryId.registryArn,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRegistry.UpdatedTime', props);
    return resource.getResponseField('UpdatedTime') as unknown as string;
  }

}

export class GlueFetchResourcePolicies extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetResourcePoliciesRequest) {
    super(scope, id);
  }

  public get getResourcePoliciesResponseList(): shapes.GlueGluePolicy[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourcePolicies',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetResourcePolicies.GetResourcePoliciesResponseList'),
        outputPath: 'GetResourcePoliciesResponseList',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResourcePolicies.GetResourcePoliciesResponseList', props);
    return resource.getResponseField('GetResourcePoliciesResponseList') as unknown as shapes.GlueGluePolicy[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourcePolicies',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetResourcePolicies.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResourcePolicies.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueFetchResourcePolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetResourcePolicyRequest) {
    super(scope, id);
  }

  public get policyInJson(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourcePolicy',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetResourcePolicy.PolicyInJson'),
        outputPath: 'PolicyInJson',
        parameters: {
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResourcePolicy.PolicyInJson', props);
    return resource.getResponseField('PolicyInJson') as unknown as string;
  }

  public get policyHash(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourcePolicy',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetResourcePolicy.PolicyHash'),
        outputPath: 'PolicyHash',
        parameters: {
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResourcePolicy.PolicyHash', props);
    return resource.getResponseField('PolicyHash') as unknown as string;
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourcePolicy',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetResourcePolicy.CreateTime'),
        outputPath: 'CreateTime',
        parameters: {
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResourcePolicy.CreateTime', props);
    return resource.getResponseField('CreateTime') as unknown as string;
  }

  public get updateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResourcePolicy',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetResourcePolicy.UpdateTime'),
        outputPath: 'UpdateTime',
        parameters: {
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResourcePolicy.UpdateTime', props);
    return resource.getResponseField('UpdateTime') as unknown as string;
  }

}

export class GlueFetchSchema extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetSchemaInput) {
    super(scope, id);
  }

  public get registryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchema.RegistryName'),
        outputPath: 'RegistryName',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId.schemaArn,
            SchemaName: this.input.schemaId.schemaName,
            RegistryName: this.input.schemaId.registryName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSchema.RegistryName', props);
    return resource.getResponseField('RegistryName') as unknown as string;
  }

  public get registryArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchema.RegistryArn'),
        outputPath: 'RegistryArn',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId.schemaArn,
            SchemaName: this.input.schemaId.schemaName,
            RegistryName: this.input.schemaId.registryName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSchema.RegistryArn', props);
    return resource.getResponseField('RegistryArn') as unknown as string;
  }

  public get schemaName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchema.SchemaName'),
        outputPath: 'SchemaName',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId.schemaArn,
            SchemaName: this.input.schemaId.schemaName,
            RegistryName: this.input.schemaId.registryName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSchema.SchemaName', props);
    return resource.getResponseField('SchemaName') as unknown as string;
  }

  public get schemaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchema.SchemaArn'),
        outputPath: 'SchemaArn',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId.schemaArn,
            SchemaName: this.input.schemaId.schemaName,
            RegistryName: this.input.schemaId.registryName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSchema.SchemaArn', props);
    return resource.getResponseField('SchemaArn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchema.Description'),
        outputPath: 'Description',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId.schemaArn,
            SchemaName: this.input.schemaId.schemaName,
            RegistryName: this.input.schemaId.registryName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSchema.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get dataFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchema.DataFormat'),
        outputPath: 'DataFormat',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId.schemaArn,
            SchemaName: this.input.schemaId.schemaName,
            RegistryName: this.input.schemaId.registryName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSchema.DataFormat', props);
    return resource.getResponseField('DataFormat') as unknown as string;
  }

  public get compatibility(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchema.Compatibility'),
        outputPath: 'Compatibility',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId.schemaArn,
            SchemaName: this.input.schemaId.schemaName,
            RegistryName: this.input.schemaId.registryName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSchema.Compatibility', props);
    return resource.getResponseField('Compatibility') as unknown as string;
  }

  public get schemaCheckpoint(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchema.SchemaCheckpoint'),
        outputPath: 'SchemaCheckpoint',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId.schemaArn,
            SchemaName: this.input.schemaId.schemaName,
            RegistryName: this.input.schemaId.registryName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSchema.SchemaCheckpoint', props);
    return resource.getResponseField('SchemaCheckpoint') as unknown as number;
  }

  public get latestSchemaVersion(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchema.LatestSchemaVersion'),
        outputPath: 'LatestSchemaVersion',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId.schemaArn,
            SchemaName: this.input.schemaId.schemaName,
            RegistryName: this.input.schemaId.registryName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSchema.LatestSchemaVersion', props);
    return resource.getResponseField('LatestSchemaVersion') as unknown as number;
  }

  public get nextSchemaVersion(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchema.NextSchemaVersion'),
        outputPath: 'NextSchemaVersion',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId.schemaArn,
            SchemaName: this.input.schemaId.schemaName,
            RegistryName: this.input.schemaId.registryName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSchema.NextSchemaVersion', props);
    return resource.getResponseField('NextSchemaVersion') as unknown as number;
  }

  public get schemaStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchema.SchemaStatus'),
        outputPath: 'SchemaStatus',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId.schemaArn,
            SchemaName: this.input.schemaId.schemaName,
            RegistryName: this.input.schemaId.registryName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSchema.SchemaStatus', props);
    return resource.getResponseField('SchemaStatus') as unknown as string;
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchema.CreatedTime'),
        outputPath: 'CreatedTime',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId.schemaArn,
            SchemaName: this.input.schemaId.schemaName,
            RegistryName: this.input.schemaId.registryName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSchema.CreatedTime', props);
    return resource.getResponseField('CreatedTime') as unknown as string;
  }

  public get updatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchema.UpdatedTime'),
        outputPath: 'UpdatedTime',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId.schemaArn,
            SchemaName: this.input.schemaId.schemaName,
            RegistryName: this.input.schemaId.registryName,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSchema.UpdatedTime', props);
    return resource.getResponseField('UpdatedTime') as unknown as string;
  }

}

export class GlueFetchSchemaByDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetSchemaByDefinitionInput) {
    super(scope, id);
  }

  public get schemaVersionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchemaByDefinition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchemaByDefinition.SchemaVersionId'),
        outputPath: 'SchemaVersionId',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId.schemaArn,
            SchemaName: this.input.schemaId.schemaName,
            RegistryName: this.input.schemaId.registryName,
          },
          SchemaDefinition: this.input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSchemaByDefinition.SchemaVersionId', props);
    return resource.getResponseField('SchemaVersionId') as unknown as string;
  }

  public get schemaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchemaByDefinition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchemaByDefinition.SchemaArn'),
        outputPath: 'SchemaArn',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId.schemaArn,
            SchemaName: this.input.schemaId.schemaName,
            RegistryName: this.input.schemaId.registryName,
          },
          SchemaDefinition: this.input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSchemaByDefinition.SchemaArn', props);
    return resource.getResponseField('SchemaArn') as unknown as string;
  }

  public get dataFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchemaByDefinition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchemaByDefinition.DataFormat'),
        outputPath: 'DataFormat',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId.schemaArn,
            SchemaName: this.input.schemaId.schemaName,
            RegistryName: this.input.schemaId.registryName,
          },
          SchemaDefinition: this.input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSchemaByDefinition.DataFormat', props);
    return resource.getResponseField('DataFormat') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchemaByDefinition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchemaByDefinition.Status'),
        outputPath: 'Status',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId.schemaArn,
            SchemaName: this.input.schemaId.schemaName,
            RegistryName: this.input.schemaId.registryName,
          },
          SchemaDefinition: this.input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSchemaByDefinition.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchemaByDefinition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchemaByDefinition.CreatedTime'),
        outputPath: 'CreatedTime',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId.schemaArn,
            SchemaName: this.input.schemaId.schemaName,
            RegistryName: this.input.schemaId.registryName,
          },
          SchemaDefinition: this.input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSchemaByDefinition.CreatedTime', props);
    return resource.getResponseField('CreatedTime') as unknown as string;
  }

}

export class GlueFetchSchemaVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetSchemaVersionInput) {
    super(scope, id);
  }

  public get schemaVersionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchemaVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchemaVersion.SchemaVersionId'),
        outputPath: 'SchemaVersionId',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId?.schemaArn,
            SchemaName: this.input.schemaId?.schemaName,
            RegistryName: this.input.schemaId?.registryName,
          },
          SchemaVersionId: this.input.schemaVersionId,
          SchemaVersionNumber: {
            LatestVersion: this.input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.input.schemaVersionNumber?.versionNumber,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSchemaVersion.SchemaVersionId', props);
    return resource.getResponseField('SchemaVersionId') as unknown as string;
  }

  public get schemaDefinition(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchemaVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchemaVersion.SchemaDefinition'),
        outputPath: 'SchemaDefinition',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId?.schemaArn,
            SchemaName: this.input.schemaId?.schemaName,
            RegistryName: this.input.schemaId?.registryName,
          },
          SchemaVersionId: this.input.schemaVersionId,
          SchemaVersionNumber: {
            LatestVersion: this.input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.input.schemaVersionNumber?.versionNumber,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSchemaVersion.SchemaDefinition', props);
    return resource.getResponseField('SchemaDefinition') as unknown as string;
  }

  public get dataFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchemaVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchemaVersion.DataFormat'),
        outputPath: 'DataFormat',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId?.schemaArn,
            SchemaName: this.input.schemaId?.schemaName,
            RegistryName: this.input.schemaId?.registryName,
          },
          SchemaVersionId: this.input.schemaVersionId,
          SchemaVersionNumber: {
            LatestVersion: this.input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.input.schemaVersionNumber?.versionNumber,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSchemaVersion.DataFormat', props);
    return resource.getResponseField('DataFormat') as unknown as string;
  }

  public get schemaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchemaVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchemaVersion.SchemaArn'),
        outputPath: 'SchemaArn',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId?.schemaArn,
            SchemaName: this.input.schemaId?.schemaName,
            RegistryName: this.input.schemaId?.registryName,
          },
          SchemaVersionId: this.input.schemaVersionId,
          SchemaVersionNumber: {
            LatestVersion: this.input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.input.schemaVersionNumber?.versionNumber,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSchemaVersion.SchemaArn', props);
    return resource.getResponseField('SchemaArn') as unknown as string;
  }

  public get versionNumber(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchemaVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchemaVersion.VersionNumber'),
        outputPath: 'VersionNumber',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId?.schemaArn,
            SchemaName: this.input.schemaId?.schemaName,
            RegistryName: this.input.schemaId?.registryName,
          },
          SchemaVersionId: this.input.schemaVersionId,
          SchemaVersionNumber: {
            LatestVersion: this.input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.input.schemaVersionNumber?.versionNumber,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSchemaVersion.VersionNumber', props);
    return resource.getResponseField('VersionNumber') as unknown as number;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchemaVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchemaVersion.Status'),
        outputPath: 'Status',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId?.schemaArn,
            SchemaName: this.input.schemaId?.schemaName,
            RegistryName: this.input.schemaId?.registryName,
          },
          SchemaVersionId: this.input.schemaVersionId,
          SchemaVersionNumber: {
            LatestVersion: this.input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.input.schemaVersionNumber?.versionNumber,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSchemaVersion.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchemaVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchemaVersion.CreatedTime'),
        outputPath: 'CreatedTime',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId?.schemaArn,
            SchemaName: this.input.schemaId?.schemaName,
            RegistryName: this.input.schemaId?.registryName,
          },
          SchemaVersionId: this.input.schemaVersionId,
          SchemaVersionNumber: {
            LatestVersion: this.input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.input.schemaVersionNumber?.versionNumber,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSchemaVersion.CreatedTime', props);
    return resource.getResponseField('CreatedTime') as unknown as string;
  }

}

export class GlueFetchSchemaVersionsDiff extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetSchemaVersionsDiffInput) {
    super(scope, id);
  }

  public get diff(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSchemaVersionsDiff',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSchemaVersionsDiff.Diff'),
        outputPath: 'Diff',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId.schemaArn,
            SchemaName: this.input.schemaId.schemaName,
            RegistryName: this.input.schemaId.registryName,
          },
          FirstSchemaVersionNumber: {
            LatestVersion: this.input.firstSchemaVersionNumber.latestVersion,
            VersionNumber: this.input.firstSchemaVersionNumber.versionNumber,
          },
          SecondSchemaVersionNumber: {
            LatestVersion: this.input.secondSchemaVersionNumber.latestVersion,
            VersionNumber: this.input.secondSchemaVersionNumber.versionNumber,
          },
          SchemaDiffType: this.input.schemaDiffType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSchemaVersionsDiff.Diff', props);
    return resource.getResponseField('Diff') as unknown as string;
  }

}

export class GlueFetchSecurityConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetSecurityConfigurationRequest) {
    super(scope, id);
  }

  public get securityConfiguration(): GlueFetchSecurityConfigurationSecurityConfiguration {
    return new GlueFetchSecurityConfigurationSecurityConfiguration(this, 'SecurityConfiguration', this.__resources, this.input);
  }

}

export class GlueFetchSecurityConfigurationSecurityConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetSecurityConfigurationRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSecurityConfiguration',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSecurityConfiguration.SecurityConfiguration.Name'),
        outputPath: 'SecurityConfiguration.Name',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSecurityConfiguration.SecurityConfiguration.Name', props);
    return resource.getResponseField('SecurityConfiguration.Name') as unknown as string;
  }

  public get createdTimeStamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSecurityConfiguration',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSecurityConfiguration.SecurityConfiguration.CreatedTimeStamp'),
        outputPath: 'SecurityConfiguration.CreatedTimeStamp',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSecurityConfiguration.SecurityConfiguration.CreatedTimeStamp', props);
    return resource.getResponseField('SecurityConfiguration.CreatedTimeStamp') as unknown as string;
  }

  public get encryptionConfiguration(): GlueFetchSecurityConfigurationSecurityConfigurationEncryptionConfiguration {
    return new GlueFetchSecurityConfigurationSecurityConfigurationEncryptionConfiguration(this, 'EncryptionConfiguration', this.__resources, this.input);
  }

}

export class GlueFetchSecurityConfigurationSecurityConfigurationEncryptionConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetSecurityConfigurationRequest) {
    super(scope, id);
  }

  public get s3Encryption(): shapes.GlueS3Encryption[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSecurityConfiguration',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSecurityConfiguration.SecurityConfiguration.EncryptionConfiguration.S3Encryption'),
        outputPath: 'SecurityConfiguration.EncryptionConfiguration.S3Encryption',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSecurityConfiguration.SecurityConfiguration.EncryptionConfiguration.S3Encryption', props);
    return resource.getResponseField('SecurityConfiguration.EncryptionConfiguration.S3Encryption') as unknown as shapes.GlueS3Encryption[];
  }

  public get cloudWatchEncryption(): GlueFetchSecurityConfigurationSecurityConfigurationEncryptionConfigurationCloudWatchEncryption {
    return new GlueFetchSecurityConfigurationSecurityConfigurationEncryptionConfigurationCloudWatchEncryption(this, 'CloudWatchEncryption', this.__resources, this.input);
  }

  public get jobBookmarksEncryption(): GlueFetchSecurityConfigurationSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption {
    return new GlueFetchSecurityConfigurationSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption(this, 'JobBookmarksEncryption', this.__resources, this.input);
  }

}

export class GlueFetchSecurityConfigurationSecurityConfigurationEncryptionConfigurationCloudWatchEncryption extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetSecurityConfigurationRequest) {
    super(scope, id);
  }

  public get cloudWatchEncryptionMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSecurityConfiguration',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSecurityConfiguration.SecurityConfiguration.EncryptionConfiguration.CloudWatchEncryption.CloudWatchEncryptionMode'),
        outputPath: 'SecurityConfiguration.EncryptionConfiguration.CloudWatchEncryption.CloudWatchEncryptionMode',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSecurityConfiguration.SecurityConfiguration.EncryptionConfiguration.CloudWatchEncryption.CloudWatchEncryptionMode', props);
    return resource.getResponseField('SecurityConfiguration.EncryptionConfiguration.CloudWatchEncryption.CloudWatchEncryptionMode') as unknown as string;
  }

  public get kmsKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSecurityConfiguration',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSecurityConfiguration.SecurityConfiguration.EncryptionConfiguration.CloudWatchEncryption.KmsKeyArn'),
        outputPath: 'SecurityConfiguration.EncryptionConfiguration.CloudWatchEncryption.KmsKeyArn',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSecurityConfiguration.SecurityConfiguration.EncryptionConfiguration.CloudWatchEncryption.KmsKeyArn', props);
    return resource.getResponseField('SecurityConfiguration.EncryptionConfiguration.CloudWatchEncryption.KmsKeyArn') as unknown as string;
  }

}

export class GlueFetchSecurityConfigurationSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetSecurityConfigurationRequest) {
    super(scope, id);
  }

  public get jobBookmarksEncryptionMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSecurityConfiguration',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSecurityConfiguration.SecurityConfiguration.EncryptionConfiguration.JobBookmarksEncryption.JobBookmarksEncryptionMode'),
        outputPath: 'SecurityConfiguration.EncryptionConfiguration.JobBookmarksEncryption.JobBookmarksEncryptionMode',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSecurityConfiguration.SecurityConfiguration.EncryptionConfiguration.JobBookmarksEncryption.JobBookmarksEncryptionMode', props);
    return resource.getResponseField('SecurityConfiguration.EncryptionConfiguration.JobBookmarksEncryption.JobBookmarksEncryptionMode') as unknown as string;
  }

  public get kmsKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSecurityConfiguration',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSecurityConfiguration.SecurityConfiguration.EncryptionConfiguration.JobBookmarksEncryption.KmsKeyArn'),
        outputPath: 'SecurityConfiguration.EncryptionConfiguration.JobBookmarksEncryption.KmsKeyArn',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSecurityConfiguration.SecurityConfiguration.EncryptionConfiguration.JobBookmarksEncryption.KmsKeyArn', props);
    return resource.getResponseField('SecurityConfiguration.EncryptionConfiguration.JobBookmarksEncryption.KmsKeyArn') as unknown as string;
  }

}

export class GlueFetchSecurityConfigurations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetSecurityConfigurationsRequest) {
    super(scope, id);
  }

  public get securityConfigurations(): shapes.GlueSecurityConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSecurityConfigurations',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSecurityConfigurations.SecurityConfigurations'),
        outputPath: 'SecurityConfigurations',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSecurityConfigurations.SecurityConfigurations', props);
    return resource.getResponseField('SecurityConfigurations') as unknown as shapes.GlueSecurityConfiguration[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSecurityConfigurations',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetSecurityConfigurations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSecurityConfigurations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueFetchTable extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetTableRequest) {
    super(scope, id);
  }

  public get table(): GlueFetchTableTable {
    return new GlueFetchTableTable(this, 'Table', this.__resources, this.input);
  }

}

export class GlueFetchTableTable extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetTableRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.Name'),
        outputPath: 'Table.Name',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTable.Table.Name', props);
    return resource.getResponseField('Table.Name') as unknown as string;
  }

  public get databaseName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.DatabaseName'),
        outputPath: 'Table.DatabaseName',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTable.Table.DatabaseName', props);
    return resource.getResponseField('Table.DatabaseName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.Description'),
        outputPath: 'Table.Description',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTable.Table.Description', props);
    return resource.getResponseField('Table.Description') as unknown as string;
  }

  public get owner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.Owner'),
        outputPath: 'Table.Owner',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTable.Table.Owner', props);
    return resource.getResponseField('Table.Owner') as unknown as string;
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.CreateTime'),
        outputPath: 'Table.CreateTime',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTable.Table.CreateTime', props);
    return resource.getResponseField('Table.CreateTime') as unknown as string;
  }

  public get updateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.UpdateTime'),
        outputPath: 'Table.UpdateTime',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTable.Table.UpdateTime', props);
    return resource.getResponseField('Table.UpdateTime') as unknown as string;
  }

  public get lastAccessTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.LastAccessTime'),
        outputPath: 'Table.LastAccessTime',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTable.Table.LastAccessTime', props);
    return resource.getResponseField('Table.LastAccessTime') as unknown as string;
  }

  public get lastAnalyzedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.LastAnalyzedTime'),
        outputPath: 'Table.LastAnalyzedTime',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTable.Table.LastAnalyzedTime', props);
    return resource.getResponseField('Table.LastAnalyzedTime') as unknown as string;
  }

  public get retention(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.Retention'),
        outputPath: 'Table.Retention',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTable.Table.Retention', props);
    return resource.getResponseField('Table.Retention') as unknown as number;
  }

  public get storageDescriptor(): GlueFetchTableTableStorageDescriptor {
    return new GlueFetchTableTableStorageDescriptor(this, 'StorageDescriptor', this.__resources, this.input);
  }

  public get partitionKeys(): shapes.GlueColumn[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.PartitionKeys'),
        outputPath: 'Table.PartitionKeys',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTable.Table.PartitionKeys', props);
    return resource.getResponseField('Table.PartitionKeys') as unknown as shapes.GlueColumn[];
  }

  public get viewOriginalText(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.ViewOriginalText'),
        outputPath: 'Table.ViewOriginalText',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTable.Table.ViewOriginalText', props);
    return resource.getResponseField('Table.ViewOriginalText') as unknown as string;
  }

  public get viewExpandedText(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.ViewExpandedText'),
        outputPath: 'Table.ViewExpandedText',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTable.Table.ViewExpandedText', props);
    return resource.getResponseField('Table.ViewExpandedText') as unknown as string;
  }

  public get tableType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.TableType'),
        outputPath: 'Table.TableType',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTable.Table.TableType', props);
    return resource.getResponseField('Table.TableType') as unknown as string;
  }

  public get parameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.Parameters'),
        outputPath: 'Table.Parameters',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTable.Table.Parameters', props);
    return resource.getResponseField('Table.Parameters') as unknown as Record<string, string>;
  }

  public get createdBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.CreatedBy'),
        outputPath: 'Table.CreatedBy',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTable.Table.CreatedBy', props);
    return resource.getResponseField('Table.CreatedBy') as unknown as string;
  }

  public get isRegisteredWithLakeFormation(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.IsRegisteredWithLakeFormation'),
        outputPath: 'Table.IsRegisteredWithLakeFormation',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTable.Table.IsRegisteredWithLakeFormation', props);
    return resource.getResponseField('Table.IsRegisteredWithLakeFormation') as unknown as boolean;
  }

  public get targetTable(): GlueFetchTableTableTargetTable {
    return new GlueFetchTableTableTargetTable(this, 'TargetTable', this.__resources, this.input);
  }

  public get catalogId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.CatalogId'),
        outputPath: 'Table.CatalogId',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTable.Table.CatalogId', props);
    return resource.getResponseField('Table.CatalogId') as unknown as string;
  }

}

export class GlueFetchTableTableStorageDescriptor extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetTableRequest) {
    super(scope, id);
  }

  public get columns(): shapes.GlueColumn[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.StorageDescriptor.Columns'),
        outputPath: 'Table.StorageDescriptor.Columns',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTable.Table.StorageDescriptor.Columns', props);
    return resource.getResponseField('Table.StorageDescriptor.Columns') as unknown as shapes.GlueColumn[];
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.StorageDescriptor.Location'),
        outputPath: 'Table.StorageDescriptor.Location',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTable.Table.StorageDescriptor.Location', props);
    return resource.getResponseField('Table.StorageDescriptor.Location') as unknown as string;
  }

  public get inputFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.StorageDescriptor.InputFormat'),
        outputPath: 'Table.StorageDescriptor.InputFormat',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTable.Table.StorageDescriptor.InputFormat', props);
    return resource.getResponseField('Table.StorageDescriptor.InputFormat') as unknown as string;
  }

  public get outputFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.StorageDescriptor.OutputFormat'),
        outputPath: 'Table.StorageDescriptor.OutputFormat',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTable.Table.StorageDescriptor.OutputFormat', props);
    return resource.getResponseField('Table.StorageDescriptor.OutputFormat') as unknown as string;
  }

  public get compressed(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.StorageDescriptor.Compressed'),
        outputPath: 'Table.StorageDescriptor.Compressed',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTable.Table.StorageDescriptor.Compressed', props);
    return resource.getResponseField('Table.StorageDescriptor.Compressed') as unknown as boolean;
  }

  public get numberOfBuckets(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.StorageDescriptor.NumberOfBuckets'),
        outputPath: 'Table.StorageDescriptor.NumberOfBuckets',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTable.Table.StorageDescriptor.NumberOfBuckets', props);
    return resource.getResponseField('Table.StorageDescriptor.NumberOfBuckets') as unknown as number;
  }

  public get serdeInfo(): GlueFetchTableTableStorageDescriptorSerdeInfo {
    return new GlueFetchTableTableStorageDescriptorSerdeInfo(this, 'SerdeInfo', this.__resources, this.input);
  }

  public get bucketColumns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.StorageDescriptor.BucketColumns'),
        outputPath: 'Table.StorageDescriptor.BucketColumns',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTable.Table.StorageDescriptor.BucketColumns', props);
    return resource.getResponseField('Table.StorageDescriptor.BucketColumns') as unknown as string[];
  }

  public get sortColumns(): shapes.GlueOrder[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.StorageDescriptor.SortColumns'),
        outputPath: 'Table.StorageDescriptor.SortColumns',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTable.Table.StorageDescriptor.SortColumns', props);
    return resource.getResponseField('Table.StorageDescriptor.SortColumns') as unknown as shapes.GlueOrder[];
  }

  public get parameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.StorageDescriptor.Parameters'),
        outputPath: 'Table.StorageDescriptor.Parameters',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTable.Table.StorageDescriptor.Parameters', props);
    return resource.getResponseField('Table.StorageDescriptor.Parameters') as unknown as Record<string, string>;
  }

  public get skewedInfo(): GlueFetchTableTableStorageDescriptorSkewedInfo {
    return new GlueFetchTableTableStorageDescriptorSkewedInfo(this, 'SkewedInfo', this.__resources, this.input);
  }

  public get storedAsSubDirectories(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.StorageDescriptor.StoredAsSubDirectories'),
        outputPath: 'Table.StorageDescriptor.StoredAsSubDirectories',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTable.Table.StorageDescriptor.StoredAsSubDirectories', props);
    return resource.getResponseField('Table.StorageDescriptor.StoredAsSubDirectories') as unknown as boolean;
  }

  public get schemaReference(): GlueFetchTableTableStorageDescriptorSchemaReference {
    return new GlueFetchTableTableStorageDescriptorSchemaReference(this, 'SchemaReference', this.__resources, this.input);
  }

}

export class GlueFetchTableTableStorageDescriptorSerdeInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetTableRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.StorageDescriptor.SerdeInfo.Name'),
        outputPath: 'Table.StorageDescriptor.SerdeInfo.Name',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTable.Table.StorageDescriptor.SerdeInfo.Name', props);
    return resource.getResponseField('Table.StorageDescriptor.SerdeInfo.Name') as unknown as string;
  }

  public get serializationLibrary(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.StorageDescriptor.SerdeInfo.SerializationLibrary'),
        outputPath: 'Table.StorageDescriptor.SerdeInfo.SerializationLibrary',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTable.Table.StorageDescriptor.SerdeInfo.SerializationLibrary', props);
    return resource.getResponseField('Table.StorageDescriptor.SerdeInfo.SerializationLibrary') as unknown as string;
  }

  public get parameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.StorageDescriptor.SerdeInfo.Parameters'),
        outputPath: 'Table.StorageDescriptor.SerdeInfo.Parameters',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTable.Table.StorageDescriptor.SerdeInfo.Parameters', props);
    return resource.getResponseField('Table.StorageDescriptor.SerdeInfo.Parameters') as unknown as Record<string, string>;
  }

}

export class GlueFetchTableTableStorageDescriptorSkewedInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetTableRequest) {
    super(scope, id);
  }

  public get skewedColumnNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.StorageDescriptor.SkewedInfo.SkewedColumnNames'),
        outputPath: 'Table.StorageDescriptor.SkewedInfo.SkewedColumnNames',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTable.Table.StorageDescriptor.SkewedInfo.SkewedColumnNames', props);
    return resource.getResponseField('Table.StorageDescriptor.SkewedInfo.SkewedColumnNames') as unknown as string[];
  }

  public get skewedColumnValues(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.StorageDescriptor.SkewedInfo.SkewedColumnValues'),
        outputPath: 'Table.StorageDescriptor.SkewedInfo.SkewedColumnValues',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTable.Table.StorageDescriptor.SkewedInfo.SkewedColumnValues', props);
    return resource.getResponseField('Table.StorageDescriptor.SkewedInfo.SkewedColumnValues') as unknown as string[];
  }

  public get skewedColumnValueLocationMaps(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.StorageDescriptor.SkewedInfo.SkewedColumnValueLocationMaps'),
        outputPath: 'Table.StorageDescriptor.SkewedInfo.SkewedColumnValueLocationMaps',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTable.Table.StorageDescriptor.SkewedInfo.SkewedColumnValueLocationMaps', props);
    return resource.getResponseField('Table.StorageDescriptor.SkewedInfo.SkewedColumnValueLocationMaps') as unknown as Record<string, string>;
  }

}

export class GlueFetchTableTableStorageDescriptorSchemaReference extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetTableRequest) {
    super(scope, id);
  }

  public get schemaId(): GlueFetchTableTableStorageDescriptorSchemaReferenceSchemaId {
    return new GlueFetchTableTableStorageDescriptorSchemaReferenceSchemaId(this, 'SchemaId', this.__resources, this.input);
  }

  public get schemaVersionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.StorageDescriptor.SchemaReference.SchemaVersionId'),
        outputPath: 'Table.StorageDescriptor.SchemaReference.SchemaVersionId',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTable.Table.StorageDescriptor.SchemaReference.SchemaVersionId', props);
    return resource.getResponseField('Table.StorageDescriptor.SchemaReference.SchemaVersionId') as unknown as string;
  }

  public get schemaVersionNumber(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.StorageDescriptor.SchemaReference.SchemaVersionNumber'),
        outputPath: 'Table.StorageDescriptor.SchemaReference.SchemaVersionNumber',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTable.Table.StorageDescriptor.SchemaReference.SchemaVersionNumber', props);
    return resource.getResponseField('Table.StorageDescriptor.SchemaReference.SchemaVersionNumber') as unknown as number;
  }

}

export class GlueFetchTableTableStorageDescriptorSchemaReferenceSchemaId extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetTableRequest) {
    super(scope, id);
  }

  public get schemaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.StorageDescriptor.SchemaReference.SchemaId.SchemaArn'),
        outputPath: 'Table.StorageDescriptor.SchemaReference.SchemaId.SchemaArn',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTable.Table.StorageDescriptor.SchemaReference.SchemaId.SchemaArn', props);
    return resource.getResponseField('Table.StorageDescriptor.SchemaReference.SchemaId.SchemaArn') as unknown as string;
  }

  public get schemaName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.StorageDescriptor.SchemaReference.SchemaId.SchemaName'),
        outputPath: 'Table.StorageDescriptor.SchemaReference.SchemaId.SchemaName',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTable.Table.StorageDescriptor.SchemaReference.SchemaId.SchemaName', props);
    return resource.getResponseField('Table.StorageDescriptor.SchemaReference.SchemaId.SchemaName') as unknown as string;
  }

  public get registryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.StorageDescriptor.SchemaReference.SchemaId.RegistryName'),
        outputPath: 'Table.StorageDescriptor.SchemaReference.SchemaId.RegistryName',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTable.Table.StorageDescriptor.SchemaReference.SchemaId.RegistryName', props);
    return resource.getResponseField('Table.StorageDescriptor.SchemaReference.SchemaId.RegistryName') as unknown as string;
  }

}

export class GlueFetchTableTableTargetTable extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetTableRequest) {
    super(scope, id);
  }

  public get catalogId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.TargetTable.CatalogId'),
        outputPath: 'Table.TargetTable.CatalogId',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTable.Table.TargetTable.CatalogId', props);
    return resource.getResponseField('Table.TargetTable.CatalogId') as unknown as string;
  }

  public get databaseName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.TargetTable.DatabaseName'),
        outputPath: 'Table.TargetTable.DatabaseName',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTable.Table.TargetTable.DatabaseName', props);
    return resource.getResponseField('Table.TargetTable.DatabaseName') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTable.Table.TargetTable.Name'),
        outputPath: 'Table.TargetTable.Name',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTable.Table.TargetTable.Name', props);
    return resource.getResponseField('Table.TargetTable.Name') as unknown as string;
  }

}

export class GlueFetchTableVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetTableVersionRequest) {
    super(scope, id);
  }

  public get tableVersion(): GlueFetchTableVersionTableVersion {
    return new GlueFetchTableVersionTableVersion(this, 'TableVersion', this.__resources, this.input);
  }

}

export class GlueFetchTableVersionTableVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetTableVersionRequest) {
    super(scope, id);
  }

  public get table(): GlueFetchTableVersionTableVersionTable {
    return new GlueFetchTableVersionTableVersionTable(this, 'Table', this.__resources, this.input);
  }

  public get versionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.VersionId'),
        outputPath: 'TableVersion.VersionId',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableVersion.TableVersion.VersionId', props);
    return resource.getResponseField('TableVersion.VersionId') as unknown as string;
  }

}

export class GlueFetchTableVersionTableVersionTable extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetTableVersionRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.Name'),
        outputPath: 'TableVersion.Table.Name',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableVersion.TableVersion.Table.Name', props);
    return resource.getResponseField('TableVersion.Table.Name') as unknown as string;
  }

  public get databaseName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.DatabaseName'),
        outputPath: 'TableVersion.Table.DatabaseName',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableVersion.TableVersion.Table.DatabaseName', props);
    return resource.getResponseField('TableVersion.Table.DatabaseName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.Description'),
        outputPath: 'TableVersion.Table.Description',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableVersion.TableVersion.Table.Description', props);
    return resource.getResponseField('TableVersion.Table.Description') as unknown as string;
  }

  public get owner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.Owner'),
        outputPath: 'TableVersion.Table.Owner',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableVersion.TableVersion.Table.Owner', props);
    return resource.getResponseField('TableVersion.Table.Owner') as unknown as string;
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.CreateTime'),
        outputPath: 'TableVersion.Table.CreateTime',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableVersion.TableVersion.Table.CreateTime', props);
    return resource.getResponseField('TableVersion.Table.CreateTime') as unknown as string;
  }

  public get updateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.UpdateTime'),
        outputPath: 'TableVersion.Table.UpdateTime',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableVersion.TableVersion.Table.UpdateTime', props);
    return resource.getResponseField('TableVersion.Table.UpdateTime') as unknown as string;
  }

  public get lastAccessTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.LastAccessTime'),
        outputPath: 'TableVersion.Table.LastAccessTime',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableVersion.TableVersion.Table.LastAccessTime', props);
    return resource.getResponseField('TableVersion.Table.LastAccessTime') as unknown as string;
  }

  public get lastAnalyzedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.LastAnalyzedTime'),
        outputPath: 'TableVersion.Table.LastAnalyzedTime',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableVersion.TableVersion.Table.LastAnalyzedTime', props);
    return resource.getResponseField('TableVersion.Table.LastAnalyzedTime') as unknown as string;
  }

  public get retention(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.Retention'),
        outputPath: 'TableVersion.Table.Retention',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableVersion.TableVersion.Table.Retention', props);
    return resource.getResponseField('TableVersion.Table.Retention') as unknown as number;
  }

  public get storageDescriptor(): GlueFetchTableVersionTableVersionTableStorageDescriptor {
    return new GlueFetchTableVersionTableVersionTableStorageDescriptor(this, 'StorageDescriptor', this.__resources, this.input);
  }

  public get partitionKeys(): shapes.GlueColumn[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.PartitionKeys'),
        outputPath: 'TableVersion.Table.PartitionKeys',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableVersion.TableVersion.Table.PartitionKeys', props);
    return resource.getResponseField('TableVersion.Table.PartitionKeys') as unknown as shapes.GlueColumn[];
  }

  public get viewOriginalText(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.ViewOriginalText'),
        outputPath: 'TableVersion.Table.ViewOriginalText',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableVersion.TableVersion.Table.ViewOriginalText', props);
    return resource.getResponseField('TableVersion.Table.ViewOriginalText') as unknown as string;
  }

  public get viewExpandedText(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.ViewExpandedText'),
        outputPath: 'TableVersion.Table.ViewExpandedText',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableVersion.TableVersion.Table.ViewExpandedText', props);
    return resource.getResponseField('TableVersion.Table.ViewExpandedText') as unknown as string;
  }

  public get tableType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.TableType'),
        outputPath: 'TableVersion.Table.TableType',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableVersion.TableVersion.Table.TableType', props);
    return resource.getResponseField('TableVersion.Table.TableType') as unknown as string;
  }

  public get parameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.Parameters'),
        outputPath: 'TableVersion.Table.Parameters',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableVersion.TableVersion.Table.Parameters', props);
    return resource.getResponseField('TableVersion.Table.Parameters') as unknown as Record<string, string>;
  }

  public get createdBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.CreatedBy'),
        outputPath: 'TableVersion.Table.CreatedBy',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableVersion.TableVersion.Table.CreatedBy', props);
    return resource.getResponseField('TableVersion.Table.CreatedBy') as unknown as string;
  }

  public get isRegisteredWithLakeFormation(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.IsRegisteredWithLakeFormation'),
        outputPath: 'TableVersion.Table.IsRegisteredWithLakeFormation',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableVersion.TableVersion.Table.IsRegisteredWithLakeFormation', props);
    return resource.getResponseField('TableVersion.Table.IsRegisteredWithLakeFormation') as unknown as boolean;
  }

  public get targetTable(): GlueFetchTableVersionTableVersionTableTargetTable {
    return new GlueFetchTableVersionTableVersionTableTargetTable(this, 'TargetTable', this.__resources, this.input);
  }

  public get catalogId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.CatalogId'),
        outputPath: 'TableVersion.Table.CatalogId',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableVersion.TableVersion.Table.CatalogId', props);
    return resource.getResponseField('TableVersion.Table.CatalogId') as unknown as string;
  }

}

export class GlueFetchTableVersionTableVersionTableStorageDescriptor extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetTableVersionRequest) {
    super(scope, id);
  }

  public get columns(): shapes.GlueColumn[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.StorageDescriptor.Columns'),
        outputPath: 'TableVersion.Table.StorageDescriptor.Columns',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableVersion.TableVersion.Table.StorageDescriptor.Columns', props);
    return resource.getResponseField('TableVersion.Table.StorageDescriptor.Columns') as unknown as shapes.GlueColumn[];
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.StorageDescriptor.Location'),
        outputPath: 'TableVersion.Table.StorageDescriptor.Location',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableVersion.TableVersion.Table.StorageDescriptor.Location', props);
    return resource.getResponseField('TableVersion.Table.StorageDescriptor.Location') as unknown as string;
  }

  public get inputFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.StorageDescriptor.InputFormat'),
        outputPath: 'TableVersion.Table.StorageDescriptor.InputFormat',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableVersion.TableVersion.Table.StorageDescriptor.InputFormat', props);
    return resource.getResponseField('TableVersion.Table.StorageDescriptor.InputFormat') as unknown as string;
  }

  public get outputFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.StorageDescriptor.OutputFormat'),
        outputPath: 'TableVersion.Table.StorageDescriptor.OutputFormat',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableVersion.TableVersion.Table.StorageDescriptor.OutputFormat', props);
    return resource.getResponseField('TableVersion.Table.StorageDescriptor.OutputFormat') as unknown as string;
  }

  public get compressed(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.StorageDescriptor.Compressed'),
        outputPath: 'TableVersion.Table.StorageDescriptor.Compressed',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableVersion.TableVersion.Table.StorageDescriptor.Compressed', props);
    return resource.getResponseField('TableVersion.Table.StorageDescriptor.Compressed') as unknown as boolean;
  }

  public get numberOfBuckets(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.StorageDescriptor.NumberOfBuckets'),
        outputPath: 'TableVersion.Table.StorageDescriptor.NumberOfBuckets',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableVersion.TableVersion.Table.StorageDescriptor.NumberOfBuckets', props);
    return resource.getResponseField('TableVersion.Table.StorageDescriptor.NumberOfBuckets') as unknown as number;
  }

  public get serdeInfo(): GlueFetchTableVersionTableVersionTableStorageDescriptorSerdeInfo {
    return new GlueFetchTableVersionTableVersionTableStorageDescriptorSerdeInfo(this, 'SerdeInfo', this.__resources, this.input);
  }

  public get bucketColumns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.StorageDescriptor.BucketColumns'),
        outputPath: 'TableVersion.Table.StorageDescriptor.BucketColumns',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableVersion.TableVersion.Table.StorageDescriptor.BucketColumns', props);
    return resource.getResponseField('TableVersion.Table.StorageDescriptor.BucketColumns') as unknown as string[];
  }

  public get sortColumns(): shapes.GlueOrder[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.StorageDescriptor.SortColumns'),
        outputPath: 'TableVersion.Table.StorageDescriptor.SortColumns',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableVersion.TableVersion.Table.StorageDescriptor.SortColumns', props);
    return resource.getResponseField('TableVersion.Table.StorageDescriptor.SortColumns') as unknown as shapes.GlueOrder[];
  }

  public get parameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.StorageDescriptor.Parameters'),
        outputPath: 'TableVersion.Table.StorageDescriptor.Parameters',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableVersion.TableVersion.Table.StorageDescriptor.Parameters', props);
    return resource.getResponseField('TableVersion.Table.StorageDescriptor.Parameters') as unknown as Record<string, string>;
  }

  public get skewedInfo(): GlueFetchTableVersionTableVersionTableStorageDescriptorSkewedInfo {
    return new GlueFetchTableVersionTableVersionTableStorageDescriptorSkewedInfo(this, 'SkewedInfo', this.__resources, this.input);
  }

  public get storedAsSubDirectories(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.StorageDescriptor.StoredAsSubDirectories'),
        outputPath: 'TableVersion.Table.StorageDescriptor.StoredAsSubDirectories',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableVersion.TableVersion.Table.StorageDescriptor.StoredAsSubDirectories', props);
    return resource.getResponseField('TableVersion.Table.StorageDescriptor.StoredAsSubDirectories') as unknown as boolean;
  }

  public get schemaReference(): GlueFetchTableVersionTableVersionTableStorageDescriptorSchemaReference {
    return new GlueFetchTableVersionTableVersionTableStorageDescriptorSchemaReference(this, 'SchemaReference', this.__resources, this.input);
  }

}

export class GlueFetchTableVersionTableVersionTableStorageDescriptorSerdeInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetTableVersionRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.StorageDescriptor.SerdeInfo.Name'),
        outputPath: 'TableVersion.Table.StorageDescriptor.SerdeInfo.Name',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableVersion.TableVersion.Table.StorageDescriptor.SerdeInfo.Name', props);
    return resource.getResponseField('TableVersion.Table.StorageDescriptor.SerdeInfo.Name') as unknown as string;
  }

  public get serializationLibrary(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.StorageDescriptor.SerdeInfo.SerializationLibrary'),
        outputPath: 'TableVersion.Table.StorageDescriptor.SerdeInfo.SerializationLibrary',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableVersion.TableVersion.Table.StorageDescriptor.SerdeInfo.SerializationLibrary', props);
    return resource.getResponseField('TableVersion.Table.StorageDescriptor.SerdeInfo.SerializationLibrary') as unknown as string;
  }

  public get parameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.StorageDescriptor.SerdeInfo.Parameters'),
        outputPath: 'TableVersion.Table.StorageDescriptor.SerdeInfo.Parameters',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableVersion.TableVersion.Table.StorageDescriptor.SerdeInfo.Parameters', props);
    return resource.getResponseField('TableVersion.Table.StorageDescriptor.SerdeInfo.Parameters') as unknown as Record<string, string>;
  }

}

export class GlueFetchTableVersionTableVersionTableStorageDescriptorSkewedInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetTableVersionRequest) {
    super(scope, id);
  }

  public get skewedColumnNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.StorageDescriptor.SkewedInfo.SkewedColumnNames'),
        outputPath: 'TableVersion.Table.StorageDescriptor.SkewedInfo.SkewedColumnNames',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableVersion.TableVersion.Table.StorageDescriptor.SkewedInfo.SkewedColumnNames', props);
    return resource.getResponseField('TableVersion.Table.StorageDescriptor.SkewedInfo.SkewedColumnNames') as unknown as string[];
  }

  public get skewedColumnValues(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.StorageDescriptor.SkewedInfo.SkewedColumnValues'),
        outputPath: 'TableVersion.Table.StorageDescriptor.SkewedInfo.SkewedColumnValues',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableVersion.TableVersion.Table.StorageDescriptor.SkewedInfo.SkewedColumnValues', props);
    return resource.getResponseField('TableVersion.Table.StorageDescriptor.SkewedInfo.SkewedColumnValues') as unknown as string[];
  }

  public get skewedColumnValueLocationMaps(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.StorageDescriptor.SkewedInfo.SkewedColumnValueLocationMaps'),
        outputPath: 'TableVersion.Table.StorageDescriptor.SkewedInfo.SkewedColumnValueLocationMaps',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableVersion.TableVersion.Table.StorageDescriptor.SkewedInfo.SkewedColumnValueLocationMaps', props);
    return resource.getResponseField('TableVersion.Table.StorageDescriptor.SkewedInfo.SkewedColumnValueLocationMaps') as unknown as Record<string, string>;
  }

}

export class GlueFetchTableVersionTableVersionTableStorageDescriptorSchemaReference extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetTableVersionRequest) {
    super(scope, id);
  }

  public get schemaId(): GlueFetchTableVersionTableVersionTableStorageDescriptorSchemaReferenceSchemaId {
    return new GlueFetchTableVersionTableVersionTableStorageDescriptorSchemaReferenceSchemaId(this, 'SchemaId', this.__resources, this.input);
  }

  public get schemaVersionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.StorageDescriptor.SchemaReference.SchemaVersionId'),
        outputPath: 'TableVersion.Table.StorageDescriptor.SchemaReference.SchemaVersionId',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableVersion.TableVersion.Table.StorageDescriptor.SchemaReference.SchemaVersionId', props);
    return resource.getResponseField('TableVersion.Table.StorageDescriptor.SchemaReference.SchemaVersionId') as unknown as string;
  }

  public get schemaVersionNumber(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.StorageDescriptor.SchemaReference.SchemaVersionNumber'),
        outputPath: 'TableVersion.Table.StorageDescriptor.SchemaReference.SchemaVersionNumber',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableVersion.TableVersion.Table.StorageDescriptor.SchemaReference.SchemaVersionNumber', props);
    return resource.getResponseField('TableVersion.Table.StorageDescriptor.SchemaReference.SchemaVersionNumber') as unknown as number;
  }

}

export class GlueFetchTableVersionTableVersionTableStorageDescriptorSchemaReferenceSchemaId extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetTableVersionRequest) {
    super(scope, id);
  }

  public get schemaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.StorageDescriptor.SchemaReference.SchemaId.SchemaArn'),
        outputPath: 'TableVersion.Table.StorageDescriptor.SchemaReference.SchemaId.SchemaArn',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableVersion.TableVersion.Table.StorageDescriptor.SchemaReference.SchemaId.SchemaArn', props);
    return resource.getResponseField('TableVersion.Table.StorageDescriptor.SchemaReference.SchemaId.SchemaArn') as unknown as string;
  }

  public get schemaName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.StorageDescriptor.SchemaReference.SchemaId.SchemaName'),
        outputPath: 'TableVersion.Table.StorageDescriptor.SchemaReference.SchemaId.SchemaName',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableVersion.TableVersion.Table.StorageDescriptor.SchemaReference.SchemaId.SchemaName', props);
    return resource.getResponseField('TableVersion.Table.StorageDescriptor.SchemaReference.SchemaId.SchemaName') as unknown as string;
  }

  public get registryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.StorageDescriptor.SchemaReference.SchemaId.RegistryName'),
        outputPath: 'TableVersion.Table.StorageDescriptor.SchemaReference.SchemaId.RegistryName',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableVersion.TableVersion.Table.StorageDescriptor.SchemaReference.SchemaId.RegistryName', props);
    return resource.getResponseField('TableVersion.Table.StorageDescriptor.SchemaReference.SchemaId.RegistryName') as unknown as string;
  }

}

export class GlueFetchTableVersionTableVersionTableTargetTable extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetTableVersionRequest) {
    super(scope, id);
  }

  public get catalogId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.TargetTable.CatalogId'),
        outputPath: 'TableVersion.Table.TargetTable.CatalogId',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableVersion.TableVersion.Table.TargetTable.CatalogId', props);
    return resource.getResponseField('TableVersion.Table.TargetTable.CatalogId') as unknown as string;
  }

  public get databaseName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.TargetTable.DatabaseName'),
        outputPath: 'TableVersion.Table.TargetTable.DatabaseName',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableVersion.TableVersion.Table.TargetTable.DatabaseName', props);
    return resource.getResponseField('TableVersion.Table.TargetTable.DatabaseName') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersion.TableVersion.Table.TargetTable.Name'),
        outputPath: 'TableVersion.Table.TargetTable.Name',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableVersion.TableVersion.Table.TargetTable.Name', props);
    return resource.getResponseField('TableVersion.Table.TargetTable.Name') as unknown as string;
  }

}

export class GlueFetchTableVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetTableVersionsRequest) {
    super(scope, id);
  }

  public get tableVersions(): shapes.GlueTableVersion[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersions',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersions.TableVersions'),
        outputPath: 'TableVersions',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableVersions.TableVersions', props);
    return resource.getResponseField('TableVersions') as unknown as shapes.GlueTableVersion[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTableVersions',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTableVersions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTableVersions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueFetchTables extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetTablesRequest) {
    super(scope, id);
  }

  public get tableList(): shapes.GlueTable[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTables',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTables.TableList'),
        outputPath: 'TableList',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          Expression: this.input.expression,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTables.TableList', props);
    return resource.getResponseField('TableList') as unknown as shapes.GlueTable[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTables',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTables.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          Expression: this.input.expression,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTables.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueFetchTags extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetTagsRequest) {
    super(scope, id);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTags',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTags.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTags.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class GlueFetchTrigger extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetTriggerRequest) {
    super(scope, id);
  }

  public get trigger(): GlueFetchTriggerTrigger {
    return new GlueFetchTriggerTrigger(this, 'Trigger', this.__resources, this.input);
  }

}

export class GlueFetchTriggerTrigger extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetTriggerRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTrigger.Trigger.Name'),
        outputPath: 'Trigger.Name',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrigger.Trigger.Name', props);
    return resource.getResponseField('Trigger.Name') as unknown as string;
  }

  public get workflowName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTrigger.Trigger.WorkflowName'),
        outputPath: 'Trigger.WorkflowName',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrigger.Trigger.WorkflowName', props);
    return resource.getResponseField('Trigger.WorkflowName') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTrigger.Trigger.Id'),
        outputPath: 'Trigger.Id',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrigger.Trigger.Id', props);
    return resource.getResponseField('Trigger.Id') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTrigger.Trigger.Type'),
        outputPath: 'Trigger.Type',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrigger.Trigger.Type', props);
    return resource.getResponseField('Trigger.Type') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTrigger.Trigger.State'),
        outputPath: 'Trigger.State',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrigger.Trigger.State', props);
    return resource.getResponseField('Trigger.State') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTrigger.Trigger.Description'),
        outputPath: 'Trigger.Description',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrigger.Trigger.Description', props);
    return resource.getResponseField('Trigger.Description') as unknown as string;
  }

  public get schedule(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTrigger.Trigger.Schedule'),
        outputPath: 'Trigger.Schedule',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrigger.Trigger.Schedule', props);
    return resource.getResponseField('Trigger.Schedule') as unknown as string;
  }

  public get actions(): shapes.GlueAction[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTrigger.Trigger.Actions'),
        outputPath: 'Trigger.Actions',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrigger.Trigger.Actions', props);
    return resource.getResponseField('Trigger.Actions') as unknown as shapes.GlueAction[];
  }

  public get predicate(): GlueFetchTriggerTriggerPredicate {
    return new GlueFetchTriggerTriggerPredicate(this, 'Predicate', this.__resources, this.input);
  }

}

export class GlueFetchTriggerTriggerPredicate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetTriggerRequest) {
    super(scope, id);
  }

  public get logical(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTrigger.Trigger.Predicate.Logical'),
        outputPath: 'Trigger.Predicate.Logical',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrigger.Trigger.Predicate.Logical', props);
    return resource.getResponseField('Trigger.Predicate.Logical') as unknown as string;
  }

  public get conditions(): shapes.GlueCondition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTrigger.Trigger.Predicate.Conditions'),
        outputPath: 'Trigger.Predicate.Conditions',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTrigger.Trigger.Predicate.Conditions', props);
    return resource.getResponseField('Trigger.Predicate.Conditions') as unknown as shapes.GlueCondition[];
  }

}

export class GlueFetchTriggers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetTriggersRequest) {
    super(scope, id);
  }

  public get triggers(): shapes.GlueTrigger[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTriggers',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTriggers.Triggers'),
        outputPath: 'Triggers',
        parameters: {
          NextToken: this.input.nextToken,
          DependentJobName: this.input.dependentJobName,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTriggers.Triggers', props);
    return resource.getResponseField('Triggers') as unknown as shapes.GlueTrigger[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTriggers',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetTriggers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
          DependentJobName: this.input.dependentJobName,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTriggers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueFetchUserDefinedFunction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetUserDefinedFunctionRequest) {
    super(scope, id);
  }

  public get userDefinedFunction(): GlueFetchUserDefinedFunctionUserDefinedFunction {
    return new GlueFetchUserDefinedFunctionUserDefinedFunction(this, 'UserDefinedFunction', this.__resources, this.input);
  }

}

export class GlueFetchUserDefinedFunctionUserDefinedFunction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetUserDefinedFunctionRequest) {
    super(scope, id);
  }

  public get functionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUserDefinedFunction',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetUserDefinedFunction.UserDefinedFunction.FunctionName'),
        outputPath: 'UserDefinedFunction.FunctionName',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          FunctionName: this.input.functionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUserDefinedFunction.UserDefinedFunction.FunctionName', props);
    return resource.getResponseField('UserDefinedFunction.FunctionName') as unknown as string;
  }

  public get databaseName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUserDefinedFunction',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetUserDefinedFunction.UserDefinedFunction.DatabaseName'),
        outputPath: 'UserDefinedFunction.DatabaseName',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          FunctionName: this.input.functionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUserDefinedFunction.UserDefinedFunction.DatabaseName', props);
    return resource.getResponseField('UserDefinedFunction.DatabaseName') as unknown as string;
  }

  public get className(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUserDefinedFunction',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetUserDefinedFunction.UserDefinedFunction.ClassName'),
        outputPath: 'UserDefinedFunction.ClassName',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          FunctionName: this.input.functionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUserDefinedFunction.UserDefinedFunction.ClassName', props);
    return resource.getResponseField('UserDefinedFunction.ClassName') as unknown as string;
  }

  public get ownerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUserDefinedFunction',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetUserDefinedFunction.UserDefinedFunction.OwnerName'),
        outputPath: 'UserDefinedFunction.OwnerName',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          FunctionName: this.input.functionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUserDefinedFunction.UserDefinedFunction.OwnerName', props);
    return resource.getResponseField('UserDefinedFunction.OwnerName') as unknown as string;
  }

  public get ownerType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUserDefinedFunction',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetUserDefinedFunction.UserDefinedFunction.OwnerType'),
        outputPath: 'UserDefinedFunction.OwnerType',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          FunctionName: this.input.functionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUserDefinedFunction.UserDefinedFunction.OwnerType', props);
    return resource.getResponseField('UserDefinedFunction.OwnerType') as unknown as string;
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUserDefinedFunction',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetUserDefinedFunction.UserDefinedFunction.CreateTime'),
        outputPath: 'UserDefinedFunction.CreateTime',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          FunctionName: this.input.functionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUserDefinedFunction.UserDefinedFunction.CreateTime', props);
    return resource.getResponseField('UserDefinedFunction.CreateTime') as unknown as string;
  }

  public get resourceUris(): shapes.GlueResourceUri[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUserDefinedFunction',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetUserDefinedFunction.UserDefinedFunction.ResourceUris'),
        outputPath: 'UserDefinedFunction.ResourceUris',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          FunctionName: this.input.functionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUserDefinedFunction.UserDefinedFunction.ResourceUris', props);
    return resource.getResponseField('UserDefinedFunction.ResourceUris') as unknown as shapes.GlueResourceUri[];
  }

  public get catalogId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUserDefinedFunction',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetUserDefinedFunction.UserDefinedFunction.CatalogId'),
        outputPath: 'UserDefinedFunction.CatalogId',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          FunctionName: this.input.functionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUserDefinedFunction.UserDefinedFunction.CatalogId', props);
    return resource.getResponseField('UserDefinedFunction.CatalogId') as unknown as string;
  }

}

export class GlueFetchUserDefinedFunctions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetUserDefinedFunctionsRequest) {
    super(scope, id);
  }

  public get userDefinedFunctions(): shapes.GlueUserDefinedFunction[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUserDefinedFunctions',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetUserDefinedFunctions.UserDefinedFunctions'),
        outputPath: 'UserDefinedFunctions',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          Pattern: this.input.pattern,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUserDefinedFunctions.UserDefinedFunctions', props);
    return resource.getResponseField('UserDefinedFunctions') as unknown as shapes.GlueUserDefinedFunction[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUserDefinedFunctions',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetUserDefinedFunctions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          Pattern: this.input.pattern,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUserDefinedFunctions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueFetchWorkflow extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetWorkflowRequest) {
    super(scope, id);
  }

  public get workflow(): GlueFetchWorkflowWorkflow {
    return new GlueFetchWorkflowWorkflow(this, 'Workflow', this.__resources, this.input);
  }

}

export class GlueFetchWorkflowWorkflow extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetWorkflowRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.Name'),
        outputPath: 'Workflow.Name',
        parameters: {
          Name: this.input.name,
          IncludeGraph: this.input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkflow.Workflow.Name', props);
    return resource.getResponseField('Workflow.Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.Description'),
        outputPath: 'Workflow.Description',
        parameters: {
          Name: this.input.name,
          IncludeGraph: this.input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkflow.Workflow.Description', props);
    return resource.getResponseField('Workflow.Description') as unknown as string;
  }

  public get defaultRunProperties(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.DefaultRunProperties'),
        outputPath: 'Workflow.DefaultRunProperties',
        parameters: {
          Name: this.input.name,
          IncludeGraph: this.input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkflow.Workflow.DefaultRunProperties', props);
    return resource.getResponseField('Workflow.DefaultRunProperties') as unknown as Record<string, string>;
  }

  public get createdOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.CreatedOn'),
        outputPath: 'Workflow.CreatedOn',
        parameters: {
          Name: this.input.name,
          IncludeGraph: this.input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkflow.Workflow.CreatedOn', props);
    return resource.getResponseField('Workflow.CreatedOn') as unknown as string;
  }

  public get lastModifiedOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.LastModifiedOn'),
        outputPath: 'Workflow.LastModifiedOn',
        parameters: {
          Name: this.input.name,
          IncludeGraph: this.input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkflow.Workflow.LastModifiedOn', props);
    return resource.getResponseField('Workflow.LastModifiedOn') as unknown as string;
  }

  public get lastRun(): GlueFetchWorkflowWorkflowLastRun {
    return new GlueFetchWorkflowWorkflowLastRun(this, 'LastRun', this.__resources, this.input);
  }

  public get graph(): GlueFetchWorkflowWorkflowGraph {
    return new GlueFetchWorkflowWorkflowGraph(this, 'Graph', this.__resources, this.input);
  }

  public get maxConcurrentRuns(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.MaxConcurrentRuns'),
        outputPath: 'Workflow.MaxConcurrentRuns',
        parameters: {
          Name: this.input.name,
          IncludeGraph: this.input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkflow.Workflow.MaxConcurrentRuns', props);
    return resource.getResponseField('Workflow.MaxConcurrentRuns') as unknown as number;
  }

}

export class GlueFetchWorkflowWorkflowLastRun extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetWorkflowRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.LastRun.Name'),
        outputPath: 'Workflow.LastRun.Name',
        parameters: {
          Name: this.input.name,
          IncludeGraph: this.input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkflow.Workflow.LastRun.Name', props);
    return resource.getResponseField('Workflow.LastRun.Name') as unknown as string;
  }

  public get workflowRunId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.LastRun.WorkflowRunId'),
        outputPath: 'Workflow.LastRun.WorkflowRunId',
        parameters: {
          Name: this.input.name,
          IncludeGraph: this.input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkflow.Workflow.LastRun.WorkflowRunId', props);
    return resource.getResponseField('Workflow.LastRun.WorkflowRunId') as unknown as string;
  }

  public get previousRunId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.LastRun.PreviousRunId'),
        outputPath: 'Workflow.LastRun.PreviousRunId',
        parameters: {
          Name: this.input.name,
          IncludeGraph: this.input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkflow.Workflow.LastRun.PreviousRunId', props);
    return resource.getResponseField('Workflow.LastRun.PreviousRunId') as unknown as string;
  }

  public get workflowRunProperties(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.LastRun.WorkflowRunProperties'),
        outputPath: 'Workflow.LastRun.WorkflowRunProperties',
        parameters: {
          Name: this.input.name,
          IncludeGraph: this.input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkflow.Workflow.LastRun.WorkflowRunProperties', props);
    return resource.getResponseField('Workflow.LastRun.WorkflowRunProperties') as unknown as Record<string, string>;
  }

  public get startedOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.LastRun.StartedOn'),
        outputPath: 'Workflow.LastRun.StartedOn',
        parameters: {
          Name: this.input.name,
          IncludeGraph: this.input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkflow.Workflow.LastRun.StartedOn', props);
    return resource.getResponseField('Workflow.LastRun.StartedOn') as unknown as string;
  }

  public get completedOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.LastRun.CompletedOn'),
        outputPath: 'Workflow.LastRun.CompletedOn',
        parameters: {
          Name: this.input.name,
          IncludeGraph: this.input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkflow.Workflow.LastRun.CompletedOn', props);
    return resource.getResponseField('Workflow.LastRun.CompletedOn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.LastRun.Status'),
        outputPath: 'Workflow.LastRun.Status',
        parameters: {
          Name: this.input.name,
          IncludeGraph: this.input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkflow.Workflow.LastRun.Status', props);
    return resource.getResponseField('Workflow.LastRun.Status') as unknown as string;
  }

  public get errorMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.LastRun.ErrorMessage'),
        outputPath: 'Workflow.LastRun.ErrorMessage',
        parameters: {
          Name: this.input.name,
          IncludeGraph: this.input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkflow.Workflow.LastRun.ErrorMessage', props);
    return resource.getResponseField('Workflow.LastRun.ErrorMessage') as unknown as string;
  }

  public get statistics(): GlueFetchWorkflowWorkflowLastRunStatistics {
    return new GlueFetchWorkflowWorkflowLastRunStatistics(this, 'Statistics', this.__resources, this.input);
  }

  public get graph(): GlueFetchWorkflowWorkflowLastRunGraph {
    return new GlueFetchWorkflowWorkflowLastRunGraph(this, 'Graph', this.__resources, this.input);
  }

}

export class GlueFetchWorkflowWorkflowLastRunStatistics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetWorkflowRequest) {
    super(scope, id);
  }

  public get totalActions(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.LastRun.Statistics.TotalActions'),
        outputPath: 'Workflow.LastRun.Statistics.TotalActions',
        parameters: {
          Name: this.input.name,
          IncludeGraph: this.input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkflow.Workflow.LastRun.Statistics.TotalActions', props);
    return resource.getResponseField('Workflow.LastRun.Statistics.TotalActions') as unknown as number;
  }

  public get timeoutActions(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.LastRun.Statistics.TimeoutActions'),
        outputPath: 'Workflow.LastRun.Statistics.TimeoutActions',
        parameters: {
          Name: this.input.name,
          IncludeGraph: this.input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkflow.Workflow.LastRun.Statistics.TimeoutActions', props);
    return resource.getResponseField('Workflow.LastRun.Statistics.TimeoutActions') as unknown as number;
  }

  public get failedActions(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.LastRun.Statistics.FailedActions'),
        outputPath: 'Workflow.LastRun.Statistics.FailedActions',
        parameters: {
          Name: this.input.name,
          IncludeGraph: this.input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkflow.Workflow.LastRun.Statistics.FailedActions', props);
    return resource.getResponseField('Workflow.LastRun.Statistics.FailedActions') as unknown as number;
  }

  public get stoppedActions(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.LastRun.Statistics.StoppedActions'),
        outputPath: 'Workflow.LastRun.Statistics.StoppedActions',
        parameters: {
          Name: this.input.name,
          IncludeGraph: this.input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkflow.Workflow.LastRun.Statistics.StoppedActions', props);
    return resource.getResponseField('Workflow.LastRun.Statistics.StoppedActions') as unknown as number;
  }

  public get succeededActions(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.LastRun.Statistics.SucceededActions'),
        outputPath: 'Workflow.LastRun.Statistics.SucceededActions',
        parameters: {
          Name: this.input.name,
          IncludeGraph: this.input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkflow.Workflow.LastRun.Statistics.SucceededActions', props);
    return resource.getResponseField('Workflow.LastRun.Statistics.SucceededActions') as unknown as number;
  }

  public get runningActions(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.LastRun.Statistics.RunningActions'),
        outputPath: 'Workflow.LastRun.Statistics.RunningActions',
        parameters: {
          Name: this.input.name,
          IncludeGraph: this.input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkflow.Workflow.LastRun.Statistics.RunningActions', props);
    return resource.getResponseField('Workflow.LastRun.Statistics.RunningActions') as unknown as number;
  }

}

export class GlueFetchWorkflowWorkflowLastRunGraph extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetWorkflowRequest) {
    super(scope, id);
  }

  public get nodes(): shapes.GlueNode[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.LastRun.Graph.Nodes'),
        outputPath: 'Workflow.LastRun.Graph.Nodes',
        parameters: {
          Name: this.input.name,
          IncludeGraph: this.input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkflow.Workflow.LastRun.Graph.Nodes', props);
    return resource.getResponseField('Workflow.LastRun.Graph.Nodes') as unknown as shapes.GlueNode[];
  }

  public get edges(): shapes.GlueEdge[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.LastRun.Graph.Edges'),
        outputPath: 'Workflow.LastRun.Graph.Edges',
        parameters: {
          Name: this.input.name,
          IncludeGraph: this.input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkflow.Workflow.LastRun.Graph.Edges', props);
    return resource.getResponseField('Workflow.LastRun.Graph.Edges') as unknown as shapes.GlueEdge[];
  }

}

export class GlueFetchWorkflowWorkflowGraph extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetWorkflowRequest) {
    super(scope, id);
  }

  public get nodes(): shapes.GlueNode[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.Graph.Nodes'),
        outputPath: 'Workflow.Graph.Nodes',
        parameters: {
          Name: this.input.name,
          IncludeGraph: this.input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkflow.Workflow.Graph.Nodes', props);
    return resource.getResponseField('Workflow.Graph.Nodes') as unknown as shapes.GlueNode[];
  }

  public get edges(): shapes.GlueEdge[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflow.Workflow.Graph.Edges'),
        outputPath: 'Workflow.Graph.Edges',
        parameters: {
          Name: this.input.name,
          IncludeGraph: this.input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkflow.Workflow.Graph.Edges', props);
    return resource.getResponseField('Workflow.Graph.Edges') as unknown as shapes.GlueEdge[];
  }

}

export class GlueFetchWorkflowRun extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetWorkflowRunRequest) {
    super(scope, id);
  }

  public get run(): GlueFetchWorkflowRunRun {
    return new GlueFetchWorkflowRunRun(this, 'Run', this.__resources, this.input);
  }

}

export class GlueFetchWorkflowRunRun extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetWorkflowRunRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflowRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflowRun.Run.Name'),
        outputPath: 'Run.Name',
        parameters: {
          Name: this.input.name,
          RunId: this.input.runId,
          IncludeGraph: this.input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkflowRun.Run.Name', props);
    return resource.getResponseField('Run.Name') as unknown as string;
  }

  public get workflowRunId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflowRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflowRun.Run.WorkflowRunId'),
        outputPath: 'Run.WorkflowRunId',
        parameters: {
          Name: this.input.name,
          RunId: this.input.runId,
          IncludeGraph: this.input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkflowRun.Run.WorkflowRunId', props);
    return resource.getResponseField('Run.WorkflowRunId') as unknown as string;
  }

  public get previousRunId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflowRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflowRun.Run.PreviousRunId'),
        outputPath: 'Run.PreviousRunId',
        parameters: {
          Name: this.input.name,
          RunId: this.input.runId,
          IncludeGraph: this.input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkflowRun.Run.PreviousRunId', props);
    return resource.getResponseField('Run.PreviousRunId') as unknown as string;
  }

  public get workflowRunProperties(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflowRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflowRun.Run.WorkflowRunProperties'),
        outputPath: 'Run.WorkflowRunProperties',
        parameters: {
          Name: this.input.name,
          RunId: this.input.runId,
          IncludeGraph: this.input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkflowRun.Run.WorkflowRunProperties', props);
    return resource.getResponseField('Run.WorkflowRunProperties') as unknown as Record<string, string>;
  }

  public get startedOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflowRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflowRun.Run.StartedOn'),
        outputPath: 'Run.StartedOn',
        parameters: {
          Name: this.input.name,
          RunId: this.input.runId,
          IncludeGraph: this.input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkflowRun.Run.StartedOn', props);
    return resource.getResponseField('Run.StartedOn') as unknown as string;
  }

  public get completedOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflowRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflowRun.Run.CompletedOn'),
        outputPath: 'Run.CompletedOn',
        parameters: {
          Name: this.input.name,
          RunId: this.input.runId,
          IncludeGraph: this.input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkflowRun.Run.CompletedOn', props);
    return resource.getResponseField('Run.CompletedOn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflowRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflowRun.Run.Status'),
        outputPath: 'Run.Status',
        parameters: {
          Name: this.input.name,
          RunId: this.input.runId,
          IncludeGraph: this.input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkflowRun.Run.Status', props);
    return resource.getResponseField('Run.Status') as unknown as string;
  }

  public get errorMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflowRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflowRun.Run.ErrorMessage'),
        outputPath: 'Run.ErrorMessage',
        parameters: {
          Name: this.input.name,
          RunId: this.input.runId,
          IncludeGraph: this.input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkflowRun.Run.ErrorMessage', props);
    return resource.getResponseField('Run.ErrorMessage') as unknown as string;
  }

  public get statistics(): GlueFetchWorkflowRunRunStatistics {
    return new GlueFetchWorkflowRunRunStatistics(this, 'Statistics', this.__resources, this.input);
  }

  public get graph(): GlueFetchWorkflowRunRunGraph {
    return new GlueFetchWorkflowRunRunGraph(this, 'Graph', this.__resources, this.input);
  }

}

export class GlueFetchWorkflowRunRunStatistics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetWorkflowRunRequest) {
    super(scope, id);
  }

  public get totalActions(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflowRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflowRun.Run.Statistics.TotalActions'),
        outputPath: 'Run.Statistics.TotalActions',
        parameters: {
          Name: this.input.name,
          RunId: this.input.runId,
          IncludeGraph: this.input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkflowRun.Run.Statistics.TotalActions', props);
    return resource.getResponseField('Run.Statistics.TotalActions') as unknown as number;
  }

  public get timeoutActions(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflowRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflowRun.Run.Statistics.TimeoutActions'),
        outputPath: 'Run.Statistics.TimeoutActions',
        parameters: {
          Name: this.input.name,
          RunId: this.input.runId,
          IncludeGraph: this.input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkflowRun.Run.Statistics.TimeoutActions', props);
    return resource.getResponseField('Run.Statistics.TimeoutActions') as unknown as number;
  }

  public get failedActions(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflowRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflowRun.Run.Statistics.FailedActions'),
        outputPath: 'Run.Statistics.FailedActions',
        parameters: {
          Name: this.input.name,
          RunId: this.input.runId,
          IncludeGraph: this.input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkflowRun.Run.Statistics.FailedActions', props);
    return resource.getResponseField('Run.Statistics.FailedActions') as unknown as number;
  }

  public get stoppedActions(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflowRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflowRun.Run.Statistics.StoppedActions'),
        outputPath: 'Run.Statistics.StoppedActions',
        parameters: {
          Name: this.input.name,
          RunId: this.input.runId,
          IncludeGraph: this.input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkflowRun.Run.Statistics.StoppedActions', props);
    return resource.getResponseField('Run.Statistics.StoppedActions') as unknown as number;
  }

  public get succeededActions(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflowRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflowRun.Run.Statistics.SucceededActions'),
        outputPath: 'Run.Statistics.SucceededActions',
        parameters: {
          Name: this.input.name,
          RunId: this.input.runId,
          IncludeGraph: this.input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkflowRun.Run.Statistics.SucceededActions', props);
    return resource.getResponseField('Run.Statistics.SucceededActions') as unknown as number;
  }

  public get runningActions(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflowRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflowRun.Run.Statistics.RunningActions'),
        outputPath: 'Run.Statistics.RunningActions',
        parameters: {
          Name: this.input.name,
          RunId: this.input.runId,
          IncludeGraph: this.input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkflowRun.Run.Statistics.RunningActions', props);
    return resource.getResponseField('Run.Statistics.RunningActions') as unknown as number;
  }

}

export class GlueFetchWorkflowRunRunGraph extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetWorkflowRunRequest) {
    super(scope, id);
  }

  public get nodes(): shapes.GlueNode[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflowRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflowRun.Run.Graph.Nodes'),
        outputPath: 'Run.Graph.Nodes',
        parameters: {
          Name: this.input.name,
          RunId: this.input.runId,
          IncludeGraph: this.input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkflowRun.Run.Graph.Nodes', props);
    return resource.getResponseField('Run.Graph.Nodes') as unknown as shapes.GlueNode[];
  }

  public get edges(): shapes.GlueEdge[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflowRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflowRun.Run.Graph.Edges'),
        outputPath: 'Run.Graph.Edges',
        parameters: {
          Name: this.input.name,
          RunId: this.input.runId,
          IncludeGraph: this.input.includeGraph,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkflowRun.Run.Graph.Edges', props);
    return resource.getResponseField('Run.Graph.Edges') as unknown as shapes.GlueEdge[];
  }

}

export class GlueFetchWorkflowRunProperties extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetWorkflowRunPropertiesRequest) {
    super(scope, id);
  }

  public get runProperties(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflowRunProperties',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflowRunProperties.RunProperties'),
        outputPath: 'RunProperties',
        parameters: {
          Name: this.input.name,
          RunId: this.input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkflowRunProperties.RunProperties', props);
    return resource.getResponseField('RunProperties') as unknown as Record<string, string>;
  }

}

export class GlueFetchWorkflowRuns extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueGetWorkflowRunsRequest) {
    super(scope, id);
  }

  public get runs(): shapes.GlueWorkflowRun[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflowRuns',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflowRuns.Runs'),
        outputPath: 'Runs',
        parameters: {
          Name: this.input.name,
          IncludeGraph: this.input.includeGraph,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkflowRuns.Runs', props);
    return resource.getResponseField('Runs') as unknown as shapes.GlueWorkflowRun[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorkflowRuns',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.GetWorkflowRuns.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Name: this.input.name,
          IncludeGraph: this.input.includeGraph,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorkflowRuns.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueListCrawlers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueListCrawlersRequest) {
    super(scope, id);
  }

  public get crawlerNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCrawlers',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ListCrawlers.CrawlerNames'),
        outputPath: 'CrawlerNames',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCrawlers.CrawlerNames', props);
    return resource.getResponseField('CrawlerNames') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCrawlers',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ListCrawlers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCrawlers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueListDevEndpoints extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueListDevEndpointsRequest) {
    super(scope, id);
  }

  public get devEndpointNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDevEndpoints',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ListDevEndpoints.DevEndpointNames'),
        outputPath: 'DevEndpointNames',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDevEndpoints.DevEndpointNames', props);
    return resource.getResponseField('DevEndpointNames') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDevEndpoints',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ListDevEndpoints.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDevEndpoints.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueListJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueListJobsRequest) {
    super(scope, id);
  }

  public get jobNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listJobs',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ListJobs.JobNames'),
        outputPath: 'JobNames',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListJobs.JobNames', props);
    return resource.getResponseField('JobNames') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listJobs',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ListJobs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueListMlTransforms extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueListMlTransformsRequest) {
    super(scope, id);
  }

  public get transformIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMlTransforms',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ListMLTransforms.TransformIds'),
        outputPath: 'TransformIds',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          Filter: {
            Name: this.input.filter?.name,
            TransformType: this.input.filter?.transformType,
            Status: this.input.filter?.status,
            GlueVersion: this.input.filter?.glueVersion,
            CreatedBefore: this.input.filter?.createdBefore,
            CreatedAfter: this.input.filter?.createdAfter,
            LastModifiedBefore: this.input.filter?.lastModifiedBefore,
            LastModifiedAfter: this.input.filter?.lastModifiedAfter,
            Schema: this.input.filter?.schema,
          },
          Sort: {
            Column: this.input.sort?.column,
            SortDirection: this.input.sort?.sortDirection,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListMLTransforms.TransformIds', props);
    return resource.getResponseField('TransformIds') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMlTransforms',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ListMLTransforms.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          Filter: {
            Name: this.input.filter?.name,
            TransformType: this.input.filter?.transformType,
            Status: this.input.filter?.status,
            GlueVersion: this.input.filter?.glueVersion,
            CreatedBefore: this.input.filter?.createdBefore,
            CreatedAfter: this.input.filter?.createdAfter,
            LastModifiedBefore: this.input.filter?.lastModifiedBefore,
            LastModifiedAfter: this.input.filter?.lastModifiedAfter,
            Schema: this.input.filter?.schema,
          },
          Sort: {
            Column: this.input.sort?.column,
            SortDirection: this.input.sort?.sortDirection,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListMLTransforms.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueListRegistries extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueListRegistriesInput) {
    super(scope, id);
  }

  public get registries(): shapes.GlueRegistryListItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRegistries',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ListRegistries.Registries'),
        outputPath: 'Registries',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRegistries.Registries', props);
    return resource.getResponseField('Registries') as unknown as shapes.GlueRegistryListItem[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRegistries',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ListRegistries.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRegistries.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueListSchemaVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueListSchemaVersionsInput) {
    super(scope, id);
  }

  public get schemas(): shapes.GlueSchemaVersionListItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSchemaVersions',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ListSchemaVersions.Schemas'),
        outputPath: 'Schemas',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId.schemaArn,
            SchemaName: this.input.schemaId.schemaName,
            RegistryName: this.input.schemaId.registryName,
          },
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSchemaVersions.Schemas', props);
    return resource.getResponseField('Schemas') as unknown as shapes.GlueSchemaVersionListItem[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSchemaVersions',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ListSchemaVersions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId.schemaArn,
            SchemaName: this.input.schemaId.schemaName,
            RegistryName: this.input.schemaId.registryName,
          },
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSchemaVersions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueListSchemas extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueListSchemasInput) {
    super(scope, id);
  }

  public get schemas(): shapes.GlueSchemaListItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSchemas',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ListSchemas.Schemas'),
        outputPath: 'Schemas',
        parameters: {
          RegistryId: {
            RegistryName: this.input.registryId?.registryName,
            RegistryArn: this.input.registryId?.registryArn,
          },
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSchemas.Schemas', props);
    return resource.getResponseField('Schemas') as unknown as shapes.GlueSchemaListItem[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSchemas',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ListSchemas.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          RegistryId: {
            RegistryName: this.input.registryId?.registryName,
            RegistryArn: this.input.registryId?.registryArn,
          },
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSchemas.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueListTriggers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueListTriggersRequest) {
    super(scope, id);
  }

  public get triggerNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTriggers',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ListTriggers.TriggerNames'),
        outputPath: 'TriggerNames',
        parameters: {
          NextToken: this.input.nextToken,
          DependentJobName: this.input.dependentJobName,
          MaxResults: this.input.maxResults,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTriggers.TriggerNames', props);
    return resource.getResponseField('TriggerNames') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTriggers',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ListTriggers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
          DependentJobName: this.input.dependentJobName,
          MaxResults: this.input.maxResults,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTriggers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueListWorkflows extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueListWorkflowsRequest) {
    super(scope, id);
  }

  public get workflows(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWorkflows',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ListWorkflows.Workflows'),
        outputPath: 'Workflows',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListWorkflows.Workflows', props);
    return resource.getResponseField('Workflows') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWorkflows',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ListWorkflows.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListWorkflows.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GluePutResourcePolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GluePutResourcePolicyRequest) {
    super(scope, id);
  }

  public get policyHash(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putResourcePolicy',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.PutResourcePolicy.PolicyHash'),
        outputPath: 'PolicyHash',
        parameters: {
          PolicyInJson: this.input.policyInJson,
          ResourceArn: this.input.resourceArn,
          PolicyHashCondition: this.input.policyHashCondition,
          PolicyExistsCondition: this.input.policyExistsCondition,
          EnableHybrid: this.input.enableHybrid,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutResourcePolicy.PolicyHash', props);
    return resource.getResponseField('PolicyHash') as unknown as string;
  }

}

export class GluePutSchemaVersionMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GluePutSchemaVersionMetadataInput) {
    super(scope, id);
  }

  public get schemaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putSchemaVersionMetadata',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.PutSchemaVersionMetadata.SchemaArn'),
        outputPath: 'SchemaArn',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId?.schemaArn,
            SchemaName: this.input.schemaId?.schemaName,
            RegistryName: this.input.schemaId?.registryName,
          },
          SchemaVersionNumber: {
            LatestVersion: this.input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.input.schemaVersionNumber?.versionNumber,
          },
          SchemaVersionId: this.input.schemaVersionId,
          MetadataKeyValue: {
            MetadataKey: this.input.metadataKeyValue.metadataKey,
            MetadataValue: this.input.metadataKeyValue.metadataValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutSchemaVersionMetadata.SchemaArn', props);
    return resource.getResponseField('SchemaArn') as unknown as string;
  }

  public get schemaName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putSchemaVersionMetadata',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.PutSchemaVersionMetadata.SchemaName'),
        outputPath: 'SchemaName',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId?.schemaArn,
            SchemaName: this.input.schemaId?.schemaName,
            RegistryName: this.input.schemaId?.registryName,
          },
          SchemaVersionNumber: {
            LatestVersion: this.input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.input.schemaVersionNumber?.versionNumber,
          },
          SchemaVersionId: this.input.schemaVersionId,
          MetadataKeyValue: {
            MetadataKey: this.input.metadataKeyValue.metadataKey,
            MetadataValue: this.input.metadataKeyValue.metadataValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutSchemaVersionMetadata.SchemaName', props);
    return resource.getResponseField('SchemaName') as unknown as string;
  }

  public get registryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putSchemaVersionMetadata',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.PutSchemaVersionMetadata.RegistryName'),
        outputPath: 'RegistryName',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId?.schemaArn,
            SchemaName: this.input.schemaId?.schemaName,
            RegistryName: this.input.schemaId?.registryName,
          },
          SchemaVersionNumber: {
            LatestVersion: this.input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.input.schemaVersionNumber?.versionNumber,
          },
          SchemaVersionId: this.input.schemaVersionId,
          MetadataKeyValue: {
            MetadataKey: this.input.metadataKeyValue.metadataKey,
            MetadataValue: this.input.metadataKeyValue.metadataValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutSchemaVersionMetadata.RegistryName', props);
    return resource.getResponseField('RegistryName') as unknown as string;
  }

  public get latestVersion(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putSchemaVersionMetadata',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.PutSchemaVersionMetadata.LatestVersion'),
        outputPath: 'LatestVersion',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId?.schemaArn,
            SchemaName: this.input.schemaId?.schemaName,
            RegistryName: this.input.schemaId?.registryName,
          },
          SchemaVersionNumber: {
            LatestVersion: this.input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.input.schemaVersionNumber?.versionNumber,
          },
          SchemaVersionId: this.input.schemaVersionId,
          MetadataKeyValue: {
            MetadataKey: this.input.metadataKeyValue.metadataKey,
            MetadataValue: this.input.metadataKeyValue.metadataValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutSchemaVersionMetadata.LatestVersion', props);
    return resource.getResponseField('LatestVersion') as unknown as boolean;
  }

  public get versionNumber(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putSchemaVersionMetadata',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.PutSchemaVersionMetadata.VersionNumber'),
        outputPath: 'VersionNumber',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId?.schemaArn,
            SchemaName: this.input.schemaId?.schemaName,
            RegistryName: this.input.schemaId?.registryName,
          },
          SchemaVersionNumber: {
            LatestVersion: this.input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.input.schemaVersionNumber?.versionNumber,
          },
          SchemaVersionId: this.input.schemaVersionId,
          MetadataKeyValue: {
            MetadataKey: this.input.metadataKeyValue.metadataKey,
            MetadataValue: this.input.metadataKeyValue.metadataValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutSchemaVersionMetadata.VersionNumber', props);
    return resource.getResponseField('VersionNumber') as unknown as number;
  }

  public get schemaVersionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putSchemaVersionMetadata',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.PutSchemaVersionMetadata.SchemaVersionId'),
        outputPath: 'SchemaVersionId',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId?.schemaArn,
            SchemaName: this.input.schemaId?.schemaName,
            RegistryName: this.input.schemaId?.registryName,
          },
          SchemaVersionNumber: {
            LatestVersion: this.input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.input.schemaVersionNumber?.versionNumber,
          },
          SchemaVersionId: this.input.schemaVersionId,
          MetadataKeyValue: {
            MetadataKey: this.input.metadataKeyValue.metadataKey,
            MetadataValue: this.input.metadataKeyValue.metadataValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutSchemaVersionMetadata.SchemaVersionId', props);
    return resource.getResponseField('SchemaVersionId') as unknown as string;
  }

  public get metadataKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putSchemaVersionMetadata',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.PutSchemaVersionMetadata.MetadataKey'),
        outputPath: 'MetadataKey',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId?.schemaArn,
            SchemaName: this.input.schemaId?.schemaName,
            RegistryName: this.input.schemaId?.registryName,
          },
          SchemaVersionNumber: {
            LatestVersion: this.input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.input.schemaVersionNumber?.versionNumber,
          },
          SchemaVersionId: this.input.schemaVersionId,
          MetadataKeyValue: {
            MetadataKey: this.input.metadataKeyValue.metadataKey,
            MetadataValue: this.input.metadataKeyValue.metadataValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutSchemaVersionMetadata.MetadataKey', props);
    return resource.getResponseField('MetadataKey') as unknown as string;
  }

  public get metadataValue(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putSchemaVersionMetadata',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.PutSchemaVersionMetadata.MetadataValue'),
        outputPath: 'MetadataValue',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId?.schemaArn,
            SchemaName: this.input.schemaId?.schemaName,
            RegistryName: this.input.schemaId?.registryName,
          },
          SchemaVersionNumber: {
            LatestVersion: this.input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.input.schemaVersionNumber?.versionNumber,
          },
          SchemaVersionId: this.input.schemaVersionId,
          MetadataKeyValue: {
            MetadataKey: this.input.metadataKeyValue.metadataKey,
            MetadataValue: this.input.metadataKeyValue.metadataValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutSchemaVersionMetadata.MetadataValue', props);
    return resource.getResponseField('MetadataValue') as unknown as string;
  }

}

export class GlueQuerySchemaVersionMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueQuerySchemaVersionMetadataInput) {
    super(scope, id);
  }

  public get metadataInfoMap(): Record<string, shapes.GlueMetadataInfo> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'querySchemaVersionMetadata',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.QuerySchemaVersionMetadata.MetadataInfoMap'),
        outputPath: 'MetadataInfoMap',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId?.schemaArn,
            SchemaName: this.input.schemaId?.schemaName,
            RegistryName: this.input.schemaId?.registryName,
          },
          SchemaVersionNumber: {
            LatestVersion: this.input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.input.schemaVersionNumber?.versionNumber,
          },
          SchemaVersionId: this.input.schemaVersionId,
          MetadataList: this.input.metadataList,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'QuerySchemaVersionMetadata.MetadataInfoMap', props);
    return resource.getResponseField('MetadataInfoMap') as unknown as Record<string, shapes.GlueMetadataInfo>;
  }

  public get schemaVersionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'querySchemaVersionMetadata',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.QuerySchemaVersionMetadata.SchemaVersionId'),
        outputPath: 'SchemaVersionId',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId?.schemaArn,
            SchemaName: this.input.schemaId?.schemaName,
            RegistryName: this.input.schemaId?.registryName,
          },
          SchemaVersionNumber: {
            LatestVersion: this.input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.input.schemaVersionNumber?.versionNumber,
          },
          SchemaVersionId: this.input.schemaVersionId,
          MetadataList: this.input.metadataList,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'QuerySchemaVersionMetadata.SchemaVersionId', props);
    return resource.getResponseField('SchemaVersionId') as unknown as string;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'querySchemaVersionMetadata',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.QuerySchemaVersionMetadata.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId?.schemaArn,
            SchemaName: this.input.schemaId?.schemaName,
            RegistryName: this.input.schemaId?.registryName,
          },
          SchemaVersionNumber: {
            LatestVersion: this.input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.input.schemaVersionNumber?.versionNumber,
          },
          SchemaVersionId: this.input.schemaVersionId,
          MetadataList: this.input.metadataList,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'QuerySchemaVersionMetadata.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class GlueRegisterSchemaVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueRegisterSchemaVersionInput) {
    super(scope, id);
  }

  public get schemaVersionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerSchemaVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.RegisterSchemaVersion.SchemaVersionId'),
        outputPath: 'SchemaVersionId',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId.schemaArn,
            SchemaName: this.input.schemaId.schemaName,
            RegistryName: this.input.schemaId.registryName,
          },
          SchemaDefinition: this.input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterSchemaVersion.SchemaVersionId', props);
    return resource.getResponseField('SchemaVersionId') as unknown as string;
  }

  public get versionNumber(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerSchemaVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.RegisterSchemaVersion.VersionNumber'),
        outputPath: 'VersionNumber',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId.schemaArn,
            SchemaName: this.input.schemaId.schemaName,
            RegistryName: this.input.schemaId.registryName,
          },
          SchemaDefinition: this.input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterSchemaVersion.VersionNumber', props);
    return resource.getResponseField('VersionNumber') as unknown as number;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerSchemaVersion',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.RegisterSchemaVersion.Status'),
        outputPath: 'Status',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId.schemaArn,
            SchemaName: this.input.schemaId.schemaName,
            RegistryName: this.input.schemaId.registryName,
          },
          SchemaDefinition: this.input.schemaDefinition,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterSchemaVersion.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class GlueRemoveSchemaVersionMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueRemoveSchemaVersionMetadataInput) {
    super(scope, id);
  }

  public get schemaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeSchemaVersionMetadata',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.RemoveSchemaVersionMetadata.SchemaArn'),
        outputPath: 'SchemaArn',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId?.schemaArn,
            SchemaName: this.input.schemaId?.schemaName,
            RegistryName: this.input.schemaId?.registryName,
          },
          SchemaVersionNumber: {
            LatestVersion: this.input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.input.schemaVersionNumber?.versionNumber,
          },
          SchemaVersionId: this.input.schemaVersionId,
          MetadataKeyValue: {
            MetadataKey: this.input.metadataKeyValue.metadataKey,
            MetadataValue: this.input.metadataKeyValue.metadataValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RemoveSchemaVersionMetadata.SchemaArn', props);
    return resource.getResponseField('SchemaArn') as unknown as string;
  }

  public get schemaName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeSchemaVersionMetadata',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.RemoveSchemaVersionMetadata.SchemaName'),
        outputPath: 'SchemaName',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId?.schemaArn,
            SchemaName: this.input.schemaId?.schemaName,
            RegistryName: this.input.schemaId?.registryName,
          },
          SchemaVersionNumber: {
            LatestVersion: this.input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.input.schemaVersionNumber?.versionNumber,
          },
          SchemaVersionId: this.input.schemaVersionId,
          MetadataKeyValue: {
            MetadataKey: this.input.metadataKeyValue.metadataKey,
            MetadataValue: this.input.metadataKeyValue.metadataValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RemoveSchemaVersionMetadata.SchemaName', props);
    return resource.getResponseField('SchemaName') as unknown as string;
  }

  public get registryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeSchemaVersionMetadata',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.RemoveSchemaVersionMetadata.RegistryName'),
        outputPath: 'RegistryName',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId?.schemaArn,
            SchemaName: this.input.schemaId?.schemaName,
            RegistryName: this.input.schemaId?.registryName,
          },
          SchemaVersionNumber: {
            LatestVersion: this.input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.input.schemaVersionNumber?.versionNumber,
          },
          SchemaVersionId: this.input.schemaVersionId,
          MetadataKeyValue: {
            MetadataKey: this.input.metadataKeyValue.metadataKey,
            MetadataValue: this.input.metadataKeyValue.metadataValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RemoveSchemaVersionMetadata.RegistryName', props);
    return resource.getResponseField('RegistryName') as unknown as string;
  }

  public get latestVersion(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeSchemaVersionMetadata',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.RemoveSchemaVersionMetadata.LatestVersion'),
        outputPath: 'LatestVersion',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId?.schemaArn,
            SchemaName: this.input.schemaId?.schemaName,
            RegistryName: this.input.schemaId?.registryName,
          },
          SchemaVersionNumber: {
            LatestVersion: this.input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.input.schemaVersionNumber?.versionNumber,
          },
          SchemaVersionId: this.input.schemaVersionId,
          MetadataKeyValue: {
            MetadataKey: this.input.metadataKeyValue.metadataKey,
            MetadataValue: this.input.metadataKeyValue.metadataValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RemoveSchemaVersionMetadata.LatestVersion', props);
    return resource.getResponseField('LatestVersion') as unknown as boolean;
  }

  public get versionNumber(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeSchemaVersionMetadata',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.RemoveSchemaVersionMetadata.VersionNumber'),
        outputPath: 'VersionNumber',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId?.schemaArn,
            SchemaName: this.input.schemaId?.schemaName,
            RegistryName: this.input.schemaId?.registryName,
          },
          SchemaVersionNumber: {
            LatestVersion: this.input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.input.schemaVersionNumber?.versionNumber,
          },
          SchemaVersionId: this.input.schemaVersionId,
          MetadataKeyValue: {
            MetadataKey: this.input.metadataKeyValue.metadataKey,
            MetadataValue: this.input.metadataKeyValue.metadataValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RemoveSchemaVersionMetadata.VersionNumber', props);
    return resource.getResponseField('VersionNumber') as unknown as number;
  }

  public get schemaVersionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeSchemaVersionMetadata',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.RemoveSchemaVersionMetadata.SchemaVersionId'),
        outputPath: 'SchemaVersionId',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId?.schemaArn,
            SchemaName: this.input.schemaId?.schemaName,
            RegistryName: this.input.schemaId?.registryName,
          },
          SchemaVersionNumber: {
            LatestVersion: this.input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.input.schemaVersionNumber?.versionNumber,
          },
          SchemaVersionId: this.input.schemaVersionId,
          MetadataKeyValue: {
            MetadataKey: this.input.metadataKeyValue.metadataKey,
            MetadataValue: this.input.metadataKeyValue.metadataValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RemoveSchemaVersionMetadata.SchemaVersionId', props);
    return resource.getResponseField('SchemaVersionId') as unknown as string;
  }

  public get metadataKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeSchemaVersionMetadata',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.RemoveSchemaVersionMetadata.MetadataKey'),
        outputPath: 'MetadataKey',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId?.schemaArn,
            SchemaName: this.input.schemaId?.schemaName,
            RegistryName: this.input.schemaId?.registryName,
          },
          SchemaVersionNumber: {
            LatestVersion: this.input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.input.schemaVersionNumber?.versionNumber,
          },
          SchemaVersionId: this.input.schemaVersionId,
          MetadataKeyValue: {
            MetadataKey: this.input.metadataKeyValue.metadataKey,
            MetadataValue: this.input.metadataKeyValue.metadataValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RemoveSchemaVersionMetadata.MetadataKey', props);
    return resource.getResponseField('MetadataKey') as unknown as string;
  }

  public get metadataValue(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeSchemaVersionMetadata',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.RemoveSchemaVersionMetadata.MetadataValue'),
        outputPath: 'MetadataValue',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId?.schemaArn,
            SchemaName: this.input.schemaId?.schemaName,
            RegistryName: this.input.schemaId?.registryName,
          },
          SchemaVersionNumber: {
            LatestVersion: this.input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.input.schemaVersionNumber?.versionNumber,
          },
          SchemaVersionId: this.input.schemaVersionId,
          MetadataKeyValue: {
            MetadataKey: this.input.metadataKeyValue.metadataKey,
            MetadataValue: this.input.metadataKeyValue.metadataValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RemoveSchemaVersionMetadata.MetadataValue', props);
    return resource.getResponseField('MetadataValue') as unknown as string;
  }

}

export class GlueResetJobBookmark extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueResetJobBookmarkRequest) {
    super(scope, id);
  }

  public get jobBookmarkEntry(): GlueResetJobBookmarkJobBookmarkEntry {
    return new GlueResetJobBookmarkJobBookmarkEntry(this, 'JobBookmarkEntry', this.__resources, this.input);
  }

}

export class GlueResetJobBookmarkJobBookmarkEntry extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueResetJobBookmarkRequest) {
    super(scope, id);
  }

  public get jobName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetJobBookmark',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ResetJobBookmark.JobBookmarkEntry.JobName'),
        outputPath: 'JobBookmarkEntry.JobName',
        parameters: {
          JobName: this.input.jobName,
          RunId: this.input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetJobBookmark.JobBookmarkEntry.JobName', props);
    return resource.getResponseField('JobBookmarkEntry.JobName') as unknown as string;
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetJobBookmark',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ResetJobBookmark.JobBookmarkEntry.Version'),
        outputPath: 'JobBookmarkEntry.Version',
        parameters: {
          JobName: this.input.jobName,
          RunId: this.input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetJobBookmark.JobBookmarkEntry.Version', props);
    return resource.getResponseField('JobBookmarkEntry.Version') as unknown as number;
  }

  public get run(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetJobBookmark',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ResetJobBookmark.JobBookmarkEntry.Run'),
        outputPath: 'JobBookmarkEntry.Run',
        parameters: {
          JobName: this.input.jobName,
          RunId: this.input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetJobBookmark.JobBookmarkEntry.Run', props);
    return resource.getResponseField('JobBookmarkEntry.Run') as unknown as number;
  }

  public get attempt(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetJobBookmark',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ResetJobBookmark.JobBookmarkEntry.Attempt'),
        outputPath: 'JobBookmarkEntry.Attempt',
        parameters: {
          JobName: this.input.jobName,
          RunId: this.input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetJobBookmark.JobBookmarkEntry.Attempt', props);
    return resource.getResponseField('JobBookmarkEntry.Attempt') as unknown as number;
  }

  public get previousRunId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetJobBookmark',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ResetJobBookmark.JobBookmarkEntry.PreviousRunId'),
        outputPath: 'JobBookmarkEntry.PreviousRunId',
        parameters: {
          JobName: this.input.jobName,
          RunId: this.input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetJobBookmark.JobBookmarkEntry.PreviousRunId', props);
    return resource.getResponseField('JobBookmarkEntry.PreviousRunId') as unknown as string;
  }

  public get runId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetJobBookmark',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ResetJobBookmark.JobBookmarkEntry.RunId'),
        outputPath: 'JobBookmarkEntry.RunId',
        parameters: {
          JobName: this.input.jobName,
          RunId: this.input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetJobBookmark.JobBookmarkEntry.RunId', props);
    return resource.getResponseField('JobBookmarkEntry.RunId') as unknown as string;
  }

  public get jobBookmark(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetJobBookmark',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ResetJobBookmark.JobBookmarkEntry.JobBookmark'),
        outputPath: 'JobBookmarkEntry.JobBookmark',
        parameters: {
          JobName: this.input.jobName,
          RunId: this.input.runId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetJobBookmark.JobBookmarkEntry.JobBookmark', props);
    return resource.getResponseField('JobBookmarkEntry.JobBookmark') as unknown as string;
  }

}

export class GlueResumeWorkflowRun extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueResumeWorkflowRunRequest) {
    super(scope, id);
  }

  public get runId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeWorkflowRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ResumeWorkflowRun.RunId'),
        outputPath: 'RunId',
        parameters: {
          Name: this.input.name,
          RunId: this.input.runId,
          NodeIds: this.input.nodeIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResumeWorkflowRun.RunId', props);
    return resource.getResponseField('RunId') as unknown as string;
  }

  public get nodeIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeWorkflowRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.ResumeWorkflowRun.NodeIds'),
        outputPath: 'NodeIds',
        parameters: {
          Name: this.input.name,
          RunId: this.input.runId,
          NodeIds: this.input.nodeIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResumeWorkflowRun.NodeIds', props);
    return resource.getResponseField('NodeIds') as unknown as string[];
  }

}

export class GlueSearchTables extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueSearchTablesRequest) {
    super(scope, id);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchTables',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.SearchTables.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CatalogId: this.input.catalogId,
          NextToken: this.input.nextToken,
          Filters: this.input.filters,
          SearchText: this.input.searchText,
          SortCriteria: this.input.sortCriteria,
          MaxResults: this.input.maxResults,
          ResourceShareType: this.input.resourceShareType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SearchTables.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get tableList(): shapes.GlueTable[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchTables',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.SearchTables.TableList'),
        outputPath: 'TableList',
        parameters: {
          CatalogId: this.input.catalogId,
          NextToken: this.input.nextToken,
          Filters: this.input.filters,
          SearchText: this.input.searchText,
          SortCriteria: this.input.sortCriteria,
          MaxResults: this.input.maxResults,
          ResourceShareType: this.input.resourceShareType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SearchTables.TableList', props);
    return resource.getResponseField('TableList') as unknown as shapes.GlueTable[];
  }

}

export class GlueStartExportLabelsTaskRun extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueStartExportLabelsTaskRunRequest) {
    super(scope, id);
  }

  public get taskRunId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startExportLabelsTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.StartExportLabelsTaskRun.TaskRunId'),
        outputPath: 'TaskRunId',
        parameters: {
          TransformId: this.input.transformId,
          OutputS3Path: this.input.outputS3Path,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartExportLabelsTaskRun.TaskRunId', props);
    return resource.getResponseField('TaskRunId') as unknown as string;
  }

}

export class GlueStartImportLabelsTaskRun extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueStartImportLabelsTaskRunRequest) {
    super(scope, id);
  }

  public get taskRunId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startImportLabelsTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.StartImportLabelsTaskRun.TaskRunId'),
        outputPath: 'TaskRunId',
        parameters: {
          TransformId: this.input.transformId,
          InputS3Path: this.input.inputS3Path,
          ReplaceAllLabels: this.input.replaceAllLabels,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartImportLabelsTaskRun.TaskRunId', props);
    return resource.getResponseField('TaskRunId') as unknown as string;
  }

}

export class GlueStartJobRun extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueStartJobRunRequest) {
    super(scope, id);
  }

  public get jobRunId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startJobRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.StartJobRun.JobRunId'),
        outputPath: 'JobRunId',
        parameters: {
          JobName: this.input.jobName,
          JobRunId: this.input.jobRunId,
          Arguments: this.input.arguments,
          AllocatedCapacity: this.input.allocatedCapacity,
          Timeout: this.input.timeout,
          MaxCapacity: this.input.maxCapacity,
          SecurityConfiguration: this.input.securityConfiguration,
          NotificationProperty: {
            NotifyDelayAfter: this.input.notificationProperty?.notifyDelayAfter,
          },
          WorkerType: this.input.workerType,
          NumberOfWorkers: this.input.numberOfWorkers,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartJobRun.JobRunId', props);
    return resource.getResponseField('JobRunId') as unknown as string;
  }

}

export class GlueStartMlEvaluationTaskRun extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueStartMlEvaluationTaskRunRequest) {
    super(scope, id);
  }

  public get taskRunId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMlEvaluationTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.StartMLEvaluationTaskRun.TaskRunId'),
        outputPath: 'TaskRunId',
        parameters: {
          TransformId: this.input.transformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMLEvaluationTaskRun.TaskRunId', props);
    return resource.getResponseField('TaskRunId') as unknown as string;
  }

}

export class GlueStartMlLabelingSetGenerationTaskRun extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueStartMlLabelingSetGenerationTaskRunRequest) {
    super(scope, id);
  }

  public get taskRunId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMlLabelingSetGenerationTaskRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.StartMLLabelingSetGenerationTaskRun.TaskRunId'),
        outputPath: 'TaskRunId',
        parameters: {
          TransformId: this.input.transformId,
          OutputS3Path: this.input.outputS3Path,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMLLabelingSetGenerationTaskRun.TaskRunId', props);
    return resource.getResponseField('TaskRunId') as unknown as string;
  }

}

export class GlueStartTrigger extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueStartTriggerRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.StartTrigger.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartTrigger.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class GlueStartWorkflowRun extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueStartWorkflowRunRequest) {
    super(scope, id);
  }

  public get runId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startWorkflowRun',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.StartWorkflowRun.RunId'),
        outputPath: 'RunId',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartWorkflowRun.RunId', props);
    return resource.getResponseField('RunId') as unknown as string;
  }

}

export class GlueStopTrigger extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueStopTriggerRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.StopTrigger.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopTrigger.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class GlueUpdateColumnStatisticsForPartition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueUpdateColumnStatisticsForPartitionRequest) {
    super(scope, id);
  }

  public get errors(): shapes.GlueColumnStatisticsError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateColumnStatisticsForPartition',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateColumnStatisticsForPartition.Errors'),
        outputPath: 'Errors',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          PartitionValues: this.input.partitionValues,
          ColumnStatisticsList: this.input.columnStatisticsList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateColumnStatisticsForPartition.Errors', props);
    return resource.getResponseField('Errors') as unknown as shapes.GlueColumnStatisticsError[];
  }

}

export class GlueUpdateColumnStatisticsForTable extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueUpdateColumnStatisticsForTableRequest) {
    super(scope, id);
  }

  public get errors(): shapes.GlueColumnStatisticsError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateColumnStatisticsForTable',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateColumnStatisticsForTable.Errors'),
        outputPath: 'Errors',
        parameters: {
          CatalogId: this.input.catalogId,
          DatabaseName: this.input.databaseName,
          TableName: this.input.tableName,
          ColumnStatisticsList: this.input.columnStatisticsList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateColumnStatisticsForTable.Errors', props);
    return resource.getResponseField('Errors') as unknown as shapes.GlueColumnStatisticsError[];
  }

}

export class GlueUpdateJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueUpdateJobRequest) {
    super(scope, id);
  }

  public get jobName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateJob',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateJob.JobName'),
        outputPath: 'JobName',
        parameters: {
          JobName: this.input.jobName,
          JobUpdate: {
            Description: this.input.jobUpdate.description,
            LogUri: this.input.jobUpdate.logUri,
            Role: this.input.jobUpdate.role,
            ExecutionProperty: {
              MaxConcurrentRuns: this.input.jobUpdate.executionProperty?.maxConcurrentRuns,
            },
            Command: {
              Name: this.input.jobUpdate.command?.name,
              ScriptLocation: this.input.jobUpdate.command?.scriptLocation,
              PythonVersion: this.input.jobUpdate.command?.pythonVersion,
            },
            DefaultArguments: this.input.jobUpdate.defaultArguments,
            NonOverridableArguments: this.input.jobUpdate.nonOverridableArguments,
            Connections: {
              Connections: this.input.jobUpdate.connections?.connections,
            },
            MaxRetries: this.input.jobUpdate.maxRetries,
            AllocatedCapacity: this.input.jobUpdate.allocatedCapacity,
            Timeout: this.input.jobUpdate.timeout,
            MaxCapacity: this.input.jobUpdate.maxCapacity,
            WorkerType: this.input.jobUpdate.workerType,
            NumberOfWorkers: this.input.jobUpdate.numberOfWorkers,
            SecurityConfiguration: this.input.jobUpdate.securityConfiguration,
            NotificationProperty: {
              NotifyDelayAfter: this.input.jobUpdate.notificationProperty?.notifyDelayAfter,
            },
            GlueVersion: this.input.jobUpdate.glueVersion,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateJob.JobName', props);
    return resource.getResponseField('JobName') as unknown as string;
  }

}

export class GlueUpdateMlTransform extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueUpdateMlTransformRequest) {
    super(scope, id);
  }

  public get transformId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMlTransform',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateMLTransform.TransformId'),
        outputPath: 'TransformId',
        parameters: {
          TransformId: this.input.transformId,
          Name: this.input.name,
          Description: this.input.description,
          Parameters: {
            TransformType: this.input.parameters?.transformType,
            FindMatchesParameters: {
              PrimaryKeyColumnName: this.input.parameters?.findMatchesParameters?.primaryKeyColumnName,
              PrecisionRecallTradeoff: this.input.parameters?.findMatchesParameters?.precisionRecallTradeoff,
              AccuracyCostTradeoff: this.input.parameters?.findMatchesParameters?.accuracyCostTradeoff,
              EnforceProvidedLabels: this.input.parameters?.findMatchesParameters?.enforceProvidedLabels,
            },
          },
          Role: this.input.role,
          GlueVersion: this.input.glueVersion,
          MaxCapacity: this.input.maxCapacity,
          WorkerType: this.input.workerType,
          NumberOfWorkers: this.input.numberOfWorkers,
          Timeout: this.input.timeout,
          MaxRetries: this.input.maxRetries,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMLTransform.TransformId', props);
    return resource.getResponseField('TransformId') as unknown as string;
  }

}

export class GlueUpdateRegistry extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueUpdateRegistryInput) {
    super(scope, id);
  }

  public get registryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRegistry',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateRegistry.RegistryName'),
        outputPath: 'RegistryName',
        parameters: {
          RegistryId: {
            RegistryName: this.input.registryId.registryName,
            RegistryArn: this.input.registryId.registryArn,
          },
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRegistry.RegistryName', props);
    return resource.getResponseField('RegistryName') as unknown as string;
  }

  public get registryArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRegistry',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateRegistry.RegistryArn'),
        outputPath: 'RegistryArn',
        parameters: {
          RegistryId: {
            RegistryName: this.input.registryId.registryName,
            RegistryArn: this.input.registryId.registryArn,
          },
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRegistry.RegistryArn', props);
    return resource.getResponseField('RegistryArn') as unknown as string;
  }

}

export class GlueUpdateSchema extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueUpdateSchemaInput) {
    super(scope, id);
  }

  public get schemaArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateSchema.SchemaArn'),
        outputPath: 'SchemaArn',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId.schemaArn,
            SchemaName: this.input.schemaId.schemaName,
            RegistryName: this.input.schemaId.registryName,
          },
          SchemaVersionNumber: {
            LatestVersion: this.input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.input.schemaVersionNumber?.versionNumber,
          },
          Compatibility: this.input.compatibility,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSchema.SchemaArn', props);
    return resource.getResponseField('SchemaArn') as unknown as string;
  }

  public get schemaName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateSchema.SchemaName'),
        outputPath: 'SchemaName',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId.schemaArn,
            SchemaName: this.input.schemaId.schemaName,
            RegistryName: this.input.schemaId.registryName,
          },
          SchemaVersionNumber: {
            LatestVersion: this.input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.input.schemaVersionNumber?.versionNumber,
          },
          Compatibility: this.input.compatibility,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSchema.SchemaName', props);
    return resource.getResponseField('SchemaName') as unknown as string;
  }

  public get registryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSchema',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateSchema.RegistryName'),
        outputPath: 'RegistryName',
        parameters: {
          SchemaId: {
            SchemaArn: this.input.schemaId.schemaArn,
            SchemaName: this.input.schemaId.schemaName,
            RegistryName: this.input.schemaId.registryName,
          },
          SchemaVersionNumber: {
            LatestVersion: this.input.schemaVersionNumber?.latestVersion,
            VersionNumber: this.input.schemaVersionNumber?.versionNumber,
          },
          Compatibility: this.input.compatibility,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSchema.RegistryName', props);
    return resource.getResponseField('RegistryName') as unknown as string;
  }

}

export class GlueUpdateTrigger extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueUpdateTriggerRequest) {
    super(scope, id);
  }

  public get trigger(): GlueUpdateTriggerTrigger {
    return new GlueUpdateTriggerTrigger(this, 'Trigger', this.__resources, this.input);
  }

}

export class GlueUpdateTriggerTrigger extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueUpdateTriggerRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateTrigger.Trigger.Name'),
        outputPath: 'Trigger.Name',
        parameters: {
          Name: this.input.name,
          TriggerUpdate: {
            Name: this.input.triggerUpdate.name,
            Description: this.input.triggerUpdate.description,
            Schedule: this.input.triggerUpdate.schedule,
            Actions: this.input.triggerUpdate.actions,
            Predicate: {
              Logical: this.input.triggerUpdate.predicate?.logical,
              Conditions: this.input.triggerUpdate.predicate?.conditions,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTrigger.Trigger.Name', props);
    return resource.getResponseField('Trigger.Name') as unknown as string;
  }

  public get workflowName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateTrigger.Trigger.WorkflowName'),
        outputPath: 'Trigger.WorkflowName',
        parameters: {
          Name: this.input.name,
          TriggerUpdate: {
            Name: this.input.triggerUpdate.name,
            Description: this.input.triggerUpdate.description,
            Schedule: this.input.triggerUpdate.schedule,
            Actions: this.input.triggerUpdate.actions,
            Predicate: {
              Logical: this.input.triggerUpdate.predicate?.logical,
              Conditions: this.input.triggerUpdate.predicate?.conditions,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTrigger.Trigger.WorkflowName', props);
    return resource.getResponseField('Trigger.WorkflowName') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateTrigger.Trigger.Id'),
        outputPath: 'Trigger.Id',
        parameters: {
          Name: this.input.name,
          TriggerUpdate: {
            Name: this.input.triggerUpdate.name,
            Description: this.input.triggerUpdate.description,
            Schedule: this.input.triggerUpdate.schedule,
            Actions: this.input.triggerUpdate.actions,
            Predicate: {
              Logical: this.input.triggerUpdate.predicate?.logical,
              Conditions: this.input.triggerUpdate.predicate?.conditions,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTrigger.Trigger.Id', props);
    return resource.getResponseField('Trigger.Id') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateTrigger.Trigger.Type'),
        outputPath: 'Trigger.Type',
        parameters: {
          Name: this.input.name,
          TriggerUpdate: {
            Name: this.input.triggerUpdate.name,
            Description: this.input.triggerUpdate.description,
            Schedule: this.input.triggerUpdate.schedule,
            Actions: this.input.triggerUpdate.actions,
            Predicate: {
              Logical: this.input.triggerUpdate.predicate?.logical,
              Conditions: this.input.triggerUpdate.predicate?.conditions,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTrigger.Trigger.Type', props);
    return resource.getResponseField('Trigger.Type') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateTrigger.Trigger.State'),
        outputPath: 'Trigger.State',
        parameters: {
          Name: this.input.name,
          TriggerUpdate: {
            Name: this.input.triggerUpdate.name,
            Description: this.input.triggerUpdate.description,
            Schedule: this.input.triggerUpdate.schedule,
            Actions: this.input.triggerUpdate.actions,
            Predicate: {
              Logical: this.input.triggerUpdate.predicate?.logical,
              Conditions: this.input.triggerUpdate.predicate?.conditions,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTrigger.Trigger.State', props);
    return resource.getResponseField('Trigger.State') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateTrigger.Trigger.Description'),
        outputPath: 'Trigger.Description',
        parameters: {
          Name: this.input.name,
          TriggerUpdate: {
            Name: this.input.triggerUpdate.name,
            Description: this.input.triggerUpdate.description,
            Schedule: this.input.triggerUpdate.schedule,
            Actions: this.input.triggerUpdate.actions,
            Predicate: {
              Logical: this.input.triggerUpdate.predicate?.logical,
              Conditions: this.input.triggerUpdate.predicate?.conditions,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTrigger.Trigger.Description', props);
    return resource.getResponseField('Trigger.Description') as unknown as string;
  }

  public get schedule(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateTrigger.Trigger.Schedule'),
        outputPath: 'Trigger.Schedule',
        parameters: {
          Name: this.input.name,
          TriggerUpdate: {
            Name: this.input.triggerUpdate.name,
            Description: this.input.triggerUpdate.description,
            Schedule: this.input.triggerUpdate.schedule,
            Actions: this.input.triggerUpdate.actions,
            Predicate: {
              Logical: this.input.triggerUpdate.predicate?.logical,
              Conditions: this.input.triggerUpdate.predicate?.conditions,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTrigger.Trigger.Schedule', props);
    return resource.getResponseField('Trigger.Schedule') as unknown as string;
  }

  public get actions(): shapes.GlueAction[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateTrigger.Trigger.Actions'),
        outputPath: 'Trigger.Actions',
        parameters: {
          Name: this.input.name,
          TriggerUpdate: {
            Name: this.input.triggerUpdate.name,
            Description: this.input.triggerUpdate.description,
            Schedule: this.input.triggerUpdate.schedule,
            Actions: this.input.triggerUpdate.actions,
            Predicate: {
              Logical: this.input.triggerUpdate.predicate?.logical,
              Conditions: this.input.triggerUpdate.predicate?.conditions,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTrigger.Trigger.Actions', props);
    return resource.getResponseField('Trigger.Actions') as unknown as shapes.GlueAction[];
  }

  public get predicate(): GlueUpdateTriggerTriggerPredicate {
    return new GlueUpdateTriggerTriggerPredicate(this, 'Predicate', this.__resources, this.input);
  }

}

export class GlueUpdateTriggerTriggerPredicate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueUpdateTriggerRequest) {
    super(scope, id);
  }

  public get logical(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateTrigger.Trigger.Predicate.Logical'),
        outputPath: 'Trigger.Predicate.Logical',
        parameters: {
          Name: this.input.name,
          TriggerUpdate: {
            Name: this.input.triggerUpdate.name,
            Description: this.input.triggerUpdate.description,
            Schedule: this.input.triggerUpdate.schedule,
            Actions: this.input.triggerUpdate.actions,
            Predicate: {
              Logical: this.input.triggerUpdate.predicate?.logical,
              Conditions: this.input.triggerUpdate.predicate?.conditions,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTrigger.Trigger.Predicate.Logical', props);
    return resource.getResponseField('Trigger.Predicate.Logical') as unknown as string;
  }

  public get conditions(): shapes.GlueCondition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTrigger',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateTrigger.Trigger.Predicate.Conditions'),
        outputPath: 'Trigger.Predicate.Conditions',
        parameters: {
          Name: this.input.name,
          TriggerUpdate: {
            Name: this.input.triggerUpdate.name,
            Description: this.input.triggerUpdate.description,
            Schedule: this.input.triggerUpdate.schedule,
            Actions: this.input.triggerUpdate.actions,
            Predicate: {
              Logical: this.input.triggerUpdate.predicate?.logical,
              Conditions: this.input.triggerUpdate.predicate?.conditions,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTrigger.Trigger.Predicate.Conditions', props);
    return resource.getResponseField('Trigger.Predicate.Conditions') as unknown as shapes.GlueCondition[];
  }

}

export class GlueUpdateWorkflow extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlueUpdateWorkflowRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkflow',
        service: 'Glue',
        physicalResourceId: cr.PhysicalResourceId.of('Glue.UpdateWorkflow.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          DefaultRunProperties: this.input.defaultRunProperties,
          MaxConcurrentRuns: this.input.maxConcurrentRuns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateWorkflow.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

