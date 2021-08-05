import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class MobileClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createProject(input: shapes.MobileCreateProjectRequest): MobileResponsesCreateProject {
    return new MobileResponsesCreateProject(this, this.__resources, input);
  }

  public deleteProject(input: shapes.MobileDeleteProjectRequest): MobileResponsesDeleteProject {
    return new MobileResponsesDeleteProject(this, this.__resources, input);
  }

  public describeBundle(input: shapes.MobileDescribeBundleRequest): MobileResponsesDescribeBundle {
    return new MobileResponsesDescribeBundle(this, this.__resources, input);
  }

  public describeProject(input: shapes.MobileDescribeProjectRequest): MobileResponsesDescribeProject {
    return new MobileResponsesDescribeProject(this, this.__resources, input);
  }

  public exportBundle(input: shapes.MobileExportBundleRequest): MobileResponsesExportBundle {
    return new MobileResponsesExportBundle(this, this.__resources, input);
  }

  public exportProject(input: shapes.MobileExportProjectRequest): MobileResponsesExportProject {
    return new MobileResponsesExportProject(this, this.__resources, input);
  }

  public listBundles(input: shapes.MobileListBundlesRequest): MobileResponsesListBundles {
    return new MobileResponsesListBundles(this, this.__resources, input);
  }

  public listProjects(input: shapes.MobileListProjectsRequest): MobileResponsesListProjects {
    return new MobileResponsesListProjects(this, this.__resources, input);
  }

  public updateProject(input: shapes.MobileUpdateProjectRequest): MobileResponsesUpdateProject {
    return new MobileResponsesUpdateProject(this, this.__resources, input);
  }

}

export class MobileResponsesCreateProject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MobileCreateProjectRequest) {
  }

  public get details(): MobileResponsesCreateProjectDetails {
    return new MobileResponsesCreateProjectDetails(this.__scope, this.__resources, this.__input);
  }

}

export class MobileResponsesCreateProjectDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MobileCreateProjectRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProject',
        service: 'Mobile',
        physicalResourceId: cr.PhysicalResourceId.of('Mobile.CreateProject.details.name'),
        outputPath: 'details.name',
        parameters: {
          name: this.__input.name,
          region: this.__input.region,
          contents: {
          },
          snapshotId: this.__input.snapshotId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProject.details.name', props);
    return resource.getResponseField('details.name') as unknown as string;
  }

  public get projectId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProject',
        service: 'Mobile',
        physicalResourceId: cr.PhysicalResourceId.of('Mobile.CreateProject.details.projectId'),
        outputPath: 'details.projectId',
        parameters: {
          name: this.__input.name,
          region: this.__input.region,
          contents: {
          },
          snapshotId: this.__input.snapshotId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProject.details.projectId', props);
    return resource.getResponseField('details.projectId') as unknown as string;
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProject',
        service: 'Mobile',
        physicalResourceId: cr.PhysicalResourceId.of('Mobile.CreateProject.details.region'),
        outputPath: 'details.region',
        parameters: {
          name: this.__input.name,
          region: this.__input.region,
          contents: {
          },
          snapshotId: this.__input.snapshotId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProject.details.region', props);
    return resource.getResponseField('details.region') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProject',
        service: 'Mobile',
        physicalResourceId: cr.PhysicalResourceId.of('Mobile.CreateProject.details.state'),
        outputPath: 'details.state',
        parameters: {
          name: this.__input.name,
          region: this.__input.region,
          contents: {
          },
          snapshotId: this.__input.snapshotId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProject.details.state', props);
    return resource.getResponseField('details.state') as unknown as string;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProject',
        service: 'Mobile',
        physicalResourceId: cr.PhysicalResourceId.of('Mobile.CreateProject.details.createdDate'),
        outputPath: 'details.createdDate',
        parameters: {
          name: this.__input.name,
          region: this.__input.region,
          contents: {
          },
          snapshotId: this.__input.snapshotId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProject.details.createdDate', props);
    return resource.getResponseField('details.createdDate') as unknown as string;
  }

  public get lastUpdatedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProject',
        service: 'Mobile',
        physicalResourceId: cr.PhysicalResourceId.of('Mobile.CreateProject.details.lastUpdatedDate'),
        outputPath: 'details.lastUpdatedDate',
        parameters: {
          name: this.__input.name,
          region: this.__input.region,
          contents: {
          },
          snapshotId: this.__input.snapshotId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProject.details.lastUpdatedDate', props);
    return resource.getResponseField('details.lastUpdatedDate') as unknown as string;
  }

  public get consoleUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProject',
        service: 'Mobile',
        physicalResourceId: cr.PhysicalResourceId.of('Mobile.CreateProject.details.consoleUrl'),
        outputPath: 'details.consoleUrl',
        parameters: {
          name: this.__input.name,
          region: this.__input.region,
          contents: {
          },
          snapshotId: this.__input.snapshotId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProject.details.consoleUrl', props);
    return resource.getResponseField('details.consoleUrl') as unknown as string;
  }

  public get resources(): shapes.MobileResource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProject',
        service: 'Mobile',
        physicalResourceId: cr.PhysicalResourceId.of('Mobile.CreateProject.details.resources'),
        outputPath: 'details.resources',
        parameters: {
          name: this.__input.name,
          region: this.__input.region,
          contents: {
          },
          snapshotId: this.__input.snapshotId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProject.details.resources', props);
    return resource.getResponseField('details.resources') as unknown as shapes.MobileResource[];
  }

}

export class MobileResponsesDeleteProject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MobileDeleteProjectRequest) {
  }

  public get deletedResources(): shapes.MobileResource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteProject',
        service: 'Mobile',
        physicalResourceId: cr.PhysicalResourceId.of('Mobile.DeleteProject.deletedResources'),
        outputPath: 'deletedResources',
        parameters: {
          projectId: this.__input.projectId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteProject.deletedResources', props);
    return resource.getResponseField('deletedResources') as unknown as shapes.MobileResource[];
  }

  public get orphanedResources(): shapes.MobileResource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteProject',
        service: 'Mobile',
        physicalResourceId: cr.PhysicalResourceId.of('Mobile.DeleteProject.orphanedResources'),
        outputPath: 'orphanedResources',
        parameters: {
          projectId: this.__input.projectId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteProject.orphanedResources', props);
    return resource.getResponseField('orphanedResources') as unknown as shapes.MobileResource[];
  }

}

