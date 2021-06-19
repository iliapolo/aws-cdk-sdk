import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class DiscoveryClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public associateConfigurationItemsToApplication(input: shapes.DiscoveryAssociateConfigurationItemsToApplicationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateConfigurationItemsToApplication',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.AssociateConfigurationItemsToApplication'),
        parameters: {
          applicationConfigurationId: input.applicationConfigurationId,
          configurationIds: input.configurationIds,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssociateConfigurationItemsToApplication', props);
  }

  public batchDeleteImportData(input: shapes.DiscoveryBatchDeleteImportDataRequest): DiscoveryResponsesBatchDeleteImportData {
    return new DiscoveryResponsesBatchDeleteImportData(this, this.__resources, input);
  }

  public createApplication(input: shapes.DiscoveryCreateApplicationRequest): DiscoveryResponsesCreateApplication {
    return new DiscoveryResponsesCreateApplication(this, this.__resources, input);
  }

  public createTags(input: shapes.DiscoveryCreateTagsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTags',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.CreateTags'),
        parameters: {
          configurationIds: input.configurationIds,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateTags', props);
  }

  public deleteApplications(input: shapes.DiscoveryDeleteApplicationsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApplications',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.DeleteApplications'),
        parameters: {
          configurationIds: input.configurationIds,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteApplications', props);
  }

  public deleteTags(input: shapes.DiscoveryDeleteTagsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTags',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.DeleteTags'),
        parameters: {
          configurationIds: input.configurationIds,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteTags', props);
  }

  public describeAgents(input: shapes.DiscoveryDescribeAgentsRequest): DiscoveryResponsesDescribeAgents {
    return new DiscoveryResponsesDescribeAgents(this, this.__resources, input);
  }

  public describeConfigurations(input: shapes.DiscoveryDescribeConfigurationsRequest): DiscoveryResponsesDescribeConfigurations {
    return new DiscoveryResponsesDescribeConfigurations(this, this.__resources, input);
  }

  public describeContinuousExports(input: shapes.DiscoveryDescribeContinuousExportsRequest): DiscoveryResponsesDescribeContinuousExports {
    return new DiscoveryResponsesDescribeContinuousExports(this, this.__resources, input);
  }

  public describeExportConfigurations(input: shapes.DiscoveryDescribeExportConfigurationsRequest): DiscoveryResponsesDescribeExportConfigurations {
    return new DiscoveryResponsesDescribeExportConfigurations(this, this.__resources, input);
  }

  public describeExportTasks(input: shapes.DiscoveryDescribeExportTasksRequest): DiscoveryResponsesDescribeExportTasks {
    return new DiscoveryResponsesDescribeExportTasks(this, this.__resources, input);
  }

  public describeImportTasks(input: shapes.DiscoveryDescribeImportTasksRequest): DiscoveryResponsesDescribeImportTasks {
    return new DiscoveryResponsesDescribeImportTasks(this, this.__resources, input);
  }

  public describeTags(input: shapes.DiscoveryDescribeTagsRequest): DiscoveryResponsesDescribeTags {
    return new DiscoveryResponsesDescribeTags(this, this.__resources, input);
  }

  public disassociateConfigurationItemsFromApplication(input: shapes.DiscoveryDisassociateConfigurationItemsFromApplicationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateConfigurationItemsFromApplication',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.DisassociateConfigurationItemsFromApplication'),
        parameters: {
          applicationConfigurationId: input.applicationConfigurationId,
          configurationIds: input.configurationIds,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateConfigurationItemsFromApplication', props);
  }

  public exportConfigurations(): DiscoveryResponsesExportConfigurations {
    return new DiscoveryResponsesExportConfigurations(this, this.__resources);
  }

  public fetchDiscoverySummary(): DiscoveryResponsesFetchDiscoverySummary {
    return new DiscoveryResponsesFetchDiscoverySummary(this, this.__resources);
  }

  public listConfigurations(input: shapes.DiscoveryListConfigurationsRequest): DiscoveryResponsesListConfigurations {
    return new DiscoveryResponsesListConfigurations(this, this.__resources, input);
  }

  public listServerNeighbors(input: shapes.DiscoveryListServerNeighborsRequest): DiscoveryResponsesListServerNeighbors {
    return new DiscoveryResponsesListServerNeighbors(this, this.__resources, input);
  }

  public startContinuousExport(): DiscoveryResponsesStartContinuousExport {
    return new DiscoveryResponsesStartContinuousExport(this, this.__resources);
  }

  public startDataCollectionByAgentIds(input: shapes.DiscoveryStartDataCollectionByAgentIdsRequest): DiscoveryResponsesStartDataCollectionByAgentIds {
    return new DiscoveryResponsesStartDataCollectionByAgentIds(this, this.__resources, input);
  }

  public startExportTask(input: shapes.DiscoveryStartExportTaskRequest): DiscoveryResponsesStartExportTask {
    return new DiscoveryResponsesStartExportTask(this, this.__resources, input);
  }

  public startImportTask(input: shapes.DiscoveryStartImportTaskRequest): DiscoveryResponsesStartImportTask {
    return new DiscoveryResponsesStartImportTask(this, this.__resources, input);
  }

  public stopContinuousExport(input: shapes.DiscoveryStopContinuousExportRequest): DiscoveryResponsesStopContinuousExport {
    return new DiscoveryResponsesStopContinuousExport(this, this.__resources, input);
  }

  public stopDataCollectionByAgentIds(input: shapes.DiscoveryStopDataCollectionByAgentIdsRequest): DiscoveryResponsesStopDataCollectionByAgentIds {
    return new DiscoveryResponsesStopDataCollectionByAgentIds(this, this.__resources, input);
  }

  public updateApplication(input: shapes.DiscoveryUpdateApplicationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApplication',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.UpdateApplication'),
        parameters: {
          configurationId: input.configurationId,
          name: input.name,
          description: input.description,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateApplication', props);
  }

}

