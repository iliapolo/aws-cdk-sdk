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

  public batchDeleteImportData(input: shapes.DiscoveryBatchDeleteImportDataRequest): DiscoveryBatchDeleteImportData {
    return new DiscoveryBatchDeleteImportData(this, 'BatchDeleteImportData', this.__resources, input);
  }

  public createApplication(input: shapes.DiscoveryCreateApplicationRequest): DiscoveryCreateApplication {
    return new DiscoveryCreateApplication(this, 'CreateApplication', this.__resources, input);
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

  public describeAgents(input: shapes.DiscoveryDescribeAgentsRequest): DiscoveryDescribeAgents {
    return new DiscoveryDescribeAgents(this, 'DescribeAgents', this.__resources, input);
  }

  public describeConfigurations(input: shapes.DiscoveryDescribeConfigurationsRequest): DiscoveryDescribeConfigurations {
    return new DiscoveryDescribeConfigurations(this, 'DescribeConfigurations', this.__resources, input);
  }

  public describeContinuousExports(input: shapes.DiscoveryDescribeContinuousExportsRequest): DiscoveryDescribeContinuousExports {
    return new DiscoveryDescribeContinuousExports(this, 'DescribeContinuousExports', this.__resources, input);
  }

  public describeExportConfigurations(input: shapes.DiscoveryDescribeExportConfigurationsRequest): DiscoveryDescribeExportConfigurations {
    return new DiscoveryDescribeExportConfigurations(this, 'DescribeExportConfigurations', this.__resources, input);
  }

  public describeExportTasks(input: shapes.DiscoveryDescribeExportTasksRequest): DiscoveryDescribeExportTasks {
    return new DiscoveryDescribeExportTasks(this, 'DescribeExportTasks', this.__resources, input);
  }

  public describeImportTasks(input: shapes.DiscoveryDescribeImportTasksRequest): DiscoveryDescribeImportTasks {
    return new DiscoveryDescribeImportTasks(this, 'DescribeImportTasks', this.__resources, input);
  }

  public describeTags(input: shapes.DiscoveryDescribeTagsRequest): DiscoveryDescribeTags {
    return new DiscoveryDescribeTags(this, 'DescribeTags', this.__resources, input);
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

  public exportConfigurations(): DiscoveryExportConfigurations {
    return new DiscoveryExportConfigurations(this, 'ExportConfigurations', this.__resources);
  }

  public fetchDiscoverySummary(): DiscoveryFetchDiscoverySummary {
    return new DiscoveryFetchDiscoverySummary(this, 'FetchDiscoverySummary', this.__resources);
  }

  public listConfigurations(input: shapes.DiscoveryListConfigurationsRequest): DiscoveryListConfigurations {
    return new DiscoveryListConfigurations(this, 'ListConfigurations', this.__resources, input);
  }

  public listServerNeighbors(input: shapes.DiscoveryListServerNeighborsRequest): DiscoveryListServerNeighbors {
    return new DiscoveryListServerNeighbors(this, 'ListServerNeighbors', this.__resources, input);
  }

  public startContinuousExport(): DiscoveryStartContinuousExport {
    return new DiscoveryStartContinuousExport(this, 'StartContinuousExport', this.__resources);
  }

  public startDataCollectionByAgentIds(input: shapes.DiscoveryStartDataCollectionByAgentIdsRequest): DiscoveryStartDataCollectionByAgentIds {
    return new DiscoveryStartDataCollectionByAgentIds(this, 'StartDataCollectionByAgentIds', this.__resources, input);
  }

  public startExportTask(input: shapes.DiscoveryStartExportTaskRequest): DiscoveryStartExportTask {
    return new DiscoveryStartExportTask(this, 'StartExportTask', this.__resources, input);
  }

  public startImportTask(input: shapes.DiscoveryStartImportTaskRequest): DiscoveryStartImportTask {
    return new DiscoveryStartImportTask(this, 'StartImportTask', this.__resources, input);
  }

  public stopContinuousExport(input: shapes.DiscoveryStopContinuousExportRequest): DiscoveryStopContinuousExport {
    return new DiscoveryStopContinuousExport(this, 'StopContinuousExport', this.__resources, input);
  }

  public stopDataCollectionByAgentIds(input: shapes.DiscoveryStopDataCollectionByAgentIdsRequest): DiscoveryStopDataCollectionByAgentIds {
    return new DiscoveryStopDataCollectionByAgentIds(this, 'StopDataCollectionByAgentIds', this.__resources, input);
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

export class DiscoveryBatchDeleteImportData extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DiscoveryBatchDeleteImportDataRequest) {
    super(scope, id);
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
          importTaskIds: this.input.importTaskIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchDeleteImportData.errors', props);
    return resource.getResponseField('errors') as unknown as shapes.DiscoveryBatchDeleteImportDataError[];
  }

}

export class DiscoveryCreateApplication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DiscoveryCreateApplicationRequest) {
    super(scope, id);
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
          name: this.input.name,
          description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApplication.configurationId', props);
    return resource.getResponseField('configurationId') as unknown as string;
  }

}

