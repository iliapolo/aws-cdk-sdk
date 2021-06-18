import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class IoT1ClickProjectsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public associateDeviceWithPlacement(input: shapes.IoT1ClickProjectsAssociateDeviceWithPlacementRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateDeviceWithPlacement',
        service: 'IoT1ClickProjects',
        physicalResourceId: cr.PhysicalResourceId.of('IoT1ClickProjects.AssociateDeviceWithPlacement'),
        parameters: {
          projectName: input.projectName,
          placementName: input.placementName,
          deviceId: input.deviceId,
          deviceTemplateName: input.deviceTemplateName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssociateDeviceWithPlacement', props);
  }

  public createPlacement(input: shapes.IoT1ClickProjectsCreatePlacementRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPlacement',
        service: 'IoT1ClickProjects',
        physicalResourceId: cr.PhysicalResourceId.of('IoT1ClickProjects.CreatePlacement'),
        parameters: {
          placementName: input.placementName,
          projectName: input.projectName,
          attributes: input.attributes,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreatePlacement', props);
  }

  public createProject(input: shapes.IoT1ClickProjectsCreateProjectRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProject',
        service: 'IoT1ClickProjects',
        physicalResourceId: cr.PhysicalResourceId.of('IoT1ClickProjects.CreateProject'),
        parameters: {
          projectName: input.projectName,
          description: input.description,
          placementTemplate: {
            defaultAttributes: input.placementTemplate?.defaultAttributes,
            deviceTemplates: input.placementTemplate?.deviceTemplates,
          },
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateProject', props);
  }

  public deletePlacement(input: shapes.IoT1ClickProjectsDeletePlacementRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePlacement',
        service: 'IoT1ClickProjects',
        physicalResourceId: cr.PhysicalResourceId.of('IoT1ClickProjects.DeletePlacement'),
        parameters: {
          placementName: input.placementName,
          projectName: input.projectName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeletePlacement', props);
  }

  public deleteProject(input: shapes.IoT1ClickProjectsDeleteProjectRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteProject',
        service: 'IoT1ClickProjects',
        physicalResourceId: cr.PhysicalResourceId.of('IoT1ClickProjects.DeleteProject'),
        parameters: {
          projectName: input.projectName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteProject', props);
  }

  public describePlacement(input: shapes.IoT1ClickProjectsDescribePlacementRequest): IoT1ClickProjectsDescribePlacement {
    return new IoT1ClickProjectsDescribePlacement(this, 'DescribePlacement', this.__resources, input);
  }

  public describeProject(input: shapes.IoT1ClickProjectsDescribeProjectRequest): IoT1ClickProjectsDescribeProject {
    return new IoT1ClickProjectsDescribeProject(this, 'DescribeProject', this.__resources, input);
  }

  public disassociateDeviceFromPlacement(input: shapes.IoT1ClickProjectsDisassociateDeviceFromPlacementRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateDeviceFromPlacement',
        service: 'IoT1ClickProjects',
        physicalResourceId: cr.PhysicalResourceId.of('IoT1ClickProjects.DisassociateDeviceFromPlacement'),
        parameters: {
          projectName: input.projectName,
          placementName: input.placementName,
          deviceTemplateName: input.deviceTemplateName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateDeviceFromPlacement', props);
  }

  public fetchDevicesInPlacement(input: shapes.IoT1ClickProjectsGetDevicesInPlacementRequest): IoT1ClickProjectsFetchDevicesInPlacement {
    return new IoT1ClickProjectsFetchDevicesInPlacement(this, 'FetchDevicesInPlacement', this.__resources, input);
  }

  public listPlacements(input: shapes.IoT1ClickProjectsListPlacementsRequest): IoT1ClickProjectsListPlacements {
    return new IoT1ClickProjectsListPlacements(this, 'ListPlacements', this.__resources, input);
  }

  public listProjects(input: shapes.IoT1ClickProjectsListProjectsRequest): IoT1ClickProjectsListProjects {
    return new IoT1ClickProjectsListProjects(this, 'ListProjects', this.__resources, input);
  }

  public listTagsForResource(input: shapes.IoT1ClickProjectsListTagsForResourceRequest): IoT1ClickProjectsListTagsForResource {
    return new IoT1ClickProjectsListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public tagResource(input: shapes.IoT1ClickProjectsTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'IoT1ClickProjects',
        physicalResourceId: cr.PhysicalResourceId.of('IoT1ClickProjects.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.IoT1ClickProjectsUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'IoT1ClickProjects',
        physicalResourceId: cr.PhysicalResourceId.of('IoT1ClickProjects.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updatePlacement(input: shapes.IoT1ClickProjectsUpdatePlacementRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePlacement',
        service: 'IoT1ClickProjects',
        physicalResourceId: cr.PhysicalResourceId.of('IoT1ClickProjects.UpdatePlacement'),
        parameters: {
          placementName: input.placementName,
          projectName: input.projectName,
          attributes: input.attributes,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdatePlacement', props);
  }

  public updateProject(input: shapes.IoT1ClickProjectsUpdateProjectRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProject',
        service: 'IoT1ClickProjects',
        physicalResourceId: cr.PhysicalResourceId.of('IoT1ClickProjects.UpdateProject'),
        parameters: {
          projectName: input.projectName,
          description: input.description,
          placementTemplate: {
            defaultAttributes: input.placementTemplate?.defaultAttributes,
            deviceTemplates: input.placementTemplate?.deviceTemplates,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateProject', props);
  }

}

export class IoT1ClickProjectsDescribePlacement extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoT1ClickProjectsDescribePlacementRequest) {
    super(scope, id);
  }

  public get placement(): IoT1ClickProjectsDescribePlacementPlacement {
    return new IoT1ClickProjectsDescribePlacementPlacement(this, 'Placement', this.__resources, this.input);
  }

}

export class IoT1ClickProjectsDescribePlacementPlacement extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoT1ClickProjectsDescribePlacementRequest) {
    super(scope, id);
  }

  public get projectName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePlacement',
        service: 'IoT1ClickProjects',
        physicalResourceId: cr.PhysicalResourceId.of('IoT1ClickProjects.DescribePlacement.placement.projectName'),
        outputPath: 'placement.projectName',
        parameters: {
          placementName: this.input.placementName,
          projectName: this.input.projectName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePlacement.placement.projectName', props);
    return resource.getResponseField('placement.projectName') as unknown as string;
  }

  public get placementName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePlacement',
        service: 'IoT1ClickProjects',
        physicalResourceId: cr.PhysicalResourceId.of('IoT1ClickProjects.DescribePlacement.placement.placementName'),
        outputPath: 'placement.placementName',
        parameters: {
          placementName: this.input.placementName,
          projectName: this.input.projectName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePlacement.placement.placementName', props);
    return resource.getResponseField('placement.placementName') as unknown as string;
  }

  public get attributes(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePlacement',
        service: 'IoT1ClickProjects',
        physicalResourceId: cr.PhysicalResourceId.of('IoT1ClickProjects.DescribePlacement.placement.attributes'),
        outputPath: 'placement.attributes',
        parameters: {
          placementName: this.input.placementName,
          projectName: this.input.projectName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePlacement.placement.attributes', props);
    return resource.getResponseField('placement.attributes') as unknown as Record<string, string>;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePlacement',
        service: 'IoT1ClickProjects',
        physicalResourceId: cr.PhysicalResourceId.of('IoT1ClickProjects.DescribePlacement.placement.createdDate'),
        outputPath: 'placement.createdDate',
        parameters: {
          placementName: this.input.placementName,
          projectName: this.input.projectName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePlacement.placement.createdDate', props);
    return resource.getResponseField('placement.createdDate') as unknown as string;
  }

  public get updatedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePlacement',
        service: 'IoT1ClickProjects',
        physicalResourceId: cr.PhysicalResourceId.of('IoT1ClickProjects.DescribePlacement.placement.updatedDate'),
        outputPath: 'placement.updatedDate',
        parameters: {
          placementName: this.input.placementName,
          projectName: this.input.projectName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePlacement.placement.updatedDate', props);
    return resource.getResponseField('placement.updatedDate') as unknown as string;
  }

}

export class IoT1ClickProjectsDescribeProject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoT1ClickProjectsDescribeProjectRequest) {
    super(scope, id);
  }

  public get project(): IoT1ClickProjectsDescribeProjectProject {
    return new IoT1ClickProjectsDescribeProjectProject(this, 'Project', this.__resources, this.input);
  }

}

export class IoT1ClickProjectsDescribeProjectProject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoT1ClickProjectsDescribeProjectRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'IoT1ClickProjects',
        physicalResourceId: cr.PhysicalResourceId.of('IoT1ClickProjects.DescribeProject.project.arn'),
        outputPath: 'project.arn',
        parameters: {
          projectName: this.input.projectName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.project.arn', props);
    return resource.getResponseField('project.arn') as unknown as string;
  }

  public get projectName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'IoT1ClickProjects',
        physicalResourceId: cr.PhysicalResourceId.of('IoT1ClickProjects.DescribeProject.project.projectName'),
        outputPath: 'project.projectName',
        parameters: {
          projectName: this.input.projectName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.project.projectName', props);
    return resource.getResponseField('project.projectName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'IoT1ClickProjects',
        physicalResourceId: cr.PhysicalResourceId.of('IoT1ClickProjects.DescribeProject.project.description'),
        outputPath: 'project.description',
        parameters: {
          projectName: this.input.projectName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.project.description', props);
    return resource.getResponseField('project.description') as unknown as string;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'IoT1ClickProjects',
        physicalResourceId: cr.PhysicalResourceId.of('IoT1ClickProjects.DescribeProject.project.createdDate'),
        outputPath: 'project.createdDate',
        parameters: {
          projectName: this.input.projectName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.project.createdDate', props);
    return resource.getResponseField('project.createdDate') as unknown as string;
  }

  public get updatedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'IoT1ClickProjects',
        physicalResourceId: cr.PhysicalResourceId.of('IoT1ClickProjects.DescribeProject.project.updatedDate'),
        outputPath: 'project.updatedDate',
        parameters: {
          projectName: this.input.projectName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.project.updatedDate', props);
    return resource.getResponseField('project.updatedDate') as unknown as string;
  }

  public get placementTemplate(): IoT1ClickProjectsDescribeProjectProjectPlacementTemplate {
    return new IoT1ClickProjectsDescribeProjectProjectPlacementTemplate(this, 'PlacementTemplate', this.__resources, this.input);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'IoT1ClickProjects',
        physicalResourceId: cr.PhysicalResourceId.of('IoT1ClickProjects.DescribeProject.project.tags'),
        outputPath: 'project.tags',
        parameters: {
          projectName: this.input.projectName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.project.tags', props);
    return resource.getResponseField('project.tags') as unknown as Record<string, string>;
  }

}

export class IoT1ClickProjectsDescribeProjectProjectPlacementTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoT1ClickProjectsDescribeProjectRequest) {
    super(scope, id);
  }

  public get defaultAttributes(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'IoT1ClickProjects',
        physicalResourceId: cr.PhysicalResourceId.of('IoT1ClickProjects.DescribeProject.project.placementTemplate.defaultAttributes'),
        outputPath: 'project.placementTemplate.defaultAttributes',
        parameters: {
          projectName: this.input.projectName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.project.placementTemplate.defaultAttributes', props);
    return resource.getResponseField('project.placementTemplate.defaultAttributes') as unknown as Record<string, string>;
  }

  public get deviceTemplates(): Record<string, shapes.IoT1ClickProjectsDeviceTemplate> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'IoT1ClickProjects',
        physicalResourceId: cr.PhysicalResourceId.of('IoT1ClickProjects.DescribeProject.project.placementTemplate.deviceTemplates'),
        outputPath: 'project.placementTemplate.deviceTemplates',
        parameters: {
          projectName: this.input.projectName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.project.placementTemplate.deviceTemplates', props);
    return resource.getResponseField('project.placementTemplate.deviceTemplates') as unknown as Record<string, shapes.IoT1ClickProjectsDeviceTemplate>;
  }

}

export class IoT1ClickProjectsFetchDevicesInPlacement extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoT1ClickProjectsGetDevicesInPlacementRequest) {
    super(scope, id);
  }

  public get devices(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevicesInPlacement',
        service: 'IoT1ClickProjects',
        physicalResourceId: cr.PhysicalResourceId.of('IoT1ClickProjects.GetDevicesInPlacement.devices'),
        outputPath: 'devices',
        parameters: {
          projectName: this.input.projectName,
          placementName: this.input.placementName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevicesInPlacement.devices', props);
    return resource.getResponseField('devices') as unknown as Record<string, string>;
  }

}

export class IoT1ClickProjectsListPlacements extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoT1ClickProjectsListPlacementsRequest) {
    super(scope, id);
  }

  public get placements(): shapes.IoT1ClickProjectsPlacementSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPlacements',
        service: 'IoT1ClickProjects',
        physicalResourceId: cr.PhysicalResourceId.of('IoT1ClickProjects.ListPlacements.placements'),
        outputPath: 'placements',
        parameters: {
          projectName: this.input.projectName,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPlacements.placements', props);
    return resource.getResponseField('placements') as unknown as shapes.IoT1ClickProjectsPlacementSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPlacements',
        service: 'IoT1ClickProjects',
        physicalResourceId: cr.PhysicalResourceId.of('IoT1ClickProjects.ListPlacements.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          projectName: this.input.projectName,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPlacements.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoT1ClickProjectsListProjects extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoT1ClickProjectsListProjectsRequest) {
    super(scope, id);
  }

  public get projects(): shapes.IoT1ClickProjectsProjectSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProjects',
        service: 'IoT1ClickProjects',
        physicalResourceId: cr.PhysicalResourceId.of('IoT1ClickProjects.ListProjects.projects'),
        outputPath: 'projects',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProjects.projects', props);
    return resource.getResponseField('projects') as unknown as shapes.IoT1ClickProjectsProjectSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProjects',
        service: 'IoT1ClickProjects',
        physicalResourceId: cr.PhysicalResourceId.of('IoT1ClickProjects.ListProjects.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProjects.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoT1ClickProjectsListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoT1ClickProjectsListTagsForResourceRequest) {
    super(scope, id);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'IoT1ClickProjects',
        physicalResourceId: cr.PhysicalResourceId.of('IoT1ClickProjects.ListTagsForResource.tags'),
        outputPath: 'tags',
        parameters: {
          resourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