export class DiscoveryResponsesBatchDeleteImportData {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DiscoveryBatchDeleteImportDataRequest) {
  }

  public get errors(): shapes.DiscoveryBatchDeleteImportDataError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDeleteImportData',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.BatchDeleteImportData.errors'),
        outputPath: 'errors',
        parameters: {
          importTaskIds: this.__input.importTaskIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDeleteImportData.errors', props);
    return resource.getResponseField('errors') as unknown as shapes.DiscoveryBatchDeleteImportDataError[];
  }

}

export class DiscoveryResponsesCreateApplication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DiscoveryCreateApplicationRequest) {
  }

  public get configurationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApplication',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.CreateApplication.configurationId'),
        outputPath: 'configurationId',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApplication.configurationId', props);
    return resource.getResponseField('configurationId') as unknown as string;
  }

}

export class DiscoveryResponsesDescribeAgents {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DiscoveryDescribeAgentsRequest) {
  }

  public get agentsInfo(): shapes.DiscoveryAgentInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAgents',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.DescribeAgents.agentsInfo'),
        outputPath: 'agentsInfo',
        parameters: {
          agentIds: this.__input.agentIds,
          filters: this.__input.filters,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAgents.agentsInfo', props);
    return resource.getResponseField('agentsInfo') as unknown as shapes.DiscoveryAgentInfo[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAgents',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.DescribeAgents.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          agentIds: this.__input.agentIds,
          filters: this.__input.filters,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAgents.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DiscoveryResponsesDescribeConfigurations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DiscoveryDescribeConfigurationsRequest) {
  }

  public get configurations(): Record<string, string>[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConfigurations',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.DescribeConfigurations.configurations'),
        outputPath: 'configurations',
        parameters: {
          configurationIds: this.__input.configurationIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConfigurations.configurations', props);
    return resource.getResponseField('configurations') as unknown as Record<string, string>[];
  }

}