export class MobileResponsesDescribeBundle {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MobileDescribeBundleRequest) {
  }

  public get details(): MobileResponsesDescribeBundleDetails {
    return new MobileResponsesDescribeBundleDetails(this.__scope, this.__resources, this.__input);
  }

}

export class MobileResponsesDescribeBundleDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MobileDescribeBundleRequest) {
  }

  public get bundleId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBundle',
        service: 'Mobile',
        physicalResourceId: cr.PhysicalResourceId.of('Mobile.DescribeBundle.details.bundleId'),
        outputPath: 'details.bundleId',
        parameters: {
          bundleId: this.__input.bundleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBundle.details.bundleId', props);
    return resource.getResponseField('details.bundleId') as unknown as string;
  }

  public get title(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBundle',
        service: 'Mobile',
        physicalResourceId: cr.PhysicalResourceId.of('Mobile.DescribeBundle.details.title'),
        outputPath: 'details.title',
        parameters: {
          bundleId: this.__input.bundleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBundle.details.title', props);
    return resource.getResponseField('details.title') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBundle',
        service: 'Mobile',
        physicalResourceId: cr.PhysicalResourceId.of('Mobile.DescribeBundle.details.version'),
        outputPath: 'details.version',
        parameters: {
          bundleId: this.__input.bundleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBundle.details.version', props);
    return resource.getResponseField('details.version') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBundle',
        service: 'Mobile',
        physicalResourceId: cr.PhysicalResourceId.of('Mobile.DescribeBundle.details.description'),
        outputPath: 'details.description',
        parameters: {
          bundleId: this.__input.bundleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBundle.details.description', props);
    return resource.getResponseField('details.description') as unknown as string;
  }

  public get iconUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBundle',
        service: 'Mobile',
        physicalResourceId: cr.PhysicalResourceId.of('Mobile.DescribeBundle.details.iconUrl'),
        outputPath: 'details.iconUrl',
        parameters: {
          bundleId: this.__input.bundleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBundle.details.iconUrl', props);
    return resource.getResponseField('details.iconUrl') as unknown as string;
  }

  public get availablePlatforms(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBundle',
        service: 'Mobile',
        physicalResourceId: cr.PhysicalResourceId.of('Mobile.DescribeBundle.details.availablePlatforms'),
        outputPath: 'details.availablePlatforms',
        parameters: {
          bundleId: this.__input.bundleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBundle.details.availablePlatforms', props);
    return resource.getResponseField('details.availablePlatforms') as unknown as string[];
  }

}

export class MobileResponsesDescribeProject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MobileDescribeProjectRequest) {
  }

  public get details(): MobileResponsesDescribeProjectDetails {
    return new MobileResponsesDescribeProjectDetails(this.__scope, this.__resources, this.__input);
  }

}

export class MobileResponsesDescribeProjectDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MobileDescribeProjectRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'Mobile',
        physicalResourceId: cr.PhysicalResourceId.of('Mobile.DescribeProject.details.name'),
        outputPath: 'details.name',
        parameters: {
          projectId: this.__input.projectId,
          syncFromResources: this.__input.syncFromResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProject.details.name', props);
    return resource.getResponseField('details.name') as unknown as string;
  }

  public get projectId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'Mobile',
        physicalResourceId: cr.PhysicalResourceId.of('Mobile.DescribeProject.details.projectId'),
        outputPath: 'details.projectId',
        parameters: {
          projectId: this.__input.projectId,
          syncFromResources: this.__input.syncFromResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProject.details.projectId', props);
    return resource.getResponseField('details.projectId') as unknown as string;
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'Mobile',
        physicalResourceId: cr.PhysicalResourceId.of('Mobile.DescribeProject.details.region'),
        outputPath: 'details.region',
        parameters: {
          projectId: this.__input.projectId,
          syncFromResources: this.__input.syncFromResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProject.details.region', props);
    return resource.getResponseField('details.region') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'Mobile',
        physicalResourceId: cr.PhysicalResourceId.of('Mobile.DescribeProject.details.state'),
        outputPath: 'details.state',
        parameters: {
          projectId: this.__input.projectId,
          syncFromResources: this.__input.syncFromResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProject.details.state', props);
    return resource.getResponseField('details.state') as unknown as string;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'Mobile',
        physicalResourceId: cr.PhysicalResourceId.of('Mobile.DescribeProject.details.createdDate'),
        outputPath: 'details.createdDate',
        parameters: {
          projectId: this.__input.projectId,
          syncFromResources: this.__input.syncFromResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProject.details.createdDate', props);
    return resource.getResponseField('details.createdDate') as unknown as string;
  }

  public get lastUpdatedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'Mobile',
        physicalResourceId: cr.PhysicalResourceId.of('Mobile.DescribeProject.details.lastUpdatedDate'),
        outputPath: 'details.lastUpdatedDate',
        parameters: {
          projectId: this.__input.projectId,
          syncFromResources: this.__input.syncFromResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProject.details.lastUpdatedDate', props);
    return resource.getResponseField('details.lastUpdatedDate') as unknown as string;
  }

  public get consoleUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'Mobile',
        physicalResourceId: cr.PhysicalResourceId.of('Mobile.DescribeProject.details.consoleUrl'),
        outputPath: 'details.consoleUrl',
        parameters: {
          projectId: this.__input.projectId,
          syncFromResources: this.__input.syncFromResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProject.details.consoleUrl', props);
    return resource.getResponseField('details.consoleUrl') as unknown as string;
  }

  public get resources(): shapes.MobileResource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'Mobile',
        physicalResourceId: cr.PhysicalResourceId.of('Mobile.DescribeProject.details.resources'),
        outputPath: 'details.resources',
        parameters: {
          projectId: this.__input.projectId,
          syncFromResources: this.__input.syncFromResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProject.details.resources', props);
    return resource.getResponseField('details.resources') as unknown as shapes.MobileResource[];
  }

}

export class MobileResponsesExportBundle {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MobileExportBundleRequest) {
  }

  public get downloadUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportBundle',
        service: 'Mobile',
        physicalResourceId: cr.PhysicalResourceId.of('Mobile.ExportBundle.downloadUrl'),
        outputPath: 'downloadUrl',
        parameters: {
          bundleId: this.__input.bundleId,
          projectId: this.__input.projectId,
          platform: this.__input.platform,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportBundle.downloadUrl', props);
    return resource.getResponseField('downloadUrl') as unknown as string;
  }

}

export class MobileResponsesExportProject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MobileExportProjectRequest) {
  }

  public get downloadUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportProject',
        service: 'Mobile',
        physicalResourceId: cr.PhysicalResourceId.of('Mobile.ExportProject.downloadUrl'),
        outputPath: 'downloadUrl',
        parameters: {
          projectId: this.__input.projectId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportProject.downloadUrl', props);
    return resource.getResponseField('downloadUrl') as unknown as string;
  }

  public get shareUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportProject',
        service: 'Mobile',
        physicalResourceId: cr.PhysicalResourceId.of('Mobile.ExportProject.shareUrl'),
        outputPath: 'shareUrl',
        parameters: {
          projectId: this.__input.projectId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportProject.shareUrl', props);
    return resource.getResponseField('shareUrl') as unknown as string;
  }

  public get snapshotId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportProject',
        service: 'Mobile',
        physicalResourceId: cr.PhysicalResourceId.of('Mobile.ExportProject.snapshotId'),
        outputPath: 'snapshotId',
        parameters: {
          projectId: this.__input.projectId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportProject.snapshotId', props);
    return resource.getResponseField('snapshotId') as unknown as string;
  }

}