export class DiscoveryDescribeAgents extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DiscoveryDescribeAgentsRequest) {
    super(scope, id);
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
          agentIds: this.input.agentIds,
          filters: this.input.filters,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAgents.agentsInfo', props);
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
          agentIds: this.input.agentIds,
          filters: this.input.filters,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAgents.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DiscoveryDescribeConfigurations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DiscoveryDescribeConfigurationsRequest) {
    super(scope, id);
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
          configurationIds: this.input.configurationIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConfigurations.configurations', props);
    return resource.getResponseField('configurations') as unknown as Record<string, string>[];
  }

}

export class DiscoveryDescribeContinuousExports extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DiscoveryDescribeContinuousExportsRequest) {
    super(scope, id);
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
          exportIds: this.input.exportIds,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeContinuousExports.descriptions', props);
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
          exportIds: this.input.exportIds,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeContinuousExports.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DiscoveryDescribeExportConfigurations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DiscoveryDescribeExportConfigurationsRequest) {
    super(scope, id);
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
          exportIds: this.input.exportIds,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeExportConfigurations.exportsInfo', props);
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
          exportIds: this.input.exportIds,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeExportConfigurations.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DiscoveryDescribeExportTasks extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DiscoveryDescribeExportTasksRequest) {
    super(scope, id);
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
          exportIds: this.input.exportIds,
          filters: this.input.filters,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeExportTasks.exportsInfo', props);
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
          exportIds: this.input.exportIds,
          filters: this.input.filters,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeExportTasks.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DiscoveryDescribeImportTasks extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DiscoveryDescribeImportTasksRequest) {
    super(scope, id);
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
          filters: this.input.filters,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeImportTasks.nextToken', props);
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
          filters: this.input.filters,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeImportTasks.tasks', props);
    return resource.getResponseField('tasks') as unknown as shapes.DiscoveryImportTask[];
  }

}

export class DiscoveryDescribeTags extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DiscoveryDescribeTagsRequest) {
    super(scope, id);
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
          filters: this.input.filters,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTags.tags', props);
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
          filters: this.input.filters,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTags.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DiscoveryExportConfigurations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'ExportConfigurations.exportId', props);
    return resource.getResponseField('exportId') as unknown as string;
  }

}

export class DiscoveryFetchDiscoverySummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetDiscoverySummary.servers', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetDiscoverySummary.applications', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetDiscoverySummary.serversMappedToApplications', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetDiscoverySummary.serversMappedtoTags', props);
    return resource.getResponseField('serversMappedtoTags') as unknown as number;
  }

  public get agentSummary(): DiscoveryFetchDiscoverySummaryAgentSummary {
    return new DiscoveryFetchDiscoverySummaryAgentSummary(this, 'AgentSummary', this.__resources);
  }

  public get connectorSummary(): DiscoveryFetchDiscoverySummaryConnectorSummary {
    return new DiscoveryFetchDiscoverySummaryConnectorSummary(this, 'ConnectorSummary', this.__resources);
  }

}

export class DiscoveryFetchDiscoverySummaryAgentSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetDiscoverySummary.agentSummary.activeAgents', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetDiscoverySummary.agentSummary.healthyAgents', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetDiscoverySummary.agentSummary.blackListedAgents', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetDiscoverySummary.agentSummary.shutdownAgents', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetDiscoverySummary.agentSummary.unhealthyAgents', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetDiscoverySummary.agentSummary.totalAgents', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetDiscoverySummary.agentSummary.unknownAgents', props);
    return resource.getResponseField('agentSummary.unknownAgents') as unknown as number;
  }

}

export class DiscoveryFetchDiscoverySummaryConnectorSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetDiscoverySummary.connectorSummary.activeConnectors', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetDiscoverySummary.connectorSummary.healthyConnectors', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetDiscoverySummary.connectorSummary.blackListedConnectors', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetDiscoverySummary.connectorSummary.shutdownConnectors', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetDiscoverySummary.connectorSummary.unhealthyConnectors', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetDiscoverySummary.connectorSummary.totalConnectors', props);
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
    const resource = new cr.AwsCustomResource(this, 'GetDiscoverySummary.connectorSummary.unknownConnectors', props);
    return resource.getResponseField('connectorSummary.unknownConnectors') as unknown as number;
  }

}

export class DiscoveryListConfigurations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DiscoveryListConfigurationsRequest) {
    super(scope, id);
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
          configurationType: this.input.configurationType,
          filters: this.input.filters,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
          orderBy: this.input.orderBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListConfigurations.configurations', props);
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
          configurationType: this.input.configurationType,
          filters: this.input.filters,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
          orderBy: this.input.orderBy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListConfigurations.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DiscoveryListServerNeighbors extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DiscoveryListServerNeighborsRequest) {
    super(scope, id);
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
          configurationId: this.input.configurationId,
          portInformationNeeded: this.input.portInformationNeeded,
          neighborConfigurationIds: this.input.neighborConfigurationIds,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListServerNeighbors.neighbors', props);
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
          configurationId: this.input.configurationId,
          portInformationNeeded: this.input.portInformationNeeded,
          neighborConfigurationIds: this.input.neighborConfigurationIds,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListServerNeighbors.nextToken', props);
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
          configurationId: this.input.configurationId,
          portInformationNeeded: this.input.portInformationNeeded,
          neighborConfigurationIds: this.input.neighborConfigurationIds,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListServerNeighbors.knownDependencyCount', props);
    return resource.getResponseField('knownDependencyCount') as unknown as number;
  }

}