export class DiscoveryResponsesDescribeContinuousExports {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DiscoveryDescribeContinuousExportsRequest) {
  }

  public get descriptions(): shapes.DiscoveryContinuousExportDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeContinuousExports',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.DescribeContinuousExports.descriptions'),
        outputPath: 'descriptions',
        parameters: {
          exportIds: this.__input.exportIds,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeContinuousExports.descriptions', props);
    return resource.getResponseField('descriptions') as unknown as shapes.DiscoveryContinuousExportDescription[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeContinuousExports',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.DescribeContinuousExports.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          exportIds: this.__input.exportIds,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeContinuousExports.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DiscoveryResponsesDescribeExportConfigurations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DiscoveryDescribeExportConfigurationsRequest) {
  }

  public get exportsInfo(): shapes.DiscoveryExportInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeExportConfigurations',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.DescribeExportConfigurations.exportsInfo'),
        outputPath: 'exportsInfo',
        parameters: {
          exportIds: this.__input.exportIds,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeExportConfigurations.exportsInfo', props);
    return resource.getResponseField('exportsInfo') as unknown as shapes.DiscoveryExportInfo[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeExportConfigurations',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.DescribeExportConfigurations.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          exportIds: this.__input.exportIds,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeExportConfigurations.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DiscoveryResponsesDescribeExportTasks {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DiscoveryDescribeExportTasksRequest) {
  }

  public get exportsInfo(): shapes.DiscoveryExportInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeExportTasks',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.DescribeExportTasks.exportsInfo'),
        outputPath: 'exportsInfo',
        parameters: {
          exportIds: this.__input.exportIds,
          filters: this.__input.filters,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeExportTasks.exportsInfo', props);
    return resource.getResponseField('exportsInfo') as unknown as shapes.DiscoveryExportInfo[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeExportTasks',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.DescribeExportTasks.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          exportIds: this.__input.exportIds,
          filters: this.__input.filters,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeExportTasks.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DiscoveryResponsesDescribeImportTasks {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DiscoveryDescribeImportTasksRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeImportTasks',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.DescribeImportTasks.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          filters: this.__input.filters,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeImportTasks.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

  public get tasks(): shapes.DiscoveryImportTask[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeImportTasks',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.DescribeImportTasks.tasks'),
        outputPath: 'tasks',
        parameters: {
          filters: this.__input.filters,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeImportTasks.tasks', props);
    return resource.getResponseField('tasks') as unknown as shapes.DiscoveryImportTask[];
  }

}

export class DiscoveryResponsesDescribeTags {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DiscoveryDescribeTagsRequest) {
  }

  public get tags(): shapes.DiscoveryConfigurationTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTags',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.DescribeTags.tags'),
        outputPath: 'tags',
        parameters: {
          filters: this.__input.filters,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTags.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.DiscoveryConfigurationTag[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTags',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.DescribeTags.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          filters: this.__input.filters,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTags.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DiscoveryResponsesExportConfigurations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get exportId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportConfigurations',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.ExportConfigurations.exportId'),
        outputPath: 'exportId',
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportConfigurations.exportId', props);
    return resource.getResponseField('exportId') as unknown as string;
  }

}

export class DiscoveryResponsesFetchDiscoverySummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get servers(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDiscoverySummary',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.GetDiscoverySummary.servers'),
        outputPath: 'servers',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDiscoverySummary.servers', props);
    return resource.getResponseField('servers') as unknown as number;
  }

  public get applications(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDiscoverySummary',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.GetDiscoverySummary.applications'),
        outputPath: 'applications',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDiscoverySummary.applications', props);
    return resource.getResponseField('applications') as unknown as number;
  }

  public get serversMappedToApplications(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDiscoverySummary',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.GetDiscoverySummary.serversMappedToApplications'),
        outputPath: 'serversMappedToApplications',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDiscoverySummary.serversMappedToApplications', props);
    return resource.getResponseField('serversMappedToApplications') as unknown as number;
  }

  public get serversMappedtoTags(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDiscoverySummary',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.GetDiscoverySummary.serversMappedtoTags'),
        outputPath: 'serversMappedtoTags',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDiscoverySummary.serversMappedtoTags', props);
    return resource.getResponseField('serversMappedtoTags') as unknown as number;
  }

  public get agentSummary(): DiscoveryResponsesFetchDiscoverySummaryAgentSummary {
    return new DiscoveryResponsesFetchDiscoverySummaryAgentSummary(this.__scope, this.__resources);
  }

  public get connectorSummary(): DiscoveryResponsesFetchDiscoverySummaryConnectorSummary {
    return new DiscoveryResponsesFetchDiscoverySummaryConnectorSummary(this.__scope, this.__resources);
  }

}

