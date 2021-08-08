import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class HoneycodeClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public batchCreateTableRows(input: shapes.HoneycodeBatchCreateTableRowsRequest): HoneycodeResponsesBatchCreateTableRows {
    return new HoneycodeResponsesBatchCreateTableRows(this, this.__resources, input);
  }

  public batchDeleteTableRows(input: shapes.HoneycodeBatchDeleteTableRowsRequest): HoneycodeResponsesBatchDeleteTableRows {
    return new HoneycodeResponsesBatchDeleteTableRows(this, this.__resources, input);
  }

  public batchUpdateTableRows(input: shapes.HoneycodeBatchUpdateTableRowsRequest): HoneycodeResponsesBatchUpdateTableRows {
    return new HoneycodeResponsesBatchUpdateTableRows(this, this.__resources, input);
  }

  public batchUpsertTableRows(input: shapes.HoneycodeBatchUpsertTableRowsRequest): HoneycodeResponsesBatchUpsertTableRows {
    return new HoneycodeResponsesBatchUpsertTableRows(this, this.__resources, input);
  }

  public describeTableDataImportJob(input: shapes.HoneycodeDescribeTableDataImportJobRequest): HoneycodeResponsesDescribeTableDataImportJob {
    return new HoneycodeResponsesDescribeTableDataImportJob(this, this.__resources, input);
  }

  public fetchScreenData(input: shapes.HoneycodeGetScreenDataRequest): HoneycodeResponsesFetchScreenData {
    return new HoneycodeResponsesFetchScreenData(this, this.__resources, input);
  }

  public invokeScreenAutomation(input: shapes.HoneycodeInvokeScreenAutomationRequest): HoneycodeResponsesInvokeScreenAutomation {
    return new HoneycodeResponsesInvokeScreenAutomation(this, this.__resources, input);
  }

  public listTableColumns(input: shapes.HoneycodeListTableColumnsRequest): HoneycodeResponsesListTableColumns {
    return new HoneycodeResponsesListTableColumns(this, this.__resources, input);
  }

  public listTableRows(input: shapes.HoneycodeListTableRowsRequest): HoneycodeResponsesListTableRows {
    return new HoneycodeResponsesListTableRows(this, this.__resources, input);
  }

  public listTables(input: shapes.HoneycodeListTablesRequest): HoneycodeResponsesListTables {
    return new HoneycodeResponsesListTables(this, this.__resources, input);
  }

  public queryTableRows(input: shapes.HoneycodeQueryTableRowsRequest): HoneycodeResponsesQueryTableRows {
    return new HoneycodeResponsesQueryTableRows(this, this.__resources, input);
  }

  public startTableDataImportJob(input: shapes.HoneycodeStartTableDataImportJobRequest): HoneycodeResponsesStartTableDataImportJob {
    return new HoneycodeResponsesStartTableDataImportJob(this, this.__resources, input);
  }

}