export class DiscoveryStartContinuousExport extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'StartContinuousExport.exportId', props);
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
    const resource = new cr.AwsCustomResource(this, 'StartContinuousExport.s3Bucket', props);
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
    const resource = new cr.AwsCustomResource(this, 'StartContinuousExport.startTime', props);
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
    const resource = new cr.AwsCustomResource(this, 'StartContinuousExport.dataSource', props);
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
    const resource = new cr.AwsCustomResource(this, 'StartContinuousExport.schemaStorageConfig', props);
    return resource.getResponseField('schemaStorageConfig') as unknown as Record<string, string>;
  }

}

export class DiscoveryStartDataCollectionByAgentIds extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DiscoveryStartDataCollectionByAgentIdsRequest) {
    super(scope, id);
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
          agentIds: this.input.agentIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDataCollectionByAgentIds.agentsConfigurationStatus', props);
    return resource.getResponseField('agentsConfigurationStatus') as unknown as shapes.DiscoveryAgentConfigurationStatus[];
  }

}

export class DiscoveryStartExportTask extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DiscoveryStartExportTaskRequest) {
    super(scope, id);
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
          exportDataFormat: this.input.exportDataFormat,
          filters: this.input.filters,
          startTime: this.input.startTime,
          endTime: this.input.endTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartExportTask.exportId', props);
    return resource.getResponseField('exportId') as unknown as string;
  }

}

export class DiscoveryStartImportTask extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DiscoveryStartImportTaskRequest) {
    super(scope, id);
  }

  public get task(): DiscoveryStartImportTaskTask {
    return new DiscoveryStartImportTaskTask(this, 'Task', this.__resources, this.input);
  }

}

export class DiscoveryStartImportTaskTask extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DiscoveryStartImportTaskRequest) {
    super(scope, id);
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
          clientRequestToken: this.input.clientRequestToken,
          name: this.input.name,
          importUrl: this.input.importUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartImportTask.task.importTaskId', props);
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
          clientRequestToken: this.input.clientRequestToken,
          name: this.input.name,
          importUrl: this.input.importUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartImportTask.task.clientRequestToken', props);
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
          clientRequestToken: this.input.clientRequestToken,
          name: this.input.name,
          importUrl: this.input.importUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartImportTask.task.name', props);
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
          clientRequestToken: this.input.clientRequestToken,
          name: this.input.name,
          importUrl: this.input.importUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartImportTask.task.importUrl', props);
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
          clientRequestToken: this.input.clientRequestToken,
          name: this.input.name,
          importUrl: this.input.importUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartImportTask.task.status', props);
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
          clientRequestToken: this.input.clientRequestToken,
          name: this.input.name,
          importUrl: this.input.importUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartImportTask.task.importRequestTime', props);
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
          clientRequestToken: this.input.clientRequestToken,
          name: this.input.name,
          importUrl: this.input.importUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartImportTask.task.importCompletionTime', props);
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
          clientRequestToken: this.input.clientRequestToken,
          name: this.input.name,
          importUrl: this.input.importUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartImportTask.task.importDeletedTime', props);
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
          clientRequestToken: this.input.clientRequestToken,
          name: this.input.name,
          importUrl: this.input.importUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartImportTask.task.serverImportSuccess', props);
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
          clientRequestToken: this.input.clientRequestToken,
          name: this.input.name,
          importUrl: this.input.importUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartImportTask.task.serverImportFailure', props);
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
          clientRequestToken: this.input.clientRequestToken,
          name: this.input.name,
          importUrl: this.input.importUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartImportTask.task.applicationImportSuccess', props);
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
          clientRequestToken: this.input.clientRequestToken,
          name: this.input.name,
          importUrl: this.input.importUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartImportTask.task.applicationImportFailure', props);
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
          clientRequestToken: this.input.clientRequestToken,
          name: this.input.name,
          importUrl: this.input.importUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartImportTask.task.errorsAndFailedEntriesZip', props);
    return resource.getResponseField('task.errorsAndFailedEntriesZip') as unknown as string;
  }

}

export class DiscoveryStopContinuousExport extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DiscoveryStopContinuousExportRequest) {
    super(scope, id);
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
          exportId: this.input.exportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopContinuousExport.startTime', props);
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
          exportId: this.input.exportId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopContinuousExport.stopTime', props);
    return resource.getResponseField('stopTime') as unknown as string;
  }

}

export class DiscoveryStopDataCollectionByAgentIds extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DiscoveryStopDataCollectionByAgentIdsRequest) {
    super(scope, id);
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
          agentIds: this.input.agentIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDataCollectionByAgentIds.agentsConfigurationStatus', props);
    return resource.getResponseField('agentsConfigurationStatus') as unknown as shapes.DiscoveryAgentConfigurationStatus[];
  }

}

