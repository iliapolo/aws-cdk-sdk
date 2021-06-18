import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class MarketplaceCatalogClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public cancelChangeSet(input: shapes.MarketplaceCatalogCancelChangeSetRequest): MarketplaceCatalogCancelChangeSet {
    return new MarketplaceCatalogCancelChangeSet(this, 'CancelChangeSet', this.__resources, input);
  }

  public describeChangeSet(input: shapes.MarketplaceCatalogDescribeChangeSetRequest): MarketplaceCatalogDescribeChangeSet {
    return new MarketplaceCatalogDescribeChangeSet(this, 'DescribeChangeSet', this.__resources, input);
  }

  public describeEntity(input: shapes.MarketplaceCatalogDescribeEntityRequest): MarketplaceCatalogDescribeEntity {
    return new MarketplaceCatalogDescribeEntity(this, 'DescribeEntity', this.__resources, input);
  }

  public listChangeSets(input: shapes.MarketplaceCatalogListChangeSetsRequest): MarketplaceCatalogListChangeSets {
    return new MarketplaceCatalogListChangeSets(this, 'ListChangeSets', this.__resources, input);
  }

  public listEntities(input: shapes.MarketplaceCatalogListEntitiesRequest): MarketplaceCatalogListEntities {
    return new MarketplaceCatalogListEntities(this, 'ListEntities', this.__resources, input);
  }

  public startChangeSet(input: shapes.MarketplaceCatalogStartChangeSetRequest): MarketplaceCatalogStartChangeSet {
    return new MarketplaceCatalogStartChangeSet(this, 'StartChangeSet', this.__resources, input);
  }

}

export class MarketplaceCatalogCancelChangeSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MarketplaceCatalogCancelChangeSetRequest) {
    super(scope, id);
  }

  public get changeSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelChangeSet',
        service: 'MarketplaceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('MarketplaceCatalog.CancelChangeSet.ChangeSetId'),
        outputPath: 'ChangeSetId',
        parameters: {
          Catalog: this.input.catalog,
          ChangeSetId: this.input.changeSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CancelChangeSet.ChangeSetId', props);
    return resource.getResponseField('ChangeSetId') as unknown as string;
  }

  public get changeSetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelChangeSet',
        service: 'MarketplaceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('MarketplaceCatalog.CancelChangeSet.ChangeSetArn'),
        outputPath: 'ChangeSetArn',
        parameters: {
          Catalog: this.input.catalog,
          ChangeSetId: this.input.changeSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CancelChangeSet.ChangeSetArn', props);
    return resource.getResponseField('ChangeSetArn') as unknown as string;
  }

}

export class MarketplaceCatalogDescribeChangeSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MarketplaceCatalogDescribeChangeSetRequest) {
    super(scope, id);
  }

  public get changeSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChangeSet',
        service: 'MarketplaceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('MarketplaceCatalog.DescribeChangeSet.ChangeSetId'),
        outputPath: 'ChangeSetId',
        parameters: {
          Catalog: this.input.catalog,
          ChangeSetId: this.input.changeSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChangeSet.ChangeSetId', props);
    return resource.getResponseField('ChangeSetId') as unknown as string;
  }

  public get changeSetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChangeSet',
        service: 'MarketplaceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('MarketplaceCatalog.DescribeChangeSet.ChangeSetArn'),
        outputPath: 'ChangeSetArn',
        parameters: {
          Catalog: this.input.catalog,
          ChangeSetId: this.input.changeSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChangeSet.ChangeSetArn', props);
    return resource.getResponseField('ChangeSetArn') as unknown as string;
  }

  public get changeSetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChangeSet',
        service: 'MarketplaceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('MarketplaceCatalog.DescribeChangeSet.ChangeSetName'),
        outputPath: 'ChangeSetName',
        parameters: {
          Catalog: this.input.catalog,
          ChangeSetId: this.input.changeSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChangeSet.ChangeSetName', props);
    return resource.getResponseField('ChangeSetName') as unknown as string;
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChangeSet',
        service: 'MarketplaceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('MarketplaceCatalog.DescribeChangeSet.StartTime'),
        outputPath: 'StartTime',
        parameters: {
          Catalog: this.input.catalog,
          ChangeSetId: this.input.changeSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChangeSet.StartTime', props);
    return resource.getResponseField('StartTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChangeSet',
        service: 'MarketplaceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('MarketplaceCatalog.DescribeChangeSet.EndTime'),
        outputPath: 'EndTime',
        parameters: {
          Catalog: this.input.catalog,
          ChangeSetId: this.input.changeSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChangeSet.EndTime', props);
    return resource.getResponseField('EndTime') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChangeSet',
        service: 'MarketplaceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('MarketplaceCatalog.DescribeChangeSet.Status'),
        outputPath: 'Status',
        parameters: {
          Catalog: this.input.catalog,
          ChangeSetId: this.input.changeSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChangeSet.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get failureCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChangeSet',
        service: 'MarketplaceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('MarketplaceCatalog.DescribeChangeSet.FailureCode'),
        outputPath: 'FailureCode',
        parameters: {
          Catalog: this.input.catalog,
          ChangeSetId: this.input.changeSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChangeSet.FailureCode', props);
    return resource.getResponseField('FailureCode') as unknown as string;
  }

  public get failureDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChangeSet',
        service: 'MarketplaceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('MarketplaceCatalog.DescribeChangeSet.FailureDescription'),
        outputPath: 'FailureDescription',
        parameters: {
          Catalog: this.input.catalog,
          ChangeSetId: this.input.changeSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChangeSet.FailureDescription', props);
    return resource.getResponseField('FailureDescription') as unknown as string;
  }

  public get changeSet(): shapes.MarketplaceCatalogChangeSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChangeSet',
        service: 'MarketplaceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('MarketplaceCatalog.DescribeChangeSet.ChangeSet'),
        outputPath: 'ChangeSet',
        parameters: {
          Catalog: this.input.catalog,
          ChangeSetId: this.input.changeSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChangeSet.ChangeSet', props);
    return resource.getResponseField('ChangeSet') as unknown as shapes.MarketplaceCatalogChangeSummary[];
  }

}

export class MarketplaceCatalogDescribeEntity extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MarketplaceCatalogDescribeEntityRequest) {
    super(scope, id);
  }

  public get entityType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntity',
        service: 'MarketplaceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('MarketplaceCatalog.DescribeEntity.EntityType'),
        outputPath: 'EntityType',
        parameters: {
          Catalog: this.input.catalog,
          EntityId: this.input.entityId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntity.EntityType', props);
    return resource.getResponseField('EntityType') as unknown as string;
  }

  public get entityIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntity',
        service: 'MarketplaceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('MarketplaceCatalog.DescribeEntity.EntityIdentifier'),
        outputPath: 'EntityIdentifier',
        parameters: {
          Catalog: this.input.catalog,
          EntityId: this.input.entityId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntity.EntityIdentifier', props);
    return resource.getResponseField('EntityIdentifier') as unknown as string;
  }

  public get entityArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntity',
        service: 'MarketplaceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('MarketplaceCatalog.DescribeEntity.EntityArn'),
        outputPath: 'EntityArn',
        parameters: {
          Catalog: this.input.catalog,
          EntityId: this.input.entityId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntity.EntityArn', props);
    return resource.getResponseField('EntityArn') as unknown as string;
  }

  public get lastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntity',
        service: 'MarketplaceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('MarketplaceCatalog.DescribeEntity.LastModifiedDate'),
        outputPath: 'LastModifiedDate',
        parameters: {
          Catalog: this.input.catalog,
          EntityId: this.input.entityId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntity.LastModifiedDate', props);
    return resource.getResponseField('LastModifiedDate') as unknown as string;
  }

  public get details(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEntity',
        service: 'MarketplaceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('MarketplaceCatalog.DescribeEntity.Details'),
        outputPath: 'Details',
        parameters: {
          Catalog: this.input.catalog,
          EntityId: this.input.entityId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEntity.Details', props);
    return resource.getResponseField('Details') as unknown as string;
  }

}

export class MarketplaceCatalogListChangeSets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MarketplaceCatalogListChangeSetsRequest) {
    super(scope, id);
  }

  public get changeSetSummaryList(): shapes.MarketplaceCatalogChangeSetSummaryListItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChangeSets',
        service: 'MarketplaceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('MarketplaceCatalog.ListChangeSets.ChangeSetSummaryList'),
        outputPath: 'ChangeSetSummaryList',
        parameters: {
          Catalog: this.input.catalog,
          FilterList: this.input.filterList,
          Sort: {
            SortBy: this.input.sort?.sortBy,
            SortOrder: this.input.sort?.sortOrder,
          },
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListChangeSets.ChangeSetSummaryList', props);
    return resource.getResponseField('ChangeSetSummaryList') as unknown as shapes.MarketplaceCatalogChangeSetSummaryListItem[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChangeSets',
        service: 'MarketplaceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('MarketplaceCatalog.ListChangeSets.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Catalog: this.input.catalog,
          FilterList: this.input.filterList,
          Sort: {
            SortBy: this.input.sort?.sortBy,
            SortOrder: this.input.sort?.sortOrder,
          },
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListChangeSets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class MarketplaceCatalogListEntities extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MarketplaceCatalogListEntitiesRequest) {
    super(scope, id);
  }

  public get entitySummaryList(): shapes.MarketplaceCatalogEntitySummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEntities',
        service: 'MarketplaceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('MarketplaceCatalog.ListEntities.EntitySummaryList'),
        outputPath: 'EntitySummaryList',
        parameters: {
          Catalog: this.input.catalog,
          EntityType: this.input.entityType,
          FilterList: this.input.filterList,
          Sort: {
            SortBy: this.input.sort?.sortBy,
            SortOrder: this.input.sort?.sortOrder,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEntities.EntitySummaryList', props);
    return resource.getResponseField('EntitySummaryList') as unknown as shapes.MarketplaceCatalogEntitySummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEntities',
        service: 'MarketplaceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('MarketplaceCatalog.ListEntities.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Catalog: this.input.catalog,
          EntityType: this.input.entityType,
          FilterList: this.input.filterList,
          Sort: {
            SortBy: this.input.sort?.sortBy,
            SortOrder: this.input.sort?.sortOrder,
          },
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEntities.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class MarketplaceCatalogStartChangeSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MarketplaceCatalogStartChangeSetRequest) {
    super(scope, id);
  }

  public get changeSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startChangeSet',
        service: 'MarketplaceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('MarketplaceCatalog.StartChangeSet.ChangeSetId'),
        outputPath: 'ChangeSetId',
        parameters: {
          Catalog: this.input.catalog,
          ChangeSet: this.input.changeSet,
          ChangeSetName: this.input.changeSetName,
          ClientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartChangeSet.ChangeSetId', props);
    return resource.getResponseField('ChangeSetId') as unknown as string;
  }

  public get changeSetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startChangeSet',
        service: 'MarketplaceCatalog',
        physicalResourceId: cr.PhysicalResourceId.of('MarketplaceCatalog.StartChangeSet.ChangeSetArn'),
        outputPath: 'ChangeSetArn',
        parameters: {
          Catalog: this.input.catalog,
          ChangeSet: this.input.changeSet,
          ChangeSetName: this.input.changeSetName,
          ClientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartChangeSet.ChangeSetArn', props);
    return resource.getResponseField('ChangeSetArn') as unknown as string;
  }

}