export class DiscoveryResponsesFetchDiscoverySummaryAgentSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get activeAgents(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDiscoverySummary',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.GetDiscoverySummary.agentSummary.activeAgents'),
        outputPath: 'agentSummary.activeAgents',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDiscoverySummary.agentSummary.activeAgents', props);
    return resource.getResponseField('agentSummary.activeAgents') as unknown as number;
  }

  public get healthyAgents(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDiscoverySummary',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.GetDiscoverySummary.agentSummary.healthyAgents'),
        outputPath: 'agentSummary.healthyAgents',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDiscoverySummary.agentSummary.healthyAgents', props);
    return resource.getResponseField('agentSummary.healthyAgents') as unknown as number;
  }

  public get blackListedAgents(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDiscoverySummary',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.GetDiscoverySummary.agentSummary.blackListedAgents'),
        outputPath: 'agentSummary.blackListedAgents',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDiscoverySummary.agentSummary.blackListedAgents', props);
    return resource.getResponseField('agentSummary.blackListedAgents') as unknown as number;
  }

  public get shutdownAgents(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDiscoverySummary',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.GetDiscoverySummary.agentSummary.shutdownAgents'),
        outputPath: 'agentSummary.shutdownAgents',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDiscoverySummary.agentSummary.shutdownAgents', props);
    return resource.getResponseField('agentSummary.shutdownAgents') as unknown as number;
  }

  public get unhealthyAgents(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDiscoverySummary',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.GetDiscoverySummary.agentSummary.unhealthyAgents'),
        outputPath: 'agentSummary.unhealthyAgents',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDiscoverySummary.agentSummary.unhealthyAgents', props);
    return resource.getResponseField('agentSummary.unhealthyAgents') as unknown as number;
  }

  public get totalAgents(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDiscoverySummary',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.GetDiscoverySummary.agentSummary.totalAgents'),
        outputPath: 'agentSummary.totalAgents',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDiscoverySummary.agentSummary.totalAgents', props);
    return resource.getResponseField('agentSummary.totalAgents') as unknown as number;
  }

  public get unknownAgents(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDiscoverySummary',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.GetDiscoverySummary.agentSummary.unknownAgents'),
        outputPath: 'agentSummary.unknownAgents',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDiscoverySummary.agentSummary.unknownAgents', props);
    return resource.getResponseField('agentSummary.unknownAgents') as unknown as number;
  }

}

export class DiscoveryResponsesFetchDiscoverySummaryConnectorSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get activeConnectors(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDiscoverySummary',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.GetDiscoverySummary.connectorSummary.activeConnectors'),
        outputPath: 'connectorSummary.activeConnectors',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDiscoverySummary.connectorSummary.activeConnectors', props);
    return resource.getResponseField('connectorSummary.activeConnectors') as unknown as number;
  }

  public get healthyConnectors(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDiscoverySummary',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.GetDiscoverySummary.connectorSummary.healthyConnectors'),
        outputPath: 'connectorSummary.healthyConnectors',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDiscoverySummary.connectorSummary.healthyConnectors', props);
    return resource.getResponseField('connectorSummary.healthyConnectors') as unknown as number;
  }

  public get blackListedConnectors(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDiscoverySummary',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.GetDiscoverySummary.connectorSummary.blackListedConnectors'),
        outputPath: 'connectorSummary.blackListedConnectors',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDiscoverySummary.connectorSummary.blackListedConnectors', props);
    return resource.getResponseField('connectorSummary.blackListedConnectors') as unknown as number;
  }

  public get shutdownConnectors(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDiscoverySummary',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.GetDiscoverySummary.connectorSummary.shutdownConnectors'),
        outputPath: 'connectorSummary.shutdownConnectors',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDiscoverySummary.connectorSummary.shutdownConnectors', props);
    return resource.getResponseField('connectorSummary.shutdownConnectors') as unknown as number;
  }

  public get unhealthyConnectors(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDiscoverySummary',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.GetDiscoverySummary.connectorSummary.unhealthyConnectors'),
        outputPath: 'connectorSummary.unhealthyConnectors',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDiscoverySummary.connectorSummary.unhealthyConnectors', props);
    return resource.getResponseField('connectorSummary.unhealthyConnectors') as unknown as number;
  }

  public get totalConnectors(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDiscoverySummary',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.GetDiscoverySummary.connectorSummary.totalConnectors'),
        outputPath: 'connectorSummary.totalConnectors',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDiscoverySummary.connectorSummary.totalConnectors', props);
    return resource.getResponseField('connectorSummary.totalConnectors') as unknown as number;
  }

  public get unknownConnectors(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDiscoverySummary',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.GetDiscoverySummary.connectorSummary.unknownConnectors'),
        outputPath: 'connectorSummary.unknownConnectors',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDiscoverySummary.connectorSummary.unknownConnectors', props);
    return resource.getResponseField('connectorSummary.unknownConnectors') as unknown as number;
  }

}

