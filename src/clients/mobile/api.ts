import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class MobileClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createProject(input: shapes.MobileCreateProjectRequest): MobileCreateProject {
    return new MobileCreateProject(this, 'CreateProject', this.__resources, input);
  }

  public deleteProject(input: shapes.MobileDeleteProjectRequest): MobileDeleteProject {
    return new MobileDeleteProject(this, 'DeleteProject', this.__resources, input);
  }

  public describeBundle(input: shapes.MobileDescribeBundleRequest): MobileDescribeBundle {
    return new MobileDescribeBundle(this, 'DescribeBundle', this.__resources, input);
  }

  public describeProject(input: shapes.MobileDescribeProjectRequest): MobileDescribeProject {
    return new MobileDescribeProject(this, 'DescribeProject', this.__resources, input);
  }

  public exportBundle(input: shapes.MobileExportBundleRequest): MobileExportBundle {
    return new MobileExportBundle(this, 'ExportBundle', this.__resources, input);
  }

  public exportProject(input: shapes.MobileExportProjectRequest): MobileExportProject {
    return new MobileExportProject(this, 'ExportProject', this.__resources, input);
  }

  public listBundles(input: shapes.MobileListBundlesRequest): MobileListBundles {
    return new MobileListBundles(this, 'ListBundles', this.__resources, input);
  }

  public listProjects(input: shapes.MobileListProjectsRequest): MobileListProjects {
    return new MobileListProjects(this, 'ListProjects', this.__resources, input);
  }

  public updateProject(input: shapes.MobileUpdateProjectRequest): MobileUpdateProject {
    return new MobileUpdateProject(this, 'UpdateProject', this.__resources, input);
  }

}

export class MobileCreateProject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MobileCreateProjectRequest) {
    super(scope, id);
  }

  public get details(): MobileCreateProjectDetails {
    return new MobileCreateProjectDetails(this, 'Details', this.__resources, this.input);
  }

}

export class MobileCreateProjectDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MobileCreateProjectRequest) {
    super(scope, id);
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
          name: this.input.name,
          region: this.input.region,
          contents: {
          },
          snapshotId: this.input.snapshotId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProject.details.name', props);
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
          name: this.input.name,
          region: this.input.region,
          contents: {
          },
          snapshotId: this.input.snapshotId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProject.details.projectId', props);
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
          name: this.input.name,
          region: this.input.region,
          contents: {
          },
          snapshotId: this.input.snapshotId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProject.details.region', props);
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
          name: this.input.name,
          region: this.input.region,
          contents: {
          },
          snapshotId: this.input.snapshotId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProject.details.state', props);
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
          name: this.input.name,
          region: this.input.region,
          contents: {
          },
          snapshotId: this.input.snapshotId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProject.details.createdDate', props);
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
          name: this.input.name,
          region: this.input.region,
          contents: {
          },
          snapshotId: this.input.snapshotId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProject.details.lastUpdatedDate', props);
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
          name: this.input.name,
          region: this.input.region,
          contents: {
          },
          snapshotId: this.input.snapshotId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProject.details.consoleUrl', props);
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
          name: this.input.name,
          region: this.input.region,
          contents: {
          },
          snapshotId: this.input.snapshotId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProject.details.resources', props);
    return resource.getResponseField('details.resources') as unknown as shapes.MobileResource[];
  }

}

export class MobileDeleteProject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MobileDeleteProjectRequest) {
    super(scope, id);
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
          projectId: this.input.projectId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteProject.deletedResources', props);
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
          projectId: this.input.projectId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteProject.orphanedResources', props);
    return resource.getResponseField('orphanedResources') as unknown as shapes.MobileResource[];
  }

}

export class MobileDescribeBundle extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MobileDescribeBundleRequest) {
    super(scope, id);
  }

  public get details(): MobileDescribeBundleDetails {
    return new MobileDescribeBundleDetails(this, 'Details', this.__resources, this.input);
  }

}

