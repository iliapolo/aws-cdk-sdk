import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class MarketplaceCatalogClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public cancelChangeSet(input: shapes.MarketplaceCatalogCancelChangeSetRequest): MarketplaceCatalogResponsesCancelChangeSet {
    return new MarketplaceCatalogResponsesCancelChangeSet(this, this.__resources, input);
  }

  public describeChangeSet(input: shapes.MarketplaceCatalogDescribeChangeSetRequest): MarketplaceCatalogResponsesDescribeChangeSet {
    return new MarketplaceCatalogResponsesDescribeChangeSet(this, this.__resources, input);
  }

  public describeEntity(input: shapes.MarketplaceCatalogDescribeEntityRequest): MarketplaceCatalogResponsesDescribeEntity {
    return new MarketplaceCatalogResponsesDescribeEntity(this, this.__resources, input);
  }

  public listChangeSets(input: shapes.MarketplaceCatalogListChangeSetsRequest): MarketplaceCatalogResponsesListChangeSets {
    return new MarketplaceCatalogResponsesListChangeSets(this, this.__resources, input);
  }

  public listEntities(input: shapes.MarketplaceCatalogListEntitiesRequest): MarketplaceCatalogResponsesListEntities {
    return new MarketplaceCatalogResponsesListEntities(this, this.__resources, input);
  }

  public startChangeSet(input: shapes.MarketplaceCatalogStartChangeSetRequest): MarketplaceCatalogResponsesStartChangeSet {
    return new MarketplaceCatalogResponsesStartChangeSet(this, this.__resources, input);
  }

}

export class MarketplaceCatalogResponsesCancelChangeSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MarketplaceCatalogCancelChangeSetRequest) {
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
          Catalog: this.__input.catalog,
          ChangeSetId: this.__input.changeSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelChangeSet.ChangeSetId', props);
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
          Catalog: this.__input.catalog,
          ChangeSetId: this.__input.changeSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelChangeSet.ChangeSetArn', props);
    return resource.getResponseField('ChangeSetArn') as unknown as string;
  }

}

export class MarketplaceCatalogResponsesDescribeChangeSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MarketplaceCatalogDescribeChangeSetRequest) {
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
          Catalog: this.__input.catalog,
          ChangeSetId: this.__input.changeSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChangeSet.ChangeSetId', props);
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
          Catalog: this.__input.catalog,
          ChangeSetId: this.__input.changeSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChangeSet.ChangeSetArn', props);
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
          Catalog: this.__input.catalog,
          ChangeSetId: this.__input.changeSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChangeSet.ChangeSetName', props);
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
          Catalog: this.__input.catalog,
          ChangeSetId: this.__input.changeSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChangeSet.StartTime', props);
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
          Catalog: this.__input.catalog,
          ChangeSetId: this.__input.changeSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChangeSet.EndTime', props);
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
          Catalog: this.__input.catalog,
          ChangeSetId: this.__input.changeSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChangeSet.Status', props);
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
          Catalog: this.__input.catalog,
          ChangeSetId: this.__input.changeSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChangeSet.FailureCode', props);
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
          Catalog: this.__input.catalog,
          ChangeSetId: this.__input.changeSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChangeSet.FailureDescription', props);
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
          Catalog: this.__input.catalog,
          ChangeSetId: this.__input.changeSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChangeSet.ChangeSet', props);
    return resource.getResponseField('ChangeSet') as unknown as shapes.MarketplaceCatalogChangeSummary[];
  }

}

export class MarketplaceCatalogResponsesDescribeEntity {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MarketplaceCatalogDescribeEntityRequest) {
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
          Catalog: this.__input.catalog,
          EntityId: this.__input.entityId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntity.EntityType', props);
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
          Catalog: this.__input.catalog,
          EntityId: this.__input.entityId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntity.EntityIdentifier', props);
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
          Catalog: this.__input.catalog,
          EntityId: this.__input.entityId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntity.EntityArn', props);
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
          Catalog: this.__input.catalog,
          EntityId: this.__input.entityId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntity.LastModifiedDate', props);
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
          Catalog: this.__input.catalog,
          EntityId: this.__input.entityId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEntity.Details', props);
    return resource.getResponseField('Details') as unknown as string;
  }

}

export class MarketplaceCatalogResponsesListChangeSets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MarketplaceCatalogListChangeSetsRequest) {
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
          Catalog: this.__input.catalog,
          FilterList: this.__input.filterList,
          Sort: {
            SortBy: this.__input.sort?.sortBy,
            SortOrder: this.__input.sort?.sortOrder,
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChangeSets.ChangeSetSummaryList', props);
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
          Catalog: this.__input.catalog,
          FilterList: this.__input.filterList,
          Sort: {
            SortBy: this.__input.sort?.sortBy,
            SortOrder: this.__input.sort?.sortOrder,
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChangeSets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class MarketplaceCatalogResponsesListEntities {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MarketplaceCatalogListEntitiesRequest) {
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
          Catalog: this.__input.catalog,
          EntityType: this.__input.entityType,
          FilterList: this.__input.filterList,
          Sort: {
            SortBy: this.__input.sort?.sortBy,
            SortOrder: this.__input.sort?.sortOrder,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEntities.EntitySummaryList', props);
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
          Catalog: this.__input.catalog,
          EntityType: this.__input.entityType,
          FilterList: this.__input.filterList,
          Sort: {
            SortBy: this.__input.sort?.sortBy,
            SortOrder: this.__input.sort?.sortOrder,
          },
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEntities.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class MarketplaceCatalogResponsesStartChangeSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MarketplaceCatalogStartChangeSetRequest) {
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
          Catalog: this.__input.catalog,
          ChangeSet: this.__input.changeSet,
          ChangeSetName: this.__input.changeSetName,
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartChangeSet.ChangeSetId', props);
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
          Catalog: this.__input.catalog,
          ChangeSet: this.__input.changeSet,
          ChangeSetName: this.__input.changeSetName,
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartChangeSet.ChangeSetArn', props);
    return resource.getResponseField('ChangeSetArn') as unknown as string;
  }

}