export class HoneycodeResponsesBatchCreateTableRows {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HoneycodeBatchCreateTableRowsRequest) {
  }

  public get workbookCursor(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchCreateTableRows',
        service: 'Honeycode',
        physicalResourceId: cr.PhysicalResourceId.of('Honeycode.BatchCreateTableRows.workbookCursor'),
        outputPath: 'workbookCursor',
        parameters: {
          workbookId: this.__input.workbookId,
          tableId: this.__input.tableId,
          rowsToCreate: this.__input.rowsToCreate,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchCreateTableRows.workbookCursor', props);
    return resource.getResponseField('workbookCursor') as unknown as number;
  }

  public get createdRows(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchCreateTableRows',
        service: 'Honeycode',
        physicalResourceId: cr.PhysicalResourceId.of('Honeycode.BatchCreateTableRows.createdRows'),
        outputPath: 'createdRows',
        parameters: {
          workbookId: this.__input.workbookId,
          tableId: this.__input.tableId,
          rowsToCreate: this.__input.rowsToCreate,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchCreateTableRows.createdRows', props);
    return resource.getResponseField('createdRows') as unknown as Record<string, string>;
  }

  public get failedBatchItems(): shapes.HoneycodeFailedBatchItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchCreateTableRows',
        service: 'Honeycode',
        physicalResourceId: cr.PhysicalResourceId.of('Honeycode.BatchCreateTableRows.failedBatchItems'),
        outputPath: 'failedBatchItems',
        parameters: {
          workbookId: this.__input.workbookId,
          tableId: this.__input.tableId,
          rowsToCreate: this.__input.rowsToCreate,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchCreateTableRows.failedBatchItems', props);
    return resource.getResponseField('failedBatchItems') as unknown as shapes.HoneycodeFailedBatchItem[];
  }

}

export class HoneycodeResponsesBatchDeleteTableRows {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HoneycodeBatchDeleteTableRowsRequest) {
  }

  public get workbookCursor(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDeleteTableRows',
        service: 'Honeycode',
        physicalResourceId: cr.PhysicalResourceId.of('Honeycode.BatchDeleteTableRows.workbookCursor'),
        outputPath: 'workbookCursor',
        parameters: {
          workbookId: this.__input.workbookId,
          tableId: this.__input.tableId,
          rowIds: this.__input.rowIds,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDeleteTableRows.workbookCursor', props);
    return resource.getResponseField('workbookCursor') as unknown as number;
  }

  public get failedBatchItems(): shapes.HoneycodeFailedBatchItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDeleteTableRows',
        service: 'Honeycode',
        physicalResourceId: cr.PhysicalResourceId.of('Honeycode.BatchDeleteTableRows.failedBatchItems'),
        outputPath: 'failedBatchItems',
        parameters: {
          workbookId: this.__input.workbookId,
          tableId: this.__input.tableId,
          rowIds: this.__input.rowIds,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDeleteTableRows.failedBatchItems', props);
    return resource.getResponseField('failedBatchItems') as unknown as shapes.HoneycodeFailedBatchItem[];
  }

}

export class HoneycodeResponsesBatchUpdateTableRows {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HoneycodeBatchUpdateTableRowsRequest) {
  }

  public get workbookCursor(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchUpdateTableRows',
        service: 'Honeycode',
        physicalResourceId: cr.PhysicalResourceId.of('Honeycode.BatchUpdateTableRows.workbookCursor'),
        outputPath: 'workbookCursor',
        parameters: {
          workbookId: this.__input.workbookId,
          tableId: this.__input.tableId,
          rowsToUpdate: this.__input.rowsToUpdate,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchUpdateTableRows.workbookCursor', props);
    return resource.getResponseField('workbookCursor') as unknown as number;
  }

  public get failedBatchItems(): shapes.HoneycodeFailedBatchItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchUpdateTableRows',
        service: 'Honeycode',
        physicalResourceId: cr.PhysicalResourceId.of('Honeycode.BatchUpdateTableRows.failedBatchItems'),
        outputPath: 'failedBatchItems',
        parameters: {
          workbookId: this.__input.workbookId,
          tableId: this.__input.tableId,
          rowsToUpdate: this.__input.rowsToUpdate,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchUpdateTableRows.failedBatchItems', props);
    return resource.getResponseField('failedBatchItems') as unknown as shapes.HoneycodeFailedBatchItem[];
  }

}

export class HoneycodeResponsesBatchUpsertTableRows {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HoneycodeBatchUpsertTableRowsRequest) {
  }

  public get rows(): Record<string, shapes.HoneycodeUpsertRowsResult> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchUpsertTableRows',
        service: 'Honeycode',
        physicalResourceId: cr.PhysicalResourceId.of('Honeycode.BatchUpsertTableRows.rows'),
        outputPath: 'rows',
        parameters: {
          workbookId: this.__input.workbookId,
          tableId: this.__input.tableId,
          rowsToUpsert: this.__input.rowsToUpsert,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchUpsertTableRows.rows', props);
    return resource.getResponseField('rows') as unknown as Record<string, shapes.HoneycodeUpsertRowsResult>;
  }

  public get workbookCursor(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchUpsertTableRows',
        service: 'Honeycode',
        physicalResourceId: cr.PhysicalResourceId.of('Honeycode.BatchUpsertTableRows.workbookCursor'),
        outputPath: 'workbookCursor',
        parameters: {
          workbookId: this.__input.workbookId,
          tableId: this.__input.tableId,
          rowsToUpsert: this.__input.rowsToUpsert,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchUpsertTableRows.workbookCursor', props);
    return resource.getResponseField('workbookCursor') as unknown as number;
  }

  public get failedBatchItems(): shapes.HoneycodeFailedBatchItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchUpsertTableRows',
        service: 'Honeycode',
        physicalResourceId: cr.PhysicalResourceId.of('Honeycode.BatchUpsertTableRows.failedBatchItems'),
        outputPath: 'failedBatchItems',
        parameters: {
          workbookId: this.__input.workbookId,
          tableId: this.__input.tableId,
          rowsToUpsert: this.__input.rowsToUpsert,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchUpsertTableRows.failedBatchItems', props);
    return resource.getResponseField('failedBatchItems') as unknown as shapes.HoneycodeFailedBatchItem[];
  }

}

export class HoneycodeResponsesDescribeTableDataImportJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HoneycodeDescribeTableDataImportJobRequest) {
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTableDataImportJob',
        service: 'Honeycode',
        physicalResourceId: cr.PhysicalResourceId.of('Honeycode.DescribeTableDataImportJob.jobStatus'),
        outputPath: 'jobStatus',
        parameters: {
          workbookId: this.__input.workbookId,
          tableId: this.__input.tableId,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTableDataImportJob.jobStatus', props);
    return resource.getResponseField('jobStatus') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTableDataImportJob',
        service: 'Honeycode',
        physicalResourceId: cr.PhysicalResourceId.of('Honeycode.DescribeTableDataImportJob.message'),
        outputPath: 'message',
        parameters: {
          workbookId: this.__input.workbookId,
          tableId: this.__input.tableId,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTableDataImportJob.message', props);
    return resource.getResponseField('message') as unknown as string;
  }

  public get jobMetadata(): HoneycodeResponsesDescribeTableDataImportJobJobMetadata {
    return new HoneycodeResponsesDescribeTableDataImportJobJobMetadata(this.__scope, this.__resources, this.__input);
  }

}

export class HoneycodeResponsesDescribeTableDataImportJobJobMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HoneycodeDescribeTableDataImportJobRequest) {
  }

  public get submitter(): HoneycodeResponsesDescribeTableDataImportJobJobMetadataSubmitter {
    return new HoneycodeResponsesDescribeTableDataImportJobJobMetadataSubmitter(this.__scope, this.__resources, this.__input);
  }

  public get submitTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTableDataImportJob',
        service: 'Honeycode',
        physicalResourceId: cr.PhysicalResourceId.of('Honeycode.DescribeTableDataImportJob.jobMetadata.submitTime'),
        outputPath: 'jobMetadata.submitTime',
        parameters: {
          workbookId: this.__input.workbookId,
          tableId: this.__input.tableId,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTableDataImportJob.jobMetadata.submitTime', props);
    return resource.getResponseField('jobMetadata.submitTime') as unknown as string;
  }

  public get importOptions(): HoneycodeResponsesDescribeTableDataImportJobJobMetadataImportOptions {
    return new HoneycodeResponsesDescribeTableDataImportJobJobMetadataImportOptions(this.__scope, this.__resources, this.__input);
  }

  public get dataSource(): HoneycodeResponsesDescribeTableDataImportJobJobMetadataDataSource {
    return new HoneycodeResponsesDescribeTableDataImportJobJobMetadataDataSource(this.__scope, this.__resources, this.__input);
  }

}

