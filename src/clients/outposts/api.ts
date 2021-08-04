import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class OutpostsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createOutpost(input: shapes.OutpostsCreateOutpostInput): OutpostsResponsesCreateOutpost {
    return new OutpostsResponsesCreateOutpost(this, this.__resources, input);
  }

  public deleteOutpost(input: shapes.OutpostsDeleteOutpostInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteOutpost',
        service: 'Outposts',
        physicalResourceId: cr.PhysicalResourceId.of('Outposts.DeleteOutpost'),
        parameters: {
          OutpostId: input.outpostId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteOutpost', props);
  }

  public deleteSite(input: shapes.OutpostsDeleteSiteInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSite',
        service: 'Outposts',
        physicalResourceId: cr.PhysicalResourceId.of('Outposts.DeleteSite'),
        parameters: {
          SiteId: input.siteId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteSite', props);
  }

  public fetchOutpost(input: shapes.OutpostsGetOutpostInput): OutpostsResponsesFetchOutpost {
    return new OutpostsResponsesFetchOutpost(this, this.__resources, input);
  }

  public fetchOutpostInstanceTypes(input: shapes.OutpostsGetOutpostInstanceTypesInput): OutpostsResponsesFetchOutpostInstanceTypes {
    return new OutpostsResponsesFetchOutpostInstanceTypes(this, this.__resources, input);
  }

  public listOutposts(input: shapes.OutpostsListOutpostsInput): OutpostsResponsesListOutposts {
    return new OutpostsResponsesListOutposts(this, this.__resources, input);
  }

  public listSites(input: shapes.OutpostsListSitesInput): OutpostsResponsesListSites {
    return new OutpostsResponsesListSites(this, this.__resources, input);
  }

}

export class OutpostsResponsesCreateOutpost {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OutpostsCreateOutpostInput) {
  }

  public get outpost(): OutpostsResponsesCreateOutpostOutpost {
    return new OutpostsResponsesCreateOutpostOutpost(this.__scope, this.__resources, this.__input);
  }

}

export class OutpostsResponsesCreateOutpostOutpost {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OutpostsCreateOutpostInput) {
  }

  public get outpostId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createOutpost',
        service: 'Outposts',
        physicalResourceId: cr.PhysicalResourceId.of('Outposts.CreateOutpost.Outpost.OutpostId'),
        outputPath: 'Outpost.OutpostId',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          SiteId: this.__input.siteId,
          AvailabilityZone: this.__input.availabilityZone,
          AvailabilityZoneId: this.__input.availabilityZoneId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateOutpost.Outpost.OutpostId', props);
    return resource.getResponseField('Outpost.OutpostId') as unknown as string;
  }

  public get ownerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createOutpost',
        service: 'Outposts',
        physicalResourceId: cr.PhysicalResourceId.of('Outposts.CreateOutpost.Outpost.OwnerId'),
        outputPath: 'Outpost.OwnerId',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          SiteId: this.__input.siteId,
          AvailabilityZone: this.__input.availabilityZone,
          AvailabilityZoneId: this.__input.availabilityZoneId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateOutpost.Outpost.OwnerId', props);
    return resource.getResponseField('Outpost.OwnerId') as unknown as string;
  }

  public get outpostArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createOutpost',
        service: 'Outposts',
        physicalResourceId: cr.PhysicalResourceId.of('Outposts.CreateOutpost.Outpost.OutpostArn'),
        outputPath: 'Outpost.OutpostArn',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          SiteId: this.__input.siteId,
          AvailabilityZone: this.__input.availabilityZone,
          AvailabilityZoneId: this.__input.availabilityZoneId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateOutpost.Outpost.OutpostArn', props);
    return resource.getResponseField('Outpost.OutpostArn') as unknown as string;
  }

  public get siteId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createOutpost',
        service: 'Outposts',
        physicalResourceId: cr.PhysicalResourceId.of('Outposts.CreateOutpost.Outpost.SiteId'),
        outputPath: 'Outpost.SiteId',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          SiteId: this.__input.siteId,
          AvailabilityZone: this.__input.availabilityZone,
          AvailabilityZoneId: this.__input.availabilityZoneId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateOutpost.Outpost.SiteId', props);
    return resource.getResponseField('Outpost.SiteId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createOutpost',
        service: 'Outposts',
        physicalResourceId: cr.PhysicalResourceId.of('Outposts.CreateOutpost.Outpost.Name'),
        outputPath: 'Outpost.Name',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          SiteId: this.__input.siteId,
          AvailabilityZone: this.__input.availabilityZone,
          AvailabilityZoneId: this.__input.availabilityZoneId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateOutpost.Outpost.Name', props);
    return resource.getResponseField('Outpost.Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createOutpost',
        service: 'Outposts',
        physicalResourceId: cr.PhysicalResourceId.of('Outposts.CreateOutpost.Outpost.Description'),
        outputPath: 'Outpost.Description',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          SiteId: this.__input.siteId,
          AvailabilityZone: this.__input.availabilityZone,
          AvailabilityZoneId: this.__input.availabilityZoneId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateOutpost.Outpost.Description', props);
    return resource.getResponseField('Outpost.Description') as unknown as string;
  }

  public get lifeCycleStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createOutpost',
        service: 'Outposts',
        physicalResourceId: cr.PhysicalResourceId.of('Outposts.CreateOutpost.Outpost.LifeCycleStatus'),
        outputPath: 'Outpost.LifeCycleStatus',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          SiteId: this.__input.siteId,
          AvailabilityZone: this.__input.availabilityZone,
          AvailabilityZoneId: this.__input.availabilityZoneId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateOutpost.Outpost.LifeCycleStatus', props);
    return resource.getResponseField('Outpost.LifeCycleStatus') as unknown as string;
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createOutpost',
        service: 'Outposts',
        physicalResourceId: cr.PhysicalResourceId.of('Outposts.CreateOutpost.Outpost.AvailabilityZone'),
        outputPath: 'Outpost.AvailabilityZone',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          SiteId: this.__input.siteId,
          AvailabilityZone: this.__input.availabilityZone,
          AvailabilityZoneId: this.__input.availabilityZoneId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateOutpost.Outpost.AvailabilityZone', props);
    return resource.getResponseField('Outpost.AvailabilityZone') as unknown as string;
  }

  public get availabilityZoneId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createOutpost',
        service: 'Outposts',
        physicalResourceId: cr.PhysicalResourceId.of('Outposts.CreateOutpost.Outpost.AvailabilityZoneId'),
        outputPath: 'Outpost.AvailabilityZoneId',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          SiteId: this.__input.siteId,
          AvailabilityZone: this.__input.availabilityZone,
          AvailabilityZoneId: this.__input.availabilityZoneId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateOutpost.Outpost.AvailabilityZoneId', props);
    return resource.getResponseField('Outpost.AvailabilityZoneId') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createOutpost',
        service: 'Outposts',
        physicalResourceId: cr.PhysicalResourceId.of('Outposts.CreateOutpost.Outpost.Tags'),
        outputPath: 'Outpost.Tags',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          SiteId: this.__input.siteId,
          AvailabilityZone: this.__input.availabilityZone,
          AvailabilityZoneId: this.__input.availabilityZoneId,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateOutpost.Outpost.Tags', props);
    return resource.getResponseField('Outpost.Tags') as unknown as Record<string, string>;
  }

}

