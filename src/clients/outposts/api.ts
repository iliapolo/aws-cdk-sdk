import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class OutpostsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createOutpost(input: shapes.OutpostsCreateOutpostInput): OutpostsCreateOutpost {
    return new OutpostsCreateOutpost(this, 'CreateOutpost', this.__resources, input);
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

  public fetchOutpost(input: shapes.OutpostsGetOutpostInput): OutpostsFetchOutpost {
    return new OutpostsFetchOutpost(this, 'FetchOutpost', this.__resources, input);
  }

  public fetchOutpostInstanceTypes(input: shapes.OutpostsGetOutpostInstanceTypesInput): OutpostsFetchOutpostInstanceTypes {
    return new OutpostsFetchOutpostInstanceTypes(this, 'FetchOutpostInstanceTypes', this.__resources, input);
  }

  public listOutposts(input: shapes.OutpostsListOutpostsInput): OutpostsListOutposts {
    return new OutpostsListOutposts(this, 'ListOutposts', this.__resources, input);
  }

  public listSites(input: shapes.OutpostsListSitesInput): OutpostsListSites {
    return new OutpostsListSites(this, 'ListSites', this.__resources, input);
  }

}

export class OutpostsCreateOutpost extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OutpostsCreateOutpostInput) {
    super(scope, id);
  }

  public get outpost(): OutpostsCreateOutpostOutpost {
    return new OutpostsCreateOutpostOutpost(this, 'Outpost', this.__resources, this.input);
  }

}

export class OutpostsCreateOutpostOutpost extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OutpostsCreateOutpostInput) {
    super(scope, id);
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
          Name: this.input.name,
          Description: this.input.description,
          SiteId: this.input.siteId,
          AvailabilityZone: this.input.availabilityZone,
          AvailabilityZoneId: this.input.availabilityZoneId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateOutpost.Outpost.OutpostId', props);
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
          Name: this.input.name,
          Description: this.input.description,
          SiteId: this.input.siteId,
          AvailabilityZone: this.input.availabilityZone,
          AvailabilityZoneId: this.input.availabilityZoneId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateOutpost.Outpost.OwnerId', props);
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
          Name: this.input.name,
          Description: this.input.description,
          SiteId: this.input.siteId,
          AvailabilityZone: this.input.availabilityZone,
          AvailabilityZoneId: this.input.availabilityZoneId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateOutpost.Outpost.OutpostArn', props);
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
          Name: this.input.name,
          Description: this.input.description,
          SiteId: this.input.siteId,
          AvailabilityZone: this.input.availabilityZone,
          AvailabilityZoneId: this.input.availabilityZoneId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateOutpost.Outpost.SiteId', props);
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
          Name: this.input.name,
          Description: this.input.description,
          SiteId: this.input.siteId,
          AvailabilityZone: this.input.availabilityZone,
          AvailabilityZoneId: this.input.availabilityZoneId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateOutpost.Outpost.Name', props);
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
          Name: this.input.name,
          Description: this.input.description,
          SiteId: this.input.siteId,
          AvailabilityZone: this.input.availabilityZone,
          AvailabilityZoneId: this.input.availabilityZoneId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateOutpost.Outpost.Description', props);
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
          Name: this.input.name,
          Description: this.input.description,
          SiteId: this.input.siteId,
          AvailabilityZone: this.input.availabilityZone,
          AvailabilityZoneId: this.input.availabilityZoneId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateOutpost.Outpost.LifeCycleStatus', props);
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
          Name: this.input.name,
          Description: this.input.description,
          SiteId: this.input.siteId,
          AvailabilityZone: this.input.availabilityZone,
          AvailabilityZoneId: this.input.availabilityZoneId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateOutpost.Outpost.AvailabilityZone', props);
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
          Name: this.input.name,
          Description: this.input.description,
          SiteId: this.input.siteId,
          AvailabilityZone: this.input.availabilityZone,
          AvailabilityZoneId: this.input.availabilityZoneId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateOutpost.Outpost.AvailabilityZoneId', props);
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
          Name: this.input.name,
          Description: this.input.description,
          SiteId: this.input.siteId,
          AvailabilityZone: this.input.availabilityZone,
          AvailabilityZoneId: this.input.availabilityZoneId,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateOutpost.Outpost.Tags', props);
    return resource.getResponseField('Outpost.Tags') as unknown as Record<string, string>;
  }

}

export class OutpostsFetchOutpost extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OutpostsGetOutpostInput) {
    super(scope, id);
  }

  public get outpost(): OutpostsFetchOutpostOutpost {
    return new OutpostsFetchOutpostOutpost(this, 'Outpost', this.__resources, this.input);
  }

}

export class OutpostsFetchOutpostOutpost extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OutpostsGetOutpostInput) {
    super(scope, id);
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
          OutpostId: this.input.outpostId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOutpost.Outpost.OutpostId', props);
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
          OutpostId: this.input.outpostId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOutpost.Outpost.OwnerId', props);
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
          OutpostId: this.input.outpostId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOutpost.Outpost.OutpostArn', props);
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
          OutpostId: this.input.outpostId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOutpost.Outpost.SiteId', props);
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
          OutpostId: this.input.outpostId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOutpost.Outpost.Name', props);
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
          OutpostId: this.input.outpostId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOutpost.Outpost.Description', props);
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
          OutpostId: this.input.outpostId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOutpost.Outpost.LifeCycleStatus', props);
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
          OutpostId: this.input.outpostId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOutpost.Outpost.AvailabilityZone', props);
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
          OutpostId: this.input.outpostId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOutpost.Outpost.AvailabilityZoneId', props);
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
          OutpostId: this.input.outpostId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOutpost.Outpost.Tags', props);
    return resource.getResponseField('Outpost.Tags') as unknown as Record<string, string>;
  }

}

export class OutpostsFetchOutpostInstanceTypes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OutpostsGetOutpostInstanceTypesInput) {
    super(scope, id);
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
          OutpostId: this.input.outpostId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOutpostInstanceTypes.InstanceTypes', props);
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
          OutpostId: this.input.outpostId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOutpostInstanceTypes.NextToken', props);
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
          OutpostId: this.input.outpostId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOutpostInstanceTypes.OutpostId', props);
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
          OutpostId: this.input.outpostId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOutpostInstanceTypes.OutpostArn', props);
    return resource.getResponseField('OutpostArn') as unknown as string;
  }

}

export class OutpostsListOutposts extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OutpostsListOutpostsInput) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListOutposts.Outposts', props);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListOutposts.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class OutpostsListSites extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OutpostsListSitesInput) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSites.Sites', props);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSites.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