export class HoneycodeResponsesDescribeTableDataImportJobJobMetadataSubmitter {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HoneycodeDescribeTableDataImportJobRequest) {
  }

  public get email(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTableDataImportJob',
        service: 'Honeycode',
        physicalResourceId: cr.PhysicalResourceId.of('Honeycode.DescribeTableDataImportJob.jobMetadata.submitter.email'),
        outputPath: 'jobMetadata.submitter.email',
        parameters: {
          workbookId: this.__input.workbookId,
          tableId: this.__input.tableId,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTableDataImportJob.jobMetadata.submitter.email', props);
    return resource.getResponseField('jobMetadata.submitter.email') as unknown as string;
  }

  public get userArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTableDataImportJob',
        service: 'Honeycode',
        physicalResourceId: cr.PhysicalResourceId.of('Honeycode.DescribeTableDataImportJob.jobMetadata.submitter.userArn'),
        outputPath: 'jobMetadata.submitter.userArn',
        parameters: {
          workbookId: this.__input.workbookId,
          tableId: this.__input.tableId,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTableDataImportJob.jobMetadata.submitter.userArn', props);
    return resource.getResponseField('jobMetadata.submitter.userArn') as unknown as string;
  }

}

export class HoneycodeResponsesDescribeTableDataImportJobJobMetadataImportOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HoneycodeDescribeTableDataImportJobRequest) {
  }

  public get destinationOptions(): HoneycodeResponsesDescribeTableDataImportJobJobMetadataImportOptionsDestinationOptions {
    return new HoneycodeResponsesDescribeTableDataImportJobJobMetadataImportOptionsDestinationOptions(this.__scope, this.__resources, this.__input);
  }

  public get delimitedTextOptions(): HoneycodeResponsesDescribeTableDataImportJobJobMetadataImportOptionsDelimitedTextOptions {
    return new HoneycodeResponsesDescribeTableDataImportJobJobMetadataImportOptionsDelimitedTextOptions(this.__scope, this.__resources, this.__input);
  }

}