export class MobileDescribeBundleDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MobileDescribeBundleRequest) {
    super(scope, id);
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
          bundleId: this.input.bundleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBundle.details.bundleId', props);
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
          bundleId: this.input.bundleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBundle.details.title', props);
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
          bundleId: this.input.bundleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBundle.details.version', props);
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
          bundleId: this.input.bundleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBundle.details.description', props);
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
          bundleId: this.input.bundleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBundle.details.iconUrl', props);
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
          bundleId: this.input.bundleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBundle.details.availablePlatforms', props);
    return resource.getResponseField('details.availablePlatforms') as unknown as string[];
  }

}

export class MobileDescribeProject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MobileDescribeProjectRequest) {
    super(scope, id);
  }

  public get details(): MobileDescribeProjectDetails {
    return new MobileDescribeProjectDetails(this, 'Details', this.__resources, this.input);
  }

}

export class MobileDescribeProjectDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MobileDescribeProjectRequest) {
    super(scope, id);
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
          projectId: this.input.projectId,
          syncFromResources: this.input.syncFromResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.details.name', props);
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
          projectId: this.input.projectId,
          syncFromResources: this.input.syncFromResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.details.projectId', props);
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
          projectId: this.input.projectId,
          syncFromResources: this.input.syncFromResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.details.region', props);
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
          projectId: this.input.projectId,
          syncFromResources: this.input.syncFromResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.details.state', props);
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
          projectId: this.input.projectId,
          syncFromResources: this.input.syncFromResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.details.createdDate', props);
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
          projectId: this.input.projectId,
          syncFromResources: this.input.syncFromResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.details.lastUpdatedDate', props);
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
          projectId: this.input.projectId,
          syncFromResources: this.input.syncFromResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.details.consoleUrl', props);
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
          projectId: this.input.projectId,
          syncFromResources: this.input.syncFromResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.details.resources', props);
    return resource.getResponseField('details.resources') as unknown as shapes.MobileResource[];
  }

}

export class MobileExportBundle extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MobileExportBundleRequest) {
    super(scope, id);
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
          bundleId: this.input.bundleId,
          projectId: this.input.projectId,
          platform: this.input.platform,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExportBundle.downloadUrl', props);
    return resource.getResponseField('downloadUrl') as unknown as string;
  }

}

export class MobileExportProject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MobileExportProjectRequest) {
    super(scope, id);
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
          projectId: this.input.projectId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExportProject.downloadUrl', props);
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
          projectId: this.input.projectId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExportProject.shareUrl', props);
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
          projectId: this.input.projectId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExportProject.snapshotId', props);
    return resource.getResponseField('snapshotId') as unknown as string;
  }

}

export class MobileListBundles extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MobileListBundlesRequest) {
    super(scope, id);
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
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBundles.bundleList', props);
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
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBundles.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class MobileListProjects extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MobileListProjectsRequest) {
    super(scope, id);
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
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProjects.projects', props);
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
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProjects.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class MobileUpdateProject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MobileUpdateProjectRequest) {
    super(scope, id);
  }

  public get details(): MobileUpdateProjectDetails {
    return new MobileUpdateProjectDetails(this, 'Details', this.__resources, this.input);
  }

}

export class MobileUpdateProjectDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MobileUpdateProjectRequest) {
    super(scope, id);
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
          projectId: this.input.projectId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProject.details.name', props);
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
          projectId: this.input.projectId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProject.details.projectId', props);
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
          projectId: this.input.projectId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProject.details.region', props);
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
          projectId: this.input.projectId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProject.details.state', props);
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
          projectId: this.input.projectId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProject.details.createdDate', props);
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
          projectId: this.input.projectId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProject.details.lastUpdatedDate', props);
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
          projectId: this.input.projectId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProject.details.consoleUrl', props);
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
          projectId: this.input.projectId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProject.details.resources', props);
    return resource.getResponseField('details.resources') as unknown as shapes.MobileResource[];
  }

}