export class OutpostsResponsesFetchOutpost {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OutpostsGetOutpostInput) {
  }

  public get outpost(): OutpostsResponsesFetchOutpostOutpost {
    return new OutpostsResponsesFetchOutpostOutpost(this.__scope, this.__resources, this.__input);
  }

}

export class OutpostsResponsesFetchOutpostOutpost {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OutpostsGetOutpostInput) {
  }

  public get outpostId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOutpost',
        service: 'Outposts',
        physicalResourceId: cr.PhysicalResourceId.of('Outposts.GetOutpost.Outpost.OutpostId'),
        outputPath: 'Outpost.OutpostId',
        parameters: {
          OutpostId: this.__input.outpostId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOutpost.Outpost.OutpostId', props);
    return resource.getResponseField('Outpost.OutpostId') as unknown as string;
  }

  public get ownerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOutpost',
        service: 'Outposts',
        physicalResourceId: cr.PhysicalResourceId.of('Outposts.GetOutpost.Outpost.OwnerId'),
        outputPath: 'Outpost.OwnerId',
        parameters: {
          OutpostId: this.__input.outpostId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOutpost.Outpost.OwnerId', props);
    return resource.getResponseField('Outpost.OwnerId') as unknown as string;
  }

  public get outpostArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOutpost',
        service: 'Outposts',
        physicalResourceId: cr.PhysicalResourceId.of('Outposts.GetOutpost.Outpost.OutpostArn'),
        outputPath: 'Outpost.OutpostArn',
        parameters: {
          OutpostId: this.__input.outpostId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOutpost.Outpost.OutpostArn', props);
    return resource.getResponseField('Outpost.OutpostArn') as unknown as string;
  }

  public get siteId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOutpost',
        service: 'Outposts',
        physicalResourceId: cr.PhysicalResourceId.of('Outposts.GetOutpost.Outpost.SiteId'),
        outputPath: 'Outpost.SiteId',
        parameters: {
          OutpostId: this.__input.outpostId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOutpost.Outpost.SiteId', props);
    return resource.getResponseField('Outpost.SiteId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOutpost',
        service: 'Outposts',
        physicalResourceId: cr.PhysicalResourceId.of('Outposts.GetOutpost.Outpost.Name'),
        outputPath: 'Outpost.Name',
        parameters: {
          OutpostId: this.__input.outpostId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOutpost.Outpost.Name', props);
    return resource.getResponseField('Outpost.Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOutpost',
        service: 'Outposts',
        physicalResourceId: cr.PhysicalResourceId.of('Outposts.GetOutpost.Outpost.Description'),
        outputPath: 'Outpost.Description',
        parameters: {
          OutpostId: this.__input.outpostId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOutpost.Outpost.Description', props);
    return resource.getResponseField('Outpost.Description') as unknown as string;
  }

  public get lifeCycleStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOutpost',
        service: 'Outposts',
        physicalResourceId: cr.PhysicalResourceId.of('Outposts.GetOutpost.Outpost.LifeCycleStatus'),
        outputPath: 'Outpost.LifeCycleStatus',
        parameters: {
          OutpostId: this.__input.outpostId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOutpost.Outpost.LifeCycleStatus', props);
    return resource.getResponseField('Outpost.LifeCycleStatus') as unknown as string;
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOutpost',
        service: 'Outposts',
        physicalResourceId: cr.PhysicalResourceId.of('Outposts.GetOutpost.Outpost.AvailabilityZone'),
        outputPath: 'Outpost.AvailabilityZone',
        parameters: {
          OutpostId: this.__input.outpostId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOutpost.Outpost.AvailabilityZone', props);
    return resource.getResponseField('Outpost.AvailabilityZone') as unknown as string;
  }

  public get availabilityZoneId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOutpost',
        service: 'Outposts',
        physicalResourceId: cr.PhysicalResourceId.of('Outposts.GetOutpost.Outpost.AvailabilityZoneId'),
        outputPath: 'Outpost.AvailabilityZoneId',
        parameters: {
          OutpostId: this.__input.outpostId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOutpost.Outpost.AvailabilityZoneId', props);
    return resource.getResponseField('Outpost.AvailabilityZoneId') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOutpost',
        service: 'Outposts',
        physicalResourceId: cr.PhysicalResourceId.of('Outposts.GetOutpost.Outpost.Tags'),
        outputPath: 'Outpost.Tags',
        parameters: {
          OutpostId: this.__input.outpostId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOutpost.Outpost.Tags', props);
    return resource.getResponseField('Outpost.Tags') as unknown as Record<string, string>;
  }

}

export class OutpostsResponsesFetchOutpostInstanceTypes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OutpostsGetOutpostInstanceTypesInput) {
  }

  public get instanceTypes(): shapes.OutpostsInstanceTypeItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOutpostInstanceTypes',
        service: 'Outposts',
        physicalResourceId: cr.PhysicalResourceId.of('Outposts.GetOutpostInstanceTypes.InstanceTypes'),
        outputPath: 'InstanceTypes',
        parameters: {
          OutpostId: this.__input.outpostId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOutpostInstanceTypes.InstanceTypes', props);
    return resource.getResponseField('InstanceTypes') as unknown as shapes.OutpostsInstanceTypeItem[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOutpostInstanceTypes',
        service: 'Outposts',
        physicalResourceId: cr.PhysicalResourceId.of('Outposts.GetOutpostInstanceTypes.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          OutpostId: this.__input.outpostId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOutpostInstanceTypes.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get outpostId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOutpostInstanceTypes',
        service: 'Outposts',
        physicalResourceId: cr.PhysicalResourceId.of('Outposts.GetOutpostInstanceTypes.OutpostId'),
        outputPath: 'OutpostId',
        parameters: {
          OutpostId: this.__input.outpostId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOutpostInstanceTypes.OutpostId', props);
    return resource.getResponseField('OutpostId') as unknown as string;
  }

  public get outpostArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOutpostInstanceTypes',
        service: 'Outposts',
        physicalResourceId: cr.PhysicalResourceId.of('Outposts.GetOutpostInstanceTypes.OutpostArn'),
        outputPath: 'OutpostArn',
        parameters: {
          OutpostId: this.__input.outpostId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOutpostInstanceTypes.OutpostArn', props);
    return resource.getResponseField('OutpostArn') as unknown as string;
  }

}

export class OutpostsResponsesListOutposts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OutpostsListOutpostsInput) {
  }

  public get outposts(): shapes.OutpostsOutpost[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listOutposts',
        service: 'Outposts',
        physicalResourceId: cr.PhysicalResourceId.of('Outposts.ListOutposts.Outposts'),
        outputPath: 'Outposts',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListOutposts.Outposts', props);
    return resource.getResponseField('Outposts') as unknown as shapes.OutpostsOutpost[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listOutposts',
        service: 'Outposts',
        physicalResourceId: cr.PhysicalResourceId.of('Outposts.ListOutposts.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListOutposts.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class OutpostsResponsesListSites {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OutpostsListSitesInput) {
  }

  public get sites(): shapes.OutpostsSite[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSites',
        service: 'Outposts',
        physicalResourceId: cr.PhysicalResourceId.of('Outposts.ListSites.Sites'),
        outputPath: 'Sites',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSites.Sites', props);
    return resource.getResponseField('Sites') as unknown as shapes.OutpostsSite[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSites',
        service: 'Outposts',
        physicalResourceId: cr.PhysicalResourceId.of('Outposts.ListSites.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSites.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