export class HoneycodeResponsesDescribeTableDataImportJobJobMetadataImportOptionsDestinationOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HoneycodeDescribeTableDataImportJobRequest) {
  }

  public get columnMap(): Record<string, shapes.HoneycodeSourceDataColumnProperties> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTableDataImportJob',
        service: 'Honeycode',
        physicalResourceId: cr.PhysicalResourceId.of('Honeycode.DescribeTableDataImportJob.jobMetadata.importOptions.destinationOptions.columnMap'),
        outputPath: 'jobMetadata.importOptions.destinationOptions.columnMap',
        parameters: {
          workbookId: this.__input.workbookId,
          tableId: this.__input.tableId,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTableDataImportJob.jobMetadata.importOptions.destinationOptions.columnMap', props);
    return resource.getResponseField('jobMetadata.importOptions.destinationOptions.columnMap') as unknown as Record<string, shapes.HoneycodeSourceDataColumnProperties>;
  }

}

export class HoneycodeResponsesDescribeTableDataImportJobJobMetadataImportOptionsDelimitedTextOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HoneycodeDescribeTableDataImportJobRequest) {
  }

  public get delimiter(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTableDataImportJob',
        service: 'Honeycode',
        physicalResourceId: cr.PhysicalResourceId.of('Honeycode.DescribeTableDataImportJob.jobMetadata.importOptions.delimitedTextOptions.delimiter'),
        outputPath: 'jobMetadata.importOptions.delimitedTextOptions.delimiter',
        parameters: {
          workbookId: this.__input.workbookId,
          tableId: this.__input.tableId,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTableDataImportJob.jobMetadata.importOptions.delimitedTextOptions.delimiter', props);
    return resource.getResponseField('jobMetadata.importOptions.delimitedTextOptions.delimiter') as unknown as string;
  }

  public get hasHeaderRow(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTableDataImportJob',
        service: 'Honeycode',
        physicalResourceId: cr.PhysicalResourceId.of('Honeycode.DescribeTableDataImportJob.jobMetadata.importOptions.delimitedTextOptions.hasHeaderRow'),
        outputPath: 'jobMetadata.importOptions.delimitedTextOptions.hasHeaderRow',
        parameters: {
          workbookId: this.__input.workbookId,
          tableId: this.__input.tableId,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTableDataImportJob.jobMetadata.importOptions.delimitedTextOptions.hasHeaderRow', props);
    return resource.getResponseField('jobMetadata.importOptions.delimitedTextOptions.hasHeaderRow') as unknown as boolean;
  }

  public get ignoreEmptyRows(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTableDataImportJob',
        service: 'Honeycode',
        physicalResourceId: cr.PhysicalResourceId.of('Honeycode.DescribeTableDataImportJob.jobMetadata.importOptions.delimitedTextOptions.ignoreEmptyRows'),
        outputPath: 'jobMetadata.importOptions.delimitedTextOptions.ignoreEmptyRows',
        parameters: {
          workbookId: this.__input.workbookId,
          tableId: this.__input.tableId,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTableDataImportJob.jobMetadata.importOptions.delimitedTextOptions.ignoreEmptyRows', props);
    return resource.getResponseField('jobMetadata.importOptions.delimitedTextOptions.ignoreEmptyRows') as unknown as boolean;
  }

  public get dataCharacterEncoding(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTableDataImportJob',
        service: 'Honeycode',
        physicalResourceId: cr.PhysicalResourceId.of('Honeycode.DescribeTableDataImportJob.jobMetadata.importOptions.delimitedTextOptions.dataCharacterEncoding'),
        outputPath: 'jobMetadata.importOptions.delimitedTextOptions.dataCharacterEncoding',
        parameters: {
          workbookId: this.__input.workbookId,
          tableId: this.__input.tableId,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTableDataImportJob.jobMetadata.importOptions.delimitedTextOptions.dataCharacterEncoding', props);
    return resource.getResponseField('jobMetadata.importOptions.delimitedTextOptions.dataCharacterEncoding') as unknown as string;
  }

}

export class HoneycodeResponsesDescribeTableDataImportJobJobMetadataDataSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HoneycodeDescribeTableDataImportJobRequest) {
  }

  public get dataSourceConfig(): HoneycodeResponsesDescribeTableDataImportJobJobMetadataDataSourceDataSourceConfig {
    return new HoneycodeResponsesDescribeTableDataImportJobJobMetadataDataSourceDataSourceConfig(this.__scope, this.__resources, this.__input);
  }

}

export class HoneycodeResponsesDescribeTableDataImportJobJobMetadataDataSourceDataSourceConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HoneycodeDescribeTableDataImportJobRequest) {
  }

  public get dataSourceUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTableDataImportJob',
        service: 'Honeycode',
        physicalResourceId: cr.PhysicalResourceId.of('Honeycode.DescribeTableDataImportJob.jobMetadata.dataSource.dataSourceConfig.dataSourceUrl'),
        outputPath: 'jobMetadata.dataSource.dataSourceConfig.dataSourceUrl',
        parameters: {
          workbookId: this.__input.workbookId,
          tableId: this.__input.tableId,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTableDataImportJob.jobMetadata.dataSource.dataSourceConfig.dataSourceUrl', props);
    return resource.getResponseField('jobMetadata.dataSource.dataSourceConfig.dataSourceUrl') as unknown as string;
  }

}