export class DiscoveryResponsesListConfigurations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DiscoveryListConfigurationsRequest) {
  }

  public get configurations(): Record<string, string>[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listConfigurations',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.ListConfigurations.configurations'),
        outputPath: 'configurations',
        parameters: {
          configurationType: this.__input.configurationType,
          filters: this.__input.filters,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          orderBy: this.__input.orderBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListConfigurations.configurations', props);
    return resource.getResponseField('configurations') as unknown as Record<string, string>[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listConfigurations',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.ListConfigurations.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          configurationType: this.__input.configurationType,
          filters: this.__input.filters,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          orderBy: this.__input.orderBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListConfigurations.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DiscoveryResponsesListServerNeighbors {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DiscoveryListServerNeighborsRequest) {
  }

  public get neighbors(): shapes.DiscoveryNeighborConnectionDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listServerNeighbors',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.ListServerNeighbors.neighbors'),
        outputPath: 'neighbors',
        parameters: {
          configurationId: this.__input.configurationId,
          portInformationNeeded: this.__input.portInformationNeeded,
          neighborConfigurationIds: this.__input.neighborConfigurationIds,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListServerNeighbors.neighbors', props);
    return resource.getResponseField('neighbors') as unknown as shapes.DiscoveryNeighborConnectionDetail[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listServerNeighbors',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.ListServerNeighbors.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          configurationId: this.__input.configurationId,
          portInformationNeeded: this.__input.portInformationNeeded,
          neighborConfigurationIds: this.__input.neighborConfigurationIds,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListServerNeighbors.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

  public get knownDependencyCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listServerNeighbors',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.ListServerNeighbors.knownDependencyCount'),
        outputPath: 'knownDependencyCount',
        parameters: {
          configurationId: this.__input.configurationId,
          portInformationNeeded: this.__input.portInformationNeeded,
          neighborConfigurationIds: this.__input.neighborConfigurationIds,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListServerNeighbors.knownDependencyCount', props);
    return resource.getResponseField('knownDependencyCount') as unknown as number;
  }

}

export class DiscoveryResponsesStartContinuousExport {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get exportId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startContinuousExport',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.StartContinuousExport.exportId'),
        outputPath: 'exportId',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartContinuousExport.exportId', props);
    return resource.getResponseField('exportId') as unknown as string;
  }

  public get s3Bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startContinuousExport',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.StartContinuousExport.s3Bucket'),
        outputPath: 's3Bucket',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartContinuousExport.s3Bucket', props);
    return resource.getResponseField('s3Bucket') as unknown as string;
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startContinuousExport',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.StartContinuousExport.startTime'),
        outputPath: 'startTime',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartContinuousExport.startTime', props);
    return resource.getResponseField('startTime') as unknown as string;
  }

  public get dataSource(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startContinuousExport',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.StartContinuousExport.dataSource'),
        outputPath: 'dataSource',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartContinuousExport.dataSource', props);
    return resource.getResponseField('dataSource') as unknown as string;
  }

  public get schemaStorageConfig(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startContinuousExport',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.StartContinuousExport.schemaStorageConfig'),
        outputPath: 'schemaStorageConfig',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartContinuousExport.schemaStorageConfig', props);
    return resource.getResponseField('schemaStorageConfig') as unknown as Record<string, string>;
  }

}

