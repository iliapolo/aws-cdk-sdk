import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class TimestreamQueryClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public cancelQuery(input: shapes.TimestreamQueryCancelQueryRequest): TimestreamQueryResponsesCancelQuery {
    return new TimestreamQueryResponsesCancelQuery(this, this.__resources, input);
  }

  public describeEndpoints(): TimestreamQueryResponsesDescribeEndpoints {
    return new TimestreamQueryResponsesDescribeEndpoints(this, this.__resources);
  }

  public query(input: shapes.TimestreamQueryQueryRequest): TimestreamQueryResponsesQuery {
    return new TimestreamQueryResponsesQuery(this, this.__resources, input);
  }

}

export class TimestreamQueryResponsesCancelQuery {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TimestreamQueryCancelQueryRequest) {
  }

  public get cancellationMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelQuery',
        service: 'TimestreamQuery',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamQuery.CancelQuery.CancellationMessage'),
        outputPath: 'CancellationMessage',
        parameters: {
          QueryId: this.__input.queryId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelQuery.CancellationMessage', props);
    return resource.getResponseField('CancellationMessage') as unknown as string;
  }

}

export class TimestreamQueryResponsesDescribeEndpoints {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get endpoints(): shapes.TimestreamQueryEndpoint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEndpoints',
        service: 'TimestreamQuery',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamQuery.DescribeEndpoints.Endpoints'),
        outputPath: 'Endpoints',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEndpoints.Endpoints', props);
    return resource.getResponseField('Endpoints') as unknown as shapes.TimestreamQueryEndpoint[];
  }

}

export class TimestreamQueryResponsesQuery {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TimestreamQueryQueryRequest) {
  }

  public get queryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'query',
        service: 'TimestreamQuery',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamQuery.Query.QueryId'),
        outputPath: 'QueryId',
        parameters: {
          QueryString: this.__input.queryString,
          ClientToken: this.__input.clientToken,
          NextToken: this.__input.nextToken,
          MaxRows: this.__input.maxRows,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Query.QueryId', props);
    return resource.getResponseField('QueryId') as unknown as string;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'query',
        service: 'TimestreamQuery',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamQuery.Query.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          QueryString: this.__input.queryString,
          ClientToken: this.__input.clientToken,
          NextToken: this.__input.nextToken,
          MaxRows: this.__input.maxRows,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Query.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get rows(): shapes.TimestreamQueryRow[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'query',
        service: 'TimestreamQuery',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamQuery.Query.Rows'),
        outputPath: 'Rows',
        parameters: {
          QueryString: this.__input.queryString,
          ClientToken: this.__input.clientToken,
          NextToken: this.__input.nextToken,
          MaxRows: this.__input.maxRows,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Query.Rows', props);
    return resource.getResponseField('Rows') as unknown as shapes.TimestreamQueryRow[];
  }

  public get columnInfo(): shapes.TimestreamQueryColumnInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'query',
        service: 'TimestreamQuery',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamQuery.Query.ColumnInfo'),
        outputPath: 'ColumnInfo',
        parameters: {
          QueryString: this.__input.queryString,
          ClientToken: this.__input.clientToken,
          NextToken: this.__input.nextToken,
          MaxRows: this.__input.maxRows,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Query.ColumnInfo', props);
    return resource.getResponseField('ColumnInfo') as unknown as shapes.TimestreamQueryColumnInfo[];
  }

  public get queryStatus(): TimestreamQueryResponsesQueryQueryStatus {
    return new TimestreamQueryResponsesQueryQueryStatus(this.__scope, this.__resources, this.__input);
  }

}

export class TimestreamQueryResponsesQueryQueryStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TimestreamQueryQueryRequest) {
  }

  public get progressPercentage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'query',
        service: 'TimestreamQuery',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamQuery.Query.QueryStatus.ProgressPercentage'),
        outputPath: 'QueryStatus.ProgressPercentage',
        parameters: {
          QueryString: this.__input.queryString,
          ClientToken: this.__input.clientToken,
          NextToken: this.__input.nextToken,
          MaxRows: this.__input.maxRows,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Query.QueryStatus.ProgressPercentage', props);
    return resource.getResponseField('QueryStatus.ProgressPercentage') as unknown as number;
  }

  public get cumulativeBytesScanned(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'query',
        service: 'TimestreamQuery',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamQuery.Query.QueryStatus.CumulativeBytesScanned'),
        outputPath: 'QueryStatus.CumulativeBytesScanned',
        parameters: {
          QueryString: this.__input.queryString,
          ClientToken: this.__input.clientToken,
          NextToken: this.__input.nextToken,
          MaxRows: this.__input.maxRows,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Query.QueryStatus.CumulativeBytesScanned', props);
    return resource.getResponseField('QueryStatus.CumulativeBytesScanned') as unknown as number;
  }

  public get cumulativeBytesMetered(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'query',
        service: 'TimestreamQuery',
        physicalResourceId: cr.PhysicalResourceId.of('TimestreamQuery.Query.QueryStatus.CumulativeBytesMetered'),
        outputPath: 'QueryStatus.CumulativeBytesMetered',
        parameters: {
          QueryString: this.__input.queryString,
          ClientToken: this.__input.clientToken,
          NextToken: this.__input.nextToken,
          MaxRows: this.__input.maxRows,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Query.QueryStatus.CumulativeBytesMetered', props);
    return resource.getResponseField('QueryStatus.CumulativeBytesMetered') as unknown as number;
  }

}