export class HoneycodeResponsesFetchScreenData {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HoneycodeGetScreenDataRequest) {
  }

  public get results(): Record<string, shapes.HoneycodeResultSet> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getScreenData',
        service: 'Honeycode',
        physicalResourceId: cr.PhysicalResourceId.of('Honeycode.GetScreenData.results'),
        outputPath: 'results',
        parameters: {
          workbookId: this.__input.workbookId,
          appId: this.__input.appId,
          screenId: this.__input.screenId,
          variables: this.__input.variables,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetScreenData.results', props);
    return resource.getResponseField('results') as unknown as Record<string, shapes.HoneycodeResultSet>;
  }

  public get workbookCursor(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getScreenData',
        service: 'Honeycode',
        physicalResourceId: cr.PhysicalResourceId.of('Honeycode.GetScreenData.workbookCursor'),
        outputPath: 'workbookCursor',
        parameters: {
          workbookId: this.__input.workbookId,
          appId: this.__input.appId,
          screenId: this.__input.screenId,
          variables: this.__input.variables,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetScreenData.workbookCursor', props);
    return resource.getResponseField('workbookCursor') as unknown as number;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getScreenData',
        service: 'Honeycode',
        physicalResourceId: cr.PhysicalResourceId.of('Honeycode.GetScreenData.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          workbookId: this.__input.workbookId,
          appId: this.__input.appId,
          screenId: this.__input.screenId,
          variables: this.__input.variables,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetScreenData.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class HoneycodeResponsesInvokeScreenAutomation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HoneycodeInvokeScreenAutomationRequest) {
  }

  public get workbookCursor(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'invokeScreenAutomation',
        service: 'Honeycode',
        physicalResourceId: cr.PhysicalResourceId.of('Honeycode.InvokeScreenAutomation.workbookCursor'),
        outputPath: 'workbookCursor',
        parameters: {
          workbookId: this.__input.workbookId,
          appId: this.__input.appId,
          screenId: this.__input.screenId,
          screenAutomationId: this.__input.screenAutomationId,
          variables: this.__input.variables,
          rowId: this.__input.rowId,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InvokeScreenAutomation.workbookCursor', props);
    return resource.getResponseField('workbookCursor') as unknown as number;
  }

}

export class HoneycodeResponsesListTableColumns {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HoneycodeListTableColumnsRequest) {
  }

  public get tableColumns(): shapes.HoneycodeTableColumn[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTableColumns',
        service: 'Honeycode',
        physicalResourceId: cr.PhysicalResourceId.of('Honeycode.ListTableColumns.tableColumns'),
        outputPath: 'tableColumns',
        parameters: {
          workbookId: this.__input.workbookId,
          tableId: this.__input.tableId,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTableColumns.tableColumns', props);
    return resource.getResponseField('tableColumns') as unknown as shapes.HoneycodeTableColumn[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTableColumns',
        service: 'Honeycode',
        physicalResourceId: cr.PhysicalResourceId.of('Honeycode.ListTableColumns.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          workbookId: this.__input.workbookId,
          tableId: this.__input.tableId,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTableColumns.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

  public get workbookCursor(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTableColumns',
        service: 'Honeycode',
        physicalResourceId: cr.PhysicalResourceId.of('Honeycode.ListTableColumns.workbookCursor'),
        outputPath: 'workbookCursor',
        parameters: {
          workbookId: this.__input.workbookId,
          tableId: this.__input.tableId,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTableColumns.workbookCursor', props);
    return resource.getResponseField('workbookCursor') as unknown as number;
  }

}

export class HoneycodeResponsesListTableRows {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HoneycodeListTableRowsRequest) {
  }

  public get columnIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTableRows',
        service: 'Honeycode',
        physicalResourceId: cr.PhysicalResourceId.of('Honeycode.ListTableRows.columnIds'),
        outputPath: 'columnIds',
        parameters: {
          workbookId: this.__input.workbookId,
          tableId: this.__input.tableId,
          rowIds: this.__input.rowIds,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTableRows.columnIds', props);
    return resource.getResponseField('columnIds') as unknown as string[];
  }

  public get rows(): shapes.HoneycodeTableRow[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTableRows',
        service: 'Honeycode',
        physicalResourceId: cr.PhysicalResourceId.of('Honeycode.ListTableRows.rows'),
        outputPath: 'rows',
        parameters: {
          workbookId: this.__input.workbookId,
          tableId: this.__input.tableId,
          rowIds: this.__input.rowIds,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTableRows.rows', props);
    return resource.getResponseField('rows') as unknown as shapes.HoneycodeTableRow[];
  }

  public get rowIdsNotFound(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTableRows',
        service: 'Honeycode',
        physicalResourceId: cr.PhysicalResourceId.of('Honeycode.ListTableRows.rowIdsNotFound'),
        outputPath: 'rowIdsNotFound',
        parameters: {
          workbookId: this.__input.workbookId,
          tableId: this.__input.tableId,
          rowIds: this.__input.rowIds,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTableRows.rowIdsNotFound', props);
    return resource.getResponseField('rowIdsNotFound') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTableRows',
        service: 'Honeycode',
        physicalResourceId: cr.PhysicalResourceId.of('Honeycode.ListTableRows.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          workbookId: this.__input.workbookId,
          tableId: this.__input.tableId,
          rowIds: this.__input.rowIds,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTableRows.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

  public get workbookCursor(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTableRows',
        service: 'Honeycode',
        physicalResourceId: cr.PhysicalResourceId.of('Honeycode.ListTableRows.workbookCursor'),
        outputPath: 'workbookCursor',
        parameters: {
          workbookId: this.__input.workbookId,
          tableId: this.__input.tableId,
          rowIds: this.__input.rowIds,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTableRows.workbookCursor', props);
    return resource.getResponseField('workbookCursor') as unknown as number;
  }

}

export class HoneycodeResponsesListTables {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HoneycodeListTablesRequest) {
  }

  public get tables(): shapes.HoneycodeTable[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTables',
        service: 'Honeycode',
        physicalResourceId: cr.PhysicalResourceId.of('Honeycode.ListTables.tables'),
        outputPath: 'tables',
        parameters: {
          workbookId: this.__input.workbookId,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTables.tables', props);
    return resource.getResponseField('tables') as unknown as shapes.HoneycodeTable[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTables',
        service: 'Honeycode',
        physicalResourceId: cr.PhysicalResourceId.of('Honeycode.ListTables.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          workbookId: this.__input.workbookId,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTables.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

  public get workbookCursor(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTables',
        service: 'Honeycode',
        physicalResourceId: cr.PhysicalResourceId.of('Honeycode.ListTables.workbookCursor'),
        outputPath: 'workbookCursor',
        parameters: {
          workbookId: this.__input.workbookId,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTables.workbookCursor', props);
    return resource.getResponseField('workbookCursor') as unknown as number;
  }

}

export class HoneycodeResponsesQueryTableRows {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HoneycodeQueryTableRowsRequest) {
  }

  public get columnIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'queryTableRows',
        service: 'Honeycode',
        physicalResourceId: cr.PhysicalResourceId.of('Honeycode.QueryTableRows.columnIds'),
        outputPath: 'columnIds',
        parameters: {
          workbookId: this.__input.workbookId,
          tableId: this.__input.tableId,
          filterFormula: {
            formula: this.__input.filterFormula.formula,
            contextRowId: this.__input.filterFormula.contextRowId,
          },
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'QueryTableRows.columnIds', props);
    return resource.getResponseField('columnIds') as unknown as string[];
  }

  public get rows(): shapes.HoneycodeTableRow[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'queryTableRows',
        service: 'Honeycode',
        physicalResourceId: cr.PhysicalResourceId.of('Honeycode.QueryTableRows.rows'),
        outputPath: 'rows',
        parameters: {
          workbookId: this.__input.workbookId,
          tableId: this.__input.tableId,
          filterFormula: {
            formula: this.__input.filterFormula.formula,
            contextRowId: this.__input.filterFormula.contextRowId,
          },
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'QueryTableRows.rows', props);
    return resource.getResponseField('rows') as unknown as shapes.HoneycodeTableRow[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'queryTableRows',
        service: 'Honeycode',
        physicalResourceId: cr.PhysicalResourceId.of('Honeycode.QueryTableRows.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          workbookId: this.__input.workbookId,
          tableId: this.__input.tableId,
          filterFormula: {
            formula: this.__input.filterFormula.formula,
            contextRowId: this.__input.filterFormula.contextRowId,
          },
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'QueryTableRows.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

  public get workbookCursor(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'queryTableRows',
        service: 'Honeycode',
        physicalResourceId: cr.PhysicalResourceId.of('Honeycode.QueryTableRows.workbookCursor'),
        outputPath: 'workbookCursor',
        parameters: {
          workbookId: this.__input.workbookId,
          tableId: this.__input.tableId,
          filterFormula: {
            formula: this.__input.filterFormula.formula,
            contextRowId: this.__input.filterFormula.contextRowId,
          },
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'QueryTableRows.workbookCursor', props);
    return resource.getResponseField('workbookCursor') as unknown as number;
  }

}

export class HoneycodeResponsesStartTableDataImportJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.HoneycodeStartTableDataImportJobRequest) {
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startTableDataImportJob',
        service: 'Honeycode',
        physicalResourceId: cr.PhysicalResourceId.of('Honeycode.StartTableDataImportJob.jobId'),
        outputPath: 'jobId',
        parameters: {
          workbookId: this.__input.workbookId,
          dataSource: {
            dataSourceConfig: {
              dataSourceUrl: this.__input.dataSource.dataSourceConfig.dataSourceUrl,
            },
          },
          dataFormat: this.__input.dataFormat,
          destinationTableId: this.__input.destinationTableId,
          importOptions: {
            destinationOptions: {
              columnMap: this.__input.importOptions.destinationOptions?.columnMap,
            },
            delimitedTextOptions: {
              delimiter: this.__input.importOptions.delimitedTextOptions?.delimiter,
              hasHeaderRow: this.__input.importOptions.delimitedTextOptions?.hasHeaderRow,
              ignoreEmptyRows: this.__input.importOptions.delimitedTextOptions?.ignoreEmptyRows,
              dataCharacterEncoding: this.__input.importOptions.delimitedTextOptions?.dataCharacterEncoding,
            },
          },
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartTableDataImportJob.jobId', props);
    return resource.getResponseField('jobId') as unknown as string;
  }

  public get jobStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startTableDataImportJob',
        service: 'Honeycode',
        physicalResourceId: cr.PhysicalResourceId.of('Honeycode.StartTableDataImportJob.jobStatus'),
        outputPath: 'jobStatus',
        parameters: {
          workbookId: this.__input.workbookId,
          dataSource: {
            dataSourceConfig: {
              dataSourceUrl: this.__input.dataSource.dataSourceConfig.dataSourceUrl,
            },
          },
          dataFormat: this.__input.dataFormat,
          destinationTableId: this.__input.destinationTableId,
          importOptions: {
            destinationOptions: {
              columnMap: this.__input.importOptions.destinationOptions?.columnMap,
            },
            delimitedTextOptions: {
              delimiter: this.__input.importOptions.delimitedTextOptions?.delimiter,
              hasHeaderRow: this.__input.importOptions.delimitedTextOptions?.hasHeaderRow,
              ignoreEmptyRows: this.__input.importOptions.delimitedTextOptions?.ignoreEmptyRows,
              dataCharacterEncoding: this.__input.importOptions.delimitedTextOptions?.dataCharacterEncoding,
            },
          },
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartTableDataImportJob.jobStatus', props);
    return resource.getResponseField('jobStatus') as unknown as string;
  }

}