export class DiscoveryResponsesStartDataCollectionByAgentIds {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DiscoveryStartDataCollectionByAgentIdsRequest) {
  }

  public get agentsConfigurationStatus(): shapes.DiscoveryAgentConfigurationStatus[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDataCollectionByAgentIds',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.StartDataCollectionByAgentIds.agentsConfigurationStatus'),
        outputPath: 'agentsConfigurationStatus',
        parameters: {
          agentIds: this.__input.agentIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDataCollectionByAgentIds.agentsConfigurationStatus', props);
    return resource.getResponseField('agentsConfigurationStatus') as unknown as shapes.DiscoveryAgentConfigurationStatus[];
  }

}

export class DiscoveryResponsesStartExportTask {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DiscoveryStartExportTaskRequest) {
  }

  public get exportId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startExportTask',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.StartExportTask.exportId'),
        outputPath: 'exportId',
        parameters: {
          exportDataFormat: this.__input.exportDataFormat,
          filters: this.__input.filters,
          startTime: this.__input.startTime,
          endTime: this.__input.endTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartExportTask.exportId', props);
    return resource.getResponseField('exportId') as unknown as string;
  }

}

export class DiscoveryResponsesStartImportTask {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DiscoveryStartImportTaskRequest) {
  }

  public get task(): DiscoveryResponsesStartImportTaskTask {
    return new DiscoveryResponsesStartImportTaskTask(this.__scope, this.__resources, this.__input);
  }

}