export class MobileResponsesListBundles {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MobileListBundlesRequest) {
  }

  public get bundleList(): shapes.MobileBundleDetails[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBundles',
        service: 'Mobile',
        physicalResourceId: cr.PhysicalResourceId.of('Mobile.ListBundles.bundleList'),
        outputPath: 'bundleList',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBundles.bundleList', props);
    return resource.getResponseField('bundleList') as unknown as shapes.MobileBundleDetails[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBundles',
        service: 'Mobile',
        physicalResourceId: cr.PhysicalResourceId.of('Mobile.ListBundles.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBundles.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class MobileResponsesListProjects {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MobileListProjectsRequest) {
  }

  public get projects(): shapes.MobileProjectSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProjects',
        service: 'Mobile',
        physicalResourceId: cr.PhysicalResourceId.of('Mobile.ListProjects.projects'),
        outputPath: 'projects',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProjects.projects', props);
    return resource.getResponseField('projects') as unknown as shapes.MobileProjectSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProjects',
        service: 'Mobile',
        physicalResourceId: cr.PhysicalResourceId.of('Mobile.ListProjects.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProjects.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class MobileResponsesUpdateProject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MobileUpdateProjectRequest) {
  }

  public get details(): MobileResponsesUpdateProjectDetails {
    return new MobileResponsesUpdateProjectDetails(this.__scope, this.__resources, this.__input);
  }

}

export class MobileResponsesUpdateProjectDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MobileUpdateProjectRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProject',
        service: 'Mobile',
        physicalResourceId: cr.PhysicalResourceId.of('Mobile.UpdateProject.details.name'),
        outputPath: 'details.name',
        parameters: {
          contents: {
          },
          projectId: this.__input.projectId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProject.details.name', props);
    return resource.getResponseField('details.name') as unknown as string;
  }

  public get projectId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProject',
        service: 'Mobile',
        physicalResourceId: cr.PhysicalResourceId.of('Mobile.UpdateProject.details.projectId'),
        outputPath: 'details.projectId',
        parameters: {
          contents: {
          },
          projectId: this.__input.projectId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProject.details.projectId', props);
    return resource.getResponseField('details.projectId') as unknown as string;
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProject',
        service: 'Mobile',
        physicalResourceId: cr.PhysicalResourceId.of('Mobile.UpdateProject.details.region'),
        outputPath: 'details.region',
        parameters: {
          contents: {
          },
          projectId: this.__input.projectId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProject.details.region', props);
    return resource.getResponseField('details.region') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProject',
        service: 'Mobile',
        physicalResourceId: cr.PhysicalResourceId.of('Mobile.UpdateProject.details.state'),
        outputPath: 'details.state',
        parameters: {
          contents: {
          },
          projectId: this.__input.projectId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProject.details.state', props);
    return resource.getResponseField('details.state') as unknown as string;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProject',
        service: 'Mobile',
        physicalResourceId: cr.PhysicalResourceId.of('Mobile.UpdateProject.details.createdDate'),
        outputPath: 'details.createdDate',
        parameters: {
          contents: {
          },
          projectId: this.__input.projectId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProject.details.createdDate', props);
    return resource.getResponseField('details.createdDate') as unknown as string;
  }

  public get lastUpdatedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProject',
        service: 'Mobile',
        physicalResourceId: cr.PhysicalResourceId.of('Mobile.UpdateProject.details.lastUpdatedDate'),
        outputPath: 'details.lastUpdatedDate',
        parameters: {
          contents: {
          },
          projectId: this.__input.projectId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProject.details.lastUpdatedDate', props);
    return resource.getResponseField('details.lastUpdatedDate') as unknown as string;
  }

  public get consoleUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProject',
        service: 'Mobile',
        physicalResourceId: cr.PhysicalResourceId.of('Mobile.UpdateProject.details.consoleUrl'),
        outputPath: 'details.consoleUrl',
        parameters: {
          contents: {
          },
          projectId: this.__input.projectId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProject.details.consoleUrl', props);
    return resource.getResponseField('details.consoleUrl') as unknown as string;
  }

  public get resources(): shapes.MobileResource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProject',
        service: 'Mobile',
        physicalResourceId: cr.PhysicalResourceId.of('Mobile.UpdateProject.details.resources'),
        outputPath: 'details.resources',
        parameters: {
          contents: {
          },
          projectId: this.__input.projectId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProject.details.resources', props);
    return resource.getResponseField('details.resources') as unknown as shapes.MobileResource[];
  }

}