export class DiscoveryResponsesStartImportTaskTask {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DiscoveryStartImportTaskRequest) {
  }

  public get importTaskId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startImportTask',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.StartImportTask.task.importTaskId'),
        outputPath: 'task.importTaskId',
        parameters: {
          clientRequestToken: this.__input.clientRequestToken,
          name: this.__input.name,
          importUrl: this.__input.importUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartImportTask.task.importTaskId', props);
    return resource.getResponseField('task.importTaskId') as unknown as string;
  }

  public get clientRequestToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startImportTask',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.StartImportTask.task.clientRequestToken'),
        outputPath: 'task.clientRequestToken',
        parameters: {
          clientRequestToken: this.__input.clientRequestToken,
          name: this.__input.name,
          importUrl: this.__input.importUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartImportTask.task.clientRequestToken', props);
    return resource.getResponseField('task.clientRequestToken') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startImportTask',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.StartImportTask.task.name'),
        outputPath: 'task.name',
        parameters: {
          clientRequestToken: this.__input.clientRequestToken,
          name: this.__input.name,
          importUrl: this.__input.importUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartImportTask.task.name', props);
    return resource.getResponseField('task.name') as unknown as string;
  }

  public get importUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startImportTask',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.StartImportTask.task.importUrl'),
        outputPath: 'task.importUrl',
        parameters: {
          clientRequestToken: this.__input.clientRequestToken,
          name: this.__input.name,
          importUrl: this.__input.importUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartImportTask.task.importUrl', props);
    return resource.getResponseField('task.importUrl') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startImportTask',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.StartImportTask.task.status'),
        outputPath: 'task.status',
        parameters: {
          clientRequestToken: this.__input.clientRequestToken,
          name: this.__input.name,
          importUrl: this.__input.importUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartImportTask.task.status', props);
    return resource.getResponseField('task.status') as unknown as string;
  }

  public get importRequestTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startImportTask',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.StartImportTask.task.importRequestTime'),
        outputPath: 'task.importRequestTime',
        parameters: {
          clientRequestToken: this.__input.clientRequestToken,
          name: this.__input.name,
          importUrl: this.__input.importUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartImportTask.task.importRequestTime', props);
    return resource.getResponseField('task.importRequestTime') as unknown as string;
  }

  public get importCompletionTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startImportTask',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.StartImportTask.task.importCompletionTime'),
        outputPath: 'task.importCompletionTime',
        parameters: {
          clientRequestToken: this.__input.clientRequestToken,
          name: this.__input.name,
          importUrl: this.__input.importUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartImportTask.task.importCompletionTime', props);
    return resource.getResponseField('task.importCompletionTime') as unknown as string;
  }

  public get importDeletedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startImportTask',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.StartImportTask.task.importDeletedTime'),
        outputPath: 'task.importDeletedTime',
        parameters: {
          clientRequestToken: this.__input.clientRequestToken,
          name: this.__input.name,
          importUrl: this.__input.importUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartImportTask.task.importDeletedTime', props);
    return resource.getResponseField('task.importDeletedTime') as unknown as string;
  }

  public get serverImportSuccess(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startImportTask',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.StartImportTask.task.serverImportSuccess'),
        outputPath: 'task.serverImportSuccess',
        parameters: {
          clientRequestToken: this.__input.clientRequestToken,
          name: this.__input.name,
          importUrl: this.__input.importUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartImportTask.task.serverImportSuccess', props);
    return resource.getResponseField('task.serverImportSuccess') as unknown as number;
  }

  public get serverImportFailure(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startImportTask',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.StartImportTask.task.serverImportFailure'),
        outputPath: 'task.serverImportFailure',
        parameters: {
          clientRequestToken: this.__input.clientRequestToken,
          name: this.__input.name,
          importUrl: this.__input.importUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartImportTask.task.serverImportFailure', props);
    return resource.getResponseField('task.serverImportFailure') as unknown as number;
  }

  public get applicationImportSuccess(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startImportTask',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.StartImportTask.task.applicationImportSuccess'),
        outputPath: 'task.applicationImportSuccess',
        parameters: {
          clientRequestToken: this.__input.clientRequestToken,
          name: this.__input.name,
          importUrl: this.__input.importUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartImportTask.task.applicationImportSuccess', props);
    return resource.getResponseField('task.applicationImportSuccess') as unknown as number;
  }

  public get applicationImportFailure(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startImportTask',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.StartImportTask.task.applicationImportFailure'),
        outputPath: 'task.applicationImportFailure',
        parameters: {
          clientRequestToken: this.__input.clientRequestToken,
          name: this.__input.name,
          importUrl: this.__input.importUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartImportTask.task.applicationImportFailure', props);
    return resource.getResponseField('task.applicationImportFailure') as unknown as number;
  }

  public get errorsAndFailedEntriesZip(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startImportTask',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.StartImportTask.task.errorsAndFailedEntriesZip'),
        outputPath: 'task.errorsAndFailedEntriesZip',
        parameters: {
          clientRequestToken: this.__input.clientRequestToken,
          name: this.__input.name,
          importUrl: this.__input.importUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartImportTask.task.errorsAndFailedEntriesZip', props);
    return resource.getResponseField('task.errorsAndFailedEntriesZip') as unknown as string;
  }

}

export class DiscoveryResponsesStopContinuousExport {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DiscoveryStopContinuousExportRequest) {
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopContinuousExport',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.StopContinuousExport.startTime'),
        outputPath: 'startTime',
        parameters: {
          exportId: this.__input.exportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopContinuousExport.startTime', props);
    return resource.getResponseField('startTime') as unknown as string;
  }

  public get stopTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopContinuousExport',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.StopContinuousExport.stopTime'),
        outputPath: 'stopTime',
        parameters: {
          exportId: this.__input.exportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopContinuousExport.stopTime', props);
    return resource.getResponseField('stopTime') as unknown as string;
  }

}

export class DiscoveryResponsesStopDataCollectionByAgentIds {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DiscoveryStopDataCollectionByAgentIdsRequest) {
  }

  public get agentsConfigurationStatus(): shapes.DiscoveryAgentConfigurationStatus[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDataCollectionByAgentIds',
        service: 'Discovery',
        physicalResourceId: cr.PhysicalResourceId.of('Discovery.StopDataCollectionByAgentIds.agentsConfigurationStatus'),
        outputPath: 'agentsConfigurationStatus',
        parameters: {
          agentIds: this.__input.agentIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDataCollectionByAgentIds.agentsConfigurationStatus', props);
    return resource.getResponseField('agentsConfigurationStatus') as unknown as shapes.DiscoveryAgentConfigurationStatus[];
  }

}

